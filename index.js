'use strict';
const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');
const writeFile = require('broccoli-file-creator');
const mergeTrees = require('broccoli-merge-trees');
const renderHTML = require('dom-serializer').default;
const htmlparser2 = require('htmlparser2');

module.exports = {
    name: require('./package').name,
    _nodeModulesPath: null,
    _config: null,
    _options: null,

    included(app) {
        this._super.included.apply(this, arguments);
        let current = this;
        do {
            app = current.app || app;
        } while (current.parent.parent && (current = current.parent));

        this.app = app;
        this._nodeModulesPath = path.join(this.app.project.root, 'node_modules');
        this.readConfig();
    },

    readConfig() {
        // options are from ember-cli-build.js
        this._options = this.app.options['ember-heroicons'] || {};

        // config is from environment.js
        const config = this.app.project.config();
        const appConfig = config['ember-heroicons'] || {};
        const configDefaults = {
            defaultType: this._options.defaultType ?? 'outline'
        };
        const mergedConfig = Object.assign(configDefaults, appConfig);
        this._config = mergedConfig;
    },

    treeForAddon(tree) {
        const heroIconsPath = path.join(this._nodeModulesPath, 'heroicons');

        const toMatcher = (s) => (s instanceof RegExp ? s : new RegExp(`^${s}$`));

        const solidSizeToType = {
            '16': 'micro',
            '20': 'mini',
            '24': 'solid'
        };
        const omit = (this._options.omit ?? []).map((o) => toMatcher(o));
        const include = (this._options.include ?? []).map((o) => toMatcher(o));
        const types = (this._options.types ?? []).map((o) => toMatcher(o));
        const icons = globSync(path.join(heroIconsPath, '**', '*.svg'))
            .map((f) =>
                f
                    .replace(heroIconsPath, '')
                    .split('/')
                    .filter((f) => f)
            )
            .map(([size, type, name]) => ({ size, type, name, file: path.join(heroIconsPath, size, type, name) }))
            .map((o) => ({
                ...o,
                name: o.name.replace(/[.]svg$/, ''),
                type: o.type === 'solid' ? solidSizeToType[o.size] : 'outline'
            }))
            .filter((o) => !omit.some((r) => r.test(o.name)))
            .filter((o) => !include.length || include.some((r) => r.test(o.name)))
            .filter((o) => !types.length || types.some((r) => r.test(o.type)))
            .map(({ name, file, type }) => ({
                name,
                type,
                data: this.readSVG(file)
            }));

        return this._super.treeForAddon.call(
            this,
            mergeTrees([
                tree,
                writeFile(
                    `utils/heroicons.js`,
                    `
              export const DEFAULT_TYPE = '${this._config.defaultType}';
              export const ICONS = ${JSON.stringify(icons)};
            `
                )
            ])
        );
    },

    readSVG(file) {
        const data = fs.readFileSync(file, 'utf-8');
        const doc = htmlparser2.parseDocument(data, { lowerCaseAttributeNames: false, lowerCaseTags: false });
        return { attributes: doc.children[0].attribs, inner: renderHTML(doc.children[0].children) };
    }
};

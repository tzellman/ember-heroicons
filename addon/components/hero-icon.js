import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import Component from '@glimmer/component';
import appConfig from 'ember-get-config';
import { DEFAULT_TYPE, ICONS } from '../utils/heroicons';

export default class HeroIconComponent extends Component {
    get type() {
        let type = this.args.type;
        if (!type) {
            const config = appConfig ? appConfig['ember-heroicons'] : {};
            type = config?.defaultType ?? DEFAULT_TYPE ?? 'outline';
        }
        return type;
    }

    get icon() {
        const { type } = this;
        const icon = this.args.icon;
        return ICONS.find((i) => i.type === type && i.name === icon);
    }

    get inner() {
        const svg = this.icon?.data;
        return svg?.inner ? htmlSafe(svg.inner) : undefined;
    }

    @action
    setAttributes(element) {
        const svg = this.icon?.data;
        const atts = svg?.attributes ?? {};
        Object.entries(atts)
            .filter(([k]) => !element.hasAttribute(k))
            .forEach(([k, v]) => element.setAttribute(k, v));
    }
}

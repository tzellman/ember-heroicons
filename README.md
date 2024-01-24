# ember-heroicons

[![NPM][npm-badge-img]][npm-badge-link]
[![Build Status][build-status-img]][build-status-link]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]
[![Ember Version][ember-version]][ember-version-url]
[![Download count][npm-downloads-img]][npm-badge-link]

This addon provides access to the [heroicons](https://heroicons.com/) SVG icons within your Ember applications.

## Installation

```
ember install ember-heroicons
```

## Demo

[Demo](https://tzellman.github.io/ember-heroicons/)

## Usage

The basic usage:

```handlebars
<HeroIcon @icon="check-circle" />
```

The `HeroIcon` component supports the following arguments:

-   `@icon` - the name of the icon to render
-   `@type` - one of `outline`, `solid`, `mini` or `micro`

### Custom configuration

By default, all icons for all types will be available within your application. Additionally, the default icon `type`, if not specified, will be `outline`.

If you know you will only be using a subset of icons, then you can reduce the size of your app by customizing the configuration.

You can customize defaults and available icons by adding a `ember-heroicons` configuration object to your application's `ember-cli-build.js` and `environment.js` files. As an example:

```javascript
// ember-cli-build.js
module.exports = function (defaults) {
    let app = new EmberApp(defaults, {
        // instruct ember-heroicons to include/omit specific icons/sets
        "ember-heroicons": {
            // default type to use if not specified to the HeroIcon component
            defaultType: "outline",
            // omit matching icons (array of string or RegExp)
            omit: [/chevron/, "camera"],
            // include only certain matching icons (array of string or RegExp)
            include: [/.*/],
            // include only certain types (outline, solid, mini, micro)
            types: ["outline"],
        },
    });
    return app.toTree();
};
```

```javascript
// environment.js
module.exports = function (environment) {
    let ENV = {
        // at runtime, if no type is given, you can specify which type to use
        "ember-heroicons": {
            // default type to use if not specified to the HeroIcon component
            // this takes precedence over the value provided in ember-cli-build.js
            defaultType: "mini",
        },
    };
    // ...
    return ENV;
};
```

## Compatibility

-   Ember.js v4.8 or above
-   Ember CLI v4.8 or above
-   Node.js v18 or above

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

[npm-badge-img]: https://badge.fury.io/js/ember-heroicons.svg
[npm-badge-link]: http://badge.fury.io/js/ember-heroicons
[build-status-img]: https://github.com/tzellman/ember-heroicons/workflows/CI/badge.svg?branch=master&event=push
[build-status-link]: https://github.com/tzellman/ember-heroicons/actions?query=workflow%3A%22CI%22
[npm-downloads-img]: https://img.shields.io/npm/dt/ember-heroicons.svg
[ember-observer-badge]: http://emberobserver.com/badges/ember-heroicons.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-heroicons
[ember-version]: https://img.shields.io/badge/Ember-3.12%2B-brightgreen.svg
[ember-version-url]: https://blog.emberjs.com/2019/08/16/ember-3-12-released.html

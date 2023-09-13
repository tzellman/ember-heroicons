import { modifier } from 'ember-modifier';

export default modifier((element, [atts]) => {
    Object.entries(atts ?? {})
        .filter(([k]) => !element.hasAttribute(k))
        .forEach(([k, v]) => element.setAttribute(k, v));
});

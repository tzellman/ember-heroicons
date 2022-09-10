import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { ICONS } from 'ember-heroicons/utils/icons';

export default class IndexController extends Controller {
    ICONS = ICONS;

    @tracked type;
    @tracked filter;

    queryParams = ['type'];

    get icons() {
        let icons = this.ICONS.filter((i) => i.type === this.type);
        if (this.filter) {
            const regex = new RegExp(this.filter, 'i');
            icons = icons.filter((i) => regex.test(i.name));
        }
        return icons;
    }

    get types() {
        return [
            {
                type: 'outline',
                blurb: '24x24, 1.5px stroke',
                description: 'For primary navigation and marketing sections, with an outlined appearance.'
            },
            {
                type: 'solid',
                blurb: '24x24, Solid fill',
                description: 'For primary navigation and marketing sections, with a filled appearance.'
            },
            {
                type: 'mini',
                blurb: '20x20, Solid fill',
                description: 'For smaller elements like buttons, form elements, and to support text.'
            }
        ];
    }
}

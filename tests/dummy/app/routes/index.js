import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    queryParams = {
        type: {
            as: 't'
        },
        filter: {
            as: 'f'
        }
    };

    setupController(controller) {
        super.setupController(...arguments);
        controller.type = controller.type ?? 'outline';
    }
}

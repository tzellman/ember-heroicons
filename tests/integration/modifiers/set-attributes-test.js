import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Modifier | set-attributes', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`<div {{set-attributes}}></div>`);
        assert.ok(true);
    });

    test('it renders with undefined value', async function (assert) {
        this.set('atts', undefined);
        await render(hbs`<div {{set-attributes this.atts}}></div>`);
        assert.ok(true);
    });

    test('it renders attributes', async function (assert) {
        this.set('atts', { role: 'button' });
        await render(hbs`<div {{set-attributes this.atts}}></div>`);
        assert.dom('div').hasAttribute('role', 'button');
    });
});

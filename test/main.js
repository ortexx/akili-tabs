import { assert } from 'chai';
import Akili from 'akili';
import App from './app.js';
import Tabs from '../src/tabs.js';

let app;

Akili.options.debug = false;
app = document.createElement('app');
document.body.appendChild(app);

Tabs.define();
App.define();

describe('Application initialization', () => {
  let component;

  before(() => {
    return Akili.init(document.body).then(() => {
      component = app.__akili;
    });
  });

  describe('akili-tabs.js', () => {
    let tabs, tabsLoop, simpleTitles, simplePanes, loopTitles, loopPanes;

    before(() => {
      tabs = component.child('#simple');
      tabsLoop = component.child('#loop');
    });

    it('should compile the tabs', () => {
      assert.instanceOf(tabs, Tabs, 'check simple tab');
      assert.instanceOf(tabsLoop, Tabs, 'check loop tab');
    });

    it('should render the simple tabs title', () => {
      simpleTitles = tabs.children('tab-title');

      assert.equal(simpleTitles[0].el.innerHTML, '1t', 'the first title');
      assert.equal(simpleTitles[1].el.innerHTML, '2t', 'the second title');
    });

    it('should render the simple tabs pane', () => {
      simplePanes = tabs.children('tab-pane');

      assert.equal(simplePanes[0].el.querySelector('if').innerHTML, '1p', 'the first pane');
      assert.equal(simplePanes[1].el.querySelector('if').innerHTML, '2p', 'the second pane');
    });

    it('should render the loop tabs title', () => {
      loopTitles = tabsLoop.children('tab-title');

      assert.equal(loopTitles[0].el.innerHTML, '1t', 'the first title');
      assert.equal(loopTitles[1].el.innerHTML, '2t', 'the second title');
    });

    it('should render the loop tabs pane', () => {
      loopPanes = tabsLoop.children('tab-pane');

      assert.equal(loopPanes[0].el.querySelector('if').innerHTML, '1p', 'the first pane');
      assert.equal(loopPanes[1].el.querySelector('if').innerHTML, '', 'the second pane');
    });

    it('should change active value', () => {
      component.scope.loopTabsActive = 1;

      assert.equal(loopPanes[0].el.querySelector('if').innerHTML, '', 'the first pane');
      assert.equal(loopPanes[1].el.querySelector('if').innerHTML, '2p', 'the second pane');
    });

    it('should throw an error if wrong index', () => {
      assert.throws(() => {
        component.scope.loopTabsActive = 2;
      });
    });

    it('should trigger on-tab event', () => {
      assert.equal(component.scope.loopTabsActive, 2);
    });
  });
});

import Akili from 'akili';
import For, { Loop } from 'akili/src/components/for';

/**
 * The main tabs component
 */
export default class Tabs extends Akili.Component {
  static events = ['tab'];

  static define = function() {
    Akili.component('tabs', Tabs);
    Akili.component('tab-menu', TabMenu);
    Akili.component('tab-content', TabContent);
    Akili.component('tab-title', TabTitle);
    Akili.component('tab-pane', TabPane);
  };

  constructor(...args) {
    super(...args);

    this.active = null;
  }

  changedActive(index) {
    this.setActiveTab(index);
  }

  resolved() {
    let titleLength = this.child(c => c instanceof TabMenu).getTabs().length;
    let paneLength = this.child(c => c instanceof TabContent).getTabs().length;

    if(titleLength != paneLength) {
      throw new Error(`"tab-title" and "tab-content" component counts are different: ${titleLength}/${paneLength}`);
    }

    this.setActiveTab(this.attrs.active || 0);
  }

  setActiveTab(index) {
    let tabs = this.child(c => c instanceof TabMenu).getTabs();
    let lastActive = this.active;

    if(tabs[index] === undefined) {
      throw new Error(`"tabs" component index "${index}" is out of range `);
    }

    this.scope.active = this.active = index;

    if(!tabs.length) {
      Akili.options.debug && console.warn('Not found any child component "tab-title" for "tab-menu"');
    }

    for (let i = 0, l = tabs.length; i < l; i++) {
      tabs[i].setActivity(i == index);
    }

    lastActive != this.active && this.attrs.onTab.trigger(index, { bubbles: true });
  }
}

/**
 * The header group component
 */
export class TabMenu extends For {
  static matches = '';

  constructor(...args) {
    super(...args);

    this.iterable = this.el.hasAttribute('in');
    this.childSelector = c => c instanceof TabTitle;
  }

  created() {
    this.iterable && super.created.apply(this, arguments);
  }

  compiled() {
    this.iterable && super.compiled.apply(this, arguments);
  }

  getTabs() {
    return this.children(this.childSelector, 0);
  }

  getTabIndex(tab) {
    let tabs = this.getTabs();

    for(let i = 0, l = tabs.length; i < l; i++) {
      if(tabs[i] === tab) {
        return i;
      }
    }
  }

  getTabsByIndex(i) {
    return this.getTabs()[i];
  }
}

/**
 * The body group component
 */
export class TabContent extends TabMenu {
  constructor(...args) {
    super(...args);

    this.childSelector = c => c instanceof TabPane;
  }
}

/**
 * The body group item component
 */
export class TabPane extends Loop {
  static template = `<if recreate="\${this.recreate}" is="\${this.isActiveTab}">\${this.__content}</if>`;
  static booleanAttributes = ['recreate'];

  constructor(...args) {
    super(...args);

    if(!this.el.parentNode.__akili || !(this.el.parentNode.__akili instanceof TabContent)) {
      Akili.options.debug && console.warn('Not found parent component "tab-content" for "tab-pane"');
      this.cancel();
    }

    this.scope.recreate = false;
    this.scope.isActiveTab = this.isActive = false;
  }

  compiled() {
    super.compiled.apply(this, arguments);
    this.attrs.hasOwnProperty('recreate') && this.setRecreation(this.attrs.recreate);
  }

  changedRecreate(value) {
    this.setRecreation(value)
  }

  setRecreation(value) {
    this.scope.recreate = value;
  }

  setActivity(activity) {
    this.scope.isActiveTab = this.isActive = activity;
  }
}

/**
 * The header group item component
 */
export class TabTitle extends Loop {
  constructor(...args) {
    super(...args);

    this.scope.isActiveTab = this.isActive = false;

    if(!this.el.parentNode.__akili || !(this.el.parentNode.__akili instanceof TabMenu)) {
      Akili.options.debug && console.warn('Not found parent component "tab-menu" for "tab-title"');
      this.cancel();
    }
  }

  created() {
    super.created.apply(this, arguments);
    this.tabs = this.parent(c => c instanceof Tabs);

    this.el.addEventListener('click', () => {
      this.tabs.setActiveTab(this.index);
    });
  }

  compiled() {
    super.compiled.apply(this, arguments);
    this.index = this.tabs.child(c => c instanceof TabMenu).getTabIndex(this);
  }

  setActivity(activity) {
    this.scope.isActiveTab = this.isActive = activity;
    this.tabs.child(c => c instanceof TabContent).getTabsByIndex(this.index).setActivity(activity);
  }
}

Tabs.TabMenu = TabMenu;
Tabs.TabTitle = TabTitle;
Tabs.TabContent = TabContent;
Tabs.TabPane = TabPane;


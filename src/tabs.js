import Akili from 'akili';
import For, { Loop } from 'akili/src/components/for';

/**
 * Component to work with tabs.
 * 
 * @tag tabs  
 * @attr {number} active - actual tab index
 * @message {number} tab - sent on active tab change 
 */
export default class Tabs extends Akili.Component {
  static events = ['tab'];

  static define() {
    Akili.component('tabs', this);
    Akili.component('tab-menu', this.TabMenu);
    Akili.component('tab-content', this.TabContent);
    Akili.component('tab-title', this.TabTitle);
    Akili.component('tab-pane', this.TabPane);
  }

  constructor(...args) {
    super(...args);

    this.scope.active = this.active = null;
  }

  resolved() {
    const menuChild = this.child(c => c instanceof TabMenu);
    const contentChild = this.child(c => c instanceof TabContent);

    if(!menuChild) {
      throw new Error(`Component "tabs" must have "tab-menu" component inside itself`);
    }

    if(!contentChild) {
      throw new Error(`Component "tabs" must have "tab-content" component inside itself`);
    }

    const titleLength = menuChild.getTabs().length;
    const paneLength = contentChild.getTabs().length;

    if(titleLength != paneLength) {
      throw new Error(`"tab-title" and "tab-content" components count is different: ${titleLength}/${paneLength}`);
    }

    this.attr('active', this.setActiveTab, { callOnStart: true });
  }

  setActiveTab(index = 0) {
    let tabs = this.child(c => c instanceof TabMenu).getTabs();
    let lastActive = this.active;

    if(tabs[index] === undefined) {
      throw new Error(`"tabs" component index "${index}" is out of range`);
    }

    this.scope.active = this.active = index;

    if(!tabs.length) {
      // eslint-disable-next-line no-console
      Akili.options.debug && console.warn('Not found any child component "tab-title" for "tab-menu"');
    }

    for (let i = 0, l = tabs.length; i < l; i++) {
      tabs[i].setActivity(i == index);
    }

    lastActive != this.active && this.attrs.onTab.trigger(index, { bubbles: true });
  }
}

/**
 * Component to control the titles.
 * 
 * @attr [in] @see For
 */
export class TabMenu extends For {
  static matches = '';

  constructor(...args) {
    super(...args);

    this.iterable = this.el.hasAttribute('in');
    this.childSelector = c => c instanceof TabTitle;
  }

  created() {
    if(this.iterable) {
      return super.created.apply(this, arguments);
    } 
  }

  compiled() {
    if(this.iterable) {
      return super.compiled.apply(this, arguments);
    } 
  }

  getTabs() {
    return this.children(this.childSelector, 0);
  }

  getTabIndex(tab) {
    return this.getTabs().indexOf(tab);
  }

  getTabsByIndex(i) {
    return this.getTabs()[i];
  }
}

/**
 * Component to control the body.
 * 
 * @attr [in] @see For
 */
export class TabContent extends TabMenu {
  constructor(...args) {
    super(...args);

    this.childSelector = c => c instanceof TabPane;
  }
}

/**
 * Component to work with the body items.
 * 
 * @attr @see Loop
 * @attr [recreate] @see Akili.component.If
 * @scope {boolean} isActiveTab - the current tab active or not
 */
export class TabPane extends Loop {
  static template = '<if recreate="${this.recreate}" is="${this.isActiveTab}">${this.__content}</if>';
  static booleanAttributes = ['recreate'];

  constructor(...args) {
    super(...args);

    if(!this.el.parentNode.__akili || !(this.el.parentNode.__akili instanceof TabContent)) {
      // eslint-disable-next-line no-console
      Akili.options.debug && console.warn('Not found parent component "tab-content" for "tab-pane"');
      return this.cancel();
    }

    this.scope.recreate = false;
    this.scope.isActiveTab = this.isActive = false;
  }

  compiled() {    
    this.attr('recreate', this.setRecreation);
    return super.compiled.apply(this, arguments);
  }

  setRecreation(value) {
    this.scope.recreate = value;
  }

  setActivity(activity) {
    this.scope.isActiveTab = this.isActive = activity;
  }
}

/**
 * Component to work with the title items.
 * 
 * @attr @see Loop
 * @scope {boolean} isActiveTab - the current tab active or not
 */
export class TabTitle extends Loop {
  constructor(...args) {
    super(...args);

    if(!this.el.parentNode.__akili || !(this.el.parentNode.__akili instanceof TabMenu)) {
      // eslint-disable-next-line no-console
      Akili.options.debug && console.warn('Not found parent component "tab-menu" for "tab-title"');
      return this.cancel();
    }

    this.scope.isActiveTab = this.isActive = false;
  }

  created() {
    this.tabs = this.parent(c => c instanceof Tabs);
    this.el.addEventListener('click', () => this.tabs.setActiveTab(this.index));
    return super.created.apply(this, arguments);
  }

  compiled() {   
    this.index = this.tabs.child(c => c instanceof TabMenu).getTabIndex(this);
    return super.compiled.apply(this, arguments);
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
window.AkiliTabs = Tabs;
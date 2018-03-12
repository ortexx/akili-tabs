# akili-tabs [![npm version](https://badge.fury.io/js/akili-tabs.svg)](https://badge.fury.io/js/akili-tabs)
Tabs component for [Akili framework](https://github.com/ortexx/akili).

## Example

```js
import Akili from 'akili';
import Component from 'akili/src/component';
import Tabs from 'akili-tabs';

class App extends Component {
  static define() {
    Akili.component('app', App);
  }
  
  constructor(...args) {
    super(...args);
    
    this.scope.data = [
      {
        title: 'first title',
        pane: 'first pane'
      },
      {
        title: 'second title',
        pane: 'second pane'
      }
    ];
  }
}

Tabs.define();
App.define();

document.addEventListener('DOMContentLoaded', () => {
  Akili.init();
});
```

```html
<app>
  <tabs>
    <tab-menu>
      <tab-title>${ this.data[0].title }</tab-title>
      <tab-title>${ this.data[1].title }</tab-title>
    </tab-menu>
    <tab-content>
      <tab-pane>${ this.data[0].pane }</tab-pane>
      <tab-pane>${ this.data[1].pane }</tab-pane>
    </tab-content>
  </tabs>
<app>
```

You can add items to the loop.

```html
<app>
  <tabs>
    <tab-menu in="${ this.data }">
      <tab-title>
        ${ this.loopValue.title }
      </tab-title>
    </tab-menu>
    <tab-content in="${ this.data }">
      <tab-pane>
        ${ this.loopValue.pane }
      </tab-pane>
    </tab-content>
  </tabs>
<app>
```

To change the active item use __active__ attribute.
  
```html
<tabs active="${ this.activeTab }">
  ...
</tabs>
```

To get change use __on-tab__ event.

```html
<tabs on-tab="${ this.activeTab = event.detail }">
  ...
</tabs>
```

Each __tab-title__ and __tab-pane__ component has scope value
__isActiveTab__ indicating whether this item is active or not.

```html
<app>
  <tabs>
    <tab-menu in="${ this.data }">
      <tab-title class="${ utils.class({ active: this.isActiveTab}) }">
        ${ this.loopValue.title }
      </tab-title>
    </tab-menu>
    <tab-content in="${ this.data }">
      <tab-pane class="${ utils.class({ active: this.isActiveTab}) }">
        ${ this.loopValue.pane }
      </tab-pane>
    </tab-content>
  </tabs>
<app>
```

You can add __recreate__ attribute to __tab-pane__ like 
[if](http://akilijs.com/docs/components#docs_conditional_statements) component feature.  

If you load the component as a script, you will have __window.AkiliTabs__ to get it.

 
import Component from 'akili/src/component';
import Akili from 'akili';

export default class App extends Component {
  static define() {
    Akili.component('app', App);
  }
  
  constructor(...args) {
    super(...args);

    this.scope.data = [
      {
        title: '1t',
        pane: '1p'
      },
      {
        title: '2t',
        pane: '2p'
      }
    ];
    
    this.scope.loopTabsActive = 0;
    this.scope.loopTabsCounter = 0;
    
    this.el.innerHTML = `
      <tabs id="simple">
        <tab-menu>
          <tab-title>\${ this.data[0].title }</tab-title>
          <tab-title>\${ this.data[1].title }</tab-title>
        </tab-menu>
        <tab-content>
          <tab-pane>\${ this.data[0].pane }</tab-pane>
          <tab-pane>\${ this.data[1].pane }</tab-pane>
        </tab-content>
      </tabs>
      <tabs id="loop" active="\${ this.loopTabsActive }" on-tab="\${ this.loopTabsCounter++ }">
        <tab-menu in="\${ this.data }">
          <tab-title>\${ this.loopValue.title }</tab-title>
        </tab-menu>
        <tab-content in="\${ this.data }">
          <tab-pane recreate>\${ this.loopValue.pane }</tab-pane>
        </tab-content>
      </tabs>
    `;
  }
}
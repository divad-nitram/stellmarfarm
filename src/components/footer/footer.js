import {registerEventHandlers} from '../../app.js';

class Footer extends HTMLElement {
    constructor() {
        super();
    }
  
    async connectedCallback() {
        let res = await fetch('/components/footer/footer.html');
        
        this.innerHTML = await res.text();
        
        registerEventHandlers();
    }
  }
  
  customElements.define('stellmar-footer', Footer);
import {registerEventHandlers} from '../../app.js';

class Nav extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        let res = await fetch('/components/nav/nav.html');
        
        this.innerHTML = await res.text();

        registerEventHandlers();
    }
}

customElements.define('stellmar-nav', Nav);
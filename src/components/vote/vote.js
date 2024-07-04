
class Vote extends HTMLElement {

    constructor() {
        super();
    }

    async connectedCallback() {
        let res = await fetch('/components/vote/vote.html');
        
        this.innerHTML = await res.text();
        await this.getData();
    }

    async fetchMonsters() {

    }

    async getData() {
        // Constants.
        const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJzZXJ2aWNlX3JvbGUiLAogICAgImlzcyI6ICJzdXBhYmFzZS1kZW1vIiwKICAgICJpYXQiOiAxNjQxNzY5MjAwLAogICAgImV4cCI6IDE3OTk1MzU2MDAKfQ.DaYlNEoUrrEn2Ig7tqibS-PHK5vgusbcbo7X36XVt4Q"

        const monsterVoteForm = document.getElementById('monster-vote-form');

        console.log("getting data - monster-vote.js");
    
        const url = "http://localhost:8000/rest/v1/monsters";
        try {
            const response = await fetch(url, {
                headers: {
                    "apiKey": API_KEY,
                    "Authorization": `Bearer ${API_KEY}`
                }
            });
    
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
    
            const json = await response.json();
            console.log(json);
            json.forEach(item => {
                monsterVoteForm.appendChild(this.buildMonsterOption(item));
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    buildMonsterOption(json) {
        var div = document.createElement('div');
        var p = document.createElement('p');
        p.innerText = JSON.stringify(json);
        var img = document.createElement('img');
        img.src = json.image_url;
        img.setAttribute('width', 100);
        div.appendChild(img);
        div.appendChild(p);
        return div;
    }
}

customElements.define('stellmar-vote', Vote);


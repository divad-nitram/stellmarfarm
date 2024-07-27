
class Vote extends HTMLElement {

    // Constants.
    API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJzZXJ2aWNlX3JvbGUiLAogICAgImlzcyI6ICJzdXBhYmFzZS1kZW1vIiwKICAgICJpYXQiOiAxNjQxNzY5MjAwLAogICAgImV4cCI6IDE3OTk1MzU2MDAKfQ.DaYlNEoUrrEn2Ig7tqibS-PHK5vgusbcbo7X36XVt4Q"
    BASE_URL = "http://localhost:8000"

    constructor() {
        super();
    }

    async connectedCallback() {
        let res = await fetch('/components/vote/vote.html');

        this.innerHTML = await res.text();
        await this.getData();
        this.registerHandlers();
    }

    registerHandlers() {
        var form = document.getElementById('monster-vote-form');

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.submitForm();
        })
    }

    async getData() {
        const url = `${this.BASE_URL}/rest/v1/monsters`;

        const monsterOptions = document.getElementById('monster-options');

        try {
            const response = await fetch(url, {
                headers: {
                    "apiKey": this.API_KEY,
                    "Authorization": `Bearer ${this.API_KEY}`
                }
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);

            // Add the dynamically generated monster options to the div.
            json.forEach(item => {
                monsterOptions.innerHTML += this.buildMonsterOption(item);
            });


        } catch (error) {
            console.error(error.message);
        }
    }

    // Note: nothing is escaped or sanitized, input is assumed trusted.
    buildMonsterOption(json) {
        var html = `
        <div class="w-48 lg:w-60 relative place-self-center justify-self-center">
            <input id="monster-${json.id}" name="favorite_monster" value="${json.id}" type="radio" class="peer hidden">
            <label for="monster-${json.id}"
            class="relative peer-checked:ring-4 peer-checked:ring-sf-orange-600 rounded-lg block text-sm font-medium leading-6">
            <img class="relative w-48 lg:w-60 h-72 object-cover overflow-hidden bg-sf-red-50 rounded-lg z-0"
                src="${json.image_url}"
                alt="A picture of the ${json.name} monster created by ${json.business}">
            <div class="absolute bottom-0 bg-sf-grey-900/70 text-white w-full rounded-b-lg py-2 px-4">
                <span class="block text-sf-grey-100 -mb-1 z-20">${json.business}</span>
                <div class="flex justify-between">
                <span class="block font-semibold text-xl z-20">${json.name}</span>
                </div>
            </div>
            </label>
        </div>
      `;
        return html;
    }

    async submitForm() {
        const url = `${this.BASE_URL}/rest/v1/votes`;

        // Get form data.
        const form = document.getElementById('monster-vote-form');
        const formData = new FormData(form);
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        var formJson = object
        console.log(formJson)

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "apiKey": this.API_KEY,
                    "Authorization": `Bearer ${this.API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formJson)
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            // Reset the form state.
            form.reset();
            // TODO: show a success message to the user.

        } catch (error) {
            // TODO: show an error message to the user.
            console.error(error.message);
        }
    }
}

customElements.define('stellmar-vote', Vote);


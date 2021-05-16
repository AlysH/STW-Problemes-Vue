const options = {
    data: function () {
        return {
            characters: ""
        };
    },
    methods: {
        countCharacters() {
            if (this.characters.length > 4) {
                this.characters = "";
            }
        }
    },
    template: `
    <div>
        <input v-model="characters" v-on:input="countCharacters">
    </div>`
};

const vm = Vue.createApp(options).mount('#app');
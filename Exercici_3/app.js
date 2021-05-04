const options = {
    data: function () {
        return {
            shown: true
        };
    },
    methods: {
        hide () {
            this.shown = false;
        }
    },
    template: `<div><button v-if="shown" @click="hide">Click me!</button></div>`
};

const vm = Vue.createApp(options).mount('#app');
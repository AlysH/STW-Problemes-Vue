const options = {
    data: function () {
        return {
            styleInput: ""
        };
    },
    methods: {
        keyDown() {
            this.styleInput = "background-color: red;";
        },
        keyUp() {
            this.styleInput = "";
        }
    },
    template: `<div><input v-bind:style="styleInput" v-on:keydown="keyDown" v-on:keyup="keyUp"></div>`
};

const vm = Vue.createApp(options).mount('#app');
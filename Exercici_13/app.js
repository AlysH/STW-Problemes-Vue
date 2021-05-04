const options = {
    data: function () {
        return {
            state: null
        };
    },
    template: `
    <div>
        <switch-button v-on:on="state='just turned on'" v-on:off="state='just turned off'"></switch-button>
        {{ state }}
    </div>`
};

const switchButton = {
    data: function () {
        return {
            disabledOn: false,
            disabledOff: true
        };
    },
    methods: {
        switchButtons: function () {
            this.disabledOn = (this.disabledOn)? false:true;
            this.disabledOff = (this.disabledOff)? false:true;
        }
    },
    watch: {
        disabledOn: function () {
            if (this.disabledOn) {
                this.$emit("on");
            }
        },
        disabledOff: function () {
            if (this.disabledOff) {
                this.$emit("off");
            }
        }
    },
    template: `
    <div style="border:solid; display: inline-block">
        <button v-bind:disabled="disabledOn" @click="switchButtons">ON</button>
        <button v-bind:disabled="disabledOff" @click="switchButtons">OFF</button>
    </div>
    `
};


const app = Vue.createApp(options);
app.component('switch-button', switchButton);
const vm = app.mount("#app");



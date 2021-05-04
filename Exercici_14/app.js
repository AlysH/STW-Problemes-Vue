const options = {
    data: function () {
        return {
            color: null
        };
    },
    template: `
    <div style="border:solid red; display:flex;">
        <color-selector v-on:color="color = $event"></color-selector>
        <div v-bind:style="'color:' + color">TEXT</div>
    </div>
    `
};

const colorSelection = {
    data: function () {
        return {
            R: 0,
            G: 0,
            B: 0,
            color: null
        }
    },
    created: function () {
        this.updateColor();
    },
    methods: {
        updateColor () {
            this.color = "rgb(" + this.R + ", " + this.G + ", " + this.B + ")";
            this.$emit('color', this.color);
        }
    },
    watch: {
        R: {
            handler: function () {
                this.updateColor();
            }
        },
        G: {
            handler: function () {
                this.updateColor();
            }
        },
        B: {
            handler: function () {
                this.updateColor();
            }
        }
    },
    template: `
    <div style="border:solid; display:flex;">
        <div v-bind:style="'background-color:' + color + '; width:110px; height:110px;'"></div>
        <div style="display:flex; flex-direction:column; padding:10px;">
        <div>R: <input type="range" min=0 max=255 v-model="R"> red value</div>
        <div>G: <input type="range" min=0 max=255 v-model="G"> green value</div>
        <div>B: <input type="range" min=0 max=255 v-model="B"> blue value</div>
        </div>
    </div>
    `
};


const app = Vue.createApp(options);
app.component('color-selector', colorSelection);
const vm = app.mount("#app");



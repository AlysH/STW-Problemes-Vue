const options = {
    data: function () {
        return {
            inputVal: 50,
            activeColor : "hsl(0," + this.inputVal + "%, 50%",
            shown: false
        };
    },
    mounted: function () {
        this.changeColor();
    },
    methods: {
        changeColor () {
            this.activeColor = "hsl(0," + this.inputVal + "%, 50%";
            this.isShown();
        },
        isShown() {
            if (this.inputVal >= 70) {
                this.shown = true;
            } else {
                this.shown = false;
            }
        }
    },
    watch: {
        inputVal: {
            handler: function () {
                this.changeColor();
            }
        }
    },
    template: `
    <div>
        <div v-bind:style="{ color: activeColor }">AM I RED?</div>
            <input type="range" min="0" max="100" v-model="inputVal">
        <div v-if="shown">YES!</div>
    </div>`
};

const vm = Vue.createApp(options).mount('#app');
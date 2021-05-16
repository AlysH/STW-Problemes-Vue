const options = {
    data: function () {
        return {
            state: 0,
            redShade: {
                height: '30px',
                backgroundColor: 'indianRed'
            },
            yellowShade: {
                height: '30px',
                backgroundColor: 'khaki'
            },
            greenShade: {
                height: '30px',
                backgroundColor: 'lawngreen'
            },
        };
    },
    methods: {
        switchState() {
            if (this.state == 0) {
                this.state = 1;
            } else if (this.state == 1) {
                this.state = 2;
            } else if (this.state == 2) {
                this.state = 0;
            }
        }
    },
    watch: {
        state: function () {
            if (this.state == 0) {
                this.redShade = {
                    height: '30px',
                    backgroundColor: 'indianRed'
                };
                this.yellowShade = {
                    height: '30px',
                    backgroundColor: 'khaki'
                };
                this.greenShade = {
                    height: '30px',
                    backgroundColor: 'lawngreen'
                };
            } else if (this.state == 1) {
                this.redShade = {
                    height: '30px',
                    backgroundColor: 'indianRed'
                };
                this.yellowShade = {
                    height: '30px',
                    backgroundColor: 'yellow'
                };
                this.greenShade = {
                    height: '30px',
                    backgroundColor: 'seagreen'
                };
            } else if (this.state == 2) {
                this.redShade = {
                    height: '30px',
                    backgroundColor: 'red'
                };
                this.yellowShade = {
                    height: '30px',
                    backgroundColor: 'khaki'
                };
                this.greenShade = {
                    height: '30px',
                    backgroundColor: 'seagreen'
                };
            }
        }
    },
    template: `
    <div style="display: inline-block; width:30px;">
        <div v-bind:style="redShade"></div>
        <div v-bind:style="yellowShade"></div>
        <div v-bind:style="greenShade"></div>
        <button @click="switchState">Switch</button>
    </div>
    `
};

const vm = Vue.createApp(options).mount('#app');
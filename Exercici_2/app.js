const options = {
    data: function () {
        return {
            value1: 0,
            value2: 0,
            sum: 0
        };
    },
    methods: {
        update() {
            let val1 = parseFloat(this.value1);
            let val2 = parseFloat(this.value2);

            return this.sum = ((isNaN(val1)) ? 0:val1) + ((isNaN(val2)) ? 0:val2);
        }
    },
    template: `<div><input v-model="value1"><input v-model="value2">{{ update() }}</div>`
};

const vm = Vue.createApp(options).mount('#app');
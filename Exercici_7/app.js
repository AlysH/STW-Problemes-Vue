const options = {
    data: function () {
        return {
            inputVal: 50,
            a: false,
            b: false,
            c: false,
            d: false
        };
    },
    watch: {
        a: function () {
            this.b = this.a;
        },
        b: function () {
            this.c = this.b;
        },
        c: function () {
            this.d = this.c;
        }
    },
    template: `
    <div>
        <input type="checkbox" id="check" v-model="a">
        <label for="check">{{ a }} {{ b }} {{ c }} {{ d }}</label>
    </div>`
};

const vm = Vue.createApp(options).mount('#app');
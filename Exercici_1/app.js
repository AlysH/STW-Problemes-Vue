const options = {
    data: function () {
        return {
            counter: 0
        };
    },
    template: `<div>{{ counter }}</div>`
};

const vm = Vue.createApp(options).mount('#app');

setInterval(() => vm.counter++, 100);
const options = {
    data: function () {
        return {
            person: {
                name: 'My Name',
                picture: 'data:image/png;base64,iVBORw0KGgoAAAAN'
                + 'SUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM82'
                + 'Mz1HwAFqgJP3gasfwAAAABJRU5ErkJggg==',
                email: 'me@somerandomdomain.com',
                phone: '+00 00 000 0000'
            }
        };
    },
    template: `
    <div style="display:flex;">
        <card v-bind:personal-data="person"></card>
    </div>
    `
};

const card = {
    props: ['personalData'],
    template: `
    <div class="card">
        <div>
        <img v-bind:src="personalData.picture">
        </div>
        <div><h1>{{ personalData.name }}</h1></div>
        <div>{{ personalData.email }}</div>
        <div>{{ personalData.phone }}</div>
    </div>
    `
};


const app = Vue.createApp(options);
app.component('card', card);
const vm = app.mount("#app");
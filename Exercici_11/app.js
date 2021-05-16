const options = {
    template: `
    <words-to-list words="Lorem ipsum dolor sit amet"></words-to-list>`
};

const wordsToList = {
    data: function () {
        return {
            separatedWords: this.words.split(' ')
        }
    },
    props: [
        'words'
    ],
    template: `<div>
        <ul>
            <li v-for="word in separatedWords">{{ word }}</li>
        </ul>
    </div>`
};


const app = Vue.createApp(options);
app.component('words-to-list', wordsToList);
const vm = app.mount("#app");
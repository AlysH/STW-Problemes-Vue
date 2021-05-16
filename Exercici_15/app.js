const options = {
    data:function () {
        return {
            text: "Hola"
        };
    },
    template: `
    <div>
        <magic-input v-model:myvalue="text"></magic-input>
        <input v-model="text">
        {{text}}
    </div>
    `
};

const magicInput = {
    props: {
        myvalue: String
    },
    emits: ['update:myvalue'],
    date: function () {
        return {
            changedInput: ''
        }
    },
    created: function () {
        this.changeTheInput();
    },
    methods: {
        changeTheInput () {
            this.changedInput = this.myvalue.replace(/./g,
                x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase());
        },
        emitTheInput () {
            this.$emit('update:myvalue', this.changedInput.replace(/./g,
                x => x.toUpperCase() == x ? x.toLowerCase() : x.toUpperCase()));
        }
    },
    watch: {
        changeInput: {
            handler: function() {
                this.emitTheInput();
            }
        },
        myvalue: {
            handler: function () {
                this.changeTheInput();
            }
        }
    },
    template: `
    <input
        type="text"
        :value="changedInput"
        @change="$emit('update:myvalue', $event.target.value)">
    `
};


const app = Vue.createApp(options);
app.component('magic-input', magicInput);
const vm = app.mount("#app");
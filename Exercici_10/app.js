const options = {
    data: function () {
        return {
            items: [
                { name: 'Jaime Sommers', phone: '311-555-2368' },
                { name: 'Ghostbusters', phone: '555-2368' },
                { name: 'Mr. Plow', phone: '636-555-3226' },
                { name: 'Gene Parmesan: Private Eye', phone: '555-0113' },
                { name: 'The A-Team', phone: '555-6162' }
            ]
        };
    },
    methods: {
        deleteEntry(id) {
            this.items.splice(id, 1);
        }
    },
    template: `
    <div>
        <table>
            <tr><th>Name</th><th>Phone number</th><th></th></tr>
            <tr v-for="(item, index) in items"><
                td>{{item.name}}</td>
                <td>{{item.phone}}</td>
                <td>
                    <button @click="deleteEntry(index)">Delete</button>
                </td>
            </tr>
        </table>
    </div>`
};

const vm = Vue.createApp(options).mount('#app');
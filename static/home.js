const {createApp} = Vue

createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {
            companies: [],
            loading: false,
            column_names: [],
            company: {},
        };
    },
    methods: {
        fetch() {
            this.loading = true;
            this.companies = [];
            axios
                .get("http://127.0.0.1:8000/companies-api")
                .then((response) => {
                    this.column_names = Object.keys(response.data[0])
                    this.companies = response.data;
                    this.loading = false;
                });
        },
        addRow() {
            console.log(this.company)
            this.companies.push(this.company)
            this.company = {}
            console.log(this.companies)
        }
    }
}).mount('#list-app')
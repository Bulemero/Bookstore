var myVueObject = new Vue({
    el: "#app",
    data: {

        url: "https://api.myjson.com/bins/udbm5",
        books: [],
        search: ""
    },
    created() {
        this.getData()
    },

    methods: {
        //------------------------------Fetch data -------------------------------------------------------------->
        getData() {

            fetch('https://api.myjson.com/bins/udbm5')
                .then(response => {
                    return response.json();
                }).then(data => {
                    // Work with JSON data here
                    console.log(data);
                    this.books = data.books;
                    //                this.myVueObject.books = data.books;


                }).catch(err => {
                    // Do something for an error here
                    console.log(error);
                });
        }
    },

    computed: {
        filteredBooks: function () {

            return this.books.filter((item) => item.titulo.toLowerCase().match(this.search.toLowerCase()));
        }
    },
});

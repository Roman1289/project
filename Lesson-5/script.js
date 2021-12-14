'use strict';
// Фэйк АПИ
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'http://placehold.it/250x150',//заглушка
        searchText: '',
        filteredProducts: []
    },
    methods: {
        getJson(url) {
            return fetch(url) //Метод fetch 
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        addProduct(product) {
            console.log(product.id_product);
        },

        searchFor() {
            let text = this.searchText.toLowerCase().trim();

            if (text === '') {
                this.filteredProducts = this.products;
            } else {
                this.filteredProducts = this.products.filter((el) => {
                    return el.product_name.toLowerCase().includes(text);//Метод includes() 
                });
            }
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)//подргрузка объектов в локальный массив
            .then(data => {
                for (let el of data) {
                    this.products.push(el)
                }
            });
        this.filteredProducts = this.products;

    }
});












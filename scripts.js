var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/fries.png",
        "name": "Batata frita",
        "price": 2.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/salad.png",
        "name": "Salada",
        "price": 2.79,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/cola.png",
        "name": "Coca Cola",
        "price": 0.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 0.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/water.png",
        "name": "Água",
        "price": 0.49,
        "active": false,
        "quantity": 0
    }
];

// Objeto que armazena a logica da aplicacao
const SelfServiceMachine = {

    // Guarda os dados a serem utilizados
    // Tudo que colocar aqui vai ter acesso a nossa aplicacao
    data() {
        return {
            products: window.products
        }
    },
    methods: {
        total() {
            let total = 0;

            this.products.forEach(product => {
                if (product.active) {
                    total += (product.price * product.quantity);
                }
            });

            return total.toFixed(2);
        }
    }
}
 
Vue.createApp(SelfServiceMachine).mount("#app");
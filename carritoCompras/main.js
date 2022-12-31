var app = new Vue({
    el: '.app',
    data:{
        product: 'bota',
        image: './img/1.jpg',
        desc: 'Esta bota fue usada por el mismisimo Napoleon Bonaparte',
        link: 'https://v2.vuejs.org/v2/guide/',
        outStock: false,
        details: ['80% cotton', '20% poliester', 'Gender neutral'],
        variants: [
            {
                variantId: 6543, 
                variantColor: 'green',
                variantImage: './img/1.jpg'
            },
            {
                variantId: 9875, 
                variantColor: 'blue',
                variantImage: './img/2.png'
            }
        ],
        sizes:['6','7','8','9','10'],
        cart: 0        
    },
    methods: {
        addToCart: function (){
            this.cart +=1
        },
        decreaseCart: function (){
            this.cart-=1
        },
        updateProduct: function(variantImage){
            this.image = variantImage
        }
    }
})
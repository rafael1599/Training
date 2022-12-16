var app = new Vue({
    el: '.app',
    data:{
        product: 'bota',
        image: './img/vmSocks-green-onWhite.jpg',
        desc: 'Esta bota fue usada por el mismisimo Napoleon Bonaparte',
        link: 'https://v2.vuejs.org/v2/guide/',
        outStock: true,
        details: ["80% cotton", "20% poliester", "Gender neutral"],
        variants: [
            {
                variantId: 6543, 
                variantColor: "green"
            },
            {
                variantId: 9875, 
                variantColor: "blue"
            }
        ],
        sizes:["6","7","8","9","10"]
    }
})
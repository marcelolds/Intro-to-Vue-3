const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'Here is a blue/green socks maded with carefully hands',
            url: 'https://teddylocks.com/products/yellow-rib-quarter-socks',
            inStock: false,
            inventory: 2,
            onSale: false,
            image: './assets/images/socks_blue.jpg',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            sizes: ['10', '15'],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage;
        },
        delFromCart() {
            this.cart -= 1
        }
    }
})
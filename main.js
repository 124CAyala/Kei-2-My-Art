import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import Cart from './components/Cart.js';
import Product from '/components/Products.js';


const app = createApp({
    data() {
      return {
            page: "products",
            cart: [],
            products: [
            {
              name: "Wine Glass",
              cost: "19.99",
              image: 'imgs/wineglass.jpg',
              quantity: 0
            },
            {
              name: "Wine Bottle",
              cost: "9.99",
              image: 'https://www.americasfinestlabels.com/includes/work/image_cache/4b4f4b63cc837b5f01ce2d718b0f9be2.thumb.jpg',
              quantity: 0
            },
        ]
      }
    },
    methods: {
        addItemToCart(product) {
            this.cart.push(product);
            console.log(this.cart);
          },
        navigateTo(page) {
            this.page = page;
          },
        removeItemFromCart(product) {
            this.cart.splice(this.cart.indexOf(product), 1);
          }
    }
  });

  app.component('cart', Cart)
  app.component('product', Product)
  // Mount the app to the "#app" element
  app.mount('#app')


// import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
//     createApp({
//     setup() {
//       const message = ref('Test vue!')
//       return {
//         message
//       }
//     },
//     data: () => {
//         return {
            
//           ]
//         }
//        },
//        methods: {
        
//         // addItemToCart(product) {
//         //     this.$emit('addItemToCart', product)
//         // }
//        },
//        components: {
//         Cart
//       }

//   }).mount('#app')
  
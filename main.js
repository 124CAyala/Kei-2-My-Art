import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import Cart from './components/Cart.js';
import Products from '/components/Products.js';


const app = createApp({
    data() {
      return {
            page: "products",
            cart: [],
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
        typeOfProduct(type) {
          this.page = type;
          console.log('working');
        },
        removeItemFromCart(product) {
            this.cart.splice(this.cart.indexOf(product), 1);
          }
    }
  });

  app.component('cart', Cart)
  app.component('products', Products)
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
  
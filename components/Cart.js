
export default {
    template: `
      <div>
        <h1>My Cart</h1>
        <div class="products">
          <div v-for="(product, index) in cart" :key="index">
            {{ product.name }}
            <img class="image" :src="product.image" />
            <div>{{ product.cost }}</div>
            <button @click="removeItemFromCart(product)">Remove From Cart</button>
          </div>
        </div>
      </div>
    `,
    props: ['cart'],
    methods: {
      removeItemFromCart(product) {
        this.$emit('removeItemFromCart', product);
      },
    },
  };







// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'




// const app = createApp({})

// app.component('cart', {
//     template:

// `
// <div>
//       <h1>Your Cart</h1>
//       <div class="products">
//         <div v-for="(product, index) in cart" :key="index">
//           {{ product.name }}
//           <img class="image" :src="product.image" />
//           <div>{{ product.cost }}</div>
//           <button v-on:click="removeItemFromCart(product)">Revove From Cart</button>
//         </div>
//       </div>
//     </div>
// `

// })

// export default {
//     props: [
//         "cart"
//     ],
//     methods: {
//         removeItemFromCart(product) {
//             this.$emit("removeItemFromCart", product)
//         },
//     },
// };


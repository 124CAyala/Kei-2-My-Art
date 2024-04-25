export default {
  template: `
      <div>
        <h1>My Cart</h1>
        <div class="products">
          <div v-for="(product, index) in fetchCart" :key="index">
            {{ product.name }}
            <img class="image" :src="product.image" />
            <div>{{ product.cost }}</div>
            <button @click="removeItemFromCart(product)">Remove From Cart</button>
          </div>
          <button id="checkout">Checkout</button>
        </div>
      </div>
    `,
  
  computed: {
    fetchCart() {
      return this.$store.state.cart
    },
  },
  mounted() {
    const button = document.getElementById("checkout");
    if (button) {
      console.log(document.getElementById("checkout"));
      button.addEventListener("click", this.handleCheckout);
    }
  },
  methods: {
    removeItemFromCart(product) {
      this.$emit("removeItemFromCart", product);
    },
    handleCheckout() {
      // Handle the checkout process here
      fetch('/create-checkout-session', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              items: [
                  { id: 1, quantity: 3 },
                  { id: 2, quantity: 1 }
              ]
          })
      }).then(res => {
          if (res.ok) return res.json()
          return res.json().then(json => Promise.reject(json))
      }).then(({ url }) => {
          console.log(url)
          window.location = url
      }).catch(e => {
          console.error(e.error)
      })
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

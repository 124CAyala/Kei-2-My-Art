export default {
  template: `
      <div>

      <nav>
      <div class="row d-flex justify-content-center">
        <div class="text-center col-lg-2 col-md-2 col-sm-2 col-2 p-0 mt-5">
          <a href="index.html#About" class="btn">
            <h1 class="nav-item">About</h1>
          </a>
          <div class="line mt-5 d-none d-md-flex d-lg-flex"></div>
        </div>
        <div class="text-center col-lg-2 col-md-2 col-sm-2 col-2 p-0 mt-5">
          <a href="index.html#Gallery" class="btn">
            <h1 class="nav-item">Gallery</h1>
          </a>
          <div class="line mt-5 d-none d-md-flex d-lg-flex"></div>
        </div>
        <div class="text-center col-lg-2 col-md-2 col-sm-2 col-2 mt-4">
          <img src="../imgs/logo.png" alt="Kei2MyArt" class="logo">
        </div>
        <div class="text-center col-lg-2 col-md-2 col-sm-2 col-2 p-0 mt-5">
          <a href="index.html#Shop" class="btn">
            <h1 class="nav-item">Shop</h1>
          </a>
          <div class="line mt-5 d-none d-md-flex d-lg-flex"></div>
        </div>
        <div class="text-center col-lg-2 col-md-2 col-sm-2 col-2 p-0 mt-5">
          <router-link class="btn" to="/cart">
            <span class="material-symbols-outlined cart">
              shopping_cart
            </span>
          </router-link>
          <div class="line mt-5 d-none d-md-flex d-lg-flex"></div>
        </div>
      </div>
    </nav>

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
      return this.$store.state.cart;
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
        const productsInCart = this.$store.state.cart; // Assuming 'cart' is the name of your Vuex module/state

      // Construct items array for checkout
      const items = productsInCart.map(product => ({
        id: product.id,
        quantity: product.quantity
      }));
      console.log(items);
      // Handle the checkout process here
      fetch("/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items
          // [
          //   { id: 1, quantity: 3 },
          //   { id: 2, quantity: 1 },
          // ],
        }),
      })
        .then((res) => {
          if (res.ok) return res.json();
          return res.json().then((json) => Promise.reject(json));
        })
        .then(({ url }) => {
          console.log("running");
          console.log(url);
          window.location = url;
        })
        .catch((e) => {
          console.error("err");
        });
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

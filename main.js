
import Cart from "./components/Cart.js";
import Products from "/components/Products.js";
import Customize from "./components/Customize.js";


const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    { path: '/customize', component: Customize },
  ]
});


const store = Vuex.createStore({
  state: {
    selectedProduct: null,
  },
  mutations: {
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
      console.log(state.selectedProduct);
      window.location.href = 'customize.html';
    },
  },
  actions: {
    setSelectedProduct({ commit }, product) {
      commit("setSelectedProduct", product);
    },
  },
  getters: {
    selectedProduct(state) {
      console.log(state.selectedProduct);
      return state.selectedProduct;
    },
  }
});

const app = Vue.createApp({
  data() {
    return {
      store: this.$store,
      page: "products",
      cart: [],
    };
  },
  methods: {
    // addItemToCart(product) {
    //   this.cart.push(product);
    //   console.log(this.cart);
    // },
    navigateTo(page) {
      this.page = page;
    },
    typeOfProduct(type) {
      this.page = type;
      console.log("working");
    },
    // removeItemFromCart(product) {
    //   this.cart.splice(this.cart.indexOf(product), 1);
    // },
  },
});




app.component("cart", Cart);
app.component("products", Products);
app.component("customize", {
  extends: Customize, // Use extends to inherit from Customize component
  props: ['store'], // Define the store prop
  setup(props) {
    return { store: props.store }; // Pass the store prop to the component's setup function
  }
});
// Mount the app to the "#app" element
app.use(router);
app.use(store);
app.mount('#app');

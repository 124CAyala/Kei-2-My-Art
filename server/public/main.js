import Cart from "./components/Cart.js";
import Products from "/components/Products.js";
import Customize from "./components/Customize.js";
import Home from "./components/Home.js";

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/customize', component: Customize },
  { path: '/cart', component: Cart }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
});

const app = Vue.createApp({
  computed: {
    ...Vuex.mapState(["page"]),
  },
  data() {
    return {
      store: this.$store,
      // page: "products",
      // cart: [],
    };
  },
  methods: {
    navigateTo(page) {
      this.page = page;
    },
    typeOfProduct(type) {
      this.page = type;
      console.log("working");
    },
    navigateTo(page) {
      // Assuming you're dispatching an action to change the page
      this.$store.dispatch("setPage", page);
    },
    typeOfProduct(type) {
      // Assuming you're dispatching an action to handle product type
      this.$store.dispatch("setSelectedProduct", type);
    },
    removeItemFromCart(product) {
      this.$store.cart.splice(this.cart.indexOf(product), 1);
    },
    toggleCart() {
      this.$store.commit("toggleCartVisibility");
      console.log(this.$store.state.cart);
    },
  },
});

const store = Vuex.createStore({
  state: {
    cartVisible: false,
    selectedProduct: null,
    // page: "home",
    cart: [],
    products: [
      {
        id: 1,
        type: "Glasses",
        name: "Wine Glass",
        cost: "19.99",
        image: "imgs/glasses/wineglass.jpg",
        quantity: 1
      },
      {
        id: 2,
        type: "Bottles",
        name: "Champagne (750ml)",
        cost: "9.99",
        image:
          "imgs/bottles/champain.jpg",
        quantity: 1
      },
      {
        id: 3,
        type: "Cartons",
        name: "Blue Carton",
        cost: "9.99",
        image: "imgs/cartons/blueCarton.jpg",
        quantity: 0
      },
      {
        id: 4,
        type: "Ornaments",
        name: "Ornament (White)",
        cost: "9.99",
        image:
          "imgs/ornaments/whiteorn.webp",
        quantity: 0
      },
      {
        id: 5,
        type: "Tumblers",
        name: "Tumbler (S)",
        cost: "9.99",
        image:
          "imgs/tumblers/tumbler-1.jpg",
        quantity: 2
      },
      {
        id: 6,
        type: "Glasses",
        name: "Stemless Wine Glass",
        cost: "9.99",
        image: 
        "imgs/glasses/shortglass.webp",
        quantity: 0
      },
      {
        id: 7,
        type: "Glasses",
        name: "Tall Shotglass",
        cost: "9.99",
        image: 
        "imgs/glasses/tallshot.jpg",
        quantity: 0
      },
      {
        id: 8,
        type: "Glasses",
        name: "Short Shotglass",
        cost: "9.99",
        image: 
        "imgs/glasses/shot.jpg",
        quantity: 0
      },
      {
        id: 9,
        type: "Tumblers",
        name: "Tumbler (M)",
        cost: "9.99",
        image: 
        "imgs/tumblers/tumbler-2.jpg",
        quantity: 0
      },
      {
        id: 10,
        type: "Tumblers",
        name: "Tumbler (L)",
        cost: "9.99",
        image: 
        "imgs/tumblers/tumbler-4.png",
        quantity: 0
      },
      {
        id: 11,
        type: "Bottles",
        name: "Cognac (750ml)",
        cost: "9.99",
        image: 
        "imgs/bottles/henny.jpg",
        quantity: 0
      },
      {
        id: 12,
        type: "Bottles",
        name: "Vodka (750ml)",
        cost: "9.99",
        image: 
        "imgs/bottles/titos.jpg",
        quantity: 0
      },
      {
        id: 13,
        type: "Cartons",
        name: "Black Carton",
        cost: "9.99",
        image: 
        "imgs/cartons/blackCarton.jpg",
        quantity: 0
      },
      {
        id: 14,
        type: "Cartons",
        name: "Clear Carton",
        cost: "9.99",
        image: 
        "imgs/cartons/clearCarton.jpg",
        quantity: 0
      },
      {
        id: 15,
        type: "Cartons",
        name: "Green Carton",
        cost: "9.99",
        image: 
        "imgs/cartons/greenCarton.jpg",
        quantity: 0
      },
      {
        id: 16,
        type: "Cartons",
        name: "Pink Carton",
        cost: "9.99",
        image: 
        "imgs/cartons/pinkCarton.jpg",
        quantity: 0
      },
      {
        id: 17,
        type: "Ornaments",
        name: "Ornament (Clear)",
        cost: "9.99",
        image: 
        "imgs/ornaments/clearorn.webp",
        quantity: 0
      },
      {
        id: 18,
        type: "Ornaments",
        name: "Ornament (Bulb)",
        cost: "9.99",
        image: 
        "imgs/ornaments/pointornamit.jpg",
        quantity: 0
      },
    ],
  },
  mutations: {
    toggleCartVisibility(state) {
      state.cartVisible = !state.cartVisible;
      if (state.cartVisible === true) {
        state.page = "cart";
      } else {
        state.page = "products";
      }
      console.log(state.cartVisible);
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
      if (state.selectedProduct !== null) {
        state.page = "customize";
      }
    },
    setPage(state, page) {
      state.page = page;
    },
    addItemToCart(state) {
      state.cart.push(state.selectedProduct);
    },
    setProducts(state) {
      state.page = 'products'
    }
  },
  actions: {
    setSelectedProduct({ commit }, product) {
      commit("setSelectedProduct", product);
    },
    setPage({ commit }, page) {
      commit("setPage", page);
    },
    addItemToCart({ commit }) {
      commit("addItemToCart");
    },
    setProducts({ commit }) {
      commit("setProducts");
    }
  },
  getters: {
    selectedProduct(state) {
      console.log(state.selectedProduct);
      return state.selectedProduct;
    },
    currentPage(state) {
      return state.page;
    },
  },
});


app.component("cart", Cart);
app.component("products", Products);
app.component("customize", {
  extends: Customize, // Use extends to inherit from Customize component
  props: ["store"], // Define the store prop
  setup(props) {
    return { store: props.store }; // Pass the store prop to the component's setup function
  },
});
app.component("home", Home);
// Mount the app to the "#app" element
app.use(router);
app.use(store);
app.mount("#app");

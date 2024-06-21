// import Cart from "./components/Cart.js";
// import Products from "/components/Products.js";
// import Customize from "./components/Customize.js";
// import Home from "./components/Home.js";

// const routes = [
//   { path: '/', component: Home },
//   { path: '/products', component: Products },
//   { path: '/customize', component: Customize },
//   { path: '/cart', component: Cart }
// ];

// const router = VueRouter.createRouter({
//   history: VueRouter.createWebHistory(),
//   routes
// });

// const app = Vue.createApp({
//   computed: {
//     ...Vuex.mapState(["page"]),
//   },
//   data() {
//     return {
//       store: this.$store,
//       // page: "products",
//       // cart: [],
//     };
//   },
//   methods: {
//     navigateTo(page) {
//       this.page = page;
//     },
//     typeOfProduct(type) {
//       this.page = type;
//       console.log("working");
//     },
//     navigateTo(page) {
//       // Assuming you're dispatching an action to change the page
//       this.$store.dispatch("setPage", page);
//     },
//     typeOfProduct(type) {
//       // Assuming you're dispatching an action to handle product type
//       this.$store.dispatch("setSelectedProduct", type);
//     },
//     removeItemFromCart(product) {
//       this.$store.cart.splice(this.cart.indexOf(product), 1);
//     },
//     toggleCart() {
//       this.$store.commit("toggleCartVisibility");
//       console.log(this.$store.state.cart);
//     },
//   },
// });

// const store = Vuex.createStore({
//   state: {
//     cartVisible: false,
//     selectedProduct: null,
//     // page: "home",
//     cart: [],
//     products: [
//       {
//         id: 1,
//         type: "Glasses",
//         name: "Wine Glass",
//         cost: "19.99",
//         image: "imgs/wineglass.jpg",
//         quantity: 1
//       },
//       {
//         id: 2,
//         type: "Bottles",
//         name: "Wine Bottle",
//         cost: "9.99",
//         image:
//           "https://www.americasfinestlabels.com/includes/work/image_cache/4b4f4b63cc837b5f01ce2d718b0f9be2.thumb.jpg",
//         quantity: 1
//       },
//       {
//         id: 3,
//         type: "Cartons",
//         name: "Blue Carton",
//         cost: "9.99",
//         image: "imgs/blueCarton.webp",
//         quantity: 0
//       },
//       {
//         id: 4,
//         type: "Ornaments",
//         name: "Ornament",
//         cost: "9.99",
//         image:
//           "https://www.americasfinestlabels.com/includes/work/image_cache/4b4f4b63cc837b5f01ce2d718b0f9be2.thumb.jpg",
//         quantity: 0
//       },
//       {
//         id: 5,
//         type: "Tumblers",
//         name: "Tumbler",
//         cost: "9.99",
//         image:
//           "https://www.americasfinestlabels.com/includes/work/image_cache/4b4f4b63cc837b5f01ce2d718b0f9be2.thumb.jpg",
//         quantity: 2
//       },
//       {
//         id: 6,
//         type: "Glasses",
//         name: "Stemless Wine Glass",
//         cost: "9.99",
//         image: 
//         "imgs/shortglass.webp",
//         quantity: 0
//       },
//       {
//         id: 7,
//         type: "Glasses",
//         name: "Tall Shotglass",
//         cost: "9.99",
//         image: 
//         "imgs/tallshot.jpg",
//         quantity: 0
//       },
//       {
//         id: 8,
//         type: "Glasses",
//         name: "Short Shotglass",
//         cost: "9.99",
//         image: 
//         "imgs/shot.jpg",
//         quantity: 0
//       },
//       {
//         id: 9,
//         type: "Tumblers",
//         name: "Short Shotglass",
//         cost: "9.99",
//         image: 
//         "imgs/shot.jpg",
//         quantity: 0
//       },
//     ],
//   },
//   mutations: {
//     toggleCartVisibility(state) {
//       state.cartVisible = !state.cartVisible;
//       if (state.cartVisible === true) {
//         state.page = "cart";
//       } else {
//         state.page = "products";
//       }
//       console.log(state.cartVisible);
//     },
//     setSelectedProduct(state, product) {
//       state.selectedProduct = product;
//       if (state.selectedProduct !== null) {
//         state.page = "customize";
//       }
//     },
//     setPage(state, page) {
//       state.page = page;
//     },
//     addItemToCart(state) {
//       state.cart.push(state.selectedProduct);
//     },
//     setProducts(state) {
//       state.page = 'products'
//     }
//   },
//   actions: {
//     setSelectedProduct({ commit }, product) {
//       commit("setSelectedProduct", product);
//     },
//     setPage({ commit }, page) {
//       commit("setPage", page);
//     },
//     addItemToCart({ commit }) {
//       commit("addItemToCart");
//     },
//     setProducts({ commit }) {
//       commit("setProducts");
//     }
//   },
//   getters: {
//     selectedProduct(state) {
//       console.log(state.selectedProduct);
//       return state.selectedProduct;
//     },
//     currentPage(state) {
//       return state.page;
//     },
//   },
// });


// app.component("cart", Cart);
// app.component("products", Products);
// app.component("customize", {
//   extends: Customize, // Use extends to inherit from Customize component
//   props: ["store"], // Define the store prop
//   setup(props) {
//     return { store: props.store }; // Pass the store prop to the component's setup function
//   },
// });
// app.component("home", Home);
// // Mount the app to the "#app" element
// app.use(router);
// app.use(store);
// app.mount("#app");

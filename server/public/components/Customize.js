// Define the component
export default {
  props: ["store"],
  template: `<div>

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
  
  
    <h1>Selected Product</h1>
    <p>{{ selectedProduct.name }}</p>
    <p>{{ selectedProduct.cost }}</p>
    <button id="addToCart" class="btn btn-primary" v-on:click="addItemToCart(selectedProduct)">Add To Cart</button>
  </div>`,
  computed: {
    selectedProduct() {
      console.log(this.$store)
      // Access selectedProduct from Vuex store directly
      return this.$store.state.selectedProduct;
    },
  },
  methods: {
    addItemToCart(selectedProduct) {
      this.$store.dispatch("addItemToCart", selectedProduct);
      document.getElementById("addToCart").disabled = true;
    },
    
  },
};

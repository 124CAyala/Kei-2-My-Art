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
      <div class="line cart-line mt-5 d-none d-md-flex d-lg-flex"></div>
    </div>
  </div>
</nav>

<div class="container">

  <div class="row">
    <div class="col">
      <h1 class="display-4 text-center h-customize">
      Customize Your Product
      </h1>
    </div>
  </div>

  <div class="row d-flex justify-content-between">
    <div class="col-4 ms-3 mt-4 text-center">
      <h1 class="h-customize text-center">Selected Product</h1>
      <img class="w-100" :src="selectedProduct.image" alt="selected">
      <p class="h-customize text-center">{{ selectedProduct.name }}</p>
      <p class="h-customize text-center">{{ selectedProduct.cost }}</p>
      <button id="addToCart" class="btn btn-primary mb-4" v-on:click="addItemToCart(selectedProduct)">Add To Cart</button>
    </div>
    <div class="col-5 text-center my-3">
      <div class="my-5">
        <label for="formFile" class="form-label">
          <h1 class="h-customize">
            Upload Your Design
          </h1>
        </label>
        <input class="form-control" type="file" id="formFile">
      </div>
      <h1 class="h-customize my-5">
        Additional Specifications
      </h1>
      <div class="input-group">
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  </div>


</div>
  
<div class="container-fluid footer">

    <div class="row">
      <div class="col d-flex justify-content-center pt-5">
        <h4>Contact / Customer Support / About Us / Products</h4>
      </div>
    </div>

    <div class="row d-flex justify-content-between">

      <div class="col-4 align-self-end p-5">
        <img src="imgs/icons-facebook.svg" class="icons" alt="">
        <img src="imgs/icons-instagram.svg" class="icons" alt="">
        <img src="imgs/icons-tiktok.svg" class="icons" alt="">
        <img src="imgs/icons-twitter.svg" class="icons" alt="">
      </div>

      <div class="col-2">
        <img src="imgs/logo.png" alt="logo" class="img-fluid footer-logo">
      </div>

      <div class="col-4 d-flex align-self-end">
        <span class="d-flex align-self-center"><h3>In Partnership With</h3></span>
        <img src="imgs/stripe.svg" class="stripe" alt="">
        
        
      </div>

    </div>
    
  </div>`,
  computed: {
    selectedProduct() {
      // console.log(this.$store)
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

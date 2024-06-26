

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
         <div class="line cart-line mt-5 d-none d-md-flex d-lg-flex"></div>
       </div>
     </div>
   </nav>

     <div class="row">
            <div class="col-3 offset-1">
      <h1 class="display-5 h-category text-end">{{ selectedType || 'All Products' }}</h1>
        <ul class="category">
          <li><button @click="filterProducts('Bottles')" type="button" class="btn nav-category" role="button">Bottles</button></li>
          <li><button @click="filterProducts('Tumblers')" type="button" class="btn nav-category" role="button">Tumblers</button></li>     
          <li><button @click="filterProducts('Glasses')" type="button" class="btn nav-category" role="button">Glasses</button></li>
          <li><button @click="filterProducts('Ornaments')" type="button" class="btn nav-category" role="button">Ornaments</button></li>
          <li><button @click="filterProducts('Cartons')" type="button" class="btn nav-category" role="button">Cartons</button></li>
        </ul>
          </div>

        
      <!-- Display product information here -->

      <div class="col category-gallery">
      <div class="row d-flex justify-content-start">
      <div class="col list">
      <div class="p-5 text-center" v-for="product in filteredProducts" :key="product.id">
        <router-link to="/customize" v-on:click="selectProduct(product)" class="link">
          <img class="cat-img-cartons w-75" :src="product.image" alt="">
          <h4 class="info-prod pt-4">{{ product.name }}</h4>
          <h4 class="info-prod">{{ product.cost }}</h4>
        </router-link>
      </div>

      </div>
      </div>
      </div>
      
       
      <!-- Add more product details as needed -->
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
    
     </div>
    `,

  data() {
    return {
      products: [],
      selectedType: null, // Default to displaying all products
    };
  },
  computed: {
    filteredProducts() {
      if (!this.selectedType) {
        return this.$store.state.products; // Return all products if no type selected
      }
      return this.$store.state.products.filter(
        (product) => product.type === this.selectedType
      );
    },
    allProducts() {
      // Access products from Vuex store state
      return this.$store.state.products;
    },
  },
  methods: {
    filterProducts(type) {
      this.selectedType = type;
    },
    selectProduct(product) {
      // Dispatch the 'setSelectedProduct' action directly

      this.$store.dispatch('setSelectedProduct', product);
      // Navigate to the next page (you can use router-link or window.location)
      // this.page = "customize";

    },
  },
  //   selectedItem(product) {
  //     this.$router.push({ name: 'SelectedProduct', params: { productId: product.id }});
  // }
};

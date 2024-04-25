

export default {
  template: `
     <div>
     <div class="row">
            <div class="col-3 offset-1">
      <h1>{{ selectedType || 'All Products' }}</h1>
        <ul class="category">
          <li><button @click="filterProducts('Bottles')" type="button" class="btn" role="button">Bottles</button></li>
          <li><button @click="filterProducts('Tumblers')" type="button" class="btn" role="button">Tumblers</button></li>     
          <li><button @click="filterProducts('Glasses')" type="button" class="btn" role="button">Glasses</button></li>
          <li><button @click="filterProducts('Ornaments')" type="button" class="btn" role="button">Ornaments</button></li>
          <li><button @click="filterProducts('Cartons')" type="button" class="btn" role="button">Cartons</button></li>
        </ul>
          </div>

        
      <!-- Display product information here -->

      <div class="col category-gallery">
      <div class="row d-flex justify-content-around">
      <div class="col list">
      <div v-for="product in filteredProducts" :key="product.id">
          <img class="cat-img-cartons" :src="product.image" alt="">
          <p>{{ product.name }}</p>
          <p>{{ product.cost }}</p>
          <button v-on:click="selectProduct(product)" class="btn btn-primary">Select This Product</button>
      </div>

      </div>
      </div>
      </div>
      
       
      <!-- Add more product details as needed -->
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

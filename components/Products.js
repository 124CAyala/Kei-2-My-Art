

export default {
  template: `
     <div>
     <div class="row">
            <div class="col-3 offset-1">
      <h1>{{ selectedType || 'All Products' }}</h1>
        <ul class="category">
          <li><a v-on:click="navigateTo('bottles')" type="button" class="btn" role="button">Bottles</a></li>
          <li><a v-on:click="navigateTo('tumbler')" type="button" class="btn" role="button">Tumblers</a></li>     
          <li><a v-on:click="navigateTo('Glasses')" type="button" class="btn" role="button">Glasses</a></li>
          <li><a v-on:click="navigateTo('Ornaments')" type="button" class="btn" role="button">Ornaments</a></li>
          <li><a v-on:click="navigateTo('Cartons')" type="button" class="btn" role="button">Cartons</a></li>
        </ul>
          </div>

        
      <!-- Display product information here -->

      <div class="col category-gallery">
      <div class="row d-flex justify-content-around">
      <div class="col list">
      <div v-for="product in filteredProducts" :key="product.id">
          <button class="btn" id="blue"><img class="cat-img-cartons" src="{{ product.img }}" alt=""></button>
          <p>{{ product.name }}</p>
          <p>{{ product.cost }}</p>
      </div>

      </div>
      </div>
      </div>
      
       <button v-on:click="selectProduct(product)">Select This Product</button>
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

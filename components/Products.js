

export default {
  template: `
     <div>
      <h1>{{ selectedType || 'All Products' }}</h1>
      <button @click="filterProducts(null)">View All Products</button>
      <button @click="filterProducts('Cartons')">Cartons</button>
      <button @click="filterProducts('Bottles')">Bottles</button>
      <button @click="filterProducts('Glasses')">Glasses</button>
      <button @click="filterProducts('Ornaments')">Ornaments</button>
      <button @click="filterProducts('Tumblers')">Tumblers</button>
      
      <div v-for="product in filteredProducts" :key="product.id">
      <!-- Display product information here -->
      <p>{{ product.name }}</p>
      <p>{{ product.cost }}</p>
      
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

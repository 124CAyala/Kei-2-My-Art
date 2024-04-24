// Define the component
export default {
  props: ["store"],
  template: `<div>
  
  
    <h1>Selected Product</h1>
    <p>{{ selectedProduct.name }}</p>
    <p>{{ selectedProduct.cost }}</p>
    <button class="btn btn-primary" v-on:click="addItemToCart(selectedProduct)">Add To Cart</button>
  </div>`,
  computed: {
    selectedProduct() {
      // Access selectedProduct from Vuex store directly
      return this.store.state.selectedProduct;
    },
  },
  methods: {
    addItemToCart(selectedProduct) {
      this.$store.dispatch("addItemToCart", selectedProduct);
      console.log(selectedProduct)
    },
    
  },
};

// Define the component
export default {
  props: ['store'],
  template: `<div>
    <h1>Selected Product</h1>
    <p>{{ selectedProduct.name }}</p>
    <p>{{ selectedProduct.cost }}</p>
  </div>`,
  computed: {
    selectedProduct() {
      // Access selectedProduct from Vuex store directly
      console.log(this.store.selectedProduct);
      return this.store.state.selectedProduct;
    }
  }

}

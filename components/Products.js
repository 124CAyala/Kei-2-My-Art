export default {

     template: `
    //   <div>
    //     <h1>Product</h1>
    //     <div class="products">
    //       <div v-for="(product, index) in cart" :key="index">
    //         {{ product.name }}
    //         <img class="image" :src="product.image" />
    //         <div>{{ product.cost }}</div>
    //         <button @click="removeItemFromCart(product)">Remove From Cart</button>
    //       </div>
    //     </div>
    //   </div>
    `,
    props: ['cart'],
    methods: {
      removeItemFromCart(product) {
        this.$emit('removeItemFromCart', product);
      },
    },
  };


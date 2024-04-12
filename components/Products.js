export default {

     template: `
    //   <div>
    //     <h1>Product</h1>
    //     <div class="products">
    //       <div v-for="(product, index) in cart" :key="index">
    //         {{ product.name }}
    //         <img class="image" :src="product.image" />
    //         <div>{{ product.cost }}</div>
    //       </div>
    //     </div>
    //   </div>
    `,
    props: ['cart'],

  };


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
      <button v-on:click="addItemToCart(product)">Add To Cart</button>
      <!-- Add more product details as needed -->
    </div>
    
     </div>
    `,

    data() {
      return {
        products: [
          {
            id: 1,
            type: "Glasses",
            name: "Wine Glass",
            cost: "19.99",
            image: 'imgs/wineglass.jpg',
            quantity: 0
          },
          {
            id: 2,
            type: "Bottles",
            name: "Wine Bottle",
            cost: "9.99",
            image: 'https://www.americasfinestlabels.com/includes/work/image_cache/4b4f4b63cc837b5f01ce2d718b0f9be2.thumb.jpg',
            quantity: 0
          },
          {
            id: 3,
            type: "Cartons",
            name: "Blue Carton",
            cost: "9.99",
            image: 'imgs/blueCarton.webp',
            quantity: 0
          },
          {
            id: 4,
            type: "Ornaments",
            name: "Ornament",
            cost: "9.99",
            image: 'https://www.americasfinestlabels.com/includes/work/image_cache/4b4f4b63cc837b5f01ce2d718b0f9be2.thumb.jpg',
            quantity: 0
          },
          {
            id: 5,
            type: "Tumblers",
            name: "Tumbler",
            cost: "9.99",
            image: 'https://www.americasfinestlabels.com/includes/work/image_cache/4b4f4b63cc837b5f01ce2d718b0f9be2.thumb.jpg',
            quantity: 0
          },
        ],
        selectedType: null // Default to displaying all products
      };
    },
    computed: {
      filteredProducts() {
        if (!this.selectedType) {
          return this.products; // Return all products if no type selected
        }
        return this.products.filter(product => product.type === this.selectedType);
      }
    },
    methods: {
      filterProducts(type) {
        this.selectedType = type;
      },
      addItemToCart(product) {
          this.$emit('addItemToCart', product)
          console.log(this.cart)
      }
    }
  };


app.component('cart-item', {
    props:{
        premium: {
            
        }
    },
    template: 
    /*html*/
    `<div class="row p-2 pt-4">
    <div class="col">
      <ul>
        <li>
          <div class="placeholder-product"></div>
        </li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li>
          <div class="display-6">$19.99</div>
        </li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li>
          <p><button class="px-2 mx-2">+</button>1<button class="px-2 mx-2">-</button></p>
        </li>
      </ul>
     </div>
  </div>`,
  data(){

  },
  methods: {

  },
  computed: {

  }

})

  
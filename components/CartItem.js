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
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" id="plus" class="btn btn-primary px-2 mx-2">+</button>
                <div><p style="color: aliceblue;" id="quantity">1</p></div>
            <button type="button" id="minus" class="px-2 mx-2 btn btn-primary">-</button>
        </div>
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

  
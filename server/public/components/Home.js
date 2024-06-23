export default {
    template: `

    <nav>
    <div class="row d-flex justify-content-center">
      <div class="text-center col-lg-2 col-md-2 col-sm-2 col-2 p-0 mt-5">
        <a href="index.html#About" class="btn">
          <h1 class="nav-item">About</h1>
        </a>
        <div class="line mt-5 d-none d-md-flex d-lg-flex"></div>
      </div>
      <div class="text-center col-lg-2 col-md-2 col-sm-2 col-2 p-0 mt-5">
        <a href="index.html#Gallery" class="btn">
          <h1 class="nav-item">Gallery</h1>
        </a>
        <div class="line mt-5 d-none d-md-flex d-lg-flex"></div>
      </div>
      <div class="text-center col-lg-2 col-md-2 col-sm-2 col-2 mt-4">
        <img src="../imgs/logo.png" alt="Kei2MyArt" class="logo">
      </div>
      <div class="text-center col-lg-2 col-md-2 col-sm-2 col-2 p-0 mt-5">
        <a href="index.html#Shop" class="btn">
          <h1 class="nav-item">Shop</h1>
        </a>
        <div class="line mt-5 d-none d-md-flex d-lg-flex"></div>
      </div>
      <div class="text-center col-lg-2 col-md-2 col-sm-2 col-2 p-0 mt-5">
        <router-link class="btn" to="/cart">
          <span class="material-symbols-outlined cart">
            shopping_cart
          </span>
        </router-link>
        <div class="line cart-line mt-5 d-none d-md-flex d-lg-flex"></div>
      </div>
    </div>
  </nav>

    <div class="container-fluid bg py-5">
        <div class="row">
          <div class="col-6 m-text">
            <h1 class="display-3 Purple-text">Handmade tumblers, glasses, bottles, ornaments</h1>
            <h1 class="display-3 clear-text">and more!</h1>
          </div>
          <div class="col-4">
            <img src="imgs/gallery/bu-bottle.jpg" alt="boston u" class="landing-img img-fluid">
          </div>
        </div>
      </div>

      <div class="container-fluid about-bg">
        <div class="row">
          <div class="col-10 col-md-8 col-xl-8 col-lg-8">
            <h1 id="About" class="display-4 About-head">About</h1>
          </div>
        </div>
        <div class="row">
          <div class="col text-center Kiesha"><img class="circle img-fluid" src="imgs/black.png" alt="">
            <div class="row">
              <div class="col about text-center ">
                <h1 class="brown">Kiesha Brown</h1>
              </div>
            </div>
          </div>
          <div class="col-5">
            <h1 class="aboutP">Welcome to Kei 2 My Art, with passion we create extraordinary products. We are a proud
              Black-owned business dedicated to crafting exceptional custom handmade novelties.</h1>
          </div>
        </div>
        <div class="row">

          <div class="col-7"></div>

        </div>
        <div class="row">
          <div class="col-10 col-md-8 col-xl-8 col-lg-8">
            <h1 id="Shop" class="display-4 Category">Shop By Category</h1>
          </div>
        </div>
        <div class="row d-flex justify-content-evenly text-center">
          <div class="col-4 ">
          <router-link class="btn cat-btn" to="/products">
              <img src="imgs/gallery/carton-category.jpg" alt="cartons" class="img-fluid text-center categories">
              <div class="display-6 text-center text-light">Cartons</div>
              </router-link>
          </div>
          <div class="col-4">
          <router-link class="btn cat-btn" to="/products">
              <img src="imgs/gallery/glasses-category.JPG" alt="glasses" class="img-fluid text-center categories">
              <div class="display-6 text-center text-light">Glasses</div>
              </router-link>
          </div>
          <div class="col-4">
          <router-link class="btn cat-btn" to="/products">
              <img src="imgs/gallery/tumblers-category.JPG" alt="tumblers" class="img-fluid text-center categories">
              <div class="display-6 text-center text-light">Tumblers</div>
              </router-link>
          </div>
        </div>
        <div class="row d-flex justify-content-evenly text-center mt-3">
          <div class="col-4">
          
          <router-link class="btn cat-btn" to="/products">
              <img src="imgs/gallery/ornament-cat.jpg" alt="ornaments" class="img-fluid text-center categories">
              <div class="display-6 text-center text-light">Ornaments</div>
            </router-link>
          </div>
          <div class="col-4">
          <router-link class="btn cat-btn" to="/products">
              <img src="imgs/gallery/julia.jpg" alt="bottles" class="img-fluid text-center categories">
              <div class="display-6 text-center text-light">Bottles</div>
              </router-link>
          </div>
        </div>
      </div>

      <div class="container-fluid bg Purple-text pb-5">
        <div class="row">
          <div id="Gallery" class="col-10 col-md-8 col-xl-8 col-lg-8">
            <h1 class="display-4 collect">Gallery</h1>
          </div>
        </div>
        <div class="row Collectionsrow Collections">
          <div class="col-3 Collectionscol"><img src="imgs/gallery/blanco.webp" alt="" class="img-fluid CollectionsImg"></div>
          <div class="col-3 Collectionscol"><img src="imgs/gallery/cup.png" alt="" class="img-fluid CollectionsImg">
          </div>
          <div class="col-3 Collectionscol"><img src="imgs/gallery/fab.webp" alt="" class="img-fluid CollectionsImg">
          </div>
          <div class="col-3 Collectionscol"><img src="imgs/gallery/kenny.webp" alt="" class="img-fluid CollectionsImg"></div>
        </div>
        <div class="row Collections">
          <div class="col-3 Collectionscol"><img src="imgs/gallery/Milk(2).JPG" alt="" class="img-fluid CollectionsImg"></div>
          <div class="col-3 Collectionscol"><img src="imgs/gallery/BUbottle.JPG" alt="" class="img-fluid CollectionsImg"></div>
          <div class="col-3 Collectionscol"><img src="imgs/gallery/Milk.JPG" alt="" class="img-fluid CollectionsImg"></div>
          <div class="col-3 Collectionscol"><img src="imgs/gallery/DU.jpg" alt="" class="img-fluid CollectionsImg"></div>
        </div>
      </div>

      <div class="container-fluid footer">

    <div class="row">
      <div class="col d-flex justify-content-center pt-5">
        <h4>Contact / Customer Support / About Us / Products</h4>
      </div>
    </div>

    <div class="row d-flex justify-content-between">

      <div class="col-4 align-self-end p-5">
        <img src="imgs/icons-facebook.svg" class="icons" alt="">
        <img src="imgs/icons-instagram.svg" class="icons" alt="">
        <img src="imgs/icons-tiktok.svg" class="icons" alt="">
        <img src="imgs/icons-twitter.svg" class="icons" alt="">
      </div>

      <div class="col-2">
        <img src="imgs/logo.png" alt="logo" class="img-fluid footer-logo">
      </div>

      <div class="col-4 d-flex align-self-end">
        <span class="d-flex align-self-center"><h3>In Partnership With</h3></span>
        <img src="imgs/stripe.svg" class="stripe" alt="">
        
        
      </div>

    </div>
  </div>
    `,
    methods: {
        toProducts() {
            this.$store.dispatch('setProducts');
        }
        
    }

}
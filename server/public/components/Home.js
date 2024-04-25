export default {
    template: `
    <div class="container-fluid bg py-5">
        <div class="row">
          <div class="col-6 m-text">
            <h1 class="display-3 Purple-text">Handmade tumblers, glasses, bottles, ornaments</h1>
            <h1 class="display-3 clear-text">and more!</h1>
          </div>
          <div class="col-4">
            <img src="imgs/bu-bottle.jpg" alt="boston u" class="landing-img img-fluid">
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
            <button class="btn cat-btn" @click="toProducts()">
              <img src="imgs/carton-category.jpg" alt="cartons" class="img-fluid text-center categories">
              <div class="display-6 text-center text-light">Cartons</div>
            </button>
          </div>
          <div class="col-4">
          <button class="btn cat-btn" @click="toProducts()">
              <img src="imgs/glasses-category.JPG" alt="glasses" class="img-fluid text-center categories">
              <div class="display-6 text-center text-light">Glasses</div>
            </button>
          </div>
          <div class="col-4">
          <button class="btn cat-btn" @click="toProducts()">
              <img src="imgs/tumblers-category.JPG" alt="tumblers" class="img-fluid text-center categories">
              <div class="display-6 text-center text-light">Tumblers</div>
            </button>
          </div>
        </div>
        <div class="row d-flex justify-content-evenly text-center mt-3">
          <div class="col-4">
          <button class="btn cat-btn" @click="toProducts()">
              <img src="imgs/ornament-cat.jpg" alt="ornaments" class="img-fluid text-center categories">
              <div class="display-6 text-center text-light">Ornaments</div>
            </button>
          </div>
          <div class="col-4">
          <button class="btn cat-btn" @click="toProducts()">
              <img src="imgs/julia.jpg" alt="bottles" class="img-fluid text-center categories">
              <div class="display-6 text-center text-light">Bottles</div>
            </button>
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
          <div class="col-3 CollectionscolL"><img src="imgs/Kenny.jpg" alt="" class="img-fluid CollectionsImgL"></div>
          <div class="col-3 CollectionscolL"><img src="imgs/ornament.jpg" alt="" class="img-fluid CollectionsImgL">
          </div>
          <div class="col-3 CollectionscolL"><img src="imgs/designerCups.jpg" alt="" class="img-fluid CollectionsImgL">
          </div>
          <div class="col-3 CollectionscolL"><img src="imgs/Cups.jpg" alt="" class="img-fluid CollectionsImgL"></div>
        </div>
        <div class="row Collections">
          <div class="col-3 Collectionscol"><img src="imgs/Milk(2).JPG" alt="" class="img-fluid CollectionsImg"></div>
          <div class="col-3 Collectionscol"><img src="imgs/BUbottle.JPG" alt="" class="img-fluid CollectionsImg"></div>
          <div class="col-3 Collectionscol"><img src="imgs/Milk.JPG" alt="" class="img-fluid CollectionsImg"></div>
          <div class="col-3 Collectionscol"><img src="imgs/DU.jpg" alt="" class="img-fluid CollectionsImg"></div>
        </div>
      </div>

      <div class="container-fluid footer">
        <div class="row d-flex justify-content-evenly p-5">
          <div class="col-5 me-auto p-2 mt-4 footer">
            <ul class="footer-list">
              <li>
                <h4 class="footerhead">Kei 2 My Art</h4>
              </li>
              <li>
                <h6 class="footerp">Collections</h6>
              </li>
              <li>
                <h6 class="footerp">Customer Support</h6>
              </li>
              <li>
                <h6 class="footerp">About Us</h6>
              </li>
              <li>
                <h6 class="footerp">Products</h6>
              </li>
            </ul>
          </div>
          <div class="col-2 mb-3">
            <img src="imgs/logo.png" alt="logo" class="img-fluid footer-logo py-md-0">
          </div>
          <div class="col-5 mt-4 text-end">
            <ul class="footer-list">
              <li>
                <h6 class="footerp">kbrown9625@gmail.com</h6>
              </li>
              <li>
                <h4 class="footerhead">908-908-9088</h4>
              </li>
              <ul class="socials">
                <li><img class="footerlogo" src="imgs/Rectangle 62.png" alt="twt"></li>
                <li><img class="footerlogo" src="imgs/Rectangle 63.png" alt="ig"></li>
                <li><img class="footerlogo" src="imgs/pinterest.png" alt="pinterest"></li>
                <li><img class="footerlogo" src="imgs/Rectangle 65.png" alt="yt"></li>
              </ul>
            </ul>
          </div>
        </div>
        <div class="row d-flex justify-content-center">

        </div>
      </div>
    `,
    methods: {
        toProducts() {
            this.$store.dispatch('setProducts');
        }
        
    }

}
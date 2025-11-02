<template>
  <div>
    <h2 class="productHead">Everlane Favorites</h2>
    
    <div class="products-carousel ">
      <button class="carousel-arrow left-arrow" @click="prevSlide">
        <span class="fa fa-chevron-left"></span>
      </button>
      
      <div class="products-container">
        <div class="products-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div class="products-slide">
            <div class="container page-wrapper">
              <div class="page-inner">
                <div class="row">
                  <div class="el-wrapper">
                    <div class="box-up">
                      <img class="img" src="/assets/item1.png" alt="">
                      <div class="img-info">
                        <div class="info-inner">
                          <span class="p-name">The Waffle Long-Sleeve Crew</span>
                          <span class="p-company">Bone</span>
                        </div>
                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                      </div>
                    </div>
                    <div class="box-down">
                      <div class="h-bg">
                        <div class="h-bg-inner"></div>
                      </div>
                      <a class="cart" href="#">
                        <span class="price">$60</span>
                        <span class="add-to-cart">
                          <span class="txt">Add in cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container page-wrapper">
              <div class="page-inner">
                <div class="row">
                  <div class="el-wrapper">
                    <div class="box-up">
                      <img class="img" src="/assets/item2.png" alt="">
                      <div class="img-info">
                        <div class="info-inner">
                          <span class="p-name">The Bomber Jacket | Uniform</span>
                          <span class="p-company">Yeezy</span>
                        </div>
                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                      </div>
                    </div>
                    <div class="box-down">
                      <div class="h-bg">
                        <div class="h-bg-inner"></div>
                      </div>
                      <a class="cart" href="#">
                        <span class="price">$120</span>
                        <span class="add-to-cart">
                          <span class="txt">Add in cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container page-wrapper">
              <div class="page-inner">
                <div class="row">
                  <div class="el-wrapper">
                    <div class="box-up">
                      <img class="img" src="/assets/item3.png" alt="">
                      <div class="img-info">
                        <div class="info-inner">
                          <span class="p-name">The Essential Organic Crew</span>
                          <span class="p-company">Vintage Black</span>
                        </div>
                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                      </div>
                    </div>
                    <div class="box-down">
                      <div class="h-bg">
                        <div class="h-bg-inner"></div>
                      </div>
                      <a class="cart" href="#">
                        <span class="price">$120</span>
                        <span class="add-to-cart">
                          <span class="txt">Add in cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="products-slide">
            <div class="container page-wrapper">
              <div class="page-inner">
                <div class="row">
                  <div class="el-wrapper">
                    <div class="box-up">
                      <img class="img" src="/assets/item4.png" alt="">
                      <div class="img-info">
                        <div class="info-inner">
                          <span class="p-name">The Slim 4-Way Stretch Organic Jean | Uniform</span>
                          <span class="p-company">New Color</span>
                        </div>
                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                      </div>
                    </div>
                    <div class="box-down">
                      <div class="h-bg">
                        <div class="h-bg-inner"></div>
                      </div>
                      <a class="cart" href="#">
                        <span class="price">$75</span>
                        <span class="add-to-cart">
                          <span class="txt">Add in cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container page-wrapper">
              <div class="page-inner">
                <div class="row">
                  <div class="el-wrapper">
                    <div class="box-up">
                      <img class="img" src="/assets/item5.png" alt="">
                      <div class="img-info">
                        <div class="info-inner">
                          <span class="p-name">The Heavyweight </span>
                          <span class="p-company">Limited Edition</span>
                        </div>
                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                      </div>
                    </div>
                    <div class="box-down">
                      <div class="h-bg">
                        <div class="h-bg-inner"></div>
                      </div>
                      <a class="cart" href="#">
                        <span class="price">$95</span>
                        <span class="add-to-cart">
                          <span class="txt">Add in cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container page-wrapper">
              <div class="page-inner">
                <div class="row">
                  <div class="el-wrapper">
                    <div class="box-up">
                      <img class="img" src="/assets/item3.png" alt="">
                      <div class="img-info">
                        <div class="info-inner">
                          <span class="p-name">Product 6</span>
                          <span class="p-company">Premium</span>
                        </div>
                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                      </div>
                    </div>
                    <div class="box-down">
                      <div class="h-bg">
                        <div class="h-bg-inner"></div>
                      </div>
                      <a class="cart" href="#">
                        <span class="price">$150</span>
                        <span class="add-to-cart">
                          <span class="txt">Add in cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="carousel-arrow right-arrow" @click="nextSlide">
        <span class="fa fa-chevron-right"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  data() {
    return {
      currentIndex: 0,
      Slides: 2 
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.Slides - 1) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  }
}
</script>

<style scoped>
.products-carousel {
  position: relative;
  overflow: hidden;
  padding: 0 50px; 

}

.products-container {
  overflow: hidden;
  width: 90%;

}

.products-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.products-slide {
  display: flex;
  flex: 0 0 100%;
  gap: 10px;
  justify-content: center;
  min-width: 90%;

}

.carousel-arrow {
  position: absolute;
  top: 50%;
  background: white;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  border-radius:100px ;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
    cursor: pointer;

}

.carousel-arrow:hover {
  background: #f8f9fa;
}

.left-arrow {
  left: 60px;
    cursor: pointer;

}

.right-arrow {
  right: 60px;
    cursor: pointer;

}

.products1 {
  display: flex;
  gap: 10px;
  padding: 10px;
  padding-left: 190px;
}

</style>
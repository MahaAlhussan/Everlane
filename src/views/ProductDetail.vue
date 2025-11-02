<template>
<NavBarEX/>
  <div class="product-detail" v-if="product">
    <div class="product-container">
      <div class="product-images">
        <img :src="product.image" :alt="product.name" class="main-image" />
        <div class="thumbnail-container">
          <img v-for="color in product.available_colors" :key="color" :src="getProductImageByColor(color)" :alt="color" 
          class="thumbnail" @click="switchColor(color)" :class="{ active: selectedColor === color }"/>
        </div>
      </div>

      <div class="product-info">
        <p class="product-category">{{product.gender}} / {{product.category}}</p>
        <h1>{{ product.name }}</h1>
        	
        <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">1 star</label>
          <p > 5.0 ( {{product.reviewsNO}} Reviews ) </p>
        </div>

        <div class="price-section">
          <p v-if="product.sale" class="original-price">${{ product.before_price }}</p>
          <p class="current-price">${{ product.price }}</p>
          <span v-if="product.sale" class="sale-badge">SALE</span>
        </div>
        
        <div class="color-section">
          <h3>Color: {{ selectedColor }}</h3>
          <div class="color-options">
            <div v-for="color in product.available_colors" :key="color" class="color-option" :class="{ active: selectedColor === color }"
              :style="{ backgroundColor: getColorValue(color) }" @click="switchColor(color)">
              {{ color }}
            </div>
          </div>
        </div>

        <div class="size-section">
          <h3>Size           <a href="#" style="color: black; text-decoration: underline; float:right; font-weight:400; font-size:15px">Size Guide</a>
</h3>
          <div class="size-options">
            <button v-for="size in getAvailableSizes()" :key="size" class="size-btn" :class="{ selected: selectedSize === size }"
              @click="selectedSize = size">
              {{ size }} </button>
          </div>
        </div>

        <button class="add-to-bag" @click="addToBag" :disabled="!selectedSize">
          {{ !selectedSize ? 'SELECT SIZE' : 'ADD TO BAG' }}
        </button>

        <div class="product-logistics"> 
          <div class="logistics-container">
            <div class="logistics-feature">
              <div class="feature-icon">
                <i class="bi bi-truck"></i>
              </div>
              <div class="feature-content">
                <h3>Free Shipping</h3>
                <p>On all U.S. orders over $100 <a href="#" class="learn-more">Learn more</a></p>
              </div>
            </div>    
            
            <div class="logistics-feature">
              <div class="feature-icon">
                <i class="bi bi-box-seam"></i>
              </div>
              <div class="feature-content">
                <h3>Easy Returns</h3>
                <p>Extended returns through January 31. <a href="#" class="learn-more">Returns Details</a></p>
              </div>
            </div>

            <div class="logistics-feature">
              <div class="feature-icon">
                <i class="bi bi-gift"></i>
              </div>
              <div class="feature-content">
                <h3>Send It As A Gift</h3>
                <p>Add a free personalized note during checkout.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="product-details">
          <h3>{{product.product_heading}}</h3>
          <p>{{product.product_description}}</p>
          <div class="fit ">
            <div class="row">
            <h3 class="col-sm" >Model  </h3>
            <p>{{product.model}}</p>
             </div>
             <div class="row fit-row">
            <h3 class="col-sm">Fit</h3>
            <div class="col-sm">
              <ul>
                <li> <a href="#">Questions about fit?</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Size Guide</a></li>
              </ul>
             
             </div>
           
          </div>
          </div>
        </div>

        <div class="product-sustain">
          <h3>Sustainability</h3>
          <div class="product-sustain-features"> 
          <i class="bi bi-recycle"> RENEWED MATERIALS</i>
          <br>
<i><font-awesome-icon icon="fa-solid fa-leaf"/>Cleaner Chemistery</i>
</div>
        </div>
      </div>
    </div>

<div class="recommended-container">
  <h1 style="text-align:left; font-size:18px">Recommended Products</h1>
  <div class="recommended-products">
    <div 
      v-for="recommendedProduct in recommendedProducts" 
      :key="recommendedProduct.id" 
      class="recommended-product"
      @click="$router.push(`/product/${recommendedProduct.id}`)"
    >
      <img :src="recommendedProduct.image" :alt="recommendedProduct.name" />
      <div class="product-info">
        <h3>{{ recommendedProduct.name }}</h3>
        <div class="price-section">
          <p v-if="recommendedProduct.sale" class="original-price">${{ recommendedProduct.before_price }}</p>
          <p class="current-price">${{ recommendedProduct.price }}</p>
          <span v-if="recommendedProduct.sale" class="sale-badge">SALE</span>
        </div>
      </div>
    </div>
  </div>
</div>

    <Reviews/>

    <div class="pricing"> 
<h1>Transparent Pricing</h1>
<p>We publish what it costs us to make every one of our products. There are a lot of costs we can't neatly account for - like design, fittings, wear testing, rent on office and retail space - but we believe you deserve to know what goes into making the products you love.</p>
   
   <div class="pricing-icons">
    <div class="pricing-icon"> 
    <img src="/assets/materialPricing.png" style="color:black;" alt="">
    <p>Materials <br> $47.96</p>

    </div>
    <div class="pricing-icon"> 
        <img src="/assets/hardwarePricing.png" style="color:black;" alt="">
            <p>Hardware <br> $5.74</p>
        </div>
        <div class="pricing-icon"> 
        <img src="/assets/laborPricing.png" style="color:black;" alt="">
                    <p>Labor <br> $13.75</p>
        </div>
        
        <div class="pricing-icon"> 
        <img src="/assets/dutiesPricing.png" style="color:black;" alt="">
         <p>Duties <br> $8.09</p>

        </div>

        <div class="pricing-icon"> 
          <img src="/assets/transportPricing.png" style="color:black;" alt="">
          <p>Transport <br> $1.53</p>
          </div>
   </div>
    </div>
    </div>
<Footer2/>
</template>

<script>
import { menProductsDetails } from '@/components/data/menProducts.js'
import NavBarEX from '../components/NavBarEX.vue'
import Reviews from '../components/Reviews.vue'
import Footer from '../components/Footer1.vue'
import { useCartStore } from '../stores/cart'
import Footer2 from '../components/Footer.vue'



export default {
  name: 'ProductDetail',
  components: {
    NavBarEX,
    Reviews,
    Footer,
    Footer2
  },
  props: ['id'],
  data() {
    return {
      selectedColor: '',
      selectedSize: '',
      menProducts: menProductsDetails 
    }
  },
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
  computed: {
    product() {
      return this.menProducts.find(p => p.id === parseInt(this.id))
    },
    recommendedProducts() {
      const otherProducts = this.menProducts.filter(p => p.id !== parseInt(this.id));
      const shuffle = [...otherProducts].sort(() => 0.5 - Math.random());
      return shuffle.slice(0, 4);
    }
  },
  mounted() {
    if (this.product) {
      this.selectedColor = this.product.color
    }
  },
  methods: {
    switchColor(color) {
      this.selectedColor = color
    },
    getAvailableSizes() {
      if (['Pants', 'Jeans'].includes(this.product.category)) {
        return [36, 38, 40, 42, 44, 46, 48, 50]
      } else {
        return ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"]
      }
    },
    getProductImageByColor(color) {
      return this.product.image
    },
    addToBag() {
      if (this.selectedSize) {
        this.cartStore.addToCart(this.product, this.selectedColor, this.selectedSize)
        
        this.cartStore.openCart()
        
        alert(`Added ${this.product.name} (${this.selectedColor}, ${this.selectedSize}) to cart!`)
      } 
    },
    getColorValue(color) {
      const colorMap = {
        'Black': '#000000',
        'Brown': '#8B4513', 
        'Gray': '#808080',
        'Beige': '#F5F5DC',
        'Blue': '#0000FF'
      }
      return colorMap[color] || '#CCCCCC'
    }
  }
}
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&family=Michroma&family=Poller+One&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap');
 

.product-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #000;
}
.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 40px;

}

.main-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.thumbnail-container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
}

.thumbnail.active {
  border-color: #000;
}

.product-info {
  text-align: left;

}

.price-section {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 20px 0;

}

.original-price {
  text-decoration: line-through;
  color: gray;
  font-size: 18px;
}

.current-price {
  font-size: 24px;
  font-weight: bold;
}

.sale-badge {
  background: red;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}

.color-section, .size-section {
  margin: 30px 0;
  
}
.product-info h1{
  font-size: 28px;
  font-weight: 300;
}

.color-options, .size-options {
  display: flex;
  gap: 8px;
  margin-top: 10px;
  flex-wrap: wrap;
  font-size: 14px;
}

/* .color-option {
  padding: 10px 15px;
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 3px;
} */



.size-btn {
  width: 50px;
  height: 50px;
  background: rgb(228, 228, 228);

  border:none;
  cursor: pointer;
}

.size-btn.selected {
  background: #000;
  color: white;
}

.add-to-bag {
  width: 100%;
  padding: 10px;
  background: #000;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin: 20px 0;
}

.add-to-bag:disabled {
  background: rgb(225, 225, 225);
  cursor: not-allowed;
}

.product-details {
  border-top: 1px solid #eee;
  padding-top: 20px;
}


.color-options {
  display: flex;
  gap: 15px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.color-option {
  width: 40px;
  height: 40px;
  border: 2px solid #ddd;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
}

.color-option.active {
  border-color: #000;
  border: 0.5px;
  transform: scale(1.1);
}

.rate {
    float: left;
    height: 46px;
    padding: 0 10px;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:rgb(25, 25, 25);
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #1c1c1c;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #1c1c1c;    
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #787878;
}
.product-category {
  color: #595959;
  font-size: 14px;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-logistics {
  margin: 25px 0;
  padding: 20px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}

.logistics-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.logistics-feature {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 10px 0;
}

.feature-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.feature-icon i {
  font-size: 30px;
  color: rgb(0, 0, 0);
}

.feature-content {
  flex: 1;
  
}

.feature-content h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px ;
  color: #333;
}

.feature-content p {
  font-size: 14px;
  margin: 0;
  color: #666;
  line-height: 1.4;
}

.learn-more {
  color: #666;
  text-decoration: underline;
  font-weight: 400;
}

.learn-more:hover {
color: #1c1c1c;}

.recommended-container {
  margin: 50px 10px;
  
  padding: 30px 0;
  border-top: 1px solid rgb(230, 230, 230);
}

.recommended-container h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 600;
}

.recommended-products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.recommended-product {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f0f0f0;
  overflow: hidden;
}

.recommended-product:hover {
  transform: translateY(-5px);
}

.recommended-product img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.recommended-product .product-info {
  padding: 15px;
  text-align: center;
}

.recommended-product h3 {
  font-size: 16px;
  margin: 0 0 10px 0;
  font-weight: 500;
  color: #333;
}

.recommended-product .price-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.recommended-product .original-price {
  text-decoration: line-through;
  color: gray;
  font-size: 14px;
  margin: 0;
}

.recommended-product .current-price {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.recommended-product .sale-badge {
  background: red;
  color: white;
  padding: 2px 6px;
  font-size: 10px;
}


.pricing{
  text-align: center;
  margin:0 auto;
  width: 750px;
  left: 50%;
  margin-top: 150px;
  margin-bottom: 100px;
  color: #000;

}

.pricing h1{
    font-family: 'Lato', sans-serif;
    font-weight: 600;
}

.pricing-icons{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 50px;
    margin-top: 50px;
}

.pricing-icon img {
  height: 90px;
  margin-bottom: 15px;

}
h3 {
  font-size: 18px;
  font-weight: 600;

}
.rate p{
  color:rgb(145, 145, 145)
}

li a{
  color: rgb(0, 0, 0) !important;
}
.fit-row {
  border-top: rgba(163, 163, 163, 0.483) 0.8px solid;
  border-bottom: rgba(163, 163, 163, 0.483) 0.8px solid;
}

.row h3, .row li {
    margin-top: 10px;

}
.product-sustain {
}
.product-sustain-features{
  display: flex;
  gap: 50px;

}
</style>
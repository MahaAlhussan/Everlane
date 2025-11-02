<template>
    <h2 class="mb-4">Reviews</h2>

  <div class="reviews-section">
    
    <div class="row mb-4">
      <div class="col-md-3">
        <div class="overall-rating text-center">
          <p class="display-6 mb-2 "> <strong>5.0 Overall Rating </strong></p>
          <div class="stars mb-2">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </div>
          <!-- needs fixing -->
        </div>
      </div>
      
      <div class="col-md-4">
        <div class="rating-breakdown">
          <div class="rating-row" v-for="n in 5" :key="n">
            <span class="rating-label">{{6-n}} ★</span>
            <div class="rating-bar">
              <div class="bar" :style="{ width: getRatingWidth(6-n) }"></div>
            </div>
            <span class="rating-count">{{getRatingCount(6-n)}}</span>
          </div>
        </div>
      </div>
      
      <div class="col-md-3">
        <div class="fit-info">
            
          <div class="fit-slider">
              <div class="slider-indicator">
              <span class="indicator-text">Runs slightly large</span>
            </div>
            <div class="slider-track">
              <div class="slider-fill" style="width: 70%"></div>
              <div class="slider-thumb"></div>
            </div>
            
            <div class="slider-labels">
              <span>Runs small</span>
              <span>True to size</span>
              <span>Runs large</span>
            </div>
            <!-- <div class="slider-indicator">
              <span class="indicator-text">Runs slightly large</span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
      </div>


    <hr class="my-4">

    <div class=" drobdown filter-section mb-4">
      <div class="d-flex align-items-center ">
        <button class="mb-0 me-3 btn  dropdown1" type="button" data-bs-toggle="dropdown">Filter  <font-awesome-icon icon="fa-solid fa-bars" /></button>
       <button class="mb-0 me-3 btn  dropdown2 " > Sort By <br>
       <p class="text-muted " style="font-size:12px; font-weight:400"> Highest to Lowest Rating</p></button>
        <div class="dropdown-contianer">
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">5 Stars</a></li>
            <li><a class="dropdown-item" href="#">4 Stars</a></li>
            <li><a class="dropdown-item" href="#">3 Stars</a></li>
            <li><a class="dropdown-item" href="#">2 Stars</a></li>
            <li><a class="dropdown-item" href="#">1 Star</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="individual-reviews">
      <div class="review-card ">
        <div class="reviewer-details ">
          <div class="reviewer-name  ">ElizabethRBklyn</div>
          <div class="reviewer-measures">
            <div class="verified">
            <p class="verified">  <font-awesome-icon icon="fa-solid fa-circle-check" style="color:black; margin-right:3px" />Verified</p>
</div>

        <span><strong style="color: black;">Height:</strong> 5'7" - 5'11"</span>
            <span><strong style="color: black;">Weight (lb):</strong> 170 - 180 lb</span>
            <span><strong style="color: black;">Body Type:</strong> Petite</span>
            <span><strong style="color: black;">Size Purchased:</strong> L</span>
            <span><strong style="color: black;">Usual Size:</strong> L</span>
          </div>
        </div>

        <div class="review-content  ">
          <div class="review-stars mb-2">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </div>
          <h6 class="review-title">Warm and very attractive on</h6>
          <p class="review-text">Got this to keep my husband warm on those chilly late fall days. He loves it as it not only is pretty warm but he looks good in it and he knows it.</p>
        </div>
      </div>

      <div class="review-card mb-4">
        <div class="reviewer-details ">
          <div class="reviewer-name">Anonymous</div>
          <div class="reviewer-measures">
            <p class="verified">  <font-awesome-icon icon="fa-solid fa-circle-check" style="color:black; margin-right:3px" />Verified</p>
            <span> <strong>Height:</strong> 5'7" - 5'11"</span>
            <span><strong>Weight (lb):</strong> 170 - 180 lb</span>
            <span><strong>Body Type:</strong> Petite</span>
            <span><strong>Size Purchased:</strong> L</span>
            <span><strong>Usual Size:</strong> L</span>
          </div>
        </div>
        
        <div class="review-content">
          <div class="review-stars mb-2">
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
          </div>
          <h6 class="review-title">Super comfy</h6>
          <p class="review-text">Great quality, warm and super comfy. Got the XL cuz I have a large back and it fits perfect. It does run a bit oversized which is good.</p>
        </div>
      </div>
    </div>

    


</template>

<script>
import { menProductsDetails } from '@/components/data/menProducts.js'
export default {
  name: 'ProductReviews',

 data(){
    return{
        menProducts: menProductsDetails 
    }
 },
  methods: {
    getRatingWidth(rating) {
      const widths = {
        5: '100%',
        4: '0%',
        3: '0%',
        2: '0%',
        1: '0%'
      }
      return widths[rating]
    },
    getRatingCount(rating) {
      const counts = {
        5: '2',
        4: '0',
        3: '0',
        2: '0',
        1: '0'
      }
      return counts[rating]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&family=Michroma&family=Poller+One&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap');

.reviews-section {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: rgb(25, 25, 25);
  background-color: #f2f2f2;
  padding: 25px;
  
  justify-content: center;
}

h2 {
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 30px;
    font-family: 'Lato', sans-serif;
}



h6 {
  font-size: 16px;
  font-weight: 700;
  color: #000;

}

.fa-bars {
    margin-left: 70px;
}
.stars, .review-stars {
  color: #000;
  font-size: 16px;
  letter-spacing: 1px;
      margin-top: 20px;

  
}

.star {
  margin-right: 5px;
}

.rating-breakdown {
  margin-top: 10px;
}

.rating-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 13px;
  color: #333;
}

.rating-label {
  width: 50px;
  margin-right: 10px;
}

.rating-bar {
  flex: 1;
  height: 7px;
  background-color: rgb(225, 223, 223);
  margin-right: 10px;
}

.bar {
  height: 100%;
  background-color: #000;
}

.rating-count {
  width: 20px;
  text-align: right;
}


.fit-slider {
  position: relative;
  padding-top: 30px;
        margin-left: 20px;

}

.slider-track {
  position: relative;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin-bottom: 10px;
}

.slider-fill {
  position: absolute;
  height: 100%;
  background-color: #000;
  border-radius: 3px;
  left: 0;
}
  .overall-rating p {
        margin-top: 20px;
        margin-bottom: 0;
  }

.slider-thumb {
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background-color: #000;
  border-radius: 50%;
}


.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
}

.slider-indicator {
  text-align: center;
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: left;
}

.indicator-text {
  font-size: 14px;
  font-weight: 600;
  color: #000;
}

.dropdown1 {
  font-size: 20px;
  padding: 6px 12px;
  font-weight: 600;
  border: 0.5px solid rgb(206, 206, 206);
  width: 180px;
  height: 60px;
  border-radius: 0%;
  text-align: left;
}

.dropdown2{
   font-size: 20px;
  padding: 6px 12px;
  font-weight: 600;
  border: 0.5px solid rgb(206, 206, 206);
  width: 180px;
  height: 60px;
  border-radius: 0%;
  text-align: left;
  float: right;
}

.dropdown-menu {
  font-size: 14px;
}

.review-card {
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
}

.reviewer-header {
  font-size: 14px;
}

.reviewer-name {
  font-weight: 600;
  margin-bottom: 5px;
  text-align: left;
  color: #000;
  font-size: 18px;
}

.reviewer-measures {
  display: flex;
  flex-wrap: wrap;
  color: rgb(87, 87, 87);
  font-size: 13px;
  text-align: left;
  width: 150px;
}

.verified {
  color: rgb(78, 78, 78);
}

.review-content {
  margin-top: 10px;
  text-align: left;
  color: rgb(29, 29, 29);
  min-width: 600px;
}

.review-title {
  margin-bottom: 8px;
  color: rgb(20, 20, 20);
}

.review-text {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}

hr {
  border: none;
  border-top: 1px solid #d3d3d3;
  margin: 30px 0;
}

.btn-outline-dark {
  border-radius: 0;
  padding: 8px 24px;
  font-size: 14px;
}




</style>
<template>
  <div class="carousel-container">
    <h2>Everlane On You</h2>
    <p>Share your latest look with #EverlaneOnYou for a chance to be featured.</p>
    <a class="picLink" href="#">Add Your Photo</a>

    <div class="carousel">
      <button class="arrow left" @click="prevSlide">
        <span class="fa fa-chevron-left"></span>
      </button>

      <div class="carousel2">
        <div class="track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }" >
          <div class="slide" v-for="(pic, i) in picProducts" :key="i">
            <div class="card" v-for="(item, j) in pic" :key="j">
              <img :src="item.img" alt="">
              <button class="add-btn">+</button>
            </div>
          </div>
        </div>
      </div>

      <button class="arrow right" @click="nextSlide">
        <span class="fa fa-chevron-right"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerPics",
  data() {
    return {
      currentIndex: 0,
      products: [
        { img: "/assets/product1.png" },
        { img: "/assets/product2.png" },
        { img: "/assets/product3.png" },
        { img: "/assets/product4.png" },
        { img: "/assets/product5.png" },
        { img: "/assets/product6.jpeg" },
        { img: "/assets/product7.jpg" },
        { img: "/assets/product8.jpg" },
        { img: "/assets/product9.png" },
        { img: "/assets/product10.png" }
      ]
    };
  },
  computed: {
    picProducts() {
      const pics = [];
      for (let i = 0; i < this.products.length; i += 4) {
        pics.push(this.products.slice(i, i + 4));
      }
      return pics;
    },
    totalSlides() {
      return this.picProducts.length;
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.totalSlides - 1) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex < this.totalSlides +1) {
        this.currentIndex--;
      }
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 20px 0;
}

.carousel2 {
  overflow: hidden;
  width: 100%;
}

.track {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%; 
  display: flex;
  justify-content: center;
  gap: 10px;
}

.card {
  flex: 0 0 20%; 
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
}

.card img {
  width: 100%;
  border-radius: 10px;
}

.add-btn {
  margin-top: 5px;
  padding: 5px 10px;
  border: none;
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 180px;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow.left {
  left: 10px;
}

.arrow.right {
  right: 10px;
}
.picLink {
  color: black;
  text-decoration: underline;
}
img{
  width: 100%;
  object-fit: cover;
  height: 300px;
}
</style>

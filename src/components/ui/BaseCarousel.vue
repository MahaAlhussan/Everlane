<template>
  <div class="base-carousel">
    <button class="carousel-arrow left-arrow" @click="prevSlide">
      <span class="fa fa-chevron-left"></span>
    </button>
    
    <div class="carousel-container">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <slot :currentIndex="currentIndex"></slot>
      </div>
    </div>

    <button class="carousel-arrow right-arrow" @click="nextSlide">
      <span class="fa fa-chevron-right"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseCarousel',
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex++
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    }
  }
}
</script>

<style scoped>
.base-carousel {
  position: relative;
  overflow: hidden;
  padding: 0 50px;
}

.carousel-container {
  overflow: hidden;
  width: 90%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  background: white;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-arrow:hover {
  background: #f8f9fa;
}

.left-arrow {
  left: 60px;
}

.right-arrow {
  right: 60px;
}
</style>
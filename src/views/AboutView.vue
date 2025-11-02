<template>
  <NavBar2/>
  <div class="aboutHeader">
    <img src="/assets/aboutPic.png" alt="">
    <h1 class="display-4">We believe we can all make a difference.</h1>
    <p>Our way: Exceptional quality. Ethical factories. Radical Transparency.</p>
  </div>

  <div class="about-paragraph" id="about" ref="aboutParagraph">
    <p :class="{ 'animate': isVisible }">At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That's why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It's a new way of doing things. We call it Radical Transparency.</p>
  </div>

  <div class="ethical-approach" id="factories">
    <img src="/assets/ethicalSection.png" alt="">
    <div class="ethical-text">
      <h5>OUR FACTORIES</h5>
      <h1>Our ethical approach.</h1>
      <p>We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.</p>
    </div>
  </div>

  <div class="aboutPic2">
    <img src="/assets/aboutPic2.webp" alt="">
  </div>

  <div class="quality-section">
    <div class="ethical-text"> 
      <h5>OUR QUALITY</h5>
      <h1>Designed to last.</h1>
      <p>At Everlane, we're not big on trends. We want you to wear our pieces for years, even decades, to come. That's why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.</p>
    </div>
    <img src="/assets/quality.png" alt="">
  </div>

  <img src="/assets/aboutPic3.png" alt="">

  <div class="transparency-section">
    <div class="transparency-image">
      <img src="/assets/aboutPic4.png" alt="">
    </div>
    <div class="transparency-text" id="report"> 
      <h5>OUR TRANSPARENCY</h5>
      <h1>Radical Transparency.</h1>
      <p>We believe you have the right to know what your products cost to make. We share our true costs and break down everything from materials to labor to transportation. This transparency allows us to offer high-quality products at reasonable prices while maintaining ethical standards.</p>
    </div>
  </div>

  <div class="explore-section">
    <router-link to="/products" class="explore-item">
      <img src="/assets/aboutProducts.jpg" alt="Our Products">
      <p>Our Products</p>
    </router-link>

    <router-link to="/stores" class="explore-item">
      <img src="/assets/aboutStores.jpg" alt="Our Stores">
      <p>Our Stores</p>
    </router-link>

    <router-link to="/careers" class="explore-item">
      <img src="/assets/aboutCareers.png" alt="Careers">
      <p>Careers</p>
    </router-link>
  </div>

  <Footer2/>
</template>

<script>
import NavBar2 from '../components/NavBar2.vue'
import Footer2 from '../components/Footer.vue'
export default {
  components: {
    NavBar2,
    Footer2
  },
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    this.checkVisibility()
    window.addEventListener('scroll', this.checkVisibility)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkVisibility)
  },
  methods: {
    checkVisibility() {
      if (!this.$refs.aboutParagraph) return
      
      const element = this.$refs.aboutParagraph
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      
      if (elementTop < windowHeight * 0.8) {
        this.isVisible = true
        window.removeEventListener('scroll', this.checkVisibility)
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

img {
  width: 100%;
  height: 560px;
  object-fit: cover;
  display: block;
  position: relative;
  text-align: center;
}

.aboutHeader h1, .aboutHeader p {
  position: relative;
  bottom: 340px;
  color: hsl(0, 0%, 100%);
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: center;
}

.aboutHeader h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.aboutHeader p {
  font-size: 24px;
  font-weight: 300;
}

.about-paragraph {
  width: 60%;
  margin: 3rem auto;
  margin-bottom: 100px;
  padding: 2rem;
  text-align: justify;
}

.about-paragraph p {
  position: relative;
  overflow: hidden;
  display: block;
  line-height: 1.6;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  color: #333;
  margin: 0;
}

.ethical-approach {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 0px;
  background-color: #f5ebe0;
  text-align: left;
  height: 100%;
}

.ethical-approach img {
  height: 733px;
}

.ethical-text {
  margin-top: 186px;
  font-family: "Lato", sans-serif;
  padding-left: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding-right: 20px;
  width: 560px;
  color: black;
}

.ethical-text h5 {
  font-size: 12px;
  font-weight: 600;
}

.ethical-text h1 {
  font-size: 40px;
}

.ethical-text p {
  font-size: 14px;
}

.aboutPic2 {
  width: 100%;
}

.quality-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 0px;
  text-align: left;
  background-color: #f5ebe0;
}

.transparency-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px;
  text-align: left;
  min-height: 500px; 
}

.transparency-image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
}

.transparency-image img {
  height: 400px; 
  width: auto;
  max-width: 100%;
  object-fit: contain; 
}

.transparency-text {
  font-family: "Lato", sans-serif;
  padding: 60px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.transparency-text h5 {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
}

.transparency-text h1 {
  font-size: 40px;
  margin-bottom: 20px;
}

.transparency-text p {
  font-size: 14px;
  line-height: 1.6;
}

.about-paragraph p {
  position: relative;
  overflow: hidden;
}

.about-paragraph p::before,
.about-paragraph p::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1;
}

.about-paragraph p::before {
  transform: translateX(-100%);
}

.about-paragraph p::after {
  transform: translateX(-100%);
}

.about-paragraph p.animate::before {
  animation: slideIn 1s cubic-bezier(.77,0,.18,1) forwards;
}

.about-paragraph p.animate::after {
  animation: slideIn 1s cubic-bezier(.77,0,.18,1) 0.2s forwards;
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.about-paragraph p {
  position: relative;
  z-index: 2;
}

.explore-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}

.explore-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.explore-item:hover {
  transform: translateY(-5px);
}

.explore-item img {
  width: 100%;
  height: 300px; 
  object-fit: cover; 
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.explore-item:hover img {
  transform: scale(1.05);
}

.explore-item p {
  margin-top: 20px;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  text-align: center;
  cursor: pointer;
  position: relative;
}

.explore-item p::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: #333;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

.explore-item:hover p::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
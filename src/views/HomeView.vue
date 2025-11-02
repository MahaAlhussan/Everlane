<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<NavBarEX/>
  <div class="head">
    <header>
      <img class="img1" src="/assets/img1.png" alt="" />
      <div class="imgtext">
        <h1>Your Cozy Era</h1>
        <p>Get peak comfy-chic
          <br> with new winter essentials.</p>
          <button class="shopnow">SHOP NOW</button>
          </div>
          </header>
          </div>
          
          <Categories/>
          
          <div class="eco">
            <img src="/assets/eco.png" alt="">
            <h1>We're on a Mission To Clean Up the Industry</h1>
            <p>Read about our progress in our latest Impact Report.</p>
            <button>LEARN MORE</button>
            </div>

  <ProductCard />
  <Feedback2/>
  <Picks/>
  <CustomerPics/>
  <Features/>


<Footer2/>

</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Categories from '../components/Categories.vue'
import CustomerPics from '../components/CustomerPics.vue'
import NavBarEX from '../components/NavBarEX.vue'
import Feedback2 from '../components/Feedback2.vue'
import Picks from '../components/Picks.vue'
import Features from '../components/Features.vue'
import Footer2 from '../components/Footer.vue'
export default {

  components: {
    ProductCard,
    Categories,
    CustomerPics,
    NavBarEX,
    Feedback2,
    Picks,
    Features,
    Footer2
  }
}
</script>
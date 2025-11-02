<template>
  <div>
    <NavBarEX />
    <div class="container col-9 mt-5 pt-5">
      <router-link to="/" class="routes">Home</router-link> / 
      <router-link to="/men" class="routes " disapled > Men</router-link>
      <h1>Men’s Clothing & Apparel - New Arrivals</h1>
      <p>Featured</p>
    </div>
  </div>
  <MenProducts/>
  

</template>

<script>
import MenProducts from '../components/MenProducts.vue'
import NavBarEX from '../components/NavBarEX.vue'


export default {
  name: 'MenView',
  components: {
    NavBarEX,
    MenProducts,
  }
}
</script>

<style scoped>

.container{
  text-align: left;
  float: right;
  color: black;
}
.routes {
  color: rgb(108, 108, 108);
}
</style>
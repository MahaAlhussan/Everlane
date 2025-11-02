<template>
    <NavBarEX />
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?">
   </div>

<div class="popular-categories">
    <div class="pop-category">
      <img src="/assets/womenSweater.png" alt="">
      <h2>Women's Sweaters</h2>
    </div>
    <div class="pop-category">
            <img src="/assets/womenBottom.png" alt="">
            <h2>Women's Bottoms</h2>
    </div>
    <div class="pop-category">
                  <img src="/assets/womenBoots.webp" alt="">
                  <h2>Women's Boots</h2>
    </div>
    <div class="pop-category">
                        <img src="/assets/menBestSeller.png" alt="">
                        <h2>Men's Best Sellers</h2>
    </div>
</div>

</template>

<script>
import NavBarEX from '../components/NavBarEX.vue'
import Footer from '../components/Footer1.vue'

export default {
  name: 'SearchView',
  components: {
    NavBarEX,
    Footer
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

.search {
  width: 800px;
  display: flex;
  margin-bottom: 50px;
  padding-left: 460px;
  margin-top: 50px;
}

.searchTerm {
  width: 500px;
  border: none;
  border-right: none;
  padding: 5px;
  height: 39px;
  border-radius: 5px;
  outline: none;
  color: #7e7e7e;
  background-color: #c8c8c889;
}

.popular-categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  margin: 50px;
  margin-bottom: 100px;
}

.pop-category {
  width: 100%;
  height: auto;
}

.pop-category img {
  width: 100%;
  height: 350px;
  display: block;
  object-fit: cover;
  aspect-ratio: 1;
}
.pop-category:hover {
transform: translateY(1px);
cursor: pointer;
}
.pop-category h2 {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  text-decoration: underline;
  margin-top: 10px;
}
</style>
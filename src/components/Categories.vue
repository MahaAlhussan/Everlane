<template>
  <section class="categories-section">
    <h2 class="catHead">Shop by Category</h2>

    <div class="shop-container">
      <div class="category">
        <img src="/assets/shirt.png" alt="Shirts" />
        <p class="desc">SHIRTS</p>
      </div>
      <div class="category">
        <img src="/assets/jeans.png" alt="Denim" />
        <p class="desc">DENIM</p>
      </div>
      <div class="category">
        <img src="/assets/tee.png" alt="Tees" />
        <p class="desc">TEES</p>
      </div>
      <div class="category">
        <img src="/assets/pants.png" alt="Pants" />
        <p class="desc">PANTS</p>
      </div>
      <div class="category">
        <img src="/assets/sweater.png" alt="Sweaters" />
        <p class="desc">SWEATERS</p>
      </div>
      <div class="category">
        <img src="/assets/outwear.png" alt="Outerwear" />
        <p class="desc">OUTERWEAR</p>
      </div>
    </div>

    <div class="featured-grid">
      <div class="featured-card">
        <img src="/assets/newarrivals.png" alt="New Arrivals" />
        <div class="overlay">
          <h1>New Arrivals</h1>
          <button>SHOP THE LATEST</button>
        </div>
      </div>

      <div class="featured-card">
        <img src="/assets/bestSell.png" alt="Best Sellers" />
        <div class="overlay">
          <h1>Best-Sellers</h1>
          <button>SHOP YOUR FAVORITES</button>
        </div>
      </div>

      <div class="featured-card">
        <img src="/assets/holiday.png" alt="Holiday Outfit" />
        <div class="overlay">
          <h1>The Holiday Outfit</h1>
          <button>SHOP OCCASION</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: 'Categories',
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
@import url('https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&family=Michroma&family=Poller+One&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap');

.featured-grid{
  padding-bottom: 70px;
}
.featured-card h1{
  font-weight: 600;
font-size: 23px;
flex-wrap: nowrap;
min-width: 200px;
}
button {
  margin-top: 30px;
  opacity: 0.9;
}

</style>

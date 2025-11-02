<template>
  <div>
   <div class="navigation bg-black text-white fixed-top py-1">
  <div class="container-fluid d-flex justify-content-between align-items-center position-relative">
    <p class="text-center mb-0 flex-grow-1">
      Get early access on launches and offers.
      <a class="sign text-white text-decoration-none" href="#">Sign Up For Texts</a>
      <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </p>
    
    <div class="currency-dropdown">
      <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          USD
          <img src="/assets/USflag.png" alt="US Flag" class="ms-1">
        </button>
        
        <ul class="currency-menu dropdown-menu">
          <li class="dropdown-item d-flex align-items-center justify-content-between">
            <a class="currency-item text-decoration-none" href="#">AUD</a>
            <img src="/assets/AustraliaFlag.png" alt="Australia Flag" width="16">
          </li>
          <li class="dropdown-item d-flex align-items-center justify-content-between">
            <a class="currency-item text-decoration-none" href="#">GBP</a>
            <img src="/assets/UKflag.png" alt="UK Flag" width="16">
          </li>
          <li class="dropdown-item d-flex align-items-center justify-content-between">
            <a class="currency-item text-decoration-none" href="#">CAD</a>
            <img src="/assets/CanadaFlag.png" alt="Canada Flag" width="16">
          </li>
          <li class="dropdown-item d-flex align-items-center justify-content-between">
            <a class="currency-item text-decoration-none" href="#">KWD</a>
            <img src="/assets/Kuwait.png" alt="Kuwait Flag" width="16">
          </li>
          <li class="dropdown-item d-flex align-items-center justify-content-between">
            <a class="currency-item text-decoration-none" href="#">SAR</a>
            <img src="/assets/Saudi.png" alt="Saudi Flag" width="16">
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    <nav class="main-nav navbar navbar-expand-lg navbar-light bg-white border-bottom custom-navbar">
      <div class="container-fluid">
        <div class="d-none d-lg-flex navbar-nav me-auto">
          <div class="nav-item dropdown" @mouseenter="showDropdown('women')" 
               @mouseleave="hideDropdown('women')">
            <router-link 
              class="nav-link mb-0 me-3" 
              to="/women"
              @click="navigateAndHide('women')">
              Women
            </router-link>
            <div class="dropdown-menu p-4" 
                :class="{ 'show': activeDropdown === 'women' }">
              <div class="dropdown-grid">
                <div class="dropdown-column">
                  <p class="category-title">HIGHLIGHTS</p>
                  <ul class="category-list">
                    <li><a href="#" class="category-item">Shop All New Arrivals</a></li>
                    <li><a href="#" class="category-item">The Gift Guide</a></li>
                    <li><a href="#" class="category-item">New Tops</a></li>
                    <li><a href="#" class="category-item">New Bottoms</a></li>
                    <li><a href="#" class="category-item">T-Shirt Bundles</a></li>
                    <li><a href="#" class="category-item">Under $100</a></li>
                  </ul>
                </div>
                
                <div class="dropdown-column">
                  <p class="category-title">FEATURED SHOPS</p>
                  <ul class="category-list">
                    <li><a href="#" class="category-item">The Holiday Outfit Edit</a></li>
                    <li><a href="#" class="category-item">Giftable Sweaters</a></li>
                    <li><a href="#" class="category-item">Uniform & Capsule</a></li>
                    <li><a href="#" class="category-item">The Performance Chino Shop</a></li>
                    <li><a href="#" class="category-item">Top Rated Men's Clothing</a></li>
                  </ul>
                </div>
                
                <div class="dropdown-images">
                  <div class="image-item">
                    <img src="/assets/womenImg.jpg" alt="The Holiday Outfit Edit">
                    <div class="image-caption">
                      <span>The Holiday Outfit Edit <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
                    </div>
                  </div>
                  <div class="image-item">
                    <img src="/assets/womenImg2.webp" alt="Giftable Sweaters">
                    <div class="image-caption">
                      <span>Giftable Sweaters <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="nav-item dropdown" 
               @mouseenter="showDropdown('men')" 
               @mouseleave="hideDropdown('men')">
            <router-link 
              class="nav-link mb-0 me-3" 
              to="/men"
              @click="navigateAndHide('men')">
              Men
            </router-link>
            <div class="dropdown-menu p-4" 
                :class="{ 'show': activeDropdown === 'men' }">
              <div class="dropdown-grid">
                <div class="dropdown-column">
                  <p class="category-title">HIGHLIGHTS</p>
                  <ul class="category-list">
                    <li><a href="#" class="category-item">Shop All New Arrivals</a></li>
                    <li><a href="#" class="category-item">The Gift Guide</a></li>
                    <li><a href="#" class="category-item">New Tops</a></li>
                    <li><a href="#" class="category-item">New Bottoms</a></li>
                    <li><a href="#" class="category-item">T-Shirt Bundles</a></li>
                    <li><a href="#" class="category-item">Under $100</a></li>
                  </ul>
                </div>
                
                <div class="dropdown-column">
                  <p class="category-title">FEATURED SHOPS</p>
                  <ul class="category-list">
                    <li><a href="#" class="category-item ">The Holiday Outfit Edit</a></li>
                    <li><a href="#" class="category-item ">Giftable Sweaters</a></li>
                    <li><a href="#" class="category-item " >Uniform & Capsule</a></li>
                    <li><a href="#" class="category-item ">The Performance Chino Shop</a></li>
                    <li><a href="#" class="category-item fw-light">Top Rated Men's Clothing</a></li>
                  </ul>
                </div>
                
                <div class="dropdown-images">
                  <div class="image-item">
                    <img src="/assets/menImg.png" alt="The Holiday Outfit Edit">
                    <div class="image-caption">
                      <span>The Holiday Outfit Edit <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
                    </div>
                  </div>
                  <div class="image-item">
                    <img src="/assets/menImg2.png" alt="Giftable Sweaters">
                    <div class="image-caption">
                      <span>Giftable Sweaters <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <router-link class="nav-item nav-link mb-0 me-3" to="/about">About</router-link>
          <router-link class="nav-item nav-link mb-0" to="/stories">Everworld stories</router-link>
        </div>

        <router-link class="navbar-brand mx-auto position-absolute start-50 translate-middle-x logo" to="/">
          EVERLANE
        </router-link>

        <div class="d-flex navbar-nav ms-auto">
  <router-link class="nav-link" to="/search">
            <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
          </router-link>
                     <router-link class="nav-link" to="/account">
            <font-awesome-icon class="icon" icon="fa-solid fa-user" />
          </router-link>
         <a class="nav-link" href="#" @click.prevent="openCart">
        <font-awesome-icon class="icon  position-relative" icon="fa-solid fa-cart-shopping" />
  
      </a>
        </div>
            <Cart :isOpen="cartOpen" @close-cart="closeCart" />

      </div>
    </nav>

    <div class="nav2 bg-white py-2 border-bottom">
      <div class="container-fluid">
        <div class="d-flex justify-content-center flex-wrap">
          <a href="#" class="nav2-item text-decoration-none me-4">Holiday Gifting</a>
          <a href="#" class="nav2-item text-decoration-none me-4">New Arrivals</a>
          <a href="#" class="nav2-item text-decoration-none me-4">Best Sellers</a>
          <a href="#" class="nav2-item text-decoration-none me-4">Clothing</a>
          <a href="#" class="nav2-item text-decoration-none me-4">Tops & Sweaters</a>
          <a href="#" class="nav2-item text-decoration-none me-4">Pants & Jeans</a>
          <a href="#" class="nav2-item text-decoration-none me-4">Outerwear</a>
          <a href="#" class="nav2-item text-decoration-none me-4">Shoes & Bags</a>
          <a href="#" class="nav2-item text-decoration-none sale">Sale</a>
        </div>
      </div>
    </div>

    <div class="navbar-overlay" :class="{ 'active': activeDropdown }" @mouseenter="hideAllDropdowns"></div>
  </div>
</template>

<script>
import Cart from '../components/Cart.vue'
import { useCartStore } from '../stores/cart.js'
import { mapState, mapActions } from 'pinia'
export default {
  name: 'NavBarEX',
  components: {
    Cart
  },
  data() {
    return {
      activeDropdown: null,
      hideTimeout: null,
     cartOpen: false 

    }
  },
    setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
    computed: {
    totalItems() {
      return this.cartStore.totalItems
    },
    isOpen() {
      return this.cartStore.isOpen
    }
  },

  methods: {
openCart() {
      this.cartStore.openCart()
    },
    closeCart() {
      this.cartStore.closeCart()
    },
    showDropdown(type) {
      clearTimeout(this.hideTimeout);
      this.activeDropdown = type;
    },
    
    hideDropdown(type) {
      this.hideTimeout = setTimeout(() => {
        if (this.activeDropdown === type) {
          this.activeDropdown = null;
        }
      }, 150);
    },
    
    hideAllDropdowns() {
      this.activeDropdown = null;
    },
    
    navigateAndHide(type) {
      if (this.$route.path === `/${type}`) {
        this.showDropdown(type);
      } else {
        this.$router.push(`/${type}`);
        this.hideAllDropdowns();
      }
    },
      openCart() {
      this.cartOpen = true;
    },
    
    closeCart() {
      this.cartOpen = false;
    }
  },
  

  mounted() {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown')) {
        this.hideAllDropdowns();
      }
    });
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Giga:wght@100..900&family=Michroma&family=Poller+One&family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap');

.navigation {
  height: 26px !important;
  font-size: 12px !important;
  font-family: "Roboto", sans-serif !important;
  font-weight: 600 !important;
  z-index: 1100;
}

.sign {
  font-size: 12px !important;
  font-weight: 400 !important;
  text-decoration: underline !important;
}
.sign:hover {
    font-weight: 800 !important;
}

.custom-navbar {
  margin-top: 22px;
  height: 60px;
  padding: 0 30px;
  z-index: 1090;
}

.logo {
  font-family: "Lexend Giga", sans-serif !important;
  font-size: 20px !important;
  color: black !important;
  text-decoration: none;
}

.navbar-nav .nav-link {
  color: black;
  font-size: 13px;
  padding: 5px 15px;
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

.navbar-nav .nav-link.router-link-active {
  font-weight: 600;
}

.navbar-nav .nav-link::before {
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
.navbar-nav .nav-link:hover::before{
  transform-origin: left;
  transform: scaleX(1);
} 

/* 
.navbar-nav .nav-link:hover {
  color: rgb(255, 255, 255);
} */

.nav2 {
  margin-top: 5px;
  margin-bottom: 5px;
  z-index: 1080;
}

.nav2-item {
  color: #2c3e50 !important;
  font-size: 12px !important;
  font-weight: 500;
  padding: 0 8px;
  transition: color 0.2s ease;
}

.nav2-item:hover {
  color: #000 !important;
  text-decoration: underline !important;
}

.nav2-item.sale {
  color: #e74c3c !important;
  font-weight: 600;
}

.main-nav .dropdown {
  position: static;
}

.main-nav .dropdown-menu {
  border: none;
  border-radius: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 100%;
  left: 0 !important;
  right: 0 !important;
  margin-top: 0;
  padding: 40px 0 !important;
  display: none;
  z-index: 1060;
}

.main-nav .dropdown-menu.show {
  display: block;
}

.main-nav .dropdown-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr; 
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.main-nav .dropdown-column {
  min-width: 0;
}

.category-title {
  font-size: 11px !important;
  font-weight: 700 !important;
  letter-spacing: 0.5px;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  display: block;
  color: #333;
  text-decoration: none;
  font-size: 12px;
  padding: 6px 0;
  font-family: "Roboto", sans-serif;
  transition: color 0.2s ease;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  font-weight: 300;
}

.category-item:hover {
  color: rgb(0, 0, 0);
  font-weight: 400;
  background: rgba(233, 233, 233, 0.569);
  width: 160px;
}

.dropdown-images {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.image-item {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}

.image-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.image-caption {
  position: absolute;
  bottom: 12px;
  left: 12px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  background: rgba(0, 0, 0, 0.7);
  padding: 6px 12px;
  border-radius: 3px;
}

.image-caption span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.navbar-overlay {
  position: fixed;
  top: 120px;
  left: 0;
  width: 100%;
  height: calc(100% - 120px);
  background: rgba(0, 0, 0, 0.3);
  z-index: 1050;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.navbar-overlay.active {
  opacity: 1;
  visibility: visible;
}

.navbar-nav .nav-link:focus,
.navbar-nav .nav-link:active {
  outline: none;
  box-shadow: none;
}

.dropdown-toggle::after {
  display: none !important;
}
.bg-black {
  background-color: rgb(0, 0, 0) !important;
}
.currency-dropdown {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.currency-dropdown .dropdown-toggle {
  background: none;
  border: none;
  font-size: 11px;
  font-weight: 500;
  color: white;
  padding: 2px 8px;
  display: flex;
  align-items: center;
}

.currency-dropdown .dropdown-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.currency-dropdown img {
  width: 16px;
  height: 12px;
  object-fit: cover;
  margin-left: 4px;
}

.currency-menu .dropdown-menu {
  font-size: 12px;
  min-width: 120px;
  border: none;
  border-radius: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
}

.currency-menu .dropdown-item {
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.currency-menu .dropdown-item:hover {
  background: #f8f9fa;
}

.currency-item {
  color: #333;
  text-decoration: none;
}
.dropdown-images {
  display: flex;
  flex-direction: row;
  gap: 20px; 
  align-items: stretch;
}

.image-item {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  flex: 1; 
}

.image-item img {
  width: 100%;
  height: 100%;
  max-height: 300px; 
  object-fit: cover;
  display: block;
}

.image-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  background: none; 
}

.image-caption span {
  display: flex;
  align-items: center;
  gap: 6px;
}

</style>
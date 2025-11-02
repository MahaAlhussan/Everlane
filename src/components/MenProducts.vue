<template>
  <div>
    <div class="grid col-9">
      <router-link v-for="menProduct in menProducts" :key="menProduct.id"  :to="`/product/${menProduct.id}`" class="men-product-card-link">
        <div class="men-product-card">
          <img :src="menProduct.image" :alt="menProduct.name" class="article-img" />
          <p v-if="menProduct.salePercent" class="sale-text">{{menProduct.salePercent}}% off</p>
          <h3 class="name">{{ menProduct.name }}</h3>

          <div class="price-container">
          <p v-if="menProduct.sale" style="text-decoration: line-through; color: gray;" class="price">
            ${{ menProduct.before_price }}
          </p>        
          <p style="color:black; font-weight:700" class="price">${{menProduct.price}}</p>
          </div>
          <p class="product-color text-muted">{{menProduct.color}}</p>
           <div class="color-options">
            <div v-for="color in menProducts.available_colors" :key="color"
              class="color-option" :class="{ active: selectedColor === color }"  :style="{ backgroundColor: getColorValue(color) }"> {{ color }}
            </div>

          </div>
        </div>

        <p v-if="menProduct.fabric" class="product-fabric"> {{menProduct.fabric}}</p>
      </router-link>
    </div>

    <div class="card col-3" style="max-width:280px;">
      <article class="card-group-item">
        <p class="productNo">{{menProducts.length}} Products</p>

        <header class="card-header">
          <h6 class="title">Category</h6>
        </header>
        <div class="filter-content">
          <div class="card-body">
            <form>
              <label class="form-check" v-for="category in visibleCategories" :key="category.value">
                <input class="form-check-input" type="checkbox" :value="category.value">
                <span class="checkmark"></span>
                <span class="form-check-label">{{ category.label }}</span>
              </label>

              <button v-if="categories.length > 5" @click.prevent="toggleViewMore" class="view-more-btn">
                {{ showAllCategories ? 'View Less' : 'View More' }}
              </button>
            </form>
          </div>
        </div>
        
        <header class="card-header">
          <h6 class="title">Size</h6>
        </header>
        <div class="filter-content">
          <div class="card-body">
            <div class="size-selector">
              <div class="size-section" v-if="sizes.clothing.length">
                <p class="size-type">Clothing</p>
                <div class="size-options">
                  <button v-for="size in sizes.clothing" :key="size"    class="size-btn" :class="{ 'selected': selectedSizes.includes(size) }"
                    @click="toggleSize(size)">
                    {{ size }}
                  </button>
                </div>
              </div>
              
              <div class="size-section" v-if="sizes.waist.length">
                <p class="size-type">Waist</p>
                <div class="size-options">
                  <button v-for="size in sizes.waist" :key="size"  class="size-btn"
                    :class="{ 'selected': selectedSizes.includes(size) }"
                    @click="toggleSize(size)">
                    {{ size }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
   <div class="color-picker-container">
          <h6>Color</h6>
          <div class="color-picker">
            <div class="color-1"></div>
            <div class="color-2"></div>
            <div class="color-3"></div>
            <div class="color-4"></div>
            <div class="color-5"></div>
            <div class="color-6"></div>
            <div class="color-7"></div>
            <div class="color-8"></div>
            <div class="color-9"></div>
            
            </div>
            </div>

       

        <div class="color-picker grid">
          
             <div class="color-options">
            <div v-for="color in menProducts.available_colors"
              :key="color"
              class="color-option"
              :class="{ active: selectedColor === color }"
              :style="{ backgroundColor: getColorValue(color) }">
              {{ color }}
            </div>
          </div>
          

        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { menProducts, sizes } from '@/components/data/menProducts.js'

export default {
  name: 'MenProducts',
  data() {
    return {
      showAllCategories: false,
      selectedSizes: [],
      categories: [
        { label: "Everyone - All Gender Collection", value: "everyone" },
        { label: "Accessories & Gift Cards", value: "accesories" },
        { label: "Backpacks, Weekenders & Duffle Bags", value: "bags" },
        { label: "Dress Shirts & Button Downs", value: "shirts" },
        { label: "Hoodies & Sweatshirts", value: "hoodies" },
        { label: "T-Shirts & Tops", value: "tops" },
        { label: "Pants & Jeans", value: "pants" },
        { label: "Jackets & Coats", value: "jackets" },
        { label: "Shoes & Boots", value: "shoes" },
        { label: "Sweaters & Cardigans", value: "sweaters" }
      ],
      // colors: [
      //   {color: "#000000" ,label: "Black"},
      //   {color:"#808080", label: "Gray" },
      //   {color: "#d2b48c", label: "Tan"},
      //   {color: "#008000", label : "Green"},

      //   {color: "#0019a7", label: "Blue"}, 

      //   {color:"#a97827", label: "Brown" }, 
      //   {color: "#e495a2", label: "Pink"}, 
      //   {color : "#ff3232", label: "Red"}
      // ],
      menProducts: menProducts, 
      sizes: sizes 
    }
  },
  computed:
  {
    visibleCategories() {
      return this.showAllCategories ? this.categories : this.categories.slice(0, 5);
    },
    // visibleColor() {
    //         return this.showAllColors? this.colors : this.colors.slice(0, 9);
    // }
  },
  methods: {
    toggleViewMore() {
      this.showAllCategories = !this.showAllCategories;
    },
    toggleSize(size) {
      const index = this.selectedSizes.indexOf(size);
      if (index > -1) {
        this.selectedSizes.splice(index, 1);
      } else {
        this.selectedSizes.push(size);
      }
    },
    getColorValue(color) {
      const colorMap = {
        'Black': '#000000',
        'Brown': '#8B4513', 
        'Gray': '#808080',
        'Beige': '#F5F5DC',
        'Blue': '#0000FF',
        'Pink': '#e495a2',
        'Red': '#ff3232',
        'Green': '#065535',
        'Blue': '#0019a7', 
        'Violet': '#E6E6FA',
        'Yellow': '#FFD700',
        'Navy': '#003366'

      }
      return colorMap[color] || '#CCCCCC'
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 10px;
  float: right;
}

.men-product-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.men-product-card {
  overflow: hidden;
  transition: transform 0.2s;
  width: 270px;
  text-align: left;
  color: black;
  position: relative;
}

.men-product-card:hover {
  transform: translateY(-5px);
}

.grid h3 {
  font-size: 14px;
  margin-top: 10px;
  font-weight: 400;
}

img {
  width: 100%;
  height: 340px;
  object-fit: cover;
    position: relative;

}
.sale-text {
    position:absolute;
  top: 8px;
  left: 16px;
  background-color: white;
  border: none;
  border-radius: 2px;
  padding: 5px;
  color: #ff3232;
  font-size: 12px;
  font-weight: 500;
}

.form-check {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  user-select: none;
  text-align: left;
}

.form-check-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: all 0.2s ease;
}

.form-check:hover .checkmark {
  border-color: rgb(172, 172, 172);
}

.form-check-input:checked ~ .checkmark {
  background-color: #000;
  border-color: #000;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.form-check-input:checked ~ .checkmark:after {
  display: block;
}

.form-check .checkmark:after {
  left: 6px;
  top: 20px;
  width: 5px;
  height: auto;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.form-check-label {
  margin-left: 8px;
  line-height: 1.4;
}

.view-more-btn {
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 0;
  margin-top: 8px;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.view-more-btn:hover {
  color: #000;
}

.card {
  margin-top: 100px;
  border: none;
}

.productNo {
  border-bottom: 1px solid rgba(150, 150, 150, 0.753);
  color: rgb(98, 98, 98);
  font-size: 14px;
  text-align: left;
  left: 6px;
}

.card-header {
  padding-bottom: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  text-align: left;
}

.title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.price {
  text-align: right;
  font-size: 13px;
  margin-bottom:30px ;
}
.price-container {
  display: flex;
  float: right;
  gap: 8px;

}

.size-selector {
  margin-top: 10px;
}

.size-section {
  margin-bottom: 20px;
}

.size-type {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: left;
  color: #333;
}

.size-options {
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  gap: 8px;
}

.size-btn {
  width: 40px;
  height: 40px;
  border: none;
  background-color: rgba(230, 230, 230, 0.547);
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.size-btn:hover {
  border-color: rgb(67, 67, 67);
  border: 1px solid;
}

.size-btn.selected {
  background-color: #000;
  color: #fff;
  border-color: #000;
}

.product-color{
  font-size: 12px;
}

.price-container , .product-color, .name {
  padding-left: 5px;
}

.product-fabric{
  border: rgba(221, 221, 221, 0.658) 1px solid;
  font-size: 12px;
  width: 140px;
  padding: 4px;
  border-radius: 10px;
}

.colorpicker-wrapper {
  display: flex;
  align-items: center;
  column-gap: .5rem;
}

.colorpicker {
  padding: 0;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
}

.colorpicker::-webkit-color-swatch-wrapper {
  padding: 0;
}

.colorpicker::-webkit-color-swatch {
  border: none;
}


.color-1 {
  background-color: #000;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.color-2 {
  background-color: #808080;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.color-3 {
  background-color: #d2b48c;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.color-4 {
  background-color: #008000;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.color-5 {
  background-color: #0019a7;
  border-radius: 50%;
    height: 30px;
  width: 30px;
}

.color-6 {
  background-color: #a97827;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.color-7{
  background-color: #e495a2;
  border-radius: 50%;
   height: 30px;
  width: 30px;
}

.color-8{
  background-color: #ff3232;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.color-9{
  background-color: orange;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}
.color-1:hover, .color-2:hover , .color-3:hover, .color-4:hover, .color-5:hover, .color-6:hover, .color-6:hover, .color-7:hover, .color-8:hover, .color-9:hover{
  cursor: pointer;
  border: rgb(116, 183, 255) 2px solid;
}

.color-picker {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 180px;
  margin-left: 20px;
  padding-top: 15px;
  justify-content: center;
}
.color-picker-container h6 {
  text-align: left;
  margin-left: 20px ;
  color: #000;
  font-weight: 600;
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
</style>
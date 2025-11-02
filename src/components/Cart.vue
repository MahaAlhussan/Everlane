<template>
  <div class="cart-offcanvas" :class="{ 'show': isOpen }">
    <div class="offcanvas-backdrop" @click="closeCart"></div>
    
    <div class="offcanvas-sidebar">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Your Cart</h5>
        <button type="button" class="btn-close" @click="closeCart">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </div>
      
      <div class="offcanvas-body">
        <div class="empty-cart text-center py-5" v-if="cartItems.length === 0">
          <div class="empty-cart-icon mb-3">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" size="3x" />
          </div>
          <h6 class="mb-2">Your cart is empty</h6>
          <button class="btn btn-dark" @click="closeCart">Continue Shopping</button>
        </div>
        
        <div class="cart-items" v-else>
          <div class="cart-item" v-for="item in cartItems" :key="item.cartId">
            <div class="item-content">
              <div class="item-image-container">
                <img :src="item.image" :alt="item.name" class="item-image" />
              </div>
              
              <div class="item-details">
                <h6 class="item-name">{{ item.name }}</h6>
                <p class="item-variant">{{ item.selectedSize }} | {{ item.selectedColor }}</p>
                
                <div class="item-pricing">
                  <span class="current-price">${{ item.price }}</span>
                  <span v-if="item.sale" class="original-price">${{ item.before_price }}</span>
                  <span v-if="item.sale" class="discount-per">30% OFF</span>
                </div>
                
                <div class="item-actions">
                  <div class="quantity-controls">
                    <button class="quantity-btn" @click="decreaseQ(item.cartId)">-</button>
                    <span class="quantity">{{ item.quantity }}</span>
                    <button class="quantity-btn" @click="increaseQ(item.cartId)">+</button>
                  </div>
                  <button class="remove-btn" @click="removeItem(item.cartId)">
                    <font-awesome-icon icon="fa-solid fa-trash" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="before-you-go">
            <h6>Before You Go</h6>
            <div class="add-on-item">
              <div class="add-on-content">
                <div class="add-on-image">
                <img src="/assets/Jeans.png" alt="The Good Merino Wool Beanie" />
                </div>
                <div class="add-on-details">
                  <p class="add-on-name">The Good Merino Wool Beanie</p>
                  <p class="add-on-variant">One Size | Chambray Blue</p>
                  <p class="add-on-price">$35</p>
                </div>
               </div>
              <button class="add-to-cart-btn">ADD</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="offcanvas-footer" v-if="cartItems.length > 0">
        <div class="cart-summary">
          <div class="subtotal">
            <span>Subtotal ({{ totalItems }} items)</span>
            <span>${{ totalPrice }}</span>
          </div>
          
          <button class="checkout-btn">CONTINUE TO CHECKOUT</button>
          
          <p class="msg">Psst, get it now before it sells out.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cart'
import { menProductsDetails } from '@/components/data/menProducts.js'

export default {
  name: 'CartOffcanvas',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menProducts: menProductsDetails 
    }
  },
  setup() {
    const cartStore = useCartStore()
    return { cartStore }
  },
  computed: {
    cartItems() {
      return this.cartStore.cartItems
    },
    totalItems() {
      return this.cartStore.totalItems
    },
    totalPrice() {
      return this.cartStore.totalPrice
    },
    product() {
      return this.menProducts.find(p => p.id === parseInt(this.id))
    },
  },
  methods: {
    closeCart() {
      this.$emit('close-cart')
    },
    
    removeItem(cartId) {
      this.cartStore.removeFromCart(cartId)
    },
    
    increaseQ(cartId) {
      const item = this.cartItems.find(item => item.cartId === cartId)
      if (item) {
        this.cartStore.updateQuantity(cartId, item.quantity + 1)
      }
    },
    
    decreaseQ(cartId) {
      const item = this.cartItems.find(item => item.cartId === cartId)
      if (item && item.quantity > 1) {
        this.cartStore.updateQuantity(cartId, item.quantity - 1)
      }
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  }
}
</script>

<style scoped>
.cart-offcanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  text-align: left;
}

.cart-offcanvas.show {
  visibility: visible;
  opacity: 1;
}

.offcanvas-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.offcanvas-sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100%;
  background: white;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}

.cart-offcanvas.show .offcanvas-sidebar {
  transform: translateX(0);
}

.offcanvas-header {
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.offcanvas-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #000;
}

.btn-close {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 5px;
  opacity: 0.7;
}

.btn-close:hover {
  opacity: 1;
}

.offcanvas-body {
  flex: 1;
  padding: 0;
  overflow-y: auto;
}

/* Cart Items */
.cart-items {
  padding: 20px;
}

.cart-item {
  margin-bottom: 25px;
}

.item-content {
  display: flex;
  gap: 15px;
}

.item-image-container {
  flex-shrink: 0;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.item-details {
  flex: 1;
}

.item-name {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #000;
}

.item-variant {
  font-size: 12px;
  color: #666;
  margin: 0 0 8px 0;
}

.item-pricing {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.current-price {
  font-size: 14px;
  font-weight: 600;
  color: #000;
}

.original-price {
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
}

.discount-per {
  font-size: 11px;
  color: #dc3545;
  font-weight: 500;
}

.item-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quantity-controls {
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
}

.quantity-btn {
  background: none;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  color: #333;

}

.quantity-btn:hover {
  background: #f5f5f5;
}

.quantity {
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 500;
  min-width: 30px;
  text-align: center;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}

.remove-btn {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 5px;
  font-size: 12px;
}

.remove-btn:hover {
  color: #dc3545;
}

/* Before You Go Section */
.before-you-go {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e5e5e5;
}

.before-you-go h6 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #000;
}

.add-on-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
}

.add-on-content {
  display: flex;
  gap: 12px;
  flex: 1;
}

.add-on-image img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.add-on-details {
  flex: 1;
}

.add-on-name {
  font-size: 12px;
  font-weight: 500;
  margin: 0 0 4px 0;
  color: #000;
}

.add-on-variant {
  font-size: 11px;
  color: #666;
  margin: 0 0 6px 0;
}

.add-on-price {
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  color: #000;
}

.add-to-cart-btn {
  background: #000;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.add-to-cart-btn:hover {
  background: #333;
}

/* Cart Footer */
.offcanvas-footer {
  padding: 20px;
  border-top: 1px solid #e5e5e5;
  background: white;
}

.cart-summary {
  text-align: center;
}

.subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
}

.checkout-btn {
  width: 100%;
  background: #000;
  color: white;
  border: none;
  padding: 15px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin-bottom: 15px;
}

.checkout-btn:hover {
  background: #333;
}

.stock-notice {
  font-size: 11px;
  color: #666;
  margin: 0;
  font-style: italic;
}

/* Empty Cart */
.empty-cart {
  padding: 40px 20px;
}

.empty-cart-icon {
  color: #d6d6d6;
  margin-bottom: 20px;
}

.empty-cart h6 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
}

.empty-cart .btn-dark {
  background: #000;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
}

.empty-cart .btn-dark:hover {
  background: #333;
}

.msg{
  color: rgb(0, 0, 0);
  font-size: 11px;
  font-weight: 600;
}
</style>
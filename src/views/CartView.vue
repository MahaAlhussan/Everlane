<template>
  <div class="cart-offcanvas" :class="{ 'show': isOpen }">
    <div class="offcanvas-backdrop" @click="closeCart"></div>
    
    <div class="offcanvas-sidebar">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Your Cart</h5>
        <button type="button" class="btn-close" @click="closeCart"></button>
      </div>
      
      <div class="offcanvas-body">
        <div class="empty-cart text-center py-5">
          <div class="empty-cart-icon mb-3">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" size="2x" />
          </div>
          <h6 class="mb-2">Your cart is empty</h6>
          <p class="text-muted small mb-3">Start shopping to add items to your cart</p>
          <button class="btn btn-dark" @click="closeCart">Continue Shopping</button>
        </div>
        
     
      </div>
      
      <div class="offcanvas-footer" v-if="false" style="display: none;">
        <div class="cart-totals border-top pt-3">
          <div class="d-flex justify-content-between mb-2">
            <span>Subtotal</span>
            <span>$0.00</span>
          </div>
          <div class="d-flex justify-content-between mb-3">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <button class="btn btn-dark w-100 mb-2">Checkout</button>
          <button class="btn btn-outline-dark w-100" @click="closeCart">Continue Shopping</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartOffcanvas',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeCart() {
      this.$emit('close-cart');
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
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
  backdrop-filter: blur(2px);
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
  padding: 10px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.offcanvas-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.btn-close {
  background: none;
  border: none;
  font-size: 10px;
  cursor: pointer;
  padding: 10px;
  opacity: 0.7;
}

.btn-close:hover {
  opacity: 1;
}

.offcanvas-body {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
}

.empty-cart {
  padding: 10px 0;
}

.empty-cart-icon {
  color: #6c757d;
  opacity: 0.5;
}

.offcanvas-footer {
  padding: 5px;
  border-top: 1px solid #e9ecef;
  background: white;
}

.cart-totals {
  font-size: 12px;
}

.btn {
  padding: 10px 1.5rem;
  font-weight: 500;
  border-radius: 0;
  transition: all 0.2s;
}

.btn-dark {
  background: #000;
  border: 1px solid #000;
}

.btn-dark:hover {
  background: #333;
  border-color: #333;
}

.btn-outline-dark {
  border: 1px solid #000;
  color: #000;
}

.btn-outline-dark:hover {
  background: #000;
  color: white;
}


</style>
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isOpen: false
  }),
  
  getters: {
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    },
    cartItems: (state) => state.items
  },
  
  actions: {
    addToCart(product, selectedColor, selectedSize) {
      const existingItem = this.items.find(item => 
        item.id === product.id && 
        item.selectedColor === selectedColor && 
        item.selectedSize === selectedSize
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({
          ...product,
          selectedColor,
          selectedSize,
          quantity: 1,
          cartId: Date.now() + Math.random()
        })
      }
    },

    removeFromCart(cartId) {
      const index = this.items.findIndex(item => item.cartId === cartId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },

    updateQuantity(cartId, newQuantity) {
      const item = this.items.find(item => item.cartId === cartId)
      if (item) {
        if (newQuantity <= 0) {
          this.removeFromCart(cartId)
        } else {
          item.quantity = newQuantity
        }
      }
    },

    openCart() {
      this.isOpen = true
    },

    closeCart() {
      this.isOpen = false
    }
  }
})
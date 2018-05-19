import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters: {
    cartProducts (state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },
    cartTotal (state, getters) {
      let total = 0
      getters.cartProducts.forEach(product => {
        total += product.price * product.quantity
      })
      return total
    }
  },
  actions: {
    addProductToCart (context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if (!cartItem){
          // push product to cart
          context.commit('pushProductToCart', product)
        } else {
          // increment item quantity
          context.commit('incrementItemQuantity', cartItem)
        }
        context.commit('decrementProductInventory', product)
      }
    }
  },
  mutations: {
    pushProductToCart (state, product) {
      state.cart.push({
        id: product.id,
        quantity: 1
      })
      state.products.push(product)
    },
    incrementItemQuantity (state, cartItem) {
      cartItem.quantity++
    },
    decrementProductInventory (state, product) {
      product.inventory--
    }
  }
})
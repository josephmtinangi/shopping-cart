import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    productsCount () {
      //
    }
  },
  actions: {
    fetchProducts () {
      //
    }
  },
  mutations: {
    setProducts () {
      //
    }
  }
})
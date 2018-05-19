<template>
  <div id="app">
    <nav-bar />
    <product-list/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components: {
    ProductList,
    NavBar
  }
}
</script>

<style>
</style>

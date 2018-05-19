<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Blank',
  data () {
    return {
      products: [
        { id: 1, title: 'Tomatoes', price: 500 },
        { id: 2, title: 'Rice', price: 1500 },
        { id: 3, title: 'Beans', price: 1000 }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

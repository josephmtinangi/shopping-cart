<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Products</h3>
          </div>
          <div class="panel-body">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Inventory</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{product.id}}</td>
                  <td>{{product.title}}</td>
                  <td>{{product.price}}</td>
                  <td>{{product.inventory}}</td>
                  <td>
                    <button @click="addProductToCart(product)" class="btn btn-primary btn-sm">Add to cart</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <shopping-cart></shopping-cart>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import ShoppingCart from '@/components/ShoppingCart'
export default {
  name: 'Blank',
  data () {
    return {
      products: [
        { id: 1, title: 'Tomatoes', price: 500, inventory: 6 },
        { id: 2, title: 'Rice', price: 1500, inventory: 5 },
        { id: 3, title: 'Beans', price: 1000, inventory: 3 }
      ]
    }
  },
  computed: {
    cartProducts () {
      return store.state.products
    }
  },
  methods: {
    addProductToCart (product) {
      store.dispatch('addProductToCart', product)
    }
  },
  components: {
    ShoppingCart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

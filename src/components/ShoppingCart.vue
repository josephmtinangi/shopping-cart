<template>
	<div class="panel panel-success">
		<div class="panel-heading">
			<h3 class="panel-title">Shopping Cart</h3>
		</div>
		<div class="panel-body">
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Title</th>
						<th>Price</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="product in products" :key="product.id">
						<td>{{product.title}}</td>
            <td>{{product.price}}</td>
            <td>{{product.quantity}}</td>
					</tr>
				</tbody>
			</table>
      <p>Total: {{total}}</p>
		</div>
	</div>
</template>

<script>
import store from '@/store/index'
export default {
  name: 'ShoppingCart',
  computed: {
    products () {
      return store.getters.cartProducts
    },
    total () {
      return store.getters.cartTotal
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

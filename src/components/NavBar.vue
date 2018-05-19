<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Cool Shop</a>
      <ul class="nav navbar-nav">
        <li class="active">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    border-radius: 0;
  }
</style>

<template>
  <div class="card bg-dark">
    <p class="product-name mb-3 font-weight-bold">Product Name</p>
    <img class="product-img mb-4" src="../assets/cube.png" alt="Product image">
    <router-link to="/product/1" class="btn btn-outline-primary">Select</router-link>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    width: 300px;
    padding: 30px 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-img {
    width: 150px;
  }

  .product-name {
    color: white;
  }
</style>
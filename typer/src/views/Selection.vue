<template>
  <div class="product-grid container-lg h-100">
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Product-Card',
  components: {
    ProductCard
  }
}
</script>

<style lang="scss" scoped>
  .product-grid {
    display: grid;
    place-items: center;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
</style>

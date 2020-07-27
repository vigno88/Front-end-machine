<template>
  <div class="container-lg h-100 center">
    <LicencePlate></LicencePlate>

    <div class="control mb-3">
      <router-link to="/selection" class="btn btn-dark">Back</router-link>
      <router-link to="/selection" class="btn btn-dark" disabled>Next</router-link>
    </div>

    <Keyboard></Keyboard>
  </div>
</template>

<script>
import LicencePlate from '@/components/LicencePlate.vue'
import Keyboard from '@/components/Keyboard2.vue'

export default {
  components: {
    Keyboard,
    LicencePlate
  }
}
</script>

<style lang="scss" scoped>
  .control {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
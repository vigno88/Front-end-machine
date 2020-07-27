<template>
  <div id="app" class="h-100 bg-gradient-animated" style="min-heigth: 100%">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  @import '@/styles.scss';

  body {
    height: 100vh;
    //cursor: none !important;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter,
  .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
<template>
  <div class="app">
      <Navbar />
      <nuxt />
      <Footer />
  </div>
  
</template>

<script>
import Navbar from '@/components/navigation-bar'
import Footer from '@/components/footer'
export default {
    components: {Navbar, Footer}

}
</script>

<style lang="scss">
.app {
    display: flex;
    flex-direction: column;
}

.main {
    flex: 1 0 auto;

    max-width: 100vw;
    overflow: hidden;
}
</style>
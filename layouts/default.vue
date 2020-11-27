<template>
  <div>
    <nav-bar></nav-bar>
    <Nuxt />
    <footers></footers>
    <client-only>
      <consent></consent>
    </client-only>
  </div>
</template>
<script>
import Footers from '@/components/footer.vue'
import NavBar from '@/components/navBar.vue'
import Consent from '@/components/consent.vue'
export default {
  components: {
    NavBar,
    Footers,
    Consent,
  },
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

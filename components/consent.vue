<template>
  <div v-if="showConsent" id="consent">
    <p>We use cookies to improve your browsing experience.</p>
    <button @click="confirmConsent">Okay!</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showConsent: localStorage.getItem('confirmed') !== 'true',
    }
  },
  methods: {
    confirmConsent() {
      this.$store.commit('confirm')
      this.showConsent = false
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
#consent {
  display: flex;
  flex-direction: row;
  background-color: $darkTeal;
  width: 50vw;
  position: fixed;
  bottom: 1vw;
  left: 1vw;
  padding: 20px 20px 20px 20px;
  align-content: center;
  justify-content: space-around;
  z-index: 10001;
  border-radius: 10px;
  a {
    text-decoration: underline;
  }
  button {
    color: white;
    border: none;
    padding: 5px 10px 5px 10px;
    transition: all ease 0.5s;
    border-radius: 8px;
    background-color: $spaceBlue;
  }
}
@media only screen and (max-width: $breakpoint-sm) {
  #consent {
    width: 100vw;
    bottom: 0vw;
    left: 0vw;
    flex-direction: column;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
@media only screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md) {
  #consent {
    width: 100vw;
    bottom: 0vw;
    left: 0vw;
  }
}
@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  #consent {
    width: 75vw;
    bottom: 1vw;
    left: 1vw;
  }
}
</style>

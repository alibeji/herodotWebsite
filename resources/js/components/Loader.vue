<template>
  <div v-show="isLoading">
  <strong>Loading...</strong>
  </div>
</template>

<script>
  export default {
    name: "Loader",
    props: {
      isLoading: false
    }
  }
</script>

<style scoped>

</style>
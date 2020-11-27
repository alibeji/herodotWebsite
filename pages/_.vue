<template>
  <b-container fluid>
    <b-row id="not-found">
      <b-col md="6">
        <h1>404</h1>
        <h2>Are you lost?</h2>
        <br />
        <p>
          Seems like the rift you have taken isn't working proprely. Click below
          to go back to the website.
        </p>
        <router-link to="/">
          <button class="main-button">
            <span class="text"> TAKE ME BACK ! </span>
          </button>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  head() {
    return {
      title: 'Page Not Found',
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/constants.scss';
@import '@/assets/scss/style.scss';
#not-found {
  background-image: url(/forest.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-attachment: fixed;
  h1 {
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.9);
    font-weight: 700;
    font-size: 120px;
    padding-bottom: 30px;
    font-family: Montserrat, sans-serif !important;
  }
  h2 {
    text-shadow: 0 0 0px rgba(255, 255, 255, 0.7);
  }
}
</style>

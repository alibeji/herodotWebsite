<template>
  <div class="col coming-soon-container">
    <h2>Coming soon...</h2>
    <p>
      Herodotus said it best: "The only good is knowledge."
      <br />And good things? Are worth the wait.
      <br />Inquiries forthcoming.
    </p>
  </div>
</template>

<script>
const readingTime = require("reading-time");
export default {
  name: "BlogComingSoon"
};
</script>

<style type="text/scss" lang="scss" scoped>
@import "~@/_variables.scss";
h2 {
  color: $sky;
}
.coming-soon-container {
  margin: 2rem 5rem;
  min-height: 40vh;

  background-image: url("../../../public/ui/misc/aqueduct.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
}
</style>
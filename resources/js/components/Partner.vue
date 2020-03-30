<template>
  <vue-aos animation-class="fadeInUp animated">
    <div class="text-primary text-center">
      <img :src="image" />
      <br/>
      <br>
      <p>
        <strong>{{name}}</strong><br>
        <br />
        {{description}}
      </p>
      <br>
    </div>
  </vue-aos>
</template>
<script>
export default {
  name: "Partner",
  props: ["name", "image", "description"]
};
</script>

<style type="text/scss" lang="scss" scoped>
img {
  height: 10vh;
  width: auto;
  max-width: 60%;
}
</style>
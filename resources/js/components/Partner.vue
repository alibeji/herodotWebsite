<template>
  <vue-aos animation-class="fadeInUp animated">
    <div class="mt-2 mb-2 text-primary text-center">
      <img :src="image" />
      <p>
        <strong>{{name}}</strong>
        <br />
        {{description}}
      </p>
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
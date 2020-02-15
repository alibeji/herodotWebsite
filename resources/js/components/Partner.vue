<template>
<vue-aos animation-class="fadeInLeft animated">
  <div class="row mt-4 mb-4">
    <div class="col-3">
      <img :src="image" />
    </div>
    <div class="col-9 text-left">
      <div>
        <strong class="text-primary">{{name}}</strong>
      </div>
      <div class="text-primary">{{description}}</div>
    </div>
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
  max-width: 100%;
  height: auto;
}
</style>
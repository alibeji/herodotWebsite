<template>
  <vue-aos animation-class="slideInUp animated">
    <div class="mt-2 mb-2">
      <div>
        <img :src="image" />
      </div>
      <div class="text-primary">
        {{name}}
        <a :href="`https://www.linkedin.com/in/${linkedinUsername}/`" target="_blank">
          <small>
            <i class="fab fa-linkedin"></i>
          </small>
        </a>
      </div>
      <div>
        <strong class="text-primary">{{position}}</strong>
      </div>
      <cite class="text-primary">
        <small>"{{quote}}"</small>
      </cite>
    </div>
  </vue-aos>
</template>
<script>
export default {
  name: "TeamMember",
  props: ["name", "image", "position", "quote", "linkedinUsername"]
};
</script>

<style type="text/scss" lang="scss" scoped>
img {
  border-radius: 50%;
  width: 60%;
  height: auto;
}
</style>
<template>
  <vue-aos animation-class="slideInUp animated">
    <div class="mt-2 mb-2 text-primary">
      <img :src="image" />
      <p>
        {{name}}
        <a :href="`https://www.linkedin.com/in/${linkedinUsername}/`" target="_blank">
          <small>
            <i class="fab fa-linkedin"></i>
          </small>
        </a>
        <br />
        <strong class>{{position}}</strong>
      </p>
      <!--<cite class>
        <small>"{{quote}}"</small>
      </cite>-->
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
  width: 30%;
  height: auto;
}
</style>
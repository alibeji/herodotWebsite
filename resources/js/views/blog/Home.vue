<template>
  <div class="container-fluid bg-white">
    <div class="row">
      <h1 class="col-5 mr-auto ml-auto text-center mt-4 mb-4">Inquiries</h1>
    </div>
    <p class="text-center">Herodot team here displays its inquiries</p>
    <loader :is-loading="!loaded"></loader>
    <div class="row pb-5">
      <template v-for="post in posts">
        <div class="col-12 col-md-6 mt-2" :key="post.id">
          <vue-aos animation-class="zoomIn animated">
            <blog-snippet :post="post"></blog-snippet>
          </vue-aos>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Loader from "../../components/Loader";
import FetchCMSDataMixin from "../../mixins/FetchCMSDataMixin";

import BlogSnippet from "../../components/BlogSnippet";

export default {
  name: "BlogHome",
  components: { Loader, BlogSnippet },
  mixins: [FetchCMSDataMixin],
  data() {
    return {
      posts: null,
      target: "/posts"
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    onSuccess: function(data) {
      this.posts = data;
    }
  }
};
</script>

<style  type="text/scss" lang="scss" scoped>
@import "~@/variables";
h1 {
  border-left: none;
  border-bottom: 4px solid $fade;
}
</style>

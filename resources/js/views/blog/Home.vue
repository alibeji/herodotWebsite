<template>
  <div class="container-fluid bg-white">
    <div class="row">
      <h1 class="col-5 mr-auto ml-auto text-center mt-4 mb-4">Inquiries</h1>
    </div>
    <p class="text-center">Herodot team here displays its inquiries</p>
    <loader :is-loading="!loaded"></loader>
    <div class="row pb-5" v-if="posts.length">
      <template v-for="post in posts">
        <div class="col-12 col-md-6 mt-2" :key="post.id">
          <vue-aos animation-class="zoomIn animated">
            <blog-snippet :post="post"></blog-snippet>
          </vue-aos>
        </div>
      </template>
    </div>
    <div class="row" v-else>
      <blog-coming-soon></blog-coming-soon>
    </div>
  </div>
</template>

<script>
import Loader from "../../components/Loader";
import FetchCMSDataMixin from "../../mixins/FetchCMSDataMixin";

import BlogComingSoon from "../../components/BlogComingSoon";
import BlogSnippet from "../../components/BlogSnippet";

export default {
  name: "BlogHome",
  components: { Loader, BlogComingSoon, BlogSnippet },
  mixins: [FetchCMSDataMixin],
  data() {
    return {
      posts: [],
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

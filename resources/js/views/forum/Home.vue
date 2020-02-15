<template>
  <div>
  <loader :is-loading="!loaded" :progress="progressValue"></loader>
    <router-view></router-view>
  </div>
</template>

<script>
  import Loader from "../../components/Loader";
  import FetchDataMixin from "../../mixins/FetchDataMixin";

  export default {
    name: "ForumHome",
    components: {Loader},
    mixins: [FetchDataMixin],
    data() {
      return {
        categories: null,
        target: "/api/categories"
      }
    },
    created(){
      this.fetchData()
    },
    methods: {
      onSuccess: function(data){
        this.categories = data;
      }
    }
  }
</script>

<style scoped>

</style>
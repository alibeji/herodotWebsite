<template>
  <div>
    <router-link v-for="category in categories" :to="{name: 'category', params:{id:category.id}}" :key="category.id">
      <img :src="category.icon_path" :alt="category.title">
      {{category.title}}
    </router-link>
  </div>
</template>

<script>
  import Loader from "../../components/Loader";
  import FetchDataMixin from "../../mixins/FetchDataMixin";

  export default {
    name: "Categories",
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
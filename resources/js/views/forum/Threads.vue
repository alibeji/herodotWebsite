<template>
  <div>
  <img :src="category.icon_path" :alt="category.title">
  {{category.title}}
    <thread-create-form v-show="isAuthenticated" :category-id="category.id"></thread-create-form>
    <router-link v-for="thread in threads" :to="{name: 'thread', params:{id: thread.id}}" :key="thread.id">
      {{thread.title}}
    </router-link>
  </div>
</template>

<script>
  import FetchDataMixin from "../../mixins/FetchDataMixin";
  import AuthMixin from "../../mixins/AuthMixin";
  import ThreadCreateForm from "../../components/ThreadCreateForm";

  export default {
    name: "Threads",
    components: {ThreadCreateForm},
    mixins: [FetchDataMixin, AuthMixin],
    data() {
      return {
        category: {},
        threads: null,
        target: "/api/threads",
      }
    },
    created() {
      let categoryId = this.$route.params.id;
      this.getCategory(categoryId);
      this.fetchData({categoryId: categoryId});
    },
    methods: {
      onSuccess: function(data){
        this.threads = data;
      },
      getCategory: function(categoryId){
        let config = {
          onDownloadProgress: progressEvent => {
            this.progressValue = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
          },
        };
        var self = this;
        axios.get(`/api/categories/${categoryId}`, config).then(response => {
          self.category = response.data;
        }).catch(error => {
          self.errors = error || {};
          self.onFail(error);
        });
      }
    }
  }
</script>

<style scoped>

</style>
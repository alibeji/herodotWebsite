<template>
  <div>
    <button @click="showThreadForm">New Thread</button>
    <div class="modal" v-show="showForm">
      <label for="title">Thread title:</label>
      <input type="text" id="title" v-model="title" required>
      <label for="message">Write a message:</label>
      <textarea id="message" v-model="message" required></textarea>
      <button @click="submit">Send</button>
    </div>
  </div>
</template>

<script>
  import SendDataMixin from "../mixins/SendDataMixin";

  export default {
    name: "ThreadCreateForm",
    mixins: [SendDataMixin],
    props: {
      categoryId: Number,
    },
    data(){
      return{
        showForm: false,
        message: "",

        target: "/api/threads"
      }
    },
    methods: {
      showThreadForm: function(){
        this.showForm = true;
      },
      submit: function () {
        let self = this;
        this.sendData({
          categoryId: self.categoryId,
          title: self.title,
          message: self.message
        });
      },
      onSuccess: function(thread) {
        this.$router.push({name: "thread", params: {id: thread.id}});
      },
    }
  }
</script>

<style scoped>

</style>
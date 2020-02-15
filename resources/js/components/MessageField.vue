<template>
  <div>
    <label for="message">Write a message:</label>
    <textarea title="Message" id="message" v-model="message"></textarea>
    <button @click="submit">Send</button>
  </div>
</template>

<script>
  import SendDataMixin from "../mixins/SendDataMixin";

  export default {
    name: "MessageField",
    mixins: [SendDataMixin],
    props: {
      threadId: {
        type: Number,
        required: true,
      }
    },
    data(){
      return{
        message: "",
        target: "/api/messages"
      }
    },
    methods: {
      submit: function () {
        var self = this;
        this.sendData({
          threadId: self.threadId,
          message: self.message
        });
      },
      onSuccess: function(data) {
        this.$emit('update-data');
      },
    }

  }
</script>

<style scoped>

</style>
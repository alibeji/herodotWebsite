<template>
  <div>
    {{thread.title}}
    <div v-for="message in messages" :key="message.id">
      <strong>{{message.user.username}}</strong>
      {{message.text}}
    </div>
    <template v-if="isAuthenticated">
      <message-field :thread-id="thread.id" @update-data="updateThreadData"></message-field>
    </template>
  </div>
</template>

<script>
import Loader from "../../components/Loader";
import FetchDataMixin from "../../mixins/FetchDataMixin";
import AuthMixin from "../../mixins/AuthMixin";
import MessageField from "../../components/MessageField";

export default {
  name: "Thread",
  components: { MessageField, Loader },
  mixins: [FetchDataMixin, AuthMixin],
  data() {
    return {
      messages: null,
      thread: {},
      target: "/api/messages"
    };
  },
  created() {
    let threadId = this.$route.params.id;
    this.updateThreadData();
    this.getThread(threadId);
  },
  methods: {
    onSuccess: function(data) {
      this.messages = data;
    },
    getThread: function(threadId) {
      let config = {
        onDownloadProgress: progressEvent => {
          this.progressValue = Math.floor(
            (progressEvent.loaded * 100) / progressEvent.total
          );
        }
      };
      var self = this;
      axios
        .get(`/api/threads/${threadId}`, config)
        .then(response => {
          self.thread = response.data;
        })
        .catch(error => {
          self.errors = error || {};
          self.onFail(error);
        });
    },
    updateThreadData(event) {
      var threadId = this.$route.params.id;
      this.fetchData({ threadId: threadId });
    }
  }
};
</script>

<style scoped>
</style>
export default {
  data() {
    return {
      errors: {},
      success: false,
      loaded: true,
      target: '',
      progressValue: 0,
    }
  },

  methods: {
    onSuccess: function () {},
    onFail: function () {},
    sendData(params = {}) {
      if (this.loaded) {
        this.progressValue=0;
        this.loaded = false;
        this.success = false;
        this.errors = {};
        let config = {
          onUploadProgress: progressEvent => {
            this.progressValue = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
          },
        };
        var self = this;
        axios.post(this.target, params, config).then(response => {
          self.onSuccess(response.data);
          self.success = true;
        }).catch(error => {
          self.errors = error || {};
          self.onFail(error);
        });
      }
    },

  },
}
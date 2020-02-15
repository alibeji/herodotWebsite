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
    onFulfill: function () {},
    fetchData(params = {}) {
      if (this.loaded) {
        this.progressValue=0;
        this.loaded = false;
        this.success = false;
        this.errors = {};
        let config = {
          onDownloadProgress: progressEvent => {
            this.progressValue = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
          },
        };
        var self = this;
        axios.get(this.target, params, config).then(response => {
          self.onSuccess(response.data);
          self.success = true;
        }).catch(error => {
          self.errors = error || {};
          self.onFail(error);
        }).then(function(){
          self.loaded = true;
          self.onFulfill()
        })
      }
    },

  },
}
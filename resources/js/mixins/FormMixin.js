export default {
  data() {
    return {
      fields: {},
      errors: {},
      success: false,
      loaded: true,
      action: '',
      onSuccess: function () {},
      onFail: function () {}
    }
  },

  methods: {

    submit() {
      if (this.loaded) {
        this.loaded = false;
        this.success = false;
        this.errors = {};
        axios.post(this.action, this.fields).then(response => {
          this.fields = {};
          this.loaded = true;
          this.success = true;
          this.onSuccess(response.data);
        }).catch(error => {
          this.loaded = true;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
          else if(error.response.status === 401){
            this.errors = error.response.data || {};
          }
          this.onFail();
        });
      }
    },

  },
}
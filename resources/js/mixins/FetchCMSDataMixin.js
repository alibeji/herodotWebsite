export default {
  data() {
    return {
      errors: {},
      success: false,
      loaded: true,
      target: '',
      targetPrefix: SETTINGS.STRAPI_URL,
    }
  },

  methods: {
    onSuccess: function () {},
    onFail: function () {},
    onFulfill: function () {},
    fetchData(params = {}) {
      if (this.loaded) {
        this.loaded = false;
        this.success = false;
        this.errors = {};
        let url = this.targetPrefix + this.target;
        //this.getAjax(url, this.onSuccess, this.onFail, this.onFulfill, this);
        this.fetch(url, this.onSuccess, this.onFail, this.onFulfill, this);
      }
    },
    fetch: function(url, success, fail, fullfill, vm){
      fetch(url)
          .then(function(response){
            vm.loaded = true;
            if (response.status >= 200 && response.status < 300) {
              return response.json()
            } else {
              let error = new Error(response.statusText);
              error.response = response;
              throw error
            }
          })
          .then(function(data) {
            success(data);
            vm.success = true;
          }).catch(function(error) {
            vm.errors = error || {};
            fail(error)
          }).finally(fullfill)
    },
    getAjax: function(url, success, fail, fullfill, vm) {
        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
          if (xhr.readyState>3){
            if(xhr.status===200){
              success(xhr.responseText);
              vm.success = true;
            }else{
              vm.errors = xhr.responseText || {};
              fail(xhr.responseText)
            }
            vm.loaded = true;
            fullfill(xhr.responseText)
          }
        };
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send();
        return xhr;
      },
  },
}
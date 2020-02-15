<template>
  <div class="modal fade" tabindex="-1" role="dialog" id="newsletter-modal">
    <div class="mr-3 mt-2">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body d-flex flex-column text-center align-items-center">
          <div class>
            <h2>Inquiries Subscription</h2>
            <p>Be the first to read our INQUIRIES where you’ll dream with us about the future of gaming, follow our survival journey of entrepreneurship, and learn more about history and feel why we love it.</p>
          </div>
          <div class="flex-column" :class="[mailSent ? 'd-none':'d-flex']">
            <div class="text-primary text-left mt-2">
              <label for="name">NAME</label>
            </div>
            <div class="text-left">
              <input name="name" id="name" v-model="name" required />
            </div>
            <div class="text-primary text-left mt-2">
              <label for="email">EMAIL</label>
            </div>
            <div class="text-left">
              <input name="email" id="email" v-model="email" required />
            </div>
            <div class="mt-3 mb-2">
              <button class="btn" @click="submit" :disabled="!isValidForm">Subscribe</button>
            </div>
          </div>
          <div :class="{'d-none': !mailSent}">
            <h3>Thank you!</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsletterModal",
  data() {
    return {
      mailSent: false,
      name: null,
      email: null
    };
  },
  computed: {
    isValidForm: function() {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isValidEmail = re.test(this.email);
      return isValidEmail && this.name;
    }
  },
  methods: {
    postAjax: function(url, data, success) {
      var params =
        typeof data == "string"
          ? data
          : Object.keys(data)
              .map(function(k) {
                return (
                  encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
                );
              })
              .join("&");
      var xhr = window.XMLHttpRequest
        ? new XMLHttpRequest()
        : new ActiveXObject("Microsoft.XMLHTTP");
      xhr.open("POST", url);
      xhr.onreadystatechange = function() {
        if (xhr.readyState > 3 && xhr.status === 200) success(xhr.responseText);
      };
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(params);
      return xhr;
    },

    submit: function() {
      let self = this;
      if (this.isValidForm) {
        self = this;
        let data = {
          name: self.name,
          email: self.email
        };
        this.postAjax(`${SETTINGS.STRAPI_URL}/mailing-lists`, data, function() {
          self.mailSent = true;
          setTimeout(function() {
            $("#newsletter-modal").modal("hide");
          }, 1000);
        });
      }
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
.modal {
  z-index: 100000;
  background: rgba(255, 255, 255, 0.97);
  .modal-dialog {
    max-width: 90%;
    .modal-content {
      background: none;
      border: none;
    }
  }
}
</style>

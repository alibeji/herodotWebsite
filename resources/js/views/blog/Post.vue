<template>
  <div class="container-fluid bg-white">
    <div class="row">
      <div
        class="illustration"
        :style="{ backgroundImage: `url('${this.cms_url}${this.post.illustration.url}')` }"
      ></div>
    </div>
    <div class="sticky-top">
      <div class="row align-items-center bg-fade pr-3 pl-3">
        <div class="col-8">
          <h2 class="title mt-2">{{post.title}}</h2>
          <p class="meta-info">
            {{post.author.username}}
            <br />
            {{published_at}} - {{readDuration.text}}
          </p>
        </div>
        <div class="col-4 d-flex justify-content-around social-media-container">
          <social-sharing
            :title="post.title"
            :description="post.body.substring(0,450)"
            hashtags="herodot"
            inline-template
          >
            <div>
              <network network="facebook">
                <svg viewBox="0 0 113 113" class="social-media-icon">
                  <path
                    d="M48.69 39.28V47h-5.64v9.41h5.64v28h11.58v-28H68s.73-4.51 1.09-9.45h-8.78v-6.45a2.74 2.74 0 012.52-2.26h6.31v-9.8h-8.58c-12.16 0-11.87 9.42-11.87 10.83z"
                  />
                </svg>
              </network>
              <network network="twitter">
                <svg
                  viewBox="0 0 111.82 111.82"
                  class="social-media-icon"
                  data-sharer="twitter"
                  data-title="Checkout Sharer.js!"
                  data-hashtags="awesome, sharer.js"
                  data-url="https://ellisonleao.github.io/sharer.js/"
                >
                  <path
                    d="M85.1 38.54a24.16 24.16 0 01-6.74 1.82A11.67 11.67 0 0083.52 34a23.81 23.81 0 01-7.46 2.8 11.62 11.62 0 00-3.91-2.7 11.79 11.79 0 00-4.65-1 11.65 11.65 0 00-11.73 11.57 11.49 11.49 0 00.3 2.64 33.52 33.52 0 01-24.18-12.07A11.37 11.37 0 0030.3 41a11.52 11.52 0 005.22 9.62 12 12 0 01-5.32-1.45v.14a11.63 11.63 0 009.42 11.33 12.16 12.16 0 01-5.3.19 11.69 11.69 0 0011 8 23.77 23.77 0 01-14.57 5 26.13 26.13 0 01-2.8-.16 33.58 33.58 0 0018 5.19c21.58 0 33.38-17.6 33.38-32.87v-1.5a23.26 23.26 0 005.77-5.95z"
                    transform="translate(-.18 -.49)"
                  />
                </svg>
              </network>
              <network network="linkedin">
                <svg viewBox="-13 -10 50 50" class="social-media-icon">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </network>
            </div>
          </social-sharing>
        </div>
      </div>
      <div class="row">
        <vue-scroll-progress-bar
          height="3px"
          backgroundColor="linear-gradient(to right, #213152, #3190AA)"
          containerClass="w-100"
          containerColor="#E1E1D9"
        ></vue-scroll-progress-bar>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <p>{{post.body}}</p>
      </div>
    </div>
    <div class="row pb-5">{{post.title}}</div>
  </div>
</template>

<script>
const readingTime = require("reading-time");

import { VueScrollProgressBar } from "@guillaumebriday/vue-scroll-progress-bar";

import FetchCMSDataMixin from "../../mixins/FetchCMSDataMixin";

export default {
  name: "BlogPost",
  mixins: [FetchCMSDataMixin],
  components: { VueScrollProgressBar },
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      cms_url: SETTINGS.STRAPI_URL,
      target: `/posts/${this.id}`,
      post: null,
      currentUrl: window.location.href
    };
  },
  computed: {
    illustrationUrl: function() {
      return ``;
    },
    published_at: function() {
      return moment(this.post.created_at).format("MMM DD, YYYY");
    },
    readDuration: function() {
      return readingTime(this.post.body);
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    onSuccess: function(data) {
      this.post = data;
    }
  }
};
</script>

<style  type="text/scss" lang="scss" scoped>
@import "~@/variables";
.illustration {
  height: 35vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  font-weight: bold;
  text-transform: uppercase;
  color: $secondary;
}
.meta-info {
  margin: 0;
  font-size: 0.5rem;
  line-height: 0.6rem;
  padding: 0.3rem 0;
}
.social-media-container {
  padding: 0.2rem;
}
</style>

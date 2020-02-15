<template>
  <div
    class="blog-snippet-container bg-fade d-flex"
    :class="{'compact': compact, 'flex-column': !compact}"
  >
    <div
      class="illustration"
      :class="{'compact': compact}"
      :style="{ backgroundImage: `url('${this.cms_url}${this.post.illustration.url}')` }"
    >
      <div class="illustration-effect"></div>
    </div>
    <div class="pl-3 d-flex flex-column">
      <h2 class="title mt-2">{{post.title}}</h2>
      <p class="snippet">{{post.body.substring(0,450)}}...</p>

      <div class="d-flex justify-content-between align-items-end mt-auto">
        <p class="meta-info">
          {{post.author.username}}
          <br />
          {{published_at}} - {{readDuration.text}}
        </p>
        <div class="read-more">
          <router-link :to="{name: 'blog-post', params:{id:post.id}}">Continue reading</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const readingTime = require("reading-time");
export default {
  name: "BlogSnippet",
  props: {
    post: {
      required: true
    },
    compact: {
      default: false
    }
  },
  data: function() {
    return {
      cms_url: SETTINGS.STRAPI_URL
    };
  },
  computed: {
    published_at: function() {
      return moment(this.post.created_at).format("MMM DD, YYYY");
    },
    readDuration: function() {
      return readingTime(this.post.body);
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
@import "~@/_variables.scss";
.blog-snippet-container {
  border-radius: 5px;
  p {
    color: $primary;
  }
  .illustration {
    height: 50vh;
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    .illustration-effect {
      position: absolute;
      bottom: 0;
      z-index: 1000;
      width: 100%;
      height: 0.5rem;
      background: rgba(225, 225, 217, 0.7);
    }
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
  .read-more {
    background-color: $secondary;
    padding: 0.3rem;

    text-align: center;
    font-size: 0.5rem;
    text-transform: uppercase;
    font-weight: 600;

    a {
      color: white;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.compact {
  max-height: 36vh;
  .illustration {
    .illustration-effect {
      width: 0.5rem;
      height: 100%;
      right: 0;
    }
  }
}
</style>
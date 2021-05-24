<template>
  <div class="jumbotron-main">
    <div class="jumbotron-contents">
      <h1>Play History Your Way</h1>
      <p>
        Herodot is an indie game studio that connects players to their
        historical heritage.<br />
        Inspired by the past and driven by the future, we are here to push
        humanity forward by throwing it back.<br />
        We believe that future can awaken history cooler and We are designing
        Bygone, our first game, from that perspective.
      </p>
      <div class="socials">
        <nuxt-link to="/about"
          ><button class="main-button">More about Us</button></nuxt-link
        >
      </div>
    </div>
    <isometric-tipis class="jumbotron-decoration" />
    <img
      src="/isometric_tipis.svg"
      alt=""
      class="jumbotron-decoration-medium"
    />
    <img src="/isometric_tipis.svg" alt="" class="jumbotron-decoration-small" />
  </div>
</template>
<script>
import IsometricTipis from './isometric-tipis.vue'
export default {
  components: {
    IsometricTipis,
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.jumbotron-main {
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  margin-bottom: 5em;
  .jumbotron-decoration {
    width: 50%;
    height: auto;
    align-self: center;
    justify-self: center;
  }
  .jumbotron-decoration-medium {
    display: none;
  }
  .jumbotron-decoration-small {
    display: none;
  }
  .jumbotron-contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 45%;
    margin-left: 5%;
    .main-button {
      font-size: 18px;
    }
    h1 {
      color: $almostWhite;
      margin-top: 3em;
      font-size: 70px;
      font-weight: 500;
    }
    .socials {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      //border-top: solid 3px $almostWhite;
      padding-top: 1em;
      padding-bottom: 1em;
      .social-link {
        height: 2.5em;
        width: auto;
        margin-left: 3em;
      }
    }
    #jumbotron-logo {
      max-width: 90%;
      height: auto;
      margin-top: 10em;
      margin-bottom: 1em;
    }
  }
}
@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  .jumbotron-main {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .jumbotron-decoration {
      display: none;
    }
    .jumbotron-decoration-medium {
      display: block;
      width: 60%;
    }
    .jumbotron-decoration-small {
      display: none;
    }
    .jumbotron-contents {
      margin-top: 6em;
      width: 70%;
      text-align: center;
      h1 {
        margin-top: 0;
      }
      #jumbotron-logo {
        margin-top: 0;
      }
      .socials {
        justify-content: center;
        .social-link {
          height: 1.8em;
          width: auto;
          margin-left: 1em;
        }
      }
    }
  }
}
@media only screen and (max-width: $breakpoint-md) {
  .jumbotron-main {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .jumbotron-decoration {
      display: none;
    }
    .jumbotron-decoration-medium {
      display: none;
    }
    .jumbotron-decoration-small {
      display: block;
      width: 100%;
    }
    .jumbotron-contents {
      margin-top: 6em;
      width: 90%;
      h1 {
        margin-top: 0;
      }
      #jumbotron-logo {
        margin-top: 1em;
        max-width: 100%;
      }
      .socials {
        width: 100%;
        h1 {
          font-size: 20px;
        }
        .social-link {
          height: 1.5em;
          width: auto;
          margin-left: 0.5em;
        }
      }
    }
  }
}
</style>

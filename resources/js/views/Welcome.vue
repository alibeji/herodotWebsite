<template>
  <div>
    <section class="jumbotron mb-0" id="jumbotron">
      <div class="col jumbotron-body d-flex justify-content-around flex-column">
        <div class="text-center">
          <vue-aos animation-class="fadeOutUp">
            <img
              src="../../../public/herodot-logo.svg"
              class="herodot-logo"
              alt="Herodot Studio logo"
            />
          </vue-aos>
        </div>
        <template v-if="isMobile">
          <div class="row cta-section-mobile bg-dark pt-2 pb-2">
            <div class="col-12">
              <p class="text-white">
                Hi. I’M STOUFA.
                <br />I am the Co-Founder and the Game Director at Herodot Studio.
                I’m glad you landed here.
                <br />All of us at Herodot set our hearts on being the Indie Game Studio you want your friends to hear about.
                <br />Stick around to know what to tell them.
                <br />Happy scrolling.
              </p>
            </div>
            <div class="col-4">
              <img src="../../../public/photos/sto.jpg" class="sto-photo" />
            </div>
            <div class="col-8 d-flex align-items-center text-uppercase">
              <p class="text-white">
                Mustapha Gharbi
                <br />
                <small>Game Director</small>
              </p>
            </div>
          </div>
        </template>
        <template v-else>
          <vue-aos animation-class="fadeInUp animated">
            <div class="d-none d-md-flex flex-row align-items-center cta-section">
              <img src="../../../public/photos/sto.jpg" class="sto-photo" />

              <div class="text-uppercase cta-description">
                <p class="text-white">
                  Hi. I’M STOUFA.
                  <br />I am the Co-Founder and the Game Director at Herodot Studio.
                  I’m glad you landed here.
                  <br />All of us at Herodot set our hearts on being the Indie Game Studio you want your friends to hear about.
                  <br />Stick around to know what to tell them.
                  <br />Happy scrolling.
                </p>
                <p class="text-white">
                  Mustapha Gharbi
                  <br />
                  <small>Game Director</small>
                </p>
              </div>
            </div>
          </vue-aos>
        </template>
      </div>
      <div class="d-none d-md-block row">
        <scroll-icone href="#roadmap"></scroll-icone>
      </div>
    </section>
    <section
      class="container-fluid bg-white p-3 roadmap-section"
      id="roadmap"
      ref="after-jumbotron"
    >
      <div class="row">
        <vue-aos animation-class="fadeInLeft animated">
          <h1>Agenda</h1>
        </vue-aos>
      </div>
      <timeline></timeline>
    </section>
    <section class="container-fluid" id="bygone-section">
      <div class="row" :class="{'bygone-section-mobile': isMobile}">
        <div class="col-12 col-md-5 p-3 mt-5 mb-5 text-center">
          <h2>OUR UPCOMING GAME</h2>
          <p>UNVEIL THE LORE BEHIND ANCIENT CIVLIZATIONS BY SHATTERING THE CONFINES OF REALITY.</p>
          <p>
            A game where history, strategy, and motion all meet.
            Collect, win, venture, and interact, in a free-to-play immersive card game where your contribution impacts the storyline.
          </p>
          <a href="https://www.playbygone.com/" class="btn">FIND OUT MORE</a>
        </div>
        <div class="col-12 col-md-7" id="bygone-background"></div>
      </div>
    </section>
    <section class="container-fluid bg-white p-3">
      <div class="row">
        <vue-aos animation-class="fadeInLeft animated">
          <h1>Latest Inquiries</h1>
        </vue-aos>
      </div>
      <div class="row">
        <vue-aos animation-class="zoomIn animated">
          <div class="col-12 col-md-6 p-1">
            <blog-snippet :post="posts[0]"></blog-snippet>
          </div>
        </vue-aos>
        <div class="col-12 col-md-6">
          <div class="row">
            <vue-aos animation-class="zoomIn animated">
              <div class="col-12 p-1">
                <blog-snippet :compact="!isMobile" :post="posts[1]"></blog-snippet>
              </div>
            </vue-aos>
          </div>
          <div class="row">
            <vue-aos animation-class="zoomIn animated">
              <div class="col-12 p-1">
                <blog-snippet :compact="!isMobile" :post="posts[2]"></blog-snippet>
              </div>
            </vue-aos>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 text-center">
          <a href="/blog" class="btn">See more</a>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-snow pb-5 pt-5">
      <p class="text-center col-8 col-md-6 mr-auto ml-auto">
        Amplifying our Gaming impact, we also aspire to be a Content Factory that provides insights and quests that we’ll call INQUIRIES - a term coined by Herodotus himself.
        We’ll challenge perspectives, seek all truths, and question some answers.
      </p>
      <div class="row align-items-center mt-5">
        <div class="col-6">
          <button
            class="btn"
            data-toggle="modal"
            data-target="#newsletter-modal"
          >Subscribe to our newsletter</button>
        </div>
        <div class="col-6 d-flex justify-content-around">
          <svg viewBox="0 0 113 113" class="social-media-icon">
            <path
              d="M48.69 39.28V47h-5.64v9.41h5.64v28h11.58v-28H68s.73-4.51 1.09-9.45h-8.78v-6.45a2.74 2.74 0 012.52-2.26h6.31v-9.8h-8.58c-12.16 0-11.87 9.42-11.87 10.83z"
            />
          </svg>
          <svg viewBox="0 0 111.82 111.82" class="social-media-icon">
            <path
              d="M85.1 38.54a24.16 24.16 0 01-6.74 1.82A11.67 11.67 0 0083.52 34a23.81 23.81 0 01-7.46 2.8 11.62 11.62 0 00-3.91-2.7 11.79 11.79 0 00-4.65-1 11.65 11.65 0 00-11.73 11.57 11.49 11.49 0 00.3 2.64 33.52 33.52 0 01-24.18-12.07A11.37 11.37 0 0030.3 41a11.52 11.52 0 005.22 9.62 12 12 0 01-5.32-1.45v.14a11.63 11.63 0 009.42 11.33 12.16 12.16 0 01-5.3.19 11.69 11.69 0 0011 8 23.77 23.77 0 01-14.57 5 26.13 26.13 0 01-2.8-.16 33.58 33.58 0 0018 5.19c21.58 0 33.38-17.6 33.38-32.87v-1.5a23.26 23.26 0 005.77-5.95z"
              transform="translate(-.18 -.49)"
            />
          </svg>
          <svg viewBox="0 0 111.82 111.82" class="social-media-icon">
            <path
              d="M73.92 35.83H39.33A12.23 12.23 0 0027 48v17.1a12.23 12.23 0 0012.33 12.13h34.59a12.22 12.22 0 0012.29-12.15V48a12.21 12.21 0 00-12.29-12.17zm-8.31 21.53L49.43 65a.71.71 0 01-.32.07.63.63 0 01-.3-.1.66.66 0 01-.23-.24.65.65 0 01-.08-.31V48.67a.62.62 0 01.09-.32.63.63 0 01.23-.23.56.56 0 01.31-.09.6.6 0 01.32.07l16.18 8.1a.67.67 0 01.25.25.58.58 0 01.09.34.69.69 0 01-.09.34.67.67 0 01-.27.23z"
              transform="translate(-.18 -.49)"
            />
          </svg>
          <svg viewBox="-13 -10 50 50" class="social-media-icon">
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
            />
          </svg>
        </div>
      </div>
    </section>
    <newsletter-modal></newsletter-modal>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import FetchCMSDataMixin from "../mixins/FetchCMSDataMixin";

import BlogSnippet from "../components/BlogSnippet";
import NewsletterModal from "../components/NewsletterModal";
import ScrollIcone from "../components/ScrollIcone";
import Timeline from "../components/Timeline";

export default {
  components: { BlogSnippet, NewsletterModal, ScrollIcone, Timeline },
  mixins: [FetchCMSDataMixin],
  data: function() {
    return {
      target: `/posts?_sort=created_at:DESC&_limit=3`,
      posts: [null, null, null]
    };
  },
  computed: {
    isMobile() {
      var check = false;
      (function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    onSuccess: function(data) {
      this.posts = data;
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
@import "~@/variables";
h1 {
  border-left: 4px solid $fade;
  padding-left: 0.7rem;
}
.roadmap-section {
  min-height: 100vh;
}
#bygone-section {
  background: $fade;
  overflow: hidden;
  p {
    color: $primary;
    text-transform: uppercase;
  }
  #bygone-background {
    transform: skewX(-45deg);
    transform-origin: bottom right;
    overflow: hidden;
    position: relative;
    &::before {
      content: "";
      transform: skewX(45deg);
      position: absolute;
      background: url("../../../public/bygone-background.png");
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      transform-origin: bottom right;
      width: 100%;
      height: 100%;
      right: 0;
      bottom: 0;
    }
  }
  .bygone-section-mobile {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0.1;
      background: url("../../../public/bygone-background.png");
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}
.jumbotron {
  background: url("../../../public/jumbotron_background_two_moons.png")
    no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  .jumbotron-body {
    height: 100%;
    z-index: 100;
    h1 {
      color: white;
      &:after {
        display: none;
      }
    }
    button {
      padding: 1rem;
    }
    .cta-section {
      margin-left: 150px;
      .sto-photo {
        height: 6rem;
        width: auto;
        border-radius: 50%;
        z-index: 200;
        border: 2px solid $grey;
      }
      .cta-description {
        height: 6rem;
        transform: translate(-100px);
        padding-left: 110px;
        padding-top: 0.3rem;
        p {
          font-size: 0.4rem;
        }
      }
    }
    .herodot-logo {
      width: 50vw;
      height: auto;
    }
    .cta-section-mobile {
      .sto-photo {
        height: 6rem;
        width: auto;
        border-radius: 50%;
        z-index: 200;
        border: 2px solid $grey;
      }
    }
  }
}

[data-aos="fade-out"] {
  opacity: 1;
  transition-property: opacity;
  &.aos-animate {
    opacity: 0;
  }
}
</style>
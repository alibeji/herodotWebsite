<template>
  <div>
    <LandingNavbar ref="navbar" :on-first-section="onFirstSection"></LandingNavbar>
    <main>
      <transition name="none">
        <router-view ref="page"></router-view>
      </transition>
      <page-footer></page-footer>
    </main>
  </div>
</template>

<script>
import debounce from "lodash/debounce";

import AuthMixin from "../mixins/AuthMixin";
import LandingNavbar from "../components/LandingNavbar";
import PageFooter from "../components/PageFooter";

export default {
  name: "App",
  components: { LandingNavbar, PageFooter },
  mixins: [AuthMixin],
  data: function() {
    return {
      handleDebouncedScroll: debounce(this.handleScroll, 10),
      onFirstSection: true
    };
  },
  computed: {
    hasJumbotronElement: function() {
      return this.$route.meta.hasJumbotronElement === true;
    }
  },
  watch: {
    $route(to, from) {
      if (this.hasJumbotronElement) {
        window.addEventListener("scroll", this.handleDebouncedScroll);
      } else {
        window.removeEventListener("scroll", this.handleDebouncedScroll);
      }
      $(".collapse").collapse("hide");
    }
  },
  created() {
    this.$store.dispatch("checkUser");
    if (this.hasJumbotronElement) {
      window.addEventListener("scroll", this.handleDebouncedScroll);
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  },
  methods: {
    handleScroll(event) {
      let jumbotronElement = this.$refs.page.$refs["jumbotron"];
      let jumbotronBottomPosition = jumbotronElement.getBoundingClientRect()
        .bottom;
      let navbarElement = this.$refs.navbar.$refs.navbar;
      let navbarTopPosition = navbarElement.getBoundingClientRect().bottom;
      if (jumbotronBottomPosition < navbarTopPosition) {
        this.onFirstSection = false;
      } else {
        this.onFirstSection = true;
      }
    }
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
@import "~@/_variables.scss";
main {
  background-color: $body-bg;
}

.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
</style>
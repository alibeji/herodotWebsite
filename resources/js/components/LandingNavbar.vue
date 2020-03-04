<template>
  <div>
    <nav
      class="navbar navbar-expand-md"
      :class="[stayTop ?'secondary-theme':'fixed-top', onFirstSection?'':'secondary-theme']"
      ref="navbar"
    >
      <div class="navbar-brand">
        <router-link to="/">
          <template v-if="!isMobile && !onFirstSection">
            <img
              src="../../../public/herodot-logo.svg"
              class="herodot-logo"
              alt="Herodot Studio logo"
            />
          </template>
          <template v-else>
            <img
              src="../../../public/herodot-icon.svg"
              class="herodot-logo"
              alt="Herodot Studio icone"
              height="20"
            />
          </template>
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-main"
        aria-controls="navbar-main"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon fas fa-bars text-white"></span>
      </button>
       <template v-if="isMobile">
      <div class="collapse navbar-collapse-mobile" id="navbar-main">
        <ul class="navbar-nav d-md-flex ml-auto">
          <li class="nav-link" :class="{'active': isActive('home')}">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-link" :class="{'active': isActive('about')}">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-link" :class="{'active': isActive('blog')}">
            <router-link to="/blog">Inquiries</router-link>
          </li>
        </ul>
      </div>
       </template>
        <template v-else>
          <div class="collapse navbar-collapse" id="navbar-main">
            <ul class="navbar-nav d-md-flex ml-auto">
            <li class="nav-link" :class="{'active': isActive('home')}">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-link" :class="{'active': isActive('about')}">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-link" :class="{'active': isActive('blog')}">
            <router-link to="/blog">Inquiries</router-link>
          </li>
          </ul>
          </div>
        </template>
    </nav>
  </div>
</template>


<script>
export default {
  name: "LandingNavbar",
  props: { onFirstSection: Boolean },
  computed: {
    stayTop: function() {
      return this.$route.meta.navStayTop;
    },
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
  methods: {
    isActive(routeName) {
      return routeName === this.$route.name;
    }
  }
};
</script>

<style type="f/scss" lang="scss" scoped>
@import "~@/_variables.scss";




.navbar {
  width: 100%;
 
  z-index: 9999;
  transition: background-color 0.2s ease-out, border 0.2s ease-out;
  .herodot-logo {
    height: 2rem;
    opacity: 70%;
  }
  .nav-link {
    padding-bottom: 0;
    text-align: center;
    transition: border 0.3s ease-out;
  
    &:hover {
      border-bottom: 4px solid rgba(255, 255, 255, 0.7);
      a {
        color: white;
      }
    }
    &.active {
      border-bottom: 4px solid #e0dddd;
      a {
        color: white;
      }
    }
    a {
      color: rgba(255, 255, 255, 0.7);
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
.secondary-theme {
  background-color: $primary;
  border-bottom: 2px solid darken($primary, 5%);
  .nav-link {
    padding: 0.3rem;
    border-radius: 5px;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
   
    &.active,
    &:hover {
      border-bottom: none;
      background: darken($primary, 4%);
    }
  }
}

</style>
<template>
  <div>
    <b-navbar
      toggleable="false"
      type="light"
      variant="info"
      :class="{ 'wantotrip-navbar': wantotripPage }"
    >
      <b-navbar-brand class="nav-brand" href="/">
        <img v-if="wantotripPage == false" src="/logo_2.svg" />
        <img v-if="wantotripPage" src="/logo_3.svg" />
      </b-navbar-brand>
      <button
        class="burger"
        aria-label="Main Menu"
        :class="{ opened: navExpanded }"
        @click="navExpanded = !navExpanded"
      >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <path
            class="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path class="line line2" d="M 20,50 H 80" />
          <path
            class="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <b-navbar-nav class="nav-fill ml-auto" :class="{ expanded: navExpanded }">
        <b-nav-item href="/about">About</b-nav-item>
        <div class="dropdown">
          <b-nab-item class="our-games">Our Games</b-nab-item>
          <div class="dropdown-our-games">
            <a href="https://playbygone.com/">Bygone</a>
            <a href="/wantotrip-pro-edition">Wantotrip: Pro Edition</a>
          </div>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  props: { wantotripPage: Boolean },
  data() {
    return {
      navExpanded: false,
      wantotrip: false,
    }
  },
  updated() {
    if (this.$nuxt.$route.path === '/wantotrip-pro-edition') {
      this.wantotrip = true
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/constants.scss';
body {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  margin: 0;
}
.burger {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  outline: none;
  height: 50px;
  display: none;
}
.line {
  fill: none;
  stroke-linecap: round;
  stroke: rgb(12, 29, 72);
  stroke-width: 10;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
}
.line2 {
  stroke-dasharray: 60 60;
}
.line3 {
  stroke-dasharray: 60 207;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
}
.nav-fill {
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
}
nav {
  width: 100%;
  position: fixed;
  z-index: 800000000000;
  background-color: $almostWhite !important;
  border-bottom: solid rgba($color: $almostWhite, $alpha: 0.2) 2px;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  color: $spaceBlue;
  display: flex;
  justify-content: space-between;
  transition: ease all 0.5s;
  background-color: rgba($color: #ffffff, $alpha: 0.75) !important;
  backdrop-filter: blur(6px);
  &.wantotrip-navbar {
    color: rgb(55, 163, 149);
    background-color: rgba($color: #ffffff, $alpha: 0.85) !important;
    backdrop-filter: blur(6px);
    border-bottom: solid #e8eaf0 0px;
    .line {
      stroke: rgb(55, 163, 149);
    }
    .dropdown {
      .dropdown-our-games {
        a {
          color: rgb(55, 163, 149);
        }
      }
    }
    .nav-link {
      color: rgb(55, 163, 149) !important;
    }
  }
  .dropdown {
    position: relative;
    .our-games {
      padding: 2rem 0 2rem 0;
      margin: 0 1rem 0 0;
      font-weight: 500;
      cursor: pointer;
    }
    .dropdown-our-games {
      position: absolute;
      display: flex;
      max-height: 0px;
      overflow: hidden;
      opacity: 1;
      transition: ease all 0.2s;
      pointer-events: none;
      flex-direction: column;
      background-color: $almostWhite;
      right: 0;
      width: max-content;
      text-align: right;
      z-index: 7999;
      top: 3rem;
      border-radius: 0 0 10px 10px;
      a {
        color: $spaceBlue;
        text-decoration: none;
        transition: ease all 0.5s;
        padding: 0.5em 1em 0.5em 1em;
        &:hover {
          background-color: #e8eaf0;
        }
        &:nth-of-type(2) {
          border-radius: 0 0 10px 10px;
        }
      }
    }
    &:hover {
      .dropdown-our-games {
        display: flex;
        opacity: 1;
        pointer-events: auto;
        max-height: 250px;
      }
    }
  }
  .nav-link {
    color: $spaceBlue !important;
    font-weight: 500;
    padding-right: 2em;
    padding-left: 2em;
    border-radius: 10px;
    transition: ease all 0.3s;
  }
  .nav-brand img {
    height: 45px;
    width: auto;
  }
  .w-25 {
    justify-self: flex-end;
  }
}
@media only screen and (max-width: $breakpoint-md) {
  .nav-fill {
    max-height: 0px;
    overflow: hidden;
    width: 100%;
    transition: ease all 0.5s;
    flex-direction: column;
    .dropdown {
      display: block;
      margin-top: 1rem;
      .our-games {
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        width: 100%;
      }
      .dropdown-our-games {
        max-height: 250px;
        opacity: 1;
        pointer-events: auto;
        position: inherit;
        top: auto;
        right: auto;
        box-shadow: none;
        text-align: center;
        margin-bottom: 1rem;
        a {
          padding: 1rem 0 0 0;
        }
      }
    }
  }
  &.expanded {
    flex-direction: column;
    margin-top: 1rem;
    display: flex;
    max-height: 250px;
  }
  .burger {
    display: block;
  }
}
</style>

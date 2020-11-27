<template>
  <div>
    <b-navbar toggleable="false" type="light" variant="info">
      <b-navbar-brand class="nav-brand" href="/">
        <img src="/logo_2.svg" />
      </b-navbar-brand>
      <b-navbar-nav class="nav-fill ml-auto">
        <b-nav-item href="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/constants.scss';
nav {
  width: 100%;
  position: absolute;
  z-index: 500;
  background-color: transparent !important;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  justify-content: space-between;
  .nav-link {
    color: white !important;
    font-weight: 500;
    background-color: rgb(12, 29, 72);
    padding-right: 2em;
    padding-left: 2em;
    border-radius: 10px;
    transition: ease all 0.3s;
    &:hover {
      background-color: rgb(38, 110, 141);
    }
  }
  .nav-brand img {
    height: 45px;
    width: auto;
  }
  .w-25 {
    justify-self: flex-end;
  }
}
</style>

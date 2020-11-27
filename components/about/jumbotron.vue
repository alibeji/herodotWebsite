<template>
  <div class="about-jumbotron">
    <div class="manifesto">
      <h1>Our Manifesto</h1>
      <p>
        We are chaotic dreamers, disciplined buddies, and a tight-knit squad.<br />
        Inspired by the past and driven by the future,<br />
        we are here to push humanity forward by throwing it back.<br />
        We conceive different perspectives of ancient tales.<br />
        We commit to being transparent and inclusive with our fellow
        community.<br />
        Our dream is for everyone to arise by standing on the shoulders of our
        bygone ancestors.<br />
        We stand tall and we stand for our heritage.<br />
        We are Herodot.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about-jumbotron {
  background-image: url(/jumbotron_background_cut.svg),
    url(/about_jumbotron_background.svg);
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: contain, cover;
  background-position: center bottom, top center;
  margin: 0 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 0 0 0 !important;
  .jumbotron-foreground {
    width: 100%;
    margin: 0 0 0 0;
  }
  .manifesto {
    margin-top: 10em;
    margin-bottom: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      border-bottom: solid 3px white;
      width: 60%;
      margin-right: 35%;
      margin-left: 35%;
      padding-bottom: 0.2em;
      margin-bottom: 0.5em;
    }
    p {
      font-size: 22px;
    }
  }
}
</style>

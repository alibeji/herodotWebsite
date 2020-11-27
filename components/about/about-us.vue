<template>
  <div id="about-us-about">
    <img src="/about_us_arthur_sword.svg" alt="" />
    <div class="about-us-text">
      <h2>Our Story</h2>
      <br />
      <p>
        Herodot started off as a dream.<br />
        How future can awaken history, cooler.<br />
        <br />
        December 2017, two genuine devotees to history and technology, use their
        graduation project to start-up ‘Historio’.<br />
        <br />
        Incubated, Startup-Act Labelled, and pre-seed funded, Herodot sees the
        first AR experience come to the streets.<br />
        Five months later, we decide to pivot. Best way to democratize history,
        attract more youth, and smoothly chain yesterday with tomorrow? Yup,
        gaming! <br /><br />Historio wins ‘Most Creative Startup in Tunisia’
        taking it to Copenhagen's Creative Business Cup
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
#about-us-about {
  min-height: 85vh;
  margin-right: 5vw;
  margin-left: 5vw;
  background-color: rgba(12, 29, 72, 0.6);
  border-radius: 20px;
  box-shadow: 0 70px 140px 0 rgba(1, 3, 14, 0.45);
  background-image: linear-gradient(
    135deg,
    rgba(#49bfaa, 0.3) 0%,
    rgba(#5d9cb1, 0.2) 100%
  );
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 2em;
  overflow: hidden;
  padding-bottom: 2em;
  margin-bottom: 5em;
  .about-us-text {
    width: 40%;
  }
  img {
    width: 40%;
  }
}
@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  #about-us-about {
    flex-direction: column;
    .about-us-text {
      width: 70%;
      margin: 0 0 0 0;
      padding: 0 0 0 0;
      margin: 2em 0 0 0;
    }
    img {
      width: 70%;
    }
  }
}
@media only screen and (max-width: $breakpoint-md) {
  #about-us-about {
    flex-direction: column;
    .about-us-text {
      width: 90%;
      margin: 0 0 0 0;
      padding: 0 0 0 0;
      margin: 2em 0 0 0;
    }
    img {
      width: 90%;
    }
  }
}
</style>

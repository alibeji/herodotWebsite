<template>
  <div>
    <div id="about-us">
      <img src="/random barely visible rift3.svg" alt="" />
      <div class="about-us-text">
        <h2>About Us</h2>
        <br />
        <p>
          Herodot started off as a dream.<br />
          How future can awaken history, cooler.<br /><br />

          December 2017, two genuine devotees to history and technology, use
          their graduation project to start-up ‘Historio’.<br /><br />
        </p>
        <br />
        <button class="main-button">More about Us</button>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
#about-us {
  margin: 0 0 0 0;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  .about-us-text {
    width: 40%;
    margin-right: 10%;
    padding-left: 5em;
  }
  img {
    width: 50%;
    height: auto;
  }
}
@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  #about-us {
    margin-top: 5em;
    flex-direction: column-reverse;
    .about-us-text {
      width: 70%;
      margin: 0 0 0 0;
      padding: 0 0 0 0;
    }
    img {
      width: 70%;
      height: auto;
      margin-right: 30%;
    }
  }
}
@media only screen and (max-width: $breakpoint-md) {
  #about-us {
    margin-top: 5em;
    flex-direction: column-reverse;
    .about-us-text {
      width: 90%;
      margin: 0 0 0 0;
      padding: 0 0 0 0;
    }
    img {
      width: 97%;
      height: auto;
      margin-right: 3%;
    }
  }
}
</style>

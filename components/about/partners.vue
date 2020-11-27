<template>
  <div id="our-partners">
    <h2>They Trust Us</h2>
    <p>
      Winning partners’ support as a startup is a fundamental pillar of success,
      and it’s not an easy feat. <br />
      Here's who we take pride in calling them partners.
    </p>
    <div class="partners">
      <div class="partner">
        <img src="/moovjee-logo.png" alt="" />
        <h3>Moovjee</h3>
      </div>
      <div class="partner">
        <img src="/ticdce-logo.png" alt="" />
        <h3>TICDCE</h3>
      </div>
      <div class="partner">
        <img src="/vec-logo.png" alt="" />
        <h3>The Virtual Experience Company</h3>
      </div>
      <div class="partner">
        <img src="/mac-logo.png" alt="" />
        <h3>Ministry of Cultural Affairs</h3>
      </div>
      <div class="partner">
        <img src="/biatlabs-logo.jpg" alt="" />
        <h3>Biatlabs</h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
#our-partners {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2em;
  margin-bottom: 5em;
  h2 {
    text-align: center;
    margin-top: 3em;
    padding-right: 1em;
    padding-left: 1em;
    border-bottom: solid $brightTeal 5px;
    padding-bottom: 0.5em;
    border-left: none;
  }
  .partners {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .partner {
      width: 250px;
      display: flex;
      flex-direction: column;
      background-color: white;
      box-shadow: 0 30px 60px 0 rgba(1, 3, 14, 0.5);
      border-radius: 10px;
      overflow: hidden;
      color: $spaceBlue;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      margin-top: 1em;
      margin-bottom: 1em;
      h3 {
        font-size: 18px;
        display: none;
      }
      &:nth-of-type(2) {
        width: 300px;
      }
      &:nth-of-type(3) {
        width: 350px;
      }
      &:nth-of-type(4) {
        width: 300px;
      }
      img {
        height: 70px;
        width: auto;
      }
    }
  }
}
@media only screen and (min-width: $breakpoint-md) {
  #our-partners {
    .partners {
      flex-direction: row;
      flex-wrap: wrap;
      .partner {
        margin-right: 3em;
        margin-left: 3em;
        width: 300px;
        &:nth-of-type(2) {
          width: 300px;
        }
        &:nth-of-type(3) {
          width: 300px;
        }
        &:nth-of-type(4) {
          width: 300px;
        }
      }
    }
  }
}
</style>

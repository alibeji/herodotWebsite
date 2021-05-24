<template>
  <div id="wantotrip-section">
    <img src="wantotrip-thumbnail.jpg" alt="" class="bygone-thumbnail" />
    <div class="our-game-text">
      <h2>Wantotrip: Pro Edition</h2>
      <br />
      <p>
        An immersive game in which history, strategy, and augmented reality
        meet!<br />
        Collect and trade, compete and win, in a free-to-play trading card game
        coming up to mobile and desktop.
      </p>
      <br />
      <a href="/wantotrip-pro-edition"
        ><button class="main-button">Book a Demo</button></a
      >
      <a href="/wantotrip-pro-edition"
        ><button class="secondary-button">Learn More</button></a
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
#wantotrip-section {
  .main-button {
    background-image: linear-gradient(
      -90deg,
      rgb(80, 191, 176) 0%,
      rgb(85, 208, 188) 50%,
      rgb(245, 243, 252) 50%,
      rgb(242, 250, 252) 100%
    );
    &:hover {
      color: rgb(80, 191, 176);
    }
  }
  min-height: 85vh;
  margin-right: 5vw;
  margin-left: 5vw;
  margin-top: 10em;
  margin-bottom: 20vh;
  background-color: rgba(12, 29, 72, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 20px;
  box-shadow: 0 70px 140px 0 rgba(1, 3, 14, 0.45);
  background-image: linear-gradient(
    -135deg,
    rgba(49, 170, 140, 0.3) 0%,
    rgba(49, 170, 150, 0.212) 100%
  );
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  .our-game-text {
    width: 40%;
    margin-left: 10%;
    padding-right: 5em;
    text-align: left;
    p {
      text-align: justify;
    }
  }
  .bygone-thumbnail {
    width: 40%;
    margin-left: 10%;
    margin-right: 0%;
    height: auto;
    border-radius: 10px;
    // border: solid 4px $gradient2PaleBlue;
    box-shadow: 0 70px 140px 0 rgba(3, 97, 81, 0.45);
  }
}
@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  #wantotrip-section {
    flex-direction: column-reverse;
    .our-game-text {
      width: 70%;
      margin: 0 0 0 0;
      padding: 0 0 0 0;
      margin-top: 3rem;
    }
    .bygone-thumbnail {
      width: 70%;
      margin: 2em 0 0 0;
      margin-bottom: 3rem;
    }
  }
}
@media only screen and (max-width: $breakpoint-md) {
  #wantotrip-section {
    flex-direction: column-reverse;
    .our-game-text {
      width: 90%;
      margin: 0 0 0 0;
      padding: 0 0 0 0;
      margin-top: 1rem;
    }
    .bygone-thumbnail {
      width: 90%;
      margin: 2em 0 0 0;
      margin-bottom: 1rem;
    }
  }
}
</style>

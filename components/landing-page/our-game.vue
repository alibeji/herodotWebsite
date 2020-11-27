<template>
  <div id="our-game">
    <div class="our-game-text">
      <h2>Our Upcoming Game</h2>
      <br />
      <p>
        An immersive game in which history, strategy, and augmented reality
        meet!<br />
        Collect and trade, compete and win, in a free-to-play trading card game
        coming up to mobile and desktop.
      </p>
      <br />
      <a href="https://playbygone.com/"
        ><button class="main-button">Game Website</button></a
      >
    </div>
    <img src="bygone-thumbnail.jpg" alt="" class="bygone-thumbnail" />
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
#our-game {
  min-height: 85vh;
  margin-right: 5vw;
  margin-left: 5vw;
  margin-top: 10em;
  margin-bottom: 10vh;
  background-color: rgba(12, 29, 72, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 20px;
  box-shadow: 0 70px 140px 0 rgba(1, 3, 14, 0.45);
  background-image: url(/our_game_top_right.svg), url(/our_game_bottom_left.svg),
    linear-gradient(
      -135deg,
      rgba(49, 144, 170, 0.3) 0%,
      rgba(49, 144, 170, 0) 100%
    );
  background-size: auto 40%, auto 40%, contain;
  background-repeat: no-repeat;
  background-position: top right, bottom left, top left;
  .our-game-text {
    width: 40%;
    margin-left: 10%;
    padding-right: 5em;
  }
  .bygone-thumbnail {
    width: 40%;
    margin-left: 0%;
    margin-right: 10%;
    height: auto;
    border-radius: 10px;
    // border: solid 4px $gradient2PaleBlue;
    box-shadow: 0 70px 140px 0 rgba(1, 3, 14, 0.45);
  }
}
@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  #our-game {
    flex-direction: column;
    .our-game-text {
      width: 70%;
      margin: 0 0 0 0;
      padding: 0 0 0 0;
    }
    .bygone-thumbnail {
      width: 70%;
      margin: 2em 0 0 0;
    }
  }
}
@media only screen and (max-width: $breakpoint-md) {
  #our-game {
    flex-direction: column;
    .our-game-text {
      width: 90%;
      margin: 0 0 0 0;
      padding: 0 0 0 0;
    }
    .bygone-thumbnail {
      width: 90%;
      margin: 2em 0 0 0;
    }
  }
}
</style>

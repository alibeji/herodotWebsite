<template>
  <div id="latest-news">
    <div class="news-intro">
      <h2>Latest News</h2>
      <br />
      <p>
        Herodotus said it best: "The only good is knowledge."<br />
        And good things? Are worth the wait. <br />
        News forthcoming.
      </p>
    </div>
    <div v-if="0 === 1" class="news-container">
      <nuxt-link to="/">
        <div class="news-card">
          <img
            src="/test_news_thumbnail.svg"
            alt=""
            class="news-card-thumbnail"
          />
          <div class="news-card-text">
            <h3>Storytelling vs gameplay: A never ending struggle</h3>
            <h4>Stoupha Bachla</h4>
            <h4>Dec 27, 2019</h4>
          </div>
          <div class="pseudo-thumbnail-button">READ MORE</div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.news-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 5em;
}
.news-intro {
  width: 40%;
  h2 {
    border-bottom: solid $brightTeal 5px;
    padding-bottom: 0.5em;
    border-left: none;
    padding-left: 0;
  }
}
a {
  width: 27%;
  margin: 0.5em 2em 0.5em 2em;
  .news-card {
    width: 100%;
    background: linear-gradient(85.02deg, #f3fafd 0%, #f5f4fd 100%);
    border-radius: 15px;
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
    box-shadow: 0 40px 80px 0 rgba(1, 3, 14, 0.5);
    transition: ease all 0.5s;
    &:hover {
      box-shadow: 0 0px 0px 0 rgba(1, 3, 14, 0.74);
      .news-card-thumbnail {
        filter: brightness(1.1);
      }
    }
    .news-card-thumbnail {
      width: 100%;
      transition: ease all 0.5s;
    }
    .news-card-text {
      text-align: left;
      padding: 1em 0 0.1em 1.5em;
      h3 {
        color: $darkTeal;
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 1em;
      }
      h4 {
        color: $spaceBlue;
        font-size: 14px;
      }
    }
    .pseudo-thumbnail-button {
      color: white;
      background: linear-gradient(
        85deg,
        rgb(80, 182, 191) 0%,
        rgb(85, 172, 208) 100%
      );
      padding: 0.8em 0 0.8em 0;
      position: absolute;
      width: 50%;
      text-align: center;
      bottom: 0;
      right: 0;
    }
  }
  &:hover {
    text-decoration: none;
  }
}

@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  a {
    width: 40%;
  }
}
@media only screen and (max-width: $breakpoint-md) {
  .news-container {
    flex-direction: column;
  }
  a {
    width: 90%;
  }
  .news-intro {
    width: 85%;
  }
}
</style>

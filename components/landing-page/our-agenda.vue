<template>
  <div id="our-agenda">
    <div class="agenda">
      <h2>Our Agenda</h2>
      <br />
      <p>Curious to know where we are and what we're planning?</p>
      <div class="agenda-holder">
        <div class="agenda-item">
          <img src="/agenda_pre_alpha.svg" alt="" class="agenda-thumbnail" />
          <div class="agenda-text">
            <h4>Fall 2020</h4>
            <h3>Pre-Alpha Phase 1</h3>
            <p>
              The first phase of our Pre-alpha has been released. It is our very
              first demo release.
            </p>
          </div>
        </div>
        <div class="agenda-item">
          <img src="/agenda_alpha.svg" alt="" class="agenda-thumbnail" />
          <div class="agenda-text">
            <h4>Spring 2021</h4>
            <h3>Alpha Release</h3>
            <p>
              Alpha version comes out! Go ahead and register now, to be among
              our first seekers!
            </p>
          </div>
        </div>
        <div class="agenda-item">
          <img src="/agenda_kickstarter.svg" alt="" class="agenda-thumbnail" />
          <div class="agenda-text">
            <h4>Summer 2021</h4>
            <h3>Kickstarter Campaign</h3>
            <p>
              Our crowdfunding campaign goes live on Kickstarter. Your
              contribution will help us create the best value for our community.
            </p>
          </div>
        </div>
        <div class="agenda-item">
          <img src="/agenda_beta.svg" alt="" class="agenda-thumbnail" />
          <div class="agenda-text">
            <h4>Fall 2021</h4>
            <h3>Beta Release</h3>
            <p>
              Feedback implementation and closed Beta preparation! Your
              contribution will make this happen.
            </p>
          </div>
        </div>
        <div class="agenda-bar"></div>
      </div>
    </div>
    <img
      src="/random barely visible rift4.svg"
      alt=""
      class="agenda-decoration"
    />
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
#our-agenda {
  min-height: 100vh !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 5em;
  overflow: hidden;
  background: linear-gradient(
    -135deg,
    rgba(49, 144, 170, 0.3) 0%,
    rgba(49, 144, 170, 0) 100%
  );
  .agenda-decoration {
    width: 50%;
    height: auto;
    align-self: flex-end;
  }
  .agenda {
    width: 40%;
    margin-left: 10%;
    padding-right: 5em;
    margin-bottom: 5em;
    .agenda-holder {
      display: flex;
      flex-direction: column;
      position: relative;
      .agenda-bar {
        position: absolute;
        height: 75%;
        top: 5%;
        left: 2.15em;
        width: 80%;
        border-left: solid 5px rgba($color: $darkBeige, $alpha: 1);
        z-index: 1;
        mix-blend-mode: soft-light;
      }
      .agenda-item {
        display: flex;
        flex-direction: row;
        margin-top: 1.5em;
        position: relative;
        z-index: 2;
        .agenda-thumbnail {
          height: 4.5em;
          width: auto;
          margin: 0 1em 1em 0;
        }
        .agenda-text {
          h4 {
            color: $brightTeal;
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 400;
          }
          p {
            font-size: 16px;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  #our-agenda {
    flex-direction: column;
    .agenda-decoration {
      width: 70%;
      height: auto;
      margin-left: 30%;
    }
    .agenda {
      width: 60%;
      margin-left: 0%;
      padding-right: 0;
      text-align: justify;
    }
  }
}
@media only screen and (max-width: $breakpoint-md) {
  #our-agenda {
    flex-direction: column;
    .agenda-decoration {
      width: 100%;
      height: auto;
      margin-left: 10%;
    }
    .agenda {
      width: 90%;
      margin-left: 0%;
      padding-right: 0;
      text-align: justify;
    }
  }
}
</style>

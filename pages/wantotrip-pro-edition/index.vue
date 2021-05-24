<template>
  <div>
    <div id="wantotrip-jumbotron">
      <div class="jumbotron-contents">
        <h1>Bring your team together, even when far apart.</h1>
        <p>
          Working from home certainly weights on morale.
          <span class="bolder"
            >Whether you want to help your employees release the pressure or
            want newcomers to bond with the rest of the workforce, Wantotrip:
            Pro Edition is here for you!</span
          >
          Adapted from the successful board game into a fully online version by
          a gaming studio to shine in team buildings. <br /><br />Available in
          <span class="bolder">English</span> and
          <span class="bolder">French</span>.
        </p>
        <div>
          <button class="main-button" @click="showModal = true">
            Book a Demo
          </button>
          <button class="secondary-button">Contact Us</button>
        </div>
      </div>
      <div class="jumbotron-decoration">
        <img src="/undraw_worldtotrip.svg" alt="" />
      </div>
    </div>
    <div class="wantotrip-details">
      <h2>Hello World</h2>
      <div class="cards">
        <b-card
          title="1 Hour"
          img-src="/undraw_time.svg"
          img-alt="Image"
          img-top
          style="max-width: 20rem"
          class="mb-2 card"
        >
          <b-card-text>
            A game of Wantotrip: Pro Edition typically lasts a full hour.
          </b-card-text>
          <!-- <template #footer>
            <em>Learn More</em>
          </template> -->
        </b-card>
        <b-card
          title="450+ Questions"
          img-src="/undraw_questions.svg"
          img-alt="Image"
          img-top
          style="max-width: 20rem"
          class="mb-2 card"
        >
          <b-card-text>
            More than 450 questions pertaining to 10 different themes await you!
            Choose the theme that suits you, but expect a challenge.
          </b-card-text>
          <!-- <template #footer>
            <em>Learn More</em>
          </template> -->
        </b-card>
        <b-card
          title="Up to 300 Players"
          img-src="/undraw_collaboration_.svg"
          img-alt="Image"
          img-top
          style="max-width: 20rem"
          class="mb-2 card"
        >
          <b-card-text>
            Onboard your full team in an adventure that scales from 10 to 300
            simultaneaous players. We'll have you covered with our integrated
            voice chat.
          </b-card-text>
          <!-- <template #footer>
            <em>Learn More</em>
          </template> -->
        </b-card>
      </div>
    </div>
    <div class="wantotrip-setup">
      <h2>How it Works</h2>
      <p>
        Upon connecting to the platform, participants are randomly split into
        teams of 5. Team members will have to work together to explore the
        maximum number of countries and raise their score. At the end of the 1
        hour countdown, the team with the highest score wins the game.
      </p>
      <br />
      <div class="features">
        <div class="feature">
          <img src="/undraw_adventure.svg" alt="" />
          <br />
          <h3>
            The objective is to visit a maximum out of 193 countries in one
            hour.
          </h3>
        </div>
        <div class="feature">
          <img src="/undraw_savings.svg" alt="" />
          <br />
          <h3>
            A cost of living is paid upon entering a country. A score is earned
            upon leaving.
          </h3>
        </div>
        <div class="feature">
          <img src="/undraw_work.svg" alt="" />
          <br />
          <h3>
            Players can choose to stay in a country and work by answering
            questions to earn money.
          </h3>
        </div>
      </div>
      <button class="main-button" @click="showModal = true">Book a Demo</button>
    </div>
    <div class="wantotrip-setup clients">
      <h2>Satisfied Clients</h2>
      <p>
        These are the clients that have tested the very first version of our
        game!
      </p>
      <br />
      <div class="features">
        <div class="feature">
          <img src="/sanofi_algérie.svg" alt="" />
        </div>
        <div class="feature">
          <img src="/millesima_logo.png" alt="" />
        </div>
        <div class="feature">
          <img src="/sanofi_afrique.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="last-cta-section">
      <h2>Ready to get started?</h2>
      <p>We are too. let's have a chat.</p>
      <div class="buttons">
        <button class="main-button" @click="showModal = true">
          Book a Demo
        </button>
        <button class="secondary-button">Contact Us</button>
      </div>
      <img src="/undraw1.svg" alt="" />
    </div>
    <bookingModal v-if="showModal == true" @closingModal="modalClosed" />
    <infoScreen />
  </div>
</template>
<script>
import bookingModal from '@/components/wantotrip/bookingModal.vue'
import infoScreen from '@/components/wantotrip/infoScreen.vue'
export default {
  components: {
    bookingModal,
    infoScreen,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    modalClosed(value) {
      this.showModal = false
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/constants.scss';
#wantotrip-jumbotron {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    45deg,
    rgb(55, 163, 149) 0%,
    rgb(55, 163, 149) 100%
  );
  .jumbotron-decoration {
    width: 50%;
    img {
      width: 95%;
    }
  }
  .jumbotron-contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 45%;
    margin-left: 5%;
    h1 {
      color: $almostWhite;
      margin-top: 3rem;
      font-size: 70px;
      font-weight: 500;
    }
    p {
      margin-bottom: 2rem;
    }
  }
}
.secondary-button {
  background-color: transparent;
  font-size: 18px;
  color: $almostWhite;
  margin-left: 1rem;
  font-weight: 700;
  box-shadow: 0 30px 60px 0 rgba(0, 1, 53, 0.5),
    0 5px 10px 0 rgba(6, 0, 37, 0.219);
  transition: ease all 0.5s;
  &:hover {
    box-shadow: 0 15px 30px 0 rgba(0, 1, 53, 0.3);
  }
}
.main-button {
  font-weight: 700;
  font-size: 18px;
  box-shadow: 0 30px 60px 0 rgba(0, 1, 53, 0.5),
    0 5px 10px 0 rgba(6, 0, 37, 0.219);
  color: rgb(80, 191, 176);
  transition: ease all 0.5s;
  background-image: linear-gradient(
    -90deg,
    rgb(245, 243, 252) 0%,
    rgb(242, 250, 252) 50%,
    rgb(80, 191, 176) 50%,
    rgb(85, 208, 188) 100%
  ) !important;
  &:hover {
    box-shadow: 0 15px 30px 0 rgba(0, 1, 53, 0.3);
    background-position: 100% 0%;
  }
}
.bolder {
  font-weight: 600;
}
h2 {
  border-bottom: solid rgb(55, 163, 149) 5px;
  padding-bottom: 0em;
  margin-bottom: 1rem;
  font-size: 50px;
  border-left: none;
  padding-left: 1rem;
  padding-right: 1rem;
  color: rgb(55, 163, 149);
}
.wantotrip-details {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e8eaf0;
  flex-wrap: wrap;
  padding: 3rem 0 4rem 0;
  .cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
  .card {
    color: $spaceBlue;
    text-align: justify;
    text-align-last: center;
    background-color: $almostWhite;
    box-shadow: 0 30px 60px 0 rgba(0, 1, 53, 0.5),
      0 5px 10px 0 rgba(6, 0, 37, 0.219);
    border-radius: 10px;
    transition: ease all 0.5s;
    margin: 1.5rem 1.5rem 1.5rem 1.5rem;
    align-self: stretch;
    border: none;
    overflow: hidden;
    cursor: pointer;
    .card-footer {
      background-color: rgb(55, 163, 149);
      color: $almostWhite;
      font-style: normal;
      border: none;
      width: 100%;
      margin: 0 0 0 0;
      border-radius: 0 0 0 0;
      transition: ease all 0.5s;
      em {
        font-style: normal;
        font-weight: 600;
      }
    }
    .card-title {
      font-weight: 700;
      color: rgb(55, 163, 149);
      border-bottom: solid rgb(80, 191, 176) 2px;
      padding-bottom: 0.5rem;
    }
    &:hover {
      box-shadow: 0 15px 30px 0 rgba(0, 1, 53, 0.3),
        0 2px 5px 0 rgba(6, 0, 37, 0.15);
      .card-footer {
        background-color: rgb(53, 150, 142);
      }
    }
  }
}
.wantotrip-setup {
  min-height: 50vh;
  background-color: rgb(55, 163, 149);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 3.5rem;
  color: $almostWhite;
  &.clients {
    background-color: $almostWhite;
    color: $spaceBlue;
    h2 {
      color: rgb(55, 163, 149);
    }
    img {
      border-radius: 0;
      box-shadow: none;
      transition: ease all 0.5s;
      &:hover {
        box-shadow: none;
      }
    }
  }
  .features {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    .feature {
      max-width: 450px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1rem 1rem 2rem 1rem;
    }
  }
  h3 {
    text-align: center;
  }
  img {
    border-radius: 50%;
    width: 300px;
    background-color: $almostWhite;
    box-shadow: 0 30px 60px 0 rgba(0, 1, 53, 0.5),
      0 5px 10px 0 rgba(6, 0, 37, 0.219);
    transition: ease all 0.5s;
    &:hover {
      box-shadow: 0 15px 30px 0 rgba(0, 1, 53, 0.3),
        0 2px 5px 0 rgba(6, 0, 37, 0.15);
    }
  }
  h2 {
    color: $almostWhite;
    border-bottom: 5px $almostWhite solid;
  }
  p {
    max-width: 700px;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    text-align: justify;
    text-align-last: center;
  }
}
.last-cta-section {
  min-height: 100vh;
  background-color: rgb(55, 163, 149);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 3.5rem;
  color: $almostWhite;
  p {
    margin-bottom: 2rem;
  }
  h2 {
    color: $almostWhite;
  }
  img {
    margin-top: 2.5rem;
    max-width: 600px;
  }
}
@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  #wantotrip-jumbotron {
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .jumbotron-contents {
      width: 80%;
    }
    .jumbotron-decoration {
      width: 80%;
    }
  }
  .last-cta-section {
    img {
      max-width: 450px;
    }
  }
}

@media only screen and (max-width: $breakpoint-md) {
  #wantotrip-jumbotron {
    flex-direction: column;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .jumbotron-contents {
      width: 90%;
      .secondary-button {
        font-size: 16px;
      }
      .main-button {
        font-size: 16px;
      }
    }
    .jumbotron-decoration {
      width: 90%;
    }
  }
  .last-cta-section {
    img {
      max-width: 360px;
    }
  }
}
html,
body {
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba($color: $almostWhite, $alpha: 0.1);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba($color: #50bfb0, $alpha: 1);
    // border-radius: 5px;
    transition: ease all 0.5s;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: rgba($color: #50bfb0, $alpha: 0.8);
  }
}
</style>

<template>
  <div>
    <section class="jumbotron mb-0" id="jumbotron" ref="jumbotron">
      <div class="col jumbotron-body d-flex flex-column justify-content-center">
        <div>
          <h1 class="col-8 mr-auto ml-auto mb-4 align-content-center">Our Manifesto</h1>
        </div>
        <vue-aos animation-class="fadeInUp animated">
          <p class="manifesto-text text-center">
            We are chaotic dreamers, disciplined buddies, and a tight-knit squad.
            <br />Inspired by the past and driven by the future,
            <br />we are here to push humanity forward by throwing it back.
            <br />We conceive different perspectives of ancient tales.
            <br />We commit to being transparent and inclusive with our fellow community.
            <br />Our dream is for everyone to arise by standing on the shoulders of our bygone ancestors.
            <br />We stand tall and we stand for our heritage.
            <br />We are Herodot.
          </p>
        </vue-aos>
      </div>
      <scroll-icone href="#team" style="position: relative;
height: 5rem;
margin-right: 60px;"></scroll-icone>
    </section>
    <section class="container-fluid" id="team">
      <div class="row">
        <div class="col-12 col-md-7" id="team-background"></div>
        <div class="col-12 col-md-5 p-3 mt-5 mb-5">
          <vue-aos animation-class="fadeInUp animated">
            <h2 class="text-white">Our Story</h2>
          </vue-aos>
          <br />
          <div class="content-story">
            <p>
              Herodot started off as a dream.
              <br />How future can awaken history, cooler.
            </p>
            <p>December 2017, two genuine devotees to history and technology, use their graduation project to start-up ‘Historio’.</p>
            <p>
              Incubated, Startup-Act Labelled, and pre-seed funded, Herodot sees the
              <strong>first AR experience</strong> come to the streets.
              <br />Five months later, we decide to pivot.
              Best way to democratize history, attract more youth, and smoothly chain yesterday with tomorrow? Yup, gaming!
            </p>
            <p>
              Historio wins ‘
              <strong>Most Creative Startup in Tunisia</strong>’ taking it to Copenhagen's
              <strong>Creative Business Cup</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-white p-3 mt-5 mb-5 team-section" id="team-member">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-7">
          <vue-aos animation-class="fadeInLeft animated">
            <h2>Our team</h2>
          </vue-aos>
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-7">
          <p class="d-block">Here’s who joined the history-meets-future team to make it all happen:</p>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="row text-center">
            <div class="col-md-4">
              <team-member
                name="Youssef Boufaied"
                image="/photos/team/yb.jpg"
                position="CEO"
                quote="Master Handshaker"
                linkedin-username="youssef-boufaied-9ab802ab"
              ></team-member>
            </div>
            <div class="col-md-4">
              <team-member
                name="Mustapha Gharbi"
                image="/photos/team/mg.jpg"
                position="Game Director"
                quote="Herodot worshipper"
                linkedin-username="mustapha-gharbi-069299113"
              ></team-member>
            </div>
            <div class="col-md-4">
              <team-member
                name="Alaeddine Bouker"
                image="/photos/team/ab.jpg"
                position="CFO"
                quote="Professional Sleeper"
                linkedin-username="bouker-alaeddine-94aa2893"
              ></team-member>
            </div>

            <div class="col-md-4">
              <team-member
                name="Marouan Sami"
                image="/photos/team/ms.jpg"
                position="CTO"
                quote="Intergalactic bot"
                linkedin-username="marouan-sami-757a5098"
              ></team-member>
            </div>

            <div class="col-md-4">
              <team-member
                name="Ali Beji"
                image="/photos/team/ab_bis.jpg"
                position="Graphic Designer"
                quote="Alchemist of all colors"
                linkedin-username="ali-beji"
              ></team-member>
            </div>

            <div class="col-md-4">
              <team-member
                name="Wael Chettaoui"
                image="/photos/team/wc.jpg"
                position="Marketer"
                quote="Poetry Dynamo"
                linkedin-username="wael-chettaoui-260688168"
              ></team-member>
            </div>

            <div class="col-md-4">
              <team-member
                name="Houssem Eddine Souaf"
                image="/photos/team/hs.jpg"
                position="Digital Artist"
                quote="Crayon Evangelist"
                linkedin-username
              ></team-member>
            </div>

            <div class="col-md-4">
              <team-member
                name="Olfa Hammami"
                image="/photos/team/oh.jpg"
                position="Concept Artist"
                quote="Creativity Samourai"
                linkedin-username="olfahammami"
              ></team-member>
            </div>
            <div class="col-md-4">
              <team-member
                name="Haifa Baoueb"
                image="/photos/team/hb.jpg"
                position="Digital Artist"
                quote="Warden of the Scrolls"
                linkedin-username
              ></team-member>
            </div>
            <div class="col-md-4">
              <team-member
                name="Nour Bouzeidi"
                image="/photos/team/nb.jpg"
                position="3D Artist"
                quote="Sculptor of time and space"
                linkedin-username="mohamed-nour-a50459187"
              ></team-member>
            </div>

            <div class="col-md-4">
              <team-member
                name="Flow"
                image="/photos/team/flow.jpg"
                position="Chief of Happiness"
                quote="Chief Troublemaker"
                linkedin-username
              ></team-member>
            </div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    </section>
    <section class="container-fluid p-3 mt-5 mb-5 partners">
      <div class="row partners-title-container">
        <div class="col-md-4"></div>
        <div class="col-md-5">
          <vue-aos animation-class="fadeIn animated">
            <h2>They Trust us</h2>
          </vue-aos>
          <br />
          <p class="pb-5">
            Winning partners’ support as a startup is a fundamental pillar of success,
            <br />and it’s not an easy feat.
            <br />Here's who we take pride in calling them partners.
          </p>
        </div>
      </div>

      <div>
        <div>
          <carousel-3d
            :autoplay="true"
            :autoplay-timeout="5000"
            :display="6"
            :border="0"
            :controls-visible="true"
            :width="400"
            :height="400"
            :space="500"
          >
            <slide :index="0" style="background-color:white;">
              <partner
                name="TICDCE"
                image="/photos/partners/ticdce-logo.png"
                description="Tunis International Center for Digital Cultural Economy is a government incubator and accelerator of numerical solutions and innovation. This sends us hope regarding national efforts to push ambitious youth like us forward."
              ></partner>
            </slide>
            <slide :index="1" style="background-color:white;">
              <partner
                name="Big Shot Production"
                image="/photos/partners/bigshot-logo.png"
                description="Is an audiovisual production agency so youthful and creative and perfectionist. We like our image to be of an unexampled quality and that’s exactly why we chose them."
              ></partner>
            </slide>
            <slide :index="2" style="background-color:white;">
              <partner
                name="Ministry of Cultural Affairs"
                image="/photos/partners/mac-logo.png"
                description="An active governmental body working hard to advance the agenda of cultural protection and enhancement. Their support means much to us."
              ></partner>
            </slide>
            <slide :index="3" style="background-color:white;">
              <partner
                name="The Virtual Experience Company"
                image="/photos/partners/vec-logo.png"
                description="They design 3D and VR models of historic sites and artifacts, sharing the passion for cultural heritage sites. A passion we can surely relate to."
              ></partner>
            </slide>
            <slide :index="4" style="background-color:white;">
              <partner
                name="Biatlabs"
                image="/photos/partners/biatlabs-logo.jpg"
                description="A hands-on experimental program providing entrepreneurs with mentoring, expertise, access to market and services that helped us explore, develop and scale our startup."
              ></partner>
            </slide>
            <slide :index="5" style="background-color:white;">
              <partner
                name="Moovjee"
                image="/photos/partners/moovjee-logo.png"
                description="Is a movement that encourages young people and student entrepreneurs to start-up their own ventures. Their national prize got to our humble hands last year."
              ></partner>
            </slide>
          </carousel-3d>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Tooltip from "tooltip.js";

import Typed from "typed.js";

import ScrollIcone from "../components/ScrollIcone";
import TeamMember from "../components/TeamMember";
import Partner from "../components/Partner";

export default {
  components: { ScrollIcone, TeamMember, Partner },
  name: "About",
  mounted() {
    var typed = new Typed(".manifesto-text-typed", {
      stringsElement: ".manifesto-text",
      typeSpeed: 30,
      backSpeed: 10,
      backDelay: 1000,
      showCursor: false
    });
  }
};
</script>

<style type="text/scss" lang="scss" scoped>
@import "~@/variables";
h1 {
  border-left: 4px solid $fade;

  text-align: center;
}

#team {
  background: $primary;
  overflow: hidden;
  p {
    color: white;
    font-size: 0.7rem;
  }
  #team-background {
    transform: skewX(25deg);
    transform-origin: bottom left;
    overflow: hidden;
    position: relative;
    &::before {
      content: "";
      transform: skewX(-25deg);
      position: absolute;
      background: url("../../../public/photos/team/all.jpg");
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      transform-origin: bottom left;
      width: 100%;
      height: 100%;
      right: 0;
      bottom: 0;
    }
  }
}

.jumbotron {
  background: url("../../../public/jumbotron-background-shattered.jpg")
    no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  border-radius: 0px;
  .jumbotron-body {
    height: 100%;
    z-index: 100;
    h1 {
      border: none;
      border-bottom: 2px solid $grey;
      color: white;
      padding-bottom: 0.8rem;
      &:after {
        display: none;
      }
    }
    button {
      padding: 1rem;
    }
    .manifesto-text {
      color: white;
      font-size: 0.8rem;
    }
  }
}
.partners-title-container {
  text-align: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  margin-right: 4rem;
}
</style>

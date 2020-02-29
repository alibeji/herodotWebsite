<template>
  <div>
    <section class="jumbotron mb-0" id="jumbotron" ref="jumbotron">
      <div class="col jumbotron-body d-flex flex-column justify-content-center">
        <div>
          <h1 class="col-6 mr-auto ml-auto text-center mb-4">Our Manifesto</h1>
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
            <h1 class="text-white">Our Story</h1>
          </vue-aos>
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
            <strong>Creative Business Cup</strong>. Our next stop: Jeddah.
          </p>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-white p-3 mt-5 mb-5" id="team-member">
      <div class="row">
        <div class="col-md-7">
          <vue-aos animation-class="fadeInLeft animated">
            <h1>Our team</h1>
          </vue-aos>
        </div>
      </div>
      <p class="d-block">Here’s who joined the history-meets-future team to make it all happen:</p>
      <div class="row text-center mt-5">
        <div class="col-6 col-md-3">
          <team-member
            name="Youssef Boufaied"
            image="/photos/team/yb.jpg"
            position="CEO"
            quote="Master Handshaker"
            linkedin-username="youssef-boufaied-9ab802ab"
          ></team-member>
        </div>
        <div class="col-6 col-md-3">
          <team-member
            name="Mustapha Gharbi"
            image="/photos/team/mg.jpg"
            position="Game Director"
            quote="Herodot worshipper"
            linkedin-username="mustapha-gharbi-069299113"
          ></team-member>
        </div>
        <div class="col-6 col-md-3">
          <team-member
            name="Alaeddine Bouker"
            image="/photos/team/ab.jpg"
            position="CFO"
            quote="Professional Sleeper"
            linkedin-username="bouker-alaeddine-94aa2893"
          ></team-member>
        </div>
        <div class="col-6 col-md-3">
          <team-member
            name="Marouan Sami"
            image="/photos/team/ms.jpg"
            position="CTO"
            quote="Intergalactic bot"
            linkedin-username="marouan-sami-757a5098"
          ></team-member>
        </div>
        <div class="col-6 col-md-3">
          <team-member
            name="M. Habib Bouassida"
            image="/photos/team/mhb.jpg"
            position="CMO"
            quote="Wizard of Shiny Moments"
            linkedin-username="mohamed-habib-bouassida-317609181"
          ></team-member>
        </div>
        <div class="col-6 col-md-3">
          <team-member
            name="Ali Beji"
            image="/photos/team/ab_bis.jpg"
            position="Graphic Designer"
            quote="Alchemist of all colors"
            linkedin-username="ali-beji"
          ></team-member>
        </div>
        <div class="col-6 col-md-3">
          <team-member
            name="Wael Chettaoui"
            image="/photos/team/wc.jpg"
            position="Marketer"
            quote="Poetry Dynamo"
            linkedin-username="wael-chettaoui-260688168"
          ></team-member>
        </div>
        <div class="col-6 col-md-3">
          <team-member
            name="Firas Khemiri"
            image="/photos/team/fk.jpg"
            position="Game Dev"
            quote="Digital Overlord"
            linkedin-username="firas-kh"
          ></team-member>
        </div>
        <div class="col-6 col-md-3">
          <team-member
            name="Raed Hsasna"
            image="/photos/team/rh.jpg"
            position="Copywriter"
            quote="Warden of the Scrolls"
            linkedin-username="raed-hsasna-577867108"
          ></team-member>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-white p-3 mt-5 mb-5">
      <div class="row partners-title-container">
        <div class="col-md-7">
          <vue-aos animation-class="fadeInLeft animated">
            <h1>They Trust us</h1>
          </vue-aos>
          <p class="pb-5">
            Winning partners’ support as a startup is a fundamental pillar of success,
            <br />and it’s not an easy feat.
            <br />Here's who we take pride in calling them partners.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <partner
            name="Moovjee"
            image="/photos/partners/moovjee-logo.png"
            description="is a movement that encourages young people and student entrepreneurs to start-up their own ventures. Their national prize got to our humble hands last year."
          ></partner>
        </div>
        <div class="col-12 col-md-6">
          <partner
            name="Biatlabs"
            image="/photos/partners/biatlabs-logo.jpg"
            description="a hands-on experimental program providing entrepreneurs with mentoring, expertise, access to market and services that helped us explore, develop and scale our startup."
          ></partner>
        </div>
        <div class="col-12 col-md-6">
          <partner
            name="The Virtual Experience Company"
            image="/photos/partners/vec-logo.png"
            description="they design 3D and VR models of historic sites and artifacts, sharing the passion for cultural heritage sites. A passion we can surely relate to."
          ></partner>
        </div>
        <div class="col-12 col-md-6">
          <partner
            name="TICDCE"
            image="/photos/partners/ticdce-logo.png"
            description="Tunis International Center for Digital Cultural Economy is a government incubator and accelerator of numerical solutions and innovation. This sends us hope regarding national efforts to push ambitious youth like us forward."
          ></partner>
        </div>
        <div class="col-12 col-md-6">
          <partner
            name="Big Shot Production"
            image="/photos/partners/bigshot-logo.png"
            description="is an audiovisual production agency so youthful and creative and perfectionist. We like our image to be of an unexampled quality and that’s exactly why we chose them."
          ></partner>
        </div>
        <div class="col-12 col-md-6">
          <partner
            name="Ministry of Cultural Affairs"
            image="/photos/partners/mac-logo.png"
            description="an active governmental body working hard to advance the agenda of cultural protection and enhancement. Their support means much to us."
          ></partner>
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
  padding-left: 0.7rem;
}
#team {
  background: $primary;
  overflow: hidden;
  p {
    color: white;
    text-transform: uppercase;
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
  background-image: url("../../../public/ui/misc/column.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
}
</style>

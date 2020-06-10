<template>
  <section class="container timeline text-center">
    <vue-aos animation-class="fadeIn animated">
      <vue-timeline-update
        :date="new Date()"
        title="International competition [DIGITAL PARTICIPATION DUE TO COVID-19]"
        description="We were going to fly to...Finals of the MIT Arab Star-Up Competition. However flights were cancelled, Instead we are now participating online."
        thumbnail="/images/MIT-PANARAB-postponed.jpg"
        category="June 2020"
        icon="emoji_events"
        color="custom-1"
      />
    </vue-aos>
    <vue-aos animation-class="fadeIn animated">
      <vue-timeline-update
        :date="new Date()"
        title="Kickstarter compaign"
        description="Our crowdfunding compaign goes live on Kickstarter.
          <br />Your contribution will help us create the best value for our community."
        category="Summer 2020"
        icon="golf_course"
        color="custom-2"
      />
    </vue-aos>
    <vue-aos animation-class="fadeIn animated">
      <vue-timeline-update
        :date="new Date()"
        title="Alpha release"
        description="Alpha version comes out!
          <br />Go ahead and register now, to be among our first seekers!"
        category="Fall 2020"
        icon="code"
        color="custom-3"
      />
    </vue-aos>
    <vue-aos animation-class="fadeIn animated">
      <vue-timeline-update
        :date="new Date()"
        title="Beta release"
        description="Feedback implementation and closed Beta preparation!
          <br />Your contribution will make this happen."
        category="Spring 2021"
        icon="emoji_flags"
        color="custom-4"
        is-last
      />
    </vue-aos>
  </section>
</template>

<script>
export default {
  name: "Timeline"
};
</script>

<style type="text/scss" lang="scss" scoped>
@import "~@/_variables.scss";
</style>
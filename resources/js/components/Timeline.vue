<template>
  <section class="container timeline text-center">
    <vue-aos animation-class="fadeIn animated">
      <vue-timeline-update
        :date="new Date()"
        title="International competition"
        description="We’re flying to Jeddah to pitch in the Semi Finals of MIT Arab Start-Up Competition."
        thumbnail="https://www.opportunitiesforafricans.com/wp-content/uploads/2019/09/mit-arab-startup-competition-2020.jpg"
        category="March 2020"
        icon="emoji_events"
        color="custom-1"
      />
    </vue-aos>
    <vue-aos animation-class="fadeIn animated">
      <vue-timeline-update
        :date="new Date()"
        title="Kickstarter compaign"
        description="Our crowdfunding campaign goes live on Kickstarter.
          <br />Most exciting and promising game features won't be possible without your support!"
        category="Spring 2020"
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
        category="Summer 2020"
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
        category="Fall 2020"
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
<template>
  <b-container id="awards" fluid>
    <b-row class="justify-content-center">
      <h2>Awards</h2>
    </b-row>
    <b-row class="justify-content-center awards-holder">
      <b-col md="2" sm="10">
        <img src="/award_cbc_tn.svg" class="award-icon" alt="" /><br />
        <h4 class="award-date">2019</h4>
        <h3 class="award-title">Creative Business Cup Tunisia</h3>
        <h4 class="award-rank">Winner</h4>
      </b-col>
      <b-col md="2" sm="10"
        ><img src="/award_cbc_cph.svg" class="award-icon" alt="" /><br />
        <h4 class="award-date">2019</h4>
        <h3 class="award-title">Creative Business Cup Worldwide</h3>
        <h4 class="award-rank">Finalist</h4>
      </b-col>
      <b-col md="2" sm="10"
        ><img src="/award_start_up_act.svg" class="award-icon" alt="" /><br />
        <h4 class="award-date">2019</h4>
        <h3 class="award-title">Start-Up Act</h3>
        <h4 class="award-rank">Label</h4>
      </b-col>
      <b-col md="2" sm="10"
        ><img src="/award_mit_pa.svg" class="award-icon" alt="" /><br />
        <h4 class="award-date">2020</h4>
        <h3 class="award-title">MIT Pan-Arab Competition</h3>
        <h4 class="award-rank">Finalist</h4>
      </b-col>
    </b-row>
  </b-container>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
#awards {
  text-align: center;
  .award-icon {
    width: 50%;
    margin-bottom: 1em;
    box-shadow: 0 40px 80px 0 rgba(1, 3, 14, 0.5);
    border-radius: 50%;
    margin-top: 1em;
  }
  h2 {
    text-align: center;
    margin-top: 3em;
    padding-right: 1em;
    padding-left: 1em;
    border-bottom: solid $brightTeal 5px;
    padding-bottom: 0.5em;
    border-left: none;
  }
  .awards-holder {
    margin-top: 3em;
    margin-bottom: 7em;
    .award-date {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 0em;
    }
    .award-title {
      font-size: 18px;
      font-weight: 700;
    }
    .award-rank {
      font-size: 16px;
      font-weight: 300;
      text-transform: uppercase;
      font-style: italic;
      margin-bottom: 1em;
    }
  }
}
</style>

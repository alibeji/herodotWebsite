<template>
  <div>
    <landing-page-jumbotron></landing-page-jumbotron>
    <!-- <landing-page-about-us /> -->
    <landing-page-our-game />
    <landing-page-latest-news />
    <landing-page-our-agenda />
  </div>
</template>
<script>
import LandingPageJumbotron from '@/components/landing-page/jumbotron.vue'
// import LandingPageAboutUs from '@/components/landing-page/about-us.vue'
import LandingPageOurGame from '@/components/landing-page/our-game.vue'
import LandingPageLatestNews from '@/components/landing-page/latest-news.vue'
import LandingPageOurAgenda from '@/components/landing-page/our-agenda.vue'
export default {
  components: {
    LandingPageJumbotron,
    // LandingPageAboutUs,
    LandingPageOurGame,
    LandingPageLatestNews,
    LandingPageOurAgenda,
  },
  head() {
    return {
      title: 'Herodot Studio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'An indie game studio that connects players to their historical heritage.',
        },
        {
          property: 'keywords',
          content:
            'Game Studio, Start-up, gaming industry, augmented reality, technology, history',
        },
        {
          property: 'og:title',
          content: 'Herodot Studio',
        },
        {
          property: 'twitter:title',
          content: 'Herodot Studio',
        },
        {
          property: 'og:description',
          content:
            'An indie game studio that connects players to their historical heritage.',
        },
        {
          property: 'twitter:description',
          content:
            'An indie game studio that connects players to their historical heritage.',
        },
        {
          property: 'og:url',
          content: `https://www.herodotstudio.com/`,
        },
        {
          property: 'twitter:url',
          content: `https://www.herodotstudio.com/`,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: 'herodotstudio.com',
        },
        {
          property: 'og:image',
          content: `/herodot_thumbnail.png`,
        },
        {
          property: 'twitter:image',
          content: '/herodot_twitter_thumbnail.png',
        },
      ],
    }
  },
}
</script>

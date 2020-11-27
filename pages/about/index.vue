<template>
  <div>
    <about-jumbotron></about-jumbotron>
    <about-awards></about-awards>
    <about-us-about />
    <the-team />
    <our-partners />
  </div>
</template>
<script>
import AboutJumbotron from '@/components/about/jumbotron.vue'
import AboutAwards from '@/components/about/awards.vue'
import AboutUsAbout from '@/components/about/about-us.vue'
import TheTeam from '@/components/about/the-team.vue'
import OurPartners from '@/components/about/partners.vue'
export default {
  components: {
    AboutJumbotron,
    AboutAwards,
    AboutUsAbout,
    TheTeam,
    OurPartners,
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

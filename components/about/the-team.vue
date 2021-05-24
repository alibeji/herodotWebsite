<template>
  <div id="our-team">
    <h2>Our Team</h2>
    <p>
      Here’s who joined the history-meets-future team to make it all happen:
    </p>
    <div class="members">
      <div v-for="member in members" :key="member.index" class="member">
        <div class="member-image">
          <img :src="member.photo" alt="" class="photo" />
          <!-- <img :src="member.role" class="role" /> -->
        </div>

        <h3>
          {{ member.name }}
          <a v-if="member.linkedIn !== ''" :href="member.linkedIn"
            ><img src="footer_socials_linkedin.svg" alt=""
          /></a>
        </h3>
        <h4>{{ member.title }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      members: [
        {
          name: 'Youssef Boufaied',
          linkedIn: 'https://www.linkedin.com/in/youssef-boufaied-9ab802ab/',
          title: 'CEO',
          role: 'roles_tank.svg',
          photo: 'yb.jpg',
        },
        {
          name: 'Mustapha Gharbi',
          linkedIn: 'https://www.linkedin.com/in/mustapha-gharbi-069299113/',
          title: 'Game Director',
          role: 'roles_melee.svg',
          photo: 'mg.jpg',
        },
        {
          name: 'Marouan Sami',
          linkedIn: 'https://www.linkedin.com/in/marouan-sami-757a5098/',
          title: 'CTO',
          role: 'roles_melee.svg',
          photo: 'ms.jpg',
        },
        {
          name: 'Houssem Eddine Souaf',
          linkedIn: '',
          title: '2D Artist',
          role: 'roles_mage.svg',
          photo: 'hs.jpg',
        },
        {
          name: 'Olfa Hammami',
          linkedIn: 'https://www.linkedin.com/in/olfahammami/',
          title: 'Concept Artist',
          role: 'roles_mage.svg',
          photo: 'oh.jpg',
        },
        {
          name: 'Rim Bouras',
          linkedIn: '',
          title: 'VFX Artist',
          role: 'roles_mage.svg',
          photo: 'rb.jpg',
        },
        {
          name: 'Nour Bouzidi',
          linkedIn: '',
          title: '3D Artist',
          role: 'roles_mage.svg',
          photo: 'nb.jpg',
        },
        {
          name: 'Ala Bouker',
          linkedIn: 'https://www.linkedin.com/in/bouker-ala-eddine-94aa2893/',
          title: 'CFO',
          role: 'roles_support.svg',
          photo: 'ab.jpg',
        },
        {
          name: 'Ali Beji',
          linkedIn: 'https://www.linkedin.com/in/ali-beji/',
          title: 'Front-End Dev',
          role: 'roles_support.svg',
          photo: 'ab_bis.jpg',
        },
        {
          name: 'Wael Chettaoui',
          linkedIn: 'https://www.linkedin.com/in/wael-chettaoui-260688168/',
          title: 'Lead Marketer',
          role: 'roles_support.svg',
          photo: 'wc.jpg',
        },
        {
          name: 'Flow',
          linkedIn: '',
          title: 'Chief Happiness Officier',
          role: 'roles_support.svg',
          photo: 'flow.jpg',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
#our-team {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    border-bottom: solid $brightTeal 5px;
    border-left: none;
    padding-left: 0;
    padding-bottom: 0.5em;
  }
  p {
    margin-bottom: 2em;
  }
  .members {
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .member {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1em 0 1em 0;
      .member-image {
        width: 45%;
        height: auto;
        margin: 0 0 1em 0;
        position: relative;
        .photo {
          width: 95%;
          height: auto;
          margin: 2.5% 2.5% 2.5% 2.5%;
          position: relative;
          border-radius: 50%;
          border: solid 3px $almostWhite;
          background-color: white;
        }
        .role {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      h3 {
        font-size: 18px;
        font-weight: 400;
        img {
          height: 0.9em;
          width: auto;
        }
      }
      h4 {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
}
@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  #our-team {
    .members {
      width: 95%;
    }
  }
}
@media only screen and (max-width: $breakpoint-md) {
  #our-team {
    .members {
      width: 100%;
      .member {
        width: 50%;
      }
    }
  }
}
</style>

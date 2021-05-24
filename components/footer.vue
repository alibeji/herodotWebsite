<template>
  <div>
    <div class="footer-separator"></div>
    <div class="socials">
      <div class="socials-size">
        <a href="https://www.linkedin.com/company/historio-ar" target="_blank"
          ><img src="footer_socials_linkedin.svg" alt="" class="social-link"
        /></a>
        <a href="https://www.facebook.com/HerodotStudio/" target="_blank"
          ><img src="footer_socials_facebook.svg" alt="" class="social-link"
        /></a>
        <a href="#"
          ><img src="footer_socials_medium.svg" alt="" class="social-link"
        /></a>
      </div>
    </div>
    <div class="footer-content">
      <div class="contact">
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="https://goo.gl/maps/15TD9UNw8khuLacV8" target="_blank"
              >50, 1000 Rue Mokhtar Attia, Tunis 1001</a
            >
          </li>
          <li><a href="tel:+21652744342">+216 52 744 342</a></li>
          <li>
            <a href="mailto:contact@playbygone.com">contact@playbygone.com</a>
          </li>
        </ul>
      </div>
      <div class="careers">
        <h3>Careers</h3>
        <p>
          Interested in working with us? Please send us an email and we'll be in
          touch.<br />
          We look forward to hearing from you!
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.pre-footer {
  width: 20%;
  height: 0;
  opacity: 0;
}
.footer-separator {
  height: 1.2em;
  background-color: $brightTeal;
  border-bottom: solid $almostWhite 2px;
}
.socials {
  background-color: $brightTeal;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6em;
  .socials-size {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    .social-link {
      height: 3.1em;
      width: auto;
      transition: ease all 0.2s;
      &:hover {
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      }
    }
  }
}
.footer-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2em 0 2em 0;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  .contact {
    width: 40%;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      padding: 0 0 0 0;
      li {
        margin: 1em 0 1em 0;
        a {
          color: white;
          &hover {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
  .careers {
    width: 40%;
  }
}
@media only screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg) {
  .socials {
    .socials-size {
      width: 65%;
    }
  }
  .footer-content {
    .contact {
      width: 50%;
      padding-left: 1em;
    }
    .careers {
      width: 50%;
    }
  }
}

@media only screen and (max-width: $breakpoint-md) {
  .socials {
    .socials-size {
      width: 100%;
      justify-content: space-around;
    }
  }
  .footer-content {
    flex-direction: column;
    text-align: center;
    align-items: center;
    .contact {
      width: 90%;
    }
    .careers {
      width: 90%;
    }
  }
}
</style>

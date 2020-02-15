<template>
  <footer class="text-center">
    <section class="d-flex justify-content-around pt-3 bg-primary">
      <div>
        <a>Contact</a>
        <p>Mail address</p>
      </div>
      <div>
        <a>Extra</a>
      </div>
      <div>
        <a>Blog</a>
      </div>
      <div>
        <a>Careers</a>
      </div>
    </section>
    <section id="copyright-section" class="pt-2 pb-2">
      <p>
        Crafted with ❤️ in
        <a
          href="https://www.google.com/maps/place/Historio/@36.8011614,10.1809328,15z/data=!4m5!3m4!1s0x0:0x372c96f3fa4179e0!8m2!3d36.8011614!4d10.1809328"
        >Tunis</a>, &copy; 2020
        <strong>Historio SARL</strong> all rights reserved
      </p>
    </section>
  </footer>
</template>

<script>
export default {
  name: "PageFooter"
};
</script>

<style type="text/scss" lang="scss" scoped>
#copyright-section {
  background-color: #212529;
  align-items: center;
  justify-content: center;
  p {
    color: #848c94;
    line-height: 100%;
    margin: 0;
    font-size: 0.4rem;
  }
  a {
    color: #aaa;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
}
</style>

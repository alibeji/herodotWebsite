<template>
  <footer class="container-fluid text-left">
  
    <section class="row pt-3 pb-3 pl-5 pr-5 bg-primary">
    
      <div class="col-md-4">
        <h4>Contact</h4>
        <a class="mb-0" href="https://www.google.com/maps/place/Historio/@36.8064935,10.1815323,15z/data=!4m5!3m4!1s0x12fd351cb275257d:0x372c96f3fa4179e0!8m2!3d36.8011614!4d10.1809328" target="_blank">50, 1000 Rue Mokhtar Attia, Tunis 1001</a><br>
        <a href="tel:+21652744342">+216 52 744 342</a>
        <br />
        <a href="mailto:contact@playbygone.com">contact@playbygone.com</a>
      </div>
      <div class="col-md-4">
        <h4>Contact</h4>
        <a>Media Kit</a>
        <br />
        <a>Investor Kit</a>
      </div>
      <div class="col-md-4">
        <h4>Careers</h4>
        <p>
          Interested in working with us? Please
          <strong>send us an email</strong> and we'll be in touch.
          <br />We look forward to hearing from you!
        </p>
      </div>
    </section>
    <section id="copyright-section" class="row pt-2 pb-2 text-center">
      <div class="col">
        <p>
          Crafted in
          <a
            href="https://www.google.com/maps/place/Historio/@36.8011614,10.1809328,15z/data=!4m5!3m4!1s0x0:0x372c96f3fa4179e0!8m2!3d36.8011614!4d10.1809328"
          >Tunis</a>, &copy; 2020
          <strong>Historio SARL</strong> all rights reserved
        </p>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "PageFooter"
};
</script>

<style type="text/scss" lang="scss" scoped>
footer {
  font-size: 0.8rem;
  h4 {
    font-size: 0.7rem;
    color: white;
  }
  address,
  a,
  p {
    font-size: 0.4rem;
    color: white;
  }
}
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

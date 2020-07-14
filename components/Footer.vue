<template>
  <footer>
    <div class="container footer-content">
      <div class="schema_block schema_organization pull-left">
        <div typeof="schema:LocalBusiness">
          <a
            class="schema_url"
            target="_blank"
            property="schema:url"
            href="https://justaxis.biz/"
          >
            <div class="schema_name" property="schema:name">
              JusTaxis
            </div></a
          >
          <div class="schema_description" property="schema:description">
            Taxi Service in Glastonbury, Somerset
          </div>
          <div itemscope itemtype="http://schema.org/PostalAddress">
            <div itemprop="name">JusTaxis</div>
            <div itemprop="streetAddress">Ruckles, Shapwick Road</div>
            <div itemprop="addressLocality">Westhay, Glastonbury</div>
            <div itemprop="addressRegion">Somerset</div>
            <div itemprop="postalCode">BA6 9TT</div>
            <div itemprop="addressCountry" class="schema_country">GB</div>
          </div>
          <div class="schema_phone" property="schema:telephone">
            01458 860020
          </div>
        </div>
      </div>

      <div class="privacy">
        <div class="copyright">&copy; JusTaxis - Glastonbury</div>
        <a href="/privacy-notice/">Privacy Notice</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

footer {
  background-color: $navy;
  color: $white;
  // padding: 30px 0;
  // height: auto;
  width: 100%;
}

.footer-content {
  align-items: center;
  display: flex;
  font-size: 0.889rem;
  height: 100%;
  padding-top: 30px;
  justify-content: space-between;

  @media #{$bp-md-up} {
    font-size: 0.9375rem;
  }

  a {
    color: $white;
    transition: color 0.3s, border-bottom 0.3s;

    &:hover,
    &:focus {
      color: $red;
      padding-bottom: 1px;
      border-bottom: 1px solid $red;
    }
  }
}

.schema_name,
.schema_description,
.schema_country {
  display: none;
}
</style>

<template>
  <footer>
    <div class="container footer-content">
      <div class="schema_block schema_organization">
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
            <div itemprop="name" class="schema_name hidden">JusTaxis</div>
            <div itemprop="streetAddress">Ruckles, Shapwick Road</div>
            <div itemprop="addressLocality">Westhay, Glastonbury</div>
            <div itemprop="addressRegion">Somerset</div>
            <div itemprop="postalCode">BA6 9TT</div>
            <div itemprop="addressCountry" class="schema_country">GB</div>
          </div>
          <hr />
          <div class="schema_phone" property="schema:telephone">
            <svg
              viewBox="0 0 32 32"
              width="20"
              height="100%"
              class="icon-phone"
              data-v-cfc91daa=""
            >
              <path
                d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"
                data-v-cfc91daa=""
              ></path>
            </svg>
            01458&nbsp;860020
          </div>
        </div>
      </div>

      <div class="privacy">
        <div class="copyright">&copy; JusTaxis</div>
        <nuxt-link to="/privacy-notice">Privacy Notice</nuxt-link>
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
  width: 100%;
}

.footer-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 0.889rem;
  height: 100%;
  margin: 30px auto;
  justify-content: space-between;

  @media #{$bp-sm-up} {
    font-size: 0.9375rem;
    flex-direction: row;
  }

  a {
    color: $clouds;
    transition: color 0.3s, border-bottom 0.3s;

    &:hover,
    &:focus {
      color: $white;
      padding-bottom: 1px;
      border-bottom: 1px solid $white;
    }
  }
}

.schema_description,
.schema_country {
  display: none;
}

.schema_block {
  color: lightgrey;
  font-size: 0.89rem;
  margin-bottom: 30px;
  width: 100%;

  @media #{$bp-sm-up} {
    margin-bottom: 0;
    width: auto;
  }
}

.privacy {
  width: 100%;

  @media #{$bp-sm-up} {
    width: auto;
  }
}

.schema_name,
.schema_phone {
  color: $white;
  font-size: 1.2rem;
}

svg.icon-phone {
  fill: $white;
}
</style>

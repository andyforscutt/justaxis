<template>
  <footer>
    <div class="container footer-content">
      <div class="schema_block schema_organization">
        <div typeof="schema:LocalBusiness">
          <!--when live href="https://justaxis.biz/" -->
          <a class="schema_url" property="schema:url" href="#">
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
          <a
            href="tel:+441458860020"
            class="footer-phone"
            title="Call to Book a Taxi"
          >
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
          </a>
        </div>
      </div>

      <div class="privacy">
        <div class="copyright">&copy; JusTaxis</div>
        <nuxt-link to="/privacy-notice">Privacy Notice</nuxt-link>
        <div class="social-icons">
          <a
            href="https://www.facebook.com/justaxis.biz/"
            target="_blank"
            title="JusTaxis on Facebook"
            rel="noopener noreferrer"
          >
            <span class="sr-only">JusTaxis on Facebook</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
              />
            </svg>
          </a>
        </div>
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
    //transition: color 0.3s, border-bottom 0.3s;

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

  a:hover,
  a:focus {
    border-bottom: none;
    color: $firebrick;
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

.social-icons {
  margin-top: 6px;

  @media #{$bp-sm-up} {
    border-top: 2px solid $lightgrey;
  }
}

.social-icons a {
  display: inline-block;
  margin-top: 15px;
  border: $navy !important;
  transition: none !important;

  &:hover {
    display: block;
    border: $navy !important;
  }

  &:focus {
    outline: 2px solid $black;
  }

  svg {
    fill: $lightgrey;
  }

  &:hover svg,
  &:focus svg {
    fill: $white;
  }
}
</style>

<template>
  <footer>
    <div class="container footer-content">
      <div class="schema_block schema_organization">
        <div typeof="schema:LocalBusiness">
          <a
            class="schema_url"
            property="schema:url"
            href="https://justaxis.biz/"
          >
            <div class="schema_name" property="schema:name">JusTaxis</div>
          </a>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <title>Justaxis on Facebook</title>
              <path
                d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
              />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/justinjustaxismiller/"
            target="_blank"
            title="JusTaxis on Instagram"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <title>Justaxis on Instagram</title>
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
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

    &:hover,
    &:focus {
      color: $white;
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
  margin-right: 10px;
  border: $navy !important;
  transition: none !important;

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

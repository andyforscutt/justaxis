<template>
  <main>
    <section id="intro" class="content">
      <h1>JusTaxis - Glastonbury Taxi Company</h1>

      <Heroimg />

      <div class="row">
        <div class="col-md-8">
          <p>
            We are an established Taxi Company based in
            <strong>Glastonbury</strong>, covering the whole of the
            <strong>Somerset</strong> area.
          </p>

          <p>
            We provide professional Taxi services around the Somerset area
            including Glastonbury, Street and the city of Wells. JusTaxis can
            take you further afield to Bristol Airport or Railway stations such
            as Castle Cary or Yeovil Junction. We are also a popular choice for
            the Glastonbury Festival.
          </p>

          <p class="last">
            You can read more about JusTaxis and places of interest around
            Somerset at our
            <nuxt-link to="/about-justaxis-glastonbury-somerset"
              >About Us</nuxt-link
            >
            page.
          </p>

          <Features />
        </div>

        <div class="col-md-4">
          <Introimg />
        </div>
      </div>
    </section>

    <section class="spikes">
      <h2>Airports and Railway Stations</h2>
      <p>
        We can take you to Bristol or Exeter Airports, or any Railway station
        across Somerset.
      </p>

      <Airports />

      <Railways />
    </section>

    <SafeTravel />

    <section class="home-contact content">
      <h2>Arrange a Taxi</h2>
      <div class="row">
        <div class="col-md-8">
          <p>
            Call us on
            <a href="tel:+441458860020" class="call-taxi">01458&nbsp;860020</a>
            to book a Taxi or discuss how we can help with your journey.
          </p>

          <p class="last">
            You can also contact us via our
            <strong
              ><nuxt-link to="/contact-us">taxi contact form</nuxt-link></strong
            >
            for Enquiries or Direct Taxi Bookings.
          </p>
        </div>

        <div class="col-md-4">
          <Contactimg />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Heroimg from "~/components/home/Heroimg.vue";
import Introimg from "~/components/home/Introimg.vue";
import Features from "~/components/Features.vue";
import Airports from "~/components/Airports.vue";
import Railways from "~/components/Railways.vue";
import SafeTravel from "~/components/SafeTravel.vue";
import Contactimg from "~/components/home/Contactimg.vue";

export default {
  name: "Index",
  components: {
    Heroimg,
    Introimg,
    Features,
    SafeTravel,
    Railways,
    Airports,
    Contactimg,
  },
  head() {
    return {
      title: "JusTaxis - Taxi Company Glastonbury Somerset",
      titleTemplate: null,
      meta: [
        {
          hid: "og:url",
          property: "og:url",
          content: "https://justaxis.biz",
        },
      ],
      link: [{ rel: "canonical", href: "https://justaxis.biz" }],
    };
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";
.hero-img {
  @media #{$bp-md-up} {
    margin-bottom: 20px;
  }
}

#intro {
  margin-bottom: 20px;
}

.safe-travel {
  margin-bottom: 0;
  padding-bottom: 0;
}

.home-contact {
  background-color: $lightgrey;
  border-top: 6px solid $clouds;
  padding-bottom: 30px;
  margin-bottom: 0;
}
</style>

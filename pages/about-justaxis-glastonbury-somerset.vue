<template>
  <main>
    <article>
      <section class="content">
        <h1>About Us</h1>

        <div class="row">
          <div class="col-xs-12">
            <h2>The Company</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-8">
            <p>
              Justaxis is basically an amalgamation of a couple of old long
              forgotten <strong>Glastonbury</strong> taxi companies and was
              first established in its own right around 1994.
            </p>

            <p>
              Justaxis is very likely to be one of the first taxi companies in
              the area to adopt the modern age of computers for their day to day
              bookings and the internet back in the days of dialup; in fact the
              company name comes from the Windows 3.1 file name the owner’s day
              sheet was stored under.
            </p>

            <p>
              Justaxis was arguably the first to adopt and use its own branding,
              defiantly the first to run a hybrid car, the first to accept
              payments with card machines and the first and only company to run
              a union jack and chequered flag on the bonnet.
            </p>
          </div>
          <!--end col-->

          <div class="col-md-6 col-lg-4">
            <img
              class="polaroid"
              src="~assets/about/taxis-street-glastonbury-somerset.jpg"
              alt="JusTaxis Taxi Service covering Glastonbury, Street, Wells and the whole of Somerset"
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </section>

      <section class="spikes">
        <div class="row">
          <div class="col-xs-12">
            <h2>The Owners</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-8">
            <p>
              JusTaxis is ran by <strong>Justin</strong> and
              <strong>Dawn Miller</strong>. We have an excellent knowledge of
              the <strong>Glastonbury</strong> and surrounding
              <strong>Somerset</strong> area.
            </p>

            <p>
              We are a typical Somerset born and bred small family business and
              we grew up in the valley between the Quantock and Mendip hills in
              an area called the Somerset levels. We are never really that far
              from the Tor&#39;s sight
            </p>
          </div>
          <!--end col-->

          <div class="col-md-6 col-lg-4">
            <img
              class="polaroid"
              src="~assets/about/justaxis-glastonbury-somerset.jpg"
              alt="Justin and Dawn Miller from JusTaxis Glastonbury, Somerset"
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </section>

      <section class="content">
        <div class="row">
          <div class="col-md-6 col-lg-8">
            <h2>The Area</h2>
            <p>
              Somerset is famous for it&#39;s areas of outstanding natural
              beauty, it&#39;s battles, myths and legends and amazing history
              including the Romans, King Alfred, Merlin and of course King
              Arthur.
            </p>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-md-6">
            <h3>Places of Interest</h3>

            <ul class="list">
              <li>Burrow Mump</li>
              <li>Taunton Museum</li>
              <li>Cheddar Gorge</li>
              <li>Wells Cathedral</li>
              <li>Glastonbury Tor</li>
              <li>Avebury</li>
              <li>Stonehenge</li>
              <li>Tintagel</li>
              <li>Kilve court</li>
            </ul>

            <Railways />

            <h3>Coach/Bus</h3>
            <ul class="list">
              <li>Bridgwater</li>
              <li>Ilchester</li>
              <li>Wells</li>
              <li>Bristol</li>
            </ul>

            <h3>Hospitals</h3>
            <ul class="list">
              <li>Yeovil District Hospital</li>
              <li>Musgrove Park Hospital, Taunton</li>
              <li>Nuffield Taunton</li>
              <li>Royal United Hospital, Bath</li>
              <li>West Mendip, Glastonbury</li>
              <li>Bridgwater Community Hospital</li>
              <li>BRI Bristol</li>
            </ul>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-lg-8">
            <p>
              We can take you anywhere you need to get to in the Somerset and
              Bristol area.
              <nuxt-link to="/contact-us">Contact Us</nuxt-link> to make a Taxi
              enquiry or direct Booking.
            </p>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "AboutJustaxisGlastonburySomerset",
  head() {
    return {
      title: "About",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About JusTaxis - taxi company from Glastonbury, Somerset.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>

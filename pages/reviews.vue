/* eslint-disable */
<template>
  <main>
    <article>
      <section class="content">
        <h1>Reviews</h1>

        <div class="row">
          <div class="col-xs-12">
            <h2>Glastonbury&#39;s Leading Taxi Company</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-8">
            <p>
              Justaxis have a long standing reputation in the Glastonbury and Street area for high quality service and
              reliability.
            </p>

            <p>Below are some reviews from previous customers:</p>
          </div>

          <div class="col-md-6 col-lg-4">
            <ReviewImg1 />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Justine Smith</h3>
            <div class="review">
              <LeftQuote />
              Fantastic Service! My daughter returned home to Liverpool from Glastonbury Festival minus her mobile
              phone, which had all her university work on it. I called JusTaxis, explained the situation. They organised
              locating the lost mobile on an App, and within an hour had found her phone! They were so helpful and went
              out of their way to find her phone. I cannot thank JusTaxis enough! I still can't quite believe it!
              Amazing guys! Thank you. Everyone says what a fantastic place Glastonbury is, I believe it's because it's
              full of fantastic people, as JusTaxis proves this.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Angie Cornall</h3>
            <div class="review">
              <LeftQuote />
              Brilliant taxi service. Never used a taxi company around Glastonbury before and certainly struck gold with
              this guy. Picked us up from Travelodge at specified time and was really friendly. We asked if he could
              pick us up later but we weren't sure of a time as we were at a wedding. He said he was busy but to give
              him a try. I phoned around 10pm and he arrived 15 minutes later. Fantastic service. He even stopped so I
              could take a photo of the moon. Highly recommend and next time I'm in Glastonbury I will definitely use
              again. Reasonably priced too.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>John O Reilly</h3>
            <div class="review">
              <LeftQuote />
              If you're in Glastonbury or the surrounding area only use Justaxis. Dawn brought my partner and I from the
              town to our campsite everyday and was friendly, kind and very fair. She even refunded us some money from
              our first trip when she figured out a quicker route the next day. The staff were quick to respond and
              helpful.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Paula Parsons</h3>
            <div class="review">
              <LeftQuote />
              This is by far the best taxi company I have ever used for my sons transport too and from school. Dawn goes
              above and beyond for my son. and apsolutly amazing lady. Highly recommend for anyone and they will not
              ever be disappointed with the service and the care.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Malcolm Morley</h3>
            <div class="review">
              <LeftQuote />
              Really helpful thanks.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>James Whitcombe</h3>
            <div class="review">
              <LeftQuote />
              5 Stars!
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Jake Johnson</h3>
            <div class="review">
              <LeftQuote />
              Had many bookings with Justaxis around the Street and Glastonbury area and have always been looked after
              with great prices 5 Stars!
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Polly White</h3>
            <div class="review">
              <LeftQuote />
              Fantastic and friendly service, highly recommend.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Melissa Hooper</h3>
            <div class="review">
              <LeftQuote />
              <p>
                I have been a customer of theirs for a few years, they are so reliable, great value for money and
                extremely helpful! My elderly grandmother will now only use this company for taxis.
              </p>
              <p>They are so kind, considerate and very trustworthy! No journey is too much trouble for them.</p>
              <p>
                I would always recommend them for short journeys around town, airport runs and going to the train
                stations! FANTASTIC firm. Brilliant prices, always service with a smile, nothing is too much trouble...
                So anyone needing reliable and safe transport please give these a call!
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Geoff Dench</h3>
            <div class="review">
              <LeftQuote />
              5 Stars. Professionalism, Punctuality, Quality, Value.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <h3>Emily Wiseman</h3>
            <div class="review">
              <LeftQuote />
              5 Stars. Highly recommended.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8">
            <p>
              If you would like to book a Taxi then please <nuxt-link to="/contact-us"> Contact Us </nuxt-link> to make
              a Taxi Enquiry or Direct Booking, or call us on
              <a href="tel:+441458860020" class="call-taxi"> 01458&nbsp;860020 </a>.
            </p>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import ReviewImg1 from "~/components/reviews/ReviewImg1.vue";
import LeftQuote from "~/components/reviews/LeftQuote.vue";

export default {
  name: "reviews",
  components: {
    ReviewImg1,
    LeftQuote,
  },
  head() {
    return {
      title: "Reviews",
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "JusTaxis Reviews - Glastonbury Taxi Company",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "JusTaxis Reviews - Glastonbury Taxi Company",
        },
        {
          hid: "description",
          name: "description",
          content:
            "JusTaxis Reviews - Glastonbury Taxi Company. Call 01458 860020. Taxis across Somerset including Bristol airport transfers.",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "JusTaxis Reviews - Glastonbury Taxi Company. Call 01458 860020. Taxis across Somerset including Bristol airport transfers.",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "JusTaxis Reviews - Glastonbury Taxi Company. Call 01458 860020. Taxis across Somerset including Bristol airport transfers.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://justaxis.biz/about/taxis-street-glastonbury-somerset-700w.jpg",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://justaxis.biz/about/taxis-street-glastonbury-somerset-700w.jpg",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://justaxis.biz/about-justaxis-glastonbury-somerset",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://justaxis.biz/reviews",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.review {
  font-size: 0.8rem;
  padding: 20px;
  margin-bottom: 1.5rem;
  background-color: $clouds;
  border-top: 6px solid $lightgrey;
}
</style>

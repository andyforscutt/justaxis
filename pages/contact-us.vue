<template>
  <main>
    <article class="content">
      <h1>Contact Us</h1>
      <Contact />
    </article>
  </main>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  name: "ContactUs",
  components: {
    Contact,
  },
  head() {
    return {
      title: "Contact",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Contact JusTaxis, Glastonbury - Make a Taxi Booking or Enquiry for our Somerset Taxi Service. 01458 860020",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Contact JusTaxis, Glastonbury - Make a Taxi Booking or Enquiry for our Somerset Taxi Service. 01458 860020",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Contact JusTaxis, Glastonbury - Make a Taxi Booking or Enquiry for our Somerset Taxi Service. 01458 860020",
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            "Contact JusTaxis, Taxi Company Glastonbury, Street, Wells Somerset, 01458 860020",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            "Contact JusTaxis, Taxi Company Glastonbury, Street, Wells Somerset, 01458 860020",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://justaxis.biz/contact-us",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>

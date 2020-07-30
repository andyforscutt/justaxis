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
          hid: "og:title",
          name: "og:title",
          content:
            "Contact JusTaxis, Taxi Company Glastonbury, Street, Wells Somerset, 01458 860020",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>

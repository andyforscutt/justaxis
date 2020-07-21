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
            "Contact JusTaxis - Make a Taxi Booking or Enquiry for our Somerset Taxi Service.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
//@import "~assets/scss/variables";
</style>

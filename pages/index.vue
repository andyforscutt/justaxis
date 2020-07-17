<template>
  <main>
    <section class="content">
      <h1>JusTaxis - Glastonbury Taxi Company</h1>
    </section>

    <section class="spikes">
      <h2>Safe Travel</h2>
      <p>
        We take your safety seriously and we have taken steps to deal with
        COVID-19.
      </p>
    </section>

    <section class="content">
      <h2>Airport Transfers</h2>
      <p>We can take you to Bristol airport from anywhere in Somerset.</p>
    </section>

    <section class="spikes">
      <h2>Railway Stations</h2>
      <p>We can take you to Bristol airport from anywhere in Somerset.</p>
    </section>

    <section class="content">
      <h2>Contact Us</h2>
      <Contact />
    </section>
  </main>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  name: "Index",
  components: {
    Contact,
  },
  head() {
    return {
      title: "JusTaxis - Taxi Company Glastonbury Somerset",
      titleTemplate: null,
    };
  },
};
</script>

<style lang="scss" scoped>
// @import "~assets/scss/variables";
</style>

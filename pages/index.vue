<template>
  <main>
    <section class="welcome">
      <h1>JusTaxis - Glastonbury Taxi Company</h1>
    </section>

    <section class="features">
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

<style scoped></style>

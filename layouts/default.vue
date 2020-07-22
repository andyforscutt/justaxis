<template>
  <div v-cloak id="page-container">
    <Navbar />
    <div id="content-wrap" class="container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
//import "~/node_modules/normalize.css/normalize.css";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  head() {
    return {
      titleTemplate: "%s | JusTaxis Glastonbury",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "JusTaxis - Taxi service for Glastonbury, Street, Wells and the whole of Somerset. 01458 860020",
        },
      ],
    };
  },
};
</script>

<style></style>

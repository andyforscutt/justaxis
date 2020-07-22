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
        {
          hid: "og:locale",
          name: "og:locale",
          content: "en_GB",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:image",
          name: "og:image",
          content:
            "/_nuxt/img/justaxis-logo-glastonbury-taxi-company-160x75.png",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "JusTaxis Taxi Company Glastonbury Somerset",
        },
      ],
    };
  },
};
</script>

<style></style>

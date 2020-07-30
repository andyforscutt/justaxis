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
          hid: "og:title",
          name: "og:title",
          content: "JusTaxis Taxi Service Glastonbury",
        },
        {
          hid: "description",
          name: "description",
          content:
            "JusTaxis - Taxi service for Glastonbury, Street, Wells and the whole of Somerset. Phone 01458 860020. Local Taxis and Airport Transfers to Bristol Airport.",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "JusTaxis - Taxi service for Glastonbury, Street, Wells and the whole of Somerset. Phone 01458 860020. Local Taxis and Airport Transfers to Bristol Airport.",
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
            "https://justaxis.biz/justaxis-glastonbury-town-hall-pickup-700w.jpg",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "JusTaxis Taxi Company Glastonbury Somerset",
        },
        {
          hid: "article:publisher",
          name: "article:publisher",
          content: "https://www.facebook.com/justaxis.biz",
        },
        {
          hid: "article:author",
          name: "article:author",
          content: "https://www.facebook.com/justaxis.biz",
        },
      ],
    };
  },
};
</script>

<style></style>

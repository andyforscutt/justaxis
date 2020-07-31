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
          property: "og:title",
          content: "JusTaxis Taxi Service Glastonbury, Somerset",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "JusTaxis Taxi Service Glastonbury, Somerset",
        },
        {
          hid: "description",
          name: "description",
          content:
            "JusTaxis - Taxi service for Glastonbury, Street, Wells and the whole of Somerset. Phone 01458 860020. Local Taxis and Airport Transfers to Bristol Airport.",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "JusTaxis - Taxi service for Glastonbury, Street, Wells and the whole of Somerset. Phone 01458 860020. Local Taxis and Airport Transfers to Bristol Airport.",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "JusTaxis - Taxi service for Glastonbury, Street, Wells and the whole of Somerset. Phone 01458 860020. Local Taxis and Airport Transfers to Bristol Airport.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://justaxis.biz/justaxis-glastonbury-town-hall-pickup-700w.jpg",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://justaxis.biz/justaxis-glastonbury-town-hall-pickup-700w.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>

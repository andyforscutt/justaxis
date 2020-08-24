<template>
  <picture>
    <source :srcSet="multipleSizes.srcSet" type="image/webp" />
    <source :srcSet="fallback.srcSet" type="image/jpg" />

    <img
      src="~/assets/justaxis-glastonbury-taxi-service-2-1340w.jpg"
      width="1340"
      height="474"
      class="hero-img"
      alt="JusTaxis Taxi Company Glastonbury, Somerset"
    />
  </picture>
</template>

<script>
const fallback = require("~/assets/justaxis-glastonbury-taxi-service-2-1340w.jpg?resize&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=1024&sizes[]=1340");
const multipleSizes = require("~/assets/justaxis-glastonbury-taxi-service-2-1340w.jpg?resize&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=1024&sizes[]=1340&format=webp");

export default {
  data() {
    return { fallback, multipleSizes };
  },
};
</script>

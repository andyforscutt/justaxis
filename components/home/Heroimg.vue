<template>
  <div>
    <img
      width="1340"
      height="474"
      :srcSet="multipleSizes.srcSet"
      :src="fallback.src"
      class="hero-img"
      alt="JusTaxis Taxi Company Glastonbury, Somerset"
    />
  </div>
</template>

<script>
const fallback = require("~/assets/justaxis-glastonbury-taxi-service-2-1340w.jpg?resize&sizes[]=1340");
const multipleSizes = require("~/assets/justaxis-glastonbury-taxi-service-2-1340w.jpg?resize&sizes[]=700&sizes[]=1024&sizes[]=1340&format=webp");

export default {
  data() {
    return { multipleSizes, fallback };
  },
};
</script>

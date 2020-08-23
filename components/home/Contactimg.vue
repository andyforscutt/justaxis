<template>
  <div>
    <img
      width="700"
      height="351"
      :srcSet="multipleSizes.srcSet"
      :src="fallback.src"
      loading="lazy"
      alt="Taxi Company for Glastonbury, Street, Wells and whole of Somerset"
    />
  </div>
</template>

<script>
const fallback = require("~/assets/justaxis-glastonbury-taxi-service-somerset-700w.jpg?resize&sizes[]=375&sizes[]=500&sizes[]=700");
const multipleSizes = require("~/assets/justaxis-glastonbury-taxi-service-somerset-700w.jpg?resize&sizes[]=375&sizes[]=500&sizes[]=700&format=webp");

export default {
  data() {
    return { multipleSizes, fallback };
  },
};
</script>

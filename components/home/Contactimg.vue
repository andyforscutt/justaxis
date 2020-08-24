<template>
  <picture>
    <source :srcSet="multipleSizes.srcSet" type="image/webp" />
    <source :srcSet="fallback.srcSet" type="image/jpg" />

    <img
      src="~/assets/justaxis-glastonbury-taxi-service-somerset-700w.jpg"
      width="700"
      height="351"
      loading="lazy"
      alt="Taxi Company for Glastonbury, Street, Wells and whole of Somerset"
    />
  </picture>
</template>

<script>
const fallback = require("~/assets/justaxis-glastonbury-taxi-service-somerset-700w.jpg?resize&sizes[]=500&sizes[]=600&sizes[]=700");
const multipleSizes = require("~/assets/justaxis-glastonbury-taxi-service-somerset-700w.jpg?resize&sizes[]=500&sizes[]=600&sizes[]=700&format=webp");

export default {
  data() {
    return { fallback, multipleSizes };
  },
};
</script>

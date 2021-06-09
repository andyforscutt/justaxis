<template>
  <picture>
    <source :srcSet="multipleSizes.srcSet" type="image/webp" />
    <source :srcSet="fallback.srcSet" type="image/jpg" />
    <img
      src="~/assets/about/justaxis-glastonbury-somerset-700w.jpg"
      width="700"
      height="376"
      class="polaroid"
      alt="Justin and Dawn Miller from JusTaxis, Taxi service for Glastonbury, Street, Wells and whole of Somerset."
      loading="lazy"
    />
  </picture>
</template>

<script>
const fallback = require("~/assets/about/justaxis-glastonbury-somerset-700w.jpg?resize&sizes[]=500&sizes[]=600&sizes[]=700");
const multipleSizes = require("~/assets/about/justaxis-glastonbury-somerset-700w.jpg?resize&sizes[]=500&sizes[]=600&sizes[]=700&format=webp");

export default {
  data() {
    return { fallback, multipleSizes };
  },
};
</script>

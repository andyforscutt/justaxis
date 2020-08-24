<template>
  <picture>
    <source :srcSet="multipleSizes.srcSet" type="image/webp" />
    <source :srcSet="fallback.srcSet" type="image/jpg" />

    <img
      src="~/assets/about/taxis-street-glastonbury-somerset-700w.jpg"
      width="700"
      height="566"
      class="polaroid"
      alt="JusTaxis Taxi Service covering Glastonbury, Street, Wells and the whole of Somerset"
    />
  </picture>
</template>

<script>
const fallback = require("~/assets/about/taxis-street-glastonbury-somerset-700w.jpg?resize&sizes[]=500&sizes[]=600&sizes[]=700");
const multipleSizes = require("~/assets/about/taxis-street-glastonbury-somerset-700w.jpg?resize&sizes[]=500&sizes[]=600&sizes[]=700&format=webp");

export default {
  data() {
    return { fallback, multipleSizes };
  },
};
</script>

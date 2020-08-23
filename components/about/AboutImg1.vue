<template>
  <div>
    <img
      width="700"
      height="566"
      class="polaroid"
      :srcSet="multipleSizes.srcSet"
      :src="fallback.src"
      alt="JusTaxis Taxi Service covering Glastonbury, Street, Wells and the whole of Somerset"
      loading="lazy"
    />
  </div>
</template>

<script>
const fallback = require("~/assets/about/taxis-street-glastonbury-somerset-700w.jpg?resize&sizes[]=375&sizes[]=500&sizes[]=700");
const multipleSizes = require("~/assets/about/taxis-street-glastonbury-somerset-700w.jpg?resize&sizes[]=375&sizes[]=500&sizes[]=700&format=webp");

export default {
  data() {
    return { multipleSizes, fallback };
  },
};
</script>

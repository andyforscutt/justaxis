<template>
  <div>
    <img
      width="700"
      height="376"
      class="polaroid"
      :srcSet="multipleSizes.srcSet"
      :src="fallback.src"
      alt="Justin and Dawn Miller from JusTaxis Glastonbury, Somerset"
      loading="lazy"
    />
  </div>
</template>

<script>
const fallback = require("~/assets//about/justaxis-glastonbury-somerset-700w.jpg?resize&sizes[]=375&sizes[]=500&sizes[]=700");
const multipleSizes = require("~/assets//about/justaxis-glastonbury-somerset-700w.jpg?resize&sizes[]=375&sizes[]=500&sizes[]=700&format=webp");

export default {
  data() {
    return { multipleSizes, fallback };
  },
};
</script>

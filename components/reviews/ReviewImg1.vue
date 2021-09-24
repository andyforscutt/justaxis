<template>
  <picture>
    <source :srcSet="multipleSizes.srcSet" type="image/webp" />
    <source :srcSet="fallback.srcSet" type="image/jpg" />

    <img
      src="~/assets/reviews/justaxis-glastonbury-taxis.jpg"
      width="1260"
      height="644"
      class="polaroid"
      alt="JusTaxis Taxis in Glastonbury"
      loading="eager"
    />
  </picture>
</template>

<script>
const fallback = require("~/assets/reviews/justaxis-glastonbury-taxis.jpg?resize&sizes[]=500&sizes[]=600&sizes[]=700");
const multipleSizes = require("~/assets/reviews/justaxis-glastonbury-taxis.jpg?resize&sizes[]=500&sizes[]=600&sizes[]=700&format=webp");

export default {
  data() {
    return { fallback, multipleSizes };
  },
};
</script>

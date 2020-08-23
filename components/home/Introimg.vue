<template>
  <div>
    <img
      width="700"
      height="700"
      :srcSet="multipleSizes.srcSet"
      :src="fallback.src"
      alt="JusTaxis Taxi picking up at Glastonbury Town Hall in Somerset"
    />
  </div>
</template>

<script>
const fallback = require("~/assets/justaxis-glastonbury-town-hall-pickup-700w.jpg?resize&sizes[]=375&sizes[]=500&sizes[]=700");
const multipleSizes = require("~/assets/justaxis-glastonbury-town-hall-pickup-700w.jpg?resize&sizes[]=375&sizes[]=500&sizes[]=700&format=webp");

export default {
  data() {
    return { multipleSizes, fallback };
  },
};
</script>

<template>
  <picture>
    <source :srcSet="multipleSizes.srcSet" type="image/webp" />

    <img
      src="~/assets/logo/justaxis-logo-glastonbury-taxi-company-160x75.png"
      height="75"
      width="160"
      alt="JusTaxis Logo"
    />
  </picture>
</template>

<script>
const multipleSizes = require("~/assets/logo/justaxis-logo-glastonbury-taxi-company-160x75.png?resize&format=webp");

export default {
  data() {
    return { multipleSizes };
  },
};
</script>

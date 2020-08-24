<template>
  <picture>
    <source
      :srcSet="multipleSizes.srcSet"
      :src="multipleSizes.src"
      type="image/webp"
    />
    <source :srcSet="fallback.srcSet" :src="fallback.src" type="image/png" />

    <img
      src="~/assets/logo/justaxis-logo-glastonbury-taxi-company-160x75.png"
      height="75"
      width="160"
      alt="JusTaxis Logo"
    />
  </picture>
</template>

<script>
const fallback = require("~/assets/logo/justaxis-logo-glastonbury-taxi-company-160x75.png");
const multipleSizes = require("~/assets/logo/justaxis-logo-glastonbury-taxi-company-160x75.png?webp");

export default {
  data() {
    return { fallback, multipleSizes };
  },
};
</script>

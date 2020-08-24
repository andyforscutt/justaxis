<template>
  <section class="content safe-travel">
    <h2>Safe Taxi Travel</h2>
    <div class="row">
      <div class="col-lg-8">
        <p>
          We are part of the Safe Taxi and Private Hire Charter and are
          committed to clean and safe travel, taking necessary precautions
          against COVID-19.
        </p>
      </div>
    </div>

    <picture>
      <source
        :srcSet="multipleSizes.srcSet"
        :src="multipleSizes.src"
        type="image/webp"
      />
      <source :srcSet="fallback.srcSet" :src="fallback.src" type="image/png" />

      <img
        src="~/assets/safety/safe-taxi-travel-glastonbury-somerset-1340w.png"
        width="1340"
        height="323"
        loading="lazy"
        alt="Safe Taxi Travel Logos and Graphics"
      />
    </picture>
  </section>
</template>

<script>
const fallback = require("~/assets/safety/safe-taxi-travel-glastonbury-somerset-1340w.png?resize&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=1024&sizes[]=1340");
const multipleSizes = require("~/assets/safety/safe-taxi-travel-glastonbury-somerset-1340w.png?resize&sizes[]=500&sizes[]=600&sizes[]=700&sizes[]=1024&sizes[]=1340&format=webp");

export default {
  data() {
    return { fallback, multipleSizes };
  },
};
</script>

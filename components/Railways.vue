<template>
  <div class="railways">
    <h3>Railway Stations</h3>
    <ul class="list">
      <li>Castle Cary</li>
      <li>Templecombe</li>
      <li>Yeovil Penn Mill</li>
      <li>Yeovil Junction</li>
      <li>Taunton</li>
      <li>Bridgwater</li>
      <li>Highbridge</li>
      <li>Bristol Temple Meads</li>
      <li>Bath Spa</li>
    </ul>

    <!-- <picture>
      <source
        :srcSet="
          require('~/assets/justaxis-glastonbury-town-hall-pickup-500w.jpg?webp')
        "
        type="image/webp"
      />
      <source
        :srcSet="
          require('~/assets/justaxis-glastonbury-town-hall-pickup-500w.jpg')
        "
        type="image/jpeg"
      />
      <img
        :src="
          require('~/assets/justaxis-glastonbury-town-hall-pickup-500w.jpg')
        "
      />
    </picture> -->
  </div>
</template>

<script>
export default {
  name: "Railways",
};
</script>

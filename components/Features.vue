<template>
  <ul class="features custom-bullet check">
    <li>Nearly 30 year&#39;s Taxi Experience across Somerset and beyond</li>
    <li>
      Fantastic reputation in the Glastonbury, Street and wider Somerset area
    </li>
    <li>Friendly drivers and fair prices - always</li>
  </ul>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.features {
  background-color: $clouds;
  border-top: 6px solid $lightgrey;
  font-weight: 600;
  padding: 30px 0 20px 20px;
  margin-top: 20px;

  @media #{$bp-md-up} {
    margin-top: 30px;
  }

  li {
    clear: left;
    font-size: 16px;
    margin-bottom: 15px;
    padding-left: 10px;

    @media #{$bp-md-up} {
      font-size: 1rem;
      padding-left: 20px;
    }
  }
}

ul.custom-bullet > li:before {
  content: "";
  height: 45px;
  width: 24px;
  display: block;
  float: left;

  margin: 0 15px 15px -1.5em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media #{$bp-md-up} {
    height: 24px;
  }
}

ul.check > li:before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23575fcf" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"/></svg>');

  background-position: center;
}
</style>

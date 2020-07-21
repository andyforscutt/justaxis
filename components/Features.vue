<template>
  <ul class="features">
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"
        />
      </svg>
      Nearly 30 year&#39;s Taxi Experience across Somerset and beyond
    </li>

    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"
        />
      </svg>
      Fantastic reputation in the Glastonbury, Street and wider Somerset area
    </li>
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z"
        />
      </svg>
      Friendly drivers and fair prices - always
    </li>
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
  padding: 10px;
  margin-top: 20px;

  @media #{$bp-md-up} {
    padding: 20px 20px 10px 20px;
    margin-top: 30px;
  }

  li {
    margin-bottom: 10px;
  }
  svg {
    fill: $blue;
    margin-right: 15px;
  }
}
</style>

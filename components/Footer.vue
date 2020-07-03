<template>
  <footer>
    <div class="container footer-content">
      &copy; Justaxis - Glastonbury, Somerset

      <div class="privacy">
        <a href="/privacy-notice/">Privacy Notice</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

footer {
  background-color: $navy;
  color: $white;
  min-height: 80px;
  width: 100%;
}

.footer-content {
  align-items: center;
  display: flex;
  font-size: 0.889rem;
  height: 100%;
  justify-content: space-between;

  @media #{$bp-md-up} {
    font-size: 1rem;
  }

  a {
    color: $white;
    transition: color 0.3s, border-bottom 0.3s;

    &:hover,
    &:focus {
      color: $red;
      padding-bottom: 1px;
      border-bottom: 1px solid $red;
    }
  }
}
</style>

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
  width: 100%;
  min-height: 80px;
  background-color: $navy;
  color: $white;
}
.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: $white;
  }
}
</style>

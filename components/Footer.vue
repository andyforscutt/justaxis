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
  height: 100%;
  justify-content: space-between;

  a {
    color: $white;
  }
}
</style>

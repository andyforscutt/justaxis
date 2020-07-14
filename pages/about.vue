<template>
  <main>
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet
      leo nec massa bibendum tincidunt. Integer sit amet neque fringilla,
      sodales eros at, laoreet turpis. Aliquam vel diam felis. Aliquam pharetra
      vestibulum molestie. Nunc in vulputate leo. Vestibulum ultrices aliquet
      ligula in consequat. Mauris lobortis placerat aliquam. Sed vitae ligula
      pulvinar, imperdiet lacus id, gravida sem. Phasellus at justo quis dui
      maximus suscipit.
    </p>
    <p>
      In hac habitasse platea dictumst. Aenean rhoncus sollicitudin faucibus.
      Donec venenatis mauris vitae rutrum finibus. Ut iaculis, dui a euismod
      auctor, erat lectus faucibus lectus, in posuere elit ipsum vitae risus.
      Sed ac enim rutrum, vestibulum turpis et, dapibus quam. Aenean nibh dui,
      rhoncus venenatis ligula ut, dictum pretium nunc. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Suspendisse quis massa sed nisl ullamcorper condimentum in nec tortor.
      Fusce sit amet ligula at nisi rhoncus ultricies malesuada semper diam.
    </p>
    <p>
      Nulla euismod, mi at molestie luctus, purus ante volutpat nisi, nec cursus
      mi enim et risus. Pellentesque vestibulum odio velit, in suscipit orci
      rutrum in. Vestibulum rhoncus quam ut porttitor interdum. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis
      egestas. Nullam vel enim dictum, consectetur ipsum in, lobortis mauris.
      Aenean efficitur justo sed nisi bibendum placerat. Morbi a facilisis diam.
    </p>
  </main>
</template>

<script>
export default {
  name: "About",
  head() {
    return {
      title: "About",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About JusTaxis - taxi company from Glastonbury, Somerset.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>

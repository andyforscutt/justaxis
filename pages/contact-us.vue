<template>
  <div>
    <h1>Contact Us {{ this.$route.params.msg }}</h1>

    <form
      name="justaxis-contact-form"
      method="POST"
      data-netlify="true"
      action="contact-us-success"
    >
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Contact Number: <input type="text" name="phone" /></label>
      </p>
      <p>
        <label>Date of Journey: <input type="date" name="date" /></label>
      </p>
      <p>
        <label>Pickup Time: <input type="time" name="time" /></label>
      </p>
      <p>
        <label>Pickup Location: <input type="text" name="pickup" /></label>
      </p>
      <p>
        <label>Drop Off Location: <input type="text" name="pickup" /></label>
      </p>
      <p>
        <label
          >Special Notes for the Driver: <textarea name="notes"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped></style>

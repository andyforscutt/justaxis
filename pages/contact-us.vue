<template>
  <div>
    <h1>Contact Us {{ this.$route.params.msg }}</h1>

    <form
      name="justaxis-contact-form"
      method="POST"
      data-netlify="true"
      action="contact-us-success"
    >
      <fieldset>
        <div>
          <input
            id="enquiry"
            type="radio"
            name="format"
            value="enquiry"
            checked
          />
          <label for="enquiry">Enquiry</label>
        </div>
        <div>
          <input id="booking" type="radio" name="format" value="booking" />
          <label for="booking">Booking</label>
        </div>
      </fieldset>
      <input type="hidden" name="subject" value="" />
      <p>
        <label
          ><span class="label">Name:</span> <input type="text" name="name"
        /></label>
      </p>

      <p>
        <label
          ><span class="label">Email:</span> <input type="email" name="email"
        /></label>
      </p>

      <p>
        <label
          ><span class="label">Contact Number:</span>
          <input type="text" name="phone"
        /></label>
      </p>

      <p>
        <label
          ><span class="label">Date of Journey:</span>
          <input type="date" name="date"
        /></label>
      </p>

      <hr />

      <h2>Pick Up</h2>
      <p>
        <label
          ><span class="label">Pickup Time:</span>
          <input type="time" name="time"
        /></label>
      </p>

      <p>
        <label
          ><span class="label">Pickup Address:</span>
          <textarea name="pickup-address"></textarea>
        </label>
      </p>

      <p>
        <label
          ><span class="label">Pickup Post Code:</span>
          <input type="text" name="pickup-postcode"
        /></label>
      </p>

      <hr />

      <h2>Drop Off</h2>
      <p>
        <label
          ><span class="label">Drop Off Address:</span>
          <textarea name="dropoff-address"></textarea>
        </label>
      </p>

      <p>
        <label
          ><span class="label">Drop Off Post Code:</span>
          <input type="text" name="dropoff-postcode"
        /></label>
      </p>

      <hr />

      <p>
        <label
          ><span class="label">Special Notes for the Driver:</span>
          <textarea name="notes"></textarea>
        </label>
      </p>

      <p>
        <button type="submit" class="btn">Send</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

form {
  background-color: $clouds;
  padding: 20px;
  margin-bottom: 80px;
}

label {
  font-weight: 600;
}

fieldset {
  border: none;
}

input[type="radio"] {
  cursor: pointer;
}
</style>

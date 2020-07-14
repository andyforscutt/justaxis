<template>
  <div>
    <h1>Contact Us {{ this.$route.params.msg }}</h1>

    <form
      name="justaxis-contact-form"
      method="POST"
      data-netlify="true"
      action="contact-us-success"
      @submit="checkForm"
    >
      <div v-if="errors.length">
        <strong>Please correct the following error(s):</strong>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>

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

      <div v-if="formCount == 0" class="personal-details">
        <input type="hidden" name="subject" value="" />
        <p>
          <label
            ><span class="label">Name:</span>
            <input type="text" name="name" required
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
      </div>

      <div v-if="formCount == 1" class="pick-up">
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
      </div>

      <div v-if="formCount == 2" class="drop-off">
        <h2>Drop Off</h2>
        <p>
          <label
            ><span class="label">Drop Off Address:</span>
            <textarea
              v-model="dropoffAddress"
              name="dropoff-address"
            ></textarea>
          </label>
        </p>

        <p>
          <label
            ><span class="label">Drop Off Post Code:</span>
            <input type="text" name="dropoff-postcode"
          /></label>
        </p>
      </div>

      <div v-if="formCount == 3" class="notes">
        <p>
          <label
            ><span class="label">Special Notes for the Driver:</span>
            <textarea name="notes"></textarea>
          </label>
        </p>
      </div>

      <button
        v-if="formCount != 0"
        class="btn btn-default back"
        @click.prevent="formCount += -1"
      >
        Back
      </button>

      <button
        v-if="formCount != 3"
        class="btn btn-primary next"
        @click.prevent="formCount += 1"
      >
        Next
      </button>

      <button v-if="formCount == 3" type="submit" class="btn btn-primary send">
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: function () {
    return {
      formCount: 0,
      errors: [],
      name: null,
      pickup: null,
      dropoffAddress: null,
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.pickup) {
        this.errors.push("Pick Up Address required.");
      }
      if (!this.dropoffAddress) {
        this.errors.push("Drop Off Address required.");
      }

      e.preventDefault();
    },
  },
  head() {
    return {
      title: "Contact",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Contact JusTaxis - Make a Taxi Booking or Enquiry for our Somerset Taxi Service.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

form {
  background-color: $clouds;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 80px;

  @media #{$bp-lg-up} {
    width: 500px;
  }

  button {
    margin-bottom: 30px;
    font-size: 1.4rem;
    line-height: 1.5;
    text-transform: uppercase;
  }
}

label {
  font-weight: 600;
}

fieldset {
  border: none;
}

input[type="radio"] {
  cursor: pointer;
  margin-right: 15px;
}
button span.back {
  display: inline;
}

span.next {
  display: inline !important;

  align-self: flex-end;
}
</style>

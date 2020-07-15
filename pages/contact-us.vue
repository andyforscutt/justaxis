<template>
  <main>
    <h1>Contact Us {{ this.$route.params.msg }}</h1>

    <form
      name="justaxis-contact-form"
      method="POST"
      data-netlify="true"
      action="/contact-us-success"
      netlify-honeypot="bot-field"
      @submit="checkForm"
    >
      <input type="hidden" name="form-name" value="justaxis-contact-form" />
      <input type="hidden" name="subject" :value="subject" />
      <div v-if="errors.length">
        <strong>Please correct the following error(s):</strong>
        <ul class="red">
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <div v-show="formCount == 0" class="personal-details">
        <fieldset>
          <legend>What is your type of Request?</legend>
          <div>
            <label>
              <input
                id="enquiry"
                v-model="type"
                type="radio"
                name="type"
                value="Enquiry"
                checked
              />Enquiry</label
            >
          </div>

          <div>
            <label>
              <input
                id="booking"
                v-model="type"
                type="radio"
                name="type"
                value="Booking"
              />Booking</label
            >
          </div>
        </fieldset>

        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name" type="text" name="name" required />
        </p>

        <p>
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="email" name="email" />
        </p>

        <p>
          <label for="phone">Contact Number:</label>
          <input id="phone" v-model="phone" type="text" name="phone" />
        </p>

        <p>
          <label for="date">Date of Journey:</label>
          <input id="date" v-model="date" type="date" name="date" />
        </p>
      </div>

      <div v-show="formCount == 1" class="pick-up">
        <h2>Pick Up</h2>
        <p>
          <label for="pickuptime">Pickup Time:</label>
          <input id="pickuptime" v-model="pickupTime" type="time" name="time" />
        </p>

        <p>
          <label for="pickupaddress">Pickup Address:</label>
          <textarea
            id="pickupaddress"
            v-model="pickupAddress"
            name="pickup-address"
          ></textarea>
        </p>

        <p>
          <label for="pickuppostcode">Pickup Post Code:</label>
          <input
            id="pickuppostcode"
            v-model="pickupPostCode"
            type="text"
            name="pickup-postcode"
          />
        </p>
      </div>

      <div v-show="formCount == 2" class="drop-off">
        <h2>Drop Off</h2>
        <p>
          <label for="droppoffaddress">Drop Off Address:</label>
          <textarea
            id="dropoffaddress"
            v-model="dropoffAddress"
            name="dropoff-address"
          ></textarea>
        </p>

        <p>
          <label for="dropoffpostcode">Drop Off Post Code:</label>
          <input
            id="dropoffpostcode"
            v-model="dropoffPostCode"
            type="text"
            name="dropoff-postcode"
          />
        </p>
      </div>

      <div v-show="formCount == 3" class="notes">
        <p>
          <label for="notes">Special Notes for the Driver:</label>
          <textarea id="notes" v-model="notes" name="notes"></textarea>
        </p>
      </div>

      <button
        v-show="formCount != 0"
        class="btn btn-default back"
        @click.prevent="formCount += -1"
      >
        Back
      </button>

      <button
        v-show="formCount != 3"
        class="btn btn-primary next"
        @click.prevent="formCount += 1"
      >
        Next
      </button>

      <button
        v-show="formCount == 3"
        type="submit"
        class="btn btn-primary send"
        @click="subjectLine()"
      >
        Send
      </button>
    </form>
  </main>
</template>

<script>
export default {
  name: "Contact",
  data: function () {
    return {
      formCount: 0,
      errors: [],
      type: null,
      subject: null,
      name: null,
      email: null,
      phone: null,
      date: null,
      pickupTime: null,
      pickupAddress: null,
      pickupPostCode: null,
      dropoffAddress: null,
      dropoffPostCode: null,
      notes: null,
    };
  },
  methods: {
    subjectLine: function () {
      return (this.subject =
        "Website " +
        this.type +
        " for " +
        this.name +
        " - " +
        this.date +
        ", " +
        this.time);
    },
    checkForm: function (e) {
      if (this.name && this.email) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.pickupAddress) {
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

h2 {
  margin-top: 0;
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

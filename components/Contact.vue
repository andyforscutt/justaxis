<template>
  <div class="contact-form">
    <div v-show="formCount == 0" class="row">
      <div class="col-md-8">
        <p>
          Need a Taxi in <strong>Glastonbury</strong> or the
          <strong>Somerset</strong> area? Use the contact form below for
          <strong>Taxi Enquiries</strong> or make a
          <strong>Direct Booking</strong>.
        </p>
      </div>
      <!--end col-->
    </div>
    <!--end row-->

    <form
      name="justaxis-contact-form"
      method="POST"
      data-netlify="true"
      action="/contact-us-success"
      netlify-honeypot="bot-field"
      @submit="checkForm"
    >
      <p class="hidden">
        <label
          >Do not fill this out if you're human: <input name="bot-field"
        /></label>
      </p>
      <input type="hidden" name="form-name" value="justaxis-contact-form" />
      <input type="hidden" name="subject" :value="subject" />

      <div v-if="errors.length">
        <strong class="red"
          >Please go back and correct the following error(s):</strong
        >
        <ul class="error-list red">
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>

      <div v-show="formCount == 0" class="contact-section contact-type">
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
            - Ask for a Quote
          </div>

          <div>
            <label>
              <input
                id="booking"
                v-model="type"
                type="radio"
                name="type"
                value="Booking"
              />Direct Booking</label
            >
          </div>
        </fieldset>
      </div>

      <div v-show="formCount == 1" class="contact-section personal-details">
        <h3>Your Details</h3>
        <p>
          <label for="name">Name:</label>
          <input id="name" v-model="name" type="text" name="name" />
        </p>

        <p>
          <label for="email">Email:</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            @blur="validateEmail"
          />
        </p>

        <p>
          <label for="phone">Contact Number:</label>
          <input id="phone" v-model="phone" type="text" name="phone" />
        </p>
      </div>

      <div v-show="formCount == 2" class="contact-section date-time">
        <h3>Date and Time</h3>
        <p>
          <label for="date">Date of Journey:</label>
          <input
            id="date"
            v-model="date"
            type="date"
            name="date"
            @blur="validateDate"
          />
        </p>

        <p>
          <label for="pickuptime">Pickup Time:</label>
          <input
            id="pickuptime"
            v-model="pickupTime"
            type="time"
            name="pickup-time"
          />
        </p>
      </div>

      <div v-show="formCount == 3" class="contact-section pick-up">
        <h3>Pick Up</h3>

        <p>
          <label for="pickupaddress">Pickup Address:</label>
          <textarea
            id="pickupaddress"
            v-model="pickupAddress"
            rows="4"
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

      <div v-show="formCount == 4" class="contact-section drop-off">
        <h3>Drop Off</h3>
        <p>
          <label for="dropoffaddress">Drop Off Address:</label>
          <textarea
            id="dropoffaddress"
            v-model="dropoffAddress"
            rows="4"
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

      <div v-show="formCount == 5" class="contact-section notes">
        <p>
          <label for="notes"
            >If relevant, enter any special notes for the Driver:</label
          >
          <textarea id="notes" v-model="notes" rows="4" name="notes"></textarea>
        </p>
      </div>

      <button
        v-show="formCount != 0"
        class="btn btn-default back"
        @click.prevent="formBtn(-1)"
      >
        Back
      </button>

      <button
        v-show="formCount != 5"
        class="btn btn-primary next"
        @click.prevent="formBtn(1)"
      >
        Next
      </button>

      <button
        v-show="formCount == 5"
        type="submit"
        class="btn btn-primary send"
        @click="subjectLine()"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  scrollToTop: true,
  data: function () {
    return {
      formCount: 0,
      errors: [],
      type: "Enquiry",
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
        this.pickupTime);
    },
    formBtn(count) {
      window.scrollTo(0, 0);
      return (this.formCount += count);
    },
    validateEmail: function () {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.errors.pop("You have entered an invalid email address.");
        return true;
      }

      if (
        this.errors.indexOf("You have entered an invalid email address.") === -1
      ) {
        this.errors.push("You have entered an invalid email address.");
        return false;
      }
    },
    validateDate: function () {
      if (this.date !== null) {
        console.log(toString(this.date).length);
        if (toString(this.date).length >= 10) {
          this.errors.pop("You must enter a valid date.");
          return true;
        }
      }

      if (this.errors.indexOf("You must enter a valid date.") === -1) {
        this.errors.push("You must enter a valid date.");
        return false;
      }
    },
    checkForm: function (e) {
      this.errors = [];

      this.validateEmail();
      this.validateDate();

      //Validation - Personal Details
      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      }
      if (!this.phone) {
        this.errors.push("Phone required.");
      }
      //Validation - Date/Time
      if (!this.date) {
        this.errors.push("Date required.");
      }
      if (!this.pickupTime) {
        this.errors.push("Pick Up Time required.");
      }
      //Validation - Pickup
      if (!this.pickupAddress) {
        this.errors.push("Pick Up Address required.");
      }
      //Validation - Drop Off
      if (!this.dropoffAddress) {
        this.errors.push("Drop Off Address required.");
      }
      e.preventDefault();
    },
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

h2,
h3 {
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
  margin-bottom: 15px;
}
button span.back {
  display: inline;
}

span.next {
  display: inline !important;
  align-self: flex-end;
}

.contact-section {
  margin-bottom: 20px;
}

.error-list {
  margin-bottom: 15px;
}

.red {
  color: $red;
}
</style>

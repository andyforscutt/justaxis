<template>
  <div>
    <h1>Contact Us</h1>
    <Contact />
  </div>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  name: "ContactUs",
  components: {
    Contact,
  },
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
        this.pickupTime);
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

<template>
  <nav class="nav">
    <div class="container flex nav-container">
      <div class="logo">
        <span class="sr-only">JusTaxis Logo</span>
        <nuxt-link to="/">
          <img
            src="~assets/logo/justaxis-logo-250x125.png"
            height="80"
            width="160"
            alt="JusTaxis Logo"
          />
        </nuxt-link>
      </div>

      <button class="drawer-toggle" @click.prevent="toggle">
        <div class="bar"></div>
        <div class="bar-middle"></div>
        <div class="bar"></div>
      </button>

      <ul class="nav-menu" :class="menuClass" @click="closeMenu">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About Us</nuxt-link></li>
        <li>
          <nuxt-link to="/bristol-airport-taxi-service"
            >Airport Transfers</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/contact-us">Contact Us</nuxt-link>
        </li>
      </ul>
      <div class="phone">
        <a href="tel:+441458860020">01458 860020</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      menuClass: "closed",
      menuState: false,
    };
  },
  methods: {
    toggle: function () {
      this.menuState = !this.menuState;
      if (this.menuState == true) {
        this.menuClass = "open";
      } else {
        this.menuClass = "closed";
      }
    },
    closeMenu: function () {
      this.menuState = false;
      this.menuClass = "closed";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

nav {
  background-color: $navy;
  height: 80px;
  width: 100%;
}

.nav-container {
  justify-content: space-evenly;
}

.logo {
  flex-grow: 2;
  height: 80px;
  align-self: flex-start;
}

.nav-menu {
  transition: transform 0.5s, opacity 0.4s;

  @media #{$bp-md} {
    width: 100%;
  }

  a {
    color: $lightgrey;
    font-size: 1.4rem;
    -webkit-font-smoothing: antialiased; /* Chrome, Safari */
    -moz-osx-font-smoothing: grayscale; /* Firefox */

    transition: color 0.2s;

    &:hover,
    &:focus {
      color: $red;
      border-bottom: 2px solid $red;
    }
  }
}

@media #{$bp-md} {
  .closed {
    background-color: $grey;
    opacity: 0;
    padding: 30px 0;
    transform: translateX(-1000px);

    a {
      color: $white;
      font-size: 2.2em;
      padding-bottom: 2px;
    }
  }

  .open {
    background-color: $grey;
    //height: 100vh;
    opacity: 1;
    padding: 30px 0;
    transform: translateX(0);

    z-index: 100;

    a {
      color: $white;
      font-size: 2.2em;
      padding-bottom: 2px;

      &:hover,
      &:focus {
        border-bottom: 2px solid $white;
      }
    }
  }
}

li {
  display: inline-block;
  padding-right: 30px;

  @media #{$bp-md} {
    display: block;
    text-align: center;
  }
}

.drawer-toggle {
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  margin-top: 30px;
  width: 40px;
  z-index: 999;

  &:focus,
  &:hover {
    outline: none;
  }

  .bar {
    width: 90%;
    height: 4px;
    background-color: $black;
  }

  .bar-middle {
    background-color: $black;
    height: 4px;
    text-align: center;
    width: 70%;
  }

  @media (min-width: 768px) {
    display: none;
  }
}

.phone {
  // background-color: $yellow;

  background: radial-gradient(
      ellipse farthest-corner at right bottom,
      #fedb37 0%,
      #fdb931 8%,
      #9f7928 30%,
      #8a6e2f 40%,
      transparent 80%
    ),
    radial-gradient(
      ellipse farthest-corner at left top,
      #ffffff 0%,
      #ffffac 8%,
      #d1b464 25%,
      #5d4a1f 62.5%,
      #5d4a1f 100%
    );

  font-size: 2rem;
  height: 62px;
  padding: 50px 15px;
  border-radius: 0 0 25% 25%;
  padding: 20px 10px;
  text-align: center;
  width: 240px;

  a {
    color: lightgrey;
    font-family: Roboto;
    width: 100%;
  }

  @media #{$bp-md-up} {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media #{$bp-md} {
    position: absolute;
    top: 0;
    right: 5%;
  }
}
</style>

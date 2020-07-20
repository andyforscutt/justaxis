<template>
  <nav class="nav">
    <div class="container flex nav-container">
      <div class="logo">
        <span class="sr-only">JusTaxis Logo</span>
        <nuxt-link to="/">
          <img
            src="~assets/logo/justaxis-logo-160x75.png"
            height="75"
            width="160"
            alt="JusTaxis Logo"
          />
        </nuxt-link>
      </div>

      <button class="drawer-toggle" :class="menuClass" @click.prevent="toggle">
        <div class="bar"></div>
        <div class="bar bar-middle"></div>
        <div class="bar"></div>
      </button>

      <ul class="nav-menu" :class="menuClass" @click="closeMenu">
        <button class="cancel" aria-label="Close Menu">x</button>
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
        <a href="tel:+441458860020" class="phone-link">
          <svg class="icon-phone" viewBox="0 0 32 32" width="20" height="100%">
            <path
              d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"
            ></path>
          </svg>
          01458&nbsp;860020
        </a>
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
  height: 75px;
  width: 100%;
}

.nav-container {
  justify-content: space-evenly;
  @media #{$bp-md-up} {
    padding: 0 30px;
  }
}

.logo {
  flex-grow: 2;
  height: 75px;
  align-self: flex-start;

  img {
    min-width: 160px;
  }
}

.nav-menu {
  transition: transform 0.5s, opacity 0.4s;

  @media #{$bp-md} {
    width: 100%;
  }

  a {
    color: $clouds;

    -webkit-font-smoothing: antialiased; /* Chrome, Safari */
    -moz-osx-font-smoothing: grayscale; /* Firefox */

    transition: color 0.2s;

    &:hover,
    &:focus {
      color: $white;
      border-bottom: 2px solid firebrick; //$white;
    }
    @media #{$bp-xxl-up} {
      font-size: 1.4rem;
    }
  }

  .nuxt-link-exact-active {
    color: $white;
    border-bottom: 2px solid firebrick;
  }
}

ul.closed {
  padding-left: 30px;

  .cancel {
    display: none;
  }
}
@media #{$bp-md} {
  ul.closed {
    background-color: $grey;
    opacity: 0;
    padding: 30px 0;
    transform: translateX(-1000px);
  }

  ul.open {
    background-color: $grey;
    opacity: 1;
    padding: 70px 0 30px 0;
    transform: translateX(0);
    height: 100vh;
    position: absolute;

    top: 0;
    left: 0;

    z-index: 100;

    a {
      color: $white;
      font-size: 2.2em;
      padding-bottom: 2px;
    }

    .cancel {
      position: absolute;
      color: $white;
      background-color: transparent;
      border: none;
      font-size: 2rem;
      top: 20px;
      right: 5px;
    }
  }
}

li {
  display: inline-block;

  @media #{$bp-md} {
    display: block;
    text-align: center;
  }
  @media #{$bp-md-up} {
    padding-right: 30px;
  }
}

.drawer-toggle {
  align-items: center;
  background-color: firebrick;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 40px;
  margin-top: 14px;
  width: 40px;
  z-index: 999;

  &:focus,
  &:hover {
    outline: none;
  }

  .bar {
    width: 30px;
    height: 5px;
    background-color: $white;
  }

  // .bar-middle {
  //   background-color: $black;
  //   height: 4px;
  //   text-align: center;
  //   width: 70%;
  // }

  @media #{$bp-md-up} {
    display: none;
  }
}

button.open {
  opacity: 0;
}

.phone {
  font-size: 1.2rem;
  //height: 62px;
  padding: 50px 10px;
  border-radius: 0 0 4px 4px;
  padding: 20px 10px;
  text-align: right;
  //width: 45%;
  max-width: 240px;

  @media #{$bp-md-up} {
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

    text-align: center;
    transition: background-color 0.6s linear;

    &:hover,
    &:focus {
      background: radial-gradient(
          ellipse farthest-corner at right bottom,
          #ffffff 0%,
          #ffffac 8%,
          #d1b464 25%,
          #5d4a1f 62.5%,
          #5d4a1f 100%
        ),
        radial-gradient(
          ellipse farthest-corner at left top,
          #fedb37 0%,
          #fdb931 8%,
          #9f7928 30%,
          #8a6e2f 40%,
          transparent 80%
        );
    }

    @media #{$bp-lg-up} {
      font-size: 1.4rem;
    }

    height: 90px;
    border-radius: 0 0 25% 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
  }

  @media #{$bp-md} {
    position: absolute;
    top: 0;
    right: 5%;
  }

  @media #{$bp-xl-up} {
    font-size: 1.4rem;
  }
}

.phone-link {
  color: $clouds;
  padding: 25px 0;
  width: 100%;

  &:hover,
  &:focus {
    color: $white;
  }

  @media #{$bp-md-up} {
    padding: 38px 0;
  }
}

svg.icon-phone {
  fill: $clouds;
}
</style>

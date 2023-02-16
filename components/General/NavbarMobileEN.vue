<template>
  <div>
    <nav>
      <div class="wrapper nav-wrap">
        <div class="logo-wrap">
          <NuxtLink to="/" style="background: transparent">
            <img src="/img/logos/logo-blue.png" alt="" />
          </NuxtLink>
        </div>
        <div
          class="hamburger"
          :class="[{ hamburgerOpen: isToggle }]"
          @click="isToggle = !isToggle"
        >
          <span class="bar bar1"></span>
          <span class="bar bar2"></span>
          <span class="bar bar3"></span>
        </div>
      </div>
      <div class="mobile-nav" :class="[{ showMenu: isToggle }]">
        <div class="nav-links-wrap">
          <ul>
            <NuxtLink :to="localePath('/')">
              <li @click="isToggle = !isToggle">Home</li>
            </NuxtLink>
            <NuxtLink :to="localePath('/about')">
              <li @click="isToggle = !isToggle">About</li>
            </NuxtLink>
            <NuxtLink :to="localePath('/contact')">
              <li @click="isToggle = !isToggle">Contact</li>
            </NuxtLink>
          </ul>
          <!-- <div class="lang-switch-wrap">
            <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
            <nuxt-link :to="switchLocalePath('zh')">中</nuxt-link>
          </div> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggle: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.lang-switch-wrap {
  color: #fff;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    margin-bottom: 12px;
  }
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  z-index: 999;
  background-color: #fff;
}
.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-wrap {
  img {
    height: 80px;
  }
}
.hamburger {
  z-index: 9999;
  padding: 20px;
  padding-right: 0;
}
.hamburgerOpen {
  .bar {
    background-color: #fff;
  }
  .bar1 {
    transform: translateY(8px) rotate(45deg);
  }
  .bar2 {
    opacity: 0;
  }
  .bar3 {
    transform: translateY(-8px) rotate(-45deg);
  }
}
.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: $navy;
}
.mobile-nav {
  z-index: 999;
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  background-color: $navy;
  // background-image: url("/img/home/marble-bg.png");
  background-blend-mode: multiply;
  display: flex;
  justify-content: center;
  transition: all 1s ease-in-out;
  .nav-links-wrap {
    margin-top: 90px;
    li {
      text-transform: uppercase;
      text-align: center;
      width: 100%;
      font-size: 20px;
      color: #fff;
      padding: 10px 0;
      font-weight: 400;
      letter-spacing: 1px;
      list-style-type: none;
    }
  }
}
@keyframes fadeIn {
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
}
.showMenu {
  animation-name: fadeIn;
  animation-duration: 1s;
  right: 0;
}
.social-media-wrap {
  display: flex;
  justify-content: space-evenly;
}
</style>

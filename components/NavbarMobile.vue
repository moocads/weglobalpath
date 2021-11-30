<template>
  <div>
    <nav>
      <div class="wrapper nav-wrap">
        <div class="logo-wrap">
          <NuxtLink to="/">
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
            <NuxtLink to="/">
              <li @click="isToggle = !isToggle">首页</li>
            </NuxtLink>
            <NuxtLink to="/about">
              <li @click="isToggle = !isToggle">关于我们</li>
            </NuxtLink>
            <NuxtLink to="/">
              <li @click="isToggle = !isToggle">中国区招生计划</li>
            </NuxtLink>
            <NuxtLink to="/">
              <li @click="isToggle = !isToggle">热门项目</li>
            </NuxtLink>
            <NuxtLink to="/">
              <li @click="isToggle = !isToggle">成功案例</li>
            </NuxtLink>
            <NuxtLink to="/">
              <li @click="isToggle = !isToggle">移民省份</li>
            </NuxtLink>
            <NuxtLink to="/">
              <li @click="isToggle = !isToggle">加拿大投资</li>
            </NuxtLink>
            <NuxtLink to="/">
              <li @click="isToggle = !isToggle">联系我们</li>
            </NuxtLink>
            <li>
              <div class="social-media-wrap">
                <a href="https://www.facebook.com/">
                  <img
                    src="/img/icons/fb-white.png"
                    alt="Social Media Facebook Icon"
                  />
                </a>
                <a href="https://www.moocads.com/">
                  <img
                    src="/img/icons/ins-white.png"
                    alt="Social Media Instagram Icon"
                  />
                </a>
                <a href="https://www.moocads.com/">
                  <img
                    src="/img/icons/twitter-white.png"
                    alt="Social Media Twitter Icon"
                  />
                </a>
                <a href="https://www.moocads.com/">
                  <img
                    src="/img/icons/wechat-white.png"
                    alt="Social Media Wechat Icon"
                  />
                </a>
              </div>
            </li>
          </ul>
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
  top: -100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
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
      font-size: 25px;
      color: #fff;
      padding: 10px 0;
      font-weight: 600;
      letter-spacing: 1px;
      list-style-type: none;
    }
  }
}
@keyframes fadeIn {
  from {
    top: -100vh;
  }
  to {
    top: 0;
  }
}
.showMenu {
  animation-name: fadeIn;
  animation-duration: 1s;
  top: 0;
}
.social-media-wrap {
  display: flex;
  justify-content: space-evenly;
}
</style>

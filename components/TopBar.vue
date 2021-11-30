<template>
  <div id="topbar">
    <div class="wrapper topbar-wrap">
      <img
        src="/img/logos/logo-blue.png"
        alt="加彼岸 Navbar Logo"
        class="nav_logo"
      />
      <div class="phone-wrap">
        <img
          src="/img/icons/headphone.png"
          alt="加彼岸 Navbar Phone Call Logo"
        />
        <a href="tel:+12049638886">204-963-8886</a>
      </div>
      <div class="social-media-wrap">
        <a href="https://www.facebook.com/">
          <img src="/img/icons/fb.png" alt="Social Media Facebook Icon" />
        </a>
        <a href="https://www.moocads.com/">
          <img src="/img/icons/ins.png" alt="Social Media Instagram Icon" />
        </a>
        <a href="https://www.moocads.com/">
          <img src="/img/icons/twitter.png" alt="Social Media Twitter Icon" />
        </a>
        <a href="https://www.moocads.com/">
          <img src="/img/icons/wechat.png" alt="Social Media Wechat Icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#topbar {
  height: 120px;
}
.topbar-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav_logo {
    max-height: 120px;
  }
}
.phone-wrap {
  display: flex;
  align-items: center;
  img {
    margin-right: 15px;
  }
  a {
    font-weight: 900;
    font-size: 25px;
  }
}
.social-media-wrap {
  a {
    margin-right: 15px;
  }
}
@media all and (max-width: 600px) {
  #topbar {
    height: auto;
  }
  .topbar-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav_logo {
      max-height: 80px;
    }
  }
  .social-media-wrap {
    display: none;
  }
  .phone-wrap {
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;
      height: 20px;
      width: 20px;
    }
    a {
      font-weight: 900;
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div id="sidebar-mobile">
    <aside>
      <img
        src="/img/wechat-qrcode.jpeg"
        v-show="wechatShow"
        class="wechat-code"
        alt="Beyond Canada Wechat"
      />
      <div class="sidebar-grid">
        <a
          href="tel:16475233555"
          class="sidebar-item sidebar-item-phone ga-phone-trigger"
        >
          <img
            src="/img/icons/phone.svg"
            alt="Sidebar phone call button icon"
            class="sidebar-item-icon icon-phone"
          />
        </a>
        <a
          href="mailto:info@beyondcanada.ca"
          class="sidebar-item sidebar-item-email"
        >
          <img
            src="/img/icons/email.svg"
            alt="Sidebar email button icon"
            class="sidebar-item-icon"
          />
        </a>
        <div
          class="sidebar-item sidebar-item-wechat"
          @click="wechatShow = !wechatShow"
          v-click-outside="closeWechatQRCode"
        >
          <img
            src="/img/icons/wechat-white.png"
            alt="Sidebar wechat button icon"
            class="sidebar-item-icon"
          />
        </div>
        <!-- <NuxtLink to="/evaluation" class="sidebar-item sidebar-item-evaluation">
          <img
            src="/img/icons/calculator.png"
            alt="Sidebar evaluation button icon"
            class="sidebar-item-icon"
          />
        </NuxtLink> -->
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wechatShow: false,
    };
  },
  methods: {
    closeWechatQRCode() {
      this.wechatShow = false;
      return this.wechatShow;
    },
  },
};
</script>

<style lang="scss" scoped>
#sidebar-mobile {
  display: none;
}
@media all and (max-width: $md) {
  #sidebar-mobile {
    display: block;
  }
}
aside {
  height: 60px;
  width: 100%;
  background-color: $navy;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
}
.sidebar-grid {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  // padding-right: 60px;
}
.sidebar-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar-item {
  border-right: 1px solid #343e5e;
}
.sidebar-item-icon {
  height: 25px;
  width: 30px;
}
.icon-phone {
  height: 30px;
}
.wechat-code {
  position: fixed;
  width: 60%;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50%);
  border-radius: 5px;
  z-index: 999;
  border: 1px solid $navy;
}
</style>

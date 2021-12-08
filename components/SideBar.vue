<template>
  <div id="sidebar">
    <img
      src="/img/wechat-qrcode.jpeg"
      v-show="wechatShow"
      class="wechat-code"
      alt="Beyond Canada Wechat"
    />
    <div class="icon-bar side">
      <a href="tel:1-204-963-8886" class="sidebar-link">
        <img src="/img/icons/sidebar-phone.svg" class="contact-icon" />
      </a>
      <a href="mailto:info@beyondcanada.com" class="sidebar-link">
        <img src="/img/icons/sidebar-mail.svg" class="contact-icon" />
      </a>
      <a class="sidebar-link" @click="wechatShow = !wechatShow">
        <img src="/img/icons/sidebar-wechat.svg" class="contact-icon" />
      </a>
      <a class="sidebar-link top">
        <a-back-top>
          <img src="/img/icons/up-arrow.svg" class="contact-icon" />
        </a-back-top>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wechatShow: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#sidebar {
  .wechat-code {
    position: fixed;
    width: 150px;
    right: 50px;
    top: 35%;
    border-radius: 5px;
  }

  .icon-bar.side {
    position: fixed;
    z-index: 999999;
    top: 35%;
    right: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    overflow: hidden;
    .sidebar-link {
      display: block;
      text-align: center;
      padding: 5px;
      transition: all 0.3s ease;
      color: $navy;
      background: $navy;
      font-size: 20px;

      &.top {
        background: $navy;
        padding: 0;

        .ant-back-top {
          position: static;
          width: 40px;
          padding: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-icon {
          width: 25px;
        }
      }

      .contact-icon {
        width: 30px;
      }
    }

    a:hover {
      background-color: $red;
    }
  }
}

@media (max-width: 991px) {
  #sidebar {
    display: none;
  }
}
</style>

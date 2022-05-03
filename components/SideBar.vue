<template>
  <div id="sidebar">
    <img
      src="/img/wechat-qrcode.jpeg"
      v-show="wechatShow"
      class="wechat-code"
      alt="Beyond Canada Wechat"
    />
    <div class="icon-bar side">
      <NuxtLink to="/evaluation" class="sidebar-link sidebar-evaluation">
        <img src="/img/icons/calculator.png" />
        <p>移民打分</p>
      </NuxtLink>
      <NuxtLink to="/self-test" class="sidebar-link sidebar-evaluation">
        <img src="/img/icons/aplus.png" />
        <p>移民自测</p>
      </NuxtLink>
      <!-- <NuxtLink to="/evaluation" class="sidebar-link">
      </NuxtLink> -->
      <a href="tel:16475233555" class="sidebar-link">
        <img src="/img/icons/sidebar-phone.svg" class="contact-icon" />
        <p>立即致电</p>
      </a>
      <a href="mailto:info@beyondcanada.ca" class="sidebar-link">
        <img src="/img/icons/sidebar-mail.svg" class="contact-icon" />
        <p>邮件咨询</p>
      </a>
      <a
        class="sidebar-link sidebar-link_wechat"
        @click="wechatShow = !wechatShow"
      >
        <img src="/img/icons/sidebar-wechat.svg" class="contact-icon" />
        <p>微信咨询</p>
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
    right: 65px;
    top: 25%;
    border-radius: 5px;
    z-index: 999;
  }

  .icon-bar.side {
    position: fixed;
    z-index: 999999;
    top: 25%;
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
        display: flex;
        justify-content: center;
        align-items: center;
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
        width: 25px;
      }
    }

    a:hover {
      background-color: $red;
    }
  }
}
.sidebar-link:nth-child(1),
.sidebar-link:nth-child(2),
.sidebar-link:nth-child(3),
.sidebar-link:nth-child(4) {
  border-bottom: 1px solid #5f6886;
}

.sidebar-link p {
  font-size: 12px;
  color: #fff;
  margin: 0;
}
.sidebar-link_wechat {
  background: #09b83e !important;
}

.sidebar-evaluation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 25px;
    margin-bottom: 3px;
  }
  p {
    color: #fff;
    font-size: 12px;
    line-height: 1;
    margin-bottom: 3px;
  }
}
@media (max-width: 991px) {
  #sidebar {
    display: none;
  }
}
</style>

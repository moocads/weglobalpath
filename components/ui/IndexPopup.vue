<template>
  <div v-if="isOpen" id="idxPopup">
    <div class="idx-bg"></div>
    <div class="popup-wrap">
      <img
        class="popup-close"
        src="/img/icons/popup-cross.svg"
        alt=""
        @click="isOpen = false"
      />
      <img
        class="popup-bg"
        src="/img/Home/popup-bg.jpg"
        alt="加彼岸 加拿大移民 popup"
      />
      <form @submit.prevent="handleSubmit">
        <h2>现在注册，获得免费评估</h2>
        <h3>加彼岸，家彼岸</h3>
        <h4>为您量身定制整体移居方案</h4>
        <input
          v-model="popup_contact_info"
          type="text"
          placeholder="请填写邮箱或微信"
          required
        />
        <!-- <input v-model="popupWechat" type="text" placeholder="微信" /> -->
        {{ popupEmail }}
        <button type="submit">提交注册</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPopup",
  data() {
    return {
      isOpen: false,
      popup_contact_info: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isOpen = true;
    }, 13000);
  },
  methods: {
    closePopup() {
      this.isOpen = false;
      console.log(this.isOpen);
    },
    async handleSubmit(e) {
      try {
        this.$axios
          .post(`/free-evaluations`, {
            contact_info: this.popup_contact_info,
          })
          .then((response) => {
            this.$message.info("感谢您提供联系信息。我们会尽快和您联系。");
            console.log("submitted");
            this.popupEmail = "";
            this.isOpen = false;
          });
      } catch (error) {
        this.$message.info("出现错误，请稍后再试。");
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
#idxPopup {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100vh;
  // background-color: rgba(51, 51, 51, 0.8);
  // display: flex;
  // justify-content: center;
  // align-items: center;
  .idx-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(51, 51, 51, 0.8);
  }
  .popup-wrap {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    position: relative;
    min-width: 500px;
    max-width: 600px;
    height: 300px;
    display: grid;
    grid-template-columns: 250px auto;
    background-color: #fff;
  }
  .popup-close {
    position: absolute;
    top: 0;
    right: 0;
    &:hover {
      cursor: pointer;
    }
  }
  form {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2,
  h3,
  h4 {
    color: $navy;
  }
  h2 {
    font-size: 22px;
    font-weight: 600;
  }
  h3 {
    font-size: 16px;
    font-weight: 600;
  }
  h4 {
    font-size: 14px;
    font-weight: 400;
  }
  input {
    border-radius: 20px;
    background-color: #fff;
    width: 240px;
    height: 30px;
    margin-bottom: 15px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.06);
    border: none;
    outline: none;
    text-align: center;
    margin-top: 18px;
    &::placeholder {
      font-size: 12px;
      color: #b7b7b7;
    }
  }
  button {
    border-radius: 20px;
    background: $navy;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    padding: 6px 25px;
    transition: all 0.2s ease;
    margin-top: 8px;
    &:hover {
      box-shadow: rgba(54, 72, 131, 0.212) 0px 8px 12px;
    }
  }
}
.is-closed {
  display: none;
}
@media all and (max-width: 996px) {
  #idxPopup {
    .popup-wrap {
      border-radius: 15px;
      padding: 20px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      position: relative;
      min-width: fit-content;
      max-width: fit-content;
      height: auto;
      display: grid;
      grid-template-columns: 1fr;
      background-color: #fff;
      .popup-bg {
        display: none;
      }
    }
    input {
      height: 40px;
    }
  }
}
</style>

<template>
  <div>
    <div id="contact-page">
      <header>
        <div class="wrapper">
          <h1>联系我们</h1>
          <p>
            尊敬的客户您好，我们的专业客服会在24小时内回复您，谢谢您的耐心。
          </p>
        </div>
      </header>
      <div class="wrapper">
        <section class="contact-wrap">
          <a-row :gutter="[16, 16]">
            <a-col :xs="24" :md="12">
              <div class="phone-wrap info-wrap">
                <div class="img-wrap">
                  <img src="/img/icons/phone-red.png" alt="" />
                </div>
                <div class="info">
                  <h2>电话</h2>
                  <a href="tel:+12049638886">加拿大: 204-963-8886</a>
                </div>
              </div>

              <div class="address-wrap info-wrap">
                <div class="img-wrap">
                  <img src="/img/icons/address-red.png" alt="" />
                </div>
                <div class="info">
                  <h2>地址</h2>
                  <a href="javascript:void(0)"
                    ><span>加拿大多伦多：</span>145 Royal Crest Ct Unit 47-48,
                    Markham, ON L3R 9Z4
                  </a>
                  <a href="javascript:void(0)"
                    ><span>加拿大温尼伯：</span>180 Main St, Winnipeg, MB R3C
                    1A6 (Robertson College)
                  </a>
                </div>
              </div>
              <div class="email-wrap info-wrap">
                <div class="img-wrap">
                  <img src="/img/icons/email-red.png" alt="" />
                </div>
                <div class="info">
                  <h2>邮箱</h2>
                  <a href="mailto:info@beyondcanda.ca">info@beyondcanda.ca</a>
                </div>
              </div>
              <div class="gmap-wrap info-wrap">
                <!-- <GMap /> -->
                <iframe
                  style="border:0"
                  loading="lazy"
                  allowfullscreen
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAmW9PcmUOmqS0QeStmfxju4Lgm3yDEnoc
                    &q=145+Royal+Crest+Ct+Unit+47-48,Markham,ON+L3R+9Z4">
                </iframe>
              </div>
            </a-col>
            <a-col :xs="24" :md="12">
              <form @submit.prevent="handleSubmit">
                <div class="contact-name contact-input">
                  <label for="name">名字（必填）</label>
                  <input type="text" v-model="userName" required />
                </div>
                <div class="contact-dob contact-input">
                  <label for="dob">出生日期</label>
                  <input type="text" v-model="userDOB" />
                </div>
                <div class="contact-phone contact-input">
                  <label for="phone">电话</label>
                  <input type="text" v-model="userPhone" />
                </div>
                <div class="contact-email contact-input">
                  <label for="email">邮箱（必填）</label>
                  <input type="text" v-model="userEmail" required />
                </div>
                <div class="contact-message contact-input">
                  <label for="dob">留言（必填）</label>

                  <textarea v-model="userMessage" required></textarea>
                </div>
                <div class="contact-checkbox contact-input">
                  <a-checkbox v-model="userSubscription">
                    希望通过邮箱或短信接收更多加彼岸留学移民最新政策资讯。
                  </a-checkbox>
                </div>
                <button type="submit" class="submit-btn main-btn main-btn_blue">
                  发送
                </button>
              </form>
            </a-col>
          </a-row>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userName: "",
      userPhone: "",
      userDOB: "",
      userEmail: "",
      userMessage: "",
      userSubscription: false,
    };
  },
  methods: {
    handleSubmit(e) {
      this.$axios
        .post(`https://beyond-canada-back-staging.herokuapp.com/contacts`, {
          name: this.userName,
          phone: this.userPhone,
          email: this.userEmail,
          message: this.userMessage,
          dob: this.userDOB,
          subscription: this.userSubscription,
        })
        .then((response) => {
          console.log("submited");
        });
      e.preventDefault();
    },
  },
};
</script>
<style lang="scss">
#contact-page {
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #e9e9e9;
    border-color: #e9e9e9;
  }
  .ant-checkbox-checked .ant-checkbox-inner::after {
    position: absolute;
    display: table;
    border: 2px solid $navy;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    content: " ";
  }
  nt-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: $navy;
  }
}
</style>
<style lang="scss" scoped>
header {
  background-image: url("/img/About/banner.png");
  background-color: rgba(34, 52, 92, 0.5);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  display: flex;
  align-items: center;
  h1 {
    font-size: 35px;
    color: #fff;
    font-weight: bold;
    position: relative;
  }
  p {
    color: #fff;
  }
}
@media all and (max-width: 768px) {
  header {
    background-position: bottom;
    background-blend-mode: multiply;
    height: 300px;
    display: flex;
    align-items: center;
    h1 {
      font-size: 42px;
    }
    h1::after {
      top: 120%;
      left: 0;
      width: 100px;
      height: 6px;
    }
  }
}
.contact-wrap {
  border-radius: 5px;
  border: 1px solid $navy;
  padding: 50px 75px;
  background-color: #fff;
  margin-top: -100px;
  margin-bottom: 100px;
}

.info-wrap {
  display: flex;
  margin-bottom: 40px;
  .img-wrap {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 28px;
      height: 28px;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: $navy;
    position: relative;
  }
  a {
    font-size: 16px;
    color: #505050;
    margin-bottom: 8px;
  }
  .info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.address-wrap {
  .img-wrap {
    img {
      width: 21px;
      height: 30px;
    }
  }
}
.email-wrap {
  .img-wrap {
    img {
      width: 29px;
      height: 20px;
    }
  }
}
.gmap-wrap {
  width: 100%;
  height: 300px;
  background-color: #333;
  border-radius: 10px;
  iframe {
    width: 100%;
    height: 300px;
  }
}
form {
  padding-left: 80px;
  display: grid;
  grid-template-columns: 1fr;
}
.contact-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  label {
    font-size: 16px;
    color: $navy;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    padding: 5px 10px;
    background-color: #e9e9e9;
  }
  textarea {
    width: 100%;
    min-height: 130px;
    outline: none;
    border: none;
    padding: 5px 10px;
    background-color: #e9e9e9;
  }
}
.contact-checkbox {
  color: $navy;
  font-size: 14px;
  display: flex;
  input {
    width: 20px;
    height: 20px;
  }
}
.submit-btn {
  margin-left: auto;
  margin-right: auto;
}
@media all and (max-width: 768px) {
  .contact-wrap {
    padding: 25px 15px;
    margin-top: -60px;
    margin-bottom: 100px;
  }
  form {
    padding: 0 0;
  }
}
</style>

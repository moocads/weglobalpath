<template>
  <div>
    <div id="contact-page">
      <header>
        <div class="wrapper">
          <h1>{{ $t("Contact.hero-title") }}</h1>
          <p>
            {{ $t("Contact.hero-subtitle") }}
          </p>
        </div>
      </header>
      <div class="wrapper">
        <section class="contact-wrap">
          <a-row :gutter="[16, 16]">
            <a-col :xs="24" :lg="12">
              <div class="detail-grid">
                <div>
                  <!-- <div class="phone-wrap info-wrap">
                    <div class="img-wrap">
                      <img src="/img/icons/phone-red.png" alt="" />
                    </div>
                    <div class="info">
                      <h2>{{ $t("Contact.phone") }}</h2>
                      <a href="tel:+16475233555" class="ga-phone-trigger"
                        >{{ $t("Contact.phone-toronto") }}: 647-523-3555</a
                      >
                      <a href="tel:+12049638886" class="ga-phone-trigger"
                        >{{ $t("Contact.phone-winnipeg") }}: 204-963-8886</a
                      >
                    </div>
                  </div>
                  <div class="email-wrap info-wrap">
                    <div class="img-wrap">
                      <img src="/img/icons/email-red.png" alt="" />
                    </div>
                    <div class="info">
                      <h2>{{ $t("Contact.email") }}</h2>
                      <a href="mailto:info@beyondcanda.ca"
                        >info@beyondcanada.ca</a
                      >
                    </div>
                  </div> -->
                      <div class="wechat-wrap info-wrap">
                  <div class="img-wrap">
                    <svg
                      enable-background="new 0 0 2499.7 2024.2"
                      viewBox="0 0 2499.7 2024.2"
                      xmlns="http://www.w3.org/2000/svg"
                      style="fill: #a37b54"
                    >
                      <path
                        d="m2499.7 1313.8c0-347.3-335.9-630.6-749.5-630.6s-747.2 283.3-747.2 630.6 335.9 630.6 749.5 630.6c80 0 155.4-9.1 226.2-29.7 20.6-4.6 43.4-2.3 64 6.9l185.1 100.5c11.4 6.9 27.4-4.6 22.8-18.3l-36.6-148.5c-4.6-22.8 2.3-45.7 22.8-59.4 160.1-116.5 262.9-287.9 262.9-482.1zm-1016.8-82.2c-57.1 0-102.8-45.7-102.8-102.8s45.7-102.8 102.8-102.8 102.8 45.7 102.8 102.8-45.7 102.8-102.8 102.8zm505 0c-57.1 0-102.8-45.7-102.8-102.8s45.7-102.8 102.8-102.8 102.8 45.7 102.8 102.8-48 102.8-102.8 102.8z"
                      />
                      <path
                        d="m941.4 1316.1c0-386.1 365.6-699.2 818-699.2h34.3c-73.2-349.6-443.3-616.9-888.9-616.9-500.4 0-904.8 333.6-904.8 747.2 0 228.5 125.7 434.1 322.2 571.2 13.7 9.1 18.3 25.1 16 41.1l-68.5 242.2c-4.6 16 13.7 32 29.7 22.8l267.3-159.9c18.3-11.4 38.8-13.7 59.4-6.9 89.1 22.8 182.8 36.6 278.8 36.6 20.6 0 41.1 0 64-2.3-18.4-57.1-27.5-116.5-27.5-175.9zm267.3-920.8c66.3 0 121.1 54.8 121.1 121.1s-54.8 121.1-121.1 121.1-121.1-54.8-121.1-121.1 54.9-121.1 121.1-121.1zm-607.8 242.2c-66.3 0-121.1-54.8-121.1-121.1s54.8-121.1 121.1-121.1 121.1 54.8 121.1 121.1-52.5 121.1-121.1 121.1z"
                      />
                    </svg>
                  </div>
                  <div class="info">
                    <h2>{{ $t("Contact.wechat") }}</h2>
                    <img
                      src="/img/wechat-qrcode.jpeg"
                      class="wechat-code"
                      alt="Beyond Canada Wechat"
                    />
                  </div>
                </div>
            
                </div>
                <div class="address-wrap info-wrap">
                  <div class="img-wrap">
                    <img src="/img/icons/address-red.png" alt="" />
                  </div>
                  <div class="info">
                    <h2>{{ $t("Contact.address") }}</h2>
                    <a
                      @click="mapLocation(1)"
                      class="location"
                      :class="{ active: location === 1 }"
                      ><span>{{ $t("Contact.address-toronto") }}：</span> 7050 Woodbine Ave Unit300, Markham, ON L3R 4G8
                    </a>
                    <a
                      @click="mapLocation(2)"
                      class="location"
                      :class="{ active: location === 2 }"
                      ><span>{{ $t("Contact.phone-winnipeg") }}：</span>180 Main
                      St, Winnipeg, MB R3C 1A6 (Robertson College)
                    </a>
                    <span class="disclaimer">{{
                      $t("Contact.address-switch")
                    }}</span>
                  </div>
                </div>
              </div>

              <div class="gmap-wrap info-wrap" v-if="location === 1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6015.331087046446!2d-79.35067665826269!3d43.81475003183979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d36f08f032ad%3A0x85ba282d66de5e6b!2s7050%20Woodbine%20Ave%20Suite%20300%2C%20Markham%2C%20ON%20L3R%204G8!5e0!3m2!1sen!2sca!4v1737688772258!5m2!1sen!2sca" style="border: 0"
                  loading="lazy"
                  allowfullscreen></iframe>
           
              </div>
              <div class="gmap-wrap info-wrap" v-if="location === 2">
                <iframe
                  style="border: 0"
                  loading="lazy"
                  allowfullscreen
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAmW9PcmUOmqS0QeStmfxju4Lgm3yDEnoc
                    &q=180+Main+St,Winnipeg,MB+R3C+1A6"
                >
                </iframe>
              </div>
            </a-col>
            <a-col :xs="24" :lg="12">
              <form @submit.prevent="handleSubmit">
                <div class="contact-name contact-input">
                  <label for="name">{{ $t("Contact.form.name") }}</label>
                  <input type="text" v-model="userName" required />
                </div>
                <div class="contact-dob contact-input">
                  <label for="dob">{{ $t("Contact.form.dob") }}</label>
                  <input type="text" v-model="userDOB" />
                </div>
                <div class="contact-phone contact-input">
                  <label for="phone">{{ $t("Contact.form.phone") }}</label>
                  <input type="text" v-model="userPhone" />
                </div>
                <div class="contact-email contact-input">
                  <label for="email">{{ $t("Contact.form.email") }}</label>
                  <input type="text" v-model="userEmail" required />
                </div>
                <div class="contact-message contact-input">
                  <label for="dob">{{ $t("Contact.form.message") }}</label>

                  <textarea v-model="userMessage" required></textarea>
                </div>
                <div class="contact-checkbox contact-input">
                  <a-checkbox v-model="userSubscription">
                    {{ $t("Contact.form.subcription") }}
                  </a-checkbox>
                </div>
                <recaptcha />
                <br />
                <button type="submit" class="submit-btn main-btn main-btn_blue">
                  {{ $t("Contact.form.submit") }}
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
  head() {
    return {
      title: `加拿大移民 | 联系我们 | 寰球嘉途`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 联系我们 | 寰球嘉途`,
        },
      ],
    };
  },
  data() {
    return {
      userName: "",
      userPhone: "",
      userDOB: "",
      userEmail: "",
      userMessage: "",
      userSubscription: false,
      location: 1,
    };
  },

  methods: {
    mapLocation(location) {
      this.location = location;
    },
    async handleSubmit(e) {
      try {
        const token = await this.$recaptcha.getResponse();
        // console.log("ReCaptcha token:", token);
        this.$axios
          .post(`/contacts`, {
            name: this.userName,
            phone: this.userPhone,
            email: this.userEmail,
            message: this.userMessage,
            dob: this.userDOB,
            subscription: this.userSubscription,
            recaptchaValue: token,
          })
          .then((response) => {
            this.$message.info("感谢您提供联系信息。我们会尽快和您联系。");
            console.log("submitted");
            this.userName = undefined;
            this.userPhone = undefined;
            this.userEmail = undefined;
            this.userMessage = undefined;
            this.userDOB = undefined;
          });
        await this.$recaptcha.reset();
      } catch (error) {
        this.$message.warning("请勾选reCAPTCHA验证");
      }

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
    border: 2px solid $primary;
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
    border-color: $primary;
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
  z-index: -1;
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
  border: 1px solid $primary;
  padding: 50px 75px;
  background-color: #fff;
  margin-top: -100px;
  margin-bottom: 100px;
}
.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  .address-wrap {
    grid-column: span 2 / span 2;
  }
}

.wechat-code {
  width: 170px;
  margin: auto;
  display: block;
  margin: 0;
  margin-left: -10px;
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
    color: $primary;
    position: relative;
  }
  a {
    font-size: 16px;
    color: #505050;
    margin-bottom: 8px;

    &.active,
    &:hover {
      color: $secondary;
    }
  }
  .info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.wechat-wrap {
  h2 {
    font-size: 18px;
    font-weight: bold;
    color: #c69c6d;
    position: relative;
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
.address-wrap {
  .img-wrap {
    img {
      width: 21px;
      height: 30px;
    }
  }

  .location {
    span {
      font-weight: 700;
    }
  }

  .disclaimer {
    color: $lightGrey;
    font-style: italic;
  }
}
.gmap-wrap {
  width: 100%;
  height: 300px;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;

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
    color: $primary;
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
  color: $primary;
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
@media all and (max-width: $md) {
  .contact-wrap {
    padding: 25px 15px;
    margin-top: -60px;
    margin-bottom: 100px;
  }
  form {
    padding: 0 0;
  }
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 0;
    .address-wrap {
      grid-column: 1;
    }
  }
  .wechat-wrap {
    .img-wrap {
      display: block;
    }
    h2 {
      text-align: left;
    }
  }
  .wechat-code {
    margin: 0;
    margin-left: -10px;
  }
}
</style>

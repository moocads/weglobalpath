<template>
  <div>
    <div id="joinus-page">
      <header>
        <div class="wrapper">
          <h1>加入我们</h1>
          <p>加彼岸团队欢迎你的加入。</p>
        </div>
      </header>
      <div class="wrapper">
        <section class="contact-wrap">
          <a-row :gutter="[16, 16]">
            <a-col :xs="24" :lg="12">
              <div class="detail-grid">
                <div>
                  <div class="phone-wrap info-wrap">
                    <div class="img-wrap">
                      <img src="/img/icons/phone-red.png" alt="" />
                    </div>
                    <div class="info">
                      <h2>电话</h2>
                      <a href="tel:+16475233555" class="ga-phone-trigger"
                        >多伦多: 647-523-3555</a
                      >
                      <a href="tel:+12049638886" class="ga-phone-trigger"
                        >温尼伯: 204-963-8886</a
                      >
                    </div>
                  </div>
                  <div class="email-wrap info-wrap">
                    <div class="img-wrap">
                      <img src="/img/icons/email-red.png" alt="" />
                    </div>
                    <div class="info">
                      <h2>邮箱</h2>
                      <a href="mailto:info@beyondcanda.ca"
                        >info@beyondcanada.ca</a
                      >
                    </div>
                  </div>
                </div>
                <div class="address-wrap info-wrap">
                  <div class="img-wrap">
                    <img src="/img/icons/address-red.png" alt="" />
                  </div>
                  <div class="info">
                    <h2>地址</h2>
                    <a
                      @click="mapLocation(1)"
                      class="location"
                      :class="{ active: location === 1 }"
                      ><span>多伦多：</span>145 Royal Crest Ct Unit 47-48,
                      Markham, ON L3R 9Z4
                    </a>
                    <a
                      @click="mapLocation(2)"
                      class="location"
                      :class="{ active: location === 2 }"
                      ><span>温尼伯：</span>180 Main St, Winnipeg, MB R3C 1A6
                      (Robertson College)
                    </a>
                    <span class="disclaimer">点击地址切换地图</span>
                  </div>
                </div>
              </div>

              <div class="gmap-wrap info-wrap" v-if="location === 1">
                <!-- <GMap /> -->
                <iframe
                  style="border: 0"
                  loading="lazy"
                  allowfullscreen
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAmW9PcmUOmqS0QeStmfxju4Lgm3yDEnoc
                    &q=145+Royal+Crest+Ct+Unit+47-48,Markham,ON+L3R+9Z4"
                >
                </iframe>
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
              <a-form :form="form" @submit="handleSubmit" id="joinus-form">
                <a-form-item class="contact-input" label="申请职位">
                  <a-select
                    v-decorator="['department']"
                    placeholder=" 请选择申请的职位"
                    style="margin-bottom: 20px"
                  >
                    <a-select-option value="持牌顾问">持牌顾问</a-select-option>
                    <a-select-option value="销售">销售</a-select-option>
                    <a-select-option value="市场">市场</a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item class="contact-input" label="名字（必填）">
                  <a-input
                    v-decorator="[
                      'name',
                      {
                        rules: [
                          {
                            required: true,
                            message: '请输入你的名字',
                          },
                        ],
                      },
                    ]"
                  />
                </a-form-item>
                <a-form-item class="contact-input" label="电话（必填）">
                  <a-input
                    v-decorator="[
                      'phone',
                      {
                        rules: [
                          {
                            required: true,
                            message: '请输入你的联系电话',
                          },
                        ],
                      },
                    ]"
                  />
                </a-form-item>
                <a-form-item class="contact-input" label="邮箱">
                  <a-input
                    v-decorator="[
                      'email',
                      {
                        rules: [
                          { required: true, message: '请输入你的邮箱' },
                          {
                            pattern: emailRegex,
                            message: '请输入有效的邮箱',
                          },
                        ],
                      },
                    ]"
                  />
                </a-form-item>
                <a-form-item class="contact-input" label="出生日期">
                  <a-date-picker v-decorator="['birthday']" />
                </a-form-item>
                <a-form-item class="contact-input" label="名字（必填）">
                  <a-input
                    v-decorator="[
                      'name',
                      {
                        rules: [
                          {
                            required: true,
                            message: '请输入你的名字',
                          },
                        ],
                      },
                    ]"
                  />
                </a-form-item>
                <!-- <div class="contact-dob contact-input">
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
                </div> -->
                <recaptcha />
                <br />
                <button type="submit" class="submit-btn main-btn main-btn_blue">
                  发送
                </button>
              </a-form>
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
      title: `加拿大移民 | 加入我们 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 加入我们 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: "joinus-form" }),
      isSubmitting: false,
      emailRegex:
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      location: 1,
    };
  },

  methods: {
    mapLocation(location) {
      this.location = location;
    },
    async handleSubmit(e) {
      try {
        e.preventDefault();
        this.isSubmitting = true;
        const token = await this.$recaptcha.getResponse();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log("Received values of form: ", values);
            const data = values;
            this.$axios.post("/join-uses", data).then((res) => {
              if (res.error) {
                console.log(res.error);
                this.$message.info("提交失败，请稍后再试。");
              } else {
                this.form.resetFields();
                this.$message.info("感谢您提供联系信息。我们会尽快和您联系。");
              }
            });
          }
        });
        // this.$axios
        //   .post(`https://beyond-canada-back-staging.herokuapp.com/contacts`, {
        //     name: this.userName,
        //     phone: this.userPhone,
        //     email: this.userEmail,
        //     message: this.userMessage,
        //     dob: this.userDOB,
        //     subscription: this.userSubscription,
        //   })
        //   .then((response) => {
        //     this.$message.info("感谢您提供联系信息。我们会尽快和您联系。");
        //     console.log("submitted");
        //     this.userName = undefined;
        //     this.userPhone = undefined;
        //     this.userEmail = undefined;
        //     this.userMessage = undefined;
        //     this.userDOB = undefined;
        //   });
        await this.$recaptcha.reset();
      } catch (error) {
        this.$message.warning("请勾选reCAPTCHA验证");
        console.log(error);
      }
      this.isSubmitting = false;
    },
  },
};
</script>
<style lang="scss">
#joinus-page {
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
  .ant-form-item-label {
    text-align: left;
    label {
      font-size: 16px;
      color: $navy;
      margin-bottom: 10px;
    }
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
  border: 1px solid $navy;
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
    color: $navy;
    position: relative;
  }
  a {
    font-size: 16px;
    color: #505050;
    margin-bottom: 8px;

    &.active,
    &:hover {
      color: $red;
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
    color: #1b2854;
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

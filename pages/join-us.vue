<template>
  <div>
    <div id="joinus-page">
      <header>
        <div class="wrapper">
          <h1>加入我们</h1>
          <p>寰球嘉途团队欢迎你的加入。</p>
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
                      ><span>多伦多：</span>170 West Beaver Creek Rd, #201B, Richmond Hill, ON L4B 1L6
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
                    v-decorator="[
                      'department',
                      {
                        rules: [
                          {
                            required: true,
                            message: '请选择想申请的职位',
                          },
                        ],
                      },
                    ]"
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
                          {
                            pattern: numRegex,
                            message: '请输入有效的电话号码',
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
                  <a-date-picker
                    style="width: 100%"
                    v-decorator="[
                      'birthday',
                      {
                        rules: [
                          {
                            required: true,
                            message: '请选择你的生日',
                          },
                        ],
                      },
                    ]"
                    placeholder="选择日期"
                  />
                </a-form-item>
                <a-form-item class="contact-input" label="毕业院校">
                  <a-input v-decorator="['school', { initialValue: '' }]" />
                </a-form-item>
                <a-form-item
                  class="contact-input"
                  label="简历"
                  extra="仅限一个PDF文件，其大小不可大于5MB"
                >
                  <a-upload
                    v-decorator="[
                      'resume',
                      {
                        rules: [
                          {
                            required: true,
                            message: '请上传你的简历',
                          },
                        ],
                      },
                    ]"
                    :file-list="resume"
                    :multiple="false"
                    accept="application/pdf"
                    listType="text"
                    @change="handleFileChange"
                  >
                    <a-button> <a-icon type="upload" /> 点击上传 </a-button>
                  </a-upload>
                </a-form-item>
                <a-form-item class="contact-input" label="留言">
                  <a-textarea
                    v-decorator="['message', { initialValue: '' }]"
                    placeholder="输入你的留言"
                    :auto-size="{ minRows: 2, maxRows: 7 }"
                  />
                </a-form-item>
                <!-- <recaptcha /> -->
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
import moment from "moment";
export default {
  head() {
    return {
      title: `加拿大移民 | 加入我们 | 寰球嘉途`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 加入我们 | 寰球嘉途`,
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
      numRegex: /^[0-9]+$/,
      location: 1,
      resume: null,
    };
  },

  methods: {
    moment,
    mapLocation(location) {
      this.location = location;
    },
    handleFileChange({ fileList, file }) {
      const isOversize = file.size / 1024 / 1024 > 5;
      if (!isOversize) {
        let arr = fileList;
        if (fileList.length > 1) {
          // only accept newest uploaded file
          arr.shift();
        }
        this.resume = arr;
      } else {
        this.$notification.open({
          message: "文件过大",
          description: "文件大小不可超过5MB",
          placement: "bottomRight",
        });
      }
    },
    async handleSubmit(e) {
      try {
        e.preventDefault();
        this.isSubmitting = true;
        // const token = await this.$recaptcha.getResponse();
        this.form.validateFields((err, values) => {
          if (!err) {
            const data = values;
            data.birthday = data.birthday.format("YYYY-MM-DD");
            console.log(data);
            // upload file to cms
            const files = new FormData();
            files.append(
              "files",
              this.resume[0].originFileObj,
              this.resume[0].name
            );
            this.$axios
              .post("/upload", files)
              .then((res) => {
                data.resume = res.data[0].id;
                console.log("Received values of form: ", data);
              })
              .then(() => {
                this.$axios.post("/join-uses", data).then((res) => {
                  if (res.error) {
                    console.log(res.error);
                    this.form.resetFields();
                    this.$notification.open({
                      message: "提交失败",
                      description: "请稍后再试。",
                      placement: "bottomRight",
                    });
                  } else {
                    this.form.resetFields();
                    this.$notification.open({
                      message: "提交成功",
                      description: "感谢您提供联系信息。我们会尽快和您联系。",
                      placement: "bottomRight",
                    });
                  }
                });
              });
          }
        });
        // await this.$recaptcha.reset();
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
  .ant-select-selection-selected-value{
    height: 100%;
    display: flex!important;
    align-items: center;
  }
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
  .ant-form-item-label {
    text-align: left;
    label {
      font-size: 16px;
      color: $primary;
      margin-bottom: 10px;
      @media all and (max-width: $sm) {
        font-size: 14px;
      }
    }
  }
  .ant-calendar-picker-input {
    height: 40px;
    background-color: #e9e9e9;
  }
  .ant-select-selection {
    height: 40px;
    background-color: #e9e9e9;
  }
}
#joinus-form_department {
  margin-bottom: 0 !important;
  .ant-select-selection__rendered {
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
.resume {
  font-size: 16px;
  color: #c69c6d;
  margin-bottom: 10px;
}
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
@media all and (max-width: $sm) {
  .submit-btn {
    font-size: 16px;
  }
}
</style>

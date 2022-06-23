<template>
  <div class="hot-projects-detail-page">
    <header
      :style="{
        background: `linear-gradient(
    89.93deg,
    rgba(34, 52, 92, 0.7) 7.82%,
    rgba(34, 52, 92, 0) 102.35%
  )`,
      }"
    >
      <div class="wrapper">
        <h1>{{ service.title }}</h1>
      </div>
    </header>
    <section class="sec-general anchor">
      <div class="wrapper declaration">
        <h2>特别声明</h2>
        <p>
          加彼岸™出国咨询加拿大签证移民事业部，所属各职级助理、普通文案以及各办公室行政职员均不具备加拿大移民顾问协会成员
          RCIC
          执业资质。因此，上述人员只能协助客户收集整理申请材料、并将材料递送至加彼岸™签证移民事业部具有资质的移民顾问具体处理。「资质认证码
          Membership Number：R532375」<br />
          根据加拿大联邦相关法律及法规：任何涉及签证申请或续签、移民咨询或申请的相关业务，在聘请有偿专业代理人时须在《授权代理人表格
          Use of A Representative IMM5476》上签字。
        </p>
        <a href="/IMM5476_Ge.pdf" target="_blank">
          <button class="main-btn_red">
            下载授权代理人表格 Use of A Representative IMM5476
          </button>
        </a>
      </div>
    </section>
    <section class="sec-general anchor">
      <div class="wrapper">
        <vue-markdown class="service-richtext">
          {{ service.content }}
        </vue-markdown>
      </div>
    </section>
    <section class="sec-general sec-bg-gray anchor">
      <div class="wrapper">
        <h2>服务支付方式</h2>
        <a-tabs
          default-active-key="1"
          class="blog-tabs mb-0"
          style="margin-bottom: 30px"
        >
          <a-tab-pane class="tab-content" key="1" tab="电子转账EMT">
            <p>电子转账EMT: info@beyondcanada.ca</p>
          </a-tab-pane>
          <a-tab-pane class="tab-content" key="2" tab="当面支付（现金/支票）" force-render>
            <div class="pay-grid">
              <iframe
                style="border: 0"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAmW9PcmUOmqS0QeStmfxju4Lgm3yDEnoc
                    &q=145+Royal+Crest+Ct+Unit+47-48,Markham,ON+L3R+9Z4"
              >
              </iframe>
              <div>
                <p>
                  多伦多：145 Royal Crest Ct Unit 47-48, Markham, ON L3R 9Z4
                  <br />
                  <a href="tel:+16475233555" class="ga-phone-trigger"
                    >电话：647-523-3555</a
                  >
                  <br/>
                  支票支付对象请填：Beyond Canada International Consulting Corp.
                </p>

              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane class="tab-content" key="3" tab="微信/支付宝支付">
            <a href="/img/payment-code.jpg" data-fancybox="payment">
              <img
                style="margin: 0 auto; width: 100%; max-width: 480px"
                src="/img/payment-code.jpg"
                alt="Payment QR Code"
              />
            </a>
          </a-tab-pane>
          <a-tab-pane class="tab-content" key="4" tab="WIRE TRANSFER">
            <a href="/img/wire-transfer.jpeg" data-fancybox="payment">
              <img
                src="/img/wire-transfer.jpeg"
                alt="Beyond Canada Wire Transfer"
              />
            </a>
          </a-tab-pane>
        </a-tabs>
      </div>
    </section>
    <section class="sec-general anchor">
      <div class="wrapper">
        <h2>免费咨询</h2>
        <a-form
          :form="form"
          @submit="handleSubmit"
          id="evaluation-form"
          class="contact-name contact-input"
        >
          <div class="evaluation-form-grid">
            <div>
              <a-form-item label=" 咨询的服务项目">
                <a-select
                  v-decorator="['service']"
                  placeholder=" 请选择咨询的服务项目"
                  style="margin-bottom: 20px"
                >
                  <a-select-option value="境内签证续签案件"
                    >检查境内签证续签案件：50 加元</a-select-option
                  >
                  <a-select-option value="旅游签案件"
                    >检查旅游签案件：100 加元</a-select-option
                  >
                  <a-select-option value="移民案件"
                    >检查移民案件：900 加元</a-select-option
                  >
                </a-select>
                <a-checkbox-group v-decorator="['optional_services']">
                  <a-checkbox value="寄宿家庭服务"> 寄宿家庭服务 </a-checkbox>
                  <a-checkbox value="监护人服务"> 监护人服务 </a-checkbox>
                  <a-checkbox value="其他"> 其他 </a-checkbox>
                </a-checkbox-group>
              </a-form-item>
            </div>
            <div>
              <a-form-item label="名字">
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
              <a-form-item label="邮箱">
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
              <a-form-item label="联系号码">
                <a-input
                  v-decorator="[
                    'phone',
                    {
                      rules: [
                        { required: true, message: '请输入你的联系号码' },
                      ],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item label="微信">
                <a-input
                  v-decorator="[
                    'wechat',
                    {
                      rules: [{ required: true, message: '请输入你的微信' }],
                    },
                  ]"
                />
              </a-form-item>
              <a-button
                html-type="submit"
                :class="{ disableBtn: isSubmitting }"
                class="main-btn_red"
              >
                {{ isSubmitting ? "提交中" : "提交" }}
              </a-button>
            </div>
          </div>
        </a-form>
      </div>
    </section>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  head() {
    return {
      title: `${this.service.title} | 签证服务 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.service.title} | 签证服务 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: "evaluation_form" }),
      isSubmitting: false,
      emailRegex:
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    };
  },
  async asyncData({ $axios, route }) {
    const data = await $axios.$get(`/visa-services`, {
      params: {
        slug: route.params.slug,
      },
    });
    return {
      service: data[0],
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.isSubmitting = true;
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const data = values;
          data.optional_services = values.optional_services.join();
          this.$axios.post("/evaluations", data).then((res) => {
            if (res.error) {
              console.log(res.error);
              this.$notification.open({
                message: "提交失败",
                description: "请稍后再试",
                placement: "bottomRight",
              });
            } else {
              this.form.resetFields();
              this.$notification.open({
                message: "提交成功",
                description: "感谢您的提交",
                placement: "bottomRight",
              });
            }
          });
        }
        this.isSubmitting = false;
      });
    },
  },
  components: {
    VueMarkdown,
  },
};
</script>
<style lang="scss" scoped>
// @import "~/assets/scss/hot-projects/general.scss";
.evaluation-form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.main-btn_red {
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  height: auto;
}
.disableBtn {
  pointer-events: none;
}
.tab-content {
  padding: 20px;
  color: $navy;
}
.pay-grid {
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  p {
    align-self: center;
  }
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
  input:focus {
    box-shadow: none;
  }
}
@media all and (max-width: $sm) {
  .evaluation-form-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .pay-grid {
    grid-template-columns: 1fr;
  }
}
</style>

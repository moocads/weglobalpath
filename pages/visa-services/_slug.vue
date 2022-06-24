<template>
  <div class="hot-projects-detail-page">
    <header
      :style="{
        background: `linear-gradient(
    89.93deg,
    rgba(34, 52, 92, 0.7) 7.82%,
    rgba(34, 52, 92, 0) 102.35%
  )${service.image ? ',url(' + service.image.url + ')' : ''}`,
      }"
    >
      <div class="wrapper">
        <h1>{{ service.title }}</h1>
      </div>
    </header>
    <section class="sec-general anchor" style="padding-bottom: 0">
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
          class="blog-tabs"
          style="margin-bottom: 30px"
        >
          <a-tab-pane class="tab-content" key="1" tab="电子转账EMT">
            <ul class="pay-list">
              <li>电子转账EMT:</li>
              <li>
                <svg
                  width="25"
                  height="18"
                  viewBox="0 0 25 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.75 0H1.75C1.28587 0 0.840752 0.184374 0.512563 0.512563C0.184374 0.840752 0 1.28587 0 1.75V15.75C0 16.2141 0.184374 16.6592 0.512563 16.9874C0.840752 17.3156 1.28587 17.5 1.75 17.5H22.75C23.2141 17.5 23.6592 17.3156 23.9874 16.9874C24.3156 16.6592 24.5 16.2141 24.5 15.75V1.75C24.5 1.28587 24.3156 0.840752 23.9874 0.512563C23.6592 0.184374 23.2141 0 22.75 0ZM20.825 1.75L12.25 7.6825L3.675 1.75H20.825ZM1.75 15.75V2.54625L11.7513 9.4675C11.8977 9.56911 12.0717 9.62356 12.25 9.62356C12.4283 9.62356 12.6023 9.56911 12.7487 9.4675L22.75 2.54625V15.75H1.75Z"
                    fill="#a31c1c"
                  />
                </svg>
                <span>info@beyondcanada.ca</span>
              </li>
            </ul>
          </a-tab-pane>
          <a-tab-pane
            class="tab-content"
            key="2"
            tab="当面支付（现金/支票）"
            force-render
          >
            <div class="pay-grid">
              <iframe
                style="border: 0; width: 100%"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAmW9PcmUOmqS0QeStmfxju4Lgm3yDEnoc
                    &q=145+Royal+Crest+Ct+Unit+47-48,Markham,ON+L3R+9Z4"
              >
              </iframe>
              <div>
                <table class="pay-list">
                  <tr>
                    <td>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.8865 6.97754C13.1942 6.97754 12.5176 7.18281 11.942 7.5674C11.3664 7.95198 10.9178 8.49861 10.6529 9.13815C10.388 9.77769 10.3187 10.4814 10.4537 11.1604C10.5888 11.8393 10.9221 12.4629 11.4116 12.9524C11.9011 13.4419 12.5247 13.7752 13.2037 13.9103C13.8826 14.0453 14.5863 13.976 15.2259 13.7111C15.8654 13.4462 16.412 12.9976 16.7966 12.422C17.1812 11.8465 17.3865 11.1698 17.3865 10.4775C17.3854 9.54961 17.0163 8.65998 16.3602 8.00383C15.704 7.34768 14.8144 6.9786 13.8865 6.97754V6.97754ZM13.8865 12.2275C13.5404 12.2275 13.202 12.1249 12.9142 11.9326C12.6264 11.7403 12.4021 11.467 12.2697 11.1472C12.1372 10.8275 12.1026 10.4756 12.1701 10.1361C12.2376 9.79666 12.4043 9.48484 12.649 9.2401C12.8938 8.99536 13.2056 8.82869 13.5451 8.76116C13.8845 8.69364 14.2364 8.7283 14.5562 8.86075C14.8759 8.9932 15.1493 9.21751 15.3415 9.50529C15.5338 9.79308 15.6365 10.1314 15.6365 10.4775C15.6359 10.9415 15.4514 11.3863 15.1233 11.7144C14.7952 12.0425 14.3504 12.227 13.8865 12.2275V12.2275Z"
                          fill="#a31c1c"
                        />
                        <path
                          d="M20.6121 3.74688C18.9492 2.08441 16.7294 1.09683 14.3812 0.97475C12.0329 0.852673 9.72273 1.60475 7.89641 3.08583C6.07008 4.56692 4.85712 6.67201 4.49161 8.99482C4.12611 11.3176 4.63398 13.6935 5.9172 15.6639L12.5293 25.8146C12.6764 26.0405 12.8776 26.2261 13.1146 26.3545C13.3516 26.483 13.6169 26.5502 13.8865 26.5502C14.1561 26.5502 14.4214 26.483 14.6584 26.3545C14.8954 26.2261 15.0966 26.0405 15.2437 25.8146L21.856 15.6639C23.0467 13.8361 23.5729 11.6545 23.3464 9.48488C23.12 7.31524 22.1546 5.28939 20.6121 3.74688V3.74688ZM20.3898 14.7087L13.8865 24.6919L7.38326 14.7087C5.39263 11.6528 5.81958 7.56325 8.39842 4.9843C9.11912 4.26357 9.97473 3.69187 10.9164 3.30181C11.858 2.91176 12.8673 2.711 13.8865 2.711C14.9058 2.711 15.915 2.91176 16.8567 3.30181C17.7983 3.69187 18.6539 4.26357 19.3746 4.9843C21.9535 7.56325 22.3804 11.6528 20.3898 14.7087Z"
                          fill="#a31c1c"
                        />
                      </svg>
                    </td>
                    <td>
                      <span
                        >多伦多：145 Royal Crest Ct Unit 47-48, Markham, ON L3R
                        9Z4</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.3749 27.1875H24.2155C5.79365 26.1281 3.17802 10.5844 2.8124 5.84063C2.78294 5.47179 2.82654 5.10077 2.94072 4.74882C3.05489 4.39687 3.23739 4.07091 3.47776 3.78961C3.71812 3.50831 4.01163 3.27721 4.34147 3.10954C4.6713 2.94187 5.03098 2.84093 5.3999 2.8125H10.5655C10.941 2.81214 11.308 2.92454 11.6189 3.13515C11.9298 3.34576 12.1703 3.64488 12.3093 3.99375L13.7343 7.5C13.8715 7.84083 13.9055 8.21445 13.8322 8.57446C13.7589 8.93447 13.5814 9.26501 13.3218 9.525L11.3249 11.5406C11.6368 13.3132 12.4857 14.9472 13.7567 16.2215C15.0277 17.4959 16.6594 18.349 18.4311 18.6656L20.4655 16.65C20.7294 16.3933 21.0631 16.2199 21.4248 16.1516C21.7866 16.0832 22.1605 16.1229 22.4999 16.2656L26.0343 17.6813C26.3779 17.8246 26.671 18.067 26.8764 18.3775C27.0818 18.688 27.19 19.0527 27.1874 19.425V24.375C27.1874 25.1209 26.8911 25.8363 26.3636 26.3637C25.8362 26.8912 25.1208 27.1875 24.3749 27.1875ZM5.6249 4.6875C5.37626 4.6875 5.1378 4.78627 4.96198 4.96209C4.78617 5.1379 4.6874 5.37636 4.6874 5.625V5.7C5.11865 11.25 7.88427 24.375 24.3186 25.3125C24.4418 25.3201 24.5653 25.3033 24.6819 25.2631C24.7986 25.2229 24.9062 25.1601 24.9985 25.0782C25.0908 24.9963 25.1661 24.897 25.2199 24.786C25.2738 24.675 25.3052 24.5544 25.3124 24.4312V19.425L21.778 18.0094L19.0874 20.6812L18.6374 20.625C10.4811 19.6031 9.3749 11.4469 9.3749 11.3625L9.31865 10.9125L11.9811 8.22188L10.5749 4.6875H5.6249Z"
                          fill="#a31c1c"
                        />
                      </svg>
                    </td>
                    <td>
                      <a href="tel:+16475233555" class="ga-phone-trigger"
                        >电话：647-523-3555</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25.1514 22.3711C24.5988 21.062 23.7968 19.873 22.7901 18.8701C21.7865 17.8644 20.5976 17.0625 19.2891 16.5088C19.2774 16.5029 19.2657 16.5 19.254 16.4941C21.0792 15.1758 22.2657 13.0283 22.2657 10.6055C22.2657 6.5918 19.0137 3.33984 15.0001 3.33984C10.9864 3.33984 7.73445 6.5918 7.73445 10.6055C7.73445 13.0283 8.92097 15.1758 10.7462 16.4971C10.7344 16.5029 10.7227 16.5059 10.711 16.5117C9.39851 17.0654 8.22078 17.8594 7.21003 18.873C6.2043 19.8767 5.40243 21.0655 4.84871 22.374C4.30473 23.655 4.01135 25.0285 3.98445 26.4199C3.98367 26.4512 3.98915 26.4823 4.00058 26.5114C4.01201 26.5405 4.02915 26.5671 4.05099 26.5895C4.07283 26.6118 4.09893 26.6296 4.12776 26.6418C4.15658 26.6539 4.18755 26.6602 4.21882 26.6602H5.97664C6.10554 26.6602 6.20808 26.5576 6.21101 26.4316C6.2696 24.1699 7.17781 22.0518 8.78328 20.4463C10.4444 18.7852 12.6505 17.8711 15.0001 17.8711C17.3497 17.8711 19.5557 18.7852 21.2169 20.4463C22.8223 22.0518 23.7305 24.1699 23.7891 26.4316C23.7921 26.5605 23.8946 26.6602 24.0235 26.6602H25.7813C25.8126 26.6602 25.8436 26.6539 25.8724 26.6418C25.9012 26.6296 25.9273 26.6118 25.9492 26.5895C25.971 26.5671 25.9881 26.5405 25.9996 26.5114C26.011 26.4823 26.0165 26.4512 26.0157 26.4199C25.9864 25.0195 25.6964 23.6572 25.1514 22.3711V22.3711ZM15.0001 15.6445C13.6553 15.6445 12.3897 15.1201 11.4376 14.168C10.4854 13.2158 9.96101 11.9502 9.96101 10.6055C9.96101 9.26074 10.4854 7.99512 11.4376 7.04297C12.3897 6.09082 13.6553 5.56641 15.0001 5.56641C16.3448 5.56641 17.6104 6.09082 18.5626 7.04297C19.5147 7.99512 20.0391 9.26074 20.0391 10.6055C20.0391 11.9502 19.5147 13.2158 18.5626 14.168C17.6104 15.1201 16.3448 15.6445 15.0001 15.6445Z"
                          fill="#A31C1C"
                        />
                      </svg>
                    </td>
                    <td>
                      <span
                        >支票支付：Beyond Canada International Consulting
                        Corp.</span
                      >
                    </td>
                  </tr>
                </table>
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
          <a-tab-pane class="tab-content" key="4" tab="电汇（WIRE TRANSFER）">
            <!-- <a href="/img/wire-transfer.jpeg" data-fancybox="payment">
              <img
                src="/img/wire-transfer.jpeg"
                alt="Beyond Canada Wire Transfer"
              />
            </a> -->
            <table class="pay-table">
              <tr>
                <th>银行名<br />Beneficiary Bank</th>
                <td>Canadian Imperial Bank of Commerce (CIBC)</td>
              </tr>
              <tr>
                <th>银行地址<br />Address of the Beneficiary Bank</th>
                <td>85 Ellesmere road, Unit 19, Scarborough, ON, M1R 4B7</td>
              </tr>
              <tr>
                <th>收款人<br />Name of Payee</th>
                <td>Beyond Canada International Consulting Corp.</td>
              </tr>
              <tr>
                <th>银行转账号<br />Bank Transit</th>
                <td>07832</td>
              </tr>
              <tr>
                <th>银行账户号<br />Bank Account No.</th>
                <td>4072111</td>
              </tr>
              <tr>
                <th>银行机构号<br />Bank Institution No.</th>
                <td>010</td>
              </tr>
              <tr>
                <th>Swift Code</th>
                <td>CIBCCATT</td>
              </tr>
            </table>
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
              <a-form-item label="检查签证移民申请Review">
                <p class="minor-text">
                  加彼岸™提供检查签证和移民案件的服务。如果您已经准备好全套申请及材料，我们可以为您检查签证或移民申请的完整性、逻辑和细节。检查服务会指出材料中存在的问题及缺失的材料，不会补充实质性的内容，不会修改或撰写解释信、雇主信等。
                </p>
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
                      rules: [{ message: '请输入你的微信' }],
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
.evaluation-form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.main-btn_red {
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  height: auto;
}
.disableBtn {
  pointer-events: none;
}
.tab-content {
  padding: 20px;
  color: $navy;
  font-size: 16px;
}
.pay-list {
  svg {
    margin-right: 5px;
  }
  li {
    margin-bottom: 10px;
  }
}
.pay-grid {
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  p {
    align-self: center;
  }
}
.pay-table {
  width: 100%;
  text-align: center;
  & th,
  & td {
    border: 0.5px solid black;
    padding: 10px;
  }
}
.contact-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  label {
    font-size: 16px;
    color: $red;
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
#evaluation-form {
  .minor-text {
    font-size: 12px;
    color: $navy;
    line-height: 1.5;
    font-weight: 300;
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
  .contact-input {
    label {
      font-size: 14px;
    }
  }
}
</style>

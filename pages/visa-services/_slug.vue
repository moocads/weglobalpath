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
    <section class="sec-general sec-bg-gray anchor">
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
          <a-tab-pane key="1" tab="电子转账EMT">
            Content of Tab Pane 1
          </a-tab-pane>
          <a-tab-pane key="2" tab="当面支付" force-render>
            Content of Tab Pane 2
          </a-tab-pane>
          <a-tab-pane key="3" tab="微信/支付宝/银联支付">
            <img
              style="margin: 0 auto"
              src="/img/payment-code.jpg"
              alt="Payment QR Code"
            />
          </a-tab-pane>
        </a-tabs>
        <h2>免费咨询</h2>
        <a-form :form="form" id="evaluation-form" class="contact-name contact-input">
          <a-form-item label="名字">
            <a-input
              v-decorator="[
                'inputName',
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
                  rules: [{ required: true, message: '请输入你的联系号码' }],
                },
              ]"
            />
          </a-form-item>
          <a-form-item label="微信">
            <a-input
              v-decorator="[
                'phone',
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
  components: {
    VueMarkdown,
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/hot-projects/general.scss";
.main-btn_red {
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  height: auto;
}
.disableBtn{
  pointer-events: none;
}
</style>

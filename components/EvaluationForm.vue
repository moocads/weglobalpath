<template>
  <section class="sec-general anchor">
    <div class="wrapper">
      <h2>专业咨询</h2>
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
                  >检查境内签证续签案件：50 加元+HST</a-select-option
                >
                <a-select-option value="旅游签案件"
                  >检查旅游签案件：100 加元+HST</a-select-option
                >
                <a-select-option value="首次学签申请案件"
                  >检查首次学签申请案件：500 加元+HST</a-select-option
                >
                <a-select-option value="移民案件"
                  >检查移民案件：900 加元+HST</a-select-option
                >
              </a-select>
              <a-checkbox-group v-decorator="['optional_services']">
                <a-checkbox value="移民咨询规划评估（30分钟）">
                  移民咨询规划评估（30分钟）100加元咨询费<br />
                  <span class="minor-text"
                    >适用于已有明确移民计划及目标，希望就具体问题得到解答，或了解加彼岸签约和服务流程的客户。</span
                  >
                </a-checkbox>
                <a-checkbox value="移民咨询规划评估（60分钟）">
                  移民咨询规划评估（60分钟）180加元咨询费<br />
                  <span class="minor-text"
                    >适用于没有明确的移民方向，需要深入分析个人及家庭情况，制定完善移民计划的客户。</span
                  >
                </a-checkbox>
                <a-checkbox value="留学咨询规划评估（60分钟）">
                  留学咨询规划评估（60分钟）150加元咨询费
                </a-checkbox>
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
                    rules: [{ required: true, message: '请输入你的联系号码' }],
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
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: "evaluation_form" }),
      isSubmitting: false,
      emailRegex:
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
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
  span.minor-text {
    display: block;
    margin-left: 27px;
  }
}
@media all and (max-width: $sm) {
  .evaluation-form-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .tab-content {
    padding: 10px;
    font-size: 14px;
  }
  .pay-grid {
    grid-template-columns: 1fr;
  }
  .pay-table {
    font-size: 14px;
    th,
    td {
      padding: 5px;
    }
  }
  .contact-input {
    label {
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="sec-joinUs">
    <Wrapper max-width="900px">
      <br />
      <br />
      <MainTitle
        :title="loc('加入我们', '加入我們')"
        :titleEN="loc('诚聘英才', '誠聘英才')"
      />
      <a-form :form="form" @submit="handleSubmit" id="joinUsForm">
        <a-form-item
          class="contact-input join-us-position"
          :label="loc('申请职位', '申請職位')"
        >
          <a-select
            v-decorator="[
              'department',
              {
                rules: [
                  {
                    required: true,
                    message: loc('请选择想申请的职位', '請選擇想申請的職位'),
                  },
                ],
              },
            ]"
            :placeholder="loc('请选择申请的职位', '請選擇申請的職位')"
            style="margin-bottom: 20px"
          >
            <a-select-option value="持牌顾问">{{
              loc("持牌顾问", "持牌顧問")
            }}</a-select-option>
            <a-select-option value="销售">{{
              loc("销售", "銷售")
            }}</a-select-option>
            <a-select-option value="市场">{{
              loc("市场", "市場")
            }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          class="contact-input join-us-name"
          :label="loc('名字', '名字')"
        >
          <a-input
            v-decorator="[
              'name',
              {
                rules: [
                  {
                    required: true,
                    message: loc('请输入你的名字', '請輸入你的名字'),
                  },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item
          class="contact-input join-us-phone"
          :label="loc('电话', '電話')"
        >
          <a-input
            v-decorator="[
              'phone',
              {
                rules: [
                  {
                    required: true,
                    message: loc('请输入你的联系电话', '請輸入你的聯繫電話'),
                  },
                  {
                    pattern: numRegex,
                    message: loc('请输入有效的电话号码', '請輸入有效的電話號碼'),
                  },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item
          class="contact-input join-us-email"
          :label="loc('邮箱', '郵箱')"
        >
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  {
                    required: true,
                    message: loc('请输入你的邮箱', '請輸入你的郵箱'),
                  },
                  {
                    pattern: emailRegex,
                    message: loc('请输入有效的邮箱', '請輸入有效的郵箱'),
                  },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item
          class="contact-input join-us-dob"
          :label="loc('出生日期', '出生日期')"
        >
          <a-date-picker
            style="width: 100%"
            v-decorator="[
              'birthday',
              {
                rules: [
                  {
                    required: true,
                    message: loc('请选择你的生日', '請選擇你的生日'),
                  },
                ],
              },
            ]"
            :placeholder="loc('选择日期', '選擇日期')"
          />
        </a-form-item>
        <a-form-item
          class="contact-input join-us-edu"
          :label="loc('毕业院校', '畢業院校')"
        >
          <a-input v-decorator="['school', { initialValue: '' }]" />
        </a-form-item>
        <a-form-item
          class="contact-input join-us-resume"
          :label="loc('简历', '簡歷')"
          :extra="
            loc(
              '仅限一个PDF文件，其大小不可大于5MB',
              '僅限一個PDF文件，其大小不可大於5MB'
            )
          "
        >
          <a-upload
            v-decorator="[
              'resume',
              {
                rules: [
                  {
                    required: true,
                    message: loc('请上传你的简历', '請上傳你的簡歷'),
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
            <a-button>
              <a-icon type="upload" />
              {{ loc("点击上传", "點擊上傳") }}
            </a-button>
          </a-upload>
        </a-form-item>
        <a-form-item
          class="contact-input join-us-message"
          :label="loc('留言', '留言')"
        >
          <a-textarea
            v-decorator="['message', { initialValue: '' }]"
            :placeholder="loc('输入你的留言', '輸入你的留言')"
            :auto-size="{ minRows: 2, maxRows: 7 }"
          />
        </a-form-item>
        <a-form-item class="join-us-submit">
          <button
            type="submit"
            class="submit-btn main-btn main-btn_blue join-us-submit"
            :disabled="isSubmitting"
          >
            {{ loc("发送", "發送") }}
          </button>
        </a-form-item>
        <!-- <recaptcha /> -->
      </a-form>
    </Wrapper>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "JoinUsForm",
  data() {
    return {
      form: this.$form.createForm(this, { name: "joinUsForm" }),
      isSubmitting: false,
      emailRegex:
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      numRegex: /^[0-9]+$/,
      resume: null,
      joinUsCols,
      joinUsData,
    };
  },
  methods: {
    moment,
    loc(zh, tw) {
      return this.$i18n.locale === "tw" ? tw : zh;
    },
    handleFileChange({ fileList, file }) {
      const isOversize = file.size / 1024 / 1024 > 5;
      if (!isOversize) {
        let arr = fileList;
        if (fileList.length > 1) {
          // only accept newest uploaded file
          arr.shift();
        }
        if (fileList.length === 1) {
          arr[0].status = "done";
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
      e.preventDefault();
      this.isSubmitting = true;
      try {
        // const token = await this.$recaptcha.getResponse();
        this.form.validateFields((err, values) => {
          if (!err) {
            const data = values;
            data.birthday = data.birthday.format("YYYY-MM-DD");
            console.log(this.isSubmitting);
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
                this.$axios
                  .post("http://localhost:1337/join-uses", data)
                  .then((res) => {
                    if (res.error) {
                      console.log(res.error);
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
                this.isSubmitting = false;
              });
          }
        });
        // await this.$recaptcha.reset();
      } catch (error) {
        console.log(error);
        this.$notification.open({
          message: "提交失败",
          description: "请稍后再试。",
          placement: "bottomRight",
        });
        this.isSubmitting = false;
      }
    },
  },
};
const joinUsCols = [
  {
    title: "职位名称",
    dataIndex: "jobTitle",
  },
  {
    title: " 招聘人数 ",
    dataIndex: "number",
  },
  {
    title: "薪资 ",
    dataIndex: "salary",
  },
  {
    title: "工作地点",
    dataIndex: "jobPosition",
  },
];
const joinUsData = [
  {
    key: "1",
    jobTitle: "行政助理",
    number: "2",
    salary: "面议",
    jobPosition: "广州",
  },
  {
    key: "2",
    jobTitle: "留学移民顾问",
    number: "5",
    salary: "面议",
    jobPosition: "广州",
  },
  {
    key: "3",
    jobTitle: "文案专员",
    number: "2",
    salary: "面议",
    jobPosition: "广州",
  },
  {
    key: "4",
    jobTitle: "留学移民顾问",
    number: "5",
    salary: "面议",
    jobPosition: "多伦多",
  },
];
</script>
<style lang="scss">
#joinUsForm {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 20px;
  grid-template-areas:
    "join-us-position join-us-name"
    "join-us-phone join-us-email"
    "join-us-dob join-us-edu"
    "join-us-resume join-us-message"
    "join-us-submit join-us-submit";
  .join-us-position {
    grid-area: join-us-position;
  }
  .join-us-name {
    grid-area: join-us-name;
  }
  .join-us-phone {
    grid-area: join-us-phone;
  }
  .join-us-email {
    grid-area: join-us-email;
  }
  .join-us-dob {
    grid-area: join-us-dob;
  }
  .join-us-edu {
    grid-area: join-us-edu;
  }
  .join-us-resume {
    grid-area: join-us-resume;
  }
  .join-us-message {
    grid-area: join-us-message;
  }
  .join-us-submit {
    grid-area: join-us-submit;
  }
  .has-error .ant-input,
  .has-error .ant-input:hover {
    background-color: #e9e9e9;
    border-color: #f5222d;
  }
  .ant-select-selection-selected-value {
    height: 100%;
    display: flex !important;
    align-items: center;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
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
  .ant-calendar-picker-input,
  .ant-select-selection {
    // height: 40px;
    background-color: #e9e9e9;
    padding: 19px 10px;
  }
  .ant-select {
    margin-bottom: 0 !important;
  }
  .ant-select-selection {
    .ant-select-selection__rendered {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
@media all and (max-width: $sm) {
  #joinUsForm {
    grid-template-columns: 1fr;
    grid-template-areas:
      "join-us-position"
      "join-us-name"
      "join-us-phone"
      "join-us-email"
      "join-us-dob"
      "join-us-edu"
      "join-us-resume"
      "join-us-message"
      "join-us-submit";
    .join-us-submit {
      width: 100%;
      font-size: 16px;
    }
  }
}
.joinUs-table-wrap {
  .ant-table-bordered .ant-table-thead > tr > th {
    background-color: $primary;
    color: #fff;
    text-align: center;
    font-size: 16px;
  }
  .ant-table-tbody > tr > td {
    text-align: center;
    font-size: 16px;
  }
}
.contact-input {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // margin-bottom: 20px;
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

@media all and (max-width: 991px) {
  .joinUs-table-wrap {
    .ant-table-bordered .ant-table-thead > tr > th {
      font-size: 13px;
    }
    .ant-table-tbody > tr > td {
      font-size: 13px;
    }
  }
  .cicc-verify {
    img {
      margin-left: 0px;
    }
  }
}
</style>
<style lang="scss" scoped>
.sec-joinUs {
  padding: 60px 0;
}
</style>

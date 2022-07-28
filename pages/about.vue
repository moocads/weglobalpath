<template>
  <div>
    <header>
      <div class="wrapper">
        <h1>关于我们</h1>
      </div>
    </header>
    <section class="sec-1 about-sec">
      <div class="row-grid">
        <div class="info-wrap">
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>加彼岸出国咨询</h2>
          </div>
          <p>
            <span
              >加彼岸旗下有加彼岸出国咨询（BEYOND CANADA
              CONSULTING），彼森教育（BISON INTERNATIONAL
              EDUCATION）和彼岸投资（BEYOND CANADA INVESTMENT）三家子公司</span
            >，均为加拿大联邦注册公司，分别由资深移民律师，RCIC（加拿大移民顾问监管委员会）持牌移民顾问，教育顾问，职业培训师，地产经纪，会计师及商务专家组成的强大专业服务团队。
          </p>
          <p>
            加彼岸出国咨询是权威办理加拿大省提名移民项目的加拿大本地公司。作为加拿大项目方，我们保持独家项目优势，始终保持高市场份额占有率，每位顾问都有多年的在海外的留学生活经验及海外工作经验。最重要的是，我们把每一位客户当作自己亲人来服务，在全加拿大境内的省提名项目中协助您评估现实状况并作出最合适的规划建议。加彼岸出国咨询将一如既往地与国内合作伙伴紧密合作，客户至上的精神，为客户提供最优质最专业的移民咨询服务。
          </p>
        </div>
        <div class="imgContainer">
          <img src="/img/About/sec1.png" alt="" class="sec-img" />
        </div>
      </div>
      <!-- <div class="wrapper">
      </div> -->
    </section>
    <section class="sec-2 about-sec">
      <div class="row-grid">
        <div class="imgContainer">
          <img src="/img/About/sec2.png" alt="" class="sec-img" />
        </div>
        <div class="info-wrap">
          <div class="title">
            <img src="/img/logos/logo-small-blue.png" alt="" />
            <h2>彼森教育</h2>
          </div>
          <p>
            <span>彼森教育</span
            >致力于为中国的学子提供高质量的海外留学申请，出国考试咨询及职业规划咨询服务。自2017年与加拿大罗伯森学院深度合作起，我们已为上百名学生办理签证至拿到枫叶卡的所有手续。2021年加彼岸受加拿大罗伯森学院委托，是中国区唯一校方直属合作伙伴，为学校处理一切中国事宜。
          </p>
          <p>
            结合加彼岸移居咨询方面和职业培训方面的超强实力，加拿大罗伯森学院与加彼岸出国咨询联合推出的公立学院直通车项目已成为广大留学生快速获得就业机会及移居身份的最佳选择。该项目不仅适合于即将高中或职高毕业的莘莘学子，对于过去已经完成过大学或大专课程，或已有多年工作经验的群体来说，该项目亦是您获得加拿大就业移居身份的绝佳途径。
          </p>
        </div>
      </div>
      <!-- <div class="wrapper">
      </div> -->
    </section>
    <section class="sec-3 about-sec">
      <div class="row-grid">
        <div class="info-wrap">
          <div class="title">
            <img src="/img/logos/logo-small-blue.png" alt="" />
            <h2>彼岸投资</h2>
          </div>
          <p>
            <span>彼岸投资</span
            >一直致力于为投资者提供专业的海外投资咨询服务。从投资学的角度来说，投资需要对市场深入了解，全面调查，综合行业动向，经济因素，风险与回报等多方面考量，以确保客户获得该行业必须提供的最佳服务和最真实的建议，找到最优的投资方案。
          </p>
        </div>
        <div class="imgContainer">
          <img src="/img/About/sec3.png" alt="" class="sec-img" />
        </div>
      </div>
      <!-- <div class="wrapper">
      </div> -->
    </section>
    <section class="divider">
      <h3>连接彼岸，用心服务，帮助海外客户和学生。</h3>
      <h3>我们，不忘初心。</h3>
    </section>
    <section class="sec-4">
      <div class="wrapper">
        <div class="row-grid">
          <div class="imgContainer">
            <img src="/img/About/sec4.png" alt="" />
          </div>
          <article>
            <h2>我们的使命</h2>
            <p>脱离传统教育的“生存为本”，给所有人选择国际化教育的机会。</p>
            <h2>我们的优势</h2>
            <ol>
              <li>加拿大直营，提供中加跨境综合服务</li>
              <li>持牌移民律师评估，全程把关审核</li>
              <li>成功保障，持牌律师团队和资深项目团队</li>
              <li>费用保障，申请失败费用全退</li>
              <li>安家保障，专业地产经纪提供贴心生活服务</li>
            </ol>
          </article>
        </div>
      </div>
    </section>
    <section class="sec-5">
      <div class="wrapper">
        <MainTitle title="加彼岸历程" titleEN="History" />
        <a-timeline id="aboutTimeline" mode="alternate">
          <a-timeline-item v-for="(item, index) in steps" :key="index">
            <div slot="dot" class="dot">
              <!-- <span>{{ item.label }}</span> -->
              <div class="circle"></div>
            </div>
            <p class="label">{{ item.label }}</p>
            <p class="text">{{ item.step }}</p>
          </a-timeline-item>
        </a-timeline>
      </div>
    </section>
    <!-- <Construction /> -->
    <a id="anchor-franchise"></a>

    <section class="sec-franchise">
      <div class="wrapper">
        <MainTitle
          title="加盟招商"
          titleEN="franchise"
          titleColor="#fff"
          titleENColor="#233369"
        />
        <article>
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>品牌优势：</h2>
          </div>
          <p>
            加彼岸<sup>TM</sup>
            是中国连接加拿大重要的国际教育桥梁，拥有多年移民教育精英团队，现有100+所合作学校，帮助3000+以上的家庭获得加拿大永居身份，1000+世界性优质合作资源。目前在中国以及加拿大中心城市成功发展了众多合作伙伴。
          </p>
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>运营优势：</h2>
          </div>
          <p>
            加彼岸<sup>TM</sup>拥有众多一手，独家移民研学项目，是新型教育理念先驱者。加彼岸<sup>TM</sup>用多年累积的经验为加盟/合作商提供一套独创的运营销售方案。成功的运营模式是加盟商/合作伙伴盈利的保障。
          </p>
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>服务优势：</h2>
          </div>
          <p>
            加彼岸<sup>TM</sup>一直致力于为每一个合作伙伴提供专业化定制服务。加彼岸<sup>TM</sup>拥有强大的技术售后支持团队。合作伙伴从前期公司运营到后期的维护售后我们都将提供免费服务，让合作伙伴运营公司无后顾之忧。
          </p>
        </article>
      </div>
    </section>
    <a id="anchor-joinUs"></a>
    <section class="sec-joinUs">
      <div class="wrapper">
        <MainTitle title="加入我们" titleEN="join us" />
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
          <button type="submit" class="submit-btn main-btn main-btn_blue">
            发送
          </button>
        </a-form>
        <!-- <div class="joinUs-info-row">
          <h3>
            简历投递邮箱：
            <br /><a href="mailto:info@beyondcanada.ca">info@beyondcanada.ca</a>
          </h3>
          <h3>
            咨询电话: <br />
            <a href="tel:+16475233555" class="ga-phone-trigger">647-523-3555</a>
          </h3>
        </div>
        <div class="joinUs-table-wrap">
          <a-table
            :columns="joinUsCols"
            :data-source="joinUsData"
            bordered
            :pagination="false"
            align="center"
          >
          </a-table>
          <br />
          <p>*所有职位均有提成绩效奖励</p>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import moment from "moment";

export default {
  head: {
    title: `加拿大移民 | 关于我们 | 加彼岸出国咨询`,
    meta: [
      {
        hid: "description",
        name: "description",
        content: `加拿大移民 | 关于我们 | 加彼岸出国咨询`,
      },
    ],
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: "joinus-form" }),
      isSubmitting: false,
      emailRegex:
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      numRegex: /^[0-9]+$/,
      resume: null,
      steps: [
        {
          label: "加彼岸™历程: 1",
          step: "建立中国与北美第一家鲁班工坊桥梁",
        },
        {
          label: "加彼岸™历程: 15",
          step: "缔结多所中加友好学校",
        },
        {
          label: "加彼岸™历程: 98.1",
          step: "98.1%+的移民申请通过率",
        },
        {
          label: "加彼岸™历程: 100",
          step: "代理加拿大百所院校",
        },
        {
          label: "加彼岸™历程: 1000",
          step: "1000+海外优质雇主",
        },
        {
          label: "加彼岸™历程: 2000",
          step: "输送上千名学子海外深造",
        },
        {
          label: "加彼岸™历程: 6000",
          step: "6000+各类移民申请成功案例",
        },
        {
          label: "加彼岸™历程:",
          step: "实现海外资产配置",
        },
        {
          label: "加彼岸™历程:",
          step: "未来给所有人选择国际化教育的机会",
        },
      ],
      joinUsCols,
      joinUsData,
    };
  },
  methods: {
    moment,
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
#aboutTimeline {
  width: 100%;
  .ant-timeline-item-tail {
    border-color: $lightGrey;
  }
  .label {
    color: $red;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 16px;
    margin: 0px 5px;
  }
  .text {
    margin: 0px 5px;
    font-size: 16px;
    margin-bottom: 0px;
    color: $grey;
  }
  .dot .circle {
    background-color: $red;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
}
#joinus-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 30px;
  @media all and (max-width: $sm) {
    grid-template-columns: 1fr;
  }
  .ant-select-selection-selected-value {
    height: 100%;
    display: flex !important;
    align-items: center;
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
.joinUs-table-wrap {
  .ant-table-bordered .ant-table-thead > tr > th {
    background-color: $navy;
    color: #fff;
    text-align: center;
    font-size: 16px;
  }
  .ant-table-tbody > tr > td {
    text-align: center;
    font-size: 16px;
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
}
</style>

<style lang="scss" scoped>
header {
  background-image: url("/img/About/banner-bw.png");
  background-color: rgba(34, 52, 92, 0.5);
  // filter: saturate(0%);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  position: relative;
  h1 {
    font-size: 60px;
    color: #fff;
    font-weight: bold;
    position: relative;
    margin-top: -30px;
  }
  h1::after {
    content: "ABOUT";
    position: absolute;
    color: rgba(196, 196, 196, 0.4);
    font-family: $Mont;
    font-weight: 900;
    top: 70%;
    left: 0;
    font-size: 85px;
    // background-color: $red;
    width: 200px;
    height: 0px;
  }
}
.sec-img {
  width: 100%;
  height: 100%;
  // height: auto;
  object-fit: cover;
}
.about-sec .row-grid {
  display: grid;
  .info-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    img {
      width: 22px;
      margin-right: 15px;
    }
    h2 {
      font-size: 28px;
      color: #fff;
      margin-bottom: 0;
      font-weight: 700;
    }
  }
  p {
    font-size: 16px;
    line-height: 1.9;
  }
  // .imgContainer {
  //   margin: 0;
  // }
}
.sec-1 {
  background-color: $navy;
  .row-grid {
    grid-template-columns: 65% 35%;
    .info-wrap {
      padding-right: 80px;
      padding-left: 7.5vw;
    }
    p {
      color: #c4c4c4;
    }
    span {
      font-weight: bold;
      color: #fff;
    }
  }
}
.sec-2 {
  background-color: #e9e9e9;
  .row-grid {
    grid-template-columns: 35% 65%;
    .title {
      h2 {
        color: $navy;
      }
    }
    .info-wrap {
      padding-left: 80px;
      padding-right: 7.5vw;
    }
  }
  p {
    color: #707070;
  }
  span {
    font-weight: bold;
    color: $navy;
  }
}

.sec-3 .row-grid {
  display: grid;
  grid-template-columns: auto auto;
  .info-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 80px;
    padding-left: 7.5vw;
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    img {
      width: 22px;
      margin-right: 15px;
    }
    h2 {
      font-size: 28px;
      color: $navy;
      margin-bottom: 0;
    }
  }
  p {
    color: #707070;
    font-size: 16px;
  }
  span {
    font-weight: bold;
    color: $navy;
  }
  .imgContainer img {
    object-fit: cover;
  }
}
.divider {
  background-color: $red;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    text-align: center;
    font-size: 28px;
    color: #fff;
    margin-bottom: 0;
    font-weight: 300;
  }
}
.sec-4 {
  // background-color: #e9e9e9;

  .row-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .imgContainer {
      margin: 0;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    article {
      h2 {
        color: $navy;
        font-size: 28px;
        margin-bottom: 15px;
        font-weight: bold;
      }
      p {
        color: $navy;
        font-size: 16px;
        font-weight: bold;
      }
      ol {
        list-style-type: decimal;
        list-style-position: inside;
        li {
          color: #757575;
          font-size: 16px;
        }
      }
    }
  }
}

.sec-5 {
  padding-bottom: 50px;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
// ANCHOR 加盟招商 section
.sec-franchise {
  padding: 50px 0 80px;
  background-color: $navy;
}
.sec-franchise article {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  p {
    font-size: 16px;
    color: #c4c4c4;
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 20px;
      margin-right: 13px;
    }
    h2 {
      font-size: 24px;
      color: #fff;
      margin-bottom: 0;
      font-weight: 700;
    }
    margin-top: 30px;
  }
}

// ANCHOR JOIN US STYLE
.sec-joinUs {
  padding: 50px 0;
}

.contact-input {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // margin-bottom: 20px;
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
.submit-btn {
  grid-column: span 2 / span 2;
  @media all and (max-width: $sm) {
    grid-column: span 1 / span 1;
  }
}
.joinUs-info-row {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  br {
    display: none;
  }
  h3,
  a {
    font-size: 20px;
  }
  a {
    color: $red;
  }
}
.joinUs-table-wrap {
  margin: 20px auto;
  max-width: 1000px;
}
@media all and (max-width: 991px) {
  header {
    background-position: bottom;
    height: 300px;
    display: flex;
    align-items: center;
    h1 {
      font-size: 42px;
    }
    h1::after {
      top: 70%;
      left: 0;
      width: 100px;
      height: 6px;
      font-size: 70px;
    }
  }
  .sec-1,
  .sec-2,
  .sec-3 {
    // padding: 30px 0;
    .row-grid {
      grid-template-columns: 1fr;
      .info-wrap {
        padding: 40px 30px 30px 30px;
      }
      p {
        font-size: 14px;
      }
    }
  }

  .sec-2 {
    .imgContainer {
      order: 2;
    }
  }
  .divider {
    background-color: $red;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      text-align: center;
      font-size: 18px;
      color: #fff;
      margin-bottom: 0;
    }
  }
  .sec-4 {
    padding: 30px 0;
  }
  .sec-4 .row-grid {
    grid-template-columns: 1fr;
    align-items: center;
    .imgContainer {
      order: 2;
    }
    article {
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
      ol {
        li {
          font-size: 14px;
        }
      }
    }
  }

  .sec-img {
    max-width: 400px;
    display: block;
    margin: auto;
    padding-bottom: 50px;
  }
  // ANCHOR 加盟招商 section
  .sec-franchise {
    padding: 30px 0;
  }
  .sec-franchise article {
    p {
      font-size: 14px;
    }
    .title {
      align-items: center;
      margin-bottom: 10px;
      img {
        width: 16px;
        margin-right: 10px;
      }
      h2 {
        font-size: 20px;
      }
      margin-top: 30px;
    }
  }
  .sec-joinUs {
    padding: 30px 0;
  }

  .joinUs-info-row {
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    br {
      display: block;
    }
    h3,
    a {
      font-size: 20px;
      text-align: center;
    }
    a {
      color: $red;
    }
  }
}

@media (max-width: 576px) {
  .sec-img {
    max-width: none;
    display: block;
    margin: auto;
    padding-bottom: 0px;
  }
}
</style>

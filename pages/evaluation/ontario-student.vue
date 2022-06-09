<template>
  <div id="ontario-student-evaluation-form">
    <header
      class="general-header"
      :style="{
        background: `linear-gradient(
        89.93deg,
        rgba(34, 52, 92, 0.7) 7.82%,
        rgba(34, 52, 92, 0) 102.35%
        ),url('/img/evaluation/evaluation-header.jpg')`,
      }"
    >
      <div class="wrapper">
        <h1>安省提名 境内留学生 EOI评分系统</h1>
      </div>
    </header>
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item><NuxtLink to="/">首页</NuxtLink></a-breadcrumb-item>
        <a-breadcrumb-item
          ><NuxtLink to="/evaluation">移民评分</NuxtLink></a-breadcrumb-item
        >
        <a-breadcrumb-item>安省提名 境内留学生 EOI评分系统</a-breadcrumb-item>
      </a-breadcrumb>
      <br />
      <br />
      <div class="recent-scores">
        <div v-for="(s, i) in scores" :key="i">
          <span>{{ s.date }}</span><span>|</span><span>邀请分数：{{ s.score }}</span>
        </div>
      </div>
      <a-card>
        <a-affix :offset-top="0">
          <div class="pointsCounter">
            <h2>
              您目前评分为：<strong>{{ totalPoints }}分</strong>
            </h2>
          </div>
        </a-affix>
        <div class="form">
          <section class="section">
            <h3>1.工作邀请Job Offer</h3>
            <div class="box">
              <div class="label">Job Offer<br />职业类别</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobType">
                  <a-radio :value="1">NOC A类 </a-radio>
                  <a-radio :value="2">NOC B类 </a-radio>
                  <a-radio :value="3">NOC C类 </a-radio>
                  <a-radio :value="4">NOC D类 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobTypeCalc }}</div>
            </div>
            <div class="box">
              <div class="label">Job Offer<br />职业代码</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobCode">
                  <a-radio :value="1">NOC 0,1,2,3,9 </a-radio>
                  <a-radio :value="2">NOC 4,5,6,7,8 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobCodeCalc }}</div>
            </div>
            <div class="box last">
              <div class="label">Job Offer<br />工资水平</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobSalary">
                  <a-radio :value="1">$40/小时 或以上 </a-radio>
                  <a-radio :value="2">$20 - $39.99/小时 </a-radio>
                  <a-radio :value="3">低于$20/小时 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobSalaryCalc }}</div>
            </div>
            <br />
            <a
              href="https://noc.esdc.gc.ca/Home/Welcome/b0589920bd874433bc0b03fde50809eb?GoCTemplateCulture=en-CA"
              target="_blank"
              class="additional-link"
              >点击查看职位NOC列表</a
            >
          </section>
          <section class="section">
            <h3>2.加拿大工作经验</h3>
            <div class="box">
              <div class="label">时长</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobExpTime">
                  <a-radio :value="1">12个月或以上 </a-radio>
                  <a-radio :value="2">少于12个月 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobExpTimeCalc }}</div>
            </div>
            <div class="box">
              <div class="label">NOC 类别</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobExpNoc">
                  <a-radio :value="1">NOC A类 </a-radio>
                  <a-radio :value="2">NOC B类 </a-radio>
                  <a-radio :value="3">NOC C类 </a-radio>
                  <a-radio :value="4">NOC D类 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobExpNocCalc }}</div>
            </div>
            <div class="box last">
              <div class="label">工资水平</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobExpSalary">
                  <a-radio :value="1">$40,000/年 或以上 </a-radio>
                  <a-radio :value="2">少于$40,000/年 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobExpSalaryCalc }}</div>
            </div>
            <p class="additional-info">
              可以是用来移民的工作，也可以是其他的加拿大工作
            </p>
          </section>
          <section class="section">
            <h3>3.教育背景</h3>
            <div class="box">
              <div class="label">教育程度</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="edu">
                  <a-radio :value="1">博士 </a-radio>
                  <a-radio :value="2">硕士 </a-radio>
                  <a-radio :value="3">本科 </a-radio>
                  <a-radio :value="4">大专或职业证书 </a-radio>
                  <a-radio :value="5">其他 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduCalc }}</div>
            </div>
            <div class="box">
              <div class="label">所修专业领域</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="eduMajor">
                  <a-radio :value="1"
                    >工程Engineering，及卫生保健Health Care
                  </a-radio>
                  <a-radio :value="2"
                    >数学Math，和计算机科学Computer Science
                  </a-radio>
                  <a-radio :value="3"
                    >商科Business, 和管理学科Administration，和技工Trades
                  </a-radio>
                  <a-radio :value="4"
                    >社会学Social、法律Legal、教育Education, 和科学Science
                  </a-radio>
                  <a-radio :value="5">艺术Arts，与人文科学Humanities </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduMajorCalc }}</div>
            </div>
            <div class="box">
              <div class="label">加拿大教育经历</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="eduExp">
                  <a-radio :value="1">两个加拿大学历或以上 </a-radio>
                  <a-radio :value="2">一个加拿大学历 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduExpCalc }}</div>
            </div>
          </section>
          <section class="section">
            <h3>4.语言</h3>
            <div class="box">
              <div class="label">语言水平</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="lang">
                  <a-radio :value="1">CLB9+ （包含9） </a-radio>
                  <a-radio :value="2">CLB8 </a-radio>
                  <a-radio :value="3">CLB7 </a-radio>
                  <a-radio :value="4">CLB6 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ langCalc }}</div>
            </div>
            <div class="box">
              <div class="label">多语言水平</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="bilang">
                  <a-radio :value="1">两种语言（英语和法语） </a-radio>
                  <a-radio :value="2">一种语言 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ bilangCalc }}</div>
            </div>
          </section>
          <section class="section">
            <h3>5.区域性</h3>
            <div class="box">
              <div class="label">Job Offer<br />区域性</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobRegion">
                  <a-radio :value="1">大多伦多地区以外 </a-radio>
                  <a-radio :value="2">大多伦多地区以内 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobRegionCalc }}</div>
            </div>
            <div class="box">
              <div class="label">读书<br />区域性</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="eduRegion">
                  <a-radio :value="1">大多伦多地区以外 </a-radio>
                  <a-radio :value="2">大多伦多地区以内 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduRegionCalc }}</div>
            </div>
            <div class="box last">
              <div class="label">战略优先项加分</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobRegionAddition">
                  <p>
                    劳动力市场有限因素Strategic
                    Priorities：能解决省内或某一地区劳动力市场的即时需求
                  </p>
                  <a-radio :value="1">是</a-radio>
                  <a-radio :value="2">否</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobRegionAdditionCalc }}</div>
            </div>
            <p class="additional-info">
              战略优先项加分由OINP在EOI邀请系统中予以评定
            </p>
          </section>
        </div>
      </a-card>
      <NuxtLink to="/evaluation" class="back-btn" exact style="margintop: 20px">
        <img src="/img/icons/back-btn.png" alt="" />
        <span>返回上一页</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `加拿大移民 | 安省提名 境内留学生 EOI评分系统 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 安省提名 境内留学生 EOI评分系统 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  data() {
    return {
      jobType: 0,
      jobCode: 0,
      jobSalary: 0,
      jobExpTime: 0,
      jobExpNoc: 0,
      jobExpSalary: 0,
      jobRegion: 0,
      jobRegionAddition: 0,
      edu: 0,
      eduMajor: 0,
      eduExp: 0,
      lang: 0,
      bilang: 0,
      eduRegion: 0,
    };
  },
  async asyncData({ $axios }) {
    const scores = await $axios.$get(`/scores-oinp-students`, {
      params: {
        _sort: "published_at:desc",
      },
      pagination: {
        pageSize: 3,
      },
    });
    return { scores };
  },
  computed: {
    jobTypeCalc: function () {
      switch (this.jobType) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 8;
        case 3:
        case 4:
          return 0;
      }
    },
    jobCodeCalc: function () {
      switch (this.jobCode) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 5;
      }
    },
    jobSalaryCalc: function () {
      switch (this.jobSalary) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 5;
        case 3:
          return 0;
      }
    },
    jobExpTimeCalc: function () {
      switch (this.jobExpTime) {
        case 0:
          return 0;
        case 1:
          return 4;
        case 2:
          return 0;
      }
    },
    jobExpNocCalc: function () {
      switch (this.jobExpNoc) {
        case 0:
        case 2:
        case 3:
        case 4:
          return 0;
        case 1:
          return 3;
      }
    },
    jobExpSalaryCalc: function () {
      switch (this.jobExpSalary) {
        case 0:
          return 0;
        case 1:
          return 3;
        case 2:
          return 0;
        case 3:
        case 4:
          return 5;
      }
    },
    jobRegionCalc: function () {
      switch (this.jobRegion) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 6;
      }
    },
    jobRegionAdditionCalc: function () {
      switch (this.jobRegionAddition) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 0;
      }
    },
    eduCalc: function () {
      switch (this.edu) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 8;
        case 3:
          return 6;
        case 4:
          return 5;
        case 5:
          return 0;
      }
    },
    eduMajorCalc: function () {
      switch (this.eduMajor) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 9;
        case 3:
          return 7;
        case 4:
          return 6;
        case 5:
          return 5;
      }
    },
    eduExpCalc: function () {
      switch (this.eduExp) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 5;
      }
    },
    langCalc: function () {
      switch (this.lang) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 6;
        case 3:
          return 4;
        case 4:
          return 0;
      }
    },
    bilangCalc: function () {
      switch (this.bilang) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 5;
      }
    },
    eduRegionCalc: function () {
      switch (this.eduRegion) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 6;
      }
    },
    totalPoints: function () {
      return (
        this.jobTypeCalc +
        this.jobCodeCalc +
        this.jobSalaryCalc +
        this.jobExpTimeCalc +
        this.jobExpNocCalc +
        this.jobExpSalaryCalc +
        this.jobRegionCalc +
        this.jobRegionAdditionCalc +
        this.eduCalc +
        this.eduMajorCalc +
        this.eduExpCalc +
        this.langCalc +
        this.bilangCalc +
        this.eduRegionCalc
      );
    },
  },
};
</script>
<style lang="scss">
#ontario-student-evaluation-form {
  .ant-card-body {
    padding-top: 0;
  }
  .ant-radio-wrapper {
    white-space: normal;
  }
}
@media all and (max-width: 1000px) {
  #ontario-student-evaluation-form {
    .ant-affix {
      top: 80px !important;
    }
    .pointsCounter {
      h2,
      h3 {
        font-size: 14px;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
$boxBorder: 1px solid #efefef;
#ontario-student-evaluation-form {
  background-color: #efefef;

  .pointsCounter {
    background-color: $navy;
    padding: 15px 0;
    margin-left: -24px;
    margin-right: -24px;
    margin-bottom: 30px;

    h2,
    h3 {
      color: white;
      margin: 0;
      text-align: center;
      font-weight: 400;
    }
  }
  .wrapper {
    padding: 100px 0;
  }

  .section {
    margin-bottom: 40px;

    h3 {
      margin-bottom: 20px;
    }

    .box {
      border-top: 1px solid #efefef;
      border-left: 1px solid #efefef;
      border-right: 1px solid #efefef;
      display: flex;

      &.last {
        border-bottom: 1px solid #efefef;
      }

      .label {
        border-right: 1px solid #efefef;
        padding: 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 150px;
        text-align: center;
        flex-shrink: 0;
      }

      .question {
        padding: 20px 30px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        // align-items: center;
        p {
          margin-bottom: 0;
        }

        .ant-radio-wrapper {
          margin-right: 30px;
        }

        &.vertical-radio {
          .ant-radio-wrapper {
            display: block;
          }
        }

        &.lang,
        &.exp {
          flex-direction: column;

          & > div {
            width: 100%;

            .ant-input-number {
              margin-right: 30px;
              margin-left: 10px;
            }

            &.input {
              margin-top: 30px;
            }
          }
        }
      }

      .result {
        padding: 20px 30px;
        width: 100px;
        border-left: 1px solid #efefef;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .box:last-child {
      border-bottom: 1px solid #efefef;
    }
  }
}
.recent-scores {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  border: 1px solid $navy;
  margin-bottom: 30px;
  font-size: 16px;
  padding: 24px;
  width: 100%;
  div{
    display: grid;
    grid-template-columns: 1fr auto 0.8fr;
    text-align: center;
  }
}
@media all and (max-width: 1000px) {
  #ontario-student-evaluation-form {
    .wrapper {
      width: 98vw;
      padding: 30px 0;
    }
    .section {
      .box {
        flex-direction: column;
        .label {
          border-right: none;
          border-bottom: $boxBorder;
          width: 100%;
          justify-content: flex-start;
          padding: 10px 20px;
        }
        .question {
          .ant-radio-wrapper {
            margin-right: 0px;
          }
          label {
            margin-bottom: 5px;
          }
        }
        .result {
          width: 100%;
          border-left: none;
          border-top: $boxBorder;
          align-items: flex-start;
        }
      }
    }
  }
}
@media all and (max-width: $md){
  .recent-scores {
    padding: 15px 5px;
    gap: 5px;
    font-size:14px;
    grid-template-columns: 1fr;
  }
}
@media all and (max-width: $sm) {
  .recent-scores {
    font-size: 14px;
  }
}
</style>

<template>
  <div id="mpnp-evaluation-form">
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
        <h1>曼省提名（MPNP）EOI评分系统</h1>
      </div>
    </header>
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item><NuxtLink to="/">首页</NuxtLink></a-breadcrumb-item>
        <a-breadcrumb-item
          ><NuxtLink to="/evaluation">移民评分</NuxtLink></a-breadcrumb-item
        >
        <a-breadcrumb-item>曼省提名（MPNP）EOI评分系统</a-breadcrumb-item>
      </a-breadcrumb>
      <br />
      <br />
      <RecentScores :scores="scores" />
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
            <h3>1.年龄</h3>
            <div class="box">
              <div class="label">年龄</div>
              <div class="question">
                <a-input-number
                  v-model="age"
                  :min="1"
                  :max="100"
                ></a-input-number>
              </div>
              <div class="result">
                {{ ageCalc }}
              </div>
            </div>
          </section>

          <section class="section">
            <h3>2.语言</h3>
            <div class="box">
              <div class="label">第一语言</div>
              <div class="question vertical-radio">
                <p>按听，说，读，写，单项算分</p>
                <br />
                <div class="language-wrap">
                  <div class="lang-item">
                    <label>听</label>
                    <a-select v-model="langTest.listening" style="width: 150px">
                      <a-select-option :value="1">CLB 8或以上 </a-select-option>
                      <a-select-option :value="2">CLB 7 </a-select-option>
                      <a-select-option :value="3">CLB 6 </a-select-option>
                      <a-select-option :value="4">CLB 5 </a-select-option>
                      <a-select-option :value="5">CLB 4 </a-select-option>
                      <a-select-option :value="6">CLB 3或以下 </a-select-option>
                    </a-select>
                  </div>
                  <div class="lang-item">
                    <label>说</label>
                    <a-select v-model="langTest.speaking" style="width: 150px">
                      <a-select-option :value="1">CLB 8或以上 </a-select-option>
                      <a-select-option :value="2">CLB 7 </a-select-option>
                      <a-select-option :value="3">CLB 6 </a-select-option>
                      <a-select-option :value="4">CLB 5 </a-select-option>
                      <a-select-option :value="5">CLB 4 </a-select-option>
                      <a-select-option :value="6">CLB 3或以下 </a-select-option>
                    </a-select>
                  </div>
                  <div class="lang-item">
                    <label>读</label>
                    <a-select v-model="langTest.reading" style="width: 150px">
                      <a-select-option :value="1">CLB 8或以上 </a-select-option>
                      <a-select-option :value="2">CLB 7 </a-select-option>
                      <a-select-option :value="3">CLB 6 </a-select-option>
                      <a-select-option :value="4">CLB 5 </a-select-option>
                      <a-select-option :value="5">CLB 4 </a-select-option>
                      <a-select-option :value="6">CLB 3或以下 </a-select-option>
                    </a-select>
                  </div>
                  <div class="lang-item">
                    <label>写</label>
                    <a-select v-model="langTest.writing" style="width: 150px">
                      <a-select-option :value="1">CLB 8或以上 </a-select-option>
                      <a-select-option :value="2">CLB 7 </a-select-option>
                      <a-select-option :value="3">CLB 6 </a-select-option>
                      <a-select-option :value="4">CLB 5 </a-select-option>
                      <a-select-option :value="5">CLB 4 </a-select-option>
                      <a-select-option :value="6">CLB 3或以下 </a-select-option>
                    </a-select>
                  </div>
                </div>
              </div>
              <div class="result">{{ mainLangCalc }}</div>
            </div>
            <div class="box">
              <div class="label">第二语言</div>
              <div class="question vertical-radio">
                <p>第二语言需要全部单项都打到CLB5才能算分</p>
                <a-radio-group v-model="secondLang">
                  <a-radio :value="1">CLB 5或以上 </a-radio>
                  <a-radio :value="2">CLB 4或以下 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ secondLangCalc }}</div>
            </div>
          </section>
          <section class="section">
            <h3>3.工作经验</h3>
            <div class="box">
              <div class="label">工作时长</div>
              <div class="question vertical-radio">
                <p>
                  全职工作需每周至少工作30
                  hours+。连续工作经验累计超过6个月以上的工作经历才会被承认
                </p>
                <a-radio-group v-model="workTime">
                  <a-radio :value="1">1年以下 </a-radio>
                  <a-radio :value="2">1年 </a-radio>
                  <a-radio :value="3">2年 </a-radio>
                  <a-radio :value="4">3年 </a-radio>
                  <a-radio :value="5">4年或以上 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workTimeCalc }}</div>
            </div>
            <div class="box">
              <div class="label">工作（额外加分）</div>
              <div class="question vertical-radio">
                <!-- <a-checkbox-group v-model="workTimeBonus" @change="onChange()">
                  <a-checkbox :value="1">
                    通过曼省政府资格许可的工作
                  </a-checkbox>
                </a-checkbox-group> -->
                <a-radio-group v-model="workTimeBonus">
                  <p>是否为通过曼省政府资格许可的工作</p>
                  <a-radio :value="1">是</a-radio>
                  <a-radio :value="2">否</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workTimeBonusCalc }}</div>
            </div>
          </section>
          <section class="section">
            <h3>4.教育</h3>
            <div class="box">
              <div class="label">教育水平</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="edu">
                  <a-radio :value="1">硕士学位或博士学位 </a-radio>
                  <a-radio :value="2">2个两年学制的专上学历 </a-radio>
                  <a-radio :value="3">1个三年学制的专上学历 </a-radio>
                  <a-radio :value="4">1个两年学制的专上学历 </a-radio>
                  <a-radio :value="5">1个一年学制的专上学历 </a-radio>
                  <a-radio :value="6">技工证书 </a-radio>
                  <a-radio :value="7">无专上学历 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduCalc }}</div>
            </div>
          </section>
          <section class="section">
            <h3>5.适应能力</h3>
            <div class="box">
              <div class="label">适应能力</div>
              <div class="question vertical-radio">
                <p>
                  只能选择得分最高的一项进行打分，目的地为outside of
                  Winnipeg的有额外加分
                </p>
                <a-checkbox-group
                  v-model="adaptPoints"
                  @change="adaptPointsSelect"
                  style="display: flex; flex-direction: column"
                >
                  <a-checkbox :value="1">有曼省近亲</a-checkbox>
                  <a-checkbox :value="2"
                    >以前在曼省有6个月及以上的工作经验</a-checkbox
                  >
                  <a-checkbox :value="3"
                    >在曼省完成过至少2年的专上学历</a-checkbox
                  >
                  <a-checkbox :value="4"
                    >在曼省完成过至少1年的专上学历</a-checkbox
                  >
                  <a-checkbox :value="5">有曼省朋友或远亲</a-checkbox>
                  <a-checkbox :value="6"
                    >在曼省连续全职工作6个月并获得曼省同一雇主签发的长期job
                    offer</a-checkbox
                  >
                  <a-checkbox :value="7">获得曼省战略主动招聘邀请函</a-checkbox>
                  <a-checkbox :value="8"
                    >申请人移民局目的地为Winnipeg以外</a-checkbox
                  >
                </a-checkbox-group>
                <!-- <a-radio-group v-model="extra">
                  <a-radio :value="1">有曼省近亲 </a-radio>
                  <a-radio :value="2"
                    >以前在曼省有6个月及以上的工作经验
                  </a-radio>
                  <a-radio :value="3">在曼省完成过至少2年的专上学历 </a-radio>
                  <a-radio :value="4">在曼省完成过至少1年的专上学历 </a-radio>
                  <a-radio :value="5">有曼省朋友或远亲 </a-radio>
                  <a-radio :value="6"
                    >在曼省连续全职工作6个月并获得曼省同一雇主签发的长期job
                    offer
                  </a-radio>
                  <a-radio :value="7">获得曼省战略主动招聘邀请函 </a-radio>
                  <a-radio :value="8"
                    >申请人移民局目的地为Winnipeg以外
                  </a-radio>
                </a-radio-group> -->
              </div>
              <div class="result">{{ adaptPointsTotal }}</div>
            </div>
            <div class="box">
              <div class="label">风险评估</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="risk">
                  <p>在外省有学习背景</p>
                  <a-radio :value="1">是</a-radio>
                  <a-radio :value="2">否</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ riskCalc }}</div>
            </div>
            <div class="box">
              <div class="label">风险评估</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="riskWork">
                  <p>在外省有工作背景</p>
                  <a-radio :value="1">是</a-radio>
                  <a-radio :value="2">否</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ riskWorkCalc }}</div>
            </div>
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
      title: `加拿大移民 | 曼省提名（MPNP）EOI评分系统 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 曼省提名（MPNP）EOI评分系统 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  data() {
    return {
      age: 0,
      mainLang: 0,
      secondLang: 0,
      workTime: 0,
      workTimeBonus: 0,
      edu: 0,
      extra: 0,
      adaptPoints: [],
      adaptPointsTotal: 0,
      risk: 0,
      riskWork: 0,
      langTest: {
        listening: "",
        speaking: "",
        reading: "",
        writing: "",
      },
    };
  },
  async asyncData({ $axios }) {
    const scores = await $axios.$get(`/scores-mpnps`, {
      params: {
        _sort: "published_at:desc",
        _limit: 3,
      },
      pagination: {
        pageSize: 3,
      },
    });
    return { scores };
  },
  methods: {
    adaptPointsSelect() {
      let option1,
        option2,
        option3,
        option4,
        option5,
        option6,
        option7,
        option8 = 0;
      if (this.adaptPoints.includes(1)) {
        option1 = 200;
      } else {
        option1 = 0;
      }
      if (this.adaptPoints.includes(2)) {
        option2 = 100;
      } else {
        option2 = 0;
      }
      if (this.adaptPoints.includes(3)) {
        option3 = 100;
      } else {
        option3 = 0;
      }
      if (this.adaptPoints.includes(4)) {
        option4 = 50;
      } else {
        option4 = 0;
      }
      if (this.adaptPoints.includes(5)) {
        option5 = 50;
      } else {
        option5 = 0;
      }
      if (this.adaptPoints.includes(6)) {
        option6 = 500;
      } else {
        option6 = 0;
      }
      if (this.adaptPoints.includes(7)) {
        option7 = 500;
      } else {
        option7 = 0;
      }
      if (this.adaptPoints.includes(8)) {
        option8 = 50;
      } else {
        option8 = 0;
      }
      let edu = Math.max(option3, option4);
      let total =
        option1 + option2 + edu + option5 + option6 + option7 + option8;
      if (total >= 500) {
        return (this.adaptPointsTotal = 500);
      } else {
        return (this.adaptPointsTotal = total);
      }
    },
  },
  computed: {
    ageCalc: function () {
      this.age = Math.round(this.age);
      return this.age == 18
        ? 20
        : this.age == 19
        ? 30
        : this.age == 20
        ? 40
        : this.age > 20 && this.age < 46
        ? 75
        : this.age == 46
        ? 40
        : this.age == 47
        ? 30
        : this.age == 48
        ? 20
        : this.age == 49
        ? 10
        : 0;
    },
    mainLangCalc: function () {
      let listeningPts,
        speakingPts,
        readingPts,
        writingPts,
        totalPts = 0;
      //语言成绩 听力
      if (this.langTest.listening == 1) {
        listeningPts = 25;
      } else if (this.langTest.listening == 2) {
        listeningPts = 22;
      } else if (this.langTest.listening == 3) {
        listeningPts = 20;
      } else if (this.langTest.listening == 4) {
        listeningPts = 17;
      } else if (this.langTest.listening == 5) {
        listeningPts = 12;
      } else if (this.langTest.listening == 6) {
        listeningPts = 0;
      } else {
        listeningPts = 0;
      }
      //语言成绩 口语
      if (this.langTest.speaking == 1) {
        speakingPts = 25;
      } else if (this.langTest.speaking == 2) {
        speakingPts = 22;
      } else if (this.langTest.speaking == 3) {
        speakingPts = 20;
      } else if (this.langTest.speaking == 4) {
        speakingPts = 17;
      } else if (this.langTest.speaking == 5) {
        speakingPts = 12;
      } else if (this.langTest.speaking == 6) {
        speakingPts = 0;
      } else {
        speakingPts = 0;
      }
      //语言成绩 阅读
      if (this.langTest.reading == 1) {
        readingPts = 25;
      } else if (this.langTest.reading == 2) {
        readingPts = 22;
      } else if (this.langTest.reading == 3) {
        readingPts = 20;
      } else if (this.langTest.reading == 4) {
        readingPts = 17;
      } else if (this.langTest.reading == 5) {
        readingPts = 12;
      } else if (this.langTest.reading == 6) {
        readingPts = 0;
      } else {
        readingPts = 0;
      }
      //语言成绩 写作
      if (this.langTest.writing == 1) {
        writingPts = 25;
      } else if (this.langTest.writing == 2) {
        writingPts = 22;
      } else if (this.langTest.writing == 3) {
        writingPts = 20;
      } else if (this.langTest.writing == 4) {
        writingPts = 17;
      } else if (this.langTest.writing == 5) {
        writingPts = 12;
      } else if (this.langTest.writing == 6) {
        writingPts = 0;
      } else {
        writingPts = 0;
      }
      totalPts = listeningPts + speakingPts + readingPts + writingPts;
      // console.log("听力：" + listeningPts);
      // console.log("口语：" + speakingPts);
      // console.log(totalPts);
      return totalPts;
    },
    secondLangCalc: function () {
      switch (this.secondLang) {
        case 0:
          return 0;
        case 1:
          return 25;
        case 2:
          return 0;
      }
    },
    workTimeCalc: function () {
      switch (this.workTime) {
        case 0:
          return 0;
        case 1:
          return 0;
        case 2:
          return 40;
        case 3:
          return 50;
        case 4:
          return 60;
        case 5:
          return 75;
      }
    },
    workTimeBonusCalc: function () {
      switch (this.workTimeBonus) {
        case 0:
          return 0;
        case 1:
          return 100;
        case 2:
          return 0;
      }
    },
    eduCalc: function () {
      switch (this.edu) {
        case 0:
          return 0;
        case 1:
          return 125;
        case 2:
          return 115;
        case 3:
          return 110;
        case 4:
          return 100;
        case 5:
          return 70;
        case 6:
          return 70;
        case 7:
          return 0;
      }
    },
    extraCalc: function () {
      switch (this.extra) {
        case 0:
          return 0;
        case 1:
          return 200;
        case 2:
          return 100;
        case 3:
          return 100;
        case 4:
          return 50;
        case 5:
          return 50;
        case 6:
          return 500;
        case 7:
          return 500;
        case 8:
          return 50;
      }
    },
    riskCalc: function () {
      switch (this.risk) {
        case 0:
          return 0;
        case 1:
          return -100;
        case 2:
          return 0;
      }
    },
    riskWorkCalc: function () {
      switch (this.riskWork) {
        case 0:
          return 0;
        case 1:
          return -100;
        case 2:
          return 0;
      }
    },
    totalPoints: function () {
      return (
        this.ageCalc +
        this.mainLangCalc +
        this.secondLangCalc +
        this.workTimeCalc +
        this.workTimeBonusCalc +
        this.eduCalc +
        this.extraCalc +
        this.riskCalc +
        this.riskWorkCalc +
        this.adaptPointsTotal
      );
    },
  },
};
</script>
<style lang="scss">
#mpnp-evaluation-form {
  .ant-card-body {
    padding-top: 0;
  }
  .ant-radio-wrapper {
    white-space: normal;
  }
  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }
}
@media all and (max-width: 1000px) {
  #mpnp-evaluation-form {
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
#mpnp-evaluation-form {
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
  .language-wrap {
    label {
      margin-right: 10px;
    }

    display: flex;
    column-gap: 20px;
  }
}
@media all and (max-width: 1000px) {
  #mpnp-evaluation-form {
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
    .language-wrap {
      label {
        margin-right: 10px;
      }

      display: flex;
      flex-direction: column;
      column-gap: 20px;
      row-gap: 20px;
    }
  }
}
</style>

<template>
  <div id="bcpnp-evaluation-form">
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
        <h1>萨省省提名（SINP）EOI评分系统</h1>
      </div>
    </header>
    <div class="wrapper">
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
            <div class="box">
              <div class="label">年龄</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="age">
                  <a-radio :value="1">小于18周岁 </a-radio>
                  <a-radio :value="2">18-21周岁 </a-radio>
                  <a-radio :value="3">22-34周岁 </a-radio>
                  <a-radio :value="4">35-45周岁 </a-radio>
                  <a-radio :value="5">46-50周岁</a-radio>
                  <a-radio :value="6">大于50周岁</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ ageCalc }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">工作经验<br />（前5年内）</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="workExp5">
                  <a-radio :value="1">5年 </a-radio>
                  <a-radio :value="2">4年 </a-radio>
                  <a-radio :value="3">3年 </a-radio>
                  <a-radio :value="4">2年 </a-radio>
                  <a-radio :value="5">1年</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workExp5Calc }}</div>
            </div>
            <div class="box">
              <div class="label">工作经验<br />（前6-10年内）</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="workExp10">
                  <a-radio :value="1">5年 </a-radio>
                  <a-radio :value="2">4年 </a-radio>
                  <a-radio :value="3">3年 </a-radio>
                  <a-radio :value="4">2年 </a-radio>
                  <a-radio :value="5">1年</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workExp10Calc }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">学历</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="edu">
                  <a-radio :value="1">硕士或博士学位 </a-radio>
                  <a-radio :value="2">至少3年全职学习大学学位 </a-radio>
                  <a-radio :value="3">萨省认可的技工证书 </a-radio>
                  <a-radio :value="4">至少2年高等教育学历，学位或证书 </a-radio>
                  <a-radio :value="5">至少1年高等教育学历，学位或证书 </a-radio>
                  <a-radio :value="6">其他教育或工作培训 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduCalc }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">第一语言<br />（英语或法语）</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="firstLanguage">
                  <a-radio :value="1">CLB 8或更高 </a-radio>
                  <a-radio :value="2">CLB 7</a-radio>
                  <a-radio :value="3">CLB 6</a-radio>
                  <a-radio :value="4">CLB 5</a-radio>
                  <a-radio :value="5">CLB 4</a-radio>
                  <a-radio :value="6">无语言成绩</a-radio>
                </a-radio-group>
                <p>*母语为英语或法语的申请人无语言成绩（不适用于EE）</p>
              </div>
              <div class="result">{{ firstLanguageCalc }}</div>
            </div>
            <div class="box">
              <div class="label">第二语言<br />（英语或法语）</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="secondLanguage">
                  <a-radio :value="1">CLB 8或更高 </a-radio>
                  <a-radio :value="2">CLB 7</a-radio>
                  <a-radio :value="3">CLB 6</a-radio>
                  <a-radio :value="4">CLB 5</a-radio>
                  <a-radio :value="5">CLB 4</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ secondLanguageCalc }}</div>
            </div>
          </section>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edu: 0,
      age: 0,
      workExp5: 0,
      workExp10: 0,
      firstLanguage: 0,
      secondLanguage: 0,
    };
  },
  computed: {
    eduCalc: function () {
      switch (this.edu) {
        case 0:
          return 0;
        case 1:
          return 23;
        case 2:
        case 3:
          return 20;
        case 4:
          return 15;
        case 5:
          return 12;
        case 6:
          return 0;
      }
    },
    workExp5Calc: function () {
      switch (this.workExp5) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 8;
        case 3:
          return 6;
        case 4:
          return 4;
        case 5:
          return 2;
        case 6:
          return 0;
      }
    },
    workExp10Calc: function () {
      switch (this.workExp10) {
        case 0:
          return 0;
        case 1:
          return 5;
        case 2:
          return 4;
        case 3:
          return 3;
        case 4:
          return 2;
        case 5:
          return 0;
      }
    },
    firstLanguageCalc: function () {
      switch (this.firstLanguage) {
        case 0:
          return 0;
        case 1:
          return 20;
        case 2:
          return 18;
        case 3:
          return 16;
        case 4:
          return 14;
        case 5:
          return 12;
        case 6:
          return 0;
      }
    },
    secondLanguageCalc: function () {
      switch (this.secondLanguage) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 8;
        case 3:
          return 6;
        case 4:
          return 4;
        case 5:
          return 2;
      }
    },
    ageCalc: function () {
      switch (this.age) {
        case 0:
          return 0;
        case 1:
          return 0;
        case 2:
          return 8;
        case 3:
          return 12;
        case 4:
          return 10;
        case 5:
          return 8;
        case 6:
          return 0;
      }
    },
    totalPoints: function () {
      return (
        this.eduCalc +
        this.workExp5Calc +
        this.workExp10Calc +
        this.firstLanguageCalc +
        this.secondLanguageCalc +
        this.ageCalc
      );
    },
  },
};
</script>
<style lang="scss">
#bcpnp-evaluation-form {
  .ant-card-body {
    padding-top: 0;
  }
  .ant-radio-wrapper {
    white-space: normal;
  }
}
</style>
<style lang="scss" scoped>
$boxBorder: 1px solid #efefef;
#bcpnp-evaluation-form {
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
@media all and (max-width: 1000px) {
  #bcpnp-evaluation-form {
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
</style>

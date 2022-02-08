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
            <h3>1.语言</h3>
            <div class="box">
              <div class="label">第一语言</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="mainLang">
                  <a-radio :value="1">CLB 8或以上 </a-radio>
                  <a-radio :value="2">CLB 7 </a-radio>
                  <a-radio :value="3">CLB 6 </a-radio>
                  <a-radio :value="4">CLB 5 </a-radio>
                  <a-radio :value="4">CLB 4 </a-radio>
                  <a-radio :value="4">CLB 3或以下 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ mainLangCalc }}</div>
            </div>
            <div class="box">
              <div class="label">第二语言</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="secondLang">
                  <a-radio :value="1">CLB 8或以上 </a-radio>
                  <a-radio :value="2">CLB 7 </a-radio>
                  <a-radio :value="3">CLB 6 </a-radio>
                  <a-radio :value="4">CLB 5 </a-radio>
                  <a-radio :value="4">CLB 4 </a-radio>
                  <a-radio :value="4">CLB 3或以下 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ secondLangCalc }}</div>
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
      mainLang: 0,
    };
  },
  computed: {
    mainLangCalc: function () {
      switch (this.mainLang) {
        case 0:
          return 0;
      }
    },
    totalPoints: function () {
      return this.mainLangCalc;
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
  }
}
</style>

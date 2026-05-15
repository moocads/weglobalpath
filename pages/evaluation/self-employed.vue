<template>
  <div id="selfEmployedForm">
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
        <h1>加拿大联邦自雇移民评分系统</h1>
      </div>
    </header>
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item><NuxtLink to="/">首页</NuxtLink></a-breadcrumb-item>
        <a-breadcrumb-item
          ><NuxtLink to="/evaluation">移民评分</NuxtLink></a-breadcrumb-item
        >
        <a-breadcrumb-item>加拿大联邦自雇移民评分系统</a-breadcrumb-item>
      </a-breadcrumb>
      <br />
      <br />
      <a-card>
        <a-affix :offset-top="0">
          <div class="pointsCounter">
            <!-- <h3>最新邀请分为：<strong>745分</strong></h3> -->
            <h2>
              您目前评分为：<strong>{{ subtotal }}分</strong>
            </h2>
          </div>
        </a-affix>
        <div class="form">
          <div class="section">
            <h3>1、基础信息（最高94分）</h3>
            <div class="box">
              <div class="label">年龄<span>（最高10分）</span></div>
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
            <div class="box">
              <div class="label">学位教育<span>（最高25分）</span></div>
              <div class="question vertical-radio">
                <a-radio-group v-model="edu">
                  <a-radio :value="1"> 初中以及以下 </a-radio>
                  <a-radio :value="2"> 高中 </a-radio>
                  <a-radio :value="3">
                    1年大专，职业教育，学徒工，满足12年教育经历
                  </a-radio>
                  <a-radio :value="4">
                    1年大专，职业教育，学徒工，满足13年教育经历
                  </a-radio>
                  <a-radio :value="5"> 1年大学学历，满足13年教育经历 </a-radio>
                  <a-radio :value="6">
                    2年职业教育，学徒工，满足14年教育经历
                  </a-radio>
                  <a-radio :value="7">
                    2年大学本科学历，满足14年教育经历
                  </a-radio>
                  <a-radio :value="8">
                    3年 大学学历（包括职业教育、学徒经历）满足15年教育经历
                  </a-radio>
                  <a-radio :value="9"> 两个本科学位，满足15年教育经历 </a-radio>
                  <a-radio :value="10"> 博士，硕士，满足17年教育经历 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ eduCalc }}
              </div>
            </div>
            <div class="box">
              <div class="label">语言能力<span>（最高24分）</span></div>
              <div class="question lang">
                <div>
                  <a-radio-group v-model="langTest1.test">
                    <a-radio :value="1"> 雅思 </a-radio>
                    <a-radio :value="2"> TEF </a-radio>
                  </a-radio-group>
                </div>
                <div class="input">
                  听<a-input-number
                    :min="0"
                    v-model="langTest1.l"
                  ></a-input-number>
                  说<a-input-number
                    :min="0"
                    v-model="langTest1.s"
                  ></a-input-number>
                  读<a-input-number
                    :min="0"
                    v-model="langTest1.r"
                  ></a-input-number>
                  写<a-input-number
                    :min="0"
                    v-model="langTest1.w"
                  ></a-input-number>
                </div>
              </div>
              <div class="result">
                {{ langTest1Calc }}
              </div>
            </div>
            <div class="box last">
              <div class="label">工作经验<span>（最高35分）</span></div>
              <div class="question exp">
                <div>
                  工作经验（可以不连续）<a-input-number
                    :min="0"
                    :max="100"
                    v-model="exp"
                    style="margin-right: 10px"
                  ></a-input-number>
                  年
                </div>
              </div>
              <div class="result">
                {{ expCalc }}
              </div>
            </div>
          </div>
          <div class="section">
            <h3>2、适应能力（最高6分）</h3>
            <div class="box">
              <div class="label">配偶教育经历</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="eduPartner">
                  <a-radio :value="1"> 高中 </a-radio>
                  <a-radio :value="2">
                    一年大专、职业教育、学徒工，满足12年教育经历
                  </a-radio>
                  <a-radio :value="3">
                    双学历（其中一个三年）大专，职业教育、学徒工，满足14年教育经历
                  </a-radio>
                  <a-radio :value="4"> 硕士，博士， 满足17年教育经历 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ eduCalcPartner }}
              </div>
            </div>
            <div class="box">
              <div class="label">加拿大工作经历</div>
              <div class="question yes-no">
                <div style="margin-bottom: 10px">
                  申请人或配偶在加拿大有至少一年工作经历
                </div>
                <a-radio-group v-model="caExp">
                  <a-radio :value="1"> 有 </a-radio>
                  <a-radio :value="2"> 没有 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ caExpCalc }}
              </div>
            </div>
            <div class="box">
              <div class="label">加拿大学历</div>
              <div class="question yes-no">
                <div style="margin-bottom: 10px">
                  申请人或配偶在加拿大完成至少2年学习经验（无需获得学位或文凭）
                </div>
                <a-radio-group v-model="caEdu">
                  <a-radio :value="1"> 有 </a-radio>
                  <a-radio :value="2"> 没有 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ caEduCalc }}
              </div>
            </div>
            <div class="box last">
              <div class="label">加拿大亲戚</div>
              <div class="question yes-no">
                <div style="margin-bottom: 10px">
                  在加拿大有加拿大PR或公民的亲属（包括父母、祖父母、孩子、孙子孙女、本人及配偶的兄弟姐妹、叔叔阿姨、侄子侄女）
                  申请人或配偶在加拿大完成至少2年学习经验（无需获得学位或文凭）
                </div>
                <a-radio-group v-model="brothers">
                  <a-radio :value="1"> 有 </a-radio>
                  <a-radio :value="2"> 没有 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{ brothersCalc }}
              </div>
            </div>
          </div>
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
      title: `加拿大移民 | 加拿大联邦自雇移民评分系统 | 寰球嘉途`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 加拿大联邦自雇移民评分系统 | 寰球嘉途`,
        },
      ],
    };
  },
  data() {
    return {
      age: 0,
      exp: 0,
      expAbroad: 0,
      edu: 0,
      tech: 0,
      langTest1: {
        test: undefined,
        l: 0,
        s: 0,
        r: 0,
        w: 0,
        clbL: 0,
        clbS: 0,
        clbR: 0,
        clbW: 0,
      },
      eduPartner: 0,
      caExp: 0,
      caEdu: 0,
      brothers: 0,
    };
  },
  methods: {
    onChange(item) {
      // console.log(this.ageCalc)
      console.log(item);
    },
  },
  computed: {
    ageCalc: function () {
      this.age = Math.round(this.age);
      return this.age == 17
        ? 2
        : this.age == 18
        ? 4
        : this.age == 19
        ? 6
        : this.age == 20
        ? 8
        : this.age > 20 && this.age < 50
        ? 10
        : this.age == 50
        ? 8
        : this.age == 51
        ? 6
        : this.age == 52
        ? 4
        : this.age == 53
        ? 2
        : 0;
    },
    eduCalc: function () {
      return this.edu == 1
        ? 0
        : this.edu == 2
        ? 5
        : this.edu == 3
        ? 12
        : this.edu == 4
        ? 15
        : this.edu == 5
        ? 15
        : this.edu == 6
        ? 20
        : this.edu == 7
        ? 20
        : this.edu == 8
        ? 22
        : this.edu == 9
        ? 22
        : this.edu == 10
        ? 25
        : 0;
    },
    langTest1Calc: function () {
      if (this.langTest1.test == 1) {
        this.langTest1.pointsL =
          this.langTest1.l >= 7.5
            ? 6
            : this.langTest1.l >= 5.5
            ? 5
            : this.langTest1.l >= 4.5
            ? 4
            : 0;
        this.langTest1.pointsS =
          this.langTest1.s >= 6.5
            ? 6
            : this.langTest1.s >= 5.5
            ? 5
            : this.langTest1.s >= 4
            ? 4
            : 0;
        this.langTest1.pointsR =
          this.langTest1.r >= 6.5
            ? 6
            : this.langTest1.r >= 5
            ? 5
            : this.langTest1.r >= 3.5
            ? 4
            : 0;
        this.langTest1.pointsW =
          this.langTest1.w >= 6.5
            ? 6
            : this.langTest1.w >= 5.5
            ? 5
            : this.langTest1.w >= 4
            ? 4
            : 0;
      } else if (this.langTest1.test == 2) {
        this.langTest1.pointsL =
          this.langTest1.l >= 280
            ? 6
            : this.langTest1.l >= 217
            ? 5
            : this.langTest1.l >= 145
            ? 4
            : 0;
        this.langTest1.pointsS =
          this.langTest1.s >= 349
            ? 6
            : this.langTest1.s >= 371
            ? 5
            : this.langTest1.s >= 181
            ? 4
            : 0;
        this.langTest1.pointsR =
          this.langTest1.r >= 233
            ? 6
            : this.langTest1.r >= 181
            ? 5
            : this.langTest1.r >= 121
            ? 4
            : 0;
        this.langTest1.pointsW =
          this.langTest1.w >= 349
            ? 6
            : this.langTest1.w >= 271
            ? 5
            : this.langTest1.w >= 181
            ? 4
            : 0;
      } else {
        this.langTest1.pointsL = 0;
        this.langTest1.pointsS = 0;
        this.langTest1.pointsR = 0;
        this.langTest1.pointsW = 0;
      }
      return (
        this.langTest1.pointsL +
        this.langTest1.pointsS +
        this.langTest1.pointsR +
        this.langTest1.pointsW
      );
    },
    expCalc: function () {
      return this.exp >= 5
        ? 35
        : this.exp >= 4
        ? 30
        : this.exp >= 3
        ? 25
        : this.exp >= 2
        ? 20
        : 0;
    },
    eduCalcPartner: function () {
      return this.eduPartner == 1
        ? 0
        : this.eduPartner == 2
        ? 3
        : this.eduPartner == 3
        ? 4
        : this.eduPartner == 4
        ? 5
        : 0;
    },
    caEduCalc: function () {
      return this.caEdu == 1 ? 5 : 0;
    },
    caExpCalc: function () {
      return this.caExp == 1 ? 5 : 0;
    },
    brothersCalc: function () {
      return this.brothers == 1 ? 5 : 0;
    },
    extraCalc: function () {
      if (
        this.eduCalcPartner +
          this.caEduCalc +
          this.caExpCalc +
          this.brothersCalc >
        6
      ) {
        return 6;
      } else {
        return (
          this.eduCalcPartner +
          this.caEduCalc +
          this.caExpCalc +
          this.brothersCalc
        );
      }
    },
    subtotal: function () {
      return (
        this.ageCalc +
        this.eduCalc +
        this.langTest1Calc +
        this.expCalc +
        this.extraCalc
      );
    },
  },
};
</script>

<style lang="scss">
#selfEmployedForm {
  .ant-radio-wrapper {
    white-space: normal;
  }
  .ant-input-number {
    margin-bottom: 5px;
  }
  background-color: #efefef;
  .wrapper {
    padding: 100px 0;
  }
  .ant-card-body {
    padding-top: 0;
  }
  .pointsCounter {
    background-color: $primary;
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
        padding: 20px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 150px;
        text-align: center;
        flex-shrink: 0;

        span {
          font-weight: 400;
          display: block;
        }
      }

      .question {
        padding: 20px 30px;
        flex-grow: 1;
        display: flex;
        align-items: center;

        .ant-radio-wrapper {
          margin-right: 30px;
        }

        &.vertical-radio {
          .ant-radio-wrapper {
            display: block;
          }
        }

        &.yes-no {
          flex-direction: column;

          & > div {
            width: 100%;
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
        flex-shrink: 0;
      }
    }
  }
}

@media all and (max-width: 1000px) {
  #selfEmployedForm {
    .ant-affix {
      top: 80px !important;
    }
    .pointsCounter {
      h2,
      h3 {
        font-size: 14px;
      }
    }
    .wrapper {
      width: 98vw;
      padding: 30px 0;
    }
    .section {
      .box {
        flex-direction: column;
        .label {
          border-right: none;
          border-bottom: 1px solid #efefef;
          width: 100%;
          justify-content: flex-start;
          align-items: flex-start;
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
          border-top: 1px solid #efefef;
          align-items: flex-start;
        }
      }
    }
  }
}
</style>

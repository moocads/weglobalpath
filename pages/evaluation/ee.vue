<template>
  <div id="eeForm">
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
        <h1>加拿大移民快速通道（EE）评分系统</h1>
        <h2>Points: {{Object.values(totalPoints).reduce((a,b) => a + b) + ageCalc}}</h2>
      </div>
    </header>
    <div class="wrapper">
      <a-card>
        <div class="form">
          <div class="section">
            <div class="box last">
              <div class="label">
                婚姻
              </div>
              <div class="question">
                <a-radio-group v-model="marriage" @change="onChange(marriage)">
                  <a-radio value="single">
                    单身
                  </a-radio>
                  <a-radio value="married">
                    已婚或有伴侣
                  </a-radio>
                </a-radio-group>
              </div>
            </div>
          </div>
          <h3>1、基础信息</h3>
          <div class="section" v-if="marriage === 'married'">
            <div class="box">
              <div class="label">
                年龄
              </div>
              <div class="question">
                <a-input-number v-model="age" :min="1" :max="100"></a-input-number>
              </div>
              <div class="result">
                {{ageCalc}}
              </div>
            </div>
            <div class="box">
              <div class="label">
                学历
              </div>
              <div class="question vertical-radio">
                <a-radio-group v-model="totalPoints.education" >
                  <a-radio :value="0">
                    初中以下
                  </a-radio>
                  <a-radio :value="28">
                    高中
                  </a-radio>
                  <a-radio :value="84">
                    1年大专
                  </a-radio>
                  <a-radio :value="91">
                    2年大专
                  </a-radio>
                  <a-radio :value="112">
                    3年以上大专或本科
                  </a-radio>
                  <a-radio :value="119">
                    双专业 (3年以上 + 1年以上)
                  </a-radio>
                  <a-radio :value="126">
                    硕士学位或专业学位（如医学博士）
                  </a-radio>
                  <a-radio :value="140">
                    博士学位
                  </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{totalPoints.education}}
              </div>
            </div>
          </div>
          <div class="section" v-if="marriage === 'single'">
            <div class="box">
              <div class="label">
                年龄
              </div>
              <div class="question">
                <a-input-number v-model="age" :min="1" :max="100"></a-input-number>
              </div>
              <div class="result">
                {{ageCalc}}
              </div>
            </div>
            <div class="box">
              <div class="label">
                学历
              </div>
              <div class="question vertical-radio">
                <a-radio-group v-model="totalPoints.education" >
                  <a-radio :value="0">
                    初中以下
                  </a-radio>
                  <a-radio :value="30">
                    高中
                  </a-radio>
                  <a-radio :value="90">
                    1年大专
                  </a-radio>
                  <a-radio :value="98">
                    2年大专
                  </a-radio>
                  <a-radio :value="120">
                    3年以上大专或本科
                  </a-radio>
                  <a-radio :value="128">
                    双专业 (3年以上 + 1年以上)
                  </a-radio>
                  <a-radio :value="135">
                    硕士学位或专业学位（如医学博士）
                  </a-radio>
                  <a-radio :value="150">
                    博士学位
                  </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{totalPoints.education}}
              </div>
            </div>
          </div>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marriage: undefined,
      age: undefined,
      totalPoints: {
        education: undefined,
      }
    }
  },
  methods: {
    onChange(item) {
      // console.log(this.ageCalc)
      console.log(item)
    },
  },
  computed: {
    ageCalc: function() {
      if (this.marriage == "married") {
        return (
          this.age == 18 ? 90 :
          this.age == 19 ? 95 :
          this.age > 19 && this.age < 30 ? 100 :
          this.age == 30 ? 95 :
          this.age == 31 ? 90 :
          this.age == 32 ? 85 :
          this.age == 33 ? 80 :
          this.age == 34 ? 75 :
          this.age == 35 ? 70 :
          this.age == 36 ? 65 :
          this.age == 37 ? 60 :
          this.age == 38 ? 55 :
          this.age == 39 ? 50 :
          this.age == 40 ? 45 :
          this.age == 41 ? 35 :
          this.age == 42 ? 25 :
          this.age == 43 ? 15 :
          this.age == 44 ? 5 : 0
        )
      }
      if (this.marriage == "single") {
        return (
          this.age == 18 ? 99 :
          this.age == 19 ? 105 :
          this.age > 19 && this.age < 30 ? 110 :
          this.age == 30 ? 105 :
          this.age == 31 ? 99 :
          this.age == 32 ? 84 :
          this.age == 33 ? 88 :
          this.age == 34 ? 83 :
          this.age == 35 ? 77 :
          this.age == 36 ? 72 :
          this.age == 37 ? 66 :
          this.age == 38 ? 61 :
          this.age == 39 ? 55 :
          this.age == 40 ? 50 :
          this.age == 41 ? 39 :
          this.age == 42 ? 28 :
          this.age == 43 ? 17 :
          this.age == 44 ? 6 : 0
        )
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#eeForm {
  background-color: #efefef;

  .wrapper {
    padding: 100px 0;
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
      justify-content: center;
      align-items: center;
      font-weight: bold;
      width: 150px;
    }

    .question {
      padding: 20px 30px;

      .ant-radio-wrapper {
        margin-right: 30px;
      }

      &.vertical-radio {
        .ant-radio-wrapper {
          display: block;
        }
      }
    }

    .result {
      width: 100px;
    }
  }
}
</style>

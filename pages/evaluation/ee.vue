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
      </div>
    </header>
    <div class="wrapper">
      <a-card>
        <h2>Points: {{subtotal}}</h2>
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
          <br>
          <br>
          <div class="section">
            <h3>1、基础信息</h3>
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
                <a-radio-group v-model="edu" >
                  <a-radio :value="1">
                    初中以下
                  </a-radio>
                  <a-radio :value="2">
                    高中
                  </a-radio>
                  <a-radio :value="3">
                    1年大专
                  </a-radio>
                  <a-radio :value="4">
                    2年大专
                  </a-radio>
                  <a-radio :value="5">
                    3年以上大专或本科
                  </a-radio>
                  <a-radio :value="6">
                    双专业 (3年以上 + 1年以上)
                  </a-radio>
                  <a-radio :value="7">
                    硕士学位或专业学位（如医学博士）
                  </a-radio>
                  <a-radio :value="8">
                    博士学位
                  </a-radio>
                </a-radio-group>
              </div>
              <div class="result">
                {{eduCalc}}
              </div>
            </div>
            <div class="box last">
              <div class="label">工作经验</div>
              <div class="question">
                加拿大工作经验（可以不连续）<a-input-number v-model="exp"></a-input-number> 年
              </div>
              <div class="result">
                {{expCalc}}
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
      marriage: "single",
      age: 0,
      exp: 0,
      edu: 0,
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
      this.age = Math.round(this.age)
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
      } else if (this.marriage == "single") {
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
      } else {
        return 0
      }
    },
    eduCalc: function() {
      this.edu = Math.round(this.edu)
      if (this.marriage == "married") {
        return (
          this.edu == 1 ? 0 :
          this.edu == 2 ? 28 :
          this.edu == 3 ? 84 :
          this.edu == 4 ? 91 :
          this.edu == 5 ? 112 :
          this.edu == 6 ? 119 :
          this.edu == 7 ? 126 :
          this.edu == 8 ? 140 : 0
        )
      } else if (this.marriage == "single") {
        return (
          this.edu == 1 ? 0 :
          this.edu == 2 ? 30 :
          this.edu == 3 ? 90 :
          this.edu == 4 ? 98 :
          this.edu == 5 ? 120 :
          this.edu == 6 ? 128 :
          this.edu == 7 ? 135 :
          this.edu == 8 ? 150 : 0
        )
      } else {
        return 0
      }
    },
    expCalc: function() {
      this.exp = Math.round(this.exp)
      if (this.marriage == "married") {
        return (
          this.exp < 1 ? 0 :
          this.exp == 1 ? 35 :
          this.exp == 2 ? 46 :
          this.exp == 3 ? 56 :
          this.exp == 4 ? 63 :
          this.exp > 5 ? 70 : 0
        )
      } else if (this.marriage == "single") {
        return (
          this.exp < 1 ? 0 :
          this.exp == 1 ? 40 :
          this.exp == 2 ? 53 :
          this.exp == 3 ? 64 :
          this.exp == 4 ? 72 :
          this.exp > 5 ? 80 : 0
        )
      } else {
        return 0
      }
    },
    subtotal: function() {
      return (
        this.ageCalc + this.eduCalc + this.expCalc
      )
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
      flex-grow: 1;

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
      padding: 20px 30px;
      width: 100px;
      border-left: 1px solid #efefef;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

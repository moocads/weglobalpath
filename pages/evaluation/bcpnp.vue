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
        <h1>加拿大移民快速通道（EE）评分系统</h1>
      </div>
    </header>
    <div class="wrapper">
      <a-card>
        <div class="form">
          <section class="section">
            <div class="box">
              <div class="label">工作类别</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="workCategory">
                  <a-radio :value="1"> NOC0/A类工作 </a-radio>
                  <a-radio :value="2"> B类工作 </a-radio>
                  <a-radio :value="3"> C类工作 </a-radio>
                  <a-radio :value="4"> D类工作 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workCategoryCalc }}</div>
            </div>
            <div class="box">
              <div class="label">工作类别额外加分</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="workCategoryBonus">
                  <a-radio :value="1"> 00开头的高级管理类工作 </a-radio>
                  <a-radio :value="2">
                    BC省2018-2028劳动力市场前景签一百名职位
                  </a-radio>
                  <a-radio :value="3">
                    目前全职为BC省雇主工作，每周至少工作30小时，并且工作的职位与你申请BC省提名用的移民职业NOC代码相同
                  </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workCategoryBonusCalc }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">薪资</div>
              <div class="question vertical-radio">
                <a-select
                  v-model="salary"
                  style="width: 200px"
                  default-value="1"
                >
                  //total 38
                  <a-select-option :value="1"> 低于$25,000 </a-select-option>
                  <a-select-option :value="2">
                    $25,000-$26,249
                  </a-select-option>
                  <a-select-option :value="3">
                    $26,250-$27,499
                  </a-select-option>
                  <a-select-option :value="4">
                    $27,500-$28,749
                  </a-select-option>
                  <a-select-option :value="5">
                    $28,750-$29,999
                  </a-select-option>
                  <a-select-option :value="6">
                    $30,000-$31,249
                  </a-select-option>
                  <a-select-option :value="7">
                    $31,250-$32,499
                  </a-select-option>
                  <a-select-option :value="8">
                    $32,500-$33,749
                  </a-select-option>
                  <a-select-option :value="9">
                    $33,750-$34,999
                  </a-select-option>
                  <a-select-option :value="10">
                    $35,000-$36,249
                  </a-select-option>
                  <a-select-option :value="11">
                    $36,250-$37,499
                  </a-select-option>
                  <a-select-option :value="12">
                    $37,500-$38,749
                  </a-select-option>
                  <a-select-option :value="13">
                    $38,750-$39,999
                  </a-select-option>
                  <a-select-option :value="14">
                    $40,000-$42,499
                  </a-select-option>
                  <a-select-option :value="15">
                    $42,500-$44,999
                  </a-select-option>
                  <a-select-option :value="16">
                    $45,000-$47,499
                  </a-select-option>
                  <a-select-option :value="17">
                    $47,500-$49,999
                  </a-select-option>
                  <a-select-option :value="18">
                    $50,000-$52,499
                  </a-select-option>
                  <a-select-option :value="19">
                    $52,500-$54,999
                  </a-select-option>
                  <a-select-option :value="20">
                    $55,000-$57,499
                  </a-select-option>
                  <a-select-option :value="21">
                    $57,500-$59,999
                  </a-select-option>
                  <a-select-option :value="22">
                    $60,000-$62,499
                  </a-select-option>
                  <a-select-option :value="23">
                    $62,500-$64,999
                  </a-select-option>
                  <a-select-option :value="24">
                    $65,000-$67,499
                  </a-select-option>
                  <a-select-option :value="25">
                    $67,500-$69,999
                  </a-select-option>
                  <a-select-option :value="26">
                    $70,000-$72,499
                  </a-select-option>
                  <a-select-option :value="27">
                    $72,500-$74,999
                  </a-select-option>
                  <a-select-option :value="28">
                    $75,000-$77,499
                  </a-select-option>
                  <a-select-option :value="29">
                    $77,500-$79,999
                  </a-select-option>
                  <a-select-option :value="30">
                    $80,000-$82,499
                  </a-select-option>
                  <a-select-option :value="31">
                    $82,500-$84,999
                  </a-select-option>
                  <a-select-option :value="32">
                    $85,000-$87,499
                  </a-select-option>
                  <a-select-option :value="33">
                    $87,500-$89,999
                  </a-select-option>
                  <a-select-option :value="34">
                    $90,000-$92,499
                  </a-select-option>
                  <a-select-option :value="35">
                    $92,500-$94,999
                  </a-select-option>
                  <a-select-option :value="36">
                    $95,000-$97,499
                  </a-select-option>
                  <a-select-option :value="37">
                    $97,500-$99,999
                  </a-select-option>
                  <a-select-option :value="38">
                    $100,000 及以上
                  </a-select-option>
                </a-select>
              </div>
              <div class="result">{{ salaryCalc }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">工作地区</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="workRegion">
                  <a-radio :value="1"
                    >Stikine, Central Coast, Northern Rockies, Mount Waddington,
                    Skeena-Queen Charlotte, Powell River, Sunshine Coast,
                    Kootenay-Boundary, AlberniClayoquot
                  </a-radio>
                  <a-radio :value="2">
                    Kitimat-Stikine, Bulkley-Nechako, Squamish-Lillooet,
                    Strathcona, ColumbiaShuswap, East Kootenay
                  </a-radio>
                  <a-radio :value="3">
                    Peace River, Comox Valley, Cariboo, Central Kootenay
                  </a-radio>
                  <a-radio :value="4">
                    Okanagan-Similkameen, Cowichan Valley, North Okanagan,
                    Fraser-Fort George
                  </a-radio>
                  <a-radio :value="5">
                    Thompson-Nicola, Nanaimo, Central Okanagan
                  </a-radio>
                  <a-radio :value="6"> Capital, Fraser Valley </a-radio>
                  <a-radio :value="7"> Greater Vancouver </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workRegionCalc }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">学历</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="edu">
                  <a-radio :value="1">硕士或博士学位 </a-radio>
                  <a-radio :value="2"> 研究生 </a-radio>
                  <a-radio :value="3"> 本科学士 </a-radio>
                  <a-radio :value="4"> 技工类大专或证书 </a-radio>
                  <a-radio :value="5">
                    Thompson-Nicola, Nanaimo, Central Okanagan
                  </a-radio>
                  <a-radio :value="6"> Capital, Fraser Valley </a-radio>
                  <a-radio :value="7"> Greater Vancouver </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workRegionCalc }}</div>
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
      workCategory: 0,
      workCategoryBonus: 0,
      salary: 0,
      workRegion: 0,
    };
  },
  computed: {
    workCategoryCalc: function () {
      switch (this.workCategory) {
        case 1:
          return 25;
        case 2:
          return 10;
        case 3:
        case 4:
          return 5;
      }
    },
    workCategoryBonusCalc: function () {
      switch (this.workCategoryBonus) {
        case 1:
          return 15;
        case 2:
          return 10;
        case 3:
          return 10;
      }
    },
    salaryCalc: function () {
      for (let i = 2; i < 38; i++) {
        switch (this.salary) {
          case 1:
            return 0;
          case i:
            return i + 1;
          case 38:
            return 50;
        }
      }
    },
    workRegionCalc: function () {
      switch (this.workRegion) {
        case 1:
          return 10;
        case 2:
          return 8;
        case 3:
          return 6;
        case 4:
          return 4;
        case 5:
        case 6:
          return 2;
        case 7:
          return 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#bcpnp-evaluation-form {
  background-color: #efefef;

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
        padding: 20px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 150px;
        text-align: center;
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
  }
}
</style>

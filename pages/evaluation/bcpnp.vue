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
        <h1>不列颠哥伦比亚省省提名(BCPNP)评分表</h1>
      </div>
    </header>
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item><NuxtLink to="/">首页</NuxtLink></a-breadcrumb-item>
        <a-breadcrumb-item
          ><NuxtLink to="/evaluation">移民评分</NuxtLink></a-breadcrumb-item
        >
        <a-breadcrumb-item
          >不列颠哥伦比亚省省提名(BCPNP)评分表</a-breadcrumb-item
        >
      </a-breadcrumb>
      <br />
      <br />
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
              <div class="label">工作类别</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="workCategory">
                  <a-radio :value="1"> NOC 0/A类工作 </a-radio>
                  <a-radio :value="2"> NOC B类工作 </a-radio>
                  <a-radio :value="3"> NOC C类工作 </a-radio>
                  <a-radio :value="4"> NOC D类工作 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workCategoryCalc }}</div>
            </div>
            <div class="box">
              <div class="label">工作类别<br />（额外加分）</div>
              <div class="question vertical-radio">
                <a-checkbox-group
                  v-model="workCategoryBonus"
                  @change="onChange"
                  style="display: flex; flex-direction: column"
                >
                  <a-checkbox :value="1">00开头的高级管理类工作</a-checkbox>
                  <!-- <a-checkbox :value="2"
                    >BC省2018-2028劳动力市场前景签一百名职位</a-checkbox
                  > -->
                  <a-checkbox :value="3"
                    >目前全职为BC省雇主工作，每周至少工作30小时，并且工作的职位与你申请BC省提名用的移民职业NOC代码相同</a-checkbox
                  >
                </a-checkbox-group>
                <!-- <a-radio-group v-model="workCategoryBonus">
                  <a-radio :value="1"> 00开头的高级管理类工作 </a-radio>
                  <a-radio :value="2">
                    BC省2018-2028劳动力市场前景签一百名职位
                  </a-radio>
                  <a-radio :value="3">
                    目前全职为BC省雇主工作，每周至少工作30小时，并且工作的职位与你申请BC省提名用的移民职业NOC代码相同
                  </a-radio>
                </a-radio-group> -->
              </div>
              <div class="result">{{ this.workCategoryBonusResult }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">工作经验</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="workExp">
                  <a-radio :value="1">5年以上 </a-radio>
                  <a-radio :value="2">4-5年 </a-radio>
                  <a-radio :value="3">3-4年 </a-radio>
                  <a-radio :value="4">2-3年 </a-radio>
                  <a-radio :value="5">1-2年 </a-radio>
                  <a-radio :value="6">不到1年 </a-radio>
                  <a-radio :value="7">无经验 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workExpCalc }}</div>
            </div>
            <div class="box last">
              <div class="label">工作经验<br />（额外加分）</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="workExpBonus">
                  <p>至少1年加拿大工作经验</p>
                  <a-radio :value="1">是 </a-radio>
                  <a-radio :value="2">否 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workExpBonusCalc }}</div>
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
                  <a-radio :value="2"
                    >Kitimat-Stikine, Bulkley-Nechako, Squamish-Lillooet,
                    Strathcona, ColumbiaShuswap, East Kootenay
                  </a-radio>
                  <a-radio :value="3"
                    >Peace River, Comox Valley, Cariboo, Central Kootenay
                  </a-radio>
                  <a-radio :value="4"
                    >Okanagan-Similkameen, Cowichan Valley, North Okanagan,
                    Fraser-Fort George
                  </a-radio>
                  <a-radio :value="5"
                    >Thompson-Nicola, Nanaimo, Central Okanagan
                  </a-radio>
                  <a-radio :value="6">Capital, Fraser Valley </a-radio>
                  <a-radio :value="7">Greater Vancouver </a-radio>
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
                  <a-radio :value="2">研究生 </a-radio>
                  <a-radio :value="3">本科学士 </a-radio>
                  <a-radio :value="4">技工类大专或证书 </a-radio>
                  <a-radio :value="5">副学士学位 </a-radio>
                  <a-radio :value="6">非技工类大专或证书 </a-radio>
                  <a-radio :value="7">高中及以下 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduCalc }}</div>
            </div>
            <div class="box last">
              <div class="label">学历<br />（额外加分）</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="eduBonus">
                  <a-radio :value="1">在BC完成高中以及以上学历 </a-radio>
                  <a-radio :value="2"
                    >在加拿大其他省完成高中及以上学历
                  </a-radio>
                  <a-radio :value="3">在指定机构完成ECA学历认证评估 </a-radio>
                  <a-radio :value="4"
                    >成功完成行业培训机构认证的行业证书
                  </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduBonusCalc }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">语言</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="language">
                  <a-radio :value="1">CLB 10+ </a-radio>
                  <a-radio :value="2">CLB 9</a-radio>
                  <a-radio :value="3">CLB 8</a-radio>
                  <a-radio :value="4">CLB 7</a-radio>
                  <a-radio :value="5">CLB 6</a-radio>
                  <a-radio :value="6">CLB 5</a-radio>
                  <a-radio :value="7">CLB 4</a-radio>
                  <a-radio :value="8">CLB 4以下</a-radio>
                  <a-radio :value="9">无成绩</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ languageCalc }}</div>
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
      title: `加拿大移民 | 不列颠哥伦比亚省省提名(BCPNP)评分表 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 不列颠哥伦比亚省省提名(BCPNP)评分表 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  data() {
    return {
      workCategory: 0,
      workCategoryBonus: [],
      workCategoryBonusResult: 0,
      salary: 0,
      workRegion: 0,
      edu: 0,
      eduBonus: 0,
      workExp: 0,
      workExpBonus: 0,
      language: 0,
    };
  },
  methods: {
    onChange() {
      let pts1,
        pts2,
        pts3 = 0;
      if (this.workCategoryBonus.includes(1)) {
        pts1 = 15;
      } else {
        pts1 = 0;
      }
      if (this.workCategoryBonus.includes(2)) {
        pts2 = 10;
      } else {
        pts2 = 0;
      }
      if (this.workCategoryBonus.includes(3)) {
        pts3 = 10;
      } else {
        pts3 = 0;
      }
      return (this.workCategoryBonusResult = pts1 + pts2 + pts3);
    },
  },
  computed: {
    workCategoryCalc: function () {
      switch (this.workCategory) {
        case 0:
          return 0;
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
        case 0:
          return 0;
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
          case 0:
            return 0;
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
        case 6:
          return 2;
        case 7:
          return 0;
      }
    },
    eduCalc: function () {
      switch (this.edu) {
        case 0:
          return 0;
        case 1:
          return 17;
        case 2:
        case 3:
        case 4:
          return 11;
        case 5:
          return 4;
        case 6:
          return 2;
        case 7:
          return 0;
      }
    },
    eduBonusCalc: function () {
      switch (this.eduBonus) {
        case 0:
          return 0;
        case 1:
          return 8;
        case 2:
          return 6;
        case 3:
        case 4:
          return 4;
      }
    },
    workExpCalc: function () {
      switch (this.workExp) {
        case 0:
          return 0;
        case 1:
          return 15;
        case 2:
          return 12;
        case 3:
          return 9;
        case 4:
          return 6;
        case 5:
          return 3;
        case 6:
          return 1;
        case 7:
          return 0;
      }
    },
    workExpBonusCalc: function () {
      switch (this.workExpBonus) {
        case 0:
          return 0;
        case 1:
          return 10;
        case 2:
          return 0;
      }
    },
    languageCalc: function () {
      for (let i = 1; i < 8; i++) {
        let pts = 30;
        switch (this.language) {
          case 0:
            return 0;
          case i:
            return pts - (i - 1) * 4;
          case 8:
          case 9:
            return 0;
        }
      }
    },
    totalPoints: function () {
      return (
        this.workCategoryCalc +
        // this.workCategoryBonusCalc +
        this.salaryCalc +
        this.workRegionCalc +
        this.eduCalc +
        this.eduBonusCalc +
        this.workExpCalc +
        this.workExpBonusCalc +
        this.languageCalc +
        this.workCategoryBonusResult
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
  .vertical-radio .ant-checkbox-wrapper {
    margin-left: 0;
  }
}
@media all and (max-width: 1000px) {
  #bcpnp-evaluation-form {
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
        padding: 20px 30px;
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

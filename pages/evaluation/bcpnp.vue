<template>
  <div id="bcpnp-evaluation-form" class="evaluation-wrap">
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
              <div class="label">工作经验<br />（额外加分-可多选）</div>
              <div class="question vertical-radio">
                <a-checkbox-group
                  v-model="workExpBonus"
                  @change="onChange"
                  style="display: flex; flex-direction: column"
                >
                  <a-checkbox :value="1">
                    至少1年加拿大境内工作经验
                  </a-checkbox>
                  <a-checkbox :value="2">
                    正在BC省的雇主处全职带薪工作
                  </a-checkbox>
                </a-checkbox-group>
              </div>
              <div class="result">{{ workExpBonusResult }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">时薪</div>
              <div class="question vertical-radio">
                <a-select
                  v-model="salary"
                  style="width: 200px"
                  default-value="16"
                >
                  <a-select-option :value="15"> 低于16 </a-select-option>
                  <a-select-option :value="i" v-for="i in hourArr" :key="i">
                    {{ `$${i}.00 - $${i}.99` }}
                  </a-select-option>
                  <a-select-option :value="70"> 高于$70</a-select-option>
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
                  <a-radio :value="1">大温地区 </a-radio>
                  <a-radio :value="2"
                    >Squamish, Abbotsford, Agassiz, Mission and Chilliwack
                    （斯阔米什、阿伯茨福德、阿格西、米逊和奇利瓦克）
                  </a-radio>
                  <a-radio :value="3">上述以外的BC地区 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workRegionCalc }}</div>
            </div>
            <div class="box">
              <div class="label">额外加分</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="workRegionBonus">
                  <a-radio :value="1"
                    >大温地区以外工作过
                    （申请省提名前五年内全职带新工作一年以上）
                  </a-radio>
                  <a-radio :value="2"
                    >在大温地区以外的公立高等教育机构学习过
                    （申请省提名前3年内）
                  </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ workRegionBonusCalc }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">学历</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="edu">
                  <a-radio :value="1">博士学位 </a-radio>
                  <a-radio :value="2">硕士学位 </a-radio>
                  <a-radio :value="3">研究生文凭/证书 </a-radio>
                  <a-radio :value="4">学士学位 </a-radio>
                  <a-radio :value="5">副学士学位</a-radio>
                  <a-radio :value="6">大专文凭 </a-radio>
                  <a-radio :value="7">高中或以下 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduCalc }}</div>
            </div>
            <div class="box">
              <div class="label">学历<br />（额外加分）</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="eduBonus">
                  <a-radio :value="1">在BC地区完成的大专文凭 </a-radio>
                  <a-radio :value="2"
                    >加拿大境内、BC地区以外完成的大专文凭
                  </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduBonusCalc }}</div>
            </div>
            <div class="box">
              <div class="label">符合要求的专业认证<br />（额外加分）</div>
              <div class="question vertical-radio">
                <p>BC省符合符合要求的专业认证</p>
                <a-radio-group v-model="eduCertificationBonus">
                  <a-radio :value="1">有 </a-radio>
                  <a-radio :value="2">无 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ eduCertificationBonusCalc }}</div>
            </div>
          </section>
          <section class="section">
            <div class="box">
              <div class="label">语言</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="language">
                  <a-radio :value="1">CLB 9+ </a-radio>
                  <a-radio :value="2">CLB 8</a-radio>
                  <a-radio :value="3">CLB 7</a-radio>
                  <a-radio :value="4">CLB 6</a-radio>
                  <a-radio :value="5">CLB 5</a-radio>
                  <a-radio :value="6">CLB 4</a-radio>
                  <a-radio :value="7">CLB 4以下或无成绩</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ languageCalc }}</div>
            </div>
            <div class="box">
              <div class="label">语言<br />（额外加分）</div>
              <div class="question vertical-radio">
                <p>提供英法双语成绩</p>
                <a-radio-group v-model="langBonus">
                  <a-radio :value="1">有 </a-radio>
                  <a-radio :value="2">无 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ langBonusCalc }}</div>
            </div>
          </section>
        </div>
        <a-affix :offset-top="0">
          <div class="pointsCounter">
            <h2>
              您目前评分为：<strong>{{ totalPoints }}分</strong>
            </h2>
          </div>
        </a-affix>
      </a-card>
      <NuxtLink to="/evaluation" class="back-btn" exact style="margintop: 20px">
        <img src="/img/icons/back-btn.png" alt="" />
        <span>返回上一页</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
var _ = require("lodash");
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
      salary: 0,
      workRegion: 0,
      workRegionBonus: 0,
      edu: 0,
      eduBonus: 0,
      eduCertificationBonus: 0,
      workExp: 0,
      workExpBonus: [],
      workExpBonusResult: 0,
      language: 0,
      langBonus: 0,
      hourArr: _.range(16, 70),
    };
  },
  async asyncData({ $axios }) {
    const scores = await $axios.$get(`/bcpnp-scores`, {
      params: {
        _sort: "published_at",
      },
      pagination: {
        pageSize: 3,
      },
    });
    return { scores };
  },
  methods: {
    onChange() {
      let pts1,
        pts2 = 0;
      if (this.workExpBonus.includes(1)) {
        pts1 = 10;
      } else {
        pts1 = 0;
      }
      if (this.workExpBonus.includes(2)) {
        pts2 = 10;
      } else {
        pts2 = 0;
      }

      return (this.workExpBonusResult = pts1 + pts2);
    },
  },
  computed: {
    salaryCalc: function () {
      for (let i = 15; i < 70; i++) {
        switch (this.salary) {
          case 15:
            return 0;
          case i:
            return i - 15;
          case 70:
            return 55;
        }
      }
      return 0;
    },
    workRegionCalc: function () {
      switch (this.workRegion) {
        case 1:
          return 0;
        case 2:
          return 5;
        case 3:
          return 15;
        default:
          return 0;
      }
    },
    workRegionBonusCalc: function () {
      switch (this.workRegionBonus) {
        case 1:
          return 10;
        case 2:
          return 10;
        default:
          return 0;
      }
    },
    eduCalc: function () {
      switch (this.edu) {
        case 1:
          return 27;
        case 2:
          return 22;
        case 3:
        case 4:
          return 15;
        case 5:
        case 6:
          return 5;
        default:
          return 0;
      }
    },
    eduBonusCalc: function () {
      switch (this.eduBonus) {
        case 1:
          return 8;
        case 2:
          return 6;
        default:
          return 0;
      }
    },
    eduCertificationBonusCalc: function () {
      switch (this.eduCertificationBonus) {
        case 1:
          return 5;
        default:
          return 0;
      }
    },
    workExpCalc: function () {
      switch (this.workExp) {
        case 1:
          return 20;
        case 2:
          return 16;
        case 3:
          return 12;
        case 4:
          return 8;
        case 5:
          return 4;
        case 6:
          return 1;
        default:
          return 0;
      }
    },
    languageCalc: function () {
      switch (this.language) {
        case 1:
          return 30;
        case 2:
          return 25;
        case 3:
          return 20;
        case 4:
          return 15;
        case 5:
          return 10;
        case 6:
          return 5;
        case 7:
          return 0;
        default:
          return 0;
      }
    },
    langBonusCalc: function () {
      switch (this.langBonus) {
        case 1:
          return 10;
        default:
          return 0;
      }
    },
    totalPoints: function () {
      let workTotal,
        langTotal,
        eduTotal,
        workRegionTotal = 0;
      // 工作经验总得分 不超过40分
      workTotal = this.workExpCalc + this.workExpBonusResult;
      if (workTotal >= 40) {
        workTotal = 40;
      } else {
        workTotal = workTotal;
      }
      // 教育背景总得分 不超过40分
      eduTotal =
        this.eduCalc + this.eduBonusCalc + this.eduCertificationBonusCalc;
      if (eduTotal >= 40) {
        eduTotal = 40;
      } else {
        eduTotal = eduTotal;
      }
      // 语言能力总得分 不超过40分
      langTotal = this.languageCalc + this.langBonusCalc;
      if (langTotal >= 40) {
        langTotal = 40;
      } else {
        langTotal = langTotal;
      }
      // 工作地区总得分 不超过25分
      workRegionTotal = this.workRegionCalc + this.workRegionBonusCalc;
      if (workRegionTotal >= 25) {
        workRegionTotal = 25;
      } else {
        workRegionTotal = workRegionTotal;
      }
      let totalPoints =
        workTotal + eduTotal + langTotal + workRegionTotal + this.salaryCalc;
      return totalPoints;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/evaluation.scss";
</style>

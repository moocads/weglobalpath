<template>
  <div id="ontario-employee-evaluation-form" class="evaluation-wrap">
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
        <h1>安省提名 海外劳工 EOI评分系统</h1>
      </div>
    </header>
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item><NuxtLink to="/">首页</NuxtLink></a-breadcrumb-item>
        <a-breadcrumb-item
          ><NuxtLink to="/evaluation">移民评分</NuxtLink></a-breadcrumb-item
        >
        <a-breadcrumb-item>安省提名 海外劳工 EOI评分系统</a-breadcrumb-item>
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
            <h3>1.雇佣/劳动力市场要素</h3>
            <!-- Job Offer:NOC TEER Category 工作录用函分类 -->
            <div class="box">
              <div class="label">工作录用函分类</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobTeer">
                  <a-radio :value="1">NOC TEER 0 或 1 类</a-radio>
                  <a-radio :value="2">NOC TEER 2 或 3 类</a-radio>
                  <a-radio :value="3">NOC TEER 4 类</a-radio>
                  <a-radio :value="4">NOC TEER 5 类</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobTeerCalc }}</div>
            </div>
            <!-- Job Offer: NOC Occupational Category  工作职业类别 -->
            <div class="box">
              <div class="label">工作职业类别</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobType">
                  <a-radio :value="1">工作岗位以0/2/3开头</a-radio>
                  <a-radio :value="2">工作岗位以7开头</a-radio>
                  <a-radio :value="3">工作岗位以1/9开头</a-radio>
                  <a-radio :value="4">工作岗位以4/8开头</a-radio>
                  <a-radio :value="5">工作岗位以5/6开头</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobTypeCalc }}</div>
            </div>
            <!-- Job Offer: Wage  时薪 -->
            <div class="box">
              <div class="label">时薪</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobWage">
                  <a-radio :value="1">时薪40加币以上</a-radio>
                  <a-radio :value="2">时薪35至39.99加币</a-radio>
                  <a-radio :value="3">时薪30至34.99加币</a-radio>
                  <a-radio :value="4">时薪25至29.99加币</a-radio>
                  <a-radio :value="5">时薪20至24.99加币</a-radio>
                  <a-radio :value="6">时薪20加币以下</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobWageCalc }}</div>
            </div>
            <!-- Work Permit Status 工作许可状态 -->
            <div class="box">
              <div class="label">工作许可状态</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobWorkPermit">
                  <a-radio :value="1">持有效工签</a-radio>
                  <a-radio :value="2">无有效工签</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobWorkPermitCalc }}</div>
            </div>
            <!-- 为担保雇主工作时长 -->
            <div class="box">
              <div class="label">为担保雇主<br />工作时长</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobTenureForEmployer">
                  <a-radio :value="1">为提供担保的雇主工作超过6个月 </a-radio>
                  <a-radio :value="2"
                    >为提供担保的雇主工作不满6个月或目前已离职
                  </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobTenureForEmployerCalc }}</div>
            </div>
            <!-- 加拿大工作经验薪资历史 -->
            <div class="box last">
              <div class="label">加拿大工作经验<br />薪资历史</div>
              <div class="question vertical-radio">
                <p>根据加拿大税务局CRA纳税记录，过往5年内</p>
                <a-radio-group v-model="jobCanadaExp">
                  <a-radio :value="1">某一年年薪4万加币以上 </a-radio>
                  <a-radio :value="2">年薪不满4万加币 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobCanadaExpCalc }}</div>
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
            <h3>2.语言</h3>
            <div class="box">
              <div class="label">语言水平</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="lang">
                  <a-radio :value="1">CLB9+ （包含9） </a-radio>
                  <a-radio :value="2">CLB8 </a-radio>
                  <a-radio :value="3">CLB7 </a-radio>
                  <a-radio :value="4">CLB6及以下 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ langCalc }}</div>
            </div>
            <div class="box last">
              <div class="label">多语言水平</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="biLang">
                  <a-radio :value="1">两种语言（英语和法语） </a-radio>
                  <a-radio :value="2">一种语言（英语和法语任一种）</a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ biLangCalc }}</div>
            </div>
          </section>
          <section class="section">
            <h3>3.区域性</h3>
            <div class="box">
              <div class="label">工作地点</div>
              <div class="question vertical-radio">
                <a-radio-group v-model="jobRegion">
                  <a-radio :value="1">安省北部</a-radio>
                  <a-radio :value="2">除安省北部外的非大多伦多地区 </a-radio>
                  <a-radio :value="3"
                    >大多伦多地区以内（不包含多伦多）
                  </a-radio>
                  <a-radio :value="4">多伦多地区 </a-radio>
                </a-radio-group>
              </div>
              <div class="result">{{ jobRegionCalc }}</div>
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
export default {
  head() {
    return {
      title: `加拿大移民 | 安省提名 海外劳工 EOI评分系统 | 寰球嘉途`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 安省提名 海外劳工 EOI评分系统 | 寰球嘉途`,
        },
      ],
    };
  },
  data() {
    return {
      jobTeer: 0,
      jobType: 0,
      jobWage: 0,
      jobWorkPermit: 0,
      jobTenureForEmployer: 0,
      jobCanadaExp: 0,
      lang: 0,
      biLang: 0,
      jobRegion: 0,
    };
  },
  async asyncData({ $axios }) {
    const scores = await $axios.$get(`/scores-oinp-works`, {
      params: {
        _sort: "published_at:desc",
        _limit: 3,
      },
    });
    return { scores };
  },
  computed: {
    jobTeerCalc: function () {
      switch (this.jobTeer) {
        case 1:
          return 10;
        case 2:
          return 8;
        default:
          return 0;
      }
    },
    jobTypeCalc: function () {
      switch (this.jobType) {
        case 1:
          return 10;
        case 2:
          return 7;
        case 3:
          return 5;
        case 4:
          return 4;
        case 5:
          return 3;
        default:
          return 0;
      }
    },
    jobWageCalc: function () {
      switch (this.jobWage) {
        case 1:
          return 10;
        case 2:
          return 8;
        case 3:
          return 7;
        case 4:
          return 6;
        case 5:
          return 5;
        default:
          return 0;
      }
    },
    jobWorkPermitCalc: function () {
      switch (this.jobWorkPermit) {
        case 1:
          return 10;
        default:
          return 0;
      }
    },
    jobTenureForEmployerCalc: function () {
      switch (this.jobTenureForEmployer) {
        case 1:
          return 3;
        default:
          return 0;
      }
    },
    jobCanadaExpCalc: function () {
      switch (this.jobCanadaExp) {
        case 1:
          return 3;
        default:
          return 0;
      }
    },
    langCalc: function () {
      switch (this.lang) {
        case 1:
          return 10;
        case 2:
          return 6;
        case 3:
          return 4;
        default:
          return 0;
      }
    },
    biLangCalc: function () {
      switch (this.biLang) {
        case 1:
          return 10;
        case 2:
          return 5;
        default:
          return 0;
      }
    },
    jobRegionCalc: function () {
      switch (this.jobRegion) {
        case 1:
          return 10;
        case 2:
          return 8;
        case 3:
          return 3;
        default:
          return 0;
      }
    },
    totalPoints: function () {
      return (
        this.jobTeerCalc +
        this.jobTypeCalc +
        this.jobWageCalc +
        this.jobWorkPermitCalc +
        this.jobTenureForEmployerCalc +
        this.jobCanadaExpCalc +
        this.langCalc +
        this.biLangCalc +
        this.jobRegionCalc
      );
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/evaluation.scss";
</style>

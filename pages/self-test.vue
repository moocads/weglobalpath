<template>
  <div>
    <div class="wrapper">
      <h1>自测系统</h1>
      <div>
        <label for="">age</label>
        <a-input-number v-model="age" :min="1" :max="100" />
      </div>
      <div>
        <label for="">edu</label>
        <a-select v-model="edu" style="width: 200px">
          <a-select-option value="0"> 高中及以下 </a-select-option>
          <a-select-option value="1"> 大专 </a-select-option>
          <a-select-option value="2"> 本科 </a-select-option>
          <a-select-option value="3"> 硕士 </a-select-option>
          <a-select-option value="4"> 博士 </a-select-option>
        </a-select>
        {{ edu }}
      </div>
      <div>
        <label for="">eng</label>
        <a-select v-model="firstLang" style="width: 200px">
          <a-select-option value="none"> 完全不会 </a-select-option>
          <a-select-option value="lvl34"> 雅思3-4分 </a-select-option>
          <a-select-option value="lvl5"> 雅思5分 </a-select-option>
          <a-select-option value="lvl6"> 雅思6分 </a-select-option>
          <a-select-option value="lvl7"> 雅思7分以上 </a-select-option>
        </a-select>
        {{ firstLang }}
      </div>
      <div>
        <label for="">job</label>
        <a-select v-model="job" style="width: 300px">
          <a-select-option value="job1">
            计算机／互联网／通信／电子
          </a-select-option>
          <a-select-option value="job2">销售／客服／技术支持</a-select-option>
          <a-select-option value="job3">会计／金融／银行／保险</a-select-option>
          <a-select-option value="job4">生产／运营／采购／物料</a-select-option>
          <a-select-option value="job5">生物／制药／科研</a-select-option>
          <a-select-option value="job6">医疗／护理</a-select-option>
          <a-select-option value="job7">市场／广告／影视媒体</a-select-option>
          <a-select-option value="job8"
            >文学艺术／设计师／体育从业者</a-select-option
          >
          <a-select-option value="job9">建筑／工程／房地产 </a-select-option>
          <a-select-option value="job10">人力资源／行政／出纳</a-select-option>
          <a-select-option value="job11"
            >咨询／法律／教育／科研</a-select-option
          >
          <a-select-option value="job12">农业／服务业 </a-select-option>
          <a-select-option value="job13">公务员／学生／其他</a-select-option>
        </a-select>
        {{ job }}
      </div>
      <div>
        <label for="">title</label>
        <a-select v-model="title" style="width: 300px">
          <a-select-option value="nonManager"> 非管理 </a-select-option>
          <a-select-option value="manager"> 管理 </a-select-option>
          <a-select-option value="selfEmployment"> 自雇 </a-select-option>
          <a-select-option value="other"> 其他 </a-select-option>
        </a-select>
        {{ title }}
      </div>
      <div>
        <label for="">region</label>
        <a-select v-model="region" style="width: 300px">
          <a-select-option value="ontario">安大略省</a-select-option>
          <a-select-option value="manitoba">曼尼托巴省</a-select-option>
          <a-select-option value="pei">爱德华王子岛</a-select-option>
          <a-select-option value="newfoundland">纽芬兰省</a-select-option>
          <a-select-option value="bc">BC省</a-select-option>
          <a-select-option value="alberta">阿尔伯塔省</a-select-option>
          <a-select-option value="saskatchewan">萨斯喀彻温省</a-select-option>
          <a-select-option value="newBrunswick">新不伦瑞克省</a-select-option>
          <a-select-option value="novaScotia">新斯科舍省</a-select-option>
          <a-select-option value="quebec">魁北克省</a-select-option>
        </a-select>
        {{ region }}
      </div>
      <div>
        <label for="">purpose</label>
        <a-select v-model="purpose" style="width: 300px">
          <a-select-option value="childrenEdu">子女教育</a-select-option>
          <a-select-option value="workStudy">工作/教育</a-select-option>
          <a-select-option value="investment">投资置业</a-select-option>
          <a-select-option value="living">居住环境</a-select-option>
        </a-select>
        {{ purpose }}
      </div>
      {{ recommendProgram }}
    </div>
  </div>
</template>

<script>
var _ = require("lodash");

export default {
  data() {
    return {
      age: "",
      edu: "",
      firstLang: "",
      job: "",
      title: "",
      region: "",
      purpose: "",
      recommend: [],
      jobResult: [],
      ageResult: [],
      eduResult: [],
      firstLangResult: [],
      titleResult: [],
    };
  },
  methods: {
    jobSelection: function () {
      if (this.job === "job1") {
        this.jobResult = ["安省雇主担保", "BC省雇主担保", "全球人才计划"];
      }
      if (this.job === "job2") {
        this.jobResult = ["安省雇主担保", "BC省雇主担保", "快速移民直通车"];
      }
      if (this.job === "job3") {
        this.jobResult = ["安省雇主担保", "快速移民直通车", "曼省留学移民"];
      }
      if (this.job === "job4") {
        this.jobResult = ["安省雇主担保", "BC省雇主担保", "快速移民直通车"];
      }
      if (this.job === "job5") {
        this.jobResult = ["联邦创业投资移民（SUV）", "企业主工签"];
      }
      if (this.job === "job6") {
        this.jobResult = ["联邦护理移民", "快速移民直通车", "曼省留学移民"];
      }
      if (this.job === "job7") {
        this.jobResult = ["联邦自雇移民", "安省雇主担保", "企业主工签"];
      }
      if (this.job === "job8") {
        this.jobResult = ["联邦自雇移民", "企业主工签"];
      }
      if (this.job === "job9") {
        this.jobResult = ["安省雇主担保", "企业主工签"];
      }
      if (this.job === "job10") {
        this.jobResult = ["安省雇主担保", "萨省雇主担保", "快速移民直通车"];
      }
      if (this.job === "job11") {
        this.jobResult = ["联邦创业投资移民（SUV）", "企业主工签"];
      }
      if (this.job === "job12") {
        this.jobResult = ["联邦农业试点", "萨省雇主担保"];
      }
      if (this.job === "job13") {
        this.jobResult = ["快速移民直通车", "安省硕博通道", "曼省留学移民"];
      }
    },
    ageSelection: function () {
      if (this.age < 45) {
        this.ageResult = ["快速移民直通车", "曼省留学移民"];
      } else {
        this.ageResult = ["安省雇主担保"];
      }
    },
    eduSelection: function () {
      if (this.edu > 1) {
        this.eduResult = ["安省硕博通道"];
      } else {
        this.eduResult = [];
      }
    },
    firstLangSelection: function () {
      if (this.firstLang === "none") {
        this.firstLangResult = ["安省雇主担保", "联邦自雇移民"];
      } else if (this.firstLang === "lvl34") {
        this.firstLangResult = [""];
      } else if (this.firstLang === "lvl5") {
        this.firstLangResult = ["快速移民直通车"];
      } else if (this.firstLang === "lvl6") {
        this.firstLangResult = ["BC省雇主担保"];
      } else if (this.firstLang === "lvl7") {
        this.firstLangResult = ["联邦EE快速通道"];
      } else {
        this.firstLangResult = [];
      }
    },
    titleSelection: function () {
      if (this.title === "selfEmployment") {
        this.titleResult = ["联邦自雇移民", "企业主工签"];
      } else {
        this.titleResult = [];
      }
    },
  },
  computed: {
    recommendProgram: function () {
      this.jobSelection();
      this.ageSelection();
      this.eduSelection();
      this.firstLangSelection();
      this.titleSelection();
      this.recommend = _.concat(
        this.jobResult,
        this.ageResult,
        this.eduResult,
        this.firstLangResult,
        this.titleResult
      );
      this.recommend = _.uniq(this.recommend);

      console.log(this.recommend);
      return this.recommend;
    },
  },
};
</script>

<style lang="scss" scoped></style>

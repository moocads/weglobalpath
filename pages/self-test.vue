<template>
  <div id="page-self-test">
    <header
      class="general-header"
      :style="{
        background: `linear-gradient(
        89.93deg,
        rgba(34, 52, 92, 0.7) 7.82%,
        rgba(34, 52, 92, 0) 102.35%
        ),url('/img/evaluation/self-test-header.jpg')`,
      }"
    >
      <div class="wrapper">
        <h1>加拿大移民条件自测</h1>
      </div>
    </header>
    <section class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item><NuxtLink to="/">首页</NuxtLink></a-breadcrumb-item>
        <a-breadcrumb-item
          ><NuxtLink to="/self-test"
            >加拿大移民条件自测</NuxtLink
          ></a-breadcrumb-item
        >
      </a-breadcrumb>
      <MainTitleSide
        title="加拿大移民条件自测"
        titleEN="SELF ASSESSMENT"
        titleENColor="rgb(218, 218, 218)"
      />
      <div class="self-test-grid">
        <div class="self-test-wrap">
          <h3>* 为必选选项</h3>
          <div class="option-wrap">
            <label for=""><span>*</span>年龄</label>
            <a-input-number v-model="age" :min="0" :max="100" />
          </div>
          <div class="option-wrap">
            <label for=""><span>*</span>学历</label>
            <a-select v-model="edu">
              <a-select-option value="0"> 高中及以下 </a-select-option>
              <a-select-option value="1"> 大专 </a-select-option>
              <a-select-option value="2"> 本科 </a-select-option>
              <a-select-option value="3"> 硕士 </a-select-option>
              <a-select-option value="4"> 博士 </a-select-option>
            </a-select>
          </div>
          <div class="option-wrap">
            <label for=""><span>*</span>英语水平</label>
            <a-select v-model="firstLang">
              <a-select-option value="none"> 完全不会 </a-select-option>
              <a-select-option value="lvl34"> 雅思3-4分 </a-select-option>
              <a-select-option value="lvl5"> 雅思5分 </a-select-option>
              <a-select-option value="lvl6"> 雅思6分 </a-select-option>
              <a-select-option value="lvl7"> 雅思7分以上 </a-select-option>
            </a-select>
          </div>
          <div class="option-wrap">
            <label for="">法语水平</label>
            <a-select v-model="frenchLang">
              <a-select-option value="none"> 完全不会 </a-select-option>
              <a-select-option value="general">一般</a-select-option>
              <a-select-option value="expert">精通</a-select-option>
            </a-select>
          </div>
          <div class="option-wrap">
            <label for=""><span>*</span>工作行业</label>
            <a-select v-model="job">
              <a-select-option value="job1">
                计算机／互联网／通信／电子
              </a-select-option>
              <a-select-option value="job2"
                >销售／客服／技术支持</a-select-option
              >
              <a-select-option value="job3"
                >会计／金融／银行／保险</a-select-option
              >
              <a-select-option value="job4"
                >生产／运营／采购／物料</a-select-option
              >
              <a-select-option value="job5">生物／制药／科研</a-select-option>
              <a-select-option value="job6">医疗／护理</a-select-option>
              <a-select-option value="job7"
                >市场／广告／影视媒体</a-select-option
              >
              <a-select-option value="job8"
                >文学艺术／设计师／体育从业者</a-select-option
              >
              <a-select-option value="job9"
                >建筑／工程／房地产
              </a-select-option>
              <a-select-option value="job10"
                >人力资源／行政／出纳</a-select-option
              >
              <a-select-option value="job11"
                >咨询／法律／教育／科研</a-select-option
              >
              <a-select-option value="job12">农业／服务业 </a-select-option>
              <a-select-option value="job13"
                >公务员／学生／其他</a-select-option
              >
            </a-select>
          </div>
          <div class="option-wrap">
            <label for=""><span>*</span>工作职位</label>
            <a-select v-model="title">
              <a-select-option value="nonManager"> 非管理 </a-select-option>
              <a-select-option value="manager"> 管理 </a-select-option>
              <a-select-option value="selfEmployment"> 自雇 </a-select-option>
              <a-select-option value="other"> 其他 </a-select-option>
            </a-select>
          </div>
          <div class="option-wrap">
            <label for="">偏好目的地</label>
            <a-select v-model="region">
              <a-select-option value="ontario">安大略省</a-select-option>
              <a-select-option value="manitoba">曼尼托巴省</a-select-option>
              <a-select-option value="pei">爱德华王子岛</a-select-option>
              <a-select-option value="newfoundland">纽芬兰省</a-select-option>
              <a-select-option value="bc">BC省</a-select-option>
              <a-select-option value="alberta">阿尔伯塔省</a-select-option>
              <a-select-option value="saskatchewan"
                >萨斯喀彻温省</a-select-option
              >
              <a-select-option value="newBrunswick"
                >新不伦瑞克省</a-select-option
              >
              <a-select-option value="novaScotia">新斯科舍省</a-select-option>
              <a-select-option value="quebec">魁北克省</a-select-option>
            </a-select>
          </div>
          <div class="option-wrap">
            <label for="">移民目的</label>
            <a-select v-model="purpose">
              <a-select-option value="childrenEdu">子女教育</a-select-option>
              <a-select-option value="workStudy">工作/教育</a-select-option>
              <a-select-option value="investment">投资置业</a-select-option>
              <a-select-option value="living">居住环境</a-select-option>
            </a-select>
          </div>
          <a-button @click="showResults" class="reset-btn">
            获取评估结果
          </a-button>
          <!-- <button @click="reset" class="reset-btn">重新评估</button> -->
        </div>
        <div class="self-test-results">
          <!-- {{ recommendProgram }} -->
          <h3>推荐给您的项目为：</h3>
          <h4>点击连接跳转到对应项目</h4>
          <ul v-show="isShowed">
            <!-- <nuxt-link :to="i.url" target="_blank">{{ i.title }}</nuxt-link> -->
            <nuxt-link
              :to="i.url"
              target="_blank"
              v-for="(i, index) in recommendProgram"
              :key="index"
            >
              <li class="self-result-item">
                <img
                  :src="i.imgUrl || '/img/evaluation/evaluation-header.jpg'"
                  alt=""
                />
                <div class="overlay">
                  <p>
                    {{ i.title }}
                  </p>
                </div>
              </li>
              <!-- <img src="/img/evaluation/evaluation-header.jpg" alt="" /> -->
            </nuxt-link>
          </ul>
        </div>
        <!-- <nuxt-link to="/">
          <img
            src="/img/evaluation/vertical-banner.jpg"
            alt=""
            class="self-test-v-banner img-fluid"
          />
        </nuxt-link> -->
      </div>
    </section>
  </div>
</template>

<script>
var _ = require("lodash");
export default {
  data() {
    return {
      age: "0",
      edu: "",
      firstLang: "",
      frenchLang: "",
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
      frenchLangResult: [],
      isShowed: false,
    };
  },
  methods: {
    provinceLink(id) {
      this.$store.commit("setProvince", id);
      // console.log(this.$store.state.province)
      this.$router.push("/provinces");
    },
    reset() {
      this.age = "0";
      this.edu = "";
      this.firstLang = "";
      this.frenchLang = "";
      this.job = "";
      this.title = "";
      this.region = "";
      this.purpose = "";
      this.recommend = [];
      console.log(this.recommend);
    },
    jobSelection() {
      if (this.job === "job1") {
        this.jobResult = [
          {
            title: "安省雇主担保",
            url: "/projects/nominee/ontario-immigrat-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_631b7f55e5.jpg",
          },
          {
            title: "BC省雇主担保",
            url: "/projects/nominee/BC-provincial-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/BC_8e2a801451.jpg",
          },
          {
            title: "全球人才计划",
            url: "/projects/nominee/ontario-immigrat-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_921a606418.jpg",
          },
        ];
      }
      if (this.job === "job2") {
        this.jobResult = [
          {
            title: "安省雇主担保",
            url: "/projects/nominee/ontario-immigrat-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_631b7f55e5.jpg",
          },
          {
            title: "BC省雇主担保",
            url: "/projects/nominee/BC-provincial-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/BC_8e2a801451.jpg",
          },
          {
            title: "快速移民直通车",
            url: "/recruiting",
            imgUrl: "/img/Recruiting/intro.png",
          },
        ];
      }
      if (this.job === "job3") {
        this.jobResult = [
          {
            title: "安省雇主担保",
            url: "/projects/nominee/ontario-immigrat-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_631b7f55e5.jpg",
          },
          {
            title: "快速移民直通车",
            url: "/recruiting",
            imgUrl: "/img/Recruiting/intro.png",
          },
          {
            title: "曼省留学移民",
            url: "/projects/education/manitoba-education",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_085486e518.jpg",
          },
        ];
      }
      if (this.job === "job4") {
        this.jobResult = [
          {
            title: "安省雇主担保",
            url: "/projects/nominee/ontario-immigrat-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_631b7f55e5.jpg",
          },
          {
            title: "BC省雇主担保",
            url: "/projects/nominee/BC-provincial-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/BC_8e2a801451.jpg",
          },
          {
            title: "快速移民直通车",
            url: "/recruiting",
            imgUrl: "/img/Recruiting/intro.png",
          },
        ];
      }
      if (this.job === "job5") {
        this.jobResult = [
          {
            title: "联邦创业投资移民（SUV）",
            url: "/projects/startup/start-up-visa",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/SUV_cccd356739.jpg",
          },
          {
            title: "企业主工签",
            url: "/projects/startup/owner-operator-work-permit",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_9b756675da.jpg",
          },
        ];
      }
      if (this.job === "job6") {
        this.jobResult = [
          {
            title: "联邦护理移民",
            url: "/projects/nominee/care-giver-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_82a7c0ea5c.jpg",
          },
          {
            title: "快速移民直通车",
            url: "/recruiting",
            imgUrl: "/img/Recruiting/intro.png",
          },
          {
            title: "曼省留学移民",
            url: "/projects/education/manitoba-education",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_085486e518.jpg",
          },
        ];
      }
      if (this.job === "job7") {
        this.jobResult = [
          {
            title: "联邦自雇移民",
            url: "/projects/startup/self-employment",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_da92fc6f49.jpg",
          },
          {
            title: "安省雇主担保",
            url: "/projects/nominee/ontario-immigrat-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_631b7f55e5.jpg",
          },
          {
            title: "企业主工签",
            url: "/projects/startup/owner-operator-work-permit",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_9b756675da.jpg",
          },
        ];
      }
      if (this.job === "job8") {
        this.jobResult = [
          {
            title: "联邦自雇移民",
            url: "/projects/startup/self-employment",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_da92fc6f49.jpg",
          },
          {
            title: "企业主工签",
            url: "/projects/startup/owner-operator-work-permit",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_9b756675da.jpg",
          },
        ];
      }
      if (this.job === "job9") {
        this.jobResult = [
          {
            title: "安省雇主担保",
            url: "/projects/nominee/ontario-immigrat-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_631b7f55e5.jpg",
          },
          {
            title: "企业主工签",
            url: "/projects/startup/owner-operator-work-permit",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_9b756675da.jpg",
          },
        ];
      }
      if (this.job === "job10") {
        this.jobResult = [
          {
            title: "安省雇主担保",
            url: "/projects/nominee/ontario-immigrat-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_631b7f55e5.jpg",
          },
          {
            title: "萨省雇主担保",
            url: "/provinces",
          },
          {
            title: "快速移民直通车",
            url: "/recruiting",
            imgUrl: "/img/Recruiting/intro.png",
          },
        ];
      }
      if (this.job === "job11") {
        this.jobResult = [
          {
            title: "联邦创业投资移民（SUV）",
            url: "/projects/startup/start-up-visa",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/SUV_cccd356739.jpg",
          },
          {
            title: "企业主工签",
            url: "/projects/startup/owner-operator-work-permit",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_9b756675da.jpg",
          },
        ];
      }
      if (this.job === "job12") {
        this.jobResult = [
          {
            title: "联邦农业试点",
            url: "/projects/nominee/agri-food-immigration-pilot",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_586031eb09.jpg",
          },
          {
            title: "萨省雇主担保",
            url: "/provinces",
          },
        ];
      }
      if (this.job === "job13") {
        this.jobResult = [
          {
            title: "快速移民直通车",
            url: "/recruiting",
            imgUrl: "/img/Recruiting/intro.png",
          },
          {
            title: "安省硕博通道",
            url: "/provinces",
          },
          {
            title: "曼省留学移民",
            url: "/projects/education/manitoba-education",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_085486e518.jpg",
          },
        ];
      }
      if (this.job === "") {
        this.jobResult = [];
      }
    },
    ageSelection() {
      if (this.age === "0") {
        this.ageResult = [];
      } else if (this.age < "45") {
        this.ageResult = [
          {
            title: "快速移民直通车",
            url: "/recruiting",
            imgUrl: "/img/Recruiting/intro.png",
          },
          {
            title: "曼省留学移民",
            url: "/projects/education/manitoba-education",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_085486e518.jpg",
          },
        ];
      } else {
        this.ageResult = [
          {
            title: "安省雇主担保",
            url: "/projects/nominee/ontario-immigrat-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_631b7f55e5.jpg",
          },
        ];
      }
    },
    eduSelection() {
      if (this.edu > 1) {
        this.eduResult = [
          {
            title: "安省硕博通道",
            url: "/provinces",
          },
        ];
      } else {
        this.eduResult = [];
      }
    },
    firstLangSelection() {
      if (this.firstLang === "none") {
        this.firstLangResult = [
          {
            title: "安省雇主担保",
            url: "/projects/nominee/ontario-immigrat-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_631b7f55e5.jpg",
          },
          {
            title: "联邦自雇移民",
            url: "/projects/startup/self-employment",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_da92fc6f49.jpg",
          },
        ];
      } else if (this.firstLang === "lvl34") {
        this.firstLangResult = [
          {
            title: "曼省雇主担保",
            url: "/provinces",
          },
        ];
      } else if (this.firstLang === "lvl5") {
        this.firstLangResult = [
          {
            title: "快速移民直通车",
            url: "/recruiting",
            imgUrl: "/img/Recruiting/intro.png",
          },
        ];
      } else if (this.firstLang === "lvl6") {
        this.firstLangResult = [
          {
            title: "BC省雇主担保",
            url: "/projects/nominee/BC-provincial-nominee-program",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/BC_8e2a801451.jpg",
          },
        ];
      } else if (this.firstLang === "lvl7") {
        this.firstLangResult = [
          {
            title: "联邦EE快速通道",
            url: "/projects/ee",
            imgUrl: "/img/Projects/ee/visa.png",
          },
        ];
      } else {
        this.firstLangResult = [];
      }
    },
    titleSelection() {
      if (this.title === "selfEmployment") {
        this.titleResult = [
          {
            title: "联邦自雇移民",
            url: "/projects/startup/self-employment",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_da92fc6f49.jpg",
          },
          {
            title: "企业主工签",
            url: "/projects/startup/owner-operator-work-permit",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_9b756675da.jpg",
          },
        ];
      } else if (this.title === "other") {
        this.titleResult = [
          {
            title: "快速移民直通车",
            url: "/recruiting",
            imgUrl: "/img/Recruiting/intro.png",
          },
          {
            title: "安省硕博通道",
            url: "/provinces",
          },
          {
            title: "曼省留学移民",
            url: "/projects/education/manitoba-education",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_085486e518.jpg",
          },
        ];
      } else {
        this.titleResult = [];
      }
    },
    frenchLangSelection() {
      if (this.frenchLang === "general" || this.frenchLang === "expert") {
        this.frenchLangResult = [
          {
            title: "魁省雇主担保",
            url: "/projects/nominee/quebec-skilled-worker",
            imgUrl:
              "https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_17f1031510.jpg",
          },
        ];
      } else {
        this.frenchLangResult = [];
      }
    },
    showResults() {
      this.isShowed = true;
      gsap.from(".self-result-item", {
        y: -50,
        duration: 0.5,
        stagger: 0.2,
        opacity: 0,
      });
    },
  },
  beforeUpdated() {
    gsap.from(".self-result-item", {
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      opacity: 0,
    });
  },
  computed: {
    recommendProgram() {
      this.jobSelection();
      this.ageSelection();
      this.eduSelection();
      this.firstLangSelection();
      this.titleSelection();
      this.frenchLangSelection();
      this.recommend = _.concat(
        this.jobResult,
        this.ageResult,
        this.eduResult,
        this.firstLangResult,
        this.frenchLangResult,
        this.titleResult
      );

      this.recommend = _.uniqBy(this.recommend, "title");

      // console.log(this.recommend);
      return this.recommend;
    },
  },
};
</script>
<style lang="scss">
#page-self-test {
  .self-test-wrap .ant-select {
    width: 300px !important;
  }
}
@media all and (max-width: 992px) {
  #page-self-test {
    .self-test-wrap .ant-select {
      width: 100% !important;
    }
    .option-wrap {
      padding: 10px 0;
    }
    .option-wrap label {
      flex-shrink: 0;
    }
  }
}
</style>
<style lang="scss" scoped>
#page-self-test {
  background-color: #efefef;
}
section {
  padding: 80px 0;
}
.self-test-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 20px 20px;
  padding: 50px 80px;
  background-color: #fff;
  border: 1px solid #c4c4c4;
}

.self-test-wrap h3 {
  color: $red;
}
.self-test-results {
  h3 {
    font-size: 22px;
    font-weight: bold;
    color: $navy;
    margin-bottom: 3px;
  }
  h4 {
    color: #c4c4c4;
    font-weight: normal;
    margin-bottom: 30px;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .self-result-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      min-width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #33333380;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p {
      color: #fff;
      font-size: 20px;
      margin: 0;
    }
  }
  a p {
    color: #fff;
    font-size: 20px;
    margin: 0;
  }
}
.option-wrap {
  display: flex;

  padding: 20px 0;
  label {
    width: 120px;
    font-size: 16px;
  }
  label span {
    color: $red;
  }
}
.reset-btn {
  margin-top: 15px;
  background-color: $navy;
  color: #fff;
}
.reset-btn:hover {
  outline: none;
}
@media all and (max-width: 991px) {
  section {
    padding: 30px 0;
  }
  .wrapper {
    width: 90vw;
  }
  .self-test-grid {
    grid-template-columns: 1fr;
    padding: 15px;
  }
  .self-test-results {
    ul {
      grid-template-columns: repeat(1, 1fr);
      gap: 20px;
    }
  }
}
</style>

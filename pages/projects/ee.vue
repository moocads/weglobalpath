<template>
  <div
    class="project-detail-page hot-projects-detail-page"
    id="project-ee-page"
  >
    <header
      :style="{
        background: `linear-gradient(
        89.93deg,
        rgba(34, 52, 92, 0.7) 7.82%,
        rgba(34, 52, 92, 0) 102.35%
        ),url('/img/Projects/ee/visa.png')`,
      }"
    >
      <div class="wrapper">
        <h1>联邦EE快速通道项目</h1>
      </div>
    </header>

    <div class="sec-headline">
      <div class="wrapper">
        <div class="txtContainer">
          <p>
            <span>加拿大快速通道Express Entry简称EE</span
            >，是一个进行申请人筛选的在线系统，而不是一个新的移民项目，EE系统根植于传统的加拿大技术员项目。只有符合三类移民申请条件的人才能进入EE，进入EE后又会按照EE的CRS评分标准进行算分。移民部每个月利用EE系统对所有候选人进行邀请，只有高于分数线的申请人才能够被邀请获得递交移民申请资格。这一系统与传统申请流程的区别在于：申请人不能自行提交移民申请，而需要受到加拿大移民部的邀请。这一步骤将有效避免不具备申请资格或是申请材料不充分的申请，缩短申请人的等待时长。
          </p>
        </div>
      </div>
    </div>
    <a-tabs class="eeTabs" :activeKey="`eeTab${defaultTab}`">
      <a-tab-pane key="eeTab1">
        <div slot="tab" class="customTab" @click="defaultTab = 1">
          技术类移民
        </div>

        <section class="sec-main">
          <div class="wrapper">
            <div class="image-16-9">
              <img
                src="/img/Projects/ee/ee-skill-img.jpg"
                alt="Express Entry Skill Immigration | 加拿大EE技术类移民"
              />
            </div>
            <div class="main-info">
              <div>
                <h4>所属省份</h4>
                <p>任一省份</p>
              </div>
              <div>
                <h4>移民类型</h4>
                <p>技术移民</p>
              </div>
              <div>
                <h4>居住要求</h4>
                <p>无居住要求</p>
              </div>
              <div>
                <h4>办理周期</h4>
                <p>3个月提交，6个月拿永居</p>
              </div>
              <div>
                <h4>身份卡类别</h4>
                <p>枫叶卡（永久居民）</p>
              </div>
              <div>
                <h4>办理费用</h4>
                <p>7000加币</p>
              </div>
            </div>
          </div>
        </section>
        <section class="sec-intro sec-general sec-bg-gray anchor">
          <div class="wrapper">
            <h2>项目介绍</h2>
            <p>
              FSW加拿大联邦技术移民适合学历高、年纪轻、英语或法语好的申请人。加拿大移民局为申请人设置了两道评分关卡，申请人首先要在联邦技术移民打分表中得到67分，证明有资格递交EE申请并被移民局筛选；其次，递交EE之后申请人要通过CRS评分体系，该体系没有通过分限制，移民局按照高分原则发出签证邀请，CRS评分体系决定了申请人获得邀请的几率和周期。
            </p>
          </div>
        </section>
        <section class="sec-advantages sec-general anchor">
          <div class="wrapper">
            <h2>项目优势</h2>
            <ul>
              <li v-for="(item, index) in tab1" :key="index">
                <img
                  src="/img/Projects/list-square.png"
                  alt="projects list square icon"
                />
                {{ item.requirement_points[0].point }}
              </li>
            </ul>
          </div>
        </section>
      </a-tab-pane>
      <a-tab-pane key="eeTab2">
        <div slot="tab" class="customTab" @click="defaultTab = 2">
          技工类移民
        </div>
        <section class="sec-main">
          <div class="wrapper">
            <div class="image-16-9">
              <img
                src="/img/Projects/ee/technician.jpg"
                alt="Express Entry Technical Immigration | 加拿大EE技工类移民"
              />
            </div>
            <div class="main-info">
              <div>
                <h4>所属省份</h4>
                <p>任一省份</p>
              </div>
              <div>
                <h4>移民类型</h4>
                <p>技术移民</p>
              </div>
              <div>
                <h4>居住要求</h4>
                <p>无居住要求</p>
              </div>
              <div>
                <h4>办理周期</h4>
                <p>3个月提交，6个月拿永居</p>
              </div>
              <div>
                <h4>身份卡类别</h4>
                <p>枫叶卡（永久居民）</p>
              </div>
              <div>
                <h4>办理费用</h4>
                <p>4.5万加币起</p>
              </div>
            </div>
          </div>
        </section>
        <section class="sec-intro sec-general sec-bg-gray anchor">
          <div class="wrapper">
            <h2>项目介绍</h2>
            <p>
              FST加拿大技工移民适用于职业为NOCB类的申请人，需要有雇主offer，满足语言、工作经验等基本申请条件后就可以直接提交申请进入EE候选池。对于中国申请人来说此类签证的难点在于职业列表中绝大部分职业需要强制认证，申请人需要获得加拿大某省颁发的技工职业证书。
            </p>
          </div>
        </section>
        <section class="sec-advantages sec-general anchor">
          <div class="wrapper">
            <h2>项目优势</h2>
            <ul>
              <li v-for="(item, index) in tab2" :key="index">
                <img
                  src="/img/Projects/list-square.png"
                  alt="projects list square icon"
                />
                {{ item.requirement_points[0].point }}
              </li>
            </ul>
          </div>
        </section>
      </a-tab-pane>
      <a-tab-pane key="eeTab3">
        <div slot="tab" class="customTab" @click="defaultTab = 3">
          经验类移民
        </div>
        <section class="sec-main">
          <div class="wrapper">
            <div class="image-16-9">
              <img
                src="/img/Projects/ee/exp.jpg"
                alt="Express Entry Experience Immigration | 加拿大EE经验类移民"
              />
            </div>
            <div class="main-info">
              <div>
                <h4>所属省份</h4>
                <p>任一省份</p>
              </div>
              <div>
                <h4>移民类型</h4>
                <p>留学后工作移民</p>
              </div>
              <div>
                <h4>居住要求</h4>
                <p>完成专业课，毕业后工作满1年即可入池</p>
              </div>
              <div>
                <h4>办理周期</h4>
                <p>48个月拿枫叶卡</p>
              </div>
              <div>
                <h4>身份卡类别</h4>
                <p>枫叶卡（永久居民）</p>
              </div>
              <div>
                <h4>办理费用</h4>
                <p>1.5万加币起</p>
              </div>
            </div>
          </div>
        </section>
        <section class="sec-intro sec-general sec-bg-gray anchor">
          <div class="wrapper">
            <h2>项目介绍</h2>
            <p>
              CEC加拿大经验类移民（Canadian Experience
              Class）适用于拥有加拿大教育背景的留学生，以及在加拿大境内持临时工作签证的申请人。针对近3年内有1年NOC
              Skill Type
              0，A，B技能级别加拿大工作经验的申请人，可以是全职也可以是对等的兼职。很多申请人因为分数低，需要进一步通过省提名才能成功移民。
            </p>
          </div>
        </section>
        <section class="sec-advantages sec-general anchor">
          <div class="wrapper">
            <h2>项目优势</h2>
            <ul>
              <li v-for="(item, index) in tab3" :key="index">
                <img
                  src="/img/Projects/list-square.png"
                  alt="projects list square icon"
                />
                {{ item.requirement_points[0].point }}
              </li>
            </ul>
          </div>
        </section>
      </a-tab-pane>
    </a-tabs>
    <!-- <section class="divider">
      <h3>连接彼岸，用心服务，帮助海外客户和学生。</h3>
      <h3>我们，不忘初心。</h3>
    </section> -->
    <section class="fee-sec sec-bg-gray sec-general">
      <div class="wrapper">
        <h2>项目费用</h2>

        <div class="fee-grid">
          <div
            class="fee-card"
            v-for="(fee, index) in eeData.fee_comp"
            :key="index"
          >
            <ul>
              <li><span>类别：</span>{{ fee.cate }}</li>
              <li><span>收费机构：</span>{{ fee.department }}</li>
              <li>
                <span>金额：</span
                ><vue-markdown class="fee-content">{{
                  fee.price
                }}</vue-markdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <OtherProjectsSection bgWhite="true" />
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  head() {
    return {
      title: "加彼岸出国咨询 | 联邦EE移民项目",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "加彼岸出国咨询 | 联邦EE移民项目",
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const eeData = await $axios.$get(`/projects/24`);
    return {
      eeData,
    };
  },
  mounted() {
    // let reqBox = document.querySelectorAll(".requirement-anchor ul");
    // console.log(reqBox);
    // for (let i = 0; i < reqBox.length; i++) {
    //   if (reqBox[i].clientHeight > 100) {
    //     this.hasButton.push(true);
    //   } else {
    //     this.hasButton.push(false);
    //   }
    // }
  },
  beforeDestroy() {
    if (this.$store.state.ee) {
      this.$store.commit("setEe", undefined);
    }
  },
  watch: {
    "$store.state.ee": function () {
      // console.log(this.$store.state.ee)
      this.defaultTab = this.$store.state.ee;
    },
  },
  data() {
    return {
      hasButton: [],
      defaultTab: this.$store.state.ee || 1,
      tab1: [
        {
          title: "经验要求",
          requirement_points: [
            {
              point:
                "过去10年内至少一年以上的连续的全职（或等同的兼职）工作经验，工作可以是：一份全职：每周30小时，工作12个月，一份兼职：每周15小时，工作24个月，多分兼职：每周累计30小时，工作12个月。",
            },
          ],
        },
        {
          title: "语言要求",
          requirement_points: [
            {
              point:
                "英语或法语达到CLB7（听说读写4个6）的成绩，成绩两年内有效；",
            },
          ],
        },
        {
          title: "工作要求",
          requirement_points: [
            {
              point: "从事同一个职业，在NOC0, A, B类别中；",
            },
          ],
        },
        {
          title: "学历要求",
          requirement_points: [
            {
              point:
                "达到加拿大高中以上学历，如果是海外学历需要通过ECA学历认证；",
            },
          ],
        },
        {
          title: "EOI要求",
          requirement_points: [
            {
              point: "满足联邦技术移民评分67分；",
            },
          ],
        },
        {
          title: "计划要求",
          requirement_points: [
            {
              point: "计划居住在魁北克以外的省份。",
            },
          ],
        },
      ],
      tab2: [
        {
          title: "经验要求",
          requirement_points: [
            {
              point: "最近5年内至少2年全职或等同兼职技工类工作经验；",
            },
          ],
        },
        {
          title: "语言要求",
          requirement_points: [
            {
              point:
                "满足最低语言要求：雅思听说CLB5（听5，说5），读写CLB4（读3.5，写4）和法语听说NCLC5，读写NCLC4；",
            },
          ],
        },
        {
          title: "学历要求",
          requirement_points: [
            {
              point: "没有学历要求",
            },
          ],
        },
        {
          title: "计划要求",
          requirement_points: [
            {
              point: "计划居住在魁北克以外的省份。",
            },
          ],
        },
        {
          title: "其他要求",
          requirement_points: [
            {
              point:
                "申请人需要获得雇主支持的LMIA（Labour Market Impact Assessment）或者加拿大省政府颁发的技工证书；",
            },
          ],
        },
      ],
      tab3: [
        {
          title: "经验要求",
          requirement_points: [
            {
              point: "近三年内至少有一年在加拿大的全职或等同兼职工作经验；",
            },
          ],
        },
        {
          title: "语言要求",
          requirement_points: [
            {
              point:
                "满足工作需要的语言要求：职业类别为NOC0、A，语言需达到CLB7，职业类别为NOCB，语言需达到CLB5；",
            },
          ],
        },
        {
          title: "工作要求",
          requirement_points: [
            {
              point:
                "所从事的工作属于NOC0、A、B类别，自雇或者全日制在读期间获得的工作经验不被认可；",
            },
          ],
        },
        {
          title: "学历要求",
          requirement_points: [
            {
              point: "没有学历要求",
            },
          ],
        },
        {
          title: "计划要求",
          requirement_points: [
            {
              point: "计划居住在魁北克以外的省份。",
            },
          ],
        },
      ],
    };
  },
  components: {
    VueMarkdown,
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/hot-projects/general.scss";

#project-ee-page {
  .eeTabs {
    .ant-tabs-nav-scroll {
      display: flex;
      justify-content: center;
    }

    .ant-tabs-nav .ant-tabs-tab:hover {
      color: white;
    }

    .ant-tabs-tab {
      background-color: $navy;
      color: white;
      margin-right: 10px;
      padding: 0;

      &.ant-tabs-tab-active {
        background-color: $red;
      }

      .customTab {
        padding: 12px 16px;
      }
    }

    .ant-tabs-bar {
      max-width: 1440px;
      width: 85vw;
      margin: auto;
    }

    .ant-tabs-ink-bar {
      background-color: transparent;
    }
  }
}
@media all and (max-width: 768px) {
  #project-ee-page {
    .eeTabs .ant-tabs-nav-scroll {
      justify-content: flex-start;
    }
  }
}
</style>
<style lang="scss" scoped>
section {
  padding: 100px 0;
  p {
    font-size: 16px;
  }
}
@media all and (max-width: 768px) {
  section {
    padding: 30px 0;
  }
}

// Headline

.sec-headline {
  margin: 100px 0;
  .txtContainer {
    padding: 30px 20px;
    background-color: #e9e9e9;

    p {
      margin-bottom: 0;
    }

    span {
      color: $navy;
    }
  }
}
/* ------------------------------------------------------ */
/*                ANCHOR Highlight section                */
/* ------------------------------------------------------ */

.highlight-image-wrap {
  border-radius: 10px;
  overflow: hidden;
  img {
    border-radius: 10px;

    object-fit: cover;
    width: 100%;
  }
}
.highlight-info-wrap {
  p {
    margin-bottom: 20px;
  }

  li {
    color: #707070;
    font-size: 16px;
    margin-bottom: 20px;
  }
  li::before {
    content: url("/img/Projects/list-square.png");
    margin-right: 15px;
  }
}
/* ------------------------------------------------------ */
/*               ANCHOR Requirement Section               */
/* ------------------------------------------------------ */
.sec-requirements {
  background-color: $navy;
  .title-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    margin-bottom: 50px;
    h1 {
      position: absolute;
      bottom: 35px;
      left: 100px;
      font-size: 36px;
      font-weight: 700;

      color: #fff;
    }
  }
  .title {
    display: flex;
    align-items: center;
    p {
      color: #233369;
      font-size: 70px;
      font-family: $Mont;
      font-weight: 800;
      margin: 0;
      margin-left: 0px;
    }
    img {
      opacity: 0.2;
    }
  }
}
.requirement-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  row-gap: 20px;
  column-gap: 30px;
}
.requirement-item {
  position: relative;
  .requirement-info-wrap-closed {
    overflow: hidden;
    max-height: 150px;
    transition: all 0.3s ease-in-out;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      z-index: 10;
      background: linear-gradient(0deg, #1b2854 0%, rgba(27, 40, 84, 0) 100%);
      height: 20px;
      width: 100%;
      left: 0;
      bottom: 0;
    }
  }

  .requirement-info-wrap-expand {
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    max-height: auto;
  }
  h2 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    position: relative;
  }
  h2::before {
    content: url("/img/Projects/checkmark.png");
    position: relative;
    top: 2px;
    left: 0;
    margin-right: 10px;
  }
  ul {
    list-style-type: disc;
    margin-left: 50px;
    color: #dadada;
  }
  li {
    margin-bottom: 10px;
  }
  button {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    color: #6ab6ff;
    font-size: 13px;
  }
  button::after {
    content: url("/img/Projects/expand.png");
    margin-left: 5px;
  }
  .expand-btn {
    transition: all 0.2s ease-in-out;
  }
  .expand-btn::after {
    display: inline-block;
    content: url("/img/Projects/expand.png");
    margin-left: 5px;
    transform: rotate(180deg);
  }
}
@media all and (max-width: 768px) {
  .sec-requirements {
    background-color: $navy;
    .title-wrap {
      align-items: center;
      position: relative;
      h1 {
        position: absolute;
        bottom: 0px;
        left: 80px;
        font-size: 26px;
        font-weight: 700;
        color: #fff;
      }
    }
    .title {
      display: flex;
      align-items: center;
      p {
        color: #233369;
        font-size: 35px;
      }
      img {
        opacity: 0.2;
        width: 60px;
      }
    }
  }
  .requirement-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    row-gap: 20px;
    column-gap: 30px;
  }
}

.divider {
  background-color: #e7e7e7;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    text-align: center;
    font-size: 28px;
    color: $red;
    margin-bottom: 0;
    font-weight: 700;
  }
}
@media all and (max-width: $md) {
  .divider {
    background-color: #e7e7e7;
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 20px;
    }
  }
}
.fee-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
.fee-card {
  border: 1px solid $red;
  border-radius: 5px;
  padding: 20px 40px;

  color: $red;
  font-size: 16px;
  span {
    font-weight: bold;
  }
  li {
    display: flex;
    span {
      flex-shrink: 0;
    }
    // align-items: center;
  }
  transition: all 0.3 ease-in-out;
}
.fee-card:hover {
  background-color: #fff;
  cursor: pointer;
}
@media all and (max-width: 991px) {
  .fee-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media all and (max-width: 768px) {
  .fee-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.sec-main {
  padding: 50px 0 80px;
}
.sec-main > .wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 120px;
  .image-16-9 {
    position: relative;
    display: block;
    margin: 0;
    overflow: hidden;
    border-radius: 10px;
    &::before {
      content: "";
      display: block;
      width: 100%;
      padding-bottom: 56.25%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .main-info {
    div {
      display: flex;
      margin-bottom: 20px;
    }
    h4,
    p {
      font-size: 16px;
    }
    h4 {
      color: $red;
      width: 120px;
    }
  }
}
@media all and (max-width: $md) {
  .sec-main > .wrapper {
    column-gap: 60px;

    .main-info {
      div {
        display: flex;
        margin-bottom: 0px;
      }
      h4,
      p {
        font-size: 14px;
      }
      h4 {
        flex-shrink: 0;
        color: $red;
        width: 85px;
      }
    }
  }
}
@media all and (max-width: $sm) {
  .sec-main > .wrapper {
    grid-template-columns: 1fr;
    row-gap: 20px;
    .main-info {
      div {
        display: flex;
        margin-bottom: 0px;
      }
      h4,
      p {
        font-size: 14px;
      }
      h4 {
        flex-shrink: 0;
        color: $red;
        width: 85px;
      }
    }
  }
}
</style>

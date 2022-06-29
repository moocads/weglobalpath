<template>
  <div class="hot-projects-detail-page">
    <header
      :style="{
        background: `linear-gradient(
    89.93deg,
    rgba(34, 52, 92, 0.7) 7.82%,
    rgba(34, 52, 92, 0) 102.35%
  ),url(${data.thumbnail.url})`,
      }"
    >
      <div class="wrapper">
        <h1>{{ data.project_name }}</h1>
      </div>
    </header>
    <Breadcrumb project-url="nominee" :project-data="data" />
    <div class="nav-wrap">
      <div class="wrapper">
        <ul>
          <a href="#edu-sec-intro">
            <li :class="{ tabActive: activeTab === 1 }" @click="activeTab = 1">
              项目介绍
            </li>
          </a>
          <a href="#edu-sec-advantages">
            <li :class="{ tabActive: activeTab === 2 }" @click="activeTab = 2">
              项目优势
            </li>
          </a>
          <a href="#edu-sec-requirements">
            <li :class="{ tabActive: activeTab === 3 }" @click="activeTab = 3">
              申请条件
            </li>
          </a>
          <a href="#edu-sec-process">
            <li :class="{ tabActive: activeTab === 4 }" @click="activeTab = 4">
              申请流程
            </li>
          </a>
          <a href="#edu-sec-fee">
            <li :class="{ tabActive: activeTab === 5 }" @click="activeTab = 5">
              项目费用
            </li>
          </a>
        </ul>
      </div>
    </div>
    <section class="sec-main">
      <div class="wrapper">
        <div class="image-16-9">
          <img :src="data.thumbnail.url" alt="" />
        </div>
        <div class="main-info">
          <div v-if="data.project_header_info !== null">
            <h4>所属省份</h4>
            <p>
              {{ data.project_header_info.province }}
            </p>
          </div>
          <div v-if="data.project_header_info !== null">
            <h4>移民类型</h4>
            <p>
              {{ data.project_header_info.type }}
            </p>
          </div>
          <div v-if="data.project_header_info !== null">
            <h4>居住要求</h4>
            <p>
              {{ data.project_header_info.requirement }}
            </p>
          </div>
          <div v-if="data.project_header_info !== null">
            <h4>办理周期</h4>
            <p>
              {{ data.project_header_info.duration }}
            </p>
          </div>
          <div v-if="data.project_header_info !== null">
            <h4>身份卡类别</h4>
            <p>
              {{ data.project_header_info.id_type }}
            </p>
          </div>
          <div v-if="data.project_header_info !== null">
            <h4>办理费用</h4>
            <p>
              {{ data.project_header_info.fee }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      id="edu-sec-intro"
      class="sec-intro sec-general sec-bg-gray anchor"
    >
      <div class="wrapper">
        <h2>项目介绍</h2>
        <vue-markdown class="intro-markdown">{{
          data.introduction_richtext
        }}</vue-markdown>
      </div>
    </section>
    <section id="edu-sec-advantages" class="sec-advantages sec-general anchor">
      <div class="wrapper">
        <h2>项目优势</h2>
        <ul>
          <li v-for="(highlight, index) in data.hightlight_points" :key="index">
            <img
              src="/img/Projects/list-square.png"
              alt="projects list square icon"
            />
            {{ highlight.point }}
          </li>
        </ul>
      </div>
    </section>
    <section
      id="edu-sec-requirements"
      class="sec-requirements sec-general sec-bg-gray anchor"
    >
      <div class="wrapper">
        <h2>申请条件</h2>
        <!-- <ul>
          <div v-for="(items, index) in requirementsData" :key="index">
            <li v-for="(i, index) in items.requirement_points" :key="index">
              <img
                src="/img/Projects/checkmark.png"
                alt="projects list checkmark icon"
              />
              {{ i.point }}
            </li>
          </div>
        </ul> -->
        <div id="aip-list">
          <ol>
            <li>
              工作经验
              <ul>
                <li>
                  <h5 class="underline">
                    技术工人类别:
                    过去5年中积累1560小时的工作经历（一年每周工作至少30小时）
                  </h5>
                  <ul class="sub-list">
                    <li>兼职和全职皆可</li>
                    <li>志愿者服务和没有收入的实习均不算</li>
                    <li>自雇经历不算</li>
                    <li>加拿大境内外经历皆可</li>
                    <li>学习时的兼职可算</li>
                    <li>NOC 0ABC 职位皆可算</li>
                  </ul>
                </li>
                <li class="underline">
                  <h5>国际毕业生类别: 国际留学生无需任何工作经验</h5>
                </li>
              </ul>
            </li>

            <li>
              语言要求
              <ul class="sub-list">
                <li>NOC 0 A B要求CLB 5</li>
                <li>NOC C要求 CLB 4</li>
              </ul>
            </li>
            <li>
              教育经历
              <ul>
                <li>
                  <h5 class="underline">技术工人类别，至少满足以下一条</h5>
                  <ul class="sub-list">
                    <li>在加拿大境内至少高中毕业</li>
                    <li>
                      境外学习经历必须做ECA
                      report，并满足等同于加拿大至少高中以上学历
                    </li>
                    <li>
                      如获得job offer NOC 0
                      A的职位，必须满足等同于加拿大一年制大专或以上的学历
                    </li>
                    <li>
                      如获得job offer NOC B
                      C的职位，必须满足等同于加拿大高中或以上的学历
                    </li>
                  </ul>
                </li>
                <li>
                  <h5 class="underline">国际毕业生类别</h5>
                  <ul class="sub-list">
                    <li>
                      毕业于New Brunswick, Nova Scotia, Prince Edward Island, or
                      Newfoundland and Labrador，四个省份中的任何一个省份
                    </li>
                    <li>学制为全日制至少2年，不可以是兼职学习</li>
                    <li>在过去两年中至少四个省份中的一个居住16个月</li>
                    <li>在境内的话，有合法工签或学签</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              有足够安家经费（如在加拿大境内工作则豁免）
              <img
                data-fancybox="gallery"
                class="img-fluid"
                src="/img/aip-1.png"
                style="width: 100%; height: auto"
                alt=""
              />
            </li>

            <li>
              获得四个省份指定雇主的job offer
              <ul class="sub-list">
                <li>Job Offer必须是一周至少30小时的全职工作</li>
                <li>
                  NOC 0AB 类职业job offer必须至少1年长度（从获得PR开始算起）
                </li>
                <li>NOC C类职业 job offer必须没有截止日期</li>
                <li>申请人自己或配偶的公司不可给自己发job offer</li>
                <img
                  data-fancybox="gallery"
                  src="/img/aip-2.png"
                  alt=""
                  class="img-fluid"
                  style="width: 100%; height: auto"
                />
                <li>
                  Job offer 要符合或高于申请人的工作经历，除非
                  <ol class="sub-list-roman">
                    <li>工作在医疗行业，职位为：</li>
                    <ol>
                      <li>
                        NOC 3413 (nurse aides, orderlies and patient service
                        associates)护士助理
                      </li>
                      <li>NOC 4412 (home health care workers)家庭护工</li>
                      <li>NOC 3233 (practical nurses) 实操护士</li>
                      <li>NOC 3012 (registered nurses)注册护士</li>
                    </ol>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              雇主要求（如何成为指定雇主）
              <ul class="sub-list">
                <li>
                  不违反移民和难民保护法 (IRPA) 或移民和难民保护条例 (IRPR)；
                </li>
                <li>信誉良好并遵守就业标准和职业健康与安全法规；</li>
                <li>
                  不得招聘或雇用工人是以建立一个候选人库作为目的，这些候选人后来可以转移或外包给单独的企业用于人员配置的目的；
                </li>
                <li>
                  在大西洋省份，在同一个管理下，持续、积极地运营至少 2
                  年，并获批成为指定雇主；
                </li>
                <li>承诺参加免费的资格培训；</li>
                <li>承诺参加免费的跨文化能力培训。</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
    <section id="edu-sec-process" class="sec-process sec-general anchor">
      <div class="wrapper">
        <h2>申请流程</h2>
        <div class="process-wrap">
          <a-timeline>
            <a-timeline-item v-for="(item, index) in data.process" :key="index">
              <div slot="dot" class="step-num">
                <span>{{ index + 1 }}</span>
              </div>
              {{ item.step }}
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </section>
    <section id="edu-sec-fee" class="sec-fee sec-general sec-bg-gray anchor">
      <div class="wrapper">
        <h2>项目费用</h2>
        <div class="fee-grid">
          <div
            class="fee-card"
            v-for="(fee, index) in data.fee_comp"
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
    <EvaluationForm />
    <OtherProjectsSection bgWhite="true" />
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  head() {
    return {
      title: `加拿大移民 | ${this.data.project_name} | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | ${this.data.project_name} | 加彼岸出国咨询`,
        },
      ],
    };
  },
  data() {
    return {
      activeTab: 1,
    };
  },
  async asyncData({ $axios, route }) {
    const projectData = await $axios.$get(
      `/projects?slug=atlantic-immigration-pilot-program`
    );
    const data = projectData[0];
    const requirementsData = data.requirements;

    return {
      data,
      requirementsData,
    };
  },
  components: {
    VueMarkdown,
  },
};
</script>

<style lang="scss" scoped>
#aip-list {
  margin-left: 18px;
  h5 {
    font-size: 16px;
    font-weight: normal;
    color: #777777;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .img-fluid {
    margin: 20px 0;
  }
  li {
    margin-bottom: 10px;
  }
  ol {
    list-style-type: auto;
    li {
      display: list-item;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
  .sub-list {
    list-style-type: disc;
    margin: 0 0 10px 20px;
    text-decoration: none;
    color: #777777;
    li {
      font-size: 16px;
      font-weight: normal;
      display: list-item;
      text-decoration: none;
      margin-bottom: 5px;
    }
  }
  .sub-list-roman {
    list-style-type: lower-roman;
    margin-left: 20px;
    ol {
      margin-left: 20px;
    }
  }
  dl {
    font-size: 18px;
    font-weight: bold;
  }
}
@media all and (max-width: $sm) {
  #aip-list {
    ol {
      li {
        font-size: 16px;
      }
    }
    .sub-list {
      li {
        font-size: 14px;
      }
    }
  }
}
</style>

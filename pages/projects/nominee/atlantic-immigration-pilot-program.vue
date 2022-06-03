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
        <ul>
          <div v-for="(items, index) in requirementsData" :key="index">
            <li v-for="(i, index) in items.requirement_points" :key="index">
              <img
                src="/img/Projects/checkmark.png"
                alt="projects list checkmark icon"
              />
              {{ i.point }}
            </li>
          </div>
        </ul>
        <!-- <ol>
          <li>工作经验</li>
          <li>语言要求</li>
          <li>教育经历</li>
          <li>有足够俺家经费（如在加拿大境内工作则豁免）</li>
          <li>获得四个省份指定雇主的job offer</li>
        </ol> -->
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
<style lang="scss">
@import "~/assets/scss/hot-projects/general.scss";
</style>

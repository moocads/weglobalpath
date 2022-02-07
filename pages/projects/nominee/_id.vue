<template>
  <div class="project-detail-page">
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
    <section class="sec-introduction">
      <div class="wrapper">
        <MainTitle
          title="项目介绍"
          titleEN="INTRODUCTION"
          titleENColor="#DADADA"
        />
        <vue-markdown>{{ data.introduction_richtext }}</vue-markdown>
      </div>
    </section>
    <section class="sec-highlights">
      <div class="wrapper">
        <a-row :gutter="[32, 16]">
          <a-col :md="12" :sm="24" class="highlight-image-wrap">
            <img :src="data.thumbnail.url" alt="" />
          </a-col>
          <a-col
            :md="{ span: 11, offset: 1 }"
            :sm="24"
            class="highlight-info-wrap"
          >
            <MainTitleSide title="项目优势" titleEN="HIGHLIGHTS" />
            <p>
              {{ data.highlight_intro }}
            </p>
            <ul>
              <li
                v-for="(highlight, index) in data.hightlight_points"
                :key="index"
              >
                {{ highlight.point }}
              </li>
            </ul>
            <NuxtLink to="/contact">
              <button
                class="
                  main-btn main-btn_red main-btn_round-5 main-btn_mobile_w100
                "
              >
                联系我们
              </button>
            </NuxtLink>
          </a-col>
        </a-row>
      </div>
    </section>
    <section class="sec-requirements">
      <div class="wrapper">
        <div class="title-wrap">
          <div class="title">
            <img src="/img/logos/logo-trans.png" alt="" />
            <p>REQUIREMENTS</p>
          </div>
          <h1>申请要求</h1>
        </div>
        <div class="requirement-grid">
          <div
            class="requirement-item"
            v-for="(item, index) in data.requirements"
            :key="index"
          >
            <RequirementItem
              :title="item.title"
              :requirementsData="item.requirement_points"
              :hasButtonProp="hasButton[index]"
            />
            <!-- {{ hasButton }} -->
          </div>
        </div>
      </div>
    </section>
    <section class="sec-process">
      <div class="wrapper">
        <MainTitle title="申请流程" titleEN="PROCESS" titleENColor="#E5E5E5" />
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
    <section class="fee-sec">
      <div class="wrapper">
        <div class="title-wrap">
          <div class="title">
            <img src="/img/logos/logo-trans.png" alt="" />
            <p>FEE</p>
          </div>
          <h1>项目费用</h1>
        </div>
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
    <!-- <CasesSection /> -->
    <OtherProjectsSection />
  </div>
</template>

<script>
import axios from "axios";
import VueMarkdown from "vue-markdown";

export default {
  head() {
    return {
      title: "加彼岸出国咨询 | " + this.data.project_name,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "加彼岸出国咨询 | " + this.data.project_name + "加拿大雇主担保项目",
        },
      ],
    };
  },
  async asyncData({ $axios, params }) {
    const projectData = await $axios.$get(`/projects/${params.id}`);
    const data = projectData;
    return {
      data,
    };
  },
  // async asyncData({ $axios, route }) {
  //   const projectData = await $axios.$get(`/projects?id=` + route.params.id);
  //   const data = projectData;
  //   return {
  //     data,
  //   };
  // },
  data() {
    return {
      hasButton: [],
    };
  },
  components: {
    VueMarkdown,
  },
  mounted() {
    let reqBox = document.querySelectorAll(".requirement-anchor ul");
    console.log(reqBox);
    for (let i = 0; i < reqBox.length; i++) {
      if (reqBox[i].clientHeight > 100) {
        this.hasButton.push(true);
      } else {
        this.hasButton.push(false);
      }
    }
  },
};
</script>
<style lang="scss">
.highlight-info-wrap {
  .main-title-side-wrap {
    margin-bottom: 20px;
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
/* ------------------------------------------------------ */
/*              ANCHOR introduction section X             */
/* ------------------------------------------------------ */
.sec-introduction {
  background-color: #efefef;
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
@media all and (max-width: 768px) {
  .highlight-info-wrap {
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
/* ------------------------------------------------------ */
/*                 ANCHORE PROCESS SECTION                */
/* ------------------------------------------------------ */
.sec-process {
  background-image: url("/img/Projects/process-banner.png");
  background-size: cover;
}
.process-wrap {
  background-color: #ffffff50;
  padding: 50px;
  padding-bottom: 0;
  border-radius: 10px;
  border: 1px solid $navy;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  li {
    display: flex;
    justify-content: flex-start;
  }
  span {
    line-height: 25px;
    color: #fff;
  }
  p {
    color: #757575;
    font-size: 16px;
  }
  .step-num {
    width: 25px;
    height: 25px;
    background-color: $navy;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 9px;
  }
}
@media all and (max-width: 768px) {
  .process-wrap {
    padding: 50px 20px 0;
    .step-num::before {
      height: 30px;
    }
    p {
      font-size: 14px;
    }
    li:nth-child(3) {
      .step-num::before {
        height: 70px;
      }
    }
  }
}
</style>

<template>
  <div>
    <header>
      <div class="wrapper">
        <h1>曼省企业家投资移民</h1>
      </div>
    </header>
    <section class="sec-introduction">
      <div class="wrapper">
        <MainTitle
          title="项目介绍"
          titleEN="INTRODUCTION"
          titleENColor="#DADADA"
        />
        <p>
          {{ data.introduction }}
        </p>
      </div>
    </section>
    <section class="sec-highlights">
      <div class="wrapper">
        <a-row :gutter="[24, 16]">
          <a-col :md="12" :sm="24" class="highlight-image-wrap">
            <img src="/img/Projects/temp-img1.png" alt="" />
          </a-col>
          <a-col :md="12" :sm="24" class="highlight-info-wrap">
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
              <button class="main-btn main-btn_red main-btn_round-5">
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
            />
            <!-- <div
              :class="[
                { 'requirement-info-wrap-expand': isExpanded },
                { 'requirement-info-wrap-closed': !isExpanded },
              ]"
            >
              <h2>年龄要求</h2>
              <ul>
                <li>没有年龄限制，但是只有25-49岁的申请人才能获得年龄加分。</li>
                <li>没有年龄限制，但是只有25-49岁的申请人才能获得年龄加分。</li>
                <li>没有年龄限制，但是只有25-49岁的申请人才能获得年龄加分。</li>
                <li>没有年龄限制，但是只有25-49岁的申请人才能获得年龄加分。</li>
                <li>没有年龄限制，但是只有25-49岁的申请人才能获得年龄加分。</li>
              </ul>
            </div>
            <button
              @click="isExpanded = !isExpanded"
              :class="[{ 'expand-btn': isExpanded }]"
            >
              展开全部
            </button> -->
          </div>
        </div>
      </div>
    </section>
    <section class="sec-process">
      <div class="wrapper">
        <MainTitle title="申请流程" titleEN="PROCESS" titleENColor="#E5E5E5" />
        <div class="process-wrap">
          <a-timeline>
            <a-timeline-item>
              <div slot="dot" class="step-num">1</div>
              评估客户背景后，签订曼省企业家投资移民合同
            </a-timeline-item>
            <a-timeline-item>
              <div slot="dot" class="step-num">2</div>
              对曼省进行考察并研究申请人的商业理念
            </a-timeline-item>
            <a-timeline-item>
              <div slot="dot" class="step-num">3</div>
              向MPNP提交自我评估和商业理念表（收到MPNP的邮件回复，如不符最低要求者将不会被审理）
            </a-timeline-item>
            <a-timeline-item>
              <div slot="dot" class="step-num">4</div>
              向MPNP提交完整申请
            </a-timeline-item>
            <a-timeline-item>
              <div slot="dot" class="step-num">5</div>
              MPNP评估完整的申请，有可能需要申请人进行一次面试
            </a-timeline-item>
            <a-timeline-item>
              <div slot="dot" class="step-num">6</div>
              申请人签署商业表现协议，MPNP出具工作许可支持函
            </a-timeline-item>
            <a-timeline-item>
              <div slot="dot" class="step-num">7</div>
              在曼省经营生意，收到MPNP提名
            </a-timeline-item>
            <a-timeline-item>
              <div slot="dot" class="step-num">8</div>
              向IRCC提交永居，获得永久居民身
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </section>
    <CasesSection />
    <OtherProjectsSection />
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ $axios }) {
    const projectData = await $axios.$get(`/projects/1`);
    const data = projectData;
    return {
      data,
    };
    // return axios
    //   .get(`https://beyond-canada-back-staging.herokuapp.com/projects/1`)
    //   .then((res) => {
    //     return {
    //       data: res.data,
    //     };
    //   });
  },
  data() {
    return {
      isExpanded: false,
      isClosed: true,
    };
  },
  methods: {},
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
/* ------------------------------------------------------ */
/*        ANCHOR Projects Page Detail Page Style          */
/* ------------------------------------------------------ */
section {
  padding: 100px 0;
  p {
    font-size: 16px;
  }
}
@media all and (max-width: 600px) {
  section {
    padding: 30px 0;
  }
}
header {
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(
      89.93deg,
      rgba(34, 52, 92, 0.7) 7.82%,
      rgba(34, 52, 92, 0) 102.35%
    ),
    url("/img/Projects/banner.png");

  background-size: cover;
  background-blend-mode: multiply;
  h1 {
    color: #fff;
    font-size: 60px;
    font-weight: bold;
    position: relative;
    margin-left: 20px;
  }
  h1::before {
    content: "";
    position: absolute;
    top: 55%;
    left: -20px;
    transform: translateY(-50%);
    background-color: $red;
    width: 6px;
    height: 70px;
  }
}
@media all and (max-width: 600px) {
  header {
    height: 300px;
    h1 {
      font-size: 35px;
    }
    h1::before {
      width: 6px;
      height: 40px;
    }
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
@media all and (max-width: 600px) {
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
  border-radius: 10px;
  border: 1px solid $navy;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  li {
    display: flex;
    justify-content: flex-start;
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
@media all and (max-width: 600px) {
  .process-wrap {
    padding: 10px 20px;
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

<template>
  <div class="project-detail-page">
    <header
      :style="{
        background: `linear-gradient(
        89.93deg,
        rgba(34, 52, 92, 0.7) 7.82%,
        rgba(34, 52, 92, 0) 102.35%
        ),url('/img/immigration.png')`,
      }"
    >
      <div class="wrapper">
        <h1>新移民服务</h1>
      </div>
    </header>
    <section class="sec-introduction">
      <div class="wrapper">
        <div class="headlineBlock">
          <div class="txt">
            <span>学校介绍</span>
          </div>
          <div class="angle"></div>
        </div>
      </div>
      <MainTitle
        title="项目介绍"
        titleEN="INTRODUCTION"
        titleENColor="#DADADA"
      />
      <div class="wrapper">
        <p>
          移民加拿大对国内申请人而言最具吸引力的方面之一就在于北美优质全面的教学质量。对拖儿带女初到加拿大的新移民来说，孩子的入学问题往往很头痛。
          新移民缺乏对加拿大教育体系的认识，对学校类型的了解，以及学校教学水平高低的判断。
          加彼岸为您提供各地学区的申请服务，联络院校，评估孩子的英语水平，帮您筛选最适合孩子的学校。
        </p>
      </div>
    </section>
    <section class="sec-introduction2">
      <MainTitle title="入学介绍" titleEN="BEGINNING" titleENColor="#DADADA" />
      <div class="wrapper">
        <p>
          孩子年满6岁即可进入小学学习。加拿大的初中和小学合在一起共九年级，高中从十年级到十二年级，加拿大的中小学教育特点与东方国家有很大不同。主要体现在年级分配与教学方法及教育思想上，各校对教材的选择也有一定的自主权和灵活性。
        </p>
      </div>
    </section>
    <section class="sec-requirements">
      <div class="wrapper">
        <div class="title-wrap">
          <div class="title">
            <img src="/img/logos/logo-trans.png" alt="" />
            <p>SCHOOLS</p>
          </div>
          <h1>学校类型</h1>
        </div>
        <div class="requirement-grid">
          <div
            class="requirement-item"
            v-for="(item, index) in schools"
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
    <section class="sec-introduction">
      <div class="wrapper">
        <div class="headlineBlock">
          <div class="txt">
            <span>新移民安家服务</span>
          </div>
          <div class="angle"></div>
        </div>
      </div>
      <MainTitle
        title="项目介绍"
        titleEN="INTRODUCTION"
        titleENColor="#DADADA"
      />
      <div class="wrapper">
        <p style="text-align: center">
          加彼岸为新移民安排贴心的安家服务。让你不会在初次登陆时对陌生环境无从下手。
        </p>
      </div>
    </section>
    <section class="sec-requirements">
      <div class="wrapper">
        <div class="title-wrap">
          <div class="title">
            <img src="/img/logos/logo-trans.png" alt="" />
            <p>SERVICES</p>
          </div>
          <h1>各类服务为您保驾护航</h1>
        </div>
        <div class="requirement-grid">
          <div
            class="requirement-item"
            v-for="(item, index) in services"
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
    <section class="divider">
      <h3>连接彼岸，用心服务，帮助海外客户和学生。</h3>
      <h3>我们，不忘初心。</h3>
    </section>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  head() {
    return {
      title: "加彼岸出国咨询 | 加拿大新移民服务",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "加彼岸出国咨询 | 加拿大新移民服务",
        },
      ],
    };
  },
  data() {
    return {
      hasButton: [],
      schools: [
        {
          title: "公立学校",
          requirement_points: [
            {
              point:
                "公立学校是由省政府或地方政府开办和监管的，由纳税人资助，父母仅需支付少许费用供学校用品和旅行之用。学生享受免费教育。",
            },
          ],
        },
        {
          title: "教会学校",
          requirement_points: [
            {
              point: "教会学校是指罗马天主教会开办的学校。学生享受免费教育。",
            },
          ],
        },
        {
          title: "私立学校",
          requirement_points: [
            {
              point:
                "私立学校是私人资助或开办的。需要收费，各学校之间价格差异非常悬殊。",
            },
          ],
        },
      ],
      services: [
        {
          title: "登陆接机",
        },
        {
          title: "申请医疗卡，推荐家庭医生",
        },
        {
          title: "税务咨询介绍",
        },
        {
          title: "临时住所安顿",
        },
        {
          title: "银行开户、办理信用卡",
        },
        {
          title: "协助申请驾照",
        },
        {
          title: "SIN工卡申请",
        },
        {
          title: "租房、买房协助",
        },
        {
          title: "旅游行程安排、机票预定",
        },
      ],
    };
  },
  mounted() {
    let reqBox = document.querySelectorAll(".requirement-item");
    console.log(reqBox);
    for (let i = 0; i < reqBox.length; i++) {
      if (reqBox[i].clientHeight > 150) {
        this.hasButton.push(true);
      } else {
        this.hasButton.push(false);
      }
    }
  },
  components: {
    VueMarkdown,
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

// headline divider block
.headlineBlock {
  background-color: #efefef;
  display: flex;
  height: 40px;
  margin-bottom: 50px;

  .txt {
    display: flex;
    height: 100%;
    align-items: center;
    background-color: $navy;
    color: white;
    padding: 0 20px;
    // display: inline-block;
  }

  .angle {
    height: 100%;
    width: 40px;
    background-image: linear-gradient(
      to top right,
      $navy 49.9%,
      transparent 50.1%
    );
  }
}

// introduction

.sec-introduction2 {
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
</style>

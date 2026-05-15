<template>
  <div class="project-detail-page">
    <header
      :style="{
        background: `linear-gradient(
        89.93deg,
        rgba(34, 52, 92, 0.7) 7.82%,
        rgba(34, 52, 92, 0) 102.35%
        ),url('/img/Projects/newImmi/language-header.jpg')`,
      }"
    >
      <div class="wrapper">
        <h1>新移民语言培训</h1>
      </div>
    </header>
    <section class="sec-1 about-sec">
      <div class="row-grid">
        <div class="info-wrap">
          <img
            src="/img/logos/logo-small-white.png"
            alt="寰球嘉途 加拿大移民 logo 白色"
          />
          <p>
            寰球嘉途™提供的新移民语言培训课程主要针对刚刚登陆加拿大的新移民，提高实用英语沟通能力，以方便他们更好地过渡和享受在加拿大的工作与生活。<span
              >大多数新移民朋友在课程开始之前，词汇量极其欠缺，语法结构混乱。日常生活中，很难准确而有效的表达自己的意图，也难以听懂本地加拿大人的口语。
            </span>
          </p>
        </div>
        <div class="imgContainer">
          <img
            src="/img/Projects/newImmi/language-row1.jpg"
            alt="加拿大新移民语言培训图片"
            class="sec-img"
          />
        </div>
      </div>
    </section>
    <section class="sec-2 about-sec">
      <div class="row-grid">
        <div class="imgContainer">
          <img
            src="/img/Projects/newImmi/language-row2.jpg"
            alt="加拿大新移民语言培训图片"
            class="sec-img"
          />
        </div>
        <div class="info-wrap">
          <img
            src="/img/logos/logo-small-blue.png"
            alt="寰球嘉途 加拿大移民 logo 蓝色"
          />
          <p>
            我们的新移民语言培训有专为成人设置的英语课程，将帮助您扩大高频单词词汇量，以满足日常生活和新工作中所涉及到的英语词汇。
            <span>
              在此基础上，课程还会帮助学员巩固复习基本英语语法结构，并通过不同课堂和课后练习帮助学生熟练灵活掌握所学内容。课堂话题内容与当地的加拿大社会和文化背景相结合,
              您将快速提高未来在本地就业的市场竞争力,
              并更容易地将其应用于自己的生活中。
            </span>
          </p>
        </div>
      </div>
    </section>
    <section class="sec-3 about-sec">
      <div class="row-grid">
        <div class="info-wrap">
          <img
            src="/img/logos/logo-small-blue.png"
            alt="寰球嘉途 加拿大移民 logo 蓝色"
          />

          <p>
            我们的新移民语言培训有为孩子初到异国设置的<span>雅思托福课程以及初高中各学科同步培优辅导，</span>工作团队由中加资深教育专家和在职公校私校教师组成。教学理念先进，注重学生个性化开发，专业负责，服务宗旨是帮助每个学生成就不同的优秀。
          </p>
        </div>
        <div class="imgContainer">
          <img
            src="/img/Projects/newImmi/language-row3.jpg"
            alt="加拿大新移民语言培训 毕业图片"
            class="sec-img"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `加拿大移民 | 新移民语言培训 | 寰球嘉途`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 |寰球嘉途™提供的新移民语言培训课程主要针对刚刚登陆加拿大的新移民，提高实用英语沟通能力，以方便他们更好地过渡和享受在加拿大的工作与生活。| 寰球嘉途`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sec-img {
  width: 100%;
  height: 100%;
  // height: auto;
  object-fit: cover;
}
.about-sec .row-grid {
  display: grid;
  .info-wrap {
    margin-top: 40px;
    height: 100%;
    display: flex;
    padding: 30px 0;
    p {
      font-size: 16px;
      line-height: 1.9;
      color: #fff;
      font-weight: bold;
    }
    span {
      color: #c4c4c4;
      font-weight: normal;
    }
    img {
      max-width: 28px;
      height: 51px;
      margin-right: 10px;
    }
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    img {
      width: 22px;
      margin-right: 15px;
    }
    h2 {
      font-size: 28px;
      color: #fff;
      margin-bottom: 0;
      font-weight: 700;
    }
  }
}
.sec-1 {
  background-color: $primary;
  .row-grid {
    grid-template-columns: 60% 40%;
    .info-wrap {
      padding-right: 80px;
      padding-left: 7.5vw;
    }
  }
}
.sec-2 {
  background-color: #e9e9e9;
  .row-grid {
    grid-template-columns: 40% 60%;
    .title {
      h2 {
        color: $primary;
      }
    }
    .info-wrap {
      padding-left: 80px;
      padding-right: 7.5vw;
      p {
        color: $primary;
      }
      span {
        color: #707070;
      }
    }
  }
}
.sec-3 {
  background-color: #fff;
  .row-grid {
    grid-template-columns: 60% 40%;
    .info-wrap {
      padding-right: 80px;
      padding-left: 7.5vw;
      p {
        color: #707070;
        font-weight: normal;
      }
      span {
        color: $primary;
        font-weight: bold;
      }
    }
  }
}
@media all and (max-width: 991px) {
  header {
    background-position: bottom;
    height: 300px;
    display: flex;
    align-items: center;
    h1 {
      font-size: 42px;
    }
    h1::after {
      top: 70%;
      left: 0;
      width: 100px;
      height: 6px;
      font-size: 70px;
    }
  }
  .about-sec .row-grid .info-wrap {
    margin-top: 0;
  }
  .sec-1,
  .sec-2,
  .sec-3 {
    // padding: 30px 0;
    .row-grid {
      grid-template-columns: 1fr;
      .info-wrap {
        padding: 40px 30px 30px 30px;
      }
      p {
        font-size: 14px;
      }
    }
  }

  .sec-2 {
    .imgContainer {
      order: 2;
    }
  }
  .divider {
    background-color: $secondary;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      text-align: center;
      font-size: 18px;
      color: #fff;
      margin-bottom: 0;
    }
  }

  .sec-img {
    max-width: 400px;
    display: block;
    margin: auto;
    padding-bottom: 50px;
  }
}
</style>

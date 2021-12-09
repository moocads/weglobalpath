<template>
  <div>
    <div id="home-wrap">
      <header>
        <div class="banner-overlay"></div>
        <img src="/img/Home/banner.png" alt="" />
        <div class="info-wrap">
          <img
            src="/img/Home/banner-text.png"
            alt=""
            class="banner-text banner-text1"
          />
          <img
            src="/img/Home/banner-text2.png"
            alt=""
            class="banner-text banner-text2"
          />
          <p>多年移民留学服务经验 一站式全程规划 衔接加拿大移民的高效途径</p>
          <NuxtLink to="/contact">
            <button class="main-btn main-btn_blue main-btn_round">
              快速咨询
            </button>
          </NuxtLink>
        </div>
      </header>
    </div>
    <section id="home-services">
      <div class="wrapper">
        <MainTitle title="热门项目" titleEN="SERVICES" />
        <div class="projects-wrap">
          <div class="project-1 project-item">
            <NuxtLink to="/projects/nominee">
              <div class="proj1-overlay proj-overlay"></div>
              <img src="/img/Home/projects/project1.png" alt="" />
              <h2>
                加拿大免雅思<br />
                雇主担保移民
              </h2>
            </NuxtLink>
          </div>
          <div class="project-2 project-item">
            <NuxtLink to="/projects/new-immigrant">
              <div class="proj2-overlay proj-overlay"></div>
              <img src="/img/Home/projects/project2.png" alt="" />
              <h2>新移民服务</h2>
            </NuxtLink>
          </div>
          <div class="project-3 project-item">
            <NuxtLink to="/projects/education">
              <div class="proj3-overlay proj-overlay"></div>
              <img src="/img/Home/projects/project3.png" alt="" />
              <h2>加拿大名校申请<br />留学移民</h2>
            </NuxtLink>
          </div>
          <div class="project-4 project-item">
            <NuxtLink to="/projects/startup">
              <div class="proj4-overlay proj-overlay"></div>
              <img src="/img/Home/projects/project4.png" alt="" />
              <h2>加拿大创业移民</h2>
            </NuxtLink>
          </div>
          <div class="project-5 project-item">
            <NuxtLink to="/projects/entrepreneur">
              <div class="proj5-overlay proj-overlay"></div>
              <img src="/img/Home/projects/project5.png" alt="" />
              <h2>加拿大企业家移民</h2>
            </NuxtLink>
          </div>
          <div class="project-6 project-item">
            <NuxtLink to="/projects/reunion">
              <div class="proj6-overlay proj-overlay"></div>
              <img src="/img/Home/projects/project6.png" alt="" />
              <h2>加拿大团聚移民</h2>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section id="home-counter">
      <div class="wrapper">
        <div class="title-wrap">
          <h1>选择我们 选择放心</h1>
          <img src="/img/logos/logo-small-white.png" alt="" />
        </div>
        <a-row :gutter="[16, 16]">
          <a-col :xs="12" :md="6" class="counter-item">
            <h2>100+</h2>
            <p>全球合作校园</p>
          </a-col>
          <a-col :xs="12" :md="6" class="counter-item">
            <h2>6000+</h2>
            <p>移民申请成功案例</p>
          </a-col>
          <a-col :xs="12" :md="6" class="counter-item">
            <h2>98.1%</h2>
            <p>移民申请通过率</p>
          </a-col>
          <a-col :xs="12" :md="6" class="counter-item">
            <h2>1000+</h2>
            <p>海外优质雇主资源</p>
          </a-col>
        </a-row>
      </div>
    </section>
    <section id="home-about">
      <div class="wrapper">
        <a-row :gutter="[24, 8]">
          <a-col :lg="12">
            <MainTitleSide title="关于加彼岸" titleEN="ABOUT US" />
            <p>
              加彼岸旗下有加彼岸出国咨询（BEYONDCANADA
              CONSULTING），彼森教育（BISON EDUCATION）和彼岸投资（BEYONDCANADA
              INVESTMENT）三家子公司，均为加拿大联邦注册公司，分别由自身移民律师，RCIC（加拿大移民顾问监管委员会）持牌移民顾问，教育顾问，职业培训师，地产经纪，会计师及商务专家组成的强大专业服务团队。
            </p>
            <p>
              加彼岸出国咨询是权威办理加拿大省提名移民项目的加拿大本地公司。作为加拿大项目方，我们保持独家项目优势，始终保持高市场份额占有率，每位顾问都有多年的在海外的留学生活经验及海外工作经验。最重要的是，我们把每一位客户当作自己亲人来服务，在全加拿大境内的省提名项目中协助您评估现实状况并作出最合适的规划建议。加彼岸出国咨询将一如既往地与国内合作伙伴紧密合作，客户至上的精神，为客户提供最优质最专业的移民咨询服务。
            </p>
            <div class="button-wrap">
              <NuxtLink to="/about">
                <button
                  class="about-btn main-btn main-btn_red main-btn_round-5"
                >
                  了解更多
                </button>
              </NuxtLink>
              <NuxtLink to="/contact">
                <button
                  class="about-btn main-btn main-btn_red main-btn_round-5"
                >
                  联系我们
                </button>
              </NuxtLink>
            </div>
          </a-col>
          <a-col :lg="12">
            <img
              src="/img/Home/about-img2.jpg"
              alt=""
              class="img-fluid about-img"
            />
          </a-col>
        </a-row>
      </div>
    </section>
    <!-- <section id="home-cases">
      <MainTitle title="成功案例" titleEN="OUR CASES" titleENColor="#c4c4c4" />
      <div class="wrapper">
        <div class="cases-grid">
          <div class="case-item">
            <CaseCard
              thumbnail="url('/img/Home/about-img.jpg')"
              title="安省境外雇主担保"
              date="2021-11-13"
            />
          </div>
          <div class="case-item">
            <CaseCard
              thumbnail="url('/img/Home/about-img.jpg')"
              title="安省境外雇主担保"
              date="2021-11-13"
            />
          </div>
          <div class="case-item">
            <CaseCard
              thumbnail="url('/img/Home/about-img.jpg')"
              title="安省境外雇主担保"
              date="2021-11-13"
            />
          </div>
        </div>
      </div>
    </section> -->
    <section id="home-testimonial">
      <div class="wrapper">
        <MainTitle title="客户评价" titleEN="FEEDBACK" />
        <a-carousel arrows :slidesToShow="2" :autoplay="true" class="slider-lg">
          <div slot="prevArrow" class="custom-slick-arrow">
            <img src="/img/Home/left-arrow.png" alt="" />
          </div>
          <div slot="nextArrow" class="custom-slick-arrow">
            <img src="/img/Home/right-arrow.png" alt="" />
          </div>
          <div v-for="(fb, index) in feedbackData" :key="index">
            <TestimonialCard
              :name="fb.name"
              :avatar="fb.avatar"
              :content="fb.content"
            />
          </div>
        </a-carousel>
        <a-carousel :slidesToShow="1" :autoplay="true" class="slider-sm">
          <div v-for="(fb, index) in feedbackData" :key="index">
            <TestimonialCard
              :name="fb.name"
              :avatar="fb.avatar"
              :content="fb.content"
            />
          </div>
        </a-carousel>
      </div>
    </section>
    <!-- <section id="home-blogs">
      <div class="wrapper">
        <MainTitle
          title="加彼岸热讯"
          titleEN="ARTICLES"
          titleENColor="#c4c4c4"
        />
        <div class="blogs-grid">
          <div
            class="blog-item"
            v-for="(blog, index) in blogsData"
            :key="index"
          >
            <BlogCard
              :thumbnail="blog.thumbnail"
              :title="blog.title"
              :description="blog.description"
              :date="blog.date"
            />
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  head: {
    title: "加彼岸出国咨询 | 首页",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "加彼岸出国咨询 | 首页",
      },
    ],
  },
  data() {
    return {
      feedbackData: [
        {
          name: "张同学",
          avatar: "/img/Home/avatar.png",
          content:
            "非常感谢加彼岸出国咨询公司，办事效率高，认真负责，让我和我老婆顺利拿到PR。在办理的过程中，对材料的整理和格式文件的要求认真负责，细心到位，他们的公司的工作效率高，文案能力强，公司的实力和能力，也让我着实放心，让我毫无困扰，轻轻松松走上移民之路。",
        },
        {
          name: "王女士",
          avatar: "/img/Home/avatar.png",
          content:
            "非常感谢Luna和Lisa对我和女儿签证的帮助。先给出了准确的移民方案，然后帮我们一步步操作，从陪读签到我小女儿的学签，准备材料很充分，申请步骤很清晰，解答问题很耐心。由于疫情，被拒签的情况很多，我当时非常焦虑，Luna和Lisa会解除我的顾虑，在她们的帮助下，我们的签证不到1个月全部顺利获批，非常感谢加彼岸，让我们能够快速顺利入境加拿大。",
        },
        {
          name: "戴同学",
          avatar: "/img/Home/avatar.png",
          content:
            "在我毕业后第一时间金老师就帮我安排工作培训，在提交毕业工签后我就开始正式工作积累移民要求的工作时间，而且那时我已经对工作内容都已经熟悉，工作起来得心应手。雇主资源这一块的保障是非常重要的，在我的省提名审理中只有雇主接到电话，自己没被要求过任何材料。我的移民之路上，从未有过任何烦恼。衷心感谢加彼岸！",
        },
        {
          name: "张女士",
          avatar: "/img/Home/avatar.png",
          content:
            "收到COPR的第二天，还是感觉很惊喜。走完这全程，只能说难以置信的顺利，感谢加彼岸为我保驾护航! 雇主担保当时咨询了很多人，遇到Luna觉得很幸运，经验丰富、做事极有效率且为人真诚的人。在她耐心地帮助下，当时不到一个月就拿到了雇主担保的省提名信，顺利完成人生中的一件重要的事，我真的很幸运，感谢无以言表。",
        },
        {
          name: "陈先生",
          avatar: "/img/Home/avatar.png",
          content:
            "我们全家通过加拿大投资移民上周已经顺利登陆，感谢加彼岸投资团队的服务精神，全程从项目定向，注册公司，选址到后续会计报税，可以说事无巨细的帮我把项目在加拿大境内落地，每个月参加一次视频会议，大家会和我汇报目前企业运营的情况和状态，我基本没有操心，能安心在国内，想说一句你们辛苦了！",
        },
      ],
      blogsData: [
        {
          thumbnail: "url('/img/Home/about-img.jpg')",
          title: "中文文章标题测试",
          date: "2021-11-13",
          description:
            "加拿大在不同省份都有相对的紧缺行业，医护、科技、护工等等的就不用多说，但相信你最没想到的，是卡车司机！加拿大和美国面临着大量的货柜车司机短缺，在未来五年内的缺口达到5万个工作岗位之上。卡车司机属于C类岗位（NOC 7511），在很多省份中都属于紧缺职业，可以通过获得省提名后递交联邦移民申请，获得永久居民身份。",
        },
        {
          thumbnail: "url('/img/Home/about-img.jpg')",
          title: "中文文章标题测试",
          date: "2021-11-13",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis id scelerisque aenean conse  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis id scelerisque aenean conse",
        },
        {
          thumbnail: "url('/img/Home/about-img.jpg')",
          title: "English Blogs Title",
          date: "2021-11-13",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis id scelerisque aenean conse  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis id scelerisque aenean conse",
        },
        {
          thumbnail: "url('/img/Home/about-img.jpg')",
          title: "English Blogs Title",
          date: "2021-11-13",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis id scelerisque aenean conse  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis id scelerisque aenean conse",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
#home-testimonial {
  margin-bottom: 50px;

  .ant-carousel .custom-slick-arrow {
    width: 20px;
    height: 20px;
  }
  .ant-carousel .slick-next {
    right: -45px;
  }
  .ant-carousel .slick-prev {
    left: -45px;
  }
  .ant-carousel .slick-dots-bottom {
    bottom: -20px;
  }
  .ant-carousel .slick-dots li {
    margin: 0 10px;
  }
  .ant-carousel .slick-dots li button {
    display: block;
    width: 10px;
    height: 10px;
    padding: 0;
    color: transparent;
    font-size: 0;
    background: #c4c4c4;
    border: 0;
    border-radius: 50%;
  }
  .ant-carousel .slick-active button {
    background: $red !important;
  }
}
@media all and (max-width: 768px) {
}
</style>
<style lang="scss" scoped>
/* ------------------------------------------------------ */
/*                ANCHOR HERO BANNER STYLE                */
/* ------------------------------------------------------ */

header {
  position: relative;
  overflow: hidden;
  max-height: 800px;
  width: 100%;

  img {
    width: 100%;
    z-index: -1;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100vw;
    height: 100%;
    background: linear-gradient(
      90.4deg,
      #22345c 0.37%,
      rgba(251, 251, 251, 0) 99.69%
    );
  }
}
header .info-wrap {
  max-width: 1440px;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 19;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: #fff;
    margin-top: 35px;
    margin-bottom: 50px;
  }
  .banner-text {
    height: 80px;
    width: 370px;
  }
  .banner-text1 {
    height: 90px;
    margin-bottom: 20px;
    width: 400px;
  }
  .banner-text2 {
    margin-left: 50px;
  }
}
@media all and (max-width: 768px) {
  header {
    height: 100vh;
    img {
      object-fit: cover;
      object-position: 90% center;
      height: 100vh;
    }
  }
  header .info-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 25px;
    max-width: 1440px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      text-align: center;
    }
    .banner-text {
      height: 30px;
      width: 200px;
    }
    .banner-text1 {
      height: 50px;
      margin-bottom: 20px;
      width: 220px;
    }
    .banner-text2 {
      margin-left: 50px;
      width: 220px;
      height: auto;
    }
  }
}
/* ------------------------------------------------------ */
/*                ANCHOR HOME SERVICE STYLE               */
/* ------------------------------------------------------ */
#home-services {
  padding: 50px 0;
}
.projects-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 300px 150px 300px;
  gap: 20px 20px;
  grid-auto-flow: row;
  grid-template-areas:
    "project-1 project-1 project-2 project-3"
    "project-4 project-5 project-2 project-3"
    "project-4 project-5 project-6 project-6";
}
.project-item {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  img {
    z-index: -1;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  h2 {
    font-size: 22px;
    color: #fff;
    position: absolute;
    left: 20px;
    bottom: 20px;
    z-index: 9;
  }
}
.proj-overlay {
  transition: all 0.3s ease-in-out;
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.project-1 {
  grid-area: project-1;
  position: relative;
  max-height: 300px;
  .proj1-overlay {
    background: rgba(22, 41, 84, 0.5);
  }
  .proj1-overlay:hover {
    background: none;
  }
}

.project-2 {
  grid-area: project-2;
  .proj2-overlay {
    background: rgba(171, 146, 105, 0.5);
  }
  .proj2-overlay:hover {
    background: none;
  }
}

.project-3 {
  grid-area: project-3;
  .proj3-overlay {
    background: rgba(22, 41, 84, 0.5);
  }
  .proj3-overlay:hover {
    background: none;
  }
}

.project-4 {
  grid-area: project-4;
  .proj4-overlay {
    background: rgba(171, 146, 105, 0.5);
  }
  .proj4-overlay:hover {
    background: none;
  }
}

.project-5 {
  grid-area: project-5;
  .proj5-overlay {
    background: rgba(22, 41, 84, 0.5);
  }
  .proj5-overlay:hover {
    background: none;
  }
}

.project-6 {
  grid-area: project-6;
  // max-height: 320px;

  .proj6-overlay {
    background: rgba(171, 146, 105, 0.5);
  }
  .proj6-overlay:hover {
    background: none;
  }
}
@media all and (max-width: 768px) {
  #home-services {
    padding: 30px 0;
  }
  .projects-wrap {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 150px;
    gap: 20px 20px;
    grid-auto-flow: row;
    grid-template-areas:
      "project-1"
      "project-2"
      "project-3"
      "project-4"
      "project-5"
      "project-6";
  }
  .project-item {
    max-height: 150px;
    h2 {
      font-size: 18px;
      left: 10px;
      bottom: 10px;
    }
  }
}
/* ------------------------------------------------------ */
/*                  ANCHOR COUNTER STYLE                  */
/* ------------------------------------------------------ */
#home-counter {
  background: url("/img/Home/counter-bg.png") no-repeat;
  background-size: cover;
  background-color: rgba(22, 41, 84, 0.7);
  background-blend-mode: multiply;
  padding: 100px 0;
}
#home-counter .title-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  h1 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 0;
  }
  img {
    width: 30px;
    transform: rotate(90deg);
  }
}

#home-counter .counter-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2,
  p {
    color: #c4c4c4;
  }
  h2 {
    font-size: 54px;
    font-weight: 700;
  }
  p {
    margin: 0;
    font-size: 18px;
  }
}
@media all and (max-width: 768px) {
  #home-counter .title-wrap {
    margin-bottom: 30px;
    h1 {
      color: #fff;
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 0;
    }
    img {
      width: 30px;
      transform: rotate(90deg);
    }
  }
  #home-counter .counter-item {
    h2 {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 3px;
    }
    p {
      margin: 0;
      font-size: 16px;
    }
  }
}
/* ------------------------------------------------------ */
/*                   ANCHOR ABOUT STYLE                   */
/* ------------------------------------------------------ */
#home-about {
  padding: 50px 0;

  .about-img {
    border-radius: 10px;
  }
}
.about-btn {
  margin-right: 15px;
}

.button-wrap {
  padding-top: 30px;
}

@media all and (max-width: 768px) {
  .about-btn {
    padding: 15px 40px;
    margin-right: 5px;
    margin-left: 5px;
  }
  .button-wrap {
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
/* ------------------------------------------------------ */
/*                   ANCHOR CASES STYLE                   */
/* ------------------------------------------------------ */
#home-cases {
  padding: 100px 0;
  background-color: #efefef;
}
#home-cases .cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
}
@media all and (max-width: 768px) {
  #home-cases {
    padding: 30px 0;
  }
  #home-cases .cases-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
}

/* ------------------------------------------------------ */
/*                 ANCHOR TESTMONIAL STYLE                */
/* ------------------------------------------------------ */
#home-testimonial {
  padding: 50px 0;
  .slider-lg {
    display: block;
  }
  .slider-sm {
    display: none;
  }
}
@media all and (max-width: 768px) {
  #home-testimonial {
    padding: 50px 0;
    .slider-lg {
      display: none;
    }
    .slider-sm {
      display: block;
    }
  }
}
/* ------------------------------------------------------ */
/*                   ANCHOR BLOGS STYLE                   */
/* ------------------------------------------------------ */
#home-blogs {
  padding: 100px 0;
  background-color: #efefef;
}
#home-blogs .blogs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
}
@media all and (max-width: 768px) {
  #home-blogs .blogs-grid {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
}
</style>

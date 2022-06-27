<template>
  <div>
    <div id="home-wrap">
      <header>
        <div class="home-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="slide-info">
                <h1>连接彼岸 用心服务</h1>
                <p>
                  加彼岸，您的私人移民规划师，衔接加拿大移民的高效途径，一站式全程规划。移民，不走弯路！
                </p>
                <div class="header-btn-wrap">
                  <NuxtLink to="/evaluation">
                    <button class="main-btn main-btn_blue main-btn_round">
                      移民打分
                    </button>
                  </NuxtLink>
                  <NuxtLink to="/self-test">
                    <button class="main-btn main-btn_blue main-btn_round">
                      移民自测
                    </button>
                  </NuxtLink>
                </div>
              </div>
              <div class="banner-overlay"></div>
              <img src="/img/Home/banner.png" alt="Beyond Canada Banner-1" />
            </div>
            <div
              class="swiper-slide"
              v-for="(slide, i) in homeSlideData"
              :key="i"
            >
              <div class="slide-info">
                <h1>{{ slide.title }}</h1>
                <p>
                  {{ slide.info }}
                </p>
                <NuxtLink :to="slide.slug">
                  <button class="main-btn main-btn_blue main-btn_round">
                    {{ slide.btn ? slide.btn : "查看项目详情" }}
                  </button>
                </NuxtLink>
              </div>
              <div class="banner-overlay"></div>
              <img
                :class="{ positioned: i === 3 }"
                :src="slide.img"
                :alt="`Beyond Canada Banner-${i + 1}`"
              />
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <!-- <div class="banner-overlay"></div>
        <img src="/img/Home/banner.png" alt="Beyond Canada Banner" /> -->
        <!-- <div class="info-wrap">
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
          <p>
            多年移民留学服务经验，一站式全程规划，衔接加拿大移民的高效途径。<br
              class="sm-only"
            />移民，不走弯路！
          </p>
          <div class="header-btn-wrap">
            <NuxtLink to="/evaluation">
              <button class="main-btn main-btn_blue main-btn_round">
                移民打分
              </button>
            </NuxtLink>
            <NuxtLink to="/self-test">
              <button class="main-btn main-btn_blue main-btn_round">
                移民自测
              </button>
            </NuxtLink>
          </div>
        </div> -->
      </header>
    </div>
    <section id="home-services">
      <div class="wrapper">
        <MainTitle title="热门项目" titleEN="SERVICES" />
        <div class="projects-wrap">
          <div class="project-item project-1">
            <div class="img-wrap">
              <img
                data-src="/img/Home/projects/home-project1.jpg"
                alt=""
                class="img-fluid lazyload"
              />
            </div>
            <div class="content-wrap">
              <h2>加拿大移民</h2>
              <p>
                加拿大联邦创业投资SUV，加拿大雇主担保移民，加拿大安省、曼省、BC省、萨省、加拿大海洋四省PNP省提名移民，加拿大留学经验类移民，加拿大企业家移民，加拿大文体自雇移民，联邦农业试点，海洋四省AIP雇主担保，加拿大联邦快速通道，EE加分５０、EE加分２００，加拿大家庭团聚移民。加彼岸覆盖加拿大各省份项目资源，我们以客户条件为优先级匹配适合的项目。
              </p>
              <nuxt-link to="/projects">了解详情</nuxt-link>
            </div>
          </div>
          <div class="project-item project-2">
            <div class="img-wrap">
              <img
                data-src="/img/Home/projects/home-project2.jpg"
                alt=""
                class="img-fluid lazyload"
              />
            </div>
            <div class="content-wrap">
              <h2>加拿大签证</h2>
              <p>
                加拿大学签、境内旅游签转学签，加拿大工签、境内旅游签转工签，加拿大高管创业LMIA，加拿大公司高管派遣工签，加拿大企业家工签，加拿大LMIA劳工批文，加拿大旅游签，加拿大旅游签境内续签Visitor
                Record，加拿大超级签证。加彼岸提供加拿大各类签证检查案件Review的服务，为我们的客户提供最优性价比。
              </p>
              <!-- <nuxt-link to="/projects/nominee">了解详情</nuxt-link> -->
            </div>
          </div>
          <div class="project-item project-3">
            <div class="img-wrap">
              <img
                data-src="/img/Home/projects/home-project3.jpg"
                alt=""
                class="img-fluid lazyload"
              />
            </div>
            <div class="content-wrap">
              <h2>加拿大留学</h2>
              <p>
                大学保录取孵化社区，为学生进行背景评估、选择学校/专业、递交申请斩获名校OFFER。学生青春十年计划，从加拿大落地后的接待安置服务，到留学期间的有效身份。加彼岸提供留学后续服务，职业就业、移民详尽规划。
              </p>
              <nuxt-link to="/projects/education">了解详情</nuxt-link>
            </div>
          </div>
          <div class="project-item project-4">
            <div class="img-wrap">
              <img
                data-src="/img/Home/projects/home-project4.jpg"
                alt=""
                class="img-fluid lazyload"
              />
            </div>
            <div class="content-wrap">
              <h2>加拿大新移民服务</h2>
              <p>
                加彼岸为新移民安排贴心的安家服务。让您不会在初次登陆时对陌生环境无从下手。我们提供临时住所安顿、租房、买房协助，登陆接机，个人保险，银行开户办理信用卡，协助申请驾照，税务咨询介绍等服务。连接彼岸，用心服务，帮助海外客户和学生。
              </p>
              <nuxt-link to="/projects/new-immigrant">了解详情</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <HomeProcess />
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
              加彼岸旗下有加彼岸出国咨询（BEYOND CANADA
              CONSULTING），彼森教育（BISON INTERNATIONAL
              EDUCATION）和彼岸投资（BEYOND CANADA
              INVESTMENT）三家子公司，均为加拿大联邦注册公司，分别由资深移民律师，RCIC（加拿大移民顾问监管委员会）持牌移民顾问，教育顾问，职业培训师，地产经纪，会计师及商务专家组成的强大专业服务团队。
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
    <section id="home-cases">
      <MainTitle title="成功案例" titleEN="OUR CASES" titleENColor="#c4c4c4" />
      <div class="wrapper">
        <div class="cases-grid">
          <div
            class="case-item"
            v-for="(homeCase, index) in cases"
            :key="index"
          >
            <CaseCard :data="homeCase" />
            <CaseCardMobile :data="homeCase" />
          </div>
        </div>
        <button class="cases-btn main-btn main-btn_blue main-btn_round-5">
          <NuxtLink to="/cases"> 更多案例 </NuxtLink>
        </button>
      </div>
    </section>
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
    <section id="home-blogs">
      <div class="wrapper">
        <MainTitle
          title="加彼岸热讯"
          titleEN="ARTICLES"
          titleENColor="#c4c4c4"
        />
        <a-tabs class="blog-tabs" default-active-key="tab-0">
          <a-tab-pane
            v-for="(blog, key, i) in blogs"
            :key="'tab-' + i"
            :tab="key"
          >
            <div class="blogs-grid">
              <div class="blog-item" v-for="(b, index) in blog" :key="index">
                <BlogCard
                  :thumbnail="b.thumbnail_cn.url"
                  :title="b.title_cn"
                  :description="b.description_cn"
                  :date="b.published_at.split('T')[0]"
                  :link="'/blogs/' + b.slug"
                />
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `加拿大移民 | 首页 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 首页 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const casesData = await $axios.$get(`/cases`, {
      params: {
        _sort: "id:desc",
        _limit: "4",
      },
    });
    const all = await $axios.$get(`/blogs`, {
      params: {
        _sort: "published_at:desc",
        _limit: "4",
      },
    });
    const news = await $axios.$get(`/blogs?categories.category=news`, {
      params: {
        _sort: "published_at:desc",
        _limit: "4",
      },
    });
    const policy = await $axios.$get(`/blogs?categories.category=policy`, {
      params: {
        _sort: "published_at:desc",
        _limit: "4",
      },
    });
    const visa = await $axios.$get(`/blogs?categories.category=visa`, {
      params: {
        _sort: "published_at:desc",
        _limit: "4",
      },
    });
    const edu = await $axios.$get(`/blogs?categories.category=edu`, {
      params: {
        _sort: "published_at:desc",
        _limit: "4",
      },
    });
    const aboutUs = await $axios.$get(`/blogs?categories.category=aboutUs`, {
      params: {
        _sort: "published_at:desc",
        _limit: "4",
      },
    });
    const data = {
      所有资讯: all,
      热点新闻: news,
      签证百科: policy,
      签证百科: visa,
      留学指南: edu,
      加彼岸动态: aboutUs,
    };
    const cases = casesData;
    // const blogs = blogsData;
    const arr = Object.entries(data);
    const filtered = arr.filter(([key, value]) => value.length > 0);
    const blogs = Object.fromEntries(filtered);
    return {
      cases,
      blogs,
    };
  },
  data() {
    return {
      homeSlideData: [
        {
          title: "加拿大联邦创业投资移民SUV",
          info: "不用提供资金来源证明｜中国境内等待永居卡获批｜商业运营结果不影响审批｜100%获得支持信承诺",
          slug: "/projects/startup/start-up-visa",
          img: "/img/Home/创业投资.jpg",
        },
        {
          title: "加拿大安省雇主担保移民",
          info: "无语言要求｜申请条件宽松｜一人申请全家移民｜一步到位落地安省｜加拿大教育资源最好的省份",
          slug: "/projects/nominee/ontario-immigrat-nominee-program",
          img: "/img/Home/安省境外雇主担保.jpg",
        },
        {
          title: "曼省留学移民",
          info: "5万加币起｜最快速留学+就业移民途径｜一步到位全家移民｜真实带薪工作",
          slug: "/projects/education/manitoba-education",
          img: "/img/Home/曼省留学.jpg",
        },
        {
          title: "企业主创业工签",
          info: "EE快速通道＋200分｜办理速度快｜定居任意省份｜入境加拿大获得事业基础｜总费用性价比最高",
          slug: "/projects/startup/owner-operator-work-permit",
          img: "/img/Home/企业主人才.jpg",
        },
        {
          title: "美国杰出人才EB1A",
          info: "最快5天审批｜无需语言要求｜前期评估确保成功率｜50万人民币起｜最快获得美国绿卡移民项目",
          btn: "快速移民美国",
          slug: "/projects/usa/eb-1a",
          img: "/img/Home/USA绿卡项目.jpg",
        },
      ],
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
  mounted() {
    const swiper = new Swiper(".home-swiper", {
      speed: 400,
      spaceBetween: 100,
      loop: true,
      autoplay: {
        delay: 4000,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  },
};
</script>
<style lang="scss">
/* ------------------------------------------------------ */
/*                ANCHOR HERO BANNER STYLE                */
/* ------------------------------------------------------ */

header {
  position: relative;
  overflow: hidden;
  max-height: 550px;
  width: 100%;
  img {
    width: 100%;
    z-index: -1;
  }
  .positioned {
    object-position: 50% 0;
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
    height: 60px;
    width: 310px;
  }
  .banner-text1 {
    height: 60px;
    margin-bottom: 20px;
    width: 310px;
  }
  .banner-text2 {
    margin-left: 50px;
  }
}
.header-btn-wrap {
  a {
    margin-right: 10px;
  }
}
@media all and (max-width: 768px) {
  .sm-only {
    display: block;
  }
  .header-btn-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      margin: 0;
    }
  }
  header {
    height: 100vh;
    img {
      object-fit: cover;
      object-position: 90% center;
      height: calc(100vh - 140px);
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
.home-swiper {
  position: relative;
  top: 0;
  left: 0;
  // bottom: 0;
  right: 0;
  max-height: 550px;
  img {
    width: 100%;
    height: 550px;
    object-fit: cover;
  }
  .positioned {
    object-position: 50% 0;
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    color: white;
    left: 60px;
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    color: white;
    right: 60px;
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: rgb(199, 199, 199);
  }
  .swiper-slide {
    position: relative;
    max-height: 550px;
  }
  .slide-info {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 100%;
    h1 {
      font-size: 48px;
      color: white;
      font-weight: bold;
      margin: 0;
    }
    p {
      margin-bottom: 20px;
    }
  }
}
@media all and (max-width: $md) {
  .home-swiper {
    .slide-info {
      h1 {
        font-size: 28px;
      }
    }
    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
      left: 10px;
    }
    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
      right: 10px;
    }
  }
}
@media all and (max-width: $sm) {
  .home-swiper {
    max-height: calc(100vh - 140px);
    .swiper-slide {
      position: relative;
      max-height: calc(100vh - 140px);
    }
    .slide-info {
      padding: 20px;
      h1 {
        font-size: 24px;
      }
      p {
        font-size: 14px;
      }
    }
    .main-btn_blue {
      padding: 10px 25px;
      font-size: 16px;
      font-weight: 500;
    }
    .swiper-button-prev,
    .swiper-rtl .swiper-button-next,
    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
      display: none;
    }
  }
}

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
.sm-only {
  display: none;
}

/* ------------------------------------------------------ */
/*                ANCHOR HOME SERVICE STYLE               */
/* ------------------------------------------------------ */

#home-services {
  padding: 50px 0;
}
.projects-wrap {
  display: grid;
  grid-template-columns: 1fr;
  // row-gap: 150px;
}
.project-item {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding: 50px 0;
  column-gap: 50px;
}
.project-item:first-child {
  padding-top: 0;
}
.project-item:not(:last-child) {
  border-bottom: 1px dashed #ddd;
}
.project-item .img-wrap {
  img {
    object-fit: cover;
    max-height: 300px;
    width: 500px;
    border-radius: 5px;
  }
}
.project-item .content-wrap {
  h2 {
    font-size: 24px;
    color: $navy;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    color: #707070;
  }
  a {
    display: block;
    width: fit-content;
    background-color: $red;
    color: #fff;
    padding: 5px 15px;
    border-radius: 25px;
    margin-top: 35px;
  }
}
.project-2,
.project-4 {
  .content-wrap {
    order: 1;
  }
  .img-wrap {
    order: 2;
  }
}
@media all and (max-width: 768px) {
  #home-services {
    padding: 30px 0;
  }

  .project-item {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    align-items: center;
    padding: 30px 0;
    row-gap: 30px;
  }
  .project-item .img-wrap {
    order: 2;
    img {
      object-fit: cover;
      max-height: 300px;
      width: 100%;
      border-radius: 5px;
    }
  }
  .project-item .content-wrap {
    order: 1;
    align-self: flex-start;
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
    a {
      margin-top: 15px;
    }
  }
  .project-2,
  .project-4 {
    .content-wrap {
      order: 1;
    }
    .img-wrap {
      order: 2;
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
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
}
.cases-btn {
  display: flex;
  margin: 20px auto;
}
@media all and (max-width: 992px) {
  #home-cases .cases-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
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
  .cases-btn {
    display: flex;
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

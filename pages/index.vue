<template>
  <div>
    <HomeHeroBanner />
    <HomeServices />
    <HomeDrawer v-if="$i18n.locale === 'zh'" :data="drawerData" />
    <HomeDrawerEN v-if="$i18n.locale === 'en'" :data="drawerDataEN" />
    <HomeProcess />
    <HomeAbout />
    <section v-if="$i18n.locale === 'zh'" id="home-blogs">
      <div class="wrapper">
        <MainTitle
          title="加彼岸热讯"
          titleEN="ARTICLES"
          titleENColor="#f1f1f1"
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
            <NuxtLink :to="`/blogs${i != 0 ? '?category=' + i : ''}`">
              <button class="cases-btn main-btn main-btn_blue main-btn_round-5">
                更多资讯
              </button>
            </NuxtLink>
          </a-tab-pane>
        </a-tabs>
      </div>
    </section>
    <section v-if="$i18n.locale === 'zh'" id="home-cases">
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
        <NuxtLink to="/cases">
          <button class="cases-btn main-btn main-btn_blue main-btn_round-5">
            更多案例
          </button>
        </NuxtLink>
      </div>
    </section>
    <!-- <section id="home-testimonial">
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
    </section> -->
    <HomeCounter />
    <HomeSlogan />

    <section id="home-evaluation">
      <div class="wrapper">
        <div class="content">
          <div class="title">
            <h1>
              {{
                $i18n.locale === "zh"
                  ? "加彼岸，家彼岸"
                  : "Beyond Canada，Your Family"
              }}
            </h1>
            <h2>
              {{
                $i18n.locale === "zh"
                  ? "为您量身定制整体移居方案"
                  : "Customized total relocation solutions for you"
              }}
            </h2>
          </div>
          <form class="evaluation-form" @submit.prevent="handleSubmit">
            <input
              type="text"
              v-model="contactInfo"
              :placeholder="
                $i18n.locale === 'zh' ? '输入邮箱或微信号' : 'Email or WeChat'
              "
              required
            />
            <button type="submit" class="submit-btn main-btn main-btn_blue">
              {{ $i18n.locale === "zh" ? "免费评估" : "Enter" }}
            </button>
          </form>
        </div>
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
      政策解读: policy,
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
      drawerData: [
        {
          category: "技术类",
          categoryEN: "Skilled Worker",
          items: [
            {
              title: "省提名雇主担保",
              des: ["要求简", "获批快"],
              url: "/projects/nominee",
            },
            {
              title: "联邦快速通道",
              des: ["审核快", "费用低"],
              url: "/projects/ee",
            },
            {
              title: "联邦农业试点",
              des: ["无年龄限制", "审核快"],
              url: "/projects/nominee/agri-food-immigration-pilot",
            },
          ],
        },
        {
          category: "商业类",
          categoryEN: "Business",
          items: [
            {
              title: "联邦创投（SUV）",
              des: ["周期短", "风险低"],
              url: "/projects/startup/start-up-visa",
            },
            {
              title: "企业主工签",
              des: ["无名额限制", "速度快"],
              url: "/projects/startup/owner-operator-work-permit",
            },
            {
              title: "萨省投资移民",
              des: ["要求低", "周期短"],
              url: "/projects/entrepreneur/saskatchewan-investment",
            },
          ],
        },
        {
          category: "留学类",
          categoryEN: "Experience",
          items: [
            {
              title: "曼省留学移民",
              des: ["门槛低", "费用低"],
              url: "/projects/education/manitoba-education",
            },
            {
              title: "安省留学移民",
              des: ["要求低", "全家移民"],
              url: "/projects/education/ontario-master-education",
            },
            {
              title: "BC省留学移民",
              des: ["无限制", "速度快"],
              url: "/projects/education/BC-education",
            },
          ],
        },
      ],
      drawerDataEN: [
        {
          category: "Skilled Worker",
          categoryEN: "",
          items: [
            {
              title: "Immigration Nominee Program",
              des: ["Simple Requirements", "Fast Approval"],
              url: "/projects/nominee",
            },
            {
              title: "Express Entry",
              des: ["Fast Review", "Low Cost"],
              url: "/projects/ee",
            },
            {
              title: "Agri-Food Immigration Pilot",
              des: ["No Age Restriction", "Fast Review"],
              url: "/projects/nominee/agri-food-immigration-pilot",
            },
          ],
        },
        {
          category: "Business",
          categoryEN: "",
          items: [
            {
              title: "Start-up Program",
              des: ["Short Cycle Time", "Low Risk"],
              url: "/projects/startup/start-up-visa",
            },
            {
              title: "Owner Operator Work Permit",
              des: ["No Quota", "Fast Speed"],
              url: "/projects/startup/owner-operator-work-permit",
            },
            {
              title: "Saskatchewan Immigrant Investor",
              des: ["Low requirements", "Short Cycle Time"],
              url: "/projects/entrepreneur/saskatchewan-investment",
            },
          ],
        },
        {
          category: "Experience",
          categoryEN: "",
          items: [
            {
              title: "Studying in Manitoba",
              des: ["Low Threshold", "Low Cost"],
              url: "/projects/education/manitoba-education",
            },
            {
              title: "Studying in Ontario",
              des: ["Low Requirements", "Whole Family Immigration"],
              url: "/projects/education/ontario-master-education",
            },
            {
              title: "Studying in BC",
              des: ["No Restriction", "Fast Speed"],
              url: "/projects/education/BC-education",
            },
          ],
        },
      ],
      contactInfo: "",
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      try {
        this.$axios
          .post(`/free-evaluations`, {
            contact_info: this.contactInfo,
          })
          .then((response) => {
            this.$message.info("感谢您提供联系信息。我们会尽快和您联系。");
            console.log("submitted");
            this.contactInfo = "";
          });
      } catch (error) {
        this.$message.info("出现错误，请稍后再试。");
        console.log(error);
      }
    },
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
.sm-only {
  display: none;
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
  background-color: #fff;
  .blogs-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
  }
  .blog-tabs {
    overflow: visible;
  }
}

@media all and (max-width: 768px) {
  #home-blogs .blogs-grid {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
}

#home-evaluation {
  padding: 100px 0;
  background-color: #efefef;
  position: relative;
  background-image: url("/img/banner-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (max-width: $md) {
    background-position: center;
  }
  @media all and (max-width: $sm) {
    background-position: 35% center;
  }

  .wrapper {
    position: relative;
  }
  .title {
    margin-bottom: 30px;
  }
  .content {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    width: 900px;
    h1,
    h2 {
      margin: 0;
      color: $navy;
    }
    @media all and (max-width: $sm) {
      width: 100%;
    }
  }
  form {
    display: flex;
    justify-content: flex-start;
    input {
      border: none;
      border-radius: 10px 0 0 10px;
      padding: 10px 20px;
      width: 350px;
    }
    @media all and (max-width: $sm) {
      display: grid;
      grid-template-columns: auto 100px;
      input {
        width: 100%;
      }
    }
    .submit-btn {
      margin-bottom: 0;
      padding: 10px 20px;
      font-size: 14px;
      border-radius: 0 10px 10px 0;
    }
  }
}
</style>

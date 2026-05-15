<template>
  <div>
    <HomeHeroBanner />
    <HomeServices />
    <HomeDrawer
      v-if="$i18n.locale === 'zh' || $i18n.locale === 'tw'"
      :data="$i18n.locale === 'tw' ? drawerDataTW : drawerData"
    />
    <HomeProcess />
    <HomeAbout />
    <section v-if="$i18n.locale === 'zh' || $i18n.locale === 'tw'" id="home-blogs">
      <div class="wrapper">
        <MainTitle
          title="寰球嘉途热讯"
          :titleEN="$i18n.locale === 'tw' ? '熱訊' : '热讯'"
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
    <!-- <section v-if="$i18n.locale === 'zh' || $i18n.locale === 'tw'" id="home-cases">
      <MainTitle
        title="成功案例"
        :titleEN="$i18n.locale === 'tw' ? '案例' : '案例'"
        titleENColor="#c4c4c4"
      />
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
    </section> -->
    <HomeSlogan />

    <section id="home-evaluation">
      <div class="wrapper">
        <div class="content">
          <div class="title">
            <h1>寰球嘉途，家彼岸</h1>
            <h2>
              {{
                $i18n.locale === "tw"
                  ? "為您量身定制整體移居方案"
                  : "为您量身定制整体移居方案"
              }}
            </h2>
          </div>
          <form class="evaluation-form" @submit.prevent="handleSubmit">
            <input
              type="text"
              v-model="contactInfo"
              :placeholder="
                $i18n.locale === 'tw'
                  ? '輸入郵箱或微信號'
                  : '输入邮箱或微信号'
              "
              required
            />
            <button type="submit" class="submit-btn main-btn main-btn_blue">
              {{
                $i18n.locale === "tw" ? "免費評估" : "免费评估"
              }}
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
      title: `加拿大移民 | 首页 | 寰球嘉途`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 首页 | 寰球嘉途`,
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
      寰球嘉途动态: aboutUs,
    };
    const cases = casesData;
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
      drawerData: [
        {
          category: "技术类",
          categoryEN: "雇主担保 · 快速通道",
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
          categoryEN: "创投 · 工签 · 投资",
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
          categoryEN: "留学 · 就业移民",
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
      drawerDataTW: [
        {
          category: "技術類",
          categoryEN: "雇主擔保 · 快速通道",
          items: [
            {
              title: "省提名雇主擔保",
              des: ["要求簡", "獲批快"],
              url: "/projects/nominee",
            },
            {
              title: "聯邦快速通道",
              des: ["審核快", "費用低"],
              url: "/projects/ee",
            },
            {
              title: "聯邦農業試點",
              des: ["無年齡限制", "審核快"],
              url: "/projects/nominee/agri-food-immigration-pilot",
            },
          ],
        },
        {
          category: "商業類",
          categoryEN: "創投 · 工簽 · 投資",
          items: [
            {
              title: "聯邦創投（SUV）",
              des: ["週期短", "風險低"],
              url: "/projects/startup/start-up-visa",
            },
            {
              title: "企業主工簽",
              des: ["無名額限制", "速度快"],
              url: "/projects/startup/owner-operator-work-permit",
            },
            {
              title: "薩省投資移民",
              des: ["要求低", "週期短"],
              url: "/projects/entrepreneur/saskatchewan-investment",
            },
          ],
        },
        {
          category: "留學類",
          categoryEN: "留學 · 就業移民",
          items: [
            {
              title: "曼省留學移民",
              des: ["門檻低", "費用低"],
              url: "/projects/education/manitoba-education",
            },
            {
              title: "安省留學移民",
              des: ["要求低", "全家移民"],
              url: "/projects/education/ontario-master-education",
            },
            {
              title: "BC省留學移民",
              des: ["無限制", "速度快"],
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
    background: $secondary !important;
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
      color: $primary;
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

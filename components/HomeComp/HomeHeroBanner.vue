<template>
  <header>
    <div class="home-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-1">
          <div class="slide-info wrapper">
            <h1>{{ $t("homeHeroBanner.slide-1-title-1") }}</h1>
            <h1>{{ $t("homeHeroBanner.slide-1-title-2") }}</h1>
            <figure>
              <p>{{ $t("homeHeroBanner.slide-1-content-1") }}</p>
              <p>{{ $t("homeHeroBanner.slide-1-content-2") }}</p>
            </figure>
            <div class="header-btn-wrap">
              <NuxtLink to="/evaluation">
                <button class="main-btn main-btn_blue main-btn_round">
                  {{ $t("homeHeroBanner.immi-score-btn") }}
                </button>
              </NuxtLink>
              <NuxtLink to="/self-test">
                <button class="main-btn main-btn_blue main-btn_round">
                  {{ $t("homeHeroBanner.self-test-btn") }}
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="banner-overlay"></div>
          <img src="/img/Home/home-banner.jpg" alt="Beyond Canada Banner-1" />
        </div>
        <div class="swiper-slide" v-for="(slide, i) in homeSlideData" :key="i">
          <div class="slide-info">
            <h1 v-if="$i18n.locale === 'zh'">{{ slide.title }}</h1>
            <h1 v-if="$i18n.locale === 'en'">{{ slide.title_en }}</h1>
            <p v-if="$i18n.locale === 'zh'">
              {{ slide.info }}
            </p>
            <p v-if="$i18n.locale === 'en'">
              {{ slide.info_en }}
            </p>
            <NuxtLink :to="slide.slug">
              <button class="main-btn main-btn_blue main-btn_round">
                {{
                  slide.btn
                    ? slide.btn
                    : $t("homeHeroBanner.slide-learn-more-btn")
                }}
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
  </header>
</template>

<script>
export default {
  name: "HomeHeroBanner",
  data() {
    return {
      homeSlideData: [
        {
          title: "加拿大联邦创业投资移民SUV",
          title_en: "Start-up Visa Program",
          info: "不用提供资金来源证明｜中国境内等待永居卡获批｜商业运营结果不影响审批｜100%获得支持信承诺",
          info_en:
            "No need to provide proof of source of funds｜Waiting for permanent resident card approval in China｜Business operation result does not affect approval｜100% support letter promise",
          slug: "/projects/startup/start-up-visa",
          img: "/img/Home/创业投资.jpg",
        },
        {
          title: "加拿大安省雇主担保移民",
          title_en: "Ontario Immigrant Nominee Program (OINP)",
          info: "无语言要求｜申请条件宽松｜一人申请全家移民｜一步到位落地安省｜加拿大教育资源最好的省份",
          info_en:
            "No language requirement｜Lax application requirements｜One-person application for the whole family｜One-step landing in Ontario｜The best province in Canada in terms of educational resources",
          slug: "/projects/nominee/ontario-immigrat-nominee-program",
          img: "/img/Home/安省境外雇主担保.jpg",
        },
        {
          title: "曼省留学移民",
          title_en: "Study abroad immigration in Manitoba",
          info: "5万加币起｜最快速留学+就业移民途径｜一步到位全家移民｜真实带薪工作",
          info_en:
            "From $50,000 CAD｜The fastest way to study + employment immigration｜One step to immigration for the whole family｜Real paid jobs",
          slug: "/projects/education/manitoba-education",
          img: "/img/Home/曼省留学.jpg",
        },
        {
          title: "企业主创业工签",
          title_en: "",
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
    // background: linear-gradient(
    //   90.4deg,
    //   #22345c 0.37%,
    //   rgba(251, 251, 251, 0) 99.69%
    // );
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
    .banner-overlay {
      height: 550px;
      background: linear-gradient(
        90.4deg,
        #22345c 0.37%,
        rgba(251, 251, 251, 0) 99.69%
      );
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
  .swiper-slide-1 {
    .slide-info {
      margin-left: 100px;
      align-items: start;
      h1 {
        color: $navy;
        font-weight: 300;
        line-height: 3.5rem;
      }
      h1:nth-child(2) {
        margin-left: 80px;
      }
      figure {
        margin: 20px 0;
      }
      p {
        color: $navy;
        font-size: 16px;
        margin-bottom: 0;
      }
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
    .swiper-slide-1 {
      .slide-info {
        margin-left: 0px;
        align-items: center;
        h1 {
          color: #fff;
          font-weight: bold;
          line-height: normal;
        }
        h1:nth-child(2) {
          margin-left: 0px;
        }
        figure {
          margin: 20px 0;
        }
        p {
          color: #fff;
          font-size: 16px;
          margin-bottom: 0;
        }
      }
    }
  }
  header {
    .banner-overlay {
      background: linear-gradient(
        90.4deg,
        #22345c 0.37%,
        rgba(251, 251, 251, 0) 99.69%
      );
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
</style>

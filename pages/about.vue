<template>
  <div>
    <header>
      <Wrapper>
        <PageHeroTitle>
          {{ $i18n.locale === "tw" ? "關於我們" : "关于我们" }}
          <template #subtitle>
            {{ $i18n.locale === "tw" ? "簡介" : "简介" }}
          </template>
        </PageHeroTitle>
      </Wrapper>
    </header>
    <section class="sec-1 about-sec">
      <div class="row-grid">
        <div class="info-wrap">
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>{{ $t("About.row-1-title") }}</h2>
          </div>
          <p>{{ $t("About.about-intro-0") }}</p>
          <p>{{ $t("About.about-intro-1") }}</p>
          <p>{{ $t("About.about-intro-2") }}</p>
          <p>{{ $t("About.about-intro-3") }}</p>
        </div>
        <div class="imgContainer">
          <img src="/img/About/sec1.png" alt="" class="sec-img" />
        </div>
      </div>
    </section>
    <section class="sec-2 about-sec">
      <div class="row-grid">
        <div class="imgContainer">
          <img src="/img/About/sec2.png" alt="" class="sec-img" />
        </div>
        <div class="info-wrap">
          <div class="title">
          
            <h2>专业团队，实力保障 </h2>
          </div>
          <p v-if="$i18n.locale === 'zh'">
            团队由10+ 加拿大本地持牌RCIC移民顾问、资深法律及规划顾问组成，熟悉IRCC审理逻辑与加拿大最新移民趋势，提供中英法三语服务与全程一对一跟进。
          </p>
          <p v-if="$i18n.locale === 'tw'">
            <span>專業團隊，實力保障 </span
            >團隊由10+ 加拿大本地持牌RCIC移民顧問、資深法律及規劃顧問組成，熟悉IRCC審理邏輯與加拿大最新移民趨勢，提供中英法三語服務與全程一對一跟進。
          </p>
        </div>
      </div>
      <!-- <div class="wrapper">
      </div> -->
    </section>
    <section class="sec-3 about-sec">
      <div class="row-grid">
        <div class="info-wrap">
          <div class="title">
       
            <h2>{{ $i18n.locale === "tw" ? "本地資源賦能 · 全周期落地服務" : "本地资源赋能 · 全周期落地服务" }}</h2>
          </div>
          <p v-if="$i18n.locale === 'zh'">
            依托加彼岸国际丰富的本地资源与行业网络，寰球嘉途不仅关注申请结果，更注重客户未来在加拿大的长期发展，为客户提供从身份规划到落地安家的全周期服务支持。
          </p>
          <p v-if="$i18n.locale === 'tw'">
            依托加彼岸国际丰富的本地资源与行业网络，寰球嘉途不仅关注申请结果，更注重客户未来在加拿大的长期发展，为客户提供从身份规划到落地安家的全周期服务支持。
          </p>
        </div>
        <div class="imgContainer">
          <img src="/img/About/sec3.png" alt="" class="sec-img" />
        </div>
      </div>
      <!-- <div class="wrapper">
      </div> -->
    </section>
    <section class="divider">
      <h3>
        {{
          $i18n.locale === "tw"
            ? "連接彼岸，用心服務，幫助海外客戶和學生。"
            : "连接彼岸，用心服务，帮助海外客户和学生。"
        }}
      </h3>
      <h3>
        {{
          $i18n.locale === "tw" ? "我們，不忘初心。" : "我们，不忘初心。"
        }}
      </h3>
    </section>
    <section class="sec-4">
      <div class="wrapper">
        <div class="row-grid">
          <div class="imgContainer">
            <img src="/img/About/sec4.png" alt="" />
          </div>
          <article>
            <h2>{{ $t("About.mission-title") }}</h2>
            <p>{{ $t("About.mission-content") }}</p>
            <h2>{{ $t("About.advantages-title") }}</h2>
            <ol>
              <li>{{ $t("About.advantages-1") }}</li>
              <li>{{ $t("About.advantages-2") }}</li>
              <li>{{ $t("About.advantages-3") }}</li>
              <li>{{ $t("About.advantages-4") }}</li>
              <li>{{ $t("About.advantages-5") }}</li>
              <figure class="cicc-verify">
                <h3>{{ $t("About.cicc") }}</h3>
                <img
                  src="/img/About/rcic.png"
                  alt="beyond canada immigration rcic verification and partner"
                  class="img-fluid"
                />
              </figure>
            </ol>
          </article>
        </div>
      </div>
    </section>
    <section class="sec-5">
      <div class="wrapper">
        <MainTitle
          :title="$i18n.locale === 'tw' ? '寰球嘉途歷程' : '寰球嘉途历程'"
          :titleEN="$i18n.locale === 'tw' ? '歷程' : '历程'"
        />
        <a-timeline id="aboutTimeline" mode="alternate">
          <a-timeline-item
            v-for="(item, index) in $i18n.locale === 'tw' ? stepsTW : steps"
            :key="index"
          >
            <div slot="dot" class="dot">
              <!-- <span>{{ item.label }}</span> -->
              <div class="circle"></div>
            </div>
            <p class="label">{{ item.label }}</p>
            <p class="text">{{ item.step }}</p>
          </a-timeline-item>
        </a-timeline>
      </div>
    </section>
    <a id="anchor-franchise"></a>
    <section class="sec-franchise">
      <div class="wrapper">
        <MainTitle
          title="加盟招商"
          :titleEN="$i18n.locale === 'tw' ? '招商' : '招商'"
          titleColor="#fff"
          titleENColor="#a37b54"
        />
        <article v-if="$i18n.locale === 'zh'">
          <div class="title">
            <!-- <img src="/img/logos/logo-small-white.png" alt="" /> -->
            <h2>品牌优势：</h2>
          </div>
          <p>
            寰球嘉途<sup>TM</sup>
            是中国连接加拿大重要的国际教育桥梁，拥有多年移民教育精英团队，现有100+所合作学校，帮助3000+以上的家庭获得加拿大永居身份，1000+世界性优质合作资源。目前在中国以及加拿大中心城市成功发展了众多合作伙伴。
          </p>
          <div class="title">
            <!-- <img src="/img/logos/logo-small-white.png" alt="" /> -->
            <h2>运营优势：</h2>
          </div>
          <p>
            寰球嘉途<sup>TM</sup>拥有众多一手，独家移民研学项目，是新型教育理念先驱者。寰球嘉途<sup>TM</sup>用多年累积的经验为加盟/合作商提供一套独创的运营销售方案。成功的运营模式是加盟商/合作伙伴盈利的保障。
          </p>
          <div class="title">
            <!-- <img src="/img/logos/logo-small-white.png" alt="" /> -->
            <h2>服务优势：</h2>
          </div>
          <p>
            寰球嘉途<sup>TM</sup>一直致力于为每一个合作伙伴提供专业化定制服务。寰球嘉途<sup>TM</sup>拥有强大的技术售后支持团队。合作伙伴从前期公司运营到后期的维护售后我们都将提供免费服务，让合作伙伴运营公司无后顾之忧。
          </p>
        </article>

        <article v-if="$i18n.locale === 'tw'">
          <div class="title">
            <!-- <img src="/img/logos/logo-small-white.png" alt="" /> -->
            <h2>品牌優勢：</h2>
          </div>
          <p>
            寰球嘉途<sup>TM</sup>
            是中國連接加拿大重要的國際教育橋樑，擁有多年移民教育精英團隊，現有100+所合作學校，幫助3000+以上的家庭獲得加拿大永居身份，1000+世界性優質合作資源。目前在中國以及加拿大中心城市成功發展了眾多合作夥伴。
          </p>
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>運營優勢：</h2>
          </div>
          <p>
            寰球嘉途<sup>TM</sup>擁有眾多一手，獨家移民研學項目，是新型教育理念先驅者。寰球嘉途<sup>TM</sup>用多年累積的經驗為加盟/合作商提供一套獨創的運營銷售方案。成功的運營模式是加盟商/合作夥伴盈利的保障。
          </p>
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>服務優勢：</h2>
          </div>
          <p>
            寰球嘉途<sup>TM</sup>一直致力於為每一個合作夥伴提供專業化定制服務。寰球嘉途<sup>TM</sup>擁有強大的技術售後支持團隊。合作夥伴從前期公司運營到後期的維護售後我們都將提供免費服務，讓合作夥伴運營公司無後顧之憂。
          </p>
        </article>
      </div>
    </section>
    <a id="anchor-joinUs"></a>
    <JoinUsForm />
  </div>
</template>

<script>
export default {
  head: {
    title: `加拿大移民 | 关于我们 | 寰球嘉途`,
    meta: [
      {
        hid: "description",
        name: "description",
        content: `加拿大移民 | 关于我们 | 寰球嘉途`,
      },
    ],
  },
  data() {
    return {
      steps: [
        {
          label: "寰球嘉途™历程: 1",
          step: "建立中国与北美第一家鲁班工坊桥梁",
        },
        {
          label: "寰球嘉途™历程: 15",
          step: "缔结多所中加友好学校",
        },
        {
          label: "寰球嘉途™历程: 98.1",
          step: "98.1%+的移民申请通过率",
        },
        {
          label: "寰球嘉途™历程: 100",
          step: "代理加拿大百所院校",
        },
        {
          label: "寰球嘉途™历程: 1000",
          step: "1000+海外优质雇主",
        },
        {
          label: "寰球嘉途™历程: 2000",
          step: "输送上千名学子海外深造",
        },
        {
          label: "寰球嘉途™历程: 6000",
          step: "6000+各类移民申请成功案例",
        },
        {
          label: "寰球嘉途™历程:",
          step: "实现海外资产配置",
        },
        {
          label: "寰球嘉途™历程:",
          step: "未来给所有人选择国际化教育的机会",
        },
      ],
      stepsTW: [
        {
          label: "寰球嘉途™歷程: 1",
          step: "建立中國與北美第一家魯班工坊橋樑",
        },
        {
          label: "寰球嘉途™歷程: 15",
          step: "締結多所中加友好學校",
        },
        {
          label: "寰球嘉途™歷程: 98.1",
          step: "98.1%+的移民申請通過率",
        },
        {
          label: "寰球嘉途™歷程: 100",
          step: "代理加拿大百所院校",
        },
        {
          label: "寰球嘉途™歷程: 1000",
          step: "1000+海外優質雇主",
        },
        {
          label: "寰球嘉途™歷程: 2000",
          step: "輸送上千名學子海外深造",
        },
        {
          label: "寰球嘉途™歷程: 6000",
          step: "6000+各類移民申請成功案例",
        },
        {
          label: "寰球嘉途™歷程:",
          step: "實現海外資產配置",
        },
        {
          label: "寰球嘉途™歷程:",
          step: "未來給所有人選擇國際化教育的機會",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#aboutTimeline {
  width: 100%;
  .ant-timeline-item-tail {
    border-color: $lightGrey;
  }
  .label {
    color: $secondary;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 16px;
    margin: 0px 5px;
  }
  .text {
    margin: 0px 5px;
    font-size: 16px;
    margin-bottom: 0px;
    color: $grey;
  }
  .dot .circle {
    background-color: $secondary;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
}

.cicc-verify {
  margin: 18px 0;
  h3 {
    font-size: 16px;
    color: $primary;
    font-weight: bold;
  }
  img {
    margin-left: -10px;
    max-width: 280px;
  }
}
</style>

<style lang="scss" scoped>
header {
  background-image: url("/img/About/banner-bw.png");
  background-color: rgba(34, 52, 92, 0.5);
  // filter: saturate(0%);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  position: relative;
}
strong {
  color: $primary;
}
.sec-img {
  width: 100%;
  height: 100%;
  // height: auto;
  object-fit: cover;
}
.about-sec .row-grid {
  display: grid;
  .info-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
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
      font-weight: 500;
    }
  }
  p {
    font-size: 16px;
    line-height: 1.9;
  }
  // .imgContainer {
  //   margin: 0;
  // }
}
.sec-1 {
  background-color: $primary;
  .row-grid {
    grid-template-columns: 65% 35%;
    .info-wrap {
      padding-right: 80px;
      padding-left: 7.5vw;
    }
    p {
      color: #ffffff;
    }
    span {
      font-weight: bold;
      color: #fff;
    }
  }
}
.sec-2 {
  background-color: #e9e9e9;
  .row-grid {
    grid-template-columns: 35% 65%;
    .title {
      h2 {
        color: $primary;
      }
    }
    .info-wrap {
      padding-left: 80px;
      padding-right: 7.5vw;
    }
  }
  p {
    color: #707070;
  }
  span {
    font-weight: bold;
    color: $primary;
  }
}

.sec-3 .row-grid {
  display: grid;
  grid-template-columns: auto auto;
  .info-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 80px;
    padding-left: 7.5vw;
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
      color: $primary;
      margin-bottom: 0;
    }
  }
  p {
    color: #707070;
    font-size: 16px;
  }
  span {
    font-weight: bold;
    color: $primary;
  }
  .imgContainer img {
    object-fit: cover;
  }
}
.divider {
  background-color: $secondary;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    text-align: center;
    font-size: 28px;
    color: #fff;
    margin-bottom: 0;
    font-weight: 300;
  }
}
.sec-4 {
  // background-color: #e9e9e9;
  padding: 30px 0;
  .row-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .imgContainer {
      margin: 0;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    article {
      h2 {
        color: $primary;
        font-size: 28px;
        margin-bottom: 15px;
        font-weight: bold;
      }
      p {
        color: $primary;
        font-size: 16px;
        font-weight: bold;
      }
      ol {
        list-style-type: decimal;
        list-style-position: inside;
        li {
          color: #757575;
          font-size: 16px;
        }
      }
    }
  }
}

.sec-5 {
  padding-bottom: 50px;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
// ANCHOR 加盟招商 section
.sec-franchise {
  padding: 50px 0 80px;
  background-color: $primary;
}
.sec-franchise article {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  p {
    font-size: 16px;
    color: #ffffff;
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 20px;
      margin-right: 13px;
    }
    h2 {
      font-size: 24px;
      color: #fff;
      margin-bottom: 0;
      font-weight: 500;
    }
    margin-top: 30px;
  }
}

.joinUs-info-row {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  br {
    display: none;
  }
  h3,
  a {
    font-size: 20px;
  }
  a {
    color: $secondary;
  }
}
.joinUs-table-wrap {
  margin: 20px auto;
  max-width: 1000px;
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
  .sec-4 {
    padding: 30px 0;
  }
  .sec-4 .row-grid {
    grid-template-columns: 1fr;
    align-items: center;
    .imgContainer {
      order: 2;
    }
    article {
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
      ol {
        li {
          font-size: 14px;
        }
      }
    }
  }

  .sec-img {
    max-width: 400px;
    display: block;
    margin: auto;
    padding-bottom: 50px;
  }
  // ANCHOR 加盟招商 section
  .sec-franchise {
    padding: 30px 0;
  }
  .sec-franchise article {
    p {
      font-size: 14px;
    }
    .title {
      align-items: center;
      margin-bottom: 10px;
      img {
        width: 16px;
        margin-right: 10px;
      }
      h2 {
        font-size: 20px;
      }
      margin-top: 30px;
    }
  }

  .joinUs-info-row {
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    br {
      display: block;
    }
    h3,
    a {
      font-size: 20px;
      text-align: center;
    }
    a {
      color: $secondary;
    }
  }
}

@media (max-width: 576px) {
  .sec-img {
    max-width: none;
    display: block;
    margin: auto;
    padding-bottom: 0px;
  }
}
</style>

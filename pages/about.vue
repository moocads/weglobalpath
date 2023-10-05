<template>
  <div>
    <header>
      <Wrapper>
        <PageHeroTitle>
          {{ $i18n.locale === "zh" ? "关于我们" : "About Us" }}
          <template #subtitle>
            {{ $i18n.locale === "zh" ? "ABOUT" : "" }}
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
          <p v-if="$i18n.locale === 'zh'">
            <span>
              加彼岸旗下有加彼岸出国咨询（BEYOND CANADA
              CONSULTING），彼森教育（BISON INTERNATIONAL
              EDUCATION）和彼岸投资（BEYOND CANADA INVESTMENT）三家子公司 </span
            >，均为加拿大联邦注册公司，分别由资深移民律师，RCIC（加拿大移民顾问监管委员会）持牌移民顾问，教育顾问，职业培训师，地产经纪，会计师及商务专家组成的强大专业服务团队。
          </p>
          <p v-if="$i18n.locale === 'zh'">
            加彼岸出国咨询是权威办理加拿大省提名移民项目的加拿大本地公司。作为加拿大项目方，我们保持独家项目优势，始终保持高市场份额占有率，每位顾问都有多年的在海外的留学生活经验及海外工作经验。最重要的是，我们把每一位客户当作自己亲人来服务，在全加拿大境内的省提名项目中协助您评估现实状况并作出最合适的规划建议。加彼岸出国咨询将一如既往地与国内合作伙伴紧密合作，客户至上的精神，为客户提供最优质最专业的移民咨询服务。
          </p>
          <p v-if="$i18n.locale === 'en'">
            <span
              >Beyond Canada includes BEYOND CANADA CONSULTING, BISON EDUCATION and BEYONDCANADA INCESTMENT </span
            >which are all federally registered companies in Canada and are partnered with the immigration lawyers, RCIC (Regulatory Council of Immigration Consultants of Canada) licensed immigration consultants, education consultants, vocational trainers, real estate agents, accountants and business experts. 
          </p>
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
            <img src="/img/logos/logo-small-blue.png" alt="" />
            <h2>
              {{ $i18n.locale === "zh" ? "彼森教育" : "Bison Education" }}
            </h2>
          </div>
          <p v-if="$i18n.locale === 'zh'">
            <span>彼森教育</span
            >致力于为中国的学子提供高质量的海外留学申请，出国考试咨询及职业规划咨询服务。自2017年与加拿大罗伯森学院深度合作起，我们已为上百名学生办理签证至拿到枫叶卡的所有手续。2021年加彼岸受加拿大罗伯森学院委托，是中国区唯一校方直属合作伙伴，为学校处理一切中国事宜。
          </p>
          <p v-if="$i18n.locale === 'zh'">
            结合加彼岸移居咨询方面和职业培训方面的超强实力，加拿大罗伯森学院与加彼岸出国咨询联合推出的公立学院直通车项目已成为广大留学生快速获得就业机会及移居身份的最佳选择。该项目不仅适合于即将高中或职高毕业的莘莘学子，对于过去已经完成过大学或大专课程，或已有多年工作经验的群体来说，该项目亦是您获得加拿大就业移居身份的绝佳途径。
          </p>
          <p v-if="$i18n.locale === 'en'">
            <strong>Bison Education</strong> is committed to providing high
            quality overseas study application, examination abroad consultation
            and career planning consulting services to students in China. Since
            2018, we have been working with Robertson College in Canada and have
            helped hundreds of students from visa to maple leaf card. 2021,
            Beyond Canada is the only direct partner of Robertson College in
            China and will handle all Chinese matters for the school.
          </p>
          <p v-if="$i18n.locale === 'en'">
            Combined with the strong strengths in immigration consulting and
            vocational training, the public college through-train program
            jointly launched by Robeson College and Beyond Canada Consulting has
            become the best choice for international students to quickly obtain
            employment and immigration status. The program is not only suitable
            for students who are about to graduate from high school or
            vocational high school, but also for those who have completed
            university or college courses in the past, or have many years of
            work experience.
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
            <img src="/img/logos/logo-small-blue.png" alt="" />
            <h2>
              {{ $i18n.locale === "zh" ? "彼岸投资" : "Beyond Investment" }}
            </h2>
          </div>
          <p v-if="$i18n.locale === 'zh'">
            <span>彼岸投资</span
            >一直致力于为投资者提供专业的海外投资咨询服务。从投资学的角度来说，投资需要对市场深入了解，全面调查，综合行业动向，经济因素，风险与回报等多方面考量，以确保客户获得该行业必须提供的最佳服务和最真实的建议，找到最优的投资方案。
          </p>
          <p v-if="$i18n.locale === 'en'">
            <strong>Beyond Investment</strong> has been committed to providing
            professional overseas investment advisory services to investors.
            From the perspective of investment science, investment requires
            in-depth understanding of the market, comprehensive investigation,
            and a combination of industry trends, economic factors, risks and
            rewards, etc., to ensure that clients receive the best service and
            the most authentic advice that the industry must provide to find the
            optimal investment solution.
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
          $i18n.locale === "zh"
            ? "连接彼岸，用心服务，帮助海外客户和学生。"
            : "Connecting the other side and serving with heart to help overseas clients and students."
        }}
      </h3>
      <h3>
        {{
          $i18n.locale === "zh"
            ? "我们，不忘初心。"
            : "We do not forget the original intention."
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
          :title="
            $i18n.locale === 'zh' ? '加彼岸历程' : 'Beyond Canada Milestone'
          "
          titleEN="History"
        />
        <a-timeline id="aboutTimeline" mode="alternate">
          <a-timeline-item
            v-for="(item, index) in $i18n.locale === 'zh' ? steps : stepsEN"
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
    <!-- <Construction /> -->
    <a id="anchor-franchise"></a>
    <section class="sec-franchise">
      <div class="wrapper">
        <MainTitle
          :title="$i18n.locale === 'zh' ? '加盟招商' : 'Investment'"
          titleEN="franchise"
          titleColor="#fff"
          titleENColor="#233369"
        />
        <article v-if="$i18n.locale === 'zh'">
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>品牌优势：</h2>
          </div>
          <p>
            加彼岸<sup>TM</sup>
            是中国连接加拿大重要的国际教育桥梁，拥有多年移民教育精英团队，现有100+所合作学校，帮助3000+以上的家庭获得加拿大永居身份，1000+世界性优质合作资源。目前在中国以及加拿大中心城市成功发展了众多合作伙伴。
          </p>
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>运营优势：</h2>
          </div>
          <p>
            加彼岸<sup>TM</sup>拥有众多一手，独家移民研学项目，是新型教育理念先驱者。加彼岸<sup>TM</sup>用多年累积的经验为加盟/合作商提供一套独创的运营销售方案。成功的运营模式是加盟商/合作伙伴盈利的保障。
          </p>
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>服务优势：</h2>
          </div>
          <p>
            加彼岸<sup>TM</sup>一直致力于为每一个合作伙伴提供专业化定制服务。加彼岸<sup>TM</sup>拥有强大的技术售后支持团队。合作伙伴从前期公司运营到后期的维护售后我们都将提供免费服务，让合作伙伴运营公司无后顾之忧。
          </p>
        </article>

        <article v-if="$i18n.locale === 'en'">
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>Brand Advantages:</h2>
          </div>
          <p>
            Beyond Canada<sup>TM</sup> is an important international education
            bridge between China and Canada, with an elite team of immigrant
            educators for many years, 100+ partner schools, helping more than
            3,000+ families to obtain permanent residence status in Canada, and
            1,000+ worldwide quality partner resources. We have successfully
            developed many partners in China and central cities in Canada.
          </p>
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>Operational Advantages:</h2>
          </div>
          <p>
            Beyond Canada <sup>TM</sup> has many first-hand, exclusive
            immigration study programs and am a pioneer of new educational
            concepts. Beyond Canada<sup>TM</sup> uses my years of accumulated
            experience to provide franchisees/partners with an original set of
            operational sales programs. The successful operation model is the
            guarantee of profitability for the franchisee/partner.
          </p>
          <div class="title">
            <img src="/img/logos/logo-small-white.png" alt="" />
            <h2>Service Advantages:</h2>
          </div>
          <p>
            Beyond Canada <sup>TM</sup>has been committed to providing
            specialized and customized services to each partner. Beyond
            Canada<sup>TM</sup> has a strong technical after-sales support team.
            We will provide free services for partners from the initial
            operation to the maintenance of the company, so that partners can
            operate the company without worries.
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
    title: `加拿大移民 | 关于我们 | 加彼岸出国咨询`,
    meta: [
      {
        hid: "description",
        name: "description",
        content: `加拿大移民 | 关于我们 | 加彼岸出国咨询`,
      },
    ],
  },
  data() {
    return {
      steps: [
        {
          label: "加彼岸™历程: 1",
          step: "建立中国与北美第一家鲁班工坊桥梁",
        },
        {
          label: "加彼岸™历程: 15",
          step: "缔结多所中加友好学校",
        },
        {
          label: "加彼岸™历程: 98.1",
          step: "98.1%+的移民申请通过率",
        },
        {
          label: "加彼岸™历程: 100",
          step: "代理加拿大百所院校",
        },
        {
          label: "加彼岸™历程: 1000",
          step: "1000+海外优质雇主",
        },
        {
          label: "加彼岸™历程: 2000",
          step: "输送上千名学子海外深造",
        },
        {
          label: "加彼岸™历程: 6000",
          step: "6000+各类移民申请成功案例",
        },
        {
          label: "加彼岸™历程:",
          step: "实现海外资产配置",
        },
        {
          label: "加彼岸™历程:",
          step: "未来给所有人选择国际化教育的机会",
        },
      ],
      stepsEN: [
        {
          label: "Beyond Canada Milestone: 1",
          step: "Building the first Lupin workshop bridge between China and North America",
        },
        {
          label: "Beyond Canada Milestone: 15",
          step: "Concluded several Sino-Canadian friendship schools",
        },
        {
          label: "Beyond Canada Milestone: 98.1",
          step: "98.1% Immigration Application Pass Rate",
        },
        {
          label: "Beyond Canada Milestone: 100",
          step: "Representing 100 colleges in Canada",
        },
        {
          label: "Beyond Canada Milestone: 1000",
          step: "1000+ Overseas Quality Employer Resources",
        },
        {
          label: "Beyond Canada Milestone: 2000",
          step: "Sending thousands of students overseas for further study",
        },
        {
          label: "Beyond Canada Milestone: 6000",
          step: "6000+ Immigration Application Success Stories",
        },
        {
          label: "Beyond Canada Milestone:",
          step: "Realize overseas asset allocation",
        },
        {
          label: "Beyond Canada Milestone:",
          step: "The future gives everyone the opportunity to choose an international education",
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
    color: $red;
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
    background-color: $red;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
}

.cicc-verify {
  margin: 18px 0;
  h3 {
    font-size: 16px;
    color: $navy;
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
  color: $navy;
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
      font-weight: 700;
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
  background-color: $navy;
  .row-grid {
    grid-template-columns: 65% 35%;
    .info-wrap {
      padding-right: 80px;
      padding-left: 7.5vw;
    }
    p {
      color: #c4c4c4;
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
        color: $navy;
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
    color: $navy;
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
      color: $navy;
      margin-bottom: 0;
    }
  }
  p {
    color: #707070;
    font-size: 16px;
  }
  span {
    font-weight: bold;
    color: $navy;
  }
  .imgContainer img {
    object-fit: cover;
  }
}
.divider {
  background-color: $red;
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
        color: $navy;
        font-size: 28px;
        margin-bottom: 15px;
        font-weight: bold;
      }
      p {
        color: $navy;
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
  background-color: $navy;
}
.sec-franchise article {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  p {
    font-size: 16px;
    color: #c4c4c4;
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
      font-weight: 700;
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
    color: $red;
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
    background-color: $red;
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
      color: $red;
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

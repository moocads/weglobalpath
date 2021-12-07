<template>
  <div>
    <header>
      <div class="wrapper">
        <h1>关于我们</h1>
      </div>
    </header>
    <section class="sec-1 about-sec">
      <div class="wrapper">
        <div class="row-grid">
          <div class="info-wrap">
            <div class="title">
              <img src="/img/logos/logo-small-white.png" alt="" />
              <h2>加彼岸出国咨询</h2>
            </div>
            <p>
              <span
                >加彼岸旗下有加彼岸出国咨询（BEYONDCANADACONSULTING），彼森教育（BISONEDUCATION）和彼岸投资（BEYONDCANADAINVESTMENT）三家子公司</span
              >，均为加拿大联邦注册公司，分别由自身移民律师，RCIC（加拿大移民顾问监管委员会）持牌移民顾问，教育顾问，职业培训师，地产经纪，会计师及商务专家组成的强大专业服务团队。
            </p>
            <p>
              加彼岸出国咨询是权威办理加拿大省提名移民项目的加拿大本地公司。作为加拿大项目方，我们保持独家项目优势，始终保持高市场份额占有率，每位顾问都有多年的在海外的留学生活经验及海外工作经验。最重要的是，我们把每一位客户当作自己亲人来服务，在全加拿大境内的省提名项目中协助您评估现实状况并作出最合适的规划建议。加彼岸出国咨询将一如既往地与国内合作伙伴紧密合作，客户至上的精神，为客户提供最优质最专业的移民咨询服务。
            </p>
          </div>
          <figure>
            <img src="/img/About/sec1.png" alt="" class="sec-img" />
          </figure>
        </div>
      </div>
    </section>
    <section class="sec-2 about-sec">
      <div class="wrapper">
        <div class="row-grid">
          <figure>
            <img src="/img/About/sec2.png" alt="" class="sec-img" />
          </figure>
          <div class="info-wrap">
            <div class="title">
              <img src="/img/logos/logo-small-blue.png" alt="" />
              <h2>彼森教育</h2>
            </div>
            <p>
              <span>彼森教育</span
              >致力于为中国的学子提供高质量的海外留学申请，出国考试咨询及职业规划咨询服务。自2018年与加拿大罗伯森学院深度合作起，我们已为上百名学生办理签证至拿到枫叶卡的所有手续。2021年加彼岸受加拿大罗伯森学院委托，是中国区唯一校方直属合作伙伴，为学校处理一切中国事宜。
            </p>
            <p>
              结合加彼岸移居咨询方面和职业培训方面的超强实力，加拿大罗伯森学院与加彼岸出国咨询联合推出的公立学院直通车项目已成为广大留学生快速获得就业机会及移居身份的最佳选择。该项目不仅适合于即将高中或职高毕业的莘莘学子，对于过去已经完成过大学或大专课程，或已有多年工作经验的群体来说，该项目亦是您获得加拿大就业移居身份的绝佳途径。
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="sec-3 about-sec">
      <div class="wrapper">
        <div class="row-grid">
          <div class="info-wrap">
            <div class="title">
              <img src="/img/logos/logo-small-blue.png" alt="" />
              <h2>彼岸投资</h2>
            </div>
            <p>
              <span>彼岸投资</span
              >一直致力于为投资者提供专业的海外投资咨询服务。从投资学的角度来说，投资需要对市场深入了解，全面调查，综合行业动向，经济因素，风险与回报等多方面考量，以确保客户获得该行业必须提供的最佳服务和最真实的建议，找到最优的投资方案。
            </p>
          </div>
          <figure>
            <img src="/img/About/sec3.png" alt="" class="sec-img" />
          </figure>
        </div>
      </div>
    </section>
    <section class="divider">
      <h3>连接彼岸，用心服务，帮助海外客户和学生。</h3>
      <h3>我们，不忘初心。</h3>
    </section>
    <section class="sec-4">
      <div class="wrapper">
        <div class="row-grid">
          <figure>
            <img src="/img/About/sec4.png" alt="" />
          </figure>
          <article>
            <h2>我们的使命</h2>
            <p>脱离传统教育的“生存为本”，给所有人选择 国际化教育的机会。</p>
            <h2>我们的优势</h2>
            <ol>
              <li>建立中国与北美第一家鲁班工坊桥梁</li>
              <li>代理加拿大百所名校</li>
              <li>缔结多所中加友好学校</li>
              <li>输送上千名学子海外深造</li>
              <li>实现海外资产配置</li>
              <li>未来给所有人选择国际化教育的机会</li>
            </ol>
          </article>
        </div>
      </div>
    </section>
    <!-- <Construction /> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background-image: url("/img/About/banner-bw.png");
  background-color: rgba(34, 52, 92, 0.5);
  // filter: saturate(0%);
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  display: flex;
  align-items: center;
  position: relative;
  h1 {
    font-size: 60px;
    color: #fff;
    font-weight: bold;
    position: relative;
    margin-top: -30px;
  }
  h1::after {
    content: "ABOUT";
    position: absolute;
    color: rgba(196, 196, 196, 0.4);
    font-family: $Mont;
    font-weight: 900;
    top: 70%;
    left: 0;
    font-size: 85px;
    // background-color: $red;
    width: 200px;
    height: 0px;
  }
}
.sec-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.about-sec .row-grid {
  display: grid;
  .info-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  figure {
    margin: 0;
  }
}
.sec-1 {
  background-color: $navy;
  .row-grid {
    grid-template-columns: 65% 35%;
    .info-wrap {
      padding-right: 80px;
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
    padding: 80px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 80px;
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
  figure img {
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
.sec-4 .row-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  figure {
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

@media all and (max-width: 1000px) {
  header {
    background-position: bottom;
    background-blend-mode: multiply;
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
    padding: 30px 0;
    .row-grid {
      grid-template-columns: 1fr;
      .info-wrap {
        padding: 0;
      }
      p {
        font-size: 14px;
      }
    }
  }

  .sec-2 {
    figure {
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
    figure {
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
}
</style>

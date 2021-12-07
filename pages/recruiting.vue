<template>
  <div id="recruiting-page">
    <header>
      <div class="wrapper">
        <h1>中国区招生计划</h1>
      </div>
    </header>
    <main>
      <div class="wrapper">
        <section class="intro">
          <div>
            <h2>加拿大罗伯森学院</h2>
            <img src="/img/Recruiting/robertson.svg" alt="" />
          </div>
          <div class="info-box">
            <p>
              加拿大罗伯森创立于1911年，是经加拿大政府批准开办，全球12所分校。
            </p>
            <p>其中加拿大设立4所校区，隶属于加拿大教育集团的应用型高等院校。</p>
            <p>
              罗伯森学院提供政府认证和行业紧密相关的教育，重点关注学生的实际操作培训和实践经验。
            </p>
          </div>
        </section>
        <section class="map-row">
          <img src="/img/Recruiting/map.png" alt="" class="img-fluid" />
          <div class="info">
            <h2>加拿大4大校区</h2>
            <p>
              我们在加拿大卡尔加里，埃德蒙顿，布兰顿以及温尼伯总共有4个校区。
            </p>
            <p>我们线上课程有来自加拿大所有省份和地区的学生！</p>
          </div>
        </section>
      </div>
      <section class="certificate-sec">
        <div class="wrapper">
          <div class="content">
            <MainTitle title="罗伯森大学授权执照" titleEN="CERTIFICATE" />
            <img src="/img/Recruiting/certificate.png" alt="" />
            <p>
              是中国区唯一校方直属合作伙伴 加彼岸
              Beyondcanada是加拿大罗伯森学院指定招生代表。受ROBERTSON
              COLLEGE(罗伯森学院)委托，<span>是中国区唯一校方直属合作伙伴</span>，为学校处理一切中国区事宜，历经多年的紧密合作，被授予“Most
              Trusted Partner”最值得信赖的合作伙伴荣誉证书。
            </p>
          </div>
        </div>
      </section>
      <section class="requirement-sec">
        <div class="wrapper">
          <MainTitle title="申请要求" titleEN="REQUIREMENT" />
          <div class="requirement-grid">
            <div class="table"></div>
            <div class="content"></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  padding: 100px 0;
}
section {
  padding: 40px 0;
}
header {
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(
      89.93deg,
      rgba(34, 52, 92, 0.7) 7.82%,
      rgba(34, 52, 92, 0) 102.35%
    ),
    url("/img/Projects/banner.png");

  background-size: cover;
  background-blend-mode: multiply;
  h1 {
    color: #fff;
    font-size: 60px;
    font-weight: bold;
    position: relative;
    margin-left: 20px;
  }
  h1::before {
    content: "";
    position: absolute;
    top: 55%;
    left: -20px;
    transform: translateY(-50%);
    background-color: $red;
    width: 6px;
    height: 70px;
  }
}
.intro {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  img {
    max-width: 250px;
  }
  .info-box {
    background-color: #e9e9e9;
    padding: 20px 40px;
    border-left: 5px solid $red;
    margin-left: 100px;
  }
  p {
    font-size: 16px;
    color: #707070;
    margin-bottom: 5px;
  }
}
.map-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #fff;
  justify-items: center;
  gap: 30px;

  .info {
    // width: auto;
    height: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: $red;
    border-radius: 50%;
    padding: 0 40px;
    aspect-ratio: 1/1;
    h2 {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    p {
      font-size: 18px;
    }
  }
}
.certificate-sec {
  margin-top: 400px;
  background-color: $navy;
  position: relative;
  height: 400px;
}
.certificate-sec .content {
  position: relative;
  top: -400px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  p {
    margin-top: 60px;
    font-size: 16px;
    text-align: center;
    color: #fff;
  }
  span {
    color: #ab9269;
  }
}
.requirement-sec {
  padding: 100px 0;
}
.requirement-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media all and (max-width: 600px) {
  header {
    height: 300px;
    h1 {
      font-size: 35px;
    }
    h1::before {
      width: 6px;
      height: 40px;
    }
  }
  .map-row {
    display: grid;
    grid-template-columns: 1fr;
    .info {
      height: auto;
      width: 100%;
    }
  }
}
</style>

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
            <div class="table">
              <a-table
                :columns="columns"
                :data-source="data"
                :pagination="false"
              >
                <template slot="title"> 国际留学生学费与入学要求 </template>
                <template slot="name" slot-scope="text">
                  <span> {{ text }}</span>
                </template>

                <!-- <a slot="name" slot-scope="text">{{ text }}</a> -->
              </a-table>
            </div>
          </div>
        </div>
      </section>
      <section class="plan-sec">
        <div class="wrapper plan-content">
          <figure>
            <img src="/img/Recruiting/pdf-img.png" alt="" />
          </figure>
          <article>
            <h2>加拿大罗伯森学院在中国</h2>
            <p>
              目前，加拿大罗伯森学院在中国区合作学校以达24所。近些年来与中国合作院校保持着长期良好的合作关系。
            </p>
            <p>
              罗伯森学院在医疗保健，商业，社会工作，法律，旅游和技术等领域提供30多种以职业为中心的证书和大专文凭。课程由具有多年该领域经验的行业专业人士授课。
              罗伯森还设有18个月中国加拿大双认证大专学历，毕业后年即可获得3年加拿大工作签证并申请加拿大永居身份，首年年薪可高达30万人民币。
            </p>
            <a
              href="/img/Recruiting/plan.pdf"
              class="pdf-download-btn"
              download="罗伯森学院中国区招生计划完整版"
            >
              <img src="/img/Recruiting/download-icon.svg" alt="" />
              <span>下载罗伯森学院中国区招生计划完整版</span>
            </a>
          </article>
        </div>
      </section>
      <section class="coop-schools-sec">
        <div class="wrapper">
          <MainTitle title="合作院校" titleEN="COOP SCHOOLS" />
          <div class="schools-grid">
            <SchoolCard
              :schoolsData="d"
              v-for="(d, index) in schools"
              :key="index"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    dataIndex: "requirement",
    key: "requirement",
    scopedSlots: { customRender: "name" },
  },
];
const data = [
  {
    key: "1",
    name: "专业课学费",
    requirement: "16000加币 - 21000加币/年\n（根据专业不同）",
  },
  {
    key: "2",
    name: "语言预科学费",
    requirement: "3500加币/3个月",
  },
  {
    key: "3",
    name: "学历成绩要求",
    requirement: "高中及同等学历以上\n学术课平均成绩70%以上",
  },
  {
    key: "4",
    name: "语言要求",
    requirement: "无语言成绩要求\n（双录取，可就读语言课程）",
  },
  {
    key: "5",
    name: "入学时间",
    requirement: "春季、秋季、冬季",
  },
  {
    key: "6",
    name: "资金担保",
    requirement: "根据加拿大签证政策最低只需购买1万加币GIC证明",
  },
];
const schools = [
  {
    area: "Ontario",
    university: [
      "University of Toronto",
      "Brock University",
      "Laurentian University",
      "UOIT",
      "University of Guelph",
      "Carlton University",
      "University of Western",
      "University of Windsor",
      "Lakehead University",
      "Trent University",
      "Wilfrid Laurier University",
    ],
    college: [
      "Algonquin College",
      "Centennial College",
      "Conestoga College",
      "Fanshawe College",
      "George Brown College",
      "Georgian College",
      "Humber College",
      "Niagara College",
      "St. Lawrence College",
      "Seneca College",
      "Sheridan Institute of Tech.",
      "Mohawk College",
      "Cambrian College",
      "Confederation College",
      "Lambton College",
      "Durham College",
      "CIC",
      "Canadore College",
      "St. Clair College",
      "RCC Institute of Tech.",
    ],
  },
  {
    area: "British Columbia",
    university: [
      "Simon Fraser University",
      "University of Victoria",
      "BCIT",
      "KPU",
      "Vancouver Island University",
      "Thompson Rivers University",
      "Trinity Western University",
      "Royal Roads University",
      "University of Fraser Valley",
      "UNBC",
      "Capilano University",
      "Fairleigh Dickinson University",
    ],
    college: [
      "Camosun College",
      "Fraser International College",
      "Colmbia College",
      "Langara College",
      "Douglas College",
      "Selkirk College",
      "Vancouver Film School",
      "North Island College International",
      "LaSalle College Vancouver Campus",
      "Corpus Christi College",
      "Acenda School of Management",
      "College of New Caledonia",
      "Alexander College",
      "Dorset College",
      "Eton College",
      "Sprott Shaw College",
      "Canadian College",
    ],
  },
  {
    area: "Alberta",
    university: [
      "Grant MacEwan University",
      "University of Lethbridge",
      "Concordia University of Edmonton",
      "Mount Royal University",
    ],
    college: [
      "Lethbridge College",
      "Bow Valley College",
      "Norquest College",
      "Lakeland College",
    ],
  },
  {
    area: "Saskachewan ",
    university: ["University of Saskachewan", "University of Regina"],
    college: ["Saskachewan Polytechnic"],
  },
  {
    area: "Manitoba",
    university: [
      "University of Manitoba",
      "University of Winnipeg",
      "Brandon University",
    ],
    college: [
      "Red Rivers College",
      "MITT",
      "Robertson College",
      "Assiniboine College",
    ],
  },
  {
    area: "Quebec",
    university: ["McGill University", "Concordia University"],
    college: ["LaSalle College"],
  },
  {
    area: "New Brunswick",
    university: ["Mount Alison University", "University of New Brunswick"],
    college: ["New Brunswick Community College"],
  },
  {
    area: "Nova Scotia ",
    university: [
      "Acadia University",
      "Saint Mary's University",
      "Cape Breton University",
      "Dalhousie University",
    ],
    college: [],
  },
  {
    area: "Prince Edward Island",
    university: ["University of Prince Edward Island"],
    college: ["Holland College"],
  },
  {
    area: "New foundland & Labrador",
    university: ["Memorial University of Newfoundland"],
    college: ["College of North Atlantic"],
  },
];
export default {
  data() {
    return {
      data,
      columns,
      schools,
    };
  },
};
</script>
<style lang="scss">
#recruiting-page {
  .ant-table {
    max-width: 800px;
  }
  .ant-table-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    letter-spacing: 2px;
    background: $red;
  }
  .ant-table-thead {
    display: none;
  }
  .ant-table-content {
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
  }
  .ant-table-row {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    white-space: pre;
    td {
      text-align: center;
      background-color: #fff;
    }

    td:last-child {
      background-color: #fafafa;
      font-weight: normal;
    }
  }
}
@media all and (max-width: 991px) {
  .ant-table-title {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    letter-spacing: 1px;
    background: $red;
  }
  .ant-table-row {
    display: flex;
    flex-direction: column;
  }
  .ant-table-body {
    width: 100%;
  }
}
</style>
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
  img {
    max-height: 361px;
    width: auto;
  }
}
.requirement-sec {
  padding: 100px 0;
}
.requirement-grid {
  display: grid;
  grid-template-columns: 1fr;
}
.table {
  display: flex;
  justify-content: center;
  align-items: center;
}
.plan-sec {
  background-color: $navy;
  padding: 60px 0;
}
.plan-content {
  display: flex;
  column-gap: 75px;
  color: #fff;
  article {
    display: flex;
    flex-direction: column;
  }
  h2 {
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    font-size: 16px;
  }
  .pdf-download-btn {
    margin-top: 35px;
    max-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: $red;
    padding: 8px 15px;
    background-color: #dadada;
    border: 1px solid $red;
    border-radius: 5px;
    img {
      margin-right: 9px;
    }
  }
}
.schools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
@media all and (max-width: 768px) {
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
  main {
    padding: 30px 0;
  }
  .intro {
    flex-direction: column;
    margin-bottom: 30px;
    h2 {
      font-size: 24px;
      font-weight: bold;
    }
    img {
      max-width: 250px;
    }
    .info-box {
      margin-top: 20px;
      padding: 15px 20px;
      margin-left: 0px;
    }
    p {
      font-size: 16px;
      color: #707070;
      margin-bottom: 5px;
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
  .certificate-sec .content {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .plan-content {
    flex-direction: column;
  }
  .schools-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}
</style>

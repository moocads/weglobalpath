<template>
  <div id="investment-page">
    <header>
      <div class="wrapper">
        <h1>加拿大投资</h1>
      </div>
    </header>
    <section class="investment-sec">
      <div class="wrapper">
        <MainTitle title="我们的投资服务涵盖" titleEN="investment" />
        <ul class="investment-grid">
          <li v-for="(item, index) in investmentLists" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>
    <div class="wrapper">
      <hr />
    </div>
    <section class="investment-cases-sec">
      <div class="wrapper">
        <MainTitle title="我们投资过的项目" titleEN="study cases" />
        <ul>
          <li v-for="(caseItem, index) in caseLists" :key="index">
            <img :src="caseItem.imgUrl" alt="" />
            <h2>{{ caseItem.title }}</h2>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "加彼岸出国咨询 | 加拿大投资",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "加彼岸出国咨询 | 加拿大投资",
        },
      ],
    };
  },
  data() {
    return {
      investmentLists,
      caseLists,
    };
  },
};
const caseLists = [
  {
    title: "pizza店",
    imgUrl: "/img/Investment/pizza.jpg",
  },
  {
    title: "奶茶店",
    imgUrl: "/img/Investment/milktea.jpg",
  },
  {
    title: "旅游公司",
    imgUrl: "/img/Investment/travel.jpg",
  },
  {
    title: "物流公司",
    imgUrl: "/img/Investment/logistics.jpg",
  },
  {
    title: "高科技研发公司",
    imgUrl: "/img/Investment/hi-tech.jpg",
  },
  {
    title: "贸易公司",
    imgUrl: "/img/Investment/trading.jpg",
  },
];
const investmentLists = [
  "服务咨询",
  "商业保险",
  "战略策划",
  "资产重组",
  "项目评估",
  "项目融资",
  "公司注册",
  "会计服务",
  "商业计划",
  "银行信贷",
  "产权交易",
  "市场营销",
  "风险评估",
  "投资管理",
  "股权涉及",
  "品牌设计",
];
</script>

<style lang="scss" scoped>
#investment-page {
  hr {
    position: relative;
    &::before {
      content: url("/img/Investment/hr-img.svg");
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
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
    url("/img/Investment/banner.png");

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
section {
  padding: 80px 0;
}
.investment-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
}
.investment-grid li {
  font-size: 16px;
  padding: 10px 45px;
  background-color: #e9e9e9;
  border: 1px solid #dadada;
  border-radius: 3px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background-color: $navy;
  }
}
.investment-cases-sec {
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 5px;
      width: 100%;
      margin-bottom: 15px;
    }
    h2 {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
@media all and (max-width: 1200px) {
  .investment-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .investment-grid li {
    font-size: 16px;
    padding: 10px 15px;
  }
  .investment-cases-sec {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
  }
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
  section {
    padding: 30px 0;
  }
  .investment-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .investment-cases-sec {
    ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    li {
      h2 {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
}
</style>

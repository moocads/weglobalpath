<template>
  <div>
    <header>
      <div class="wrapper">
        <h1>案例详情</h1>
      </div>
    </header>
    <section class="case-details-page">
      <div class="wrapper">
        <NuxtLink to="/cases" class="back-btn">
          <img src="/img/icons/back-btn.png" alt="" />
          <span>查看更多案例</span>
        </NuxtLink>

        <div class="case-wrap">
          <article>
            <div class="main-title">
              <img src="/img/logos/logo-small-blue.png" alt="" />
              <h2>
                {{ data.title }}
              </h2>
            </div>
            <hr />
            <div class="sub-title">
              <img src="/img/logos/logo-small-blue.png" alt="" />
              <h3>客户情况</h3>
            </div>
            <p>{{ `客户姓名：${data.client_name}` }}</p>
            <p>{{ `职业背景：${data.working_background}` }}</p>
            <p>{{ `移民背景：${data.immi_background}` }}</p>
            <p>{{ `材料准备时间：${data.prep_time}` }}</p>
            <p>{{ `审理周期：${data.process_time}` }}</p>
            <p>{{ `案例简介：${data.brief_intro}` }}</p>
          </article>
          <hr v-if="data.image.length !== 0" />
          <div class="sub-title" v-if="data.image.length !== 0">
            <img src="/img/logos/logo-small-blue.png" alt="" />
            <h3>获批文件</h3>
          </div>
          <figure>
            <div v-for="(doc, index) in data.image" :key="index">
              <a data-fancybox="gallery" :href="doc.url">
                <img :src="doc.url" alt="" />
              </a>
            </div>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const projectData = await $axios.$get(`/cases/${params.id}`);
    const data = projectData;
    return {
      data,
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
hr {
  margin: 30px 0;
}
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
    content: "CASE DETAIL";
    position: absolute;
    color: rgba(196, 196, 196, 0.4);
    font-family: $Mont;
    font-weight: 900;
    top: 70%;
    left: 0;
    font-size: 85px;
    // background-color: $red;
    width: auto;
    height: 0px;
  }
}
.case-details-page {
  padding: 100px 0;
}
.case-wrap {
  padding: 20px 35px;
  border: 1px solid $navy;
  border-radius: 10px;

  figure {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  figure img {
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
}
.main-title {
  display: flex;
  align-items: center;
  h2 {
    font-size: 36px;
    position: relative;
    margin-left: 10px;
    margin-bottom: 0;
    font-weight: bold;
    color: $navy;
  }
  img {
    width: 22px;
  }
}
.sub-title {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  h3 {
    font-size: 24px;
    color: $navy;
    margin-left: 10px;
    margin-bottom: 0;
  }
  img {
    width: 22px;
  }
}
.back-btn {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  width: 100%;
  span {
    font-size: 20px;
  }
  img {
    width: 22px;
    margin-right: 10px;
  }
}
@media all and (max-width: 991px) {
  hr {
    margin: 15px 0;
  }
  header {
    background-image: url("/img/About/banner-bw.png");
    background-color: rgba(34, 52, 92, 0.5);
    // filter: saturate(0%);
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    display: flex;
    align-items: center;
    position: relative;
    h1 {
      font-size: 42px;
    }
    h1::after {
      font-size: 50px;
    }
  }
  .case-details-page {
    padding: 30px 0;
  }
  .case-wrap {
    padding: 10px 15px;

    figure {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .main-title {
    h2 {
      font-size: 28px;
    }
    img {
      width: 22px;
    }
  }
  .sub-title {
    margin-bottom: 15px;
    h3 {
      font-size: 20px;
    }
    img {
      width: 20px;
    }
  }
}
</style>

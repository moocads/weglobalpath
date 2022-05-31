<template>
  <div>
    <header>
      <div class="wrapper">
        <h1>成功案例</h1>
      </div>
    </header>
    <section id="cases-wrap">
      <div class="wrapper cases-grid">
        <div v-for="(c, index) in cases" :key="index" class="case-item">
          <!-- <NuxtLink :to="'/cases/' + c.id">
            <CaseItem
              :thumbnail="c.image[0] && c.image[0].url"
              :title="c.title"
            />
          </NuxtLink> -->
          <CaseCard :data="c" />
          <CaseCardMobile :data="c" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `加拿大移民 | 成功案例 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 成功案例 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const casesData = await $axios.$get(`/cases`, {
      params: {
        _sort: "id:desc",
      },
    });
    const cases = casesData;
    return {
      cases,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("/img/About/banner-bw.png");
  background-color: rgba(34, 52, 92, 0.5);
  // filter: saturate(0%);
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
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
    content: "CASES";
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

#cases-wrap {
  padding: 100px 0;
}
.cases-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 20px;
}
@media all and (max-width: 1200px) {
  .cases-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media all and (max-width: 991px) {
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
  .cases-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
@media all and (max-width: 768px) {
  .cases-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

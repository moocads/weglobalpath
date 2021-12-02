<template>
  <div>
    <section>
      <div class="wrapper">
        <MainTitle title="成功案例" titleEN="OUR CASES" />
        <a-row :gutter="[32, 16]">
          <a-col
            :sm="24"
            :md="8"
            :lg="8"
            v-for="(item, index) in caseData"
            :key="index"
          >
            <CaseCard
              :thumbnail="item.thumbnail"
              :title="item.title"
              :date="item.date"
            />
          </a-col>
        </a-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caseData: [
        {
          thumbnail: "url('/img/Home/about-img.jpg')",
          title: "安省境外雇主担保",
          date: "2021-11-13",
        },
        {
          thumbnail: "url('/img/Home/about-img.jpg')",
          title: "安省境外雇主担保",
          date: "2021-11-13",
        },
        {
          thumbnail: "url('/img/Home/about-img.jpg')",
          title: "安省境外雇主担保",
          date: "2021-11-13",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 100px 0;
}
@media all and (max-width: 600px) {
  section {
    padding: 30px 0;
  }
}
</style>

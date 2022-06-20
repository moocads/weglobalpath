<template>
  <div class="hot-projects-detail-page">
    <header
      :style="{
        background: `linear-gradient(
    89.93deg,
    rgba(34, 52, 92, 0.7) 7.82%,
    rgba(34, 52, 92, 0) 102.35%
  )`,
      }"
    >
      <div class="wrapper">
        <h1>签证服务</h1>
      </div>
    </header>
    <section
      v-for="(service, i) in serviceData"
      :key="i"
      :id="`service-${i}`"
      class="sec-intro sec-general sec-bg-gray anchor"
    >
      <div class="wrapper">
        <h2>{{ service.title }}</h2>
        <div v-for="(section, j) in service.sections" :key="j">
          <h3>{{ section.title }}</h3>
          <!-- <vue-markdown class="intro-markdown">{{
          data.introduction_richtext
        }}</vue-markdown> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";

export default {
  head() {
    return {
      title: `签证服务 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `签证服务 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  async asyncData({ $axios, route }) {
    const serviceData = await $axios.$get(`/visa-services`);

    return {
      serviceData,
    };
  },
  components: {
    VueMarkdown,
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/hot-projects/general.scss";
</style>

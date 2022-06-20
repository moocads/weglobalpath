<template>
  <div class="hot-projects-detail-page">
    <header
      :style="{
        background: `linear-gradient(
    89.93deg,
    rgba(34, 52, 92, 0.7) 7.82%,
    rgba(34, 52, 92, 0) 102.35%
  ),url(${data.thumbnail.url})`,
      }"
    >
      <div class="wrapper">
        <h1>{{ data.project_name }}</h1>
      </div>
    </header>
    <section
      id="edu-sec-intro"
      class="sec-intro sec-general sec-bg-gray anchor"
    >
      <div class="wrapper">
        <h2>项目介绍</h2>
        <vue-markdown class="intro-markdown">{{
          data.introduction_richtext
        }}</vue-markdown>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, route }) {
    const projectData = await $axios.$get(
      `/projects`
    );

    return {
      projectData,
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

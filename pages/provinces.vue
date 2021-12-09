<template>
  <div id="province-project-page">
    <header>
      <div class="wrapper">
        <h1>各省份移民项目</h1>
      </div>
    </header>
    <section>
      <div class="wrapper">
        <p>{{ projects[0].name }}</p>
        <p>{{ projects[0].province_project[0].main_category }}</p>
        <p>{{ projects[0].province_project[0].second_category }}</p>
        <p>{{ projects[0].province_project[0].content }}</p>
        <vue-markdown>{{
          projects[0].province_project[0].content
        }}</vue-markdown>
      </div>
    </section>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  async asyncData({ $axios }) {
    const projectData = await $axios.$get(`/province-projects`, {
      params: {
        //category = new immi id:6
        // project_category: 6,
      },
    });
    const projects = projectData;
    return {
      projects,
    };
  },
  components: {
    VueMarkdown,
  },
};
</script>

<style lang="scss" scoped>
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
</style>

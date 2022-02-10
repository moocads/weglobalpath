<template>
  <div>
    <header class="project-header-wrap">
      <div class="wrapper">
        <h1>加拿大团聚移民</h1>
      </div>
    </header>
    <section class="codex-section">
      <div class="wrapper">
        <ul class="codex-grid">
          <li v-for="(p, index) in projects" :key="index" class="codex-item">
            <NuxtLink :to="'/projects/reunion/' + p.slug">
              <img :src="p.thumbnail && p.thumbnail.url" alt="" />
              <h2>{{ p.project_name }}</h2>
            </NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/projects/entrepreneur/manitoba">
              曼省投资移民
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects/entrepreneur/new-brunswick">
              NB省企业家移民</NuxtLink
            >
          </li> -->
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "加彼岸出国咨询 | 加拿大团聚移民",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "加彼岸出国咨询 | 加拿大团聚移民",
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const projectData = await $axios.$get(`/projects`, {
      params: {
        //category = reunion id:5
        project_category: 5,
      },
    });
    const projects = projectData;
    return {
      projects,
    };
  },
};
</script>

<style lang="scss" scoped></style>

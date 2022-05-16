<template>
  <div>
    <header>
      <div class="wrapper">
        <h1>加拿大雇主担保移民</h1>
      </div>
    </header>
    <section class="codex-section">
      <div class="wrapper">
        <ul class="codex-grid">
          <li v-for="(p, index) in projects" :key="index" class="codex-item">
            <NuxtLink :to="'/projects/nominee/' + p.slug">
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
      title: `加拿大移民 | 加拿大雇主担保移民 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 加拿大雇主担保移民 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const projectData = await $axios.$get(`/projects`, {
      params: {
        //category = nominee id:3
        project_category: 3,
      },
    });
    const projects = projectData;
    return {
      projects,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  background: url("/img/Banner/general-banner.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  h1 {
    color: $navy;
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
@media all and (max-width: 768px) {
  header {
    height: 200px;
    h1 {
      font-size: 28px;
    }
    h1::before {
      width: 6px;
      height: 40px;
    }
  }
}
</style>

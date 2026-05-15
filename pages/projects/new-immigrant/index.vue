<template>
  <div>
    <header class="project-header-wrap">
      <div class="wrapper">
        <h1>新移民服务</h1>
      </div>
    </header>
    <Breadcrumb project-url="new-immigrant" :project-data="data" />
    <section class="codex-section">
      <div class="wrapper">
        <ul class="codex-grid">
          <li class="codex-item">
            <NuxtLink to="/projects/new-immigrant/service">
              <img
                src="/img/immigration.png"
                alt="Beyond Canada New Immigrant Service "
              />
              <h2>新移民服务</h2>
            </NuxtLink>
          </li>
          <li class="codex-item">
            <NuxtLink to="/projects/new-immigrant/job-reference">
              <img
                src="/img/Projects/jobRef/job-ref-header.jpg"
                alt="Beyond Canada New Immigrant Job Reference "
              />
              <h2>新移民职业内部推荐</h2>
            </NuxtLink>
          </li>
          <li class="codex-item">
            <NuxtLink to="/projects/new-immigrant/language-education">
              <img
                src="/img/Projects/newImmi/language-header.jpg"
                alt="Beyond Canada New Immigrant Language Education "
              />
              <h2>新移民语言培训</h2>
            </NuxtLink>
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
      title: `加拿大移民 | 新移民服务 | 寰球嘉途`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 新移民服务 | 寰球嘉途`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

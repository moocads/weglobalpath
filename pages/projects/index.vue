<template>
  <div>
    <header>
      <div class="wrapper">
        <h1>热门项目</h1>
      </div>
    </header>
    <section class="codex-section">
      <div class="wrapper">
        <ul class="codex-grid">
          <li class="codex-item" v-for="(proj, i) in projects" :key="i">
            <NuxtLink :to="`/projects/${proj.url}`">
              <img :src="`/img/Home/projects/${proj.thumbnail}`" alt="" />
              <h2>{{ proj.title }}</h2>
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
      title: "加彼岸出国咨询 | 热门项目",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "加彼岸出国咨询 | 热门项目",
        },
      ],
    };
  },
  data() {
    return {
      projects,
    };
  },
};
const projects = [
  {
    url: "entrepreneur",
    thumbnail: "project5.png",
    title: "加拿大企业家投资移民",
  },
  {
    url: "startup",
    thumbnail: "project4.png",
    title: "加拿大创业人才移民",
  },
  {
    url: "nominee",
    thumbnail: "project1.png",
    title: "加拿大雇主担保",
  },
  {
    url: "education",
    thumbnail: "project3.png",
    title: "加拿大留学移民",
  },
  {
    url: "ee",
    thumbnail: "ee2.png",
    title: "联邦EE快速通道",
  },
  {
    url: "reunion",
    thumbnail: "project8.jpeg",
    title: "加拿大团聚移民",
  },
  {
    url: "new-immigrant",
    thumbnail: "project7.jpeg",
    title: "新移民服务",
  },
];
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
    url("/img/Projects/banner.png");

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

.codex-item a {
  height: 100%;
  display: flex;
  flex-direction: column;
  img {
    flex: 1;
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
  .codex-item a {
    height: 100%;
    max-height: 250px;
    img {
      height: 200px;
    }
  }
}
</style>

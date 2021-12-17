<template>
  <div>
    <section>
      <div class="wrapper">
        <MainTitle
          title="其他项目"
          titleEN="OTHER projects"
          titleENColor="#E5E5E5"
        />
        <a-row :gutter="[16, 16]">
          <a-col
            :sm="12"
            :md="6"
            :lg="6"
            v-for="(proj, index) in projects"
            :key="index"
          >
            <NuxtLink :to="proj.url">
              <div
                class="project"
                :style="{
                  'background-image':
                    'url(/img/Home/projects/' + proj.thumbnail + ')',
                }"
              >
                <p>{{ proj.title }}</p>
              </div>
            </NuxtLink>
          </a-col>
          <!-- <a-col :sm="12" :md="6" :lg="6">
            <NuxtLink to="/projects/nominee">
              <div
                class="project"
                style="background-image: url(/img/Home/about-img.jpg)"
              >
                <p>加拿大雇主担保</p>
              </div>
            </NuxtLink>
          </a-col>
          <a-col :sm="12" :md="6" :lg="6">
            <NuxtLink to="/projects/education">
              <div
                class="project"
                style="background-image: url(/img/Home/about-img.jpg)"
              >
                <p>加拿大留学移民</p>
              </div>
            </NuxtLink>
          </a-col>
          <a-col :sm="12" :md="6" :lg="6">
            <NuxtLink to="/projects/reunion">
              <div
                class="project"
                style="background-image: url(/img/Home/about-img.jpg)"
              >
                <p>加拿大团聚服务</p>
              </div>
            </NuxtLink>
          </a-col> -->
        </a-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects,
    };
  },
  // mounted() {
  //   const currPath = $nuxt.$route.path;
  //   // console.log(getCurrentPath);
  //   let newProjects = projects.map((p) => p.route);
  //   // console.log(newProjects);
  //   let arr = [];
  //   let filteredProjects = newProjects.map((e) => {
  //     if (e.includes(currPath)) {
  //       pop(e);
  //     } else {
  //       [...arr];
  //     }
  //   });
  //   console.log("arr = " + arr);
  // },
};
const projects = [
  {
    url: "/projects/entrepreneur",
    thumbnail: "project5.png",
    title: "加拿大企业家投资移民",
    route: "/projects/entrepreneur",
  },
  {
    url: "/projects/startup",
    thumbnail: "project4.png",
    title: "加拿大创业人才移民",
    route: "/projects/startup",
  },
  {
    url: "/projects/nominee",
    thumbnail: "project1.png",
    title: "加拿大雇主担保",
    route: "/projects/nominee",
  },
  {
    url: "/projects/education",
    thumbnail: "project3.png",
    title: "加拿大留学移民",
    route: "/projects/education",
  },
  {
    url: "/projects/ee",
    thumbnail: "ee2.png",
    title: "联邦EE快速通道项目",
    route: "/projects/ee",
  },
  {
    url: "/projects/reunion",
    thumbnail: "project8.jpeg",
    title: "加拿大团聚移民",
    route: "/projects/reunion",
  },
  {
    url: "/projects/new-immigrant",
    thumbnail: "project7.jpeg",
    title: "新移民服务",
    route: "/projects/new-immigrant",
  },
  {
    url: "/recruiting",
    thumbnail: "recruiting.jpg",
    title: "中国区招生计划",
    route: "/recruiting",
  },
];
</script>

<style lang="scss" scoped>
section {
  padding: 100px 0;
  background-color: #efefef;
}
.project {
  // min-width: 320px;
  min-height: 170px;
  width: 100%;
  height: 100%;
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-size: cover;
  background-color: rgba(34, 52, 92, 0.7);
  background-blend-mode: multiply;
  background-position: center center;
  transition: all 0.3s ease-in-out;
  p {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin: 0;
  }
}
// .project:hover {
//   background-color: transparent;
// }
@media all and (max-width: 768px) {
  section {
    padding: 30px 0;
  }
}
</style>

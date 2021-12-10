<template>
  <div id="province-project-page">
    <header>
      <div class="wrapper">
        <h1>各省份移民项目</h1>
      </div>
    </header>
    <section>
      <div class="wrapper">
        <div class="tab-grid">
          <div class="tab-item" v-for="(tab, index) in projects" :key="index">
            <h2>{{ tab.name }}</h2>
          </div>
        </div>
        <a-collapse accordion>
          <a-collapse-panel
            :header="mainCate.main_category"
            v-for="mainCate in projects.province_project"
            :key="mainCate.id"
            class="outer-collapse"
          >
            <a-collapse>
              <a-collapse-panel
                v-for="proj in mainCate.province_content"
                :key="'proj' + proj.id"
                :header="proj.second_category"
                class="inner-collapse"
              >
                <vue-markdown class="province-project-content">
                  {{ proj.content }}
                </vue-markdown>
              </a-collapse-panel>
            </a-collapse>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </section>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  async asyncData({ $axios }) {
    const projectData = await $axios.$get(`/province-projects/1`, {
      params: {
        //category = new immi id:6
        // id: 1,
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

<style lang="scss">
.province-project-content {
  padding: 10px;
  padding-left: 50px;
  ol {
    list-style-type: decimal;
    margin-left: 15px;
  }
}
#province-project-page {
  .outer-collapse {
    background-color: $navy;
    svg {
      fill: #fff;
    }
  }
  .inner-collapse {
    svg {
      fill: $red;
    }
  }
  .outer-collapse > .ant-collapse-header {
    color: #fff;
  }
  .inner-collapse > .ant-collapse-header {
    color: $navy;
    padding-left: 50px;
  }
  .inner-collapse .ant-collapse-header i {
    left: 30px;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }
}
</style>
<style lang="scss" scoped>
section {
  padding: 100px 0;
}
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
.tab-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}
.tab-item {
  width: 200px;
  height: 40px;
  background-color: #e9e9e9;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 16px;
    color: $navy;
    margin: 0;
  }
}
</style>

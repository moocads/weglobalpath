<template>
  <div id="province-project-page">
    <header>
      <div class="wrapper">
        <h1>移民省份项目</h1>
      </div>
    </header>
    <section>
      <div class="wrapper">
        <div class="tab-grid">
          <div
            class="tab-item"
            v-for="(tab, index) in projects"
            :key="index"
            :class="{ 'tab-active': index === activeItem }"
            @click="[selectItem(index), (tabSelected = tab.id - 1)]"
          >
            <h2>{{ tab.name }}</h2>
          </div>
        </div>
        <hr />
        <a-collapse accordion default-active-key="mainKey0">
          <a-collapse-panel
            :header="mainCate.main_category"
            v-for="(mainCate, index) in projects[tabSelected].province_project"
            :key="'mainKey' + index"
            class="outer-collapse"
          >
            <a-collapse accordion default-active-key="proj0">
              <a-collapse-panel
                v-for="(proj, index) in mainCate.province_content"
                :key="'proj' + index"
                :header="proj.second_category"
                class="inner-collapse"
              >
                <vue-markdown class="province-project-content" :key="proj.id">
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
  head() {
    return {
      title: `加拿大移民 | 加拿大移民省份 | 寰球嘉途`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 加拿大移民省份 | 寰球嘉途`,
        },
      ],
    };
  },
  data() {
    return {
      tabSelected: this.$store.state.province - 1 || 0,
      activeItem: 0,
    };
  },
  created() {
    if (this.$store.state.province) {
      this.activeItem = this.tabSelected;
    }
  },
  beforeDestroy() {
    if (this.$store.state.province) {
      this.$store.commit("setProvince", undefined);
    }
  },
  watch: {
    "$store.state.province": function () {
      // console.log(this.$store.state.ee)
      this.tabSelected = this.$store.state.province - 1;
      this.activeItem = this.tabSelected;
    },
  },
  async asyncData({ $axios }) {
    const projectData = await $axios.$get(`/province-projects`, {
      params: {
        _sort: "id:asc",
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
  methods: {
    selectItem(i) {
      this.activeItem = i;
    },
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
  ul {
    list-style-type: disc;
    margin-left: 25px;
  }
  img {
    max-width: 1000px;
    width: 100%;
  }
  a {
    color: $primary;
    text-decoration: underline;
  }
}
#province-project-page {
  hr {
    margin: 80px auto;
    border-top: 1px solid #e9e9e9;
    position: relative;
    &::before {
      content: url("/img/Investment/hr-img.svg");
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .outer-collapse {
    background-color: $primary;
    svg {
      fill: #fff;
    }
  }
  .inner-collapse {
    svg {
      fill: $secondary;
    }
  }
  .outer-collapse > .ant-collapse-header {
    color: #fff;
  }
  .inner-collapse > .ant-collapse-header {
    color: $primary;
    padding-left: 50px;
  }
  .inner-collapse .ant-collapse-header i {
    left: 30px;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }
}
@media all and (max-width: 768px) {
  #province-project-page {
    hr {
      margin: 30px auto;
    }
  }
  .province-project-content {
    padding: 10px;
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
    url("/img/Banner/province-project-banner.jpg");

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
    background-color: $secondary;
    width: 6px;
    height: 70px;
  }
}
.tab-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  place-items: center;
}
.tab-item {
  width: 100%;
  max-width: 200px;
  height: 40px;
  background-color: #e9e9e9;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 16px;
    color: $primary;
    margin: 0;
  }
  transition: background-color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    h2 {
      color: #fff;
    }
    background-color: $secondary;
  }
}
.tab-active {
  h2 {
    color: #fff;
  }
  background-color: $secondary;
}
@media all and (max-width: 768px) {
  section {
    padding: 30px 0;
  }
  header {
    height: 300px;

    h1 {
      font-size: 35px;
    }
  }
  .tab-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .tab-item {
    width: 100%;
  }
}
@media all and (max-width: $sm) {
  .tab-item > h2{
    font-size: 14px;
  }
}
</style>

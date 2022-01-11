<template>
  <div>
    <nav>
      <div class="wrapper navbar-wrap">
        <ul class="main-nav">
          <li>
            <NuxtLink to="/" exact>首页</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">关于我们</NuxtLink>
            <div class="general-dropdown">
              <ul>
                <li>
                  <a href="#anchor-franchise">加盟招商</a>
                </li>
                <li>
                  <a href="#anchor-joinUs">加入我们</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink to="/recruiting">中国区招生计划</NuxtLink>
          </li>
          <li class="hot-project-link">
            <NuxtLink to="/projects">热门项目</NuxtLink>
            <div class="hot-project-dropdown dropdown-wrap">
              <div
                class="project-col"
                v-for="(hotProj, index) in hotProjects"
                :key="index"
              >
                <NuxtLink :to="hotProj.url" class="main-cate">{{
                  hotProj.main_cate
                }}</NuxtLink>

                <ul>
                  <li v-for="subItem in hotProj.second_cate" :key="subItem.id">
                    <NuxtLink :to="`${hotProj.url}/${subItem.id}`">
                      {{ subItem.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="project-col">
                <NuxtLink to="/projects/ee" class="main-cate"
                  >联邦EE快速通道项目</NuxtLink
                >
                <!-- <ul>
                  <li>
                    <a
                      @click="
                        $router.push({
                          path: '/projects/ee',
                          params: { id: 'pie' },
                        })
                      "
                    >
                      tab1
                    </a>
                  </li>
                </ul> -->
              </div>
              <!-- <ul>
                <NuxtLink to="/projects/entrepreneur"
                  >加拿大企业家移民</NuxtLink
                >
                <NuxtLink to="/projects/startup">加拿大创业人才移民</NuxtLink>
                <NuxtLink to="/projects/nominee">加拿大雇主担保</NuxtLink>
                <NuxtLink to="/projects/education">加拿大留学移民</NuxtLink>
                <NuxtLink to="/projects/ee">联邦EE快速通道</NuxtLink>
                <NuxtLink to="/projects/reunion">加拿大团聚移民</NuxtLink>
                <NuxtLink to="/projects/new-immigrant">新移民服务</NuxtLink>
              </ul> -->
            </div>
          </li>
          <li>
            <NuxtLink to="/cases">成功案例</NuxtLink>
          </li>
          <li class="hot-project-link">
            <NuxtLink to="/provinces">移民省份</NuxtLink>
            <div class="hot-project-dropdown dropdown-wrap">
              <div
                class="project-col"
                v-for="(province, index) in provinces"
                :key="index"
              >
                <NuxtLink to="/provinces" class="main-cate">{{
                  province.main_cate
                }}</NuxtLink>
                <ul class="province-list">
                  <li v-for="subItem in province.second_cate" :key="subItem.id">
                    <a @click="provinceLink(subItem.id)">
                      {{ subItem.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NuxtLink to="/investment">加拿大投资</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blogs">最新资讯</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">联系我们</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
const provinces = [
  {
    main_cate: "移民省份项目",
    url: "/projects/provinces",
    second_cate: [
      {
        id: "1",
        name: "安大略省",
      },
      {
        id: "2",
        name: "曼尼托巴省",
      },
      {
        id: "3",
        name: "爱德华王子岛",
      },
      {
        id: "4",
        name: "纽芬兰省",
      },
      {
        id: "5",
        name: "BC省",
      },
      {
        id: "6",
        name: "阿尔伯塔省",
      },
      {
        id: "7",
        name: "萨斯喀彻温省",
      },
      {
        id: "8",
        name: "新不伦瑞克省",
      },
      {
        id: "9",
        name: "新斯科舍省",
      },
      {
        id: "10",
        name: "魁北克省",
      },
    ],
  },
];
const hotProjects = [
  {
    main_cate: "加拿大企业家移民",
    url: "/projects/entrepreneur",
    second_cate: [
      {
        id: "1",
        name: "曼省企业家投资移民",
      },
      {
        id: "2",
        name: "NB省企业家投资移民",
      },
      {
        id: "3",
        name: "安省企业家投资移民",
      },
      {
        id: "4",
        name: "萨省企业家投资移民",
      },
      {
        id: "6",
        name: "爱德华王子岛企业家投资移民",
      },
    ],
  },
  {
    main_cate: "加拿大创业移民",
    url: "/projects/startup",
    second_cate: [
      {
        id: "7",
        name: "企业主工签",
      },
      {
        id: "8",
        name: "联邦创业投资（SUV）",
      },
      {
        id: "9",
        name: "联邦自雇移民",
      },
      {
        id: "10",
        name: "全球人才计划",
      },
      {
        id: "11",
        name: "ICT跨国公司高管签证",
      },
    ],
  },
  {
    main_cate: "加拿大雇主担保",
    url: "/projects/nominee",
    second_cate: [
      {
        id: "12",
        name: "安省境外雇主担保",
      },
      {
        id: "13",
        name: "BC省雇主担保",
      },
      {
        id: "14",
        name: "海洋省雇主担保AIPP",
      },
      {
        id: "15",
        name: "魁省雇主担保",
      },
      {
        id: "16",
        name: "农业试点",
      },
      {
        id: "17",
        name: "联邦护理移民",
      },
    ],
  },
  {
    main_cate: "加拿大留学移民",
    url: "/projects/education",
    second_cate: [
      {
        id: "18",
        name: "曼省留学移民",
      },
      {
        id: "19",
        name: "安省研究生移民",
      },
      {
        id: "20",
        name: "BC省留学就业移民",
      },
      {
        id: "21",
        name: "NB省留学移民",
      },
    ],
  },
  // {
  //   main_cate: "联邦EE快速通道项目",
  //   url: "/projects/ee",
  // },
  {
    main_cate: "加拿大团聚移民",
    url: "/projects/reunion",
    second_cate: [
      {
        id: "22",
        name: "配偶及子女团聚",
      },
      {
        id: "23",
        name: "父母/祖父母团聚",
      },
    ],
  },
  {
    main_cate: "新移民服务",
    url: "/projects/new-immigrant",
  },
];
export default {
  data() {
    return {
      isActive: false,
      hotProjects,
      provinces
    };
  },
  methods: {
    // navbarActive:function(){
    //   this.isActive = !
    // }
    provinceLink(id) {
      this.$store.commit('setProvince', id)
      // console.log(this.$store.state.province)
      this.$router.push('/provinces')
    }
  },
};
</script>
<style lang="scss">
.navbar-wrap {
  .nuxt-link-active,
  .nuxt-link-exact-active {
    background-color: $red;
  }
}
.hot-project-dropdown {
  .nuxt-link-active,
  .nuxt-link-exact-active {
    background-color: transparent;
    // border-bottom: 3px solid $red;
  }
}
</style>
<style lang="scss" scoped>
$nav-height: 70px;
$nav-dropdown-height: 50px;

nav {
  height: $nav-height;
  width: 100%;
  background-color: $navy;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-wrap {
  .main-nav {
    display: flex;
    justify-content: space-between;
    & > li {
      position: relative;
      height: $nav-height;
      display: flex;
      justify-content: center;
      align-items: center;
      & > a {
        padding: 0 20px;
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: $nav-height;
        @media (max-width: 1200px) {
          padding: 0 15px;
          font-size: 14px;
        }
      }
    }
  }
}
.navbar-wrap > .main-nav > li:hover {
  background-color: $red;
  .dropdown-wrap {
    display: grid;
  }
  .general-dropdown {
    display: grid;
  }
}
.general-dropdown {
  display: none;
  z-index: 99;
  position: absolute;
  top: $nav-height;
  left: 0;
  background: rgb(54, 65, 99);
  padding: 20px;
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  a {
    padding: 0px 10px 5px;
    // height: 100%;
    width: auto;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    white-space: nowrap;
  }

  a::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: $red;
    transition: width 0.3s;
  }

  a:hover::after {
    width: 100%;
  }
}
.dropdown-wrap {
  padding: 30px;
  display: none;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  // place-items: center;
  z-index: 99;
  background: rgb(54, 65, 99);
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  a {
    padding: 0px 10px 5px;
    // height: 100%;
    width: auto;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    white-space: nowrap;
  }

  a::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: $red;
    transition: width 0.3s;
  }

  a:hover::after {
    width: 100%;
    //transition: width .3s;
  }
}

.hot-project-link {
  position: relative;
  .hot-project-dropdown {
    position: absolute;
    top: $nav-height;
    left: 50%;
    transform: translateX(-40%);
  }
}
.project-col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  & > .main-cate {
    width: auto;
    font-size: 16px;
    font-weight: bold;
    // text-align: center;
    position: relative;
  }
  & > .main-cate::after {
    content: "";
    width: 30px;
    height: 3px;
    bottom: -20px;
    left: 0;
    background-color: $red;
  }
}

.dropdown-wrap .province-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 220px;
  
  li {
    width: 110px
  }
}

@media all and (max-width: 1200px) {
  .dropdown-wrap {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>

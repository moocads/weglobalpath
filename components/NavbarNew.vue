<template>
  <div>
    <nav>
      <div class="logo-wrap">
        <NuxtLink to="/">
          <img
            src="/img/logos/logo-blue.png"
            alt="加彼岸 Navbar Logo"
            class="nav_logo"
          />
        </NuxtLink>
      </div>
      <div class="navbar-wrap">
        <ul class="main-nav">
          <li>
            <NuxtLink to="/" exact>首页</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about"
              >关于我们
              <a-icon
                type="down"
                class="dropdown-arrow"
                alt="dropdown arrow icon"
              />
            </NuxtLink>
            <div class="general-dropdown">
              <ul>
                <li>
                  <NuxtLink :to="{ path: '/about', hash: '#anchor-franchise' }"
                    >加盟招商</NuxtLink
                  >
                  <!-- <a href="#anchor-franchise">加盟招商</a> -->
                </li>
                <li>
                  <NuxtLink :to="{ path: '/about', hash: '#anchor-joinUs' }"
                    >加入我们</NuxtLink
                  >

                  <!-- <a href="#anchor-joinUs">加入我们</a> -->
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink to="/recruiting">快速移民直通车</NuxtLink>
            <!-- <div class="general-dropdown">
              <ul>
                <li>
                  <NuxtLink to="/recruiting/manitoba"
                    >曼省人才管培项目</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/recruiting"
                    >8个月加拿大公立学院研究生文凭移民直通车</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/recruiting/canadian-schools"
                    >加拿大合作院校</NuxtLink
                  >
                </li>
              </ul>
            </div> -->
          </li>
          <li class="hot-project-link">
            <NuxtLink to="/projects"
              >热门项目
              <a-icon
                type="down"
                class="dropdown-arrow"
                alt="dropdown arrow icon"
            /></NuxtLink>
            <div class="hot-project-dropdown dropdown-wrap">
              <!-- <div
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
              </div> -->

              <div class="project-col">
                <NuxtLink :to="hotProjects[0].url" class="main-cate">{{
                  hotProjects[0].main_cate
                }}</NuxtLink>

                <ul>
                  <li
                    v-for="subItem in hotProjects[0].second_cate"
                    :key="subItem.id"
                  >
                    <NuxtLink :to="`${hotProjects[0].url}/${subItem.id}`">
                      {{ subItem.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="project-col">
                <NuxtLink :to="hotProjects[1].url" class="main-cate">{{
                  hotProjects[1].main_cate
                }}</NuxtLink>

                <ul>
                  <li
                    v-for="subItem in hotProjects[1].second_cate"
                    :key="subItem.id"
                  >
                    <NuxtLink :to="`${hotProjects[1].url}/${subItem.id}`">
                      {{ subItem.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="project-col">
                <NuxtLink :to="hotProjects[2].url" class="main-cate">{{
                  hotProjects[2].main_cate
                }}</NuxtLink>

                <ul>
                  <li
                    v-for="subItem in hotProjects[2].second_cate"
                    :key="subItem.id"
                  >
                    <NuxtLink :to="`${hotProjects[2].url}/${subItem.id}`">
                      {{ subItem.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="project-col">
                <NuxtLink :to="hotProjects[3].url" class="main-cate">{{
                  hotProjects[3].main_cate
                }}</NuxtLink>

                <ul>
                  <li
                    v-for="subItem in hotProjects[3].second_cate"
                    :key="subItem.id"
                  >
                    <NuxtLink :to="`${hotProjects[3].url}/${subItem.id}`">
                      {{ subItem.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="project-col">
                <NuxtLink to="/projects/ee" class="main-cate"
                  >联邦EE快速通道项目</NuxtLink
                >
                <ul>
                  <li>
                    <a @click="eeLink(1)"> 技术类移民 </a>
                  </li>
                  <li>
                    <a @click="eeLink(2)"> 技工类移民 </a>
                  </li>
                  <li>
                    <a @click="eeLink(3)"> 经验类移民 </a>
                  </li>
                </ul>
              </div>
              <div class="project-col">
                <NuxtLink :to="hotProjects[4].url" class="main-cate">{{
                  hotProjects[4].main_cate
                }}</NuxtLink>

                <ul>
                  <li
                    v-for="subItem in hotProjects[4].second_cate"
                    :key="subItem.id"
                  >
                    <NuxtLink :to="`${hotProjects[4].url}/${subItem.id}`">
                      {{ subItem.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="project-col">
                <NuxtLink :to="hotProjects[5].url" class="main-cate">{{
                  hotProjects[5].main_cate
                }}</NuxtLink>

                <ul>
                  <li
                    v-for="subItem in hotProjects[5].second_cate"
                    :key="subItem.id"
                  >
                    <NuxtLink :to="`${hotProjects[5].url}/${subItem.id}`">
                      {{ subItem.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <NuxtLink to="/cases">成功案例</NuxtLink>
          </li>
          <li class="hot-project-link">
            <NuxtLink to="/provinces"
              >移民省份
              <a-icon
                type="down"
                class="dropdown-arrow"
                alt="dropdown arrow icon"
            /></NuxtLink>
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
export default {
  data() {
    return {
      isActive: false,
      hotProjects,
      provinces,
    };
  },
  methods: {
    // navbarActive:function(){
    //   this.isActive = !
    // }
    provinceLink(id) {
      this.$store.commit("setProvince", id);
      // console.log(this.$store.state.province)
      this.$router.push("/provinces");
    },
    eeLink(id) {
      this.$store.commit("setEe", id);
      // console.log(this.$store.state.province)
      this.$router.push("/projects/ee");
    },
  },
};
const hotProjects = [
  {
    main_cate: "加拿大企业家移民",
    url: "/projects/entrepreneur",
    second_cate: [
      {
        id: "manitoba-investment",
        name: "曼省企业家投资移民",
      },
      {
        id: "new-brunswick-investment",
        name: "NB省企业家投资移民",
      },
      {
        id: "ontario-investment",
        name: "安省企业家投资移民",
      },
      {
        id: "saskatchewan-investment",
        name: "萨省企业家投资移民",
      },
      {
        id: "PEI-investment",
        name: "爱德华王子岛企业家投资移民",
      },
    ],
  },
  {
    main_cate: "加拿大创业移民",
    url: "/projects/startup",
    second_cate: [
      {
        id: "owner-operator-work-permit",
        name: "企业主工签",
      },
      {
        id: "start-up-visa",
        name: "联邦创业投资（SUV）",
      },
      {
        id: "self-employment",
        name: "联邦自雇移民",
      },
      {
        id: "global-talent-stream",
        name: "全球人才计划",
      },
      {
        id: "intra-company-transfer",
        name: "ICT跨国公司高管签证",
      },
    ],
  },
  {
    main_cate: "加拿大雇主担保",
    url: "/projects/nominee",
    second_cate: [
      {
        id: "ontario-immigrat-nominee-program",
        name: "安省境外雇主担保",
      },
      {
        id: "BC-provincial-nominee-program",
        name: "BC省雇主担保",
      },
      {
        id: "atlantic-immigration-pilot-program",
        name: "大西洋移民计划AIP",
      },
      {
        id: "quebec-skilled-worker",
        name: "魁省雇主担保",
      },
      {
        id: "agri-food-immigration-pilot",
        name: "农业试点",
      },
      {
        id: "care-giver-program",
        name: "联邦护理移民",
      },
    ],
  },
  {
    main_cate: "加拿大留学移民",
    url: "/projects/education",
    second_cate: [
      {
        id: "manitoba-education",
        name: "曼省留学移民",
      },
      {
        id: "ontario-master-education",
        name: "安省研究生移民",
      },
      {
        id: "BC-education",
        name: "BC省留学就业移民",
      },
      {
        id: "new-brunswick-education",
        name: "NB省留学移民",
      },
      {
        id: "visit-visa-to-study-permit",
        name: "旅游签转学签",
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
        id: "reunion-program",
        name: "配偶及子女团聚",
      },
      {
        id: "parents-and-grandparents-reunion",
        name: "父母/祖父母团聚",
      },
    ],
  },
  {
    main_cate: "新移民服务",
    url: "/projects/new-immigrant",
    second_cate: [
      { id: "language-education", name: "新移民语言培训" },
      { id: "job-reference", name: "新移民职业内部推荐" },
    ],
  },
];
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
</script>
<style lang="scss">
.navbar-wrap {
  .nuxt-link-active,
  .nuxt-link-exact-active {
    background-color: transparent;
  }
}
.hot-project-dropdown,
.general-dropdown {
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
$nav-gray: rgba(0, 0, 0, 0.5);
nav {
  height: $nav-height;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.logo-wrap {
  img {
    height: auto;
    width: 180px;
  }
}
.navbar-wrap {
  .main-nav {
    display: flex;
    justify-content: flex-end;
    & > li {
      position: relative;
      height: $nav-height;
      display: flex;
      justify-content: center;
      align-items: center;
      & > a {
        padding: 0 15px;
        height: 100%;
        width: 100%;
        color: $nav-gray;
        font-size: 16px;
        font-weight: 400;
        line-height: $nav-height;
        display: flex;
        align-items: center;
        @media (max-width: 1200px) {
          font-size: 14px;
        }
      }
    }
  }
}
.navbar-wrap > .main-nav > li:hover {
  background-color: transparent;
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
  background: #fff;
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
    color: $nav-gray;
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
    background: $nav-gray;
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
  background: #fff;
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
    color: $nav-gray;
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
    background: $nav-gray;
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
    transform: translateX(-50%);
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
    background-color: $nav-gray;
  }
}

.dropdown-wrap .province-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 220px;

  li {
    width: 110px;
  }
}
.dropdown-arrow {
  width: 15px;
  height: 15px;
  margin-left: 5px;
}
@media all and (max-width: 1200px) {
  .dropdown-wrap {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>

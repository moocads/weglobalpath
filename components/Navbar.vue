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
                  >联邦快速通道</NuxtLink
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
              <div class="project-col">
                <NuxtLink :to="hotProjects[6].url" class="main-cate">{{
                  hotProjects[6].main_cate
                }}</NuxtLink>

                <ul>
                  <li
                    v-for="subItem in hotProjects[6].second_cate"
                    :key="subItem.id"
                  >
                    <NuxtLink :to="`${hotProjects[6].url}/${subItem.id}`">
                      {{ subItem.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="euro-usa-link">
            <NuxtLink to="/projects"
              >欧美移民
              <a-icon
                type="down"
                class="dropdown-arrow"
                alt="dropdown arrow icon"
            /></NuxtLink>
            <div class="hot-project-dropdown dropdown-wrap">
              <div class="project-col">
                <NuxtLink to="/projects/euro" class="main-cate"
                  >欧洲移民项目</NuxtLink
                >
                <ul>
                  <li>
                    <NuxtLink to="/projects/euro/portugal-golden-plan-28w">
                      葡萄牙28万购房欧黄金居留</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/projects/euro/portugal-golden-plan-50w">
                      葡萄牙50万欧购房黄金居留</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/projects/euro/portugal-golden-plan-50w-fund">
                      葡萄牙50万欧基金黄金居留</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/projects/euro/ireland-investment">
                      爱尔兰投资移民项目</NuxtLink
                    >
                  </li>
                                    <li>
                    <NuxtLink to="/projects/euro/turkey-investment-passport-program-for-25w-property">
                      土耳其40万美元购房护照项目</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="project-col">
                <NuxtLink to="/projects/usa" class="main-cate"
                  >美国移民项目</NuxtLink
                >
                <ul>
                  <li
                    v-for="subItem in hotProjects[6].second_cate"
                    :key="subItem.id"
                  >
                    <NuxtLink :to="`${hotProjects[6].url}/${subItem.id}`">
                      {{ subItem.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <!-- <li>
            <NuxtLink to="/cases">成功案例</NuxtLink>
          </li> -->
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
import { hotProjectsNavMap, provincesMap } from "~/utils";
export default {
  data() {
    return {
      isActive: false,
      hotProjects: hotProjectsNavMap,
      provinces: provincesMap,
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
</script>
<style lang="scss">
.navbar-wrap {
  .nuxt-link-active,
  .nuxt-link-exact-active {
    background-color: transparent;
    color: $navy !important;
  }
}
.hot-project-dropdown,
.general-dropdown {
  .nuxt-link-active,
  .nuxt-link-exact-active {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.5) !important;
    // border-bottom: 3px solid $red;
  }
}
</style>
<style lang="scss" scoped>
$nav-height: 70px;
$nav-dropdown-height: 50px;
$nav-gray: rgba(0, 0, 0, 0.5);
nav {
  position: fixed;
  top: 30px;
  left: 0;
  z-index: 99;
  height: $nav-height;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: (5px 5px 10px rgba(96, 96, 96, 0.308));
  border-bottom: 1px solid #efefef;
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
  grid-template-columns: repeat(8, 1fr);
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

.hot-project-link,
.euro-usa-link {
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
@media all and (max-width: 1400px) {
  .dropdown-wrap {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>

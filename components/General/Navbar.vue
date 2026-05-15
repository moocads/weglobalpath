<template>
  <div>
    <nav>
      <div class="logo-wrap">
        <NL18 to="/">
          <img
            src="/img/weglobalpath-logo.svg"
            alt="寰球嘉途 Navbar Logo"
            class="nav_logo"
          />
        </NL18>
      </div>
      <div class="navbar-wrap">
        <ul class="main-nav">
          <li>
            <NL18 to="/" exact> {{ $t("navbar.home") }}</NL18>
          </li>
          <li>
            <NL18 to="/visa-services">
              {{ $t("navbar.visa-services") }}
              <a-icon
                type="down"
                class="dropdown-arrow"
                alt="dropdown arrow icon"
              />
            </NL18>
            <div class="general-dropdown">
              <ul>
                <li>
                  <NuxtLink
                    :to="{
                      path: localePath('/visa-services'),
                      hash: '#service-0',
                    }"
                    >{{ $t("navbar.visa-services-1") }}</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    :to="{
                      path: localePath('/visa-services'),
                      hash: '#service-1',
                    }"
                    >{{ $t("navbar.visa-services-2") }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="hot-project-link">
            <NL18 to="/projects">
              {{ $t("navbar.projects") }}
              <a-icon
                type="down"
                class="dropdown-arrow"
                alt="dropdown arrow icon"
              />
            </NL18>
            <div class="hot-project-dropdown dropdown-wrap">
              <div class="project-col">
                <NuxtLink
                  :to="localePath(hotProjects[0].url)"
                  class="main-cate"
                  >{{ hotProjects[0].main_cate }}</NuxtLink
                >
                <ul>
                  <li
                    v-for="subItem in hotProjects[0].second_cate"
                    :key="subItem.id"
                  >
                    <NuxtLink
                      :to="localePath(`${hotProjects[0].url}/${subItem.id}`)"
                    >
                      {{ subItem.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
              <div class="project-col">
                <NuxtLink
                  :to="localePath(hotProjects[1].url)"
                  class="main-cate"
                  >{{ hotProjects[1].main_cate }}</NuxtLink
                >

                <ul>
                  <li
                    v-for="subItem in hotProjects[1].second_cate"
                    :key="subItem.id"
                  >
                    <NuxtLink
                      :to="localePath(`${hotProjects[1].url}/${subItem.id}`)"
                    >
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
                <NuxtLink to="/projects/ee" class="main-cate">
                  联邦快速通道
                </NuxtLink>
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
                   <NuxtLink to="/projects/lmia" class="main-cate">
                  LMIA 加分
                </NuxtLink>
                </ul>
              </div>
              <div class="project-col">
                <NuxtLink :to="hotProjects[4].url" class="main-cate">
                  {{ hotProjects[4].main_cate }}
                </NuxtLink>
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
          <li>
            <NL18 to="/about">
              {{ $t("navbar.about") }}
              <a-icon
                type="down"
                class="dropdown-arrow"
                alt="dropdown arrow icon"
              />
            </NL18>
            <div class="general-dropdown">
              <ul>
                <li>
                  <NuxtLink
                    :to="{
                      path: localePath('/about'),
                      hash: '#anchor-franchise',
                    }"
                  >
                    {{ $t("navbar.about-franchise") }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    :to="{ path: localePath('/about'), hash: '#anchor-joinUs' }"
                  >
                    {{ $t("navbar.about-join-us") }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NL18 to="/contact">
              {{ $t("navbar.contact") }}
            </NL18>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { hotProjectsNavMap } from "~/utils";
export default {
  data() {
    return {
      isActive: false,
      hotProjects: hotProjectsNavMap,
    };
  },
  methods: {
    // navbarActive:function(){
    //   this.isActive = !
    // }
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
    color: $primary !important;
  }
}
.hot-project-dropdown,
.general-dropdown {
  .nuxt-link-active,
  .nuxt-link-exact-active {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.5) !important;
    // border-bottom: 3px solid $secondary;
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
    width: 240px;
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
    line-height: 20px;
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
  padding: 20px;
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
    line-height: 20px;
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
    line-height: 30px;
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

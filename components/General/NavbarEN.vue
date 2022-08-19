<template>
  <div>
    <nav>
      <div class="logo-wrap">
        <NuxtLink :to="localePath('/')">
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
            <NuxtLink :to="localePath('/')" exact>{{
              $t("navbar.home")
            }}</NuxtLink>
          </li>

          <li>
            <NuxtLink :to="localePath('/about')">
              {{ $t("navbar.about") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contact')">{{
              $t("navbar.contact")
            }}</NuxtLink>
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

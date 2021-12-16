<template>
  <div>
    <nav>
      <div class="wrapper navbar-wrap">
        <ul>
          <li>
            <NuxtLink to="/" exact>首页</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">关于我们</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/recruiting">中国区招生计划</NuxtLink>
          </li>
          <li class="hot-project-link">
            <NuxtLink to="/projects">热门项目</NuxtLink>
            <div class="hot-project-dropdown dropdown-wrap">
              <ul>
                <NuxtLink to="/projects/entrepreneur"
                  >加拿大企业家移民</NuxtLink
                >
                <NuxtLink to="/projects/startup">加拿大创业人才移民</NuxtLink>
                <NuxtLink to="/projects/nominee">加拿大雇主担保</NuxtLink>
                <NuxtLink to="/projects/education">加拿大留学移民</NuxtLink>
                <NuxtLink to="/projects/reunion">加拿大团聚移民</NuxtLink>
                <NuxtLink to="/projects/new-immigrant">新移民服务</NuxtLink>
                <NuxtLink to="/projects/ee">联邦EE移民项目</NuxtLink>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink to="/cases">成功案例</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/provinces">各省份移民</NuxtLink>
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
    };
  },
  methods: {
    // navbarActive:function(){
    //   this.isActive = !
    // }
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
</style>
<style lang="scss" scoped>
$nav-height: 70px;

.nav-active {
  background-color: $red;
}

nav {
  height: $nav-height;
  width: 100%;
  background-color: $navy;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-wrap {
  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    height: $nav-height;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
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
      };
    }
  }

  li:hover {
    background-color: $red;

    .dropdown-wrap {
      display: block;
    }
  }
}

.dropdown-wrap {
  display: none;
  z-index: 99;
  background: $navy;

ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    padding: 0px;
    height: 100%;
    width: 100%;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    white-space: nowrap;
  }

  a:hover {
    background-color: $red;
  }
}

.hot-project-link {
  position: relative;

  .hot-project-dropdown {
    position: absolute;
    top: 70px;
    left: 0;
  }
}
</style>

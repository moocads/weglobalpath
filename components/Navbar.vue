<template>
  <div>
    <nav>
      <div class="wrapper navbar-wrap">
        <ul>
          <li>
            <NuxtLink to="/">首页</NuxtLink>
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
                <li>
                  <NuxtLink to="/">加拿大企业家移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/entrepreneur/manitoba"
                    >加拿大创业人才</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/">加拿大雇主担保</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">加拿大留学移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">加拿大雇团聚移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">新移民服务</NuxtLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink to="/cases">成功案例</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/provinces">移民省份</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/investment">加拿大投资</NuxtLink>
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
export default {};
</script>

<style lang="scss" scoped>
$nav-height: 70px;
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
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
    max-height: 40px;
    a {
      padding: 0px;
      height: 100%;
      width: auto;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      white-space: nowrap;
    }
  }
  li:hover {
    background: $red;
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

<template>
  <div>
    <nav>
      <div class="wrapper">
        <ul>
          <li>
            <NuxtLink to="/">首页</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">关于我们</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">中国区招生计划</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">热门项目</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">成功案例</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">移民省份</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">加拿大投资</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">联系我们</NuxtLink>
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
  }
}
</style>

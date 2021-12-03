<template>
  <div>
    <header>
      <div class="wrapper">
        <h1>热门项目</h1>
      </div>
    </header>
    <section class="codex-section">
      <div class="wrapper">
        <ul class="codex-grid">
          <li class="codex-item">
            <NuxtLink to="/projects/entrepreneur">
              <img src="/img/Home/projects/project5.png" alt="" />
              <h2>加拿大企业家投资移民</h2>
            </NuxtLink>
          </li>
          <li class="codex-item">
            <NuxtLink to="/projects/startup">
              <img src="/img/Home/projects/project4.png" alt="" />
              <h2>加拿大创业人才移民</h2>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
    url("/img/Projects/banner.png");

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
@media all and (max-width: 600px) {
  header {
    height: 300px;
    h1 {
      font-size: 35px;
    }
    h1::before {
      width: 6px;
      height: 40px;
    }
  }
}
</style>

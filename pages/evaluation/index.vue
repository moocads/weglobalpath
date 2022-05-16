<template>
  <div>
    <header
      class="general-header"
      :style="{
        background: `linear-gradient(
        89.93deg,
        rgba(34, 52, 92, 0.7) 7.82%,
        rgba(34, 52, 92, 0) 102.35%
        ),url('/img/evaluation/evaluation-header.jpg')`,
      }"
    >
      <div class="wrapper">
        <h1>加拿大移民打分自测</h1>
      </div>
    </header>
    <section class="evaluation-wrap">
      <div class="wrapper">
        <ul>
          <h2>加拿大移民打分表</h2>
          <li>
            <p>加拿大移民快速通道（EE）评分系统</p>
            <NuxtLink to="/evaluation/ee"
              >自助打分<a-icon type="right"
            /></NuxtLink>
          </li>
          <li>
            <p>安省提名（境外雇主担保）EOI评分系统</p>
            <NuxtLink to="/evaluation/ontario-employee"
              >自助打分<a-icon type="right"
            /></NuxtLink>
          </li>
          <li>
            <p>安省提名（境内留学生）EOI评分系统</p>
            <NuxtLink to="/evaluation/ontario-student"
              >自助打分<a-icon type="right"
            /></NuxtLink>
          </li>
          <li>
            <p>曼省提名（MPNP）EOI评分系统</p>
            <NuxtLink to="/evaluation/mpnp"
              >自助打分<a-icon type="right"
            /></NuxtLink>
          </li>
          <li>
            <p>不列颠哥伦比亚省提名（BCPNP）评分系统</p>
            <NuxtLink to="/evaluation/bcpnp"
              >自助打分<a-icon type="right"
            /></NuxtLink>
          </li>
          <li>
            <p>加拿大联邦自雇移民评分系统</p>
            <NuxtLink to="/evaluation/self-employed"
              >自助打分<a-icon type="right"
            /></NuxtLink>
          </li>
          <li>
            <p>萨省提名（SINP）EOI评分系统</p>
            <NuxtLink to="/evaluation/sinp"
              >自助打分<a-icon type="right"
            /></NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `加拿大移民 | 加拿大移民打分自测 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `加拿大移民 | 加拿大移民打分自测 | 加彼岸出国咨询`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.evaluation-wrap {
  padding: 100px 0;
  h2 {
    font-size: 28px;
    text-align: center;
    background-color: $navy;
    color: #fff;
    margin-bottom: 0;
    padding: 20px 0;
  }
  ul {
  }
  li {
    border: 1px solid #c4c4c4;
    padding: 20px 45px;
    display: flex;
    justify-content: space-between;
  }
  li:nth-child(odd) {
    background-color: rgba(206, 212, 235, 0.466);
  }
  li p {
    margin: 0;
    font-size: 16px;
  }
  li a {
    font-size: 16px;
  }
  li:not(:last-child) {
    border-bottom: none;
  }
}
.evaluation-wrap .wrapper {
  max-width: 800px;
}
@media all and (max-width: 1000px) {
  .evaluation-wrap {
    padding: 30px 0;

    li {
      padding: 10px 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    li p {
      margin-bottom: 10px;
    }
  }
}
</style>

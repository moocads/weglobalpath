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
    <section>
      <div class="wrapper">
        <ul>
          <li>
            <NuxtLink to="/evaluation/ee">EE</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/evaluation/bcpnp">bcpnp</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/evaluation/self-employed">self employment</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/evaluation/sinp">sinp</NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

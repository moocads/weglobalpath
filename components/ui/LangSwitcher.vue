<template>
  <div class="lang-switch-wrap">
    <nuxt-link :to="switchLocalePath('zh')" exact>简</nuxt-link>
    <nuxt-link :to="switchLocalePath('tw')" exact>繁</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "LangSwitcher",
};
</script>

<style lang="scss" scoped>
.lang-switch-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-left: 8px;
  }
}
</style>

<template>
  <NuxtLink :to="localePath(`${to}`)" :exact="exact">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  name: "NuxtLinki18n",
  props: {
    to: {
      type: String,
      default: "",
    },
    exact: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>

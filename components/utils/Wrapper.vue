<template>
  <div class="wrapper" :style="{ 'max-width': maxWidth }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WrapperComponent",
  props: {
    maxWidth: {
      type: String,
      default: "1440px",
    },
  },
};
</script>

<style lang="scss" scoped></style>

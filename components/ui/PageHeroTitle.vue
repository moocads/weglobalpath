<template>
  <h1>
    <slot></slot>
    <span>
      <slot name="subtitle">About</slot>
    </span>
  </h1>
</template>

<script>
export default {
  name: "PageHeroTitle",
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 60px;
  color: #fff;
  font-weight: bold;
  position: relative;
  margin-top: -30px;
}
span {
  position: absolute;
  top: 70%;
  left: 0;
  color: rgba(196, 196, 196, 0.4);
  font-family: $Mont;
  font-weight: 900;
  font-size: 85px;
}
@media all and (max-width: $md) {
  span {
    font-size: 55px;
  }
}
</style>

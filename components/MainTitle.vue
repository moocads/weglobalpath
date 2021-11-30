<template>
  <div>
    <header>
      <p :style="{ color: titleENColor }">{{ titleEN }}</p>
      <h1>{{ title }}</h1>
      <img src="/img/logos/logo-small-blue.png" alt="加彼岸 小型标题 Logo" />
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    titleEN: String,
    titleENColor: {
      type: String,
      default: "#f1f1f1",
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  p {
    font-size: 70px;
    // color: #f1f1f1;
    font-family: $Mont;
    font-weight: 800;
    margin: 0;
  }
  img {
    margin-top: -15px;
    width: 30px;
    transform: rotate(90deg);
  }
  @media all and (max-width: 600px) {
    p {
      font-size: 50px;
    }
  }
  h1 {
    font-size: 28px;
    margin-top: -35px;
  }
  img {
    margin-top: -35px;
  }
}
@media all and (max-width: 600px) {
  header {
    margin-bottom: 30px;
  }
}
</style>

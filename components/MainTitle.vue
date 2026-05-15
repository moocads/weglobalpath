<template>
  <div>
    <div class="main-title-wrap">
      <p :style="{ color: titleENColor }">{{ titleEN }}</p>
      <h1 :style="{ fontSize: titleSize, color: titleColor }">{{ title }}</h1>
      <img src="/img/logos/logo-small-blue.png" alt="寰球嘉途 小型标题 Logo" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    titleColor: {
      type: String,
      default: "#000000d9",
    },
    titleEN: String,
    titleENColor: {
      type: String,
      default: "#f1f1f1",
    },
    titleSize: {
      type: String,
      default: "32px",
    },
  },
};
</script>
<style lang="scss">
.main-title-wrap {
  margin-bottom: 50px;
}
</style>
<style lang="scss" scoped>
.main-title-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    font-size: 70px;
    // color: #f1f1f1;
    font-family: $Mont;
    font-weight: 800;
    margin: 0;
    text-transform: uppercase;
  }
  img {
    margin-top: -15px;
    width: 30px;
    transform: rotate(90deg);
  }

  h1 {
    font-weight: 700;
    font-size: 32px;
    margin-top: -45px;
    text-align: center;
  }
  img {
    margin-top: -35px;
  }
}
@media all and (max-width: 768px) {
  .main-title-wrap {
    margin-bottom: 30px;
    h1 {
      font-weight: normal;
      font-size: 28px;
      margin-top: -35px;
    }
    p {
      font-size: 40px;
    }
  }
}
</style>

<template>
  <div>
    <div class="main-title-side-wrap">
      <p>{{ titleEN }}</p>
      <div class="title-wrap">
        <img src="/img/logos/logo-small-blue.png" alt="" />
        <h2>{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { title: String, titleEN: String },
};
</script>

<style lang="scss">
.main-title-side-wrap {
  margin-bottom: 50px;
}
</style>
<style lang="scss" scoped>
.main-title-side-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
p {
  font-size: 70px;
  color: #f1f1f1;
  font-family: $Mont;
  font-weight: 800;
  margin: 0;
  margin-left: 50px;
}
h2 {
  font-size: 32px;
  font-weight: 700;
  margin-top: -5px;
  margin-bottom: 0;
}
img {
  margin-top: -5px;
  width: 30px;
  // transform: rotate(90deg);
}
.title-wrap {
  margin-top: -50px;
  display: flex;
  align-items: center;
}
@media all and (max-width: 768px) {
  p {
    font-size: 40px;
    color: #f1f1f1;
    font-family: $Mont;
    font-weight: 800;
    margin: 0;
    margin-left: 30px;
  }
  h2 {
    font-size: 28px;
    font-weight: 500;
    margin: 0;
    margin-top: 10px;
  }
  .title-wrap {
    margin-top: -40px;
  }
}
</style>

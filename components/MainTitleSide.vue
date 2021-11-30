<template>
  <div>
    <header>
      <p>{{ titleEN }}</p>
      <div class="title-wrap">
        <img src="/img/logos/logo-small-blue.png" alt="" />
        <h1>{{ title }}</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: { title: String, titleEN: String },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
}

// h1::before {
//   content: "";
//   background: url("/img/logos/logo-small-blue.png");
//   background-size: 30px 50px;
//   width: 30px;
//   height: 50px;
// }
p {
  font-size: 70px;
  color: #f1f1f1;
  font-family: $Mont;
  font-weight: 800;
  margin: 0;
  margin-left: 50px;
}
img {
  width: 30px;
  // transform: rotate(90deg);
}
.title-wrap {
  margin-top: -50px;
  display: flex;
  align-items: center;
}
@media all and (max-width: 600px) {
  p {
    font-size: 50px;
    color: #f1f1f1;
    font-family: $Mont;
    font-weight: 800;
    margin: 0;
    margin-left: 30px;
  }
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
  }
  .title-wrap {
    margin-top: -40px;
  }
}
</style>

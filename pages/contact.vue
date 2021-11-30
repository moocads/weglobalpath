<template>
  <div>
    <header>
      <div class="wrapper">
        <h1>联系我们</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background-image: url("/img/About/banner.png");
  background-color: rgba(34, 52, 92, 0.5);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
  display: flex;
  align-items: center;
  h1 {
    font-size: 70px;
    color: #fff;
    font-weight: bold;
    position: relative;
  }
  h1::after {
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    background-color: $red;
    width: 200px;
    height: 6px;
  }
}
@media all and (max-width: 600px) {
  header {
    background-position: bottom;
    background-blend-mode: multiply;
    height: 300px;
    display: flex;
    align-items: center;
    h1 {
      font-size: 42px;
    }
    h1::after {
      top: 120%;
      left: 0;
      width: 100px;
      height: 6px;
    }
  }
}
</style>

<template>
  <div id="recruiting-canadian-schools-page">
    <header>
      <div class="wrapper">
        <h1>加拿大合作院校</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  background: url("/img/Banner/general-banner.jpg");
  background-size: cover;
  background-blend-mode: multiply;
  background-color: #e9e9e9;
  h1 {
    color: $navy;
    font-size: 60px;
    font-weight: bold;
    position: relative;
    margin-left: 20px;
  }
  h1::before {
    content: "";
    position: absolute;
    top: 55%;
    left: -20px;
    transform: translateY(-50%);
    background-color: $red;
    width: 6px;
    height: 70px;
  }
  h1::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 0;
    font-size: 20px;
    font-weight: 300;
    color: #919191;
  }
}
</style>

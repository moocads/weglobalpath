<template>
<main>
  <div class="wrapper">
    <section class="construction">
      <a-row type="flex" align="center" :gutter="[24, 60]">
        <a-col  :lg="{span: 12, order: 1}" :md="{span: 24, order: 2}" :sm="{span: 24, order: 2}" :xs="{span: 24, order: 2}">
          <h1>
            PAGE UNDER<br>CONSTRUCTION
          </h1>
          <!-- <p>We apologize for the inconvenience. Please check back soon!</p> -->
          <h1>
            网站此页面<br>将尽快与您相见
          </h1>
        </a-col>
        <a-col  :lg="{span: 12, order: 2}" :md="{span: 24, order: 1}"  :sm="{span: 24, order: 1}" :xs="{span: 24, order: 1}">
          <div class="imgContainer">
            <img src="/img/construction.png" alt="Under Construction">
          </div>
        </a-col>
      </a-row>
    </section>
  </div>
</main>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
h1, p {
  text-align: center;
}

h1 {
  font-size: 50px;
  font-weight: bold;
  color: $primary;
}

p {
  color: $grey;
}

.imgContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 100%;
  // max-width: 500px;
}

.construction {
  height:100vh;
  padding: 150px 0;
}

@media (max-width: 991px) {

  h1 {
    font-size: 30px;
  }

  img {
    max-width: 400px;
  }
}
</style>

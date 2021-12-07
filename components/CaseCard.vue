<template>
  <div>
    <div
      class="card-wrap"
      :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
    >
      <NuxtLink :to="link">
        <div class="info-box">
          <h1>{{ title }}</h1>
          <p>{{ date }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
    },
    title: String,
    date: String,
    link: {
      type: String,
      default: "/about",
    },
  },
};
</script>

<style lang="scss" scoped>
.card-wrap {
  height: 420px;
  width: 100%;
  max-width: 350px;
  background-size: cover;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
}
.info-box {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px 30px;
  width: 100%;

  background-color: $navy;
  h1,
  p {
    color: #fff;
  }
  h1 {
    font-size: 22px;
    margin: 0;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    color: #c4c4c4;
    margin: 0;
  }
}
@media all and (max-width: 600px) {
  .card-wrap {
    height: 300px;
    width: 100%;
    max-width: 350px;
    background-size: cover;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

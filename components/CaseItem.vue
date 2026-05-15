<template>
  <div>
    <div
      class="card-wrap"
      :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
    >
      <div class="info-box">
        <h1>{{ title }}</h1>
        <p>{{ date }}</p>
      </div>
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
  border: 1px solid $primary;
}
.info-box {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $primary;
  h1,
  p {
    color: #fff;
  }
  h1 {
    font-size: 18px;
    margin: 0;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    color: #c4c4c4;
    margin: 0;
  }
}
@media all and (max-width: 768px) {
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

<template>
  <div>
    <div class="card-wrap" :style="{ backgroundImage: thumbnail }">
      <NuxtLink :to="link">
        <div class="info-box">
          <h1>{{ title }}</h1>
          <p class="content">{{ description }}</p>
          <p class="date">{{ date }}</p>
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
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.card-wrap {
  height: 350px;
  width: 100%;
  max-width: 270px;
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
  padding: 10px 20px;
  width: 100%;
  background-color: #fff;

  h1 {
    font-size: 22px;
    margin: 0;
    margin-bottom: 5px;
    color: $navy;
  }
  .content {
    font-size: 14px;
    color: #c4c4c4;
    margin: 0;
    margin-bottom: 10px;
    font-weight: 400;
    color: $navy;
    display: -webkit-box;
    line-height: 1.5;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .date {
    font-size: 14px;
    color: #c4c4c4;
    margin: 0;
    font-weight: 300;
    color: $navy;
  }
}
</style>

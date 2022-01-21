<template>
  <div class="card-wrap">
    <img :src="thumbnail" alt="" />

    <div class="info-box">
      <NuxtLink :to="link">
        <h1>{{ title }}</h1>
      </NuxtLink>

      <p class="content">{{ description }}</p>
      <p class="date">{{ date }}</p>
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
      default: "/blogs",
    },
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.card-wrap {
  min-height: 320px;
  height: 100%;
  width: 100%;
  // max-width: 270px;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
  }
}
.info-box {
  padding: 10px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  flex-grow: 1;

  h1 {
    font-size: 18px;
    margin: 0;
    margin-bottom: 5px;
    color: $navy;
    display: -webkit-box;
    line-height: 1.5;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .content {
    // height: 0px;
    font-size: 14px;
    color: #c4c4c4 !important;
    margin: 0;
    margin-bottom: 10px;
    font-weight: 400;
    color: $navy;
    display: -webkit-box;
    line-height: 1.5;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    // visibility: hidden;
  }
  .date {
    font-size: 14px;
    color: #c4c4c4;
    margin: 0;
    font-weight: 300;
    color: $navy;
  }
}
@media all and (max-width: 768px) {
  .card-wrap {
    height: 350px;
    width: 100%;
    max-width: 100%;
    background-size: cover;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

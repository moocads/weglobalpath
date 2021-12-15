<template>
  <div>
    <div class="card-wrap">
      <div class="thumbnail">
        <img :src="thumbnail" alt="" />
      </div>
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
      default: "/cases",
    },
  },
};
</script>

<style lang="scss" scoped>
.card-wrap {
  display: none;
}

@media all and (max-width: 768px) {
  .card-wrap {
    height: 120px;
    display: flex;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .thumbnail {
    img {
      height: 120px;
      width: 120px;
    }
  }
  a {
    flex-grow: 1;
  }
  .info-box {
    padding: 10px 20px;
    width: 100%;
    height: 120px;
    background-color: $navy;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1,
    p {
      color: #fff;
    }
    h1 {
      font-size: 20px;
      margin: 0;
      margin-bottom: 5px;
    }
    p {
      font-size: 14px;
      color: #c4c4c4;
      margin: 0;
    }
  }
}
</style>

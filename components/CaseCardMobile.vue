<template>
  <div>
    <div class="card-wrap">
      <div class="thumbnail">
        <img :src="getThumbnailUrl()" alt="" />
      </div>
      <NuxtLink :to="'/cases/' + data.id">
        <div class="info-box">
          <div>
            <h1>{{ data.client_name }} {{ data.working_background }}</h1>
          </div>
          <div class="project-title">
            <h1>项目 {{ data.title }}</h1>
            <p>{{ data.published_at.split("T")[0] }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  methods: {
    getThumbnailUrl() {
      if (this.data.thumbnail) {
        return this.data.thumbnail.url;
      }
      if (this.data.image) {
        return this.data.image[0].url;
      }
      return "/img/case-placeholder.jpg";
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
      @include text-ellipsis(1);
    }
    h1 {
      font-size: 14px;
      margin: 0;
      margin-bottom: 5px;
      @include text-ellipsis(2);
    }
    p {
      font-size: 14px;
      color: #c4c4c4;
      margin: 0;
    }
  }
.project-title{
  border-top: 1px solid #666977b3;
  margin-top: 5px;
  padding-top: 5px;
}
}
</style>

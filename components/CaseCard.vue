<template>
  <div>
    <div
      class="card-wrap"
      :style="{ backgroundImage: getThumbnailUrl() }"
    >
      <NuxtLink :to="'/cases/' + data.id">
        <div class="info-box">
          <div>
            <h1>{{ data.client_name }} {{ data.working_background }}</h1>
            <p>{{ data.short_description || "Some description placeholder here" }}</p>
          </div>
          <div class="project-title">
            <h1>{{ data.title }}</h1>
            <p>{{ data.published_at.split('T')[0] }}</p>
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
    getThumbnailUrl(){
      if(this.data.thumbnail){
        return `url(${this.data.thumbnail.url})`;
      }
      if(this.data.image){
        return `url(${this.data.image[0].url})`;
      }
      return 'url("/img/case-placeholder.jpg")';
    }
  }
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
  padding: 20px;
  width: 100%;
  font-size: 18px;
  background-color: $navy;
  h1 {
    font-size: 18px;
    margin: 0;
    margin-bottom: 5px;
    color: #fff;
  }
  p {
    font-size: 14px;
    color: #c4c4c4;
    margin: 0;
  }
}
.project-title{
  border-top: 1px solid #c4c4c4;
  margin-top: 15px;
}
@media all and (max-width: 768px) {
  .card-wrap {
    display: none;
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

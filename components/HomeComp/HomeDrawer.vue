<template>
  <div class="drawer">
    <div
      class="drawer-item"
      v-for="(d, i) in data"
      :key="i"
      @mouseover="active = i"
      @mouseleave="active = -1"
      :class="{ active: active === i, inactive: active !== -1 && active !== i }"
    >
      <div class="content-container">
        <h1>{{ d.category }}</h1>
        <div class="content">
          <NuxtLink
            class="content-item"
            v-for="(item, j) in d.items"
            :key="j"
            to="/projects/nominee/ontario-immigrat-nominee-program"
          >
            <div>{{ item.title }}</div>
            <div class="description">
              <div v-for="(d, o) in item.des" :key="o">
                {{ d }}
              </div>
            </div>
          </NuxtLink>
          <NuxtLink to="/self-test">
            <button class="main-btn main-btn_blue main-btn_round">
              移民自测
            </button>
          </NuxtLink>
        </div>
        <div class="preview-content">
          <NuxtLink
            class="content-item"
            v-for="(item, j) in d.items"
            :key="j"
            to="/projects/nominee/ontario-immigrat-nominee-program"
          >
            <div>{{ item.title }}</div>
          </NuxtLink>
          <NuxtLink class="desktop-btn" v-if="i === 1" to="/self-test">
            <button class="main-btn main-btn_blue main-btn_round">
              移民自测
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      active: -1,
    };
  },
};
</script>
<style lang="scss" scoped>
.drawer {
  display: flex;
  width: 100%;
  height: 500px;
}
.drawer-item {
  color: #fff;
  flex: 1;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
  position: relative;
  &:hover {
    flex: 2;
    .preview-content {
      display: none;
    }
    .content {
      display: grid;
      animation: show 1s;
      animation-direction: alternate;
      animation-fill-mode: forwards;
    }
  }
  &.active .content-container {
    padding: 30px 50px;
  }
  &.inactive {
    .preview-content {
      display: none;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(2px);
    transform: skewX(-4deg);
    overflow: hidden;
    z-index: 2;
  }
  &:first-child::before {
    background-image: url("https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/depositphotos_15656821_stock_photo_vancouver_dac3a8e8d0.jpg");
  }
  &:nth-child(2)::before {
    background-image: url("https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/SUV_a8eaab8723.png");
  }
  &:nth-child(3)::before {
    background-image: url("https://beyond-canada-back-staging-mooc.s3.ca-central-1.amazonaws.com/_366cda4454.jpg");
  }
  h1 {
    color: #fff;
  }
}

.content-container {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 30px 20%;
  z-index: 3;
  h1 {
    font-size: 36px;
    font-weight: 700;
  }
}

.preview-content,
.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}
.content {
  display: none;
}
.content-item {
  border: 1px solid #fff;
  background-color: #ffffff14;
  padding: 20px;
  font-size: 18px;
  font-weight: 700;
}
.content .content-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: background-color 0.4s;
  padding: 0;
  > div {
    padding: 20px;
  }
  &:hover {
    background-color: #0000004a;
  }
  > :first-child {
    border-right: 1px solid #fff;
  }
}
.description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 14px;
  font-weight: 400;
  > div::before {
    content: "*";
  }
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media all and (max-width: $sm) {
  .drawer {
    height: auto;
    flex-direction: column;
    .desktop-btn {
      display: none;
    }
  }
  .drawer-item::before{
    transform: none;
  }
  .content-container {
    position: relative;
    h1 {
      margin-top: 0;
      font-size: 24px;
    }
  }
  .content-item {
    padding: 10px;
    font-size: 14px;
  }
}
</style>

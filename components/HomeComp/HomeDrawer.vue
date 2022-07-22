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
        <h2>{{ d.categoryEN }}</h2>
        <div class="content">
          <NuxtLink
            class="content-item"
            v-for="(item, j) in d.items"
            :key="j"
            :to="item.url"
          >
            <div class="title">{{ item.title }}</div>
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
            :to="item.url"
          >
            <div>{{ item.title }}</div>
          </NuxtLink>
          <NuxtLink class="desktop-btn" v-if="i === 1" to="/self-test">
            <button class="main-btn main-btn_blue main-btn_round">
              移民自测
            </button>
          </NuxtLink>
        </div>
        <div class="arrow">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="50"
            height="50"
            style="enable-background: new 0 0 512 512; fill: #fff"
            xml:space="preserve"
          >
            <g>
              <path
                d="M256,5.333C114.88,5.333,0,117.76,0,256s114.88,250.667,256,250.667S512,394.24,512,256S397.12,5.333,256,5.333z
				 M256,485.333C126.613,485.333,21.333,382.4,21.333,256S126.613,26.667,256,26.667S490.667,129.493,490.667,256
				S385.387,485.333,256,485.333z"
              />
              <path
                d="M369.28,247.467l-181.653-133.44c-4.693-3.627-11.307-2.773-14.933,1.92c-3.627,4.693-2.773,11.307,1.92,14.933
				c0.107,0.107,0.32,0.213,0.427,0.32L344.96,256L175.04,380.693c-4.8,3.52-5.76,10.133-2.24,14.933
				c3.52,4.8,10.133,5.76,14.933,2.24L369.387,264.64c4.8-3.52,5.76-10.133,2.24-14.933
				C370.88,248.853,370.133,248.107,369.28,247.467z"
              />
            </g>
          </svg>
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
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .arrow {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media all and (max-width: $md) {
    }
  }
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
    .arrow {
      display: block;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    // filter: blur(2px);
  }
  &:first-child::after {
    background-image: url("/img/drawer-1.png");
  }
  &:nth-child(2) {
    .content-container {
      z-index: 5;
      position: absolute;
    }
    &::after {
      transform: skewX(-4deg);
      overflow: hidden;
      z-index: 4;
      left: -12%;
      width: 124%;
      background-image: url("/img/drawer-2.png");
    }
  }
  &:nth-child(3)::after {
    background-image: url("/img/drawer-3.png");
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
    margin: 0;
  }
  h2 {
    color: #fff;
    margin-bottom: 30px;
  }
}

.preview-content,
.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}
.preview-content {
  width: 300px;
  @media all and (max-width: 1220px) {
    width: 240px;
  }
  @media all and (max-width: $sm) {
    width: 100%;
  }
}
.content {
  display: none;
  width: 500px;
  @media all and (max-width: $sm) {
    width: 100%;
  }
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
  position: relative;
  > div {
    padding: 20px;
  }
  &:hover {
    background-color: #0000004a;
  }
}
.title {
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    right: 0;
    background: #fff;
    transform: rotate(10deg);
  }
}
.description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 14px;
  font-weight: 400;
  > div::before {
    content: "★";
  }
}
@media all and (max-width: $md) {
  .drawer {
    height: auto;
    flex-direction: column;
    .desktop-btn {
      display: none;
    }
  }
  .drawer-item {
    &:nth-child(2) {
      .content-container {
        position: relative;
      }
      &::after {
        width: 100%;
        transform: none;
        left: 0;
      }
    }
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
</style>

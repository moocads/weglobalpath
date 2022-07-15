<template>
  <div class="drawer">
    <div
      @mouseover="active = 0"
      @mouseleave="active = -1"
      class="drawer-item"
      :class="{ active: active === 0, inactive: active === 1 || active === 2 }"
    >
      <div class="content-container">
        <h1>技术类</h1>
        <div class="contents">
          <div>安省境外雇主担保</div>
          <div>安省境外雇主担保</div>
          <div>安省境外雇主担保</div>

        </div>
      </div>
    </div>
    <div
      @mouseover="active = 1"
      @mouseleave="active = -1"
      class="drawer-item"
      :class="{ active: active === 1, inactive: active === 0 || active === 2 }"
    >
      <div class="content-container">
        <h1>商业类</h1>
        <div class="contents">
          <div>Option</div>
        </div>
      </div>
    </div>
    <div
      @mouseover="active = 2"
      @mouseleave="active = -1"
      class="drawer-item"
      :class="{ active: active === 2, inactive: active === 0 || active === 1 }"
    >
      <div class="content-container">
        <h1>留学类</h1>
        <div class="contents">
          <div>Option</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
    .preview {
      display: none;
    }
    .actual {
      animation-direction: alternate;
      animation-fill-mode: forwards;
      animation: show 1s;
    }
  }
  &.inactive {
    .contents {
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
    filter: blur(1px);
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
  position: relative;
}

.preview-content, .content{
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}
.content{
    display: none;
}
@keyframes show {
  from {
    display: none;
  }
  to {
    display: flex;
  }
}
</style>

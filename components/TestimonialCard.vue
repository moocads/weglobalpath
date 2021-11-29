<template>
  <div>
    <div class="feedback-card">
      <p>
        {{ content }}
      </p>
      <div class="avatar">
        <img :src="avatar" alt="" />
      </div>
      <p class="name">{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    avatar: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.feedback-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  p {
    text-align: center;
    font-size: 14px;
    color: #999;
  }
  .name {
    color: #000;
    font-weight: bold;
    font-style: italic;
  }
  .avatar {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
    margin-top: 10px;
  }
}
</style>

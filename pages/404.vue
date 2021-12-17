<template>
  <div>
    <Construction />
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  async asyncData({ $axios }) {
    const blogsData = await $axios.$get(`/blogs/1`, {});
    const blogs = blogsData;
    return {
      blogs,
    };
  },
  components: {
    VueMarkdown,
  },
};
</script>

<style lang="scss" scoped></style>

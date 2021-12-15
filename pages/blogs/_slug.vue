<template>
  <div>
    <p>
      {{ blog }}
    </p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const blogData = await $axios.$get(`/blogs?slug=` + route.params.slug);
    const blog = blogData;
    return {
      blog,
    };
  },
  // asyncData({ route }) {
  //   return axios
  //     .get(`https://jintaica-cms.herokuapp.com/blogs?slug=` + route.params.slug)
  //     .then((res) => {
  //       return {
  //         blog: res.data[0],
  //       }
  //     })
  // },
};
</script>

<style lang="scss" scoped></style>

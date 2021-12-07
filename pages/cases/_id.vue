<template>
  <div>
    <p>{{ data.id }}</p>
    <p>{{ data.title }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const projectData = await $axios.$get(`/cases/${params.id}`);
    const data = projectData;
    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped></style>

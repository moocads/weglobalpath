<template>
  <div class="breadcrumb-wrap">
    <div class="wrapper">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <nuxt-link to="/">首页</nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <nuxt-link :to="'/projects/' + projectUrl">{{
            hotProjectsBreadcrumb[projectUrl]
          }}</nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item v-if="projectData.slug !== ''">
          <nuxt-link :to="`/projects/${projectUrl}/${projectData.slug}`">
            {{ projectData.project_name }}
          </nuxt-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>
  </div>
</template>

<script>
// const hotProjectsMap = {
//   entrepreneur: "加拿大企业家移民",
//   startup: "加拿大创业人才移民",
//   nominee: "加拿大雇主担保移民",
//   education: "加拿大留学移民",
//   ee: "联邦EE快速通道项目",
//   reunion: "加拿大团聚移民",
//   "new-immigrant": "新移民服务",
// };
import { hotProjectsBreadcrumb } from "~/utils";

export default {
  props: {
    projectUrl: {
      type: String,
      default: "",
    },
    projectData: {
      type: Object,
      default: () => ({
        slug: "",
      }),
    },
  },
  data() {
    return {
      hotProjectsBreadcrumb,
    };
  },
  mounted() {
    console.log(this.projectData);
  },
};
</script>

<style lang="scss" scoped></style>

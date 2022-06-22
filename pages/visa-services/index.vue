<template>
  <div class="hot-projects-detail-page">
    <header
      :style="{
        background: `linear-gradient(
    89.93deg,
    rgba(34, 52, 92, 0.7) 7.82%,
    rgba(34, 52, 92, 0) 102.35%
  )`,
      }"
    >
      <div class="wrapper">
        <h1>签证服务</h1>
      </div>
    </header>
    <section
      v-for="(category, i) in categories"
      :key="i"
      :id="`service-${i}`"
      class="sec-intro sec-general sec-bg-gray anchor"
    >
      <div class="wrapper">
        <h2>{{ category.name }}</h2>
        <ul>
          <li v-for="(service, j) in category.services" :key="j">
            <nuxt-link
              :to="`/visa-services/${service.slug}`"
              class="single-service-link"
            >
              <p>{{ service.title }}</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
    <!-- <section
      id="service-review"
      class="sec-intro sec-general sec-bg-gray anchor"
    >
      <div class="wrapper">
        <h2>检查签证移民申请</h2>
      </div>
    </section> -->
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";

export default {
  head() {
    return {
      title: `签证服务 | 加彼岸出国咨询`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `签证服务 | 加彼岸出国咨询`,
        },
      ],
    };
  },
  async asyncData({ $axios, route }) {
    const data = await $axios.$get(`/visa-service-categories`);

    return {
      categories: data,
    };
  },
  components: {
    VueMarkdown,
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/scss/hot-projects/general.scss";
.visa-richtext {
  ul {
    list-style: auto;
  }
}
</style>

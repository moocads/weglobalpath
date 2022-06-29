<template>
  <div class="hot-projects-detail-page">
    <header
      :style="{
        background: `linear-gradient(
    89.93deg,
    rgba(34, 52, 92, 0.7) 7.82%,
    rgba(34, 52, 92, 0) 102.35%
  ), url('/img/visa-banner.jpg')`,
      }"
    >
      <div class="wrapper visa-header">
        <h1>签证服务</h1>
        <p class="highlight">*提供检查签证移民申请Review服务</p>
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
.visa-header {
  h1 {
    margin-bottom: -5px;
  }
  p {
    margin-bottom: 0;
    color: white;
    padding-left: 20px;
  }
}
.single-service-link {
  display: inline-block;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: $red;
    transition: width 0.3s;
  }
  &:hover {
    color: $red;
  }
  &:hover::after {
    width: 100%;
  }
  p {
    display: inline;
  }
}
@media all and (max-width: $sm) {
  .visa-header {
    h1 {
      margin-bottom: 0px;
    }
    p {
      font-size: 12px;
    }
  }
}
</style>

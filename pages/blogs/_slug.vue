<template>
  <div id="blog-detail-page">
    <section>
      <div class="wrapper">
        <NuxtLink to="/blogs" class="back-btn" exact>
          <img src="/img/icons/back-btn.png" alt="" />
          <span>返回最新资讯</span>
        </NuxtLink>
      </div>
      <div class="blog-wrap">
        <!-- <p>{{ blog }}</p> -->
        <h2>{{ blog.title_cn }}</h2>
        <h3>{{ blog.published_at.split("T")[0] }}</h3>
        <img
          v-if="blog.header_img_cn !== null"
          :src="blog.header_img_cn && blog.header_img_cn.url"
          :alt="
            blog.header_img_cn.alternativeText ||
            '加彼岸加拿大移民资讯头图 Beyond Canada Blogs Header Image'
          "
          class="blog-thumbnail"
        />
        <vue-markdown class="blog-detail-content">
          {{ blog.content_cn }}
        </vue-markdown>
        <hr class="seo-divider" />
        <ul class="seo-tags-wrap">
          <li v-for="(tag, i) in blog.seo_tags_cn.split(/,|，/)" :key="i">
            {{ tag }}
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
      title: "加彼岸资讯 | " + this.blog.title_cn,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "加彼岸资讯 | " + this.blog.description_cn,
        },
      ],
    };
  },
  async asyncData({ $axios, route }) {
    const blogData = await $axios.$get(`/blogs?slug=` + route.params.slug);
    const blog = blogData[0];
    return {
      blog,
    };
  },
  components: {
    VueMarkdown,
  },
};
</script>

<style lang="scss">
.blog-detail-content {
  p,
  ul,
  ol {
    font-size: 16px;
  }
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: $navy;
  }
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
  ol {
    list-style-type: decimal;
    margin-left: 25px;
  }
  ul {
    list-style-type: disc;
    margin-left: 25px;
  }
  img {
    width: 100%;
    margin: 20px 0;
    border-radius: 5px;
  }
  a {
    color: $navy;
    text-decoration: underline;
  }
}
@media all and (max-width: 768px) {
  .blog-detail-content {
    p,
    ul,
    ol {
      font-size: 14px;
    }
    h1 {
      font-size: 22px;
    }
    h2 {
      font-size: 18px;
    }

    img {
      width: 100%;
      margin: 20px 0;
      border-radius: 5px;
    }
  }
}
</style>

<style lang="scss" scoped>
section {
  padding: 30px 0 50px;
}
.wrapper {
  max-width: 1000px;
}
.seo-divider {
  margin: 30px 0;
  position: relative;
  &::before {
    content: url("/img/Investment/hr-img.svg");
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
.back-btn {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  width: 100%;
  span {
    font-size: 20px;
  }
  img {
    width: 22px;
    margin-right: 10px;
  }
}
.blog-wrap {
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid $navy;
  padding: 20px 40px;
  border-radius: 5px;
  img {
    border-radius: 5px;
  }
  h2 {
    font-size: 28px;
    text-align: center;
  }
  h3 {
    font-size: 16px;
    color: #c4c4c4;
    text-align: center;
  }
}
.blog-thumbnail {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  object-position: bottom;
  margin: 20px 0;
}
.seo-tags-wrap {
  display: flex;
  column-gap: 10px;
  row-gap: 3px;
  flex-wrap: wrap;
  li {
    color: #fff;
    background-color: $red;
    padding: 5px 15px;
    border-radius: 15px;
    &::before {
      content: "#";
    }
  }
}
@media all and (max-width: 768px) {
  section {
    padding: 10px 0 30px;
  }
  .back-btn {
    margin-left: -8px;
    margin-bottom: 0px;
    width: 100%;
    span {
      font-size: 16px;
    }
    img {
      margin-right: 5px;
    }
  }
  .blog-wrap {
    margin: auto;
    max-width: 95vw;
    margin: 0 auto;
    border: none;
    padding: 20px 15px;
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 14px;
    }
  }
  .blog-thumbnail {
    width: 100%;
    max-height: auto;
    aspect-ratio: 16/9;
    margin: 20px 0;
  }
}
</style>

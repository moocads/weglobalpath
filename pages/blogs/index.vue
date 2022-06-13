<template>
  <div id="blogs-page">
    <header>
      <div class="wrapper">
        <h1>最新资讯</h1>
      </div>
    </header>
    <section class="blogs-wrap">
      <div class="wrapper">
        <a-tabs class="blog-tabs" default-active-key="tab-0">
          <a-tab-pane
            v-for="(blog, key, i) in blogs"
            :key="'tab-' + i"
            :tab="key"
          >
            <div class="blogs-grid">
              <NuxtLink
                :to="'/blogs/' + b.slug"
                class="blogs-item"
                v-for="(b, i) in blog"
                :key="i"
              >
                <figure>
                  <img :src="b.thumbnail_cn.url" alt="" />
                </figure>
                <article>
                  <h2>{{ b.title_cn }}</h2>
                  <h3>{{ b.description_cn }}</h3>
                  <p>
                    <span>{{ b.published_at.split("T")[0] }}</span
                    ><span>MORE</span>
                  </p>
                </article>
              </NuxtLink>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "加拿大移民 | 最新资讯 | 加彼岸出国咨询",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "加拿大移民 | 最新资讯 | 加彼岸出国咨询",
        },
      ],
    };
  },
  async asyncData({ $axios }) {
    const all = await $axios.$get(`/blogs`, {
      params: {
        _sort: "published_at:desc",
      },
    });
    const news = await $axios.$get(`/blogs?categories.category=news`, {
      params: {
        _sort: "published_at:desc",
      },
    });
    const policy = await $axios.$get(`/blogs?categories.category=policy`, {
      params: {
        _sort: "published_at:desc",
      },
    });
    const visa = await $axios.$get(`/blogs?categories.category=visa`, {
      params: {
        _sort: "published_at:desc",
      },
    });
    const edu = await $axios.$get(`/blogs?categories.category=edu`, {
      params: {
        _sort: "published_at:desc",
      },
    });
    const aboutUs = await $axios.$get(`/blogs?categories.category=aboutUs`, {
      params: {
        _sort: "published_at:desc",
      },
    });
    const data = {
      所有资讯: all,
      热点新闻: news,
      政策解读: policy,
      签证百科: visa,
      留学指南: edu,
      加彼岸动态: aboutUs,
    };
    console.log()
    // hide categories which have 0 blog
    const arr = Object.entries(data);
    const filtered = arr.filter(([key, value]) => value.length > 0);
    const blogs = Object.fromEntries(filtered);
    return {
      blogs,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(
      89.93deg,
      rgba(34, 52, 92, 0.7) 7.82%,
      rgba(34, 52, 92, 0) 102.35%
    ),
    url("/img/Banner/blog-banner.jpg");

  background-size: cover;
  background-blend-mode: multiply;
  h1 {
    color: #fff;
    font-size: 60px;
    font-weight: bold;
    position: relative;
    margin-left: 20px;
  }
  h1::before {
    content: "";
    position: absolute;
    top: 55%;
    left: -20px;
    transform: translateY(-50%);
    background-color: $red;
    width: 6px;
    height: 70px;
  }
}
section {
  padding: 100px 0;
}
.blogs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.blogs-item {
  display: flex;
  padding: 10px;
  border: 1px solid rgba(27, 40, 84, 0.5);
  border-radius: 3px;
  // box-shadow: rgba(27, 40, 84, 0.5) 0px 0px 0px 3px;
  box-shadow: rgba(27, 40, 84, 0.2) 0px 4px 6px -1px,
    rgba(27, 40, 84, 0.06) 0px 2px 4px -1px;
  transition: all 0.3s ease-in-out;
}
.blogs-item figure {
  margin: 0;
  max-width: 200px;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center right;
  }
}
.blogs-item article {
  width: 100%;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  h2 {
    color: $navy;
    font-size: 16px;
    line-height: 1.5;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  h3 {
    font-size: 14px;
    font-weight: 300;
    color: #a8a8a8;
    display: -webkit-box;
    line-height: 1.5;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  p {
    font-size: 14px;
    color: #c5c5c5;
    margin: 0;
    display: inline-flex;
    justify-content: space-between;
  }
  span:last-child {
    transition: all 0.2s ease;
    &:hover {
      color: $red;
    }
  }
}
@media all and (max-width: 1000px) {
  .blogs-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    .blogs-item {
      display: flex;
      flex-direction: column;
      padding: 10px;
      border: 1px solid rgba(27, 40, 84, 0.5);
      border-radius: 3px;
    }
    .blogs-item figure {
      max-width: 100%;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
      }
    }
    .blogs-item article {
      padding-left: 0px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
        color: #c5c5c5;
        margin: 0;
        display: inline-flex;
        justify-content: space-between;
      }
      span:last-child {
        transition: all 0.2s ease;
        &:hover {
          color: $red;
        }
      }
    }
  }
}
@media all and (max-width: 600px) {
  header {
    height: 300px;
    background: linear-gradient(
        89.93deg,
        rgba(34, 52, 92, 0.7) 7.82%,
        rgba(34, 52, 92, 0) 102.35%
      ),
      url("/img/Banner/blog-banner.jpg");
    background-size: cover;
    background-position-x: center;
    h1 {
      font-size: 35px;
    }
    h1::before {
      height: 40px;
    }
  }
  section {
    padding: 30px 0;
  }
  .blogs-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

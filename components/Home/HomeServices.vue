<template>
  <section id="home-services">
    <div class="wrapper">
      <MainTitle
        :title="
          $i18n.locale === 'tw' ? '熱門項目' : '热门项目'
        "
        :titleEN="$i18n.locale === 'tw' ? '服務' : '服务'"
      />
      <div class="projects-wrap">
        <div class="project-item project-1">
          <div class="img-wrap">
            <img
              data-src="/img/Home/projects/home-project1.jpg"
              alt=""
              class="img-fluid lazyload"
            />
          </div>
          <div class="content-wrap">
            <h2>{{ $t("homeServices.row-1-title") }}</h2>
            <p>
              {{ $t("homeServices.row-1-content") }}
            </p>
            <NuxtLink
              v-if="$i18n.locale === 'zh'"
              :to="localePath(`/projects`)"
              >{{ $t("homeServices.learn-morn-btn") }}</NuxtLink
            >
          </div>
        </div>
        <div class="project-item project-2">
          <div class="img-wrap">
            <img
              data-src="/img/Home/projects/home-project2.jpg"
              alt=""
              class="img-fluid lazyload"
            />
          </div>
          <div class="content-wrap">
            <h2>{{ $t("homeServices.row-2-title") }}</h2>
            <p>
              {{ $t("homeServices.row-2-content") }}
            </p>
            <NuxtLink v-if="$i18n.locale === 'zh'" to="/visa-services">{{
              $t("homeServices.learn-morn-btn")
            }}</NuxtLink>
          </div>
        </div>
        <div class="project-item project-3">
          <div class="img-wrap">
            <img
              data-src="/img/Home/projects/home-project3.jpg"
              alt=""
              class="img-fluid lazyload"
            />
          </div>
          <div class="content-wrap">
            <h2>{{ $t("homeServices.row-3-title") }}</h2>
            <p>
              {{ $t("homeServices.row-3-content") }}
            </p>
            <NuxtLink v-if="$i18n.locale === 'zh'" to="/projects/education">{{
              $t("homeServices.learn-morn-btn")
            }}</NuxtLink>
          </div>
        </div>
        <div class="project-item project-4">
          <div class="img-wrap">
            <img
              data-src="/img/Home/projects/home-project4.jpg"
              alt=""
              class="img-fluid lazyload"
            />
          </div>
          <div class="content-wrap">
            <h2>{{ $t("homeServices.row-4-title") }}</h2>
            <p>
              {{ $t("homeServices.row-4-content") }}
            </p>
            <NuxtLink v-if="$i18n.locale === 'zh'" to="/projects/new-immigrant"
              >{{ $t("homeServices.learn-morn-btn") }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
/* ------------------------------------------------------ */
/*                ANCHOR HOME SERVICE STYLE               */
/* ------------------------------------------------------ */

#home-services {
  padding: 50px 0;
}
.projects-wrap {
  display: grid;
  grid-template-columns: 1fr;
  // row-gap: 150px;
}
.project-item {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding: 50px 0;
  column-gap: 50px;
}
.project-item:first-child {
  padding-top: 0;
}
.project-item:not(:last-child) {
  border-bottom: 1px dashed #ddd;
}
.project-item .img-wrap {
  img {
    object-fit: cover;
    max-height: 300px;
    width: 500px;
    border-radius: 5px;
  }
}
.project-item .content-wrap {
  h2 {
    font-size: 24px;
    color: $grey;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    color: #707070;
  }
  a {
    display: block;
    width: fit-content;
    background-color: $secondary;
    color: #fff;
    padding: 5px 15px;
    border-radius: 25px;
    margin-top: 35px;
  }
}
.project-2,
.project-4 {
  .content-wrap {
    order: 1;
  }
  .img-wrap {
    order: 2;
  }
}
@media all and (max-width: 768px) {
  #home-services {
    padding: 30px 0;
  }

  .project-item {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    align-items: center;
    padding: 30px 0;
    row-gap: 30px;
  }
  .project-item .img-wrap {
    order: 2;
    img {
      object-fit: cover;
      max-height: 300px;
      width: 100%;
      border-radius: 5px;
    }
  }
  .project-item .content-wrap {
    order: 1;
    align-self: flex-start;
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
    a {
      margin-top: 15px;
    }
  }
  .project-2,
  .project-4 {
    .content-wrap {
      order: 1;
    }
    .img-wrap {
      order: 2;
    }
  }
}
</style>

<template>
  <section id="home-about">
    <div class="wrapper">
      <a-row :gutter="[24, 8]">
        <a-col :lg="12">
          <MainTitleSide
            :title="
              $i18n.locale === 'tw' ? '關於寰球嘉途' : '关于寰球嘉途'
            "
            :titleEN="$i18n.locale === 'tw' ? '關於' : '关于'"
            titleENColor="#e9e9e9"
          />
          <p>
            {{ $t("homeAbout.content-1") }}
          </p>
          <!-- <p>
            {{ $t("homeAbout.content-2") }}
          </p> -->
          <div class="button-wrap">
            <NuxtLink :to="localePath('/about')">
              <button class="about-btn main-btn main-btn_red main-btn_round-5">
                了解更多
              </button>
            </NuxtLink>
            <NuxtLink :to="localePath('/contact')">
              <button class="about-btn main-btn main-btn_red main-btn_round-5">
                {{ $i18n.locale === "tw" ? "聯繫我們" : "联系我们" }}
              </button>
            </NuxtLink>
          </div>
        </a-col>
        <a-col :lg="12">
          <img
            src="/img/Home/about-img2.jpg"
            alt=""
            class="img-fluid about-img"
          />
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeAbout",
};
</script>

<style lang="scss" scoped>
/* ------------------------------------------------------ */
/*                   ANCHOR ABOUT STYLE                   */
/* ------------------------------------------------------ */
#home-about {
  padding: 50px 0;
  background-color: #efefef;
  .about-img {
    border-radius: 10px;
  }
  .slogen {
    margin-bottom: 30px;
    font-size: 18px;
    background-color: $primary;
    color: #fff;
  }
}
.about-btn {
  margin-right: 15px;
}
.button-wrap {
  padding-top: 30px;
}
@media all and (max-width: 768px) {
  .about-btn {
    font-size: 16px;
    padding: 8px 25px;
    margin-right: 5px;
    margin-left: 5px;
  }
  .button-wrap {
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

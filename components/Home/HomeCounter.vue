<template>
  <section id="home-counter">
    <div class="wrapper">
      <div class="title-wrap">
        <h1>
          {{
            $i18n.locale === "zh"
              ? "选择我们 选择放心"
              : "Choose Us Choose Confidence"
          }}
        </h1>
        <img src="/img/logos/logo-small-white.png" alt="" />
      </div>
      <a-row :gutter="[16, 16]">
        <a-col :xs="12" :md="6" class="counter-item">
          <h2>100+</h2>
          <p>
            {{
              $i18n.locale === "zh"
                ? "全球合作校园"
                : "Global Partner Institutions"
            }}
          </p>
        </a-col>
        <a-col :xs="12" :md="6" class="counter-item">
          <h2>6000+</h2>
          <p>
            {{
              $i18n.locale === "zh"
                ? "移民申请成功案例"
                : " Immigration Application Success Stories"
            }}
          </p>
        </a-col>
        <a-col :xs="12" :md="6" class="counter-item">
          <h2>98.1%</h2>
          <p>
            {{
              $i18n.locale === "zh"
                ? "移民申请通过率"
                : "Immigration Application Pass Rate"
            }}
          </p>
        </a-col>
        <a-col :xs="12" :md="6" class="counter-item">
          <h2>1000+</h2>
          <p>
            {{
              $i18n.locale === "zh"
                ? "海外优质雇主资源"
                : "Overseas Quality Employer Resources"
            }}
          </p>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeCounter",
};
</script>

<style lang="scss">
/* ------------------------------------------------------ */
/*                  ANCHOR COUNTER STYLE                  */
/* ------------------------------------------------------ */
#home-counter {
  background: url("/img/Home/counter-bg.png") no-repeat;
  background-size: cover;
  background-color: rgba(22, 41, 84, 0.7);
  background-blend-mode: multiply;
  padding: 100px 0;
}

#home-counter .title-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  h1 {
    text-align: center;
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 0;
  }
  img {
    width: 30px;
    transform: rotate(90deg);
  }
}

#home-counter .counter-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2,
  p {
    color: #c4c4c4;
  }
  h2 {
    font-size: 54px;
    font-weight: 700;
  }
  p {
    margin: 0;
    font-size: 18px;
    text-align: center;
  }
}
@media all and (max-width: 768px) {
  #home-counter .title-wrap {
    margin-bottom: 30px;
    h1 {
      color: #fff;
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 0;
    }
    img {
      width: 30px;
      transform: rotate(90deg);
    }
  }
  #home-counter .counter-item {
    h2 {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 3px;
    }
    p {
      margin: 0;
      font-size: 16px;
    }
  }
}
</style>

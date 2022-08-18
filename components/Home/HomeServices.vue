<template>
  <section id="home-services">
    <div class="wrapper">
      <MainTitle
        :title="$i18n.locale === 'zh' ? '热门项目' : 'Our Services'"
        titleEN="SERVICES"
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
            <nuxt-link to="/projects">{{
              $t("homeServices.learn-morn-btn")
            }}</nuxt-link>
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
              加拿大学签、境内旅游签转学签，加拿大工签、境内旅游签转工签，加拿大高管创业LMIA，加拿大公司高管派遣工签，加拿大企业家工签，加拿大LMIA劳工批文，加拿大旅游签，加拿大旅游签境内续签Visitor
              Record，加拿大超级签证。加彼岸提供加拿大各类签证检查案件Review的服务，为我们的客户提供最优性价比。
            </p>
            <nuxt-link to="/visa-services">{{
              $t("homeServices.learn-morn-btn")
            }}</nuxt-link>
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
              大学保录取孵化社区，为学生进行背景评估、选择学校/专业、递交申请斩获名校OFFER。学生青春十年计划，从加拿大落地后的接待安置服务，到留学期间的有效身份。加彼岸提供留学后续服务，职业就业、移民详尽规划。
            </p>
            <nuxt-link to="/projects/education">{{
              $t("homeServices.learn-morn-btn")
            }}</nuxt-link>
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
              加彼岸为新移民安排贴心的安家服务。让您不会在初次登陆时对陌生环境无从下手。我们提供临时住所安顿、租房、买房协助，登陆接机，个人保险，银行开户办理信用卡，协助申请驾照，税务咨询介绍等服务。连接彼岸，用心服务，帮助海外客户和学生。
            </p>
            <nuxt-link to="/projects/new-immigrant">{{
              $t("homeServices.learn-morn-btn")
            }}</nuxt-link>
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
    color: $navy;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    color: #707070;
  }
  a {
    display: block;
    width: fit-content;
    background-color: $red;
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

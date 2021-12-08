<template>
  <div>
    <section>
      <div class="wrapper">
        <MainTitle
          title="其他项目"
          titleEN="OTHER projects"
          titleENColor="#E5E5E5"
        />
        <a-row :gutter="[16, 16]">
          <a-col :sm="12" :md="6" :lg="6">
            <NuxtLink to="/projects/startup">
              <div
                class="project"
                style="background-image: url(/img/Home/about-img.jpg)"
              >
                <p>加拿大创业人才移民</p>
              </div>
            </NuxtLink>
          </a-col>
          <a-col :sm="12" :md="6" :lg="6">
            <NuxtLink to="/projects/nominee">
              <div
                class="project"
                style="background-image: url(/img/Home/about-img.jpg)"
              >
                <p>加拿大雇主担保</p>
              </div>
            </NuxtLink>
          </a-col>
          <a-col :sm="12" :md="6" :lg="6">
            <NuxtLink to="/projects/education">
              <div
                class="project"
                style="background-image: url(/img/Home/about-img.jpg)"
              >
                <p>加拿大留学移民</p>
              </div>
            </NuxtLink>
          </a-col>
          <a-col :sm="12" :md="6" :lg="6">
            <NuxtLink to="/projects/reunion">
              <div
                class="project"
                style="background-image: url(/img/Home/about-img.jpg)"
              >
                <p>加拿大团聚服务</p>
              </div>
            </NuxtLink>
          </a-col>
        </a-row>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  padding: 100px 0;
  background-color: #efefef;
}
.project {
  // min-width: 320px;
  min-height: 170px;
  width: 100%;
  height: 100%;
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-size: cover;
  background-color: rgba(34, 52, 92, 0.7);
  background-blend-mode: multiply;
  transition: all 0.3s ease-in-out;
  p {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin: 0;
  }
}
// .project:hover {
//   background-color: transparent;
// }
@media all and (max-width: 768px) {
  section {
    padding: 30px 0;
  }
}
</style>

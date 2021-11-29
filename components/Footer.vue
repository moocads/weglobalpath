<template>
  <div>
    <footer>
      <div class="wrapper">
        <a-row>
          <a-col :md="{ span: 7, offset: 0 }" :xs="24">
            <img src="/img/logos/logo-white.png" alt="" class="footer-logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              libero sagittis quis phasellus. Tellus dolor eu integer egestas
              nulla mauris nec cras. Lorem quam sed tempus, est pharetra. Amet
              amet, gravida
            </p>
          </a-col>
          <a-col :md="{ span: 7, offset: 2 }" :xs="24">
            <h4>联系</h4>
            <ul class="contact-info-wrap">
              <li>
                <img src="/img/icons/phone.svg" alt="" />
                <a href="tel:+12049638886">204-963-8886</a>
              </li>
              <li>
                <img src="/img/icons/address.svg" alt="" />
                <p>Unit 1 - 2100 De Saint Marc , Toronto, ON M3K07B</p>
              </li>
              <li>
                <img src="/img/icons/email.svg" alt="" />
                <a href="mailto:info@beyondcanada.com">info@beyondcanada.com</a>
              </li>
            </ul>
          </a-col>
          <a-col :md="{ span: 7, offset: 1 }" :xs="24">
            <h4>热门项目</h4>
            <div class="projects-wrap">
              <ul>
                <li>
                  <NuxtLink to="/">加拿大企业家移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">加拿大创业移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">加拿大雇主担保移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">加拿大留学移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">加拿大团聚移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">新移民服务</NuxtLink>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss" scoped>
footer {
  background-color: $navy;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0;
  p,
  h4 {
    color: #fff;
  }
  h4 {
    position: relative;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 25px;
  }
  h4::after {
    display: block;
    content: "";
    width: 100px;
    height: 1px;
    background: #fff;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
}
.footer-logo {
  width: 200px;
}
.contact-info-wrap {
  a,
  p {
    font-size: 16px;
    color: #fff;
  }
  p {
    margin-bottom: 0;
  }
  li {
    display: flex;
    align-items: center;
    margin: 0 auto 15px;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
}
.projects-wrap {
  li {
    display: flex;
    align-items: center;
    margin: 0 auto 10px;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    font-size: 16px;
    color: #fff;
  }
}
</style>

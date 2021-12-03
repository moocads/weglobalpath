<template>
  <div>
    <footer>
      <div class="wrapper">
        <a-row>
          <a-col :md="{ span: 7, offset: 0 }" :xs="24">
            <img src="/img/logos/logo-white.png" alt="" class="footer-logo" />
            <p>
              加彼岸旗下有加彼岸出国咨询（BEYONDCANADA
              CONSULTING），彼森教育（BISON EDUCATION）和彼岸投资（BEYONDCANADA
              INVESTMENT）三家子公司，均为加拿大联邦注册公司，分别由自身移民律师，RCIC（加拿大移民顾问监管委员会）持牌移民顾问，教育顾问，职业培训师，地产经纪，会计师及商务专家组成的强大专业服务团队。
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
                  <NuxtLink to="/projects/entrepreneur"
                    >加拿大企业家移民</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/projects/startup">加拿大创业移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/nominee">加拿大雇主担保移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/education">加拿大留学移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/reunion">加拿大团聚移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/new-immigrant">新移民服务</NuxtLink>
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
@media all and (max-width: 600px) {
  footer {
    padding: 30px 0;
  }
  .contact-info-wrap {
    a,
    p {
      font-size: 14px;
    }
    img {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  }
}
</style>

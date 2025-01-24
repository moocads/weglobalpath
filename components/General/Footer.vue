<template>
  <div>
    <footer>
      <div class="wrapper">
        <a-row>
          <a-col :md="{ span: 7, offset: 0 }" :xs="24">
            <img src="/img/logos/logo-white.png" alt="" class="footer-logo" />
            <p>
              加彼岸旗下有加彼岸出国咨询（BEYOND CANADA
              CONSULTING），彼森教育（BISON INTERNATIONAL
              EDUCATION）和彼岸投资（BEYOND CANADA INVESTMENT
              ）三家子公司，均为加拿大联邦注册公司，分别由资深移民律师，RCIC（加拿大移民顾问监管委员会）持牌移民顾问，教育顾问，职业培训师，地产经纪，会计师及商务专家组成的强大专业服务团队。
            </p>
          </a-col>
          <a-col :md="{ span: 7, offset: 2 }" :xs="24">
            <h4>联系</h4>
            <ul class="contact-info-wrap">
              <li>
                <img src="/img/icons/address.svg" alt="" />
                <p>
                  多伦多：7050 Woodbine Ave Unit300, Markham, ON L3R 4G8
                  <br />
                  <a href="tel:+16475233555" class="ga-phone-trigger"
                    >电话：647-523-3555</a
                  >
                </p>
              </li>
              <!-- <li>
                <img src="/img/icons/phone.svg" alt="" />
              </li> -->
              <li>
                <img src="/img/icons/address.svg" alt="" />
                <p>
                  温尼伯：180 Main St, Winnipeg, MB R3C 1A6 (Robertson College)
                  <br />
                  <a href="tel:+12049638886" class="ga-phone-trigger"
                    >电话：204-963-8886</a
                  >
                </p>
              </li>
              <!-- <li>
                <img src="/img/icons/phone.svg" alt="" />
              </li> -->
              <li>
                <img src="/img/icons/email.svg" alt="" />
                <a href="mailto:info@beyondcanada.ca">info@beyondcanada.ca</a>
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
                  <NuxtLink to="/projects/startup">加拿大创业人才移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/nominee">加拿大雇主担保移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/education">加拿大留学移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/ee">联邦EE快速通道</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/reunion">加拿大团聚移民</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/entrepreneur/manitoba-investment"
                    >曼省企业家投资移民</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/projects/education/manitoba-education"
                    >曼省留学移民</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/recruiting">曼省人才管培项目</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects/startup/start-up-visa"
                    >联邦创业投资（SUV）</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/projects/new-immigrant">新移民服务</NuxtLink>
                </li>
              </ul>
            </div>
          </a-col>
        </a-row>
      </div>
      <small class="copy-right"
        >© {{ new Date().getFullYear() }} BEYOND CANADA CONSULTING All Rights
        Reserved.<br/>
        <span> <a style="color:#3e539a;" href="https://moocads.com/">Designed by Mooc Creative Lab</a></span
        ></small
      >
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
  position: relative;
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
    font-size: 14px;
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
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 15px;
  }
  li {
    display: flex;
    align-items: flex-start;
  }
  a {
    font-size: 14px;
    color: #fff;
  }
}
.copy-right {
  position: absolute;
  color: #fff;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
@media all and (max-width: 768px) {
  footer {
    padding: 30px 0 50px;
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

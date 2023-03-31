<template>
  <div>
    <footer>
      <div class="wrapper">
        <a-row>
          <a-col :md="{ span: 12, offset: 0 }" :xs="24">
            <img src="/img/logos/logo-white.png" alt="" class="footer-logo" />
            <p>
              Beyond Canada includes BEYONDCANADA CONSULTING, BISON EDUCATION
              and BEYONDCANADA INVESTMENT which are all federally registered
              companies in Canada and are staffed by their own immigration
              lawyers, RCIC (Regulatory Council of Immigration Consultants of
              Canada) licensed immigration consultants, education consultants,
              vocational trainers, real estate agents, accountants and business
              experts. They are composed of their own immigration lawyers, RCIC
              licensed immigration consultants, education consultants,
              vocational trainers, real estate agents, accountants and business
              experts.
            </p>
          </a-col>
          <a-col :md="{ span: 7, offset: 5 }" :xs="24">
            <h4>Contact</h4>
            <ul class="contact-info-wrap">
              <li>
                <img src="/img/icons/address.svg" alt="" />
                <p>
                  Toronto：170 West Beaver Creek Rd, #201B, Richmond Hill, ON L4B 1L6
                  <br />
                  <a href="tel:+16475233555" class="ga-phone-trigger"
                    >Phone：647-523-3555</a
                  >
                </p>
              </li>
              <!-- <li>
                <img src="/img/icons/phone.svg" alt="" />
              </li> -->
              <li>
                <img src="/img/icons/address.svg" alt="" />
                <p>
                  Winnipeg：180 Main St, Winnipeg, MB R3C 1A6 (Robertson
                  College)
                  <br />
                  <a href="tel:+12049638886" class="ga-phone-trigger"
                    >Phone：204-963-8886</a
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
        </a-row>
      </div>
      <small class="copy-right"
        >© {{ new Date().getFullYear() }} BEYOND CANADA CONSULTING All Rights
        Reserved.<br />
        <span
          >Designed by <a href="https://moocads.com/">Mooc Creative</a></span
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
  span {
    color: $navy;
  }
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

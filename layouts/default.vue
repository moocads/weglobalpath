<template>
  <div id="page">
    <!-- <TopBar class="navbar-lg" /> -->
    <!-- <IndexPopup /> -->
    <WorldTime class="navbar-lg" />
    <Navbar v-if="$i18n.locale === 'zh' || $i18n.locale ==='tw'" class="navbar-lg" />
    <NavbarMobile v-if="$i18n.locale === 'zh' || $i18n.locale ==='tw'" class="navbar-sm" />
    <NavbarMobileEN v-if="$i18n.locale === 'en'" class="navbar-sm" />
    <NavbarEN v-if="$i18n.locale === 'en'" class="navbar-lg" />
    <div class="spacer"></div>
    <Nuxt />
    <SideBar v-if="$i18n.locale === 'zh'" />
    <SideBarMobile />
    <Footer v-if="$i18n.locale === 'zh'" />
    <FooterEN v-if="$i18n.locale === 'en'" />
    <div class="footer-spacer"></div>
    <!-- <Construction/> -->
    <!-- <FooterMobile class="navbar-sm" /> -->
  </div>
</template>
<script>
import Construction from '../components/Construction.vue';
export default {
  head() {
    return this.$nuxtI18
  },
};
</script>
<style lang="scss" scoped>
.navbar-lg {
  display: block;
}
.navbar-sm {
  display: none;
}
.spacer {
  width: 100%;
  height: 100px;
}
.footer-spacer {
  height: 60px;
  width: 100%;
  display: none;
  background-color: $navy;
}
@media all and (max-width: 991px) {
  .navbar-lg {
    display: none;
  }
  .navbar-sm {
    display: block;
  }
  .spacer {
    width: 100%;
    height: 80px;
    background-color: #fff;
  }
  .footer-spacer {
    display: block;
  }
}
</style>

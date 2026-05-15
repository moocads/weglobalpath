<template>
  <div id="page">
    <WorldTime class="navbar-lg" />
    <Navbar v-if="$i18n.locale === 'zh' || $i18n.locale ==='tw'" class="navbar-lg" />
    <NavbarMobile v-if="$i18n.locale === 'zh' || $i18n.locale ==='tw'" class="navbar-sm" />
    <div class="spacer"></div>
    <Nuxt />
    <SideBar v-if="$i18n.locale === 'zh' || $i18n.locale === 'tw'" />
    <SideBarMobile />
    <Footer v-if="$i18n.locale === 'zh' || $i18n.locale === 'tw'" />
    <div class="footer-spacer"></div>
  </div>
</template>
<script>
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
  background-color: $primary;
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

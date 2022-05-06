<template>
  <div id="page">
    <!-- <TopBar class="navbar-lg" /> -->
    <NavbarMobile class="navbar-sm" />
    <Navbar class="navbar-lg" />
    <div class="spacer"></div>
    <Nuxt />
    <SideBar />
    <SideBarMobile />
    <Footer />
    <div class="footer-spacer"></div>
    <!-- <FooterMobile class="navbar-sm" /> -->
  </div>
</template>
<script>
export default {};
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
  height: 70px;
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

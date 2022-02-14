<template>
  <div id="page">
    <!-- <TopBar class="navbar-lg" /> -->
    <NavbarMobile class="navbar-sm" />
    <Navbar class="navbar-lg" />
    <div class="spacer"></div>
    <Nuxt />
    <SideBar />
    <Footer />
    <FooterMobile class="navbar-sm" />
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
}
</style>

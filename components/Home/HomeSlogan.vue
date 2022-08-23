<template>
  <section id="home-slogan">
    <div class="wrapper">
      <div class="content">
        {{ $t("homeSlogan.content") }}
      </div>
      <div class="titles">
        Luna Wang
        <div class="small">
          <br />{{ $t("homeSlogan.tag-1") }} <br />
          <a href="https://www.c101.ca/" target="_blank">
            {{ $t("homeSlogan.tag-2") }}
          </a>
          <br />{{ $t("homeSlogan.tag-3") }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeSlogan",
};
</script>
<style lang="scss">
#home-slogan {
  padding: 100px 0;
  background-color: #fff;
  color: $navy;
  font-size: 18px;
  text-align: center;
  .wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    position: relative;
    > div {
      padding: 35px 60px;
    }
    &::before,
    &::after {
      background-image: url("/img/quote.webp");
      background-size: contain;
      background-repeat: no-repeat;
      display: inline-block;
      content: "";
      height: 30px;
      width: 40px;
      opacity: 0.3;
      position: absolute;
    }
    &::before {
      top: 0;
      left: -40px;
    }
    &::after {
      bottom: 0;
      right: -40px;
      transform: rotate(180deg);
    }
  }
  .content {
    font-style: italic;
  }
  .titles {
    text-align: left;
    border-left: 2px solid #efefef;
  }
  .small {
    font-size: 13px;
  }
}
@media all and (max-width: $sm) {
  #home-slogan {
    padding: 60px 0;
    font-size: 16px;
    .wrapper {
      grid-template-columns: 1fr;
      > div {
        padding: 40px 10px;
      }
      .titles {
        border-left: none;
        border-top: 2px solid #efefef;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
  }
}
</style>

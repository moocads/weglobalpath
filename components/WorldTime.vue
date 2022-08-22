<template>
  <div class="world-time-wrap">
    <Wrapper>
      <div class="time-wrap">
        <div class="toronto">
          <p>
            {{ $i18n.locale === "zh" ? "多伦多时间" : "Toronto" }}:{{
              canadaDate
            }}
            {{ torontoTime }}
          </p>
        </div>
        <div class="manitoba">
          <p>
            {{ $i18n.locale === "zh" ? "曼尼托巴时间" : "Manitoba" }}:{{
              canadaDate
            }}
            {{ manitobaTime }}
          </p>
        </div>
        <div class="vancouver">
          <p>
            {{ $i18n.locale === "zh" ? "温哥华时间" : "Vancouver" }}：{{
              canadaDate
            }}
            {{ vancouverTime }}
          </p>
        </div>
      </div>
      <div class="lang-switch-wrap">
        <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
        <nuxt-link :to="switchLocalePath('zh')" exact>中</nuxt-link>
      </div>
    </Wrapper>
  </div>
</template>

<script>
var moment = require("moment-timezone");
export default {
  data() {
    return {
      interval: null,
      canadaDate: null,
      torontoTime: null,
      vancouverTime: null,
      manitobaTime: null,
    };
  },
  methods: {
    showCanadaDate() {
      setInterval(() => {
        this.canadaDate = moment().tz("America/Toronto").format().split("T")[0];
      }, 1000);
    },
    showTorontoTime() {
      setInterval(() => {
        this.torontoTime = moment()
          .tz("America/Toronto")
          .format()
          .split(/[T]|-/)[3];
      }, 1000);
    },
    showVancouverTime() {
      setInterval(() => {
        this.vancouverTime = moment()
          .tz("America/Vancouver")
          .format()
          .split(/[T]|-/)[3];
      }, 1000);
    },
    showManitobaTime() {
      setInterval(() => {
        this.manitobaTime = moment()
          .tz("America/Winnipeg")
          .format()
          .split(/[T]|-/)[3];
      }, 1000);
    },
  },
  created() {
    this.showCanadaDate();
    this.showTorontoTime();
    this.showVancouverTime();
    this.showManitobaTime();
  },
};
</script>
<style lang="scss">
.world-time-wrap {
  .nuxt-link-active {
    color: $navy;
  }
  a {
    color: #b0b0b0;
  }
}
</style>
<style lang="scss" scoped>
.world-time-wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
}
.world-time-wrap .wrapper {
  display: flex;
  justify-content: space-between;
}
.world-time-wrap .time-wrap {
  height: 30px;
  display: flex;
  align-items: center;
  .toronto,
  .vancouver,
  .manitoba {
    margin-right: 18px;
    p {
      margin-bottom: 0;
      color: #b4b4b4;
      font-size: 12px;
    }
  }
}
.world-time-wrap .lang-switch-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-left: 8px;
  }
}
</style>

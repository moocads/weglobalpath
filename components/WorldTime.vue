<template>
  <div>
    <div class="world-time-wrap">
      <div class="wrapper">
        <div class="toronto">
          <p>多伦多时间：{{ torontoTime }}</p>
        </div>
        <div class="manitoba">
          <p>曼尼托巴时间：{{ manitobaTime }}</p>
        </div>
        <div class="vancouver">
          <p>温哥华时间：{{ vancouverTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment-timezone");
export default {
  data() {
    return {
      interval: null,
      torontoTime: null,
      vancouverTime: null,
      manitobaTime: null,
    };
  },
  created() {
    // 多伦多时间
    this.interval = setInterval(() => {
      this.torontoTime = moment()
        .tz("America/Toronto")
        .format("YYYY-MM-DD HH:MM:SS");
    }, 1000);
    // 温哥华时间
    this.interval = setInterval(() => {
      this.vancouverTime = moment()
        .tz("America/Vancouver")
        .format("YYYY-MM-DD HH:MM:SS");
    }, 1000);
    // 曼尼托巴时间
    this.interval = setInterval(() => {
      this.manitobaTime = moment()
        .tz("America/Winnipeg")
        .format("YYYY-MM-DD HH:MM:SS");
    }, 1000);
  },
};
</script>

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
.world-time-wrap > .wrapper {
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
</style>

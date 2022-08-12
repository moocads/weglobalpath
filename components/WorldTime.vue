<template>
  <div>
    <div class="world-time-wrap">
      <div class="wrapper">
        <div class="toronto">
          <p>多伦多时间：{{ canadaDate }} {{ torontoTime }}</p>
        </div>
        <div class="manitoba">
          <p>曼尼托巴时间：{{ canadaDate }} {{ manitobaTime }}</p>
        </div>
        <div class="vancouver">
          <p>温哥华时间：{{ canadaDate }} {{ vancouverTime }}</p>
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

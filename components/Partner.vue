<template>
  <div>
    <div
      class="requirement-anchor"
      :class="[
        { 'requirement-info-wrap-expand': isExpanded },
        { 'requirement-info-wrap-closed': !isExpanded },
      ]"
    >
      <h2>PARTNERS</h2>
    </div>
    <!-- <button
      :key="randomKey"
      @click="isExpanded = !isExpanded"
      :class="[
        { 'expand-btn': isExpanded, 'requirement-expand-btn': hasButtonProp },
      ]"
    >
      展开全部
    </button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      randomKey: 1,
    };
  },
  props: {
    title: String,
    requirementsData: Array,
    hasButtonProp: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.requirement-item {
  position: relative;
  .requirement-info-wrap-closed {
    overflow: hidden;
    // max-height: 150px;
    transition: all 0.3s ease-in-out;
    position: relative;

    // &::after {
    //   content: "";
    //   position: absolute;
    //   z-index: 10;
    //   background: linear-gradient(0deg, #1b2854 0%, rgba(27, 40, 84, 0) 100%);
    //   height: 20px;
    //   width: 100%;
    //   left: 0;
    //   bottom: 0;
    // }
  }

  .requirement-info-wrap-expand {
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    max-height: auto;
  }
  h2 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    position: relative;
  }
  h2::before {
    content: url("/img/Projects/checkmark.png");
    position: relative;
    top: 2px;
    left: 0;
    margin-right: 10px;
  }
  ul {
    list-style-type: disc;
    margin-left: 50px;
    color: #dadada;
  }
  li {
    margin-bottom: 10px;
  }
  button {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    color: #6ab6ff;
    font-size: 13px;
    display: none;
  }
  button::after {
    content: url("/img/Projects/expand.png");
    margin-left: 5px;
  }

  .requirement-expand-btn {
    display: block !important;
  }
  .expand-btn {
    transition: all 0.2s ease-in-out;
  }
  .expand-btn::after {
    display: inline-block;
    content: url("/img/Projects/expand.png");
    margin-left: 5px;
    transform: rotate(180deg);
  }
}
</style>
<style lang="scss" scoped></style>

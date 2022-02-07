<template>
  <div>
    <div
      class="requirement-anchor expandable"
      :class="{active: isExpanded}"
    >
      <h2>{{ title }}</h2>
      <div >
        <ul>
          <li v-for="(list, index) in requirementsData" :key="index">
            {{ list.point }}
          </li>
        </ul>
      </div>
    </div>
    <!-- <p>{{hasButtonProp}}</p> -->
    <div class="expandBtn" v-if="hasButtonProp" :class="{active: isExpanded}" @click="isExpanded = !isExpanded">
      <a-icon type="caret-down" /> 展开全部
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
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
<style lang="scss" scoped>
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

  .expandable {
    max-height: 150px;
    overflow: hidden;
    transition: all 0.5s ease;

    &.active {
      max-height: 500px;
    }
  }

  .expandBtn {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 10px 0;
    color: white;
    position: relative;
    
    &:hover {
      cursor: pointer;    
    }

    &.active {
      i {
        transform: rotate(180deg);
      }

      &::before {
        opacity: 0;
      }
    }

    i {
      font-size: 20px;
      transition: all 0.5s ease;
      margin-right: 10px;
    }

    &::before {
      content: '';
      width: 100%;
      height: 30px;
      background-image: linear-gradient(to top, $navy, transparent);
      position: absolute;
      bottom: 100%;
      pointer-events: none;
      transition: all 0.5s ease;
    }
  }
</style>

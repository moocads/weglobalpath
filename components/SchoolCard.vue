<template>
  <div>
    <div class="school">
      <h2>{{ schoolsData.area }}</h2>
      <div class="university-college">
        <div class="university">
          <h3>University</h3>
          <ul>
            <li v-for="(uni, index) in schoolsData.university" :key="index">
              {{ uni }}
            </li>
          </ul>
        </div>
        <div class="college">
          <h3>College</h3>
          <ul>
            <li v-for="(college, index) in schoolsData.college" :key="index">
              {{ college }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    schoolsData: Object,
  },
};
</script>

<style lang="scss" scoped>
.school {
  border-radius: 5px;
  border: 1px solid $red;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: hidden;
  h2 {
    // border-top-right-radius: 5px;
    // border-top-left-radius: 5px;
    background-color: $red;
    margin: 0;
    padding: 10px 0;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #fff;
  }
  h3 {
    text-align: center;
    background-color: #e4e4e4;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    padding: 5px 0;
  }
}
.university-college {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.university {
  border-right: 1px solid #c4c4c4;
}
.university,
.college {
  ul {
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style-type: disc;
    margin-left: 18px;
  }
  li {
    // text-align: center;
    margin-left: 5px;
    margin-bottom: 5px;
    font-weight: 300;
  }
}

@media all and (max-width: 1000px) {
  .school {
    h2 {
      margin: 0;
      padding: 10px 0;
      font-size: 20px;
    }
    h3 {
      font-size: 16px;
      padding: 5px 0;
    }
  }
  .university,
  .college {
    ul {
      padding: 10px 10px;
    }
    li {
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="recent-scores">
    <div class="score-row" v-for="(s, i) in scores" :key="i">
      <div>
        <span v-if="s.type">{{ s.type }}：</span><span>{{ s.date }}</span>
      </div>
      <div>邀请分数：{{ s.score }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scores: Array,
  },
};
</script>

<style lang="scss" scoped>
.recent-scores {
  display: flex;
  justify-content: space-evenly;
  border: 1px solid $navy;
  margin-bottom: 30px;
  font-size: 16px;
  padding: 24px;
  width: 100%;
  .score-row {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    gap: 20px;
  }
}
@media all and (max-width: $md) {
  .recent-scores {
    padding: 15px 5px;
    gap: 5px;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    .score-row {
      width: 320px;
      gap: 15px;
      text-align: left;
      grid-template-columns: 1fr 1fr;
      & > :nth-child(2) {
        display: flex;
        align-items: center;
      }
    }
  }
}
@media all and (max-width: $sm) {
  .recent-scores {
    font-size: 14px;
    .score-row{
      width: 280px;
    }
  }
}
</style>

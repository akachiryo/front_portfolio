<template>
  <div>
    <content class="profile-skill">
      <div class="chart-title">
        <p class="chart-title-text">
          スキルチャート
        </p>
        <div v-if="logging">
          <button
            class="to-skill-edit-btn"
            @click="toSkillEditPage"
          >
            自己紹介を編集する
          </button>
        </div>
      </div>
      <div class="bar-chart">
        <BarChart />
      </div>
    </content>
  </div>
</template>

<script>
import BarChart from './Bar.vue'

export default {
  name: 'App',
  components: {
    BarChart
  },
  computed: {
    logging () {
      return this.$store.getters['auth/currentUser']
    }
  },
  methods: {
    toSkillEditPage () {
      this.$store.dispatch('skill/fetchSkillTypes')
      this.$router.push('/skilledit')
    }
  }
}
</script>

<style>
.profile-skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 80px;
  width: 1046px;
  height: 638px;
}

.chart-title {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 42px;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: rgba(0, 0, 0, 0.75);
}

.chart-title-text {
  width: 252px;
  height: 42px;
  font-weight: 700;
  font-size: 36px;
  margin-top: 200px;
  margin-bottom: 50px;
  line-height: 42px;
  color: rgba(0, 0, 0, 0.75);
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

.to-skill-edit-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;

  width: 242px;
  height: 53px;

  /* primary-color */

  background: #1B5678;
  border-radius: 4px;
  border: none;
  color: white;
}

.bar-chart {
   margin-top: 100px;
}
</style>

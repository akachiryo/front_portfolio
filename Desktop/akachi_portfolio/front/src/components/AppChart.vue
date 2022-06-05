<template>
  <div>
    <content class="profile-skill">
      <div class="chart-title-">
        <p class="chart-title-text">スキルチャート</p>
      </div>
      <div class="skill-chart"></div>
    </content>
  </div>
</template>

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
  width: 252px;
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
  line-height: 42px;
  color: rgba(0, 0, 0, 0.75);
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}
</style>

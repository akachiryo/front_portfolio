<template>
  <div class="profile">
    <AppProfile />
    <AppChart />
  </div>
</template>

<script>
import AppProfile from "../components/AppProfile.vue";
import AppChart from "../components/AppChart.vue";

export default {
  name: "HomeView",
  components: {
    AppProfile,
    AppChart,
  },
};
</script>

<style>
.profile {
  /* Auto layout */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-start; */
  padding: 0px;
  gap: 120px;
  width: 1046px;
  height: 1118px;
}
</style>

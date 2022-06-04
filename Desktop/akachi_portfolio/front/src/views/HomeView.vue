<template>
  <contents class="profile">
    <content class="profile-avatar">
      <div class="avatar">
        <!-- <img src="" alt=""> -->
      </div>
    </content>
    <content class="profile-introcuction">
      <div class="profile-introcuction-title">
        <p class="profile-introcuction-title-text">自己紹介</p>
        <span class="profile-introcuction-title-underbar"></span>
      </div>
      <p class="profile-introcuction-text"></p>
    </content>
  </contents>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style>
.profile {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;
  width: 1046px;
  height: 360px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.avatar {
  /* avatar */
  width: 360px;
  height: 360px;
  background: #c4c4c4;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.profile-introduction {
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 520px;
  height: 117px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.profile-introduction-title {
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 240px;
  height: 58px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* アンダーバー */
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

.profile-introcuction-title-text {
  width: 144px;
  height: 42px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: rgba(0, 0, 0, 0.75);
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}

.profile-introcuction-title-underbar {
  /* Line 1 */
  width: 240px;
  height: 0px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  /*Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.profile-introduction-text {
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 520px;
  height: 27px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
</style>

<template>
  <content class="profile-avator-introduction">
    <div v-if="logging">
      <img :src="userAvatar" class="profile-avatar">
    </div>
    <div v-else>
      <div class="profile-avatar"></div>
    </div>
    <div class="profile-introcuction">
      <div class="profile-introcuction-title">
        <p class="profile-introcuction-title-text">
          自己紹介
        </p>
      </div>
      <div v-if="logging">
        <p class="profile-introcuction-text-logined">
          {{ userIntroduction }}
        </p>
        <button
          class="to-updateview-btn"
          @click="toMyUpdatePage"
        >
          自己紹介を編集する
        </button>
      </div>
      <div v-else>
        <p class="profile-introcuction-text">
          ログインして、自己紹介文と画像を登録しましょう！
        </p>
      </div>
    </div>
  </content>
</template>

<script>
export default {
  computed: {
    logging () {
      return this.$store.getters['auth/currentUser']
    },
    userIntroduction () {
      return this.$store.getters['auth/currentUser'].introduction
    },
    userAvatar () {
      return this.$store.getters['auth/currentUser'].avatar
    }
  },
  methods: {
    toMyUpdatePage () {
      this.$router.push('/myupdate')
    }
  }
}
</script>

<style>
.profile-avator-introduction {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 80px;

  width: 1046px;
  height: 360px;
}

.profile-avatar {
  /* avatar */
  width: 360px;
  height: 360px;
  background: #c4c4c4;
  border-radius: 50%;
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
  /* border-bottom: 2px solid rgba(0, 0, 0, 0.5); */
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

  /* アンダーバー */
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

.profile-introcuction-text {
  color: rgba(255, 0, 0, 0.75);
}

.profile-introcuction-text-logined {
  width: 520px;
  height: 81px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: left;
  color: rgba(0, 0, 0, 0.75);
}

.to-updateview-btn {
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
</style>

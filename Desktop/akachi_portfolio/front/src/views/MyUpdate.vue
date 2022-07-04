<template>
  <div class="my-update">
    <p class="my-update-title">
      自己紹介を編集する
    </p>
    <div class="my-update-form">
      <div class="my-update-form-item">
        <label
          for="introduction"
          class="my-update-form-item-title"
        >自己紹介文</label>
        <textarea
          id="introduction"
          v-model="user.introduction"
          rows="5"
          cols="45"
          class="my-update-form-item-input"
        />
        <p class="my-update-form-item-word-limit">
          200文字以上、800文字未満で入力してください
        </p>
      </div>
      <div class="my-update-form-item">
        <p class="my-update-avatar-title">
          アバター画像
        </p>
        <label for="form-image" class="my-update-avatar">画像ファイルを添付する</label>
        <input
          id="form-image"
          type="file"
          class="my-update-avatar-input"
          accept="image/*,.png,.jpg,.jpeg,.gif"
          @change="selectedFile"
        >
      </div>
      <div class="my-update-form-item-btn">
        <button
          class="my-update-btn"
          @click="myUpdate"
        >
          自己紹介を確定する
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: null
    }
  },
  created () {
    this.user = { ...this.$store.getters['auth/currentUser'] }
  },
  methods: {
    myUpdate () {
      const userParams = {
        user: {
          introduction: this.user.introduction,
          image: this.user.avatar
        }
      }
      this.$store.dispatch('auth/updateProfile', userParams)
      this.$router.push('/')
    },
    selectedFile (e) {
      // 選択された File の情報を保存しておく
      const reader = new FileReader()
      e.preventDefault()
      const avatar = e.target.files[0]
      if (avatar) {
        reader.readAsDataURL(avatar)
      } else {
        this.user.avatar = ''
      }
      reader.onload = () => {
        this.user.avatar = reader.result
      }
    }
  }
}
</script>

<style>
.my-update-form {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 48px;

  position: absolute;
  width: 480px;
  height: 245px;
  left: 480px;
  top: 328px;
}

.my-update-title {
  position: absolute;
  width: 324px;
  height: 48px;
  left: 558px;
  top: 200px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 133.4%;
  /* identical to box height, or 48px */
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
}

.my-update-form-item-title {
  width: 61px;
  height: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  /* text / secondary */
  color: rgba(0, 0, 0, 0.54);
}

.my-update-form-item-input {
  padding: 0px;

  width: 480px;
  height: 95px;
  border: none;
  border-bottom: 1px solid #000000;
}

.my-update-form-item-word-limit {
  width: 275px;
  height: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;

  /* text / secondary */
  color: rgba(0, 0, 0, 0.54);
}

.my-update-avatar-title {
  width: 73px;
  height: 12px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  /* text / secondary */

  color: rgba(0, 0, 0, 0.54);

}

.my-update-avatar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  width: 202px;
  height: 32px;
  left: 0px;
  top: 16px;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.my-update-avatar-input {
  display: none;
}

.my-update-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 80px;
  width: 322px;
  height: 53px;
  margin: auto;

  /* primary-color */

  background: #1B5678;
  border-radius: 4px;
  border: none;
  color: white;
}
</style>

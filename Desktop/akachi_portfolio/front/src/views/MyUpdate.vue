<template>
  <div class="my-update">
    <p class="my-update-title">自己紹介を編集する</p>
    <div class="my-update-form">
      <div class="my-update-form-item">
        <label
          for="introduction"
          class="my-update-form-item-title"
        >自己紹介文</label>
        <textarea
          id="introduction"
          v-model="introduction"
          rows="5"
          cols="45"
          class="my-update-form-item-input"
        ></textarea>
        <p class="my-update-form-item-word-limit">
          200文字以上、800文字未満で入力してください
        </p>
      </div>
      <div class="my-update-form-item">
        <label for="avatar">
          画像ファイルを添付する
        </label>
        <input type="file" name="avatar">
      </div>
      <div clas="my-update-form-item">
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

<style>
.my-update-form {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.my-update-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 80px;

  width: 322px;
  height: 53px;

  /* primary-color */

  background: #1B5678;
  border-radius: 4px;
  border: none;
  color: white;
}
</style>

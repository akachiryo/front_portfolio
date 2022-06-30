<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <p class="modal-text">
          {スキル名} の項目を削除しました！
        </p>
        <button class="modal-button" @click="closeDeleteSkill">
          スキル編集ページに戻る
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeDeleteSkill () {
      this.$emit('closeDeleteSkill')
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0 auto;
  padding: 0px;
  gap: 40px;
  width: 640px;
  height: 240px;
  background: #FFFFFF;
}

.modal-text {
  font-weight: 700;
  font-size: 18px;

  color: rgba(0, 0, 0, 0.75);
}

.modal-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;

  width: 192px;
  height: 48px;

  /* primary-color */
  color: white;
  background: #1B5678;
  border: none;
  border-radius: 4px;
}
</style>

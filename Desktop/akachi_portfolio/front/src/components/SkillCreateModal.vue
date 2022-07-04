<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <p class="modal-text">
          {{ skillTypeName }} に {{ skillCreateName }} を<br>
          習得レベル {{ skillCreateLevel }} で追加しました！
        </p>
        <button class="modal-button" @click="closeCreateSkill">
          スキル編集ページに戻る
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'skillTypeName',
    'skillCreateName',
    'skillCreateLevel'
  ],
  methods: {
    closeCreateSkill () {
      this.$emit('closeCreateSkill')
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

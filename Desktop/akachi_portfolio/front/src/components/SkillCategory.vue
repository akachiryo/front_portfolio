<template>
  <div class="category">
    <div class="category-content">
      <div class="category-title">
        <p class="category-title-text">タイトル</p>
        <button class="category-title-button">スキルを追加する</button>
      </div>
      <div class="category-card">
        <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
.category {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 40px;
  gap: 80px;

  width: 960px;
  height: 436px;

  border: 1px solid rgba(0, 0, 0, 0.5);
border-radius: 8px;
}

.category-content {
  /* content */
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 32px;

  width: 880px;
  height: 356px;
}

.category-title {
  /* title */
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  width: 880px;
  height: 48px;
}

.category-title-text {
  /* バックエンド */
  width: 144px;
  height: 28px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: rgba(0, 0, 0, 0.75);

  width: 240px;
  height: 0px;

  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
}

.category-title-button {
  /* button_blue */
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;

  width: 192px;
  height: 48px;

  /* primary-color */

  background: #1B5678;
  border-radius: 4px;
}
</style>
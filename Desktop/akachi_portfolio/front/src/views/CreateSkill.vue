<template>
  <div class="create-skill-content">
    <p class="create-skill-title">{{ skill_type_name }} にスキルを追加</p>
    <div class="create-skill-form">
      <div class="create-skill-form-item">
        <label
          for="name"
          class="create-skill-form-item-form-item-label"
        >
          習得スキル名
        </label>
        <input
        id="name"
        v-model="skill.name"
        class="create-skill-form-item-input"
        />
      </div>
      <div class="create-skill-form-item">
        <label
          for="name"
          class="create-skill-form-item-form-item-label"
        >
          習得レベル
        </label>
        <select
          size="1"
          v-model="skill.level"
          class="create-skill-form-item-input"
        >
          <option
            v-for="n in 100"
            :key="n"
          >
            {{ n }}
          </option>
        </select>
        <p class="skill-create-form-item-level-limit">
          0 ~ 100 の間で選択してください
        </p>
      </div>
      <div class="create-skill-from-item-submit">
        <button
          class="create-skill-from-item-btn"
          @click="createSkill"
        >
          追加する
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: [
    'skill_type_id',
    'skill_type_name'
  ],
  data () {
    return {
      skill: {
        name: null,
        level: null
      }
    }
  },
  methods: {
    async createSkill () {
      // axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT
      const skill = {
        skill_type_id: this.skill_type_id,
        name: this.skill.name,
        level: this.skill.level
      }
      await axios.post('http://localhost:3000/api/skills', skill)
      this.$store.dispatch('skill/fetchSkillTypes')
      this.$router.push({
        name: 'SkillEdit',
        params: {
          createModal: true,
          skillTypeName: this.skill_type_name,
          skillCreateName: this.skill.name,
          skillCreateLevel: this.skill.level
        }
      })
    }
  }
}
</script>

<style>
.create-skill-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.create-skill-title {
  font-weight: 400;
  font-size: 36px;
  line-height: 133.4%;
  /* identical to box height, or 48px */

  text-align: center;

  color: rgba(0, 0, 0, 0.75);
}

.create-skill-form-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px 0;
}

.create-skill-form-item-form-item-label {
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 10px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  /* text / secondary */

  color: rgba(0, 0, 0, 0.54);
}

.create-skill-form-item-input {
  font-size: 16px;
  width: 480px;
  padding: 0px;
  border: none;
  border-bottom: 1px solid #000000;
}

.skill-create-form-item-level-limit {
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

.create-skill-from-item-submit {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
}

.create-skill-from-item-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 80px;

  width: 268px;
  height: 53px;

  /* primary-color */
  color: white;
  background: #1B5678;
  border-radius: 4px;
  border: none;
}
</style>

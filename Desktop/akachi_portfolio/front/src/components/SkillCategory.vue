<template>
  <div>
    <div class="category" v-for="skillType in skill_types" :key="skillType.id">
      <div class="category-content">
        <div class="category-title">
          <p class="category-title-text">タイトル</p>
          <button class="category-title-button">スキルを追加する</button>
        </div>
        <div class="category-card">
          <table class="category-table">
            <tr class="category-table-header">
              <th class="category-table-title">習得スキル</th>
              <th class="category-table-title">習得レベル</th>
            </tr>
            <tr class="category-table-row" v-for="skill in skillType.skills" :key="skill.id">
              <td class="category-table-culum">{{ skill.name }}</td>
              <td class="category-table-culum">
                <select
                  size="1"
                  v-model="skill.level"
                >
                  <option
                    v-for="n in 100"
                    :key="n"
                  >
                    {{ n }}
                  </option>
                </select>
                <!-- <select name="sample">
                  <option value="1">sample</option>
                </select> -->
              </td>
              <td class="category-table-culum">
                <button
                  class="category-table-save-button"
                  @click="updateSkill(skill.id, skill.level)"
                >
                  習得レベルを保存する
                </button>
              </td>
              <td class="category-table-culum">
                <button
                  class="category-table-delete-button"
                  @click="deleteSkill(skill.id)"
                >
                  スキルを削除する
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      // skillTypes: [{
      //   id: 1,
      //   name: 'インフラ',
      //   skills: [
      //     {
      //       id: 1,
      //       user_id: 1,
      //       name: 'ruby',
      //       level: 50
      //     },
      //     {
      //       id: 2,
      //       user_id: 1,
      //       name: 'rails',
      //       level: 80
      //     }
      //   ]
      // },
      // {
      //   id: 2,
      //   name: 'バックエンド',
      //   skills: []
      // },
      // {
      //   id: 3,
      //   name: 'フロントエンド',
      //   skills: []
      // }
      // ]
    }
  },
  created: {
    // this.fetchSkillTypes ()
  },
  computed: {
    ...mapGetters({
      skill_types: 'skill/skillTypes',
      currentUser: 'auth/currentUser'
    })
  },
  methods: {
    ...mapActions(['fetchSkillTypes']),
    async updateSkill (skillId, skillLevel) {
      // axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT
      const skillParams = {
        skill: {
          level: skillLevel
        }
      }
      await this.$store.dispatch('skill/updateSkill', { skillId, skillParams })
    },
    async deleteSkill (skillId) {
      if (confirm('削除しますか？')) {
        await this.$store.dispatch('skill/deleteSkill', skillId)
      }
    }
  }
}
</script>

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
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: left;

  color: rgba(0, 0, 0, 0.75);

  width: 240px;
  height: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  margin: 0;
  padding-bottom: 30px;
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
  color: white;
  background: #1B5678;
  border: none;
  border-radius: 4px;
}

.category-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  width: 880px;
  height: 276px;

  /* other / white */

  background: #FFFFFF;
  /* Shadow / 2 */

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

}

.category-table-header {
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 0px;

  width: 880px;
  height: 57px;

}

.category-table-title {
  padding: 16px 16px 16px 40px;

  width: 240px;
  height: 56px;

  /* white */

  background: #FFFFFF;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  /* display: flex; */
  /* align-items: center; */
  letter-spacing: 0.15px;

  /* text / primary */

  color: rgba(0, 0, 0, 0.87);
  text-align: left;
}

.category-table-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 880px;
  height: 73px;
}

.category-table-culum {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px 16px 40px;

  width: 240px;
  height: 52px;

  /* white */

  background: #FFFFFF;
}

.category-table-save-button {
  box-sizing: border-box;

/* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  width: 172px;
  height: 32px;

  /* white */

  background: #FFFFFF;
  /* primary-color */

  border: 1px solid #1B5678;
  border-radius: 4px;

  color: #1B5678;
}

.category-table-delete-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  width: 144px;
  height: 32px;

  /* secondary-color */

  background: #EE6969;
  border: none;
  border-radius: 4px;

  color: #FFFFFF;

}
</style>

<template>
  <div>
    <SkillCategory
      @openCreateSkill="openCreateSkill"
      @openSaveSkill="openSaveSkill"
      @openDeleteSkill="openDeleteSkill"
    />
    <SkillCreateModal
      v-show="createModal"
      @closeCreateSkill="closeCreateSkill"
      :skillTypeName="skillTypeName"
      :skillCreateName="skillCreateName"
      :skillCreateLevel="skillCreateLevel"
    />
    <SkillSaveModal v-show="saveModal" @closeSaveSkill="closeSaveSkill" :skillSaveName="skillSaveName" />
    <SkillDeleteModal v-show="deleteModal" @closeDeleteSkill="closeDeleteSkill" :skillDeleteName="skillDeleteName" />
  </div>
</template>

<script>
import SkillCategory from '../components/SkillCategory.vue'
import SkillCreateModal from '../components/SkillCreateModal.vue'
import SkillSaveModal from '../components/SkillSaveModal.vue'
import SkillDeleteModal from '../components/SkillDeleteModal.vue'

export default {
  data () {
    return {
      createModal: false,
      saveModal: false,
      deleteModal: false,
      skillSaveName: null,
      skillDeleteName: null,
      skillTypeName: null,
      skillCreateName: null,
      skillCreateLevel: null
    }
  },
  mounted () {
    this.skillTypeName = this.$route.params.skillTypeName
    this.skillCreateName = this.$route.params.skillCreateName
    this.skillCreateLevel = this.$route.params.skillCreateLevel
    this.createModal = this.$route.params.createModal
  },
  // beforeRouteLeave (to, from, next) {
  //   next()
  //   this.createModal = true
  // },
  components: {
    SkillCategory,
    SkillCreateModal,
    SkillSaveModal,
    SkillDeleteModal
  },
  methods: {
    openCreateSkill () {
      this.createModal = true
    },
    openSaveSkill (skillSaveName) {
      this.skillSaveName = skillSaveName
      this.saveModal = true
    },
    openDeleteSkill (skillDeleteName) {
      this.skillDeleteName = skillDeleteName
      this.deleteModal = true
    },
    closeCreateSkill () {
      this.createModal = false
    },
    closeSaveSkill () {
      this.saveModal = false
    },
    closeDeleteSkill () {
      this.deleteModal = false
    }
  }
}
</script>

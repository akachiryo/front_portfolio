<template>
  <div>
    <SkillCategory
      @openCreateSkill="openCreateSkill"
      @openSaveSkill="openSaveSkill"
      @openDeleteSkill="openDeleteSkill"
    />
    <SkillCreateModal v-show="createModal" @closeCreateSkill="closeCreateSkill" />
    <SkillSaveModal v-show="saveModal" @closeSaveSkill="closeSaveSkill" />
    <SkillDeleteModal v-show="deleteModal" @closeDeleteSkill="closeDeleteSkill" />
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
      deleteModal: false
    }
  },
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
    openSaveSkill () {
      this.saveModal = true
    },
    openDeleteSkill () {
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

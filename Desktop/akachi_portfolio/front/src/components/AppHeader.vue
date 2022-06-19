<template>
  <header class="header">
    <p
      class="header-title"
      @click="toHome"
    >
      My Portfolio
    </p>
    <p
      class="header-title"
      @click="toSkill"
    >
      skilledit
    </p>
    <button class="login-button">
      <p
        class="login-button-text"
        @click="toLoginPage"
      >
        ログイン
      </p>
      <!-- ログイン -->
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    toLoginPage () {
      this.$router.push('login')
    },
    toHome () {
      this.$router.push('/')
    },
    toSkill () {
      this.$router.push('/skilledit')
    }
  }
}
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  gap: 10px;
  position: absolute;
  width: 1440px;
  height: 120px;
  left: 0px;
  top: 0px;
  background-color: #1b5678;
}

.header-title {
  width: 201px;
  height: 42px;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  flex-shrink: 0;
  white-space: nowrap;
}

.login-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px;
  width: 152px;
  height: 53px;
  background: #ffffff;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.login-button-text {
  width: 72px;
  height: 21px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.75);
  flex: none;
  order: 0;
  flex-grow: 0;
}
</style>

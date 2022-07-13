<template>
  <div class="login">
    <p class="login-title">
      ログイン
    </p>
    <div class="login-form">
      <div class="login-form-item">
        <label
          for="email"
          class="login-form-item-title"
        >メールアドレス</label>
        <input
          id="email"
          v-model="email"
          type="text"
          class="login-form-item-input"
        >
      </div>
      <div class="login-form-item">
        <label
          for="password"
          class="login-form-item-title"
        >パスワード</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="login-form-item-input"
        >
      </div>
      <div class="form-item">
        <button
          class="login-btn"
          @click="login"
        >
          ログインする
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      if (this.email && this.password) {
        try {
          const sessionParams = {
            session: {
              email: this.email,
              password: this.password
            }
          }
          this.$router.push('/')
          await this.$store.dispatch('auth/login', sessionParams)
        } catch (error) {
          alert(error.response.data.error.messages)
        }
      }
    }
  }
}
</script>

<style>
.login-title {
  position: absolute;
  width: 144px;
  height: 48px;
  left: 648px;
  top: 200px;
  font-weight: 400;
  font-size: 36px;
  line-height: 133.4%;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
}

.login-form {
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

.login-form-item {
  border-bottom: 1px solid #000000;
}

.login-form-item-title {
  width: 100px;
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

.login-form-item-input {
  width: 480px;
  border: none;
}

.login-btn {
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

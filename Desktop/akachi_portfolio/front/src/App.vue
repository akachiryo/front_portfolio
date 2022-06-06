<template>
  <div id="app">
    <AppHeader />
    <main>
      <wrapper>
        <router-view />
      </wrapper>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0px;
  position: absolute;
  width: 1440px;
  height: 1278px;
  left: 0px;
  top: 120px;
}

wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 120px;
  width: 1046px;
  height: 1118px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
</style>

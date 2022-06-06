import Vue from 'vue'
import Vuex from 'vuex'
// import auth from './modules/auth';
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules: {
  //   auth,
  // },
  //   plugins: [createPersistedState(
  //     { // ストレージのキーを指定。デフォルトではvuex
  //       key: 'anyGreatApp',

  //       // 管理対象のステートを指定。pathsを書かない時は`modules`に書いたモジュールに含まれるステート全て。`[]`の時はどれも保存されない
  //       // paths: [
  //       //   'auth.isLoggedIn',
  //       //   'master.dataSelected'
  //       // ],

  //       // ストレージの種類を指定する。デフォルトではローカルストレージ
  //       storage: window.sessionStrage
  //     }
  //   )]
})

export default store

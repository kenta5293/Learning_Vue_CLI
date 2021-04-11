import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// * 싱글 파일 컴포넌트 (Single File Component) *
// 전역적으로 컴포넌트를 등록하고 싶을 때에는,
// Vue인스턴스가 생성되기 전에 컴포넌트를 생성하면 된다.
// 허나, Vue CLI를 이용해서 Vue 프로젝트를 할 때에는
// .vue파일을 만들고, 거기에 컴포넌트를 만들어서 작업한다.

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

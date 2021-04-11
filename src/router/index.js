import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// Vue.js에서는 vue-router를 이용해서, 화면을 이동하게 해준다.
// 처음 열리는 html은 'public/index.html' 하나로, 자바스크립트를 이용하여 컴포넌트를 바꾸면서,
// 페이지가 바뀌는 것 처럼 보인다. 이를 '싱글 페이지 어플리케이션' 즉 "SPA" 라고 한다.

Vue.use(VueRouter)

const routes = [
  {
    // Object 안에는 3개의 속성이 있음.
    path: '/',  // path는 URL에 들어가는 주소.
    name: 'Home',  // name은 중복되지 않게 정해주면 된다.
    component: Home  // Component에는 이름대로 해당 주소로 이동했을 때 보일 Component를 지정해주면 된다.
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

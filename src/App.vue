<template>
  <div id="app">
    <div id="nav">
      <!-- <a /> 대신 <router-link /> 이용하여 페이지 이동을 할 수 있다. -->
      <!-- 또, to 라는 속성에 route에서 작성한 path 값을 넣어야 한다. -->
      <!-- 브라우저에서는 <a />로 바뀌게 된다. -->
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

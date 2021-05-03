<template>
  <div>
    <div id="app">
      <h2>Single Page Application</h2> <hr>
      <router-link to='/' class="router-link">Home Page</router-link>
      <router-link to='/user' class="router-link">User Page</router-link>
      <router-link to='/record' class="router-link">Record Page</router-link>
      <hr> <router-view/> <hr>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link {
  padding: 20px;
}
</style>

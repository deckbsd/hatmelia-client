<template>
  <div id="app">
    <img src="./assets/favicon.png">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from './pages/Home.vue'
export default {
  name: 'app',
  components: {
    HomePage: HomePage
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.center {
  margin: auto;
  width: 70%;
  padding: 10px;
  text-align: center;
}
.right {
  margin: auto;
  width: 50%;
  padding: 10px;
  text-align: right;
}

.error {
  color: red;
  font-weight: bold;
}
</style>

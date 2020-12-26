<template>
  <div id="App">
    <h1>Todo application</h1>
    <hr />
    <!-- <todo-list /> -->
    <!--✅ -->
    <!-- we must listen our custom event on that component in which implement custom event  -->

    <!-- <Home /> -->
    <!--✅ -->
    <router-view></router-view>
    <!-- in here will be render our components (some page)-->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

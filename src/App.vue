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
//@ - indicate src
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
// import Home from "@/views/Home.vue";

// import TodoList from './components/TodoList.vue';//work

export default {
  name: "App",
  data() {
    return {
      todos: [],
    };
  },
  components: {
    //Component registration
    // Home,
    TodoList, //TodoList: TodoList
    AddTodo,
  },

  //# LIFECYCLE HOOKS - work with server - we can do request when component rendered. (componentDidMount - mounted)
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos/?_limit=7")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
      });
  },
  methods: {
    removeTodo(todoId) {
      // console.log("todoId 2", todoId);
      //#implement new custom event for pas to top (for correct render).
      // this.$emit("remove-todo", todoId); //another remove-todo

      // console.log("this.todos", this.todos);
      this.todos = this.todos.filter((item) => item.id !== todoId);
    },
    addedTodo(newTodo) {
      console.log("newTodo", newTodo);
      this.todos.push(newTodo);
    },
  },
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

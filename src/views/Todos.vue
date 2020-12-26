<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr />
    <AddTodo @added-todo="addedTodo" />
    <!-- TodoList this component will be renderd when todos.length are  true, that is todos.length not 0. -->
    <Loader v-if="isLoading" />
    <TodoList
      v-else-if="todos.length"
      :todos="todos"
      v-on:remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
//@ - indicate src
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from "@/components/Loader.vue";

// import TodoList from './components/TodoList.vue';//work

export default {
  name: "App",
  data() {
    return {
      todos: [],
      isLoading: true,
    };
  },
  components: {
    //Component registration
    Loader,
    AddTodo,
    TodoList, //TodoList: TodoList
  },

  //# LIFECYCLE HOOKS - work with server - we can do request when component rendered. (componentDidMount - mounted)
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos/?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.isLoading = false;
        }, 1000);
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
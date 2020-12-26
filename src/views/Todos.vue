<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr />

    <AddTodo @added-todo="addedTodo" />
    <!-- inline styled in vue -->
    <div :style="{ padding: '10px' }">
      <select v-model="filterType">
        <option value="all">All</option>
        <option value="complted">complted</option>
        <option value="notCompleted">not completed</option>
      </select>
    </div>
    <!-- TodoList this component will be renderd when todos.length are  true, that is todos.length not 0. -->
    <Loader v-if="isLoading" />
    <!--not filtered todos-->
    <!-- <TodoList
      v-else-if="todos.length"
      :todos="todos"
      v-on:remove-todo="removeTodo"
    /> -->
    <!--filtered todos with computed funstion-->
    <TodoList
      v-else-if="filteredTodo.length"
      :todos="filteredTodo"
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
      filterType: "all",
    };
  },
  components: {
    //Component registration
    Loader,
    AddTodo,
    TodoList, //TodoList: TodoList
  },

  computed: {
    filteredTodo() {
      const filterType = this.filterType; //acced value of every option in select
      console.log("filterType", filterType);
      if (filterType === "all") {
        return this.todos;
      } else if (filterType === "complted") {
        return this.todos.filter((t) => t.completed);
      }
      //not completed
      else {
        return this.todos.filter((t) => !t.completed);
      }
    },
  },

  //# LIFECYCLE HOOKS - work with server - we can do request when component rendered. (componentDidMount - mounted)
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos/?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        // console.log("json", json);
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
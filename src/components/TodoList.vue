<template>
  <div>
    <ul>
      <!-- <li>todo 1</li> -->
      <!--  {{todos}} - interpolatio -->

      <!--# v-bind directive -  When dynamically binding attributes -->
      <!-- # we must specifya unquie key for every TodoItem
        1. pass unque key
        2. pass item of list
      -->
      <!-- For listen custom event in child compoont(TodoITem), we register event In TodoItem, now we implement new remove-todo custom event and pass it to to top. -->
      <!-- Երբ, որ մենք export ենք անում կոմպոնենտը, բացի կոմպոնենտից արտհանվում է նաև իրան կցված բոլոչ մեթոդները, remove-todo բացառություն չէ։ -->
      <TodoItem
        v-for="(todo, index) of todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
        str="hello from TodoItem"
        :index="index"
        v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
//# After create TodoItem we must it register in TodoList, for can use  it in template
import TodoItem from "@/components/TodoItem";

export default {
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeTodo(todoId) {
      //   console.log("todoId", todoId);
      //#implement new custom event for pas to top (for correct render).
      this.$emit("remove-todo", todoId); //another remove-todo
    },
  },
};
</script>


<!--#<style scoped> -  will allow this style to be a view only inside this component--> 
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

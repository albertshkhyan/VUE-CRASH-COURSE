<!-- GET VALUE FROM INPUT - for thsi we use models. (v-model) 

Work with forms
 * To work with input elements, in particular, with input, select, textarea elements, the v-model directive is used, which establishes a two-way binding between the input element and a property of the Vue object. However, v-model ignores the values of the value, checked, and selected attributes of the input elements.
 Для работы с элементами ввода, в частности, с элементами input, select, textarea, применяется директива v-model, которая устанавливает двустороннюю привязку между элементом ввода и свойством объекта Vue. При этом v-model игнорирует значения атрибутов value, checked и selected, которые имеются у элементов ввода.
-->

<template>
  <form action="">
    <!-- v-model="todo" - todoTitle we register in data, for can clear value of todoTiel field -->
    <input placeholder="Create todo" v-model="todoTitle" type="text" />
    <!-- without v-on we can use short syntax @ 
        * click.prevent - event.preventDefault()
        -->
    <button @click.prevent="handleSubmit">Create Todo</button>
  </form>
</template>


<script>
//# we not expeort this AddTodo component because it by default exported, but we must export his data
export default {
  data() {
    return {
      todoTitle: "", //
    };
  },
  methods: {
    handleSubmit() {
      //get value when click on Createa stroe button with v-model
      //   console.log("Submited! - use v-model=todo", this.todo);
      //   console.log("this.todo.trim()", this.todo.trim());
      if (this.todoTitle.trim()) {
        //for remove spaced
        const newTodo = {
          id: Date.now(),
          title: this.todoTitle,
          completed: false,
        };
        //# we need to inform about the component that we have added a new todo (with custom event)
        //## with custom component we can inform parent componetn that in child we have change
        console.log("emit");
        this.$emit("added-todo", newTodo);
        //#after add new todo we clear value of current field
        this.todoTitle = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  padding: 1rem 0;
}
input {
  width: 400px;
}
</style>
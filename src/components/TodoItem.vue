<template>
  <div>
    <!-- {{ str }} -->
    <!-- {{ todos }} -->

    <!-- ITERATION ON ARRAY -->
    <!-- {{ todo }} -->
    <li>
      <!-- To dynamically install or remove CSS classes, you can pass an object to the v-bind: class directive: -->
      <div v-bind:class="{ done: todo.completed }">
        <input type="checkbox" v-on:change="hanelChange(todo)" />
        {{ index + 1 }} {{ todo.title | uppercaseTitle }}
      </div>
      <!-- CUTOM EVENTS with $emit("eventName", pass argumetns) - when triger  remove-todo event, we can triger it in parent component. 
      We can handle remove-todo in parent component. 
        * we pass id to top (like stete up in react) for correct render.
      -->
      <button class="bt-rm" v-on:click="$emit('remove-todo', todo.id)">
        &times;
      </button>
    </li>
  </div>
</template>


<script>
//in here we must say that we accept todos data.
export default {
  //#1
  //   props: ["todos", "str"],
  //## or we  can typeing props (VALIDATION OF PROPS)
  //#2

  //   props: {
  //     str: String,
  //     todos: Array,
  //   },

  props: {
    str: String,
    // item: Object,//? not requred props
    //# requred pros
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  methods: {
    hanelChange(todo) {
      //   console.log(todo);
      //   console.log("todo.completed", todo.completed);
      todo.completed = !todo.completed;
    },
  },
  filters: {
    uppercaseTitle(value) {
      console.log("value of filter fn - ", value);
      //# now in here we can transform values. before render in template we transform data.
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  margin-bottom: 10px;
}
.bt-rm {
  background: red;
  border-radius: 50%;
  color: #fff;
}
input {
  margin-right: 1rem;
}

/**dynamic class */
.done {
  text-decoration: line-through;
}
</style>
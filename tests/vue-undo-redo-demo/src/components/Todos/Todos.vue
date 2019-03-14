<template>
  <div>
    <styled-button color="green" class="Button" id="post" @click="$emit('postNewTodo')">Add</styled-button>
    <button class="Button" id="undo" :disabled="!canUndo" @click="$emit('undo')">Undo</button>
    <button class="Button" id="redo" :disabled="!canRedo" @click="$emit('redo')">Redo</button>
    <h4>{{ label }}</h4>
    <ol>
      <li v-for="(todo, i) in list" :key="i">{{ todo }}</li>
    </ol>
  </div>
</template>

<script>
import Vue from "vue";
import styled from "vue-styled-components";

const VUEJS_GREEN = "rgb(55, 173, 112)"
const StyledButton = styled("button", { color: String })`
  border: 2px solid;
  border-radius: 3px;
  color: ${({ color }) => color === "green" ? VUEJS_GREEN : ""};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;

export default Vue.extend({
  components: { StyledButton },
  props: {
    list: {
      type: Array,
      required: true
    },
    canUndo: {
      type: Boolean,
      required: true
    },
    canRedo: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
})
</script>

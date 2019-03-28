<template>
  <div>
    <br>
    <span>{{ picked }}</span>
    <br>
    <input type="radio" id="one" value="Unstyled" v-model="picked">
    <label for="one">Unstyled</label>
    <input type="radio" id="two" value="Styled" v-model="picked">
    <label for="two">Styled</label>
    <br>
    <template v-if="picked === 'Unstyled'">
      <button id="post" @click="$emit('postNewTodo')">Add</button>
      <button color="secondary" id="undo" :disabled="!canUndo" @click="$emit('undo')">Undo</button>
      <button color="secondary" id="redo" :disabled="!canRedo" @click="$emit('redo')">Redo</button>
    </template>
    <template v-else>
      <btn class="Button" id="post" @click="$emit('postNewTodo')">Add</btn>
      
      <!-- Ideally, styled-components should able to extend elements with attributes (e.g. className):
      
      !Not supported in vue-styled-components yet
      styled.button.attr({
        className: "Button"
      })`...css`

       -->
      
      <btn class="Button" color="secondary" id="undo" :disabled="!canUndo" @click="$emit('undo')">Undo</btn>
      <btn class="Button" color="secondary" id="redo" :disabled="!canRedo" @click="$emit('redo')">Redo</btn>
      
      <!-- styled-components could be created to accept themed attributes instead:
      
      https://github.com/styled-components/vue-styled-components#theming
      <theme-provider theme="myTheme">
        <btn secondary|primary id="redo" ... />
      </theme-provider>
      
       -->
    </template>
    <h4>{{ label }}</h4>
    <ol>
      <li v-for="(todo, i) in list" :key="i">{{ todo }}</li>
    </ol>
  </div>
</template>

<script>
import Vue from "vue";
import Btn from "../Btn.styled.js";
// import Btn from "../Btn";

export default Vue.extend({
  components: { Btn },
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
  },
  data() {
    return {
      picked: "Unstyled"
    };
  }
});
</script>

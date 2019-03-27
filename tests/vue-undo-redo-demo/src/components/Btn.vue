<template>
  <button :class="`Btn ${colorClass}`" @click="$emit('click')"><slot /></button>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Btn",
  props: {
    color: {
      type: String,
      default: "primary"
    }
  },
  computed: {
    colorClass() {
      if (this.color === "primary") {
        return "u-color--green";
      } else if (this.color === "secondary") {
        return "u-color--blueGreen";
      }
      return "";
    }
  }
});
</script>

<style lang="postcss">
@import "../utils/utils-colors.css";
</style>

<style lang="postcss" scoped>
.Btn {
  border: 2px solid;
  border-radius: 3px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
}
</style>

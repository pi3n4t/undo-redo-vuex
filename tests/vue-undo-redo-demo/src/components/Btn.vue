<template>
  <button :class="`Btn ${colorClass}`" @click="$emit('click')"><slot /></button>
</template>

<script>
import Vue from "vue";
import { getColorProp } from "@/utils/themeColors";

const getColorClass = getColorProp("class");

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
      const { color } = this;
      return getColorClass({ color });
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

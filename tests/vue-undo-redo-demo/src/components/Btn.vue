<template>
  <button class="Button" v-html="innerHTML || text" @click="$emit('click')"/>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    text: {
      type: String
    },
    innerHTML: {
      type: String
    }
  }
});
</script>

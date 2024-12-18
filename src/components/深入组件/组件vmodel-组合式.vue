<script setup>
import { watch, watchEffect } from "vue";
const model = defineModel(); // 3.4+

function update() {
  console.log("model", model);
  model.value++;
}
</script>

<template>
  <div>
    <div>Parent bound v-model is: {{ model }}</div>
    <button @click="update">Increment</button>
  </div>
</template>

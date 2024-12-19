<script setup>
import { watch, watchEffect } from "vue";
// const model = defineModel(); // 3.4+
// console.log('model', model);

// 等价于
const props = defineProps(['modelValue'])
console.log('props',props.modelValue);
const emit = defineEmits(['update:modelValue'])

// function update() {
//   console.log("model", model);
//   model.value++;
// }
</script>

<template>
  <!-- <div>
    <div>Parent bound v-model is: {{ model }}</div>
    <button @click="update">Increment</button>
  </div> -->
  <div>
    <p>{{ modelValue }}</p>
    <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
  </div>
 
</template>

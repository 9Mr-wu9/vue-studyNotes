<script setup>
// 组合式API实现鼠标跟踪案例
import { ref, onMounted, onUnmounted } from "vue";
// import { ref, isRef, unref, watchEffect } from 'vue'

const x = ref(0);
const y = ref(0);

function update(event) {
  x.value = event.pageX;
  y.value = event.pageY;
}
onMounted(() => window.addEventListener("mousemove", update));
onUnmounted(() => window.addEventListener("mousemove", update));
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>

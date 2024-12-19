<!-- <script setup>
import { ref, onMounted, onUnmounted } from "vue";

const x = ref(0);
const y = ref(0);

function update(event) {
  x.value = event.pageX;
  y.value = event.pageY;
}
onMounted(() => window.addEventListener("mousemove", update));
onUnmounted(() => window.addEventListener("mousemove", update));
</script>

<template>
  <div>Mouse position is at: {{ x }}, {{ y }}</div>
</template> -->

<!-- 使用组合式函数 -->
<!-- 组合式函数：使用组合式API封装复用有状态逻辑的函数 -->
<!-- 组合式函数可以使用一个或多个其它组合式函数 -->
<script setup>
import { useMouse } from "./useHooks/useMouse";
const { x, y } = useMouse(); // 调用useMouse的每个组件实例都是创建其独有的状态拷贝，状态不会互相影响
// 这里为什么提示：All destructured elements are unused
</script>

<template>
  <div>Mouse position is at: {{ x }}, {{ y }}</div>
</template>

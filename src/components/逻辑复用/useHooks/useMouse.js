// import { ref, onMounted, onUnmounted } from "vue";
import { ref } from "vue";
import { useEventListener } from "./useEvent";

// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
  // 被组合式函数封装和管理的状态
  const x = ref(0);
  const y = ref(0);

  // 组合式函数可以随时更改其状态。
  // function update(event) {
  //   x.value = event.pageX;
  //   y.value = event.pageY;
  // }

  // 一个组合式函数也可以挂靠在所属组件的生命周期上
  // onMounted(() => window.addEventListener('mousemove', update));
  // onUnmounted(() => window.addEventListener('mousemove', update));
  useEventListener(window, "mousemove", (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  // 通过返回值暴露所管理的状态
  return { x, y };
}

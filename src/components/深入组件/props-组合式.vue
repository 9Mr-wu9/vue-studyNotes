<script setup lang="ts">
import { watch, watchEffect } from "vue";
/**
 * props 声明
 */
// const props = defineProps(["foo"]); // 字符串数组
// const props = defineProps({ // 对象形式
//     foo: String,
// })
// const props = defineProps<{
//   // 搭配ts
//   foo?: string;
//   likes?: number;
// }>();
// console.log(props);

/**
 * props解构
 */
// const { foo } = defineProps({ foo: String });
// const { foo = 'hello' } = defineProps<{ foo?: string }>()

// watchEffect(() => {
// //   console.log("watchEffect props", props);
// // 在3.5前只执行一次
// // 在3.5中， 'foo' props 发生变化则会重新执行回调     待验证效果
//   console.log("foo", foo);
// });

/**
 * 将解构的 props 传递到函数中
 */
// const { foo } = defineProps({ foo: String });
const props = defineProps({ foo: String });

watch(
  // () => foo,
  () => props.foo,
  () => {
    console.log("foo", props.foo);
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div>props-组合式</div>
</template>

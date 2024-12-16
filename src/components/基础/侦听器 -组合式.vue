<script setup>
import {
  reactive,
  ref,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
} from "vue";

/**
 * watch：用于显式地侦听特定的数据源，并在数据源发生变化时执行回调函数
 * 1.watch的第一个参数类型：一个ref、一个响应式对象、一个getter函数、多个数据源组成的数组
 */
const x = ref(0);
const y = ref(0);

// getter 函数
watch(
  () => x.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);
// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
});

// ref
const obj = reactive({ count: 0, innerObj: { id: 1 } });
watch(
  obj,
  (newValue, oldValue) => {
    console.log("newValue", newValue);
    console.log("oldValue", oldValue);
    console.log("newValue === oldValue", newValue === oldValue); // true
    // 传入一个响应式对象，会隐式创建一个深层监听器，该回调函数在所有嵌套的属性变更时触发
  },
  {
    deep: true, // 深度监听，在 Vue 3.5+ 中，deep 选项还可以是一个数字，表示最大遍历深度——即 Vue 应该遍历对象嵌套属性的级数。
    immediate: true, // watch 默认为懒执行，为true表示立即执行
    once: true, // 表示仅执行一次
  }
);
obj.count++;
obj.innerObj.id++;

/**
 * watchEffect：用于自动追踪其依赖的数据源，并在依赖的数据源发生变化时重新执行整个函数
 * 只有一个参数——回调参数；自动追踪依赖，无需手动指定；无法直接访问到新旧值，但可以通过闭包捕获旧值
 * watchEffect 仅会在其同步执行期间，才追踪依赖。在使用异步回调时，只有在第一个 await 正常工作前访问到的属性才会被追踪。
 */
watchEffect(() => {
  console.log(`watchEffect：x is ${x.value} and y is ${y.value}`);
});

/**
 * 清除副作
 * vue3.5+可使用 onWatcherCleanup() 方法，必须在 watchEffect 或 watch 回调的同步执行期间使用
 * watch 第3个参数可以是一个配置项，也可以是 onCleanup  回调函数，用来做清除操作；watchEffect 函数的第一个参数
 */

/**
 * 回调时机：默认情况下，侦听器回调会在父组件更新 (如有) 之后、所属组件的 DOM 更新之前被调用
 * 如果想在侦听器回调中能访问被 Vue 更新之后的所属组件的 DOM，需要指明 flush: 'post'
 */
watch(source, callback, {
  // flush: "post", // 在侦听器回调中能访问被 Vue 更新之后的所属组件的 DOM
  flush: "sync", // 在 Vue 进行任何更新之前触发
});
watchEffect(callback, {
  flush: "post",
});
watchPostEffect(() => {});
// 同步侦听器不会进行批处理，每当检测到响应式数据发生变化时就会触发。
// 可以使用它来监视简单的布尔值，但应避免在可能多次同步修改的数据源 (如数组) 上使用
watchSyncEffect(() => {});

/**
 * 停止侦听器
 * 在 setup() 或 <script setup> 中用 同步语句 创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止
 * 如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，必须手动停止它，以防内存泄漏
 */
</script>

<template>
  <div>
    <p @click="x++">x:{{ x }}</p>
    <p @click="y++">y:{{ y }}</p>
  </div>
</template>

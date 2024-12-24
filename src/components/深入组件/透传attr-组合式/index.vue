<script setup>
import { watch, watchEffect } from "vue";
import BaseButton from './透传Attributes-子组件.vue';
// “透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的
// attribute 或者 v-on 事件监听器。最常见的例子就是 class、style 和 id
// Attributes 继承：当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上
// const onClick = () => {
//   console.log("子click");
// };
</script>

<template>
  <!-- 父组件的 onClick 事件被透传给子组件的根元素，所以点击div时，父组件的 onClick 事件也被触发 -->
  <!-- <div @click="onClick">
    <button>click me</button>
  </div> -->
  <!-- 在根节点上渲染另外一个组件 -->
  <BaseButton />
</template>

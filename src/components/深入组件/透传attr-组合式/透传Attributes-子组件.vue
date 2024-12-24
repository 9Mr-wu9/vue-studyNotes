<script setup>
// 透传Attributes 继承禁用
defineOptions({
  // vue3.3+
  // 最常见的需要禁用 attribute 继承的场景就是 attribute 需要应用在根节点以外的其他元素上
  inheritAttrs: false,
});

// const props = defineProps(["prop"]);
// console.log("孙组件props", props);
</script>

<template>
  <button>click me</button>
  <!-- 通过 $attrs 访问 透传Attributes -->
  <span>{{ $attrs }}</span>
</template>

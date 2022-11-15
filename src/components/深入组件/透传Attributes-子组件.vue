<script>
export default {
  // Attributes 继承：
  //   当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上
  data() {
    return {};
  },
  // 禁用 Attributes 继承
  // inheritAttrs: false,
  methods: {
    onClick() {
      console.log("子组件onClick");
      console.log('$attrs',this.$attrs.onClick);
    },
  },
};
</script>

<template>
  <!-- <div> -->
  <button class="btn-sun" @click="onClick">click me</button>
  <span>{{ $attrs }}</span>
  <!-- </div> -->
</template>

<style></style>

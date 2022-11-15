<script>
import BaseBtn from "./透传Attributes-子组件.vue";
export default {
  // “透传 attribute”指的是传递给一个组件，却没有被该组件声明为 props 或 emits 的
  // attribute 或者 v-on 事件监听器。最常见的例子就是 class、style 和 id

  // Attributes 继承：当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上
  //
  data() {
    return {};
  },
  props: ["btn-zu btn-zu1"],
  components: {
    BaseBtn,
  },
  methods: {
    onClick() {
      console.log("父组件onClick");
    },
  },
};
</script>

<template>
  <!-- 父子组件的点击事件都会被触发 -->
  <BaseBtn class="btn-fu" @click="onClick" />
</template>

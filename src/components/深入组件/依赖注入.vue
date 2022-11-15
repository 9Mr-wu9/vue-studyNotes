<script>
import { computed } from "vue";
import Subdependencies from "./依赖注入子组件.vue";
export default {
  data() {
    return {
      msg: "hello",
    };
  },
  // 依赖注入，注入不会保持响应性
  // provide: {
  //   msg: 'hello', // 这里访问不到 this
  // },
  provide() {
    //   使用函数形式，可以访问到 this
    return {
      // msg: this.msg,
      msg: computed(() => this.msg), // 会带 "" ？
      //   解决方法：设置 app.config.unwrapInjectedRef = true，
      //   以保证注入会自动解包这个计算属性，在 Vue 3.3版本之后会成为默认行为
    };
  },

  // 应用层 Provide：
  // import { createApp } from 'vue'
  // const app = createApp({})
  // app.provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
  components: { Subdependencies },
  methods: {},
};
</script>

<template>
  <Subdependencies />
</template>

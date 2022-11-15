<script>
import { ref, toRef, toRefs, h } from "vue";

// export default {
//   // 在 setup() 函数中返回的对象会暴露给模板和组件实例
//   // 在模板中访问从 setup 返回的 ref 时，它会自动浅层解包
//   // setup 函数的第一个参数是组件的 props，第二个参数是一个 Setup 上下文对象
//   setup(props, context) {
// 可以在选项式 API 中访问组合式 API 暴露的值，但反过来则不行
// console.log("this", this); // undefined
//     // const { title } = props; // 解构 props 对象，被解构的变量会丢失响应性
//     // 使用 toRef,toRefs 工具函数保持响应性
//     // 将 props 转为一个全是 ref 的对象，再解构
//     const { title } = toRefs(props);
//     // console.log("title", title.value);
//     const title1 = toRef(props, "title");
//     // console.log("title1", title1.value);

//     // 透传 Attributes（非响应式的对象，等价于 $attrs）
//     console.log(context.attrs);
//     // 插槽（非响应式的对象，等价于 $slots）
//     console.log(context.slots);
//     // 触发事件（函数，等价于 $emit）
//     console.log(context.emit);
//     // 暴露公共属性（函数）
//     console.log(context.expose);

//     const count = ref(0);
//     return {
//       count,
//     };
//   },
//   props: {
//     title: String,
//   },
// };

// 和渲染函数一起使用
export default {
  // setup 也可以返回一个渲染函数，这样会阻止返回其它东西
  setup(props, { expose }) {
    const count = ref(0);
    return () => h("div", count.value);
  },
};
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>

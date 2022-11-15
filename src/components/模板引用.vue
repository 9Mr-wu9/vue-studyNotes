<script>
export default {
  // expose 选项可以用于限制对子组件实例的访问：这里父组件通过模板引用访问到子组件实例后，
  // 仅能访问 publicData 和 publicMethod
  expose: ["publicData", "publicMethod"],
  data() {
    return {
      // v-for中的模板引用
      list: [1, 2, 3],
      // expose
      publicData: "foo",
      privateData: "bar",
    };
  },
  // 只可以在组件挂载后才能访问模板引用
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    refMethod(el) {
      console.log("el", el);
    },
    publicMethod() {
      /* ... */
    },
    privateMethod() {
      /* ... */
    },
  },
};
</script>

<template>
  <div class="">
    <input type="text" ref="input" />
    <!-- v-for中的模板引用 -->
    <!-- 相应的引用中包含的值是一个数组,ref 数组并不保证与源数组相同的顺序 -->
    <li v-for="item in list" :key="item" ref="liItem">{{ item }}</li>
    <!-- 函数模板引用 -->
    <!-- 除了使用字符串值作名字，ref attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数：
<input :ref="(el) => { /* 将 el 赋值给一个数据属性或 ref 变量 */ }">
注意我们这里需要使用动态的 :ref 绑定才能够传入一个函数。当绑定的元素被卸载时，函数也会被调用一次，此时的 el 参数会是 null。你当然也可以绑定一个组件方法而不是内联函数 -->
    <input type="text" :ref="(el) => refMethod(el)" />
    <!-- 如果子组件使用选项式API，则被引用的组件实例和该子组件的 this 完全一致 -->
  </div>
</template>

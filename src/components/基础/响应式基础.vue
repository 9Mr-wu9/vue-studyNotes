<script>
import { nextTick } from "vue";
import { debounce } from "lodash-es";
export default {
  // 选项式API：data选项声明组件的响应式状态
  data() {
    return {
      count: 2,
      // 响应式代理 vs. 原始值
      someObject: {},
      // 声明方法
      num: 0,
      // 深层响应性；也可以直接创建一个浅层响应式对象,它们仅在顶层具有响应性，一般仅在某些特殊场景中需要:shallowReadonly
      obj: {
        nested: { count: 0 },
        arr: ["foo", "bar"],
      },
    };
  },

  // 组件复用，要保持每个组件实例的防抖函数都彼此独立，我们可以改为在 created 生命周期钩子中创建这个预置防抖的函数
  created() {
    // 在某些情况下，我们可能需要动态地创建一个方法函数，比如创建一个预置防抖的事件处理器
    // 每个实例都有了自己的预置防抖的处理函数
    this.debouncedClick = debounce(this.click, 500);
  },
  unmounted() {
    // 在组件卸载时清除掉防抖计时器
    this.debouncedClick.cancel();
  },

  mounted() {
    this.count = 3; // 数据属性也可以被更改

    const newObject = { a: 1 }; // 与 Vue 2 不同的是，这里原始的 newObject 不会变为响应式
    this.someObject = newObject;
    console.log("newObject", newObject);
    console.log("someObject", this.someObject); // 此值已经是原来的 newObject 的一个响应式代理
    console.log(this.someObject === newObject); // false

    this.increment();
  },

  // 声明方法的对象，Vue 为 methods 中的方法绑定永远指向组件实例的 this，在 methods 不要使用箭头函数
  methods: {
    increment() {
      this.num++;

      // DOM更新时机：更新响应式状态，DOM也会自动更新，但不是同步的
      nextTick(() => {
        // 访问更新后的DOM
      });
    },
    mutateDeeply() {
      this.obj.nested.count++;
      this.obj.arr.push("baz");
    },

    click() {},
  },
};
</script>

<template>
  <div>
    <!-- 声明方法 -->
    <button @click="increment">{{ num }}</button>
    <hr />
    <!-- 深层响应性 -->
    <button @click="mutateDeeply">{{ obj.nested.count }}</button>
  </div>
</template>

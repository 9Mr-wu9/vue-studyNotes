<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  // 写上prop但不传值，会隐式转换为true；prop是只读的(单向数据流)
  // 字符串数组声明
  // props: ["title", "another"],
  // 对象声明-props校验：如果props与预期类型不符合会在浏览器控制台抛出警告
  props: {
    title: String, // key是prop名称，值是prop预期类型的构造函数
    another: [String, Number], // 多种可能的类型
    propC: {
      type: String,
      // default: "propC",
      // 对象或者数组应当用工厂函数返回。
      // 工厂函数会收到组件所接收的原始 props 作为参数
      default(rawProps) {
        console.log("rawProps", rawProps);
        return "abc";
      },
      required: false,
      // 其它
    },
  },
  // emits：该选项声明需要抛出的事件
  // 声明了一个组件可能触发的所有事件，还可以对事件的参数进行验证。同时，这还可以让 Vue 避免将它们作为原生事件监听器隐式地应用于子组件的根元素
  // 如果一个原生事件的名字 (例如 click) 被定义在 emits 选项中，则监听器只会监听组件触发的 click 事件而不会再响应原生的 click 事件
  // emits: ["enlarge-text"], // 可选
  emits: {}, // 事件校验也可以是个对象
};
</script>

<template>
  <div>
    <button @click="count++">You clicked me {{ count }} times.</button>
    <!-- props -->
    <h4>{{ title }}</h4>
    <h4>{{ this.$props.another }}</h4>
    <h4>{{ propC }}</h4>
    <!-- 子组件通过调用内置的 $emit 方法，通过传入事件名称来抛出一个事件 -->
    <button @click="$emit('enlarge-text', 0.1)">Enlarge text</button>
  </div>
</template>

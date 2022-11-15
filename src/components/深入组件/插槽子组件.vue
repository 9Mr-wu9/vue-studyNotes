<script>
export default {
  data() {
    return {
      greetingMessage: "greetingMessage",
      items: [
        { body: "Vue", username: "zhangsan", likes: "10" },
        { body: "React", username: "lisi", likes: "20" },
      ],
    };
  },

  components: {},
  methods: {},
};
</script>

<template>
  <!-- 插槽出口 -->
  <!-- 插槽的默认内容:父组件没有提供任何内容将显示默认内容 -->
  <!-- <slot> 默认内容 </slot> -->

  <!-- 具名插槽模板 -->
  <!-- <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div> -->

  <!-- 默认作用域插槽模板 -->
  <!-- 在插槽出口上传递 attributes -->
  <!-- <div>
    <slot :text="greetingMessage" :count="2"></slot>
  </div> -->

  <!-- 具名作用域插槽模板 -->
  <!-- name attribute不会传递给插槽  -->
  <!-- <slot name="header" message="hello"></slot> -->

  <!-- 高级列表组件案例模板 -->
  <ul>
    <li v-for="item in items" :key="item">
      <slot name="item" v-bind="item"></slot>
    </li>
  </ul>
</template>

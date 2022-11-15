<script>
export default {
  data() {
    return {
      // 基础示例
      author: {
        name: "xiao rong zi",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      // 可写计算属性
      firstName: "Xiao",
      lastName: "Rongzi",
    };
  },

  // 计算属性：
  // 与方法的区别在于：计算属性值会基于其响应式依赖被缓存(依赖更新才会重新计算)
  // 方法调用在重渲染发生时再次执行
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "YES" : "NO";
    },

    fullName: {
      get() {
        // getter应该只做计算，而没有任何副作用，不要在getter中做异步请求或更改DOM
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
  },

  methods: {
    calculateBooksMessage() {
      return this.author.books.length > 0 ? "YES" : "NO";
    },
  },
};
</script>

<template>
  <div>
    <!-- 基础示例 -->
    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? "YES" : "NO" }}</span>
    <!-- 计算属性不带() -->
    <p>{{ publishedBooksMessage }}</p>
    <!-- 方法 -->
    <p>{{ calculateBooksMessage() }}</p>
    <p>{{ fullName }}</p>
  </div>
</template>

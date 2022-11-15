<script>
export default {
  data() {
    return {
      isShow: true,
      items: [{ message: "Foo" }, { message: "Bar" }],
      items1: [
        ["a", "b"],
        ["c", "d"],
      ],
      // v-for与对象：遍历一个对象的所有属性，遍历的顺序会基于对该对象调用 Object.keys() 的返回值来决定
      myObject: {
        title: "Vue",
        author: "xiao rongzi",
        publishAt: "2022-09-09",
      },
      // 数组变化侦测
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((n) => n % 2 === 0);
    },
  },
};
</script>

<template>
  <!-- 解构赋值 -->
  <!-- in 可以用 of 代替 -->
  <p v-for="({ message }, index) in items" :key="message">
    {{ index }}-{{ message }}
  </p>
  <!-- 多层嵌套 -->
  <p v-for="childItem in items1" :key="childItem">
    <span v-for="(item, index) in childItem" :key="item">
      {{ item }}-{{ index }}
    </span>
  </p>
  <!-- v-for与对象 -->
  <!-- 遍历的顺序会基于对该对象调用 Object.keys() 的返回值来决定 -->
  <!-- 三个参数分别是属性值、属性名、索引值 -->
  <ul>
    <li v-for="(value, key, index) in myObject" :key="value">
      {{ index }}-{{ key }}:{{ value }}
    </li>
  </ul>
  <!-- 使用范围值，范围值要是正整数，从1开始 -->
  <p v-for="(n, nIndex) in 5" :key="n">{{ nIndex }}-{{ n }}</p>
  <!-- <template>上使用v-for -->
  <template v-for="item in items" :key="item">
    <li>{{ item.message }}</li>
  </template>
  <!-- v-for与v-if -->
  <template v-for="item in items" :key="item">
    <p v-if="isShow">{{ item.message }}</p>
  </template>
  <!-- 数组变化侦测 -->
  <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
</template>

<style>
li {
  list-style: none;
}
</style>

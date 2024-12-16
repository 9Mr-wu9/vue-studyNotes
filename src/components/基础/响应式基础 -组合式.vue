<script>
import { ref } from "vue";
export default {
  setup() {
    const value = ref(0);
    console.log("value", value);
    const object = ref({
      id: ref("id1"),
    });
    console.log("object", object);
    const object2 = { id: ref("id2") };
    console.log("object2", typeof object2.id);
    // 解构为顶级属性，在模板中使用,这个顶级属性是相对于谁而言？
    const { id } = object2;
    // 暴露给模板的属性和方法
    return {
      value,
      object,
      object2,
      id,
    };
  },
};
</script>

<template>
  <div>
    <!-- 模板中自动解包 -->
    <div>value：{{ value }}</div>
    <!--  -->
    <div>object.id：{{ object.id }}</div>
    <!-- 页面表现为 "id2",字符串形式，但实际是个对象 -->
    <!-- 文本插值的最终计算值(即{{ }}标签，也会被解包) -->
    <!-- object2.id.vulue："id2" -->
    <div>object2.id：{{ object2.id }}</div>
    <!-- object2.id.vulue：id2 -->
    <div>object2.id.vulue：{{ object2.id.value }}</div>
    <div>id+1：{{ id + 1 }}</div>
  </div>
</template>

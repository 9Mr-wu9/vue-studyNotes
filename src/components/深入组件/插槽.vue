<script>
import Subslots from "./插槽子组件.vue";
export default {
  data() {
    return {
      dynamicSlotName: "dynamicSlotName",
      url: "url",
    };
  },

  components: { Subslots },
  methods: {},
};
</script>

<template>
  <!-- 插槽内容 -->
  <!-- 插槽内容无法访问子组件的数据，可以访问父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的 -->
  <!-- <Subslots>
    <span>333</span>
    click me!
  </Subslots> -->

  <!-- 具名插槽：name，没有name的插槽将命名为 "default"" -->
  <!-- v-slot:插槽名 等价于  #插槽名 -->
  <!-- <Subslots>
    <template v-slot:header><h1>Here might be a page title</h1></template>
    <template #default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>
    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </Subslots> -->

  <!-- 动态插槽 -->
  <!-- <Subslots>
    <template #[dynamicSlotName]></template>
  </Subslots> -->

  <!-- 默认作用域插槽 -->
  <!-- 在某些情况下，插槽内容想要同时访问父组件域内和子组件域内的数据 -->
  <!-- 默认插槽接收插槽出口传递的 props，可使用解构 -->
  <!-- <Subslots v-slot="slotProps"> -->
  <!-- <Subslots v-slot="{ text, count }"> {{ text }} {{ count }} </Subslots> -->

  <!-- 具名作用域插槽 -->
  <!-- 如果混用具名和默认插槽，需要为默认插槽显式地添加 <template> 标签，尝试直接为组件添加 v-slot 指令将导致编译错误 -->
  <!-- <Subslots>
    <template #header="{ message }">
      {{ message }}
    </template>
  </Subslots> -->

  <!-- 高级列表组件案例 -->
  <Subslots :api-url="url" :per-page="10">
    <template #item="{ body, username, likes }">
      <div>
        <p>{{ body }}</p>
        <p>by {{ username }} {{ likes }} likes</p>
      </div>
    </template>
  </Subslots>
</template>

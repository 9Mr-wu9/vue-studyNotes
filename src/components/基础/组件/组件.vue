<script>
import ButtonCounter from "./组件-子组件.vue";
import Slot from "./插槽子组件.vue";
export default {
  data() {
    return {
      post: [
        { id: 0, title: "vue", another: "others1" },
        { id: 1, title: "react", another: "others2" },
        { id: 2, title: "angular", another: "others3" },
      ],
      // 监听事件
      postFontSize: 1,
      // v-model
      searchText: "searchText",
    };
  },
  // 将导入的组件暴露给模板，需要在 components 选项上注册它，另一种方式是全局注册，无需额外导入
  components: {
    ButtonCounter,
    Slot,
  },
  methods: {
    enlargeText(n) {
      console.log("n", n);
      this.postFontSize += n;
    },
  },
};
</script>

<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <!-- 调用多次，每个组件都是一个新的实例，维护着自己的状态，互不干扰 -->
    <!-- 在组件上声明props，传递给子组件 -->
    <ButtonCounter
      v-for="item in post"
      :key="item.id"
      :title="item.title"
      :another="item.another"
      @enlarge-text="enlargeText"
    />
    <!-- <ButtonCounter title="vue" another="others" /> -->
    <Slot> 插槽内容 </Slot>
    <!-- v-model -->
    <input
      type="text"
      :value="searchText"
      @input="searchText = $event.target.value"
    />
  </div>
</template>

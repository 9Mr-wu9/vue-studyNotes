<script>
export default {
  //   inject: ["msg"], // 数组形式：key与注入的 key相同
  inject: {
    localMsg: {
      // 对象形式，修改别名，
      // from 的值是注入的 key，当别名与注入的 key 相同，此选项可省略
      from: "msg",
      // 声明注入的默认值，必须是对象形式。当没有 provide 时候显示默认值
      default: "default value",
    },
    user: {
      // 对于非基础类型数据，如果创建开销比较大，或是需要确保每个组件实例
      // 需要独立数据的，请使用工厂函数
      default: () => ({ name: "John" }),
    },
  },
};
</script>

<template>
  <div>
    {{ localMsg }}
    <hr />
    {{ user.name }}
  </div>
</template>

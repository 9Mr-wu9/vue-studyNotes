<script>
export default {
  data() {
    return {
      // 内联事件处理器
      count: 0,
      // 方法事件处理器
      name: "Vue.js",
    };
  },

  methods: {
    greet(event) {
      console.log("event", event);
      if (event) {
        console.log(event.target.tagName);
      }
    },
    say(message, e) {
      console.log(message);
      console.log(e);
    },
  },
};
</script>

<template>
  <div>
    <!-- 内联事件处理器 -->
    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>
    <!-- 方法事件处理器 -->
    <button @click="greet">Greet</button>
    <hr />
    <!-- 在内联处理器中调用方法,访问事件参数 -->
    <button @click="(event) => say('111', event)">Say Hello</button>
    <hr />
    <!-- 通过变量 $event 访问 -->
    <button @click="say('222', $event)">Say Bye</button>
    <hr />
    <!-- 事件修饰符 -->
    <!-- 单击事件将停止传递 -->
    <a @click.stop="doThis">doThis</a>

    <!-- 提交事件将不再重新加载页面 -->
    <form @submit.prevent="onSubmit">onSubmit</form>

    <!-- 修饰语可以使用链式书写 -->
    <a @click.stop.prevent="doThat">doThat</a>

    <!-- 也可以只有修饰符 -->
    <form @submit.prevent>只有修饰符</form>

    <!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
    <!-- 例如：事件处理器不来自子元素 -->
    <div @click.self="doThat">doThat...</div>
  </div>
</template>

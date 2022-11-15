<script>
export default {
  data() {
    return {
      // 基本示例
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
    };
  },
  watch: {
    someObject: {
      handler(newValue, oldValue) {},
      deep: true, // 深层侦听
      immediate: true, // 强制立即执行回调
    },
  },

  methods: {
    async getAnswer() {
      this.answer = "Thinking...";
      try {
        const res = await fetch();
      } catch (err) {}
    },
  },
};
</script>

<template></template>

<script>
export default {
  data() {
    return {
      // 文本插值
      msg: "msg",
      // 原始HTML
      rawHtml: '<span style="color: red">This should be red.</span>',
      // Attribute 绑定, v3.4及以上支持同名简写
      dynamicId: "dynamicId",
      isButtonDisabled: false,
      // 动态绑定多个值
      objectOfAttrs: {
        id: "container",
        class: "wrapper",
      },
      // 使用jsvascript表达式
      number: 2,
      ok: false,
      message: "message",
      id: 3,
      // 内置指令
      seen: true,
      url: "https://www.baidu.com/s?ie=UTF-8&wd=%E7%99%BE%E5%BA%A6",
      text: "v-text",
      html: "v-html",
      isShow: Infinity,
      // 动态参数
      attributeName: "href",
    };
  },
  methods: {
    doSomeThing: () => {
      console.log("doSomeThing");
    },
  },
};
</script>

<template>
  <div>
    <!-- 文本插值 -->
    <span>Message:{{ msg }}</span>
    <!-- 原始HTML -->
    <p>Using text interpolation: {{ rawHtml }}</p>
    <div>
      Using v-html directive:
      <p v-html="rawHtml"></p>
    </div>
    <!-- Attribute 绑定 -->
    <div :id="dynamicId">{{ dynamicId }}</div>
    <!-- Attribute 绑定 null | undefined -->
     <!-- class绑定为null，却没被移除？ key不会显示 -->
    <div :id="undefined" :class="null" :style="null" :key="1">Attribute 绑定 null | undefined</div>
    <!-- 布尔型 Attribute -->
    <button :disabled="isButtonDisabled">布尔型 Attribute</button>
    <!-- 动态绑定多个值 -->
    <div :="objectOfAttrs">动态绑定多个值</div>
    <!-- 使用jsvascript表达式 -->
    <div>
      <p>{{ number + 1 }}</p>
      <p>{{ ok ? "YES" : "NO" }}</p>
      <p>{{ message.split("").reverse().join("") }}</p>
      <p :id="`list-${id}`">{{ id }}</p>
    </div>
    <!-- 指令 -->
    <div>
      <p v-if="seen">Now you see me</p>
      <a :href="url">...</a>
      <p v-text="text"></p>
      <p @click="doSomeThing">doSomeThing</p>
      <p>{{ text }}22</p>
      <p v-html="html"></p>
      <p v-show="isShow">isShow</p>
    </div>
    <!-- 动态参数 -->
    <!-- 在指令参数上使用 JavaScript 表达式，需要包含在方括号内 -->
    <!-- 参数限制：动态参数中表达式的值应当是一个字符串，或者是 null。特殊值 null 意为显式移除该绑定。其他非字符串的值会触发警告 -->
    <a :[attributeName]="url">...</a>
  </div>
</template>

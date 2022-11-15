<script>
export default {
  data() {
    return {
      // 绑定对象-内联字面量
      isActive: true,
      hasError: true,
      // 绑定对象-对象
      classObject: {
        active: true,
        "text-danger": true,
      },
      // 绑定对象-计算属性
      isActive1: true,
      error: true,
      // 绑定数组
      activeClass: "active",
      errorClass: "text-danger",
      isActive2: true,
      isActive3: true,
      // 绑定内联样式-内联字面量
      activeColor: "red",
      fontSize: 30,
      // 绑定数组
      baseStyles: {
        fontSize: "20px",
      },
      overridingStyles: {
        color: "red",
      },
    };
  },
  computed: {
    computedClassObj() {
      return {
        active: this.isActive1 && this.error,
        "text-danger": this.error,
      };
    },
  },
};
</script>

<template>
  <div class="foo bar">
    <!-- 绑定对象-内联字面量 -->
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
      绑定对象-内联字面量
    </div>
    <!--  绑定对象-对象 -->
    <div :class="classObject">绑定对象-对象</div>
    <!-- 绑定对象-计算属性 -->
    <div :class="computedClassObj">绑定对象-计算属性</div>

    <!-- 绑定数组 -->
    <div :class="[isActive2 ? activeClass : '', errorClass]">绑定数组</div>
    <!-- 绑定数组-在数组中嵌套对象 -->
    <div :class="[{ active: isActive3 }, errorClass]">
      绑定数组-在数组中嵌套对象
    </div>
    <!-- 绑定内联样式-绑定对象 -->
    <!-- :style推荐使用驼峰命名，但也支持 kebab-cased 形式的 CSS 属性 key  -->
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      绑定内联样式-绑定对象
    </div>
    <!-- 绑定数组 -->
    <div :style="[baseStyles, overridingStyles]">绑定数组</div>
    <div :style="{ 'font-size': fontSize + 'px' }">111</div>
    <!-- 跳过类与样式绑定中的在组件上使用与绑定内联样式 -->
  </div>
  <!-- 指定元素接收父组件传递的属性 -->
  <div :class="$attrs.class">指定元素接收父组件传递的属性</div>
</template>

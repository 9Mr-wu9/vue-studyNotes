<script>
import MuBanYuFa from "./components/基础/模板语法.vue";
import XiangYingShiJiChu from "./components/基础/响应式基础.vue";
import JiSuanShuXing from "./components/基础/计算属性.vue";
import ClassAndStyle from "./components/基础/类与样式绑定.vue";
import TiaoJianXuanRan from "./components/基础/条件渲染.vue";
import LieBiaoXuanRan from "./components/基础/列表渲染.vue";
import ShiJianChuLi from "./components/基础/事件处理.vue";
import MuBanYinYong from "./components/模板引用.vue";
import ZuJian from "./components/基础/组件/组件.vue";
import BiaoDanShuRuBangDing from "./components/表单输入绑定.vue";
// 深入组件
import TouChuanAttrs from "./components/深入组件/透传Attributes.vue";
import ChaCao from "./components/深入组件/插槽.vue";
import YiLaiZhuRu from "./components/深入组件/依赖注入.vue";
// 逻辑复用
import ZuHeShiHanShu from "./components/逻辑复用/组合式函数.vue";
import CustomDirectives from "./components/逻辑复用/自定义指令.vue";

// 组合式API
import SetUp from "./components/组合式API/setup/setup.vue";
import XiangYingShiHeXin from "./components/组合式API/响应式核心/响应式核心.vue";
import XiangYingShiGongJu from "./components/组合式API/响应式工具/响应式工具.vue";

// 选项式API
import ZhuangTaiXuanXiang from "./components/选项式API/状态选项.vue";

export default {
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
      height: 30,
    };
  },
  components: {
    // 基础
    MuBanYuFa,
    XiangYingShiJiChu,
    JiSuanShuXing,
    ClassAndStyle,
    TiaoJianXuanRan,
    LieBiaoXuanRan,
    ShiJianChuLi,
    MuBanYinYong,
    ZuJian,
    BiaoDanShuRuBangDing,
    // 深入组件
    TouChuanAttrs,
    ChaCao,
    YiLaiZhuRu,
    // 逻辑复用
    ZuHeShiHanShu,
    CustomDirectives,
    // 组合式API
    SetUp,
    XiangYingShiHeXin,
    XiangYingShiGongJu,

    // 选项式API
    ZhuangTaiXuanXiang,
  },
};
</script>

<template>
  <div>
    <!-- 基础 -->
    <!-- <MuBanYuFa /> -->
    <!-- <XiangYingShiJiChu /> -->
    <!-- <JiSuanShuXing /> -->
    <!-- <ClassAndStyle class="baz boo" style="background:red" /> -->
    <!-- <TiaoJianXuanRan /> -->
    <!-- <LieBiaoXuanRan /> -->
    <!-- <LieBiaoXuanRan v-for="item in items" :key="item" /> -->
    <!-- <ShiJianChuLi /> -->
    <!-- <MuBanYinYong ref="child" /> -->
    <!-- <ZuJian /> -->
    <!-- <BiaoDanShuRuBangDing /> -->

    <!-- 深入组件 -->
    <!-- <TouChuanAttrs class="btn-zu btn-zu1" /> -->
    <!-- <ChaCao /> -->
    <!-- <YiLaiZhuRu /> -->

    <!-- 逻辑复用 -->
    <!-- <ZuHeShiHanShu /> -->
    <!-- <CustomDirectives /> -->

    <!-- 组合式API -->
    <!-- <SetUp title="setupTitle" /> -->
    <!-- <XiangYingShiHeXin /> -->
    <!-- <XiangYingShiGongJu /> -->

    <!-- 选项式API -->
    <ZhuangTaiXuanXiang :height="height" age="{30}" />
  </div>
</template>

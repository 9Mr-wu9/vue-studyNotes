<script lang="ts">
import {
  ref,
  computed,
  reactive,
  readonly,
  watchEffect,
  watchPostEffect,
  watchSyncEffect,
  watch,
} from "vue";

export default {
  setup(props, { expose }) {
    // 1.ref：接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value
    // 2.computed：接受一个 getter 函数，返回一个只读的响应式 ref 对象。该 ref 通过 .value 暴露
    // getter 函数的返回值。它也可以接受一个带有 get 和 set 函数的对象来创建一个可写的 ref 对象
    const readonlyCount = ref(0);
    const readonlyPlusOne = computed(() => readonlyCount.value + 1); // 只读
    console.log("readonlyPlusOne", readonlyPlusOne.value);
    // readonlyPlusOne.value++; // 报错，该计算属性为只读
    const witableCount = ref(0);
    const witablePlusOne = computed({
      get: () => witableCount.value + 1,
      set: (val) => {
        // 可写
        console.log("val", val); // 2
        witableCount.value = val - 1;
      },
    });
    console.log("witablePlusOne", witablePlusOne.value);
    witablePlusOne.value = 2;
    console.log("witableCount", witableCount.value);
    // 3.reactive：返回一个对象的响应式代理
  },
};
</script>

<template>
  <div>响应式核心</div>
</template>

<script lang="ts">
import {
  isRef,
  unref,
  toRef,
  toRefs,
  isProxy,
  isReactive,
  isReadonly,
  ref,
  h,
  reactive,
} from "vue";

export default {
  setup(props, { expose }) {
    // 1.isRef：检查某个值是否为 ref
    // 返回值是一个类型判定，这意味着 isRef 可以被用作类型守卫 ?
    let isRef1: unknown;
    let isRef2 = ref(true);
    // console.log("isRef1", isRef(isRef1));
    // console.log("isRef2", isRef(isRef2));

    // 2.unref：如果参数是 ref，则返回内部值，否则返回参数本身
    let unref1: unknown;
    let unref2 = ref(true);
    // console.log("unref1", unref(unref1));
    // console.log("unref2", unref(unref2));

    // 3.toRef：
    const state = reactive({
      foo: 1,
      bar: 2,
    });
    const fooRef = toRef(state, "foo", 4);
    fooRef.value++; // 更改该 ref 会更新源属性
    console.log(state);
    state.foo++; // 更改源属性也会更新该 ref
    console.log(fooRef);
  },
};
</script>

<template>
  <div>响应式工具</div>
</template>

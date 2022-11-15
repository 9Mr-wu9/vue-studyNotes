import {
  defineComponent,
  Ref, // 类型
  ref, // 接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 .value
  // ref对象可更改(也是响应式的)，所有对 .value 的操作都将被追踪，写操作会触发相关副作用
  // 如果将一个对象赋值给 ref，那么这个对象将通过 reactive() 转为具有深层次响应式的对象。这也意味着如果对象中包含了嵌套的 ref，它们将被深层地解包。
  // 若要避免这种深层次的转换，请使用 shallowRef() 来替代。
  // 类似 React 的 useState；ref根据初始化时的值推导类型，有时想为ref内的值指定一个复杂类型，可以通过 Ref 类型
  computed, //接受一个 getter 函数，返回一个只读的响应式 ref 对象。该 ref 通过 .value 暴露 getter 函数的返回值。
  // 它也可以接受一个带有 get 和 set 函数的对象来创建一个可写的 ref 对象
  reactive, // 返回一个对象的响应式代理
  readonly,
  watchEffect,
} from "vue";

// defineComponent：定义组件时提供类型推导的辅助函数，
// 第一个参数是一个组件选项对象，
export default defineComponent({
  setup() {
    const year: Ref<string | number> = ref(2022);
    year.value = "2030";
    // 调用 ref() 时传入一个泛型参数，来覆盖默认的推导行为
    const years = ref<string | number>(2040);
    // 指定泛型参数但是没有初始值，最后得到一个包含 undefined 的联合类型
    const year1 = ref<number>();

    // computed：
    // 创建一个只读计算属性
    const readOnlyCount = ref(1);
    const plusOne = computed(() => readOnlyCount.value + 1);
    // console.log("plusOne", plusOne.value);
    // plusOne.value++;

    // 创建一个可写的计算属性
    const writableCount = ref(1);
    const plusTwo = computed({
      get: () => writableCount.value + 2,
      set: (val) => {
        writableCount.value = val - 1;
      },
    });
    // console.log("plusOne", plusTwo.value);
    plusTwo.value = 1;
    // console.log(writableCount.value); // 0

    // reactive:
    // 创建一个响应式对象
    // const obj = reactive({ count: 0 });
    // obj.count++;

    // ref解包
    const unpackCount = ref(1);
    const unpackObj = reactive({ unpackCount });
    console.log(unpackObj.unpackCount === unpackCount.value);
    // 会更新 unpackObj.unpackCount
    unpackCount.value++;
    console.log(unpackCount.value);
    console.log(unpackObj.unpackCount);
    // 也会更新 `unpackCount` ref
    unpackObj.unpackCount++;
    console.log(unpackCount.value);
    console.log(unpackObj.unpackCount);
    // 访问到某个响应式数组或 Map 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包
    const books = reactive([ref("vue3 guide")]);
    console.log(books[0].value); // 需要.value
    const map = reactive(new Map([["count", ref(333)]]));
    console.log(map.get("count")?.value); // 不用 ?. 会报错提示对象可能未定义

    // readonly:
    const original = reactive({ count: 0 });
    const copy = readonly(original);

    watchEffect(() => {
      console.log("copy", copy.count);
    });
    original.count++;
    // copy.count++; // 报错

    return {
      year,
      years,
      year1,
    };
  },
});

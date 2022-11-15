<script>
export default {
  // 1.data：声明组件初始响应式状态的函数，函数返回一个普通js对象，Vue将它转换成响应式对象；
  // 实例创建后，通过 this.$data 访问，组件实例也代理了该数据对象上的所有属性，即 this.xxx 等价于 this.$data.xxx
  // 可以向 this.$data 添加属性，但不推荐；以 _ 或 $ 开头的属性不会被组件实例代理，它们可能和 Vue 内置属性、API方法冲突
  // data 属性也可以写成箭头函数，此时 this 将不会指向该组件实例，可以通过函数的第一个参数来访问实例
  // data() {
  //   return {
  //     a: 1,
  //   };
  // },
  data: (vm) => {
    // console.log("this", this); // undefined
    // console.log("vm", vm);
    return {
      a: 1,
      b: 2,
      c: {
        d: 4,
      },
      e: 5,
      f: 6,
    };
  },

  // 2.props：所有 props 都需要被显式声明
  props: {
    height: {
      type: [Number, String],
      // type: Number, // 类型，可以是原生构造函数之一(String、Number、Boolean、Array、Object、Date、Function、Symbol、任何自定义构造函数，或由上述内容组成的数组)
      default: 0, // prop 没有传入或值为 undefined 时的默认值
      required: true, // 该 prop 是否必须传入
      // validator: (val) => {  // 将 prop 值作为唯一参数传入的自定义验证函数。在开发模式下，如果该函数返回一个假值 (即验证失败)，一个控制台警告将会被抛出
      //   console.log("val", val);
      // },
    },
  }, // 对象形式
  // props: ["height", "age"], // 数组形式

  // 3.computed：
  computed: {
    // 只读
    // aDouble: (vm) => vm.a * 2, // 使用箭头函数时，可通过第一个参数访问实例
    aDouble() {
      return this.a * 2;
    },
    // 可写
    aPlus: {
      get() {
        return this.a + 1;
      },
      set(v) {
        this.a = v - 1;
      },
    },
  },

  // 4.methods：用于声明要混入到组件实例中的方法；声明的方法可以直接通过组件实例访问，或者在模板语法表达式中使用
  methods: {
    someMethod() {
      console.log("b changed");
    },
    handle1() {
      console.log("handle 1 triggered");
    },
  },

  // 5.watch：用于声明在数据更改时调用的侦听回调
  watch: {
    // 接收一个对象，键值是要侦听的响应式组件实例属性，值是相应的回调函数(接受被侦听源的新值和旧值)，
    // 值也可以是
    // 侦听根级属性
    a(newVal, oldVal) {
      console.log(`new: ${newVal}, old: ${oldVal}`); // new: 3, old: 1
    },
    // 字符串方法名称
    b: "someMethod",
    // 该回调将会在被侦听的对象的属性改变时调动，无论其被嵌套多深
    c: {
      handler(newVal, oldVal) {
        console.log("c changed");
      },
      deep: true,
    },
    // 侦听单个嵌套属性
    "c.d": function (newVal, oldVal) {
      console.log("d changed");
    },
    // 该回调将会在侦听开始之后立即调用
    e: {
      handler(newVal, oldVal) {
        console.log("e changed");
      },
      immediate: true,
    },
    f: [
      "handle1",
      function handle2(newVal, oldVal) {
        console.log("handle2 triggered");
      },
      {
        handler: function handle3(newVal, oldVal) {
          console.log("handle3 triggered");
        },
      },
    ],
  },
  created() {
    this.a = 3;
  },
};
</script>

<template>
  <div>状态选项</div>
</template>

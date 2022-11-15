<script>
export default {
  data() {
    // v-model：双向数据绑定
    // 处理表单时，经常需要将表单输入框的内容同步给JavaScript变量，手动连接值绑定和更改事件监听器可能很麻烦，v-model 指令简化了这一步骤
    return {
      text: "",
      checked: true,
      checkedNames: [],
      picked: "",
      selected: "",
      toggle: true,
      dynamicTrueValue: "",
      dynamicFalseValue: "dynamicFalseValue",
      msg: "",
      age: "",
    };
  },
};
</script>

<template>
  <div>
    <input
      type="text"
      :value="text"
      @input="(event) => (text = event.target.value)"
    />
    <!-- v-model -->
    <input type="text" v-model="text" />
    <p>{{ text }}</p>
    <!-- 多行文本：不能使用插值语法，应该使用v-model代替 -->
    <textarea v-model="text"></textarea>
    <hr />
    <!-- 复选框 -->
    <input type="checkbox" v-model="checked" />
    <label>{{ checked }}</label>
    <hr />
    <!-- 多个复选框 -->
    <div>Checked names: {{ checkedNames }}</div>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike"></label>
    <hr />
    <!-- 单选框 -->
    <div>Picked:{{ picked }}</div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <hr />
    <!-- 选择器 -->
    <!-- 如果 v-model 表达式的初始值不匹配任何一个选择项，<select> 元素会渲染成一个“未选择”的状态。在 iOS 上，这将导致用户无法选择第一项，因为 iOS 在这种情况下不会触发一个 change 事件。因此，我们建议提供一个空值的禁用选项，如上面的例子所示 -->
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <hr />
    <div>Selected: {{ selected }}</div>

    <select v-model="selected" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <hr />

    <!-- 配合v-bind使用 -->
    <input
      type="checkbox"
      v-model="toggle"
      :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue"
    />
    <hr />
    <!-- 修饰符 -->
    <!-- 默认情况下，v-model 会在每次 input 事件后更新数据 (IME 拼字阶段的状态例外)，添加 lazy 修饰符来改为在每次 change 事件后更新数据 -->
    <input v-model.lazy="msg" />
    <p>{{ msg }}</p>
    <input type="number" v-model.number="age" />
    <p>{{ age }}</p>
    <input v-model.trim="msg" />
  </div>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      awesome: false,
      showTemplate: true,
      ok: false,
    };
  },
};
</script>

<template>
  <div>
    <p v-if="awesome">v-if</p>
    <!-- v-if v-else v-else-if -->
    <button @click="awesome = !awesome">开关</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>React is awesome!</h1>
    <!-- template上的v-if -->
    <template v-if="showTemplate">
      <p>template-1</p>
      <p>template-2</p>
      <p>template-3</p>
    </template>
    <!-- v-show -->
    <p v-show="ok">v-show</p>
  </div>
</template>

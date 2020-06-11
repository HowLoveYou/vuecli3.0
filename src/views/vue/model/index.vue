<template>
  <div>
    <myp v-model="c"></myp>
    <button @click="c++">add</button>
  </div>
</template>

<script>
import myp from './my-p.vue';
export default {
  components: {
    myp
  },
  data() {
    return {
      c: 1
    };
  }
};
</script>

<style lang='scss' scoped>
</style>

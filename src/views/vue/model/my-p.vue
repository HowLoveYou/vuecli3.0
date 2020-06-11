<template>
  <p>{{aaa}}</p>
</template>

<script>
export default {
  data() {
    return {};
  },
  model: {
    prop: 'aaa',
    event: 'change'
  },
  props: {
    aaa: ''
  }
};
</script>

<style lang='scss' scoped>
</style>

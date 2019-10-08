<template>
  <div class="box">
    <div class="min">min</div>
    <div class="max">max</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.box {
  .min {
    width: min(100px, 200px);
    background: #f0f;
  }
  .max {
    width: max(1px, 200px);
    background: #d0d;
  }
}
</style>
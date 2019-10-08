<template>
  <div class="box">
    <div class="small-div">percentage</div>
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
  height: 50px;
  width: 100%;
  background: #ccc;
  .small-div {
    height: percentage($number: 1);
    width: percentage(0.15);
    background: red;
  }
}
</style>

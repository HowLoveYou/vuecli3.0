/*
 * @Author: 马晨博 
 * @Date: 2019-09-27 14:36:56 
 * @Last Modified by: 马晨博
 * @Last Modified time: 2019-09-27 14:44:21
 */
<template>
  <div class="while-wrap">
    <li class="li-1"></li>
    <li class="li-2"></li>
    <li class="li-3"></li>
    <li class="li-4"></li>
    <li class="li-5"></li>
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
$index: 5;
li {
  background: cyan;
  height: 30px;
}
@while $index > 0 {
  .li-#{$index} {
    width: 40px * $index;
  }
  $index: $index - 1;
}
</style>

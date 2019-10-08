/*
 * @Author: 马晨博 
 * @Date: 2019-09-27 14:48:17 
 * @Last Modified by: 马晨博
 * @Last Modified time: 2019-09-27 14:57:37
 */
<template>
  <div class="each-wrap other-ul">
    <li class="other-a">a</li>
    <li class="other-b">b</li>
    <li class="other-c">d</li>
    <li class="other-d">d</li>
    <li class="other-e">e</li>
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
$lists: a b c d e;
@mixin lists {
  @each $li in $lists {
    .other-#{$li} {
      background: #ccc;
    }
  }
}
.other-ul {
  li {
    width: 30px;
    height: 40px;
    border-bottom: 1px solid #fff;
  }
  @include lists;
}
</style>

/*
 * @Author: 马晨博 
 * @Date: 2019-09-27 11:38:03 
 * @Last Modified by: 马晨博
 * @Last Modified time: 2019-09-27 14:16:39
 */
<template>
  <div class="if-part">
    <div class="test1">test1</div>
    <div class="test2">test2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(sassrouter);
  }
};
</script>

<style lang='scss' scoped>
.if-part {
  color: red($color: #000000);
}

@mixin styleDiv($boolean: true) {
  @if $boolean {
    background: red;
  } @else {
    background: blue;
    color: #ccc;
  }
}
%test {
  width: 200px;
  height: 100px;
  margin: 10px 0;
}
.test1 {
  @extend %test;
  @include styleDiv;
}
.test2 {
  @extend %test;
  @include styleDiv(false);
}
</style>

/*
 * @Author: 马晨博 
 * @Date: 2019-09-27 14:19:19 
 * @Last Modified by: 马晨博
 * @Last Modified time: 2019-09-27 14:33:58
 */
<template>
  <div class="for-wrap">
    <ul class="through-ul">
      <li class="col-1">col-1</li>
      <li class="col-2">col-2</li>
      <li class="col-3">col-3</li>
    </ul>
    <ul class="to-ul">
      <li class="item-1">item-1</li>
      <li class="item-2">item-2</li>
      <li class="item-3">item-3</li>
    </ul>
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
.through-ul {
  li {
    height: 50px;
    margin: 10px 0;
    background: #d0d0d0;
    text-align: center;
    line-height: 50px;
  }
  @for $i from 1 through 3 {
    .col-#{$i} {
      width: 100px * $i;
    }
  }
}
.to-ul {
  li {
    height: 30px;
    margin: 10px 0;
    background: #d0d0d0;
    text-align: center;
    line-height: 30px;
  }
  .li1 {
    color: brown;
  }
  .li2 {
    color: coral;
    font-weight: 800;
  }
  //不算最后一个
  @for $i from 1 to 3 {
    .item-#{$i} {
      @extend .li#{$i};
      width: 300px * $i;
    }
  }
}
</style>

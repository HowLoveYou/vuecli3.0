/*
 * @Author: 马晨博 
 * @Date: 2019-09-27 14:07:48 
 * @Last Modified by: 马晨博
 * @Last Modified time: 2019-10-08 14:32:35
 */
<template>
  <div class="sass-wrap">
    <h4>sass进阶篇</h4>
    <ul class="tab-ul">
      <router-link
        replace
        :to="'/sass/'+item.path"
        v-for="(item,index) of tableList"
        class="tab-item"
      >{{item.name}}</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import sass from '@/router/sass.js';
export default {
  name: 'sass',
  data() {
    return {
      tableList: []
    };
  },
  created() {
    this.tableList = sass;
  }
};
</script>

<style lang="scss" scoped="scoped">
.sass-wrap {
  h4 {
    text-align: center;
    font-size: 24px;
    padding: 20px 0;
  }
}
.tab-ul {
  display: flex;
  background: rgba(22, 83, 14, 0.2);
  .tab-item {
    padding: 10px 0;
    width: 100px;
    color: #ffffff;
    font-size: 18px;
    width: 100px;
    text-align: center;
    border-right: 3px solid #000;
    &.active {
      background: #d0d;
    }
    &:hover {
      background: blue;
    }
  }
}
</style>
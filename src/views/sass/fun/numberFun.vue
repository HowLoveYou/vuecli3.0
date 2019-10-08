/*
 * @Author: 马晨博 
 * @Date: 2019-10-08 14:35:03 
 * @Last Modified by: 马晨博
 * @Last Modified time: 2019-10-08 15:12:09
 */
<template>
  <div class="number-fun">
    <h4>数字函数</h4>
    <ul>
      <router-link
        class="number-item"
        v-for="item of list"
        :key="item.name"
        replace
        :to="'/sass/numberfun/' + item.path"
      >{{item.name}}</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          path: 'percentage',
          name: 'percentage'
        },
        {
          name: 'round',
          path: 'round'
        },
        {
          name: 'ceil',
          path: 'ceil'
        },
        {
          name: 'floor',
          path: 'floor'
        },
        {
          name: 'abs',
          path: 'abs'
        },
        {
          name: 'min',
          path: 'min'
        },
        {
          name: 'random',
          path: 'random'
        }
      ]
    };
  },
  created() {},
  methods: {},
  mounted() {}
};
</script>

<style lang='scss' scoped>
.number-fun {
  width: 100%;
}
h4 {
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
}
ul {
  display: flex;
  background: rgba(22, 83, 14, 0.2);
  .number-item {
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

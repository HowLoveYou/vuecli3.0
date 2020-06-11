<template>
  <div class="container-water-fall">
    <!-- <div>
      <button @click="loadmore">loadmore</button>
      <button @click="mix">mix</button>
      <button @click="switchCol('5')">5列</button>
      <button @click="switchCol('8')">8列</button>
      <button @click="switchCol('10')">10列</button>
    </div>-->

    <waterfall
      :col="col"
      :width="itemWidth"
      :gutterWidth="gutterWidth"
      :data="data"
      @loadmore="loadmore"
      @scroll="scroll"
    >
      <template>
        <div class="cell-item" v-for="(item,index) in data" :key="index">
          <img v-if="item.img" :src="item.img" alt="加载错误" />
          <div class="item-body">
            <div class="item-desc">{{item.title}}</div>
            <div class="item-footer">
              <div class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
              <div class="name">{{item.user}}</div>
              <div class="like" :class="item.liked?'active':''">
                <i></i>
                <div class="like-total">{{item.liked}}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>
<script>
import Vue from 'vue';
import service from './service';
export default {
  data() {
    return {
      data: [],
      col: 5
    };
  },
  computed: {
    itemWidth() {
      return 138 * 0.5 * (document.documentElement.clientWidth / 375);
    },
    gutterWidth() {
      return 9 * 0.5 * (document.documentElement.clientWidth / 375);
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await service.waterfall();
      console.log(res);
      this.data = res;
    },
    scroll(scrollData) {
      console.log(scrollData);
    },
    switchCol(col) {
      this.col = col;
      console.log(this.col);
    },
    loadmore(index) {
      this.data = this.data.concat(this.data);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
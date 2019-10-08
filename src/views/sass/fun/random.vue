<template>
  <div class="random">
    <li v-for="index of 7">{{index}}</li>
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
li {
  height: 20px;
  background: yellow;
  &:nth-child(1) {
    width: random() * 300px;
  }
  &:nth-child(2) {
    width: random() * 300px;
  }
  &:nth-child(3) {
    width: random() * 300px;
  }
  &:nth-child(4) {
    width: random() * 300px;
  }
  &:nth-child(5) {
    width: random() * 300px;
  }
  &:nth-child(6) {
    width: random() * 300px;
  }
  &:nth-child(7) {
    width: random() * 300px;
  }
}
</style>
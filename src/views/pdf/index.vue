<template>
  <div>
    <div class="row" id="pdfDom" style="padding-top: 55px;background-color:#fff;">123123123123213123</div>
    <button type="button" class="btn btn-primary" v-on:click="exportFile">导出PDF</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlTitle: '页面导出PDF文件名'
    };
  },
  methods: {
    exportFile() {
      this.getPdf('pdfDom', '业主基本情况登记表');
    }
  }
};
</script>

<style lang='scss' scoped>
</style>

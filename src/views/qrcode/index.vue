
<template>
  <div>
    <div class="row" id="pdfDom" style="padding-top: 55px;background-color:#fff;" v-show="false">
      <qrcode :qr-url="qrcode" :qr-size="160" :qr-text-size="16" :qr-text="titleCode"></qrcode>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="exportFile">导出PDF</button>
  </div>
</template>

<script>
import qrcode from './components/qrcode.vue';
export default {
  components: {
    qrcode
  },
  data() {
    return {
      qrcode: '{title:1}',
      titleCode: '百度一下'
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

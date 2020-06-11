<template>
  <div>
    <datepicker ref="datepick"></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
  components: {
    Datepicker
  },
  data() {
    return {};
  },
  mounted() {
    this.$ref.datepick.opened();
  }
};
</script>

<style>
</style>
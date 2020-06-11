<template>
  <div>
    <el-button type="primary" @click="joinChannel">加入频道</el-button>
  </div>
</template>

<script>
import './js/materialize.min.js';

export default {
  data() {
    return {
      rtc: {}, //
      option: {} //加入频道的选项
    };
  },
  mounted() {
    this.init();
    this.crateClient();
  },
  methods: {
    init() {
      let rtc = {
        client: null,
        joined: false,
        published: false,
        localStream: null,
        remoteStreams: [],
        params: {}
      };
      let option = {
        appID: 'eecc05471b674b6cb9da1631775b0892',
        channel: '10',
        uid: null,
        token:
          '006eecc05471b674b6cb9da1631775b0892IAAZwoSMx36tdFmB2kRzHBvpiRxxcDwNCW1J70QepeaT7OElXaEAAAAAEAABhUxhPdRMXgEAAQA91Exe'
      };
      this.rtc = rtc;
      this.option = option;
    },
    //创建客户端对象
    crateClient() {
      this.rtc.client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
      this.rtc.client.init(
        this.option.appID,
        () => {
          console.log('创建客户端成功');
        },
        err => {
          console.error(err);
        }
      );
    },
    //加入频道
    joinChannel() {
      this.rtc.client.join(
        this.option.token ? this.option.token : null,
        this.option.channel,
        this.option.uid ? +this.option.uid : null,
        uid => {
          console.log(
            'join channel: ' + this.option.channel + ' success, uid: ' + uid
          );
          console.log('加入频道成功');
          this.rtc.params.uid = uid;
        },
        err => {
          console.error('client join failed', err);
        }
      );
    }
  }
};
</script>


<style lang='less' scoped>
</style>

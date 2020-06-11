<template>
  <div class="weixin-tip" style="display:none;">
    <p>
      <img src="/images/login.jpg" class="weixinpic" alt="微信打开" />
    </p>
  </div>
</template>

<script>
require('./js/jquery-2.1.0');

export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      $(function() {
        var u = navigator.userAgent,
          app = navigator.appVersion;

        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;

        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

        $('.img').click(function() {
          if (isAndroid) {
            var winHeight = $(window).height();

            function is_weixin() {
              var ua = navigator.userAgent.toLowerCase();

              if (ua.match(/MicroMessenger/i) == 'micromessenger') {
                return true;
              } else {
                return false;
              }
            }
            var isWeixin = is_weixin();

            if (isWeixin) {
              $('.weixin-tip').css('height', winHeight);

              $('.weixin-tip').show();
            } else {
              window.location.href =
                'http://tong.csscone.com/security-web/console/common/gxApp?xtmc=anbao'; //安卓下载地址
            }
          } else if (isIOS) {
            location.href = ''; //IOS下载地址
          }
        });
      });
    }
  }
};
</script>

<style lang='scss' scoped>
a {
  text-decoration: none;
}

.weixinpic {
  width: 100%;
  height: 100%;
}

.weixin-tip {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  filter: alpha(opacity=80);
  height: 100%;
  width: 100%;
  z-index: 100;
}

.weixin-tip p {
  text-align: center;
}
</style>

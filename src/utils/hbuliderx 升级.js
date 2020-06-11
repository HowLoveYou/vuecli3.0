
let updatemethods = {
  data() {
    return {
      wgtVer: null,//当前版本号
      ifbb: '2.0',//假如版本
    }
  },
  mounted() {
  },
  methods: {
    handleBb() {
      alert('已经是最新的了');
      return;
      if (this.plus) {
        this.plusReady();
      }
    },
    // 获取本地应用资源版本号  
    plusReady() {
      let appid = this.plus.runtime.appid;
      this.plus.runtime.getProperty(appid, (info) => {
        this.wgtVer = info.version;
        alert(this.wgtVer);
        //通过ajax 获取版本号
        if (true) {
          alert('准备升级');
          this.downWgt();
        }
      })
    },
    //下载升级包
    downWgt() {
      this.plus.nativeUI.showWaiting("下载wgt文件...");
      let wgtUrl = 'http://124.193.121.10:3001/security-web/anbao.wgt';
      this.plus.downloader.createDownload(wgtUrl, { filename: "_doc/update/" }, (d, status) => {
        if (status == 200) {
          console.log("下载wgt成功：" + d.filename);
          this.installWgt(d.filename); // 安装wgt包 
        } else {
          console.log("下载wgt失败！");
          this.plus.nativeUI.alert("下载wgt失败！");
        }
        this.plus.nativeUI.closeWaiting();
      }).start();
    },
    //安装升级包
    installWgt(path) {
      this.plus.nativeUI.showWaiting("安装wgt文件...");
      this.plus.runtime.install(path, {}, () => {
        this.plus.nativeUI.closeWaiting();
        this.plus.nativeUI.alert("应用资源更新完成！", () => {
          this.plus.runtime.restart();//重启应用
        });
      }, (e) => {
        this.plus.nativeUI.closeWaiting();
        this.plus.nativeUI.alert("安装wgt文件失败[" + e.code + "]：" + e.message);
      })
    }
  }
}
export default updatemethods
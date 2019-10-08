/*打包GZIp*/
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin') //下载1.1.1版本
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //引入webpack-bundle-analyzer

module.exports = {
    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: false,
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: false,
    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项
    devServer: {
        port: 8888, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            //Π点
            '/ipole': {
                target: 'http://47.94.243.47:8101', //正式
                //                 target: 'http://122.113.5.204:9021',	//测试
                //              target: 'http://172.10.10.214:8080',	//本地
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            },
            //zhaoming
            '/light': {
                target: 'http://light.ipolecity.com.cn', //正式
                //              target: 'http://122.113.5.204:9023',	//测试
                //              target: 'http://122.113.5.152:8080',	//本地
                changeOrigin: true,
                pathRewrite: {
                    '^/light': '/api'
                }
            },
            //ipolecity
            '/api': {
                target: 'http://app.ipolecity.com.cn', //正式
                //	          target: 'http://122.113.5.204:9007',//测试
                changeOrigin: true,
                pathRewrite: {
                    '^/ipolecity': '/api'
                }
            },
        }, // 配置多个代理
    },
    chainWebpack: config => {

        config.plugins.delete('prefetch')

        //打包可视化
        if (process.env.NODE_ENV === 'production') {
            config.plugin('analyzer')
                .use(new BundleAnalyzerPlugin()) //使用webpack-bundle-analyzer 生成报表
        }
    },
    configureWebpack: config => {

        if (process.env.NODE_ENV === 'production') {
            // 生产环境
            config.plugins.push(
                new CompressionWebpackPlugin({
                    asset: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8
                })
            );

        } else {
            // 开发环境
        }

        /*不压缩的js*/
        config.externals = {
            'vue': 'Vue',
            'element-ui': 'ELEMENT',
            'echarts': 'echarts',
            'highcharts': 'Highcharts',
        }
    },
}
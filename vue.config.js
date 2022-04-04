
const path = require('path')
const sftpUploader = require('sftp-uploader')
const productionGzipExtensions = ['js', 'css']
const CompressionWebpackPlugin = require('compression-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

let envConfig = {}
if (process.env.TYPE == 'admin') {
  console.log('admin 环境')
  envConfig = {
    outputDir: 'dist/admin',
    pages: {
      index: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      }
    }
  }
} else {
  console.log('h5环境')
  envConfig = {
    outputDir: 'dist/h5',
    pages: {
      h5: {
        entry: 'h5/main.js',
        template: 'public/index.html',
        filename: 'index.html',
        chunks: ['chunk-vendors', 'chunk-common', 'h5']
      }
    }
  }
}

module.exports = {
  publicPath: './',
  ...envConfig,

  configureWebpack: config => {
    // CDN 加载依赖
    config.externals = {
      'element-ui': 'ELEMENT',
      vue: 'Vue',
      vant: 'Vant',
    }

    // gzip 压缩
    console.log('GZIP');
    console.log(process.env.GZIP);
    if (process.env.GZIP == 'true') {
      console.log('执行GZIP')
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    }
  },

  chainWebpack: config => {
    // 别名配置
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('@', resolve('src'))

    // 定义全局scss变量
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 公用scss
          resources: './src/scss/index.scss'
        })
        .end()
    })

    config.module
      .rule('scss')
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 37.5, remPrecision: 8 })
      .end()
  }
}

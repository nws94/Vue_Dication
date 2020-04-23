module.exports = {

  //backend 서버와 연동.
  devServer: {
    proxy: {
      '/*': {
        target: 'http://localhost:3003',
        changeOrigin:true,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  }
}
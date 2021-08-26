const path=require('path');
module.exports={
  entry:'./src/index.js',
  // 出口
  output:{
    // 虚拟打包路径
    publicPath:'xuni',
    filename:'bundle.js'
  },
  devServer:{
    // 端口号
    port:8080,
    // 静态资源文件夹
    contentBase:'www'
  }
}
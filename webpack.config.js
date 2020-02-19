module.exports={
  mode:"development",
  entry:__dirname+"/src/app.jsx",
  output:{
      path:__dirname+"/dist",
      filename:'bundle.js'
  },
  devServer:{
      contentBase:"./dist",
     inline:true
  },
  module: {
      rules: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
  }
};
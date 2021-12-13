const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      {//for babel-loader
        test: /\.js$/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      
    ]
  },
  devServer: {
    static: "./"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}

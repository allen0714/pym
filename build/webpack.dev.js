const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer:{
    historyApiFallback: true,
    port:1111,
    contentBase :path.resolve(__dirname, 'dist'),
    proxy:{
      "/api": {
        "target": "http://rapapi.org/mockjsdata/32730",
        "changeOrigin": true,
        "pathRewrite": { "^/api" : "" }
      },
    }
  },
  plugins:[
    new webpack.DefinePlugin({
      'ENVIRONMENT': JSON.stringify('dev')
    }),
  ]
});

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['whatwg-fetch','./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: ['babel-loader'],
        exclude: /node_modules|src\/editorApp/,
      },
      {
        test: /\.css$/,
        exclude: /src\/styles|node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          },
        ],
      },
      {
        test: /\.css$/,
        include: /src\/styles|node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        include:/src\/lib/,
        use: ['script-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename:'index.html',
      title:'process engine',
      template:'src/index.html',
      //favicon: path.resolve(__dirname, '..', 'src','assets','favicon.ico'),
    })
  ]

};

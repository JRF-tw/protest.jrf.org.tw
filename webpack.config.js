var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);
var HtmlWebpackPlugin = require('html-webpack-plugin');

var common = {

  entry: [path.resolve(ROOT_PATH, 'app/main')],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '社運測測看'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?experimental'],
        include: path.resolve(ROOT_PATH, 'app'),
        exclude: /node_modules/
      },

      {
        test: /\.(css|png|jpg|gif)$/,
        loaders: ['file?name=[path][name].[ext]?[hash]&context=app/styles']
      }
    ]
  }
};

switch (TARGET) {
  case 'build':
    module.exports = merge(common, {
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
      ]
    });

    break;

  case 'dev':
    module.exports = merge(common, {
      entry: [
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/dev-server'
      ]
    });
    break;
}

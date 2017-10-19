var path = require('path')

var webpack = require('webpack')

module.exports = {
  entry: {
    'react-chartkick': './index.js',
    'react-chartkick.min': './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          cacheDirectory: false,
          presets: ['react', ['env', { modules: false }]],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
    }),
  ],
  externals: {
    react: 'React',
    chartkick: 'Chartkick',
  },
}

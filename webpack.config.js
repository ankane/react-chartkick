var webpack = require("webpack")

module.exports = {
  entry: {
    "react-chartkick": "./index.js",
    "react-chartkick.min": "./index.js"
  },
  output: {
    path: "./dist",
    filename: "[name].js",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  externals: {
    "react": "React",
    "chartkick": "Chartkick"
  }
}

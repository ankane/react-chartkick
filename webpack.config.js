var webpack = require("webpack")
var path = require("path")

module.exports = {
  entry: {
    "react-chartkick": "./index.js",
    "react-chartkick.min": "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
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

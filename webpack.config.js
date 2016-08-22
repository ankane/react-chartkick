module.exports = {
  entry: "./index.js",
  output: {
    path: "./dist",
    filename: "react-chartkick.js",
    libraryTarget: "umd"
  },
  externals: {
    "react": "React",
    "chartkick": "Chartkick"
  }
}

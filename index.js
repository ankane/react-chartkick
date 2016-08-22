var React = require("react")
var Chartkick = require("chartkick")

var createComponent = function(chartType) {
  return React.createClass({
    componentDidMount: function() {
      var data = this.props.data
      var options = {}
      for (var prop in this.props) {
        if (this.props.hasOwnProperty(prop) && prop !== "data" && prop !== "height" && prop !== "width") {
          options[prop] = this.props[prop]
        }
      }
      new chartType(this.refs.chart, data, options)
    },
    render: function() {
      var props = this.props
      var style = {
        height: props.height || "300px",
        width: props.width || "100%",
        textAlign: "center",
        color: "#999",
        fontSize: "14px",
        fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif"
      }
      return (
        React.createElement("div", {ref: "chart", style: style},
          "Loading..."
        )
      )
    }
  })
}

module.exports = {
  LineChart: createComponent(Chartkick.LineChart),
  PieChart: createComponent(Chartkick.PieChart),
  ColumnChart: createComponent(Chartkick.ColumnChart),
  BarChart: createComponent(Chartkick.BarChart),
  AreaChart: createComponent(Chartkick.AreaChart),
  ScatterChart: createComponent(Chartkick.ScatterChart),
  GeoChart: createComponent(Chartkick.GeoChart),
  Timeline: createComponent(Chartkick.Timeline)
}

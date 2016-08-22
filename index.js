var React = require("react")
var Chartkick = require("chartkick")
var chartId = 1

var createComponent = function(chartType) {
  return React.createClass({
    componentDidMount: function() {
      var data = this.props.data
      var options = {}
      for (var prop in this.props) {
        if (this.props.hasOwnProperty(prop) && prop !== "data" && prop !== "id" && prop !== "height" && prop !== "width") {
          options[prop] = this.props[prop]
        }
      }
      new chartType(this.chartId, data, options)
    },
    render: function() {
      var props = this.props
      var style = {
        height: props.height || "300px",
        lineHeight: props.height || "300px",
        width: props.width || "100%",
        textAlign: "center",
        color: "#999",
        fontSize: "14px",
        fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif"
      }
      this.chartId = this.chartId || props.id || ("chart-" + chartId++)
      return (
        React.createElement("div", {id: this.chartId, style: style},
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

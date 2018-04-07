import React from "react"
import Chartkick from "chartkick"

let chartId = 1

class ChartComponent extends React.Component {
  newChartType(props) {
    const data = props.data
    const options = {}
    for (const prop in props) {
      if (props.hasOwnProperty(prop) && prop !== "data" && prop !== "id" && prop !== "height" && prop !== "width") {
        options[prop] = props[prop]
      }
    }
    if (this.element) {
      if (this.chart) {
        this.chart.updateData(data, options)
      } else {
        this.chart = new props.chartType(this.element, data, options)
      }
    }
  }

  componentDidMount() {
    this.newChartType(this.props)
  }

  componentDidUpdate() {
    this.newChartType(this.props)
  }

  render() {
    const props = this.props
    const style = {
      height: props.height || "300px",
      lineHeight: props.height || "300px",
      width: props.width || "100%",
      textAlign: "center",
      color: "#999",
      fontSize: "14px",
      fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif"
    }
    this.chartId = props.id || this.chartId || ("chart-" + chartId++)
    return (
      React.createElement("div", {id: this.chartId, style: style, ref: (element) => this.element = element},
        "Loading..."
      )
    )
  }
}

const createComponent = (chartType) => {
  return (props) => {
    return React.createElement(ChartComponent, Object.assign({}, props, {chartType: chartType}))
  }
}

export const LineChart = createComponent(Chartkick.LineChart)
export const PieChart = createComponent(Chartkick.PieChart)
export const ColumnChart = createComponent(Chartkick.ColumnChart)
export const BarChart = createComponent(Chartkick.BarChart)
export const AreaChart = createComponent(Chartkick.AreaChart)
export const ScatterChart = createComponent(Chartkick.ScatterChart)
export const GeoChart = createComponent(Chartkick.GeoChart)
export const Timeline = createComponent(Chartkick.Timeline)

export default {
  addAdapter: function(library) {
    Chartkick.addAdapter(library)
  }
}

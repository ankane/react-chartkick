/*
 * React Chartkick
 * Create beautiful charts with one line in React
 * https://github.com/ankane/react-chartkick
 * v0.1.3
 * @license MIT
 */

import React from 'react'
import Chartkick from 'chartkick'

var chartId = 1

var createComponent = (chartType) => {
  return (props) => {
    return React.createElement(ChartComponent, Object.assign({}, props, {chartType: chartType}))
  }
}

class ChartComponent extends React.Component {
  newChartType(props) {
    var data = props.data
    var options = {}
    for (var prop in props) {
      if (props.hasOwnProperty(prop) && prop !== "data" && prop !== "id" && prop !== "height" && prop !== "width") {
        options[prop] = props[prop]
      }
    }
    new props.chartType(this.chartId, data, options)
  }

  componentDidMount() {
    this.newChartType(this.props)
  }

  componentWillUpdate(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.newChartType(nextProps)
    }
  }

  render() {
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
}

export const LineChart = createComponent(Chartkick.LineChart)
export const PieChart = createComponent(Chartkick.PieChart)
export const ColumnChart = createComponent(Chartkick.ColumnChart)
export const BarChart = createComponent(Chartkick.BarChart)
export const AreaChart = createComponent(Chartkick.AreaChart)
export const ScatterChart = createComponent(Chartkick.ScatterChart)
export const GeoChart = createComponent(Chartkick.GeoChart)
export const Timeline = createComponent(Chartkick.Timeline)

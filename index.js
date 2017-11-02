/*
 * React Chartkick
 * Create beautiful charts with one line in React
 * https://github.com/ankane/react-chartkick
 * v0.1.3
 * @license MIT
 */

import React, { Component } from 'react'
import Chartkick from 'chartkick'

var chartId = 0

class ChartComponent extends Component {
  constructor (props) {
    super(props)
    chartId++
  }

  newChartType () {
    var data = this.props.data
    var options = {}
    var chart = this.props.chart
    for (var prop in this.props) {
      if (
        this.props.hasOwnProperty(prop) &&
        prop !== 'data' &&
        prop !== 'id' &&
        prop !== 'height' &&
        prop !== 'width'
      ) {
        options[prop] = this.props[prop]
      }
    }
    return new chart(this.element, data, options)
  }

  componentDidMount () {
    this.newChartType(this.props)
  }

  componentWillUpdate (nextProps) {
    if (this.props.data !== nextProps.data) {
      this.newChartType(nextProps)
    }
  }

  render () {
    var props = this.props
    var style = {
      height: props.height || '300px',
      lineHeight: props.height || '300px',
      width: props.width || '100%',
      textAlign: 'center',
      color: '#999',
      fontSize: '14px',
      fontFamily:
        "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",
    }
    chartId = props.id || chartId || 'chart-' + chartId
    return (
      <div
        ref={element => {
          this.element = element
        }}
        id={chartId}
        style={style}
      >
        Loading...
      </div>
    )
  }
}

var createChartComponent = (chartType, props) => <ChartComponent chart={chartType} {...props} />

export const LineChart = props => createChartComponent(Chartkick.LineChart, props)
export const PieChart = props => createChartComponent(Chartkick.PieChart, props)
export const ColumnChart = props => createChartComponent(Chartkick.ColumnChart, props)
export const BarChart = props => createChartComponent(Chartkick.BarChart, props)
export const AreaChart = props => createChartComponent(Chartkick.AreaChart, props)
export const ScatterChart = props => createChartComponent(Chartkick.ScatterChart, props)
export const GeoChart = props => createChartComponent(Chartkick.GeoChart, props)
export const Timeline = props => createChartComponent(Chartkick.Timeline, props)

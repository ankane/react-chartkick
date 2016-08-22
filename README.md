# React Chartkick

Create beautiful charts with one line in React

[See it in action](http://ankane.github.io/chartkick.js/examples/)

Supports [Chart.js](http://www.chartjs.org/), [Google Charts](https://developers.google.com/chart/), and [Highcharts](http://www.highcharts.com/)

## Charts

Line chart

```jsx
<LineChart data={{"2013-02-10 00:00:00 -0800": 11, "2013-02-11 00:00:00 -0800": 6}} />
```

Pie chart

```jsx
<PieChart data={[["Blueberry", 44],["Strawberry", 23]]} />
```

Column chart

```jsx
<ColumnChart data={[["Sun", 32],["Mon", 46],["Tue", 28]]} />
```

Bar chart

```jsx
<BarChart data={[["Work", 32],["Play", 1492]]} />
```

Area chart

```jsx
<AreaChart data={{"2013-02-10 00:00:00 -0800": 11, "2013-02-11 00:00:00 -0800": 6}} />
```

Scatter chart

```jsx
<ScatterChart data={[[174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9]]} />
```

Geo chart - *Google Charts*

```jsx
<GeoChart data={[["United States",44],["Germany",23],["Brazil",22]]} />
```

Timeline - *Google Charts*

```jsx
<Timeline data={[["Washington", "1789-04-29", "1797-03-03"],["Adams", "1797-03-03", "1801-03-03"]]} />
```

Multiple series

```jsx
data = [
  {"name":"Workout", "data": {"2013-02-10 00:00:00 -0800": 3, "2013-02-17 00:00:00 -0800": 4}},
  {"name":"Call parents", "data": {"2013-02-10 00:00:00 -0800": 5, "2013-02-17 00:00:00 -0800": 3}}
];

// and
<LineChart data={data} />
```

### Say Goodbye To Timeouts

Make your pages load super fast and stop worrying about timeouts. Give each chart its own endpoint.

```jsx
<LineChart data="/stocks" />
```

**Note:** This feature requires [jQuery](http://jquery.com/) or [Zepto](http://zeptojs.com/) at the moment.

### Options

Id, width, and height

```jsx
<LineChart data={data} id="users-chart" width="800px" height="500px" />
```

Min and max values

```jsx
<LineChart data={data} min={1000} max={5000} />
```

`min` defaults to 0 for charts with non-negative values. Use `null` to let the charting library decide.

Colors

```jsx
<LineChart data={data} colors={["pink", "#999"]} />
```

Stacked columns or bars

```jsx
<ColumnChart data={data} stacked={true} />
```

Discrete axis

```jsx
<LineChart data={data} discrete={true} />
```

Label (for single series)

```jsx
<LineChart data={data} label="Value" />
```

Axis titles

```jsx
<LineChart data={data} xtitle="Time" ytitle="Population" />
```

You can pass options directly to the charting library with:

```jsx
<LineChart data={data} library={{backgroundColor: "#eee"}} />
```

See the documentation for [Google Charts](https://developers.google.com/chart/interactive/docs/gallery), [Highcharts](http://api.highcharts.com/highcharts), and [Chart.js](http://www.chartjs.org/docs/) for more info.

## Installation

Run

```sh
npm install chartkick react-chartkick --save
```

And import the chart types you want

```es6
import { LineChart, PieChart } from 'react-chartkick';
```

### Chart.js

Run

```sh
npm install chart.js --save
```

And add

```es6
window.Chart = require('chart.js');
```

### Google Charts

Include

```html
<script src="https://www.google.com/jsapi"></script>
```

### Highcharts

Run

```sh
npm install highcharts --save
```

And add

```javascript
window.Highcharts = require('highcharts');
```

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/ankane/react-chartkick/issues)
- Fix bugs and [submit pull requests](https://github.com/ankane/react-chartkick/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features

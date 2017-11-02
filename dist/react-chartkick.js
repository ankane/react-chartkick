(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("Chartkick"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "Chartkick"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("Chartkick")) : factory(root["React"], root["Chartkick"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = exports.GeoChart = exports.ScatterChart = exports.AreaChart = exports.BarChart = exports.ColumnChart = exports.PieChart = exports.LineChart = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _chartkick = __webpack_require__(2);

var _chartkick2 = _interopRequireDefault(_chartkick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * React Chartkick
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Create beautiful charts with one line in React
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/ankane/react-chartkick
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * v0.1.3
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var chartId = 0;

var ChartComponent = function (_Component) {
  _inherits(ChartComponent, _Component);

  function ChartComponent(props) {
    _classCallCheck(this, ChartComponent);

    var _this = _possibleConstructorReturn(this, (ChartComponent.__proto__ || Object.getPrototypeOf(ChartComponent)).call(this, props));

    chartId++;
    return _this;
  }

  _createClass(ChartComponent, [{
    key: 'newChartType',
    value: function newChartType() {
      var data = this.props.data;
      var options = {};
      var chart = this.props.chart;
      for (var prop in this.props) {
        if (this.props.hasOwnProperty(prop) && prop !== 'data' && prop !== 'id' && prop !== 'height' && prop !== 'width') {
          options[prop] = this.props[prop];
        }
      }
      return new chart(this.element, data, options);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.newChartType(this.props);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (this.props.data !== nextProps.data) {
        this.newChartType(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var style = {
        height: props.height || '300px',
        lineHeight: props.height || '300px',
        width: props.width || '100%',
        textAlign: 'center',
        color: '#999',
        fontSize: '14px',
        fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif"
      };
      chartId = props.id || chartId || 'chart-' + chartId;
      return _react2.default.createElement(
        'div',
        {
          ref: function ref(element) {
            _this2.element = element;
          },
          id: chartId,
          style: style
        },
        'Loading...'
      );
    }
  }]);

  return ChartComponent;
}(_react.Component);

var createChartComponent = function createChartComponent(chartType, props) {
  return _react2.default.createElement(ChartComponent, _extends({ chart: chartType }, props));
};

var LineChart = exports.LineChart = function LineChart(props) {
  return createChartComponent(_chartkick2.default.LineChart, props);
};
var PieChart = exports.PieChart = function PieChart(props) {
  return createChartComponent(_chartkick2.default.PieChart, props);
};
var ColumnChart = exports.ColumnChart = function ColumnChart(props) {
  return createChartComponent(_chartkick2.default.ColumnChart, props);
};
var BarChart = exports.BarChart = function BarChart(props) {
  return createChartComponent(_chartkick2.default.BarChart, props);
};
var AreaChart = exports.AreaChart = function AreaChart(props) {
  return createChartComponent(_chartkick2.default.AreaChart, props);
};
var ScatterChart = exports.ScatterChart = function ScatterChart(props) {
  return createChartComponent(_chartkick2.default.ScatterChart, props);
};
var GeoChart = exports.GeoChart = function GeoChart(props) {
  return createChartComponent(_chartkick2.default.GeoChart, props);
};
var Timeline = exports.Timeline = function Timeline(props) {
  return createChartComponent(_chartkick2.default.Timeline, props);
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});
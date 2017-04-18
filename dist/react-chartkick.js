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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	var chartId = 1;

	var createComponent = function createComponent(chartType) {
	  return function (_React$Component) {
	    _inherits(_class, _React$Component);

	    function _class(props) {
	      _classCallCheck(this, _class);

	      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));
	    }

	    _createClass(_class, [{
	      key: 'newChartType',
	      value: function newChartType(props) {
	        var data = props.data;
	        var options = {};
	        for (var prop in props) {
	          if (props.hasOwnProperty(prop) && prop !== "data" && prop !== "id" && prop !== "height" && prop !== "width") {
	            options[prop] = props[prop];
	          }
	        }
	        new chartType(this.chartId, data, options);
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
	        var props = this.props;
	        var style = {
	          height: props.height || "300px",
	          lineHeight: props.height || "300px",
	          width: props.width || "100%",
	          textAlign: "center",
	          color: "#999",
	          fontSize: "14px",
	          fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif"
	        };
	        this.chartId = this.chartId || props.id || "chart-" + chartId++;
	        return _react2.default.createElement("div", { id: this.chartId, style: style }, "Loading...");
	      }
	    }]);

	    return _class;
	  }(_react2.default.Component);
	};

	module.exports = {
	  LineChart: createComponent(_chartkick2.default.LineChart),
	  PieChart: createComponent(_chartkick2.default.PieChart),
	  ColumnChart: createComponent(_chartkick2.default.ColumnChart),
	  BarChart: createComponent(_chartkick2.default.BarChart),
	  AreaChart: createComponent(_chartkick2.default.AreaChart),
	  ScatterChart: createComponent(_chartkick2.default.ScatterChart),
	  GeoChart: createComponent(_chartkick2.default.GeoChart),
	  Timeline: createComponent(_chartkick2.default.Timeline)
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
/*!
 * Tabs component for Akili framework
 * 
 * @version 1.0.4
 * @author Alexandr Balasyan <mywebstreet@gmail.com>
 * {@link https://github.com/ortexx/akili-tabs}
 * {@link https://github.com/ortexx/akili}
 * {@link https://akilijs.com}
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Akili"));
	else if(typeof define === 'function' && define.amd)
		define(["Akili"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("Akili")) : factory(root["Akili"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
exports.TabTitle = exports.TabPane = exports.TabContent = exports.TabMenu = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(1);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _akili2.default.Component;
var For = _akili2.default.components.For;
var Loop = _akili2.default.components.For.Loop;

/**
 * Component to work with tabs.
 * 
 * @tag tabs  
 * @attr {number} active - actual tab index
 * @message {number} tab - sent on active tab change 
 */

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  _createClass(Tabs, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('tabs', this);
      _akili2.default.component('tab-menu', this.TabMenu);
      _akili2.default.component('tab-content', this.TabContent);
      _akili2.default.component('tab-title', this.TabTitle);
      _akili2.default.component('tab-pane', this.TabPane);
    }
  }]);

  function Tabs() {
    var _ref;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args)));

    _this.scope.active = _this.active = null;
    return _this;
  }

  _createClass(Tabs, [{
    key: 'resolved',
    value: function resolved() {
      var menuChild = this.child(function (c) {
        return c instanceof TabMenu;
      });
      var contentChild = this.child(function (c) {
        return c instanceof TabContent;
      });

      if (!menuChild) {
        throw new Error('Component "tabs" must have "tab-menu" component inside itself');
      }

      if (!contentChild) {
        throw new Error('Component "tabs" must have "tab-content" component inside itself');
      }

      var titleLength = menuChild.getTabs().length;
      var paneLength = contentChild.getTabs().length;

      if (titleLength != paneLength) {
        throw new Error('"tab-title" and "tab-content" components count is different: ' + titleLength + '/' + paneLength);
      }

      this.attr('active', this.setActiveTab, { callOnStart: true });
    }
  }, {
    key: 'setActiveTab',
    value: function setActiveTab() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var tabs = this.child(function (c) {
        return c instanceof TabMenu;
      }).getTabs();
      var lastActive = this.active;

      if (tabs[index] === undefined) {
        throw new Error('"tabs" component index "' + index + '" is out of range');
      }

      this.scope.active = this.active = index;

      if (!tabs.length) {
        // eslint-disable-next-line no-console
        _akili2.default.options.debug && console.warn('Not found any child component "tab-title" for "tab-menu"');
      }

      for (var i = 0, l = tabs.length; i < l; i++) {
        tabs[i].setActivity(i == index);
      }

      lastActive != this.active && this.attrs.onTab.trigger(index, { bubbles: true });
    }
  }]);

  return Tabs;
}(Component);

/**
 * Component to control the titles.
 * 
 * @attr [in] @see For
 */


Tabs.events = ['tab'];
exports.default = Tabs;

var TabMenu = exports.TabMenu = function (_For) {
  _inherits(TabMenu, _For);

  function TabMenu() {
    var _ref2;

    _classCallCheck(this, TabMenu);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _this2 = _possibleConstructorReturn(this, (_ref2 = TabMenu.__proto__ || Object.getPrototypeOf(TabMenu)).call.apply(_ref2, [this].concat(args)));

    _this2.iterable = _this2.el.hasAttribute('in');
    _this2.childSelector = function (c) {
      return c instanceof TabTitle;
    };
    return _this2;
  }

  _createClass(TabMenu, [{
    key: 'created',
    value: function created() {
      if (this.iterable) {
        return _get(TabMenu.prototype.__proto__ || Object.getPrototypeOf(TabMenu.prototype), 'created', this).apply(this, arguments);
      }
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      if (this.iterable) {
        return _get(TabMenu.prototype.__proto__ || Object.getPrototypeOf(TabMenu.prototype), 'compiled', this).apply(this, arguments);
      }
    }
  }, {
    key: 'getTabs',
    value: function getTabs() {
      return this.children(this.childSelector, 0);
    }
  }, {
    key: 'getTabIndex',
    value: function getTabIndex(tab) {
      return this.getTabs().indexOf(tab);
    }
  }, {
    key: 'getTabsByIndex',
    value: function getTabsByIndex(i) {
      return this.getTabs()[i];
    }
  }]);

  return TabMenu;
}(For);

/**
 * Component to control the body.
 * 
 * @attr [in] @see For
 */


TabMenu.matches = '';

var TabContent = exports.TabContent = function (_TabMenu) {
  _inherits(TabContent, _TabMenu);

  function TabContent() {
    var _ref3;

    _classCallCheck(this, TabContent);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var _this3 = _possibleConstructorReturn(this, (_ref3 = TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call.apply(_ref3, [this].concat(args)));

    _this3.childSelector = function (c) {
      return c instanceof TabPane;
    };
    return _this3;
  }

  return TabContent;
}(TabMenu);

/**
 * Component to work with the body items.
 * 
 * @attr @see Loop
 * @attr [recreate] @see Akili.component.If
 * @scope {boolean} isActiveTab - the current tab active or not
 */


var TabPane = exports.TabPane = function (_Loop) {
  _inherits(TabPane, _Loop);

  function TabPane() {
    var _ref4;

    _classCallCheck(this, TabPane);

    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    var _this4 = _possibleConstructorReturn(this, (_ref4 = TabPane.__proto__ || Object.getPrototypeOf(TabPane)).call.apply(_ref4, [this].concat(args)));

    if (!_this4.el.parentNode.__akili || !(_this4.el.parentNode.__akili instanceof TabContent)) {
      var _ret;

      // eslint-disable-next-line no-console
      _akili2.default.options.debug && console.warn('Not found parent component "tab-content" for "tab-pane"');
      return _ret = _this4.cancel(), _possibleConstructorReturn(_this4, _ret);
    }

    _this4.scope.recreate = false;
    _this4.scope.isActiveTab = _this4.isActive = false;
    return _this4;
  }

  _createClass(TabPane, [{
    key: 'compiled',
    value: function compiled() {
      this.attr('recreate', this.setRecreation);
      return _get(TabPane.prototype.__proto__ || Object.getPrototypeOf(TabPane.prototype), 'compiled', this).apply(this, arguments);
    }
  }, {
    key: 'setRecreation',
    value: function setRecreation(value) {
      this.scope.recreate = value;
    }
  }, {
    key: 'setActivity',
    value: function setActivity(activity) {
      this.scope.isActiveTab = this.isActive = activity;
    }
  }]);

  return TabPane;
}(Loop);

/**
 * Component to work with the title items.
 * 
 * @attr @see Loop
 * @scope {boolean} isActiveTab - the current tab active or not
 */


TabPane.template = '<if recreate="${this.recreate}" is="${this.isActiveTab}">${this.__content}</if>';
TabPane.booleanAttributes = ['recreate'];

var TabTitle = exports.TabTitle = function (_Loop2) {
  _inherits(TabTitle, _Loop2);

  function TabTitle() {
    var _ref5;

    _classCallCheck(this, TabTitle);

    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    var _this5 = _possibleConstructorReturn(this, (_ref5 = TabTitle.__proto__ || Object.getPrototypeOf(TabTitle)).call.apply(_ref5, [this].concat(args)));

    if (!_this5.el.parentNode.__akili || !(_this5.el.parentNode.__akili instanceof TabMenu)) {
      var _ret2;

      // eslint-disable-next-line no-console
      _akili2.default.options.debug && console.warn('Not found parent component "tab-menu" for "tab-title"');
      return _ret2 = _this5.cancel(), _possibleConstructorReturn(_this5, _ret2);
    }

    _this5.scope.isActiveTab = _this5.isActive = false;
    return _this5;
  }

  _createClass(TabTitle, [{
    key: 'created',
    value: function created() {
      this.tabs = this.parent(function (c) {
        return c instanceof Tabs;
      });
      return _get(TabTitle.prototype.__proto__ || Object.getPrototypeOf(TabTitle.prototype), 'created', this).apply(this, arguments);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      var _this6 = this;

      this.index = this.tabs.child(function (c) {
        return c instanceof TabMenu;
      }).getTabIndex(this);
      this.el.addEventListener('click', function () {
        return _this6.tabs.setActiveTab(_this6.index);
      });
      return _get(TabTitle.prototype.__proto__ || Object.getPrototypeOf(TabTitle.prototype), 'compiled', this).apply(this, arguments);
    }
  }, {
    key: 'setActivity',
    value: function setActivity(activity) {
      this.scope.isActiveTab = this.isActive = activity;
      this.tabs.child(function (c) {
        return c instanceof TabContent;
      }).getTabsByIndex(this.index).setActivity(activity);
    }
  }]);

  return TabTitle;
}(Loop);

Tabs.TabMenu = TabMenu;
Tabs.TabTitle = TabTitle;
Tabs.TabContent = TabContent;
Tabs.TabPane = TabPane;
_akili2.default.components.Tabs = Tabs;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJBa2lsaVwiIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkFraWxpIiwiRm9yIiwiY29tcG9uZW50cyIsIkxvb3AiLCJUYWJzIiwiY29tcG9uZW50IiwiVGFiTWVudSIsIlRhYkNvbnRlbnQiLCJUYWJUaXRsZSIsIlRhYlBhbmUiLCJhcmdzIiwic2NvcGUiLCJhY3RpdmUiLCJtZW51Q2hpbGQiLCJjaGlsZCIsImMiLCJjb250ZW50Q2hpbGQiLCJFcnJvciIsInRpdGxlTGVuZ3RoIiwiZ2V0VGFicyIsImxlbmd0aCIsInBhbmVMZW5ndGgiLCJhdHRyIiwic2V0QWN0aXZlVGFiIiwiY2FsbE9uU3RhcnQiLCJpbmRleCIsInRhYnMiLCJsYXN0QWN0aXZlIiwidW5kZWZpbmVkIiwib3B0aW9ucyIsImRlYnVnIiwiY29uc29sZSIsIndhcm4iLCJpIiwibCIsInNldEFjdGl2aXR5IiwiYXR0cnMiLCJvblRhYiIsInRyaWdnZXIiLCJidWJibGVzIiwiZXZlbnRzIiwiaXRlcmFibGUiLCJlbCIsImhhc0F0dHJpYnV0ZSIsImNoaWxkU2VsZWN0b3IiLCJhcHBseSIsImFyZ3VtZW50cyIsImNoaWxkcmVuIiwidGFiIiwiaW5kZXhPZiIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsImNhbmNlbCIsInJlY3JlYXRlIiwiaXNBY3RpdmVUYWIiLCJpc0FjdGl2ZSIsInNldFJlY3JlYXRpb24iLCJ2YWx1ZSIsImFjdGl2aXR5IiwidGVtcGxhdGUiLCJib29sZWFuQXR0cmlidXRlcyIsInBhcmVudCIsImdldFRhYkluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldFRhYnNCeUluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsZ0JBQU1ELFNBQXhCO0FBQ0EsSUFBTUUsTUFBTUQsZ0JBQU1FLFVBQU4sQ0FBaUJELEdBQTdCO0FBQ0EsSUFBTUUsT0FBT0gsZ0JBQU1FLFVBQU4sQ0FBaUJELEdBQWpCLENBQXFCRSxJQUFsQzs7QUFFQTs7Ozs7Ozs7SUFPcUJDLEk7Ozs7OzZCQUdIO0FBQ2RKLHNCQUFNSyxTQUFOLENBQWdCLE1BQWhCLEVBQXdCLElBQXhCO0FBQ0FMLHNCQUFNSyxTQUFOLENBQWdCLFVBQWhCLEVBQTRCLEtBQUtDLE9BQWpDO0FBQ0FOLHNCQUFNSyxTQUFOLENBQWdCLGFBQWhCLEVBQStCLEtBQUtFLFVBQXBDO0FBQ0FQLHNCQUFNSyxTQUFOLENBQWdCLFdBQWhCLEVBQTZCLEtBQUtHLFFBQWxDO0FBQ0FSLHNCQUFNSyxTQUFOLENBQWdCLFVBQWhCLEVBQTRCLEtBQUtJLE9BQWpDO0FBQ0Q7OztBQUVELGtCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSx1SUFDVkEsSUFEVTs7QUFHbkIsVUFBS0MsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLE1BQUtBLE1BQUwsR0FBYyxJQUFsQztBQUhtQjtBQUlwQjs7OzsrQkFFVTtBQUNULFVBQU1DLFlBQVksS0FBS0MsS0FBTCxDQUFXO0FBQUEsZUFBS0MsYUFBYVQsT0FBbEI7QUFBQSxPQUFYLENBQWxCO0FBQ0EsVUFBTVUsZUFBZSxLQUFLRixLQUFMLENBQVc7QUFBQSxlQUFLQyxhQUFhUixVQUFsQjtBQUFBLE9BQVgsQ0FBckI7O0FBRUEsVUFBRyxDQUFDTSxTQUFKLEVBQWU7QUFDYixjQUFNLElBQUlJLEtBQUosaUVBQU47QUFDRDs7QUFFRCxVQUFHLENBQUNELFlBQUosRUFBa0I7QUFDaEIsY0FBTSxJQUFJQyxLQUFKLG9FQUFOO0FBQ0Q7O0FBRUQsVUFBTUMsY0FBY0wsVUFBVU0sT0FBVixHQUFvQkMsTUFBeEM7QUFDQSxVQUFNQyxhQUFhTCxhQUFhRyxPQUFiLEdBQXVCQyxNQUExQzs7QUFFQSxVQUFHRixlQUFlRyxVQUFsQixFQUE4QjtBQUM1QixjQUFNLElBQUlKLEtBQUosbUVBQTBFQyxXQUExRSxTQUF5RkcsVUFBekYsQ0FBTjtBQUNEOztBQUVELFdBQUtDLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEtBQUtDLFlBQXpCLEVBQXVDLEVBQUVDLGFBQWEsSUFBZixFQUF2QztBQUNEOzs7bUNBRXVCO0FBQUEsVUFBWEMsS0FBVyx1RUFBSCxDQUFHOztBQUN0QixVQUFJQyxPQUFPLEtBQUtaLEtBQUwsQ0FBVztBQUFBLGVBQUtDLGFBQWFULE9BQWxCO0FBQUEsT0FBWCxFQUFzQ2EsT0FBdEMsRUFBWDtBQUNBLFVBQUlRLGFBQWEsS0FBS2YsTUFBdEI7O0FBRUEsVUFBR2MsS0FBS0QsS0FBTCxNQUFnQkcsU0FBbkIsRUFBOEI7QUFDNUIsY0FBTSxJQUFJWCxLQUFKLDhCQUFxQ1EsS0FBckMsdUJBQU47QUFDRDs7QUFFRCxXQUFLZCxLQUFMLENBQVdDLE1BQVgsR0FBb0IsS0FBS0EsTUFBTCxHQUFjYSxLQUFsQzs7QUFFQSxVQUFHLENBQUNDLEtBQUtOLE1BQVQsRUFBaUI7QUFDZjtBQUNBcEIsd0JBQU02QixPQUFOLENBQWNDLEtBQWQsSUFBdUJDLFFBQVFDLElBQVIsQ0FBYSwwREFBYixDQUF2QjtBQUNEOztBQUVELFdBQUssSUFBSUMsSUFBSSxDQUFSLEVBQVdDLElBQUlSLEtBQUtOLE1BQXpCLEVBQWlDYSxJQUFJQyxDQUFyQyxFQUF3Q0QsR0FBeEMsRUFBNkM7QUFDM0NQLGFBQUtPLENBQUwsRUFBUUUsV0FBUixDQUFvQkYsS0FBS1IsS0FBekI7QUFDRDs7QUFFREUsb0JBQWMsS0FBS2YsTUFBbkIsSUFBNkIsS0FBS3dCLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsT0FBakIsQ0FBeUJiLEtBQXpCLEVBQWdDLEVBQUVjLFNBQVMsSUFBWCxFQUFoQyxDQUE3QjtBQUNEOzs7O0VBM0QrQnhDLFM7O0FBOERsQzs7Ozs7OztBQTlEcUJLLEksQ0FDWm9DLE0sR0FBUyxDQUFDLEtBQUQsQztrQkFER3BDLEk7O0lBbUVSRSxPLFdBQUFBLE87OztBQUdYLHFCQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFOSSxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxnSkFDVkEsSUFEVTs7QUFHbkIsV0FBSytCLFFBQUwsR0FBZ0IsT0FBS0MsRUFBTCxDQUFRQyxZQUFSLENBQXFCLElBQXJCLENBQWhCO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQjtBQUFBLGFBQUs3QixhQUFhUCxRQUFsQjtBQUFBLEtBQXJCO0FBSm1CO0FBS3BCOzs7OzhCQUVTO0FBQ1IsVUFBRyxLQUFLaUMsUUFBUixFQUFrQjtBQUNoQixlQUFPLCtGQUFjSSxLQUFkLENBQW9CLElBQXBCLEVBQTBCQyxTQUExQixDQUFQO0FBQ0Q7QUFDRjs7OytCQUVVO0FBQ1QsVUFBRyxLQUFLTCxRQUFSLEVBQWtCO0FBQ2hCLGVBQU8sZ0dBQWVJLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkJDLFNBQTNCLENBQVA7QUFDRDtBQUNGOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFLSCxhQUFuQixFQUFrQyxDQUFsQyxDQUFQO0FBQ0Q7OztnQ0FFV0ksRyxFQUFLO0FBQ2YsYUFBTyxLQUFLN0IsT0FBTCxHQUFlOEIsT0FBZixDQUF1QkQsR0FBdkIsQ0FBUDtBQUNEOzs7bUNBRWNmLEMsRUFBRztBQUNoQixhQUFPLEtBQUtkLE9BQUwsR0FBZWMsQ0FBZixDQUFQO0FBQ0Q7Ozs7RUFoQzBCaEMsRzs7QUFtQzdCOzs7Ozs7O0FBbkNhSyxPLENBQ0o0QyxPLEdBQVUsRTs7SUF1Q04zQyxVLFdBQUFBLFU7OztBQUNYLHdCQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFORyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxzSkFDVkEsSUFEVTs7QUFHbkIsV0FBS2tDLGFBQUwsR0FBcUI7QUFBQSxhQUFLN0IsYUFBYU4sT0FBbEI7QUFBQSxLQUFyQjtBQUhtQjtBQUlwQjs7O0VBTDZCSCxPOztBQVFoQzs7Ozs7Ozs7O0lBT2FHLE8sV0FBQUEsTzs7O0FBSVgscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsdUNBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGdKQUNWQSxJQURVOztBQUduQixRQUFHLENBQUMsT0FBS2dDLEVBQUwsQ0FBUVMsVUFBUixDQUFtQkMsT0FBcEIsSUFBK0IsRUFBRSxPQUFLVixFQUFMLENBQVFTLFVBQVIsQ0FBbUJDLE9BQW5CLFlBQXNDN0MsVUFBeEMsQ0FBbEMsRUFBdUY7QUFBQTs7QUFDckY7QUFDQVAsc0JBQU02QixPQUFOLENBQWNDLEtBQWQsSUFBdUJDLFFBQVFDLElBQVIsQ0FBYSx5REFBYixDQUF2QjtBQUNBLG9CQUFPLE9BQUtxQixNQUFMLEVBQVA7QUFDRDs7QUFFRCxXQUFLMUMsS0FBTCxDQUFXMkMsUUFBWCxHQUFzQixLQUF0QjtBQUNBLFdBQUszQyxLQUFMLENBQVc0QyxXQUFYLEdBQXlCLE9BQUtDLFFBQUwsR0FBZ0IsS0FBekM7QUFWbUI7QUFXcEI7Ozs7K0JBRVU7QUFDVCxXQUFLbEMsSUFBTCxDQUFVLFVBQVYsRUFBc0IsS0FBS21DLGFBQTNCO0FBQ0EsYUFBTyxnR0FBZVosS0FBZixDQUFxQixJQUFyQixFQUEyQkMsU0FBM0IsQ0FBUDtBQUNEOzs7a0NBRWFZLEssRUFBTztBQUNuQixXQUFLL0MsS0FBTCxDQUFXMkMsUUFBWCxHQUFzQkksS0FBdEI7QUFDRDs7O2dDQUVXQyxRLEVBQVU7QUFDcEIsV0FBS2hELEtBQUwsQ0FBVzRDLFdBQVgsR0FBeUIsS0FBS0MsUUFBTCxHQUFnQkcsUUFBekM7QUFDRDs7OztFQTVCMEJ4RCxJOztBQStCN0I7Ozs7Ozs7O0FBL0JhTSxPLENBQ0ptRCxRLEdBQVcsaUY7QUFEUG5ELE8sQ0FFSm9ELGlCLEdBQW9CLENBQUMsVUFBRCxDOztJQW1DaEJyRCxRLFdBQUFBLFE7OztBQUNYLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFORSxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxrSkFDVkEsSUFEVTs7QUFHbkIsUUFBRyxDQUFDLE9BQUtnQyxFQUFMLENBQVFTLFVBQVIsQ0FBbUJDLE9BQXBCLElBQStCLEVBQUUsT0FBS1YsRUFBTCxDQUFRUyxVQUFSLENBQW1CQyxPQUFuQixZQUFzQzlDLE9BQXhDLENBQWxDLEVBQW9GO0FBQUE7O0FBQ2xGO0FBQ0FOLHNCQUFNNkIsT0FBTixDQUFjQyxLQUFkLElBQXVCQyxRQUFRQyxJQUFSLENBQWEsdURBQWIsQ0FBdkI7QUFDQSxxQkFBTyxPQUFLcUIsTUFBTCxFQUFQO0FBQ0Q7O0FBRUQsV0FBSzFDLEtBQUwsQ0FBVzRDLFdBQVgsR0FBeUIsT0FBS0MsUUFBTCxHQUFnQixLQUF6QztBQVRtQjtBQVVwQjs7Ozs4QkFFUztBQUNSLFdBQUs5QixJQUFMLEdBQVksS0FBS29DLE1BQUwsQ0FBWTtBQUFBLGVBQUsvQyxhQUFhWCxJQUFsQjtBQUFBLE9BQVosQ0FBWjtBQUNBLGFBQU8saUdBQWN5QyxLQUFkLENBQW9CLElBQXBCLEVBQTBCQyxTQUExQixDQUFQO0FBQ0Q7OzsrQkFFVTtBQUFBOztBQUNULFdBQUtyQixLQUFMLEdBQWEsS0FBS0MsSUFBTCxDQUFVWixLQUFWLENBQWdCO0FBQUEsZUFBS0MsYUFBYVQsT0FBbEI7QUFBQSxPQUFoQixFQUEyQ3lELFdBQTNDLENBQXVELElBQXZELENBQWI7QUFDQSxXQUFLckIsRUFBTCxDQUFRc0IsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0M7QUFBQSxlQUFNLE9BQUt0QyxJQUFMLENBQVVILFlBQVYsQ0FBdUIsT0FBS0UsS0FBNUIsQ0FBTjtBQUFBLE9BQWxDO0FBQ0EsYUFBTyxrR0FBZW9CLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkJDLFNBQTNCLENBQVA7QUFDRDs7O2dDQUVXYSxRLEVBQVU7QUFDcEIsV0FBS2hELEtBQUwsQ0FBVzRDLFdBQVgsR0FBeUIsS0FBS0MsUUFBTCxHQUFnQkcsUUFBekM7QUFDQSxXQUFLakMsSUFBTCxDQUFVWixLQUFWLENBQWdCO0FBQUEsZUFBS0MsYUFBYVIsVUFBbEI7QUFBQSxPQUFoQixFQUE4QzBELGNBQTlDLENBQTZELEtBQUt4QyxLQUFsRSxFQUF5RVUsV0FBekUsQ0FBcUZ3QixRQUFyRjtBQUNEOzs7O0VBM0IyQnhELEk7O0FBOEI5QkMsS0FBS0UsT0FBTCxHQUFlQSxPQUFmO0FBQ0FGLEtBQUtJLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0FKLEtBQUtHLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0FILEtBQUtLLE9BQUwsR0FBZUEsT0FBZjtBQUNBVCxnQkFBTUUsVUFBTixDQUFpQkUsSUFBakIsR0FBd0JBLElBQXhCLEM7Ozs7OztBQzlNQSxnRCIsImZpbGUiOiJha2lsaS10YWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQWtpbGlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQWtpbGlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIkFraWxpXCIpKSA6IGZhY3Rvcnkocm9vdFtcIkFraWxpXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEFraWxpIGZyb20gJ2FraWxpJztcblxuY29uc3QgQ29tcG9uZW50ID0gQWtpbGkuQ29tcG9uZW50O1xuY29uc3QgRm9yID0gQWtpbGkuY29tcG9uZW50cy5Gb3I7XG5jb25zdCBMb29wID0gQWtpbGkuY29tcG9uZW50cy5Gb3IuTG9vcDtcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHRhYnMuXG4gKiBcbiAqIEB0YWcgdGFicyAgXG4gKiBAYXR0ciB7bnVtYmVyfSBhY3RpdmUgLSBhY3R1YWwgdGFiIGluZGV4XG4gKiBAbWVzc2FnZSB7bnVtYmVyfSB0YWIgLSBzZW50IG9uIGFjdGl2ZSB0YWIgY2hhbmdlIFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGV2ZW50cyA9IFsndGFiJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYnMnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi1tZW51JywgdGhpcy5UYWJNZW51KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi1jb250ZW50JywgdGhpcy5UYWJDb250ZW50KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi10aXRsZScsIHRoaXMuVGFiVGl0bGUpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGFiLXBhbmUnLCB0aGlzLlRhYlBhbmUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zY29wZS5hY3RpdmUgPSB0aGlzLmFjdGl2ZSA9IG51bGw7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICBjb25zdCBtZW51Q2hpbGQgPSB0aGlzLmNoaWxkKGMgPT4gYyBpbnN0YW5jZW9mIFRhYk1lbnUpO1xuICAgIGNvbnN0IGNvbnRlbnRDaGlsZCA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiQ29udGVudCk7XG5cbiAgICBpZighbWVudUNoaWxkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbXBvbmVudCBcInRhYnNcIiBtdXN0IGhhdmUgXCJ0YWItbWVudVwiIGNvbXBvbmVudCBpbnNpZGUgaXRzZWxmYCk7XG4gICAgfVxuXG4gICAgaWYoIWNvbnRlbnRDaGlsZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCJ0YWJzXCIgbXVzdCBoYXZlIFwidGFiLWNvbnRlbnRcIiBjb21wb25lbnQgaW5zaWRlIGl0c2VsZmApO1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlTGVuZ3RoID0gbWVudUNoaWxkLmdldFRhYnMoKS5sZW5ndGg7XG4gICAgY29uc3QgcGFuZUxlbmd0aCA9IGNvbnRlbnRDaGlsZC5nZXRUYWJzKCkubGVuZ3RoO1xuXG4gICAgaWYodGl0bGVMZW5ndGggIT0gcGFuZUxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcInRhYi10aXRsZVwiIGFuZCBcInRhYi1jb250ZW50XCIgY29tcG9uZW50cyBjb3VudCBpcyBkaWZmZXJlbnQ6ICR7dGl0bGVMZW5ndGh9LyR7cGFuZUxlbmd0aH1gKTtcbiAgICB9XG5cbiAgICB0aGlzLmF0dHIoJ2FjdGl2ZScsIHRoaXMuc2V0QWN0aXZlVGFiLCB7IGNhbGxPblN0YXJ0OiB0cnVlIH0pO1xuICB9XG5cbiAgc2V0QWN0aXZlVGFiKGluZGV4ID0gMCkge1xuICAgIGxldCB0YWJzID0gdGhpcy5jaGlsZChjID0+IGMgaW5zdGFuY2VvZiBUYWJNZW51KS5nZXRUYWJzKCk7XG4gICAgbGV0IGxhc3RBY3RpdmUgPSB0aGlzLmFjdGl2ZTtcblxuICAgIGlmKHRhYnNbaW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXCJ0YWJzXCIgY29tcG9uZW50IGluZGV4IFwiJHtpbmRleH1cIiBpcyBvdXQgb2YgcmFuZ2VgKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlLmFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gaW5kZXg7XG5cbiAgICBpZighdGFicy5sZW5ndGgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBBa2lsaS5vcHRpb25zLmRlYnVnICYmIGNvbnNvbGUud2FybignTm90IGZvdW5kIGFueSBjaGlsZCBjb21wb25lbnQgXCJ0YWItdGl0bGVcIiBmb3IgXCJ0YWItbWVudVwiJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0YWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGFic1tpXS5zZXRBY3Rpdml0eShpID09IGluZGV4KTtcbiAgICB9XG5cbiAgICBsYXN0QWN0aXZlICE9IHRoaXMuYWN0aXZlICYmIHRoaXMuYXR0cnMub25UYWIudHJpZ2dlcihpbmRleCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIGNvbnRyb2wgdGhlIHRpdGxlcy5cbiAqIFxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICovXG5leHBvcnQgY2xhc3MgVGFiTWVudSBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICAgIHRoaXMuY2hpbGRTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFRhYlRpdGxlO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICBpZih0aGlzLml0ZXJhYmxlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IFxuICB9XG5cbiAgZ2V0VGFicygpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbih0aGlzLmNoaWxkU2VsZWN0b3IsIDApO1xuICB9XG5cbiAgZ2V0VGFiSW5kZXgodGFiKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGFicygpLmluZGV4T2YodGFiKTtcbiAgfVxuXG4gIGdldFRhYnNCeUluZGV4KGkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUYWJzKClbaV07XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gY29udHJvbCB0aGUgYm9keS5cbiAqIFxuICogQGF0dHIgW2luXSBAc2VlIEZvclxuICovXG5leHBvcnQgY2xhc3MgVGFiQ29udGVudCBleHRlbmRzIFRhYk1lbnUge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmNoaWxkU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBUYWJQYW5lO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0aGUgYm9keSBpdGVtcy5cbiAqIFxuICogQGF0dHIgQHNlZSBMb29wXG4gKiBAYXR0ciBbcmVjcmVhdGVdIEBzZWUgQWtpbGkuY29tcG9uZW50LklmXG4gKiBAc2NvcGUge2Jvb2xlYW59IGlzQWN0aXZlVGFiIC0gdGhlIGN1cnJlbnQgdGFiIGFjdGl2ZSBvciBub3RcbiAqL1xuZXhwb3J0IGNsYXNzIFRhYlBhbmUgZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxpZiByZWNyZWF0ZT1cIiR7dGhpcy5yZWNyZWF0ZX1cIiBpcz1cIiR7dGhpcy5pc0FjdGl2ZVRhYn1cIj4ke3RoaXMuX19jb250ZW50fTwvaWY+JztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmKCF0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSB8fCAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgVGFiQ29udGVudCkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBBa2lsaS5vcHRpb25zLmRlYnVnICYmIGNvbnNvbGUud2FybignTm90IGZvdW5kIHBhcmVudCBjb21wb25lbnQgXCJ0YWItY29udGVudFwiIGZvciBcInRhYi1wYW5lXCInKTtcbiAgICAgIHJldHVybiB0aGlzLmNhbmNlbCgpO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlVGFiID0gdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7ICAgIFxuICAgIHRoaXMuYXR0cigncmVjcmVhdGUnLCB0aGlzLnNldFJlY3JlYXRpb24pO1xuICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuc2NvcGUucmVjcmVhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2aXR5KSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVRhYiA9IHRoaXMuaXNBY3RpdmUgPSBhY3Rpdml0eTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggdGhlIHRpdGxlIGl0ZW1zLlxuICogXG4gKiBAYXR0ciBAc2VlIExvb3BcbiAqIEBzY29wZSB7Ym9vbGVhbn0gaXNBY3RpdmVUYWIgLSB0aGUgY3VycmVudCB0YWIgYWN0aXZlIG9yIG5vdFxuICovXG5leHBvcnQgY2xhc3MgVGFiVGl0bGUgZXh0ZW5kcyBMb29wIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYoIXRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIHx8ICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBUYWJNZW51KSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIEFraWxpLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZS53YXJuKCdOb3QgZm91bmQgcGFyZW50IGNvbXBvbmVudCBcInRhYi1tZW51XCIgZm9yIFwidGFiLXRpdGxlXCInKTtcbiAgICAgIHJldHVybiB0aGlzLmNhbmNlbCgpO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVUYWIgPSB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMudGFicyA9IHRoaXMucGFyZW50KGMgPT4gYyBpbnN0YW5jZW9mIFRhYnMpO1xuICAgIHJldHVybiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHsgICBcbiAgICB0aGlzLmluZGV4ID0gdGhpcy50YWJzLmNoaWxkKGMgPT4gYyBpbnN0YW5jZW9mIFRhYk1lbnUpLmdldFRhYkluZGV4KHRoaXMpO1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRhYnMuc2V0QWN0aXZlVGFiKHRoaXMuaW5kZXgpKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2aXR5KSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVRhYiA9IHRoaXMuaXNBY3RpdmUgPSBhY3Rpdml0eTtcbiAgICB0aGlzLnRhYnMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiQ29udGVudCkuZ2V0VGFic0J5SW5kZXgodGhpcy5pbmRleCkuc2V0QWN0aXZpdHkoYWN0aXZpdHkpO1xuICB9XG59XG5cblRhYnMuVGFiTWVudSA9IFRhYk1lbnU7XG5UYWJzLlRhYlRpdGxlID0gVGFiVGl0bGU7XG5UYWJzLlRhYkNvbnRlbnQgPSBUYWJDb250ZW50O1xuVGFicy5UYWJQYW5lID0gVGFiUGFuZTtcbkFraWxpLmNvbXBvbmVudHMuVGFicyA9IFRhYnM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXzsiXSwic291cmNlUm9vdCI6IiJ9
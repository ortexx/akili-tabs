/*!
 * Tabs component for Akili framework
 * 
 * @version 0.1.0
 * @author Alexandr Balasyan <mywebstreet@gmail.com>
 * {@link https://github.com/ortexx/akili-tabs}
 * {@link https://github.com/ortexx/akili}
 * {@link https://akilijs.com}
 */
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.services = exports.components = undefined;

var _component2 = __webpack_require__(1);

var _component3 = _interopRequireDefault(_component2);

var _if = __webpack_require__(11);

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(4);

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(15);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(13);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(14);

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(16);

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(10);

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(12);

var _include2 = _interopRequireDefault(_include);

var _route = __webpack_require__(6);

var _route2 = _interopRequireDefault(_route);

var _a = __webpack_require__(9);

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(17);

var _scope2 = _interopRequireDefault(_scope);

var _eventEmitter = __webpack_require__(7);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _request = __webpack_require__(3);

var _request2 = _interopRequireDefault(_request);

var _router = __webpack_require__(8);

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Akili = {}; /**
                 * Javascript framework
                 *
                 * const Akili = makeItEasy(js + html);
                 *
                 * @author Alexandr Balasyan <mywebstreet@gmail.com>
                 * @link http://akilijs.com
                 */

Akili.options = {
  nestedWatching: true,
  showEvaluationErrors: true,
  debug: true
};

Akili.__init = false;
Akili.__components = {};
Akili.__aliases = {};
Akili.__scopes = {};
Akili.__isolation = null;
Akili.__evaluation = null;

Akili.htmlBooleanAttributes = ['disabled', 'contenteditable', 'hidden'];

Akili.components = {};
Akili.decorators = {};
Akili.services = {};

/**
 * Join binding keys
 *
 * @param {string[]} keys binding keys
 */
Akili.joinBindingKeys = function (keys) {
  return keys.map(function (el) {
    return el.toString();
  }).join('.');
};

/**
 * Add scope to the scopes list
 *
 * @param scope
 */
Akili.addScope = function (scope) {
  if (this.__scopes[scope.__name]) {
    throw new Error('Scope name ' + scope.__name + ' already exists');
  }

  this.__scopes[scope.__name] = scope;
};

/**
 * Get scope from the scopes list
 *
 * @param {string} name - scope name
 * @returns {Scope}
 */
Akili.getScope = function (name) {
  return this.__scopes[name];
};

/**
 * Delete scope from the scopes list
 *
 * @param {string} name - scope name
 */
Akili.removeScope = function (name) {
  var scope = this.__scopes[name];

  scope.__component = null;
  scope.__el = null;
  scope.__parent = null;
  this.__scopes[name] = null;
  delete this.__scopes[name];
};

/**
 * Get all elements with attached Akili components
 *
 * @param {HTMLElement} el
 * @param {boolean} [tree=true] - return array of the parents if true, closest parent if false
 * @returns {Array|HTMLElement|null}
 */
Akili.getAkiliParents = function (el) {
  var tree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var arr = [];

  function check(node) {
    if (!node.parentNode) {
      return;
    }

    if (node.parentNode.__akili) {
      arr.push(node.parentNode);

      if (!tree) {
        return;
      }
    }

    check(node.parentNode);
  }

  check(el);

  return tree ? arr : arr[0];
};

/**
 * Set element inner html with content replacing
 *
 * @example
 * // returns "<i>Hello</i><b>World</b>"
 * el.innerHTML = "<b>World</b>";
 * Akili.setTemplate(el, "<i>Hello</i>${this.__children}");
 *
 * @param {HTMLElement} el
 * @param {string} template
 * @returns {string}
 */
Akili.setTemplate = function (el, template) {
  template = template.replace(/\${(((?!\${)\s*this\.__content\s*)*)}/, el.innerHTML);
  el.innerHTML = template;

  return el.innerHTML;
};

/**
 * Generate unique scope name
 *
 * @returns {string}
 */
Akili.createScopeName = function () {
  var _this = this;

  return _utils2.default.createRandomString(16, function (str) {
    return !!_this.__scopes[str];
  });
};

/**
 * Isolate function.
 * Every scope variable change calls according node evaluation.
 * For example, if you change some scope variable in the loop - evaluation will be called on the each change.
 * It may be slow for the application.
 * You can isolate this action and run all evaluation process after passed function at once.
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.isolate = function (fn) {
  if (this.__isolation) {
    return fn();
  }

  this.__isolation = {};

  var res = fn();
  var props = [];

  for (var k in this.__isolation) {
    if (!this.__isolation.hasOwnProperty(k)) {
      continue;
    }

    props.push(this.__isolation[k]);
  }

  this.__isolation = null;

  var _loop = function _loop(i, l) {
    var prop = props[i];

    if (prop.isDeleted) {
      prop.component.__evaluateByKeys(prop.keys, undefined, true);

      return 'continue';
    }

    _utils2.default.setPropertyByKeys(prop.keys, prop.component.scope, function (last, val) {
      if (!last) {
        return val || {};
      }

      return prop.value;
    });
  };

  for (var i = 0, l = props.length; i < l; i++) {
    var _ret = _loop(i, l);

    if (_ret === 'continue') continue;
  }

  props = null;

  return res;
};

/**
 * Stop evaluation before the function and continue after
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.unevaluated = function (fn) {
  var evaluation = this.__evaluation;
  var res = void 0;

  this.__evaluation = null;
  res = fn();
  this.__evaluation = evaluation;

  return res;
};

/**
 * Stop isolation before the function and continue after
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.unisolated = function (fn) {
  var evaluation = this.__isolation;
  var res = void 0;

  this.__isolation = null;
  res = fn();
  this.__isolation = evaluation;

  return res;
};

/**
 * Initialize element
 *
 * @param {HTMLElement} el
 * @param {object} [options={}]
 * @returns {*}
 */
Akili.initialize = function (el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var recompile = options.recompile;
  var component = el.__akili;

  if (component) {
    if (recompile) {
      component.__recompile();

      return component;
    }

    return;
  }

  var isRoot = el === this.__root;
  var componentName = _utils2.default.toDashCase(el.getAttribute('component') || el.tagName.toLowerCase());
  var _Component = this.__components[componentName];

  CHECK_ALIASES: if (!_Component) {
    var selectors = Object.keys(this.__aliases);

    if (!selectors.length) {
      break CHECK_ALIASES;
    }

    var selectorAll = selectors.join(',');

    if (!el.matches(selectorAll)) {
      break CHECK_ALIASES;
    }

    for (var selector in this.__aliases) {
      if (!this.__aliases.hasOwnProperty(selector)) {
        continue;
      }

      if (el.matches(selector)) {
        _Component = this.__components[this.__aliases[selector]];
        break;
      }
    }
  }

  if (!_Component && !isRoot) {
    return;
  }

  if (!_Component) {
    _Component = this.Component;
  }

  if (_Component.matches && !el.matches(_Component.matches)) {
    return;
  }

  component = new _Component(el, {});

  if (component.__cancelled) {
    return;
  }

  component.__create();

  return component;
};

/**
 * Compile the element
 *
 * @param {HTMLElement} root
 * @param {object} [options]
 * @returns {Promise}
 */
Akili.compile = function (root) {
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { recompile: false };

  var elements = [];

  var nestedInitializing = function nestedInitializing(el) {
    var component = _this2.initialize(el, options);
    var children = el.children;

    component && elements.push(component);

    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];

      nestedInitializing(child);
    }
  };

  nestedInitializing(root);

  var p = [];

  for (var i = 0, l = elements.length; i < l; i++) {
    var component = elements[i];

    p.push(component.__compile());
  }

  return Promise.all(p).then(function () {
    var r = [];

    for (var _i = elements.length - 1; _i >= 0; _i--) {
      var _component = elements[_i];

      r.push(_component.__resolve());
    }

    return Promise.all(r);
  });
};

/**
 * Register the component or get it if fn is not passed
 *
 * @param {string} name
 * @param {Component} [fn]
 */
Akili.component = function (name, fn) {
  name = name.toLowerCase();

  if (!fn) {
    return this.__components[name] || null;
  }

  if (this.__components[name] && Akili.options.debug) {
    console.warn('Component ' + name + ' already was added');
  }

  this.__components[name] = fn;
};

/**
 * Unregister the component
 *
 * @param {string} name
 */
Akili.unregisterComponent = function (name) {
  delete this.__components[name];
};

/**
 * Register the selector alias or get it if component name is not passed
 *
 * @param {string} selector - DOM selector
 * @param {string} [componentName]
 */
Akili.alias = function (selector) {
  var componentName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  componentName = componentName.toLowerCase();

  if (!componentName) {
    return this.__aliases[selector] || null;
  }

  if (this.__aliases[selector] && Akili.options.debug) {
    console.warn('Alias with selector ' + selector + ' already was added');
  }

  this.__aliases[selector] = componentName;
};

/**
 * Unregister the selector alias
 *
 * @param {string} selector
 */
Akili.unregisterAlias = function (selector) {
  delete this.__components[selector];
};

/**
 * Isolate array prototype functions
 */
Akili.isolateArrayPrototype = function () {
  var keys = Object.getOwnPropertyNames(Array.prototype);

  var _loop2 = function _loop2(i, l) {
    var key = keys[i];
    var old = Array.prototype[key];

    if (typeof old != 'function' || key == 'constructor') {
      return 'continue';
    }

    Array.prototype[key] = function () {
      var _this3 = this,
          _arguments = arguments;

      return Akili.unevaluated(function () {
        if (!_this3.__isProxy) {
          return old.apply(_this3, _arguments);
        }

        return Akili.isolate(function () {
          return old.apply(_this3, _arguments);
        });
      });
    };
  };

  for (var i = 0, l = keys.length; i < l; i++) {
    var _ret2 = _loop2(i, l);

    if (_ret2 === 'continue') continue;
  }
};

/**
 * Isolate some window functions
 */
Akili.isolateWindowFunctions = function () {
  window.setTimeout = this.createCallbackIsolation(window.setTimeout, 0);
  window.setInterval = this.createCallbackIsolation(window.setInterval, 0);
  window.Promise && (window.Promise.constructor = this.createCallbackIsolation(window.Promise.constructor, 0));
};

/**
 * Isolate event listeners
 */
Akili.isolateEvents = function () {
  var oldAddEventListener = Element.prototype.addEventListener;
  var oldRemoveEventListener = Element.prototype.removeEventListener;
  var oldRemove = Element.prototype.remove;

  Element.prototype.remove = function () {
    delete this.__akiliListeners;

    return oldRemove.apply(this, arguments);
  };

  Element.prototype.addEventListener = function (name, fn) {
    var args = [].slice.call(arguments);

    if (!this.__akiliListeners) {
      this.__akiliListeners = {};
    }

    if (!this.__akiliListeners[name]) {
      this.__akiliListeners[name] = [];
    }

    args[1] = function () {
      var _this4 = this,
          _arguments2 = arguments;

      return Akili.unevaluated(function () {
        return Akili.isolate(function () {
          return fn.apply(_this4, _arguments2);
        });
      });
    };

    this.__akiliListeners[name].push({
      link: fn,
      fn: args[1]
    });

    return oldAddEventListener.apply(this, args);
  };

  Element.prototype.removeEventListener = function (name, fn) {
    if (!this.__akiliListeners) {
      this.__akiliListeners = {};
    }

    if (!this.__akiliListeners[name]) {
      this.__akiliListeners[name] = [];
    }

    for (var i = 0, l = this.__akiliListeners[name].length; i < l; i++) {
      var listener = this.__akiliListeners[name][i];

      if (listener.link === fn) {
        this.__akiliListeners[name].splice(i, 1);
        i--;
        l--;

        break;
      }
    }

    if (!this.__akiliListeners[name].length) {
      delete this.__akiliListeners[name];
    }

    return oldRemoveEventListener.apply(this, arguments);
  };
};

/**
 * Wrap the function callback to an isolate context
 *
 * @param {function} fn
 * @param {number|string} [pos="last"]
 * @returns {Function}
 */
Akili.createCallbackIsolation = function (fn) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'last';

  return function () {
    var args = [].slice.call(arguments);
    var callback = pos == 'last' ? args[args.length - 1] : args[pos];

    if (typeof callback != 'function') {
      return fn.apply(this, arguments);
    }

    args[0] = function () {
      return Akili.unevaluated(function () {
        return Akili.isolate(function () {
          return callback();
        });
      });
    };

    return fn.apply(this, args);
  };
};

/**
 * Isolate the function
 *
 * @param {function} fn
 * @param {object} [context]
 * @returns {function}
 */
Akili.isolateFunction = function (fn) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (fn.__akili) {
    return fn;
  }

  var oFn = function oFn() {
    var _arguments3 = arguments;

    context = context || this;

    return Akili.unevaluated(function () {
      return Akili.isolate(function () {
        return fn.apply(context, _arguments3);
      });
    });
  };

  Object.defineProperty(oFn, '__akili', {
    configurable: true,
    enumerable: false,
    value: true
  });

  return oFn;
};

/**
 * Initialize an application
 *
 * @param {HTMLElement} [root]
 * @returns {Promise}
 */
Akili.init = function (root) {
  this.__root = root || document.querySelector("html");

  return this.compile(this.__root).then(function () {
    if (_router2.default.__init) {
      return new Promise(function (res) {
        var onState = function onState() {
          res();
          window.removeEventListener('state-change', onState);
        };

        window.addEventListener('state-change', onState);
        _router2.default.changeState();
      });
    }
  }).then(function () {
    Akili.__init = true;
  });
};

/**
 * Define all default components
 */
Akili.define = function () {
  _a2.default.define();
  _content2.default.define();
  _component3.default.define();
  _for2.default.define();
  _include2.default.define();
  _input2.default.define();
  _if2.default.define();
  _radio2.default.define();
  _route2.default.define();
  _select2.default.define();
  _textarea2.default.define();
};

Akili.Component = _component3.default;
Akili.EventEmitter = _eventEmitter2.default;
Akili.Scope = _scope2.default;
Akili.utils = _utils2.default;
Akili.components.A = _a2.default;
Akili.components.Content = _content2.default;
Akili.components.For = _for2.default;
Akili.components.If = _if2.default;
Akili.components.Include = _include2.default;
Akili.components.Input = _input2.default;
Akili.components.Radio = _radio2.default;
Akili.components.Route = _route2.default;
Akili.components.Select = _select2.default;
Akili.components.Text = _text2.default;
Akili.components.Textarea = _textarea2.default;
Akili.services.request = _request2.default;
Akili.services.router = _router2.default;

window.Akili = Akili;

var components = exports.components = Akili.components;
var services = exports.services = Akili.services;
exports.default = Akili;


Akili.define();
Akili.isolateEvents();
Akili.isolateArrayPrototype();
Akili.isolateWindowFunctions();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(3);

var _request2 = _interopRequireDefault(_request);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var evaluationRegex = /\${(((?!\${).)*)}/;
var evaluationRegexGlobal = new RegExp(evaluationRegex.source, "g");
var systemAttributes = ['component', 'scope'];

var Component = function () {
  _createClass(Component, null, [{
    key: 'define',


    /**
     * Function to define the component
     */
    value: function define() {
      _akili2.default.component('component', Component);
    }

    /**
     * Parse the expression
     *
     * Required context variables:
     *  this - scope object
     *  event - window.event
     *
     * @param {object} context
     * @param {string} expression
     */

  }, {
    key: 'parse',
    value: function parse(context, expression) {
      return function (expression) {
        return eval(expression);
      }.call(context, expression);
    }
  }]);

  function Component(el) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    this.__isSystemKey = function (key) {
      if (key == '__' || key[0] == '_' && key[1] == '_') {
        return true;
      } else if (['constructor'].indexOf(key) != -1) {
        return true;
      }

      return false;
    };

    this.__isMounted = false;
    this.__isCompiled = false;
    this.__cancelled = false;
    this.__bindings = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = {};
    this.__disableProxy = null;
    this.__children = [];
    this.__parent = null;
    this.__parents = [];
    this.__attrs = {};
    this.__attributeOf = null;
    this.__evaluationComponent = this;
    this.scope = scope;
    this.el = el;
  }

  /**
   * Called on the recompilation
   *
   * @protected
   */


  _createClass(Component, [{
    key: '__recompile',
    value: function __recompile() {
      this.__isMounted = false;
      this.__isCompiled = false;
      this.__evaluationComponent.__disableProxy = null;
      this.__compiling = {};
      this.__recompiling = {};
      this.__setEvents();
      this.__setParents();
      this.__setBooleanAttributes();
      this.__defineAttributes();
    }

    /**
     * Called on the creation
     *
     * @protected
     */

  }, {
    key: '__create',
    value: function __create() {
      var _this = this;

      this.el.__akili = this;
      this.__initialize();
      this.__setEvents();
      this.__setParents();
      this.__setBooleanAttributes();
      this.__defineAttributes();

      _akili2.default.isolate(function () {
        _this.created(_this.attrs);
      });
    }

    /**
     * Called on the compilation
     *
     * @protected
     * @returns {Promise}
     */

  }, {
    key: '__compile',
    value: function __compile() {
      var _this2 = this;

      var control = this.__controlAttributes || !this.__evaluateParent;
      var p = Promise.resolve();

      this.__attributeOf = control ? this : this.__evaluateParent.__akili;

      if (!this.__recompiling || this.__compiling.newParent || this.__controlAttributes) {
        this.__interpolateAttributes(this.el, this.__attributeOf);
      }

      var interpolate = function interpolate(children, parent) {
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];

          if (child.nodeType == 3) {
            _this2.__initializeNode(child, parent);

            child.nodeValue = _this2.__evaluate(child);
          } else if (child.nodeType == 1 && !child.__akili) {
            _this2.__interpolateAttributes(child);
            interpolate(child.childNodes, child);
          }
        }
      };

      interpolate(this.el.childNodes, this.el);
      this.__isMounted = true;

      var res = void 0;

      if (!this.__recompiling) {
        res = _akili2.default.isolate(function () {
          _this2.attrs.onCompiled && _this2.attrs.onCompiled.trigger();

          return _this2.compiled();
        });

        if (this.constructor.templateUrl) {
          p = _request2.default.get(this.constructor.templateUrl).then(function (res) {
            _this2.el.innerHTML = _this2.__content;
            _akili2.default.setTemplate(_this2.el, res.data);
            delete _this2.__content;

            return _akili2.default.compile(_this2.el, { recompile: true });
          });
        }
      } else {
        _akili2.default.isolate(function () {
          _this2.attrs.onRecompiled && _this2.attrs.onRecompiled.trigger();
          _this2.recompiled();
        });
      }

      this.__isCompiled = true;
      this.__recompiling = null;
      this.__compiling = null;

      return p.then(function () {
        return res;
      });
    }

    /**
     * Resolve the component
     *
     * @protected
     * @returns {Promise}
     */

  }, {
    key: '__resolve',
    value: function __resolve() {
      if (this.__recompiling) {
        return Promise.resolve();
      }

      this.attrs.onResolved && this.attrs.onResolved.trigger();
      return Promise.resolve(this.resolved());
    }

    /**
     * Part of the {@see Component#__compile} method
     *
     * @protected
     */

  }, {
    key: '__initialize',
    value: function __initialize() {
      var parent = _akili2.default.getAkiliParents(this.el, false);
      var Scope = this.constructor.scope || _akili2.default.Scope;
      var scope = void 0;
      var isRoot = _akili2.default.__root === this.el;

      if (parent) {
        scope = new Scope(this.el.getAttribute('scope') || _akili2.default.createScopeName(), this.el, this);
      } else {
        scope = new Scope(isRoot ? 'root' : _akili2.default.createScopeName(), this.el, this);
        isRoot && (_akili2.default.root = this);
      }

      var __scope = scope;
      var _scope = Object.assign(scope, this.scope);
      var nestedWatching = _akili2.default.options.nestedWatching;
      var controlAttributes = this.constructor.controlAttributes;
      var events = this.constructor.events;

      if (this.constructor.template) {
        _akili2.default.setTemplate(this.el, this.constructor.template);
      }

      if (this.constructor.templateUrl) {
        this.__content = this.el.innerHTML;
        this.el.innerHTML = '';
      }

      if (this.constructor.nestedWatching !== undefined) {
        nestedWatching = this.constructor.nestedWatching;
      } else if (Scope.nestedWatching !== undefined) {
        nestedWatching = Scope.nestedWatching;
      }

      this.__scope = __scope;
      this.__events = events;
      this.__nestedWatching = nestedWatching;
      this.__controlAttributes = controlAttributes;

      _akili2.default.addScope(scope);

      if (nestedWatching) {
        scope = this.__nestedObserve(_scope, []);
      } else {
        scope = this.__observe(_scope, []);
      }

      this.scope = scope;
    }

    /**
     * Set boolean attributes
     *
     * @protected
     */

  }, {
    key: '__setBooleanAttributes',
    value: function __setBooleanAttributes() {
      var _this3 = this;

      this.booleanAttributes = [].concat(_akili2.default.htmlBooleanAttributes, this.constructor.booleanAttributes);

      var setAttr = function setAttr(el) {
        for (var i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
          var node = attrs[i];

          if (_this3.booleanAttributes.indexOf(node.nodeName) != -1) {
            if (el.hasAttribute('boolean-' + node.nodeName)) {
              continue;
            }

            el.setAttribute('boolean-' + node.nodeName, el.getAttribute(node.nodeName) || node.nodeName);
            el.removeAttribute(node.nodeName);
          }
        }

        for (var _i = 0, _l = el.children.length; _i < _l; _i++) {
          var child = el.children[_i];

          if (!child.__akili) {
            setAttr(child);
          }
        }
      };

      setAttr(this.el);
    }

    /**
     * Set events
     *
     * @protected
     */

  }, {
    key: '__setEvents',
    value: function __setEvents() {
      for (var i = 0, l = this.__events.length; i < l; i++) {
        var ev = this.__events[i];

        !/^on-/i.test(ev) && (ev = 'on-' + ev);

        if (!this.el.hasAttribute(ev)) {
          this.el.setAttribute(ev, '');
        }
      }
    }

    /**
     * Set component parents
     *
     * @protected
     */

  }, {
    key: '__setParents',
    value: function __setParents() {
      var parents = _akili2.default.getAkiliParents(this.el);

      if (!parents.length) {
        return;
      }

      var newParent = this.__parent !== parents[0];
      var evaluateParent = null;

      for (var i = 0, l = parents.length; i < l; i++) {
        var parent = parents[i];

        if (!parent.__akili.constructor.transparent) {
          evaluateParent = parent;

          break;
        }
      }

      this.__compiling.newParent = newParent;
      newParent && this.__detach();

      if (this.constructor.transparent) {
        this.__evaluationComponent = evaluateParent.__akili;
      }

      this.__evaluateParent = evaluateParent;
      this.__parent = parents[0];
      this.__parents = parents;
      this.scope.__parent = this.__evaluateParent.__akili.scope;
      !this.__recompiling && this.__parent.__akili.__addChild(this.el);
      Object.setPrototypeOf(this.scope, this.__parent.__akili.__scope);
    }

    /**
     * Add child element to the list
     *
     * @param {HTMLElement} el
     * @protected
     */

  }, {
    key: '__addChild',
    value: function __addChild(el) {
      this.__children.push(el);
    }

    /**
     * Splice child from the list
     *
     * @param {HTMLElement} el
     * @protected
     */

  }, {
    key: '__spliceChild',
    value: function __spliceChild(el) {
      for (var i = 0, l = this.__children.length; i < l; i++) {
        var child = this.__children[i];

        if (child === el) {
          this.__children.splice(i, 1);
          i--;
          l--;
        }
      }
    }

    /**
     * You can change expression before parsing here
     *
     * @param {string} expression
     * @returns {*}
     * @protected
     */

  }, {
    key: '__getParsedExpression',
    value: function __getParsedExpression(expression) {
      return expression;
    }

    /**
     * Check node has any property changes or not
     *
     * @param {Node} node
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__checkEvaluation',
    value: function __checkEvaluation(node) {
      if (!Object.keys(node.__properties).length) {
        return true;
      }

      for (var k in node.__properties) {
        if (!node.__properties.hasOwnProperty(k)) {
          continue;
        }

        var prop = node.__properties[k];
        var value = _utils2.default.getPropertyByKeys(prop.keys, prop.component.__scope);

        if (!_utils2.default.comparePreviousValue(value, prop.value, prop.copy, _utils2.default.copy(value))) {
          return true;
        }
      }

      return false;
    }

    /**
     *  Check node has changed on the certain keys
     *
     * @param {Node} node
     * @param {string[]} keys
     * @param {*} value
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__checkNodePropertyChanging',
    value: function __checkNodePropertyChanging(node, keys, value) {
      var prop = this.__getNodeProperty(node, keys);

      if (!prop) {
        return true;
      }

      return !_utils2.default.comparePreviousValue(value, prop.value, prop.copy, _utils2.default.copy(value));
    }

    /**
     * Evaluate node expression
     *
     * @param {Node} node
     * @returns {*}
     * @protected
     */

  }, {
    key: '__evaluate',
    value: function __evaluate(node) {
      var _this4 = this;

      var counter = 0;
      var attributeValue = void 0;
      var expression = void 0;

      var res = node.__expression.replace(evaluationRegexGlobal, function (m, d) {
        counter++;

        var evaluate = void 0;
        var evaluation = void 0;
        var existingBindings = {};
        var parseValue = node.__component.__getParsedExpression(d);

        _akili2.default.__evaluation = { node: node, list: [] };

        try {
          evaluate = _this4.constructor.parse(_this4.__evaluationComponent.scope, parseValue);
        } catch (err) {
          var message = 'Scope parsing error in the template expression: ' + node.__expression;

          if (!_akili2.default.options.showEvaluationErrors) {
            if (_akili2.default.options.debug) {
              console.warn(message);
              console.warn(err.stack);
            }

            evaluate = undefined;
          } else {
            console.error(message);
            throw err;
          }
        }

        evaluation = _akili2.default.__evaluation ? _akili2.default.__evaluation.list : [];
        _akili2.default.__evaluation.list = null;
        _akili2.default.__evaluation = null;

        for (var i = evaluation.length - 1; i >= 0; i--) {
          var data = evaluation[i];
          var hash = data.component.__scope.__name + '.' + data.keysString;

          if (data.notBinding) {
            continue;
          }

          if (existingBindings[hash]) {
            continue;
          }

          var parentValue = _utils2.default.getPropertyByKeys(data.parents, data.component.__scope);
          var evalComponent = node.__attributeOf || node.__component;

          if (_utils2.default.isScopeProxy(parentValue) && data.component !== evalComponent.__evaluationComponent) {
            continue;
          }

          var bind = data.component.__getBoundNode(data.keys, node);
          var value = _utils2.default.getPropertyByKeys(data.keys, data.component.__scope);

          if (!bind) {
            data.component.__bind(data.keys, { node: node });
          }

          data.component.__setNodeProperty(node, data.keys, value);
          existingBindings[hash] = true;
        }

        existingBindings = null;
        evaluation = null;

        if (node instanceof Attr) {
          expression = m;
          attributeValue = evaluate;

          return _utils2.default.makeAttributeValue(evaluate);
        }

        if ((typeof evaluate === 'undefined' ? 'undefined' : _typeof(evaluate)) == 'object') {
          try {
            return JSON.stringify(evaluate);
          } catch (e) {
            return evaluate;
          }
        }

        return evaluate;
      });

      if (node instanceof Attr) {
        var value = res;
        var isBooleanAttribute = false;

        if (counter) {
          node.__hasBindings = true;
        }

        if (counter == 1 && expression && node.__expression == expression) {
          value = attributeValue;
        }

        var clearAttribute = node.nodeName.replace(/^boolean-(.+)/i, '$1');

        if (clearAttribute != node.nodeName) {
          isBooleanAttribute = true;
          value = !!value;
        }

        if (node.__attributeOn) {
          var component = node.__attributeOn;

          component.__disableAttributeSetter = true;
          component.attrs[_utils2.default.toCamelCase(clearAttribute)] = value;
          component.__disableAttributeSetter = false;

          if (component.__isCompiled) {
            _akili2.default.isolate(function () {
              component.attrs.onChanged && component.attrs.onChanged.trigger({ key: clearAttribute, value: value });
              component.changed(clearAttribute, value);

              var key = _utils2.default.toCamelCase(clearAttribute);
              var camelKey = key[0].toUpperCase() + key.slice(1);
              var fnName = 'changed' + camelKey;
              var evFnName = 'onChanged' + camelKey;

              component.attrs[evFnName] && component.attrs[evFnName].trigger(value);

              if (typeof component[fnName] == 'function') {
                component[fnName](value);
              }
            });
          }
        } else if (isBooleanAttribute) {
          var element = node.__element;
          var attr = _utils2.default.toCamelCase(clearAttribute);

          value ? element.setAttribute(attr, 'true') : element.removeAttribute(attr);
        }
      }

      return res;
    }

    /**
     * Nested evaluation by keys
     *
     * @param {string[]} keys
     * @param {boolean} [withoutParents=false] - if true evaluation will be only for the current keys
     * @protected
     */

  }, {
    key: '__evaluateNested',
    value: function __evaluateNested(keys) {
      var withoutParents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var scope = this.__scope;
      var props = [];

      if (!withoutParents) {
        var lastProps = [];

        for (var i = 0, l = keys.length; i < l; i++) {
          var key = keys[i];
          var value = void 0;

          lastProps = [].concat(_toConsumableArray(lastProps), [key]);
          value = _utils2.default.getPropertyByKeys(lastProps, scope);
          props.push({ keys: lastProps, value: value });
        }
      } else {
        props.push({ keys: keys, value: _utils2.default.getPropertyByKeys(keys, scope) });
      }

      var propsLength = props.length;

      var elEvaluate = function elEvaluate(element) {
        var component = element.__akili;

        for (var m = 0; m < propsLength; m++) {
          var prop = props[m];
          var data = component.__getBind(prop.keys);

          if (!data || !data.__data) {
            continue;
          }

          for (var k = 0, c = data.__data.length; k < c; k++) {
            var bind = data.__data[k];

            if (component.__checkNodePropertyChanging(bind.node, prop.keys, prop.value)) {
              component.__disableProxy = true;
              component.__evaluateNode(bind.node);

              for (var _k in bind.node.__properties) {
                if (!bind.node.__properties.hasOwnProperty(_k)) {
                  continue;
                }

                var _prop = bind.node.__properties[_k];
                var _value = _utils2.default.getPropertyByKeys(_prop.keys, _prop.component.__scope);

                _prop.component.__setNodeProperty(bind.node, _prop.keys, _value);
              }

              component.__disableProxy = null;
            }
          }
        }

        return component;
      };

      var evaluate = function evaluate(elements) {
        for (var _i2 = 0, _l2 = elements.length; _i2 < _l2; _i2++) {
          var component = elEvaluate(elements[_i2]);

          evaluate(component.__children);
        }
      };

      elEvaluate(this.el);
      evaluate(this.__children);
    }
  }, {
    key: '__evaluateByKeys',


    /**
     * Evaluate value by keys
     *
     * @param {string[]} keys
     * @param {*} value
     * @param {boolean} [isDeleted=false] - true if value is deleting
     * @protected
     */
    value: function __evaluateByKeys(keys, value) {
      var _this5 = this;

      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var data = this.__getBind(keys);

      var unbind = function unbind(obj, parents) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k) || k == '__data') {
            continue;
          }

          var _keys = [].concat(parents, [k]);
          var __keys = _keys.slice();
          var _isDeleted = false;
          var val = obj[k];
          var hasKey = void 0;

          __keys.shift();
          hasKey = _utils2.default.hasPropertyByKeys(__keys, value);

          if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && !hasKey) {
            _isDeleted = true;
          }

          if (val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object') {
            unbind(val, _keys);
          }

          _this5.__evaluateNested(_keys, true);

          if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !hasKey) {
            _this5.__unbind(_keys);
            _isDeleted && _utils2.default.deletePropertyByKeys(__keys, value);
          }
        }
      };

      data && unbind(data, [].concat(keys));
      this.__evaluateNested(keys);

      if (isDeleted) {
        this.__unbind(keys);
        isDeleted && _utils2.default.deletePropertyByKeys(keys, this.__scope);
      }
    }

    /**
     * Evaluate event expression
     *
     * @param {Node} node
     * @param {HTMLElement} el
     * @param {Event} e
     * @protected
     */

  }, {
    key: '__evaluateEvent',
    value: function __evaluateEvent(node, el, e) {
      var expression = evaluationRegex.exec(node.__expression);

      if (!expression) {
        return;
      }

      !window.event && (window.event = e);

      this.__evaluatingEvent = {
        el: el,
        component: this,
        event: e,
        node: node
      };

      this.__disableProxy = null;
      this.constructor.parse(this.__evaluationComponent.scope, expression[1]);
      this.__evaluatingEvent = null;
    }

    /**
     * Check changes and evaluate the passed node
     *
     * @param {Node} node
     * @protected
     */

  }, {
    key: '__evaluateNode',
    value: function __evaluateNode(node) {
      if (this.__checkEvaluation(node)) {
        node[node instanceof Attr ? 'value' : 'nodeValue'] = this.__evaluate(node);
      }
    }

    /**
     * Attribute node initializing
     *
     * @param {Node} node
     * @param {HTMLElement} el
     * @param {Component} attributeOf - if node is linked with parent scope
     * @protected
     */

  }, {
    key: '__initializeAttribute',
    value: function __initializeAttribute(node, el, attributeOf) {
      if (systemAttributes.indexOf(node.nodeName) != -1) {
        return;
      }

      this.__initializeNode(node, el);

      var eventName = node.nodeName.replace(/^on-(.+)/i, '$1');
      var nodeName = _utils2.default.toCamelCase(node.nodeName);
      var component = attributeOf ? attributeOf : this;

      if (eventName != node.nodeName) {
        if (node.__event) {
          return;
        }

        var emitter = new _akili2.default.EventEmitter(eventName, el, component);

        if (node.__expression) {
          emitter.bind(function (e) {
            component.__evaluateEvent(node, el, e);
          });
        }

        node.__event = emitter;
        el.setAttribute(node.nodeName, _utils2.default.makeAttributeValue(emitter));

        if (attributeOf) {
          this.__disableAttributeSetter = true;
          this.attrs[nodeName] = emitter;
          this.__disableAttributeSetter = false;
        }

        return;
      }

      if (attributeOf) {
        node.__attributeOn = this;
        node.__attributeOf = component;
      }

      el.setAttribute(node.nodeName, component.__evaluate(node));
    }

    /**
     * Initialize the node
     *
     * @param {Node} node
     * @param {HTMLElement} el
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__initializeNode',
    value: function __initializeNode(node, el) {
      if (node.__initialized) {
        return false;
      }

      node.__expression = node[node instanceof Attr ? 'value' : 'nodeValue'];
      node.__properties = {};
      node.__attributeOf = null;
      node.__attributeOn = null;
      node.__event = null;
      node.__hasBindings = false;
      node.__initialized = true;
      node.__component = this;
      node.__element = el;

      return true;
    }

    /**
     * Interpolate attributes of the element
     *
     * @param {HTMLElement} el
     * @param {Component} [attributeOf=null] - if node is linked with parent scope
     * @protected
     */

  }, {
    key: '__interpolateAttributes',
    value: function __interpolateAttributes(el) {
      var attributeOf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      for (var i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
        this.__initializeAttribute(attrs[i], el, attributeOf);
      }
    }

    /**
     * Define attributes as proxy
     *
     * @protected
     */

  }, {
    key: '__defineAttributes',
    value: function __defineAttributes() {
      var _this6 = this;

      var changeAttribute = function changeAttribute(key, value) {
        var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (_this6.__disableAttributeSetter) {
          return;
        }

        var node = _this6.el.getAttributeNode(key);

        if (node) {
          if (node.__event) {
            node.__event.unbind();
            node.__event = null;
            node.__expression = value;
          }

          if (node.__hasBindings) {
            _this6.__parent && _this6.__parent.__akili.__evaluationComponent.__unbindByNodes([node]);
            node.__hasBindings = false;
            node.__expression = value;
          }
        }

        if (isDeleted) {
          _this6.el.removeAttribute(key);
        } else if (node) {
          node.nodeValue = value;
        } else {
          _this6.el.setAttribute(key, value);
        }
      };

      this.attrs = new Proxy(this.__attrs, {
        get: function get(target, key) {
          if (key == '__isProxy') {
            return true;
          }

          return target[key];
        },
        set: function set(target, key, value) {
          var attrKey = _utils2.default.toDashCase(key);

          if (_this6.booleanAttributes.indexOf(attrKey) != -1) {
            attrKey = 'boolean-' + attrKey;

            if (value) {
              _this6.el.setAttribute(key, value);
            } else {
              _this6.el.removeAttribute(key);
            }
          }

          target[key] = value;
          changeAttribute(attrKey, _utils2.default.makeAttributeValue(value));

          return true;
        },
        deleteProperty: function deleteProperty(target, key, value) {
          var attrKey = _utils2.default.toDashCase(key);

          changeAttribute(attrKey, _utils2.default.makeAttributeValue(value), true);
          delete target[key];

          return true;
        }
      });
    }

    /**
     * Set proxy to object
     *
     * @param {object} obj
     * @param {string[]} parents
     * @returns {Proxy}
     * @protected
     */

  }, {
    key: '__observe',
    value: function __observe(obj, parents) {
      var _this7 = this;

      return new Proxy(obj, {
        get: function get(target, key) {
          if (key == "__isProxy") {
            return true;
          }

          if (key == "__target") {
            return obj;
          }

          if (key == "__component") {
            return _this7;
          }

          if (key == "__keys") {
            return parents;
          }

          if (_this7.__disableProxy) {
            return target[key];
          }

          if (_this7.__isSystemKey(key)) {
            return target[key];
          }

          if (typeof target[key] == 'function') {
            var realTarget = _utils2.default.getOwnPropertyTarget(target, key);

            if (!_utils2.default.isPlainObject(realTarget)) {
              realTarget[key] = _akili2.default.isolateFunction(realTarget[key], realTarget.__component);
            }
          }

          if (_akili2.default.__evaluation) {
            var keys = [].concat(parents, [key]);
            var notBinding = false;

            if (!(key in target)) {
              target[key] = undefined;
            } else if (!_utils2.default.getEnumerablePropertyTarget(target, key)) {
              notBinding = true;
            }

            _this7.__bindNode(_akili2.default.__evaluation.list, keys, parents, target[key], notBinding);

            return target[key];
          }

          return target[key];
        },
        set: function set(target, key, value) {
          if (_this7.__disableProxy) {
            target[key] = value;

            return true;
          }

          if (_this7.__isSystemKey(key)) {
            target[key] = value;

            return true;
          }

          var keys = [].concat(parents, [key]);

          if (_this7.__nestedWatching) {
            target[key] = _this7.__nestedObserve(value, keys);
          } else {
            target[key] = value;
          }

          if (_akili2.default.__isolation) {
            _this7.__createIsolationObject(parents, key, false);

            return true;
          }

          if (_this7.__isMounted) {
            _this7.__evaluateByKeys(keys, value);
          }

          return true;
        },
        deleteProperty: function deleteProperty(target, key) {
          var keys = [].concat(parents, [key]);

          if (_this7.__disableProxy) {
            delete target[key];

            return true;
          }

          if (_this7.__isSystemKey(key)) {
            delete target[key];

            return true;
          }

          if (_akili2.default.__isolation) {
            delete target[key];
            _this7.__createIsolationObject(parents, key, true);

            return true;
          }

          delete target[key];
          _this7.__evaluateByKeys(keys, undefined, true);

          return true;
        }
      });
    }

    /**
     * Check key is system
     *
     * @param {string} key
     * @returns {boolean}
     */

  }, {
    key: '__nestedObserve',


    /**
     * Nested observing the value
     *
     * @param {*} value
     * @param {string[]} [startKeys]
     * @protected
     */
    value: function __nestedObserve(value, startKeys) {
      var _this8 = this;

      this.__disableProxy = true;

      var observe = function observe(value, parents) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || value === null) {
          return value;
        }

        if (!_utils2.default.isPlainObject(value) && !_utils2.default.isScopeProxy(value) && !(value instanceof _akili2.default.Scope)) {
          return value;
        }

        var target = value;

        if (value.__isProxy) {
          target = value.__target;

          if (!_this8.__disableProxyRedefining) {
            if (value.__component !== _this8) {
              target = _utils2.default.copy(target, false);
              value = target;
            } else if (_akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
              value = target;
            }
          }
        }

        for (var k in target) {
          if (!target.hasOwnProperty(k)) {
            continue;
          }

          var val = target[k];
          var keys = [].concat(parents, [k]);

          target[k] = observe(val, keys);
        }

        if (!value.__isProxy) {
          return _this8.__observe(target, parents);
        }

        return value;
      };

      var res = observe(value, startKeys || []);

      this.__disableProxy = null;

      return res;
    }
  }, {
    key: '__createIsolationObject',


    /**
     * Create isolation object
     *
     * @param {string[]} parents
     * @param {string} key
     * @param {boolean} [isDeleted=false]
     * @returns {*}
     * @protected
     */
    value: function __createIsolationObject(parents, key) {
      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var keys = parents.length ? [parents[0]] : [key];
      var isolationKey = this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);

      if (parents.length) {
        isDeleted = false;
      }

      if (!_akili2.default.__isolation[isolationKey]) {
        _akili2.default.__isolation[isolationKey] = {
          component: this,
          keys: keys
        };
      }

      isDeleted !== undefined && (_akili2.default.__isolation[isolationKey].isDeleted = isDeleted);
      _akili2.default.__isolation[isolationKey].value = _utils2.default.getPropertyByKeys(keys, this.__scope);

      return _akili2.default.__isolation[isolationKey];
    }
  }, {
    key: '__bindNode',


    /**
     * Prepare the node to binding
     *
     * @param {object} bind - by default is component.__evaluation.list
     * @param {string[]} keys
     * @param {string[]} parents
     * @param {*} value
     * @param {boolean} [notBinding=false]
     * @protected
     */
    value: function __bindNode(bind, keys, parents, value) {
      var notBinding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      var parentKeysString = _akili2.default.joinBindingKeys(parents);

      if (bind.length && !notBinding) {
        var l = bind.length - 1;
        var data = bind[l];

        if (data.keysString == parentKeysString && data.component === this) {
          bind.splice(l, 1);
        }
      }

      bind.push({
        component: this,
        keysString: _akili2.default.joinBindingKeys(keys),
        parents: parents,
        keys: keys,
        value: value,
        notBinding: notBinding
      });
    }
  }, {
    key: '__getBind',


    /**
     * Get binding by keys
     *
     * @param {string[]} keys
     * @returns {object|null}
     * @protected
     */
    value: function __getBind(keys) {
      return _utils2.default.getPropertyByKeys(keys, this.__bindings) || null;
    }

    /**
     * Get binding by keys
     *
     * @param {string[]} keys
     * @param {Node} node
     * @returns {object|null}
     * @protected
     */

  }, {
    key: '__getBoundNode',
    value: function __getBoundNode(keys, node) {
      var bind = _utils2.default.getPropertyByKeys(keys, this.__bindings);

      if (!bind || !bind.__data || !bind.__data.length) {
        return null;
      }

      for (var i = 0, l = bind.__data.length; i < l; i++) {
        var data = bind.__data[i];

        if (data.node === node) {
          return data;
        }
      }

      return null;
    }

    /**
     * Set node property
     *
     * @param {Node} node
     * @param {string[]} keys
     * @param {*} value
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__setNodeProperty',
    value: function __setNodeProperty(node, keys, value) {
      var prop = this.__getNodeProperty(node, keys);
      var copy = _utils2.default.copy(value);

      if (prop) {
        var res = _utils2.default.comparePreviousValue(value, prop.value, prop.copy, copy);

        prop.value = value;
        prop.copy = copy;

        return !res;
      }

      var hash = this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);

      node.__properties[hash] = {
        value: value,
        copy: copy,
        component: this,
        keys: keys
      };

      return true;
    }

    /**
     * Get node property
     *
     * @param {Node} node
     * @param {string[]} keys
     * @returns {object|null}
     * @protected
     */

  }, {
    key: '__getNodeProperty',
    value: function __getNodeProperty(node, keys) {
      var hash = this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);

      return node.__properties[hash] || null;
    }

    /**
     * Delete node property
     *
     * @param {Node} node
     * @param {string[]} keys
     * @protected
     */

  }, {
    key: '__deleteNodeProperty',
    value: function __deleteNodeProperty(node, keys) {
      var hash = this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);

      delete node.__properties[hash];
    }

    /**
     * Bind data with the keys
     *
     * @param {string[]} keys
     * @param {object} data
     * @protected
     */

  }, {
    key: '__bind',
    value: function __bind(keys, data) {
      _utils2.default.setPropertyByKeys(keys, this.__bindings, function (last, value) {
        var obj = { __data: [] };

        if (!last) {
          return value ? value : obj;
        }

        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
          obj = value;
        }

        if (!obj.__data) {
          obj.__data = [];
        }

        obj.__data.push(data);

        return obj;
      });
    }

    /**
     * Unbind keys
     *
     * @param {string[]} keys
     * @protected
     */

  }, {
    key: '__unbind',
    value: function __unbind(keys) {
      var bind = _utils2.default.getPropertyByKeys(keys, this.__bindings);

      if (!bind || !bind.__data) {
        return;
      }

      for (var i = 0, l = bind.__data.length; i < l; i++) {
        var node = bind.__data[i].node;

        this.__deleteNodeProperty(node, keys);
      }

      _utils2.default.deletePropertyByKeys(keys, this.__bindings, function (value) {
        if (Object.keys(value).length > 1) {
          value.__data = [];

          return false;
        }

        return true;
      });
    }

    /**
     * Unbind by nodes
     *
     * @param {Node[]} nodes
     * @protected
     */

  }, {
    key: '__unbindByNodes',
    value: function __unbindByNodes(nodes) {
      var unbind = function unbind(obj) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k)) {
            continue;
          }

          if (k == '__data') {
            var data = obj[k] || [];
            var l = data.length;

            for (var i = 0; i < l; i++) {
              var bind = data[i];

              if (nodes.indexOf(bind.node) != -1) {
                data.splice(i, 1);
                i--;
                l--;
              }
            }

            if (!l) {
              delete obj[k];
            }
          } else {
            unbind(obj[k]);
          }
        }
      };

      unbind(this.__bindings);
      this.__clearEmptyBindings();
    }

    /**
     * Clear all empty bindings
     *
     * @param {object} [obj]
     * @protected
     */

  }, {
    key: '__clearEmptyBindings',
    value: function __clearEmptyBindings(obj) {
      var clear = function clear(obj, parent, key) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k)) {
            continue;
          }

          var val = obj[k];

          if (k == '__data' && (!val || !val.length)) {
            delete obj[k];
          } else if (k != '__data') {
            if (!Object.keys(obj[k]).length) {
              delete obj[k];
            } else {
              clear(obj[k], obj, k);
            }
          }
        }

        if (!Object.keys(obj).length && parent) {
          delete parent[key];
        }
      };

      clear(obj || this.__bindings);
    }

    /**
     * Remove all child components
     *
     * @protected
     */

  }, {
    key: '__removeChildren',
    value: function __removeChildren() {
      var remove = function remove(children) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];

          remove(child.__akili.__children);
          child.__akili.__remove();
          i--;
        }
      };

      remove(this.__children);
    }

    /**
     * Remove the component without children removing
     *
     * @protected
     */

  }, {
    key: '__remove',
    value: function __remove() {
      this.__detach();
      this.attrs.onRemoved && this.attrs.onRemoved.trigger();
      this.removed();
      _akili2.default.removeScope(this.__scope.__name);
      this.el.remove();
    }

    /**
     * Detach the component
     *
     * @protected
     */

  }, {
    key: '__detach',
    value: function __detach() {
      if (this.__evaluateParent && !this.__controlAttributes) {
        this.__evaluateParent.__akili.__unbindByNodes([].slice.call(this.el.attributes));
      }

      if (this.__parent) {
        this.__parent.__akili.__spliceChild(this.el);
      }
    }

    /**
     * Remove the component with children
     *
     * @protected
     */

  }, {
    key: '__destroy',
    value: function __destroy() {
      this.__removeChildren();
      this.__remove();
    }

    /**
     * Clear the component html
     *
     * @protected
     */

  }, {
    key: '__empty',
    value: function __empty() {
      var nodes = [];

      this.__removeChildren();

      var find = function find(children) {
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];

          if (child.nodeType == 3) {
            nodes.push(child);
          } else if (child.nodeType == 1 && !child.__akili) {
            for (var k = 0, attrs = child.attributes, c = attrs.length; k < c; k++) {
              nodes.push(attrs[i]);
            }

            find(child.childNodes);
          }
        }
      };

      find(this.el.childNodes);
      this.__unbindByNodes(nodes);
      this.el.innerHTML = '';
    }

    /**
     * Get parent components
     *
     * @param {string} [selector='']
     * @param {boolean} [findAll=true] - get array if true
     * @param {number|number[]} [levels]
     * @returns {Component|Component[]}
     * @protected
     */

  }, {
    key: '__getParent',
    value: function __getParent() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var findAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var levels = arguments[2];

      var arr = [];
      var level = 0;

      if (levels !== undefined && !Array.isArray(levels)) {
        levels = [levels];
      }

      var find = function find(parent) {
        if (!parent) {
          return;
        }

        if (!levels || levels.indexOf(level) != -1) {
          if (!selector || parent.__akili.matches(selector)) {
            if (!findAll) {
              arr.push(parent.__akili);

              return;
            }

            arr.push(parent.__akili);
          }
        }

        level++;
        find(parent.__akili.__parent);
      };

      find(this.__parent);

      return findAll ? arr : arr[0] || null;
    }

    /**
     * Get child components
     *
     * @param {string} [selector='']
     * @param {boolean} [findAll=true] - get array if true
     * @param {number|number[]} [levels]
     * @returns {Component|Component[]}
     * @protected
     */

  }, {
    key: '__getChildren',
    value: function __getChildren() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var findAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var levels = arguments[2];

      var arr = [];
      var level = 0;

      if (levels !== undefined && !Array.isArray(levels)) {
        levels = [levels];
      }

      var find = function find(children) {
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];

          if (!levels || levels.indexOf(level) != -1) {
            if (!selector || child.__akili.matches(selector)) {
              if (!findAll) {
                arr.push(child.__akili);

                return;
              }

              arr.push(child.__akili);
            }
          }
        }

        level++;

        for (var _i3 = 0, _l3 = children.length; _i3 < _l3; _i3++) {
          find(children[_i3].__akili.__children);
        }
      };

      find(this.__children);

      return findAll ? arr : arr[0] || null;
    }

    /**
     * Get nearest components
     *
     * @param {string} [selector='']
     * @param {boolean} [findAll=true] - get array if true
     * @param {boolean} [right=false] - from the right side if true
     * @returns {Component|Component[]}
     * @protected
     */

  }, {
    key: '__getNear',
    value: function __getNear() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var findAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!this.__parent) {
        return null;
      }

      var levelElements = this.__parent.__akili.__children.slice();
      var arr = [];

      right && levelElements.reverse();

      for (var i = 0, l = levelElements.length; i < l; i++) {
        var el = levelElements[i];

        if (el === this.el) {
          break;
        }

        if (!selector || el.__akili.matches(selector)) {
          arr.push(el.__akili);
        }
      }

      arr.reverse();

      if (!findAll) {
        return arr.length ? arr[0] : null;
      }

      return arr;
    }

    /**
     * Check the component matches selector
     *
     * @param {string|function} selector
     * @returns {boolean}
     */

  }, {
    key: 'matches',
    value: function matches(selector) {
      if (typeof selector == 'function') {
        return selector(this);
      }

      return this.el.matches(selector);
    }

    /**
     * Get closest parent component by selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels]
     * @returns {Component}
     */

  }, {
    key: 'parent',
    value: function parent() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments[1];

      return this.__getParent(selector, false, levels);
    }

    /**
     * Get array of parent components by selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels]
     * @returns {Component[]}
     */

  }, {
    key: 'parents',
    value: function parents() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments[1];

      return this.__getParent(selector, true, levels);
    }

    /**
     * Get closest child component by selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels]
     * @returns {Component}
     */

  }, {
    key: 'child',
    value: function child() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments[1];

      return this.__getChildren(selector, false, levels);
    }

    /**
     * Get array of child components by selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels]
     * @returns {Component[]}
     */

  }, {
    key: 'children',
    value: function children() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments[1];

      return this.__getChildren(selector, true, levels);
    }

    /**
     * Get array of components left from the current by selector
     *
     * @param {string|function} [selector='']
     * @returns {Component[]}
     */

  }, {
    key: 'before',
    value: function before() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return this.__getNear(selector, true, false);
    }

    /**
     * Get array of components right from the current by selector
     *
     * @param {string|function} [selector='']
     * @returns {Component[]}
     */

  }, {
    key: 'after',
    value: function after() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return this.__getNear(selector, true, true);
    }

    /**
     * Get closest component left from the current by selector
     *
     * @param {string|function} [selector='']
     * @returns {Component}
     */

  }, {
    key: 'prev',
    value: function prev() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return this.__getNear(selector, false, false);
    }

    /**
     * Get closest component right from the current by selector
     *
     * @param {string|function} [selector='']
     * @returns {Component}
     */

  }, {
    key: 'next',
    value: function next() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return this.__getNear(selector, false, true);
    }

    /**
     * Change element parent
     *
     * @param {HTMLElement} parent
     */

  }, {
    key: 'appendTo',
    value: function appendTo(parent) {
      parent.appendChild(this.el);

      return _akili2.default.compile(this.el, { recompile: true });
    }

    /**
     * Cancel component compilation
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
    }

    /**
     * Clear element html
     *
     * @returns {*}
     */

  }, {
    key: 'empty',
    value: function empty() {
      return this.__empty.apply(this, arguments);
    }

    /**
     * Remove element
     *
     * @returns {*}
     */

  }, {
    key: 'remove',
    value: function remove() {
      return this.__destroy.apply(this, arguments);
    }
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'compiled',
    value: function compiled() {}
  }, {
    key: 'recompiled',
    value: function recompiled() {}
  }, {
    key: 'changed',
    value: function changed(key, value) {}
  }, {
    key: 'resolved',
    value: function resolved() {}
  }, {
    key: 'removed',
    value: function removed() {}
  }]);

  return Component;
}();

Component.matches = '';
Component.booleanAttributes = [];
Component.events = [];
Component.controlAttributes = false;
Component.transparent = false;
Component.template = '';
Component.templateUrl = '';
Component.scope = null;
exports.default = Component;
;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _eventEmitter = __webpack_require__(7);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var utils = {};

/**
 * Create class attribute from an object
 *
 * @example
 * // returns "red active"
 * utils.class({red: true, active: true, green: false});
 *
 * @param {object} obj
 * @returns {string}
 */
utils.class = function (obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return '';
  }

  var classes = [];

  for (var k in obj) {
    if (!obj.hasOwnProperty(k)) {
      continue;
    }

    var val = obj[k];

    val && classes.push(k);
  }

  return classes.join(' ');
};

/**
 * Create style attribute from an object
 *
 * @example
 * // returns "color:red;width:10px"
 * utils.style({color: "red", background: false, width: "10px"});
 *
 * @param {object} obj
 * @returns {string}
 */
utils.style = function (obj) {
  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return '';
  }

  var styles = [];

  for (var k in obj) {
    if (!obj.hasOwnProperty(k)) {
      continue;
    }

    var val = obj[k];

    val && styles.push(this.toDashCase(k) + ':' + val);
  }

  return styles.join(';');
};

/**
 * Filter an array
 *
 * @example
 * // returns [1, 11]
 * utils.filter([1, 2, 3, 11], '1');
 *
 * @example
 * // returns [{x:1}, {x:11}]
 * utils.filter([{x:1}, {x:2}, {x:3}, {x:11}], '1', ['x']);
 *
 * @param {Array} arr
 * @param {string|RegExp|function} handler - type of filtering
 * @param {string[]|string} [keys] - filter in the keys if array elements are object
 * @returns {Array} - returns other array
 */
utils.filter = function (arr, handler) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var res = [];

  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  if (!handler) {
    return [].concat(_toConsumableArray(arr));
  }

  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i];
    var val = keys.length ? this.getPropertyByKeys(keys, item) : item;

    if (!val) {
      continue;
    }

    val += '';

    if (typeof handler == 'function' && handler(item)) {
      res.push(item);
    } else if (val.match(handler || '')) {
      res.push(item);
    }
  }

  return res;
};

/**
 * Order an array
 *
 * @example
 * // returns [1, 2, 3]
 * utils.sort([3, 2, 1], true);
 *
 * @example
 * // returns [3, 2, 1]
 * utils.sort([1, 2, 3], false);
 *
 * @example
 * // returns [{x: 1}, {x: 2}, {x: 3}]
 * utils.sort([{x: 3}, {x: 2}, {x: 1}], [['x']], [true]);
 * utils.sort([{x: 3}, {x: 2}, {x: 1}], ['x'], true);
 * utils.sort([{x: 3}, {x: 2}, {x: 1}], 'x');
 *
 * @example
 * // returns [{x: 3}, {x: 2}, {x: 1}]
 * utils.sort([{x: 1}, {x: 2}, {x: 3}], [['x']], [false]);
 * utils.sort([{x: 1}, {x: 2}, {x: 3}], ['x'], false);
 * utils.sort([{x: 1}, {x: 2}, {x: 3}], 'x', false);
 *
 * @example
 * // returns [{x: 1, y: 3}, {x: 2, y: 1}, {x:2, y: 2}]
 * utils.sort([{x: 2, y: 2}, {x: 2, y: 1}, {x: 2, y: 3}], [['x'], ['y']], [true, true]);
 *
 * @param {Array} arr
 * @param {boolean|Array[]|string[]|string} [keys]
 * @param {boolean|boolean[]} [order] - reverse or not
 * @returns {Array}
 */
utils.sort = function (arr) {
  var _this = this;

  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  arr = [].concat(_toConsumableArray(arr));

  if (keys === true) {
    keys = [];
    order = [true];
  } else if (keys === false) {
    keys = [];
    order = [false];
  }

  if (!Array.isArray(keys)) {
    keys = [keys];
  }

  if (!Array.isArray(order)) {
    order = [order];
  }

  var l = keys.length;

  arr.sort(function (a, b) {
    var i = 0;

    var check = function check(a, b) {
      var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (a instanceof Date) {
        a = a.getTime();
      }

      if (b instanceof Date) {
        b = b.getTime();
      }

      if (a > b) {
        return reverse ? -1 : 1;
      } else if (a < b) {
        return reverse ? 1 : -1;
      }

      return 0;
    };

    var next = function next() {
      if (i >= l) {
        return 0;
      }

      var key = keys[i];

      if (!Array.isArray(key)) {
        key = [key];
      }

      var aV = _this.getPropertyByKeys(key, a);
      var bV = _this.getPropertyByKeys(key, b);
      var res = check(aV, bV, order[i] === false);

      if (res !== 0) {
        return res;
      }

      i++;

      return next();
    };

    if (!l) {
      return check(a, b, order[i] === false);
    }

    return next();
  });

  return arr;
};

/**
 * Check the value is component scope proxy object
 *
 * @param {*} val
 * @returns {boolean}
 */
utils.isScopeProxy = function (val) {
  return !!(val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' && val.__isProxy);
};

/**
 * Check the value is plain object
 *
 * @param {*} obj
 * @returns {boolean}
 */
utils.isPlainObject = function (obj) {
  return !!(obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && (obj.constructor == Object || obj.constructor == Array));
};

/**
 * Copy the value
 *
 * @param {*} value
 * @param {boolean} [nested=true] - deep copy if is true
 * @returns {*}
 */
utils.copy = function (value) {
  var nested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !value) {
    return value;
  }

  function next(obj) {
    obj = Array.isArray(obj) ? [].concat(_toConsumableArray(obj)) : _extends({}, obj);

    if (!nested) {
      return obj;
    }

    for (var k in obj) {
      if (!obj.hasOwnProperty(k)) {
        continue;
      }

      if (obj[k] && _typeof(obj[k]) == 'object') {
        obj[k] = next(obj[k]);
      }
    }

    return obj;
  }

  return next(value);
};

/**
 * Change the value to attribute appropriate format
 *
 * @param {*} value
 * @returns {*}
 */
utils.makeAttributeValue = function (value) {
  if (value === false || value === null || value === undefined) {
    return '';
  }

  if (value instanceof _eventEmitter2.default) {
    return '[object Event]';
  }

  if (typeof value == 'function') {
    return '[object Function]';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
    return Object.prototype.toString.call(value);
  }

  return value + '';
};

/**
 * Compare two values
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
utils.compare = function (a, b) {
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  if (typeof a == 'function' && typeof b == 'function') {
    return a.toString() === b.toString();
  } else if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) == 'object') {
    if (a === null || b === null) {
      return a === b;
    }

    if (Object.keys(a).length != Object.keys(b).length) {
      return false;
    }

    for (var k in a) {
      if (!a.hasOwnProperty(k)) {
        continue;
      }

      if (!this.compare(a[k], b[k])) {
        return false;
      }
    }

    return true;
  }

  return a === b;
};

/**
 * Compare current value with previous
 *
 * @param {*} current - the current value
 * @param {*} previous - the current value copy
 * @param {*} previousCopy - the previous value copy
 * @param {*} [currentCopy] - the current value copy
 * @returns {boolean}
 */
utils.comparePreviousValue = function (current, previous, previousCopy, currentCopy) {
  if (current !== previous) {
    return false;
  }

  return this.compare(arguments.length == 3 ? currentCopy : this.copy(current), previousCopy);
};

/**
 * Encode html entities
 *
 * @example
 * // returns "you &amp me"
 * utils.encodeHtmlEntities('you & me');
 *
 * @param {string} html
 * @returns {string}
 */
utils.encodeHtmlEntities = function (html) {
  var el = document.createElement("div");
  var value = void 0;

  el.textContent = html;
  value = el.innerHTML;
  el.remove();
  el = null;

  return value;
};

/**
 * Decode html entities
 *
 * @example
 * // returns "you & me"
 * utils.decodeHtmlEntities('you &amp me');
 *
 * @param {string} html
 * @returns {string}
 */
utils.decodeHtmlEntities = function (html) {
  var el = document.createElement("textarea");
  var value = void 0;

  el.innerHTML = html;
  value = el.value;
  el.remove();
  el = null;

  return value;
};

/**
 * Change string from dash to camel case format
 *
 * @param {string} str
 * @returns {string}
 */
utils.toCamelCase = function (str) {
  return str.replace(/\W+(.)/g, function (m, c) {
    return c.toUpperCase();
  });
};

/**
 * Change string from camel to dash case format
 *
 * @param {string} str
 * @returns {string}
 */
utils.toDashCase = function (str) {
  return str.replace(/([A-Z])/g, function (m, c) {
    return '-' + c.toLowerCase();
  });
};

/**
 * Get nested object property by array keys
 *
 * @example
 * // returns 5
 * utils.getPropertyByKeys(['x', 'y'], {x: {y: 5}});
 *
 * @param {string[]} keys
 * @param {object} object
 * @returns {*}
 */
utils.getPropertyByKeys = function (keys, object) {
  var current = void 0;
  var length = keys.length;
  var i = 0;

  keys.reduce(function (o, k) {
    i++;

    if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
      return o;
    }

    if (o[k] === undefined) {
      return {};
    }

    i == length && (current = o[k]);
    return o[k];
  }, object);

  return current;
};

/**
 * Check nested objects tree has property or not
 *
 * @example
 * // returns true
 * utils.hasPropertyByKeys(['x', 'y'], {x: {y: 5}});
 *
 * @param {string[]} keys
 * @param {object} object
 * @returns {boolean}
 */
utils.hasPropertyByKeys = function (keys, object) {
  var has = false;
  var length = keys.length;
  var i = 0;

  keys.reduce(function (o, k) {
    i++;

    if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
      return !!o;
    }

    if (!o.hasOwnProperty(k)) {
      return {};
    }

    i == length && (has = o.hasOwnProperty(k));
    return o[k];
  }, object);

  return has;
};

/**
 * Set nested objects tree property
 * Returns changed property object
 *
 * @example
 * // returns {y: 6}
 * utils.setPropertyByKeys(['x', 'y'], {x: {y: 5}}, (last, val) => last? 6: (val || {}));
 *
 * @param {string[]} keys
 * @param {object} object
 * @param {function} fn
 * @returns {*}
 */
utils.setPropertyByKeys = function (keys, object, fn) {
  var current = undefined;
  var length = keys.length;
  var i = 0;

  keys.reduce(function (o, k) {
    i++;

    if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
      return;
    }

    if (!o.hasOwnProperty(k)) {
      return current = o[k] = fn(i == length);
    }

    o[k] = fn(i == length, o[k]);
    current = o;

    return o[k];
  }, object);

  return current;
};

/**
 *
 * Delete property from nested objects tree
 * Returns deleted property value
 * You can cancel deleting if will return false in the callback function
 *
 * @example
 * // returns 5
 * utils.deletePropertyByKeys(['x', 'y'], {x: {y: 5}});
 @example
 * // returns 5
 * utils.deletePropertyByKeys(['x', 'y'], {x: {y: 5}}, val => val != 5);
 *
 * @param {string[]} keys
 * @param {object} object
 * @param {function} [fn]
 * @returns {*}
 */
utils.deletePropertyByKeys = function (keys, object, fn) {
  var length = keys.length;
  var value = void 0;
  var i = 0;

  keys.reduce(function (o, k) {
    i++;

    if ((typeof o === 'undefined' ? 'undefined' : _typeof(o)) != 'object') {
      return;
    }

    if (!o.hasOwnProperty(k)) {
      return {};
    }

    if (i == length) {
      value = o[k];

      if (!fn || fn(value)) {
        delete o[k];
      }

      return value;
    }

    return o[k];
  }, object);

  return value;
};

/**
 * Get the enumerable property target object
 *
 * @param {object} target
 * @param {string} key
 * @returns {object}
 */

utils.getEnumerablePropertyTarget = function (target, key) {
  var check = function check(obj) {
    if (obj.propertyIsEnumerable(key)) {
      return obj;
    }

    var proto = Object.getPrototypeOf(obj);

    if (!proto) {
      return null;
    }

    return check(proto);
  };

  return check(target);
};

/**
 * Get the own property target object
 *
 * @param {object} target
 * @param {string} key
 * @returns {object}
 */
utils.getOwnPropertyTarget = function (target, key) {
  var check = function check(obj) {
    if (obj.hasOwnProperty(key)) {
      return obj;
    }

    var proto = Object.getPrototypeOf(obj);

    if (!proto) {
      return null;
    }

    return check(proto);
  };

  return check(target);
};

/**
 * Clear value proxy if it existent
 *
 * @param {*} value
 * @returns {*}
 */
utils.clearScopeProxy = function (value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !value) {
    return value;
  }

  var clear = function clear(obj) {
    for (var k in obj) {
      if (!obj.hasOwnProperty(k)) {
        continue;
      }

      if (obj[k] && _typeof(obj[k]) == 'object') {
        if (obj[k].__isProxy) {
          obj[k] = obj[k].__target;
        }

        clear(obj[k]);
      }
    }
  };

  if (value.__isProxy) {
    value = value.__target;
  }

  clear(value);

  return value;
};

/**
 * Generate random string
 *
 * @param {number} length
 * @param {function} fn
 * @returns {*}
 */
utils.createRandomString = function () {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var str = Math.random().toString(36).substring(2, length + 2);
  var val = '';

  for (var i = 0, l = str.length; i < l; i++) {
    if (Math.random() > 0.66) {
      val += str[i].toUpperCase();
    } else {
      val += str[i];
    }
  }

  if (fn && fn(val)) {
    return this.createRandomString(length, fn);
  }

  return val;
};

exports.default = utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request = exports.Request = function () {
  function Request(baseUrl, defaults) {
    _classCallCheck(this, Request);

    this.baseUrl = baseUrl ? baseUrl.replace(/\/$/, '') + '/' : '';

    this.defaults = _extends({
      statusErrorsPattern: /^([^23])|404/
    }, defaults || {});
  }

  /**
   * Send request with any method
   *
   * @param {object} options
   * @returns {Promise}
   */


  _createClass(Request, [{
    key: 'query',
    value: function query(options) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var url = void 0;
        var xhr = void 0;

        options = _extends({}, _this.defaults, options || {});

        xhr = new XMLHttpRequest();
        typeof options.onStart == 'function' && options.onStart(xhr);
        options = _this.transformBefore(options);
        url = _this.baseUrl ? '' + _this.baseUrl + options.url.replace(/^\//, '') : options.url;
        xhr.open(options.method, url, true, options.user, options.password);
        options.headers = options.headers || {};

        if (options.json) {
          options.body = JSON.stringify(options.json);
          options.headers['content-type'] = 'application/json';
          options.responseType = options.responseType || 'json';
        } else if (options.form) {
          options.body = _this.createFormData(options.form);
          options.headers['content-type'] = 'multipart/form-data';
        }

        if (options.hasOwnProperty('timeout')) {
          xhr.timeout = options.timeout;
        }

        if (options.responseType) {
          xhr.responseType = options.responseType;
        }

        if (options.withCredentials) {
          xhr.withCredentials = options.withCredentials;
        }

        if (options.headers) {
          for (var k in options.headers) {
            if (!options.headers.hasOwnProperty(k)) {
              continue;
            }

            xhr.setRequestHeader(k, options.headers[k]);
          }
        }

        if (options.params) {
          var str = _this.paramsToQuery(options.params);

          if (str) {
            url += "?" + str;
          }
        }

        if (typeof options.onProgress == 'function') {
          xhr.onprogress = function () {
            return options.onProgress(xhr);
          };
        }

        xhr.onload = function () {
          var response = _this.transformAfter(xhr);

          if ((xhr.status + '').match(options.statusErrorsPattern)) {
            var err = new Error('Request to "' + url + '" returns failure status code ' + xhr.status);

            err.response = response;

            return reject(err);
          }

          resolve(response);
        };

        xhr.timeout = function () {
          reject(new Error('Request to "' + url + '" timed out'));
        };

        xhr.onerror = function (err) {
          reject(err);
        };

        xhr.send(options.body);
      });
    }

    /**
     * Convert object to query string
     *
     * @param {object} obj
     * @returns {string}
     */

  }, {
    key: 'paramsToQuery',
    value: function paramsToQuery(obj) {
      var sep = '&';
      var eq = '=';

      if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        return '';
      }

      return Object.keys(obj).map(function (k) {
        var ks = encodeURIComponent(k);

        if (Array.isArray(obj[k])) {
          ks = encodeURIComponent(k);

          return obj[k].map(function (v, i) {
            return ks + ('[' + i + ']') + eq + encodeURIComponent(v);
          }).join(sep);
        } else if (obj[k] && _typeof(obj[k]) === 'object') {
          var opt = [];

          Object.keys(obj[k]).map(function (key) {
            opt.push(ks + ('[' + key + ']') + eq + encodeURIComponent(obj[k][key]));
          });

          return opt.join(sep);
        } else {
          return ks + eq + encodeURIComponent(obj[k]);
        }
      }).join(sep);
    }

    /**
     * Convert query string to object
     *
     * @param {string} str
     * @returns {object}
     */

  }, {
    key: 'paramsFromQuery',
    value: function paramsFromQuery(str) {
      var query = {};
      var amps = str.split('&');

      for (var i = 0, l = amps.length; i < l; i++) {
        var eqs = amps[i].split('=');
        var key = decodeURIComponent(eqs[0]);
        var val = decodeURIComponent(eqs[1]);

        if (!key) {
          continue;
        }

        if (Array.isArray(query[key])) {
          query[key].push(val);
        } else if (query[key]) {
          query[key] = [query[key], val];
        } else {
          query[key] = val;
        }
      }

      return query;
    }

    /**
     * Create multipart form data from object
     *
     * @param {object} obj
     * @param {FormData} [data]
     * @param {string} [namespace]
     *
     * @returns {FormData}
     */

  }, {
    key: 'createFormData',
    value: function createFormData(obj) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var fd = data || new FormData();

      for (var k in obj) {
        if (obj.hasOwnProperty(k) && obj[k]) {
          var key = namespace ? namespace + '[' + k + ']' : k;

          if (obj[k] instanceof Date) {
            fd.append(key, obj[k].toISOString());
          } else if (_utils2.default.isPlainObject(obj[k])) {
            this.createFormData(obj[k], fd, key);
          } else {
            fd.append(key, obj[k]);
          }
        }
      }

      return fd;
    }

    /**
     * Transform data before a request
     *
     * @param {object} options
     * @returns {object}
     */

  }, {
    key: 'transformBefore',
    value: function transformBefore(options) {
      return options;
    }

    /**
     * Transform data after a request
     *
     * @param {XMLHttpRequest} xhr
     * @returns {object}
     */

  }, {
    key: 'transformAfter',
    value: function transformAfter(xhr) {
      return {
        xhr: xhr,
        data: xhr.response,
        status: xhr.status
      };
    }

    /**
     *  Make GET request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'get',
    value: function get(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'GET';

      return this.query(options);
    }

    /**
     *  Make DELETE request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'delete',
    value: function _delete(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'DELETE';

      return this.query(options);
    }

    /**
     *  Make POST request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'post',
    value: function post(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'POST';

      return this.query(options);
    }

    /**
     *  Make PUT request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'put',
    value: function put(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'PUT';

      return this.query(options);
    }

    /**
     *  Make PATCH request
     *
     * @param {string} url
     * @param {object} options
     * @returns {Promise}
     */

  }, {
    key: 'patch',
    value: function patch(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'PATCH';

      return this.query(options);
    }
  }]);

  return Request;
}();

var request = new Request();

request.__instances = {};

/**
 * Add new request instance to the main service
 *
 * @param {string} name
 * @param {Request} instance
 */
request.addInstance = function (name, instance) {
  this.__instances[name] = instance;
};

/**
 * Remove instance
 *
 * @param {string} name
 */
request.removeInstance = function (name) {
  delete this.__instances[name];
};

Object.defineProperty(request, 'use', {
  get: function get() {
    return request.__instances;
  }
});

request.Request = Request;
exports.default = request;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loop = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var For = function (_Component) {
  _inherits(For, _Component);

  _createClass(For, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('for', For);
      _akili2.default.component('ol', For);
      _akili2.default.component('ul', For);
      _akili2.default.component('thead', For);
      _akili2.default.component('tbody', For);
      _akili2.default.component('tfoot', For);
      _akili2.default.component('tr', Loop);
      _akili2.default.component('loop', Loop);
    }
  }]);

  function For() {
    var _ref;

    _classCallCheck(this, For);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = For.__proto__ || Object.getPrototypeOf(For)).call.apply(_ref, [this].concat(args)));

    _this.__iterator = null;
    _this.__key = null;
    _this.__value = null;
    _this.__index = null;
    _this.__comparisonValue = null;
    _this.iterators = {};
    _this.iteratorRef = null;
    _this.iteratorOuterHTML = null;
    return _this;
  }

  _createClass(For, [{
    key: 'changedIn',
    value: function changedIn(data) {
      this.draw(data);
    }
  }, {
    key: 'created',
    value: function created() {
      this.createIterator();
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.draw(this.attrs.in);
    }
  }, {
    key: 'createIterator',
    value: function createIterator() {
      var el = void 0;

      for (var i = 0, l = this.el.children.length; i < l; i++) {
        var child = this.el.children[i];

        if (child.getAttribute('component') == 'loop') {
          el = child;

          break;
        }

        el = child;
      }

      if (!el) {
        throw new Error('"For" component must have at least one child');
      }

      var componentName = el.getAttribute('component');

      if (componentName != 'loop') {
        var component = _akili2.default.component(componentName || el.tagName);

        if (!component) {
          el.setAttribute('component', 'loop');
        } else if (!(component.prototype instanceof For)) {
          var mask = document.createElement('loop');

          mask.appendChild(el);
          el = mask;
        }
      }

      this.html = el.innerHTML;
      this.iteratorRef = el.nextSibling;
      this.iteratorOuterHTML = el.outerHTML;
      el.remove();
    }
  }, {
    key: 'createIteratorElement',
    value: function createIteratorElement() {
      var el = document.createElement('template');

      el.innerHTML = this.iteratorOuterHTML;
      el = el.content.firstChild;

      return el;
    }
  }, {
    key: 'loop',
    value: function loop(key, value, keys, index) {
      var _this2 = this;

      this.__index = index;
      this.__key = key;
      this.__value = value;
      this.__comparisonValue = _utils2.default.copy(value);

      var hash = '';
      var found = 0;

      if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value.__hash) {
        hash = value.__hash;
      }

      if (this.iterators[hash]) {
        key = hash;
        found = 2;
      } else if (this.iterators[key]) {
        found = 1;
      }

      if (found) {
        var iterator = this.iterators[key];

        if (found == 2) {
          var cValue = iterator.comparsion.value;
          var cCopy = iterator.comparsion.copy;

          if (this.__index !== iterator.index) {
            iterator.setIndex();
          }

          if (this.__key !== iterator.key) {
            iterator.setKey();
          }

          if (!_utils2.default.comparePreviousValue(value, cValue, cCopy, this.__comparisonValue)) {
            iterator.setValue();
          }

          keys[key] = iterator;
          delete this.iterators[key];

          return iterator;
        }

        this.iteratorRef = iterator.el.nextSibling;
        iterator.__destroy();
      }

      var el = this.createIteratorElement();

      el.innerHTML = this.html;
      this.el.insertBefore(el, this.iteratorRef);
      _akili2.default.compile(el);

      if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
        if (!value.__hash) {
          hash = _utils2.default.createRandomString(32, function (str) {
            return _this2.iterators[str];
          });

          Object.defineProperty(value, '__hash', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: hash
          });
        }

        keys[hash] = this.__iterator;
        delete this.iterators[hash];
      } else {
        if (_akili2.default.options.debug) {
          var eValue = typeof this.__value == 'string' ? '"' + this.__value + '"' : this.__value;

          var args = ['"For" component loop items should have "object" type for higher performance.', 'You can change ' + eValue + ' to {value: ' + eValue + '}, for example.'];

          console.warn.apply(console.warn, args);
        }

        keys[key] = this.__iterator;
        delete this.iterators[key];
      }

      return el.__akili;
    }
  }, {
    key: 'draw',
    value: function draw(data) {
      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != 'object' || data === null) {
        if (_akili2.default.options.debug) {
          console.warn('"For" component "in" attribute value type must be an object/array');
          data = [];
        }
      }

      var keys = {};
      var indexKeys = [];
      var lastElement = null;
      var last = this.el.children[this.el.children.length - 1];

      if (last && !(last.__akili instanceof Loop)) {
        lastElement = last;
      }

      if (Array.isArray(data)) {
        for (var i = 0, l = data.length; i < l; i++) {
          indexKeys.push(this.loop(i, data[i], keys, i));
        }
      } else {
        var _i = 0;

        for (var k in data) {
          if (!data.hasOwnProperty(k)) {
            continue;
          }

          indexKeys.push(this.loop(k, data[k], keys, _i));
          _i++;
        }
      }

      for (var _i2 = 0, _l = indexKeys.length; _i2 < _l; _i2++) {
        var iterator = indexKeys[_i2];

        this.el.appendChild(iterator.el);
        iterator.iterate(_i2);
      }

      lastElement && this.el.appendChild(lastElement);

      for (var _k in this.iterators) {
        if (!this.iterators.hasOwnProperty(_k)) {
          continue;
        }

        this.iterators[_k].__destroy();
      }

      this.iterators = keys;
    }
  }]);

  return For;
}(_component2.default);

For.matches = '[in]';
exports.default = For;
;

var Loop = exports.Loop = function (_For) {
  _inherits(Loop, _For);

  function Loop() {
    var _ref2;

    _classCallCheck(this, Loop);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _this3 = _possibleConstructorReturn(this, (_ref2 = Loop.__proto__ || Object.getPrototypeOf(Loop)).call.apply(_ref2, [this].concat(args)));

    _this3.for = null;
    _this3.html = _this3.el.innerHTML;
    _this3.isFor = _this3.el.hasAttribute('in');

    if (!_this3.isFor && !(_this3.el.parentNode.__akili instanceof For)) {
      _this3.cancel();
    }
    return _this3;
  }

  _createClass(Loop, [{
    key: 'created',
    value: function created() {
      this.__parent.__akili.__iterator = this;
      this.for = this.__parent.__akili;
      this.setIndex();
      this.setKey();
      this.setValue();

      this.isFor && _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'created', this).apply(this, arguments);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.isFor && _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'compiled', this).apply(this, arguments);
    }
  }, {
    key: 'setIndex',
    value: function setIndex() {
      this.index = this.for.__index;
      this.scope.__set('loopIndex', this.index);
    }
  }, {
    key: 'setKey',
    value: function setKey() {
      this.key = this.for.__key;
      this.scope.__set('loopKey', this.key);
    }
  }, {
    key: 'setValue',
    value: function setValue() {
      this.value = this.for.__value;
      this.scope.__set('loopValue', this.value, true);

      this.comparsion = {
        copy: this.for.__comparisonValue,
        value: this.for.__value
      };
    }
  }, {
    key: 'iterate',
    value: function iterate(index) {}
  }]);

  return Loop;
}(For);

Loop.matches = '';
Loop.controlAttributes = true;


For.Loop = Loop;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    var _ref;

    _classCallCheck(this, Text);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(args)));

    _this.valueKey = 'value';
    return _this;
  }

  _createClass(Text, [{
    key: 'changedValue',
    value: function changedValue(value) {
      this.setValue(value);
    }
  }, {
    key: 'changedFocus',
    value: function changedFocus(value) {
      this.setFocus(value);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('focus') && this.setFocus(this.attrs.focus);
      this.attrs.hasOwnProperty('value') && this.setValue(this.attrs.value);
    }
  }, {
    key: 'setFocus',
    value: function setFocus(value) {
      value ? this.setElementFocus() : this.setElementBlur();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.el[this.valueKey] !== value && (this.el[this.valueKey] = value === 0 ? '0' : value || '');
    }
  }, {
    key: 'setElementFocus',
    value: function setElementFocus() {
      this.el.focus();
    }
  }, {
    key: 'setElementBlur',
    value: function setElementBlur() {
      this.el.blur();
    }
  }]);

  return Text;
}(_component2.default);

exports.default = Text;
;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(3);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Route = function (_Component) {
  _inherits(Route, _Component);

  _createClass(Route, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('route', Route);
    }
  }]);

  function Route() {
    var _ref;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Route.__proto__ || Object.getPrototypeOf(Route)).call.apply(_ref, [this].concat(args)));

    _this.el.innerHTML = '';
    return _this;
  }

  /**
   * @param {Transition} transition
   * @returns {Promise}
   */


  _createClass(Route, [{
    key: 'setTransition',
    value: function setTransition(transition) {
      var _this2 = this;

      var state = transition.path.state;
      var params = transition.path.params;
      var url = transition.url;
      var query = transition.query;
      var p = Promise.resolve();

      function getParentScopeTransition(path) {
        if (path.parent) {
          if (path.parent.component) {
            return path.parent.component.__scope.__transition.path;
          }

          return getParentScopeTransition(path.parent);
        }

        return null;
      }

      this.__scope.__transition = {
        path: {
          state: state.name,
          data: transition.path.data,
          params: params,
          parent: getParentScopeTransition(transition.path)
        },
        params: transition.params,
        url: url,
        query: query
      };

      if (state.template) {
        this.empty();
        this.el.innerHTML = '<component>' + state.template + '</component>';
      }

      if (state.templateUrl) {
        p = _request2.default.get(state.templateUrl).then(function (res) {
          _this2.empty();
          _this2.el.innerHTML = '<component>' + res.data + '</component>';
        });
      }

      return p.then(function () {
        return _akili2.default.compile(_this2.el, { recompile: true });
      });
    }
  }]);

  return Route;
}(_component2.default);

exports.default = Route;
;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter(name, el, component) {
    _classCallCheck(this, EventEmitter);

    this.name = name;
    this.el = el;
    this.component = component;
  }

  /**
   * Trigger the event
   *
   * @param {*} data - sending data. Will be in the event.detail
   * @param {object} [options]
   * @param {boolean} [force]
   */


  _createClass(EventEmitter, [{
    key: "trigger",
    value: function trigger(data) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { bubbles: false };
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new CustomEvent(this.name, _extends({ detail: data }, options)));
      }
    }

    /**
     * Dispatch the event
     *
     * @param {Event} _Event - class of the event
     * @param {object} [options]
     * @param {boolean} [force]
     */

  }, {
    key: "dispatch",
    value: function dispatch(_Event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { bubbles: false };
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new _Event(this.name, options));
      }
    }

    /**
     * Check event callback doesn't run recursive
     *
     * @returns {boolean}
     */

  }, {
    key: "inEvaluating",
    value: function inEvaluating() {
      var data = this.component.__evaluatingEvent;

      if (!data) {
        return false;
      }

      return data.el === this.el && data.event.type === this.name && data.component === this.component;
    }

    /**
     * Bind the function
     *
     * @param {function} fn
     */

  }, {
    key: "bind",
    value: function bind(fn) {
      this.el.addEventListener(this.name, this.fn = fn);
    }

    /**
     * Unbind the function
     */

  }, {
    key: "unbind",
    value: function unbind() {
      this.fn && this.el.removeEventListener(this.name, this.fn);
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;
;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transition = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(3);

var _request2 = _interopRequireDefault(_request);

var _route2 = __webpack_require__(6);

var _route3 = _interopRequireDefault(_route2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transition = exports.Transition = function () {
  function Transition(url, query) {
    var hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var previous = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Transition);

    this.url = url;
    this.query = query;
    this.hash = hash;
    this.previous = previous;
    this.path = null;
    this.routes = [];
    this.states = [];
    this.params = {};
    this.__cancelled = false;
  }

  _createClass(Transition, [{
    key: 'redirect',
    value: function redirect() {
      this.cancel();
      router.state.apply(router, arguments);
    }
  }, {
    key: 'setPath',
    value: function setPath(path) {
      path.parent = this.path || null;
      this.path = path;
      this.routes.push(path);
      this.states.push(path.state);
      this.params = !path.parent ? path.params : _extends({}, path.parent.params, path.params);
    }
  }, {
    key: 'getRoute',
    value: function getRoute(state) {
      for (var i = 0, l = this.routes.length; i < l; i++) {
        var route = this.routes[i];

        if (route.state === state) {
          return route;
        }
      }

      return null;
    }
  }, {
    key: 'hasState',
    value: function hasState(state) {
      return this.states.indexOf(state) != -1;
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
    }
  }]);

  return Transition;
}();

var router = {};

router.baseUrl = "/";
router.states = [];
router.hashMode = true;
router.__redirects = 0;
router.__init = false;
router.__options = {};
router.__paramRegex = /(:([\w\d-]+))/g;
router.__routeSelector = function (c) {
  return c instanceof _route3.default;
};

/**
 * Add new state to the router
 *
 * @param {string} name - state name. To set parents you can use dot, e.g. 'app.article.edit'
 * @param {string} pattern - url pattern like 'app/article/:id'
 * @param {object} [options]
 * @returns {router}
 */
router.add = function (name, pattern) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var defaultOptions = {
    template: '',
    templateUrl: '',
    abstract: false,
    handler: function handler(transition) {}
  };

  if (!options.template && !options.templateUrl) {
    options.abstract = true;
  }

  if (this.has(name)) {
    throw new Error('Router state "' + name + '" is already exists');
  }

  this.setState(name, pattern, _extends({}, defaultOptions, options));

  return this;
};

/**
 * Remove state from the list
 *
 * @param {string} name
 */
router.remove = function (name) {
  for (var i = 0, l = this.states.length; i < l; i++) {
    if (this.states[i].name == name) {
      this.states.splice(i, 1);

      return;
    }
  }
};

/**
 * Check state exists
 *
 * @param {string} name
 * @returns {boolean}
 */
router.has = function (name) {
  for (var i = 0, l = this.states.length; i < l; i++) {
    if (this.states[i].name == name) {
      return true;
    }
  }

  return false;
};

/**
 * Change the state to the passed
 *
 * @param {string} name - state name
 * @param {object} [params] - params for state {id: 1} => '/app/:id' => '/app/1'
 * @param {object} [query] - query {x: 1} => '/app/?x=1'
 * @param {string} [hash]
 * @param {object} [options]
 */
router.state = function (name) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var state = this.getState(name);

  if (!state) {
    throw new Error('Not found route state with name ' + name);
  }

  var url = this.createStateUrl(state, params, query, hash);

  if (!options.reload && url === this.getUrl()) {
    return;
  }

  this.__options = options;
  this.setUrl(url);
};

/**
 * Go back
 */
router.back = function () {
  return window.history.back.apply(window.history, arguments);
};

/**
 * Go to any way
 */
router.go = function () {
  return window.history.go.apply(window.history, arguments);
};

/**
 * Go forward
 */
router.forward = function () {
  return window.history.forward.apply(window.history, arguments);
};

/**
 * Change state by url
 *
 * @param {string} url
 * @param {object} [options]
 */
router.location = function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { reload: false };

  this.__options = options;

  if (this.hashMode) {
    window.location.hash = url;
  } else {
    window.history.pushState(null, '', url);
  }
};

/**
 * Router initialization. Should be called before Akili.init()
 *
 * @param {string} [defaultUrl]
 * @param {boolean} [hashMode=true]
 */
router.init = function () {
  var _this = this;

  var defaultUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var hashMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var oldPushState = window.history.pushState;

  window.history.pushState = function () {
    var res = oldPushState.apply(this, arguments);

    router.changeState();

    return res;
  };

  this.__onStateChangeHandler = function () {
    _this.changeState();
  };

  this.defaultUrl = defaultUrl;
  this.hashMode = hashMode;

  this.states.sort(function (a, b) {
    a = a.name.split('.').length;
    b = b.name.split('.').length;

    return a - b;
  });

  var states = {};

  for (var i = 0, l = this.states.length; i < l; i++) {
    var state = this.states[i];
    var parents = [];

    states[state.name] = state;
    state.children = [];
    parents = state.name.split('.');
    parents.pop();
    state.level = state.abstract ? null : parents.length;

    if (parents.length) {
      var parentName = parents.join('.');
      var parent = states[parentName];

      if (!parent) {
        throw new Error('Not found parent route state "' + parentName + '" for "' + state.name + '"');
      }

      if (state.level !== null && parent.abstract) {
        state.level--;
      }

      state.fullPattern = this.splitSlashes(parent.fullPattern + '/' + state.pattern);
      parent.children.push(state);
    } else {
      state.fullPattern = state.pattern;
    }
  }

  if (!this.states.length && _akili2.default.options.debug) {
    console.warn('You didn\'t add any routes to the router');
  }

  window.addEventListener('popstate', this.__onStateChangeHandler);
  this.__init = true;
};

/**
 * Get state by name
 *
 * @param {string} name
 * @returns {object|null}
 */
router.getState = function (name) {
  for (var i = 0, l = this.states.length; i < l; i++) {
    var state = this.states[i];

    if (state.name == name) {
      return state;
    }
  }

  return null;
};

/**
 * Set state
 *
 * @param {string} name
 * @param {string} pattern
 * @param {object} options
 */
router.setState = function (name, pattern) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var state = _extends({}, options, { name: name, pattern: pattern });

  router.states.push(state);

  return state;
};

/**
 * Remove state by name
 *
 * @param {string} name
 */
router.removeState = function (name) {
  for (var i = 0, l = this.states.length; i < l; i++) {
    var state = this.states[i];

    if (state.name == name) {
      this.states.splice(i, 1);

      return;
    }
  }
};

/**
 * Set url
 *
 * @param {string} url
 */
router.setUrl = function (url) {
  this.hashMode ? this.setHashUrl(url) : this.setHistoryUrl(url);
};

/**
 * Set url using history
 *
 * @param url
 */
router.setHistoryUrl = function (url) {
  window.history.pushState(null, '', url);
};

/**
 * Set url using hash
 *
 * @param url
 */
router.setHashUrl = function (url) {
  window.location.hash = '#' + (url || '/');
};

/**
 * Get url
 *
 * @returns {string}
 */
router.getUrl = function () {
  return this.hashMode ? this.getHashUrl() : this.getHistoryUrl();
};

/**
 * Get url using history
 *
 * @returns {string}
 */
router.getHistoryUrl = function () {
  if (window.location.pathname === '/') {
    return '';
  }

  return window.location.pathname + window.location.search + window.location.hash;
};

/**
 * Get url using hash
 *
 * @returns {string}
 */
router.getHashUrl = function () {
  return window.location.hash.replace(/^#/, '');
};

/**
 * Get query params
 *
 * @returns {object}
 */
router.getUrlQuery = function () {
  return this.hashMode ? this.getHashUrlQuery() : this.getHistoryUrlQuery();
};

/**
 * Get query params using history
 *
 * @returns {object}
 */
router.getHistoryUrlQuery = function () {
  return _request2.default.paramsFromQuery(window.location.search.replace(/^\?/, ''));
};

/**
 * Get query params using hash
 *
 * @returns {object}
 */
router.getHashUrlQuery = function () {
  return _request2.default.paramsFromQuery(window.location.hash.split('?')[1] || '');
};

/**
 * Create url by data
 *
 * @param {string|Object} state
 * @param {object} [params]
 * @param {object} [query]
 * @param {string} [hash]
 */
router.createStateUrl = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));

  var url = state.fullPattern.replace(this.__paramRegex, function (m, f, v) {
    return params[v] || '';
  });

  url = this.splitSlashes(url);

  if (Object.keys(query).length) {
    url += '?' + _request2.default.paramsToQuery(query);
  }

  hash = (hash || '').replace('#', '');

  if (!this.hashMode && hash) {
    url += '#' + hash;
  }

  return url;
};

/**
 * Remove all unnecessary slashes from an url
 *
 * @param {string} url
 * @returns {string}
 */
router.splitSlashes = function (url) {
  return url.replace(/[\/]+/g, '/');
};

/**
 * Clear all router dependencies
 */
router.clear = function () {
  window.removeEventListener('popstate', this.__onStateChangeHandler);
};

/**
 * Get state url content
 *
 * @param {string|Object} state
 * @param {string} url
 * @returns {object}
 */
router.getPatternContent = function (state, url) {
  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));

  var keys = [];
  var i = 0;
  var params = {};

  url = url.split('?')[0];
  url = url.split('#')[0];

  var urlPattern = state.fullPattern.replace(this.__paramRegex, function (m, f, v) {
    keys.push(v);

    return '([^\\/]*)';
  });

  var regex = new RegExp(urlPattern);
  var isIncluded = url.match(regex);

  if (!isIncluded) {
    return null;
  }

  url.replace(regex, function (m, v) {
    v && (params[keys[i]] = v);
    i++;
  });

  return { params: params };
};

/**
 * Check the state is active now
 *
 * @param {string|Object} state
 * @param {boolean} includes
 * @returns {boolean}
 */
router.isActiveState = function (state) {
  var includes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));

  var url = this.splitSlashes(this.getUrl().split('?')[0] + '/');
  var urlPattern = state.fullPattern.replace(this.__paramRegex, '([^\\/]*)');
  var str = includes ? urlPattern : this.splitSlashes('^' + urlPattern + '\/$');
  var regex = new RegExp(str);

  return regex.test(url);
};

/**
 * Check the current url includes a state
 *
 * @param {string|Object} state
 * @returns {boolean}
 */
router.inActiveState = function (state) {
  return router.isActiveState(state, true);
};

/**
 * Get route component by level
 *
 * @param {number} level
 */
router.getRoute = function (level) {
  var _this2 = this;

  var i = 0;

  var find = function find(el) {
    var route = el.child(_this2.__routeSelector);

    if (!route) {
      return null;
    }

    if (i == level) {
      return route;
    }

    i++;

    return find(route);
  };

  return find(_akili2.default.root);
};

/**
 * Get the first match
 *
 * @param {array} arr
 * @param {string} url
 * @returns {object|null}
 */
router.getArrayPatternContent = function (arr, url) {
  for (var i = 0, l = arr.length; i < l; i++) {
    var state = arr[i];
    var content = this.getPatternContent(state, url);

    if (!content) {
      continue;
    }

    return _extends({ state: state }, content);
  }

  return null;
};

/**
 * Get states by level
 *
 * @param {number} level
 * @returns {Array}
 */
router.getStatesByLevel = function (level) {
  var states = [];

  for (var i = 0, l = this.states.length; i < l; i++) {
    var state = this.states[i];

    if (state.level < level) {
      continue;
    } else if (state.level > level) {
      break;
    }

    states.push(state);
  }

  return states;
};

/**
 * Change state
 */
router.changeState = function () {
  var _this3 = this;

  if (this.__disableChange) {
    delete this.__disableChange;

    return;
  }

  var url = this.getUrl();
  var hash = this.hashMode ? '' : window.location.hash.replace('#', '');
  var query = this.getUrlQuery();
  var prevTransition = router.transition || null;
  var transition = router.transition = new Transition(url, query, hash, prevTransition);
  var level = 0;

  var next = function next(states, onEnd) {
    if (!states.length) {
      return onEnd && onEnd();
    }

    var content = _this3.getArrayPatternContent(states, url);

    if (!content) {
      return onEnd && onEnd();
    }

    var state = content.state;
    var params = content.params;
    var route = state.abstract ? null : _this3.getRoute(state.level);

    if (!route && !state.abstract) {
      throw new Error('Not found route component for state "' + state.name + '"');
    }

    transition.setPath({ state: state, params: params, query: query, hash: hash, component: route, loaded: true });
    level++;

    var hasState = prevTransition && prevTransition.hasState(state);
    var isDifferent = true;

    if (hasState) {
      var _route = prevTransition.getRoute(state);
      var prev = { params: _route.params, query: _route.query, hash: _route.hash };
      var current = { params: params, query: query, hash: hash };

      isDifferent = !_utils2.default.compare(prev, current);
    }

    var isHistory = _this3.__options.reload === undefined && !isDifferent;
    var isReload = _this3.__options.reload === false;

    if (hasState && (isHistory || isReload)) {
      transition.path.loaded = false;

      return next(state.children, onEnd);
    }

    Promise.resolve(state.handler(transition)).then(function (data) {
      if (transition.__cancelled) {
        return onEnd && onEnd();
      }

      transition.path.data = data;

      if (state.abstract) {
        return next(state.children, onEnd);
      }

      route.setTransition(transition).then(function () {
        transition.path.loaded = true;

        next(state.children, onEnd);
      });
    });
  };

  next(this.getStatesByLevel(0), function () {
    if (!transition.routes.length) {
      if (_this3.__redirects) {
        throw new Error('Wrong router default url "' + _this3.defaultUrl + '"');
      }

      if (_this3.defaultUrl) {
        _this3.hashMode && _this3.defaultUrl != _this3.getUrl() && (_this3.__disableChange = true);
        _this3.setUrl(_this3.defaultUrl);
        _this3.__redirects++;

        return _this3.changeState();
      }

      if (_akili2.default.options.debug) {
        console.warn('Not found a default route. You can pass it in "router.init(defaultUrl)" function');
      }
    }

    _this3.__options = {};
    _this3.__redirects = 0;

    if (prevTransition) {
      for (var i = level, l = prevTransition.routes.length; i < l; i++) {
        var route = prevTransition.routes[i];
        route.component && route.component.empty();
      }
    }

    window.dispatchEvent(new CustomEvent('state-change', {
      detail: transition
    }));
  });
};

router.Transition = Transition;

exports.default = router;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(8);

var _router2 = _interopRequireDefault(_router);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var A = function (_Component) {
  _inherits(A, _Component);

  _createClass(A, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('a', A);
    }
  }]);

  function A() {
    var _ref;

    _classCallCheck(this, A);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = A.__proto__ || Object.getPrototypeOf(A)).call.apply(_ref, [this].concat(args)));

    _this.state = null;
    _this.params = {};
    _this.query = {};
    _this.hash = '';
    _this.options = {};
    _this.isUrl = _this.el.getAttribute('url');
    return _this;
  }

  _createClass(A, [{
    key: 'changedUrl',
    value: function changedUrl(url) {
      this.setUrl(url);
      this.resetHref(url);
    }
  }, {
    key: 'changedState',
    value: function changedState(state) {
      this.setState(state);
      this.resetHref();
    }
  }, {
    key: 'changedParams',
    value: function changedParams(params) {
      this.setParams(params);
      this.resetHref();
    }
  }, {
    key: 'changedQuery',
    value: function changedQuery(query) {
      this.setQuery(query);
      this.resetHref();
    }
  }, {
    key: 'changedHash',
    value: function changedHash(query) {
      this.setHash(query);
      this.resetHref();
    }
  }, {
    key: 'changedOptions',
    value: function changedOptions(options) {
      this.setQuery(options);
    }
  }, {
    key: 'changedReload',
    value: function changedReload(val) {
      this.setReload(val);
    }
  }, {
    key: 'created',
    value: function created() {
      var _this2 = this;

      this.el.addEventListener('click', function (e) {
        e.preventDefault();

        if (_this2.isUrl) {
          _router2.default.location(_this2.attrs.url, _this2.options);

          return;
        }

        _router2.default.state(_this2.state.name, _this2.params, _this2.query, _this2.hash, _this2.options);
      });
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('state') && this.setState(this.attrs.state);
      this.attrs.hasOwnProperty('params') && this.setParams(this.attrs.params);
      this.attrs.hasOwnProperty('query') && this.setQuery(this.attrs.query);
      this.attrs.hasOwnProperty('hash') && this.setHash(this.attrs.hash);
      this.attrs.hasOwnProperty('options') && this.setOptions(this.attrs.options);
      this.attrs.hasOwnProperty('reload') && this.setReload(this.attrs.reload);
      this.attrs.hasOwnProperty('url') && this.setUrl(this.attrs.url);
      this.resetHref(this.url);
    }
  }, {
    key: 'setUrl',
    value: function setUrl(url) {
      this.url = url;
    }
  }, {
    key: 'setState',
    value: function setState(name) {
      this.state = this.getState(name);
      this.scope.isActiveState = _router2.default.isActiveState(this.state);
      this.scope.inActiveState = _router2.default.inActiveState(this.state);
    }
  }, {
    key: 'setParams',
    value: function setParams(params) {
      if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) != 'object' || !params) {
        throw new Error('Router state params must be an object');
      }

      this.params = params;
    }
  }, {
    key: 'setQuery',
    value: function setQuery(query) {
      if ((typeof query === 'undefined' ? 'undefined' : _typeof(query)) != 'object' || !query) {
        throw new Error('Router state query must be an object');
      }

      this.query = query;
    }
  }, {
    key: 'setHash',
    value: function setHash(hash) {
      if (typeof hash != 'string') {
        throw new Error('Router state hash must be a string');
      }

      this.hash = hash;
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) != 'object' || !options) {
        throw new Error('Router state options must be an object');
      }

      this.options = options;
    }
  }, {
    key: 'setReload',
    value: function setReload(val) {
      this.options.reload = val;
    }
  }, {
    key: 'getState',
    value: function getState(name) {
      var state = _router2.default.getState(name);

      if (!state) {
        throw new Error('Not found router state with name "' + name + '"');
      }

      return state;
    }
  }, {
    key: 'resetHref',
    value: function resetHref(url) {
      if (url) {
        this.attrs.href = url;
      } else {
        this.attrs.href = _router2.default.createStateUrl(this.state, this.params, this.query, this.hash);
      }
    }
  }]);

  return A;
}(_component2.default);

A.matches = '[state]:not([url]),[url]:not([state])';
A.controlAttributes = true;
A.booleanAttributes = ['reload'];
exports.default = A;
;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Text) {
  _inherits(Content, _Text);

  _createClass(Content, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('content', Content);
      _akili2.default.alias('[contenteditable]', 'content');
    }
  }]);

  function Content() {
    var _ref;

    _classCallCheck(this, Content);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args)));

    if (_this.el.hasAttribute('editable')) {
      _this.el.setAttribute('contenteditable', _this.el.getAttribute('editable'));
      _this.el.removeAttribute('editable');
    }

    if (getComputedStyle(_this.el).display == 'inline') {
      _this.el.style.display = 'block';
    }

    _this.valueKey = 'innerHTML';
    return _this;
  }

  _createClass(Content, [{
    key: 'setElementFocus',
    value: function setElementFocus() {
      var range = document.createRange();
      var selection = window.getSelection();

      range.selectNodeContents(this.el);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
      this.el.focus();
    }
  }]);

  return Content;
}(_text2.default);

exports.default = Content;
;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Else = exports.ElseIf = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * If component
 */
var If = function (_Component) {
  _inherits(If, _Component);

  _createClass(If, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('if', If);
      _akili2.default.component('else-if', ElseIf);
      _akili2.default.component('else', Else);
    }
  }]);

  function If() {
    var _ref;

    _classCallCheck(this, If);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = If.__proto__ || Object.getPrototypeOf(If)).call.apply(_ref, [this].concat(args)));

    _this.html = _this.el.innerHTML;
    _this.el.innerHTML = '';
    _this.state = false;
    _this.active = false;
    _this.recreate = false;
    _this.isCompiled = false;
    _this.display = getComputedStyle(_this.el).display;
    return _this;
  }

  _createClass(If, [{
    key: 'changedIs',
    value: function changedIs(value) {
      this.state = !!value;
      this.setState();
    }
  }, {
    key: 'changedRecreate',
    value: function changedRecreate(value) {
      this.setRecreation(value);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('recreate') && this.setRecreation(this.attrs.recreate);
      this.state = !!this.attrs.is;
      return this.setState();
    }
  }, {
    key: 'setActivity',
    value: function setActivity(active) {
      this.active = active;
    }
  }, {
    key: 'setRecreation',
    value: function setRecreation(recreate) {
      this.recreate = recreate;
    }
  }, {
    key: 'setState',
    value: function setState() {
      var res = this.compilation();
      var next = this.el.nextElementSibling;
      var result = void 0;

      if (!next || !next.matches('else-if,else')) {
        return;
      }

      next.__akili.setActivity(this.active || this.state);
      next.__akili.setRecreation(this.recreate);
      result = next.__akili.setState();

      return Promise.resolve(res).then(function () {
        return result;
      });
    }
  }, {
    key: 'compilation',
    value: function compilation() {
      var res = void 0;

      if (this.state && !this.active) {
        if (this.recreate || !this.isCompiled) {
          res = this.compile();
        }

        this.el.style.display = this.display;
      } else {
        if (this.recreate) {
          this.__empty();
        } else if (!this.isCompiled) {
          res = this.compile();
        }

        this.el.style.display = "none";
      }

      return res;
    }
  }, {
    key: 'compile',
    value: function compile() {
      var res = void 0;

      this.el.innerHTML = this.html;
      res = _akili2.default.compile(this.el, { recompile: true });
      this.isCompiled = true;

      return res;
    }
  }]);

  return If;
}(_component2.default);

If.transparent = true;
If.matches = '[is]';
If.booleanAttributes = ['recreate'];
exports.default = If;
;

/**
 * ElseIf component
 */

var ElseIf = exports.ElseIf = function (_If) {
  _inherits(ElseIf, _If);

  function ElseIf() {
    var _ref2;

    _classCallCheck(this, ElseIf);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _this2 = _possibleConstructorReturn(this, (_ref2 = ElseIf.__proto__ || Object.getPrototypeOf(ElseIf)).call.apply(_ref2, [this].concat(args)));

    _this2.active = true;
    return _this2;
  }

  return ElseIf;
}(If);

/**
 * Else component
 */


var Else = exports.Else = function (_ElseIf) {
  _inherits(Else, _ElseIf);

  function Else() {
    var _ref3;

    _classCallCheck(this, Else);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var _this3 = _possibleConstructorReturn(this, (_ref3 = Else.__proto__ || Object.getPrototypeOf(Else)).call.apply(_ref3, [this].concat(args)));

    _this3.el.setAttribute('is', 'true');
    return _this3;
  }

  return Else;
}(ElseIf);

Else.matches = '';


If.ElseIf = ElseIf;
If.Else = Else;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(3);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Include = function (_Component) {
  _inherits(Include, _Component);

  _createClass(Include, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('include', Include);
    }
  }]);

  function Include() {
    var _ref;

    _classCallCheck(this, Include);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Include.__proto__ || Object.getPrototypeOf(Include)).call.apply(_ref, [this].concat(args)));

    _this.html = _this.el.innerHTML;
    _this.el.innerHTML = '';
    _this.connection = null;
    return _this;
  }

  _createClass(Include, [{
    key: 'changedUrl',
    value: function changedUrl(url) {
      this.getTemplate(url);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      return this.getTemplate(this.attrs.url);
    }
  }, {
    key: 'getTemplate',
    value: function getTemplate(url) {
      var _this2 = this;

      this.connection && this.connection.abort();

      return _request2.default.get(url, {
        onStart: function onStart(xhr) {
          _this2.connection = xhr;
        }
      }).then(function (res) {
        _this2.connection = null;
        _this2.empty();
        _this2.el.innerHTML = _this2.html;
        _akili2.default.setTemplate(_this2.el, res.data);

        return _akili2.default.compile(_this2.el, { recompile: true }).then(function () {
          _this2.attrs.onLoad.trigger();
        });
      }).catch(function (err) {
        _this2.attrs.onError.trigger(err);
      });
    }
  }]);

  return Include;
}(_component2.default);

Include.transparent = true;
Include.matches = '[url]';
Include.events = ['load', 'error'];
exports.default = Include;
;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Text) {
  _inherits(Input, _Text);

  _createClass(Input, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('input', Input);
    }
  }]);

  function Input() {
    var _ref;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args)));

    _this.isCheckbox = _this.el.type == 'checkbox';
    _this.isRadio = _this.el.type == 'radio';
    return _this;
  }

  _createClass(Input, [{
    key: 'changedChecked',
    value: function changedChecked(value) {
      this.setChecked(value);
    }
  }, {
    key: 'created',
    value: function created() {
      var _this2 = this;

      (this.isRadio || this.isCheckbox) && this.el.addEventListener('click', function () {
        _this2.setChecked(_this2.el.checked, false);
      });
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      (this.isCheckbox || this.isRadio) && this.setChecked(this.attrs.checked);
    }
  }, {
    key: 'setChecked',
    value: function setChecked(value) {
      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      value = !!value;

      if (this.prevChecked === value) {
        return;
      }

      this.el.checked = this.prevChecked = value;
      trigger && this.attrs.onChange.dispatch(Event, { bubbles: true });
      this.isRadio && this.changeRadio();
    }
  }, {
    key: 'setValue',
    value: function setValue() {
      _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'setValue', this).apply(this, arguments);
      this.isRadio && this.attrs.onChange.dispatch(Event, { bubbles: true });
    }
  }, {
    key: 'changeRadio',
    value: function changeRadio() {
      var name = this.el.getAttribute('name');
      var selector = 'input[type=radio][name=\'' + name + '\']:not([scope=\'' + this.scope.__name + '\'])';
      var children = _akili2.default.root.children(selector);

      for (var i = 0, l = children.length; i < l; i++) {
        var radio = children[i];

        radio.setChecked(radio.el.checked);
      }
    }
  }]);

  return Input;
}(_text2.default);

Input.booleanAttributes = ['checked'];
Input.events = ['change'];
exports.default = Input;
;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _for = __webpack_require__(4);

var _for2 = _interopRequireDefault(_for);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The radio group component
 */
var Radio = function (_For) {
  _inherits(Radio, _For);

  _createClass(Radio, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('radio', Radio);
      _akili2.default.component('radio-button', RadioButton);
    }
  }]);

  function Radio() {
    var _ref;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Radio.__proto__ || Object.getPrototypeOf(Radio)).call.apply(_ref, [this].concat(args)));

    _this.iterable = _this.el.hasAttribute('in');
    return _this;
  }

  _createClass(Radio, [{
    key: 'changedIn',
    value: function changedIn(value) {
      _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'changedIn', this).apply(this, arguments);
      this.setNames(this.attrs.name);
    }
  }, {
    key: 'changedName',
    value: function changedName(name) {
      this.setNames(name);
    }
  }, {
    key: 'changedValue',
    value: function changedValue(value) {
      this.setValue(value);
    }
  }, {
    key: 'created',
    value: function created() {
      var _this2 = this;

      this.iterable && _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'created', this).apply(this, arguments);

      this.el.addEventListener('change', function () {
        setTimeout(function () {
          var value = _this2.getRadioValue();

          if (value === _this2.prevValue) {
            return;
          }

          _this2.prevValue = value;
          _this2.attrs.onRadio.trigger(value);
        });
      });
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      this.setNames(this.attrs.name);
      this.attrs.hasOwnProperty('value') && this.setValue(this.attrs.value);
    }
  }, {
    key: 'setNames',
    value: function setNames(name) {
      var children = this.children('input[type=radio]');

      for (var i = 0, l = children.length; i < l; i++) {
        children[i].el.setAttribute('name', name);
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (value === this.prevValue) {
        return;
      }

      var prev = this.prevValue;
      var children = this.children('input[type=radio]');
      var isTrue = false;

      this.prevValue = value;

      for (var i = 0, l = children.length; i < l; i++) {
        var radio = children[i];
        var isSelected = radio.el.value === value;

        isSelected && (isTrue = true);
        radio.setChecked(isSelected);
      }

      if (!isTrue) {
        if (value === null) {
          if (prev === undefined) {
            return;
          }
        } else {
          this.prevValue = undefined;
          value = null;
        }
      }

      this.attrs.onRadio.trigger(value, { bubbles: true });
    }
  }, {
    key: 'getRadioValue',
    value: function getRadioValue() {
      var children = this.children('input[type=radio]');

      for (var i = 0, l = children.length; i < l; i++) {
        var radio = children[i];

        if (radio.el.checked) {
          return radio.el.value;
        }
      }

      return null;
    }
  }]);

  return Radio;
}(_for2.default);

Radio.matches = '[name]';
Radio.events = ['radio'];
exports.default = Radio;
;

/**
 * The radio item component
 */

var RadioButton = exports.RadioButton = function (_Loop) {
  _inherits(RadioButton, _Loop);

  function RadioButton() {
    var _ref2;

    _classCallCheck(this, RadioButton);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _possibleConstructorReturn(this, (_ref2 = RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call.apply(_ref2, [this].concat(args)));
  }

  _createClass(RadioButton, [{
    key: 'changedValue',
    value: function changedValue(value) {
      this.setRadioValue(value);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.setRadioValue(this.attrs.value);
    }
  }, {
    key: 'setRadioValue',
    value: function setRadioValue(value) {
      this.scope.value = value;
    }
  }]);

  return RadioButton;
}(_for.Loop);

RadioButton.template = '<label><input type="radio" value="${this.value}"/>${this.__content}</label>';


Radio.RadioButton = RadioButton;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _for = __webpack_require__(4);

var _for2 = _interopRequireDefault(_for);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_For) {
  _inherits(Select, _For);

  _createClass(Select, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('select', Select);
      _akili2.default.component('option', Option);
    }
  }]);

  function Select() {
    var _ref;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args)));

    _this.iteratorTagName = 'option';
    _this.isMultiple = false;
    return _this;
  }

  _createClass(Select, [{
    key: 'changedMultiple',
    value: function changedMultiple(value) {
      this.setMultiple(value);
    }
  }, {
    key: 'changedContent',
    value: function changedContent(value) {
      this.setContent(value);
    }
  }, {
    key: 'changedIn',
    value: function changedIn(value) {
      _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'changedIn', this).apply(this, arguments);
      this.drawSelect();
    }
  }, {
    key: 'created',
    value: function created() {
      var _this2 = this;

      _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'created', this).apply(this, arguments);

      this.el.addEventListener('change', function () {
        _this2.el.content = _this2.getContent();
      });
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'compiled', this).apply(this, arguments);
      this.attrs.hasOwnProperty('multiple') && this.setMultiple(this.attrs.multiple);
      this.attrs.hasOwnProperty('content') && this.setContent(this.attrs.content);
      this.drawSelect();
    }
  }, {
    key: 'setMultiple',
    value: function setMultiple(value) {
      this.isMultiple = value;
      this.changeValue(this.formatValue(_utils2.default.copy(this.el.content)));
    }
  }, {
    key: 'setContent',
    value: function setContent(value) {
      this.changeValue(this.formatValue(value));
    }
  }, {
    key: 'drawSelect',
    value: function drawSelect() {
      var selected = [];

      for (var i = 0, l = this.el.options.length; i < l; i++) {
        var option = this.el.options[i].__akili;
        var selection = option.attrs.selected;

        if (selection) {
          selected.push(option.el.value);
        }

        option.el.selected = selection;
      }

      if (!selected.length) {
        this.redefine();
      } else {
        this.changeValue(this.formatValue(selected));
      }
    }
  }, {
    key: 'createIteratorElement',
    value: function createIteratorElement() {
      var el = _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'createIteratorElement', this).call(this);

      if (!el.hasAttribute('value')) {
        el.setAttribute('value', this.html.trim());
      }

      return el;
    }
  }, {
    key: 'inContent',
    value: function inContent(value) {
      if (!this.isMultiple) {
        return this.el.content === value;
      }

      return this.el.content.indexOf(value) != -1;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      if (!this.isMultiple) {
        return this.el.value;
      }

      var content = [];

      for (var i = 0, l = this.el.options.length; i < l; i++) {
        var option = this.el.options[i];

        if (option.selected) {
          content.push(option.value);
        }
      }

      return content;
    }
  }, {
    key: 'formatValue',
    value: function formatValue(value) {
      if (this.isMultiple) {
        if (!Array.isArray(value)) {
          value = value !== undefined && value !== null ? [value] : [];
        }
      } else {
        if (Array.isArray(value)) {
          value = value.length ? value[0] : '';
        } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' || typeof value == 'function') {
          value = '';
        }
      }

      return value;
    }
  }, {
    key: 'redefine',
    value: function redefine() {
      this.changeValue(this.getContent());
    }
  }, {
    key: 'changeValue',
    value: function changeValue(value) {
      if (_utils2.default.compare(this.el.content, value)) {
        return;
      }

      if (Array.isArray(value)) {
        this.el.value = value[value.length - 1];

        for (var i = 0, l = this.el.options.length; i < l; i++) {
          var option = this.el.options[i];

          option.selected = value.indexOf(option.value) != -1;
        }
      } else {
        this.el.value = value;

        for (var _i = 0, _l = this.el.options.length; _i < _l; _i++) {
          var _option = this.el.options[_i];

          _option.selected = _option.value == value;
        }
      }

      this.el.content = value;
      this.attrs.onChange.dispatch(Event, { bubbles: true });
    }
  }]);

  return Select;
}(_for2.default);

Select.booleanAttributes = ['multiple'];
Select.events = ['change'];
exports.default = Select;
;

var Option = exports.Option = function (_Loop) {
  _inherits(Option, _Loop);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: '__getParsedExpression',
    value: function __getParsedExpression(expression) {
      return _utils2.default.decodeHtmlEntities(expression);
    }
  }, {
    key: 'created',
    value: function created() {
      _get(Option.prototype.__proto__ || Object.getPrototypeOf(Option.prototype), 'created', this).apply(this, arguments);
    }
  }, {
    key: 'changedSelected',
    value: function changedSelected(value) {
      this.setSelected(value);
    }
  }, {
    key: 'setSelected',
    value: function setSelected(value) {
      this.el.selected = value;
      this.for.redefine();
    }
  }]);

  return Option;
}(_for.Loop);

Option.booleanAttributes = ['selected'];


Select.Option = Option;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(5);

var _text2 = _interopRequireDefault(_text);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Text) {
  _inherits(Textarea, _Text);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('textarea', Textarea);
    }
  }]);

  return Textarea;
}(_text2.default);

exports.default = Textarea;
;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(2);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Scope class.
 *
 * All properties starting with __ will not be watching.
 * You can use them for internal manipulations.
 */
var Scope = function () {
  function Scope(name, el, component) {
    _classCallCheck(this, Scope);

    this.__name = name;
    this.__el = el;
    this.__component = component;
    el.setAttribute('scope', name);
  }

  _createClass(Scope, [{
    key: '__set',


    /**
     * Set a scope value
     * @param {string|string[]} keys
     * @param {*} value
     * @param {boolean} [strict=false] - without object copying
     * @protected
     */
    value: function __set(keys, value) {
      var _this = this;

      var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      _akili2.default.unisolated(function () {
        strict && (_this.__component.__disableProxyRedefining = true);
        _utils2.default.setPropertyByKeys(keys, _this, function (last, val) {
          if (!last) {
            return val || {};
          }

          return value;
        });
        strict && (_this.__component.__disableProxyRedefining = false);
      });
    }
  }, {
    key: '__utils',
    get: function get() {
      return _utils2.default;
    }
  }]);

  return Scope;
}();

exports.default = Scope;
;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabTitle = exports.TabPane = exports.TabContent = exports.TabMenu = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _for = __webpack_require__(4);

var _for2 = _interopRequireDefault(_for);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The main tabs component
 */
var Tabs = function (_Akili$Component) {
  _inherits(Tabs, _Akili$Component);

  function Tabs() {
    var _ref;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args)));

    _this.active = null;
    return _this;
  }

  _createClass(Tabs, [{
    key: 'changedActive',
    value: function changedActive(index) {
      this.setActiveTab(index);
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      var titleLength = this.child(function (c) {
        return c instanceof TabMenu;
      }).getTabs().length;
      var paneLength = this.child(function (c) {
        return c instanceof TabContent;
      }).getTabs().length;

      if (titleLength != paneLength) {
        throw new Error('"tab-title" and "tab-content" component counts are different: ' + titleLength + '/' + paneLength);
      }

      this.setActiveTab(this.attrs.active || 0);
    }
  }, {
    key: 'setActiveTab',
    value: function setActiveTab(index) {
      var tabs = this.child(function (c) {
        return c instanceof TabMenu;
      }).getTabs();
      var lastActive = this.active;

      if (tabs[index] === undefined) {
        throw new Error('"tabs" component index "' + index + '" is out of range ');
      }

      this.scope.active = this.active = index;

      if (!tabs.length) {
        _akili2.default.options.debug && console.warn('Not found any child component "tab-title" for "tab-menu"');
      }

      for (var i = 0, l = tabs.length; i < l; i++) {
        tabs[i].setActivity(i == index);
      }

      lastActive != this.active && this.attrs.onTab.trigger(index, { bubbles: true });
    }
  }]);

  return Tabs;
}(_akili2.default.Component);

/**
 * The header group component
 */


Tabs.events = ['tab'];

Tabs.define = function () {
  _akili2.default.component('tabs', Tabs);
  _akili2.default.component('tab-menu', TabMenu);
  _akili2.default.component('tab-content', TabContent);
  _akili2.default.component('tab-title', TabTitle);
  _akili2.default.component('tab-pane', TabPane);
};

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
      this.iterable && _get(TabMenu.prototype.__proto__ || Object.getPrototypeOf(TabMenu.prototype), 'created', this).apply(this, arguments);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.iterable && _get(TabMenu.prototype.__proto__ || Object.getPrototypeOf(TabMenu.prototype), 'compiled', this).apply(this, arguments);
    }
  }, {
    key: 'getTabs',
    value: function getTabs() {
      return this.children(this.childSelector, 0);
    }
  }, {
    key: 'getTabIndex',
    value: function getTabIndex(tab) {
      var tabs = this.getTabs();

      for (var i = 0, l = tabs.length; i < l; i++) {
        if (tabs[i] === tab) {
          return i;
        }
      }
    }
  }, {
    key: 'getTabsByIndex',
    value: function getTabsByIndex(i) {
      return this.getTabs()[i];
    }
  }]);

  return TabMenu;
}(_for2.default);

/**
 * The body group component
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
 * The body group item component
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
      _akili2.default.options.debug && console.warn('Not found parent component "tab-content" for "tab-pane"');
      _this4.cancel();
    }

    _this4.scope.recreate = false;
    _this4.scope.isActiveTab = _this4.isActive = false;
    return _this4;
  }

  _createClass(TabPane, [{
    key: 'compiled',
    value: function compiled() {
      _get(TabPane.prototype.__proto__ || Object.getPrototypeOf(TabPane.prototype), 'compiled', this).apply(this, arguments);
      this.attrs.hasOwnProperty('recreate') && this.setRecreation(this.attrs.recreate);
    }
  }, {
    key: 'changedRecreate',
    value: function changedRecreate(value) {
      this.setRecreation(value);
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
}(_for.Loop);

/**
 * The header group item component
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

    _this5.scope.isActiveTab = _this5.isActive = false;

    if (!_this5.el.parentNode.__akili || !(_this5.el.parentNode.__akili instanceof TabMenu)) {
      _akili2.default.options.debug && console.warn('Not found parent component "tab-menu" for "tab-title"');
      _this5.cancel();
    }
    return _this5;
  }

  _createClass(TabTitle, [{
    key: 'created',
    value: function created() {
      var _this6 = this;

      _get(TabTitle.prototype.__proto__ || Object.getPrototypeOf(TabTitle.prototype), 'created', this).apply(this, arguments);
      this.tabs = this.parent(function (c) {
        return c instanceof Tabs;
      });

      this.el.addEventListener('click', function () {
        _this6.tabs.setActiveTab(_this6.index);
      });
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      _get(TabTitle.prototype.__proto__ || Object.getPrototypeOf(TabTitle.prototype), 'compiled', this).apply(this, arguments);
      this.index = this.tabs.child(function (c) {
        return c instanceof TabMenu;
      }).getTabIndex(this);
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
}(_for.Loop);

Tabs.TabMenu = TabMenu;
Tabs.TabTitle = TabTitle;
Tabs.TabContent = TabContent;
Tabs.TabPane = TabPane;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2MwOWQ4NTc0ZjRlMmUxMGRjYmQiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvYWtpbGkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9hLmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2lmLmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicy5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIm9wdGlvbnMiLCJuZXN0ZWRXYXRjaGluZyIsInNob3dFdmFsdWF0aW9uRXJyb3JzIiwiZGVidWciLCJfX2luaXQiLCJfX2NvbXBvbmVudHMiLCJfX2FsaWFzZXMiLCJfX3Njb3BlcyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwiY29tcG9uZW50cyIsImRlY29yYXRvcnMiLCJzZXJ2aWNlcyIsImpvaW5CaW5kaW5nS2V5cyIsImtleXMiLCJtYXAiLCJlbCIsInRvU3RyaW5nIiwiam9pbiIsImFkZFNjb3BlIiwic2NvcGUiLCJfX25hbWUiLCJFcnJvciIsImdldFNjb3BlIiwibmFtZSIsInJlbW92ZVNjb3BlIiwiX19jb21wb25lbnQiLCJfX2VsIiwiX19wYXJlbnQiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsImkiLCJsIiwicHJvcCIsImlzRGVsZXRlZCIsImNvbXBvbmVudCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImxhc3QiLCJ2YWwiLCJ2YWx1ZSIsImxlbmd0aCIsInVuZXZhbHVhdGVkIiwiZXZhbHVhdGlvbiIsInVuaXNvbGF0ZWQiLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwiT2JqZWN0Iiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJDb21wb25lbnQiLCJfX2NhbmNlbGxlZCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJwIiwiX19jb21waWxlIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiYWxpYXMiLCJ1bnJlZ2lzdGVyQWxpYXMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJrZXkiLCJvbGQiLCJfX2lzUHJveHkiLCJhcHBseSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJzZXRJbnRlcnZhbCIsImNvbnN0cnVjdG9yIiwiaXNvbGF0ZUV2ZW50cyIsIm9sZEFkZEV2ZW50TGlzdGVuZXIiLCJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9sZFJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2xkUmVtb3ZlIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3VtZW50cyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJjYWxsYmFjayIsImlzb2xhdGVGdW5jdGlvbiIsImNvbnRleHQiLCJvRm4iLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25TdGF0ZSIsImNoYW5nZVN0YXRlIiwiZGVmaW5lIiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJ1dGlscyIsIkEiLCJDb250ZW50IiwiRm9yIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiVGV4dCIsIlRleHRhcmVhIiwicmVxdWVzdCIsInJvdXRlciIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsIlJlZ0V4cCIsInNvdXJjZSIsInN5c3RlbUF0dHJpYnV0ZXMiLCJleHByZXNzaW9uIiwiZXZhbCIsIl9faXNTeXN0ZW1LZXkiLCJpbmRleE9mIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJhdHRycyIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsInJlc29sdmUiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwibm9kZVZhbHVlIiwiX19ldmFsdWF0ZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJnZXQiLCJfX2NvbnRlbnQiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9fc2NvcGUiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19uZXN0ZWRXYXRjaGluZyIsIl9fbmVzdGVkT2JzZXJ2ZSIsIl9fb2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsImF0dHJpYnV0ZXMiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0ZVBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBhcmVQcmV2aW91c1ZhbHVlIiwiY29weSIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiX19leHByZXNzaW9uIiwibSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJzZVZhbHVlIiwiX19nZXRQYXJzZWRFeHByZXNzaW9uIiwibGlzdCIsInBhcnNlIiwiZXJyIiwibWVzc2FnZSIsInN0YWNrIiwiZXJyb3IiLCJoYXNoIiwia2V5c1N0cmluZyIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJpc1Njb3BlUHJveHkiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIkF0dHIiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsIl9faGFzQmluZGluZ3MiLCJjbGVhckF0dHJpYnV0ZSIsIl9fYXR0cmlidXRlT24iLCJfX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIiLCJ0b0NhbWVsQ2FzZSIsIm9uQ2hhbmdlZCIsImNoYW5nZWQiLCJjYW1lbEtleSIsInRvVXBwZXJDYXNlIiwiZm5OYW1lIiwiZXZGbk5hbWUiLCJlbGVtZW50IiwiX19lbGVtZW50IiwiYXR0ciIsIndpdGhvdXRQYXJlbnRzIiwibGFzdFByb3BzIiwicHJvcHNMZW5ndGgiLCJlbEV2YWx1YXRlIiwiX19nZXRCaW5kIiwiX19kYXRhIiwiYyIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyIsIl9fZXZhbHVhdGVOb2RlIiwiX2siLCJfcHJvcCIsInVuYmluZCIsIm9iaiIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiaGFzUHJvcGVydHlCeUtleXMiLCJfX2V2YWx1YXRlTmVzdGVkIiwiX191bmJpbmQiLCJkZWxldGVQcm9wZXJ0eUJ5S2V5cyIsImV4ZWMiLCJldmVudCIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9fZXZhbHVhdGVFdmVudCIsIl9faW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX191bmJpbmRCeU5vZGVzIiwiUHJveHkiLCJ0YXJnZXQiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJyZWFsVGFyZ2V0IiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJpc1BsYWluT2JqZWN0IiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIl9fdGFyZ2V0IiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiaXNvbGF0aW9uS2V5IiwicGFyZW50S2V5c1N0cmluZyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5Iiwibm9kZXMiLCJfX2NsZWFyRW1wdHlCaW5kaW5ncyIsImNsZWFyIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwiaXNBcnJheSIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsInJldmVyc2UiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZSIsInN0eWxlcyIsImZpbHRlciIsImhhbmRsZXIiLCJpdGVtIiwibWF0Y2giLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJuZXN0ZWQiLCJjb21wYXJlIiwiY3VycmVudCIsInByZXZpb3VzIiwicHJldmlvdXNDb3B5IiwiY3VycmVudENvcHkiLCJlbmNvZGVIdG1sRW50aXRpZXMiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwib2JqZWN0IiwicmVkdWNlIiwibyIsImhhcyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImNsZWFyU2NvcGVQcm94eSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJSZXF1ZXN0IiwiYmFzZVVybCIsImRlZmF1bHRzIiwic3RhdHVzRXJyb3JzUGF0dGVybiIsInJlamVjdCIsInVybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25TdGFydCIsInRyYW5zZm9ybUJlZm9yZSIsIm9wZW4iLCJtZXRob2QiLCJ1c2VyIiwicGFzc3dvcmQiLCJoZWFkZXJzIiwianNvbiIsImJvZHkiLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwidHJhbnNmb3JtQWZ0ZXIiLCJzdGF0dXMiLCJvbmVycm9yIiwic2VuZCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwic3BsaXQiLCJlcXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuYW1lc3BhY2UiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9JU09TdHJpbmciLCJfX2luc3RhbmNlcyIsImFkZEluc3RhbmNlIiwiaW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImRyYXciLCJjcmVhdGVJdGVyYXRvciIsImluIiwibWFzayIsIm5leHRTaWJsaW5nIiwib3V0ZXJIVE1MIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJpbmRleCIsImZvdW5kIiwiX19oYXNoIiwiaXRlcmF0b3IiLCJjVmFsdWUiLCJjb21wYXJzaW9uIiwiY0NvcHkiLCJzZXRJbmRleCIsInNldEtleSIsInNldFZhbHVlIiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwid3JpdGFibGUiLCJlVmFsdWUiLCJpbmRleEtleXMiLCJsYXN0RWxlbWVudCIsImxvb3AiLCJpdGVyYXRlIiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJfX3NldCIsInZhbHVlS2V5Iiwic2V0Rm9jdXMiLCJmb2N1cyIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiYmx1ciIsInRyYW5zaXRpb24iLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImJ1YmJsZXMiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9FdmVudCIsInR5cGUiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJyZWxvYWQiLCJnZXRVcmwiLCJzZXRVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwicHVzaFN0YXRlIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsIl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIiLCJwb3AiLCJwYXJlbnROYW1lIiwiZnVsbFBhdHRlcm4iLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwiZiIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImlzQWN0aXZlU3RhdGUiLCJpbmNsdWRlcyIsImluQWN0aXZlU3RhdGUiLCJnZXRSb3V0ZSIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwiX19kaXNhYmxlQ2hhbmdlIiwicHJldlRyYW5zaXRpb24iLCJvbkVuZCIsInNldFBhdGgiLCJsb2FkZWQiLCJoYXNTdGF0ZSIsImlzRGlmZmVyZW50IiwicHJldiIsImlzSGlzdG9yeSIsImlzUmVsb2FkIiwic2V0VHJhbnNpdGlvbiIsImlzVXJsIiwicmVzZXRIcmVmIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0UmVsb2FkIiwicHJldmVudERlZmF1bHQiLCJzZXRPcHRpb25zIiwiaHJlZiIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJFbHNlSWYiLCJFbHNlIiwiYWN0aXZlIiwicmVjcmVhdGUiLCJpc0NvbXBpbGVkIiwic2V0UmVjcmVhdGlvbiIsImlzIiwiY29tcGlsYXRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZXN1bHQiLCJzZXRBY3Rpdml0eSIsImNvbm5lY3Rpb24iLCJnZXRUZW1wbGF0ZSIsImFib3J0Iiwib25Mb2FkIiwiY2F0Y2giLCJvbkVycm9yIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsInByZXZDaGVja2VkIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50IiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJzZXROYW1lcyIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInNldFJhZGlvVmFsdWUiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImdldENvbnRlbnQiLCJtdWx0aXBsZSIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInJlZGVmaW5lIiwidHJpbSIsInNldFNlbGVjdGVkIiwic3RyaWN0IiwiVGFicyIsInNldEFjdGl2ZVRhYiIsInRpdGxlTGVuZ3RoIiwiVGFiTWVudSIsImdldFRhYnMiLCJwYW5lTGVuZ3RoIiwiVGFiQ29udGVudCIsInRhYnMiLCJsYXN0QWN0aXZlIiwib25UYWIiLCJUYWJUaXRsZSIsIlRhYlBhbmUiLCJjaGlsZFNlbGVjdG9yIiwidGFiIiwiaXNBY3RpdmVUYWIiLCJpc0Fj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LEtBQUtXLE9BQUwsR0FBZUEsT0FBZixDIiwiZmlsZSI6ImFraWxpLXRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjYzA5ZDg1NzRmNGUyZTEwZGNiZCIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0JztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8nO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYSc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudCc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZSc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdCc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgQWtpbGkgPSB7fTtcblxuQWtpbGkub3B0aW9ucyA9IHtcbiAgbmVzdGVkV2F0Y2hpbmc6IHRydWUsXG4gIHNob3dFdmFsdWF0aW9uRXJyb3JzOiB0cnVlLFxuICBkZWJ1ZzogdHJ1ZVxufTtcblxuQWtpbGkuX19pbml0ID0gZmFsc2U7XG5Ba2lsaS5fX2NvbXBvbmVudHMgPSB7fTtcbkFraWxpLl9fYWxpYXNlcyA9IHt9O1xuQWtpbGkuX19zY29wZXMgPSB7fTtcbkFraWxpLl9faXNvbGF0aW9uID0gbnVsbDtcbkFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbkFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcyA9IFtcbiAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG5dO1xuXG5Ba2lsaS5jb21wb25lbnRzID0ge307XG5Ba2lsaS5kZWNvcmF0b3JzID0ge307XG5Ba2lsaS5zZXJ2aWNlcyA9IHt9O1xuXG4vKipcbiAqIEpvaW4gYmluZGluZyBrZXlzXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBiaW5kaW5nIGtleXNcbiAqL1xuQWtpbGkuam9pbkJpbmRpbmdLZXlzID0gZnVuY3Rpb24oa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgaWYodGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTY29wZSBuYW1lICR7c2NvcGUuX19uYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuICB9XG5cbiAgdGhpcy5fX3Njb3Blc1tzY29wZS5fX25hbWVdID0gc2NvcGU7XG59O1xuXG4vKipcbiAqIEdldCBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICogQHJldHVybnMge1Njb3BlfVxuICovXG5Ba2lsaS5nZXRTY29wZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIERlbGV0ZSBzY29wZSBmcm9tIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc2NvcGUgbmFtZVxuICovXG5Ba2lsaS5yZW1vdmVTY29wZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3Blc1tuYW1lXTtcblxuICBzY29wZS5fX2NvbXBvbmVudCA9IG51bGw7XG4gIHNjb3BlLl9fZWwgPSBudWxsO1xuICBzY29wZS5fX3BhcmVudCA9IG51bGw7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB3aXRoIGF0dGFjaGVkIEFraWxpIGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtib29sZWFufSBbdHJlZT10cnVlXSAtIHJldHVybiBhcnJheSBvZiB0aGUgcGFyZW50cyBpZiB0cnVlLCBjbG9zZXN0IHBhcmVudCBpZiBmYWxzZVxuICogQHJldHVybnMge0FycmF5fEhUTUxFbGVtZW50fG51bGx9XG4gKi9cbkFraWxpLmdldEFraWxpUGFyZW50cyA9IGZ1bmN0aW9uIChlbCwgdHJlZSA9IHRydWUpIHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKG5vZGUpIHtcbiAgICBpZighbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmKCF0cmVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2hlY2soZWwpO1xuXG4gIHJldHVybiB0cmVlPyBhcnI6IGFyclswXTtcbn07XG5cbi8qKlxuICogU2V0IGVsZW1lbnQgaW5uZXIgaHRtbCB3aXRoIGNvbnRlbnQgcmVwbGFjaW5nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIChzdHIpID0+IHtcbiAgICByZXR1cm4gISF0aGlzLl9fc2NvcGVzW3N0cl07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGZ1bmN0aW9uLlxuICogRXZlcnkgc2NvcGUgdmFyaWFibGUgY2hhbmdlIGNhbGxzIGFjY29yZGluZyBub2RlIGV2YWx1YXRpb24uXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IGNoYW5nZSBzb21lIHNjb3BlIHZhcmlhYmxlIGluIHRoZSBsb29wIC0gZXZhbHVhdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiB0aGUgZWFjaCBjaGFuZ2UuXG4gKiBJdCBtYXkgYmUgc2xvdyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICogWW91IGNhbiBpc29sYXRlIHRoaXMgYWN0aW9uIGFuZCBydW4gYWxsIGV2YWx1YXRpb24gcHJvY2VzcyBhZnRlciBwYXNzZWQgZnVuY3Rpb24gYXQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbihmbikge1xuICBpZih0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0ge307XG5cbiAgbGV0IHJlcyA9IGZuKCk7XG4gIGxldCBwcm9wcyA9IFtdO1xuXG4gIGZvcihsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgaWYoIXRoaXMuX19pc29sYXRpb24uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHByb3BzLnB1c2godGhpcy5fX2lzb2xhdGlvbltrXSk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gcHJvcHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHByb3AgPSBwcm9wc1tpXTtcblxuICAgIGlmKHByb3AuaXNEZWxldGVkKSB7XG4gICAgICBwcm9wLmNvbXBvbmVudC5fX2V2YWx1YXRlQnlLZXlzKHByb3Aua2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5zY29wZSwgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3AudmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBwcm9wcyA9IG51bGw7XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBldmFsdWF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlZCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG5cbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IGV2YWx1YXRpb247XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBpc29sYXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuaXNvbGF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRpb24gPSBldmFsdWF0aW9uO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHJlY29tcGlsZSA9IG9wdGlvbnMucmVjb21waWxlO1xuICBsZXQgY29tcG9uZW50ID0gZWwuX19ha2lsaTtcblxuICBpZihjb21wb25lbnQpIHtcbiAgICBpZihyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZSgpO1xuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpc1Jvb3QgPSBlbCA9PT0gdGhpcy5fX3Jvb3Q7XG4gIGxldCBjb21wb25lbnROYW1lID0gdXRpbHMudG9EYXNoQ2FzZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGxldCBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgQ0hFQ0tfQUxJQVNFUzogaWYoIV9Db21wb25lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5fX2FsaWFzZXMpO1xuXG4gICAgaWYoIXNlbGVjdG9ycy5sZW5ndGgpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdG9yQWxsID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcblxuICAgIGlmKCFlbC5tYXRjaGVzKHNlbGVjdG9yQWxsKSkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBmb3IobGV0IHNlbGVjdG9yIGluIHRoaXMuX19hbGlhc2VzKSB7XG4gICAgICBpZighdGhpcy5fX2FsaWFzZXMuaGFzT3duUHJvcGVydHkoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYoIV9Db21wb25lbnQgJiYgIWlzUm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFfQ29tcG9uZW50KSB7XG4gICAgX0NvbXBvbmVudCA9IHRoaXMuQ29tcG9uZW50O1xuICB9XG5cbiAgaWYoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pO1xuXG4gIGlmKGNvbXBvbmVudC5fX2NhbmNlbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudC5fX2NyZWF0ZSgpO1xuXG4gIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuY29tcGlsZSA9IGZ1bmN0aW9uKHJvb3QsIG9wdGlvbnMgPSB7IHJlY29tcGlsZTogZmFsc2UgfSkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBsZXQgbmVzdGVkSW5pdGlhbGl6aW5nID0gKGVsKSA9PiB7XG4gICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuaW5pdGlhbGl6ZShlbCwgb3B0aW9ucyk7XG4gICAgbGV0IGNoaWxkcmVuID0gZWwuY2hpbGRyZW47XG5cbiAgICBjb21wb25lbnQgJiYgZWxlbWVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcblxuICBsZXQgcCA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50c1tpXTtcblxuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBvciBnZXQgaXQgaWYgZm4gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG5cbiAgaWYodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzIG9yIGdldCBpdCBpZiBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmKCFjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSB8fCBudWxsO1xuICB9XG5cbiAgaWYodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJBbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbigpIHtcbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGxldCBvbGQgPSBBcnJheS5wcm90b3R5cGVba2V5XTtcblxuICAgIGlmKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIGlmKCF0aGlzLl9faXNQcm94eSkge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBJc29sYXRlIHNvbWUgd2luZG93IGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgd2luZG93LlByb21pc2UgJiYgKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciAsIDApKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgb2xkQWRkRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG4gIGxldCBvbGRSZW1vdmVFdmVudExpc3RlbmVyID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgbGV0IG9sZFJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzO1xuXG4gICAgcmV0dXJuIG9sZFJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgYXJnc1sxXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnB1c2goe1xuICAgICAgbGluazogZm4sXG4gICAgICBmbjogYXJnc1sxXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9sZEFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXVtpXTtcblxuICAgICAgaWYobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9sZFJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JhcCB0aGUgZnVuY3Rpb24gY2FsbGJhY2sgdG8gYW4gaXNvbGF0ZSBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gW3Bvcz1cImxhc3RcIl1cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuQWtpbGkuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24gPSBmdW5jdGlvbihmbiwgcG9zID0gJ2xhc3QnKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICBsZXQgY2FsbGJhY2sgPSBwb3MgPT0gJ2xhc3QnPyBhcmdzW2FyZ3MubGVuZ3RoIC0gMV06IGFyZ3NbcG9zXTtcblxuICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oZm4sIGNvbnRleHQgPSBudWxsKSB7XG4gIGlmKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBsZXQgb0ZuID0gZnVuY3Rpb24oKSB7XG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgdGhpcztcblxuICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9GbiwgJ19fYWtpbGknLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuXG4gIHJldHVybiBvRm47XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYW4gYXBwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbcm9vdF1cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5pbml0ID0gZnVuY3Rpb24ocm9vdCkge1xuICB0aGlzLl9fcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGlsZSh0aGlzLl9fcm9vdCkudGhlbigoKSA9PiB7XG4gICAgaWYocm91dGVyLl9faW5pdCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IHtcbiAgICAgICAgbGV0IG9uU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgcmVzKCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0YXRlLWNoYW5nZScsIG9uU3RhdGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2UnLCBvblN0YXRlKTtcbiAgICAgICAgcm91dGVyLmNoYW5nZVN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIEFraWxpLl9faW5pdCA9IHRydWU7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWZpbmUgYWxsIGRlZmF1bHQgY29tcG9uZW50c1xuICovXG5Ba2lsaS5kZWZpbmUgPSBmdW5jdGlvbigpIHtcbiAgQS5kZWZpbmUoKTtcbiAgQ29udGVudC5kZWZpbmUoKTtcbiAgQ29tcG9uZW50LmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xufTtcblxuQWtpbGkuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuQWtpbGkuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuQWtpbGkuU2NvcGUgPSBTY29wZTtcbkFraWxpLnV0aWxzID0gdXRpbHM7XG5Ba2lsaS5jb21wb25lbnRzLkEgPSBBO1xuQWtpbGkuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbkFraWxpLmNvbXBvbmVudHMuRm9yID0gRm9yO1xuQWtpbGkuY29tcG9uZW50cy5JZiA9IElmO1xuQWtpbGkuY29tcG9uZW50cy5JbmNsdWRlID0gSW5jbHVkZTtcbkFraWxpLmNvbXBvbmVudHMuSW5wdXQgPSBJbnB1dDtcbkFraWxpLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbkFraWxpLmNvbXBvbmVudHMuUm91dGUgPSBSb3V0ZTtcbkFraWxpLmNvbXBvbmVudHMuU2VsZWN0ID0gU2VsZWN0O1xuQWtpbGkuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbkFraWxpLmNvbXBvbmVudHMuVGV4dGFyZWEgPSBUZXh0YXJlYTtcbkFraWxpLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuQWtpbGkuc2VydmljZXMucm91dGVyID0gcm91dGVyO1xuXG53aW5kb3cuQWtpbGkgPSBBa2lsaTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBBa2lsaS5jb21wb25lbnRzO1xuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0gQWtpbGkuc2VydmljZXM7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcblxuQWtpbGkuZGVmaW5lKCk7XG5Ba2lsaS5pc29sYXRlRXZlbnRzKCk7XG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUoKTtcbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9ha2lsaS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGV2YWx1YXRpb25SZWdleCA9IC9cXCR7KCgoPyFcXCR7KS4pKil9LztcbmNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuY29uc3Qgc3lzdGVtQXR0cmlidXRlcyA9IFsnY29tcG9uZW50JywgJ3Njb3BlJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gW107XG4gIHN0YXRpYyBldmVudHMgPSBbXTtcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IGZhbHNlO1xuICBzdGF0aWMgdGVtcGxhdGUgPSAnJztcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJyc7XG4gIHN0YXRpYyBzY29wZSA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRlZmluZSB0aGUgY29tcG9uZW50XG4gICAqL1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29tcG9uZW50JywgQ29tcG9uZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBSZXF1aXJlZCBjb250ZXh0IHZhcmlhYmxlczpcbiAgICogIHRoaXMgLSBzY29wZSBvYmplY3RcbiAgICogIGV2ZW50IC0gd2luZG93LmV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbikge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKGV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybiBldmFsKGV4cHJlc3Npb24pO1xuICAgIH0pLmNhbGwoY29udGV4dCwgZXhwcmVzc2lvbilcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19iaW5kaW5ncyA9IHt9O1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgIHRoaXMuX19jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuX19wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuX19wYXJlbnRzID0gW107XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIHJlY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUoKSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjcmVhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZSgpIHtcbiAgICB0aGlzLmVsLl9fYWtpbGkgPSB0aGlzO1xuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcblxuICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVkKHRoaXMuYXR0cnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY29tcGlsYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fY29tcGlsZSgpIHtcbiAgICBsZXQgY29udHJvbCA9IHRoaXMuX19jb250cm9sQXR0cmlidXRlcyB8fCAhdGhpcy5fX2V2YWx1YXRlUGFyZW50O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcblxuICAgIGlmKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgbGV0IGludGVycG9sYXRlID0gKGNoaWxkcmVuLCBwYXJlbnQpID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShjaGlsZCwgcGFyZW50KTtcblxuICAgICAgICAgIGNoaWxkLm5vZGVWYWx1ZSA9IHRoaXMuX19ldmFsdWF0ZShjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGludGVycG9sYXRlKHRoaXMuZWwuY2hpbGROb2RlcywgdGhpcy5lbCk7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICBsZXQgcmVzO1xuXG4gICAgaWYoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKCk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSB0cnVlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc29sdmVkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnQgb2YgdGhlIHtAc2VlIENvbXBvbmVudCNfX2NvbXBpbGV9IG1ldGhvZFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemUoKSB7XG4gICAgbGV0IHBhcmVudCA9IEFraWxpLmdldEFraWxpUGFyZW50cyh0aGlzLmVsLCBmYWxzZSk7XG4gICAgbGV0IFNjb3BlID0gdGhpcy5jb25zdHJ1Y3Rvci5zY29wZSB8fCBBa2lsaS5TY29wZTtcbiAgICBsZXQgc2NvcGU7XG4gICAgbGV0IGlzUm9vdCA9IEFraWxpLl9fcm9vdCA9PT0gdGhpcy5lbDtcblxuICAgIGlmKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgbmVzdGVkV2F0Y2hpbmcgPSBBa2lsaS5vcHRpb25zLm5lc3RlZFdhdGNoaW5nO1xuICAgIGxldCBjb250cm9sQXR0cmlidXRlcyA9IHRoaXMuY29uc3RydWN0b3IuY29udHJvbEF0dHJpYnV0ZXM7XG4gICAgbGV0IGV2ZW50cyA9IHRoaXMuY29uc3RydWN0b3IuZXZlbnRzO1xuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci5uZXN0ZWRXYXRjaGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXN0ZWRXYXRjaGluZyA9IHRoaXMuY29uc3RydWN0b3IubmVzdGVkV2F0Y2hpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYoU2NvcGUubmVzdGVkV2F0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmVzdGVkV2F0Y2hpbmcgPSBTY29wZS5uZXN0ZWRXYXRjaGluZztcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUgPSBfX3Njb3BlO1xuICAgIHRoaXMuX19ldmVudHMgPSBldmVudHM7XG4gICAgdGhpcy5fX25lc3RlZFdhdGNoaW5nID0gbmVzdGVkV2F0Y2hpbmc7XG4gICAgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzID0gY29udHJvbEF0dHJpYnV0ZXM7XG5cbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7XG5cbiAgICBpZihuZXN0ZWRXYXRjaGluZykge1xuICAgICAgc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IHRoaXMuX19vYnNlcnZlKF9zY29wZSwgW10pO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgbGV0IHNldEF0dHIgPSAoZWwpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG5vZGUgPSBhdHRyc1tpXTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZihlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXTtcblxuICAgICAgICBpZighY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG5cbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZighdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZighcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3UGFyZW50ID0gdGhpcy5fX3BhcmVudCAhPT0gcGFyZW50c1swXTtcbiAgICBsZXQgZXZhbHVhdGVQYXJlbnQgPSBudWxsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50ID0gbmV3UGFyZW50O1xuICAgIG5ld1BhcmVudCAmJiB0aGlzLl9fZGV0YWNoKCk7XG5cbiAgICBpZih0aGlzLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IGV2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50ID0gZXZhbHVhdGVQYXJlbnQ7XG4gICAgdGhpcy5fX3BhcmVudCA9IHBhcmVudHNbMF07XG4gICAgdGhpcy5fX3BhcmVudHMgPSBwYXJlbnRzO1xuICAgIHRoaXMuc2NvcGUuX19wYXJlbnQgPSB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaS5zY29wZTtcbiAgICAhdGhpcy5fX3JlY29tcGlsaW5nICYmIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2FkZENoaWxkKHRoaXMuZWwpO1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLnNjb3BlLCB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGNoaWxkIGVsZW1lbnQgdG8gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hZGRDaGlsZChlbCkge1xuICAgIHRoaXMuX19jaGlsZHJlbi5wdXNoKGVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpY2UgY2hpbGQgZnJvbSB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQgPT09IGVsKSB7XG4gICAgICAgIHRoaXMuX19jaGlsZHJlbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNoYW5nZSBleHByZXNzaW9uIGJlZm9yZSBwYXJzaW5nIGhlcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbm9kZSBoYXMgYW55IHByb3BlcnR5IGNoYW5nZXMgb3Igbm90XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja0V2YWx1YXRpb24obm9kZSkge1xuICAgIGlmICghT2JqZWN0LmtleXMobm9kZS5fX3Byb3BlcnRpZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgaWYoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIHV0aWxzLmNvcHkodmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG5cbiAgICBpZighcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCB1dGlscy5jb3B5KHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGxldCByZXMgPSBub2RlLl9fZXhwcmVzc2lvbi5yZXBsYWNlKGV2YWx1YXRpb25SZWdleEdsb2JhbCwgKG0sIGQpID0+IHtcbiAgICAgIGNvdW50ZXIrKztcblxuICAgICAgbGV0IGV2YWx1YXRlO1xuICAgICAgbGV0IGV2YWx1YXRpb247XG4gICAgICBsZXQgZXhpc3RpbmdCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcblxuICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0geyBub2RlOiBub2RlLCBsaXN0OiBbXX07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFNjb3BlIHBhcnNpbmcgZXJyb3IgaW4gdGhlIHRlbXBsYXRlIGV4cHJlc3Npb246ICR7bm9kZS5fX2V4cHJlc3Npb259YDtcblxuICAgICAgICBpZighQWtpbGkub3B0aW9ucy5zaG93RXZhbHVhdGlvbkVycm9ycykge1xuICAgICAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIuc3RhY2spO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2YWx1YXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24/IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0OiBbXTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGZvcihsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGAke2RhdGEuY29tcG9uZW50Ll9fc2NvcGUuX19uYW1lfS4ke2RhdGEua2V5c1N0cmluZ31gO1xuXG4gICAgICAgIGlmKGRhdGEubm90QmluZGluZykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZih1dGlscy5pc1Njb3BlUHJveHkocGFyZW50VmFsdWUpICYmIGRhdGEuY29tcG9uZW50ICE9PSBldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJpbmQgPSBkYXRhLmNvbXBvbmVudC5fX2dldEJvdW5kTm9kZShkYXRhLmtleXMsIG5vZGUpO1xuICAgICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhkYXRhLmtleXMsIGRhdGEuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgIGlmKCFiaW5kKSB7XG4gICAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kKGRhdGEua2V5cywgeyBub2RlOiBub2RlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCB2YWx1ZSk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBleGlzdGluZ0JpbmRpbmdzID0gbnVsbDtcbiAgICAgIGV2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBpZihub2RlIGluc3RhbmNlb2YgQXR0cikge1xuICAgICAgICBleHByZXNzaW9uID0gbTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBldmFsdWF0ZTtcblxuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIGV2YWx1YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2YWx1YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICB9KTtcblxuICAgIGlmKG5vZGUgaW5zdGFuY2VvZiBBdHRyKSB7XG4gICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICBsZXQgaXNCb29sZWFuQXR0cmlidXRlID0gZmFsc2U7XG5cbiAgICAgIGlmKGNvdW50ZXIpIHtcbiAgICAgICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG5cbiAgICAgIGlmKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgaXNCb29sZWFuQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUgPSAhIXZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZihub2RlLl9fYXR0cmlidXRlT24pIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcblxuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgY29tcG9uZW50LmF0dHJzW3V0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKV0gPSB2YWx1ZTtcbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX19pc0NvbXBpbGVkKSB7XG4gICAgICAgICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cnMub25DaGFuZ2VkICYmIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQudHJpZ2dlcih7IGtleTogY2xlYXJBdHRyaWJ1dGUsIHZhbHVlOiB2YWx1ZX0pO1xuICAgICAgICAgICAgY29tcG9uZW50LmNoYW5nZWQoY2xlYXJBdHRyaWJ1dGUsIHZhbHVlKTtcblxuICAgICAgICAgICAgbGV0IGtleSA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcbiAgICAgICAgICAgIGxldCBjYW1lbEtleSA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuICAgICAgICAgICAgbGV0IGZuTmFtZSA9ICdjaGFuZ2VkJyArIGNhbWVsS2V5O1xuICAgICAgICAgICAgbGV0IGV2Rm5OYW1lID0gJ29uQ2hhbmdlZCcgKyBjYW1lbEtleTtcblxuICAgICAgICAgICAgY29tcG9uZW50LmF0dHJzW2V2Rm5OYW1lXSAmJiBjb21wb25lbnQuYXR0cnNbZXZGbk5hbWVdLnRyaWdnZXIodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudFtmbk5hbWVdID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50W2ZuTmFtZV0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGlzQm9vbGVhbkF0dHJpYnV0ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICBsZXQgYXR0ciA9IHV0aWxzLnRvQ2FtZWxDYXNlKGNsZWFyQXR0cmlidXRlKTtcblxuICAgICAgICB2YWx1ZT8gZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBOZXN0ZWQgZXZhbHVhdGlvbiBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtib29sZWFufSBbd2l0aG91dFBhcmVudHM9ZmFsc2VdIC0gaWYgdHJ1ZSBldmFsdWF0aW9uIHdpbGwgYmUgb25seSBmb3IgdGhlIGN1cnJlbnQga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTmVzdGVkKGtleXMsIHdpdGhvdXRQYXJlbnRzID0gZmFsc2UpIHtcbiAgICBsZXQgc2NvcGUgPSB0aGlzLl9fc2NvcGU7XG4gICAgbGV0IHByb3BzID0gW107XG5cbiAgICBpZighd2l0aG91dFBhcmVudHMpIHtcbiAgICAgIGxldCBsYXN0UHJvcHMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgIGxhc3RQcm9wcyA9IFsuLi5sYXN0UHJvcHMsIGtleV07XG4gICAgICAgIHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGFzdFByb3BzLCBzY29wZSk7XG4gICAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBsYXN0UHJvcHMsIHZhbHVlOiB2YWx1ZX0pXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KVxuICAgIH1cblxuICAgIGxldCBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIGxldCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7XG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YSA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuX19kYXRhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEuX19kYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGxldCBiaW5kID0gZGF0YS5fX2RhdGFba107XG5cbiAgICAgICAgICBpZihjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKGJpbmQubm9kZSwgcHJvcC5rZXlzLCBwcm9wLnZhbHVlKSkge1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShiaW5kLm5vZGUpO1xuXG4gICAgICAgICAgICBmb3IobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgbGV0IGV2YWx1YXRlID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gZWxFdmFsdWF0ZShlbGVtZW50c1tpXSk7XG5cbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIHZhbHVlIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV0gLSB0cnVlIGlmIHZhbHVlIGlzIGRlbGV0aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGxldCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgayA9PSAnX19kYXRhJykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuXG4gICAgICAgIF9fa2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNLZXkgPSB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcblxuICAgICAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB1bmJpbmQodmFsLCBfa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoX2tleXMsIHRydWUpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhaGFzS2V5KSB7XG4gICAgICAgICAgdGhpcy5fX3VuYmluZChfa2V5cyk7XG4gICAgICAgICAgX2lzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhfX2tleXMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzKTtcblxuICAgIGlmKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuXG4gICAgaWYoIWV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAhd2luZG93LmV2ZW50ICYmICh3aW5kb3cuZXZlbnQgPSBlKTtcblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZSh0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgZXhwcmVzc2lvblsxXSk7XG4gICAgdGhpcy5fX2V2YWx1YXRpbmdFdmVudCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgY2hhbmdlcyBhbmQgZXZhbHVhdGUgdGhlIHBhc3NlZCBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlKSB7XG4gICAgaWYodGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKSkge1xuICAgICAgbm9kZVsobm9kZSBpbnN0YW5jZW9mIEF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ10gPSB0aGlzLl9fZXZhbHVhdGUobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZSBub2RlIGluaXRpYWxpemluZ1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGF0dHJpYnV0ZU9mIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplQXR0cmlidXRlKG5vZGUsIGVsLCBhdHRyaWJ1dGVPZikge1xuICAgIGlmKHN5c3RlbUF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCk7XG5cbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTtcbiAgICBsZXQgbm9kZU5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKTtcbiAgICBsZXQgY29tcG9uZW50ID0gYXR0cmlidXRlT2Y/IGF0dHJpYnV0ZU9mOiB0aGlzO1xuXG4gICAgaWYoZXZlbnROYW1lICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgIGlmKG5vZGUuX19ldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBlbWl0dGVyID0gbmV3IEFraWxpLkV2ZW50RW1pdHRlcihldmVudE5hbWUsIGVsLCBjb21wb25lbnQpO1xuXG4gICAgICBpZihub2RlLl9fZXhwcmVzc2lvbikge1xuICAgICAgICBlbWl0dGVyLmJpbmQoKGUpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYoYXR0cmlidXRlT2YpIHtcbiAgICAgICAgdGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmF0dHJzW25vZGVOYW1lXSA9IGVtaXR0ZXI7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihhdHRyaWJ1dGVPZikge1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gdGhpcztcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgY29tcG9uZW50Ll9fZXZhbHVhdGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSBub2RlWyhub2RlIGluc3RhbmNlb2YgQXR0cik/ICd2YWx1ZSc6ICdub2RlVmFsdWUnXTtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsO1xuICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGZhbHNlO1xuICAgIG5vZGUuX19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgbm9kZS5fX2NvbXBvbmVudCA9IHRoaXM7XG4gICAgbm9kZS5fX2VsZW1lbnQgPSBlbDtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFthdHRyaWJ1dGVPZj1udWxsXSAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVPZiA9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLl9faW5pdGlhbGl6ZUF0dHJpYnV0ZShhdHRyc1tpXSwgZWwsIGF0dHJpYnV0ZU9mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lIGF0dHJpYnV0ZXMgYXMgcHJveHlcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWZpbmVBdHRyaWJ1dGVzKCkge1xuICAgIGxldCBjaGFuZ2VBdHRyaWJ1dGUgPSAoa2V5LCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGlmKHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZU5vZGUoa2V5KTtcblxuICAgICAgaWYobm9kZSkge1xuICAgICAgICBpZihub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgICBub2RlLl9fZXZlbnQudW5iaW5kKCk7XG4gICAgICAgICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobm9kZS5fX2hhc0JpbmRpbmdzKSB7XG4gICAgICAgICAgdGhpcy5fX3BhcmVudCAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fdW5iaW5kQnlOb2Rlcyhbbm9kZV0pO1xuICAgICAgICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IGZhbHNlO1xuICAgICAgICAgIG5vZGUuX19leHByZXNzaW9uID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoaXNEZWxldGVkKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKG5vZGUpIHtcbiAgICAgICAgbm9kZS5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmKGtleSA9PSAnX19pc1Byb3h5Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBpZih0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2YoYXR0cktleSkgIT0gLTEpIHtcbiAgICAgICAgICBhdHRyS2V5ID0gYGJvb2xlYW4tJHthdHRyS2V5fWA7XG5cbiAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSksIHRydWUpO1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHByb3h5IHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHJldHVybnMge1Byb3h5fVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX29ic2VydmUob2JqLCBwYXJlbnRzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eShvYmosIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodHlwZW9mIHRhcmdldFtrZXldID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsZXQgcmVhbFRhcmdldCAgPSB1dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSk7XG5cbiAgICAgICAgICBpZighdXRpbHMuaXNQbGFpbk9iamVjdChyZWFsVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmVhbFRhcmdldFtrZXldID0gQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uKHJlYWxUYXJnZXRba2V5XSwgcmVhbFRhcmdldC5fX2NvbXBvbmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwga2V5cywgcGFyZW50cywgdGFyZ2V0W2tleV0sIG5vdEJpbmRpbmcpO1xuXG4gICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZih0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYodGhpcy5fX25lc3RlZFdhdGNoaW5nKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZih0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoQWtpbGkuX19pc29sYXRpb24pIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIHRydWUpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgIHRoaXMuX19ldmFsdWF0ZUJ5S2V5cyhrZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBrZXkgaXMgc3lzdGVtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBfX2lzU3lzdGVtS2V5ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYoa2V5ID09ICdfXycgfHwgKGtleVswXSA9PSAnXycgJiYga2V5WzFdID09ICdfJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmKFsnY29uc3RydWN0b3InXS5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogTmVzdGVkIG9ic2VydmluZyB0aGUgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbc3RhcnRLZXlzXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX25lc3RlZE9ic2VydmUgKHZhbHVlLCBzdGFydEtleXMpIHtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcblxuICAgIGxldCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZighdXRpbHMuaXNQbGFpbk9iamVjdCh2YWx1ZSkgJiYgIXV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFraWxpLlNjb3BlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0YXJnZXQgPSB2YWx1ZTtcblxuICAgICAgaWYodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHRhcmdldCA9IHZhbHVlLl9fdGFyZ2V0O1xuXG4gICAgICAgIGlmKCF0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZykge1xuICAgICAgICAgIGlmKHZhbHVlLl9fY29tcG9uZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UpO1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yKGxldCBrIGluIHRhcmdldCkge1xuICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IHRhcmdldFtrXTtcbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcblxuICAgICAgICB0YXJnZXRba10gPSBvYnNlcnZlKHZhbCwga2V5cyk7XG4gICAgICB9XG5cbiAgICAgIGlmKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHRhcmdldCwgcGFyZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IHJlcyA9IG9ic2VydmUodmFsdWUsIHN0YXJ0S2V5cyB8fCBbXSk7XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBpc29sYXRpb24gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUlzb2xhdGlvbk9iamVjdCAocGFyZW50cywga2V5LCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBrZXlzID0gcGFyZW50cy5sZW5ndGg/IFtwYXJlbnRzWzBdXTogW2tleV07XG4gICAgbGV0IGlzb2xhdGlvbktleSA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICBpZihwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoIUFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0pIHtcbiAgICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0gPSB7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5czoga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldLmlzRGVsZXRlZCA9IGlzRGVsZXRlZCk7XG4gICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS52YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICByZXR1cm4gQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XTtcbiAgfTtcblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG5cbiAgICBpZihiaW5kLmxlbmd0aCAmJiAhbm90QmluZGluZykge1xuICAgICAgbGV0IGwgPSBiaW5kLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgZGF0YSA9IGJpbmRbbF07XG5cbiAgICAgIGlmKGRhdGEua2V5c1N0cmluZyA9PSBwYXJlbnRLZXlzU3RyaW5nICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJpbmQucHVzaCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBrZXlzU3RyaW5nOiBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyksXG4gICAgICBwYXJlbnRzOiBwYXJlbnRzLFxuICAgICAga2V5czoga2V5cyxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIG5vdEJpbmRpbmc6IG5vdEJpbmRpbmdcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGJpbmRpbmcgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCaW5kKGtleXMpIHtcbiAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSB8fCAhYmluZC5fX2RhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZihkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgbGV0IGNvcHkgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGlmKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSB1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCBjb3B5KTtcblxuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcblxuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuXG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjb3B5OiBjb3B5LFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5czoga2V5c1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICByZXR1cm4gbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHtfX2RhdGE6IFtdfTtcblxuICAgICAgaWYoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmKCFvYmouX19kYXRhKSB7XG4gICAgICAgIG9iai5fX2RhdGEgPSBbXTtcbiAgICAgIH1cblxuICAgICAgb2JqLl9fZGF0YS5wdXNoKGRhdGEpO1xuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmQoa2V5cykge1xuICAgIGxldCBiaW5kID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmKCFiaW5kIHx8ICFiaW5kLl9fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcblxuICAgICAgdGhpcy5fX2RlbGV0ZU5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICB9XG5cbiAgICB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsICh2YWx1ZSkgPT4ge1xuICAgICAgaWYoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgYnkgbm9kZXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kQnlOb2Rlcyhub2Rlcykge1xuICAgIGxldCB1bmJpbmQgPSAob2JqKSA9PiB7XG4gICAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IG9ialtrXSB8fCBbXTtcbiAgICAgICAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuXG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJpbmQgPSBkYXRhW2ldO1xuXG4gICAgICAgICAgICBpZihub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKCFsKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgICB0aGlzLl9fY2xlYXJFbXB0eUJpbmRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGVtcHR5IGJpbmRpbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb2JqXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyRW1wdHlCaW5kaW5ncyhvYmopIHtcbiAgICBsZXQgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgICAgIGlmKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGsgIT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBpZighT2JqZWN0LmtleXMob2JqW2tdKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXIob2JqW2tdLCBvYmosIGspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbigpIHtcbiAgICBsZXQgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgcmVtb3ZlKGNoaWxkLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkLl9fYWtpbGkuX19yZW1vdmUoKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKCkge1xuICAgIHRoaXMuX19kZXRhY2goKTtcbiAgICB0aGlzLmF0dHJzLm9uUmVtb3ZlZCAmJiB0aGlzLmF0dHJzLm9uUmVtb3ZlZC50cmlnZ2VyKCk7XG4gICAgdGhpcy5yZW1vdmVkKCk7XG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX3Njb3BlLl9fbmFtZSk7XG4gICAgdGhpcy5lbC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RldGFjaCgpIHtcbiAgICBpZih0aGlzLl9fZXZhbHVhdGVQYXJlbnQgJiYgIXRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuX191bmJpbmRCeU5vZGVzKFtdLnNsaWNlLmNhbGwodGhpcy5lbC5hdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5fX3BhcmVudCkge1xuICAgICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc3BsaWNlQ2hpbGQodGhpcy5lbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGggY2hpbGRyZW5cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXN0cm95KCkge1xuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuICAgIHRoaXMuX19yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY29tcG9uZW50IGh0bWxcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19lbXB0eSgpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIHRoaXMuX19yZW1vdmVDaGlsZHJlbigpO1xuXG4gICAgbGV0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoY2hpbGQubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGNoaWxkLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goYXR0cnNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmQoY2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLmVsLmNoaWxkTm9kZXMpO1xuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZihsZXZlbHMgIT09IHVuZGVmaW5lZCAmJiAhQXJyYXkuaXNBcnJheShsZXZlbHMpKSB7XG4gICAgICBsZXZlbHMgPSBbbGV2ZWxzXTtcbiAgICB9XG5cbiAgICBsZXQgZmluZCA9IChwYXJlbnQpID0+IHtcbiAgICAgIGlmKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZighbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcbiAgICAgIGZpbmQocGFyZW50Ll9fYWtpbGkuX19wYXJlbnQpO1xuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19wYXJlbnQpO1xuXG4gICAgcmV0dXJuIGZpbmRBbGw/IGFycjogKGFyclswXSB8fCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hpbGQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIGxldmVscykge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYobGV2ZWxzICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkobGV2ZWxzKSkge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgbGV0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgICBpZighc2VsZWN0b3IgfHwgY2hpbGQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgaWYoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBmaW5kKGNoaWxkcmVuW2ldLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX2NoaWxkcmVuKTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbClcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbmVhcmVzdCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyaWdodD1mYWxzZV0gLSBmcm9tIHRoZSByaWdodCBzaWRlIGlmIHRydWVcbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROZWFyKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCByaWdodCA9IGZhbHNlKSB7XG4gICAgaWYoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsZXZlbEVsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGVsID0gbGV2ZWxFbGVtZW50c1tpXTtcblxuICAgICAgaWYoZWwgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXJyLnJldmVyc2UoKTtcblxuICAgIGlmKCFmaW5kQWxsKSB7XG4gICAgICByZXR1cm4gYXJyLmxlbmd0aD8gYXJyWzBdOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBtYXRjaGVzIHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBpZih0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwYXJlbnQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgcGFyZW50cyhzZWxlY3RvciA9ICcnLCBsZXZlbHMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBjaGlsZChzZWxlY3RvciA9ICcnLCBsZXZlbHMpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVsc11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgY2hpbGRyZW4oc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGVsZW1lbnQgaHRtbFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGVtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLl9fZW1wdHkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZWxlbWVudFxuICAgKlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2Rlc3Ryb3kuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7fVxuICBjb21waWxlZCgpIHt9XG4gIHJlY29tcGlsZWQoKSB7fVxuICBjaGFuZ2VkKGtleSwgdmFsdWUpIHt9XG4gIHJlc29sdmVkKCkge31cbiAgcmVtb3ZlZCgpIHt9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudC5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyJ1xuXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG5cbiAgZm9yKGxldCBrIGluIG9iaikge1xuICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgc3R5bGUgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZighb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuXG4gIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjF9LCB7eDoxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OjF9LCB7eDoyfSwge3g6M30sIHt4OjExfV0sICcxJywgWyd4J10pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgaW4gdGhlIGtleXMgaWYgYXJyYXkgZWxlbWVudHMgYXJlIG9iamVjdFxuICogQHJldHVybnMge0FycmF5fSAtIHJldHVybnMgb3RoZXIgYXJyYXlcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IFtdKSB7XG4gIGxldCByZXMgPSBbXTtcblxuICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZighaGFuZGxlcikge1xuICAgIHJldHVybiBbLi4uYXJyXTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGl0ZW0gPSBhcnJbaV07XG4gICAgbGV0IHZhbCA9IGtleXMubGVuZ3RoPyB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIGl0ZW0pOiBpdGVtO1xuXG4gICAgaWYoIXZhbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFsICs9ICcnO1xuXG4gICAgaWYoKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicpICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBlbHNlIGlmKHZhbC5tYXRjaChoYW5kbGVyIHx8ICcnKSkge1xuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogT3JkZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMiwgM11cbiAqIHV0aWxzLnNvcnQoWzMsIDIsIDFdLCB0cnVlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMywgMiwgMV1cbiAqIHV0aWxzLnNvcnQoWzEsIDIsIDNdLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dXG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgW1sneCddXSwgW3RydWVdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbJ3gnXSwgdHJ1ZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgJ3gnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbWyd4J11dLCBbZmFsc2VdKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCBbJ3gnXSwgZmFsc2UpO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sICd4JywgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMSwgeTogM30sIHt4OiAyLCB5OiAxfSwge3g6MiwgeTogMn1dXG4gKiB1dGlscy5zb3J0KFt7eDogMiwgeTogMn0sIHt4OiAyLCB5OiAxfSwge3g6IDIsIHk6IDN9XSwgW1sneCddLCBbJ3knXV0sIFt0cnVlLCB0cnVlXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge2Jvb2xlYW58QXJyYXlbXXxzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXVxuICogQHBhcmFtIHtib29sZWFufGJvb2xlYW5bXX0gW29yZGVyXSAtIHJldmVyc2Ugb3Igbm90XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnV0aWxzLnNvcnQgPSBmdW5jdGlvbihhcnIsIGtleXMgPSB0cnVlLCBvcmRlciA9IFtdKSB7XG4gIGFyciA9IFsuLi5hcnJdO1xuXG4gIGlmKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZihrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZighQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZighQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgbGV0IGNoZWNrID0gKGEsIGIsIHJldmVyc2UgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAtMTogMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgbGV0IG5leHQgPSAoKSA9PiB7XG4gICAgICBpZihpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZighQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZihyZXMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgaSsrO1xuXG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZighbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGNvbXBvbmVudCBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW25lc3RlZD10cnVlXSAtIGRlZXAgY29weSBpZiBpcyB0cnVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY29weSA9IGZ1bmN0aW9uKHZhbHVlLCBuZXN0ZWQgPSB0cnVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KG9iaikge1xuICAgIG9iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gWy4uLm9ial06IHsuLi5vYmp9O1xuXG4gICAgaWYoIW5lc3RlZCkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmpba10gPSBuZXh0KG9ialtrXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHZhbHVlKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2YWx1ZSB0byBhdHRyaWJ1dGUgYXBwcm9wcmlhdGUgZm9ybWF0XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gIH1cblxuICBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICcnO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZigoYSBpbnN0YW5jZW9mIERhdGUpICYmIChiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICB9XG4gIGlmKHR5cGVvZiBhID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICBlbHNlIGlmKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBpZihPYmplY3Qua2V5cyhhKS5sZW5ndGggIT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yKGxldCBrIGluIGEpIHtcbiAgICAgIGlmKCFhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5jb21wYXJlKGFba10sIGJba10pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIGN1cnJlbnQgdmFsdWUgd2l0aCBwcmV2aW91c1xuICpcbiAqIEBwYXJhbSB7Kn0gY3VycmVudCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzIC0gdGhlIGN1cnJlbnQgdmFsdWUgY29weVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHsqfSBbY3VycmVudENvcHldIC0gdGhlIGN1cnJlbnQgdmFsdWUgY29weVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgY3VycmVudENvcHkpIHtcbiAgaWYoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGFyZ3VtZW50cy5sZW5ndGggPT0gMz8gY3VycmVudENvcHk6IHRoaXMuY29weShjdXJyZW50KSwgcHJldmlvdXNDb3B5KTtcbn07XG5cbi8qKlxuICogRW5jb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG5cbiAgZWwudGV4dENvbnRlbnQgPSBodG1sO1xuICB2YWx1ZSA9IGVsLmlubmVySFRNTDtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG5cbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBkYXNoIHRvIGNhbWVsIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9DYW1lbENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBpZihvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChoYXMgPSBvLmhhc093blByb3BlcnR5KGspKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gaGFzO1xufTtcblxuLyoqXG4gKiBTZXQgbmVzdGVkIG9iamVjdHMgdHJlZSBwcm9wZXJ0eVxuICogUmV0dXJucyBjaGFuZ2VkIHByb3BlcnR5IG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt5OiA2fVxuICogdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIChsYXN0LCB2YWwpID0+IGxhc3Q/IDY6ICh2YWwgfHwge30pKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLnNldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiBjdXJyZW50ID0gb1trXSA9IGZuKGkgPT0gbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqXG4gKiBEZWxldGUgcHJvcGVydHkgZnJvbSBuZXN0ZWQgb2JqZWN0cyB0cmVlXG4gKiBSZXR1cm5zIGRlbGV0ZWQgcHJvcGVydHkgdmFsdWVcbiAqIFlvdSBjYW4gY2FuY2VsIGRlbGV0aW5nIGlmIHdpbGwgcmV0dXJuIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZihpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuXG4gICAgICBpZighZm4gfHwgZm4odmFsdWUpKSB7XG4gICAgICAgIGRlbGV0ZSBvW2tdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuXG51dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBsZXQgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYob2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZighcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGxldCBjaGVjayA9IChvYmopID0+IHtcbiAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogQ2xlYXIgdmFsdWUgcHJveHkgaWYgaXQgZXhpc3RlbnRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY2xlYXJTY29wZVByb3h5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSAhPSAnb2JqZWN0JyB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBsZXQgY2xlYXIgPSAob2JqKSA9PiB7XG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmKG9ialtrXS5fX2lzUHJveHkpIHtcbiAgICAgICAgICBvYmpba10gPSBvYmpba10uX190YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhcihvYmpba10pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZih2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLl9fdGFyZ2V0O1xuICB9XG5cbiAgY2xlYXIodmFsdWUpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSByYW5kb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jcmVhdGVSYW5kb21TdHJpbmcgPSBmdW5jdGlvbihsZW5ndGggPSAxNiwgZm4gPSBudWxsKSB7XG4gIGxldCBzdHIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgbGVuZ3RoICsgMik7XG4gIGxldCB2YWwgPSAnJztcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmKE1hdGgucmFuZG9tKCkgPiAwLjY2KSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZihmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvcnNQYXR0ZXJuOiAvXihbXjIzXSl8NDA0LyxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIGFueSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB1cmw7XG4gICAgICBsZXQgeGhyO1xuXG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07XG5cbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7XG4gICAgICBvcHRpb25zID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUob3B0aW9ucyk7XG4gICAgICB1cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7XG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuXG4gICAgICBpZihvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy53aXRoQ3JlZGVudGlhbHM7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBmb3IobGV0IGsgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgaWYoIW9wdGlvbnMuaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaywgb3B0aW9ucy5oZWFkZXJzW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcblxuICAgICAgICBpZihzdHIpIHtcbiAgICAgICAgICB1cmwgKz0gXCI/XCIgKyBzdHI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcih4aHIpO1xuXG4gICAgICAgIGlmKCh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JzUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHt1cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcblxuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIudGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHRpbWVkIG91dGApKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gKGVycikgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5zZW5kKG9wdGlvbnMuYm9keSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3QgdG8gcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHBhcmFtc1RvUXVlcnkob2JqKSB7XG4gICAgbGV0IHNlcCA9ICcmJztcbiAgICBsZXQgZXEgPSAnPSc7XG5cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcCgoaykgPT4ge1xuICAgICAgbGV0IGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICAgIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KGspO1xuXG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgYFske2l9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmKCFrZXkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXVxuICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYmVmb3JlIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcih4aHIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeGhyOiB4aHIsXG4gICAgICBkYXRhOiB4aHIucmVzcG9uc2UsXG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxucmVxdWVzdC5fX2luc3RhbmNlcyA9IHt9O1xuXG4vKipcbiAqIEFkZCBuZXcgcmVxdWVzdCBpbnN0YW5jZSB0byB0aGUgbWFpbiBzZXJ2aWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19pbnN0YW5jZXNbbmFtZV07XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpbl0nO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdmb3InLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndWwnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGhlYWQnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGZvb3QnLCBGb3IpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndHInLCBMb29wKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2xvb3AnLCBMb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuX19pdGVyYXRvciA9IG51bGw7XG4gICAgdGhpcy5fX2tleSA9IG51bGw7XG4gICAgdGhpcy5fX3ZhbHVlID0gbnVsbDtcbiAgICB0aGlzLl9faW5kZXggPSBudWxsO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JzID0ge307XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IG51bGw7XG4gIH1cblxuICBjaGFuZ2VkSW4oZGF0YSkge1xuICAgIHRoaXMuZHJhdyhkYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5jcmVhdGVJdGVyYXRvcigpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5kcmF3KHRoaXMuYXR0cnMuaW4pO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3IoKSB7XG4gICAgbGV0IGVsO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZihjaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpID09ICdsb29wJykge1xuICAgICAgICBlbCA9IGNoaWxkO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBlbCA9IGNoaWxkO1xuICAgIH1cblxuICAgIGlmKCFlbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIkZvclwiIGNvbXBvbmVudCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNoaWxkJylcbiAgICB9XG5cbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50Jyk7XG5cbiAgICBpZihjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZighY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIShjb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgICBsZXQgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTtcblxuICAgICAgICBtYXNrLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZWwgPSBtYXNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaHRtbCA9IGVsLmlubmVySFRNTDtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gZWwubmV4dFNpYmxpbmc7XG4gICAgdGhpcy5pdGVyYXRvck91dGVySFRNTCA9IGVsLm91dGVySFRNTDtcbiAgICBlbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpIHtcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5pdGVyYXRvck91dGVySFRNTDtcbiAgICBlbCA9IGVsLmNvbnRlbnQuZmlyc3RDaGlsZDtcblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGxvb3Aoa2V5LCB2YWx1ZSwga2V5cywgaW5kZXgpIHtcbiAgICB0aGlzLl9faW5kZXggPSBpbmRleDtcbiAgICB0aGlzLl9fa2V5ID0ga2V5O1xuICAgIHRoaXMuX192YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX19jb21wYXJpc29uVmFsdWUgPSB1dGlscy5jb3B5KHZhbHVlKTtcblxuICAgIGxldCBoYXNoID0gJyc7XG4gICAgbGV0IGZvdW5kID0gMDtcblxuICAgIGlmKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiB2YWx1ZS5fX2hhc2gpIHtcbiAgICAgIGhhc2ggPSB2YWx1ZS5fX2hhc2g7XG4gICAgfVxuXG4gICAgaWYodGhpcy5pdGVyYXRvcnNbaGFzaF0pIHtcbiAgICAgIGtleSA9IGhhc2g7XG4gICAgICBmb3VuZCA9IDI7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5pdGVyYXRvcnNba2V5XSkge1xuICAgICAgZm91bmQgPSAxO1xuICAgIH1cblxuICAgIGlmKGZvdW5kKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1trZXldO1xuXG4gICAgICBpZihmb3VuZCA9PSAyKSB7XG4gICAgICAgIGxldCBjVmFsdWUgPSBpdGVyYXRvci5jb21wYXJzaW9uLnZhbHVlO1xuICAgICAgICBsZXQgY0NvcHkgPSBpdGVyYXRvci5jb21wYXJzaW9uLmNvcHk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19pbmRleCAhPT0gaXRlcmF0b3IuaW5kZXgpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRJbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19rZXkgIT09IGl0ZXJhdG9yLmtleSkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldEtleSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgY1ZhbHVlLCBjQ29weSwgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5c1trZXldID0gaXRlcmF0b3I7XG4gICAgICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yc1trZXldO1xuXG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVyYXRvclJlZiA9IGl0ZXJhdG9yLmVsLm5leHRTaWJsaW5nO1xuICAgICAgaXRlcmF0b3IuX19kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgbGV0IGVsID0gdGhpcy5jcmVhdGVJdGVyYXRvckVsZW1lbnQoKTtcblxuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICB0aGlzLmVsLmluc2VydEJlZm9yZShlbCwgdGhpcy5pdGVyYXRvclJlZik7XG4gICAgQWtpbGkuY29tcGlsZShlbCk7XG5cbiAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmKCF2YWx1ZS5fX2hhc2gpIHtcbiAgICAgICAgaGFzaCA9IHV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZygzMiwgKHN0cikgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yc1tzdHJdO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsdWUsICdfX2hhc2gnLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IGhhc2hcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGtleXNbaGFzaF0gPSB0aGlzLl9faXRlcmF0b3I7XG4gICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNbaGFzaF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBsZXQgZVZhbHVlID0gdHlwZW9mIHRoaXMuX192YWx1ZSA9PSAnc3RyaW5nJz8gYFwiJHt0aGlzLl9fdmFsdWV9XCJgOiB0aGlzLl9fdmFsdWU7XG5cbiAgICAgICAgbGV0IGFyZ3MgPSBbXG4gICAgICAgICAgYFwiRm9yXCIgY29tcG9uZW50IGxvb3AgaXRlbXMgc2hvdWxkIGhhdmUgXCJvYmplY3RcIiB0eXBlIGZvciBoaWdoZXIgcGVyZm9ybWFuY2UuYCxcbiAgICAgICAgICBgWW91IGNhbiBjaGFuZ2UgJHtlVmFsdWV9IHRvIHt2YWx1ZTogJHtlVmFsdWV9fSwgZm9yIGV4YW1wbGUuYFxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLndhcm4sIGFyZ3MpO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2tleV0gPSB0aGlzLl9faXRlcmF0b3I7XG4gICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWwuX19ha2lsaTtcbiAgfVxuXG4gIGRyYXcoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQga2V5cyA9IHt9O1xuICAgIGxldCBpbmRleEtleXMgPSBbXTtcbiAgICBsZXQgbGFzdEVsZW1lbnQgPSBudWxsO1xuICAgIGxldCBsYXN0ID0gdGhpcy5lbC5jaGlsZHJlblt0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYobGFzdCAmJiAhKGxhc3QuX19ha2lsaSBpbnN0YW5jZW9mIExvb3ApKSB7XG4gICAgICBsYXN0RWxlbWVudCA9IGxhc3Q7XG4gICAgfVxuXG4gICAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChpLCBkYXRhW2ldLCBrZXlzLCBpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBmb3IobGV0IGsgaW4gZGF0YSkge1xuICAgICAgICBpZighZGF0YS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXhLZXlzLnB1c2godGhpcy5sb29wKGssIGRhdGFba10sIGtleXMsIGkpKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBpbmRleEtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSBpbmRleEtleXNbaV07XG5cbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaXRlcmF0b3IuZWwpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpKTtcbiAgICB9XG5cbiAgICBsYXN0RWxlbWVudCAmJiB0aGlzLmVsLmFwcGVuZENoaWxkKGxhc3RFbGVtZW50KTtcblxuICAgIGZvcihsZXQgayBpbiB0aGlzLml0ZXJhdG9ycykge1xuICAgICAgaWYoIXRoaXMuaXRlcmF0b3JzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZXJhdG9yc1trXS5fX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdG9ycyA9IGtleXM7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBMb29wIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmZvciA9IG51bGw7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pc0ZvciA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuXG4gICAgaWYoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCgpO1xuICAgIHRoaXMuc2V0S2V5KCk7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuXG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmlzRm9yICYmIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHNldEtleSgpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlKTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9XG4gIH1cblxuICBpdGVyYXRlKGluZGV4KSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLnNldEZvY3VzKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ2ZvY3VzJykgJiYgdGhpcy5zZXRGb2N1cyh0aGlzLmF0dHJzLmZvY3VzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIFJvdXRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSB0cmFuc2l0aW9uLnBhdGgucGFyYW1zO1xuICAgIGxldCB1cmwgPSB0cmFuc2l0aW9uLnVybDtcbiAgICBsZXQgcXVlcnkgPSB0cmFuc2l0aW9uLnF1ZXJ5O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aCkge1xuICAgICAgaWYocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uID0ge1xuICAgICAgcGF0aDoge1xuICAgICAgICBzdGF0ZTogc3RhdGUubmFtZSxcbiAgICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBwYXJlbnQ6IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbih0cmFuc2l0aW9uLnBhdGgpXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB0cmFuc2l0aW9uLnBhcmFtcyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGNvbXBvbmVudD4ke3N0YXRlLnRlbXBsYXRlfTwvY29tcG9uZW50PmA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBwID0gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxjb21wb25lbnQ+JHtyZXMuZGF0YX08L2NvbXBvbmVudD5gO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSAtIHNlbmRpbmcgZGF0YS4gV2lsbCBiZSBpbiB0aGUgZXZlbnQuZGV0YWlsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IGZhbHNlIH0sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZihmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHtkZXRhaWw6IGRhdGEsIC4uLm9wdGlvbnN9KSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICovXG4gIGRpc3BhdGNoKF9FdmVudCwgb3B0aW9ucyA9IHsgYnViYmxlczogZmFsc2UgfSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IF9FdmVudCh0aGlzLm5hbWUsIG9wdGlvbnMpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgZXZlbnQgY2FsbGJhY2sgZG9lc24ndCBydW4gcmVjdXJzaXZlXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaW5FdmFsdWF0aW5nKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5jb21wb25lbnQuX19ldmFsdWF0aW5nRXZlbnQ7XG5cbiAgICBpZighZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvZXZlbnQtZW1pdHRlci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JztcbmltcG9ydCBSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih1cmwsIHF1ZXJ5LCBoYXNoID0gJycsIHByZXZpb3VzID0gbnVsbCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSBbXTtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHJlZGlyZWN0KCkge1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgcm91dGVyLnN0YXRlLmFwcGx5KHJvdXRlciwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldFBhdGgocGF0aCkge1xuICAgIHBhdGgucGFyZW50ID0gdGhpcy5wYXRoIHx8IG51bGw7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHBhdGgpO1xuICAgIHRoaXMuc3RhdGVzLnB1c2gocGF0aC5zdGF0ZSk7XG4gICAgdGhpcy5wYXJhbXMgPSAhcGF0aC5wYXJlbnQ/IHBhdGgucGFyYW1zOiB7Li4ucGF0aC5wYXJlbnQucGFyYW1zLCAuLi5wYXRoLnBhcmFtc307XG4gIH1cblxuICBnZXRSb3V0ZShzdGF0ZSkge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZihyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGFzU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZXMuaW5kZXhPZihzdGF0ZSkgIT0gLTE7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gIH1cbn1cblxuY29uc3Qgcm91dGVyID0ge307XG5cbnJvdXRlci5iYXNlVXJsID0gXCIvXCI7XG5yb3V0ZXIuc3RhdGVzID0gW107XG5yb3V0ZXIuaGFzaE1vZGUgPSB0cnVlO1xucm91dGVyLl9fcmVkaXJlY3RzID0gMDtcbnJvdXRlci5fX2luaXQgPSBmYWxzZTtcbnJvdXRlci5fX29wdGlvbnMgPSB7fTtcbnJvdXRlci5fX3BhcmFtUmVnZXggPSAvKDooW1xcd1xcZC1dKykpL2c7XG5yb3V0ZXIuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG5cbi8qKlxuICogQWRkIG5ldyBzdGF0ZSB0byB0aGUgcm91dGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBoYW5kbGVyOiAodHJhbnNpdGlvbikgPT4ge31cbiAgfTtcblxuICBpZighb3B0aW9ucy50ZW1wbGF0ZSAmJiAhb3B0aW9ucy50ZW1wbGF0ZVVybCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYodGhpcy5oYXMobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0c2ApXG4gIH1cblxuICB0aGlzLnNldFN0YXRlKG5hbWUsIHBhdHRlcm4sIHsuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc30pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgZnJvbSB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZih0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBzdGF0ZSBleGlzdHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZih0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuXG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZSBzdGF0ZSB3aXRoIG5hbWUgJHtuYW1lfWApO1xuICB9XG5cbiAgbGV0IHVybCA9IHRoaXMuY3JlYXRlU3RhdGVVcmwoc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gpO1xuXG4gIGlmKCFvcHRpb25zLnJlbG9hZCAmJiB1cmwgPT09IHRoaXMuZ2V0VXJsKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuc2V0VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIEdvIGJhY2tcbiAqL1xucm91dGVyLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmJhY2suYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIHRvIGFueSB3YXlcbiAqL1xucm91dGVyLmdvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5nby5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gZm9yd2FyZFxuICovXG5yb3V0ZXIuZm9yd2FyZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZm9yd2FyZC5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlIGJ5IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24odXJsLCBvcHRpb25zID0geyByZWxvYWQ6IGZhbHNlIH0pIHtcbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuXG4gIGlmKHRoaXMuaGFzaE1vZGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJycsIHVybCk7XG4gIH1cbn07XG5cbi8qKlxuICogUm91dGVyIGluaXRpYWxpemF0aW9uLiBTaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBBa2lsaS5pbml0KClcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlZmF1bHRVcmxdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtoYXNoTW9kZT10cnVlXVxuICovXG5yb3V0ZXIuaW5pdCA9IGZ1bmN0aW9uIChkZWZhdWx0VXJsID0gJycsIGhhc2hNb2RlID0gdHJ1ZSkge1xuICBsZXQgb2xkUHVzaFN0YXRlID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuXG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByZXMgPSBvbGRQdXNoU3RhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpO1xuICB9O1xuXG4gIHRoaXMuZGVmYXVsdFVybCA9IGRlZmF1bHRVcmw7XG4gIHRoaXMuaGFzaE1vZGUgPSBoYXNoTW9kZTtcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGEgLSBiO1xuICB9KTtcblxuICBsZXQgc3RhdGVzID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcbiAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgc3RhdGVzW3N0YXRlLm5hbWVdID0gc3RhdGU7XG4gICAgc3RhdGUuY2hpbGRyZW4gPSBbXTtcbiAgICBwYXJlbnRzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuICAgIHBhcmVudHMucG9wKCk7XG4gICAgc3RhdGUubGV2ZWwgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogcGFyZW50cy5sZW5ndGg7XG5cbiAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgICBsZXQgcGFyZW50ID0gc3RhdGVzW3BhcmVudE5hbWVdO1xuXG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBwYXJlbnQgcm91dGUgc3RhdGUgXCIke3BhcmVudE5hbWV9XCIgZm9yIFwiJHtzdGF0ZS5uYW1lfVwiYClcbiAgICAgIH1cblxuICAgICAgaWYoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmKCF0aGlzLnN0YXRlcy5sZW5ndGggJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgWW91IGRpZG4ndCBhZGQgYW55IHJvdXRlcyB0byB0aGUgcm91dGVyYCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xuICB0aGlzLl9faW5pdCA9IHRydWU7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogU2V0IHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5yb3V0ZXIuc2V0U3RhdGUgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBzdGF0ZSA9IHsuLi5vcHRpb25zLCBuYW1lLCBwYXR0ZXJufTtcblxuICByb3V0ZXIuc3RhdGVzLnB1c2goc3RhdGUpO1xuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhhc2hVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtc1xuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybFF1ZXJ5KCkgOiB0aGlzLmdldEhpc3RvcnlVcmxRdWVyeSgpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhpc3RvcnlcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGlzdG9yeVVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByZXF1ZXN0LnBhcmFtc0Zyb21RdWVyeSgod2luZG93LmxvY2F0aW9uLmhhc2guc3BsaXQoJz8nKVsxXSB8fCAnJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdXJsIGJ5IGRhdGFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc11cbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKi9cbnJvdXRlci5jcmVhdGVTdGF0ZVVybCA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSAnJykge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQgdXJsID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgKG0sIGYsIHYpID0+IHtcbiAgICByZXR1cm4gcGFyYW1zW3ZdIHx8ICcnO1xuICB9KTtcblxuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGhhc2ggPSAoaGFzaCB8fCAnJykucmVwbGFjZSgnIycsICcnKTtcblxuICBpZighdGhpcy5oYXNoTW9kZSAmJiBoYXNoKSB7XG4gICAgdXJsICs9ICcjJyArIGhhc2g7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSBhbiB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuc3BsaXRTbGFzaGVzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1tcXC9dKy9nLCAnLycpO1xufTtcblxuLyoqXG4gKiBDbGVhciBhbGwgcm91dGVyIGRlcGVuZGVuY2llc1xuICovXG5yb3V0ZXIuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG59O1xuXG4vKipcbiAqIEdldCBzdGF0ZSB1cmwgY29udGVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChzdGF0ZSwgdXJsKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCBrZXlzID0gW107XG4gIGxldCBpID0gMDtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gIHVybCA9IHVybC5zcGxpdCgnPycpWzBdO1xuICB1cmwgPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAga2V5cy5wdXNoKHYpO1xuXG4gICAgcmV0dXJuICcoW15cXFxcL10qKSc7XG4gIH0pO1xuXG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAodXJsUGF0dGVybik7XG4gIGxldCBpc0luY2x1ZGVkID0gdXJsLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgdikgPT4ge1xuICAgIHYgJiYgKHBhcmFtc1trZXlzW2ldXSA9IHYpO1xuICAgIGkrKztcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmUgbm93XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pc0FjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluY2x1ZGVzID0gZmFsc2UpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHRoaXMuZ2V0VXJsKCkuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJyhbXlxcXFwvXSopJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14nICsgdXJsUGF0dGVybiArICdcXC8kJyk7XG4gIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3RyKTtcblxuICByZXR1cm4gcmVnZXgudGVzdCh1cmwpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgY3VycmVudCB1cmwgaW5jbHVkZXMgYSBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaW5BY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gIHJldHVybiByb3V0ZXIuaXNBY3RpdmVTdGF0ZShzdGF0ZSwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEdldCByb3V0ZSBjb21wb25lbnQgYnkgbGV2ZWxcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGV2ZWxcbiAqL1xucm91dGVyLmdldFJvdXRlID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBpID0gMDtcblxuICBsZXQgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuXG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RhdGU6IHN0YXRlLCAuLi5jb250ZW50fTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLl9fZGlzYWJsZUNoYW5nZSkge1xuICAgIGRlbGV0ZSB0aGlzLl9fZGlzYWJsZUNoYW5nZTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmdldFVybCgpO1xuICBsZXQgaGFzaCA9IHRoaXMuaGFzaE1vZGU/ICcnOiB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7XG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHF1ZXJ5LCBoYXNoLCBwcmV2VHJhbnNpdGlvbik7XG4gIGxldCBsZXZlbCA9IDA7XG5cbiAgbGV0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4ge1xuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSBjb250ZW50LnBhcmFtcztcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShzdGF0ZS5sZXZlbCk7XG5cbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldmVsKys7XG5cbiAgICBsZXQgaGFzU3RhdGUgPSBwcmV2VHJhbnNpdGlvbiAmJiBwcmV2VHJhbnNpdGlvbi5oYXNTdGF0ZShzdGF0ZSk7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmKGhhc1N0YXRlKSB7XG4gICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5nZXRSb3V0ZShzdGF0ZSk7XG4gICAgICBsZXQgcHJldiA9IHsgcGFyYW1zOiByb3V0ZS5wYXJhbXMsIHF1ZXJ5OiByb3V0ZS5xdWVyeSwgaGFzaDogcm91dGUuaGFzaCB9O1xuICAgICAgbGV0IGN1cnJlbnQgPSB7IHBhcmFtcywgcXVlcnksIGhhc2ggfTtcblxuICAgICAgaXNEaWZmZXJlbnQgPSAhdXRpbHMuY29tcGFyZShwcmV2LCBjdXJyZW50KTtcbiAgICB9XG5cbiAgICBsZXQgaXNIaXN0b3J5ID0gdGhpcy5fX29wdGlvbnMucmVsb2FkID09PSB1bmRlZmluZWQgJiYgIWlzRGlmZmVyZW50O1xuICAgIGxldCBpc1JlbG9hZCA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gZmFsc2U7XG5cbiAgICBpZiAoaGFzU3RhdGUgJiYgKGlzSGlzdG9yeSB8fCBpc1JlbG9hZCkpIHtcbiAgICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICB9XG5cbiAgICBQcm9taXNlLnJlc29sdmUoc3RhdGUuaGFuZGxlcih0cmFuc2l0aW9uKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKHRyYW5zaXRpb24uX19jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zaXRpb24ucGF0aC5kYXRhID0gZGF0YTtcblxuICAgICAgaWYoc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH1cblxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCksICgpID0+IHtcbiAgICBpZighdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICBpZih0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgV3Jvbmcgcm91dGVyIGRlZmF1bHQgdXJsIFwiJHt0aGlzLmRlZmF1bHRVcmx9XCJgKTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5kZWZhdWx0VXJsKSB7XG4gICAgICAgIHRoaXMuaGFzaE1vZGUgJiYgdGhpcy5kZWZhdWx0VXJsICE9IHRoaXMuZ2V0VXJsKCkgJiYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0VXJsKHRoaXMuZGVmYXVsdFVybCk7XG4gICAgICAgIHRoaXMuX19yZWRpcmVjdHMrKztcblxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgTm90IGZvdW5kIGEgZGVmYXVsdCByb3V0ZS4gWW91IGNhbiBwYXNzIGl0IGluIFwicm91dGVyLmluaXQoZGVmYXVsdFVybClcIiBmdW5jdGlvbmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19vcHRpb25zID0ge307XG4gICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG5cbiAgICBpZihwcmV2VHJhbnNpdGlvbikge1xuICAgICAgZm9yKGxldCBpID0gbGV2ZWwsIGwgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCByb3V0ZSA9IHByZXZUcmFuc2l0aW9uLnJvdXRlc1tpXTtcbiAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywge1xuICAgICAgZGV0YWlsOiB0cmFuc2l0aW9uXG4gICAgfSkpO1xuICB9KTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXInO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlbG9hZCddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgQSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLmhhc2ggPSAnJztcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY2hhbmdlZFVybCh1cmwpIHtcbiAgICB0aGlzLnNldFVybCh1cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHVybCk7XG4gIH1cblxuICBjaGFuZ2VkU3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFBhcmFtcyhwYXJhbXMpIHtcbiAgICB0aGlzLnNldFBhcmFtcyhwYXJhbXMpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkUXVlcnkocXVlcnkpIHtcbiAgICB0aGlzLnNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZEhhc2gocXVlcnkpIHtcbiAgICB0aGlzLnNldEhhc2gocXVlcnkpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRRdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWxvYWQodmFsKSB7XG4gICAgdGhpcy5zZXRSZWxvYWQodmFsKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdzdGF0ZScpICYmIHRoaXMuc2V0U3RhdGUodGhpcy5hdHRycy5zdGF0ZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykgJiYgdGhpcy5zZXRQYXJhbXModGhpcy5hdHRycy5wYXJhbXMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgJiYgdGhpcy5zZXRRdWVyeSh0aGlzLmF0dHJzLnF1ZXJ5KTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdoYXNoJykgJiYgdGhpcy5zZXRIYXNoKHRoaXMuYXR0cnMuaGFzaCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpICYmIHRoaXMuc2V0T3B0aW9ucyh0aGlzLmF0dHJzLm9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3JlbG9hZCcpICYmIHRoaXMuc2V0UmVsb2FkKHRoaXMuYXR0cnMucmVsb2FkKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd1cmwnKSAmJiB0aGlzLnNldFVybCh0aGlzLmF0dHJzLnVybCk7XG4gICAgdGhpcy5yZXNldEhyZWYodGhpcy51cmwpO1xuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0U3RhdGUobmFtZSkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVTdGF0ZSA9IHJvdXRlci5pc0FjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2NvcGUuaW5BY3RpdmVTdGF0ZSA9IHJvdXRlci5pbkFjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgIGlmKHR5cGVvZiBwYXJhbXMgIT0gJ29iamVjdCcgfHwgIXBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcGFyYW1zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGlmKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYodHlwZW9mIGhhc2ggIT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIGhhc2ggbXVzdCBiZSBhIHN0cmluZ2ApO1xuICAgIH1cblxuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZih0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRSZWxvYWQodmFsKSB7XG4gICAgdGhpcy5vcHRpb25zLnJlbG9hZCA9IHZhbDtcbiAgfVxuXG4gIGdldFN0YXRlKG5hbWUpIHtcbiAgICBsZXQgc3RhdGUgPSByb3V0ZXIuZ2V0U3RhdGUobmFtZSk7XG5cbiAgICBpZighc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlciBzdGF0ZSB3aXRoIG5hbWUgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXNldEhyZWYodXJsKSB7XG4gICAgaWYodXJsKSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSB1cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gpO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2EuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIENvbnRlbnQpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZih0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnZWRpdGFibGUnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsIHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdlZGl0YWJsZScpKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdlZGl0YWJsZScpO1xuICAgIH1cblxuICAgIGlmKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcblxuLyoqXG4gKiBJZiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaXNdJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZicsIElmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UtaWYnLCBFbHNlSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZScsIEVsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5O1xuICB9XG5cbiAgY2hhbmdlZElzKHZhbHVlKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlZFJlY3JlYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRSZWNyZWF0aW9uKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3JlY3JlYXRlJykgJiYgdGhpcy5zZXRSZWNyZWF0aW9uKHRoaXMuYXR0cnMucmVjcmVhdGUpO1xuICAgIHRoaXMuc3RhdGUgPSAhIXRoaXMuYXR0cnMuaXM7XG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoKVxuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZighbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYodGhpcy5zdGF0ZSAmJiAhdGhpcy5hY3RpdmUpIHtcbiAgICAgIGlmKHRoaXMucmVjcmVhdGUgfHwgIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5kaXNwbGF5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5fX2VtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb21waWxlKCkge1xuICAgIGxldCByZXM7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICByZXMgPSBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG4vKipcbiAqIEVsc2VJZiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2VJZiBleHRlbmRzIElmIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogRWxzZSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2UgZXh0ZW5kcyBFbHNlSWYge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpcycsICd0cnVlJyk7XG4gIH1cbn1cblxuSWYuRWxzZUlmID0gRWxzZUlmO1xuSWYuRWxzZSA9IEVsc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgSW5jbHVkZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuZ2V0VGVtcGxhdGUodXJsKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlKHRoaXMuYXR0cnMudXJsKTtcbiAgfVxuXG4gIGdldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcigpO1xuICAgICAgfSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy5hdHRycy5vbkVycm9yLnRyaWdnZXIoZXJyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydjaGVja2VkJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbnB1dCcsIElucHV0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXNDaGVja2JveCA9IHRoaXMuZWwudHlwZSA9PSAnY2hlY2tib3gnO1xuICAgIHRoaXMuaXNSYWRpbyA9IHRoaXMuZWwudHlwZSA9PSAncmFkaW8nO1xuICB9XG5cbiAgY2hhbmdlZENoZWNrZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldENoZWNrZWQodmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICAodGhpcy5pc1JhZGlvIHx8IHRoaXMuaXNDaGVja2JveCkgJiYgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0Q2hlY2tlZCh0aGlzLmVsLmNoZWNrZWQsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgICh0aGlzLmlzQ2hlY2tib3ggfHwgdGhpcy5pc1JhZGlvKSAmJiB0aGlzLnNldENoZWNrZWQodGhpcy5hdHRycy5jaGVja2VkKTtcbiAgfVxuXG4gIHNldENoZWNrZWQodmFsdWUsIHRyaWdnZXIgPSB0cnVlKSB7XG4gICAgdmFsdWUgPSAhIXZhbHVlO1xuXG4gICAgaWYodGhpcy5wcmV2Q2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB0aGlzLnByZXZDaGVja2VkID0gdmFsdWU7XG4gICAgdHJpZ2dlciAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuY2hhbmdlUmFkaW8oKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHN1cGVyLnNldFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3InO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcblxuLyoqXG4gKiBUaGUgcmFkaW8gZ3JvdXAgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCBSYWRpbyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCBSYWRpb0J1dHRvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhYmxlID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG4gIH1cblxuICBjaGFuZ2VkSW4odmFsdWUpIHtcbiAgICBzdXBlci5jaGFuZ2VkSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnNldE5hbWVzKHRoaXMuYXR0cnMubmFtZSk7XG4gIH1cblxuICBjaGFuZ2VkTmFtZShuYW1lKSB7XG4gICAgdGhpcy5zZXROYW1lcyhuYW1lKTtcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLml0ZXJhYmxlICYmIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgICAgIGlmKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgdGhpcy5zZXRWYWx1ZSh0aGlzLmF0dHJzLnZhbHVlKTtcbiAgfVxuXG4gIHNldE5hbWVzKG5hbWUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZih2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcHJldiA9IHRoaXMucHJldlZhbHVlO1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG4gICAgbGV0IGlzVHJ1ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZighaXNUcnVlKSB7XG4gICAgICBpZih2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZihwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogVGhlIHJhZGlvIGl0ZW0gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSBgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlxcJHt0aGlzLnZhbHVlfVwiLz5cXCR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD5gO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0UmFkaW9WYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLnNldFJhZGlvVmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXRSYWRpb1ZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zY29wZS52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG5cblJhZGlvLlJhZGlvQnV0dG9uID0gUmFkaW9CdXR0b247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9yYWRpby5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCBTZWxlY3QpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjaGFuZ2VkTXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLnNldE11bHRpcGxlKHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRDb250ZW50KHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRJbih2YWx1ZSkge1xuICAgIHN1cGVyLmNoYW5nZWRJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZHJhd1NlbGVjdCgpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIH0pO1xuICB9XG4gIFxuICBjb21waWxlZCgpIHtcbiAgICBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ211bHRpcGxlJykgJiYgdGhpcy5zZXRNdWx0aXBsZSh0aGlzLmF0dHJzLm11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdjb250ZW50JykgJiYgdGhpcy5zZXRDb250ZW50KHRoaXMuYXR0cnMuY29udGVudCk7XG4gICAgdGhpcy5kcmF3U2VsZWN0KCk7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXS5fX2FraWxpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IG9wdGlvbi5hdHRycy5zZWxlY3RlZDtcblxuICAgICAgaWYoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBpZighZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGhpcy5odG1sLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgaW5Db250ZW50KHZhbHVlKSB7XG4gICAgaWYoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwuY29udGVudCA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwuY29udGVudC5pbmRleE9mKHZhbHVlKSAhPSAtMTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICBpZihvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpPyBbdmFsdWVdOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYodXRpbHMuY29tcGFyZSh0aGlzLmVsLmNvbnRlbnQsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnc2VsZWN0ZWQnXTtcblxuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoZXhwcmVzc2lvbik7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0ZXh0YXJlYScsIFRleHRhcmVhKTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4vYWtpbGknO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG4vKipcbiAqIFNjb3BlIGNsYXNzLlxuICpcbiAqIEFsbCBwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggX18gd2lsbCBub3QgYmUgd2F0Y2hpbmcuXG4gKiBZb3UgY2FuIHVzZSB0aGVtIGZvciBpbnRlcm5hbCBtYW5pcHVsYXRpb25zLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG4gIHN0YXRpYyBuZXN0ZWRXYXRjaGluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5fX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX19lbCA9IGVsO1xuICAgIHRoaXMuX19jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdzY29wZScsIG5hbWUpO1xuICB9XG5cbiAgZ2V0IF9fdXRpbHMoKSB7XG4gICAgcmV0dXJuIHV0aWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHNjb3BlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3RyaWN0PWZhbHNlXSAtIHdpdGhvdXQgb2JqZWN0IGNvcHlpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXQoa2V5cywgdmFsdWUsIHN0cmljdCA9IGZhbHNlKSB7XG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgQWtpbGkudW5pc29sYXRlZCgoKSA9PiB7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9zY29wZS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICdha2lsaSc7XG5pbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICdha2lsaS9zcmMvY29tcG9uZW50cy9mb3InO1xuXG4vKipcbiAqIFRoZSBtYWluIHRhYnMgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBBa2lsaS5Db21wb25lbnQge1xuICBzdGF0aWMgZXZlbnRzID0gWyd0YWInXTtcblxuICBzdGF0aWMgZGVmaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0YWJzJywgVGFicyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0YWItbWVudScsIFRhYk1lbnUpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGFiLWNvbnRlbnQnLCBUYWJDb250ZW50KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi10aXRsZScsIFRhYlRpdGxlKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi1wYW5lJywgVGFiUGFuZSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZEFjdGl2ZShpbmRleCkge1xuICAgIHRoaXMuc2V0QWN0aXZlVGFiKGluZGV4KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIGxldCB0aXRsZUxlbmd0aCA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiTWVudSkuZ2V0VGFicygpLmxlbmd0aDtcbiAgICBsZXQgcGFuZUxlbmd0aCA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiQ29udGVudCkuZ2V0VGFicygpLmxlbmd0aDtcblxuICAgIGlmKHRpdGxlTGVuZ3RoICE9IHBhbmVMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXCJ0YWItdGl0bGVcIiBhbmQgXCJ0YWItY29udGVudFwiIGNvbXBvbmVudCBjb3VudHMgYXJlIGRpZmZlcmVudDogJHt0aXRsZUxlbmd0aH0vJHtwYW5lTGVuZ3RofWApO1xuICAgIH1cblxuICAgIHRoaXMuc2V0QWN0aXZlVGFiKHRoaXMuYXR0cnMuYWN0aXZlIHx8IDApO1xuICB9XG5cbiAgc2V0QWN0aXZlVGFiKGluZGV4KSB7XG4gICAgbGV0IHRhYnMgPSB0aGlzLmNoaWxkKGMgPT4gYyBpbnN0YW5jZW9mIFRhYk1lbnUpLmdldFRhYnMoKTtcbiAgICBsZXQgbGFzdEFjdGl2ZSA9IHRoaXMuYWN0aXZlO1xuXG4gICAgaWYodGFic1tpbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcInRhYnNcIiBjb21wb25lbnQgaW5kZXggXCIke2luZGV4fVwiIGlzIG91dCBvZiByYW5nZSBgKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlLmFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gaW5kZXg7XG5cbiAgICBpZighdGFicy5sZW5ndGgpIHtcbiAgICAgIEFraWxpLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZS53YXJuKCdOb3QgZm91bmQgYW55IGNoaWxkIGNvbXBvbmVudCBcInRhYi10aXRsZVwiIGZvciBcInRhYi1tZW51XCInKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRhYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0YWJzW2ldLnNldEFjdGl2aXR5KGkgPT0gaW5kZXgpO1xuICAgIH1cblxuICAgIGxhc3RBY3RpdmUgIT0gdGhpcy5hY3RpdmUgJiYgdGhpcy5hdHRycy5vblRhYi50cmlnZ2VyKGluZGV4LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaGVhZGVyIGdyb3VwIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgVGFiTWVudSBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICAgIHRoaXMuY2hpbGRTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFRhYlRpdGxlO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLml0ZXJhYmxlICYmIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuaXRlcmFibGUgJiYgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGdldFRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4odGhpcy5jaGlsZFNlbGVjdG9yLCAwKTtcbiAgfVxuXG4gIGdldFRhYkluZGV4KHRhYikge1xuICAgIGxldCB0YWJzID0gdGhpcy5nZXRUYWJzKCk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGFicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmKHRhYnNbaV0gPT09IHRhYikge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRUYWJzQnlJbmRleChpKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGFicygpW2ldO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJvZHkgZ3JvdXAgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJDb250ZW50IGV4dGVuZHMgVGFiTWVudSB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuY2hpbGRTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFRhYlBhbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYm9keSBncm91cCBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgVGFiUGFuZSBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSBgPGlmIHJlY3JlYXRlPVwiXFwke3RoaXMucmVjcmVhdGV9XCIgaXM9XCJcXCR7dGhpcy5pc0FjdGl2ZVRhYn1cIj5cXCR7dGhpcy5fX2NvbnRlbnR9PC9pZj5gO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYoIXRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIHx8ICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBUYWJDb250ZW50KSkge1xuICAgICAgQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlLndhcm4oJ05vdCBmb3VuZCBwYXJlbnQgY29tcG9uZW50IFwidGFiLWNvbnRlbnRcIiBmb3IgXCJ0YWItcGFuZVwiJyk7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlVGFiID0gdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWNyZWF0ZScpICYmIHRoaXMuc2V0UmVjcmVhdGlvbih0aGlzLmF0dHJzLnJlY3JlYXRlKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWNyZWF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0UmVjcmVhdGlvbih2YWx1ZSlcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24odmFsdWUpIHtcbiAgICB0aGlzLnNjb3BlLnJlY3JlYXRlID0gdmFsdWU7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3Rpdml0eSkge1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVUYWIgPSB0aGlzLmlzQWN0aXZlID0gYWN0aXZpdHk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaGVhZGVyIGdyb3VwIGl0ZW0gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJUaXRsZSBleHRlbmRzIExvb3Age1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlVGFiID0gdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYoIXRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIHx8ICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBUYWJNZW51KSkge1xuICAgICAgQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlLndhcm4oJ05vdCBmb3VuZCBwYXJlbnQgY29tcG9uZW50IFwidGFiLW1lbnVcIiBmb3IgXCJ0YWItdGl0bGVcIicpO1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnRhYnMgPSB0aGlzLnBhcmVudChjID0+IGMgaW5zdGFuY2VvZiBUYWJzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhYnMuc2V0QWN0aXZlVGFiKHRoaXMuaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy50YWJzLmNoaWxkKGMgPT4gYyBpbnN0YW5jZW9mIFRhYk1lbnUpLmdldFRhYkluZGV4KHRoaXMpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZpdHkpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlVGFiID0gdGhpcy5pc0FjdGl2ZSA9IGFjdGl2aXR5O1xuICAgIHRoaXMudGFicy5jaGlsZChjID0+IGMgaW5zdGFuY2VvZiBUYWJDb250ZW50KS5nZXRUYWJzQnlJbmRleCh0aGlzLmluZGV4KS5zZXRBY3Rpdml0eShhY3Rpdml0eSk7XG4gIH1cbn1cblxuVGFicy5UYWJNZW51ID0gVGFiTWVudTtcblRhYnMuVGFiVGl0bGUgPSBUYWJUaXRsZTtcblRhYnMuVGFiQ29udGVudCA9IFRhYkNvbnRlbnQ7XG5UYWJzLlRhYlBhbmUgPSBUYWJQYW5lO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFicy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
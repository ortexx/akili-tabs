/*!
 * Tabs component for Akili framework
 * 
 * @version 0.1.2
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

    _this.scope.active = _this.active = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjkxYTk4MzQ3NTEwNGYyZmVlOWUiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvYWtpbGkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9hLmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2lmLmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFicy5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIm9wdGlvbnMiLCJuZXN0ZWRXYXRjaGluZyIsInNob3dFdmFsdWF0aW9uRXJyb3JzIiwiZGVidWciLCJfX2luaXQiLCJfX2NvbXBvbmVudHMiLCJfX2FsaWFzZXMiLCJfX3Njb3BlcyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwiY29tcG9uZW50cyIsImRlY29yYXRvcnMiLCJzZXJ2aWNlcyIsImpvaW5CaW5kaW5nS2V5cyIsImtleXMiLCJtYXAiLCJlbCIsInRvU3RyaW5nIiwiam9pbiIsImFkZFNjb3BlIiwic2NvcGUiLCJfX25hbWUiLCJFcnJvciIsImdldFNjb3BlIiwibmFtZSIsInJlbW92ZVNjb3BlIiwiX19jb21wb25lbnQiLCJfX2VsIiwiX19wYXJlbnQiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsImkiLCJsIiwicHJvcCIsImlzRGVsZXRlZCIsImNvbXBvbmVudCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImxhc3QiLCJ2YWwiLCJ2YWx1ZSIsImxlbmd0aCIsInVuZXZhbHVhdGVkIiwiZXZhbHVhdGlvbiIsInVuaXNvbGF0ZWQiLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwiT2JqZWN0Iiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJDb21wb25lbnQiLCJfX2NhbmNlbGxlZCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJwIiwiX19jb21waWxlIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiYWxpYXMiLCJ1bnJlZ2lzdGVyQWxpYXMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJrZXkiLCJvbGQiLCJfX2lzUHJveHkiLCJhcHBseSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24iLCJzZXRJbnRlcnZhbCIsImNvbnN0cnVjdG9yIiwiaXNvbGF0ZUV2ZW50cyIsIm9sZEFkZEV2ZW50TGlzdGVuZXIiLCJFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9sZFJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2xkUmVtb3ZlIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3VtZW50cyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJjYWxsYmFjayIsImlzb2xhdGVGdW5jdGlvbiIsImNvbnRleHQiLCJvRm4iLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25TdGF0ZSIsImNoYW5nZVN0YXRlIiwiZGVmaW5lIiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJ1dGlscyIsIkEiLCJDb250ZW50IiwiRm9yIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJSYWRpbyIsIlJvdXRlIiwiU2VsZWN0IiwiVGV4dCIsIlRleHRhcmVhIiwicmVxdWVzdCIsInJvdXRlciIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsIlJlZ0V4cCIsInNvdXJjZSIsInN5c3RlbUF0dHJpYnV0ZXMiLCJleHByZXNzaW9uIiwiZXZhbCIsIl9faXNTeXN0ZW1LZXkiLCJpbmRleE9mIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJhdHRycyIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsInJlc29sdmUiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwibm9kZVZhbHVlIiwiX19ldmFsdWF0ZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJnZXQiLCJfX2NvbnRlbnQiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9fc2NvcGUiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19uZXN0ZWRXYXRjaGluZyIsIl9fbmVzdGVkT2JzZXJ2ZSIsIl9fb2JzZXJ2ZSIsImJvb2xlYW5BdHRyaWJ1dGVzIiwiY29uY2F0Iiwic2V0QXR0ciIsImF0dHJpYnV0ZXMiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0ZVBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBhcmVQcmV2aW91c1ZhbHVlIiwiY29weSIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiX19leHByZXNzaW9uIiwibSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJzZVZhbHVlIiwiX19nZXRQYXJzZWRFeHByZXNzaW9uIiwibGlzdCIsInBhcnNlIiwiZXJyIiwibWVzc2FnZSIsInN0YWNrIiwiZXJyb3IiLCJoYXNoIiwia2V5c1N0cmluZyIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJpc1Njb3BlUHJveHkiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIkF0dHIiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsIl9faGFzQmluZGluZ3MiLCJjbGVhckF0dHJpYnV0ZSIsIl9fYXR0cmlidXRlT24iLCJfX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIiLCJ0b0NhbWVsQ2FzZSIsIm9uQ2hhbmdlZCIsImNoYW5nZWQiLCJjYW1lbEtleSIsInRvVXBwZXJDYXNlIiwiZm5OYW1lIiwiZXZGbk5hbWUiLCJlbGVtZW50IiwiX19lbGVtZW50IiwiYXR0ciIsIndpdGhvdXRQYXJlbnRzIiwibGFzdFByb3BzIiwicHJvcHNMZW5ndGgiLCJlbEV2YWx1YXRlIiwiX19nZXRCaW5kIiwiX19kYXRhIiwiYyIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyIsIl9fZXZhbHVhdGVOb2RlIiwiX2siLCJfcHJvcCIsInVuYmluZCIsIm9iaiIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiaGFzUHJvcGVydHlCeUtleXMiLCJfX2V2YWx1YXRlTmVzdGVkIiwiX191bmJpbmQiLCJkZWxldGVQcm9wZXJ0eUJ5S2V5cyIsImV4ZWMiLCJldmVudCIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9fZXZhbHVhdGVFdmVudCIsIl9faW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX191bmJpbmRCeU5vZGVzIiwiUHJveHkiLCJ0YXJnZXQiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJyZWFsVGFyZ2V0IiwiZ2V0T3duUHJvcGVydHlUYXJnZXQiLCJpc1BsYWluT2JqZWN0IiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwiX19iaW5kTm9kZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0Iiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIl9fdGFyZ2V0IiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiaXNvbGF0aW9uS2V5IiwicGFyZW50S2V5c1N0cmluZyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5Iiwibm9kZXMiLCJfX2NsZWFyRW1wdHlCaW5kaW5ncyIsImNsZWFyIiwiX19yZW1vdmUiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwiaXNBcnJheSIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsInJldmVyc2UiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZSIsInN0eWxlcyIsImZpbHRlciIsImhhbmRsZXIiLCJpdGVtIiwibWF0Y2giLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJuZXN0ZWQiLCJjb21wYXJlIiwiY3VycmVudCIsInByZXZpb3VzIiwicHJldmlvdXNDb3B5IiwiY3VycmVudENvcHkiLCJlbmNvZGVIdG1sRW50aXRpZXMiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwib2JqZWN0IiwicmVkdWNlIiwibyIsImhhcyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImNsZWFyU2NvcGVQcm94eSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJSZXF1ZXN0IiwiYmFzZVVybCIsImRlZmF1bHRzIiwic3RhdHVzRXJyb3JzUGF0dGVybiIsInJlamVjdCIsInVybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25TdGFydCIsInRyYW5zZm9ybUJlZm9yZSIsIm9wZW4iLCJtZXRob2QiLCJ1c2VyIiwicGFzc3dvcmQiLCJoZWFkZXJzIiwianNvbiIsImJvZHkiLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwidHJhbnNmb3JtQWZ0ZXIiLCJzdGF0dXMiLCJvbmVycm9yIiwic2VuZCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwic3BsaXQiLCJlcXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuYW1lc3BhY2UiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9JU09TdHJpbmciLCJfX2luc3RhbmNlcyIsImFkZEluc3RhbmNlIiwiaW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImRyYXciLCJjcmVhdGVJdGVyYXRvciIsImluIiwibWFzayIsIm5leHRTaWJsaW5nIiwib3V0ZXJIVE1MIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJpbmRleCIsImZvdW5kIiwiX19oYXNoIiwiaXRlcmF0b3IiLCJjVmFsdWUiLCJjb21wYXJzaW9uIiwiY0NvcHkiLCJzZXRJbmRleCIsInNldEtleSIsInNldFZhbHVlIiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwid3JpdGFibGUiLCJlVmFsdWUiLCJpbmRleEtleXMiLCJsYXN0RWxlbWVudCIsImxvb3AiLCJpdGVyYXRlIiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJfX3NldCIsInZhbHVlS2V5Iiwic2V0Rm9jdXMiLCJmb2N1cyIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiYmx1ciIsInRyYW5zaXRpb24iLCJzdGF0ZSIsInBhdGgiLCJnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24iLCJfX3RyYW5zaXRpb24iLCJlbXB0eSIsImJ1YmJsZXMiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9FdmVudCIsInR5cGUiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJyZWxvYWQiLCJnZXRVcmwiLCJzZXRVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwicHVzaFN0YXRlIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsIl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIiLCJwb3AiLCJwYXJlbnROYW1lIiwiZnVsbFBhdHRlcm4iLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwiZiIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImlzQWN0aXZlU3RhdGUiLCJpbmNsdWRlcyIsImluQWN0aXZlU3RhdGUiLCJnZXRSb3V0ZSIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwiX19kaXNhYmxlQ2hhbmdlIiwicHJldlRyYW5zaXRpb24iLCJvbkVuZCIsInNldFBhdGgiLCJsb2FkZWQiLCJoYXNTdGF0ZSIsImlzRGlmZmVyZW50IiwicHJldiIsImlzSGlzdG9yeSIsImlzUmVsb2FkIiwic2V0VHJhbnNpdGlvbiIsImlzVXJsIiwicmVzZXRIcmVmIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0UmVsb2FkIiwicHJldmVudERlZmF1bHQiLCJzZXRPcHRpb25zIiwiaHJlZiIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJFbHNlSWYiLCJFbHNlIiwiYWN0aXZlIiwicmVjcmVhdGUiLCJpc0NvbXBpbGVkIiwic2V0UmVjcmVhdGlvbiIsImlzIiwiY29tcGlsYXRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZXN1bHQiLCJzZXRBY3Rpdml0eSIsImNvbm5lY3Rpb24iLCJnZXRUZW1wbGF0ZSIsImFib3J0Iiwib25Mb2FkIiwiY2F0Y2giLCJvbkVycm9yIiwiaXNDaGVja2JveCIsImlzUmFkaW8iLCJzZXRDaGVja2VkIiwiY2hlY2tlZCIsInByZXZDaGVja2VkIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50IiwiY2hhbmdlUmFkaW8iLCJyYWRpbyIsIlJhZGlvQnV0dG9uIiwiaXRlcmFibGUiLCJzZXROYW1lcyIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInNldFJhZGlvVmFsdWUiLCJPcHRpb24iLCJpdGVyYXRvclRhZ05hbWUiLCJpc011bHRpcGxlIiwic2V0TXVsdGlwbGUiLCJzZXRDb250ZW50IiwiZHJhd1NlbGVjdCIsImdldENvbnRlbnQiLCJtdWx0aXBsZSIsImNoYW5nZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJzZWxlY3RlZCIsIm9wdGlvbiIsInJlZGVmaW5lIiwidHJpbSIsInNldFNlbGVjdGVkIiwic3RyaWN0IiwiVGFicyIsInNldEFjdGl2ZVRhYiIsInRpdGxlTGVuZ3RoIiwiVGFiTWVudSIsImdldFRhYnMiLCJwYW5lTGVuZ3RoIiwiVGFiQ29udGVudCIsInRhYnMiLCJsYXN0QWN0aXZlIiwib25UYWIiLCJUYWJUaXRsZSIsIlRhYlBhbmUiLCJjaGlsZFNlbGVjdG9yIiwidGFiIiwiaXNBY3RpdmVUYWIiLCJpc0FjdGl2ZSIsImFjdGl2aXR5IiwiZ2V0VGFiSW5kZXgiLCJnZXRUYWJzQnlJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2REE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxFQUFkLEMsQ0EzQkE7Ozs7Ozs7OztBQTZCQUEsTUFBTUMsT0FBTixHQUFnQjtBQUNkQyxrQkFBZ0IsSUFERjtBQUVkQyx3QkFBc0IsSUFGUjtBQUdkQyxTQUFPO0FBSE8sQ0FBaEI7O0FBTUFKLE1BQU1LLE1BQU4sR0FBZSxLQUFmO0FBQ0FMLE1BQU1NLFlBQU4sR0FBcUIsRUFBckI7QUFDQU4sTUFBTU8sU0FBTixHQUFrQixFQUFsQjtBQUNBUCxNQUFNUSxRQUFOLEdBQWlCLEVBQWpCO0FBQ0FSLE1BQU1TLFdBQU4sR0FBb0IsSUFBcEI7QUFDQVQsTUFBTVUsWUFBTixHQUFxQixJQUFyQjs7QUFFQVYsTUFBTVcscUJBQU4sR0FBOEIsQ0FDNUIsVUFENEIsRUFDaEIsaUJBRGdCLEVBQ0csUUFESCxDQUE5Qjs7QUFJQVgsTUFBTVksVUFBTixHQUFtQixFQUFuQjtBQUNBWixNQUFNYSxVQUFOLEdBQW1CLEVBQW5CO0FBQ0FiLE1BQU1jLFFBQU4sR0FBaUIsRUFBakI7O0FBRUE7Ozs7O0FBS0FkLE1BQU1lLGVBQU4sR0FBd0IsVUFBU0MsSUFBVCxFQUFlO0FBQ3JDLFNBQU9BLEtBQUtDLEdBQUwsQ0FBUztBQUFBLFdBQU1DLEdBQUdDLFFBQUgsRUFBTjtBQUFBLEdBQVQsRUFBOEJDLElBQTlCLENBQW1DLEdBQW5DLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBcEIsTUFBTXFCLFFBQU4sR0FBaUIsVUFBU0MsS0FBVCxFQUFnQjtBQUMvQixNQUFHLEtBQUtkLFFBQUwsQ0FBY2MsTUFBTUMsTUFBcEIsQ0FBSCxFQUFnQztBQUM5QixVQUFNLElBQUlDLEtBQUosaUJBQXdCRixNQUFNQyxNQUE5QixxQkFBTjtBQUNEOztBQUVELE9BQUtmLFFBQUwsQ0FBY2MsTUFBTUMsTUFBcEIsSUFBOEJELEtBQTlCO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7O0FBTUF0QixNQUFNeUIsUUFBTixHQUFpQixVQUFTQyxJQUFULEVBQWU7QUFDOUIsU0FBTyxLQUFLbEIsUUFBTCxDQUFja0IsSUFBZCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQTFCLE1BQU0yQixXQUFOLEdBQW9CLFVBQVNELElBQVQsRUFBZTtBQUNqQyxNQUFJSixRQUFRLEtBQUtkLFFBQUwsQ0FBY2tCLElBQWQsQ0FBWjs7QUFFQUosUUFBTU0sV0FBTixHQUFvQixJQUFwQjtBQUNBTixRQUFNTyxJQUFOLEdBQWEsSUFBYjtBQUNBUCxRQUFNUSxRQUFOLEdBQWlCLElBQWpCO0FBQ0EsT0FBS3RCLFFBQUwsQ0FBY2tCLElBQWQsSUFBc0IsSUFBdEI7QUFDQSxTQUFPLEtBQUtsQixRQUFMLENBQWNrQixJQUFkLENBQVA7QUFDRCxDQVJEOztBQVVBOzs7Ozs7O0FBT0ExQixNQUFNK0IsZUFBTixHQUF3QixVQUFVYixFQUFWLEVBQTJCO0FBQUEsTUFBYmMsSUFBYSx1RUFBTixJQUFNOztBQUNqRCxNQUFJQyxNQUFNLEVBQVY7O0FBRUEsV0FBU0MsS0FBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ25CLFFBQUcsQ0FBQ0EsS0FBS0MsVUFBVCxFQUFxQjtBQUNuQjtBQUNEOztBQUVELFFBQUdELEtBQUtDLFVBQUwsQ0FBZ0JDLE9BQW5CLEVBQTRCO0FBQzFCSixVQUFJSyxJQUFKLENBQVNILEtBQUtDLFVBQWQ7O0FBRUEsVUFBRyxDQUFDSixJQUFKLEVBQVU7QUFDUjtBQUNEO0FBQ0Y7O0FBRURFLFVBQU1DLEtBQUtDLFVBQVg7QUFDRDs7QUFFREYsUUFBTWhCLEVBQU47O0FBRUEsU0FBT2MsT0FBTUMsR0FBTixHQUFXQSxJQUFJLENBQUosQ0FBbEI7QUFDRCxDQXRCRDs7QUF3QkE7Ozs7Ozs7Ozs7OztBQVlBakMsTUFBTXVDLFdBQU4sR0FBb0IsVUFBU3JCLEVBQVQsRUFBYXNCLFFBQWIsRUFBdUI7QUFDekNBLGFBQVdBLFNBQVNDLE9BQVQsQ0FBaUIsdUNBQWpCLEVBQTBEdkIsR0FBR3dCLFNBQTdELENBQVg7QUFDQXhCLEtBQUd3QixTQUFILEdBQWVGLFFBQWY7O0FBRUEsU0FBT3RCLEdBQUd3QixTQUFWO0FBQ0QsQ0FMRDs7QUFPQTs7Ozs7QUFLQTFDLE1BQU0yQyxlQUFOLEdBQXdCLFlBQVc7QUFBQTs7QUFDakMsU0FBTyxnQkFBTUMsa0JBQU4sQ0FBeUIsRUFBekIsRUFBNkIsVUFBQ0MsR0FBRCxFQUFTO0FBQzNDLFdBQU8sQ0FBQyxDQUFDLE1BQUtyQyxRQUFMLENBQWNxQyxHQUFkLENBQVQ7QUFDRCxHQUZNLENBQVA7QUFHRCxDQUpEOztBQU1BOzs7Ozs7Ozs7O0FBVUE3QyxNQUFNOEMsT0FBTixHQUFnQixVQUFTQyxFQUFULEVBQWE7QUFDM0IsTUFBRyxLQUFLdEMsV0FBUixFQUFxQjtBQUNuQixXQUFPc0MsSUFBUDtBQUNEOztBQUVELE9BQUt0QyxXQUFMLEdBQW1CLEVBQW5COztBQUVBLE1BQUl1QyxNQUFNRCxJQUFWO0FBQ0EsTUFBSUUsUUFBUSxFQUFaOztBQUVBLE9BQUksSUFBSUMsQ0FBUixJQUFhLEtBQUt6QyxXQUFsQixFQUErQjtBQUM3QixRQUFHLENBQUMsS0FBS0EsV0FBTCxDQUFpQjBDLGNBQWpCLENBQWdDRCxDQUFoQyxDQUFKLEVBQXdDO0FBQ3RDO0FBQ0Q7O0FBRURELFVBQU1YLElBQU4sQ0FBVyxLQUFLN0IsV0FBTCxDQUFpQnlDLENBQWpCLENBQVg7QUFDRDs7QUFFRCxPQUFLekMsV0FBTCxHQUFtQixJQUFuQjs7QUFsQjJCLDZCQW9CbkIyQyxDQXBCbUIsRUFvQlpDLENBcEJZO0FBcUJ6QixRQUFJQyxPQUFPTCxNQUFNRyxDQUFOLENBQVg7O0FBRUEsUUFBR0UsS0FBS0MsU0FBUixFQUFtQjtBQUNqQkQsV0FBS0UsU0FBTCxDQUFlQyxnQkFBZixDQUFnQ0gsS0FBS3RDLElBQXJDLEVBQTJDMEMsU0FBM0MsRUFBc0QsSUFBdEQ7O0FBRUE7QUFDRDs7QUFFRCxvQkFBTUMsaUJBQU4sQ0FBd0JMLEtBQUt0QyxJQUE3QixFQUFtQ3NDLEtBQUtFLFNBQUwsQ0FBZWxDLEtBQWxELEVBQXlELFVBQUNzQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUN0RSxVQUFHLENBQUNELElBQUosRUFBVTtBQUNSLGVBQU9DLE9BQU8sRUFBZDtBQUNEOztBQUVELGFBQU9QLEtBQUtRLEtBQVo7QUFDRCxLQU5EO0FBN0J5Qjs7QUFvQjNCLE9BQUksSUFBSVYsSUFBSSxDQUFSLEVBQVdDLElBQUlKLE1BQU1jLE1BQXpCLEVBQWlDWCxJQUFJQyxDQUFyQyxFQUF3Q0QsR0FBeEMsRUFBNkM7QUFBQSxxQkFBckNBLENBQXFDLEVBQTlCQyxDQUE4Qjs7QUFBQSw2QkFNekM7QUFVSDs7QUFFREosVUFBUSxJQUFSOztBQUVBLFNBQU9ELEdBQVA7QUFDRCxDQXpDRDs7QUEyQ0E7Ozs7OztBQU1BaEQsTUFBTWdFLFdBQU4sR0FBb0IsVUFBU2pCLEVBQVQsRUFBYTtBQUMvQixNQUFJa0IsYUFBYSxLQUFLdkQsWUFBdEI7QUFDQSxNQUFJc0MsWUFBSjs7QUFFQSxPQUFLdEMsWUFBTCxHQUFvQixJQUFwQjtBQUNBc0MsUUFBTUQsSUFBTjtBQUNBLE9BQUtyQyxZQUFMLEdBQW9CdUQsVUFBcEI7O0FBRUEsU0FBT2pCLEdBQVA7QUFDRCxDQVREOztBQVdBOzs7Ozs7QUFNQWhELE1BQU1rRSxVQUFOLEdBQW1CLFVBQVNuQixFQUFULEVBQWE7QUFDOUIsTUFBSWtCLGFBQWEsS0FBS3hELFdBQXRCO0FBQ0EsTUFBSXVDLFlBQUo7O0FBRUEsT0FBS3ZDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQXVDLFFBQU1ELElBQU47QUFDQSxPQUFLdEMsV0FBTCxHQUFtQndELFVBQW5COztBQUVBLFNBQU9qQixHQUFQO0FBQ0QsQ0FURDs7QUFXQTs7Ozs7OztBQU9BaEQsTUFBTW1FLFVBQU4sR0FBbUIsVUFBU2pELEVBQVQsRUFBMkI7QUFBQSxNQUFkakIsT0FBYyx1RUFBSixFQUFJOztBQUM1QyxNQUFJbUUsWUFBWW5FLFFBQVFtRSxTQUF4QjtBQUNBLE1BQUlaLFlBQVl0QyxHQUFHbUIsT0FBbkI7O0FBRUEsTUFBR21CLFNBQUgsRUFBYztBQUNaLFFBQUdZLFNBQUgsRUFBYztBQUNaWixnQkFBVWEsV0FBVjs7QUFFQSxhQUFPYixTQUFQO0FBQ0Q7O0FBRUQ7QUFDRDs7QUFFRCxNQUFJYyxTQUFTcEQsT0FBTyxLQUFLcUQsTUFBekI7QUFDQSxNQUFJQyxnQkFBZ0IsZ0JBQU1DLFVBQU4sQ0FBaUJ2RCxHQUFHd0QsWUFBSCxDQUFnQixXQUFoQixLQUFnQ3hELEdBQUd5RCxPQUFILENBQVdDLFdBQVgsRUFBakQsQ0FBcEI7QUFDQSxNQUFJQyxhQUFhLEtBQUt2RSxZQUFMLENBQWtCa0UsYUFBbEIsQ0FBakI7O0FBRUFNLGlCQUFlLElBQUcsQ0FBQ0QsVUFBSixFQUFnQjtBQUM3QixRQUFJRSxZQUFZQyxPQUFPaEUsSUFBUCxDQUFZLEtBQUtULFNBQWpCLENBQWhCOztBQUVBLFFBQUcsQ0FBQ3dFLFVBQVVoQixNQUFkLEVBQXNCO0FBQ3BCLFlBQU1lLGFBQU47QUFDRDs7QUFFRCxRQUFJRyxjQUFjRixVQUFVM0QsSUFBVixDQUFlLEdBQWYsQ0FBbEI7O0FBRUEsUUFBRyxDQUFDRixHQUFHZ0UsT0FBSCxDQUFXRCxXQUFYLENBQUosRUFBNkI7QUFDM0IsWUFBTUgsYUFBTjtBQUNEOztBQUVELFNBQUksSUFBSUssUUFBUixJQUFvQixLQUFLNUUsU0FBekIsRUFBb0M7QUFDbEMsVUFBRyxDQUFDLEtBQUtBLFNBQUwsQ0FBZTRDLGNBQWYsQ0FBOEJnQyxRQUE5QixDQUFKLEVBQTZDO0FBQzNDO0FBQ0Q7O0FBRUQsVUFBR2pFLEdBQUdnRSxPQUFILENBQVdDLFFBQVgsQ0FBSCxFQUF5QjtBQUN2Qk4scUJBQWEsS0FBS3ZFLFlBQUwsQ0FBa0IsS0FBS0MsU0FBTCxDQUFlNEUsUUFBZixDQUFsQixDQUFiO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBRyxDQUFDTixVQUFELElBQWUsQ0FBQ1AsTUFBbkIsRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxNQUFHLENBQUNPLFVBQUosRUFBZ0I7QUFDZEEsaUJBQWEsS0FBS08sU0FBbEI7QUFDRDs7QUFFRCxNQUFHUCxXQUFXSyxPQUFYLElBQXNCLENBQUNoRSxHQUFHZ0UsT0FBSCxDQUFXTCxXQUFXSyxPQUF0QixDQUExQixFQUEwRDtBQUN4RDtBQUNEOztBQUVEMUIsY0FBWSxJQUFJcUIsVUFBSixDQUFlM0QsRUFBZixFQUFtQixFQUFuQixDQUFaOztBQUVBLE1BQUdzQyxVQUFVNkIsV0FBYixFQUEwQjtBQUN4QjtBQUNEOztBQUVEN0IsWUFBVThCLFFBQVY7O0FBRUEsU0FBTzlCLFNBQVA7QUFDRCxDQWhFRDs7QUFrRUE7Ozs7Ozs7QUFPQXhELE1BQU11RixPQUFOLEdBQWdCLFVBQVNDLElBQVQsRUFBK0M7QUFBQTs7QUFBQSxNQUFoQ3ZGLE9BQWdDLHVFQUF0QixFQUFFbUUsV0FBVyxLQUFiLEVBQXNCOztBQUM3RCxNQUFJcUIsV0FBVyxFQUFmOztBQUVBLE1BQUlDLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUN4RSxFQUFELEVBQVE7QUFDL0IsUUFBSXNDLFlBQVksT0FBS1csVUFBTCxDQUFnQmpELEVBQWhCLEVBQW9CakIsT0FBcEIsQ0FBaEI7QUFDQSxRQUFJMEYsV0FBV3pFLEdBQUd5RSxRQUFsQjs7QUFFQW5DLGlCQUFhaUMsU0FBU25ELElBQVQsQ0FBY2tCLFNBQWQsQ0FBYjs7QUFFQSxTQUFJLElBQUlKLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsVUFBSXdDLFFBQVFELFNBQVN2QyxDQUFULENBQVo7O0FBRUFzQyx5QkFBbUJFLEtBQW5CO0FBQ0Q7QUFDRixHQVhEOztBQWFBRixxQkFBbUJGLElBQW5COztBQUVBLE1BQUlLLElBQUksRUFBUjs7QUFFQSxPQUFJLElBQUl6QyxJQUFJLENBQVIsRUFBV0MsSUFBSW9DLFNBQVMxQixNQUE1QixFQUFvQ1gsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFFBQUlJLFlBQVlpQyxTQUFTckMsQ0FBVCxDQUFoQjs7QUFFQXlDLE1BQUV2RCxJQUFGLENBQU9rQixVQUFVc0MsU0FBVixFQUFQO0FBQ0Q7O0FBRUQsU0FBT0MsUUFBUUMsR0FBUixDQUFZSCxDQUFaLEVBQWVJLElBQWYsQ0FBb0IsWUFBTTtBQUMvQixRQUFJQyxJQUFJLEVBQVI7O0FBRUEsU0FBSSxJQUFJOUMsS0FBSXFDLFNBQVMxQixNQUFULEdBQWtCLENBQTlCLEVBQWlDWCxNQUFLLENBQXRDLEVBQXlDQSxJQUF6QyxFQUE4QztBQUM1QyxVQUFJSSxhQUFZaUMsU0FBU3JDLEVBQVQsQ0FBaEI7O0FBRUE4QyxRQUFFNUQsSUFBRixDQUFPa0IsV0FBVTJDLFNBQVYsRUFBUDtBQUNEOztBQUVELFdBQU9KLFFBQVFDLEdBQVIsQ0FBWUUsQ0FBWixDQUFQO0FBQ0QsR0FWTSxDQUFQO0FBV0QsQ0FyQ0Q7O0FBdUNBOzs7Ozs7QUFNQWxHLE1BQU13RCxTQUFOLEdBQWtCLFVBQVM5QixJQUFULEVBQWVxQixFQUFmLEVBQW1CO0FBQ25DckIsU0FBT0EsS0FBS2tELFdBQUwsRUFBUDs7QUFFQSxNQUFHLENBQUM3QixFQUFKLEVBQVE7QUFDTixXQUFPLEtBQUt6QyxZQUFMLENBQWtCb0IsSUFBbEIsS0FBMkIsSUFBbEM7QUFDRDs7QUFFRCxNQUFHLEtBQUtwQixZQUFMLENBQWtCb0IsSUFBbEIsS0FBMkIxQixNQUFNQyxPQUFOLENBQWNHLEtBQTVDLEVBQW1EO0FBQ2pEZ0csWUFBUUMsSUFBUixnQkFBMEIzRSxJQUExQjtBQUNEOztBQUVELE9BQUtwQixZQUFMLENBQWtCb0IsSUFBbEIsSUFBMEJxQixFQUExQjtBQUNELENBWkQ7O0FBY0E7Ozs7O0FBS0EvQyxNQUFNc0csbUJBQU4sR0FBNEIsVUFBUzVFLElBQVQsRUFBZTtBQUN6QyxTQUFPLEtBQUtwQixZQUFMLENBQWtCb0IsSUFBbEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BMUIsTUFBTXVHLEtBQU4sR0FBYyxVQUFTcEIsUUFBVCxFQUF1QztBQUFBLE1BQXBCWCxhQUFvQix1RUFBSixFQUFJOztBQUNuREEsa0JBQWdCQSxjQUFjSSxXQUFkLEVBQWhCOztBQUVBLE1BQUcsQ0FBQ0osYUFBSixFQUFtQjtBQUNqQixXQUFPLEtBQUtqRSxTQUFMLENBQWU0RSxRQUFmLEtBQTRCLElBQW5DO0FBQ0Q7O0FBRUQsTUFBRyxLQUFLNUUsU0FBTCxDQUFlNEUsUUFBZixLQUE0Qm5GLE1BQU1DLE9BQU4sQ0FBY0csS0FBN0MsRUFBb0Q7QUFDbERnRyxZQUFRQyxJQUFSLDBCQUFvQ2xCLFFBQXBDO0FBQ0Q7O0FBRUQsT0FBSzVFLFNBQUwsQ0FBZTRFLFFBQWYsSUFBMkJYLGFBQTNCO0FBQ0QsQ0FaRDs7QUFjQTs7Ozs7QUFLQXhFLE1BQU13RyxlQUFOLEdBQXdCLFVBQVNyQixRQUFULEVBQW1CO0FBQ3pDLFNBQU8sS0FBSzdFLFlBQUwsQ0FBa0I2RSxRQUFsQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7O0FBR0FuRixNQUFNeUcscUJBQU4sR0FBOEIsWUFBVztBQUN2QyxNQUFJekYsT0FBT2dFLE9BQU8wQixtQkFBUCxDQUEyQkMsTUFBTUMsU0FBakMsQ0FBWDs7QUFEdUMsK0JBRy9CeEQsQ0FIK0IsRUFHeEJDLENBSHdCO0FBSXJDLFFBQUl3RCxNQUFNN0YsS0FBS29DLENBQUwsQ0FBVjtBQUNBLFFBQUkwRCxNQUFNSCxNQUFNQyxTQUFOLENBQWdCQyxHQUFoQixDQUFWOztBQUVBLFFBQUcsT0FBT0MsR0FBUCxJQUFjLFVBQWQsSUFBNEJELE9BQU8sYUFBdEMsRUFBcUQ7QUFDbkQ7QUFDRDs7QUFFREYsVUFBTUMsU0FBTixDQUFnQkMsR0FBaEIsSUFBdUIsWUFBVztBQUFBO0FBQUE7O0FBQ2hDLGFBQU83RyxNQUFNZ0UsV0FBTixDQUFrQixZQUFNO0FBQzdCLFlBQUcsQ0FBQyxPQUFLK0MsU0FBVCxFQUFvQjtBQUNsQixpQkFBT0QsSUFBSUUsS0FBSixvQkFBUDtBQUNEOztBQUVELGVBQU9oSCxNQUFNOEMsT0FBTixDQUFjLFlBQU07QUFDekIsaUJBQU9nRSxJQUFJRSxLQUFKLG9CQUFQO0FBQ0QsU0FGTSxDQUFQO0FBR0QsT0FSTSxDQUFQO0FBU0QsS0FWRDtBQVhxQzs7QUFHdkMsT0FBSSxJQUFJNUQsSUFBSSxDQUFSLEVBQVdDLElBQUlyQyxLQUFLK0MsTUFBeEIsRUFBZ0NYLElBQUlDLENBQXBDLEVBQXVDRCxHQUF2QyxFQUE0QztBQUFBLHVCQUFwQ0EsQ0FBb0MsRUFBN0JDLENBQTZCOztBQUFBLDhCQUt4QztBQWNIO0FBQ0YsQ0F2QkQ7O0FBeUJBOzs7QUFHQXJELE1BQU1pSCxzQkFBTixHQUErQixZQUFXO0FBQ3hDQyxTQUFPQyxVQUFQLEdBQW9CLEtBQUtDLHVCQUFMLENBQTZCRixPQUFPQyxVQUFwQyxFQUFnRCxDQUFoRCxDQUFwQjtBQUNBRCxTQUFPRyxXQUFQLEdBQXFCLEtBQUtELHVCQUFMLENBQTZCRixPQUFPRyxXQUFwQyxFQUFpRCxDQUFqRCxDQUFyQjtBQUNBSCxTQUFPbkIsT0FBUCxLQUFtQm1CLE9BQU9uQixPQUFQLENBQWV1QixXQUFmLEdBQTZCLEtBQUtGLHVCQUFMLENBQTZCRixPQUFPbkIsT0FBUCxDQUFldUIsV0FBNUMsRUFBMEQsQ0FBMUQsQ0FBaEQ7QUFDRCxDQUpEOztBQU1BOzs7QUFHQXRILE1BQU11SCxhQUFOLEdBQXNCLFlBQVc7QUFDL0IsTUFBSUMsc0JBQXNCQyxRQUFRYixTQUFSLENBQWtCYyxnQkFBNUM7QUFDQSxNQUFJQyx5QkFBeUJGLFFBQVFiLFNBQVIsQ0FBa0JnQixtQkFBL0M7QUFDQSxNQUFJQyxZQUFZSixRQUFRYixTQUFSLENBQWtCa0IsTUFBbEM7O0FBRUFMLFVBQVFiLFNBQVIsQ0FBa0JrQixNQUFsQixHQUEyQixZQUFXO0FBQ3BDLFdBQU8sS0FBS0MsZ0JBQVo7O0FBRUEsV0FBT0YsVUFBVWIsS0FBVixDQUFnQixJQUFoQixFQUFzQmdCLFNBQXRCLENBQVA7QUFDRCxHQUpEOztBQU1BUCxVQUFRYixTQUFSLENBQWtCYyxnQkFBbEIsR0FBcUMsVUFBU2hHLElBQVQsRUFBZXFCLEVBQWYsRUFBbUI7QUFDdEQsUUFBSWtGLE9BQU8sR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNILFNBQWQsQ0FBWDs7QUFFQSxRQUFHLENBQUMsS0FBS0QsZ0JBQVQsRUFBMkI7QUFDekIsV0FBS0EsZ0JBQUwsR0FBd0IsRUFBeEI7QUFDRDs7QUFFRCxRQUFHLENBQUMsS0FBS0EsZ0JBQUwsQ0FBc0JyRyxJQUF0QixDQUFKLEVBQWlDO0FBQy9CLFdBQUtxRyxnQkFBTCxDQUFzQnJHLElBQXRCLElBQThCLEVBQTlCO0FBQ0Q7O0FBRUR1RyxTQUFLLENBQUwsSUFBVSxZQUFZO0FBQUE7QUFBQTs7QUFDcEIsYUFBT2pJLE1BQU1nRSxXQUFOLENBQWtCLFlBQU07QUFDN0IsZUFBT2hFLE1BQU04QyxPQUFOLENBQWMsWUFBTTtBQUN6QixpQkFBT0MsR0FBR2lFLEtBQUgscUJBQVA7QUFDRCxTQUZNLENBQVA7QUFHRCxPQUpNLENBQVA7QUFLRCxLQU5EOztBQVFBLFNBQUtlLGdCQUFMLENBQXNCckcsSUFBdEIsRUFBNEJZLElBQTVCLENBQWlDO0FBQy9COEYsWUFBTXJGLEVBRHlCO0FBRS9CQSxVQUFJa0YsS0FBSyxDQUFMO0FBRjJCLEtBQWpDOztBQUtBLFdBQU9ULG9CQUFvQlIsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0NpQixJQUFoQyxDQUFQO0FBQ0QsR0F6QkQ7O0FBMkJBUixVQUFRYixTQUFSLENBQWtCZ0IsbUJBQWxCLEdBQXdDLFVBQVNsRyxJQUFULEVBQWVxQixFQUFmLEVBQW1CO0FBQ3pELFFBQUcsQ0FBQyxLQUFLZ0YsZ0JBQVQsRUFBMkI7QUFDekIsV0FBS0EsZ0JBQUwsR0FBd0IsRUFBeEI7QUFDRDs7QUFFRCxRQUFHLENBQUMsS0FBS0EsZ0JBQUwsQ0FBc0JyRyxJQUF0QixDQUFKLEVBQWlDO0FBQy9CLFdBQUtxRyxnQkFBTCxDQUFzQnJHLElBQXRCLElBQThCLEVBQTlCO0FBQ0Q7O0FBRUQsU0FBSSxJQUFJMEIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBSzBFLGdCQUFMLENBQXNCckcsSUFBdEIsRUFBNEJxQyxNQUEvQyxFQUF1RFgsSUFBSUMsQ0FBM0QsRUFBOERELEdBQTlELEVBQW1FO0FBQ2pFLFVBQUlpRixXQUFXLEtBQUtOLGdCQUFMLENBQXNCckcsSUFBdEIsRUFBNEIwQixDQUE1QixDQUFmOztBQUVBLFVBQUdpRixTQUFTRCxJQUFULEtBQWtCckYsRUFBckIsRUFBeUI7QUFDdkIsYUFBS2dGLGdCQUFMLENBQXNCckcsSUFBdEIsRUFBNEI0RyxNQUE1QixDQUFtQ2xGLENBQW5DLEVBQXNDLENBQXRDO0FBQ0FBO0FBQ0FDOztBQUVBO0FBQ0Q7QUFDRjs7QUFFRCxRQUFHLENBQUMsS0FBSzBFLGdCQUFMLENBQXNCckcsSUFBdEIsRUFBNEJxQyxNQUFoQyxFQUF3QztBQUN0QyxhQUFPLEtBQUtnRSxnQkFBTCxDQUFzQnJHLElBQXRCLENBQVA7QUFDRDs7QUFFRCxXQUFPaUcsdUJBQXVCWCxLQUF2QixDQUE2QixJQUE3QixFQUFtQ2dCLFNBQW5DLENBQVA7QUFDRCxHQTFCRDtBQTJCRCxDQWpFRDs7QUFtRUE7Ozs7Ozs7QUFPQWhJLE1BQU1vSCx1QkFBTixHQUFnQyxVQUFTckUsRUFBVCxFQUEyQjtBQUFBLE1BQWR3RixHQUFjLHVFQUFSLE1BQVE7O0FBQ3pELFNBQU8sWUFBVztBQUNoQixRQUFJTixPQUFPLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjSCxTQUFkLENBQVg7QUFDQSxRQUFJUSxXQUFXRCxPQUFPLE1BQVAsR0FBZU4sS0FBS0EsS0FBS2xFLE1BQUwsR0FBYyxDQUFuQixDQUFmLEdBQXNDa0UsS0FBS00sR0FBTCxDQUFyRDs7QUFFQSxRQUFHLE9BQU9DLFFBQVAsSUFBbUIsVUFBdEIsRUFBa0M7QUFDaEMsYUFBT3pGLEdBQUdpRSxLQUFILENBQVMsSUFBVCxFQUFlZ0IsU0FBZixDQUFQO0FBQ0Q7O0FBRURDLFNBQUssQ0FBTCxJQUFVLFlBQU07QUFDZCxhQUFPakksTUFBTWdFLFdBQU4sQ0FBa0IsWUFBTTtBQUM3QixlQUFPaEUsTUFBTThDLE9BQU4sQ0FBYyxZQUFNO0FBQ3pCLGlCQUFPMEYsVUFBUDtBQUNELFNBRk0sQ0FBUDtBQUdELE9BSk0sQ0FBUDtBQUtELEtBTkQ7O0FBUUEsV0FBT3pGLEdBQUdpRSxLQUFILENBQVMsSUFBVCxFQUFlaUIsSUFBZixDQUFQO0FBQ0QsR0FqQkQ7QUFrQkQsQ0FuQkQ7O0FBcUJBOzs7Ozs7O0FBT0FqSSxNQUFNeUksZUFBTixHQUF3QixVQUFTMUYsRUFBVCxFQUE2QjtBQUFBLE1BQWhCMkYsT0FBZ0IsdUVBQU4sSUFBTTs7QUFDbkQsTUFBRzNGLEdBQUdWLE9BQU4sRUFBZTtBQUNiLFdBQU9VLEVBQVA7QUFDRDs7QUFFRCxNQUFJNEYsTUFBTSxTQUFOQSxHQUFNLEdBQVc7QUFBQTs7QUFDbkJELGNBQVVBLFdBQVcsSUFBckI7O0FBRUEsV0FBTzFJLE1BQU1nRSxXQUFOLENBQWtCLFlBQU07QUFDN0IsYUFBT2hFLE1BQU04QyxPQUFOLENBQWMsWUFBTTtBQUN6QixlQUFPQyxHQUFHaUUsS0FBSCxDQUFTMEIsT0FBVCxjQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FKTSxDQUFQO0FBS0QsR0FSRDs7QUFVQTFELFNBQU80RCxjQUFQLENBQXNCRCxHQUF0QixFQUEyQixTQUEzQixFQUFzQztBQUNwQ0Usa0JBQWMsSUFEc0I7QUFFcENDLGdCQUFZLEtBRndCO0FBR3BDaEYsV0FBTztBQUg2QixHQUF0Qzs7QUFNQSxTQUFPNkUsR0FBUDtBQUNELENBdEJEOztBQXdCQTs7Ozs7O0FBTUEzSSxNQUFNK0ksSUFBTixHQUFhLFVBQVN2RCxJQUFULEVBQWU7QUFDMUIsT0FBS2pCLE1BQUwsR0FBY2lCLFFBQVF3RCxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQXRCOztBQUVBLFNBQU8sS0FBSzFELE9BQUwsQ0FBYSxLQUFLaEIsTUFBbEIsRUFBMEIwQixJQUExQixDQUErQixZQUFNO0FBQzFDLFFBQUcsaUJBQU81RixNQUFWLEVBQWtCO0FBQ2hCLGFBQU8sSUFBSTBGLE9BQUosQ0FBWSxVQUFDL0MsR0FBRCxFQUFTO0FBQzFCLFlBQUlrRyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNsQmxHO0FBQ0FrRSxpQkFBT1UsbUJBQVAsQ0FBMkIsY0FBM0IsRUFBMkNzQixPQUEzQztBQUNELFNBSEQ7O0FBS0FoQyxlQUFPUSxnQkFBUCxDQUF3QixjQUF4QixFQUF3Q3dCLE9BQXhDO0FBQ0EseUJBQU9DLFdBQVA7QUFDRCxPQVJNLENBQVA7QUFTRDtBQUNGLEdBWk0sRUFZSmxELElBWkksQ0FZQyxZQUFNO0FBQ1pqRyxVQUFNSyxNQUFOLEdBQWUsSUFBZjtBQUNELEdBZE0sQ0FBUDtBQWVELENBbEJEOztBQW9CQTs7O0FBR0FMLE1BQU1vSixNQUFOLEdBQWUsWUFBVztBQUN4QixjQUFFQSxNQUFGO0FBQ0Esb0JBQVFBLE1BQVI7QUFDQSxzQkFBVUEsTUFBVjtBQUNBLGdCQUFJQSxNQUFKO0FBQ0Esb0JBQVFBLE1BQVI7QUFDQSxrQkFBTUEsTUFBTjtBQUNBLGVBQUdBLE1BQUg7QUFDQSxrQkFBTUEsTUFBTjtBQUNBLGtCQUFNQSxNQUFOO0FBQ0EsbUJBQU9BLE1BQVA7QUFDQSxxQkFBU0EsTUFBVDtBQUNELENBWkQ7O0FBY0FwSixNQUFNb0YsU0FBTjtBQUNBcEYsTUFBTXFKLFlBQU47QUFDQXJKLE1BQU1zSixLQUFOO0FBQ0F0SixNQUFNdUosS0FBTjtBQUNBdkosTUFBTVksVUFBTixDQUFpQjRJLENBQWpCO0FBQ0F4SixNQUFNWSxVQUFOLENBQWlCNkksT0FBakI7QUFDQXpKLE1BQU1ZLFVBQU4sQ0FBaUI4SSxHQUFqQjtBQUNBMUosTUFBTVksVUFBTixDQUFpQitJLEVBQWpCO0FBQ0EzSixNQUFNWSxVQUFOLENBQWlCZ0osT0FBakI7QUFDQTVKLE1BQU1ZLFVBQU4sQ0FBaUJpSixLQUFqQjtBQUNBN0osTUFBTVksVUFBTixDQUFpQmtKLEtBQWpCO0FBQ0E5SixNQUFNWSxVQUFOLENBQWlCbUosS0FBakI7QUFDQS9KLE1BQU1ZLFVBQU4sQ0FBaUJvSixNQUFqQjtBQUNBaEssTUFBTVksVUFBTixDQUFpQnFKLElBQWpCO0FBQ0FqSyxNQUFNWSxVQUFOLENBQWlCc0osUUFBakI7QUFDQWxLLE1BQU1jLFFBQU4sQ0FBZXFKLE9BQWY7QUFDQW5LLE1BQU1jLFFBQU4sQ0FBZXNKLE1BQWY7O0FBRUFsRCxPQUFPbEgsS0FBUCxHQUFlQSxLQUFmOztBQUVPLElBQU1ZLGtDQUFhWixNQUFNWSxVQUF6QjtBQUNBLElBQU1FLDhCQUFXZCxNQUFNYyxRQUF2QjtrQkFDUWQsSzs7O0FBRWZBLE1BQU1vSixNQUFOO0FBQ0FwSixNQUFNdUgsYUFBTjtBQUNBdkgsTUFBTXlHLHFCQUFOO0FBQ0F6RyxNQUFNaUgsc0JBQU4sRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNscEJBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1vRCxrQkFBa0IsbUJBQXhCO0FBQ0EsSUFBTUMsd0JBQXdCLElBQUlDLE1BQUosQ0FBV0YsZ0JBQWdCRyxNQUEzQixFQUFtQyxHQUFuQyxDQUE5QjtBQUNBLElBQU1DLG1CQUFtQixDQUFDLFdBQUQsRUFBYyxPQUFkLENBQXpCOztJQUVxQnJGLFM7Ozs7O0FBV25COzs7NkJBR2dCO0FBQ2Qsc0JBQU01QixTQUFOLENBQWdCLFdBQWhCLEVBQTZCNEIsU0FBN0I7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7OzswQkFVYXNELE8sRUFBU2dDLFUsRUFBWTtBQUNoQyxhQUFRLFVBQVVBLFVBQVYsRUFBc0I7QUFDNUIsZUFBT0MsS0FBS0QsVUFBTCxDQUFQO0FBQ0QsT0FGTSxDQUVKdkMsSUFGSSxDQUVDTyxPQUZELEVBRVVnQyxVQUZWLENBQVA7QUFHRDs7O0FBRUQscUJBQVl4SixFQUFaLEVBQTRCO0FBQUEsUUFBWkksS0FBWSx1RUFBSixFQUFJOztBQUFBOztBQUFBLFNBcStCNUJzSixhQXIrQjRCLEdBcStCWixVQUFTL0QsR0FBVCxFQUFjO0FBQzVCLFVBQUdBLE9BQU8sSUFBUCxJQUFnQkEsSUFBSSxDQUFKLEtBQVUsR0FBVixJQUFpQkEsSUFBSSxDQUFKLEtBQVUsR0FBOUMsRUFBb0Q7QUFDbEQsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUdLLElBQUcsQ0FBQyxhQUFELEVBQWdCZ0UsT0FBaEIsQ0FBd0JoRSxHQUF4QixLQUFnQyxDQUFDLENBQXBDLEVBQXVDO0FBQzFDLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU8sS0FBUDtBQUNELEtBOStCMkI7O0FBQzFCLFNBQUtpRSxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFNBQUsxRixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsU0FBSzJGLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLdkosUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQUt3SixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkIsSUFBN0I7QUFDQSxTQUFLbkssS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0osRUFBTCxHQUFVQSxFQUFWO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztrQ0FLYztBQUNaLFdBQUs0SixXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFdBQUtVLHFCQUFMLENBQTJCTCxjQUEzQixHQUE0QyxJQUE1QztBQUNBLFdBQUtELFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxXQUFLRCxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsV0FBS1EsV0FBTDtBQUNBLFdBQUtDLFlBQUw7QUFDQSxXQUFLQyxzQkFBTDtBQUNBLFdBQUtDLGtCQUFMO0FBRUQ7O0FBRUQ7Ozs7Ozs7OytCQUtXO0FBQUE7O0FBQ1QsV0FBSzNLLEVBQUwsQ0FBUW1CLE9BQVIsR0FBa0IsSUFBbEI7QUFDQSxXQUFLeUosWUFBTDtBQUNBLFdBQUtKLFdBQUw7QUFDQSxXQUFLQyxZQUFMO0FBQ0EsV0FBS0Msc0JBQUw7QUFDQSxXQUFLQyxrQkFBTDs7QUFFQSxzQkFBTS9JLE9BQU4sQ0FBYyxZQUFNO0FBQ2xCLGNBQUtpSixPQUFMLENBQWEsTUFBS0MsS0FBbEI7QUFDRCxPQUZEO0FBR0Q7O0FBRUQ7Ozs7Ozs7OztnQ0FNWTtBQUFBOztBQUNWLFVBQUlDLFVBQVUsS0FBS0MsbUJBQUwsSUFBNEIsQ0FBQyxLQUFLQyxnQkFBaEQ7QUFDQSxVQUFJdEcsSUFBSUUsUUFBUXFHLE9BQVIsRUFBUjs7QUFFQSxXQUFLWixhQUFMLEdBQXFCUyxVQUFTLElBQVQsR0FBZSxLQUFLRSxnQkFBTCxDQUFzQjlKLE9BQTFEOztBQUVBLFVBQUcsQ0FBQyxLQUFLNkksYUFBTixJQUF1QixLQUFLQyxXQUFMLENBQWlCa0IsU0FBeEMsSUFBcUQsS0FBS0gsbUJBQTdELEVBQWtGO0FBQ2hGLGFBQUtJLHVCQUFMLENBQTZCLEtBQUtwTCxFQUFsQyxFQUFzQyxLQUFLc0ssYUFBM0M7QUFDRDs7QUFFRCxVQUFJZSxjQUFjLFNBQWRBLFdBQWMsQ0FBQzVHLFFBQUQsRUFBVzZHLE1BQVgsRUFBc0I7QUFDdEMsYUFBSSxJQUFJcEosSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxjQUFJd0MsUUFBUUQsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQSxjQUFHd0MsTUFBTTZHLFFBQU4sSUFBa0IsQ0FBckIsRUFBd0I7QUFDdEIsbUJBQUtDLGdCQUFMLENBQXNCOUcsS0FBdEIsRUFBNkI0RyxNQUE3Qjs7QUFFQTVHLGtCQUFNK0csU0FBTixHQUFrQixPQUFLQyxVQUFMLENBQWdCaEgsS0FBaEIsQ0FBbEI7QUFDRCxXQUpELE1BS0ssSUFBR0EsTUFBTTZHLFFBQU4sSUFBa0IsQ0FBbEIsSUFBdUIsQ0FBQzdHLE1BQU12RCxPQUFqQyxFQUEwQztBQUM3QyxtQkFBS2lLLHVCQUFMLENBQTZCMUcsS0FBN0I7QUFDQTJHLHdCQUFZM0csTUFBTWlILFVBQWxCLEVBQThCakgsS0FBOUI7QUFDRDtBQUNGO0FBQ0YsT0FkRDs7QUFnQkEyRyxrQkFBWSxLQUFLckwsRUFBTCxDQUFRMkwsVUFBcEIsRUFBZ0MsS0FBSzNMLEVBQXJDO0FBQ0EsV0FBSzRKLFdBQUwsR0FBbUIsSUFBbkI7O0FBRUEsVUFBSTlILFlBQUo7O0FBRUEsVUFBRyxDQUFDLEtBQUtrSSxhQUFULEVBQXdCO0FBQ3RCbEksY0FBTSxnQkFBTUYsT0FBTixDQUFjLFlBQU07QUFDeEIsaUJBQUtrSixLQUFMLENBQVdjLFVBQVgsSUFBeUIsT0FBS2QsS0FBTCxDQUFXYyxVQUFYLENBQXNCQyxPQUF0QixFQUF6Qjs7QUFFQSxpQkFBTyxPQUFLQyxRQUFMLEVBQVA7QUFDRCxTQUpLLENBQU47O0FBTUEsWUFBRyxLQUFLMUYsV0FBTCxDQUFpQjJGLFdBQXBCLEVBQWlDO0FBQy9CcEgsY0FBSSxrQkFBUXFILEdBQVIsQ0FBWSxLQUFLNUYsV0FBTCxDQUFpQjJGLFdBQTdCLEVBQTBDaEgsSUFBMUMsQ0FBK0MsVUFBQ2pELEdBQUQsRUFBUztBQUMxRCxtQkFBSzlCLEVBQUwsQ0FBUXdCLFNBQVIsR0FBb0IsT0FBS3lLLFNBQXpCO0FBQ0EsNEJBQU01SyxXQUFOLENBQWtCLE9BQUtyQixFQUF2QixFQUEyQjhCLElBQUlvSyxJQUEvQjtBQUNBLG1CQUFPLE9BQUtELFNBQVo7O0FBRUEsbUJBQU8sZ0JBQU01SCxPQUFOLENBQWMsT0FBS3JFLEVBQW5CLEVBQXVCLEVBQUVrRCxXQUFXLElBQWIsRUFBdkIsQ0FBUDtBQUNELFdBTkcsQ0FBSjtBQU9EO0FBQ0YsT0FoQkQsTUFpQks7QUFDSCx3QkFBTXRCLE9BQU4sQ0FBYyxZQUFNO0FBQ2xCLGlCQUFLa0osS0FBTCxDQUFXcUIsWUFBWCxJQUEyQixPQUFLckIsS0FBTCxDQUFXcUIsWUFBWCxDQUF3Qk4sT0FBeEIsRUFBM0I7QUFDQSxpQkFBS08sVUFBTDtBQUNELFNBSEQ7QUFJRDs7QUFFRCxXQUFLdkMsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFdBQUtHLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CLElBQW5COztBQUVBLGFBQU90RixFQUFFSSxJQUFGLENBQU8sWUFBTTtBQUNsQixlQUFPakQsR0FBUDtBQUNELE9BRk0sQ0FBUDtBQUdEOztBQUVEOzs7Ozs7Ozs7Z0NBTVk7QUFDVixVQUFHLEtBQUtrSSxhQUFSLEVBQXVCO0FBQ3JCLGVBQU9uRixRQUFRcUcsT0FBUixFQUFQO0FBQ0Q7O0FBRUQsV0FBS0osS0FBTCxDQUFXdUIsVUFBWCxJQUF5QixLQUFLdkIsS0FBTCxDQUFXdUIsVUFBWCxDQUFzQlIsT0FBdEIsRUFBekI7QUFDQSxhQUFPaEgsUUFBUXFHLE9BQVIsQ0FBZ0IsS0FBS29CLFFBQUwsRUFBaEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7OzttQ0FLZTtBQUNiLFVBQUloQixTQUFTLGdCQUFNekssZUFBTixDQUFzQixLQUFLYixFQUEzQixFQUErQixLQUEvQixDQUFiO0FBQ0EsVUFBSW9JLFFBQVEsS0FBS2hDLFdBQUwsQ0FBaUJoRyxLQUFqQixJQUEwQixnQkFBTWdJLEtBQTVDO0FBQ0EsVUFBSWhJLGNBQUo7QUFDQSxVQUFJZ0QsU0FBUyxnQkFBTUMsTUFBTixLQUFpQixLQUFLckQsRUFBbkM7O0FBRUEsVUFBR3NMLE1BQUgsRUFBVztBQUNUbEwsZ0JBQVEsSUFBSWdJLEtBQUosQ0FBVSxLQUFLcEksRUFBTCxDQUFRd0QsWUFBUixDQUFxQixPQUFyQixLQUFpQyxnQkFBTS9CLGVBQU4sRUFBM0MsRUFBb0UsS0FBS3pCLEVBQXpFLEVBQTZFLElBQTdFLENBQVI7QUFDRCxPQUZELE1BR0s7QUFDSEksZ0JBQVEsSUFBSWdJLEtBQUosQ0FBVWhGLFNBQVEsTUFBUixHQUFnQixnQkFBTTNCLGVBQU4sRUFBMUIsRUFBbUQsS0FBS3pCLEVBQXhELEVBQTRELElBQTVELENBQVI7QUFDQW9ELG1CQUFXLGdCQUFNa0IsSUFBTixHQUFhLElBQXhCO0FBQ0Q7O0FBRUQsVUFBSWlJLFVBQVVuTSxLQUFkO0FBQ0EsVUFBSW9NLFNBQVMxSSxPQUFPMkksTUFBUCxDQUFjck0sS0FBZCxFQUFxQixLQUFLQSxLQUExQixDQUFiO0FBQ0EsVUFBSXBCLGlCQUFpQixnQkFBTUQsT0FBTixDQUFjQyxjQUFuQztBQUNBLFVBQUkwTixvQkFBb0IsS0FBS3RHLFdBQUwsQ0FBaUJzRyxpQkFBekM7QUFDQSxVQUFJQyxTQUFTLEtBQUt2RyxXQUFMLENBQWlCdUcsTUFBOUI7O0FBRUEsVUFBRyxLQUFLdkcsV0FBTCxDQUFpQjlFLFFBQXBCLEVBQThCO0FBQzVCLHdCQUFNRCxXQUFOLENBQWtCLEtBQUtyQixFQUF2QixFQUEyQixLQUFLb0csV0FBTCxDQUFpQjlFLFFBQTVDO0FBQ0Q7O0FBRUQsVUFBRyxLQUFLOEUsV0FBTCxDQUFpQjJGLFdBQXBCLEVBQWlDO0FBQy9CLGFBQUtFLFNBQUwsR0FBaUIsS0FBS2pNLEVBQUwsQ0FBUXdCLFNBQXpCO0FBQ0EsYUFBS3hCLEVBQUwsQ0FBUXdCLFNBQVIsR0FBb0IsRUFBcEI7QUFDRDs7QUFFRCxVQUFHLEtBQUs0RSxXQUFMLENBQWlCcEgsY0FBakIsS0FBb0N3RCxTQUF2QyxFQUFrRDtBQUNoRHhELHlCQUFpQixLQUFLb0gsV0FBTCxDQUFpQnBILGNBQWxDO0FBQ0QsT0FGRCxNQUdLLElBQUdvSixNQUFNcEosY0FBTixLQUF5QndELFNBQTVCLEVBQXVDO0FBQzFDeEQseUJBQWlCb0osTUFBTXBKLGNBQXZCO0FBQ0Q7O0FBRUQsV0FBS3VOLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFdBQUtLLFFBQUwsR0FBZ0JELE1BQWhCO0FBQ0EsV0FBS0UsZ0JBQUwsR0FBd0I3TixjQUF4QjtBQUNBLFdBQUtnTSxtQkFBTCxHQUEyQjBCLGlCQUEzQjs7QUFFQSxzQkFBTXZNLFFBQU4sQ0FBZUMsS0FBZjs7QUFFQSxVQUFHcEIsY0FBSCxFQUFtQjtBQUNqQm9CLGdCQUFRLEtBQUswTSxlQUFMLENBQXFCTixNQUFyQixFQUE2QixFQUE3QixDQUFSO0FBQ0QsT0FGRCxNQUdLO0FBQ0hwTSxnQkFBUSxLQUFLMk0sU0FBTCxDQUFlUCxNQUFmLEVBQXVCLEVBQXZCLENBQVI7QUFDRDs7QUFFRCxXQUFLcE0sS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzZDQUt5QjtBQUFBOztBQUN2QixXQUFLNE0saUJBQUwsR0FBeUIsR0FBR0MsTUFBSCxDQUFVLGdCQUFNeE4scUJBQWhCLEVBQXVDLEtBQUsyRyxXQUFMLENBQWlCNEcsaUJBQXhELENBQXpCOztBQUVBLFVBQUlFLFVBQVUsU0FBVkEsT0FBVSxDQUFDbE4sRUFBRCxFQUFRO0FBQ3BCLGFBQUssSUFBSWtDLElBQUksQ0FBUixFQUFXNEksUUFBUTlLLEdBQUdtTixVQUF0QixFQUFrQ2hMLElBQUkySSxNQUFNakksTUFBakQsRUFBeURYLElBQUlDLENBQTdELEVBQWdFRCxHQUFoRSxFQUFxRTtBQUNuRSxjQUFJakIsT0FBTzZKLE1BQU01SSxDQUFOLENBQVg7O0FBRUEsY0FBRyxPQUFLOEssaUJBQUwsQ0FBdUJyRCxPQUF2QixDQUErQjFJLEtBQUttTSxRQUFwQyxLQUFpRCxDQUFDLENBQXJELEVBQXdEO0FBQ3RELGdCQUFHcE4sR0FBR3FOLFlBQUgsY0FBMkJwTSxLQUFLbU0sUUFBaEMsQ0FBSCxFQUFnRDtBQUM5QztBQUNEOztBQUVEcE4sZUFBR3NOLFlBQUgsY0FBMkJyTSxLQUFLbU0sUUFBaEMsRUFBNENwTixHQUFHd0QsWUFBSCxDQUFnQnZDLEtBQUttTSxRQUFyQixLQUFrQ25NLEtBQUttTSxRQUFuRjtBQUNBcE4sZUFBR3VOLGVBQUgsQ0FBbUJ0TSxLQUFLbU0sUUFBeEI7QUFDRDtBQUNGOztBQUVELGFBQUksSUFBSWxMLEtBQUksQ0FBUixFQUFXQyxLQUFJbkMsR0FBR3lFLFFBQUgsQ0FBWTVCLE1BQS9CLEVBQXVDWCxLQUFJQyxFQUEzQyxFQUE4Q0QsSUFBOUMsRUFBbUQ7QUFDakQsY0FBSXdDLFFBQVExRSxHQUFHeUUsUUFBSCxDQUFZdkMsRUFBWixDQUFaOztBQUVBLGNBQUcsQ0FBQ3dDLE1BQU12RCxPQUFWLEVBQW1CO0FBQ2pCK0wsb0JBQVF4SSxLQUFSO0FBQ0Q7QUFDRjtBQUNGLE9BckJEOztBQXVCQXdJLGNBQVEsS0FBS2xOLEVBQWI7QUFDRDs7QUFFRDs7Ozs7Ozs7a0NBS2M7QUFDWixXQUFJLElBQUlrQyxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLeUssUUFBTCxDQUFjL0osTUFBakMsRUFBeUNYLElBQUlDLENBQTdDLEVBQWdERCxHQUFoRCxFQUFxRDtBQUNuRCxZQUFJc0wsS0FBSyxLQUFLWixRQUFMLENBQWMxSyxDQUFkLENBQVQ7O0FBRUEsU0FBQyxRQUFRdUwsSUFBUixDQUFhRCxFQUFiLENBQUQsS0FBc0JBLEtBQUssUUFBUUEsRUFBbkM7O0FBRUEsWUFBRyxDQUFDLEtBQUt4TixFQUFMLENBQVFxTixZQUFSLENBQXFCRyxFQUFyQixDQUFKLEVBQThCO0FBQzVCLGVBQUt4TixFQUFMLENBQVFzTixZQUFSLENBQXFCRSxFQUFyQixFQUF5QixFQUF6QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDs7Ozs7Ozs7bUNBS2U7QUFDYixVQUFJRSxVQUFVLGdCQUFNN00sZUFBTixDQUFzQixLQUFLYixFQUEzQixDQUFkOztBQUVBLFVBQUcsQ0FBQzBOLFFBQVE3SyxNQUFaLEVBQW9CO0FBQ2xCO0FBQ0Q7O0FBRUQsVUFBSXNJLFlBQVksS0FBS3ZLLFFBQUwsS0FBa0I4TSxRQUFRLENBQVIsQ0FBbEM7QUFDQSxVQUFJQyxpQkFBaUIsSUFBckI7O0FBRUEsV0FBSSxJQUFJekwsSUFBSSxDQUFSLEVBQVdDLElBQUl1TCxRQUFRN0ssTUFBM0IsRUFBbUNYLElBQUlDLENBQXZDLEVBQTBDRCxHQUExQyxFQUErQztBQUM3QyxZQUFJb0osU0FBU29DLFFBQVF4TCxDQUFSLENBQWI7O0FBRUEsWUFBRyxDQUFDb0osT0FBT25LLE9BQVAsQ0FBZWlGLFdBQWYsQ0FBMkJ3SCxXQUEvQixFQUE0QztBQUMxQ0QsMkJBQWlCckMsTUFBakI7O0FBRUE7QUFDRDtBQUNGOztBQUVELFdBQUtyQixXQUFMLENBQWlCa0IsU0FBakIsR0FBNkJBLFNBQTdCO0FBQ0FBLG1CQUFhLEtBQUswQyxRQUFMLEVBQWI7O0FBRUEsVUFBRyxLQUFLekgsV0FBTCxDQUFpQndILFdBQXBCLEVBQWlDO0FBQy9CLGFBQUtyRCxxQkFBTCxHQUE2Qm9ELGVBQWV4TSxPQUE1QztBQUNEOztBQUVELFdBQUs4SixnQkFBTCxHQUF3QjBDLGNBQXhCO0FBQ0EsV0FBSy9NLFFBQUwsR0FBZ0I4TSxRQUFRLENBQVIsQ0FBaEI7QUFDQSxXQUFLdEQsU0FBTCxHQUFpQnNELE9BQWpCO0FBQ0EsV0FBS3ROLEtBQUwsQ0FBV1EsUUFBWCxHQUFzQixLQUFLcUssZ0JBQUwsQ0FBc0I5SixPQUF0QixDQUE4QmYsS0FBcEQ7QUFDQSxPQUFDLEtBQUs0SixhQUFOLElBQXVCLEtBQUtwSixRQUFMLENBQWNPLE9BQWQsQ0FBc0IyTSxVQUF0QixDQUFpQyxLQUFLOU4sRUFBdEMsQ0FBdkI7QUFDQThELGFBQU9pSyxjQUFQLENBQXNCLEtBQUszTixLQUEzQixFQUFrQyxLQUFLUSxRQUFMLENBQWNPLE9BQWQsQ0FBc0JvTCxPQUF4RDtBQUNEOztBQUVEOzs7Ozs7Ozs7K0JBTVd2TSxFLEVBQUk7QUFDYixXQUFLbUssVUFBTCxDQUFnQi9JLElBQWhCLENBQXFCcEIsRUFBckI7QUFDRDs7QUFFRDs7Ozs7Ozs7O2tDQU1jQSxFLEVBQUk7QUFDaEIsV0FBSSxJQUFJa0MsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS2dJLFVBQUwsQ0FBZ0J0SCxNQUFuQyxFQUEyQ1gsSUFBSUMsQ0FBL0MsRUFBa0RELEdBQWxELEVBQXVEO0FBQ3JELFlBQUl3QyxRQUFRLEtBQUt5RixVQUFMLENBQWdCakksQ0FBaEIsQ0FBWjs7QUFFQSxZQUFHd0MsVUFBVTFFLEVBQWIsRUFBaUI7QUFDZixlQUFLbUssVUFBTCxDQUFnQi9DLE1BQWhCLENBQXVCbEYsQ0FBdkIsRUFBMEIsQ0FBMUI7QUFDQUE7QUFDQUM7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7MENBT3NCcUgsVSxFQUFZO0FBQ2hDLGFBQU9BLFVBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OztzQ0FPa0J2SSxJLEVBQU07QUFDdEIsVUFBSSxDQUFDNkMsT0FBT2hFLElBQVAsQ0FBWW1CLEtBQUsrTSxZQUFqQixFQUErQm5MLE1BQXBDLEVBQTRDO0FBQzFDLGVBQU8sSUFBUDtBQUNEOztBQUVELFdBQUssSUFBSWIsQ0FBVCxJQUFjZixLQUFLK00sWUFBbkIsRUFBaUM7QUFDL0IsWUFBRyxDQUFDL00sS0FBSytNLFlBQUwsQ0FBa0IvTCxjQUFsQixDQUFpQ0QsQ0FBakMsQ0FBSixFQUF5QztBQUN2QztBQUNEOztBQUVELFlBQUlJLE9BQU9uQixLQUFLK00sWUFBTCxDQUFrQmhNLENBQWxCLENBQVg7QUFDQSxZQUFJWSxRQUFRLGdCQUFNcUwsaUJBQU4sQ0FBd0I3TCxLQUFLdEMsSUFBN0IsRUFBbUNzQyxLQUFLRSxTQUFMLENBQWVpSyxPQUFsRCxDQUFaOztBQUVBLFlBQUcsQ0FBQyxnQkFBTTJCLG9CQUFOLENBQTJCdEwsS0FBM0IsRUFBa0NSLEtBQUtRLEtBQXZDLEVBQThDUixLQUFLK0wsSUFBbkQsRUFBeUQsZ0JBQU1BLElBQU4sQ0FBV3ZMLEtBQVgsQ0FBekQsQ0FBSixFQUFpRjtBQUMvRSxpQkFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O2dEQVM0QjNCLEksRUFBTW5CLEksRUFBTThDLEssRUFBTztBQUM3QyxVQUFJUixPQUFPLEtBQUtnTSxpQkFBTCxDQUF1Qm5OLElBQXZCLEVBQTZCbkIsSUFBN0IsQ0FBWDs7QUFFQSxVQUFHLENBQUNzQyxJQUFKLEVBQVU7QUFDUixlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPLENBQUMsZ0JBQU04TCxvQkFBTixDQUEyQnRMLEtBQTNCLEVBQWtDUixLQUFLUSxLQUF2QyxFQUE4Q1IsS0FBSytMLElBQW5ELEVBQXlELGdCQUFNQSxJQUFOLENBQVd2TCxLQUFYLENBQXpELENBQVI7QUFDRDs7QUFFRDs7Ozs7Ozs7OzsrQkFPVzNCLEksRUFBTTtBQUFBOztBQUNmLFVBQUlvTixVQUFVLENBQWQ7QUFDQSxVQUFJQyx1QkFBSjtBQUNBLFVBQUk5RSxtQkFBSjs7QUFFQSxVQUFJMUgsTUFBTWIsS0FBS3NOLFlBQUwsQ0FBa0JoTixPQUFsQixDQUEwQjZILHFCQUExQixFQUFpRCxVQUFDb0YsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDbkVKOztBQUVBLFlBQUlLLGlCQUFKO0FBQ0EsWUFBSTNMLG1CQUFKO0FBQ0EsWUFBSTRMLG1CQUFtQixFQUF2QjtBQUNBLFlBQUlDLGFBQWEzTixLQUFLUCxXQUFMLENBQWlCbU8scUJBQWpCLENBQXVDSixDQUF2QyxDQUFqQjs7QUFFQSx3QkFBTWpQLFlBQU4sR0FBcUIsRUFBRXlCLE1BQU1BLElBQVIsRUFBYzZOLE1BQU0sRUFBcEIsRUFBckI7O0FBRUEsWUFBSTtBQUNGSixxQkFBVyxPQUFLdEksV0FBTCxDQUFpQjJJLEtBQWpCLENBQXVCLE9BQUt4RSxxQkFBTCxDQUEyQm5LLEtBQWxELEVBQXlEd08sVUFBekQsQ0FBWDtBQUNELFNBRkQsQ0FHQSxPQUFPSSxHQUFQLEVBQVk7QUFDVixjQUFJQywrREFBNkRoTyxLQUFLc04sWUFBdEU7O0FBRUEsY0FBRyxDQUFDLGdCQUFNeFAsT0FBTixDQUFjRSxvQkFBbEIsRUFBd0M7QUFDdEMsZ0JBQUcsZ0JBQU1GLE9BQU4sQ0FBY0csS0FBakIsRUFBd0I7QUFDdEJnRyxzQkFBUUMsSUFBUixDQUFhOEosT0FBYjtBQUNBL0osc0JBQVFDLElBQVIsQ0FBYTZKLElBQUlFLEtBQWpCO0FBQ0Q7O0FBRURSLHVCQUFXbE0sU0FBWDtBQUNELFdBUEQsTUFRSztBQUNIMEMsb0JBQVFpSyxLQUFSLENBQWNGLE9BQWQ7QUFDQSxrQkFBTUQsR0FBTjtBQUNEO0FBQ0Y7O0FBRURqTSxxQkFBYSxnQkFBTXZELFlBQU4sR0FBb0IsZ0JBQU1BLFlBQU4sQ0FBbUJzUCxJQUF2QyxHQUE2QyxFQUExRDtBQUNBLHdCQUFNdFAsWUFBTixDQUFtQnNQLElBQW5CLEdBQTBCLElBQTFCO0FBQ0Esd0JBQU10UCxZQUFOLEdBQXFCLElBQXJCOztBQUVBLGFBQUksSUFBSTBDLElBQUlhLFdBQVdGLE1BQVgsR0FBb0IsQ0FBaEMsRUFBbUNYLEtBQUssQ0FBeEMsRUFBMkNBLEdBQTNDLEVBQWdEO0FBQzlDLGNBQUlnSyxPQUFPbkosV0FBV2IsQ0FBWCxDQUFYO0FBQ0EsY0FBSWtOLE9BQVVsRCxLQUFLNUosU0FBTCxDQUFlaUssT0FBZixDQUF1QmxNLE1BQWpDLFNBQTJDNkwsS0FBS21ELFVBQXBEOztBQUVBLGNBQUduRCxLQUFLb0QsVUFBUixFQUFvQjtBQUNsQjtBQUNEOztBQUVELGNBQUdYLGlCQUFpQlMsSUFBakIsQ0FBSCxFQUEyQjtBQUN6QjtBQUNEOztBQUVELGNBQUlHLGNBQWMsZ0JBQU10QixpQkFBTixDQUF3Qi9CLEtBQUt3QixPQUE3QixFQUFzQ3hCLEtBQUs1SixTQUFMLENBQWVpSyxPQUFyRCxDQUFsQjtBQUNBLGNBQUlpRCxnQkFBZ0J2TyxLQUFLcUosYUFBTCxJQUFzQnJKLEtBQUtQLFdBQS9DOztBQUVBLGNBQUcsZ0JBQU0rTyxZQUFOLENBQW1CRixXQUFuQixLQUFtQ3JELEtBQUs1SixTQUFMLEtBQW1Ca04sY0FBY2pGLHFCQUF2RSxFQUE4RjtBQUM1RjtBQUNEOztBQUVELGNBQUltRixPQUFPeEQsS0FBSzVKLFNBQUwsQ0FBZXFOLGNBQWYsQ0FBOEJ6RCxLQUFLcE0sSUFBbkMsRUFBeUNtQixJQUF6QyxDQUFYO0FBQ0EsY0FBSTJCLFFBQVEsZ0JBQU1xTCxpQkFBTixDQUF3Qi9CLEtBQUtwTSxJQUE3QixFQUFtQ29NLEtBQUs1SixTQUFMLENBQWVpSyxPQUFsRCxDQUFaOztBQUVBLGNBQUcsQ0FBQ21ELElBQUosRUFBVTtBQUNSeEQsaUJBQUs1SixTQUFMLENBQWVzTixNQUFmLENBQXNCMUQsS0FBS3BNLElBQTNCLEVBQWlDLEVBQUVtQixNQUFNQSxJQUFSLEVBQWpDO0FBQ0Q7O0FBRURpTCxlQUFLNUosU0FBTCxDQUFldU4saUJBQWYsQ0FBaUM1TyxJQUFqQyxFQUF1Q2lMLEtBQUtwTSxJQUE1QyxFQUFrRDhDLEtBQWxEO0FBQ0ErTCwyQkFBaUJTLElBQWpCLElBQXlCLElBQXpCO0FBQ0Q7O0FBRURULDJCQUFtQixJQUFuQjtBQUNBNUwscUJBQWEsSUFBYjs7QUFFQSxZQUFHOUIsZ0JBQWdCNk8sSUFBbkIsRUFBeUI7QUFDdkJ0Ryx1QkFBYWdGLENBQWI7QUFDQUYsMkJBQWlCSSxRQUFqQjs7QUFFQSxpQkFBTyxnQkFBTXFCLGtCQUFOLENBQXlCckIsUUFBekIsQ0FBUDtBQUNEOztBQUVELFlBQUcsUUFBT0EsUUFBUCx5Q0FBT0EsUUFBUCxNQUFtQixRQUF0QixFQUFnQztBQUM5QixjQUFJO0FBQ0YsbUJBQU9zQixLQUFLQyxTQUFMLENBQWV2QixRQUFmLENBQVA7QUFDRCxXQUZELENBR0EsT0FBTXdCLENBQU4sRUFBUztBQUNQLG1CQUFPeEIsUUFBUDtBQUNEO0FBQ0Y7O0FBRUQsZUFBT0EsUUFBUDtBQUNELE9BcEZTLENBQVY7O0FBc0ZBLFVBQUd6TixnQkFBZ0I2TyxJQUFuQixFQUF5QjtBQUN2QixZQUFJbE4sUUFBUWQsR0FBWjtBQUNBLFlBQUlxTyxxQkFBcUIsS0FBekI7O0FBRUEsWUFBRzlCLE9BQUgsRUFBWTtBQUNWcE4sZUFBS21QLGFBQUwsR0FBcUIsSUFBckI7QUFDRDs7QUFFRCxZQUFHL0IsV0FBVyxDQUFYLElBQWdCN0UsVUFBaEIsSUFBOEJ2SSxLQUFLc04sWUFBTCxJQUFxQi9FLFVBQXRELEVBQWtFO0FBQ2hFNUcsa0JBQVEwTCxjQUFSO0FBQ0Q7O0FBRUQsWUFBSStCLGlCQUFpQnBQLEtBQUttTSxRQUFMLENBQWM3TCxPQUFkLENBQXNCLGdCQUF0QixFQUF3QyxJQUF4QyxDQUFyQjs7QUFFQSxZQUFHOE8sa0JBQWtCcFAsS0FBS21NLFFBQTFCLEVBQW9DO0FBQ2xDK0MsK0JBQXFCLElBQXJCO0FBQ0F2TixrQkFBUSxDQUFDLENBQUNBLEtBQVY7QUFDRDs7QUFFRCxZQUFHM0IsS0FBS3FQLGFBQVIsRUFBdUI7QUFDckIsY0FBSWhPLFlBQVlyQixLQUFLcVAsYUFBckI7O0FBRUFoTyxvQkFBVWlPLHdCQUFWLEdBQXFDLElBQXJDO0FBQ0FqTyxvQkFBVXdJLEtBQVYsQ0FBZ0IsZ0JBQU0wRixXQUFOLENBQWtCSCxjQUFsQixDQUFoQixJQUFxRHpOLEtBQXJEO0FBQ0FOLG9CQUFVaU8sd0JBQVYsR0FBcUMsS0FBckM7O0FBRUEsY0FBSWpPLFVBQVV1SCxZQUFkLEVBQTRCO0FBQzFCLDRCQUFNakksT0FBTixDQUFjLFlBQU07QUFDbEJVLHdCQUFVd0ksS0FBVixDQUFnQjJGLFNBQWhCLElBQTZCbk8sVUFBVXdJLEtBQVYsQ0FBZ0IyRixTQUFoQixDQUEwQjVFLE9BQTFCLENBQWtDLEVBQUVsRyxLQUFLMEssY0FBUCxFQUF1QnpOLE9BQU9BLEtBQTlCLEVBQWxDLENBQTdCO0FBQ0FOLHdCQUFVb08sT0FBVixDQUFrQkwsY0FBbEIsRUFBa0N6TixLQUFsQzs7QUFFQSxrQkFBSStDLE1BQU0sZ0JBQU02SyxXQUFOLENBQWtCSCxjQUFsQixDQUFWO0FBQ0Esa0JBQUlNLFdBQVdoTCxJQUFJLENBQUosRUFBT2lMLFdBQVAsS0FBdUJqTCxJQUFJcUIsS0FBSixDQUFVLENBQVYsQ0FBdEM7QUFDQSxrQkFBSTZKLFNBQVMsWUFBWUYsUUFBekI7QUFDQSxrQkFBSUcsV0FBVyxjQUFjSCxRQUE3Qjs7QUFFQXJPLHdCQUFVd0ksS0FBVixDQUFnQmdHLFFBQWhCLEtBQTZCeE8sVUFBVXdJLEtBQVYsQ0FBZ0JnRyxRQUFoQixFQUEwQmpGLE9BQTFCLENBQWtDakosS0FBbEMsQ0FBN0I7O0FBRUEsa0JBQUksT0FBT04sVUFBVXVPLE1BQVYsQ0FBUCxJQUE0QixVQUFoQyxFQUE0QztBQUMxQ3ZPLDBCQUFVdU8sTUFBVixFQUFrQmpPLEtBQWxCO0FBQ0Q7QUFDRixhQWREO0FBZUQ7QUFDRixTQXhCRCxNQXlCSyxJQUFHdU4sa0JBQUgsRUFBdUI7QUFDMUIsY0FBSVksVUFBVTlQLEtBQUsrUCxTQUFuQjtBQUNBLGNBQUlDLE9BQU8sZ0JBQU1ULFdBQU4sQ0FBa0JILGNBQWxCLENBQVg7O0FBRUF6TixrQkFBT21PLFFBQVF6RCxZQUFSLENBQXFCMkQsSUFBckIsRUFBMkIsTUFBM0IsQ0FBUCxHQUEyQ0YsUUFBUXhELGVBQVIsQ0FBd0IwRCxJQUF4QixDQUEzQztBQUNEO0FBQ0Y7O0FBRUQsYUFBT25QLEdBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OztxQ0FPaUJoQyxJLEVBQThCO0FBQUEsVUFBeEJvUixjQUF3Qix1RUFBUCxLQUFPOztBQUM3QyxVQUFJOVEsUUFBUSxLQUFLbU0sT0FBakI7QUFDQSxVQUFJeEssUUFBUSxFQUFaOztBQUVBLFVBQUcsQ0FBQ21QLGNBQUosRUFBb0I7QUFDbEIsWUFBSUMsWUFBWSxFQUFoQjs7QUFFQSxhQUFLLElBQUlqUCxJQUFJLENBQVIsRUFBV0MsSUFBSXJDLEtBQUsrQyxNQUF6QixFQUFpQ1gsSUFBSUMsQ0FBckMsRUFBd0NELEdBQXhDLEVBQTZDO0FBQzNDLGNBQUl5RCxNQUFNN0YsS0FBS29DLENBQUwsQ0FBVjtBQUNBLGNBQUlVLGNBQUo7O0FBRUF1TyxtREFBZ0JBLFNBQWhCLElBQTJCeEwsR0FBM0I7QUFDQS9DLGtCQUFRLGdCQUFNcUwsaUJBQU4sQ0FBd0JrRCxTQUF4QixFQUFtQy9RLEtBQW5DLENBQVI7QUFDQTJCLGdCQUFNWCxJQUFOLENBQVcsRUFBRXRCLE1BQU1xUixTQUFSLEVBQW1Cdk8sT0FBT0EsS0FBMUIsRUFBWDtBQUNEO0FBQ0YsT0FYRCxNQVlLO0FBQ0hiLGNBQU1YLElBQU4sQ0FBVyxFQUFFdEIsTUFBTUEsSUFBUixFQUFjOEMsT0FBTyxnQkFBTXFMLGlCQUFOLENBQXdCbk8sSUFBeEIsRUFBOEJNLEtBQTlCLENBQXJCLEVBQVg7QUFDRDs7QUFFRCxVQUFJZ1IsY0FBY3JQLE1BQU1jLE1BQXhCOztBQUVBLFVBQUl3TyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ04sT0FBRCxFQUFhO0FBQzVCLFlBQUl6TyxZQUFZeU8sUUFBUTVQLE9BQXhCOztBQUVBLGFBQUssSUFBSXFOLElBQUksQ0FBYixFQUFnQkEsSUFBSTRDLFdBQXBCLEVBQWlDNUMsR0FBakMsRUFBc0M7QUFDcEMsY0FBSXBNLE9BQU9MLE1BQU15TSxDQUFOLENBQVg7QUFDQSxjQUFJdEMsT0FBTzVKLFVBQVVnUCxTQUFWLENBQW9CbFAsS0FBS3RDLElBQXpCLENBQVg7O0FBRUEsY0FBSSxDQUFDb00sSUFBRCxJQUFTLENBQUNBLEtBQUtxRixNQUFuQixFQUEyQjtBQUN6QjtBQUNEOztBQUVELGVBQUssSUFBSXZQLElBQUksQ0FBUixFQUFXd1AsSUFBSXRGLEtBQUtxRixNQUFMLENBQVkxTyxNQUFoQyxFQUF3Q2IsSUFBSXdQLENBQTVDLEVBQStDeFAsR0FBL0MsRUFBb0Q7QUFDbEQsZ0JBQUkwTixPQUFPeEQsS0FBS3FGLE1BQUwsQ0FBWXZQLENBQVosQ0FBWDs7QUFFQSxnQkFBR00sVUFBVW1QLDJCQUFWLENBQXNDL0IsS0FBS3pPLElBQTNDLEVBQWlEbUIsS0FBS3RDLElBQXRELEVBQTREc0MsS0FBS1EsS0FBakUsQ0FBSCxFQUE0RTtBQUMxRU4sd0JBQVU0SCxjQUFWLEdBQTJCLElBQTNCO0FBQ0E1SCx3QkFBVW9QLGNBQVYsQ0FBeUJoQyxLQUFLek8sSUFBOUI7O0FBRUEsbUJBQUksSUFBSTBRLEVBQVIsSUFBY2pDLEtBQUt6TyxJQUFMLENBQVUrTSxZQUF4QixFQUFzQztBQUNwQyxvQkFBRyxDQUFDMEIsS0FBS3pPLElBQUwsQ0FBVStNLFlBQVYsQ0FBdUIvTCxjQUF2QixDQUFzQzBQLEVBQXRDLENBQUosRUFBK0M7QUFDN0M7QUFDRDs7QUFFRCxvQkFBSUMsUUFBUWxDLEtBQUt6TyxJQUFMLENBQVUrTSxZQUFWLENBQXVCMkQsRUFBdkIsQ0FBWjtBQUNBLG9CQUFJL08sU0FBUSxnQkFBTXFMLGlCQUFOLENBQXdCMkQsTUFBTTlSLElBQTlCLEVBQW9DOFIsTUFBTXRQLFNBQU4sQ0FBZ0JpSyxPQUFwRCxDQUFaOztBQUVBcUYsc0JBQU10UCxTQUFOLENBQWdCdU4saUJBQWhCLENBQWtDSCxLQUFLek8sSUFBdkMsRUFBNkMyUSxNQUFNOVIsSUFBbkQsRUFBeUQ4QyxNQUF6RDtBQUNEOztBQUVETix3QkFBVTRILGNBQVYsR0FBMkIsSUFBM0I7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsZUFBTzVILFNBQVA7QUFDRCxPQW5DRDs7QUFxQ0EsVUFBSW9NLFdBQVcsU0FBWEEsUUFBVyxDQUFDbkssUUFBRCxFQUFjO0FBQzNCLGFBQUssSUFBSXJDLE1BQUksQ0FBUixFQUFXQyxNQUFJb0MsU0FBUzFCLE1BQTdCLEVBQXFDWCxNQUFJQyxHQUF6QyxFQUE0Q0QsS0FBNUMsRUFBaUQ7QUFDL0MsY0FBSUksWUFBWStPLFdBQVc5TSxTQUFTckMsR0FBVCxDQUFYLENBQWhCOztBQUVBd00sbUJBQVNwTSxVQUFVNkgsVUFBbkI7QUFDRDtBQUNGLE9BTkQ7O0FBUUFrSCxpQkFBVyxLQUFLclIsRUFBaEI7QUFDQTBPLGVBQVMsS0FBS3ZFLFVBQWQ7QUFDRDs7Ozs7QUFFRDs7Ozs7Ozs7cUNBUWlCckssSSxFQUFNOEMsSyxFQUEwQjtBQUFBOztBQUFBLFVBQW5CUCxTQUFtQix1RUFBUCxLQUFPOztBQUMvQyxVQUFJNkosT0FBTyxLQUFLb0YsU0FBTCxDQUFleFIsSUFBZixDQUFYOztBQUVBLFVBQUkrUixTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsR0FBRCxFQUFNcEUsT0FBTixFQUFrQjtBQUM3QixhQUFJLElBQUkxTCxDQUFSLElBQWE4UCxHQUFiLEVBQWtCO0FBQ2hCLGNBQUcsQ0FBQ0EsSUFBSTdQLGNBQUosQ0FBbUJELENBQW5CLENBQUQsSUFBMEJBLEtBQUssUUFBbEMsRUFBNEM7QUFDMUM7QUFDRDs7QUFFRCxjQUFJK1AsUUFBUSxHQUFHOUUsTUFBSCxDQUFVUyxPQUFWLEVBQW1CLENBQUMxTCxDQUFELENBQW5CLENBQVo7QUFDQSxjQUFJZ1EsU0FBU0QsTUFBTS9LLEtBQU4sRUFBYjtBQUNBLGNBQUlpTCxhQUFhLEtBQWpCO0FBQ0EsY0FBSXRQLE1BQU1tUCxJQUFJOVAsQ0FBSixDQUFWO0FBQ0EsY0FBSWtRLGVBQUo7O0FBRUFGLGlCQUFPRyxLQUFQO0FBQ0FELG1CQUFTLGdCQUFNRSxpQkFBTixDQUF3QkosTUFBeEIsRUFBZ0NwUCxLQUFoQyxDQUFUOztBQUVBLGNBQUdBLFNBQVMsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUF6QixJQUFxQyxDQUFDc1AsTUFBekMsRUFBaUQ7QUFDL0NELHlCQUFhLElBQWI7QUFDRDs7QUFFRCxjQUFHdFAsT0FBTyxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE1BQWMsUUFBeEIsRUFBa0M7QUFDaENrUCxtQkFBT2xQLEdBQVAsRUFBWW9QLEtBQVo7QUFDRDs7QUFFRCxpQkFBS00sZ0JBQUwsQ0FBc0JOLEtBQXRCLEVBQTZCLElBQTdCOztBQUVBLGNBQUduUCxVQUFVLElBQVYsSUFBa0IsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFsQyxJQUE4QyxDQUFDc1AsTUFBbEQsRUFBMEQ7QUFDeEQsbUJBQUtJLFFBQUwsQ0FBY1AsS0FBZDtBQUNBRSwwQkFBYyxnQkFBTU0sb0JBQU4sQ0FBMkJQLE1BQTNCLEVBQW1DcFAsS0FBbkMsQ0FBZDtBQUNEO0FBQ0Y7QUFDRixPQTlCRDs7QUFnQ0FzSixjQUFRMkYsT0FBTzNGLElBQVAsRUFBYSxHQUFHZSxNQUFILENBQVVuTixJQUFWLENBQWIsQ0FBUjtBQUNBLFdBQUt1UyxnQkFBTCxDQUFzQnZTLElBQXRCOztBQUVBLFVBQUd1QyxTQUFILEVBQWM7QUFDWixhQUFLaVEsUUFBTCxDQUFjeFMsSUFBZDtBQUNBdUMscUJBQWEsZ0JBQU1rUSxvQkFBTixDQUEyQnpTLElBQTNCLEVBQWlDLEtBQUt5TSxPQUF0QyxDQUFiO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7b0NBUWdCdEwsSSxFQUFNakIsRSxFQUFJa1EsQyxFQUFHO0FBQzNCLFVBQUkxRyxhQUFhTCxnQkFBZ0JxSixJQUFoQixDQUFxQnZSLEtBQUtzTixZQUExQixDQUFqQjs7QUFFQSxVQUFHLENBQUMvRSxVQUFKLEVBQWdCO0FBQ2Q7QUFDRDs7QUFFRCxPQUFDeEQsT0FBT3lNLEtBQVIsS0FBa0J6TSxPQUFPeU0sS0FBUCxHQUFldkMsQ0FBakM7O0FBRUEsV0FBS25HLGlCQUFMLEdBQXlCO0FBQ3ZCL0osWUFBSUEsRUFEbUI7QUFFdkJzQyxtQkFBVyxJQUZZO0FBR3ZCbVEsZUFBT3ZDLENBSGdCO0FBSXZCalAsY0FBTUE7QUFKaUIsT0FBekI7O0FBT0EsV0FBS2lKLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxXQUFLOUQsV0FBTCxDQUFpQjJJLEtBQWpCLENBQXVCLEtBQUt4RSxxQkFBTCxDQUEyQm5LLEtBQWxELEVBQXlEb0osV0FBVyxDQUFYLENBQXpEO0FBQ0EsV0FBS08saUJBQUwsR0FBeUIsSUFBekI7QUFDRDs7QUFFRDs7Ozs7Ozs7O21DQU1lOUksSSxFQUFNO0FBQ25CLFVBQUcsS0FBS3lSLGlCQUFMLENBQXVCelIsSUFBdkIsQ0FBSCxFQUFpQztBQUMvQkEsYUFBTUEsZ0JBQWdCNk8sSUFBakIsR0FBd0IsT0FBeEIsR0FBaUMsV0FBdEMsSUFBcUQsS0FBS3BFLFVBQUwsQ0FBZ0J6SyxJQUFoQixDQUFyRDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7OzBDQVFzQkEsSSxFQUFNakIsRSxFQUFJMlMsVyxFQUFhO0FBQzNDLFVBQUdwSixpQkFBaUJJLE9BQWpCLENBQXlCMUksS0FBS21NLFFBQTlCLEtBQTJDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaEQ7QUFDRDs7QUFFRCxXQUFLNUIsZ0JBQUwsQ0FBc0J2SyxJQUF0QixFQUE0QmpCLEVBQTVCOztBQUVBLFVBQUk0UyxZQUFZM1IsS0FBS21NLFFBQUwsQ0FBYzdMLE9BQWQsQ0FBc0IsV0FBdEIsRUFBbUMsSUFBbkMsQ0FBaEI7QUFDQSxVQUFJNkwsV0FBVyxnQkFBTW9ELFdBQU4sQ0FBa0J2UCxLQUFLbU0sUUFBdkIsQ0FBZjtBQUNBLFVBQUk5SyxZQUFZcVEsY0FBYUEsV0FBYixHQUEwQixJQUExQzs7QUFFQSxVQUFHQyxhQUFhM1IsS0FBS21NLFFBQXJCLEVBQStCO0FBQzdCLFlBQUduTSxLQUFLNFIsT0FBUixFQUFpQjtBQUNmO0FBQ0Q7O0FBRUQsWUFBSUMsVUFBVSxJQUFJLGdCQUFNM0ssWUFBVixDQUF1QnlLLFNBQXZCLEVBQWtDNVMsRUFBbEMsRUFBc0NzQyxTQUF0QyxDQUFkOztBQUVBLFlBQUdyQixLQUFLc04sWUFBUixFQUFzQjtBQUNwQnVFLGtCQUFRcEQsSUFBUixDQUFhLFVBQUNRLENBQUQsRUFBTztBQUNsQjVOLHNCQUFVeVEsZUFBVixDQUEwQjlSLElBQTFCLEVBQWdDakIsRUFBaEMsRUFBb0NrUSxDQUFwQztBQUNELFdBRkQ7QUFHRDs7QUFFRGpQLGFBQUs0UixPQUFMLEdBQWVDLE9BQWY7QUFDQTlTLFdBQUdzTixZQUFILENBQWdCck0sS0FBS21NLFFBQXJCLEVBQStCLGdCQUFNMkMsa0JBQU4sQ0FBeUIrQyxPQUF6QixDQUEvQjs7QUFFQSxZQUFHSCxXQUFILEVBQWdCO0FBQ2QsZUFBS3BDLHdCQUFMLEdBQWdDLElBQWhDO0FBQ0EsZUFBS3pGLEtBQUwsQ0FBV3NDLFFBQVgsSUFBdUIwRixPQUF2QjtBQUNBLGVBQUt2Qyx3QkFBTCxHQUFnQyxLQUFoQztBQUNEOztBQUVEO0FBQ0Q7O0FBRUQsVUFBR29DLFdBQUgsRUFBZ0I7QUFDZDFSLGFBQUtxUCxhQUFMLEdBQXFCLElBQXJCO0FBQ0FyUCxhQUFLcUosYUFBTCxHQUFxQmhJLFNBQXJCO0FBQ0Q7O0FBRUR0QyxTQUFHc04sWUFBSCxDQUFnQnJNLEtBQUttTSxRQUFyQixFQUErQjlLLFVBQVVvSixVQUFWLENBQXFCekssSUFBckIsQ0FBL0I7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7cUNBUWlCQSxJLEVBQU1qQixFLEVBQUk7QUFDekIsVUFBR2lCLEtBQUsrUixhQUFSLEVBQXVCO0FBQ3JCLGVBQU8sS0FBUDtBQUNEOztBQUVEL1IsV0FBS3NOLFlBQUwsR0FBb0J0TixLQUFNQSxnQkFBZ0I2TyxJQUFqQixHQUF3QixPQUF4QixHQUFpQyxXQUF0QyxDQUFwQjtBQUNBN08sV0FBSytNLFlBQUwsR0FBb0IsRUFBcEI7QUFDQS9NLFdBQUtxSixhQUFMLEdBQXFCLElBQXJCO0FBQ0FySixXQUFLcVAsYUFBTCxHQUFxQixJQUFyQjtBQUNBclAsV0FBSzRSLE9BQUwsR0FBZSxJQUFmO0FBQ0E1UixXQUFLbVAsYUFBTCxHQUFxQixLQUFyQjtBQUNBblAsV0FBSytSLGFBQUwsR0FBcUIsSUFBckI7QUFDQS9SLFdBQUtQLFdBQUwsR0FBbUIsSUFBbkI7QUFDQU8sV0FBSytQLFNBQUwsR0FBaUJoUixFQUFqQjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs0Q0FPd0JBLEUsRUFBd0I7QUFBQSxVQUFwQjJTLFdBQW9CLHVFQUFOLElBQU07O0FBQzlDLFdBQUssSUFBSXpRLElBQUksQ0FBUixFQUFXNEksUUFBUTlLLEdBQUdtTixVQUF0QixFQUFrQ2hMLElBQUkySSxNQUFNakksTUFBakQsRUFBeURYLElBQUlDLENBQTdELEVBQWdFRCxHQUFoRSxFQUFxRTtBQUNuRSxhQUFLK1EscUJBQUwsQ0FBMkJuSSxNQUFNNUksQ0FBTixDQUEzQixFQUFxQ2xDLEVBQXJDLEVBQXlDMlMsV0FBekM7QUFDRDtBQUNGOztBQUVEOzs7Ozs7Ozt5Q0FLcUI7QUFBQTs7QUFDbkIsVUFBSU8sa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDdk4sR0FBRCxFQUFNL0MsS0FBTixFQUFtQztBQUFBLFlBQXRCUCxTQUFzQix1RUFBVixLQUFVOztBQUN2RCxZQUFHLE9BQUtrTyx3QkFBUixFQUFrQztBQUNoQztBQUNEOztBQUVELFlBQUl0UCxPQUFPLE9BQUtqQixFQUFMLENBQVFtVCxnQkFBUixDQUF5QnhOLEdBQXpCLENBQVg7O0FBRUEsWUFBRzFFLElBQUgsRUFBUztBQUNQLGNBQUdBLEtBQUs0UixPQUFSLEVBQWlCO0FBQ2Y1UixpQkFBSzRSLE9BQUwsQ0FBYWhCLE1BQWI7QUFDQTVRLGlCQUFLNFIsT0FBTCxHQUFlLElBQWY7QUFDQTVSLGlCQUFLc04sWUFBTCxHQUFvQjNMLEtBQXBCO0FBQ0Q7O0FBRUQsY0FBRzNCLEtBQUttUCxhQUFSLEVBQXVCO0FBQ3JCLG1CQUFLeFAsUUFBTCxJQUFpQixPQUFLQSxRQUFMLENBQWNPLE9BQWQsQ0FBc0JvSixxQkFBdEIsQ0FBNEM2SSxlQUE1QyxDQUE0RCxDQUFDblMsSUFBRCxDQUE1RCxDQUFqQjtBQUNBQSxpQkFBS21QLGFBQUwsR0FBcUIsS0FBckI7QUFDQW5QLGlCQUFLc04sWUFBTCxHQUFvQjNMLEtBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxZQUFHUCxTQUFILEVBQWM7QUFDWixpQkFBS3JDLEVBQUwsQ0FBUXVOLGVBQVIsQ0FBd0I1SCxHQUF4QjtBQUNELFNBRkQsTUFHSyxJQUFHMUUsSUFBSCxFQUFTO0FBQ1pBLGVBQUt3SyxTQUFMLEdBQWlCN0ksS0FBakI7QUFDRCxTQUZJLE1BR0E7QUFDSCxpQkFBSzVDLEVBQUwsQ0FBUXNOLFlBQVIsQ0FBcUIzSCxHQUFyQixFQUEwQi9DLEtBQTFCO0FBQ0Q7QUFDRixPQTlCRDs7QUFnQ0EsV0FBS2tJLEtBQUwsR0FBYSxJQUFJdUksS0FBSixDQUFVLEtBQUtoSixPQUFmLEVBQXdCO0FBQ25DMkIsYUFBSyxhQUFDc0gsTUFBRCxFQUFTM04sR0FBVCxFQUFpQjtBQUNwQixjQUFHQSxPQUFPLFdBQVYsRUFBdUI7QUFDckIsbUJBQU8sSUFBUDtBQUNEOztBQUVELGlCQUFPMk4sT0FBTzNOLEdBQVAsQ0FBUDtBQUNELFNBUGtDO0FBUW5DNE4sYUFBSyxhQUFDRCxNQUFELEVBQVMzTixHQUFULEVBQWMvQyxLQUFkLEVBQXdCO0FBQzNCLGNBQUk0USxVQUFVLGdCQUFNalEsVUFBTixDQUFpQm9DLEdBQWpCLENBQWQ7O0FBRUEsY0FBRyxPQUFLcUgsaUJBQUwsQ0FBdUJyRCxPQUF2QixDQUErQjZKLE9BQS9CLEtBQTJDLENBQUMsQ0FBL0MsRUFBa0Q7QUFDaERBLG1DQUFxQkEsT0FBckI7O0FBRUEsZ0JBQUc1USxLQUFILEVBQVU7QUFDUixxQkFBSzVDLEVBQUwsQ0FBUXNOLFlBQVIsQ0FBcUIzSCxHQUFyQixFQUEwQi9DLEtBQTFCO0FBQ0QsYUFGRCxNQUdLO0FBQ0gscUJBQUs1QyxFQUFMLENBQVF1TixlQUFSLENBQXdCNUgsR0FBeEI7QUFDRDtBQUNGOztBQUVEMk4saUJBQU8zTixHQUFQLElBQWMvQyxLQUFkO0FBQ0FzUSwwQkFBZ0JNLE9BQWhCLEVBQXlCLGdCQUFNekQsa0JBQU4sQ0FBeUJuTixLQUF6QixDQUF6Qjs7QUFFQSxpQkFBTyxJQUFQO0FBQ0QsU0ExQmtDO0FBMkJuQzZRLHdCQUFnQix3QkFBQ0gsTUFBRCxFQUFTM04sR0FBVCxFQUFjL0MsS0FBZCxFQUF3QjtBQUN0QyxjQUFJNFEsVUFBVSxnQkFBTWpRLFVBQU4sQ0FBaUJvQyxHQUFqQixDQUFkOztBQUVBdU4sMEJBQWdCTSxPQUFoQixFQUF5QixnQkFBTXpELGtCQUFOLENBQXlCbk4sS0FBekIsQ0FBekIsRUFBMEQsSUFBMUQ7QUFDQSxpQkFBTzBRLE9BQU8zTixHQUFQLENBQVA7O0FBRUEsaUJBQU8sSUFBUDtBQUNEO0FBbENrQyxPQUF4QixDQUFiO0FBb0NEOztBQUVEOzs7Ozs7Ozs7Ozs4QkFRVW1NLEcsRUFBS3BFLE8sRUFBUztBQUFBOztBQUN0QixhQUFPLElBQUkyRixLQUFKLENBQVV2QixHQUFWLEVBQWU7QUFDcEI5RixhQUFLLGFBQUNzSCxNQUFELEVBQVMzTixHQUFULEVBQWlCO0FBQ3BCLGNBQUlBLE9BQU8sV0FBWCxFQUF3QjtBQUN0QixtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBSUEsT0FBTyxVQUFYLEVBQXVCO0FBQ3JCLG1CQUFPbU0sR0FBUDtBQUNEOztBQUVELGNBQUluTSxPQUFPLGFBQVgsRUFBMEI7QUFDeEI7QUFDRDs7QUFFRCxjQUFJQSxPQUFPLFFBQVgsRUFBcUI7QUFDbkIsbUJBQU8rSCxPQUFQO0FBQ0Q7O0FBRUQsY0FBRyxPQUFLeEQsY0FBUixFQUF3QjtBQUN0QixtQkFBT29KLE9BQU8zTixHQUFQLENBQVA7QUFDRDs7QUFFRCxjQUFHLE9BQUsrRCxhQUFMLENBQW1CL0QsR0FBbkIsQ0FBSCxFQUE0QjtBQUMxQixtQkFBTzJOLE9BQU8zTixHQUFQLENBQVA7QUFDRDs7QUFFRCxjQUFHLE9BQU8yTixPQUFPM04sR0FBUCxDQUFQLElBQXNCLFVBQXpCLEVBQXFDO0FBQ25DLGdCQUFJK04sYUFBYyxnQkFBTUMsb0JBQU4sQ0FBMkJMLE1BQTNCLEVBQW1DM04sR0FBbkMsQ0FBbEI7O0FBRUEsZ0JBQUcsQ0FBQyxnQkFBTWlPLGFBQU4sQ0FBb0JGLFVBQXBCLENBQUosRUFBcUM7QUFDbkNBLHlCQUFXL04sR0FBWCxJQUFrQixnQkFBTTRCLGVBQU4sQ0FBc0JtTSxXQUFXL04sR0FBWCxDQUF0QixFQUF1QytOLFdBQVdoVCxXQUFsRCxDQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsY0FBSSxnQkFBTWxCLFlBQVYsRUFBd0I7QUFDdEIsZ0JBQUlNLE9BQU8sR0FBR21OLE1BQUgsQ0FBVVMsT0FBVixFQUFtQixDQUFDL0gsR0FBRCxDQUFuQixDQUFYO0FBQ0EsZ0JBQUkySixhQUFhLEtBQWpCOztBQUVBLGdCQUFHLEVBQUUzSixPQUFPMk4sTUFBVCxDQUFILEVBQXFCO0FBQ25CQSxxQkFBTzNOLEdBQVAsSUFBY25ELFNBQWQ7QUFDRCxhQUZELE1BR0ssSUFBRyxDQUFDLGdCQUFNcVIsMkJBQU4sQ0FBa0NQLE1BQWxDLEVBQTBDM04sR0FBMUMsQ0FBSixFQUFvRDtBQUN2RDJKLDJCQUFhLElBQWI7QUFDRDs7QUFFRCxtQkFBS3dFLFVBQUwsQ0FBZ0IsZ0JBQU10VSxZQUFOLENBQW1Cc1AsSUFBbkMsRUFBeUNoUCxJQUF6QyxFQUErQzROLE9BQS9DLEVBQXdENEYsT0FBTzNOLEdBQVAsQ0FBeEQsRUFBcUUySixVQUFyRTs7QUFFQSxtQkFBT2dFLE9BQU8zTixHQUFQLENBQVA7QUFDRDs7QUFFRCxpQkFBTzJOLE9BQU8zTixHQUFQLENBQVA7QUFDRCxTQW5EbUI7QUFvRHBCNE4sYUFBSyxhQUFDRCxNQUFELEVBQVMzTixHQUFULEVBQWMvQyxLQUFkLEVBQXdCO0FBQzNCLGNBQUcsT0FBS3NILGNBQVIsRUFBd0I7QUFDdEJvSixtQkFBTzNOLEdBQVAsSUFBYy9DLEtBQWQ7O0FBRUEsbUJBQU8sSUFBUDtBQUNEOztBQUVELGNBQUcsT0FBSzhHLGFBQUwsQ0FBbUIvRCxHQUFuQixDQUFILEVBQTRCO0FBQzFCMk4sbUJBQU8zTixHQUFQLElBQWMvQyxLQUFkOztBQUVBLG1CQUFPLElBQVA7QUFDRDs7QUFFRCxjQUFJOUMsT0FBTyxHQUFHbU4sTUFBSCxDQUFVUyxPQUFWLEVBQW1CLENBQUMvSCxHQUFELENBQW5CLENBQVg7O0FBRUEsY0FBRyxPQUFLa0gsZ0JBQVIsRUFBMEI7QUFDeEJ5RyxtQkFBTzNOLEdBQVAsSUFBYyxPQUFLbUgsZUFBTCxDQUFxQmxLLEtBQXJCLEVBQTRCOUMsSUFBNUIsQ0FBZDtBQUNELFdBRkQsTUFHSztBQUNId1QsbUJBQU8zTixHQUFQLElBQWMvQyxLQUFkO0FBQ0Q7O0FBRUQsY0FBRyxnQkFBTXJELFdBQVQsRUFBc0I7QUFDcEIsbUJBQUt3VSx1QkFBTCxDQUE2QnJHLE9BQTdCLEVBQXNDL0gsR0FBdEMsRUFBMkMsS0FBM0M7O0FBRUEsbUJBQU8sSUFBUDtBQUNEOztBQUVELGNBQUcsT0FBS2lFLFdBQVIsRUFBcUI7QUFDbkIsbUJBQUtySCxnQkFBTCxDQUFzQnpDLElBQXRCLEVBQTRCOEMsS0FBNUI7QUFDRDs7QUFFRCxpQkFBTyxJQUFQO0FBQ0QsU0FyRm1CO0FBc0ZwQjZRLHdCQUFnQix3QkFBQ0gsTUFBRCxFQUFTM04sR0FBVCxFQUFpQjtBQUMvQixjQUFJN0YsT0FBTyxHQUFHbU4sTUFBSCxDQUFVUyxPQUFWLEVBQW1CLENBQUMvSCxHQUFELENBQW5CLENBQVg7O0FBRUEsY0FBRyxPQUFLdUUsY0FBUixFQUF3QjtBQUN0QixtQkFBT29KLE9BQU8zTixHQUFQLENBQVA7O0FBRUEsbUJBQU8sSUFBUDtBQUNEOztBQUVELGNBQUcsT0FBSytELGFBQUwsQ0FBbUIvRCxHQUFuQixDQUFILEVBQTRCO0FBQzFCLG1CQUFPMk4sT0FBTzNOLEdBQVAsQ0FBUDs7QUFFQSxtQkFBTyxJQUFQO0FBQ0Q7O0FBRUQsY0FBRyxnQkFBTXBHLFdBQVQsRUFBc0I7QUFDcEIsbUJBQU8rVCxPQUFPM04sR0FBUCxDQUFQO0FBQ0EsbUJBQUtvTyx1QkFBTCxDQUE2QnJHLE9BQTdCLEVBQXNDL0gsR0FBdEMsRUFBMkMsSUFBM0M7O0FBRUEsbUJBQU8sSUFBUDtBQUNEOztBQUVELGlCQUFPMk4sT0FBTzNOLEdBQVAsQ0FBUDtBQUNBLGlCQUFLcEQsZ0JBQUwsQ0FBc0J6QyxJQUF0QixFQUE0QjBDLFNBQTVCLEVBQXVDLElBQXZDOztBQUVBLGlCQUFPLElBQVA7QUFDRDtBQWhIbUIsT0FBZixDQUFQO0FBa0hEOztBQUVEOzs7Ozs7Ozs7OztBQWlCQTs7Ozs7OztvQ0FPaUJJLEssRUFBT29SLFMsRUFBVztBQUFBOztBQUNqQyxXQUFLOUosY0FBTCxHQUFzQixJQUF0Qjs7QUFFQSxVQUFJK0osVUFBVSxTQUFWQSxPQUFVLENBQUNyUixLQUFELEVBQVE4SyxPQUFSLEVBQW9CO0FBQ2hDLFlBQUcsUUFBTzlLLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBaEIsSUFBNEJBLFVBQVUsSUFBekMsRUFBK0M7QUFDN0MsaUJBQU9BLEtBQVA7QUFDRDs7QUFFRCxZQUFHLENBQUMsZ0JBQU1nUixhQUFOLENBQW9CaFIsS0FBcEIsQ0FBRCxJQUErQixDQUFDLGdCQUFNNk0sWUFBTixDQUFtQjdNLEtBQW5CLENBQWhDLElBQTZELEVBQUVBLGlCQUFpQixnQkFBTXdGLEtBQXpCLENBQWhFLEVBQWlHO0FBQy9GLGlCQUFPeEYsS0FBUDtBQUNEOztBQUVELFlBQUkwUSxTQUFTMVEsS0FBYjs7QUFFQSxZQUFHQSxNQUFNaUQsU0FBVCxFQUFvQjtBQUNsQnlOLG1CQUFTMVEsTUFBTXNSLFFBQWY7O0FBRUEsY0FBRyxDQUFDLE9BQUtDLHdCQUFULEVBQW1DO0FBQ2pDLGdCQUFHdlIsTUFBTWxDLFdBQU4sV0FBSCxFQUErQjtBQUM3QjRTLHVCQUFTLGdCQUFNbkYsSUFBTixDQUFXbUYsTUFBWCxFQUFtQixLQUFuQixDQUFUO0FBQ0ExUSxzQkFBUTBRLE1BQVI7QUFDRCxhQUhELE1BSUssSUFBRyxnQkFBTXpULGVBQU4sQ0FBc0I2TixPQUF0QixLQUFrQyxnQkFBTTdOLGVBQU4sQ0FBc0IrQyxNQUFNb1AsTUFBNUIsQ0FBckMsRUFBMEU7QUFDN0VwUCxzQkFBUTBRLE1BQVI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBSSxJQUFJdFIsQ0FBUixJQUFhc1IsTUFBYixFQUFxQjtBQUNuQixjQUFJLENBQUNBLE9BQU9yUixjQUFQLENBQXNCRCxDQUF0QixDQUFMLEVBQStCO0FBQzdCO0FBQ0Q7O0FBRUQsY0FBSVcsTUFBTTJRLE9BQU90UixDQUFQLENBQVY7QUFDQSxjQUFJbEMsT0FBTyxHQUFHbU4sTUFBSCxDQUFVUyxPQUFWLEVBQW1CLENBQUMxTCxDQUFELENBQW5CLENBQVg7O0FBRUFzUixpQkFBT3RSLENBQVAsSUFBWWlTLFFBQVF0UixHQUFSLEVBQWE3QyxJQUFiLENBQVo7QUFDRDs7QUFFRCxZQUFHLENBQUM4QyxNQUFNaUQsU0FBVixFQUFxQjtBQUNuQixpQkFBTyxPQUFLa0gsU0FBTCxDQUFldUcsTUFBZixFQUF1QjVGLE9BQXZCLENBQVA7QUFDRDs7QUFFRCxlQUFPOUssS0FBUDtBQUNELE9BekNEOztBQTJDQSxVQUFJZCxNQUFNbVMsUUFBUXJSLEtBQVIsRUFBZW9SLGFBQWEsRUFBNUIsQ0FBVjs7QUFFQSxXQUFLOUosY0FBTCxHQUFzQixJQUF0Qjs7QUFFQSxhQUFPcEksR0FBUDtBQUNEOzs7OztBQUVEOzs7Ozs7Ozs7NENBU3lCNEwsTyxFQUFTL0gsRyxFQUF3QjtBQUFBLFVBQW5CdEQsU0FBbUIsdUVBQVAsS0FBTzs7QUFDeEQsVUFBSXZDLE9BQU80TixRQUFRN0ssTUFBUixHQUFnQixDQUFDNkssUUFBUSxDQUFSLENBQUQsQ0FBaEIsR0FBOEIsQ0FBQy9ILEdBQUQsQ0FBekM7QUFDQSxVQUFJeU8sZUFBa0IsS0FBSzdILE9BQUwsQ0FBYWxNLE1BQS9CLFNBQXlDLGdCQUFNUixlQUFOLENBQXNCQyxJQUF0QixDQUE3Qzs7QUFFQSxVQUFHNE4sUUFBUTdLLE1BQVgsRUFBbUI7QUFDakJSLG9CQUFZLEtBQVo7QUFDRDs7QUFFRCxVQUFHLENBQUMsZ0JBQU05QyxXQUFOLENBQWtCNlUsWUFBbEIsQ0FBSixFQUFxQztBQUNuQyx3QkFBTTdVLFdBQU4sQ0FBa0I2VSxZQUFsQixJQUFrQztBQUNoQzlSLHFCQUFXLElBRHFCO0FBRWhDeEMsZ0JBQU1BO0FBRjBCLFNBQWxDO0FBSUQ7O0FBRUF1QyxvQkFBY0csU0FBZixLQUE4QixnQkFBTWpELFdBQU4sQ0FBa0I2VSxZQUFsQixFQUFnQy9SLFNBQWhDLEdBQTRDQSxTQUExRTtBQUNBLHNCQUFNOUMsV0FBTixDQUFrQjZVLFlBQWxCLEVBQWdDeFIsS0FBaEMsR0FBd0MsZ0JBQU1xTCxpQkFBTixDQUF3Qm5PLElBQXhCLEVBQThCLEtBQUt5TSxPQUFuQyxDQUF4Qzs7QUFFQSxhQUFPLGdCQUFNaE4sV0FBTixDQUFrQjZVLFlBQWxCLENBQVA7QUFDRDs7Ozs7QUFFRDs7Ozs7Ozs7OzsrQkFVVzFFLEksRUFBTTVQLEksRUFBTTROLE8sRUFBUzlLLEssRUFBMkI7QUFBQSxVQUFwQjBNLFVBQW9CLHVFQUFQLEtBQU87O0FBQ3pELFVBQUkrRSxtQkFBbUIsZ0JBQU14VSxlQUFOLENBQXNCNk4sT0FBdEIsQ0FBdkI7O0FBRUEsVUFBR2dDLEtBQUs3TSxNQUFMLElBQWUsQ0FBQ3lNLFVBQW5CLEVBQStCO0FBQzdCLFlBQUluTixJQUFJdU4sS0FBSzdNLE1BQUwsR0FBYyxDQUF0QjtBQUNBLFlBQUlxSixPQUFPd0QsS0FBS3ZOLENBQUwsQ0FBWDs7QUFFQSxZQUFHK0osS0FBS21ELFVBQUwsSUFBbUJnRixnQkFBbkIsSUFBdUNuSSxLQUFLNUosU0FBTCxLQUFtQixJQUE3RCxFQUFtRTtBQUNqRW9OLGVBQUt0SSxNQUFMLENBQVlqRixDQUFaLEVBQWUsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUR1TixXQUFLdE8sSUFBTCxDQUFVO0FBQ1JrQixtQkFBVyxJQURIO0FBRVIrTSxvQkFBWSxnQkFBTXhQLGVBQU4sQ0FBc0JDLElBQXRCLENBRko7QUFHUjROLGlCQUFTQSxPQUhEO0FBSVI1TixjQUFNQSxJQUpFO0FBS1I4QyxlQUFPQSxLQUxDO0FBTVIwTSxvQkFBWUE7QUFOSixPQUFWO0FBUUQ7Ozs7O0FBRUQ7Ozs7Ozs7OEJBT1V4UCxJLEVBQU07QUFDZCxhQUFPLGdCQUFNbU8saUJBQU4sQ0FBd0JuTyxJQUF4QixFQUE4QixLQUFLZ0ssVUFBbkMsS0FBa0QsSUFBekQ7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7bUNBUWVoSyxJLEVBQU1tQixJLEVBQU07QUFDekIsVUFBSXlPLE9BQVEsZ0JBQU16QixpQkFBTixDQUF3Qm5PLElBQXhCLEVBQThCLEtBQUtnSyxVQUFuQyxDQUFaOztBQUVBLFVBQUcsQ0FBQzRGLElBQUQsSUFBUyxDQUFDQSxLQUFLNkIsTUFBZixJQUF5QixDQUFDN0IsS0FBSzZCLE1BQUwsQ0FBWTFPLE1BQXpDLEVBQWlEO0FBQy9DLGVBQU8sSUFBUDtBQUNEOztBQUVELFdBQUksSUFBSVgsSUFBSSxDQUFSLEVBQVdDLElBQUl1TixLQUFLNkIsTUFBTCxDQUFZMU8sTUFBL0IsRUFBdUNYLElBQUlDLENBQTNDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqRCxZQUFJZ0ssT0FBT3dELEtBQUs2QixNQUFMLENBQVlyUCxDQUFaLENBQVg7O0FBRUEsWUFBR2dLLEtBQUtqTCxJQUFMLEtBQWNBLElBQWpCLEVBQXVCO0FBQ3JCLGlCQUFPaUwsSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OztzQ0FTa0JqTCxJLEVBQU1uQixJLEVBQU04QyxLLEVBQU87QUFDbkMsVUFBSVIsT0FBTyxLQUFLZ00saUJBQUwsQ0FBdUJuTixJQUF2QixFQUE2Qm5CLElBQTdCLENBQVg7QUFDQSxVQUFJcU8sT0FBTyxnQkFBTUEsSUFBTixDQUFXdkwsS0FBWCxDQUFYOztBQUVBLFVBQUdSLElBQUgsRUFBUztBQUNQLFlBQUlOLE1BQU0sZ0JBQU1vTSxvQkFBTixDQUEyQnRMLEtBQTNCLEVBQWtDUixLQUFLUSxLQUF2QyxFQUE4Q1IsS0FBSytMLElBQW5ELEVBQXlEQSxJQUF6RCxDQUFWOztBQUVBL0wsYUFBS1EsS0FBTCxHQUFhQSxLQUFiO0FBQ0FSLGFBQUsrTCxJQUFMLEdBQVlBLElBQVo7O0FBRUEsZUFBTyxDQUFDck0sR0FBUjtBQUNEOztBQUVELFVBQUlzTixPQUFVLEtBQUs3QyxPQUFMLENBQWFsTSxNQUF2QixTQUFpQyxnQkFBTVIsZUFBTixDQUFzQkMsSUFBdEIsQ0FBckM7O0FBRUFtQixXQUFLK00sWUFBTCxDQUFrQm9CLElBQWxCLElBQTBCO0FBQ3hCeE0sZUFBT0EsS0FEaUI7QUFFeEJ1TCxjQUFNQSxJQUZrQjtBQUd4QjdMLG1CQUFXLElBSGE7QUFJeEJ4QyxjQUFNQTtBQUprQixPQUExQjs7QUFPQSxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7c0NBUWtCbUIsSSxFQUFNbkIsSSxFQUFNO0FBQzVCLFVBQUlzUCxPQUFVLEtBQUs3QyxPQUFMLENBQWFsTSxNQUF2QixTQUFpQyxnQkFBTVIsZUFBTixDQUFzQkMsSUFBdEIsQ0FBckM7O0FBRUEsYUFBT21CLEtBQUsrTSxZQUFMLENBQWtCb0IsSUFBbEIsS0FBMkIsSUFBbEM7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozt5Q0FPcUJuTyxJLEVBQU1uQixJLEVBQU07QUFDL0IsVUFBSXNQLE9BQVUsS0FBSzdDLE9BQUwsQ0FBYWxNLE1BQXZCLFNBQWlDLGdCQUFNUixlQUFOLENBQXNCQyxJQUF0QixDQUFyQzs7QUFFQSxhQUFPbUIsS0FBSytNLFlBQUwsQ0FBa0JvQixJQUFsQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7MkJBT090UCxJLEVBQU1vTSxJLEVBQU07QUFDakIsc0JBQU16SixpQkFBTixDQUF3QjNDLElBQXhCLEVBQThCLEtBQUtnSyxVQUFuQyxFQUErQyxVQUFDcEgsSUFBRCxFQUFPRSxLQUFQLEVBQWlCO0FBQzlELFlBQUlrUCxNQUFNLEVBQUNQLFFBQVEsRUFBVCxFQUFWOztBQUVBLFlBQUcsQ0FBQzdPLElBQUosRUFBVTtBQUNSLGlCQUFPRSxRQUFPQSxLQUFQLEdBQWNrUCxHQUFyQjtBQUNEOztBQUVELFlBQUcsUUFBT2xQLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBbkIsRUFBNkI7QUFDM0JrUCxnQkFBTWxQLEtBQU47QUFDRDs7QUFFRCxZQUFHLENBQUNrUCxJQUFJUCxNQUFSLEVBQWdCO0FBQ2RPLGNBQUlQLE1BQUosR0FBYSxFQUFiO0FBQ0Q7O0FBRURPLFlBQUlQLE1BQUosQ0FBV25RLElBQVgsQ0FBZ0I4SyxJQUFoQjs7QUFFQSxlQUFPNEYsR0FBUDtBQUNELE9BbEJEO0FBbUJEOztBQUVEOzs7Ozs7Ozs7NkJBTVNoUyxJLEVBQU07QUFDYixVQUFJNFAsT0FBTyxnQkFBTXpCLGlCQUFOLENBQXdCbk8sSUFBeEIsRUFBOEIsS0FBS2dLLFVBQW5DLENBQVg7O0FBRUEsVUFBRyxDQUFDNEYsSUFBRCxJQUFTLENBQUNBLEtBQUs2QixNQUFsQixFQUEwQjtBQUN4QjtBQUNEOztBQUVELFdBQUksSUFBSXJQLElBQUksQ0FBUixFQUFXQyxJQUFJdU4sS0FBSzZCLE1BQUwsQ0FBWTFPLE1BQS9CLEVBQXVDWCxJQUFJQyxDQUEzQyxFQUE4Q0QsR0FBOUMsRUFBbUQ7QUFDakQsWUFBSWpCLE9BQU95TyxLQUFLNkIsTUFBTCxDQUFZclAsQ0FBWixFQUFlakIsSUFBMUI7O0FBRUEsYUFBS3FULG9CQUFMLENBQTBCclQsSUFBMUIsRUFBZ0NuQixJQUFoQztBQUNEOztBQUVELHNCQUFNeVMsb0JBQU4sQ0FBMkJ6UyxJQUEzQixFQUFpQyxLQUFLZ0ssVUFBdEMsRUFBa0QsVUFBQ2xILEtBQUQsRUFBVztBQUMzRCxZQUFHa0IsT0FBT2hFLElBQVAsQ0FBWThDLEtBQVosRUFBbUJDLE1BQW5CLEdBQTRCLENBQS9CLEVBQWtDO0FBQ2hDRCxnQkFBTTJPLE1BQU4sR0FBZSxFQUFmOztBQUVBLGlCQUFPLEtBQVA7QUFDRDs7QUFFRCxlQUFPLElBQVA7QUFDRCxPQVJEO0FBU0Q7O0FBRUQ7Ozs7Ozs7OztvQ0FNZ0JnRCxLLEVBQU87QUFDckIsVUFBSTFDLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVM7QUFDcEIsYUFBSSxJQUFJOVAsQ0FBUixJQUFhOFAsR0FBYixFQUFrQjtBQUNoQixjQUFHLENBQUNBLElBQUk3UCxjQUFKLENBQW1CRCxDQUFuQixDQUFKLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsY0FBR0EsS0FBSyxRQUFSLEVBQWtCO0FBQ2hCLGdCQUFJa0ssT0FBTzRGLElBQUk5UCxDQUFKLEtBQVUsRUFBckI7QUFDQSxnQkFBSUcsSUFBSStKLEtBQUtySixNQUFiOztBQUVBLGlCQUFJLElBQUlYLElBQUksQ0FBWixFQUFlQSxJQUFJQyxDQUFuQixFQUFzQkQsR0FBdEIsRUFBMkI7QUFDekIsa0JBQUl3TixPQUFPeEQsS0FBS2hLLENBQUwsQ0FBWDs7QUFFQSxrQkFBR3FTLE1BQU01SyxPQUFOLENBQWMrRixLQUFLek8sSUFBbkIsS0FBNEIsQ0FBQyxDQUFoQyxFQUFtQztBQUNqQ2lMLHFCQUFLOUUsTUFBTCxDQUFZbEYsQ0FBWixFQUFlLENBQWY7QUFDQUE7QUFDQUM7QUFDRDtBQUNGOztBQUVELGdCQUFHLENBQUNBLENBQUosRUFBTztBQUNMLHFCQUFPMlAsSUFBSTlQLENBQUosQ0FBUDtBQUNEO0FBQ0YsV0FqQkQsTUFrQks7QUFDSDZQLG1CQUFPQyxJQUFJOVAsQ0FBSixDQUFQO0FBQ0Q7QUFDRjtBQUNGLE9BNUJEOztBQThCQTZQLGFBQU8sS0FBSy9ILFVBQVo7QUFDQSxXQUFLMEssb0JBQUw7QUFDRDs7QUFFRDs7Ozs7Ozs7O3lDQU1xQjFDLEcsRUFBSztBQUN4QixVQUFJMkMsUUFBUSxTQUFSQSxLQUFRLENBQUMzQyxHQUFELEVBQU14RyxNQUFOLEVBQWMzRixHQUFkLEVBQXNCO0FBQ2hDLGFBQUksSUFBSTNELENBQVIsSUFBYThQLEdBQWIsRUFBa0I7QUFDaEIsY0FBRyxDQUFDQSxJQUFJN1AsY0FBSixDQUFtQkQsQ0FBbkIsQ0FBSixFQUEyQjtBQUN6QjtBQUNEOztBQUVELGNBQUlXLE1BQU1tUCxJQUFJOVAsQ0FBSixDQUFWOztBQUVBLGNBQUdBLEtBQUssUUFBTCxLQUFrQixDQUFDVyxHQUFELElBQVEsQ0FBQ0EsSUFBSUUsTUFBL0IsQ0FBSCxFQUEyQztBQUN6QyxtQkFBT2lQLElBQUk5UCxDQUFKLENBQVA7QUFDRCxXQUZELE1BR0ssSUFBR0EsS0FBSyxRQUFSLEVBQWtCO0FBQ3JCLGdCQUFHLENBQUM4QixPQUFPaEUsSUFBUCxDQUFZZ1MsSUFBSTlQLENBQUosQ0FBWixFQUFvQmEsTUFBeEIsRUFBZ0M7QUFDOUIscUJBQU9pUCxJQUFJOVAsQ0FBSixDQUFQO0FBQ0QsYUFGRCxNQUdLO0FBQ0h5UyxvQkFBTTNDLElBQUk5UCxDQUFKLENBQU4sRUFBYzhQLEdBQWQsRUFBbUI5UCxDQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxZQUFHLENBQUM4QixPQUFPaEUsSUFBUCxDQUFZZ1MsR0FBWixFQUFpQmpQLE1BQWxCLElBQTRCeUksTUFBL0IsRUFBdUM7QUFDckMsaUJBQU9BLE9BQU8zRixHQUFQLENBQVA7QUFDRDtBQUNGLE9BeEJEOztBQTBCQThPLFlBQU0zQyxPQUFPLEtBQUtoSSxVQUFsQjtBQUNEOztBQUVEOzs7Ozs7Ozt1Q0FLbUI7QUFDakIsVUFBSWxELFNBQVMsU0FBVEEsTUFBUyxDQUFDbkMsUUFBRCxFQUFjO0FBQ3pCLGFBQUksSUFBSXZDLElBQUksQ0FBWixFQUFlQSxJQUFJdUMsU0FBUzVCLE1BQTVCLEVBQW9DWCxHQUFwQyxFQUF5QztBQUN2QyxjQUFJd0MsUUFBUUQsU0FBU3ZDLENBQVQsQ0FBWjs7QUFFQTBFLGlCQUFPbEMsTUFBTXZELE9BQU4sQ0FBY2dKLFVBQXJCO0FBQ0F6RixnQkFBTXZELE9BQU4sQ0FBY3VULFFBQWQ7QUFDQXhTO0FBQ0Q7QUFDRixPQVJEOztBQVVBMEUsYUFBTyxLQUFLdUQsVUFBWjtBQUNEOztBQUVEOzs7Ozs7OzsrQkFLVztBQUNULFdBQUswRCxRQUFMO0FBQ0EsV0FBSy9DLEtBQUwsQ0FBVzZKLFNBQVgsSUFBd0IsS0FBSzdKLEtBQUwsQ0FBVzZKLFNBQVgsQ0FBcUI5SSxPQUFyQixFQUF4QjtBQUNBLFdBQUsrSSxPQUFMO0FBQ0Esc0JBQU1uVSxXQUFOLENBQWtCLEtBQUs4TCxPQUFMLENBQWFsTSxNQUEvQjtBQUNBLFdBQUtMLEVBQUwsQ0FBUTRHLE1BQVI7QUFDRDs7QUFFRDs7Ozs7Ozs7K0JBS1c7QUFDVCxVQUFHLEtBQUtxRSxnQkFBTCxJQUF5QixDQUFDLEtBQUtELG1CQUFsQyxFQUF1RDtBQUNyRCxhQUFLQyxnQkFBTCxDQUFzQjlKLE9BQXRCLENBQThCaVMsZUFBOUIsQ0FBOEMsR0FBR3BNLEtBQUgsQ0FBU0MsSUFBVCxDQUFjLEtBQUtqSCxFQUFMLENBQVFtTixVQUF0QixDQUE5QztBQUNEOztBQUVELFVBQUcsS0FBS3ZNLFFBQVIsRUFBa0I7QUFDaEIsYUFBS0EsUUFBTCxDQUFjTyxPQUFkLENBQXNCMFQsYUFBdEIsQ0FBb0MsS0FBSzdVLEVBQXpDO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7Z0NBS1k7QUFDVixXQUFLOFUsZ0JBQUw7QUFDQSxXQUFLSixRQUFMO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzhCQUtVO0FBQ1IsVUFBSUgsUUFBUSxFQUFaOztBQUVBLFdBQUtPLGdCQUFMOztBQUVBLFVBQUlDLE9BQU8sU0FBUEEsSUFBTyxDQUFDdFEsUUFBRCxFQUFjO0FBQ3ZCLGFBQUksSUFBSXZDLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsY0FBSXdDLFFBQVFELFNBQVN2QyxDQUFULENBQVo7O0FBRUEsY0FBR3dDLE1BQU02RyxRQUFOLElBQWtCLENBQXJCLEVBQXdCO0FBQ3RCZ0osa0JBQU1uVCxJQUFOLENBQVdzRCxLQUFYO0FBQ0QsV0FGRCxNQUdLLElBQUdBLE1BQU02RyxRQUFOLElBQWtCLENBQWxCLElBQXVCLENBQUM3RyxNQUFNdkQsT0FBakMsRUFBMEM7QUFDN0MsaUJBQUssSUFBSWEsSUFBSSxDQUFSLEVBQVc4SSxRQUFRcEcsTUFBTXlJLFVBQXpCLEVBQXFDcUUsSUFBSTFHLE1BQU1qSSxNQUFwRCxFQUE0RGIsSUFBSXdQLENBQWhFLEVBQW1FeFAsR0FBbkUsRUFBd0U7QUFDdEV1UyxvQkFBTW5ULElBQU4sQ0FBVzBKLE1BQU01SSxDQUFOLENBQVg7QUFDRDs7QUFFRDZTLGlCQUFLclEsTUFBTWlILFVBQVg7QUFDRDtBQUNGO0FBQ0YsT0FmRDs7QUFpQkFvSixXQUFLLEtBQUsvVSxFQUFMLENBQVEyTCxVQUFiO0FBQ0EsV0FBS3lILGVBQUwsQ0FBcUJtQixLQUFyQjtBQUNBLFdBQUt2VSxFQUFMLENBQVF3QixTQUFSLEdBQW9CLEVBQXBCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OztrQ0FTb0Q7QUFBQSxVQUF4Q3lDLFFBQXdDLHVFQUE3QixFQUE2QjtBQUFBLFVBQXpCK1EsT0FBeUIsdUVBQWYsS0FBZTtBQUFBLFVBQVJDLE1BQVE7O0FBQ2xELFVBQUlsVSxNQUFNLEVBQVY7QUFDQSxVQUFJbVUsUUFBUSxDQUFaOztBQUVBLFVBQUdELFdBQVd6UyxTQUFYLElBQXdCLENBQUNpRCxNQUFNMFAsT0FBTixDQUFjRixNQUFkLENBQTVCLEVBQW1EO0FBQ2pEQSxpQkFBUyxDQUFDQSxNQUFELENBQVQ7QUFDRDs7QUFFRCxVQUFJRixPQUFPLFNBQVBBLElBQU8sQ0FBQ3pKLE1BQUQsRUFBWTtBQUNyQixZQUFHLENBQUNBLE1BQUosRUFBWTtBQUNWO0FBQ0Q7O0FBRUQsWUFBRyxDQUFDMkosTUFBRCxJQUFXQSxPQUFPdEwsT0FBUCxDQUFldUwsS0FBZixLQUF5QixDQUFDLENBQXhDLEVBQTJDO0FBQ3pDLGNBQUksQ0FBQ2pSLFFBQUQsSUFBYXFILE9BQU9uSyxPQUFQLENBQWU2QyxPQUFmLENBQXVCQyxRQUF2QixDQUFqQixFQUFtRDtBQUNqRCxnQkFBSSxDQUFDK1EsT0FBTCxFQUFjO0FBQ1pqVSxrQkFBSUssSUFBSixDQUFTa0ssT0FBT25LLE9BQWhCOztBQUVBO0FBQ0Q7O0FBRURKLGdCQUFJSyxJQUFKLENBQVNrSyxPQUFPbkssT0FBaEI7QUFDRDtBQUNGOztBQUVEK1Q7QUFDQUgsYUFBS3pKLE9BQU9uSyxPQUFQLENBQWVQLFFBQXBCO0FBQ0QsT0FuQkQ7O0FBcUJBbVUsV0FBSyxLQUFLblUsUUFBVjs7QUFFQSxhQUFPb1UsVUFBU2pVLEdBQVQsR0FBZUEsSUFBSSxDQUFKLEtBQVUsSUFBaEM7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O29DQVNxRDtBQUFBLFVBQXZDa0QsUUFBdUMsdUVBQTVCLEVBQTRCO0FBQUEsVUFBeEIrUSxPQUF3Qix1RUFBZCxJQUFjO0FBQUEsVUFBUkMsTUFBUTs7QUFDbkQsVUFBSWxVLE1BQU0sRUFBVjtBQUNBLFVBQUltVSxRQUFRLENBQVo7O0FBRUEsVUFBR0QsV0FBV3pTLFNBQVgsSUFBd0IsQ0FBQ2lELE1BQU0wUCxPQUFOLENBQWNGLE1BQWQsQ0FBNUIsRUFBbUQ7QUFDakRBLGlCQUFTLENBQUNBLE1BQUQsQ0FBVDtBQUNEOztBQUVELFVBQUlGLE9BQU8sU0FBUEEsSUFBTyxDQUFDdFEsUUFBRCxFQUFjO0FBQ3ZCLGFBQUksSUFBSXZDLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsY0FBSXdDLFFBQVFELFNBQVN2QyxDQUFULENBQVo7O0FBRUEsY0FBRyxDQUFDK1MsTUFBRCxJQUFXQSxPQUFPdEwsT0FBUCxDQUFldUwsS0FBZixLQUF5QixDQUFDLENBQXhDLEVBQTJDO0FBQ3pDLGdCQUFHLENBQUNqUixRQUFELElBQWFTLE1BQU12RCxPQUFOLENBQWM2QyxPQUFkLENBQXNCQyxRQUF0QixDQUFoQixFQUFpRDtBQUMvQyxrQkFBRyxDQUFDK1EsT0FBSixFQUFhO0FBQ1hqVSxvQkFBSUssSUFBSixDQUFTc0QsTUFBTXZELE9BQWY7O0FBRUE7QUFDRDs7QUFFREosa0JBQUlLLElBQUosQ0FBU3NELE1BQU12RCxPQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUVEK1Q7O0FBRUEsYUFBSSxJQUFJaFQsTUFBSSxDQUFSLEVBQVdDLE1BQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLE1BQUlDLEdBQXhDLEVBQTJDRCxLQUEzQyxFQUFnRDtBQUM5QzZTLGVBQUt0USxTQUFTdkMsR0FBVCxFQUFZZixPQUFaLENBQW9CZ0osVUFBekI7QUFDRDtBQUNGLE9BdEJEOztBQXdCQTRLLFdBQUssS0FBSzVLLFVBQVY7O0FBRUEsYUFBTzZLLFVBQVNqVSxHQUFULEdBQWVBLElBQUksQ0FBSixLQUFVLElBQWhDO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OztnQ0FTd0Q7QUFBQSxVQUE5Q2tELFFBQThDLHVFQUFuQyxFQUFtQztBQUFBLFVBQS9CK1EsT0FBK0IsdUVBQXJCLElBQXFCO0FBQUEsVUFBZkksS0FBZSx1RUFBUCxLQUFPOztBQUN0RCxVQUFHLENBQUMsS0FBS3hVLFFBQVQsRUFBbUI7QUFDakIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBSXlVLGdCQUFnQixLQUFLelUsUUFBTCxDQUFjTyxPQUFkLENBQXNCZ0osVUFBdEIsQ0FBaUNuRCxLQUFqQyxFQUFwQjtBQUNBLFVBQUlqRyxNQUFNLEVBQVY7O0FBRUFxVSxlQUFTQyxjQUFjQyxPQUFkLEVBQVQ7O0FBRUEsV0FBSSxJQUFJcFQsSUFBSSxDQUFSLEVBQVdDLElBQUlrVCxjQUFjeFMsTUFBakMsRUFBeUNYLElBQUlDLENBQTdDLEVBQWdERCxHQUFoRCxFQUFxRDtBQUNuRCxZQUFJbEMsS0FBS3FWLGNBQWNuVCxDQUFkLENBQVQ7O0FBRUEsWUFBR2xDLE9BQU8sS0FBS0EsRUFBZixFQUFtQjtBQUNqQjtBQUNEOztBQUVELFlBQUcsQ0FBQ2lFLFFBQUQsSUFBYWpFLEdBQUdtQixPQUFILENBQVc2QyxPQUFYLENBQW1CQyxRQUFuQixDQUFoQixFQUE4QztBQUM1Q2xELGNBQUlLLElBQUosQ0FBU3BCLEdBQUdtQixPQUFaO0FBQ0Q7QUFDRjs7QUFFREosVUFBSXVVLE9BQUo7O0FBRUEsVUFBRyxDQUFDTixPQUFKLEVBQWE7QUFDWCxlQUFPalUsSUFBSThCLE1BQUosR0FBWTlCLElBQUksQ0FBSixDQUFaLEdBQW9CLElBQTNCO0FBQ0Q7O0FBRUQsYUFBT0EsR0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7NEJBTVFrRCxRLEVBQVU7QUFDaEIsVUFBRyxPQUFPQSxRQUFQLElBQW1CLFVBQXRCLEVBQWtDO0FBQ2hDLGVBQU9BLFNBQVMsSUFBVCxDQUFQO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLakUsRUFBTCxDQUFRZ0UsT0FBUixDQUFnQkMsUUFBaEIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzZCQU84QjtBQUFBLFVBQXZCQSxRQUF1Qix1RUFBWixFQUFZO0FBQUEsVUFBUmdSLE1BQVE7O0FBQzVCLGFBQU8sS0FBS00sV0FBTCxDQUFpQnRSLFFBQWpCLEVBQTJCLEtBQTNCLEVBQWtDZ1IsTUFBbEMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzhCQU8rQjtBQUFBLFVBQXZCaFIsUUFBdUIsdUVBQVosRUFBWTtBQUFBLFVBQVJnUixNQUFROztBQUM3QixhQUFPLEtBQUtNLFdBQUwsQ0FBaUJ0UixRQUFqQixFQUEyQixJQUEzQixFQUFpQ2dSLE1BQWpDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs0QkFPNkI7QUFBQSxVQUF2QmhSLFFBQXVCLHVFQUFaLEVBQVk7QUFBQSxVQUFSZ1IsTUFBUTs7QUFDM0IsYUFBTyxLQUFLTyxhQUFMLENBQW1CdlIsUUFBbkIsRUFBNkIsS0FBN0IsRUFBb0NnUixNQUFwQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7K0JBT2dDO0FBQUEsVUFBdkJoUixRQUF1Qix1RUFBWixFQUFZO0FBQUEsVUFBUmdSLE1BQVE7O0FBQzlCLGFBQU8sS0FBS08sYUFBTCxDQUFtQnZSLFFBQW5CLEVBQTZCLElBQTdCLEVBQW1DZ1IsTUFBbkMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7NkJBTXNCO0FBQUEsVUFBZmhSLFFBQWUsdUVBQUosRUFBSTs7QUFDcEIsYUFBTyxLQUFLd1IsU0FBTCxDQUFleFIsUUFBZixFQUF5QixJQUF6QixFQUErQixLQUEvQixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs0QkFNcUI7QUFBQSxVQUFmQSxRQUFlLHVFQUFKLEVBQUk7O0FBQ25CLGFBQU8sS0FBS3dSLFNBQUwsQ0FBZXhSLFFBQWYsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7MkJBTW9CO0FBQUEsVUFBZkEsUUFBZSx1RUFBSixFQUFJOztBQUNsQixhQUFPLEtBQUt3UixTQUFMLENBQWV4UixRQUFmLEVBQXlCLEtBQXpCLEVBQWdDLEtBQWhDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzJCQU1vQjtBQUFBLFVBQWZBLFFBQWUsdUVBQUosRUFBSTs7QUFDbEIsYUFBTyxLQUFLd1IsU0FBTCxDQUFleFIsUUFBZixFQUF5QixLQUF6QixFQUFnQyxJQUFoQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzZCQUtTcUgsTSxFQUFRO0FBQ2ZBLGFBQU9vSyxXQUFQLENBQW1CLEtBQUsxVixFQUF4Qjs7QUFFQSxhQUFPLGdCQUFNcUUsT0FBTixDQUFjLEtBQUtyRSxFQUFuQixFQUF1QixFQUFFa0QsV0FBVyxJQUFiLEVBQXZCLENBQVA7QUFDRDs7QUFFRDs7Ozs7OzZCQUdTO0FBQ1AsV0FBS2lCLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7QUFFRDs7Ozs7Ozs7NEJBS1E7QUFDTixhQUFPLEtBQUt3UixPQUFMLENBQWE3UCxLQUFiLENBQW1CLElBQW5CLEVBQXlCZ0IsU0FBekIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs2QkFLUztBQUNQLGFBQU8sS0FBSzhPLFNBQUwsQ0FBZTlQLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkJnQixTQUEzQixDQUFQO0FBQ0Q7Ozs4QkFFUyxDQUFFOzs7K0JBQ0QsQ0FBRTs7O2lDQUNBLENBQUU7Ozs0QkFDUG5CLEcsRUFBSy9DLEssRUFBTyxDQUFFOzs7K0JBQ1gsQ0FBRTs7OzhCQUNILENBQUU7Ozs7OztBQTN0RE9zQixTLENBRVpGLE8sR0FBVSxFO0FBRkVFLFMsQ0FHWjhJLGlCLEdBQW9CLEU7QUFIUjlJLFMsQ0FJWnlJLE0sR0FBUyxFO0FBSkd6SSxTLENBS1p3SSxpQixHQUFvQixLO0FBTFJ4SSxTLENBTVowSixXLEdBQWMsSztBQU5GMUosUyxDQU9aNUMsUSxHQUFXLEU7QUFQQzRDLFMsQ0FRWjZILFcsR0FBYyxFO0FBUkY3SCxTLENBU1o5RCxLLEdBQVEsSTtrQkFUSThELFM7QUE0dERwQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3B1REQ7Ozs7Ozs7O0FBRUEsSUFBTW1FLFFBQVEsRUFBZDs7QUFFQTs7Ozs7Ozs7OztBQVVBQSxNQUFNd04sS0FBTixHQUFjLFVBQVUvRCxHQUFWLEVBQWU7QUFDM0IsTUFBRyxDQUFDQSxHQUFELElBQVEsUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQTFCLEVBQW9DO0FBQ2xDLFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQUlnRSxVQUFVLEVBQWQ7O0FBRUEsT0FBSSxJQUFJOVQsQ0FBUixJQUFhOFAsR0FBYixFQUFrQjtBQUNoQixRQUFHLENBQUNBLElBQUk3UCxjQUFKLENBQW1CRCxDQUFuQixDQUFKLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsUUFBSVcsTUFBTW1QLElBQUk5UCxDQUFKLENBQVY7O0FBRUFXLFdBQU9tVCxRQUFRMVUsSUFBUixDQUFhWSxDQUFiLENBQVA7QUFDRDs7QUFFRCxTQUFPOFQsUUFBUTVWLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDRCxDQWxCRDs7QUFvQkE7Ozs7Ozs7Ozs7QUFVQW1JLE1BQU0wTixLQUFOLEdBQWMsVUFBU2pFLEdBQVQsRUFBYztBQUMxQixNQUFHLENBQUNBLEdBQUQsSUFBUSxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBMUIsRUFBb0M7QUFDbEMsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBSWtFLFNBQVMsRUFBYjs7QUFFQSxPQUFJLElBQUloVSxDQUFSLElBQWE4UCxHQUFiLEVBQWtCO0FBQ2hCLFFBQUcsQ0FBQ0EsSUFBSTdQLGNBQUosQ0FBbUJELENBQW5CLENBQUosRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxRQUFJVyxNQUFNbVAsSUFBSTlQLENBQUosQ0FBVjs7QUFFQVcsV0FBT3FULE9BQU81VSxJQUFQLENBQWUsS0FBS21DLFVBQUwsQ0FBZ0J2QixDQUFoQixDQUFmLFNBQXFDVyxHQUFyQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBT3FULE9BQU85VixJQUFQLENBQVksR0FBWixDQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBbUksTUFBTTROLE1BQU4sR0FBZSxVQUFVbFYsR0FBVixFQUFlbVYsT0FBZixFQUFtQztBQUFBLE1BQVhwVyxJQUFXLHVFQUFKLEVBQUk7O0FBQ2hELE1BQUlnQyxNQUFNLEVBQVY7O0FBRUEsTUFBRyxDQUFDMkQsTUFBTTBQLE9BQU4sQ0FBY3JWLElBQWQsQ0FBSixFQUF5QjtBQUN2QkEsV0FBTyxDQUFDQSxJQUFELENBQVA7QUFDRDs7QUFFRCxNQUFHLENBQUNvVyxPQUFKLEVBQWE7QUFDWCx3Q0FBV25WLEdBQVg7QUFDRDs7QUFFRCxPQUFJLElBQUltQixJQUFJLENBQVIsRUFBV0MsSUFBSXBCLElBQUk4QixNQUF2QixFQUErQlgsSUFBSUMsQ0FBbkMsRUFBc0NELEdBQXRDLEVBQTJDO0FBQ3pDLFFBQUlpVSxPQUFPcFYsSUFBSW1CLENBQUosQ0FBWDtBQUNBLFFBQUlTLE1BQU03QyxLQUFLK0MsTUFBTCxHQUFhLEtBQUtvTCxpQkFBTCxDQUF1Qm5PLElBQXZCLEVBQTZCcVcsSUFBN0IsQ0FBYixHQUFpREEsSUFBM0Q7O0FBRUEsUUFBRyxDQUFDeFQsR0FBSixFQUFTO0FBQ1A7QUFDRDs7QUFFREEsV0FBTyxFQUFQOztBQUVBLFFBQUksT0FBT3VULE9BQVAsSUFBa0IsVUFBbkIsSUFBa0NBLFFBQVFDLElBQVIsQ0FBckMsRUFBb0Q7QUFDbERyVSxVQUFJVixJQUFKLENBQVMrVSxJQUFUO0FBQ0QsS0FGRCxNQUdLLElBQUd4VCxJQUFJeVQsS0FBSixDQUFVRixXQUFXLEVBQXJCLENBQUgsRUFBNkI7QUFDaENwVSxVQUFJVixJQUFKLENBQVMrVSxJQUFUO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPclUsR0FBUDtBQUNELENBOUJEOztBQWdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0F1RyxNQUFNZ08sSUFBTixHQUFhLFVBQVN0VixHQUFULEVBQXVDO0FBQUE7O0FBQUEsTUFBekJqQixJQUF5Qix1RUFBbEIsSUFBa0I7QUFBQSxNQUFad1csS0FBWSx1RUFBSixFQUFJOztBQUNsRHZWLHFDQUFVQSxHQUFWOztBQUVBLE1BQUdqQixTQUFTLElBQVosRUFBa0I7QUFDaEJBLFdBQU8sRUFBUDtBQUNBd1csWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEdBSEQsTUFJSyxJQUFHeFcsU0FBUyxLQUFaLEVBQW1CO0FBQ3RCQSxXQUFPLEVBQVA7QUFDQXdXLFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDRDs7QUFFRCxNQUFHLENBQUM3USxNQUFNMFAsT0FBTixDQUFjclYsSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCQSxXQUFPLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVELE1BQUcsQ0FBQzJGLE1BQU0wUCxPQUFOLENBQWNtQixLQUFkLENBQUosRUFBMEI7QUFDeEJBLFlBQVEsQ0FBQ0EsS0FBRCxDQUFSO0FBQ0Q7O0FBRUQsTUFBSW5VLElBQUlyQyxLQUFLK0MsTUFBYjs7QUFFQTlCLE1BQUlzVixJQUFKLENBQVMsVUFBQ0UsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDakIsUUFBSXRVLElBQUksQ0FBUjs7QUFFQSxRQUFJbEIsUUFBUSxTQUFSQSxLQUFRLENBQUN1VixDQUFELEVBQUlDLENBQUosRUFBMkI7QUFBQSxVQUFwQmxCLE9BQW9CLHVFQUFWLEtBQVU7O0FBQ3JDLFVBQUdpQixhQUFhRSxJQUFoQixFQUFzQjtBQUNwQkYsWUFBSUEsRUFBRUcsT0FBRixFQUFKO0FBQ0Q7O0FBRUQsVUFBR0YsYUFBYUMsSUFBaEIsRUFBc0I7QUFDcEJELFlBQUlBLEVBQUVFLE9BQUYsRUFBSjtBQUNEOztBQUVELFVBQUdILElBQUlDLENBQVAsRUFBVTtBQUNSLGVBQU9sQixVQUFTLENBQUMsQ0FBVixHQUFhLENBQXBCO0FBQ0QsT0FGRCxNQUdLLElBQUdpQixJQUFJQyxDQUFQLEVBQVU7QUFDYixlQUFPbEIsVUFBUyxDQUFULEdBQVksQ0FBQyxDQUFwQjtBQUNEOztBQUVELGFBQU8sQ0FBUDtBQUNELEtBakJEOztBQW1CQSxRQUFJcUIsT0FBTyxTQUFQQSxJQUFPLEdBQU07QUFDZixVQUFHelUsS0FBS0MsQ0FBUixFQUFXO0FBQ1QsZUFBTyxDQUFQO0FBQ0Q7O0FBRUQsVUFBSXdELE1BQU03RixLQUFLb0MsQ0FBTCxDQUFWOztBQUVBLFVBQUcsQ0FBQ3VELE1BQU0wUCxPQUFOLENBQWN4UCxHQUFkLENBQUosRUFBd0I7QUFDdEJBLGNBQU0sQ0FBQ0EsR0FBRCxDQUFOO0FBQ0Q7O0FBRUQsVUFBSWlSLEtBQUssTUFBSzNJLGlCQUFMLENBQXVCdEksR0FBdkIsRUFBNEI0USxDQUE1QixDQUFUO0FBQ0EsVUFBSU0sS0FBSyxNQUFLNUksaUJBQUwsQ0FBdUJ0SSxHQUF2QixFQUE0QjZRLENBQTVCLENBQVQ7QUFDQSxVQUFJMVUsTUFBTWQsTUFBTTRWLEVBQU4sRUFBVUMsRUFBVixFQUFjUCxNQUFNcFUsQ0FBTixNQUFhLEtBQTNCLENBQVY7O0FBRUEsVUFBR0osUUFBUSxDQUFYLEVBQWM7QUFDWixlQUFPQSxHQUFQO0FBQ0Q7O0FBRURJOztBQUVBLGFBQU95VSxNQUFQO0FBQ0QsS0F0QkQ7O0FBd0JBLFFBQUcsQ0FBQ3hVLENBQUosRUFBTztBQUNMLGFBQU9uQixNQUFNdVYsQ0FBTixFQUFTQyxDQUFULEVBQVlGLE1BQU1wVSxDQUFOLE1BQWEsS0FBekIsQ0FBUDtBQUNEOztBQUVELFdBQU95VSxNQUFQO0FBQ0QsR0FuREQ7O0FBcURBLFNBQU81VixHQUFQO0FBQ0QsQ0E1RUQ7O0FBOEVBOzs7Ozs7QUFNQXNILE1BQU1vSCxZQUFOLEdBQXFCLFVBQVM5TSxHQUFULEVBQWM7QUFDakMsU0FBTyxDQUFDLEVBQUVBLE9BQU8sUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxNQUFjLFFBQXJCLElBQWlDQSxJQUFJa0QsU0FBdkMsQ0FBUjtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1Bd0MsTUFBTXVMLGFBQU4sR0FBc0IsVUFBUzlCLEdBQVQsRUFBYztBQUNsQyxTQUFPLENBQUMsRUFBRUEsT0FBTyxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE1BQWMsUUFBckIsS0FBa0NBLElBQUkxTCxXQUFKLElBQW1CdEMsTUFBbkIsSUFBNkJnTyxJQUFJMUwsV0FBSixJQUFtQlgsS0FBbEYsQ0FBRixDQUFSO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7OztBQU9BNEMsTUFBTThGLElBQU4sR0FBYSxVQUFTdkwsS0FBVCxFQUErQjtBQUFBLE1BQWZrVSxNQUFlLHVFQUFOLElBQU07O0FBQzFDLE1BQUcsUUFBT2xVLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBaEIsSUFBNEIsQ0FBQ0EsS0FBaEMsRUFBdUM7QUFDckMsV0FBT0EsS0FBUDtBQUNEOztBQUVELFdBQVMrVCxJQUFULENBQWM3RSxHQUFkLEVBQW1CO0FBQ2pCQSxVQUFNck0sTUFBTTBQLE9BQU4sQ0FBY3JELEdBQWQsaUNBQXdCQSxHQUF4QixrQkFBa0NBLEdBQWxDLENBQU47O0FBRUEsUUFBRyxDQUFDZ0YsTUFBSixFQUFZO0FBQ1YsYUFBT2hGLEdBQVA7QUFDRDs7QUFFRCxTQUFJLElBQUk5UCxDQUFSLElBQWE4UCxHQUFiLEVBQWtCO0FBQ2hCLFVBQUcsQ0FBQ0EsSUFBSTdQLGNBQUosQ0FBbUJELENBQW5CLENBQUosRUFBMkI7QUFDekI7QUFDRDs7QUFFRCxVQUFHOFAsSUFBSTlQLENBQUosS0FBVSxRQUFPOFAsSUFBSTlQLENBQUosQ0FBUCxLQUFpQixRQUE5QixFQUF3QztBQUN0QzhQLFlBQUk5UCxDQUFKLElBQVMyVSxLQUFLN0UsSUFBSTlQLENBQUosQ0FBTCxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPOFAsR0FBUDtBQUNEOztBQUVELFNBQU82RSxLQUFLL1QsS0FBTCxDQUFQO0FBQ0QsQ0ExQkQ7O0FBNEJBOzs7Ozs7QUFNQXlGLE1BQU0wSCxrQkFBTixHQUEyQixVQUFTbk4sS0FBVCxFQUFnQjtBQUN6QyxNQUFHQSxVQUFVLEtBQVYsSUFBbUJBLFVBQVUsSUFBN0IsSUFBcUNBLFVBQVVKLFNBQWxELEVBQTZEO0FBQzNELFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQUdJLHVDQUFILEVBQWtDO0FBQ2hDLFdBQU8sZ0JBQVA7QUFDRDs7QUFFRCxNQUFHLE9BQU9BLEtBQVAsSUFBZ0IsVUFBbkIsRUFBK0I7QUFDN0IsV0FBTyxtQkFBUDtBQUNEOztBQUVELE1BQUcsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUFuQixFQUE2QjtBQUMzQixXQUFPa0IsT0FBTzRCLFNBQVAsQ0FBaUJ6RixRQUFqQixDQUEwQmdILElBQTFCLENBQStCckUsS0FBL0IsQ0FBUDtBQUNEOztBQUVELFNBQU9BLFFBQVEsRUFBZjtBQUNELENBbEJEOztBQW9CQTs7Ozs7OztBQU9BeUYsTUFBTTBPLE9BQU4sR0FBZ0IsVUFBVVIsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQzlCLE1BQUlELGFBQWFFLElBQWQsSUFBd0JELGFBQWFDLElBQXhDLEVBQStDO0FBQzdDLFdBQU9GLEVBQUVHLE9BQUYsT0FBZ0JGLEVBQUVFLE9BQUYsRUFBdkI7QUFDRDtBQUNELE1BQUcsT0FBT0gsQ0FBUCxJQUFZLFVBQVosSUFBMEIsT0FBT0MsQ0FBUCxJQUFZLFVBQXpDLEVBQXFEO0FBQ25ELFdBQU9ELEVBQUV0VyxRQUFGLE9BQWlCdVcsRUFBRXZXLFFBQUYsRUFBeEI7QUFDRCxHQUZELE1BR0ssSUFBRyxRQUFPc1csQ0FBUCx5Q0FBT0EsQ0FBUCxNQUFZLFFBQVosSUFBd0IsUUFBT0MsQ0FBUCx5Q0FBT0EsQ0FBUCxNQUFZLFFBQXZDLEVBQWlEO0FBQ3BELFFBQUdELE1BQU0sSUFBTixJQUFjQyxNQUFNLElBQXZCLEVBQTZCO0FBQzNCLGFBQU9ELE1BQU1DLENBQWI7QUFDRDs7QUFFRCxRQUFHMVMsT0FBT2hFLElBQVAsQ0FBWXlXLENBQVosRUFBZTFULE1BQWYsSUFBeUJpQixPQUFPaEUsSUFBUCxDQUFZMFcsQ0FBWixFQUFlM1QsTUFBM0MsRUFBbUQ7QUFDakQsYUFBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBSSxJQUFJYixDQUFSLElBQWF1VSxDQUFiLEVBQWdCO0FBQ2QsVUFBRyxDQUFDQSxFQUFFdFUsY0FBRixDQUFpQkQsQ0FBakIsQ0FBSixFQUF5QjtBQUN2QjtBQUNEOztBQUVELFVBQUcsQ0FBQyxLQUFLK1UsT0FBTCxDQUFhUixFQUFFdlUsQ0FBRixDQUFiLEVBQW1Cd1UsRUFBRXhVLENBQUYsQ0FBbkIsQ0FBSixFQUE4QjtBQUM1QixlQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELFdBQU8sSUFBUDtBQUNEOztBQUVELFNBQU91VSxNQUFNQyxDQUFiO0FBQ0QsQ0E5QkQ7O0FBZ0NBOzs7Ozs7Ozs7QUFTQW5PLE1BQU02RixvQkFBTixHQUE2QixVQUFTOEksT0FBVCxFQUFrQkMsUUFBbEIsRUFBNEJDLFlBQTVCLEVBQTBDQyxXQUExQyxFQUF1RDtBQUNsRixNQUFHSCxZQUFZQyxRQUFmLEVBQXlCO0FBQ3ZCLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU8sS0FBS0YsT0FBTCxDQUFhalEsVUFBVWpFLE1BQVYsSUFBb0IsQ0FBcEIsR0FBdUJzVSxXQUF2QixHQUFvQyxLQUFLaEosSUFBTCxDQUFVNkksT0FBVixDQUFqRCxFQUFxRUUsWUFBckUsQ0FBUDtBQUNELENBTkQ7O0FBUUE7Ozs7Ozs7Ozs7QUFVQTdPLE1BQU0rTyxrQkFBTixHQUEyQixVQUFTQyxJQUFULEVBQWU7QUFDeEMsTUFBSXJYLEtBQUs4SCxTQUFTd1AsYUFBVCxDQUF1QixLQUF2QixDQUFUO0FBQ0EsTUFBSTFVLGNBQUo7O0FBRUE1QyxLQUFHdVgsV0FBSCxHQUFpQkYsSUFBakI7QUFDQXpVLFVBQVE1QyxHQUFHd0IsU0FBWDtBQUNBeEIsS0FBRzRHLE1BQUg7QUFDQTVHLE9BQUssSUFBTDs7QUFFQSxTQUFPNEMsS0FBUDtBQUNELENBVkQ7O0FBWUE7Ozs7Ozs7Ozs7QUFVQXlGLE1BQU1tUCxrQkFBTixHQUEyQixVQUFTSCxJQUFULEVBQWU7QUFDeEMsTUFBSXJYLEtBQUs4SCxTQUFTd1AsYUFBVCxDQUF1QixVQUF2QixDQUFUO0FBQ0EsTUFBSTFVLGNBQUo7O0FBRUE1QyxLQUFHd0IsU0FBSCxHQUFlNlYsSUFBZjtBQUNBelUsVUFBUTVDLEdBQUc0QyxLQUFYO0FBQ0E1QyxLQUFHNEcsTUFBSDtBQUNBNUcsT0FBSyxJQUFMOztBQUVBLFNBQU80QyxLQUFQO0FBQ0QsQ0FWRDs7QUFZQTs7Ozs7O0FBTUF5RixNQUFNbUksV0FBTixHQUFvQixVQUFTN08sR0FBVCxFQUFjO0FBQ2hDLFNBQU9BLElBQUlKLE9BQUosQ0FBWSxTQUFaLEVBQXVCLFVBQUNpTixDQUFELEVBQUlnRCxDQUFKO0FBQUEsV0FBVUEsRUFBRVosV0FBRixFQUFWO0FBQUEsR0FBdkIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1BdkksTUFBTTlFLFVBQU4sR0FBbUIsVUFBUzVCLEdBQVQsRUFBYztBQUMvQixTQUFPQSxJQUFJSixPQUFKLENBQVksVUFBWixFQUF3QixVQUFDaU4sQ0FBRCxFQUFJZ0QsQ0FBSjtBQUFBLGlCQUFjQSxFQUFFOU4sV0FBRixFQUFkO0FBQUEsR0FBeEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7Ozs7O0FBV0EyRSxNQUFNNEYsaUJBQU4sR0FBMEIsVUFBU25PLElBQVQsRUFBZTJYLE1BQWYsRUFBdUI7QUFDL0MsTUFBSVQsZ0JBQUo7QUFDQSxNQUFJblUsU0FBUy9DLEtBQUsrQyxNQUFsQjtBQUNBLE1BQUlYLElBQUksQ0FBUjs7QUFFQXBDLE9BQUs0WCxNQUFMLENBQVksVUFBU0MsQ0FBVCxFQUFZM1YsQ0FBWixFQUFlO0FBQ3pCRTs7QUFFQSxRQUFHLFFBQU95VixDQUFQLHlDQUFPQSxDQUFQLE1BQVksUUFBZixFQUF5QjtBQUN2QixhQUFPQSxDQUFQO0FBQ0Q7O0FBRUQsUUFBR0EsRUFBRTNWLENBQUYsTUFBU1EsU0FBWixFQUF1QjtBQUNyQixhQUFPLEVBQVA7QUFDRDs7QUFFQU4sU0FBS1csTUFBTixLQUFrQm1VLFVBQVVXLEVBQUUzVixDQUFGLENBQTVCO0FBQ0EsV0FBTzJWLEVBQUUzVixDQUFGLENBQVA7QUFDRCxHQWJELEVBYUd5VixNQWJIOztBQWVBLFNBQU9ULE9BQVA7QUFDRCxDQXJCRDs7QUF1QkE7Ozs7Ozs7Ozs7O0FBV0EzTyxNQUFNK0osaUJBQU4sR0FBMEIsVUFBU3RTLElBQVQsRUFBZTJYLE1BQWYsRUFBdUI7QUFDL0MsTUFBSUcsTUFBTSxLQUFWO0FBQ0EsTUFBSS9VLFNBQVMvQyxLQUFLK0MsTUFBbEI7QUFDQSxNQUFJWCxJQUFJLENBQVI7O0FBRUFwQyxPQUFLNFgsTUFBTCxDQUFZLFVBQVNDLENBQVQsRUFBWTNWLENBQVosRUFBZTtBQUN6QkU7O0FBRUEsUUFBRyxRQUFPeVYsQ0FBUCx5Q0FBT0EsQ0FBUCxNQUFZLFFBQWYsRUFBeUI7QUFDdkIsYUFBTyxDQUFDLENBQUNBLENBQVQ7QUFDRDs7QUFFRCxRQUFHLENBQUNBLEVBQUUxVixjQUFGLENBQWlCRCxDQUFqQixDQUFKLEVBQXlCO0FBQ3ZCLGFBQU8sRUFBUDtBQUNEOztBQUVBRSxTQUFLVyxNQUFOLEtBQWtCK1UsTUFBTUQsRUFBRTFWLGNBQUYsQ0FBaUJELENBQWpCLENBQXhCO0FBQ0EsV0FBTzJWLEVBQUUzVixDQUFGLENBQVA7QUFDRCxHQWJELEVBYUd5VixNQWJIOztBQWVBLFNBQU9HLEdBQVA7QUFDRCxDQXJCRDs7QUF1QkE7Ozs7Ozs7Ozs7Ozs7QUFhQXZQLE1BQU01RixpQkFBTixHQUEwQixVQUFTM0MsSUFBVCxFQUFlMlgsTUFBZixFQUF1QjVWLEVBQXZCLEVBQTJCO0FBQ25ELE1BQUltVixVQUFVeFUsU0FBZDtBQUNBLE1BQUlLLFNBQVMvQyxLQUFLK0MsTUFBbEI7QUFDQSxNQUFJWCxJQUFJLENBQVI7O0FBRUFwQyxPQUFLNFgsTUFBTCxDQUFZLFVBQVNDLENBQVQsRUFBWTNWLENBQVosRUFBZTtBQUN6QkU7O0FBRUEsUUFBRyxRQUFPeVYsQ0FBUCx5Q0FBT0EsQ0FBUCxNQUFZLFFBQWYsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRCxRQUFHLENBQUNBLEVBQUUxVixjQUFGLENBQWlCRCxDQUFqQixDQUFKLEVBQXlCO0FBQ3ZCLGFBQU9nVixVQUFVVyxFQUFFM1YsQ0FBRixJQUFPSCxHQUFHSyxLQUFLVyxNQUFSLENBQXhCO0FBQ0Q7O0FBRUQ4VSxNQUFFM1YsQ0FBRixJQUFPSCxHQUFHSyxLQUFLVyxNQUFSLEVBQWdCOFUsRUFBRTNWLENBQUYsQ0FBaEIsQ0FBUDtBQUNBZ1YsY0FBVVcsQ0FBVjs7QUFFQSxXQUFPQSxFQUFFM1YsQ0FBRixDQUFQO0FBQ0QsR0FmRCxFQWVHeVYsTUFmSDs7QUFpQkEsU0FBT1QsT0FBUDtBQUNELENBdkJEOztBQXlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBM08sTUFBTWtLLG9CQUFOLEdBQTZCLFVBQVN6UyxJQUFULEVBQWUyWCxNQUFmLEVBQXVCNVYsRUFBdkIsRUFBMkI7QUFDdEQsTUFBSWdCLFNBQVMvQyxLQUFLK0MsTUFBbEI7QUFDQSxNQUFJRCxjQUFKO0FBQ0EsTUFBSVYsSUFBSSxDQUFSOztBQUVBcEMsT0FBSzRYLE1BQUwsQ0FBWSxVQUFTQyxDQUFULEVBQVkzVixDQUFaLEVBQWU7QUFDekJFOztBQUVBLFFBQUcsUUFBT3lWLENBQVAseUNBQU9BLENBQVAsTUFBWSxRQUFmLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsUUFBRyxDQUFDQSxFQUFFMVYsY0FBRixDQUFpQkQsQ0FBakIsQ0FBSixFQUF5QjtBQUN2QixhQUFPLEVBQVA7QUFDRDs7QUFFRCxRQUFHRSxLQUFLVyxNQUFSLEVBQWdCO0FBQ2RELGNBQVErVSxFQUFFM1YsQ0FBRixDQUFSOztBQUVBLFVBQUcsQ0FBQ0gsRUFBRCxJQUFPQSxHQUFHZSxLQUFILENBQVYsRUFBcUI7QUFDbkIsZUFBTytVLEVBQUUzVixDQUFGLENBQVA7QUFDRDs7QUFFRCxhQUFPWSxLQUFQO0FBQ0Q7O0FBRUQsV0FBTytVLEVBQUUzVixDQUFGLENBQVA7QUFDRCxHQXRCRCxFQXNCR3lWLE1BdEJIOztBQXdCQSxTQUFPN1UsS0FBUDtBQUNELENBOUJEOztBQWlDQTs7Ozs7Ozs7QUFRQXlGLE1BQU13TCwyQkFBTixHQUFvQyxVQUFTUCxNQUFULEVBQWlCM04sR0FBakIsRUFBc0I7QUFDeEQsTUFBSTNFLFFBQVEsU0FBUkEsS0FBUSxDQUFDOFEsR0FBRCxFQUFTO0FBQ25CLFFBQUdBLElBQUkrRixvQkFBSixDQUF5QmxTLEdBQXpCLENBQUgsRUFBa0M7QUFDaEMsYUFBT21NLEdBQVA7QUFDRDs7QUFFRCxRQUFJZ0csUUFBUWhVLE9BQU9pVSxjQUFQLENBQXNCakcsR0FBdEIsQ0FBWjs7QUFFQSxRQUFHLENBQUNnRyxLQUFKLEVBQVc7QUFDVCxhQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFPOVcsTUFBTThXLEtBQU4sQ0FBUDtBQUNELEdBWkQ7O0FBY0EsU0FBTzlXLE1BQU1zUyxNQUFOLENBQVA7QUFDRCxDQWhCRDs7QUFrQkE7Ozs7Ozs7QUFPQWpMLE1BQU1zTCxvQkFBTixHQUE2QixVQUFTTCxNQUFULEVBQWlCM04sR0FBakIsRUFBc0I7QUFDakQsTUFBSTNFLFFBQVEsU0FBUkEsS0FBUSxDQUFDOFEsR0FBRCxFQUFTO0FBQ25CLFFBQUdBLElBQUk3UCxjQUFKLENBQW1CMEQsR0FBbkIsQ0FBSCxFQUE0QjtBQUMxQixhQUFPbU0sR0FBUDtBQUNEOztBQUVELFFBQUlnRyxRQUFRaFUsT0FBT2lVLGNBQVAsQ0FBc0JqRyxHQUF0QixDQUFaOztBQUVBLFFBQUcsQ0FBQ2dHLEtBQUosRUFBVztBQUNULGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU85VyxNQUFNOFcsS0FBTixDQUFQO0FBQ0QsR0FaRDs7QUFjQSxTQUFPOVcsTUFBTXNTLE1BQU4sQ0FBUDtBQUNELENBaEJEOztBQWtCQTs7Ozs7O0FBTUFqTCxNQUFNMlAsZUFBTixHQUF3QixVQUFVcFYsS0FBVixFQUFpQjtBQUN2QyxNQUFHLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBaEIsSUFBNEIsQ0FBQ0EsS0FBaEMsRUFBdUM7QUFDckMsV0FBT0EsS0FBUDtBQUNEOztBQUVELE1BQUk2UixRQUFRLFNBQVJBLEtBQVEsQ0FBQzNDLEdBQUQsRUFBUztBQUNuQixTQUFJLElBQUk5UCxDQUFSLElBQWE4UCxHQUFiLEVBQWtCO0FBQ2hCLFVBQUksQ0FBQ0EsSUFBSTdQLGNBQUosQ0FBbUJELENBQW5CLENBQUwsRUFBNEI7QUFDMUI7QUFDRDs7QUFFRCxVQUFHOFAsSUFBSTlQLENBQUosS0FBVSxRQUFPOFAsSUFBSTlQLENBQUosQ0FBUCxLQUFpQixRQUE5QixFQUF3QztBQUN0QyxZQUFHOFAsSUFBSTlQLENBQUosRUFBTzZELFNBQVYsRUFBcUI7QUFDbkJpTSxjQUFJOVAsQ0FBSixJQUFTOFAsSUFBSTlQLENBQUosRUFBT2tTLFFBQWhCO0FBQ0Q7O0FBRURPLGNBQU0zQyxJQUFJOVAsQ0FBSixDQUFOO0FBQ0Q7QUFDRjtBQUNGLEdBZEQ7O0FBZ0JBLE1BQUdZLE1BQU1pRCxTQUFULEVBQW9CO0FBQ2xCakQsWUFBUUEsTUFBTXNSLFFBQWQ7QUFDRDs7QUFFRE8sUUFBTTdSLEtBQU47O0FBRUEsU0FBT0EsS0FBUDtBQUNELENBNUJEOztBQStCQTs7Ozs7OztBQU9BeUYsTUFBTTNHLGtCQUFOLEdBQTJCLFlBQWlDO0FBQUEsTUFBeEJtQixNQUF3Qix1RUFBZixFQUFlO0FBQUEsTUFBWGhCLEVBQVcsdUVBQU4sSUFBTTs7QUFDMUQsTUFBSUYsTUFBTXNXLEtBQUtDLE1BQUwsR0FBY2pZLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJrWSxTQUEzQixDQUFxQyxDQUFyQyxFQUF3Q3RWLFNBQVMsQ0FBakQsQ0FBVjtBQUNBLE1BQUlGLE1BQU0sRUFBVjs7QUFFQSxPQUFJLElBQUlULElBQUksQ0FBUixFQUFXQyxJQUFJUixJQUFJa0IsTUFBdkIsRUFBK0JYLElBQUlDLENBQW5DLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxRQUFHK1YsS0FBS0MsTUFBTCxLQUFnQixJQUFuQixFQUF5QjtBQUN2QnZWLGFBQU9oQixJQUFJTyxDQUFKLEVBQU8wTyxXQUFQLEVBQVA7QUFDRCxLQUZELE1BR0s7QUFDSGpPLGFBQU9oQixJQUFJTyxDQUFKLENBQVA7QUFDRDtBQUNGOztBQUVELE1BQUdMLE1BQU1BLEdBQUdjLEdBQUgsQ0FBVCxFQUFrQjtBQUNoQixXQUFPLEtBQUtqQixrQkFBTCxDQUF3Qm1CLE1BQXhCLEVBQWdDaEIsRUFBaEMsQ0FBUDtBQUNEOztBQUVELFNBQU9jLEdBQVA7QUFDRCxDQWxCRDs7a0JBb0JlMEYsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2ckJmOzs7Ozs7OztJQUVhK1AsTyxXQUFBQSxPO0FBQ1gsbUJBQVlDLE9BQVosRUFBcUJDLFFBQXJCLEVBQStCO0FBQUE7O0FBQzdCLFNBQUtELE9BQUwsR0FBZUEsVUFBVUEsUUFBUTlXLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsRUFBdkIsSUFBNkIsR0FBdkMsR0FBNkMsRUFBNUQ7O0FBRUEsU0FBSytXLFFBQUw7QUFDRUMsMkJBQXFCO0FBRHZCLE9BRU1ELFlBQVksRUFGbEI7QUFJRDs7QUFFRDs7Ozs7Ozs7OzswQkFNTXZaLE8sRUFBUztBQUFBOztBQUNiLGFBQU8sSUFBSThGLE9BQUosQ0FBWSxVQUFDcUcsT0FBRCxFQUFVc04sTUFBVixFQUFxQjtBQUN0QyxZQUFJQyxZQUFKO0FBQ0EsWUFBSUMsWUFBSjs7QUFFQTNaLCtCQUFjLE1BQUt1WixRQUFuQixFQUFpQ3ZaLFdBQVcsRUFBNUM7O0FBRUEyWixjQUFNLElBQUlDLGNBQUosRUFBTjtBQUNDLGVBQU81WixRQUFRNlosT0FBZixJQUEwQixVQUEzQixJQUEwQzdaLFFBQVE2WixPQUFSLENBQWdCRixHQUFoQixDQUExQztBQUNBM1osa0JBQVUsTUFBSzhaLGVBQUwsQ0FBcUI5WixPQUFyQixDQUFWO0FBQ0EwWixjQUFNLE1BQUtKLE9BQUwsUUFBaUIsTUFBS0EsT0FBdEIsR0FBZ0N0WixRQUFRMFosR0FBUixDQUFZbFgsT0FBWixDQUFvQixLQUFwQixFQUEyQixFQUEzQixDQUFoQyxHQUFrRXhDLFFBQVEwWixHQUFoRjtBQUNBQyxZQUFJSSxJQUFKLENBQVMvWixRQUFRZ2EsTUFBakIsRUFBeUJOLEdBQXpCLEVBQThCLElBQTlCLEVBQW9DMVosUUFBUWlhLElBQTVDLEVBQWtEamEsUUFBUWthLFFBQTFEO0FBQ0FsYSxnQkFBUW1hLE9BQVIsR0FBa0JuYSxRQUFRbWEsT0FBUixJQUFtQixFQUFyQzs7QUFFQSxZQUFHbmEsUUFBUW9hLElBQVgsRUFBaUI7QUFDZnBhLGtCQUFRcWEsSUFBUixHQUFlcEosS0FBS0MsU0FBTCxDQUFlbFIsUUFBUW9hLElBQXZCLENBQWY7QUFDQXBhLGtCQUFRbWEsT0FBUixDQUFnQixjQUFoQixJQUFrQyxrQkFBbEM7QUFDQW5hLGtCQUFRc2EsWUFBUixHQUF1QnRhLFFBQVFzYSxZQUFSLElBQXdCLE1BQS9DO0FBQ0QsU0FKRCxNQUtLLElBQUd0YSxRQUFRdWEsSUFBWCxFQUFpQjtBQUNwQnZhLGtCQUFRcWEsSUFBUixHQUFlLE1BQUtHLGNBQUwsQ0FBb0J4YSxRQUFRdWEsSUFBNUIsQ0FBZjtBQUNBdmEsa0JBQVFtYSxPQUFSLENBQWdCLGNBQWhCLElBQWtDLHFCQUFsQztBQUNEOztBQUVELFlBQUduYSxRQUFRa0QsY0FBUixDQUF1QixTQUF2QixDQUFILEVBQXNDO0FBQ3BDeVcsY0FBSWMsT0FBSixHQUFjemEsUUFBUXlhLE9BQXRCO0FBQ0Q7O0FBRUQsWUFBR3phLFFBQVFzYSxZQUFYLEVBQXlCO0FBQ3ZCWCxjQUFJVyxZQUFKLEdBQW1CdGEsUUFBUXNhLFlBQTNCO0FBQ0Q7O0FBRUQsWUFBR3RhLFFBQVEwYSxlQUFYLEVBQTRCO0FBQzFCZixjQUFJZSxlQUFKLEdBQXNCMWEsUUFBUTBhLGVBQTlCO0FBQ0Q7O0FBRUQsWUFBRzFhLFFBQVFtYSxPQUFYLEVBQW9CO0FBQ2xCLGVBQUksSUFBSWxYLENBQVIsSUFBYWpELFFBQVFtYSxPQUFyQixFQUE4QjtBQUM1QixnQkFBRyxDQUFDbmEsUUFBUW1hLE9BQVIsQ0FBZ0JqWCxjQUFoQixDQUErQkQsQ0FBL0IsQ0FBSixFQUF1QztBQUNyQztBQUNEOztBQUVEMFcsZ0JBQUlnQixnQkFBSixDQUFxQjFYLENBQXJCLEVBQXdCakQsUUFBUW1hLE9BQVIsQ0FBZ0JsWCxDQUFoQixDQUF4QjtBQUNEO0FBQ0Y7O0FBRUQsWUFBR2pELFFBQVE0YSxNQUFYLEVBQW1CO0FBQ2pCLGNBQUloWSxNQUFNLE1BQUtpWSxhQUFMLENBQW1CN2EsUUFBUTRhLE1BQTNCLENBQVY7O0FBRUEsY0FBR2hZLEdBQUgsRUFBUTtBQUNOOFcsbUJBQU8sTUFBTTlXLEdBQWI7QUFDRDtBQUNGOztBQUVELFlBQUcsT0FBTzVDLFFBQVE4YSxVQUFmLElBQTZCLFVBQWhDLEVBQTRDO0FBQzFDbkIsY0FBSW9CLFVBQUosR0FBaUIsWUFBTTtBQUNyQixtQkFBTy9hLFFBQVE4YSxVQUFSLENBQW1CbkIsR0FBbkIsQ0FBUDtBQUNELFdBRkQ7QUFHRDs7QUFFREEsWUFBSXFCLE1BQUosR0FBYSxZQUFNO0FBQ2pCLGNBQUlDLFdBQVcsTUFBS0MsY0FBTCxDQUFvQnZCLEdBQXBCLENBQWY7O0FBRUEsY0FBRyxDQUFDQSxJQUFJd0IsTUFBSixHQUFhLEVBQWQsRUFBa0I5RCxLQUFsQixDQUF3QnJYLFFBQVF3WixtQkFBaEMsQ0FBSCxFQUF5RDtBQUN2RCxnQkFBSXZKLE1BQU0sSUFBSTFPLEtBQUosa0JBQXlCbVksR0FBekIsc0NBQTZEQyxJQUFJd0IsTUFBakUsQ0FBVjs7QUFFQWxMLGdCQUFJZ0wsUUFBSixHQUFlQSxRQUFmOztBQUVBLG1CQUFPeEIsT0FBT3hKLEdBQVAsQ0FBUDtBQUNEOztBQUVEOUQsa0JBQVE4TyxRQUFSO0FBQ0QsU0FaRDs7QUFjQXRCLFlBQUljLE9BQUosR0FBYyxZQUFNO0FBQ2xCaEIsaUJBQU8sSUFBSWxZLEtBQUosa0JBQXlCbVksR0FBekIsaUJBQVA7QUFDRCxTQUZEOztBQUlBQyxZQUFJeUIsT0FBSixHQUFjLFVBQUNuTCxHQUFELEVBQVM7QUFDckJ3SixpQkFBT3hKLEdBQVA7QUFDRCxTQUZEOztBQUlBMEosWUFBSTBCLElBQUosQ0FBU3JiLFFBQVFxYSxJQUFqQjtBQUNELE9BbEZNLENBQVA7QUFtRkQ7O0FBRUQ7Ozs7Ozs7OztrQ0FNY3RILEcsRUFBSztBQUNqQixVQUFJdUksTUFBTSxHQUFWO0FBQ0EsVUFBSUMsS0FBSyxHQUFUOztBQUVBLFVBQUksQ0FBQ3hJLEdBQUQsSUFBUSxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBM0IsRUFBcUM7QUFDbkMsZUFBTyxFQUFQO0FBQ0Q7O0FBRUQsYUFBT2hPLE9BQU9oRSxJQUFQLENBQVlnUyxHQUFaLEVBQWlCL1IsR0FBakIsQ0FBcUIsVUFBQ2lDLENBQUQsRUFBTztBQUNqQyxZQUFJdVksS0FBS0MsbUJBQW1CeFksQ0FBbkIsQ0FBVDs7QUFFQSxZQUFJeUQsTUFBTTBQLE9BQU4sQ0FBY3JELElBQUk5UCxDQUFKLENBQWQsQ0FBSixFQUEyQjtBQUN6QnVZLGVBQUtDLG1CQUFtQnhZLENBQW5CLENBQUw7O0FBRUEsaUJBQU84UCxJQUFJOVAsQ0FBSixFQUFPakMsR0FBUCxDQUFXLFVBQUMwYSxDQUFELEVBQUl2WSxDQUFKLEVBQVU7QUFDMUIsbUJBQU9xWSxZQUFTclksQ0FBVCxVQUFnQm9ZLEVBQWhCLEdBQXFCRSxtQkFBbUJDLENBQW5CLENBQTVCO0FBQ0QsV0FGTSxFQUVKdmEsSUFGSSxDQUVDbWEsR0FGRCxDQUFQO0FBR0QsU0FORCxNQU9LLElBQUd2SSxJQUFJOVAsQ0FBSixLQUFVLFFBQU84UCxJQUFJOVAsQ0FBSixDQUFQLE1BQWtCLFFBQS9CLEVBQXlDO0FBQzVDLGNBQUkwWSxNQUFNLEVBQVY7O0FBRUE1VyxpQkFBT2hFLElBQVAsQ0FBWWdTLElBQUk5UCxDQUFKLENBQVosRUFBb0JqQyxHQUFwQixDQUF3QixVQUFDNEYsR0FBRCxFQUFTO0FBQy9CK1UsZ0JBQUl0WixJQUFKLENBQVNtWixZQUFTNVUsR0FBVCxVQUFrQjJVLEVBQWxCLEdBQXVCRSxtQkFBbUIxSSxJQUFJOVAsQ0FBSixFQUFPMkQsR0FBUCxDQUFuQixDQUFoQztBQUNELFdBRkQ7O0FBSUEsaUJBQU8rVSxJQUFJeGEsSUFBSixDQUFTbWEsR0FBVCxDQUFQO0FBQ0QsU0FSSSxNQVNBO0FBQ0gsaUJBQU9FLEtBQUtELEVBQUwsR0FBVUUsbUJBQW1CMUksSUFBSTlQLENBQUosQ0FBbkIsQ0FBakI7QUFDRDtBQUNGLE9BdEJNLEVBc0JKOUIsSUF0QkksQ0FzQkNtYSxHQXRCRCxDQUFQO0FBdUJEOztBQUVEOzs7Ozs7Ozs7b0NBTWdCMVksRyxFQUFLO0FBQ25CLFVBQUlnWixRQUFRLEVBQVo7QUFDQSxVQUFJQyxPQUFPalosSUFBSWtaLEtBQUosQ0FBVSxHQUFWLENBQVg7O0FBRUEsV0FBSSxJQUFJM1ksSUFBSSxDQUFSLEVBQVdDLElBQUl5WSxLQUFLL1gsTUFBeEIsRUFBZ0NYLElBQUdDLENBQW5DLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxZQUFJNFksTUFBT0YsS0FBSzFZLENBQUwsRUFBUTJZLEtBQVIsQ0FBYyxHQUFkLENBQVg7QUFDQSxZQUFJbFYsTUFBTW9WLG1CQUFtQkQsSUFBSSxDQUFKLENBQW5CLENBQVY7QUFDQSxZQUFJblksTUFBTW9ZLG1CQUFtQkQsSUFBSSxDQUFKLENBQW5CLENBQVY7O0FBRUEsWUFBRyxDQUFDblYsR0FBSixFQUFTO0FBQ1A7QUFDRDs7QUFFRCxZQUFHRixNQUFNMFAsT0FBTixDQUFjd0YsTUFBTWhWLEdBQU4sQ0FBZCxDQUFILEVBQThCO0FBQzVCZ1YsZ0JBQU1oVixHQUFOLEVBQVd2RSxJQUFYLENBQWdCdUIsR0FBaEI7QUFDRCxTQUZELE1BR0ssSUFBR2dZLE1BQU1oVixHQUFOLENBQUgsRUFBZTtBQUNsQmdWLGdCQUFNaFYsR0FBTixJQUFhLENBQUNnVixNQUFNaFYsR0FBTixDQUFELEVBQWFoRCxHQUFiLENBQWI7QUFDRCxTQUZJLE1BR0E7QUFDSGdZLGdCQUFNaFYsR0FBTixJQUFhaEQsR0FBYjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT2dZLEtBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7O21DQVNlN0ksRyxFQUFrQztBQUFBLFVBQTdCNUYsSUFBNkIsdUVBQXRCLElBQXNCO0FBQUEsVUFBaEI4TyxTQUFnQix1RUFBSixFQUFJOztBQUMvQyxVQUFJQyxLQUFLL08sUUFBUSxJQUFJZ1AsUUFBSixFQUFqQjs7QUFFQSxXQUFJLElBQUlsWixDQUFSLElBQWE4UCxHQUFiLEVBQWtCO0FBQ2hCLFlBQUdBLElBQUk3UCxjQUFKLENBQW1CRCxDQUFuQixLQUF5QjhQLElBQUk5UCxDQUFKLENBQTVCLEVBQW9DO0FBQ2xDLGNBQUkyRCxNQUFNcVYsWUFBV0EsWUFBWSxHQUFaLEdBQWtCaFosQ0FBbEIsR0FBc0IsR0FBakMsR0FBc0NBLENBQWhEOztBQUVBLGNBQUk4UCxJQUFJOVAsQ0FBSixhQUFrQnlVLElBQXRCLEVBQTRCO0FBQzFCd0UsZUFBR0UsTUFBSCxDQUFVeFYsR0FBVixFQUFlbU0sSUFBSTlQLENBQUosRUFBT29aLFdBQVAsRUFBZjtBQUNELFdBRkQsTUFHSyxJQUFJLGdCQUFNeEgsYUFBTixDQUFvQjlCLElBQUk5UCxDQUFKLENBQXBCLENBQUosRUFBaUM7QUFDcEMsaUJBQUt1WCxjQUFMLENBQW9CekgsSUFBSTlQLENBQUosQ0FBcEIsRUFBNEJpWixFQUE1QixFQUFnQ3RWLEdBQWhDO0FBQ0QsV0FGSSxNQUdBO0FBQ0hzVixlQUFHRSxNQUFILENBQVV4VixHQUFWLEVBQWVtTSxJQUFJOVAsQ0FBSixDQUFmO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU9pWixFQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztvQ0FNZ0JsYyxPLEVBQVM7QUFDdkIsYUFBT0EsT0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7bUNBTWUyWixHLEVBQUs7QUFDbEIsYUFBTztBQUNMQSxhQUFLQSxHQURBO0FBRUx4TSxjQUFNd00sSUFBSXNCLFFBRkw7QUFHTEUsZ0JBQVF4QixJQUFJd0I7QUFIUCxPQUFQO0FBS0Q7O0FBRUQ7Ozs7Ozs7Ozs7d0JBT0l6QixHLEVBQW1CO0FBQUEsVUFBZDFaLE9BQWMsdUVBQUosRUFBSTs7QUFDckJBLGNBQVEwWixHQUFSLEdBQWNBLEdBQWQ7QUFDQTFaLGNBQVFnYSxNQUFSLEdBQWlCLEtBQWpCOztBQUVBLGFBQU8sS0FBSzRCLEtBQUwsQ0FBVzViLE9BQVgsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzRCQU9PMFosRyxFQUFtQjtBQUFBLFVBQWQxWixPQUFjLHVFQUFKLEVBQUk7O0FBQ3hCQSxjQUFRMFosR0FBUixHQUFjQSxHQUFkO0FBQ0ExWixjQUFRZ2EsTUFBUixHQUFpQixRQUFqQjs7QUFFQSxhQUFPLEtBQUs0QixLQUFMLENBQVc1YixPQUFYLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozt5QkFPSzBaLEcsRUFBbUI7QUFBQSxVQUFkMVosT0FBYyx1RUFBSixFQUFJOztBQUN0QkEsY0FBUTBaLEdBQVIsR0FBY0EsR0FBZDtBQUNBMVosY0FBUWdhLE1BQVIsR0FBaUIsTUFBakI7O0FBRUEsYUFBTyxLQUFLNEIsS0FBTCxDQUFXNWIsT0FBWCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7d0JBT0kwWixHLEVBQW1CO0FBQUEsVUFBZDFaLE9BQWMsdUVBQUosRUFBSTs7QUFDckJBLGNBQVEwWixHQUFSLEdBQWNBLEdBQWQ7QUFDQTFaLGNBQVFnYSxNQUFSLEdBQWlCLEtBQWpCOztBQUVBLGFBQU8sS0FBSzRCLEtBQUwsQ0FBVzViLE9BQVgsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzBCQU9NMFosRyxFQUFtQjtBQUFBLFVBQWQxWixPQUFjLHVFQUFKLEVBQUk7O0FBQ3ZCQSxjQUFRMFosR0FBUixHQUFjQSxHQUFkO0FBQ0ExWixjQUFRZ2EsTUFBUixHQUFpQixPQUFqQjs7QUFFQSxhQUFPLEtBQUs0QixLQUFMLENBQVc1YixPQUFYLENBQVA7QUFDRDs7Ozs7O0FBR0gsSUFBTWtLLFVBQVUsSUFBSW1QLE9BQUosRUFBaEI7O0FBRUFuUCxRQUFRb1MsV0FBUixHQUFzQixFQUF0Qjs7QUFFQTs7Ozs7O0FBTUFwUyxRQUFRcVMsV0FBUixHQUFzQixVQUFTOWEsSUFBVCxFQUFlK2EsUUFBZixFQUF5QjtBQUM3QyxPQUFLRixXQUFMLENBQWlCN2EsSUFBakIsSUFBeUIrYSxRQUF6QjtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0F0UyxRQUFRdVMsY0FBUixHQUF5QixVQUFTaGIsSUFBVCxFQUFlO0FBQ3RDLFNBQU8sS0FBSzZhLFdBQUwsQ0FBaUI3YSxJQUFqQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQXNELE9BQU80RCxjQUFQLENBQXNCdUIsT0FBdEIsRUFBK0IsS0FBL0IsRUFBc0M7QUFDcEMrQyxPQUFLLGVBQU07QUFDVCxXQUFPL0MsUUFBUW9TLFdBQWY7QUFDRDtBQUhtQyxDQUF0Qzs7QUFNQXBTLFFBQVFtUCxPQUFSLEdBQWtCQSxPQUFsQjtrQkFDZW5QLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVVmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCVCxHOzs7Ozs2QkFHSDtBQUNkLHNCQUFNbEcsU0FBTixDQUFnQixLQUFoQixFQUF1QmtHLEdBQXZCO0FBQ0Esc0JBQU1sRyxTQUFOLENBQWdCLElBQWhCLEVBQXNCa0csR0FBdEI7QUFDQSxzQkFBTWxHLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBc0JrRyxHQUF0QjtBQUNBLHNCQUFNbEcsU0FBTixDQUFnQixPQUFoQixFQUF5QmtHLEdBQXpCO0FBQ0Esc0JBQU1sRyxTQUFOLENBQWdCLE9BQWhCLEVBQXlCa0csR0FBekI7QUFDQSxzQkFBTWxHLFNBQU4sQ0FBZ0IsT0FBaEIsRUFBeUJrRyxHQUF6QjtBQUNBLHNCQUFNbEcsU0FBTixDQUFnQixJQUFoQixFQUFzQm1aLElBQXRCO0FBQ0Esc0JBQU1uWixTQUFOLENBQWdCLE1BQWhCLEVBQXdCbVosSUFBeEI7QUFDRDs7O0FBRUQsaUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU4xVSxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxxSUFDVkEsSUFEVTs7QUFHbkIsVUFBSzJVLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFLQyxLQUFMLEdBQWEsSUFBYjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFWbUI7QUFXcEI7Ozs7OEJBRVMvUCxJLEVBQU07QUFDZCxXQUFLZ1EsSUFBTCxDQUFVaFEsSUFBVjtBQUNEOzs7OEJBRVM7QUFDUixXQUFLaVEsY0FBTDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLRCxJQUFMLENBQVUsS0FBS3BSLEtBQUwsQ0FBV3NSLEVBQXJCO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFJcGMsV0FBSjs7QUFFQSxXQUFJLElBQUlrQyxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbkMsRUFBTCxDQUFReUUsUUFBUixDQUFpQjVCLE1BQXBDLEVBQTRDWCxJQUFJQyxDQUFoRCxFQUFtREQsR0FBbkQsRUFBd0Q7QUFDdEQsWUFBSXdDLFFBQVEsS0FBSzFFLEVBQUwsQ0FBUXlFLFFBQVIsQ0FBaUJ2QyxDQUFqQixDQUFaOztBQUVBLFlBQUd3QyxNQUFNbEIsWUFBTixDQUFtQixXQUFuQixLQUFtQyxNQUF0QyxFQUE4QztBQUM1Q3hELGVBQUswRSxLQUFMOztBQUVBO0FBQ0Q7O0FBRUQxRSxhQUFLMEUsS0FBTDtBQUNEOztBQUVELFVBQUcsQ0FBQzFFLEVBQUosRUFBUTtBQUNOLGNBQU0sSUFBSU0sS0FBSixDQUFVLDhDQUFWLENBQU47QUFDRDs7QUFFRCxVQUFJZ0QsZ0JBQWdCdEQsR0FBR3dELFlBQUgsQ0FBZ0IsV0FBaEIsQ0FBcEI7O0FBRUEsVUFBR0YsaUJBQWlCLE1BQXBCLEVBQTRCO0FBQzFCLFlBQUloQixZQUFZLGdCQUFNQSxTQUFOLENBQWdCZ0IsaUJBQWlCdEQsR0FBR3lELE9BQXBDLENBQWhCOztBQUVBLFlBQUcsQ0FBQ25CLFNBQUosRUFBZTtBQUNidEMsYUFBR3NOLFlBQUgsQ0FBZ0IsV0FBaEIsRUFBNkIsTUFBN0I7QUFDRCxTQUZELE1BR0ssSUFBRyxFQUFFaEwsVUFBVW9ELFNBQVYsWUFBK0I4QyxHQUFqQyxDQUFILEVBQTBDO0FBQzdDLGNBQUk2VCxPQUFPdlUsU0FBU3dQLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDs7QUFFQStFLGVBQUszRyxXQUFMLENBQWlCMVYsRUFBakI7QUFDQUEsZUFBS3FjLElBQUw7QUFDRDtBQUNGOztBQUVELFdBQUtoRixJQUFMLEdBQVlyWCxHQUFHd0IsU0FBZjtBQUNBLFdBQUt3YSxXQUFMLEdBQW1CaGMsR0FBR3NjLFdBQXRCO0FBQ0EsV0FBS0wsaUJBQUwsR0FBeUJqYyxHQUFHdWMsU0FBNUI7QUFDQXZjLFNBQUc0RyxNQUFIO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsVUFBSTVHLEtBQUs4SCxTQUFTd1AsYUFBVCxDQUF1QixVQUF2QixDQUFUOztBQUVBdFgsU0FBR3dCLFNBQUgsR0FBZSxLQUFLeWEsaUJBQXBCO0FBQ0FqYyxXQUFLQSxHQUFHd2MsT0FBSCxDQUFXQyxVQUFoQjs7QUFFQSxhQUFPemMsRUFBUDtBQUNEOzs7eUJBRUkyRixHLEVBQUsvQyxLLEVBQU85QyxJLEVBQU00YyxLLEVBQU87QUFBQTs7QUFDNUIsV0FBS2IsT0FBTCxHQUFlYSxLQUFmO0FBQ0EsV0FBS2YsS0FBTCxHQUFhaFcsR0FBYjtBQUNBLFdBQUtpVyxPQUFMLEdBQWVoWixLQUFmO0FBQ0EsV0FBS2taLGlCQUFMLEdBQXlCLGdCQUFNM04sSUFBTixDQUFXdkwsS0FBWCxDQUF6Qjs7QUFFQSxVQUFJd00sT0FBTyxFQUFYO0FBQ0EsVUFBSXVOLFFBQVEsQ0FBWjs7QUFFQSxVQUFHL1osU0FBUyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQXpCLElBQXFDQSxNQUFNZ2EsTUFBOUMsRUFBc0Q7QUFDcER4TixlQUFPeE0sTUFBTWdhLE1BQWI7QUFDRDs7QUFFRCxVQUFHLEtBQUtiLFNBQUwsQ0FBZTNNLElBQWYsQ0FBSCxFQUF5QjtBQUN2QnpKLGNBQU15SixJQUFOO0FBQ0F1TixnQkFBUSxDQUFSO0FBQ0QsT0FIRCxNQUlLLElBQUcsS0FBS1osU0FBTCxDQUFlcFcsR0FBZixDQUFILEVBQXdCO0FBQzNCZ1gsZ0JBQVEsQ0FBUjtBQUNEOztBQUVELFVBQUdBLEtBQUgsRUFBVTtBQUNSLFlBQUlFLFdBQVcsS0FBS2QsU0FBTCxDQUFlcFcsR0FBZixDQUFmOztBQUVBLFlBQUdnWCxTQUFTLENBQVosRUFBZTtBQUNiLGNBQUlHLFNBQVNELFNBQVNFLFVBQVQsQ0FBb0JuYSxLQUFqQztBQUNBLGNBQUlvYSxRQUFRSCxTQUFTRSxVQUFULENBQW9CNU8sSUFBaEM7O0FBRUEsY0FBSSxLQUFLME4sT0FBTCxLQUFpQmdCLFNBQVNILEtBQTlCLEVBQXFDO0FBQ25DRyxxQkFBU0ksUUFBVDtBQUNEOztBQUVELGNBQUksS0FBS3RCLEtBQUwsS0FBZWtCLFNBQVNsWCxHQUE1QixFQUFpQztBQUMvQmtYLHFCQUFTSyxNQUFUO0FBQ0Q7O0FBRUQsY0FBSSxDQUFDLGdCQUFNaFAsb0JBQU4sQ0FBMkJ0TCxLQUEzQixFQUFrQ2thLE1BQWxDLEVBQTBDRSxLQUExQyxFQUFpRCxLQUFLbEIsaUJBQXRELENBQUwsRUFBK0U7QUFDN0VlLHFCQUFTTSxRQUFUO0FBQ0Q7O0FBRURyZCxlQUFLNkYsR0FBTCxJQUFZa1gsUUFBWjtBQUNBLGlCQUFPLEtBQUtkLFNBQUwsQ0FBZXBXLEdBQWYsQ0FBUDs7QUFFQSxpQkFBT2tYLFFBQVA7QUFDRDs7QUFFRCxhQUFLYixXQUFMLEdBQW1CYSxTQUFTN2MsRUFBVCxDQUFZc2MsV0FBL0I7QUFDQU8saUJBQVNqSCxTQUFUO0FBQ0Q7O0FBRUQsVUFBSTVWLEtBQUssS0FBS29kLHFCQUFMLEVBQVQ7O0FBRUFwZCxTQUFHd0IsU0FBSCxHQUFlLEtBQUs2VixJQUFwQjtBQUNBLFdBQUtyWCxFQUFMLENBQVFxZCxZQUFSLENBQXFCcmQsRUFBckIsRUFBeUIsS0FBS2djLFdBQTlCO0FBQ0Esc0JBQU0zWCxPQUFOLENBQWNyRSxFQUFkOztBQUVBLFVBQUc0QyxTQUFTLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBNUIsRUFBc0M7QUFDcEMsWUFBRyxDQUFDQSxNQUFNZ2EsTUFBVixFQUFrQjtBQUNoQnhOLGlCQUFPLGdCQUFNMU4sa0JBQU4sQ0FBeUIsRUFBekIsRUFBNkIsVUFBQ0MsR0FBRCxFQUFTO0FBQzNDLG1CQUFPLE9BQUtvYSxTQUFMLENBQWVwYSxHQUFmLENBQVA7QUFDRCxXQUZNLENBQVA7O0FBSUFtQyxpQkFBTzRELGNBQVAsQ0FBc0I5RSxLQUF0QixFQUE2QixRQUE3QixFQUF1QztBQUNyQytFLDBCQUFjLEtBRHVCO0FBRXJDQyx3QkFBWSxLQUZ5QjtBQUdyQzBWLHNCQUFVLEtBSDJCO0FBSXJDMWEsbUJBQU93TTtBQUo4QixXQUF2QztBQU1EOztBQUVEdFAsYUFBS3NQLElBQUwsSUFBYSxLQUFLc00sVUFBbEI7QUFDQSxlQUFPLEtBQUtLLFNBQUwsQ0FBZTNNLElBQWYsQ0FBUDtBQUNELE9BaEJELE1BaUJLO0FBQ0gsWUFBRyxnQkFBTXJRLE9BQU4sQ0FBY0csS0FBakIsRUFBd0I7QUFDdEIsY0FBSXFlLFNBQVMsT0FBTyxLQUFLM0IsT0FBWixJQUF1QixRQUF2QixTQUFxQyxLQUFLQSxPQUExQyxTQUFzRCxLQUFLQSxPQUF4RTs7QUFFQSxjQUFJN1UsT0FBTyxxR0FFU3dXLE1BRlQsb0JBRThCQSxNQUY5QixxQkFBWDs7QUFLQXJZLGtCQUFRQyxJQUFSLENBQWFXLEtBQWIsQ0FBbUJaLFFBQVFDLElBQTNCLEVBQWlDNEIsSUFBakM7QUFDRDs7QUFFRGpILGFBQUs2RixHQUFMLElBQVksS0FBSytWLFVBQWpCO0FBQ0EsZUFBTyxLQUFLSyxTQUFMLENBQWVwVyxHQUFmLENBQVA7QUFDRDs7QUFFRCxhQUFPM0YsR0FBR21CLE9BQVY7QUFDRDs7O3lCQUVJK0ssSSxFQUFNO0FBQ1QsVUFBSSxRQUFPQSxJQUFQLHlDQUFPQSxJQUFQLE1BQWUsUUFBZixJQUEyQkEsU0FBUyxJQUF4QyxFQUE4QztBQUM1QyxZQUFHLGdCQUFNbk4sT0FBTixDQUFjRyxLQUFqQixFQUF3QjtBQUN0QmdHLGtCQUFRQyxJQUFSO0FBQ0ErRyxpQkFBTyxFQUFQO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJcE0sT0FBTyxFQUFYO0FBQ0EsVUFBSTBkLFlBQVksRUFBaEI7QUFDQSxVQUFJQyxjQUFjLElBQWxCO0FBQ0EsVUFBSS9hLE9BQU8sS0FBSzFDLEVBQUwsQ0FBUXlFLFFBQVIsQ0FBaUIsS0FBS3pFLEVBQUwsQ0FBUXlFLFFBQVIsQ0FBaUI1QixNQUFqQixHQUEwQixDQUEzQyxDQUFYOztBQUVBLFVBQUdILFFBQVEsRUFBRUEsS0FBS3ZCLE9BQUwsWUFBd0JzYSxJQUExQixDQUFYLEVBQTRDO0FBQzFDZ0Msc0JBQWMvYSxJQUFkO0FBQ0Q7O0FBRUQsVUFBRytDLE1BQU0wUCxPQUFOLENBQWNqSixJQUFkLENBQUgsRUFBd0I7QUFDdEIsYUFBSSxJQUFJaEssSUFBSSxDQUFSLEVBQVdDLElBQUkrSixLQUFLckosTUFBeEIsRUFBZ0NYLElBQUlDLENBQXBDLEVBQXVDRCxHQUF2QyxFQUE0QztBQUMxQ3NiLG9CQUFVcGMsSUFBVixDQUFlLEtBQUtzYyxJQUFMLENBQVV4YixDQUFWLEVBQWFnSyxLQUFLaEssQ0FBTCxDQUFiLEVBQXNCcEMsSUFBdEIsRUFBNEJvQyxDQUE1QixDQUFmO0FBQ0Q7QUFDRixPQUpELE1BS0s7QUFDSCxZQUFJQSxLQUFJLENBQVI7O0FBRUEsYUFBSSxJQUFJRixDQUFSLElBQWFrSyxJQUFiLEVBQW1CO0FBQ2pCLGNBQUcsQ0FBQ0EsS0FBS2pLLGNBQUwsQ0FBb0JELENBQXBCLENBQUosRUFBNEI7QUFDMUI7QUFDRDs7QUFFRHdiLG9CQUFVcGMsSUFBVixDQUFlLEtBQUtzYyxJQUFMLENBQVUxYixDQUFWLEVBQWFrSyxLQUFLbEssQ0FBTCxDQUFiLEVBQXNCbEMsSUFBdEIsRUFBNEJvQyxFQUE1QixDQUFmO0FBQ0FBO0FBQ0Q7QUFDRjs7QUFFRCxXQUFJLElBQUlBLE1BQUksQ0FBUixFQUFXQyxLQUFJcWIsVUFBVTNhLE1BQTdCLEVBQXFDWCxNQUFJQyxFQUF6QyxFQUE0Q0QsS0FBNUMsRUFBaUQ7QUFDL0MsWUFBSTJhLFdBQVdXLFVBQVV0YixHQUFWLENBQWY7O0FBRUEsYUFBS2xDLEVBQUwsQ0FBUTBWLFdBQVIsQ0FBb0JtSCxTQUFTN2MsRUFBN0I7QUFDQTZjLGlCQUFTYyxPQUFULENBQWlCemIsR0FBakI7QUFDRDs7QUFFRHViLHFCQUFlLEtBQUt6ZCxFQUFMLENBQVEwVixXQUFSLENBQW9CK0gsV0FBcEIsQ0FBZjs7QUFFQSxXQUFJLElBQUl6YixFQUFSLElBQWEsS0FBSytaLFNBQWxCLEVBQTZCO0FBQzNCLFlBQUcsQ0FBQyxLQUFLQSxTQUFMLENBQWU5WixjQUFmLENBQThCRCxFQUE5QixDQUFKLEVBQXNDO0FBQ3BDO0FBQ0Q7O0FBRUQsYUFBSytaLFNBQUwsQ0FBZS9aLEVBQWYsRUFBa0I0VCxTQUFsQjtBQUNEOztBQUVELFdBQUttRyxTQUFMLEdBQWlCamMsSUFBakI7QUFDRDs7Ozs7O0FBMU9rQjBJLEcsQ0FDWnhFLE8sR0FBVSxNO2tCQURFd0UsRztBQTJPcEI7O0lBRVlpVCxJLFdBQUFBLEk7OztBQUlYLGtCQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFOMVUsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMElBQ1ZBLElBRFU7O0FBR25CLFdBQUs2VyxHQUFMLEdBQVcsSUFBWDtBQUNBLFdBQUt2RyxJQUFMLEdBQVksT0FBS3JYLEVBQUwsQ0FBUXdCLFNBQXBCO0FBQ0EsV0FBS3FjLEtBQUwsR0FBYSxPQUFLN2QsRUFBTCxDQUFRcU4sWUFBUixDQUFxQixJQUFyQixDQUFiOztBQUVBLFFBQUcsQ0FBQyxPQUFLd1EsS0FBTixJQUFlLEVBQUUsT0FBSzdkLEVBQUwsQ0FBUWtCLFVBQVIsQ0FBbUJDLE9BQW5CLFlBQXNDcUgsR0FBeEMsQ0FBbEIsRUFBZ0U7QUFDOUQsYUFBS3NWLE1BQUw7QUFDRDtBQVRrQjtBQVVwQjs7Ozs4QkFFUztBQUNSLFdBQUtsZCxRQUFMLENBQWNPLE9BQWQsQ0FBc0J1YSxVQUF0QixHQUFtQyxJQUFuQztBQUNBLFdBQUtrQyxHQUFMLEdBQVcsS0FBS2hkLFFBQUwsQ0FBY08sT0FBekI7QUFDQSxXQUFLOGIsUUFBTDtBQUNBLFdBQUtDLE1BQUw7QUFDQSxXQUFLQyxRQUFMOztBQUVBLFdBQUtVLEtBQUwsSUFBYyx5RkFBYy9YLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEJnQixTQUExQixDQUFkO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUsrVyxLQUFMLElBQWMsMEZBQWUvWCxLQUFmLENBQXFCLElBQXJCLEVBQTJCZ0IsU0FBM0IsQ0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLNFYsS0FBTCxHQUFhLEtBQUtrQixHQUFMLENBQVMvQixPQUF0QjtBQUNBLFdBQUt6YixLQUFMLENBQVcyZCxLQUFYLENBQWlCLFdBQWpCLEVBQThCLEtBQUtyQixLQUFuQztBQUNEOzs7NkJBRVE7QUFDUCxXQUFLL1csR0FBTCxHQUFXLEtBQUtpWSxHQUFMLENBQVNqQyxLQUFwQjtBQUNBLFdBQUt2YixLQUFMLENBQVcyZCxLQUFYLENBQWlCLFNBQWpCLEVBQTRCLEtBQUtwWSxHQUFqQztBQUNEOzs7K0JBRVU7QUFDVCxXQUFLL0MsS0FBTCxHQUFhLEtBQUtnYixHQUFMLENBQVNoQyxPQUF0QjtBQUNBLFdBQUt4YixLQUFMLENBQVcyZCxLQUFYLENBQWlCLFdBQWpCLEVBQThCLEtBQUtuYixLQUFuQyxFQUEwQyxJQUExQzs7QUFFQSxXQUFLbWEsVUFBTCxHQUFrQjtBQUNoQjVPLGNBQU0sS0FBS3lQLEdBQUwsQ0FBUzlCLGlCQURDO0FBRWhCbFosZUFBTyxLQUFLZ2IsR0FBTCxDQUFTaEM7QUFGQSxPQUFsQjtBQUlEOzs7NEJBRU9jLEssRUFBTyxDQUFFOzs7O0VBbERPbFUsRzs7QUFBYmlULEksQ0FDSnpYLE8sR0FBVSxFO0FBRE55WCxJLENBRUovTyxpQixHQUFvQixJOzs7QUFtRDdCbEUsSUFBSWlULElBQUosR0FBV0EsSUFBWCxDOzs7Ozs7Ozs7Ozs7Ozs7QUN0U0E7Ozs7Ozs7Ozs7OztJQUVxQjFTLEk7OztBQUNuQixrQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTmhDLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHVJQUNWQSxJQURVOztBQUduQixVQUFLaVgsUUFBTCxHQUFnQixPQUFoQjtBQUhtQjtBQUlwQjs7OztpQ0FFWXBiLEssRUFBTztBQUNsQixXQUFLdWEsUUFBTCxDQUFjdmEsS0FBZDtBQUNEOzs7aUNBRVlBLEssRUFBTztBQUNsQixXQUFLcWIsUUFBTCxDQUFjcmIsS0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLa0ksS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixPQUExQixLQUFzQyxLQUFLZ2MsUUFBTCxDQUFjLEtBQUtuVCxLQUFMLENBQVdvVCxLQUF6QixDQUF0QztBQUNBLFdBQUtwVCxLQUFMLENBQVc3SSxjQUFYLENBQTBCLE9BQTFCLEtBQXNDLEtBQUtrYixRQUFMLENBQWMsS0FBS3JTLEtBQUwsQ0FBV2xJLEtBQXpCLENBQXRDO0FBQ0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2RBLGNBQU8sS0FBS3ViLGVBQUwsRUFBUCxHQUErQixLQUFLQyxjQUFMLEVBQS9CO0FBQ0Q7Ozs2QkFFUXhiLEssRUFBTztBQUNiLFdBQUs1QyxFQUFMLENBQVEsS0FBS2dlLFFBQWIsTUFBMkJwYixLQUE1QixLQUF1QyxLQUFLNUMsRUFBTCxDQUFRLEtBQUtnZSxRQUFiLElBQXlCcGIsVUFBVSxDQUFWLEdBQWEsR0FBYixHQUFtQkEsU0FBUyxFQUE1RjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFdBQUs1QyxFQUFMLENBQVFrZSxLQUFSO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLbGUsRUFBTCxDQUFRcWUsSUFBUjtBQUNEOzs7Ozs7a0JBbENrQnRWLEk7QUFtQ3BCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRDs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkYsSzs7Ozs7NkJBQ0g7QUFDZCxzQkFBTXZHLFNBQU4sQ0FBZ0IsT0FBaEIsRUFBeUJ1RyxLQUF6QjtBQUNEOzs7QUFFRCxtQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxzQ0FBTjlCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHlJQUNWQSxJQURVOztBQUduQixVQUFLL0csRUFBTCxDQUFRd0IsU0FBUixHQUFvQixFQUFwQjtBQUhtQjtBQUlwQjs7QUFFRDs7Ozs7Ozs7a0NBSWM4YyxVLEVBQVk7QUFBQTs7QUFDeEIsVUFBSUMsUUFBUUQsV0FBV0UsSUFBWCxDQUFnQkQsS0FBNUI7QUFDQSxVQUFJNUUsU0FBUzJFLFdBQVdFLElBQVgsQ0FBZ0I3RSxNQUE3QjtBQUNBLFVBQUlsQixNQUFNNkYsV0FBVzdGLEdBQXJCO0FBQ0EsVUFBSWtDLFFBQVEyRCxXQUFXM0QsS0FBdkI7QUFDQSxVQUFJaFcsSUFBSUUsUUFBUXFHLE9BQVIsRUFBUjs7QUFFQSxlQUFTdVQsd0JBQVQsQ0FBa0NELElBQWxDLEVBQXdDO0FBQ3RDLFlBQUdBLEtBQUtsVCxNQUFSLEVBQWdCO0FBQ2QsY0FBSWtULEtBQUtsVCxNQUFMLENBQVloSixTQUFoQixFQUEyQjtBQUN6QixtQkFBT2tjLEtBQUtsVCxNQUFMLENBQVloSixTQUFaLENBQXNCaUssT0FBdEIsQ0FBOEJtUyxZQUE5QixDQUEyQ0YsSUFBbEQ7QUFDRDs7QUFFRCxpQkFBT0MseUJBQXlCRCxLQUFLbFQsTUFBOUIsQ0FBUDtBQUNEOztBQUVELGVBQU8sSUFBUDtBQUNEOztBQUVELFdBQUtpQixPQUFMLENBQWFtUyxZQUFiLEdBQTRCO0FBQzFCRixjQUFNO0FBQ0pELGlCQUFPQSxNQUFNL2QsSUFEVDtBQUVKMEwsZ0JBQU1vUyxXQUFXRSxJQUFYLENBQWdCdFMsSUFGbEI7QUFHSnlOLGtCQUFRQSxNQUhKO0FBSUpyTyxrQkFBUW1ULHlCQUF5QkgsV0FBV0UsSUFBcEM7QUFKSixTQURvQjtBQU8xQjdFLGdCQUFRMkUsV0FBVzNFLE1BUE87QUFRMUJsQixhQUFLQSxHQVJxQjtBQVMxQmtDLGVBQU9BO0FBVG1CLE9BQTVCOztBQVlBLFVBQUk0RCxNQUFNamQsUUFBVixFQUFvQjtBQUNsQixhQUFLcWQsS0FBTDtBQUNBLGFBQUszZSxFQUFMLENBQVF3QixTQUFSLG1CQUFrQytjLE1BQU1qZCxRQUF4QztBQUNEOztBQUVELFVBQUlpZCxNQUFNeFMsV0FBVixFQUF1QjtBQUNyQnBILFlBQUksa0JBQVFxSCxHQUFSLENBQVl1UyxNQUFNeFMsV0FBbEIsRUFBK0JoSCxJQUEvQixDQUFvQyxVQUFDakQsR0FBRCxFQUFTO0FBQy9DLGlCQUFLNmMsS0FBTDtBQUNBLGlCQUFLM2UsRUFBTCxDQUFRd0IsU0FBUixtQkFBa0NNLElBQUlvSyxJQUF0QztBQUNELFNBSEcsQ0FBSjtBQUlEOztBQUVELGFBQU92SCxFQUFFSSxJQUFGLENBQU8sWUFBTTtBQUNsQixlQUFPLGdCQUFNVixPQUFOLENBQWMsT0FBS3JFLEVBQW5CLEVBQXVCLEVBQUVrRCxXQUFXLElBQWIsRUFBdkIsQ0FBUDtBQUNELE9BRk0sQ0FBUDtBQUdEOzs7Ozs7a0JBN0RrQjJGLEs7QUE4RHBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRW9CVixZO0FBQ25CLHdCQUFZM0gsSUFBWixFQUFrQlIsRUFBbEIsRUFBc0JzQyxTQUF0QixFQUFpQztBQUFBOztBQUMvQixTQUFLOUIsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS1IsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS3NDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7OzRCQU9RNEosSSxFQUFtRDtBQUFBLFVBQTdDbk4sT0FBNkMsdUVBQW5DLEVBQUU2ZixTQUFTLEtBQVgsRUFBbUM7QUFBQSxVQUFmQyxLQUFlLHVFQUFQLEtBQU87O0FBQ3pELFVBQUdBLFNBQVMsQ0FBQyxLQUFLQyxZQUFMLEVBQWIsRUFBa0M7QUFDaEMsYUFBSzllLEVBQUwsQ0FBUStlLGFBQVIsQ0FBc0IsSUFBSUMsV0FBSixDQUFnQixLQUFLeGUsSUFBckIsYUFBNEJ5ZSxRQUFRL1MsSUFBcEMsSUFBNkNuTixPQUE3QyxFQUF0QjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7NkJBT1NtZ0IsTSxFQUFxRDtBQUFBLFVBQTdDbmdCLE9BQTZDLHVFQUFuQyxFQUFFNmYsU0FBUyxLQUFYLEVBQW1DO0FBQUEsVUFBZkMsS0FBZSx1RUFBUCxLQUFPOztBQUM1RCxVQUFHQSxTQUFTLENBQUMsS0FBS0MsWUFBTCxFQUFiLEVBQWtDO0FBQ2hDLGFBQUs5ZSxFQUFMLENBQVErZSxhQUFSLENBQXNCLElBQUlHLE1BQUosQ0FBVyxLQUFLMWUsSUFBaEIsRUFBc0J6QixPQUF0QixDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7O21DQUtlO0FBQ2IsVUFBSW1OLE9BQU8sS0FBSzVKLFNBQUwsQ0FBZXlILGlCQUExQjs7QUFFQSxVQUFHLENBQUNtQyxJQUFKLEVBQVU7QUFDUixlQUFPLEtBQVA7QUFDRDs7QUFFRCxhQUFPQSxLQUFLbE0sRUFBTCxLQUFZLEtBQUtBLEVBQWpCLElBQXVCa00sS0FBS3VHLEtBQUwsQ0FBVzBNLElBQVgsS0FBb0IsS0FBSzNlLElBQWhELElBQXdEMEwsS0FBSzVKLFNBQUwsS0FBbUIsS0FBS0EsU0FBdkY7QUFDRDs7QUFFRDs7Ozs7Ozs7eUJBS0tULEUsRUFBSTtBQUNQLFdBQUs3QixFQUFMLENBQVF3RyxnQkFBUixDQUF5QixLQUFLaEcsSUFBOUIsRUFBb0MsS0FBS3FCLEVBQUwsR0FBVUEsRUFBOUM7QUFDRDs7QUFFRDs7Ozs7OzZCQUdTO0FBQ1AsV0FBS0EsRUFBTCxJQUFXLEtBQUs3QixFQUFMLENBQVEwRyxtQkFBUixDQUE0QixLQUFLbEcsSUFBakMsRUFBdUMsS0FBS3FCLEVBQTVDLENBQVg7QUFDRDs7Ozs7O2tCQTlEa0JzRyxZO0FBK0RwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ERDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFYWlYLFUsV0FBQUEsVTtBQUNYLHNCQUFZM0csR0FBWixFQUFpQmtDLEtBQWpCLEVBQW9EO0FBQUEsUUFBNUJ2TCxJQUE0Qix1RUFBckIsRUFBcUI7QUFBQSxRQUFqQjZILFFBQWlCLHVFQUFOLElBQU07O0FBQUE7O0FBQ2xELFNBQUt3QixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLa0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS3ZMLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUs2SCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUt1SCxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUthLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLM0YsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLeFYsV0FBTCxHQUFtQixLQUFuQjtBQUNEOzs7OytCQUVVO0FBQ1QsV0FBSzJaLE1BQUw7QUFDQTVVLGFBQU9xVixLQUFQLENBQWF6WSxLQUFiLENBQW1Cb0QsTUFBbkIsRUFBMkJwQyxTQUEzQjtBQUNEOzs7NEJBRU8wWCxJLEVBQU07QUFDWkEsV0FBS2xULE1BQUwsR0FBYyxLQUFLa1QsSUFBTCxJQUFhLElBQTNCO0FBQ0EsV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS2EsTUFBTCxDQUFZamUsSUFBWixDQUFpQm9kLElBQWpCO0FBQ0EsV0FBS2MsTUFBTCxDQUFZbGUsSUFBWixDQUFpQm9kLEtBQUtELEtBQXRCO0FBQ0EsV0FBSzVFLE1BQUwsR0FBYyxDQUFDNkUsS0FBS2xULE1BQU4sR0FBY2tULEtBQUs3RSxNQUFuQixnQkFBK0I2RSxLQUFLbFQsTUFBTCxDQUFZcU8sTUFBM0MsRUFBc0Q2RSxLQUFLN0UsTUFBM0QsQ0FBZDtBQUNEOzs7NkJBRVE0RSxLLEVBQU87QUFDZCxXQUFJLElBQUlyYyxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLa2QsTUFBTCxDQUFZeGMsTUFBL0IsRUFBdUNYLElBQUlDLENBQTNDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqRCxZQUFJcWQsUUFBUSxLQUFLRixNQUFMLENBQVluZCxDQUFaLENBQVo7O0FBRUEsWUFBR3FkLE1BQU1oQixLQUFOLEtBQWdCQSxLQUFuQixFQUEwQjtBQUN4QixpQkFBT2dCLEtBQVA7QUFDRDtBQUNGOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7NkJBRVFoQixLLEVBQU87QUFDZCxhQUFPLEtBQUtlLE1BQUwsQ0FBWTNWLE9BQVosQ0FBb0I0VSxLQUFwQixLQUE4QixDQUFDLENBQXRDO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtwYSxXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7Ozs7OztBQUdILElBQU0rRSxTQUFTLEVBQWY7O0FBRUFBLE9BQU9tUCxPQUFQLEdBQWlCLEdBQWpCO0FBQ0FuUCxPQUFPb1csTUFBUCxHQUFnQixFQUFoQjtBQUNBcFcsT0FBT3NXLFFBQVAsR0FBa0IsSUFBbEI7QUFDQXRXLE9BQU91VyxXQUFQLEdBQXFCLENBQXJCO0FBQ0F2VyxPQUFPL0osTUFBUCxHQUFnQixLQUFoQjtBQUNBK0osT0FBT3dXLFNBQVAsR0FBbUIsRUFBbkI7QUFDQXhXLE9BQU95VyxZQUFQLEdBQXNCLGdCQUF0QjtBQUNBelcsT0FBTzBXLGVBQVAsR0FBeUI7QUFBQSxTQUFLcE8sNEJBQUw7QUFBQSxDQUF6Qjs7QUFFQTs7Ozs7Ozs7QUFRQXRJLE9BQU8yVyxHQUFQLEdBQWEsVUFBVXJmLElBQVYsRUFBZ0JzZixPQUFoQixFQUF1QztBQUFBLE1BQWQvZ0IsT0FBYyx1RUFBSixFQUFJOztBQUNsRCxNQUFJZ2hCLGlCQUFpQjtBQUNuQnplLGNBQVUsRUFEUztBQUVuQnlLLGlCQUFhLEVBRk07QUFHbkJpVSxjQUFVLEtBSFM7QUFJbkI5SixhQUFTLGlCQUFDb0ksVUFBRCxFQUFnQixDQUFFO0FBSlIsR0FBckI7O0FBT0EsTUFBRyxDQUFDdmYsUUFBUXVDLFFBQVQsSUFBcUIsQ0FBQ3ZDLFFBQVFnTixXQUFqQyxFQUE4QztBQUM1Q2hOLFlBQVFpaEIsUUFBUixHQUFtQixJQUFuQjtBQUNEOztBQUVELE1BQUcsS0FBS3BJLEdBQUwsQ0FBU3BYLElBQVQsQ0FBSCxFQUFtQjtBQUNqQixVQUFNLElBQUlGLEtBQUosb0JBQTJCRSxJQUEzQix5QkFBTjtBQUNEOztBQUVELE9BQUt5ZixRQUFMLENBQWN6ZixJQUFkLEVBQW9Cc2YsT0FBcEIsZUFBaUNDLGNBQWpDLEVBQW9EaGhCLE9BQXBEOztBQUVBLFNBQU8sSUFBUDtBQUNELENBbkJEOztBQXFCQTs7Ozs7QUFLQW1LLE9BQU90QyxNQUFQLEdBQWdCLFVBQVNwRyxJQUFULEVBQWU7QUFDN0IsT0FBSSxJQUFJMEIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS21kLE1BQUwsQ0FBWXpjLE1BQS9CLEVBQXVDWCxJQUFJQyxDQUEzQyxFQUE4Q0QsR0FBOUMsRUFBbUQ7QUFDakQsUUFBRyxLQUFLb2QsTUFBTCxDQUFZcGQsQ0FBWixFQUFlMUIsSUFBZixJQUF1QkEsSUFBMUIsRUFBZ0M7QUFDOUIsV0FBSzhlLE1BQUwsQ0FBWWxZLE1BQVosQ0FBbUJsRixDQUFuQixFQUFzQixDQUF0Qjs7QUFFQTtBQUNEO0FBQ0Y7QUFDRixDQVJEOztBQVVBOzs7Ozs7QUFNQWdILE9BQU8wTyxHQUFQLEdBQWEsVUFBU3BYLElBQVQsRUFBZTtBQUMxQixPQUFJLElBQUkwQixJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbWQsTUFBTCxDQUFZemMsTUFBL0IsRUFBdUNYLElBQUlDLENBQTNDLEVBQThDRCxHQUE5QyxFQUFtRDtBQUNqRCxRQUFHLEtBQUtvZCxNQUFMLENBQVlwZCxDQUFaLEVBQWUxQixJQUFmLElBQXVCQSxJQUExQixFQUFnQztBQUM5QixhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVELFNBQU8sS0FBUDtBQUNELENBUkQ7O0FBVUE7Ozs7Ozs7OztBQVNBMEksT0FBT3FWLEtBQVAsR0FBZSxVQUFVL2QsSUFBVixFQUFrRTtBQUFBLE1BQWxEbVosTUFBa0QsdUVBQXpDLEVBQXlDO0FBQUEsTUFBckNnQixLQUFxQyx1RUFBN0IsRUFBNkI7QUFBQSxNQUF6QnZMLElBQXlCLHVFQUFsQixFQUFrQjtBQUFBLE1BQWRyUSxPQUFjLHVFQUFKLEVBQUk7O0FBQy9FLE1BQUl3ZixRQUFRLEtBQUsyQixRQUFMLENBQWMxZixJQUFkLENBQVo7O0FBRUEsTUFBSSxDQUFDK2QsS0FBTCxFQUFZO0FBQ1YsVUFBTSxJQUFJamUsS0FBSixzQ0FBNkNFLElBQTdDLENBQU47QUFDRDs7QUFFRCxNQUFJaVksTUFBTSxLQUFLMEgsY0FBTCxDQUFvQjVCLEtBQXBCLEVBQTJCNUUsTUFBM0IsRUFBbUNnQixLQUFuQyxFQUEwQ3ZMLElBQTFDLENBQVY7O0FBRUEsTUFBRyxDQUFDclEsUUFBUXFoQixNQUFULElBQW1CM0gsUUFBUSxLQUFLNEgsTUFBTCxFQUE5QixFQUE2QztBQUMzQztBQUNEOztBQUVELE9BQUtYLFNBQUwsR0FBaUIzZ0IsT0FBakI7QUFDQSxPQUFLdWhCLE1BQUwsQ0FBWTdILEdBQVo7QUFDRCxDQWZEOztBQWlCQTs7O0FBR0F2UCxPQUFPcVgsSUFBUCxHQUFjLFlBQVc7QUFDdkIsU0FBT3ZhLE9BQU93YSxPQUFQLENBQWVELElBQWYsQ0FBb0J6YSxLQUFwQixDQUEwQkUsT0FBT3dhLE9BQWpDLEVBQTBDMVosU0FBMUMsQ0FBUDtBQUNELENBRkQ7O0FBSUE7OztBQUdBb0MsT0FBT3VYLEVBQVAsR0FBWSxZQUFXO0FBQ3JCLFNBQU96YSxPQUFPd2EsT0FBUCxDQUFlQyxFQUFmLENBQWtCM2EsS0FBbEIsQ0FBd0JFLE9BQU93YSxPQUEvQixFQUF3QzFaLFNBQXhDLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7QUFHQW9DLE9BQU93WCxPQUFQLEdBQWlCLFlBQVc7QUFDMUIsU0FBTzFhLE9BQU93YSxPQUFQLENBQWVFLE9BQWYsQ0FBdUI1YSxLQUF2QixDQUE2QkUsT0FBT3dhLE9BQXBDLEVBQTZDMVosU0FBN0MsQ0FBUDtBQUNELENBRkQ7O0FBSUE7Ozs7OztBQU1Bb0MsT0FBT3lYLFFBQVAsR0FBa0IsVUFBU2xJLEdBQVQsRUFBMkM7QUFBQSxNQUE3QjFaLE9BQTZCLHVFQUFuQixFQUFFcWhCLFFBQVEsS0FBVixFQUFtQjs7QUFDM0QsT0FBS1YsU0FBTCxHQUFpQjNnQixPQUFqQjs7QUFFQSxNQUFHLEtBQUt5Z0IsUUFBUixFQUFrQjtBQUNoQnhaLFdBQU8yYSxRQUFQLENBQWdCdlIsSUFBaEIsR0FBdUJxSixHQUF2QjtBQUNELEdBRkQsTUFHSztBQUNIelMsV0FBT3dhLE9BQVAsQ0FBZUksU0FBZixDQUF5QixJQUF6QixFQUErQixFQUEvQixFQUFtQ25JLEdBQW5DO0FBQ0Q7QUFDRixDQVREOztBQVdBOzs7Ozs7QUFNQXZQLE9BQU9yQixJQUFQLEdBQWMsWUFBNEM7QUFBQTs7QUFBQSxNQUFsQ2daLFVBQWtDLHVFQUFyQixFQUFxQjtBQUFBLE1BQWpCckIsUUFBaUIsdUVBQU4sSUFBTTs7QUFDeEQsTUFBSXNCLGVBQWU5YSxPQUFPd2EsT0FBUCxDQUFlSSxTQUFsQzs7QUFFQTVhLFNBQU93YSxPQUFQLENBQWVJLFNBQWYsR0FBMkIsWUFBVztBQUNwQyxRQUFJOWUsTUFBTWdmLGFBQWFoYixLQUFiLENBQW1CLElBQW5CLEVBQXlCZ0IsU0FBekIsQ0FBVjs7QUFFQW9DLFdBQU9qQixXQUFQOztBQUVBLFdBQU9uRyxHQUFQO0FBQ0QsR0FORDs7QUFRQSxPQUFLaWYsc0JBQUwsR0FBOEIsWUFBTTtBQUNsQyxVQUFLOVksV0FBTDtBQUNELEdBRkQ7O0FBSUEsT0FBSzRZLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsT0FBS3JCLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLE9BQUtGLE1BQUwsQ0FBWWpKLElBQVosQ0FBaUIsVUFBQ0UsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDekJELFFBQUlBLEVBQUUvVixJQUFGLENBQU9xYSxLQUFQLENBQWEsR0FBYixFQUFrQmhZLE1BQXRCO0FBQ0EyVCxRQUFJQSxFQUFFaFcsSUFBRixDQUFPcWEsS0FBUCxDQUFhLEdBQWIsRUFBa0JoWSxNQUF0Qjs7QUFFQSxXQUFPMFQsSUFBSUMsQ0FBWDtBQUNELEdBTEQ7O0FBT0EsTUFBSThJLFNBQVMsRUFBYjs7QUFFQSxPQUFLLElBQUlwZCxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbWQsTUFBTCxDQUFZemMsTUFBaEMsRUFBd0NYLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxRQUFJcWMsUUFBUSxLQUFLZSxNQUFMLENBQVlwZCxDQUFaLENBQVo7QUFDQSxRQUFJd0wsVUFBVSxFQUFkOztBQUVBNFIsV0FBT2YsTUFBTS9kLElBQWIsSUFBcUIrZCxLQUFyQjtBQUNBQSxVQUFNOVosUUFBTixHQUFpQixFQUFqQjtBQUNBaUosY0FBVTZRLE1BQU0vZCxJQUFOLENBQVdxYSxLQUFYLENBQWlCLEdBQWpCLENBQVY7QUFDQW5OLFlBQVFzVCxHQUFSO0FBQ0F6QyxVQUFNckosS0FBTixHQUFjcUosTUFBTXlCLFFBQU4sR0FBZ0IsSUFBaEIsR0FBc0J0UyxRQUFRN0ssTUFBNUM7O0FBRUEsUUFBSTZLLFFBQVE3SyxNQUFaLEVBQW9CO0FBQ2xCLFVBQUlvZSxhQUFhdlQsUUFBUXhOLElBQVIsQ0FBYSxHQUFiLENBQWpCO0FBQ0EsVUFBSW9MLFNBQVNnVSxPQUFPMkIsVUFBUCxDQUFiOztBQUVBLFVBQUksQ0FBQzNWLE1BQUwsRUFBYTtBQUNYLGNBQU0sSUFBSWhMLEtBQUosb0NBQTJDMmdCLFVBQTNDLGVBQStEMUMsTUFBTS9kLElBQXJFLE9BQU47QUFDRDs7QUFFRCxVQUFHK2QsTUFBTXJKLEtBQU4sS0FBZ0IsSUFBaEIsSUFBd0I1SixPQUFPMFUsUUFBbEMsRUFBNEM7QUFDMUN6QixjQUFNckosS0FBTjtBQUNEOztBQUVEcUosWUFBTTJDLFdBQU4sR0FBb0IsS0FBS0MsWUFBTCxDQUFrQjdWLE9BQU80VixXQUFQLEdBQXFCLEdBQXJCLEdBQTJCM0MsTUFBTXVCLE9BQW5ELENBQXBCO0FBQ0F4VSxhQUFPN0csUUFBUCxDQUFnQnJELElBQWhCLENBQXFCbWQsS0FBckI7QUFDRCxLQWRELE1BZUs7QUFDSEEsWUFBTTJDLFdBQU4sR0FBb0IzQyxNQUFNdUIsT0FBMUI7QUFDRDtBQUNGOztBQUVELE1BQUcsQ0FBQyxLQUFLUixNQUFMLENBQVl6YyxNQUFiLElBQXVCLGdCQUFNOUQsT0FBTixDQUFjRyxLQUF4QyxFQUErQztBQUM3Q2dHLFlBQVFDLElBQVI7QUFDRDs7QUFFRGEsU0FBT1EsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsS0FBS3VhLHNCQUF6QztBQUNBLE9BQUs1aEIsTUFBTCxHQUFjLElBQWQ7QUFDRCxDQS9ERDs7QUFpRUE7Ozs7OztBQU1BK0osT0FBT2dYLFFBQVAsR0FBa0IsVUFBVTFmLElBQVYsRUFBZ0I7QUFDaEMsT0FBSyxJQUFJMEIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS21kLE1BQUwsQ0FBWXpjLE1BQWhDLEVBQXdDWCxJQUFJQyxDQUE1QyxFQUErQ0QsR0FBL0MsRUFBb0Q7QUFDbEQsUUFBSXFjLFFBQVEsS0FBS2UsTUFBTCxDQUFZcGQsQ0FBWixDQUFaOztBQUVBLFFBQUlxYyxNQUFNL2QsSUFBTixJQUFjQSxJQUFsQixFQUF3QjtBQUN0QixhQUFPK2QsS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FWRDs7QUFZQTs7Ozs7OztBQU9BclYsT0FBTytXLFFBQVAsR0FBa0IsVUFBVXpmLElBQVYsRUFBZ0JzZixPQUFoQixFQUF1QztBQUFBLE1BQWQvZ0IsT0FBYyx1RUFBSixFQUFJOztBQUN2RCxNQUFJd2YscUJBQVl4ZixPQUFaLElBQXFCeUIsVUFBckIsRUFBMkJzZixnQkFBM0IsR0FBSjs7QUFFQTVXLFNBQU9vVyxNQUFQLENBQWNsZSxJQUFkLENBQW1CbWQsS0FBbkI7O0FBRUEsU0FBT0EsS0FBUDtBQUNELENBTkQ7O0FBUUE7Ozs7O0FBS0FyVixPQUFPa1ksV0FBUCxHQUFxQixVQUFVNWdCLElBQVYsRUFBZ0I7QUFDbkMsT0FBSyxJQUFJMEIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS21kLE1BQUwsQ0FBWXpjLE1BQWhDLEVBQXdDWCxJQUFJQyxDQUE1QyxFQUErQ0QsR0FBL0MsRUFBb0Q7QUFDbEQsUUFBSXFjLFFBQVEsS0FBS2UsTUFBTCxDQUFZcGQsQ0FBWixDQUFaOztBQUVBLFFBQUlxYyxNQUFNL2QsSUFBTixJQUFjQSxJQUFsQixFQUF3QjtBQUN0QixXQUFLOGUsTUFBTCxDQUFZbFksTUFBWixDQUFtQmxGLENBQW5CLEVBQXNCLENBQXRCOztBQUVBO0FBQ0Q7QUFDRjtBQUNGLENBVkQ7O0FBWUE7Ozs7O0FBS0FnSCxPQUFPb1gsTUFBUCxHQUFnQixVQUFVN0gsR0FBVixFQUFlO0FBQzdCLE9BQUsrRyxRQUFMLEdBQWUsS0FBSzZCLFVBQUwsQ0FBZ0I1SSxHQUFoQixDQUFmLEdBQXFDLEtBQUs2SSxhQUFMLENBQW1CN0ksR0FBbkIsQ0FBckM7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBdlAsT0FBT29ZLGFBQVAsR0FBdUIsVUFBVTdJLEdBQVYsRUFBZTtBQUNwQ3pTLFNBQU93YSxPQUFQLENBQWVJLFNBQWYsQ0FBeUIsSUFBekIsRUFBK0IsRUFBL0IsRUFBbUNuSSxHQUFuQztBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0F2UCxPQUFPbVksVUFBUCxHQUFvQixVQUFVNUksR0FBVixFQUFlO0FBQ2pDelMsU0FBTzJhLFFBQVAsQ0FBZ0J2UixJQUFoQixHQUF1QixPQUFPcUosT0FBTyxHQUFkLENBQXZCO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQXZQLE9BQU9tWCxNQUFQLEdBQWdCLFlBQVk7QUFDMUIsU0FBTyxLQUFLYixRQUFMLEdBQWdCLEtBQUsrQixVQUFMLEVBQWhCLEdBQW9DLEtBQUtDLGFBQUwsRUFBM0M7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBdFksT0FBT3NZLGFBQVAsR0FBdUIsWUFBWTtBQUNqQyxNQUFHeGIsT0FBTzJhLFFBQVAsQ0FBZ0JjLFFBQWhCLEtBQTZCLEdBQWhDLEVBQXFDO0FBQ25DLFdBQU8sRUFBUDtBQUNEOztBQUVELFNBQU96YixPQUFPMmEsUUFBUCxDQUFnQmMsUUFBaEIsR0FBMkJ6YixPQUFPMmEsUUFBUCxDQUFnQmUsTUFBM0MsR0FBb0QxYixPQUFPMmEsUUFBUCxDQUFnQnZSLElBQTNFO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7QUFLQWxHLE9BQU9xWSxVQUFQLEdBQW9CLFlBQVk7QUFDOUIsU0FBT3ZiLE9BQU8yYSxRQUFQLENBQWdCdlIsSUFBaEIsQ0FBcUI3TixPQUFyQixDQUE2QixJQUE3QixFQUFtQyxFQUFuQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQTs7Ozs7QUFLQTJILE9BQU95WSxXQUFQLEdBQXFCLFlBQVc7QUFDOUIsU0FBTyxLQUFLbkMsUUFBTCxHQUFnQixLQUFLb0MsZUFBTCxFQUFoQixHQUF5QyxLQUFLQyxrQkFBTCxFQUFoRDtBQUNELENBRkQ7O0FBSUE7Ozs7O0FBS0EzWSxPQUFPMlksa0JBQVAsR0FBNEIsWUFBVztBQUNyQyxTQUFPLGtCQUFRQyxlQUFSLENBQXdCOWIsT0FBTzJhLFFBQVAsQ0FBZ0JlLE1BQWhCLENBQXVCbmdCLE9BQXZCLENBQStCLEtBQS9CLEVBQXNDLEVBQXRDLENBQXhCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBMkgsT0FBTzBZLGVBQVAsR0FBeUIsWUFBVztBQUNsQyxTQUFPLGtCQUFRRSxlQUFSLENBQXlCOWIsT0FBTzJhLFFBQVAsQ0FBZ0J2UixJQUFoQixDQUFxQnlMLEtBQXJCLENBQTJCLEdBQTNCLEVBQWdDLENBQWhDLEtBQXNDLEVBQS9ELENBQVA7QUFDRCxDQUZEOztBQUlBOzs7Ozs7OztBQVFBM1IsT0FBT2lYLGNBQVAsR0FBd0IsVUFBVTVCLEtBQVYsRUFBcUQ7QUFBQSxNQUFwQzVFLE1BQW9DLHVFQUEzQixFQUEyQjtBQUFBLE1BQXZCZ0IsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLE1BQVh2TCxJQUFXLHVFQUFKLEVBQUk7O0FBQzNFLFVBQU9tUCxLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQWpCLEtBQThCQSxRQUFRLEtBQUsyQixRQUFMLENBQWMzQixLQUFkLENBQXRDOztBQUVBLE1BQUk5RixNQUFNOEYsTUFBTTJDLFdBQU4sQ0FBa0IzZixPQUFsQixDQUEwQixLQUFLb2UsWUFBL0IsRUFBNkMsVUFBQ25SLENBQUQsRUFBSXVULENBQUosRUFBT3RILENBQVAsRUFBYTtBQUNsRSxXQUFPZCxPQUFPYyxDQUFQLEtBQWEsRUFBcEI7QUFDRCxHQUZTLENBQVY7O0FBSUFoQyxRQUFNLEtBQUswSSxZQUFMLENBQWtCMUksR0FBbEIsQ0FBTjs7QUFFQSxNQUFHM1UsT0FBT2hFLElBQVAsQ0FBWTZhLEtBQVosRUFBbUI5WCxNQUF0QixFQUE4QjtBQUM1QjRWLFdBQU8sTUFBTSxrQkFBUW1CLGFBQVIsQ0FBc0JlLEtBQXRCLENBQWI7QUFDRDs7QUFFRHZMLFNBQU8sQ0FBQ0EsUUFBUSxFQUFULEVBQWE3TixPQUFiLENBQXFCLEdBQXJCLEVBQTBCLEVBQTFCLENBQVA7O0FBRUEsTUFBRyxDQUFDLEtBQUtpZSxRQUFOLElBQWtCcFEsSUFBckIsRUFBMkI7QUFDekJxSixXQUFPLE1BQU1ySixJQUFiO0FBQ0Q7O0FBRUQsU0FBT3FKLEdBQVA7QUFDRCxDQXBCRDs7QUFzQkE7Ozs7OztBQU1BdlAsT0FBT2lZLFlBQVAsR0FBc0IsVUFBVTFJLEdBQVYsRUFBZTtBQUNuQyxTQUFPQSxJQUFJbFgsT0FBSixDQUFZLFFBQVosRUFBc0IsR0FBdEIsQ0FBUDtBQUNELENBRkQ7O0FBSUE7OztBQUdBMkgsT0FBT3VMLEtBQVAsR0FBZSxZQUFZO0FBQ3pCek8sU0FBT1UsbUJBQVAsQ0FBMkIsVUFBM0IsRUFBdUMsS0FBS3FhLHNCQUE1QztBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7QUFPQTdYLE9BQU84WSxpQkFBUCxHQUEyQixVQUFVekQsS0FBVixFQUFpQjlGLEdBQWpCLEVBQXNCO0FBQy9DLFVBQU84RixLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQWpCLEtBQThCQSxRQUFRLEtBQUsyQixRQUFMLENBQWMzQixLQUFkLENBQXRDOztBQUVBLE1BQUl6ZSxPQUFPLEVBQVg7QUFDQSxNQUFJb0MsSUFBSSxDQUFSO0FBQ0EsTUFBSXlYLFNBQVMsRUFBYjs7QUFFQWxCLFFBQU1BLElBQUlvQyxLQUFKLENBQVUsR0FBVixFQUFlLENBQWYsQ0FBTjtBQUNBcEMsUUFBTUEsSUFBSW9DLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFOOztBQUVBLE1BQUlvSCxhQUFhMUQsTUFBTTJDLFdBQU4sQ0FBa0IzZixPQUFsQixDQUEwQixLQUFLb2UsWUFBL0IsRUFBNkMsVUFBQ25SLENBQUQsRUFBSXVULENBQUosRUFBT3RILENBQVAsRUFBYTtBQUN6RTNhLFNBQUtzQixJQUFMLENBQVVxWixDQUFWOztBQUVBLFdBQU8sV0FBUDtBQUNELEdBSmdCLENBQWpCOztBQU1BLE1BQUl5SCxRQUFRLElBQUk3WSxNQUFKLENBQVc0WSxVQUFYLENBQVo7QUFDQSxNQUFJRSxhQUFhMUosSUFBSXJDLEtBQUosQ0FBVThMLEtBQVYsQ0FBakI7O0FBRUEsTUFBSSxDQUFDQyxVQUFMLEVBQWlCO0FBQ2YsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQxSixNQUFJbFgsT0FBSixDQUFZMmdCLEtBQVosRUFBbUIsVUFBQzFULENBQUQsRUFBSWlNLENBQUosRUFBVTtBQUMzQkEsVUFBTWQsT0FBTzdaLEtBQUtvQyxDQUFMLENBQVAsSUFBa0J1WSxDQUF4QjtBQUNBdlk7QUFDRCxHQUhEOztBQUtBLFNBQU8sRUFBRXlYLGNBQUYsRUFBUDtBQUNELENBN0JEOztBQStCQTs7Ozs7OztBQU9BelEsT0FBT2taLGFBQVAsR0FBdUIsVUFBUzdELEtBQVQsRUFBa0M7QUFBQSxNQUFsQjhELFFBQWtCLHVFQUFQLEtBQU87O0FBQ3ZELFVBQU85RCxLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQWpCLEtBQThCQSxRQUFRLEtBQUsyQixRQUFMLENBQWMzQixLQUFkLENBQXRDOztBQUVBLE1BQUk5RixNQUFNLEtBQUswSSxZQUFMLENBQWtCLEtBQUtkLE1BQUwsR0FBY3hGLEtBQWQsQ0FBb0IsR0FBcEIsRUFBeUIsQ0FBekIsSUFBOEIsR0FBaEQsQ0FBVjtBQUNBLE1BQUlvSCxhQUFhMUQsTUFBTTJDLFdBQU4sQ0FBa0IzZixPQUFsQixDQUEwQixLQUFLb2UsWUFBL0IsRUFBNkMsV0FBN0MsQ0FBakI7QUFDQSxNQUFJaGUsTUFBTTBnQixXQUFVSixVQUFWLEdBQXNCLEtBQUtkLFlBQUwsQ0FBa0IsTUFBTWMsVUFBTixHQUFtQixLQUFyQyxDQUFoQztBQUNBLE1BQUlDLFFBQVEsSUFBSTdZLE1BQUosQ0FBVzFILEdBQVgsQ0FBWjs7QUFFQSxTQUFPdWdCLE1BQU16VSxJQUFOLENBQVdnTCxHQUFYLENBQVA7QUFDRCxDQVREOztBQVdBOzs7Ozs7QUFNQXZQLE9BQU9vWixhQUFQLEdBQXVCLFVBQVMvRCxLQUFULEVBQWdCO0FBQ3JDLFNBQU9yVixPQUFPa1osYUFBUCxDQUFxQjdELEtBQXJCLEVBQTRCLElBQTVCLENBQVA7QUFDRCxDQUZEOztBQUlBOzs7OztBQUtBclYsT0FBT3FaLFFBQVAsR0FBa0IsVUFBVXJOLEtBQVYsRUFBaUI7QUFBQTs7QUFDakMsTUFBSWhULElBQUksQ0FBUjs7QUFFQSxNQUFJNlMsT0FBTyxTQUFQQSxJQUFPLENBQUMvVSxFQUFELEVBQVE7QUFDakIsUUFBSXVmLFFBQVF2ZixHQUFHMEUsS0FBSCxDQUFTLE9BQUtrYixlQUFkLENBQVo7O0FBRUEsUUFBSSxDQUFDTCxLQUFMLEVBQVk7QUFDVixhQUFPLElBQVA7QUFDRDs7QUFFRCxRQUFJcmQsS0FBS2dULEtBQVQsRUFBZ0I7QUFDZCxhQUFPcUssS0FBUDtBQUNEOztBQUVEcmQ7O0FBRUEsV0FBTzZTLEtBQUt3SyxLQUFMLENBQVA7QUFDRCxHQWREOztBQWdCQSxTQUFPeEssS0FBSyxnQkFBTXpRLElBQVgsQ0FBUDtBQUNELENBcEJEOztBQXNCQTs7Ozs7OztBQU9BNEUsT0FBT3NaLHNCQUFQLEdBQWdDLFVBQVV6aEIsR0FBVixFQUFlMFgsR0FBZixFQUFvQjtBQUNsRCxPQUFLLElBQUl2VyxJQUFJLENBQVIsRUFBV0MsSUFBSXBCLElBQUk4QixNQUF4QixFQUFnQ1gsSUFBSUMsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDLFFBQUlxYyxRQUFReGQsSUFBSW1CLENBQUosQ0FBWjtBQUNBLFFBQUlzYSxVQUFVLEtBQUt3RixpQkFBTCxDQUF1QnpELEtBQXZCLEVBQThCOUYsR0FBOUIsQ0FBZDs7QUFFQSxRQUFJLENBQUMrRCxPQUFMLEVBQWM7QUFDWjtBQUNEOztBQUVELHNCQUFRK0IsT0FBT0EsS0FBZixJQUF5Qi9CLE9BQXpCO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FiRDs7QUFlQTs7Ozs7O0FBTUF0VCxPQUFPdVosZ0JBQVAsR0FBMEIsVUFBVXZOLEtBQVYsRUFBaUI7QUFDekMsTUFBSW9LLFNBQVMsRUFBYjs7QUFFQSxPQUFLLElBQUlwZCxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbWQsTUFBTCxDQUFZemMsTUFBaEMsRUFBd0NYLElBQUlDLENBQTVDLEVBQStDRCxHQUEvQyxFQUFvRDtBQUNsRCxRQUFJcWMsUUFBUSxLQUFLZSxNQUFMLENBQVlwZCxDQUFaLENBQVo7O0FBRUEsUUFBSXFjLE1BQU1ySixLQUFOLEdBQWNBLEtBQWxCLEVBQXlCO0FBQ3ZCO0FBQ0QsS0FGRCxNQUdLLElBQUlxSixNQUFNckosS0FBTixHQUFjQSxLQUFsQixFQUF5QjtBQUM1QjtBQUNEOztBQUVEb0ssV0FBT2xlLElBQVAsQ0FBWW1kLEtBQVo7QUFDRDs7QUFFRCxTQUFPZSxNQUFQO0FBQ0QsQ0FqQkQ7O0FBbUJBOzs7QUFHQXBXLE9BQU9qQixXQUFQLEdBQXFCLFlBQVk7QUFBQTs7QUFDL0IsTUFBRyxLQUFLeWEsZUFBUixFQUF5QjtBQUN2QixXQUFPLEtBQUtBLGVBQVo7O0FBRUE7QUFDRDs7QUFFRCxNQUFJakssTUFBTSxLQUFLNEgsTUFBTCxFQUFWO0FBQ0EsTUFBSWpSLE9BQU8sS0FBS29RLFFBQUwsR0FBZSxFQUFmLEdBQW1CeFosT0FBTzJhLFFBQVAsQ0FBZ0J2UixJQUFoQixDQUFxQjdOLE9BQXJCLENBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLENBQTlCO0FBQ0EsTUFBSW9aLFFBQVEsS0FBS2dILFdBQUwsRUFBWjtBQUNBLE1BQUlnQixpQkFBaUJ6WixPQUFPb1YsVUFBUCxJQUFxQixJQUExQztBQUNBLE1BQUlBLGFBQWFwVixPQUFPb1YsVUFBUCxHQUFvQixJQUFJYyxVQUFKLENBQWUzRyxHQUFmLEVBQW9Ca0MsS0FBcEIsRUFBMkJ2TCxJQUEzQixFQUFpQ3VULGNBQWpDLENBQXJDO0FBQ0EsTUFBSXpOLFFBQVEsQ0FBWjs7QUFFQSxNQUFJeUIsT0FBTyxTQUFQQSxJQUFPLENBQUMySSxNQUFELEVBQVNzRCxLQUFULEVBQW1CO0FBQzVCLFFBQUksQ0FBQ3RELE9BQU96YyxNQUFaLEVBQW9CO0FBQ2xCLGFBQU8rZixTQUFTQSxPQUFoQjtBQUNEOztBQUVELFFBQUlwRyxVQUFVLE9BQUtnRyxzQkFBTCxDQUE0QmxELE1BQTVCLEVBQW9DN0csR0FBcEMsQ0FBZDs7QUFFQSxRQUFJLENBQUMrRCxPQUFMLEVBQWM7QUFDWixhQUFPb0csU0FBU0EsT0FBaEI7QUFDRDs7QUFFRCxRQUFJckUsUUFBUS9CLFFBQVErQixLQUFwQjtBQUNBLFFBQUk1RSxTQUFTNkMsUUFBUTdDLE1BQXJCO0FBQ0EsUUFBSTRGLFFBQVFoQixNQUFNeUIsUUFBTixHQUFnQixJQUFoQixHQUFzQixPQUFLdUMsUUFBTCxDQUFjaEUsTUFBTXJKLEtBQXBCLENBQWxDOztBQUVBLFFBQUksQ0FBQ3FLLEtBQUQsSUFBVSxDQUFDaEIsTUFBTXlCLFFBQXJCLEVBQStCO0FBQzdCLFlBQU0sSUFBSTFmLEtBQUosMkNBQW1EaWUsTUFBTS9kLElBQXpELE9BQU47QUFDRDs7QUFFRDhkLGVBQVd1RSxPQUFYLENBQW1CLEVBQUV0RSxZQUFGLEVBQVM1RSxjQUFULEVBQWlCZ0IsWUFBakIsRUFBd0J2TCxVQUF4QixFQUE4QjlNLFdBQVdpZCxLQUF6QyxFQUFnRHVELFFBQVEsSUFBeEQsRUFBbkI7QUFDQTVOOztBQUVBLFFBQUk2TixXQUFXSixrQkFBa0JBLGVBQWVJLFFBQWYsQ0FBd0J4RSxLQUF4QixDQUFqQztBQUNBLFFBQUl5RSxjQUFjLElBQWxCOztBQUVBLFFBQUdELFFBQUgsRUFBYTtBQUNYLFVBQUl4RCxTQUFRb0QsZUFBZUosUUFBZixDQUF3QmhFLEtBQXhCLENBQVo7QUFDQSxVQUFJMEUsT0FBTyxFQUFFdEosUUFBUTRGLE9BQU01RixNQUFoQixFQUF3QmdCLE9BQU80RSxPQUFNNUUsS0FBckMsRUFBNEN2TCxNQUFNbVEsT0FBTW5RLElBQXhELEVBQVg7QUFDQSxVQUFJNEgsVUFBVSxFQUFFMkMsY0FBRixFQUFVZ0IsWUFBVixFQUFpQnZMLFVBQWpCLEVBQWQ7O0FBRUE0VCxvQkFBYyxDQUFDLGdCQUFNak0sT0FBTixDQUFja00sSUFBZCxFQUFvQmpNLE9BQXBCLENBQWY7QUFDRDs7QUFFRCxRQUFJa00sWUFBWSxPQUFLeEQsU0FBTCxDQUFlVSxNQUFmLEtBQTBCNWQsU0FBMUIsSUFBdUMsQ0FBQ3dnQixXQUF4RDtBQUNBLFFBQUlHLFdBQVcsT0FBS3pELFNBQUwsQ0FBZVUsTUFBZixLQUEwQixLQUF6Qzs7QUFFQSxRQUFJMkMsYUFBYUcsYUFBYUMsUUFBMUIsQ0FBSixFQUF5QztBQUN2QzdFLGlCQUFXRSxJQUFYLENBQWdCc0UsTUFBaEIsR0FBeUIsS0FBekI7O0FBRUEsYUFBT25NLEtBQUs0SCxNQUFNOVosUUFBWCxFQUFxQm1lLEtBQXJCLENBQVA7QUFDRDs7QUFFRC9kLFlBQVFxRyxPQUFSLENBQWdCcVQsTUFBTXJJLE9BQU4sQ0FBY29JLFVBQWQsQ0FBaEIsRUFBMkN2WixJQUEzQyxDQUFnRCxVQUFDbUgsSUFBRCxFQUFVO0FBQ3hELFVBQUlvUyxXQUFXbmEsV0FBZixFQUE0QjtBQUMxQixlQUFPeWUsU0FBU0EsT0FBaEI7QUFDRDs7QUFFRHRFLGlCQUFXRSxJQUFYLENBQWdCdFMsSUFBaEIsR0FBdUJBLElBQXZCOztBQUVBLFVBQUdxUyxNQUFNeUIsUUFBVCxFQUFtQjtBQUNqQixlQUFPckosS0FBSzRILE1BQU05WixRQUFYLEVBQXFCbWUsS0FBckIsQ0FBUDtBQUNEOztBQUVEckQsWUFBTTZELGFBQU4sQ0FBb0I5RSxVQUFwQixFQUFnQ3ZaLElBQWhDLENBQXFDLFlBQU07QUFDekN1WixtQkFBV0UsSUFBWCxDQUFnQnNFLE1BQWhCLEdBQXlCLElBQXpCOztBQUVBbk0sYUFBSzRILE1BQU05WixRQUFYLEVBQXFCbWUsS0FBckI7QUFDRCxPQUpEO0FBS0QsS0FoQkQ7QUFpQkQsR0EzREQ7O0FBNkRBak0sT0FBSyxLQUFLOEwsZ0JBQUwsQ0FBc0IsQ0FBdEIsQ0FBTCxFQUErQixZQUFNO0FBQ25DLFFBQUcsQ0FBQ25FLFdBQVdlLE1BQVgsQ0FBa0J4YyxNQUF0QixFQUE4QjtBQUM1QixVQUFHLE9BQUs0YyxXQUFSLEVBQXFCO0FBQ25CLGNBQU0sSUFBSW5mLEtBQUosZ0NBQXVDLE9BQUt1Z0IsVUFBNUMsT0FBTjtBQUNEOztBQUVELFVBQUcsT0FBS0EsVUFBUixFQUFvQjtBQUNsQixlQUFLckIsUUFBTCxJQUFpQixPQUFLcUIsVUFBTCxJQUFtQixPQUFLUixNQUFMLEVBQXBDLEtBQXNELE9BQUtxQyxlQUFMLEdBQXVCLElBQTdFO0FBQ0EsZUFBS3BDLE1BQUwsQ0FBWSxPQUFLTyxVQUFqQjtBQUNBLGVBQUtwQixXQUFMOztBQUVBLGVBQU8sT0FBS3hYLFdBQUwsRUFBUDtBQUNEOztBQUVELFVBQUcsZ0JBQU1sSixPQUFOLENBQWNHLEtBQWpCLEVBQXdCO0FBQ3RCZ0csZ0JBQVFDLElBQVI7QUFDRDtBQUNGOztBQUVELFdBQUt1YSxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsV0FBS0QsV0FBTCxHQUFtQixDQUFuQjs7QUFFQSxRQUFHa0QsY0FBSCxFQUFtQjtBQUNqQixXQUFJLElBQUl6Z0IsSUFBSWdULEtBQVIsRUFBZS9TLElBQUl3Z0IsZUFBZXRELE1BQWYsQ0FBc0J4YyxNQUE3QyxFQUFxRFgsSUFBSUMsQ0FBekQsRUFBNERELEdBQTVELEVBQWlFO0FBQy9ELFlBQUlxZCxRQUFRb0QsZUFBZXRELE1BQWYsQ0FBc0JuZCxDQUF0QixDQUFaO0FBQ0FxZCxjQUFNamQsU0FBTixJQUFtQmlkLE1BQU1qZCxTQUFOLENBQWdCcWMsS0FBaEIsRUFBbkI7QUFDRDtBQUNGOztBQUVEM1ksV0FBTytZLGFBQVAsQ0FBcUIsSUFBSUMsV0FBSixDQUFnQixjQUFoQixFQUFnQztBQUNuREMsY0FBUVg7QUFEMkMsS0FBaEMsQ0FBckI7QUFHRCxHQWhDRDtBQWlDRCxDQTVHRDs7QUE4R0FwVixPQUFPa1csVUFBUCxHQUFvQkEsVUFBcEI7O2tCQUVlbFcsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2ckJmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCWixDOzs7Ozs2QkFLSDtBQUNkLHNCQUFNaEcsU0FBTixDQUFnQixHQUFoQixFQUFxQmdHLENBQXJCO0FBQ0Q7OztBQUVELGVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU52QixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxpSUFDVkEsSUFEVTs7QUFHbkIsVUFBS3dYLEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBSzVFLE1BQUwsR0FBYyxFQUFkO0FBQ0EsVUFBS2dCLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBS3ZMLElBQUwsR0FBWSxFQUFaO0FBQ0EsVUFBS3JRLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS3NrQixLQUFMLEdBQWEsTUFBS3JqQixFQUFMLENBQVF3RCxZQUFSLENBQXFCLEtBQXJCLENBQWI7QUFSbUI7QUFTcEI7Ozs7K0JBRVVpVixHLEVBQUs7QUFDZCxXQUFLNkgsTUFBTCxDQUFZN0gsR0FBWjtBQUNBLFdBQUs2SyxTQUFMLENBQWU3SyxHQUFmO0FBQ0Q7OztpQ0FFWThGLEssRUFBTztBQUNsQixXQUFLMEIsUUFBTCxDQUFjMUIsS0FBZDtBQUNBLFdBQUsrRSxTQUFMO0FBQ0Q7OztrQ0FFYTNKLE0sRUFBUTtBQUNwQixXQUFLNEosU0FBTCxDQUFlNUosTUFBZjtBQUNBLFdBQUsySixTQUFMO0FBQ0Q7OztpQ0FFWTNJLEssRUFBTztBQUNsQixXQUFLNkksUUFBTCxDQUFjN0ksS0FBZDtBQUNBLFdBQUsySSxTQUFMO0FBQ0Q7OztnQ0FFVzNJLEssRUFBTztBQUNqQixXQUFLOEksT0FBTCxDQUFhOUksS0FBYjtBQUNBLFdBQUsySSxTQUFMO0FBQ0Q7OzttQ0FFY3ZrQixPLEVBQVM7QUFDdEIsV0FBS3lrQixRQUFMLENBQWN6a0IsT0FBZDtBQUNEOzs7a0NBRWE0RCxHLEVBQUs7QUFDakIsV0FBSytnQixTQUFMLENBQWUvZ0IsR0FBZjtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUixXQUFLM0MsRUFBTCxDQUFRd0csZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQzBKLENBQUQsRUFBTztBQUN2Q0EsVUFBRXlULGNBQUY7O0FBRUEsWUFBRyxPQUFLTixLQUFSLEVBQWU7QUFDYiwyQkFBTzFDLFFBQVAsQ0FBZ0IsT0FBSzdWLEtBQUwsQ0FBVzJOLEdBQTNCLEVBQWdDLE9BQUsxWixPQUFyQzs7QUFFQTtBQUNEOztBQUVELHlCQUFPd2YsS0FBUCxDQUFhLE9BQUtBLEtBQUwsQ0FBVy9kLElBQXhCLEVBQThCLE9BQUttWixNQUFuQyxFQUEyQyxPQUFLZ0IsS0FBaEQsRUFBdUQsT0FBS3ZMLElBQTVELEVBQW1FLE9BQUtyUSxPQUF4RTtBQUNELE9BVkQ7QUFXRDs7OytCQUVVO0FBQ1QsV0FBSytMLEtBQUwsQ0FBVzdJLGNBQVgsQ0FBMEIsT0FBMUIsS0FBc0MsS0FBS2dlLFFBQUwsQ0FBYyxLQUFLblYsS0FBTCxDQUFXeVQsS0FBekIsQ0FBdEM7QUFDQSxXQUFLelQsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixRQUExQixLQUF1QyxLQUFLc2hCLFNBQUwsQ0FBZSxLQUFLelksS0FBTCxDQUFXNk8sTUFBMUIsQ0FBdkM7QUFDQSxXQUFLN08sS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixPQUExQixLQUFzQyxLQUFLdWhCLFFBQUwsQ0FBYyxLQUFLMVksS0FBTCxDQUFXNlAsS0FBekIsQ0FBdEM7QUFDQSxXQUFLN1AsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixNQUExQixLQUFxQyxLQUFLd2hCLE9BQUwsQ0FBYSxLQUFLM1ksS0FBTCxDQUFXc0UsSUFBeEIsQ0FBckM7QUFDQSxXQUFLdEUsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixTQUExQixLQUF3QyxLQUFLMmhCLFVBQUwsQ0FBZ0IsS0FBSzlZLEtBQUwsQ0FBVy9MLE9BQTNCLENBQXhDO0FBQ0EsV0FBSytMLEtBQUwsQ0FBVzdJLGNBQVgsQ0FBMEIsUUFBMUIsS0FBdUMsS0FBS3loQixTQUFMLENBQWUsS0FBSzVZLEtBQUwsQ0FBV3NWLE1BQTFCLENBQXZDO0FBQ0EsV0FBS3RWLEtBQUwsQ0FBVzdJLGNBQVgsQ0FBMEIsS0FBMUIsS0FBb0MsS0FBS3FlLE1BQUwsQ0FBWSxLQUFLeFYsS0FBTCxDQUFXMk4sR0FBdkIsQ0FBcEM7QUFDQSxXQUFLNkssU0FBTCxDQUFlLEtBQUs3SyxHQUFwQjtBQUNEOzs7MkJBRU1BLEcsRUFBSztBQUNWLFdBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNEOzs7NkJBRVFqWSxJLEVBQU07QUFDYixXQUFLK2QsS0FBTCxHQUFhLEtBQUsyQixRQUFMLENBQWMxZixJQUFkLENBQWI7QUFDQSxXQUFLSixLQUFMLENBQVdnaUIsYUFBWCxHQUEyQixpQkFBT0EsYUFBUCxDQUFxQixLQUFLN0QsS0FBMUIsQ0FBM0I7QUFDQSxXQUFLbmUsS0FBTCxDQUFXa2lCLGFBQVgsR0FBMkIsaUJBQU9BLGFBQVAsQ0FBcUIsS0FBSy9ELEtBQTFCLENBQTNCO0FBQ0Q7Ozs4QkFFUzVFLE0sRUFBUTtBQUNoQixVQUFHLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsTUFBaUIsUUFBakIsSUFBNkIsQ0FBQ0EsTUFBakMsRUFBeUM7QUFDdkMsY0FBTSxJQUFJclosS0FBSix5Q0FBTjtBQUNEOztBQUVELFdBQUtxWixNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzZCQUVRZ0IsSyxFQUFPO0FBQ2QsVUFBRyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWhCLElBQTRCLENBQUNBLEtBQWhDLEVBQXVDO0FBQ3JDLGNBQU0sSUFBSXJhLEtBQUosd0NBQU47QUFDRDs7QUFFRCxXQUFLcWEsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs0QkFFT3ZMLEksRUFBTTtBQUNaLFVBQUcsT0FBT0EsSUFBUCxJQUFlLFFBQWxCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSTlPLEtBQUosc0NBQU47QUFDRDs7QUFFRCxXQUFLOE8sSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7OzsrQkFFVXJRLE8sRUFBUztBQUNsQixVQUFHLFFBQU9BLE9BQVAseUNBQU9BLE9BQVAsTUFBa0IsUUFBbEIsSUFBOEIsQ0FBQ0EsT0FBbEMsRUFBMkM7QUFDekMsY0FBTSxJQUFJdUIsS0FBSiwwQ0FBTjtBQUNEOztBQUVELFdBQUt2QixPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OzhCQUVTNEQsRyxFQUFLO0FBQ2IsV0FBSzVELE9BQUwsQ0FBYXFoQixNQUFiLEdBQXNCemQsR0FBdEI7QUFDRDs7OzZCQUVRbkMsSSxFQUFNO0FBQ2IsVUFBSStkLFFBQVEsaUJBQU8yQixRQUFQLENBQWdCMWYsSUFBaEIsQ0FBWjs7QUFFQSxVQUFHLENBQUMrZCxLQUFKLEVBQVc7QUFDVCxjQUFNLElBQUlqZSxLQUFKLHdDQUErQ0UsSUFBL0MsT0FBTjtBQUNEOztBQUVELGFBQU8rZCxLQUFQO0FBQ0Q7Ozs4QkFFUzlGLEcsRUFBSztBQUNiLFVBQUdBLEdBQUgsRUFBUTtBQUNOLGFBQUszTixLQUFMLENBQVcrWSxJQUFYLEdBQWtCcEwsR0FBbEI7QUFDRCxPQUZELE1BR0s7QUFDSCxhQUFLM04sS0FBTCxDQUFXK1ksSUFBWCxHQUFrQixpQkFBTzFELGNBQVAsQ0FBc0IsS0FBSzVCLEtBQTNCLEVBQWtDLEtBQUs1RSxNQUF2QyxFQUErQyxLQUFLZ0IsS0FBcEQsRUFBMkQsS0FBS3ZMLElBQWhFLENBQWxCO0FBQ0Q7QUFDRjs7Ozs7O0FBN0lrQjlHLEMsQ0FDWnRFLE8sR0FBVSx1QztBQURFc0UsQyxDQUVab0UsaUIsR0FBb0IsSTtBQUZScEUsQyxDQUdaMEUsaUIsR0FBb0IsQ0FBQyxRQUFELEM7a0JBSFIxRSxDO0FBOElwQixDOzs7Ozs7Ozs7Ozs7Ozs7QUNsSkQ7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQyxPOzs7Ozs2QkFDSDtBQUNkLHNCQUFNakcsU0FBTixDQUFnQixTQUFoQixFQUEyQmlHLE9BQTNCO0FBQ0Esc0JBQU1sRCxLQUFOLENBQVksbUJBQVosRUFBaUMsU0FBakM7QUFDRDs7O0FBRUQscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU4wQixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFHbkIsUUFBRyxNQUFLL0csRUFBTCxDQUFRcU4sWUFBUixDQUFxQixVQUFyQixDQUFILEVBQXFDO0FBQ25DLFlBQUtyTixFQUFMLENBQVFzTixZQUFSLENBQXFCLGlCQUFyQixFQUF3QyxNQUFLdE4sRUFBTCxDQUFRd0QsWUFBUixDQUFxQixVQUFyQixDQUF4QztBQUNBLFlBQUt4RCxFQUFMLENBQVF1TixlQUFSLENBQXdCLFVBQXhCO0FBQ0Q7O0FBRUQsUUFBR3VXLGlCQUFpQixNQUFLOWpCLEVBQXRCLEVBQTBCK2pCLE9BQTFCLElBQXFDLFFBQXhDLEVBQWtEO0FBQ2hELFlBQUsvakIsRUFBTCxDQUFRK1YsS0FBUixDQUFjZ08sT0FBZCxHQUF3QixPQUF4QjtBQUNEOztBQUVELFVBQUsvRixRQUFMLEdBQWdCLFdBQWhCO0FBWm1CO0FBYXBCOzs7O3NDQUVpQjtBQUNoQixVQUFJZ0csUUFBUWxjLFNBQVNtYyxXQUFULEVBQVo7QUFDQSxVQUFJQyxZQUFZbGUsT0FBT21lLFlBQVAsRUFBaEI7O0FBRUFILFlBQU1JLGtCQUFOLENBQXlCLEtBQUtwa0IsRUFBOUI7QUFDQWdrQixZQUFNSyxRQUFOLENBQWUsS0FBZjtBQUNBSCxnQkFBVUksZUFBVjtBQUNBSixnQkFBVUssUUFBVixDQUFtQlAsS0FBbkI7QUFDQSxXQUFLaGtCLEVBQUwsQ0FBUWtlLEtBQVI7QUFDRDs7Ozs7O2tCQTlCa0IzVixPO0FBK0JwQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENEOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJFLEU7Ozs7OzZCQUtIO0FBQ2Qsc0JBQU1uRyxTQUFOLENBQWdCLElBQWhCLEVBQXNCbUcsRUFBdEI7QUFDQSxzQkFBTW5HLFNBQU4sQ0FBZ0IsU0FBaEIsRUFBMkJraUIsTUFBM0I7QUFDQSxzQkFBTWxpQixTQUFOLENBQWdCLE1BQWhCLEVBQXdCbWlCLElBQXhCO0FBQ0Q7OztBQUVELGdCQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOMWQsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsbUlBQ1ZBLElBRFU7O0FBR25CLFVBQUtzUSxJQUFMLEdBQVksTUFBS3JYLEVBQUwsQ0FBUXdCLFNBQXBCO0FBQ0EsVUFBS3hCLEVBQUwsQ0FBUXdCLFNBQVIsR0FBb0IsRUFBcEI7QUFDQSxVQUFLK2MsS0FBTCxHQUFhLEtBQWI7QUFDQSxVQUFLbUcsTUFBTCxHQUFjLEtBQWQ7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFVBQUtiLE9BQUwsR0FBZUQsaUJBQWlCLE1BQUs5akIsRUFBdEIsRUFBMEIrakIsT0FBekM7QUFUbUI7QUFVcEI7Ozs7OEJBRVNuaEIsSyxFQUFPO0FBQ2YsV0FBSzJiLEtBQUwsR0FBYSxDQUFDLENBQUMzYixLQUFmO0FBQ0EsV0FBS3FkLFFBQUw7QUFDRDs7O29DQUVlcmQsSyxFQUFPO0FBQ3JCLFdBQUtpaUIsYUFBTCxDQUFtQmppQixLQUFuQjtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLa0ksS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixVQUExQixLQUF5QyxLQUFLNGlCLGFBQUwsQ0FBbUIsS0FBSy9aLEtBQUwsQ0FBVzZaLFFBQTlCLENBQXpDO0FBQ0EsV0FBS3BHLEtBQUwsR0FBYSxDQUFDLENBQUMsS0FBS3pULEtBQUwsQ0FBV2dhLEVBQTFCO0FBQ0EsYUFBTyxLQUFLN0UsUUFBTCxFQUFQO0FBQ0Q7OztnQ0FFV3lFLE0sRUFBUTtBQUNsQixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7O2tDQUVhQyxRLEVBQVU7QUFDdEIsV0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OytCQUVVO0FBQ1QsVUFBSTdpQixNQUFNLEtBQUtpakIsV0FBTCxFQUFWO0FBQ0EsVUFBSXBPLE9BQU8sS0FBSzNXLEVBQUwsQ0FBUWdsQixrQkFBbkI7QUFDQSxVQUFJQyxlQUFKOztBQUVBLFVBQUcsQ0FBQ3RPLElBQUQsSUFBUyxDQUFDQSxLQUFLM1MsT0FBTCxDQUFhLGNBQWIsQ0FBYixFQUEyQztBQUN6QztBQUNEOztBQUVEMlMsV0FBS3hWLE9BQUwsQ0FBYStqQixXQUFiLENBQXlCLEtBQUtSLE1BQUwsSUFBZSxLQUFLbkcsS0FBN0M7QUFDQTVILFdBQUt4VixPQUFMLENBQWEwakIsYUFBYixDQUEyQixLQUFLRixRQUFoQztBQUNBTSxlQUFTdE8sS0FBS3hWLE9BQUwsQ0FBYThlLFFBQWIsRUFBVDs7QUFFQSxhQUFPcGIsUUFBUXFHLE9BQVIsQ0FBZ0JwSixHQUFoQixFQUFxQmlELElBQXJCLENBQTBCLFlBQU07QUFDckMsZUFBT2tnQixNQUFQO0FBQ0QsT0FGTSxDQUFQO0FBR0Q7OztrQ0FFYTtBQUNaLFVBQUluakIsWUFBSjs7QUFFQSxVQUFHLEtBQUt5YyxLQUFMLElBQWMsQ0FBQyxLQUFLbUcsTUFBdkIsRUFBK0I7QUFDN0IsWUFBRyxLQUFLQyxRQUFMLElBQWlCLENBQUMsS0FBS0MsVUFBMUIsRUFBc0M7QUFDcEM5aUIsZ0JBQU0sS0FBS3VDLE9BQUwsRUFBTjtBQUNEOztBQUVELGFBQUtyRSxFQUFMLENBQVErVixLQUFSLENBQWNnTyxPQUFkLEdBQXdCLEtBQUtBLE9BQTdCO0FBQ0QsT0FORCxNQU9LO0FBQ0gsWUFBRyxLQUFLWSxRQUFSLEVBQWtCO0FBQ2hCLGVBQUtoUCxPQUFMO0FBQ0QsU0FGRCxNQUdLLElBQUcsQ0FBQyxLQUFLaVAsVUFBVCxFQUFxQjtBQUN4QjlpQixnQkFBTSxLQUFLdUMsT0FBTCxFQUFOO0FBQ0Q7O0FBRUQsYUFBS3JFLEVBQUwsQ0FBUStWLEtBQVIsQ0FBY2dPLE9BQWQsR0FBd0IsTUFBeEI7QUFDRDs7QUFFRCxhQUFPamlCLEdBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBSUEsWUFBSjs7QUFFQSxXQUFLOUIsRUFBTCxDQUFRd0IsU0FBUixHQUFvQixLQUFLNlYsSUFBekI7QUFDQXZWLFlBQU0sZ0JBQU11QyxPQUFOLENBQWMsS0FBS3JFLEVBQW5CLEVBQXVCLEVBQUVrRCxXQUFXLElBQWIsRUFBdkIsQ0FBTjtBQUNBLFdBQUswaEIsVUFBTCxHQUFrQixJQUFsQjs7QUFFQSxhQUFPOWlCLEdBQVA7QUFDRDs7Ozs7O0FBaEdrQjJHLEUsQ0FDWm1GLFcsR0FBYyxJO0FBREZuRixFLENBRVp6RSxPLEdBQVUsTTtBQUZFeUUsRSxDQUdadUUsaUIsR0FBb0IsQ0FBQyxVQUFELEM7a0JBSFJ2RSxFO0FBaUdwQjs7QUFFRDs7OztJQUdhK2IsTSxXQUFBQSxNOzs7QUFDWCxvQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSx1Q0FBTnpkLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDhJQUNWQSxJQURVOztBQUduQixXQUFLMmQsTUFBTCxHQUFjLElBQWQ7QUFIbUI7QUFJcEI7OztFQUx5QmpjLEU7O0FBUTVCOzs7OztJQUdhZ2MsSSxXQUFBQSxJOzs7QUFHWCxrQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSx1Q0FBTjFkLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLDBJQUNWQSxJQURVOztBQUduQixXQUFLL0csRUFBTCxDQUFRc04sWUFBUixDQUFxQixJQUFyQixFQUEyQixNQUEzQjtBQUhtQjtBQUlwQjs7O0VBUHVCa1gsTTs7QUFBYkMsSSxDQUNKemdCLE8sR0FBVSxFOzs7QUFTbkJ5RSxHQUFHK2IsTUFBSCxHQUFZQSxNQUFaO0FBQ0EvYixHQUFHZ2MsSUFBSCxHQUFVQSxJQUFWLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xJQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQi9iLE87Ozs7OzZCQUtIO0FBQ2Qsc0JBQU1wRyxTQUFOLENBQWdCLFNBQWhCLEVBQTJCb0csT0FBM0I7QUFDRDs7O0FBRUQscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU4zQixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSw2SUFDVkEsSUFEVTs7QUFHbkIsVUFBS3NRLElBQUwsR0FBWSxNQUFLclgsRUFBTCxDQUFRd0IsU0FBcEI7QUFDQSxVQUFLeEIsRUFBTCxDQUFRd0IsU0FBUixHQUFvQixFQUFwQjtBQUNBLFVBQUsyakIsVUFBTCxHQUFrQixJQUFsQjtBQUxtQjtBQU1wQjs7OzsrQkFFVTFNLEcsRUFBSztBQUNkLFdBQUsyTSxXQUFMLENBQWlCM00sR0FBakI7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLMk0sV0FBTCxDQUFpQixLQUFLdGEsS0FBTCxDQUFXMk4sR0FBNUIsQ0FBUDtBQUNEOzs7Z0NBRVdBLEcsRUFBSztBQUFBOztBQUNmLFdBQUswTSxVQUFMLElBQW1CLEtBQUtBLFVBQUwsQ0FBZ0JFLEtBQWhCLEVBQW5COztBQUVBLGFBQU8sa0JBQVFyWixHQUFSLENBQVl5TSxHQUFaLEVBQWlCO0FBQ3RCRyxpQkFBUyxpQkFBQ0YsR0FBRCxFQUFTO0FBQ2hCLGlCQUFLeU0sVUFBTCxHQUFrQnpNLEdBQWxCO0FBQ0Q7QUFIcUIsT0FBakIsRUFJSjNULElBSkksQ0FJQyxVQUFDakQsR0FBRCxFQUFTO0FBQ2YsZUFBS3FqQixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsZUFBS3hHLEtBQUw7QUFDQSxlQUFLM2UsRUFBTCxDQUFRd0IsU0FBUixHQUFvQixPQUFLNlYsSUFBekI7QUFDQSx3QkFBTWhXLFdBQU4sQ0FBa0IsT0FBS3JCLEVBQXZCLEVBQTJCOEIsSUFBSW9LLElBQS9COztBQUVBLGVBQU8sZ0JBQU03SCxPQUFOLENBQWMsT0FBS3JFLEVBQW5CLEVBQXVCLEVBQUVrRCxXQUFXLElBQWIsRUFBdkIsRUFBNEM2QixJQUE1QyxDQUFpRCxZQUFNO0FBQzVELGlCQUFLK0YsS0FBTCxDQUFXd2EsTUFBWCxDQUFrQnpaLE9BQWxCO0FBQ0QsU0FGTSxDQUFQO0FBR0QsT0FiTSxFQWFKMFosS0FiSSxDQWFFLFVBQUN2VyxHQUFELEVBQVM7QUFDaEIsZUFBS2xFLEtBQUwsQ0FBVzBhLE9BQVgsQ0FBbUIzWixPQUFuQixDQUEyQm1ELEdBQTNCO0FBQ0QsT0FmTSxDQUFQO0FBZ0JEOzs7Ozs7QUE1Q2tCdEcsTyxDQUNaa0YsVyxHQUFjLEk7QUFERmxGLE8sQ0FFWjFFLE8sR0FBVSxPO0FBRkUwRSxPLENBR1ppRSxNLEdBQVMsQ0FBQyxNQUFELEVBQVMsT0FBVCxDO2tCQUhHakUsTztBQTZDcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREQ7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQyxLOzs7Ozs2QkFJSDtBQUNkLHNCQUFNckcsU0FBTixDQUFnQixPQUFoQixFQUF5QnFHLEtBQXpCO0FBQ0Q7OztBQUVELG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFONUIsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEseUlBQ1ZBLElBRFU7O0FBR25CLFVBQUswZSxVQUFMLEdBQWtCLE1BQUt6bEIsRUFBTCxDQUFRbWYsSUFBUixJQUFnQixVQUFsQztBQUNBLFVBQUt1RyxPQUFMLEdBQWUsTUFBSzFsQixFQUFMLENBQVFtZixJQUFSLElBQWdCLE9BQS9CO0FBSm1CO0FBS3BCOzs7O21DQUVjdmMsSyxFQUFPO0FBQ3BCLFdBQUsraUIsVUFBTCxDQUFnQi9pQixLQUFoQjtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUixPQUFDLEtBQUs4aUIsT0FBTCxJQUFnQixLQUFLRCxVQUF0QixLQUFxQyxLQUFLemxCLEVBQUwsQ0FBUXdHLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDM0UsZUFBS21mLFVBQUwsQ0FBZ0IsT0FBSzNsQixFQUFMLENBQVE0bEIsT0FBeEIsRUFBaUMsS0FBakM7QUFDRCxPQUZvQyxDQUFyQztBQUdEOzs7K0JBRVU7QUFDVCxPQUFDLEtBQUtILFVBQUwsSUFBbUIsS0FBS0MsT0FBekIsS0FBcUMsS0FBS0MsVUFBTCxDQUFnQixLQUFLN2EsS0FBTCxDQUFXOGEsT0FBM0IsQ0FBckM7QUFDRDs7OytCQUVVaGpCLEssRUFBdUI7QUFBQSxVQUFoQmlKLE9BQWdCLHVFQUFOLElBQU07O0FBQ2hDakosY0FBUSxDQUFDLENBQUNBLEtBQVY7O0FBRUEsVUFBRyxLQUFLaWpCLFdBQUwsS0FBcUJqakIsS0FBeEIsRUFBK0I7QUFDN0I7QUFDRDs7QUFFRCxXQUFLNUMsRUFBTCxDQUFRNGxCLE9BQVIsR0FBa0IsS0FBS0MsV0FBTCxHQUFtQmpqQixLQUFyQztBQUNBaUosaUJBQVcsS0FBS2YsS0FBTCxDQUFXZ2IsUUFBWCxDQUFvQkMsUUFBcEIsQ0FBNkJDLEtBQTdCLEVBQW9DLEVBQUVwSCxTQUFTLElBQVgsRUFBcEMsQ0FBWDtBQUNBLFdBQUs4RyxPQUFMLElBQWdCLEtBQUtPLFdBQUwsRUFBaEI7QUFDRDs7OytCQUVVO0FBQ1Qsa0dBQWVuZ0IsS0FBZixDQUFxQixJQUFyQixFQUEyQmdCLFNBQTNCO0FBQ0EsV0FBSzRlLE9BQUwsSUFBZ0IsS0FBSzVhLEtBQUwsQ0FBV2diLFFBQVgsQ0FBb0JDLFFBQXBCLENBQTZCQyxLQUE3QixFQUFvQyxFQUFFcEgsU0FBUyxJQUFYLEVBQXBDLENBQWhCO0FBQ0Q7OztrQ0FFYTtBQUNaLFVBQUlwZSxPQUFPLEtBQUtSLEVBQUwsQ0FBUXdELFlBQVIsQ0FBcUIsTUFBckIsQ0FBWDtBQUNBLFVBQUlTLHlDQUFzQ3pELElBQXRDLHlCQUE0RCxLQUFLSixLQUFMLENBQVdDLE1BQXZFLFNBQUo7QUFDQSxVQUFJb0UsV0FBVyxnQkFBTUgsSUFBTixDQUFXRyxRQUFYLENBQW9CUixRQUFwQixDQUFmOztBQUVBLFdBQUksSUFBSS9CLElBQUksQ0FBUixFQUFXQyxJQUFJc0MsU0FBUzVCLE1BQTVCLEVBQW9DWCxJQUFJQyxDQUF4QyxFQUEyQ0QsR0FBM0MsRUFBZ0Q7QUFDOUMsWUFBSWdrQixRQUFRemhCLFNBQVN2QyxDQUFULENBQVo7O0FBRUFna0IsY0FBTVAsVUFBTixDQUFpQk8sTUFBTWxtQixFQUFOLENBQVM0bEIsT0FBMUI7QUFDRDtBQUNGOzs7Ozs7QUF4RGtCamQsSyxDQUNacUUsaUIsR0FBb0IsQ0FBQyxTQUFELEM7QUFEUnJFLEssQ0FFWmdFLE0sR0FBUyxDQUFDLFFBQUQsQztrQkFGR2hFLEs7QUF5RHBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVERDs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR3FCQyxLOzs7Ozs2QkFJSDtBQUNkLHNCQUFNdEcsU0FBTixDQUFnQixPQUFoQixFQUF5QnNHLEtBQXpCO0FBQ0Esc0JBQU10RyxTQUFOLENBQWdCLGNBQWhCLEVBQWdDNmpCLFdBQWhDO0FBQ0Q7OztBQUVELG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFOcGYsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEseUlBQ1ZBLElBRFU7O0FBR25CLFVBQUtxZixRQUFMLEdBQWdCLE1BQUtwbUIsRUFBTCxDQUFRcU4sWUFBUixDQUFxQixJQUFyQixDQUFoQjtBQUhtQjtBQUlwQjs7Ozs4QkFFU3pLLEssRUFBTztBQUNmLG1HQUFnQmtELEtBQWhCLENBQXNCLElBQXRCLEVBQTRCZ0IsU0FBNUI7QUFDQSxXQUFLdWYsUUFBTCxDQUFjLEtBQUt2YixLQUFMLENBQVd0SyxJQUF6QjtBQUNEOzs7Z0NBRVdBLEksRUFBTTtBQUNoQixXQUFLNmxCLFFBQUwsQ0FBYzdsQixJQUFkO0FBQ0Q7OztpQ0FFWW9DLEssRUFBTztBQUNsQixXQUFLdWEsUUFBTCxDQUFjdmEsS0FBZDtBQUNEOzs7OEJBRVM7QUFBQTs7QUFDUixXQUFLd2pCLFFBQUwsSUFBaUIsMkZBQWN0Z0IsS0FBZCxDQUFvQixJQUFwQixFQUEwQmdCLFNBQTFCLENBQWpCOztBQUVBLFdBQUs5RyxFQUFMLENBQVF3RyxnQkFBUixDQUF5QixRQUF6QixFQUFtQyxZQUFNO0FBQ3ZDUCxtQkFBVyxZQUFNO0FBQ2YsY0FBSXJELFFBQVEsT0FBSzBqQixhQUFMLEVBQVo7O0FBRUEsY0FBRzFqQixVQUFVLE9BQUsyakIsU0FBbEIsRUFBNkI7QUFDM0I7QUFDRDs7QUFFRCxpQkFBS0EsU0FBTCxHQUFpQjNqQixLQUFqQjtBQUNBLGlCQUFLa0ksS0FBTCxDQUFXMGIsT0FBWCxDQUFtQjNhLE9BQW5CLENBQTJCakosS0FBM0I7QUFDRCxTQVREO0FBVUQsT0FYRDtBQVlEOzs7K0JBRVU7QUFDVCxXQUFLeWpCLFFBQUwsQ0FBYyxLQUFLdmIsS0FBTCxDQUFXdEssSUFBekI7QUFDQSxXQUFLc0ssS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixPQUExQixLQUFzQyxLQUFLa2IsUUFBTCxDQUFjLEtBQUtyUyxLQUFMLENBQVdsSSxLQUF6QixDQUF0QztBQUNEOzs7NkJBRVFwQyxJLEVBQU07QUFDYixVQUFJaUUsV0FBVyxLQUFLQSxRQUFMLENBQWMsbUJBQWQsQ0FBZjs7QUFFQSxXQUFJLElBQUl2QyxJQUFJLENBQVIsRUFBV0MsSUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDdUMsaUJBQVN2QyxDQUFULEVBQVlsQyxFQUFaLENBQWVzTixZQUFmLENBQTRCLE1BQTVCLEVBQW9DOU0sSUFBcEM7QUFDRDtBQUNGOzs7NkJBRVFvQyxLLEVBQU87QUFDZCxVQUFHQSxVQUFVLEtBQUsyakIsU0FBbEIsRUFBNkI7QUFDM0I7QUFDRDs7QUFFRCxVQUFJdEQsT0FBTyxLQUFLc0QsU0FBaEI7QUFDQSxVQUFJOWhCLFdBQVcsS0FBS0EsUUFBTCxDQUFjLG1CQUFkLENBQWY7QUFDQSxVQUFJZ2lCLFNBQVMsS0FBYjs7QUFFQSxXQUFLRixTQUFMLEdBQWlCM2pCLEtBQWpCOztBQUVBLFdBQUksSUFBSVYsSUFBSSxDQUFSLEVBQVdDLElBQUlzQyxTQUFTNUIsTUFBNUIsRUFBb0NYLElBQUlDLENBQXhDLEVBQTJDRCxHQUEzQyxFQUFnRDtBQUM5QyxZQUFJZ2tCLFFBQVF6aEIsU0FBU3ZDLENBQVQsQ0FBWjtBQUNBLFlBQUl3a0IsYUFBYVIsTUFBTWxtQixFQUFOLENBQVM0QyxLQUFULEtBQW1CQSxLQUFwQzs7QUFFQThqQix1QkFBZUQsU0FBUyxJQUF4QjtBQUNBUCxjQUFNUCxVQUFOLENBQWlCZSxVQUFqQjtBQUNEOztBQUVELFVBQUcsQ0FBQ0QsTUFBSixFQUFZO0FBQ1YsWUFBRzdqQixVQUFVLElBQWIsRUFBbUI7QUFDakIsY0FBR3FnQixTQUFTemdCLFNBQVosRUFBdUI7QUFDckI7QUFDRDtBQUNGLFNBSkQsTUFLSztBQUNILGVBQUsrakIsU0FBTCxHQUFpQi9qQixTQUFqQjtBQUNBSSxrQkFBUSxJQUFSO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLa0ksS0FBTCxDQUFXMGIsT0FBWCxDQUFtQjNhLE9BQW5CLENBQTJCakosS0FBM0IsRUFBa0MsRUFBRWdjLFNBQVMsSUFBWCxFQUFsQztBQUNEOzs7b0NBRWU7QUFDZCxVQUFJbmEsV0FBVyxLQUFLQSxRQUFMLENBQWMsbUJBQWQsQ0FBZjs7QUFFQSxXQUFJLElBQUl2QyxJQUFJLENBQVIsRUFBV0MsSUFBSXNDLFNBQVM1QixNQUE1QixFQUFvQ1gsSUFBSUMsQ0FBeEMsRUFBMkNELEdBQTNDLEVBQWdEO0FBQzlDLFlBQUlna0IsUUFBUXpoQixTQUFTdkMsQ0FBVCxDQUFaOztBQUVBLFlBQUdna0IsTUFBTWxtQixFQUFOLENBQVM0bEIsT0FBWixFQUFxQjtBQUNuQixpQkFBT00sTUFBTWxtQixFQUFOLENBQVM0QyxLQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztBQXhHa0JnRyxLLENBQ1o1RSxPLEdBQVUsUTtBQURFNEUsSyxDQUVaK0QsTSxHQUFTLENBQUMsT0FBRCxDO2tCQUZHL0QsSztBQXlHcEI7O0FBRUQ7Ozs7SUFHYXVkLFcsV0FBQUEsVzs7O0FBR1gseUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsdUNBQU5wZixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxrSkFDVkEsSUFEVTtBQUVwQjs7OztpQ0FFWW5FLEssRUFBTztBQUNsQixXQUFLK2pCLGFBQUwsQ0FBbUIvakIsS0FBbkI7QUFDRDs7OytCQUVVO0FBQ1QsV0FBSytqQixhQUFMLENBQW1CLEtBQUs3YixLQUFMLENBQVdsSSxLQUE5QjtBQUNEOzs7a0NBRWFBLEssRUFBTztBQUNuQixXQUFLeEMsS0FBTCxDQUFXd0MsS0FBWCxHQUFtQkEsS0FBbkI7QUFDRDs7Ozs7O0FBakJVdWpCLFcsQ0FDSjdrQixROzs7QUFtQlRzSCxNQUFNdWQsV0FBTixHQUFvQkEsV0FBcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJyZCxNOzs7Ozs2QkFJSDtBQUNkLHNCQUFNeEcsU0FBTixDQUFnQixRQUFoQixFQUEwQndHLE1BQTFCO0FBQ0Esc0JBQU14RyxTQUFOLENBQWdCLFFBQWhCLEVBQTBCc2tCLE1BQTFCO0FBQ0Q7OztBQUVELG9CQUFxQjtBQUFBOztBQUFBOztBQUFBLHNDQUFON2YsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsMklBQ1ZBLElBRFU7O0FBR25CLFVBQUs4ZixlQUFMLEdBQXVCLFFBQXZCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUptQjtBQUtwQjs7OztvQ0FFZWxrQixLLEVBQU87QUFDckIsV0FBS21rQixXQUFMLENBQWlCbmtCLEtBQWpCO0FBQ0Q7OzttQ0FFY0EsSyxFQUFPO0FBQ3BCLFdBQUtva0IsVUFBTCxDQUFnQnBrQixLQUFoQjtBQUNEOzs7OEJBRVNBLEssRUFBTztBQUNmLHFHQUFnQmtELEtBQWhCLENBQXNCLElBQXRCLEVBQTRCZ0IsU0FBNUI7QUFDQSxXQUFLbWdCLFVBQUw7QUFDRDs7OzhCQUVTO0FBQUE7O0FBQ1IsbUdBQWNuaEIsS0FBZCxDQUFvQixJQUFwQixFQUEwQmdCLFNBQTFCOztBQUVBLFdBQUs5RyxFQUFMLENBQVF3RyxnQkFBUixDQUF5QixRQUF6QixFQUFtQyxZQUFNO0FBQ3ZDLGVBQUt4RyxFQUFMLENBQVF3YyxPQUFSLEdBQWtCLE9BQUswSyxVQUFMLEVBQWxCO0FBQ0QsT0FGRDtBQUdEOzs7K0JBRVU7QUFDVCxvR0FBZXBoQixLQUFmLENBQXFCLElBQXJCLEVBQTJCZ0IsU0FBM0I7QUFDQSxXQUFLZ0UsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixVQUExQixLQUF5QyxLQUFLOGtCLFdBQUwsQ0FBaUIsS0FBS2pjLEtBQUwsQ0FBV3FjLFFBQTVCLENBQXpDO0FBQ0EsV0FBS3JjLEtBQUwsQ0FBVzdJLGNBQVgsQ0FBMEIsU0FBMUIsS0FBd0MsS0FBSytrQixVQUFMLENBQWdCLEtBQUtsYyxLQUFMLENBQVcwUixPQUEzQixDQUF4QztBQUNBLFdBQUt5SyxVQUFMO0FBQ0Q7OztnQ0FFV3JrQixLLEVBQU87QUFDakIsV0FBS2trQixVQUFMLEdBQWtCbGtCLEtBQWxCO0FBQ0EsV0FBS3drQixXQUFMLENBQWlCLEtBQUtDLFdBQUwsQ0FBaUIsZ0JBQU1sWixJQUFOLENBQVcsS0FBS25PLEVBQUwsQ0FBUXdjLE9BQW5CLENBQWpCLENBQWpCO0FBQ0Q7OzsrQkFFVTVaLEssRUFBTztBQUNoQixXQUFLd2tCLFdBQUwsQ0FBaUIsS0FBS0MsV0FBTCxDQUFpQnprQixLQUFqQixDQUFqQjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFJMGtCLFdBQVcsRUFBZjs7QUFFQSxXQUFJLElBQUlwbEIsSUFBSSxDQUFSLEVBQVdDLElBQUksS0FBS25DLEVBQUwsQ0FBUWpCLE9BQVIsQ0FBZ0I4RCxNQUFuQyxFQUEyQ1gsSUFBSUMsQ0FBL0MsRUFBa0RELEdBQWxELEVBQXVEO0FBQ3JELFlBQUlxbEIsU0FBUyxLQUFLdm5CLEVBQUwsQ0FBUWpCLE9BQVIsQ0FBZ0JtRCxDQUFoQixFQUFtQmYsT0FBaEM7QUFDQSxZQUFJK2lCLFlBQVlxRCxPQUFPemMsS0FBUCxDQUFhd2MsUUFBN0I7O0FBRUEsWUFBR3BELFNBQUgsRUFBYztBQUNab0QsbUJBQVNsbUIsSUFBVCxDQUFjbW1CLE9BQU92bkIsRUFBUCxDQUFVNEMsS0FBeEI7QUFDRDs7QUFFRDJrQixlQUFPdm5CLEVBQVAsQ0FBVXNuQixRQUFWLEdBQXFCcEQsU0FBckI7QUFDRDs7QUFFRCxVQUFHLENBQUNvRCxTQUFTemtCLE1BQWIsRUFBcUI7QUFDbkIsYUFBSzJrQixRQUFMO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS0osV0FBTCxDQUFpQixLQUFLQyxXQUFMLENBQWlCQyxRQUFqQixDQUFqQjtBQUNEO0FBQ0Y7Ozs0Q0FFdUI7QUFDdEIsVUFBSXRuQiwwSEFBSjs7QUFFQSxVQUFHLENBQUNBLEdBQUdxTixZQUFILENBQWdCLE9BQWhCLENBQUosRUFBOEI7QUFDNUJyTixXQUFHc04sWUFBSCxDQUFnQixPQUFoQixFQUF5QixLQUFLK0osSUFBTCxDQUFVb1EsSUFBVixFQUF6QjtBQUNEOztBQUVELGFBQU96bkIsRUFBUDtBQUNEOzs7OEJBRVM0QyxLLEVBQU87QUFDZixVQUFHLENBQUMsS0FBS2trQixVQUFULEVBQXFCO0FBQ25CLGVBQU8sS0FBSzltQixFQUFMLENBQVF3YyxPQUFSLEtBQW9CNVosS0FBM0I7QUFDRDs7QUFFRCxhQUFPLEtBQUs1QyxFQUFMLENBQVF3YyxPQUFSLENBQWdCN1MsT0FBaEIsQ0FBd0IvRyxLQUF4QixLQUFrQyxDQUFDLENBQTFDO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQUcsQ0FBQyxLQUFLa2tCLFVBQVQsRUFBcUI7QUFDbkIsZUFBTyxLQUFLOW1CLEVBQUwsQ0FBUTRDLEtBQWY7QUFDRDs7QUFFRCxVQUFJNFosVUFBVSxFQUFkOztBQUVBLFdBQUksSUFBSXRhLElBQUksQ0FBUixFQUFXQyxJQUFJLEtBQUtuQyxFQUFMLENBQVFqQixPQUFSLENBQWdCOEQsTUFBbkMsRUFBMkNYLElBQUlDLENBQS9DLEVBQWtERCxHQUFsRCxFQUF1RDtBQUNyRCxZQUFJcWxCLFNBQVMsS0FBS3ZuQixFQUFMLENBQVFqQixPQUFSLENBQWdCbUQsQ0FBaEIsQ0FBYjs7QUFFQSxZQUFHcWxCLE9BQU9ELFFBQVYsRUFBb0I7QUFDbEI5SyxrQkFBUXBiLElBQVIsQ0FBYW1tQixPQUFPM2tCLEtBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPNFosT0FBUDtBQUNEOzs7Z0NBRVc1WixLLEVBQU87QUFDakIsVUFBRyxLQUFLa2tCLFVBQVIsRUFBb0I7QUFDbEIsWUFBRyxDQUFDcmhCLE1BQU0wUCxPQUFOLENBQWN2UyxLQUFkLENBQUosRUFBMEI7QUFDeEJBLGtCQUFTQSxVQUFVSixTQUFWLElBQXVCSSxVQUFVLElBQWxDLEdBQXlDLENBQUNBLEtBQUQsQ0FBekMsR0FBa0QsRUFBMUQ7QUFDRDtBQUNGLE9BSkQsTUFLSztBQUNILFlBQUc2QyxNQUFNMFAsT0FBTixDQUFjdlMsS0FBZCxDQUFILEVBQXlCO0FBQ3ZCQSxrQkFBUUEsTUFBTUMsTUFBTixHQUFjRCxNQUFNLENBQU4sQ0FBZCxHQUF3QixFQUFoQztBQUNELFNBRkQsTUFHSyxJQUFHLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsTUFBZ0IsUUFBaEIsSUFBNEIsT0FBT0EsS0FBUCxJQUFnQixVQUEvQyxFQUEyRDtBQUM5REEsa0JBQVEsRUFBUjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0EsS0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLd2tCLFdBQUwsQ0FBaUIsS0FBS0YsVUFBTCxFQUFqQjtBQUNEOzs7Z0NBRVd0a0IsSyxFQUFPO0FBQ2pCLFVBQUcsZ0JBQU1tVSxPQUFOLENBQWMsS0FBSy9XLEVBQUwsQ0FBUXdjLE9BQXRCLEVBQStCNVosS0FBL0IsQ0FBSCxFQUEwQztBQUN4QztBQUNEOztBQUVELFVBQUc2QyxNQUFNMFAsT0FBTixDQUFjdlMsS0FBZCxDQUFILEVBQXlCO0FBQ3ZCLGFBQUs1QyxFQUFMLENBQVE0QyxLQUFSLEdBQWdCQSxNQUFNQSxNQUFNQyxNQUFOLEdBQWUsQ0FBckIsQ0FBaEI7O0FBRUEsYUFBSSxJQUFJWCxJQUFJLENBQVIsRUFBV0MsSUFBSSxLQUFLbkMsRUFBTCxDQUFRakIsT0FBUixDQUFnQjhELE1BQW5DLEVBQTJDWCxJQUFJQyxDQUEvQyxFQUFrREQsR0FBbEQsRUFBdUQ7QUFDckQsY0FBSXFsQixTQUFTLEtBQUt2bkIsRUFBTCxDQUFRakIsT0FBUixDQUFnQm1ELENBQWhCLENBQWI7O0FBRUFxbEIsaUJBQU9ELFFBQVAsR0FBa0Ixa0IsTUFBTStHLE9BQU4sQ0FBYzRkLE9BQU8za0IsS0FBckIsS0FBK0IsQ0FBQyxDQUFsRDtBQUNEO0FBQ0YsT0FSRCxNQVNLO0FBQ0gsYUFBSzVDLEVBQUwsQ0FBUTRDLEtBQVIsR0FBZ0JBLEtBQWhCOztBQUVBLGFBQUksSUFBSVYsS0FBSSxDQUFSLEVBQVdDLEtBQUksS0FBS25DLEVBQUwsQ0FBUWpCLE9BQVIsQ0FBZ0I4RCxNQUFuQyxFQUEyQ1gsS0FBSUMsRUFBL0MsRUFBa0RELElBQWxELEVBQXVEO0FBQ3JELGNBQUlxbEIsVUFBUyxLQUFLdm5CLEVBQUwsQ0FBUWpCLE9BQVIsQ0FBZ0JtRCxFQUFoQixDQUFiOztBQUVBcWxCLGtCQUFPRCxRQUFQLEdBQWtCQyxRQUFPM2tCLEtBQVAsSUFBZ0JBLEtBQWxDO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLNUMsRUFBTCxDQUFRd2MsT0FBUixHQUFrQjVaLEtBQWxCO0FBQ0EsV0FBS2tJLEtBQUwsQ0FBV2diLFFBQVgsQ0FBb0JDLFFBQXBCLENBQTZCQyxLQUE3QixFQUFvQyxFQUFFcEgsU0FBUyxJQUFYLEVBQXBDO0FBQ0Q7Ozs7OztBQS9Ka0I5VixNLENBQ1prRSxpQixHQUFvQixDQUFDLFVBQUQsQztBQURSbEUsTSxDQUVaNkQsTSxHQUFTLENBQUMsUUFBRCxDO2tCQUZHN0QsTTtBQWdLcEI7O0lBRVk4ZCxNLFdBQUFBLE07Ozs7Ozs7Ozs7OzBDQUdXcGQsVSxFQUFZO0FBQ2hDLGFBQU8sZ0JBQU1nTyxrQkFBTixDQUF5QmhPLFVBQXpCLENBQVA7QUFDRDs7OzhCQUVTO0FBQ1IsbUdBQWMxRCxLQUFkLENBQW9CLElBQXBCLEVBQTBCZ0IsU0FBMUI7QUFDRDs7O29DQUVlbEUsSyxFQUFPO0FBQ3JCLFdBQUs4a0IsV0FBTCxDQUFpQjlrQixLQUFqQjtBQUNEOzs7Z0NBRVdBLEssRUFBTztBQUNqQixXQUFLNUMsRUFBTCxDQUFRc25CLFFBQVIsR0FBbUIxa0IsS0FBbkI7QUFDQSxXQUFLZ2IsR0FBTCxDQUFTNEosUUFBVDtBQUNEOzs7Ozs7QUFsQlVaLE0sQ0FDSjVaLGlCLEdBQW9CLENBQUMsVUFBRCxDOzs7QUFvQjdCbEUsT0FBTzhkLE1BQVAsR0FBZ0JBLE1BQWhCLEM7Ozs7Ozs7Ozs7Ozs7OztBQzNMQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUI1ZCxROzs7Ozs7Ozs7Ozs2QkFDSDtBQUNkLHNCQUFNMUcsU0FBTixDQUFnQixVQUFoQixFQUE0QjBHLFFBQTVCO0FBQ0Q7Ozs7OztrQkFIa0JBLFE7QUFJcEIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDUEQ7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTXFCWixLO0FBR25CLGlCQUFZNUgsSUFBWixFQUFrQlIsRUFBbEIsRUFBc0JzQyxTQUF0QixFQUFpQztBQUFBOztBQUMvQixTQUFLakMsTUFBTCxHQUFjRyxJQUFkO0FBQ0EsU0FBS0csSUFBTCxHQUFZWCxFQUFaO0FBQ0EsU0FBS1UsV0FBTCxHQUFtQjRCLFNBQW5CO0FBQ0F0QyxPQUFHc04sWUFBSCxDQUFnQixPQUFoQixFQUF5QjlNLElBQXpCO0FBQ0Q7Ozs7OztBQU1EOzs7Ozs7OzBCQU9NVixJLEVBQU04QyxLLEVBQXVCO0FBQUE7O0FBQUEsVUFBaEIra0IsTUFBZ0IsdUVBQVAsS0FBTzs7QUFDakMsVUFBRyxDQUFDbGlCLE1BQU0wUCxPQUFOLENBQWNyVixJQUFkLENBQUosRUFBeUI7QUFDdkJBLGVBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsc0JBQU1rRCxVQUFOLENBQWlCLFlBQU07QUFDckIya0IsbUJBQVcsTUFBS2puQixXQUFMLENBQWlCeVQsd0JBQWpCLEdBQTRDLElBQXZEO0FBQ0Esd0JBQU0xUixpQkFBTixDQUF3QjNDLElBQXhCLFNBQW9DLFVBQUM0QyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUNqRCxjQUFHLENBQUNELElBQUosRUFBVTtBQUNSLG1CQUFPQyxPQUFPLEVBQWQ7QUFDRDs7QUFFRCxpQkFBT0MsS0FBUDtBQUNELFNBTkQ7QUFPQStrQixtQkFBVyxNQUFLam5CLFdBQUwsQ0FBaUJ5VCx3QkFBakIsR0FBNEMsS0FBdkQ7QUFDRCxPQVZEO0FBV0Q7Ozt3QkEzQmE7QUFDWjtBQUNEOzs7Ozs7a0JBWmtCL0wsSztBQXNDcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NEOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHcUJ3ZixJOzs7QUFXbkIsa0JBQXFCO0FBQUE7O0FBQUE7O0FBQUEsc0NBQU43Z0IsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsdUlBQ1ZBLElBRFU7O0FBR25CLFVBQUszRyxLQUFMLENBQVdza0IsTUFBWCxHQUFvQixNQUFLQSxNQUFMLEdBQWMsSUFBbEM7QUFIbUI7QUFJcEI7Ozs7a0NBRWFoSSxLLEVBQU87QUFDbkIsV0FBS21MLFlBQUwsQ0FBa0JuTCxLQUFsQjtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJb0wsY0FBYyxLQUFLcGpCLEtBQUwsQ0FBVztBQUFBLGVBQUs4TSxhQUFhdVcsT0FBbEI7QUFBQSxPQUFYLEVBQXNDQyxPQUF0QyxHQUFnRG5sQixNQUFsRTtBQUNBLFVBQUlvbEIsYUFBYSxLQUFLdmpCLEtBQUwsQ0FBVztBQUFBLGVBQUs4TSxhQUFhMFcsVUFBbEI7QUFBQSxPQUFYLEVBQXlDRixPQUF6QyxHQUFtRG5sQixNQUFwRTs7QUFFQSxVQUFHaWxCLGVBQWVHLFVBQWxCLEVBQThCO0FBQzVCLGNBQU0sSUFBSTNuQixLQUFKLG9FQUEyRXduQixXQUEzRSxTQUEwRkcsVUFBMUYsQ0FBTjtBQUNEOztBQUVELFdBQUtKLFlBQUwsQ0FBa0IsS0FBSy9jLEtBQUwsQ0FBVzRaLE1BQVgsSUFBcUIsQ0FBdkM7QUFDRDs7O2lDQUVZaEksSyxFQUFPO0FBQ2xCLFVBQUl5TCxPQUFPLEtBQUt6akIsS0FBTCxDQUFXO0FBQUEsZUFBSzhNLGFBQWF1VyxPQUFsQjtBQUFBLE9BQVgsRUFBc0NDLE9BQXRDLEVBQVg7QUFDQSxVQUFJSSxhQUFhLEtBQUsxRCxNQUF0Qjs7QUFFQSxVQUFHeUQsS0FBS3pMLEtBQUwsTUFBZ0JsYSxTQUFuQixFQUE4QjtBQUM1QixjQUFNLElBQUlsQyxLQUFKLDhCQUFxQ29jLEtBQXJDLHdCQUFOO0FBQ0Q7O0FBRUQsV0FBS3RjLEtBQUwsQ0FBV3NrQixNQUFYLEdBQW9CLEtBQUtBLE1BQUwsR0FBY2hJLEtBQWxDOztBQUVBLFVBQUcsQ0FBQ3lMLEtBQUt0bEIsTUFBVCxFQUFpQjtBQUNmLHdCQUFNOUQsT0FBTixDQUFjRyxLQUFkLElBQXVCZ0csUUFBUUMsSUFBUixDQUFhLDBEQUFiLENBQXZCO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJakQsSUFBSSxDQUFSLEVBQVdDLElBQUlnbUIsS0FBS3RsQixNQUF6QixFQUFpQ1gsSUFBSUMsQ0FBckMsRUFBd0NELEdBQXhDLEVBQTZDO0FBQzNDaW1CLGFBQUtqbUIsQ0FBTCxFQUFRZ2pCLFdBQVIsQ0FBb0JoakIsS0FBS3dhLEtBQXpCO0FBQ0Q7O0FBRUQwTCxvQkFBYyxLQUFLMUQsTUFBbkIsSUFBNkIsS0FBSzVaLEtBQUwsQ0FBV3VkLEtBQVgsQ0FBaUJ4YyxPQUFqQixDQUF5QjZRLEtBQXpCLEVBQWdDLEVBQUVrQyxTQUFTLElBQVgsRUFBaEMsQ0FBN0I7QUFDRDs7OztFQW5EK0IsZ0JBQU0xYSxTOztBQXNEeEM7Ozs7O0FBdERxQjBqQixJLENBQ1pqYixNLEdBQVMsQ0FBQyxLQUFELEM7O0FBREdpYixJLENBR1oxZixNLEdBQVMsWUFBVztBQUN6QixrQkFBTTVGLFNBQU4sQ0FBZ0IsTUFBaEIsRUFBd0JzbEIsSUFBeEI7QUFDQSxrQkFBTXRsQixTQUFOLENBQWdCLFVBQWhCLEVBQTRCeWxCLE9BQTVCO0FBQ0Esa0JBQU16bEIsU0FBTixDQUFnQixhQUFoQixFQUErQjRsQixVQUEvQjtBQUNBLGtCQUFNNWxCLFNBQU4sQ0FBZ0IsV0FBaEIsRUFBNkJnbUIsUUFBN0I7QUFDQSxrQkFBTWhtQixTQUFOLENBQWdCLFVBQWhCLEVBQTRCaW1CLE9BQTVCO0FBQ0QsQzs7a0JBVGtCWCxJOztJQXlEUkcsTyxXQUFBQSxPOzs7QUFHWCxxQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSx1Q0FBTmhoQixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFBQSxnSkFDVkEsSUFEVTs7QUFHbkIsV0FBS3FmLFFBQUwsR0FBZ0IsT0FBS3BtQixFQUFMLENBQVFxTixZQUFSLENBQXFCLElBQXJCLENBQWhCO0FBQ0EsV0FBS21iLGFBQUwsR0FBcUI7QUFBQSxhQUFLaFgsYUFBYThXLFFBQWxCO0FBQUEsS0FBckI7QUFKbUI7QUFLcEI7Ozs7OEJBRVM7QUFDUixXQUFLbEMsUUFBTCxJQUFpQiwrRkFBY3RnQixLQUFkLENBQW9CLElBQXBCLEVBQTBCZ0IsU0FBMUIsQ0FBakI7QUFDRDs7OytCQUVVO0FBQ1QsV0FBS3NmLFFBQUwsSUFBaUIsZ0dBQWV0Z0IsS0FBZixDQUFxQixJQUFyQixFQUEyQmdCLFNBQTNCLENBQWpCO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS3JDLFFBQUwsQ0FBYyxLQUFLK2pCLGFBQW5CLEVBQWtDLENBQWxDLENBQVA7QUFDRDs7O2dDQUVXQyxHLEVBQUs7QUFDZixVQUFJTixPQUFPLEtBQUtILE9BQUwsRUFBWDs7QUFFQSxXQUFJLElBQUk5bEIsSUFBSSxDQUFSLEVBQVdDLElBQUlnbUIsS0FBS3RsQixNQUF4QixFQUFnQ1gsSUFBSUMsQ0FBcEMsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDLFlBQUdpbUIsS0FBS2ptQixDQUFMLE1BQVl1bUIsR0FBZixFQUFvQjtBQUNsQixpQkFBT3ZtQixDQUFQO0FBQ0Q7QUFDRjtBQUNGOzs7bUNBRWNBLEMsRUFBRztBQUNoQixhQUFPLEtBQUs4bEIsT0FBTCxHQUFlOWxCLENBQWYsQ0FBUDtBQUNEOzs7Ozs7QUFHSDs7Ozs7QUFyQ2E2bEIsTyxDQUNKL2pCLE8sR0FBVSxFOztJQXVDTmtrQixVLFdBQUFBLFU7OztBQUNYLHdCQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFObmhCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLHNKQUNWQSxJQURVOztBQUduQixXQUFLeWhCLGFBQUwsR0FBcUI7QUFBQSxhQUFLaFgsYUFBYStXLE9BQWxCO0FBQUEsS0FBckI7QUFIbUI7QUFJcEI7OztFQUw2QlIsTzs7QUFRaEM7Ozs7O0lBR2FRLE8sV0FBQUEsTzs7O0FBSVgscUJBQXFCO0FBQUE7O0FBQUE7O0FBQUEsdUNBQU54aEIsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBQUEsZ0pBQ1ZBLElBRFU7O0FBR25CLFFBQUcsQ0FBQyxPQUFLL0csRUFBTCxDQUFRa0IsVUFBUixDQUFtQkMsT0FBcEIsSUFBK0IsRUFBRSxPQUFLbkIsRUFBTCxDQUFRa0IsVUFBUixDQUFtQkMsT0FBbkIsWUFBc0MrbUIsVUFBeEMsQ0FBbEMsRUFBdUY7QUFDckYsc0JBQU1ucEIsT0FBTixDQUFjRyxLQUFkLElBQXVCZ0csUUFBUUMsSUFBUixDQUFhLHlEQUFiLENBQXZCO0FBQ0EsYUFBSzJZLE1BQUw7QUFDRDs7QUFFRCxXQUFLMWQsS0FBTCxDQUFXdWtCLFFBQVgsR0FBc0IsS0FBdEI7QUFDQSxXQUFLdmtCLEtBQUwsQ0FBV3NvQixXQUFYLEdBQXlCLE9BQUtDLFFBQUwsR0FBZ0IsS0FBekM7QUFUbUI7QUFVcEI7Ozs7K0JBRVU7QUFDVCxzR0FBZTdpQixLQUFmLENBQXFCLElBQXJCLEVBQTJCZ0IsU0FBM0I7QUFDQSxXQUFLZ0UsS0FBTCxDQUFXN0ksY0FBWCxDQUEwQixVQUExQixLQUF5QyxLQUFLNGlCLGFBQUwsQ0FBbUIsS0FBSy9aLEtBQUwsQ0FBVzZaLFFBQTlCLENBQXpDO0FBQ0Q7OztvQ0FFZS9oQixLLEVBQU87QUFDckIsV0FBS2lpQixhQUFMLENBQW1CamlCLEtBQW5CO0FBQ0Q7OztrQ0FFYUEsSyxFQUFPO0FBQ25CLFdBQUt4QyxLQUFMLENBQVd1a0IsUUFBWCxHQUFzQi9oQixLQUF0QjtBQUNEOzs7Z0NBRVdnbUIsUSxFQUFVO0FBQ3BCLFdBQUt4b0IsS0FBTCxDQUFXc29CLFdBQVgsR0FBeUIsS0FBS0MsUUFBTCxHQUFnQkMsUUFBekM7QUFDRDs7Ozs7O0FBR0g7Ozs7O0FBbENhTCxPLENBQ0pqbkIsUTtBQURJaW5CLE8sQ0FFSnZiLGlCLEdBQW9CLENBQUMsVUFBRCxDOztJQW1DaEJzYixRLFdBQUFBLFE7OztBQUNYLHNCQUFxQjtBQUFBOztBQUFBOztBQUFBLHVDQUFOdmhCLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUFBLGtKQUNWQSxJQURVOztBQUduQixXQUFLM0csS0FBTCxDQUFXc29CLFdBQVgsR0FBeUIsT0FBS0MsUUFBTCxHQUFnQixLQUF6Qzs7QUFFQSxRQUFHLENBQUMsT0FBSzNvQixFQUFMLENBQVFrQixVQUFSLENBQW1CQyxPQUFwQixJQUErQixFQUFFLE9BQUtuQixFQUFMLENBQVFrQixVQUFSLENBQW1CQyxPQUFuQixZQUFzQzRtQixPQUF4QyxDQUFsQyxFQUFvRjtBQUNsRixzQkFBTWhwQixPQUFOLENBQWNHLEtBQWQsSUFBdUJnRyxRQUFRQyxJQUFSLENBQWEsdURBQWIsQ0FBdkI7QUFDQSxhQUFLMlksTUFBTDtBQUNEO0FBUmtCO0FBU3BCOzs7OzhCQUVTO0FBQUE7O0FBQ1IsdUdBQWNoWSxLQUFkLENBQW9CLElBQXBCLEVBQTBCZ0IsU0FBMUI7QUFDQSxXQUFLcWhCLElBQUwsR0FBWSxLQUFLN2MsTUFBTCxDQUFZO0FBQUEsZUFBS2tHLGFBQWFvVyxJQUFsQjtBQUFBLE9BQVosQ0FBWjs7QUFFQSxXQUFLNW5CLEVBQUwsQ0FBUXdHLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdEMsZUFBSzJoQixJQUFMLENBQVVOLFlBQVYsQ0FBdUIsT0FBS25MLEtBQTVCO0FBQ0QsT0FGRDtBQUdEOzs7K0JBRVU7QUFDVCx3R0FBZTVXLEtBQWYsQ0FBcUIsSUFBckIsRUFBMkJnQixTQUEzQjtBQUNBLFdBQUs0VixLQUFMLEdBQWEsS0FBS3lMLElBQUwsQ0FBVXpqQixLQUFWLENBQWdCO0FBQUEsZUFBSzhNLGFBQWF1VyxPQUFsQjtBQUFBLE9BQWhCLEVBQTJDYyxXQUEzQyxDQUF1RCxJQUF2RCxDQUFiO0FBQ0Q7OztnQ0FFV0QsUSxFQUFVO0FBQ3BCLFdBQUt4b0IsS0FBTCxDQUFXc29CLFdBQVgsR0FBeUIsS0FBS0MsUUFBTCxHQUFnQkMsUUFBekM7QUFDQSxXQUFLVCxJQUFMLENBQVV6akIsS0FBVixDQUFnQjtBQUFBLGVBQUs4TSxhQUFhMFcsVUFBbEI7QUFBQSxPQUFoQixFQUE4Q1ksY0FBOUMsQ0FBNkQsS0FBS3BNLEtBQWxFLEVBQXlFd0ksV0FBekUsQ0FBcUYwRCxRQUFyRjtBQUNEOzs7Ozs7QUFHSGhCLEtBQUtHLE9BQUwsR0FBZUEsT0FBZjtBQUNBSCxLQUFLVSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBVixLQUFLTSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBTixLQUFLVyxPQUFMLEdBQWVBLE9BQWYsQyIsImZpbGUiOiJha2lsaS10YWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjkxYTk4MzQ3NTEwNGYyZmVlOWUiLCIvKipcbiAqIEphdmFzY3JpcHQgZnJhbWV3b3JrXG4gKlxuICogY29uc3QgQWtpbGkgPSBtYWtlSXRFYXN5KGpzICsgaHRtbCk7XG4gKlxuICogQGF1dGhvciBBbGV4YW5kciBCYWxhc3lhbiA8bXl3ZWJzdHJlZXRAZ21haWwuY29tPlxuICogQGxpbmsgaHR0cDovL2FraWxpanMuY29tXG4gKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgSWYgZnJvbSAnLi9jb21wb25lbnRzL2lmJztcbmltcG9ydCBGb3IgZnJvbSAnLi9jb21wb25lbnRzL2Zvcic7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dCc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvJztcbmltcG9ydCBUZXh0IGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcbmltcG9ydCBUZXh0YXJlYSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEnO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xuaW1wb3J0IEluY2x1ZGUgZnJvbSAnLi9jb21wb25lbnRzL2luY2x1ZGUnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZSc7XG5pbXBvcnQgQSBmcm9tICcuL2NvbXBvbmVudHMvYSc7XG5pbXBvcnQgU2NvcGUgZnJvbSAnLi9zY29wZSc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3NlcnZpY2VzL3JvdXRlcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IEFraWxpID0ge307XG5cbkFraWxpLm9wdGlvbnMgPSB7XG4gIG5lc3RlZFdhdGNoaW5nOiB0cnVlLFxuICBzaG93RXZhbHVhdGlvbkVycm9yczogdHJ1ZSxcbiAgZGVidWc6IHRydWVcbn07XG5cbkFraWxpLl9faW5pdCA9IGZhbHNlO1xuQWtpbGkuX19jb21wb25lbnRzID0ge307XG5Ba2lsaS5fX2FsaWFzZXMgPSB7fTtcbkFraWxpLl9fc2NvcGVzID0ge307XG5Ba2lsaS5fX2lzb2xhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuXG5Ba2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuXTtcblxuQWtpbGkuY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuZGVjb3JhdG9ycyA9IHt9O1xuQWtpbGkuc2VydmljZXMgPSB7fTtcblxuLyoqXG4gKiBKb2luIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uKGtleXMpIHtcbiAgcmV0dXJuIGtleXMubWFwKGVsID0+IGVsLnRvU3RyaW5nKCkpLmpvaW4oJy4nKTtcbn07XG5cbi8qKlxuICogQWRkIHNjb3BlIHRvIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSBzY29wZVxuICovXG5Ba2lsaS5hZGRTY29wZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gIGlmKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWxldGUgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlU2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGxldCBzY29wZSA9IHRoaXMuX19zY29wZXNbbmFtZV07XG5cbiAgc2NvcGUuX19jb21wb25lbnQgPSBudWxsO1xuICBzY29wZS5fX2VsID0gbnVsbDtcbiAgc2NvcGUuX19wYXJlbnQgPSBudWxsO1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxIVE1MRWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKG5vZGUucGFyZW50Tm9kZS5fX2FraWxpKSB7XG4gICAgICBhcnIucHVzaChub2RlLnBhcmVudE5vZGUpO1xuXG4gICAgICBpZighdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcblxuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2luZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbihlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgaWYodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuXG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gdGhpcy5fX2lzb2xhdGlvbikge1xuICAgIGlmKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBwcm9wID0gcHJvcHNbaV07XG5cbiAgICBpZihwcm9wLmlzRGVsZXRlZCkge1xuICAgICAgcHJvcC5jb21wb25lbnQuX19ldmFsdWF0ZUJ5S2V5cyhwcm9wLmtleXMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuc2NvcGUsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGVkID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gZXZhbHVhdGlvbjtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbihlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYoY29tcG9uZW50KSB7XG4gICAgaWYocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUoKTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgaXNSb290ID0gZWwgPT09IHRoaXMuX19yb290O1xuICBsZXQgY29tcG9uZW50TmFtZSA9IHV0aWxzLnRvRGFzaENhc2UoZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSB8fCBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBsZXQgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW2NvbXBvbmVudE5hbWVdO1xuXG4gIENIRUNLX0FMSUFTRVM6IGlmKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZighZWwubWF0Y2hlcyhzZWxlY3RvckFsbCkpIHtcbiAgICAgIGJyZWFrIENIRUNLX0FMSUFTRVM7XG4gICAgfVxuXG4gICAgZm9yKGxldCBzZWxlY3RvciBpbiB0aGlzLl9fYWxpYXNlcykge1xuICAgICAgaWYoIXRoaXMuX19hbGlhc2VzLmhhc093blByb3BlcnR5KHNlbGVjdG9yKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTtcblxuICBpZihjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcblxuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbihyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG5cbiAgbGV0IG5lc3RlZEluaXRpYWxpemluZyA9IChlbCkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuXG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBuZXN0ZWRJbml0aWFsaXppbmcocm9vdCk7XG5cbiAgbGV0IHAgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZighZm4pIHtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZighY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmKHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQWxpYXMgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbc2VsZWN0b3JdO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGFycmF5IHByb3RvdHlwZSBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlID0gZnVuY3Rpb24oKSB7XG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZih0eXBlb2Ygb2xkICE9ICdmdW5jdGlvbicgfHwga2V5ID09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICBpZighdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldFRpbWVvdXQsIDApO1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRJbnRlcnZhbCwgMCk7XG4gIHdpbmRvdy5Qcm9taXNlICYmICh3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IgLCAwKSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgbGV0IG9sZEFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICBsZXQgb2xkUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG4gIGxldCBvbGRSZW1vdmUgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmU7XG5cbiAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcblxuICAgIHJldHVybiBvbGRSZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBvbGRBZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmKGxpc3RlbmVyLmxpbmsgPT09IGZuKSB7XG4gICAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBvbGRSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24oZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGNhbGxiYWNrID0gcG9zID09ICdsYXN0Jz8gYXJnc1thcmdzLmxlbmd0aCAtIDFdOiBhcmdzW3Bvc107XG5cbiAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJnc1swXSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge29iamVjdH0gW2NvbnRleHRdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmlzb2xhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uKGZuLCBjb250ZXh0ID0gbnVsbCkge1xuICBpZihmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IG9GbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvRm4sICdfX2FraWxpJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICByZXR1cm4gb0ZuO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGFuIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgdGhpcy5fX3Jvb3QgPSByb290IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuXG4gIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgIGlmKHJvdXRlci5fX2luaXQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgICAgIGxldCBvblN0YXRlID0gKCkgPT4ge1xuICAgICAgICAgIHJlcygpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdGF0ZS1jaGFuZ2UnLCBvblN0YXRlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlJywgb25TdGF0ZSk7XG4gICAgICAgIHJvdXRlci5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KS50aGVuKCgpID0+IHtcbiAgICBBa2lsaS5fX2luaXQgPSB0cnVlO1xuICB9KTtcbn07XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24oKSB7XG4gIEEuZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbn07XG5cbkFraWxpLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbkFraWxpLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbkFraWxpLlNjb3BlID0gU2NvcGU7XG5Ba2lsaS51dGlscyA9IHV0aWxzO1xuQWtpbGkuY29tcG9uZW50cy5BID0gQTtcbkFraWxpLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG5Ba2lsaS5jb21wb25lbnRzLkZvciA9IEZvcjtcbkFraWxpLmNvbXBvbmVudHMuSWYgPSBJZjtcbkFraWxpLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG5Ba2lsaS5jb21wb25lbnRzLklucHV0ID0gSW5wdXQ7XG5Ba2lsaS5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG5Ba2lsaS5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG5Ba2lsaS5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbkFraWxpLmNvbXBvbmVudHMuVGV4dCA9IFRleHQ7XG5Ba2lsaS5jb21wb25lbnRzLlRleHRhcmVhID0gVGV4dGFyZWE7XG5Ba2lsaS5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbkFraWxpLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcblxud2luZG93LkFraWxpID0gQWtpbGk7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gQWtpbGkuY29tcG9uZW50cztcbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IEFraWxpLnNlcnZpY2VzO1xuZXhwb3J0IGRlZmF1bHQgQWtpbGk7XG5cbkFraWxpLmRlZmluZSgpO1xuQWtpbGkuaXNvbGF0ZUV2ZW50cygpO1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvYWtpbGkuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaSc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBldmFsdWF0aW9uUmVnZXggPSAvXFwkeygoKD8hXFwkeykuKSopfS87XG5jb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZSddO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFtdO1xuICBzdGF0aWMgZXZlbnRzID0gW107XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IGZhbHNlO1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgc3RhdGljIHRlbXBsYXRlID0gJyc7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICcnO1xuICBzdGF0aWMgc2NvcGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBkZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogUmVxdWlyZWQgY29udGV4dCB2YXJpYWJsZXM6XG4gICAqICB0aGlzIC0gc2NvcGUgb2JqZWN0XG4gICAqICBldmVudCAtIHdpbmRvdy5ldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm4gZXZhbChleHByZXNzaW9uKTtcbiAgICB9KS5jYWxsKGNvbnRleHQsIGV4cHJlc3Npb24pXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbCwgc2NvcGUgPSB7fSkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSByZWNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKCkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiB0aGUgY3JlYXRpb25cbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGUoKSB7XG4gICAgdGhpcy5lbC5fX2FraWxpID0gdGhpcztcbiAgICB0aGlzLl9faW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuX19zZXRFdmVudHMoKTtcbiAgICB0aGlzLl9fc2V0UGFyZW50cygpO1xuICAgIHRoaXMuX19zZXRCb29sZWFuQXR0cmlidXRlcygpO1xuICAgIHRoaXMuX19kZWZpbmVBdHRyaWJ1dGVzKCk7XG5cbiAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlZCh0aGlzLmF0dHJzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX2NvbXBpbGUoKSB7XG4gICAgbGV0IGNvbnRyb2wgPSB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgfHwgIXRoaXMuX19ldmFsdWF0ZVBhcmVudDtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gY29udHJvbD8gdGhpczogdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGk7XG5cbiAgICBpZighdGhpcy5fX3JlY29tcGlsaW5nIHx8IHRoaXMuX19jb21waWxpbmcubmV3UGFyZW50IHx8IHRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyh0aGlzLmVsLCB0aGlzLl9fYXR0cmlidXRlT2YpO1xuICAgIH1cblxuICAgIGxldCBpbnRlcnBvbGF0ZSA9IChjaGlsZHJlbiwgcGFyZW50KSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCk7XG5cbiAgICAgICAgICBjaGlsZC5ub2RlVmFsdWUgPSB0aGlzLl9fZXZhbHVhdGUoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoY2hpbGQpO1xuICAgICAgICAgIGludGVycG9sYXRlKGNoaWxkLmNoaWxkTm9kZXMsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpbnRlcnBvbGF0ZSh0aGlzLmVsLmNoaWxkTm9kZXMsIHRoaXMuZWwpO1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgbGV0IHJlcztcblxuICAgIGlmKCF0aGlzLl9fcmVjb21waWxpbmcpIHtcbiAgICAgIHJlcyA9IEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uQ29tcGlsZWQgJiYgdGhpcy5hdHRycy5vbkNvbXBpbGVkLnRyaWdnZXIoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jb21waWxlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcCA9IHJlcXVlc3QuZ2V0KHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5fX2NvbnRlbnQ7XG4gICAgICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9fY29udGVudDtcblxuICAgICAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vblJlY29tcGlsZWQgJiYgdGhpcy5hdHRycy5vblJlY29tcGlsZWQudHJpZ2dlcigpO1xuICAgICAgICB0aGlzLnJlY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19yZXNvbHZlKCkge1xuICAgIGlmKHRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcigpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXNvbHZlZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJ0IG9mIHRoZSB7QHNlZSBDb21wb25lbnQjX19jb21waWxlfSBtZXRob2RcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplKCkge1xuICAgIGxldCBwYXJlbnQgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCwgZmFsc2UpO1xuICAgIGxldCBTY29wZSA9IHRoaXMuY29uc3RydWN0b3Iuc2NvcGUgfHwgQWtpbGkuU2NvcGU7XG4gICAgbGV0IHNjb3BlO1xuICAgIGxldCBpc1Jvb3QgPSBBa2lsaS5fX3Jvb3QgPT09IHRoaXMuZWw7XG5cbiAgICBpZihwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IG5lc3RlZFdhdGNoaW5nID0gQWtpbGkub3B0aW9ucy5uZXN0ZWRXYXRjaGluZztcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpIHtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIGlmKHRoaXMuY29uc3RydWN0b3IubmVzdGVkV2F0Y2hpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmVzdGVkV2F0Y2hpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLm5lc3RlZFdhdGNoaW5nO1xuICAgIH1cbiAgICBlbHNlIGlmKFNjb3BlLm5lc3RlZFdhdGNoaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5lc3RlZFdhdGNoaW5nID0gU2NvcGUubmVzdGVkV2F0Y2hpbmc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19uZXN0ZWRXYXRjaGluZyA9IG5lc3RlZFdhdGNoaW5nO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuXG4gICAgaWYobmVzdGVkV2F0Y2hpbmcpIHtcbiAgICAgIHNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2NvcGUgPSB0aGlzLl9fb2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGJvb2xlYW4gYXR0cmlidXRlc1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCkge1xuICAgIHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoQWtpbGkuaHRtbEJvb2xlYW5BdHRyaWJ1dGVzLCB0aGlzLmNvbnN0cnVjdG9yLmJvb2xlYW5BdHRyaWJ1dGVzKTtcblxuICAgIGxldCBzZXRBdHRyID0gKGVsKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBub2RlID0gYXR0cnNbaV07XG5cbiAgICAgICAgaWYodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICAgICAgaWYoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBlbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYoIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBzZXRBdHRyKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXRBdHRyKHRoaXMuZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRFdmVudHMoKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuXG4gICAgICAhL15vbi0vaS50ZXN0KGV2KSAmJiAoZXYgPSAnb24tJyArIGV2KTtcblxuICAgICAgaWYoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRlUGFyZW50ID0gbnVsbDtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBwYXJlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHBhcmVudCA9IHBhcmVudHNbaV07XG5cbiAgICAgIGlmKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYodGhpcy5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSBldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudCA9IGV2YWx1YXRlUGFyZW50O1xuICAgIHRoaXMuX19wYXJlbnQgPSBwYXJlbnRzWzBdO1xuICAgIHRoaXMuX19wYXJlbnRzID0gcGFyZW50cztcbiAgICB0aGlzLnNjb3BlLl9fcGFyZW50ID0gdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuc2NvcGU7XG4gICAgIXRoaXMuX19yZWNvbXBpbGluZyAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19hZGRDaGlsZCh0aGlzLmVsKTtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcy5zY29wZSwgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fc2NvcGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBjaGlsZCBlbGVtZW50IHRvIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zcGxpY2VDaGlsZChlbCkge1xuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG5cbiAgICAgIGlmKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmKCFub2RlLl9fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb3AgPSBub2RlLl9fcHJvcGVydGllc1trXTtcbiAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKHByb3Aua2V5cywgcHJvcC5jb21wb25lbnQuX19zY29wZSk7XG5cbiAgICAgIGlmKCF1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCB1dGlscy5jb3B5KHZhbHVlKSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqICBDaGVjayBub2RlIGhhcyBjaGFuZ2VkIG9uIHRoZSBjZXJ0YWluIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuXG4gICAgaWYoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSwgdXRpbHMuY29weSh2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIG5vZGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGUobm9kZSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG5cbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG5cbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW119O1xuXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBTY29wZSBwYXJzaW5nIGVycm9yIGluIHRoZSB0ZW1wbGF0ZSBleHByZXNzaW9uOiAke25vZGUuX19leHByZXNzaW9ufWA7XG5cbiAgICAgICAgaWYoIUFraWxpLm9wdGlvbnMuc2hvd0V2YWx1YXRpb25FcnJvcnMpIHtcbiAgICAgICAgICBpZihBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyLnN0YWNrKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBldmFsdWF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uPyBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdDogW107XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCA9IG51bGw7XG4gICAgICBBa2lsaS5fX2V2YWx1YXRpb24gPSBudWxsO1xuXG4gICAgICBmb3IobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBgJHtkYXRhLmNvbXBvbmVudC5fX3Njb3BlLl9fbmFtZX0uJHtkYXRhLmtleXNTdHJpbmd9YDtcblxuICAgICAgICBpZihkYXRhLm5vdEJpbmRpbmcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGV4aXN0aW5nQmluZGluZ3NbaGFzaF0pIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJlbnRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGRhdGEucGFyZW50cywgZGF0YS5jb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgIGxldCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG5cbiAgICAgICAgaWYodXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiaW5kID0gZGF0YS5jb21wb25lbnQuX19nZXRCb3VuZE5vZGUoZGF0YS5rZXlzLCBub2RlKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5rZXlzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICBpZighYmluZCkge1xuICAgICAgICAgIGRhdGEuY29tcG9uZW50Ll9fYmluZChkYXRhLmtleXMsIHsgbm9kZTogbm9kZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Ll9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGRhdGEua2V5cywgdmFsdWUpO1xuICAgICAgICBleGlzdGluZ0JpbmRpbmdzW2hhc2hdID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZXhpc3RpbmdCaW5kaW5ncyA9IG51bGw7XG4gICAgICBldmFsdWF0aW9uID0gbnVsbDtcblxuICAgICAgaWYobm9kZSBpbnN0YW5jZW9mIEF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBldmFsdWF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmFsdWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgfSk7XG5cbiAgICBpZihub2RlIGluc3RhbmNlb2YgQXR0cikge1xuICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuXG4gICAgICBpZihjb3VudGVyKSB7XG4gICAgICAgIG5vZGUuX19oYXNCaW5kaW5ncyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmKGNvdW50ZXIgPT0gMSAmJiBleHByZXNzaW9uICYmIG5vZGUuX19leHByZXNzaW9uID09IGV4cHJlc3Npb24pIHtcbiAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGNsZWFyQXR0cmlidXRlID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eYm9vbGVhbi0oLispL2ksICckMScpO1xuXG4gICAgICBpZihjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYobm9kZS5fX2F0dHJpYnV0ZU9uKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT247XG5cbiAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgIGNvbXBvbmVudC5hdHRyc1t1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSldID0gdmFsdWU7XG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAoY29tcG9uZW50Ll9faXNDb21waWxlZCkge1xuICAgICAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50LmF0dHJzLm9uQ2hhbmdlZCAmJiBjb21wb25lbnQuYXR0cnMub25DaGFuZ2VkLnRyaWdnZXIoeyBrZXk6IGNsZWFyQXR0cmlidXRlLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5jaGFuZ2VkKGNsZWFyQXR0cmlidXRlLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGxldCBrZXkgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBsZXQgY2FtZWxLZXkgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcbiAgICAgICAgICAgIGxldCBmbk5hbWUgPSAnY2hhbmdlZCcgKyBjYW1lbEtleTtcbiAgICAgICAgICAgIGxldCBldkZuTmFtZSA9ICdvbkNoYW5nZWQnICsgY2FtZWxLZXk7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tldkZuTmFtZV0gJiYgY29tcG9uZW50LmF0dHJzW2V2Rm5OYW1lXS50cmlnZ2VyKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRbZm5OYW1lXSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudFtmbk5hbWVdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgbGV0IGF0dHIgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG5cbiAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdO1xuXG4gICAgaWYoIXdpdGhvdXRQYXJlbnRzKSB7XG4gICAgICBsZXQgbGFzdFByb3BzID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgICBsYXN0UHJvcHMgPSBbLi4ubGFzdFByb3BzLCBrZXldO1xuICAgICAgICB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGxhc3RQcm9wcywgc2NvcGUpO1xuICAgICAgICBwcm9wcy5wdXNoKHsga2V5czogbGFzdFByb3BzLCB2YWx1ZTogdmFsdWV9KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHByb3BzLnB1c2goeyBrZXlzOiBrZXlzLCB2YWx1ZTogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgc2NvcGUpfSlcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBsZXQgZWxFdmFsdWF0ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudC5fX2FraWxpO1xuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGEgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLl9fZGF0YSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGMgPSBkYXRhLl9fZGF0YS5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBsZXQgYmluZCA9IGRhdGEuX19kYXRhW2tdO1xuXG4gICAgICAgICAgaWYoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlKTtcblxuICAgICAgICAgICAgZm9yKGxldCBfayBpbiBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAgIGlmKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IF9wcm9wID0gYmluZC5ub2RlLl9fcHJvcGVydGllc1tfa107XG4gICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKF9wcm9wLmtleXMsIF9wcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfTtcblxuICAgIGxldCBldmFsdWF0ZSA9IChlbGVtZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGVsRXZhbHVhdGUoZWxlbWVudHNbaV0pO1xuXG4gICAgICAgIGV2YWx1YXRlKGNvbXBvbmVudC5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZWxFdmFsdWF0ZSh0aGlzLmVsKTtcbiAgICBldmFsdWF0ZSh0aGlzLl9fY2hpbGRyZW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBsZXQgdW5iaW5kID0gKG9iaiwgcGFyZW50cykgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspIHx8IGsgPT0gJ19fZGF0YScpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfa2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuICAgICAgICBsZXQgX19rZXlzID0gX2tleXMuc2xpY2UoKTtcbiAgICAgICAgbGV0IF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcbiAgICAgICAgbGV0IGhhc0tleTtcblxuICAgICAgICBfX2tleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzS2V5ID0gdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnICYmICFoYXNLZXkpIHtcbiAgICAgICAgICBfaXNEZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIWhhc0tleSkge1xuICAgICAgICAgIHRoaXMuX191bmJpbmQoX2tleXMpO1xuICAgICAgICAgIF9pc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoX19rZXlzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGF0YSAmJiB1bmJpbmQoZGF0YSwgW10uY29uY2F0KGtleXMpKTtcbiAgICB0aGlzLl9fZXZhbHVhdGVOZXN0ZWQoa2V5cyk7XG5cbiAgICBpZihpc0RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX191bmJpbmQoa2V5cyk7XG4gICAgICBpc0RlbGV0ZWQgJiYgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgZXZlbnQgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpIHtcbiAgICBsZXQgZXhwcmVzc2lvbiA9IGV2YWx1YXRpb25SZWdleC5leGVjKG5vZGUuX19leHByZXNzaW9uKTtcblxuICAgIGlmKCFleHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgIXdpbmRvdy5ldmVudCAmJiAod2luZG93LmV2ZW50ID0gZSk7XG5cbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0ge1xuICAgICAgZWw6IGVsLFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBub2RlOiBub2RlXG4gICAgfTtcblxuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBudWxsO1xuICAgIHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0pO1xuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGNoYW5nZXMgYW5kIGV2YWx1YXRlIHRoZSBwYXNzZWQgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5vZGUobm9kZSkge1xuICAgIGlmKHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSkpIHtcbiAgICAgIG5vZGVbKG5vZGUgaW5zdGFuY2VvZiBBdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGUgbm9kZSBpbml0aWFsaXppbmdcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZihzeXN0ZW1BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpO1xuXG4gICAgbGV0IGV2ZW50TmFtZSA9IG5vZGUubm9kZU5hbWUucmVwbGFjZSgvXm9uLSguKykvaSwgJyQxJyk7XG4gICAgbGV0IG5vZGVOYW1lID0gdXRpbHMudG9DYW1lbENhc2Uobm9kZS5ub2RlTmFtZSk7XG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmKGV2ZW50TmFtZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICBpZihub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYobm9kZS5fX2V4cHJlc3Npb24pIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKChlKSA9PiB7XG4gICAgICAgICAgY29tcG9uZW50Ll9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBub2RlLl9fZXZlbnQgPSBlbWl0dGVyO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShlbWl0dGVyKSk7XG5cbiAgICAgIGlmKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1tub2RlTmFtZV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoYXR0cmlidXRlT2YpIHtcbiAgICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IHRoaXM7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgZWwuc2V0QXR0cmlidXRlKG5vZGUubm9kZU5hbWUsIGNvbXBvbmVudC5fX2V2YWx1YXRlKG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkge1xuICAgIGlmKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG5vZGUuX19leHByZXNzaW9uID0gbm9kZVsobm9kZSBpbnN0YW5jZW9mIEF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2ludGVycG9sYXRlQXR0cmlidXRlcyhlbCwgYXR0cmlidXRlT2YgPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUoYXR0cnNbaV0sIGVsLCBhdHRyaWJ1dGVPZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhdHRyaWJ1dGVzIGFzIHByb3h5XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVmaW5lQXR0cmlidXRlcygpIHtcbiAgICBsZXQgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZih0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG5cbiAgICAgIGlmKG5vZGUpIHtcbiAgICAgICAgaWYobm9kZS5fX2V2ZW50KSB7XG4gICAgICAgICAgbm9kZS5fX2V2ZW50LnVuYmluZCgpO1xuICAgICAgICAgIG5vZGUuX19ldmVudCA9IG51bGw7XG4gICAgICAgICAgbm9kZS5fX2V4cHJlc3Npb24gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX3VuYmluZEJ5Tm9kZXMoW25vZGVdKTtcbiAgICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGlzRGVsZXRlZCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihub2RlKSB7XG4gICAgICAgIG5vZGUubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuYXR0cnMgPSBuZXcgUHJveHkodGhpcy5fX2F0dHJzLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZihrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuXG4gICAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgY2hhbmdlQXR0cmlidXRlKGF0dHJLZXksIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZSh2YWx1ZSkpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBhdHRyS2V5ID0gdXRpbHMudG9EYXNoQ2FzZShrZXkpO1xuXG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcm94eSB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEByZXR1cm5zIHtQcm94eX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19vYnNlcnZlKG9iaiwgcGFyZW50cykge1xuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09IFwiX19pc1Byb3h5XCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2NvbXBvbmVudFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19rZXlzXCIpIHtcbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHR5cGVvZiB0YXJnZXRba2V5XSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGV0IHJlYWxUYXJnZXQgID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuXG4gICAgICAgICAgaWYoIXV0aWxzLmlzUGxhaW5PYmplY3QocmVhbFRhcmdldCkpIHtcbiAgICAgICAgICAgIHJlYWxUYXJnZXRba2V5XSA9IEFraWxpLmlzb2xhdGVGdW5jdGlvbihyZWFsVGFyZ2V0W2tleV0sIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIGlmKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCF1dGlscy5nZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpKSB7XG4gICAgICAgICAgICBub3RCaW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9fYmluZE5vZGUoQWtpbGkuX19ldmFsdWF0aW9uLmxpc3QsIGtleXMsIHBhcmVudHMsIHRhcmdldFtrZXldLCBub3RCaW5kaW5nKTtcblxuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuXG4gICAgICAgIGlmKHRoaXMuX19uZXN0ZWRXYXRjaGluZykge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdGhpcy5fX25lc3RlZE9ic2VydmUodmFsdWUsIGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCBmYWxzZSk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sga2V5IGlzIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgX19pc1N5c3RlbUtleSA9IGZ1bmN0aW9uKGtleSkge1xuICAgIGlmKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG5cbiAgICBsZXQgb2JzZXJ2ZSA9ICh2YWx1ZSwgcGFyZW50cykgPT4ge1xuICAgICAgaWYodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIXV0aWxzLmlzUGxhaW5PYmplY3QodmFsdWUpICYmICF1dGlscy5pc1Njb3BlUHJveHkodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBBa2lsaS5TY29wZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGFyZ2V0ID0gdmFsdWU7XG5cbiAgICAgIGlmKHZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICB0YXJnZXQgPSB2YWx1ZS5fX3RhcmdldDtcblxuICAgICAgICBpZighdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBpZih2YWx1ZS5fX2NvbXBvbmVudCAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdXRpbHMuY29weSh0YXJnZXQsIGZhbHNlKTtcbiAgICAgICAgICAgIHZhbHVlID0gdGFyZ2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKSAhPSBBa2lsaS5qb2luQmluZGluZ0tleXModmFsdWUuX19rZXlzKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgayBpbiB0YXJnZXQpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSB0YXJnZXRba107XG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG5cbiAgICAgICAgdGFyZ2V0W2tdID0gb2JzZXJ2ZSh2YWwsIGtleXMpO1xuICAgICAgfVxuXG4gICAgICBpZighdmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fb2JzZXJ2ZSh0YXJnZXQsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIGxldCByZXMgPSBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgaXNvbGF0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBsZXQga2V5cyA9IHBhcmVudHMubGVuZ3RoPyBbcGFyZW50c1swXV06IFtrZXldO1xuICAgIGxldCBpc29sYXRpb25LZXkgPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgaWYocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGlzRGVsZXRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldID0ge1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXM6IGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0udmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgdGhlIG5vZGUgdG8gYmluZGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYmluZCAtIGJ5IGRlZmF1bHQgaXMgY29tcG9uZW50Ll9fZXZhbHVhdGlvbi5saXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW25vdEJpbmRpbmc9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSkge1xuICAgIGxldCBwYXJlbnRLZXlzU3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpO1xuXG4gICAgaWYoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZihkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICBiaW5kLnNwbGljZShsLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5c1N0cmluZzogQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpLFxuICAgICAgcGFyZW50czogcGFyZW50cyxcbiAgICAgIGtleXM6IGtleXMsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBub3RCaW5kaW5nOiBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZighYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGRhdGEgPSBiaW5kLl9fZGF0YVtpXTtcblxuICAgICAgaWYoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIGxldCBjb3B5ID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBpZihwcm9wKSB7XG4gICAgICBsZXQgcmVzID0gdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSwgY29weSk7XG5cbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuY29weSA9IGNvcHk7XG5cbiAgICAgIHJldHVybiAhcmVzO1xuICAgIH1cblxuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdID0ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgY29weTogY29weSxcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGtleXM6IGtleXNcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIGxldCBoYXNoID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIGRlbGV0ZSBub2RlLl9fcHJvcGVydGllc1toYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGRhdGEgd2l0aCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZChrZXlzLCBkYXRhKSB7XG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAobGFzdCwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBvYmogPSB7X19kYXRhOiBbXX07XG5cbiAgICAgIGlmKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZT8gdmFsdWU6IG9iajtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZighb2JqLl9fZGF0YSkge1xuICAgICAgICBvYmouX19kYXRhID0gW107XG4gICAgICB9XG5cbiAgICAgIG9iai5fX2RhdGEucHVzaChkYXRhKTtcblxuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZighYmluZCB8fCAhYmluZC5fX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IGJpbmQuX19kYXRhW2ldLm5vZGU7XG5cbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmKE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhbHVlLl9fZGF0YSA9IFtdO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIGJ5IG5vZGVzXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICBsZXQgdW5iaW5kID0gKG9iaikgPT4ge1xuICAgICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZihrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBiaW5kID0gZGF0YVtpXTtcblxuICAgICAgICAgICAgaWYobm9kZXMuaW5kZXhPZihiaW5kLm5vZGUpICE9IC0xKSB7XG4gICAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZighbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gICAgdGhpcy5fX2NsZWFyRW1wdHlCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgbGV0IGNsZWFyID0gKG9iaiwgcGFyZW50LCBrZXkpID0+IHtcbiAgICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgICAgICBpZihrID09ICdfX2RhdGEnICYmICghdmFsIHx8ICF2YWwubGVuZ3RoKSkge1xuICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihrICE9ICdfX2RhdGEnKSB7XG4gICAgICAgICAgaWYoIU9iamVjdC5rZXlzKG9ialtrXSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBkZWxldGUgb2JqW2tdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFyKG9ialtrXSwgb2JqLCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoICYmIHBhcmVudCkge1xuICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNsZWFyKG9iaiB8fCB0aGlzLl9fYmluZGluZ3MpXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlQ2hpbGRyZW4oKSB7XG4gICAgbGV0IHJlbW92ZSA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIHJlbW92ZShjaGlsZC5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZC5fX2FraWxpLl9fcmVtb3ZlKCk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aG91dCBjaGlsZHJlbiByZW1vdmluZ1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZSgpIHtcbiAgICB0aGlzLl9fZGV0YWNoKCk7XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcigpO1xuICAgIHRoaXMucmVtb3ZlZCgpO1xuICAgIEFraWxpLnJlbW92ZVNjb3BlKHRoaXMuX19zY29wZS5fX25hbWUpO1xuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXRhY2goKSB7XG4gICAgaWYodGhpcy5fX2V2YWx1YXRlUGFyZW50ICYmICF0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2RlcyhbXS5zbGljZS5jYWxsKHRoaXMuZWwuYXR0cmlidXRlcykpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICBub2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMCwgYXR0cnMgPSBjaGlsZC5hdHRyaWJ1dGVzLCBjID0gYXR0cnMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgICBub2Rlcy5wdXNoKGF0dHJzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaW5kKGNoaWxkLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5lbC5jaGlsZE5vZGVzKTtcbiAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcmVudChzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gZmFsc2UsIGxldmVscykge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYobGV2ZWxzICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkobGV2ZWxzKSkge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgbGV0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZighcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoIWxldmVscyB8fCBsZXZlbHMuaW5kZXhPZihsZXZlbCkgIT0gLTEpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBwYXJlbnQuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGlmICghZmluZEFsbCkge1xuICAgICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcblxuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGxldmVsID0gMDtcblxuICAgIGlmKGxldmVscyAhPT0gdW5kZWZpbmVkICYmICFBcnJheS5pc0FycmF5KGxldmVscykpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGxldCBmaW5kID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYoIXNlbGVjdG9yIHx8IGNoaWxkLl9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIGlmKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkLl9fYWtpbGkpO1xuXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpXG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmKCF0aGlzLl9fcGFyZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbGV2ZWxFbGVtZW50cyA9IHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2NoaWxkcmVuLnNsaWNlKCk7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgcmlnaHQgJiYgbGV2ZWxFbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmKGVsID09PSB0aGlzLmVsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZighc2VsZWN0b3IgfHwgZWwuX19ha2lsaS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhcnIucHVzaChlbC5fX2FraWxpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZighZmluZEFsbCkge1xuICAgICAgcmV0dXJuIGFyci5sZW5ndGg/IGFyclswXTogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYodHlwZW9mIHNlbGVjdG9yID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBzZWxlY3Rvcih0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBwYXJlbnQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgcGFyZW50IGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY2hpbGQgY29tcG9uZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNoaWxkIGNvbXBvbmVudHMgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHNdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIHRydWUsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGJlZm9yZShzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIGNvbXBvbmVudHMgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBhZnRlcihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCB0cnVlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgbGVmdCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBwcmV2KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIG5leHQoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBlbGVtZW50IHBhcmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblxuICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21wb25lbnQgY29tcGlsYXRpb25cbiAgICovXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgY2hhbmdlZChrZXksIHZhbHVlKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnQuanMiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlcidcblxuY29uc3QgdXRpbHMgPSB7fTtcblxuLyoqXG4gKiBDcmVhdGUgY2xhc3MgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJyZWQgYWN0aXZlXCJcbiAqIHV0aWxzLmNsYXNzKHtyZWQ6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgZ3JlZW46IGZhbHNlfSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2xhc3MgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuXG4gIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICBpZighb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcblxuICBmb3IobGV0IGsgaW4gb2JqKSB7XG4gICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgIHZhbCAmJiBzdHlsZXMucHVzaChgJHt0aGlzLnRvRGFzaENhc2Uoayl9OiR7dmFsfWApO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcy5qb2luKCc7Jyk7XG59O1xuXG4vKipcbiAqIEZpbHRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAxMV1cbiAqIHV0aWxzLmZpbHRlcihbMSwgMiwgMywgMTFdLCAnMScpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxfSwge3g6MTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDoxfSwge3g6Mn0sIHt4OjN9LCB7eDoxMX1dLCAnMScsIFsneCddKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBbXSkge1xuICBsZXQgcmVzID0gW107XG5cbiAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYoIWhhbmRsZXIpIHtcbiAgICByZXR1cm4gWy4uLmFycl07XG4gIH1cblxuICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyW2ldO1xuICAgIGxldCB2YWwgPSBrZXlzLmxlbmd0aD8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBpdGVtKTogaXRlbTtcblxuICAgIGlmKCF2YWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhbCArPSAnJztcblxuICAgIGlmKCh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nKSAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgZWxzZSBpZih2YWwubWF0Y2goaGFuZGxlciB8fCAnJykpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIE9yZGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDIsIDNdXG4gKiB1dGlscy5zb3J0KFszLCAyLCAxXSwgdHJ1ZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzMsIDIsIDFdXG4gKiB1dGlscy5zb3J0KFsxLCAyLCAzXSwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XVxuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFtbJ3gnXV0sIFt0cnVlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgWyd4J10sIHRydWUpO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sICd4Jyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dXG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgW1sneCddXSwgW2ZhbHNlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgWyd4J10sIGZhbHNlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCAneCcsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDEsIHk6IDN9LCB7eDogMiwgeTogMX0sIHt4OjIsIHk6IDJ9XVxuICogdXRpbHMuc29ydChbe3g6IDIsIHk6IDJ9LCB7eDogMiwgeTogMX0sIHt4OiAyLCB5OiAzfV0sIFtbJ3gnXSwgWyd5J11dLCBbdHJ1ZSwgdHJ1ZV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtib29sZWFufEFycmF5W118c3RyaW5nW118c3RyaW5nfSBba2V5c11cbiAqIEBwYXJhbSB7Ym9vbGVhbnxib29sZWFuW119IFtvcmRlcl0gLSByZXZlcnNlIG9yIG5vdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG51dGlscy5zb3J0ID0gZnVuY3Rpb24oYXJyLCBrZXlzID0gdHJ1ZSwgb3JkZXIgPSBbXSkge1xuICBhcnIgPSBbLi4uYXJyXTtcblxuICBpZihrZXlzID09PSB0cnVlKSB7XG4gICAga2V5cyA9IFtdO1xuICAgIG9yZGVyID0gW3RydWVdO1xuICB9XG4gIGVsc2UgaWYoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYoIUFycmF5LmlzQXJyYXkob3JkZXIpKSB7XG4gICAgb3JkZXIgPSBbb3JkZXJdO1xuICB9XG5cbiAgbGV0IGwgPSBrZXlzLmxlbmd0aDtcblxuICBhcnIuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBpID0gMDtcblxuICAgIGxldCBjaGVjayA9IChhLCBiLCByZXZlcnNlID0gZmFsc2UpID0+IHtcbiAgICAgIGlmKGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGEgPSBhLmdldFRpbWUoKTtcbiAgICAgIH1cblxuICAgICAgaWYoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihhID4gYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gLTE6IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGEgPCBiKSB7XG4gICAgICAgIHJldHVybiByZXZlcnNlPyAxOiAtMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIGxldCBuZXh0ID0gKCkgPT4ge1xuICAgICAgaWYoaSA+PSBsKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBsZXQga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYocmVzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIGkrKztcblxuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYoIWwpIHtcbiAgICAgIHJldHVybiBjaGVjayhhLCBiLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBjb21wb25lbnQgc2NvcGUgcHJveHkgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1Njb3BlUHJveHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuICEhKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5fX2lzUHJveHkpO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgcGxhaW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiAhIShvYmogJiYgdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiAob2JqLmNvbnN0cnVjdG9yID09IE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpKTtcbn07XG5cbi8qKlxuICogQ29weSB0aGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXN0ZWQ9dHJ1ZV0gLSBkZWVwIGNvcHkgaWYgaXMgdHJ1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgbmVzdGVkID0gdHJ1ZSkge1xuICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dChvYmopIHtcbiAgICBvYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFsuLi5vYmpdOiB7Li4ub2JqfTtcblxuICAgIGlmKCFuZXN0ZWQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqW2tdID0gbmV4dChvYmpba10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbmV4dCh2YWx1ZSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmFsdWUgdG8gYXR0cmlidXRlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZih2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEV2ZW50XSc7XG4gIH1cblxuICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUgKyAnJztcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gdmFsdWVzXG4gKlxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBpZih0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZih0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgaWYoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvcihsZXQgayBpbiBhKSB7XG4gICAgICBpZighYS5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYoIXRoaXMuY29tcGFyZShhW2tdLCBiW2tdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ29tcGFyZSBjdXJyZW50IHZhbHVlIHdpdGggcHJldmlvdXNcbiAqXG4gKiBAcGFyYW0geyp9IGN1cnJlbnQgLSB0aGUgY3VycmVudCB2YWx1ZVxuICogQHBhcmFtIHsqfSBwcmV2aW91cyAtIHRoZSBjdXJyZW50IHZhbHVlIGNvcHlcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNDb3B5IC0gdGhlIHByZXZpb3VzIHZhbHVlIGNvcHlcbiAqIEBwYXJhbSB7Kn0gW2N1cnJlbnRDb3B5XSAtIHRoZSBjdXJyZW50IHZhbHVlIGNvcHlcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSA9IGZ1bmN0aW9uKGN1cnJlbnQsIHByZXZpb3VzLCBwcmV2aW91c0NvcHksIGN1cnJlbnRDb3B5KSB7XG4gIGlmKGN1cnJlbnQgIT09IHByZXZpb3VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZShhcmd1bWVudHMubGVuZ3RoID09IDM/IGN1cnJlbnRDb3B5OiB0aGlzLmNvcHkoY3VycmVudCksIHByZXZpb3VzQ29weSk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuXG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICYgbWVcIlxuICogdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKCd5b3UgJmFtcCBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5kZWNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbGV0IHZhbHVlO1xuXG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gZGFzaCB0byBjYW1lbCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGNhbWVsIHRvIGRhc2ggY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IG5lc3RlZCBvYmplY3QgcHJvcGVydHkgYnkgYXJyYXkga2V5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZ2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYob1trXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoY3VycmVudCA9IG9ba10pO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKiBDaGVjayBuZXN0ZWQgb2JqZWN0cyB0cmVlIGhhcyBwcm9wZXJ0eSBvciBub3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB0cnVlXG4gKiB1dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBoYXMgPSBmYWxzZTtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IG5lc3RlZCBvYmplY3RzIHRyZWUgcHJvcGVydHlcbiAqIFJldHVybnMgY2hhbmdlZCBwcm9wZXJ0eSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eTogNn1cbiAqIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCAobGFzdCwgdmFsKSA9PiBsYXN0PyA2OiAodmFsIHx8IHt9KSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4gY3VycmVudCA9IG9ba10gPSBmbihpID09IGxlbmd0aCk7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKlxuICogRGVsZXRlIHByb3BlcnR5IGZyb20gbmVzdGVkIG9iamVjdHMgdHJlZVxuICogUmV0dXJucyBkZWxldGVkIHByb3BlcnR5IHZhbHVlXG4gKiBZb3UgY2FuIGNhbmNlbCBkZWxldGluZyBpZiB3aWxsIHJldHVybiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZih0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaWYoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcblxuICAgICAgaWYoIWZuIHx8IGZuKHZhbHVlKSkge1xuICAgICAgICBkZWxldGUgb1trXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgbGV0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYoIXByb3RvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2socHJvdG8pO1xuICB9O1xuXG4gIHJldHVybiBjaGVjayh0YXJnZXQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIG93biBwcm9wZXJ0eSB0YXJnZXQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xudXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xuICBsZXQgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgbGV0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XG5cbiAgICBpZighcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIENsZWFyIHZhbHVlIHByb3h5IGlmIGl0IGV4aXN0ZW50XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNsZWFyU2NvcGVQcm94eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZih0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgbGV0IGNsZWFyID0gKG9iaikgPT4ge1xuICAgIGZvcihsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZihvYmpba10uX19pc1Byb3h5KSB7XG4gICAgICAgICAgb2JqW2tdID0gb2JqW2tdLl9fdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXIob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5fX3RhcmdldDtcbiAgfVxuXG4gIGNsZWFyKHZhbHVlKTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgdmFsID0gJyc7XG5cbiAgZm9yKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZihNYXRoLnJhbmRvbSgpID4gMC42Nikge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy91dGlscy5qcyIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoYmFzZVVybCwgZGVmYXVsdHMpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsPyAoYmFzZVVybC5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nKTogJyc7XG5cbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc3RhdHVzRXJyb3JzUGF0dGVybjogL14oW14yM10pfDQwNC8sXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3Qgd2l0aCBhbnkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgdXJsO1xuICAgICAgbGV0IHhocjtcblxuICAgICAgb3B0aW9ucyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi4ob3B0aW9ucyB8fCB7fSl9O1xuXG4gICAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICh0eXBlb2Ygb3B0aW9ucy5vblN0YXJ0ID09ICdmdW5jdGlvbicpICYmIG9wdGlvbnMub25TdGFydCh4aHIpO1xuICAgICAgb3B0aW9ucyA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpO1xuICAgICAgdXJsID0gdGhpcy5iYXNlVXJsPyBgJHt0aGlzLmJhc2VVcmx9JHtvcHRpb25zLnVybC5yZXBsYWNlKC9eXFwvLywgJycpfWA6IG9wdGlvbnMudXJsO1xuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCwgdHJ1ZSwgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcblxuICAgICAgaWYob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbik7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgZm9yKGxldCBrIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgIGlmKCFvcHRpb25zLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgbGV0IHN0ciA9IHRoaXMucGFyYW1zVG9RdWVyeShvcHRpb25zLnBhcmFtcyk7XG5cbiAgICAgICAgaWYoc3RyKSB7XG4gICAgICAgICAgdXJsICs9IFwiP1wiICsgc3RyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIoeGhyKTtcblxuICAgICAgICBpZigoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yc1BhdHRlcm4pKSB7XG4gICAgICAgICAgbGV0IGVyciA9IG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7dXJsfVwiIHJldHVybnMgZmFpbHVyZSBzdGF0dXMgY29kZSAke3hoci5zdGF0dXN9YCk7XG5cbiAgICAgICAgICBlcnIucmVzcG9uc2UgPSByZXNwb25zZTtcblxuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGspID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodik7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxldCBvcHQgPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyhvYmpba10pLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgb3B0LnB1c2goa3MgKyBgWyR7a2V5fV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdW2tleV0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9wdC5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBxdWVyeSBzdHJpbmcgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcmFtc0Zyb21RdWVyeShzdHIpIHtcbiAgICBsZXQgcXVlcnkgPSB7fTtcbiAgICBsZXQgYW1wcyA9IHN0ci5zcGxpdCgnJicpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZigha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWwpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV1cbiAgICpcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKi9cbiAgY3JlYXRlRm9ybURhdGEob2JqLCBkYXRhID0gbnVsbCwgbmFtZXNwYWNlID0gJycpIHtcbiAgICBsZXQgZmQgPSBkYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yKGxldCBrIGluIG9iaikge1xuICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUJlZm9yZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYWZ0ZXIgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9IHhoclxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIoeGhyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHhocjogeGhyLFxuICAgICAgZGF0YTogeGhyLnJlc3BvbnNlLFxuICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBHRVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIERFTEVURSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdERUxFVEUnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUE9TVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwb3N0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQVVQgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcHV0KHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUFVUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBBVENIIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBhdGNoKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnUEFUQ0gnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG5cbnJlcXVlc3QuX19pbnN0YW5jZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvc2VydmljZXMvcmVxdWVzdC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZm9yJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29sJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RoZWFkJywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rib2R5JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgRm9yKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyJywgTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgTG9vcCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19rZXkgPSBudWxsO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2luZGV4ID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9ycyA9IHt9O1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBudWxsO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZEluKGRhdGEpIHtcbiAgICB0aGlzLmRyYXcoZGF0YSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuZHJhdyh0aGlzLmF0dHJzLmluKTtcbiAgfVxuXG4gIGNyZWF0ZUl0ZXJhdG9yKCkge1xuICAgIGxldCBlbDtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gdGhpcy5lbC5jaGlsZHJlbltpXTtcblxuICAgICAgaWYoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZighZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJGb3JcIiBjb21wb25lbnQgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGlsZCcpXG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYoY29tcG9uZW50TmFtZSAhPSAnbG9vcCcpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBBa2lsaS5jb21wb25lbnQoY29tcG9uZW50TmFtZSB8fCBlbC50YWdOYW1lKTtcblxuICAgICAgaWYoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG5cbiAgICAgICAgbWFzay5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIGVsID0gbWFzaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmh0bWwgPSBlbC5pbm5lckhUTUw7XG4gICAgdGhpcy5pdGVyYXRvclJlZiA9IGVsLm5leHRTaWJsaW5nO1xuICAgIHRoaXMuaXRlcmF0b3JPdXRlckhUTUwgPSBlbC5vdXRlckhUTUw7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuICAgIGVsLmlubmVySFRNTCA9IHRoaXMuaXRlcmF0b3JPdXRlckhUTUw7XG4gICAgZWwgPSBlbC5jb250ZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBsb29wKGtleSwgdmFsdWUsIGtleXMsIGluZGV4KSB7XG4gICAgdGhpcy5fX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fX2tleSA9IGtleTtcbiAgICB0aGlzLl9fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9fY29tcGFyaXNvblZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSk7XG5cbiAgICBsZXQgaGFzaCA9ICcnO1xuICAgIGxldCBmb3VuZCA9IDA7XG5cbiAgICBpZih2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgdmFsdWUuX19oYXNoKSB7XG4gICAgICBoYXNoID0gdmFsdWUuX19oYXNoO1xuICAgIH1cblxuICAgIGlmKHRoaXMuaXRlcmF0b3JzW2hhc2hdKSB7XG4gICAgICBrZXkgPSBoYXNoO1xuICAgICAgZm91bmQgPSAyO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuaXRlcmF0b3JzW2tleV0pIHtcbiAgICAgIGZvdW5kID0gMTtcbiAgICB9XG5cbiAgICBpZihmb3VuZCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgaWYoZm91bmQgPT0gMikge1xuICAgICAgICBsZXQgY1ZhbHVlID0gaXRlcmF0b3IuY29tcGFyc2lvbi52YWx1ZTtcbiAgICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuXG4gICAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHtcbiAgICAgICAgICBpdGVyYXRvci5zZXRLZXkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIGNWYWx1ZSwgY0NvcHksIHRoaXMuX19jb21wYXJpc29uVmFsdWUpKSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0VmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleXNba2V5XSA9IGl0ZXJhdG9yO1xuICAgICAgICBkZWxldGUgdGhpcy5pdGVyYXRvcnNba2V5XTtcblxuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBpdGVyYXRvci5lbC5uZXh0U2libGluZztcbiAgICAgIGl0ZXJhdG9yLl9fZGVzdHJveSgpO1xuICAgIH1cblxuICAgIGxldCBlbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5pbnNlcnRCZWZvcmUoZWwsIHRoaXMuaXRlcmF0b3JSZWYpO1xuICAgIEFraWxpLmNvbXBpbGUoZWwpO1xuXG4gICAgaWYodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICBpZighdmFsdWUuX19oYXNoKSB7XG4gICAgICAgIGhhc2ggPSB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMzIsIChzdHIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvcnNbc3RyXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbHVlLCAnX19oYXNoJywge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBoYXNoXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2hhc2hdID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2hhc2hdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgbGV0IGVWYWx1ZSA9IHR5cGVvZiB0aGlzLl9fdmFsdWUgPT0gJ3N0cmluZyc/IGBcIiR7dGhpcy5fX3ZhbHVlfVwiYDogdGhpcy5fX3ZhbHVlO1xuXG4gICAgICAgIGxldCBhcmdzID0gW1xuICAgICAgICAgIGBcIkZvclwiIGNvbXBvbmVudCBsb29wIGl0ZW1zIHNob3VsZCBoYXZlIFwib2JqZWN0XCIgdHlwZSBmb3IgaGlnaGVyIHBlcmZvcm1hbmNlLmAsXG4gICAgICAgICAgYFlvdSBjYW4gY2hhbmdlICR7ZVZhbHVlfSB0byB7dmFsdWU6ICR7ZVZhbHVlfX0sIGZvciBleGFtcGxlLmBcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZS53YXJuLCBhcmdzKTtcbiAgICAgIH1cblxuICAgICAga2V5c1trZXldID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4oYFwiRm9yXCIgY29tcG9uZW50IFwiaW5cIiBhdHRyaWJ1dGUgdmFsdWUgdHlwZSBtdXN0IGJlIGFuIG9iamVjdC9hcnJheWApO1xuICAgICAgICBkYXRhID0gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGtleXMgPSB7fTtcbiAgICBsZXQgaW5kZXhLZXlzID0gW107XG4gICAgbGV0IGxhc3RFbGVtZW50ID0gbnVsbDtcbiAgICBsZXQgbGFzdCA9IHRoaXMuZWwuY2hpbGRyZW5bdGhpcy5lbC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcblxuICAgIGlmKGxhc3QgJiYgIShsYXN0Ll9fYWtpbGkgaW5zdGFuY2VvZiBMb29wKSkge1xuICAgICAgbGFzdEVsZW1lbnQgPSBsYXN0O1xuICAgIH1cblxuICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpbmRleEtleXMucHVzaCh0aGlzLmxvb3AoaSwgZGF0YVtpXSwga2V5cywgaSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBpID0gMDtcblxuICAgICAgZm9yKGxldCBrIGluIGRhdGEpIHtcbiAgICAgICAgaWYoIWRhdGEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChrLCBkYXRhW2tdLCBrZXlzLCBpKSk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gaW5kZXhLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gaW5kZXhLZXlzW2ldO1xuXG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGl0ZXJhdG9yLmVsKTtcbiAgICAgIGl0ZXJhdG9yLml0ZXJhdGUoaSk7XG4gICAgfVxuXG4gICAgbGFzdEVsZW1lbnQgJiYgdGhpcy5lbC5hcHBlbmRDaGlsZChsYXN0RWxlbWVudCk7XG5cbiAgICBmb3IobGV0IGsgaW4gdGhpcy5pdGVyYXRvcnMpIHtcbiAgICAgIGlmKCF0aGlzLml0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVyYXRvcnNba10uX19kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRvcnMgPSBrZXlzO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmKCF0aGlzLmlzRm9yICYmICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9faXRlcmF0b3IgPSB0aGlzO1xuICAgIHRoaXMuZm9yID0gdGhpcy5fX3BhcmVudC5fX2FraWxpO1xuICAgIHRoaXMuc2V0SW5kZXgoKTtcbiAgICB0aGlzLnNldEtleSgpO1xuICAgIHRoaXMuc2V0VmFsdWUoKTtcblxuICAgIHRoaXMuaXNGb3IgJiYgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0SW5kZXgoKSB7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuZm9yLl9faW5kZXg7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcEluZGV4JywgdGhpcy5pbmRleCk7XG4gIH1cblxuICBzZXRLZXkoKSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmZvci5fX2tleTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wS2V5JywgdGhpcy5rZXkpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9yLl9fdmFsdWU7XG4gICAgdGhpcy5zY29wZS5fX3NldCgnbG9vcFZhbHVlJywgdGhpcy52YWx1ZSwgdHJ1ZSk7XG5cbiAgICB0aGlzLmNvbXBhcnNpb24gPSB7XG4gICAgICBjb3B5OiB0aGlzLmZvci5fX2NvbXBhcmlzb25WYWx1ZSxcbiAgICAgIHZhbHVlOiB0aGlzLmZvci5fX3ZhbHVlXG4gICAgfVxuICB9XG5cbiAgaXRlcmF0ZShpbmRleCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZEZvY3VzKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRGb2N1cyh2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdmb2N1cycpICYmIHRoaXMuc2V0Rm9jdXModGhpcy5hdHRycy5mb2N1cyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncm91dGUnLCBSb3V0ZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbikge1xuICAgIGxldCBzdGF0ZSA9IHRyYW5zaXRpb24ucGF0aC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gdHJhbnNpdGlvbi5wYXRoLnBhcmFtcztcbiAgICBsZXQgdXJsID0gdHJhbnNpdGlvbi51cmw7XG4gICAgbGV0IHF1ZXJ5ID0gdHJhbnNpdGlvbi5xdWVyeTtcbiAgICBsZXQgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgZnVuY3Rpb24gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgpIHtcbiAgICAgIGlmKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHtcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgc3RhdGU6IHN0YXRlLm5hbWUsXG4gICAgICAgIGRhdGE6IHRyYW5zaXRpb24ucGF0aC5kYXRhLFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKVxuICAgICAgfSxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXJhbXMsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG5cbiAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxjb21wb25lbnQ+JHtzdGF0ZS50ZW1wbGF0ZX08L2NvbXBvbmVudD5gO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgcCA9IHJlcXVlc3QuZ2V0KHN0YXRlLnRlbXBsYXRlVXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8Y29tcG9uZW50PiR7cmVzLmRhdGF9PC9jb21wb25lbnQ+YDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9yb3V0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0geyBidWJibGVzOiBmYWxzZSB9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB7ZGV0YWlsOiBkYXRhLCAuLi5vcHRpb25zfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IGZhbHNlIH0sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZihmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YS5lbCA9PT0gdGhpcy5lbCAmJiBkYXRhLmV2ZW50LnR5cGUgPT09IHRoaXMubmFtZSAmJiBkYXRhLmNvbXBvbmVudCA9PT0gdGhpcy5jb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIGJpbmQoZm4pIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuID0gZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUgZnVuY3Rpb25cbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmZuICYmIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4pO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2V2ZW50LWVtaXR0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZSc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodXJsLCBxdWVyeSwgaGFzaCA9ICcnLCBwcmV2aW91cyA9IG51bGwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMuc3RhdGVzID0gW107XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gIH1cblxuICByZWRpcmVjdCgpIHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICAgIHJvdXRlci5zdGF0ZS5hcHBseShyb3V0ZXIsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5yb3V0ZXMucHVzaChwYXRoKTtcbiAgICB0aGlzLnN0YXRlcy5wdXNoKHBhdGguc3RhdGUpO1xuICAgIHRoaXMucGFyYW1zID0gIXBhdGgucGFyZW50PyBwYXRoLnBhcmFtczogey4uLnBhdGgucGFyZW50LnBhcmFtcywgLi4ucGF0aC5wYXJhbXN9O1xuICB9XG5cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5yb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlc1tpXTtcblxuICAgICAgaWYocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzLmluZGV4T2Yoc3RhdGUpICE9IC0xO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG5yb3V0ZXIuYmFzZVVybCA9IFwiL1wiO1xucm91dGVyLnN0YXRlcyA9IFtdO1xucm91dGVyLmhhc2hNb2RlID0gdHJ1ZTtcbnJvdXRlci5fX3JlZGlyZWN0cyA9IDA7XG5yb3V0ZXIuX19pbml0ID0gZmFsc2U7XG5yb3V0ZXIuX19vcHRpb25zID0ge307XG5yb3V0ZXIuX19wYXJhbVJlZ2V4ID0gLyg6KFtcXHdcXGQtXSspKS9nO1xucm91dGVyLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgaGFuZGxlcjogKHRyYW5zaXRpb24pID0+IHt9XG4gIH07XG5cbiAgaWYoIW9wdGlvbnMudGVtcGxhdGUgJiYgIW9wdGlvbnMudGVtcGxhdGVVcmwpIHtcbiAgICBvcHRpb25zLmFic3RyYWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGZyb20gdGhlIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgdG8gdGhlIHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcblxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7bmFtZX1gKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoKTtcblxuICBpZighb3B0aW9ucy5yZWxvYWQgJiYgdXJsID09PSB0aGlzLmdldFVybCgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fX29wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLnNldFVybCh1cmwpO1xufTtcblxuLyoqXG4gKiBHbyBiYWNrXG4gKi9cbnJvdXRlci5iYWNrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5iYWNrLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyB0byBhbnkgd2F5XG4gKi9cbnJvdXRlci5nbyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZ28uYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIGZvcndhcmRcbiAqL1xucm91dGVyLmZvcndhcmQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdGF0ZSBieSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5sb2NhdGlvbiA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucyA9IHsgcmVsb2FkOiBmYWxzZSB9KSB7XG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcblxuICBpZih0aGlzLmhhc2hNb2RlKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB1cmw7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xuICB9XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKTtcblxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuY2hhbmdlU3RhdGUoKTtcbiAgfTtcblxuICB0aGlzLmRlZmF1bHRVcmwgPSBkZWZhdWx0VXJsO1xuICB0aGlzLmhhc2hNb2RlID0gaGFzaE1vZGU7XG5cbiAgdGhpcy5zdGF0ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGEgPSBhLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG4gICAgYiA9IGIubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcblxuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgbGV0IHN0YXRlcyA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG4gICAgbGV0IHBhcmVudHMgPSBbXTtcblxuICAgIHN0YXRlc1tzdGF0ZS5uYW1lXSA9IHN0YXRlO1xuICAgIHN0YXRlLmNoaWxkcmVuID0gW107XG4gICAgcGFyZW50cyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcbiAgICBwYXJlbnRzLnBvcCgpO1xuICAgIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICBsZXQgcGFyZW50TmFtZSA9IHBhcmVudHMuam9pbignLicpO1xuICAgICAgbGV0IHBhcmVudCA9IHN0YXRlc1twYXJlbnROYW1lXTtcblxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgICB9XG5cbiAgICAgIGlmKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgICBzdGF0ZS5sZXZlbC0tO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnB1c2goc3RhdGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gc3RhdGUucGF0dGVybjtcbiAgICB9XG4gIH1cblxuICBpZighdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG5cbiAgcm91dGVyLnN0YXRlcy5wdXNoKHN0YXRlKTtcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICBpZih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICovXG5yb3V0ZXIuY3JlYXRlU3RhdGVVcmwgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gJycpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtc1t2XSB8fCAnJztcbiAgfSk7XG5cbiAgdXJsID0gdGhpcy5zcGxpdFNsYXNoZXModXJsKTtcblxuICBpZihPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBoYXNoID0gKGhhc2ggfHwgJycpLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgaWYoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgYWxsIHJvdXRlciBkZXBlbmRlbmNpZXNcbiAqL1xucm91dGVyLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcblxuICAgIHJldHVybiAnKFteXFxcXC9dKiknO1xuICB9KTtcblxuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4pO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIHYpID0+IHtcbiAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICBpKys7XG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh0aGlzLmdldFVybCgpLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcoW15cXFxcL10qKScpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeJyArIHVybFBhdHRlcm4gKyAnXFwvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7XG5cbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgbGV0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcblxuICAgIHJldHVybiBmaW5kKHJvdXRlKTtcbiAgfTtcblxuICByZXR1cm4gZmluZChBa2lsaS5yb290KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBtYXRjaFxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdHxudWxsfVxuICovXG5yb3V0ZXIuZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCA9IGZ1bmN0aW9uIChhcnIsIHVybCkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSBhcnJbaV07XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldFBhdHRlcm5Db250ZW50KHN0YXRlLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3N0YXRlOiBzdGF0ZSwgLi4uY29udGVudH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlcyBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlXG4gKi9cbnJvdXRlci5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYodGhpcy5fX2Rpc2FibGVDaGFuZ2UpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVDaGFuZ2U7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpO1xuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBxdWVyeSwgaGFzaCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuXG4gIGxldCBuZXh0ID0gKHN0YXRlcywgb25FbmQpID0+IHtcbiAgICBpZiAoIXN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlID0gY29udGVudC5zdGF0ZTtcbiAgICBsZXQgcGFyYW1zID0gY29udGVudC5wYXJhbXM7XG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUoc3RhdGUubGV2ZWwpO1xuXG4gICAgaWYgKCFyb3V0ZSAmJiAhc3RhdGUuYWJzdHJhY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciAoYE5vdCBmb3VuZCByb3V0ZSBjb21wb25lbnQgZm9yIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgdHJhbnNpdGlvbi5zZXRQYXRoKHsgc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIGNvbXBvbmVudDogcm91dGUsIGxvYWRlZDogdHJ1ZSB9KTtcbiAgICBsZXZlbCsrO1xuXG4gICAgbGV0IGhhc1N0YXRlID0gcHJldlRyYW5zaXRpb24gJiYgcHJldlRyYW5zaXRpb24uaGFzU3RhdGUoc3RhdGUpO1xuICAgIGxldCBpc0RpZmZlcmVudCA9IHRydWU7XG5cbiAgICBpZihoYXNTdGF0ZSkge1xuICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24uZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgbGV0IHByZXYgPSB7IHBhcmFtczogcm91dGUucGFyYW1zLCBxdWVyeTogcm91dGUucXVlcnksIGhhc2g6IHJvdXRlLmhhc2ggfTtcbiAgICAgIGxldCBjdXJyZW50ID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH07XG5cbiAgICAgIGlzRGlmZmVyZW50ID0gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gICAgfVxuXG4gICAgbGV0IGlzSGlzdG9yeSA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gdW5kZWZpbmVkICYmICFpc0RpZmZlcmVudDtcbiAgICBsZXQgaXNSZWxvYWQgPSB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgPT09IGZhbHNlO1xuXG4gICAgaWYgKGhhc1N0YXRlICYmIChpc0hpc3RvcnkgfHwgaXNSZWxvYWQpKSB7XG4gICAgICB0cmFuc2l0aW9uLnBhdGgubG9hZGVkID0gZmFsc2U7XG5cbiAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgfVxuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbikpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuLCBvbkVuZCk7XG4gICAgICB9XG5cbiAgICAgIHJvdXRlLnNldFRyYW5zaXRpb24odHJhbnNpdGlvbikudGhlbigoKSA9PiB7XG4gICAgICAgIHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgIG5leHQoc3RhdGUuY2hpbGRyZW4sIG9uRW5kKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIG5leHQodGhpcy5nZXRTdGF0ZXNCeUxldmVsKDApLCAoKSA9PiB7XG4gICAgaWYoIXRyYW5zaXRpb24ucm91dGVzLmxlbmd0aCkge1xuICAgICAgaWYodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCk7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICB0aGlzLmhhc2hNb2RlICYmIHRoaXMuZGVmYXVsdFVybCAhPSB0aGlzLmdldFVybCgpICYmICh0aGlzLl9fZGlzYWJsZUNoYW5nZSA9IHRydWUpO1xuICAgICAgICB0aGlzLnNldFVybCh0aGlzLmRlZmF1bHRVcmwpO1xuICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fb3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuXG4gICAgaWYocHJldlRyYW5zaXRpb24pIHtcbiAgICAgIGZvcihsZXQgaSA9IGxldmVsLCBsID0gcHJldlRyYW5zaXRpb24ucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXNbaV07XG4gICAgICAgIHJvdXRlLmNvbXBvbmVudCAmJiByb3V0ZS5jb21wb25lbnQuZW1wdHkoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZScsIHtcbiAgICAgIGRldGFpbDogdHJhbnNpdGlvblxuICAgIH0pKTtcbiAgfSk7XG59O1xuXG5yb3V0ZXIuVHJhbnNpdGlvbiA9IFRyYW5zaXRpb247XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL3NlcnZpY2VzL3JvdXRlci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi4vc2VydmljZXMvcm91dGVyJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbc3RhdGVdOm5vdChbdXJsXSksW3VybF06bm90KFtzdGF0ZV0pJztcbiAgc3RhdGljIGNvbnRyb2xBdHRyaWJ1dGVzID0gdHJ1ZTtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWxvYWQnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYScsIEEpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5wYXJhbXMgPSB7fTtcbiAgICB0aGlzLnF1ZXJ5ID0ge307XG4gICAgdGhpcy5oYXNoID0gJyc7XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5pc1VybCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCd1cmwnKTtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5zZXRVcmwodXJsKTtcbiAgICB0aGlzLnJlc2V0SHJlZih1cmwpO1xuICB9XG5cbiAgY2hhbmdlZFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRQYXJhbXMocGFyYW1zKSB7XG4gICAgdGhpcy5zZXRQYXJhbXMocGFyYW1zKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRRdWVyeShxdWVyeSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRIYXNoKHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRIYXNoKHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMuc2V0UXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICBjaGFuZ2VkUmVsb2FkKHZhbCkge1xuICAgIHRoaXMuc2V0UmVsb2FkKHZhbCk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZih0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnc3RhdGUnKSAmJiB0aGlzLnNldFN0YXRlKHRoaXMuYXR0cnMuc3RhdGUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpICYmIHRoaXMuc2V0UGFyYW1zKHRoaXMuYXR0cnMucGFyYW1zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdxdWVyeScpICYmIHRoaXMuc2V0UXVlcnkodGhpcy5hdHRycy5xdWVyeSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpICYmIHRoaXMuc2V0SGFzaCh0aGlzLmF0dHJzLmhhc2gpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSAmJiB0aGlzLnNldE9wdGlvbnModGhpcy5hdHRycy5vcHRpb25zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWxvYWQnKSAmJiB0aGlzLnNldFJlbG9hZCh0aGlzLmF0dHJzLnJlbG9hZCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRVcmwodGhpcy5hdHRycy51cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHRoaXMudXJsKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZih0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZih0eXBlb2YgcXVlcnkgIT0gJ29iamVjdCcgfHwgIXF1ZXJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBxdWVyeSBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIHNldEhhc2goaGFzaCkge1xuICAgIGlmKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG9wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0UmVsb2FkKHZhbCkge1xuICAgIHRoaXMub3B0aW9ucy5yZWxvYWQgPSB2YWw7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYoIXN0YXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCByb3V0ZXIgc3RhdGUgd2l0aCBuYW1lIFwiJHtuYW1lfVwiYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcmVzZXRIcmVmKHVybCkge1xuICAgIGlmKHVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9hLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbnRlbnQnLCBDb250ZW50KTtcbiAgICBBa2lsaS5hbGlhcygnW2NvbnRlbnRlZGl0YWJsZV0nLCAnY29udGVudCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZihnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXkgPT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgdGhpcy52YWx1ZUtleSA9ICdpbm5lckhUTUwnO1xuICB9XG5cbiAgc2V0RWxlbWVudEZvY3VzKCkge1xuICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgbGV0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLmVsKTtcbiAgICByYW5nZS5jb2xsYXBzZShmYWxzZSk7XG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbi8qKlxuICogSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2lzXSc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWYnLCBJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlLWlmJywgRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCBFbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheTtcbiAgfVxuXG4gIGNoYW5nZWRJcyh2YWx1ZSkge1xuICAgIHRoaXMuc3RhdGUgPSAhIXZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWNyZWF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0UmVjcmVhdGlvbih2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWNyZWF0ZScpICYmIHRoaXMuc2V0UmVjcmVhdGlvbih0aGlzLmF0dHJzLnJlY3JlYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gISF0aGlzLmF0dHJzLmlzO1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKClcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2ZSkge1xuICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICB9XG5cbiAgc2V0UmVjcmVhdGlvbihyZWNyZWF0ZSkge1xuICAgIHRoaXMucmVjcmVhdGUgPSByZWNyZWF0ZTtcbiAgfVxuXG4gIHNldFN0YXRlKCkge1xuICAgIGxldCByZXMgPSB0aGlzLmNvbXBpbGF0aW9uKCk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcykudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcztcblxuICAgIGlmKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZih0aGlzLnJlY3JlYXRlIHx8ICF0aGlzLmlzQ29tcGlsZWQpIHtcbiAgICAgICAgcmVzID0gdGhpcy5jb21waWxlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9IHRoaXMuZGlzcGxheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZih0aGlzLnJlY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuX19lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZighdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuLyoqXG4gKiBFbHNlSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEVsc2UgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvaWYuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluY2x1ZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSB0cnVlO1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5jbHVkZScsIEluY2x1ZGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZFVybCh1cmwpIHtcbiAgICB0aGlzLmdldFRlbXBsYXRlKHVybCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZW1wbGF0ZSh0aGlzLmF0dHJzLnVybCk7XG4gIH1cblxuICBnZXRUZW1wbGF0ZSh1cmwpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gJiYgdGhpcy5jb25uZWN0aW9uLmFib3J0KCk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQodXJsLCB7XG4gICAgICBvblN0YXJ0OiAoeGhyKSA9PiB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHhocjtcbiAgICAgIH1cbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcbiAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcblxuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Mb2FkLnRyaWdnZXIoKTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVycik7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCBJbnB1dCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJztcbiAgfVxuXG4gIGNoYW5nZWRDaGVja2VkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRDaGVja2VkKHZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgKHRoaXMuaXNSYWRpbyB8fCB0aGlzLmlzQ2hlY2tib3gpICYmIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldENoZWNrZWQodGhpcy5lbC5jaGVja2VkLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5zZXRDaGVja2VkKHRoaXMuYXR0cnMuY2hlY2tlZCk7XG4gIH1cblxuICBzZXRDaGVja2VkKHZhbHVlLCB0cmlnZ2VyID0gdHJ1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcblxuICAgIGlmKHRoaXMucHJldkNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jaGVja2VkID0gdGhpcy5wcmV2Q2hlY2tlZCA9IHZhbHVlO1xuICAgIHRyaWdnZXIgJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmNoYW5nZVJhZGlvKCk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICBzdXBlci5zZXRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuaXNSYWRpbyAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBjaGFuZ2VSYWRpbygpIHtcbiAgICBsZXQgbmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgbGV0IHNlbGVjdG9yID0gYGlucHV0W3R5cGU9cmFkaW9dW25hbWU9JyR7bmFtZX0nXTpub3QoW3Njb3BlPScke3RoaXMuc2NvcGUuX19uYW1lfSddKWA7XG4gICAgbGV0IGNoaWxkcmVuID0gQWtpbGkucm9vdC5jaGlsZHJlbihzZWxlY3Rvcik7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaSc7XG5cbi8qKlxuICogVGhlIHJhZGlvIGdyb3VwIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgUmFkaW8pO1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8tYnV0dG9uJywgUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY2hhbmdlZEluKHZhbHVlKSB7XG4gICAgc3VwZXIuY2hhbmdlZEluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpO1xuICB9XG5cbiAgY2hhbmdlZE5hbWUobmFtZSkge1xuICAgIHRoaXMuc2V0TmFtZXMobmFtZSk7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pdGVyYWJsZSAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZih2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuc2V0TmFtZXModGhpcy5hdHRycy5uYW1lKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXROYW1lcyhuYW1lKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcblxuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYoIWlzVHJ1ZSkge1xuICAgICAgaWYodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIFRoZSByYWRpbyBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gYDxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcXCR7dGhpcy52YWx1ZX1cIi8+XFwke3RoaXMuX19jb250ZW50fTwvbGFiZWw+YDtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJhZGlvVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5zZXRSYWRpb1ZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0UmFkaW9WYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2NvcGUudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgU2VsZWN0KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIE9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY2hhbmdlZE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRNdWx0aXBsZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkQ29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Q29udGVudCh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkSW4odmFsdWUpIHtcbiAgICBzdXBlci5jaGFuZ2VkSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmRyYXdTZWxlY3QoKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgY29tcGlsZWQoKSB7XG4gICAgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdtdWx0aXBsZScpICYmIHRoaXMuc2V0TXVsdGlwbGUodGhpcy5hdHRycy5tdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnY29udGVudCcpICYmIHRoaXMuc2V0Q29udGVudCh0aGlzLmF0dHJzLmNvbnRlbnQpO1xuICAgIHRoaXMuZHJhd1NlbGVjdCgpO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmKHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3RlZC5wdXNoKG9wdGlvbi5lbC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbi5lbC5zZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG5cbiAgICBpZighc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgaWYoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGluQ29udGVudCh2YWx1ZSkge1xuICAgIGlmKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmNvbnRlbnQgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLmNvbnRlbnQuaW5kZXhPZih2YWx1ZSkgIT0gLTE7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGlmKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICBpZih0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGg/IHZhbHVlWzBdOiAnJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL3NlbGVjdC5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCBUZXh0YXJlYSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIHdpbGwgbm90IGJlIHdhdGNoaW5nLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIGdldCBfX3V0aWxzKCkge1xuICAgIHJldHVybiB1dGlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzY29wZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSkge1xuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIEFraWxpLnVuaXNvbGF0ZWQoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcywgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgICBpZighbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvc2NvcGUuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnYWtpbGknO1xuaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnYWtpbGkvc3JjL2NvbXBvbmVudHMvZm9yJztcblxuLyoqXG4gKiBUaGUgbWFpbiB0YWJzIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgQWtpbGkuQ29tcG9uZW50IHtcbiAgc3RhdGljIGV2ZW50cyA9IFsndGFiJ107XG5cbiAgc3RhdGljIGRlZmluZSA9IGZ1bmN0aW9uKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGFicycsIFRhYnMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGFiLW1lbnUnLCBUYWJNZW51KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi1jb250ZW50JywgVGFiQ29udGVudCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0YWItdGl0bGUnLCBUYWJUaXRsZSk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0YWItcGFuZScsIFRhYlBhbmUpO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc2NvcGUuYWN0aXZlID0gdGhpcy5hY3RpdmUgPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZEFjdGl2ZShpbmRleCkge1xuICAgIHRoaXMuc2V0QWN0aXZlVGFiKGluZGV4KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIGxldCB0aXRsZUxlbmd0aCA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiTWVudSkuZ2V0VGFicygpLmxlbmd0aDtcbiAgICBsZXQgcGFuZUxlbmd0aCA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiQ29udGVudCkuZ2V0VGFicygpLmxlbmd0aDtcblxuICAgIGlmKHRpdGxlTGVuZ3RoICE9IHBhbmVMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXCJ0YWItdGl0bGVcIiBhbmQgXCJ0YWItY29udGVudFwiIGNvbXBvbmVudCBjb3VudHMgYXJlIGRpZmZlcmVudDogJHt0aXRsZUxlbmd0aH0vJHtwYW5lTGVuZ3RofWApO1xuICAgIH1cblxuICAgIHRoaXMuc2V0QWN0aXZlVGFiKHRoaXMuYXR0cnMuYWN0aXZlIHx8IDApO1xuICB9XG5cbiAgc2V0QWN0aXZlVGFiKGluZGV4KSB7XG4gICAgbGV0IHRhYnMgPSB0aGlzLmNoaWxkKGMgPT4gYyBpbnN0YW5jZW9mIFRhYk1lbnUpLmdldFRhYnMoKTtcbiAgICBsZXQgbGFzdEFjdGl2ZSA9IHRoaXMuYWN0aXZlO1xuXG4gICAgaWYodGFic1tpbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcInRhYnNcIiBjb21wb25lbnQgaW5kZXggXCIke2luZGV4fVwiIGlzIG91dCBvZiByYW5nZSBgKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlLmFjdGl2ZSA9IHRoaXMuYWN0aXZlID0gaW5kZXg7XG5cbiAgICBpZighdGFicy5sZW5ndGgpIHtcbiAgICAgIEFraWxpLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZS53YXJuKCdOb3QgZm91bmQgYW55IGNoaWxkIGNvbXBvbmVudCBcInRhYi10aXRsZVwiIGZvciBcInRhYi1tZW51XCInKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRhYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0YWJzW2ldLnNldEFjdGl2aXR5KGkgPT0gaW5kZXgpO1xuICAgIH1cblxuICAgIGxhc3RBY3RpdmUgIT0gdGhpcy5hY3RpdmUgJiYgdGhpcy5hdHRycy5vblRhYi50cmlnZ2VyKGluZGV4LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaGVhZGVyIGdyb3VwIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgVGFiTWVudSBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICAgIHRoaXMuY2hpbGRTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFRhYlRpdGxlO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLml0ZXJhYmxlICYmIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuaXRlcmFibGUgJiYgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGdldFRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4odGhpcy5jaGlsZFNlbGVjdG9yLCAwKTtcbiAgfVxuXG4gIGdldFRhYkluZGV4KHRhYikge1xuICAgIGxldCB0YWJzID0gdGhpcy5nZXRUYWJzKCk7XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gdGFicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmKHRhYnNbaV0gPT09IHRhYikge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRUYWJzQnlJbmRleChpKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGFicygpW2ldO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJvZHkgZ3JvdXAgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJDb250ZW50IGV4dGVuZHMgVGFiTWVudSB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuY2hpbGRTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFRhYlBhbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYm9keSBncm91cCBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgVGFiUGFuZSBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgdGVtcGxhdGUgPSBgPGlmIHJlY3JlYXRlPVwiXFwke3RoaXMucmVjcmVhdGV9XCIgaXM9XCJcXCR7dGhpcy5pc0FjdGl2ZVRhYn1cIj5cXCR7dGhpcy5fX2NvbnRlbnR9PC9pZj5gO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYoIXRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIHx8ICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBUYWJDb250ZW50KSkge1xuICAgICAgQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlLndhcm4oJ05vdCBmb3VuZCBwYXJlbnQgY29tcG9uZW50IFwidGFiLWNvbnRlbnRcIiBmb3IgXCJ0YWItcGFuZVwiJyk7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH1cblxuICAgIHRoaXMuc2NvcGUucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlVGFiID0gdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWNyZWF0ZScpICYmIHRoaXMuc2V0UmVjcmVhdGlvbih0aGlzLmF0dHJzLnJlY3JlYXRlKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWNyZWF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0UmVjcmVhdGlvbih2YWx1ZSlcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24odmFsdWUpIHtcbiAgICB0aGlzLnNjb3BlLnJlY3JlYXRlID0gdmFsdWU7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3Rpdml0eSkge1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVUYWIgPSB0aGlzLmlzQWN0aXZlID0gYWN0aXZpdHk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgaGVhZGVyIGdyb3VwIGl0ZW0gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJUaXRsZSBleHRlbmRzIExvb3Age1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlVGFiID0gdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYoIXRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIHx8ICEodGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgaW5zdGFuY2VvZiBUYWJNZW51KSkge1xuICAgICAgQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlLndhcm4oJ05vdCBmb3VuZCBwYXJlbnQgY29tcG9uZW50IFwidGFiLW1lbnVcIiBmb3IgXCJ0YWItdGl0bGVcIicpO1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnRhYnMgPSB0aGlzLnBhcmVudChjID0+IGMgaW5zdGFuY2VvZiBUYWJzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhYnMuc2V0QWN0aXZlVGFiKHRoaXMuaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy50YWJzLmNoaWxkKGMgPT4gYyBpbnN0YW5jZW9mIFRhYk1lbnUpLmdldFRhYkluZGV4KHRoaXMpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZpdHkpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlVGFiID0gdGhpcy5pc0FjdGl2ZSA9IGFjdGl2aXR5O1xuICAgIHRoaXMudGFicy5jaGlsZChjID0+IGMgaW5zdGFuY2VvZiBUYWJDb250ZW50KS5nZXRUYWJzQnlJbmRleCh0aGlzLmluZGV4KS5zZXRBY3Rpdml0eShhY3Rpdml0eSk7XG4gIH1cbn1cblxuVGFicy5UYWJNZW51ID0gVGFiTWVudTtcblRhYnMuVGFiVGl0bGUgPSBUYWJUaXRsZTtcblRhYnMuVGFiQ29udGVudCA9IFRhYkNvbnRlbnQ7XG5UYWJzLlRhYlBhbmUgPSBUYWJQYW5lO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGFicy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
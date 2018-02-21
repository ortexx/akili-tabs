/*!
 * Tabs component for Akili framework
 * 
 * @version 0.4.0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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

var _component2 = __webpack_require__(2);

var _component3 = _interopRequireDefault(_component2);

var _if = __webpack_require__(15);

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(5);

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(22);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(19);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(21);

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(6);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(24);

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(13);

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(18);

var _include2 = _interopRequireDefault(_include);

var _iframe = __webpack_require__(16);

var _iframe2 = _interopRequireDefault(_iframe);

var _image = __webpack_require__(17);

var _image2 = _interopRequireDefault(_image);

var _embed = __webpack_require__(14);

var _embed2 = _interopRequireDefault(_embed);

var _audio = __webpack_require__(12);

var _audio2 = _interopRequireDefault(_audio);

var _video = __webpack_require__(26);

var _video2 = _interopRequireDefault(_video);

var _track = __webpack_require__(25);

var _track2 = _interopRequireDefault(_track);

var _source = __webpack_require__(23);

var _source2 = _interopRequireDefault(_source);

var _object = __webpack_require__(20);

var _object2 = _interopRequireDefault(_object);

var _route = __webpack_require__(7);

var _route2 = _interopRequireDefault(_route);

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _a = __webpack_require__(11);

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(27);

var _scope2 = _interopRequireDefault(_scope);

var _eventEmitter = __webpack_require__(8);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _router = __webpack_require__(9);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(10);

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(3);

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
  defaultEventsBubbling: true,
  debug: true
};

Akili.__init = null;
Akili.__components = {};
Akili.__aliases = {};
Akili.__scopes = {};
Akili.__links = {};
Akili.__window = {};
Akili.__isolation = null;
Akili.__evaluation = null;
Akili.__html = window.document.documentElement;
Akili.__serverPromise = Promise.resolve();
Akili.__serverRendering = false;

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
  var _this3 = this;

  this.__window.Array = { prototype: {} };

  var keys = Object.getOwnPropertyNames(Array.prototype);

  var _loop2 = function _loop2(i, l) {
    var key = keys[i];
    var old = Array.prototype[key];

    if (typeof old != 'function' || key == 'constructor') {
      return 'continue';
    }

    _this3.__window.Array.prototype[key] = old;

    Array.prototype[key] = function () {
      var _this4 = this,
          _arguments = arguments;

      return Akili.unevaluated(function () {
        if (!_this4.__isProxy) {
          return old.apply(_this4, _arguments);
        }

        return Akili.isolate(function () {
          return old.apply(_this4, _arguments);
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
  this.__window.setTimeout = setTimeout;
  this.__window.setInterval = setInterval;
  this.__window.Promise = Promise;

  window.setTimeout = this.createCallbackIsolation(window.setTimeout, 0);
  window.setInterval = this.createCallbackIsolation(window.setInterval, 0);
  window.Promise && (window.Promise.constructor = this.createCallbackIsolation(window.Promise.constructor, 0));
};

/**
 * Isolate event listeners
 */
Akili.isolateEvents = function () {
  this.__window.Element = { prototype: {} };

  this.__window.Element.prototype.addEventListener = Element.prototype.addEventListener;
  this.__window.Element.prototype.removeEventListener = Element.prototype.removeEventListener;
  this.__window.Element.prototype.remove = Element.prototype.remove;

  Element.prototype.remove = function () {
    delete this.__akiliListeners;

    return Akili.__window.Element.prototype.remove.apply(this, arguments);
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
      var _this5 = this,
          _arguments2 = arguments;

      return Akili.unevaluated(function () {
        return Akili.isolate(function () {
          return fn.apply(_this5, _arguments2);
        });
      });
    };

    this.__akiliListeners[name].push({
      link: fn,
      fn: args[1]
    });

    return Akili.__window.Element.prototype.addEventListener.apply(this, args);
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

    return Akili.__window.Element.prototype.removeEventListener.apply(this, arguments);
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

    return Akili.isolate(function () {
      return fn.apply(context, _arguments3);
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
 * Error handling
 */
Akili.errorHandling = function () {
  var _this6 = this;

  window.addEventListener('error', function () {
    _this6.triggerInit(false);
  });
};

/**
 * Trigger an initialization status
 *
 * @param {boolean} status
 */
Akili.triggerInit = function (status) {
  Akili.__init = status;
  window.dispatchEvent(new CustomEvent('akili-init', { detail: status }));
};

/**
 * Server rendering implementation
 */
Akili.serverRendering = function () {
  var _this7 = this;

  var server = this.__html.getAttribute('akili-server');

  this.__serverRendering = !!server;

  if (server) {
    var display = getComputedStyle(this.__html).display;
    this.__html.style.display = 'none';

    this.__serverPromise = _request2.default.get(server).then(function (res) {
      _this7.__html.innerHTML = res.data;
      _this7.__html.style.display = display;
    });
  }
};

/**
 * Initialize the application
 *
 * @param {HTMLElement} [root]
 * @returns {Promise}
 */
Akili.init = function (root) {
  var _this8 = this;

  this.__root = root || document.querySelector("html");

  return this.__serverPromise.then(function () {
    return _this8.compile(_this8.__root).then(function () {
      if (_router2.default.__init) {
        return _router2.default.changeState();
      }
    }).then(function () {
      _this8.triggerInit(true);
    }).catch(function (err) {
      _this8.triggerInit(false);
      throw err;
    });
  });
};

/**
 * Deinitialize the application
 */
Akili.deinit = function () {
  for (var key in this.__window.Element.prototype) {
    Element.prototype[key] = this.__window.Element.prototype[key];
  }

  for (var _key in this.__window.Array.prototype) {
    Array.prototype[_key] = this.__window.Array.prototype[_key];
  }

  window.setTimeout = this.__window.setTimeout;
  window.setInterval = this.__window.setInterval;
  window.Promise = this.__window.Promise;
};

/**
 * Define all default components
 */
Akili.define = function () {
  _a2.default.define();
  _audio2.default.define();
  _content2.default.define();
  _component3.default.define();
  _embed2.default.define();
  _for2.default.define();
  _include2.default.define();
  _iframe2.default.define();
  _image2.default.define();
  _input2.default.define();
  _if2.default.define();
  _object2.default.define();
  _radio2.default.define();
  _route2.default.define();
  _select2.default.define();
  _source2.default.define();
  _textarea2.default.define();
  _track2.default.define();
  _video2.default.define();
};

Akili.Component = _component3.default;
Akili.EventEmitter = _eventEmitter2.default;
Akili.Scope = _scope2.default;
Akili.utils = _utils2.default;
Akili.components.A = _a2.default;
Akili.components.Audio = _audio2.default;
Akili.components.Content = _content2.default;
Akili.components.For = _for2.default;
Akili.components.Embed = _embed2.default;
Akili.components.If = _if2.default;
Akili.components.Include = _include2.default;
Akili.components.Input = _input2.default;
Akili.components.Iframe = _iframe2.default;
Akili.components.Image = _image2.default;
Akili.components.Object = _object2.default;
Akili.components.Radio = _radio2.default;
Akili.components.Route = _route2.default;
Akili.components.Select = _select2.default;
Akili.components.Source = _source2.default;
Akili.components.Text = _text2.default;
Akili.components.Textarea = _textarea2.default;
Akili.components.Track = _track2.default;
Akili.components.Url = _url2.default;
Akili.components.Video = _video2.default;
Akili.services.request = _request2.default;
Akili.services.router = _router2.default;
Akili.services.store = _store2.default;

window.Akili = Akili;

var components = exports.components = Akili.components;
var services = exports.services = Akili.services;
exports.default = Akili;


Akili.serverRendering();
Akili.define();
Akili.errorHandling();
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Url = function (_Component) {
  _inherits(Url, _Component);

  function Url() {
    var _ref;

    _classCallCheck(this, Url);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Url.__proto__ || Object.getPrototypeOf(Url)).call.apply(_ref, [this].concat(args)));

    _this.urlAttribute = 'src';
    return _this;
  }

  _createClass(Url, [{
    key: 'changedUrl',
    value: function changedUrl(url) {
      this.setUrl(url);
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attrs.hasOwnProperty('url') && this.setUrl(this.attrs.url);
    }
  }, {
    key: 'setUrl',
    value: function setUrl(url) {
      this.attrs[this.urlAttribute] = url;
    }
  }]);

  return Url;
}(_component2.default);

Url.matches = '[url]';
exports.default = Url;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _store = __webpack_require__(10);

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(3);

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
     * @param {object} context
     * @param {string} expression
     * @param {Event} [event=null]
     */

  }, {
    key: 'parse',
    value: function parse(context, expression) {
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      return function (expression, event) {
        return eval(expression);
      }.call(context, expression, event);
    }
  }]);

  function Component(el) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    this.__isMounted = false;
    this.__isCompiled = false;
    this.__cancelled = false;
    this.__prevent = false;
    this.__bindings = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = {};
    this.__disableProxy = null;
    this.__children = [];
    this.__parent = null;
    this.__parents = [];
    this.__attrs = {};
    this.__links = {};
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
          _this2.attrs.onCompiled && _this2.attrs.onCompiled.trigger(undefined, { bubbles: false });

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
          _this2.attrs.onRecompiled && _this2.attrs.onRecompiled.trigger(undefined, { bubbles: false });
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

      this.attrs.onResolved && this.attrs.onResolved.trigger(undefined, { bubbles: false });
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
      var controlAttributes = this.constructor.controlAttributes;
      var events = this.constructor.events;

      if (this.constructor.template) {
        _akili2.default.setTemplate(this.el, this.constructor.template);
      }

      if (this.constructor.templateUrl) {
        this.__content = this.el.innerHTML;
        this.el.innerHTML = '';
      }

      this.__scope = __scope;
      this.__events = events;
      this.__controlAttributes = controlAttributes;

      _akili2.default.addScope(scope);
      scope = this.__nestedObserve(_scope, []);
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

      if (node.__component.parents(function (com) {
        return com.__prevent;
      }).length) {
        return node.__expression;
      }

      if (!(node instanceof window.Attr) && node.__component.__prevent) {
        return node.__expression;
      }

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
          throw err;
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

        if (node instanceof window.Attr) {
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

      if (node instanceof window.Attr) {
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
              component.attrs.onChanged && component.attrs.onChanged.trigger({ key: clearAttribute, value: value }, { bubbles: false });
              component.changed(clearAttribute, value);

              var key = _utils2.default.toCamelCase(clearAttribute);
              var camelKey = key[0].toUpperCase() + key.slice(1);
              var fnName = 'changed' + camelKey;
              var evFnName = 'onChanged' + camelKey;

              component.attrs[evFnName] && component.attrs[evFnName].trigger(value, { bubbles: false });
              typeof component[fnName] == 'function' && component[fnName](value);
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

    /**
     * Evaluate value by keys
     *
     * @param {string[]} keys
     * @param {*} value
     * @param {boolean} [isDeleted=false] - true if value is deleting
     * @protected
     */

  }, {
    key: '__evaluateByKeys',
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
      var evaluate = void 0;

      if (!expression) {
        return;
      }

      this.__evaluatingEvent = {
        el: el,
        component: this,
        event: e,
        node: node
      };

      this.__disableProxy = null;
      evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], e);
      this.__evaluatingEvent = null;

      return evaluate;
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
        node[node instanceof window.Attr ? 'value' : 'nodeValue'] = this.__evaluate(node);
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
            return component.__evaluateEvent(node, el, e);
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

      node.__expression = node[node instanceof window.Attr ? 'value' : 'nodeValue'];
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
          node.value = value;
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
              realTarget[key] = _akili2.default.isolateFunction(realTarget[key]);
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

          if (_this7.__links[_akili2.default.joinBindingKeys(keys)]) {
            _this7.__storeByKeys(keys, value);
          }

          target[key] = _this7.__nestedObserve(value, keys);

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
     * Save the value to the store by the keys
     * 
     * @param {string[]} keys 
     * @param {*} value 
     * 
     * @protected
     */

  }, {
    key: '__storeByKeys',
    value: function __storeByKeys(keys, value) {
      var links = this.__links[_akili2.default.joinBindingKeys(keys)];

      if (!links || !links.length) {
        return;
      }

      if (_utils2.default.isScopeProxy(value)) {
        value = value.__target;
      }

      for (var i = 0, l = links.length; i < l; i++) {
        var link = links[i];
        this.__store(link.name, value);
      }
    }

    /**
     * Save the value to the store by the name
     * 
     * @param {string} name 
     * @param {*} value 
     * @protected
     */

  }, {
    key: '__store',
    value: function __store(name, value) {
      _store2.default.__target[name] = value;

      var links = _akili2.default.__links[name];

      if (!links || !links.length) {
        return;
      }

      for (var i = 0, l = links.length; i < l; i++) {
        var link = links[i];
        var component = link.component;

        if (component === this) {
          continue;
        }

        if (link.fn) {
          link.fn(value);
          continue;
        }

        this.__disableProxy = true;
        component.scope.__set(link.keys, value);
        this.__disableProxy = false;
      }
    }

    /**
     * Create a link with the scope property
     * 
     * @param {string} name 
     * @param {string|string[]} keys
     */

  }, {
    key: '__linkByKeys',
    value: function __linkByKeys(name, keys) {
      if (!keys) {
        throw new Error('Link "' + name + '" must have the scope property name');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      this.scope.__set(keys, _store2.default[name]);
      var keyString = _akili2.default.joinBindingKeys(keys);
      var info = void 0;

      if (!this.__links[keyString]) {
        this.__links[keyString] = [];
      }

      var arr = this.__links[keyString];

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

        if (res.component === this && res.name == name && res.keyString == keyString) {
          return;
        }
      }

      if (!_akili2.default.__links[name]) {
        _akili2.default.__links[name] = [];
      }

      info = { component: this, name: name, keys: keys, keyString: keyString };
      this.__links[keyString].push(info);
      _akili2.default.__links[name].push(info);
    }

    /**
     * Create a link with the function
     * 
     * @param {string} name 
     * @param {function} fn
     */

  }, {
    key: '__linkByFunction',
    value: function __linkByFunction(name, fn) {
      fn(_store2.default[name]);

      if (!_akili2.default.__links[name]) {
        _akili2.default.__links[name] = [];
      }

      var links = _akili2.default.__links[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.component === this && res.name == name && res.fn === fn) {
          break;
        }
      }

      _akili2.default.__links[name].push({ component: this, name: name, fn: fn });
    }

    /**
     * Remove the link with the scope property
     * 
     * @param {string} name
     * @param {string|string[]} keys
     */

  }, {
    key: '__unlinkByKeys',
    value: function __unlinkByKeys(name, keys) {
      if (!keys) {
        throw new Error('You have to pass the scope property name for link "' + name + '"');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      var keyString = _akili2.default.joinBindingKeys(keys);
      var arr = this.__links[keyString];

      if (!arr.length) {
        return;
      }

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];
        var links = _akili2.default.__links[res.name];

        if (res.component !== this || res.name != name || res.keyString != keyString) {
          continue;
        }

        arr.splice(i, 1);

        if (!links || !links.length) {
          continue;
        }

        for (var k = links.length - 1; k >= 0; k--) {
          var link = links[k];

          if (link.component === this && link.keyString == keyString) {
            links.splice(k, 1);
          }
        }

        if (!links.length) {
          delete _akili2.default.__links[name];
        }
      }

      if (!arr.length) {
        delete this.__links[keyString];
      }
    }

    /**
    * Remove the link with the function
    * 
    * @param {string} name 
    * @param {function} fn
    */

  }, {
    key: '__unlinkByFunction',
    value: function __unlinkByFunction(name, fn) {
      if (!_akili2.default.__links[name]) {
        return;
      }

      var links = _akili2.default.__links[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.component === this && res.name == name && res.fn === fn) {
          links.splice(i, 1);
          break;
        }
      }

      if (!links.length) {
        delete _akili2.default.__links[name];
      }
    }

    /**
     * Check the key is system
     *
     * @param {string} key
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__isSystemKey',
    value: function __isSystemKey(key) {
      if (key == '__' || key[0] == '_' && key[1] == '_') {
        return true;
      } else if (['constructor'].indexOf(key) != -1) {
        return true;
      }

      return false;
    }

    /**
     * Nested observing the value
     *
     * @param {*} value
     * @param {string[]} [startKeys]
     * @protected
     */

  }, {
    key: '__nestedObserve',
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
              target = _utils2.default.copy(target, false, true);
              value = target;
            } else if (_akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
              target = _utils2.default.copy(target, false, true);
              value = target;
            }
          }
        } else if (!_this8.__disableProxyRedefining && !(value instanceof _akili2.default.Scope)) {
          target = _utils2.default.copy(target, false, true);
          value = target;
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

    /**
     * Create an isolation object
     *
     * @param {string[]} parents
     * @param {string} key
     * @param {boolean} [isDeleted=false]
     * @returns {*}
     * @protected
     */

  }, {
    key: '__createIsolationObject',
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

  }, {
    key: '__bindNode',
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

    /**
     * Get binding by keys
     *
     * @param {string[]} keys
     * @returns {object|null}
     * @protected
     */

  }, {
    key: '__getBind',
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
     * Set the node property
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
     * Get the node property
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
     * Delete the node property
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
     * Unbind the keys
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
     * Unbind data by nodes
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
     * Clear the links
     * 
     * @protected
     */

  }, {
    key: '__clearLinks',
    value: function __clearLinks() {
      var links = _akili2.default.__links;

      for (var key in links) {
        var arr = links[key];

        for (var i = arr.length - 1; i >= 0; i--) {
          var link = arr[i];

          if (link.component === this) {
            arr.splice(i, 1);
          }
        }

        if (!arr.length) {
          delete links[key];
        }
      }
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
      this.__clearLinks();
      this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
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
     * @param {number|number[]} [levels=null]
     * @returns {Component|Component[]}
     * @protected
     */

  }, {
    key: '__getParent',
    value: function __getParent() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var findAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var levels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var arr = [];
      var level = 0;

      if ((typeof levels === 'undefined' ? 'undefined' : _typeof(levels)) != 'object') {
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
     * @param {number|number[]} [levels=null]
     * @returns {Component|Component[]}
     * @protected
     */

  }, {
    key: '__getChildren',
    value: function __getChildren() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var findAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var levels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var arr = [];
      var level = 0;

      if ((typeof levels === 'undefined' ? 'undefined' : _typeof(levels)) != 'object') {
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
     * Create a link to the store
     * 
     * @param {string} name 
     * @param {string|string[]|function} handler
     */

  }, {
    key: 'link',
    value: function link(name, handler) {
      return typeof handler === 'function' ? this.__linkByFunction(name, handler) : this.__linkByKeys(name, handler);
    }

    /**
     * Remove the link
     * 
     * @param {string} name 
     * @param {string|string[]|function} handler
     */

  }, {
    key: 'unlink',
    value: function unlink(name, handler) {
      return typeof handler === 'function' ? this.__unlinkByFunction(name, handler) : this.__unlinkByKeys(name, handler);
    }

    /**
     * Save the value to the store
     *
     * @param {string[]} keys 
     * @param {*} value 
     * @protected
     */

  }, {
    key: 'store',
    value: function store(name, value) {
      return this.__store(name, value);
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
     * @param {number|number[]} [levels=null]
     * @returns {Component}
     */

  }, {
    key: 'parent',
    value: function parent() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this.__getParent(selector, false, levels);
    }

    /**
     * Get array of parent components by selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels=null]
     * @returns {Component[]}
     */

  }, {
    key: 'parents',
    value: function parents() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this.__getParent(selector, true, levels);
    }

    /**
     * Get closest child component by selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels=null]
     * @returns {Component}
     */

  }, {
    key: 'child',
    value: function child() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return this.__getChildren(selector, false, levels);
    }

    /**
     * Get array of child components by selector
     *
     * @param {string|function} [selector='']
     * @param {number|number[]} [levels=null]
     * @returns {Component[]}
     */

  }, {
    key: 'children',
    value: function children() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var levels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

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
     * Compale the component, but cancel the compilation inside of it
     */

  }, {
    key: 'prevent',
    value: function prevent() {
      this.__prevent = true;
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _eventEmitter = __webpack_require__(8);

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
 * @example
 * // returns [{x:{y:1}}]
 * utils.filter([{x:{y:1}}, {x:{y:2}}], '1', ['x', 'y']);
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
 * @example
 * // returns [{x: {y: 1}}, {x: {y: 2}}]
 * utils.sort([{x: {y: 2}}, {x: {y: 1}}], [['x', 'y']], [true]);
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
 * @param {boolean} [enumerable=false] - including enumerable properties
 * @returns {*}
 */
utils.copy = function (value) {
  var nested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var enumerable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !value) {
    return value;
  }

  function next(obj) {
    var keys = enumerable ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    var newObj = Array.isArray(obj) ? [] : {};

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];

      newObj[key] = obj[key];
    }

    obj = newObj;

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
  } else if (typeof a == 'function' && typeof b == 'function') {
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
 * Compare the current value with the previous
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Request = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(3);

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

        xhr.ontimeout = function () {
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loop = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(3);

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
        el = document.createElement('loop');
        el.innerHTML = this.el.innerHTML;
        this.el.innerHTML = '';
        this.el.appendChild(el);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(4);

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

      if (!transition.path.loaded) {
        return _akili2.default.compile(this.el, { recompile: true });
      }

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

/***/ }),
/* 8 */
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
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { bubbles: true };
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
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { bubbles: true };
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

/***/ }),
/* 9 */
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

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _route2 = __webpack_require__(7);

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
    var current = window.location.hash.replace('#', '');

    window.location.hash = url;
    current === url && this.changeState().catch(function (err) {
      return console.error(err);
    });
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

    router.changeState().catch(function (err) {
      return console.error(err);
    });

    return res;
  };

  this.__onStateChangeHandler = function () {
    _this.changeState().catch(function (err) {
      return console.error(err);
    });
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

    return Promise.resolve();
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

    transition.path.loaded = !(hasState && (isHistory || isReload));

    Promise.resolve(state.handler(transition)).then(function (data) {
      if (transition.__cancelled) {
        return onEnd && onEnd();
      }

      transition.path.data = data;

      if (state.abstract) {
        return next(state.children, onEnd);
      }

      route.setTransition(transition).then(function () {
        next(state.children, onEnd);
      }).catch(function (err) {
        return onEnd && onEnd(err);
      });
    });
  };

  return new Promise(function (resolve, reject) {
    next(_this3.getStatesByLevel(0), function (err) {
      if (err) {
        return reject(err);
      }

      if (!transition.routes.length) {
        if (_this3.__redirects) {
          return reject(new Error('Wrong router default url "' + _this3.defaultUrl + '"'));
        }

        if (_this3.defaultUrl) {
          if (_this3.defaultUrl == _this3.getUrl()) {
            return reject(new Error('Not found any routes'));
          }

          _this3.hashMode && (_this3.__disableChange = true);
          _this3.setUrl(_this3.defaultUrl);
          _this3.__redirects++;

          return _this3.changeState().then(resolve).catch(reject);
        }

        if (_akili2.default.options.debug) {
          console.warn('Not found a default route. You can pass it in "router.init(defaultUrl)" function');
        }
      }

      if (!_this3.__options.saveScrollPosition && !transition.hash) {
        window.scrollTo(0, 0);
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

      resolve();
    });
  });
};

router.Transition = Transition;

exports.default = router;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var target = {};

var store = new Proxy(target, {
  get: function get(target, key) {
    if (key == "__target") {
      return target;
    }

    return target[key];
  },
  set: function set(target, key, value) {
    target[key] = value;
    _akili2.default.root && _akili2.default.root.store(key, value);

    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    _akili2.default.root && _akili2.default.root.store(key, undefined);
    delete target[key];

    return true;
  }
});

exports.default = store;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(9);

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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Audio = function (_Url) {
  _inherits(Audio, _Url);

  function Audio() {
    _classCallCheck(this, Audio);

    return _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).apply(this, arguments));
  }

  _createClass(Audio, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('audio', Audio);
    }
  }]);

  return Audio;
}(_url2.default);

exports.default = Audio;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(6);

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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Embed = function (_Url) {
  _inherits(Embed, _Url);

  function Embed() {
    _classCallCheck(this, Embed);

    return _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).apply(this, arguments));
  }

  _createClass(Embed, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('embed', Embed);
    }
  }]);

  return Embed;
}(_url2.default);

exports.default = Embed;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Else = exports.ElseIf = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Iframe = function (_Url) {
  _inherits(Iframe, _Url);

  function Iframe() {
    _classCallCheck(this, Iframe);

    return _possibleConstructorReturn(this, (Iframe.__proto__ || Object.getPrototypeOf(Iframe)).apply(this, arguments));
  }

  _createClass(Iframe, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('iframe', Iframe);
    }
  }]);

  return Iframe;
}(_url2.default);

exports.default = Iframe;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_Url) {
  _inherits(Image, _Url);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('img', Image);
    }
  }]);

  return Image;
}(_url2.default);

exports.default = Image;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(4);

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
          _this2.attrs.onLoad.trigger(undefined, { bubbles: false });
        });
      }).catch(function (err) {
        _this2.attrs.onError.trigger(err, { bubbles: false });
        throw err;
      });
    }
  }]);

  return Include;
}(_component2.default);

Include.transparent = true;
Include.matches = '[url]';
Include.events = ['load', 'error'];
exports.default = Include;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(6);

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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Objects = function (_Url) {
  _inherits(Objects, _Url);

  function Objects() {
    var _ref;

    _classCallCheck(this, Objects);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Objects.__proto__ || Object.getPrototypeOf(Objects)).call.apply(_ref, [this].concat(args)));

    _this.urlAttribute = 'data';
    return _this;
  }

  _createClass(Objects, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('object', Objects);
    }
  }]);

  return Objects;
}(_url2.default);

exports.default = Objects;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _for = __webpack_require__(5);

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
          _this2.attrs.onRadio.trigger(value, { bubbles: true });
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _for = __webpack_require__(5);

var _for2 = _interopRequireDefault(_for);

var _utils = __webpack_require__(3);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Source = function (_Url) {
  _inherits(Source, _Url);

  function Source() {
    _classCallCheck(this, Source);

    return _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).apply(this, arguments));
  }

  _createClass(Source, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('source', Source);
    }
  }]);

  return Source;
}(_url2.default);

exports.default = Source;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = __webpack_require__(6);

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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Track = function (_Url) {
  _inherits(Track, _Url);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
  }

  _createClass(Track, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('track', Track);
    }
  }]);

  return Track;
}(_url2.default);

exports.default = Track;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_Url) {
  _inherits(Video, _Url);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('video', Video);
    }
  }]);

  return Video;
}(_url2.default);

exports.default = Video;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(3);

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

/***/ }),
/* 28 */
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

var _for = __webpack_require__(5);

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

  _createClass(Tabs, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('tabs', Tabs);
      _akili2.default.component('tab-menu', TabMenu);
      _akili2.default.component('tab-content', TabContent);
      _akili2.default.component('tab-title', TabTitle);
      _akili2.default.component('tab-pane', TabPane);
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
        throw new Error('"tab-title" and "tab-content" components count is different: ' + titleLength + '/' + paneLength);
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
        throw new Error('"tabs" component index "' + index + '" is out of range');
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

window.AkiliTabs = Tabs;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGExNGI4MmJlOWYzMjI2YTFjYzUiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvYWtpbGkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9hLmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy90ZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwid2VicGFjazovLy8uL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9ha2lsaS9zcmMvc2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnMuanMiXSwibmFtZXMiOlsiQWtpbGkiLCJvcHRpb25zIiwiZGVmYXVsdEV2ZW50c0J1YmJsaW5nIiwiZGVidWciLCJfX2luaXQiLCJfX2NvbXBvbmVudHMiLCJfX2FsaWFzZXMiLCJfX3Njb3BlcyIsIl9fbGlua3MiLCJfX3dpbmRvdyIsIl9faXNvbGF0aW9uIiwiX19ldmFsdWF0aW9uIiwiX19odG1sIiwid2luZG93IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJfX3NlcnZlclByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9fc2VydmVyUmVuZGVyaW5nIiwiaHRtbEJvb2xlYW5BdHRyaWJ1dGVzIiwiY29tcG9uZW50cyIsImRlY29yYXRvcnMiLCJzZXJ2aWNlcyIsImpvaW5CaW5kaW5nS2V5cyIsImtleXMiLCJtYXAiLCJlbCIsInRvU3RyaW5nIiwiam9pbiIsImFkZFNjb3BlIiwic2NvcGUiLCJfX25hbWUiLCJFcnJvciIsImdldFNjb3BlIiwibmFtZSIsInJlbW92ZVNjb3BlIiwiZ2V0QWtpbGlQYXJlbnRzIiwidHJlZSIsImFyciIsImNoZWNrIiwibm9kZSIsInBhcmVudE5vZGUiLCJfX2FraWxpIiwicHVzaCIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsImZuIiwicmVzIiwicHJvcHMiLCJrIiwiaGFzT3duUHJvcGVydHkiLCJpIiwibCIsInByb3AiLCJpc0RlbGV0ZWQiLCJjb21wb25lbnQiLCJfX2V2YWx1YXRlQnlLZXlzIiwidW5kZWZpbmVkIiwic2V0UHJvcGVydHlCeUtleXMiLCJsYXN0IiwidmFsIiwidmFsdWUiLCJsZW5ndGgiLCJ1bmV2YWx1YXRlZCIsImV2YWx1YXRpb24iLCJ1bmlzb2xhdGVkIiwiaW5pdGlhbGl6ZSIsInJlY29tcGlsZSIsIl9fcmVjb21waWxlIiwiaXNSb290IiwiX19yb290IiwiY29tcG9uZW50TmFtZSIsInRvRGFzaENhc2UiLCJnZXRBdHRyaWJ1dGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJfQ29tcG9uZW50IiwiQ0hFQ0tfQUxJQVNFUyIsInNlbGVjdG9ycyIsIk9iamVjdCIsInNlbGVjdG9yQWxsIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwiQ29tcG9uZW50IiwiX19jYW5jZWxsZWQiLCJfX2NyZWF0ZSIsImNvbXBpbGUiLCJyb290IiwiZWxlbWVudHMiLCJuZXN0ZWRJbml0aWFsaXppbmciLCJjaGlsZHJlbiIsImNoaWxkIiwicCIsIl9fY29tcGlsZSIsImFsbCIsInRoZW4iLCJyIiwiX19yZXNvbHZlIiwiY29uc29sZSIsIndhcm4iLCJ1bnJlZ2lzdGVyQ29tcG9uZW50IiwiYWxpYXMiLCJ1bnJlZ2lzdGVyQWxpYXMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJBcnJheSIsInByb3RvdHlwZSIsImdldE93blByb3BlcnR5TmFtZXMiLCJrZXkiLCJvbGQiLCJfX2lzUHJveHkiLCJhcHBseSIsImlzb2xhdGVXaW5kb3dGdW5jdGlvbnMiLCJzZXRUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsImNvbnN0cnVjdG9yIiwiaXNvbGF0ZUV2ZW50cyIsIkVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIl9fYWtpbGlMaXN0ZW5lcnMiLCJhcmd1bWVudHMiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwibGluayIsImxpc3RlbmVyIiwic3BsaWNlIiwicG9zIiwiY2FsbGJhY2siLCJpc29sYXRlRnVuY3Rpb24iLCJjb250ZXh0Iiwib0ZuIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZXJyb3JIYW5kbGluZyIsInRyaWdnZXJJbml0Iiwic3RhdHVzIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwic2VydmVyUmVuZGVyaW5nIiwic2VydmVyIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJzdHlsZSIsImdldCIsImRhdGEiLCJpbml0IiwicXVlcnlTZWxlY3RvciIsImNoYW5nZVN0YXRlIiwiY2F0Y2giLCJlcnIiLCJkZWluaXQiLCJkZWZpbmUiLCJFdmVudEVtaXR0ZXIiLCJTY29wZSIsInV0aWxzIiwiQSIsIkF1ZGlvIiwiQ29udGVudCIsIkZvciIsIkVtYmVkIiwiSWYiLCJJbmNsdWRlIiwiSW5wdXQiLCJJZnJhbWUiLCJJbWFnZSIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInN0b3JlIiwidXJsQXR0cmlidXRlIiwidXJsIiwic2V0VXJsIiwiYXR0cnMiLCJldmFsdWF0aW9uUmVnZXgiLCJldmFsdWF0aW9uUmVnZXhHbG9iYWwiLCJSZWdFeHAiLCJzb3VyY2UiLCJzeXN0ZW1BdHRyaWJ1dGVzIiwiZXhwcmVzc2lvbiIsImV2ZW50IiwiZXZhbCIsIl9faXNNb3VudGVkIiwiX19pc0NvbXBpbGVkIiwiX19wcmV2ZW50IiwiX19iaW5kaW5ncyIsIl9fZXZhbHVhdGluZ0V2ZW50IiwiX19yZWNvbXBpbGluZyIsIl9fY29tcGlsaW5nIiwiX19kaXNhYmxlUHJveHkiLCJfX2NoaWxkcmVuIiwiX19wYXJlbnQiLCJfX3BhcmVudHMiLCJfX2F0dHJzIiwiX19hdHRyaWJ1dGVPZiIsIl9fZXZhbHVhdGlvbkNvbXBvbmVudCIsIl9fc2V0RXZlbnRzIiwiX19zZXRQYXJlbnRzIiwiX19zZXRCb29sZWFuQXR0cmlidXRlcyIsIl9fZGVmaW5lQXR0cmlidXRlcyIsIl9faW5pdGlhbGl6ZSIsImNyZWF0ZWQiLCJjb250cm9sIiwiX19jb250cm9sQXR0cmlidXRlcyIsIl9fZXZhbHVhdGVQYXJlbnQiLCJuZXdQYXJlbnQiLCJfX2ludGVycG9sYXRlQXR0cmlidXRlcyIsImludGVycG9sYXRlIiwicGFyZW50Iiwibm9kZVR5cGUiLCJfX2luaXRpYWxpemVOb2RlIiwibm9kZVZhbHVlIiwiX19ldmFsdWF0ZSIsImNoaWxkTm9kZXMiLCJvbkNvbXBpbGVkIiwidHJpZ2dlciIsImJ1YmJsZXMiLCJjb21waWxlZCIsInRlbXBsYXRlVXJsIiwiX19jb250ZW50Iiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9fc2NvcGUiLCJfc2NvcGUiLCJhc3NpZ24iLCJjb250cm9sQXR0cmlidXRlcyIsImV2ZW50cyIsIl9fZXZlbnRzIiwiX19uZXN0ZWRPYnNlcnZlIiwiYm9vbGVhbkF0dHJpYnV0ZXMiLCJjb25jYXQiLCJzZXRBdHRyIiwiYXR0cmlidXRlcyIsImluZGV4T2YiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0ZVBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBhcmVQcmV2aW91c1ZhbHVlIiwiY29weSIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiY291bnRlciIsImF0dHJpYnV0ZVZhbHVlIiwiX19jb21wb25lbnQiLCJjb20iLCJfX2V4cHJlc3Npb24iLCJBdHRyIiwibSIsImQiLCJldmFsdWF0ZSIsImV4aXN0aW5nQmluZGluZ3MiLCJwYXJzZVZhbHVlIiwiX19nZXRQYXJzZWRFeHByZXNzaW9uIiwibGlzdCIsInBhcnNlIiwiaGFzaCIsImtleXNTdHJpbmciLCJub3RCaW5kaW5nIiwicGFyZW50VmFsdWUiLCJldmFsQ29tcG9uZW50IiwiaXNTY29wZVByb3h5IiwiYmluZCIsIl9fZ2V0Qm91bmROb2RlIiwiX19iaW5kIiwiX19zZXROb2RlUHJvcGVydHkiLCJtYWtlQXR0cmlidXRlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsImlzQm9vbGVhbkF0dHJpYnV0ZSIsIl9faGFzQmluZGluZ3MiLCJjbGVhckF0dHJpYnV0ZSIsIl9fYXR0cmlidXRlT24iLCJfX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIiLCJ0b0NhbWVsQ2FzZSIsIm9uQ2hhbmdlZCIsImNoYW5nZWQiLCJjYW1lbEtleSIsInRvVXBwZXJDYXNlIiwiZm5OYW1lIiwiZXZGbk5hbWUiLCJlbGVtZW50IiwiX19lbGVtZW50IiwiYXR0ciIsIndpdGhvdXRQYXJlbnRzIiwibGFzdFByb3BzIiwicHJvcHNMZW5ndGgiLCJlbEV2YWx1YXRlIiwiX19nZXRCaW5kIiwiX19kYXRhIiwiYyIsIl9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyIsIl9fZXZhbHVhdGVOb2RlIiwiX2siLCJfcHJvcCIsInVuYmluZCIsIm9iaiIsIl9rZXlzIiwiX19rZXlzIiwiX2lzRGVsZXRlZCIsImhhc0tleSIsInNoaWZ0IiwiaGFzUHJvcGVydHlCeUtleXMiLCJfX2V2YWx1YXRlTmVzdGVkIiwiX191bmJpbmQiLCJkZWxldGVQcm9wZXJ0eUJ5S2V5cyIsImV4ZWMiLCJfX2NoZWNrRXZhbHVhdGlvbiIsImF0dHJpYnV0ZU9mIiwiZXZlbnROYW1lIiwiX19ldmVudCIsImVtaXR0ZXIiLCJfX2V2YWx1YXRlRXZlbnQiLCJfX2luaXRpYWxpemVkIiwiX19pbml0aWFsaXplQXR0cmlidXRlIiwiY2hhbmdlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTm9kZSIsIl9fdW5iaW5kQnlOb2RlcyIsIlByb3h5IiwidGFyZ2V0Iiwic2V0IiwiYXR0cktleSIsImRlbGV0ZVByb3BlcnR5IiwiX19pc1N5c3RlbUtleSIsInJlYWxUYXJnZXQiLCJnZXRPd25Qcm9wZXJ0eVRhcmdldCIsImlzUGxhaW5PYmplY3QiLCJnZXRFbnVtZXJhYmxlUHJvcGVydHlUYXJnZXQiLCJfX2JpbmROb2RlIiwiX19zdG9yZUJ5S2V5cyIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IiwibGlua3MiLCJfX3RhcmdldCIsIl9fc3RvcmUiLCJfX3NldCIsImlzQXJyYXkiLCJrZXlTdHJpbmciLCJpbmZvIiwic3RhcnRLZXlzIiwib2JzZXJ2ZSIsIl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyIsIl9fb2JzZXJ2ZSIsImlzb2xhdGlvbktleSIsInBhcmVudEtleXNTdHJpbmciLCJfX2RlbGV0ZU5vZGVQcm9wZXJ0eSIsIm5vZGVzIiwiX19jbGVhckVtcHR5QmluZGluZ3MiLCJjbGVhciIsIl9fcmVtb3ZlIiwiX19jbGVhckxpbmtzIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZCIsImZpbmRBbGwiLCJsZXZlbHMiLCJsZXZlbCIsInJpZ2h0IiwibGV2ZWxFbGVtZW50cyIsInJldmVyc2UiLCJoYW5kbGVyIiwiX19saW5rQnlGdW5jdGlvbiIsIl9fbGlua0J5S2V5cyIsIl9fdW5saW5rQnlGdW5jdGlvbiIsIl9fdW5saW5rQnlLZXlzIiwiX19nZXRQYXJlbnQiLCJfX2dldENoaWxkcmVuIiwiX19nZXROZWFyIiwiYXBwZW5kQ2hpbGQiLCJfX2VtcHR5IiwiX19kZXN0cm95IiwiY2xhc3MiLCJjbGFzc2VzIiwic3R5bGVzIiwiZmlsdGVyIiwiaXRlbSIsIm1hdGNoIiwic29ydCIsIm9yZGVyIiwiYSIsImIiLCJEYXRlIiwiZ2V0VGltZSIsIm5leHQiLCJhViIsImJWIiwibmVzdGVkIiwibmV3T2JqIiwiY29tcGFyZSIsImN1cnJlbnQiLCJwcmV2aW91cyIsInByZXZpb3VzQ29weSIsImN1cnJlbnRDb3B5IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiaHRtbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlY29kZUh0bWxFbnRpdGllcyIsIm9iamVjdCIsInJlZHVjZSIsIm8iLCJoYXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJjbGVhclNjb3BlUHJveHkiLCJNYXRoIiwicmFuZG9tIiwic3Vic3RyaW5nIiwiUmVxdWVzdCIsImJhc2VVcmwiLCJkZWZhdWx0cyIsInN0YXR1c0Vycm9yc1BhdHRlcm4iLCJyZWplY3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9uU3RhcnQiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvcGVuIiwibWV0aG9kIiwidXNlciIsInBhc3N3b3JkIiwiaGVhZGVycyIsImpzb24iLCJib2R5IiwicmVzcG9uc2VUeXBlIiwiZm9ybSIsImNyZWF0ZUZvcm1EYXRhIiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsInNldFJlcXVlc3RIZWFkZXIiLCJwYXJhbXMiLCJwYXJhbXNUb1F1ZXJ5Iiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInRyYW5zZm9ybUFmdGVyIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsInNwbGl0IiwiZXFzIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmFtZXNwYWNlIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsInRvSVNPU3RyaW5nIiwiX19pbnN0YW5jZXMiLCJhZGRJbnN0YW5jZSIsImluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJMb29wIiwiX19pdGVyYXRvciIsIl9fa2V5IiwiX192YWx1ZSIsIl9faW5kZXgiLCJfX2NvbXBhcmlzb25WYWx1ZSIsIml0ZXJhdG9ycyIsIml0ZXJhdG9yUmVmIiwiaXRlcmF0b3JPdXRlckhUTUwiLCJkcmF3IiwiY3JlYXRlSXRlcmF0b3IiLCJpbiIsIm1hc2siLCJuZXh0U2libGluZyIsIm91dGVySFRNTCIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiaW5kZXgiLCJmb3VuZCIsIl9faGFzaCIsIml0ZXJhdG9yIiwiY1ZhbHVlIiwiY29tcGFyc2lvbiIsImNDb3B5Iiwic2V0SW5kZXgiLCJzZXRLZXkiLCJzZXRWYWx1ZSIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImluc2VydEJlZm9yZSIsIndyaXRhYmxlIiwiZVZhbHVlIiwiaW5kZXhLZXlzIiwibGFzdEVsZW1lbnQiLCJsb29wIiwiaXRlcmF0ZSIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwidmFsdWVLZXkiLCJzZXRGb2N1cyIsImZvY3VzIiwic2V0RWxlbWVudEZvY3VzIiwic2V0RWxlbWVudEJsdXIiLCJibHVyIiwidHJhbnNpdGlvbiIsInN0YXRlIiwicGF0aCIsImdldFBhcmVudFNjb3BlVHJhbnNpdGlvbiIsIl9fdHJhbnNpdGlvbiIsImxvYWRlZCIsImVtcHR5IiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJfRXZlbnQiLCJ0eXBlIiwiVHJhbnNpdGlvbiIsInJvdXRlcyIsInN0YXRlcyIsInJvdXRlIiwiaGFzaE1vZGUiLCJfX3JlZGlyZWN0cyIsIl9fb3B0aW9ucyIsIl9fcGFyYW1SZWdleCIsIl9fcm91dGVTZWxlY3RvciIsImFkZCIsInBhdHRlcm4iLCJkZWZhdWx0T3B0aW9ucyIsImFic3RyYWN0Iiwic2V0U3RhdGUiLCJnZXRTdGF0ZSIsImNyZWF0ZVN0YXRlVXJsIiwicmVsb2FkIiwiZ2V0VXJsIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJsb2NhdGlvbiIsImVycm9yIiwicHVzaFN0YXRlIiwiZGVmYXVsdFVybCIsIm9sZFB1c2hTdGF0ZSIsIl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIiLCJwb3AiLCJwYXJlbnROYW1lIiwiZnVsbFBhdHRlcm4iLCJzcGxpdFNsYXNoZXMiLCJyZW1vdmVTdGF0ZSIsInNldEhhc2hVcmwiLCJzZXRIaXN0b3J5VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwiZiIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImlzQWN0aXZlU3RhdGUiLCJpbmNsdWRlcyIsImluQWN0aXZlU3RhdGUiLCJnZXRSb3V0ZSIsImdldEFycmF5UGF0dGVybkNvbnRlbnQiLCJnZXRTdGF0ZXNCeUxldmVsIiwiX19kaXNhYmxlQ2hhbmdlIiwicHJldlRyYW5zaXRpb24iLCJvbkVuZCIsInNldFBhdGgiLCJoYXNTdGF0ZSIsImlzRGlmZmVyZW50IiwicHJldiIsImlzSGlzdG9yeSIsImlzUmVsb2FkIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvIiwiaXNVcmwiLCJyZXNldEhyZWYiLCJzZXRQYXJhbXMiLCJzZXRRdWVyeSIsInNldEhhc2giLCJzZXRSZWxvYWQiLCJwcmV2ZW50RGVmYXVsdCIsInNldE9wdGlvbnMiLCJocmVmIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJFbHNlSWYiLCJFbHNlIiwiYWN0aXZlIiwicmVjcmVhdGUiLCJpc0NvbXBpbGVkIiwic2V0UmVjcmVhdGlvbiIsImlzIiwiY29tcGlsYXRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZXN1bHQiLCJzZXRBY3Rpdml0eSIsImNvbm5lY3Rpb24iLCJnZXRUZW1wbGF0ZSIsImFib3J0Iiwib25Mb2FkIiwib25FcnJvciIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwic2V0Q2hlY2tlZCIsImNoZWNrZWQiLCJwcmV2Q2hlY2tlZCIsIm9uQ2hhbmdlIiwiZGlzcGF0Y2giLCJFdmVudCIsImNoYW5nZVJhZGlvIiwicmFkaW8iLCJPYmplY3RzIiwiUmFkaW9CdXR0b24iLCJpdGVyYWJsZSIsInNldE5hbWVzIiwiZ2V0UmFkaW9WYWx1ZSIsInByZXZWYWx1ZSIsIm9uUmFkaW8iLCJpc1RydWUiLCJpc1NlbGVjdGVkIiwic2V0UmFkaW9WYWx1ZSIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiZ2V0Q29udGVudCIsIm11bHRpcGxlIiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwicmVkZWZpbmUiLCJ0cmltIiwic2V0U2VsZWN0ZWQiLCJfX2VsIiwic3RyaWN0IiwiVGFicyIsIlRhYk1lbnUiLCJUYWJDb250ZW50IiwiVGFiVGl0bGUiLCJUYWJQYW5lIiwic2V0QWN0aXZlVGFiIiwidGl0bGVMZW5ndGgiLCJnZXRUYWJzIiwicGFuZUxlbmd0aCIsInRhYnMiLCJsYXN0QWN0aXZlIiwib25UYWIiLCJjaGlsZFNlbGVjdG9yIiwidGFiIiwiaXNBY3RpdmVUYWIiLCJpc0FjdGl2ZSIsImFjdGl2aXR5IiwiZ2V0VGFiSW5kZXgiLCJnZXRUYWJzQnlJbmRleCIsIkFraWxpVGFicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7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cEI7Ozs7OEJBRVM7QUFBQTs7QUFDUix1R0FBYzdaLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEJZLFNBQTFCO0FBQ0EsV0FBS29qQixJQUFMLEdBQVksS0FBS2xkLE1BQUwsQ0FBWTtBQUFBLGVBQUs4RixhQUFhMlcsSUFBbEI7QUFBQSxPQUFaLENBQVo7O0FBRUEsV0FBS2pwQixFQUFMLENBQVFrRyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3RDLGVBQUt3akIsSUFBTCxDQUFVSixZQUFWLENBQXVCLE9BQUtuTCxLQUE1QjtBQUNELE9BRkQ7QUFHRDs7OytCQUVVO0FBQ1Qsd0dBQWV6WSxLQUFmLENBQXFCLElBQXJCLEVBQTJCWSxTQUEzQjtBQUNBLFdBQUs2WCxLQUFMLEdBQWEsS0FBS3VMLElBQUwsQ0FBVW5sQixLQUFWLENBQWdCO0FBQUEsZUFBSytOLGFBQWE0VyxPQUFsQjtBQUFBLE9BQWhCLEVBQTJDZ0IsV0FBM0MsQ0FBdUQsSUFBdkQsQ0FBYjtBQUNEOzs7Z0NBRVdELFEsRUFBVTtBQUNwQixXQUFLN3BCLEtBQUwsQ0FBVzJwQixXQUFYLEdBQXlCLEtBQUtDLFFBQUwsR0FBZ0JDLFFBQXpDO0FBQ0EsV0FBS1AsSUFBTCxDQUFVbmxCLEtBQVYsQ0FBZ0I7QUFBQSxlQUFLK04sYUFBYTZXLFVBQWxCO0FBQUEsT0FBaEIsRUFBOENnQixjQUE5QyxDQUE2RCxLQUFLaE0sS0FBbEUsRUFBeUVtSSxXQUF6RSxDQUFxRjJELFFBQXJGO0FBQ0Q7Ozs7OztBQUdIaEIsS0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0FELEtBQUtHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0FILEtBQUtFLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0FGLEtBQUtJLE9BQUwsR0FBZUEsT0FBZjs7QUFFQW5xQixPQUFPa3JCLFNBQVAsR0FBbUJuQixJQUFuQixDIiwiZmlsZSI6ImFraWxpLXRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwYTE0YjgyYmU5ZjMyMjZhMWNjNSIsIi8qKlxuICogSmF2YXNjcmlwdCBmcmFtZXdvcmtcbiAqXG4gKiBjb25zdCBBa2lsaSA9IG1ha2VJdEVhc3koanMgKyBodG1sKTtcbiAqXG4gKiBAYXV0aG9yIEFsZXhhbmRyIEJhbGFzeWFuIDxteXdlYnN0cmVldEBnbWFpbC5jb20+XG4gKiBAbGluayBodHRwOi8vYWtpbGlqcy5jb21cbiAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcbmltcG9ydCBJZiBmcm9tICcuL2NvbXBvbmVudHMvaWYuanMnO1xuaW1wb3J0IEZvciBmcm9tICcuL2NvbXBvbmVudHMvZm9yLmpzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC5qcyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LmpzJztcbmltcG9ydCBSYWRpbyBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9jb21wb25lbnRzL3RleHQuanMnO1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vY29tcG9uZW50cy90ZXh0YXJlYS5qcyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5qcyc7XG5pbXBvcnQgSW5jbHVkZSBmcm9tICcuL2NvbXBvbmVudHMvaW5jbHVkZS5qcyc7XG5pbXBvcnQgSWZyYW1lIGZyb20gJy4vY29tcG9uZW50cy9pZnJhbWUuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS5qcyc7XG5pbXBvcnQgRW1iZWQgZnJvbSAnLi9jb21wb25lbnRzL2VtYmVkLmpzJztcbmltcG9ydCBBdWRpbyBmcm9tICcuL2NvbXBvbmVudHMvYXVkaW8uanMnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlby5qcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9jb21wb25lbnRzL3RyYWNrLmpzJztcbmltcG9ydCBTb3VyY2UgZnJvbSAnLi9jb21wb25lbnRzL3NvdXJjZS5qcyc7XG5pbXBvcnQgT2JqZWN0cyBmcm9tICcuL2NvbXBvbmVudHMvb2JqZWN0LmpzJztcbmltcG9ydCBSb3V0ZSBmcm9tICcuL2NvbXBvbmVudHMvcm91dGUuanMnO1xuaW1wb3J0IFVybCBmcm9tICcuL2NvbXBvbmVudHMvdXJsLmpzJztcbmltcG9ydCBBIGZyb20gJy4vY29tcG9uZW50cy9hLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vc2VydmljZXMvcm91dGVyLmpzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgQWtpbGkgPSB7fTtcblxuQWtpbGkub3B0aW9ucyA9IHtcbiAgZGVmYXVsdEV2ZW50c0J1YmJsaW5nOiB0cnVlLFxuICBkZWJ1ZzogdHJ1ZVxufTtcblxuQWtpbGkuX19pbml0ID0gbnVsbDtcbkFraWxpLl9fY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuX19hbGlhc2VzID0ge307XG5Ba2lsaS5fX3Njb3BlcyA9IHt9O1xuQWtpbGkuX19saW5rcyA9IHt9O1xuQWtpbGkuX193aW5kb3cgPSB7fTtcbkFraWxpLl9faXNvbGF0aW9uID0gbnVsbDtcbkFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5Ba2lsaS5fX2h0bWwgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuQWtpbGkuX19zZXJ2ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5Ba2lsaS5fX3NlcnZlclJlbmRlcmluZyA9IGZhbHNlO1xuXG5Ba2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICdkaXNhYmxlZCcsICdjb250ZW50ZWRpdGFibGUnLCAnaGlkZGVuJ1xuXTtcblxuQWtpbGkuY29tcG9uZW50cyA9IHt9O1xuQWtpbGkuZGVjb3JhdG9ycyA9IHt9O1xuQWtpbGkuc2VydmljZXMgPSB7fTtcblxuLyoqXG4gKiBKb2luIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uKGtleXMpIHtcbiAgcmV0dXJuIGtleXMubWFwKGVsID0+IGVsLnRvU3RyaW5nKCkpLmpvaW4oJy4nKTtcbn07XG5cbi8qKlxuICogQWRkIHNjb3BlIHRvIHRoZSBzY29wZXMgbGlzdFxuICpcbiAqIEBwYXJhbSBzY29wZVxuICovXG5Ba2lsaS5hZGRTY29wZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gIGlmICh0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjb3BlIG5hbWUgJHtzY29wZS5fX25hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gIH1cblxuICB0aGlzLl9fc2NvcGVzW3Njb3BlLl9fbmFtZV0gPSBzY29wZTtcbn07XG5cbi8qKlxuICogR2V0IHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKiBAcmV0dXJucyB7U2NvcGV9XG4gKi9cbkFraWxpLmdldFNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVsZXRlIHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24obmFtZSkge1xuICB0aGlzLl9fc2NvcGVzW25hbWVdID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX19zY29wZXNbbmFtZV07XG59O1xuXG4vKipcbiAqIEdldCBhbGwgZWxlbWVudHMgd2l0aCBhdHRhY2hlZCBBa2lsaSBjb21wb25lbnRzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RyZWU9dHJ1ZV0gLSByZXR1cm4gYXJyYXkgb2YgdGhlIHBhcmVudHMgaWYgdHJ1ZSwgY2xvc2VzdCBwYXJlbnQgaWYgZmFsc2VcbiAqIEByZXR1cm5zIHtBcnJheXxIVE1MRWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcblxuICByZXR1cm4gdHJlZT8gYXJyOiBhcnJbMF07XG59O1xuXG4vKipcbiAqIFNldCBlbGVtZW50IGlubmVyIGh0bWwgd2l0aCBjb250ZW50IHJlcGxhY2luZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuc2V0VGVtcGxhdGUgPSBmdW5jdGlvbihlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICByZXR1cm4gZWwuaW5uZXJIVE1MO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB1bmlxdWUgc2NvcGUgbmFtZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbkFraWxpLmNyZWF0ZVNjb3BlTmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2LCAoc3RyKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy5fX3Njb3Blc1tzdHJdO1xuICB9KTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBmdW5jdGlvbi5cbiAqIEV2ZXJ5IHNjb3BlIHZhcmlhYmxlIGNoYW5nZSBjYWxscyBhY2NvcmRpbmcgbm9kZSBldmFsdWF0aW9uLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBjaGFuZ2Ugc29tZSBzY29wZSB2YXJpYWJsZSBpbiB0aGUgbG9vcCAtIGV2YWx1YXRpb24gd2lsbCBiZSBjYWxsZWQgb24gdGhlIGVhY2ggY2hhbmdlLlxuICogSXQgbWF5IGJlIHNsb3cgZm9yIHRoZSBhcHBsaWNhdGlvbi5cbiAqIFlvdSBjYW4gaXNvbGF0ZSB0aGlzIGFjdGlvbiBhbmQgcnVuIGFsbCBldmFsdWF0aW9uIHByb2Nlc3MgYWZ0ZXIgcGFzc2VkIGZ1bmN0aW9uIGF0IG9uY2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS5pc29sYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgaWYgKHRoaXMuX19pc29sYXRpb24pIHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHRoaXMuX19pc29sYXRpb24gPSB7fTtcblxuICBsZXQgcmVzID0gZm4oKTtcbiAgbGV0IHByb3BzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiB0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLl9faXNvbGF0aW9uLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgaWYgKHByb3AuaXNEZWxldGVkKSB7XG4gICAgICBwcm9wLmNvbXBvbmVudC5fX2V2YWx1YXRlQnlLZXlzKHByb3Aua2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5zY29wZSwgKGxhc3QsIHZhbCkgPT4ge1xuICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wLnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvcHMgPSBudWxsO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGVkID0gZnVuY3Rpb24oZm4pIHtcbiAgbGV0IGV2YWx1YXRpb24gPSB0aGlzLl9faXNvbGF0aW9uO1xuICBsZXQgcmVzO1xuXG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gZXZhbHVhdGlvbjtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbihlbCwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCByZWNvbXBpbGUgPSBvcHRpb25zLnJlY29tcGlsZTtcbiAgbGV0IGNvbXBvbmVudCA9IGVsLl9fYWtpbGk7XG5cbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGlmIChyZWNvbXBpbGUpIHtcbiAgICAgIGNvbXBvbmVudC5fX3JlY29tcGlsZSgpO1xuXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBpc1Jvb3QgPSBlbCA9PT0gdGhpcy5fX3Jvb3Q7XG4gIGxldCBjb21wb25lbnROYW1lID0gdXRpbHMudG9EYXNoQ2FzZShlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpIHx8IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGxldCBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbY29tcG9uZW50TmFtZV07XG5cbiAgQ0hFQ0tfQUxJQVNFUzogaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgbGV0IHNlbGVjdG9ycyA9IE9iamVjdC5rZXlzKHRoaXMuX19hbGlhc2VzKTtcblxuICAgIGlmICghc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBsZXQgc2VsZWN0b3JBbGwgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuXG4gICAgaWYgKCFlbC5tYXRjaGVzKHNlbGVjdG9yQWxsKSkge1xuICAgICAgYnJlYWsgQ0hFQ0tfQUxJQVNFUztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBzZWxlY3RvciBpbiB0aGlzLl9fYWxpYXNlcykge1xuICAgICAgaWYgKCF0aGlzLl9fYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShzZWxlY3RvcikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBfQ29tcG9uZW50ID0gdGhpcy5fX2NvbXBvbmVudHNbdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50ICYmICFpc1Jvb3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBfQ29tcG9uZW50ID0gdGhpcy5Db21wb25lbnQ7XG4gIH1cblxuICBpZiAoX0NvbXBvbmVudC5tYXRjaGVzICYmICFlbC5tYXRjaGVzKF9Db21wb25lbnQubWF0Y2hlcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQgPSBuZXcgX0NvbXBvbmVudChlbCwge30pO1xuXG4gIGlmIChjb21wb25lbnQuX19jYW5jZWxsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb21wb25lbnQuX19jcmVhdGUoKTtcblxuICByZXR1cm4gY29tcG9uZW50O1xufTtcblxuLyoqXG4gKiBDb21waWxlIHRoZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLmNvbXBpbGUgPSBmdW5jdGlvbihyb290LCBvcHRpb25zID0geyByZWNvbXBpbGU6IGZhbHNlIH0pIHsgIFxuICBsZXQgZWxlbWVudHMgPSBbXTtcblxuICBjb25zdCBuZXN0ZWRJbml0aWFsaXppbmcgPSAoZWwpID0+IHtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5pbml0aWFsaXplKGVsLCBvcHRpb25zKTtcbiAgICBsZXQgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcblxuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgIG5lc3RlZEluaXRpYWxpemluZyhjaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIG5lc3RlZEluaXRpYWxpemluZyhyb290KTtcblxuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgcC5wdXNoKGNvbXBvbmVudC5fX2NvbXBpbGUoKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICByLnB1c2goY29tcG9uZW50Ll9fcmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgY29tcG9uZW50IG9yIGdldCBpdCBpZiBmbiBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Q29tcG9uZW50fSBbZm5dXG4gKi9cbkFraWxpLmNvbXBvbmVudCA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKCFmbikge1xuICAgIHJldHVybiB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuX19jb21wb25lbnRzW25hbWVdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCAke25hbWV9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fY29tcG9uZW50c1tuYW1lXSA9IGZuO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVyIHRoZSBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5Ba2lsaS51bnJlZ2lzdGVyQ29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2NvbXBvbmVudHNbbmFtZV07XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBzZWxlY3RvciBhbGlhcyBvciBnZXQgaXQgaWYgY29tcG9uZW50IG5hbWUgaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIERPTSBzZWxlY3RvclxuICogQHBhcmFtIHtzdHJpbmd9IFtjb21wb25lbnROYW1lXVxuICovXG5Ba2lsaS5hbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb21wb25lbnROYW1lID0gJycpIHtcbiAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdIHx8IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYEFsaWFzIHdpdGggc2VsZWN0b3IgJHtzZWxlY3Rvcn0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19hbGlhc2VzW3NlbGVjdG9yXSA9IGNvbXBvbmVudE5hbWU7XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJBbGlhcyA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5BcnJheSA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQXJyYXkucHJvdG90eXBlKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgbGV0IG9sZCA9IEFycmF5LnByb3RvdHlwZVtrZXldO1xuXG4gICAgaWYgKHR5cGVvZiBvbGQgIT0gJ2Z1bmN0aW9uJyB8fCBrZXkgPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XSA9IG9sZDtcblxuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX19pc1Byb3h5KSB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIElzb2xhdGUgc29tZSB3aW5kb3cgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVXaW5kb3dGdW5jdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSBQcm9taXNlO1xuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0VGltZW91dCwgMCk7XG4gIHdpbmRvdy5zZXRJbnRlcnZhbCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LnNldEludGVydmFsLCAwKTtcbiAgd2luZG93LlByb21pc2UgJiYgKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciAsIDApKTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBldmVudCBsaXN0ZW5lcnNcbiAqL1xuQWtpbGkuaXNvbGF0ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQgPSB7IHByb3RvdHlwZToge30gfTtcblxuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzO1xuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ucHVzaCh7XG4gICAgICBsaW5rOiBmbixcbiAgICAgIGZuOiBhcmdzWzFdXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdW2ldO1xuXG4gICAgICBpZiAobGlzdGVuZXIubGluayA9PT0gZm4pIHtcbiAgICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiAgQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIHRoZSBmdW5jdGlvbiBjYWxsYmFjayB0byBhbiBpc29sYXRlIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBbcG9zPVwibGFzdFwiXVxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5Ba2lsaS5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbiA9IGZ1bmN0aW9uKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIGxldCBjYWxsYmFjayA9IHBvcyA9PSAnbGFzdCc/IGFyZ3NbYXJncy5sZW5ndGggLSAxXTogYXJnc1twb3NdO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBhcmdzWzBdID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIEFraWxpLnVuZXZhbHVhdGVkKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dF1cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oZm4sIGNvbnRleHQgPSBudWxsKSB7XG4gIGlmIChmbi5fX2FraWxpKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IG9GbiA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG5cbiAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob0ZuLCAnX19ha2lsaScsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgcmV0dXJuIG9Gbjtcbn07XG5cbi8qKlxuICogRXJyb3IgaGFuZGxpbmdcbiAqL1xuQWtpbGkuZXJyb3JIYW5kbGluZyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gIEFraWxpLl9faW5pdCA9IHN0YXR1cztcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdha2lsaS1pbml0JywgeyBkZXRhaWw6IHN0YXR1cyB9KSk7XG59O1xuXG4vKipcbiAqIFNlcnZlciByZW5kZXJpbmcgaW1wbGVtZW50YXRpb25cbiAqL1xuQWtpbGkuc2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24oKSB7XG4gIGxldCBzZXJ2ZXIgPSB0aGlzLl9faHRtbC5nZXRBdHRyaWJ1dGUoJ2FraWxpLXNlcnZlcicpO1xuXG4gIHRoaXMuX19zZXJ2ZXJSZW5kZXJpbmcgPSAhIXNlcnZlcjtcblxuICBpZiAoc2VydmVyKSB7XG4gICAgbGV0IGRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX19odG1sKS5kaXNwbGF5O1xuICAgIHRoaXMuX19odG1sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICB0aGlzLl9fc2VydmVyUHJvbWlzZSA9IHJlcXVlc3QuZ2V0KHNlcnZlcikudGhlbigocmVzKSA9PiB7ICAgICAgXG4gICAgICB0aGlzLl9faHRtbC5pbm5lckhUTUwgPSByZXMuZGF0YTtcbiAgICAgIHRoaXMuX19odG1sLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uKHJvb3QpIHtcbiAgdGhpcy5fX3Jvb3QgPSByb290IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuXG4gIHJldHVybiB0aGlzLl9fc2VydmVyUHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jb21waWxlKHRoaXMuX19yb290KS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChyb3V0ZXIuX19pbml0KSB7XG4gICAgICAgIHJldHVybiByb3V0ZXIuY2hhbmdlU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudHJpZ2dlckluaXQodHJ1ZSk7XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXRpYWxpemUgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbkFraWxpLmRlaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZSkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlW2tleV07XG4gIH1cblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGUpIHtcbiAgICBBcnJheS5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlW2tleV07XG4gIH1cblxuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuX193aW5kb3cuc2V0VGltZW91dDtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbDtcbiAgd2luZG93LlByb21pc2UgPSB0aGlzLl9fd2luZG93LlByb21pc2U7XG59O1xuXG4vKipcbiAqIERlZmluZSBhbGwgZGVmYXVsdCBjb21wb25lbnRzXG4gKi9cbkFraWxpLmRlZmluZSA9IGZ1bmN0aW9uKCkge1xuICBBLmRlZmluZSgpO1xuICBBdWRpby5kZWZpbmUoKTtcbiAgQ29udGVudC5kZWZpbmUoKTtcbiAgQ29tcG9uZW50LmRlZmluZSgpO1xuICBFbWJlZC5kZWZpbmUoKTtcbiAgRm9yLmRlZmluZSgpO1xuICBJbmNsdWRlLmRlZmluZSgpO1xuICBJZnJhbWUuZGVmaW5lKCk7XG4gIEltYWdlLmRlZmluZSgpO1xuICBJbnB1dC5kZWZpbmUoKTtcbiAgSWYuZGVmaW5lKCk7XG4gIE9iamVjdHMuZGVmaW5lKCk7XG4gIFJhZGlvLmRlZmluZSgpO1xuICBSb3V0ZS5kZWZpbmUoKTtcbiAgU2VsZWN0LmRlZmluZSgpO1xuICBTb3VyY2UuZGVmaW5lKCk7XG4gIFRleHRhcmVhLmRlZmluZSgpO1xuICBUcmFjay5kZWZpbmUoKTtcbiAgVmlkZW8uZGVmaW5lKCk7XG59O1xuXG5Ba2lsaS5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5Ba2lsaS5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5Ba2lsaS5TY29wZSA9IFNjb3BlO1xuQWtpbGkudXRpbHMgPSB1dGlscztcbkFraWxpLmNvbXBvbmVudHMuQSA9IEE7XG5Ba2lsaS5jb21wb25lbnRzLkF1ZGlvID0gQXVkaW87XG5Ba2lsaS5jb21wb25lbnRzLkNvbnRlbnQgPSBDb250ZW50O1xuQWtpbGkuY29tcG9uZW50cy5Gb3IgPSBGb3I7XG5Ba2lsaS5jb21wb25lbnRzLkVtYmVkID0gRW1iZWQ7XG5Ba2lsaS5jb21wb25lbnRzLklmID0gSWY7XG5Ba2lsaS5jb21wb25lbnRzLkluY2x1ZGUgPSBJbmNsdWRlO1xuQWtpbGkuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuQWtpbGkuY29tcG9uZW50cy5JZnJhbWUgPSBJZnJhbWU7XG5Ba2lsaS5jb21wb25lbnRzLkltYWdlID0gSW1hZ2U7XG5Ba2lsaS5jb21wb25lbnRzLk9iamVjdCA9IE9iamVjdHM7XG5Ba2lsaS5jb21wb25lbnRzLlJhZGlvID0gUmFkaW87XG5Ba2lsaS5jb21wb25lbnRzLlJvdXRlID0gUm91dGU7XG5Ba2lsaS5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbkFraWxpLmNvbXBvbmVudHMuU291cmNlID0gU291cmNlO1xuQWtpbGkuY29tcG9uZW50cy5UZXh0ID0gVGV4dDtcbkFraWxpLmNvbXBvbmVudHMuVGV4dGFyZWEgPSBUZXh0YXJlYTtcbkFraWxpLmNvbXBvbmVudHMuVHJhY2sgPSBUcmFjaztcbkFraWxpLmNvbXBvbmVudHMuVXJsID0gVXJsO1xuQWtpbGkuY29tcG9uZW50cy5WaWRlbyA9IFZpZGVvO1xuQWtpbGkuc2VydmljZXMucmVxdWVzdCA9IHJlcXVlc3Q7XG5Ba2lsaS5zZXJ2aWNlcy5yb3V0ZXIgPSByb3V0ZXI7XG5Ba2lsaS5zZXJ2aWNlcy5zdG9yZSA9IHN0b3JlO1xuXG53aW5kb3cuQWtpbGkgPSBBa2lsaTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHMgPSBBa2lsaS5jb21wb25lbnRzO1xuZXhwb3J0IGNvbnN0IHNlcnZpY2VzID0gQWtpbGkuc2VydmljZXM7XG5leHBvcnQgZGVmYXVsdCBBa2lsaTtcblxuQWtpbGkuc2VydmVyUmVuZGVyaW5nKCk7XG5Ba2lsaS5kZWZpbmUoKTtcbkFraWxpLmVycm9ySGFuZGxpbmcoKTtcbkFraWxpLmlzb2xhdGVFdmVudHMoKTtcbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSgpO1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2FraWxpLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xyXG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcclxuICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG5cclxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ3NyYyc7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VkVXJsKHVybCkge1xyXG4gICAgdGhpcy5zZXRVcmwodXJsKTtcclxuICB9XHJcblxyXG4gIGNvbXBpbGVkKCkge1xyXG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRVcmwodGhpcy5hdHRycy51cmwpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXJsKHVybCkge1xyXG4gICAgdGhpcy5hdHRyc1t0aGlzLnVybEF0dHJpYnV0ZV0gPSB1cmw7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy91cmwuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBldmFsdWF0aW9uUmVnZXggPSAvXFwkeygoKD8hXFwkeykuKSopfS87XG5jb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZSddO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFtdO1xuICBzdGF0aWMgZXZlbnRzID0gW107XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IGZhbHNlO1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgc3RhdGljIHRlbXBsYXRlID0gJyc7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICcnO1xuICBzdGF0aWMgc2NvcGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBkZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtFdmVudH0gW2V2ZW50PW51bGxdXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbiwgZXZlbnQgPSBudWxsKSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoZXhwcmVzc2lvbiwgZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmFsKGV4cHJlc3Npb24pO1xuICAgIH0pLmNhbGwoY29udGV4dCwgZXhwcmVzc2lvbiwgZXZlbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19saW5rcyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSByZWNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKCkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNyZWF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlKCkge1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuXG4gICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZWQodGhpcy5hdHRycyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19jb21waWxlKCkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzIHx8ICF0aGlzLl9fZXZhbHVhdGVQYXJlbnQ7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCk7XG5cbiAgICAgICAgICBjaGlsZC5ub2RlVmFsdWUgPSB0aGlzLl9fZXZhbHVhdGUoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcblxuICAgIGxldCByZXM7XG5cbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZiAodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzb2x2ZWQoKSk7XG4gIH1cblxuICAvKipcbiAgICogUGFydCBvZiB0aGUge0BzZWUgQ29tcG9uZW50I19fY29tcGlsZX0gbWV0aG9kXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHtcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTtcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuICAgIHNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRCb29sZWFuQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzID0gW10uY29uY2F0KEFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcywgdGhpcy5jb25zdHJ1Y3Rvci5ib29sZWFuQXR0cmlidXRlcyk7XG5cbiAgICBjb25zdCBzZXRBdHRyID0gKGVsKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBub2RlID0gYXR0cnNbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgc2V0QXR0cihjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0QXR0cih0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXZlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0RXZlbnRzKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG5cbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQgPSBldmFsdWF0ZVBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZENoaWxkKGVsKSB7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnB1c2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGljZSBjaGlsZCBmcm9tIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmICghbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIHV0aWxzLmNvcHkodmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG5cbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSwgdXRpbHMuY29weSh2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIG5vZGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGUobm9kZSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBpZiAobm9kZS5fX2NvbXBvbmVudC5wYXJlbnRzKChjb20pID0+IGNvbS5fX3ByZXZlbnQpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG5vZGUuX19leHByZXNzaW9uO1xuICAgIH1cblxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5fX2NvbXBvbmVudC5fX3ByZXZlbnQpIHtcbiAgICAgIHJldHVybiBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG5cbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG5cbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW119O1xuXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG5cbiAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24/IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0OiBbXTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGZvciAobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBgJHtkYXRhLmNvbXBvbmVudC5fX3Njb3BlLl9fbmFtZX0uJHtkYXRhLmtleXNTdHJpbmd9YDtcblxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZiAodXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiaW5kID0gZGF0YS5jb21wb25lbnQuX19nZXRCb3VuZE5vZGUoZGF0YS5rZXlzLCBub2RlKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5rZXlzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICBpZiAoIWJpbmQpIHtcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmQoZGF0YS5rZXlzLCB7IG5vZGU6IG5vZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIHZhbHVlKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGV4aXN0aW5nQmluZGluZ3MgPSBudWxsO1xuICAgICAgZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoY291bnRlcikge1xuICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG5cbiAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuX19hdHRyaWJ1dGVPbikge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuXG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICBjb21wb25lbnQuYXR0cnNbdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpXSA9IHZhbHVlO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzQ29tcGlsZWQpIHtcbiAgICAgICAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQgJiYgY29tcG9uZW50LmF0dHJzLm9uQ2hhbmdlZC50cmlnZ2VyKHsga2V5OiBjbGVhckF0dHJpYnV0ZSwgdmFsdWU6IHZhbHVlfSwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5jaGFuZ2VkKGNsZWFyQXR0cmlidXRlLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGxldCBrZXkgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBsZXQgY2FtZWxLZXkgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcbiAgICAgICAgICAgIGxldCBmbk5hbWUgPSAnY2hhbmdlZCcgKyBjYW1lbEtleTtcbiAgICAgICAgICAgIGxldCBldkZuTmFtZSA9ICdvbkNoYW5nZWQnICsgY2FtZWxLZXk7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tldkZuTmFtZV0gJiYgY29tcG9uZW50LmF0dHJzW2V2Rm5OYW1lXS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICAgICAgdHlwZW9mIGNvbXBvbmVudFtmbk5hbWVdID09ICdmdW5jdGlvbicgJiYgY29tcG9uZW50W2ZuTmFtZV0odmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgbGV0IGF0dHIgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG5cbiAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdO1xuXG4gICAgaWYgKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KTtcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBjb25zdCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7XG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YSA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuX19kYXRhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEuX19kYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGxldCBiaW5kID0gZGF0YS5fX2RhdGFba107XG5cbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgX2sgaW4gYmluZC5ub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgICAgICAgICBpZiAoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcblxuICAgICAgICBldmFsdWF0ZShjb21wb25lbnQuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsRXZhbHVhdGUodGhpcy5lbCk7XG4gICAgZXZhbHVhdGUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSB8fCBrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX2tleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcbiAgICAgICAgbGV0IF9fa2V5cyA9IF9rZXlzLnNsaWNlKCk7XG4gICAgICAgIGxldCBfaXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgICAgIGxldCBoYXNLZXk7XG5cbiAgICAgICAgX19rZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc0tleSA9IHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRhdGEgJiYgdW5iaW5kKGRhdGEsIFtdLmNvbmNhdChrZXlzKSk7XG4gICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKGtleXMpO1xuXG4gICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCBlKTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUpIHtcbiAgICBpZiAodGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKSkge1xuICAgICAgbm9kZVsobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGUgbm9kZSBpbml0aWFsaXppbmdcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKTtcblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpO1xuICAgIGxldCBub2RlTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5vZGUubm9kZU5hbWUpO1xuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZiAoZXZlbnROYW1lICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYgKG5vZGUuX19leHByZXNzaW9uKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1tub2RlTmFtZV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBjb21wb25lbnQuX19ldmFsdWF0ZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZiAobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSBub2RlWyhub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2ludGVycG9sYXRlQXR0cmlidXRlcyhlbCwgYXR0cmlidXRlT2YgPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUoYXR0cnNbaV0sIGVsLCBhdHRyaWJ1dGVPZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhdHRyaWJ1dGVzIGFzIHByb3h5XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVmaW5lQXR0cmlidXRlcygpIHtcbiAgICBjb25zdCBjaGFuZ2VBdHRyaWJ1dGUgPSAoa2V5LCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGlmICh0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgICBub2RlLl9fZXZlbnQudW5iaW5kKCk7XG4gICAgICAgICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX3VuYmluZEJ5Tm9kZXMoW25vZGVdKTtcbiAgICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmF0dHJzID0gbmV3IFByb3h5KHRoaXMuX19hdHRycywge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSAnX19pc1Byb3h5Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuXG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJveHkgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxldCByZWFsVGFyZ2V0ICA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcblxuICAgICAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdChyZWFsVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmVhbFRhcmdldFtrZXldID0gQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uKHJlYWxUYXJnZXRba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICghdXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgbm90QmluZGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2JpbmROb2RlKEFraWxpLl9fZXZhbHVhdGlvbi5saXN0LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZyk7XG5cbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5fX2xpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV0pIHtcbiAgICAgICAgICB0aGlzLl9fc3RvcmVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG5cbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2xpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICBcbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuX190YXJnZXQ7XG4gICAgfVxuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaW5rID0gbGlua3NbaV07XG4gICAgICB0aGlzLl9fc3RvcmUobGluay5uYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmUobmFtZSwgdmFsdWUpIHsgIFxuICAgIHN0b3JlLl9fdGFyZ2V0W25hbWVdID0gdmFsdWU7XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX2xpbmtzW25hbWVdO1xuXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGluayA9IGxpbmtzW2ldO1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICBpZihjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgbGluay5mbih2YWx1ZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcbiAgICAgIGNvbXBvbmVudC5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgICAgICBcbiAgICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqL1xuICBfX2xpbmtCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYExpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgdGhpcy5zY29wZS5fX3NldChrZXlzLCBzdG9yZVtuYW1lXSk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgaW5mbztcblxuICAgIGlmKCF0aGlzLl9fbGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2xpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX2xpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFBa2lsaS5fX2xpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX2xpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcgfTtcbiAgICB0aGlzLl9fbGlua3Nba2V5U3RyaW5nXS5wdXNoKGluZm8pO1xuICAgIEFraWxpLl9fbGlua3NbbmFtZV0ucHVzaChpbmZvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIF9fbGlua0J5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBmbihzdG9yZVtuYW1lXSk7XG5cbiAgICBpZighQWtpbGkuX19saW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19saW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fbGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWtpbGkuX19saW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqL1xuICBfX3VubGlua0J5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3IgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19saW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19saW5rc1tyZXMubmFtZV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgIT09IHRoaXMgfHwgcmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcblxuICAgICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgayA9IGxpbmtzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gbGlua3Nba107XG5cbiAgICAgICAgaWYobGluay5jb21wb25lbnQgPT09IHRoaXMgJiYgbGluay5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgICAgbGlua3Muc3BsaWNlKGssIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIEFraWxpLl9fbGlua3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fbGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBfX3VubGlua0J5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZighQWtpbGkuX19saW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fbGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19saW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG5cbiAgICBjb25zdCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KHZhbHVlKSAmJiAhdXRpbHMuaXNTY29wZVByb3h5KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQWtpbGkuU2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICBpZiAodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHRhcmdldCA9IHZhbHVlLl9fdGFyZ2V0O1xuXG4gICAgICAgIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBpZiAodmFsdWUuX19jb21wb25lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFraWxpLlNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UsIHRydWUpOyAgICAgICAgICBcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdO1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHRhcmdldCwgcGFyZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IHJlcyA9IG9ic2VydmUodmFsdWUsIHN0YXJ0S2V5cyB8fCBbXSk7XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldID0ge1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXM6IGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0udmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgYmluZC5zcGxpY2UobCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHM6IHBhcmVudHMsXG4gICAgICBrZXlzOiBrZXlzLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgbm90QmluZGluZzogbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZiAoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBsZXQgY29weSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSB1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCBjb3B5KTtcblxuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcblxuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuXG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjb3B5OiBjb3B5LFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5czoga2V5c1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQmluZCBkYXRhIHdpdGggdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmQoa2V5cywgZGF0YSkge1xuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKGxhc3QsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgb2JqID0ge19fZGF0YTogW119O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmQoa2V5cykge1xuICAgIGxldCBiaW5kID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBiaW5kLl9fZGF0YVtpXS5ub2RlO1xuXG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgdW5iaW5kID0gKG9iaikgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG5cbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gICAgdGhpcy5fX2NsZWFyRW1wdHlCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgY29uc3QgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrICE9ICdfX2RhdGEnKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmpba10pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGVhcihvYmpba10sIG9iaiwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpbmtzXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyTGlua3MoKSB7XG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19saW5rcztcblxuICAgIGZvcihsZXQga2V5IGluIGxpbmtzKSB7XG4gICAgICBsZXQgYXJyID0gbGlua3Nba2V5XTtcblxuICAgICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gYXJyW2ldO1xuICBcbiAgICAgICAgaWYobGluay5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbigpIHtcbiAgICBjb25zdCByZW1vdmUgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgcmVtb3ZlKGNoaWxkLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkLl9fYWtpbGkuX19yZW1vdmUoKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKCkge1xuICAgIHRoaXMuX19kZXRhY2goKTtcbiAgICB0aGlzLl9fY2xlYXJMaW5rcygpO1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVtb3ZlZCgpOyAgICBcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fc2NvcGUuX19uYW1lKTtcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9fZXZhbHVhdGVQYXJlbnQgJiYgIXRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuX191bmJpbmRCeU5vZGVzKFtdLnNsaWNlLmNhbGwodGhpcy5lbC5hdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGNoaWxkLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goYXR0cnNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmQoY2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLmVsLmNoaWxkTm9kZXMpO1xuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJlbnQoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IGZhbHNlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChwYXJlbnQpID0+IHtcbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgcGFyZW50Ll9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHRvIHRoZSBzdG9yZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaW5rKG5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19saW5rQnlGdW5jdGlvbihuYW1lLCBoYW5kbGVyKTogdGhpcy5fX2xpbmtCeUtleXMobmFtZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGluayhuYW1lLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5saW5rQnlGdW5jdGlvbihuYW1lLCBoYW5kbGVyKTogdGhpcy5fX3VubGlua0J5S2V5cyhuYW1lLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgc3RvcmUobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX3N0b3JlKG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgY2hhbmdlZChrZXksIHZhbHVlKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudC5qcyIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudC1lbWl0dGVyLmpzJ1xuXG5jb25zdCB1dGlscyA9IHt9O1xuXG4vKipcbiAqIENyZWF0ZSBjbGFzcyBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInJlZCBhY3RpdmVcIlxuICogdXRpbHMuY2xhc3Moe3JlZDogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBncmVlbjogZmFsc2V9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5jbGFzcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgY2xhc3NlcyA9IFtdO1xuXG4gIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICB2YWwgJiYgY2xhc3Nlcy5wdXNoKGspO1xuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgc3R5bGUgYXR0cmlidXRlIGZyb20gYW4gb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJjb2xvcjpyZWQ7d2lkdGg6MTBweFwiXG4gKiB1dGlscy5zdHlsZSh7Y29sb3I6IFwicmVkXCIsIGJhY2tncm91bmQ6IGZhbHNlLCB3aWR0aDogXCIxMHB4XCJ9KTtcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5zdHlsZSA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBzdHlsZXMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgdmFsID0gb2JqW2tdO1xuXG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjF9LCB7eDoxMX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4OjF9LCB7eDoyfSwge3g6M30sIHt4OjExfV0sICcxJywgWyd4J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6e3k6MX19XVxuICogdXRpbHMuZmlsdGVyKFt7eDp7eToxfX0sIHt4Ont5OjJ9fV0sICcxJywgWyd4JywgJ3knXSk7XG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB8ZnVuY3Rpb259IGhhbmRsZXIgLSB0eXBlIG9mIGZpbHRlcmluZ1xuICogQHBhcmFtIHtzdHJpbmdbXXxzdHJpbmd9IFtrZXlzXSAtIGZpbHRlciBpbiB0aGUga2V5cyBpZiBhcnJheSBlbGVtZW50cyBhcmUgb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gcmV0dXJucyBvdGhlciBhcnJheVxuICovXG51dGlscy5maWx0ZXIgPSBmdW5jdGlvbiAoYXJyLCBoYW5kbGVyLCBrZXlzID0gW10pIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgIGtleXMgPSBba2V5c107XG4gIH1cblxuICBpZiAoIWhhbmRsZXIpIHtcbiAgICByZXR1cm4gWy4uLmFycl07XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgdmFsID0ga2V5cy5sZW5ndGg/IHRoaXMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgaXRlbSk6IGl0ZW07XG5cbiAgICBpZiAoIXZhbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFsICs9ICcnO1xuXG4gICAgaWYgKCh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nKSAmJiBoYW5kbGVyKGl0ZW0pKSB7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsLm1hdGNoKGhhbmRsZXIgfHwgJycpKSB7XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV1cbiAqIHV0aWxzLnNvcnQoW3t4OiB7eTogMn19LCB7eDoge3k6IDF9fV0sIFtbJ3gnLCAneSddXSwgW3RydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gWy4uLmFycl07XG5cbiAgaWYgKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZiAoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmIChpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG5cbiAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfTtcblxuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGNoZWNrKGEsIGIsIG9yZGVyW2ldID09PSBmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGNvbXBvbmVudCBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW25lc3RlZD10cnVlXSAtIGRlZXAgY29weSBpZiBpcyB0cnVlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtlbnVtZXJhYmxlPWZhbHNlXSAtIGluY2x1ZGluZyBlbnVtZXJhYmxlIHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5jb3B5ID0gZnVuY3Rpb24odmFsdWUsIG5lc3RlZCA9IHRydWUsIGVudW1lcmFibGUgPSBmYWxzZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQob2JqKSB7XG4gICAgbGV0IGtleXMgPSBlbnVtZXJhYmxlPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIGxldCBuZXdPYmogPSBBcnJheS5pc0FycmF5KG9iaik/IFtdOiB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cblxuICAgIG9iaiA9IG5ld09iajtcblxuICAgIGlmICghbmVzdGVkKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9ialtrXSA9IG5leHQob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIG5leHQodmFsdWUpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGF0dHJpYnV0ZSBhcHByb3ByaWF0ZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0IEV2ZW50XSc7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZSArICcnO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZiAoKGEgaW5zdGFuY2VvZiBEYXRlKSAmJiAoYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYS50b1N0cmluZygpID09PSBiLnRvU3RyaW5nKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYSA9PT0gbnVsbCB8fCBiID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYSA9PT0gYjtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gYSkge1xuICAgICAgaWYgKCFhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY29tcGFyZShhW2tdLCBiW2tdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0aGUgY3VycmVudCB2YWx1ZSB3aXRoIHRoZSBwcmV2aW91c1xuICpcbiAqIEBwYXJhbSB7Kn0gY3VycmVudCAtIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzIC0gdGhlIGN1cnJlbnQgdmFsdWUgY29weVxuICogQHBhcmFtIHsqfSBwcmV2aW91c0NvcHkgLSB0aGUgcHJldmlvdXMgdmFsdWUgY29weVxuICogQHBhcmFtIHsqfSBbY3VycmVudENvcHldIC0gdGhlIGN1cnJlbnQgdmFsdWUgY29weVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlID0gZnVuY3Rpb24oY3VycmVudCwgcHJldmlvdXMsIHByZXZpb3VzQ29weSwgY3VycmVudENvcHkpIHtcbiAgaWYgKGN1cnJlbnQgIT09IHByZXZpb3VzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZShhcmd1bWVudHMubGVuZ3RoID09IDM/IGN1cnJlbnRDb3B5OiB0aGlzLmNvcHkoY3VycmVudCksIHByZXZpb3VzQ29weSk7XG59O1xuXG4vKipcbiAqIEVuY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJmFtcCBtZVwiXG4gKiB1dGlscy5lbmNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmVuY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHZhbHVlO1xuXG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNvZGUgaHRtbCBlbnRpdGllc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwieW91ICYgbWVcIlxuICogdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKCd5b3UgJmFtcCBtZScpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy5kZWNvZGVIdG1sRW50aXRpZXMgPSBmdW5jdGlvbihodG1sKSB7XG4gIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbGV0IHZhbHVlO1xuXG4gIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gIHZhbHVlID0gZWwudmFsdWU7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gZGFzaCB0byBjYW1lbCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0cmluZyBmcm9tIGNhbWVsIHRvIGRhc2ggY2FzZSBmb3JtYXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG51dGlscy50b0Rhc2hDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobSwgYykgPT4gYC0ke2MudG9Mb3dlckNhc2UoKX1gKTtcbn07XG5cbi8qKlxuICogR2V0IG5lc3RlZCBvYmplY3QgcHJvcGVydHkgYnkgYXJyYXkga2V5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZ2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGlmIChvW2tdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAoaSA9PSBsZW5ndGgpICYmIChjdXJyZW50ID0gb1trXSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqIENoZWNrIG5lc3RlZCBvYmplY3RzIHRyZWUgaGFzIHByb3BlcnR5IG9yIG5vdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHRydWVcbiAqIHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaGFzUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QpIHtcbiAgbGV0IGhhcyA9IGZhbHNlO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGhhcyA9IG8uaGFzT3duUHJvcGVydHkoaykpO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBoYXM7XG59O1xuXG4vKipcbiAqIFNldCBuZXN0ZWQgb2JqZWN0cyB0cmVlIHByb3BlcnR5XG4gKiBSZXR1cm5zIGNoYW5nZWQgcHJvcGVydHkgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3k6IDZ9XG4gKiB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgKGxhc3QsIHZhbCkgPT4gbGFzdD8gNjogKHZhbCB8fCB7fSkpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuc2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZShmdW5jdGlvbihvLCBrKSB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4gY3VycmVudCA9IG9ba10gPSBmbihpID09IGxlbmd0aCk7XG4gICAgfVxuXG4gICAgb1trXSA9IGZuKGkgPT0gbGVuZ3RoLCBvW2tdKTtcbiAgICBjdXJyZW50ID0gbztcblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKlxuICogRGVsZXRlIHByb3BlcnR5IGZyb20gbmVzdGVkIG9iamVjdHMgdHJlZVxuICogUmV0dXJucyBkZWxldGVkIHByb3BlcnR5IHZhbHVlXG4gKiBZb3UgY2FuIGNhbmNlbCBkZWxldGluZyBpZiB3aWxsIHJldHVybiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0sIHZhbCA9PiB2YWwgIT0gNSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0LCBmbikge1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCB2YWx1ZTtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcblxuICAgICAgaWYgKCFmbiB8fCBmbih2YWx1ZSkpIHtcbiAgICAgICAgZGVsZXRlIG9ba107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5cbnV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgb3duIHByb3BlcnR5IHRhcmdldCBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG51dGlscy5nZXRPd25Qcm9wZXJ0eVRhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IGNoZWNrID0gKG9iaikgPT4ge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBsZXQgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcblxuICAgIGlmICghcHJvdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjaGVjayhwcm90byk7XG4gIH07XG5cbiAgcmV0dXJuIGNoZWNrKHRhcmdldCk7XG59O1xuXG4vKipcbiAqIENsZWFyIHZhbHVlIHByb3h5IGlmIGl0IGV4aXN0ZW50XG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNsZWFyU2NvcGVQcm94eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IGNsZWFyID0gKG9iaikgPT4ge1xuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChvYmpba10uX19pc1Byb3h5KSB7XG4gICAgICAgICAgb2JqW2tdID0gb2JqW2tdLl9fdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXIob2JqW2tdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgaWYgKHZhbHVlLl9faXNQcm94eSkge1xuICAgIHZhbHVlID0gdmFsdWUuX190YXJnZXQ7XG4gIH1cblxuICBjbGVhcih2YWx1ZSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuXG4vKipcbiAqIEdlbmVyYXRlIHJhbmRvbSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNyZWF0ZVJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uKGxlbmd0aCA9IDE2LCBmbiA9IG51bGwpIHtcbiAgbGV0IHN0ciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCBsZW5ndGggKyAyKTtcbiAgbGV0IHZhbCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC42Nikge1xuICAgICAgdmFsICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhbCArPSBzdHJbaV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGZuICYmIGZuKHZhbCkpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSYW5kb21TdHJpbmcobGVuZ3RoLCBmbik7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvdXRpbHMuanMiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yc1BhdHRlcm46IC9eKFteMjNdKXw0MDQvLFxuICAgICAgLi4uKGRlZmF1bHRzIHx8IHt9KVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU2VuZCByZXF1ZXN0IHdpdGggYW55IG1ldGhvZFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHF1ZXJ5KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHVybDtcbiAgICAgIGxldCB4aHI7XG5cbiAgICAgIG9wdGlvbnMgPSB7Li4udGhpcy5kZWZhdWx0cywgLi4uKG9wdGlvbnMgfHwge30pfTtcblxuICAgICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAodHlwZW9mIG9wdGlvbnMub25TdGFydCA9PSAnZnVuY3Rpb24nKSAmJiBvcHRpb25zLm9uU3RhcnQoeGhyKTtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLnRyYW5zZm9ybUJlZm9yZShvcHRpb25zKTtcbiAgICAgIHVybCA9IHRoaXMuYmFzZVVybD8gYCR7dGhpcy5iYXNlVXJsfSR7b3B0aW9ucy51cmwucmVwbGFjZSgvXlxcLy8sICcnKX1gOiBvcHRpb25zLnVybDtcbiAgICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwsIHRydWUsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG5cbiAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5qc29uKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZSB8fCAnanNvbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcHRpb25zLmZvcm0pIHtcbiAgICAgICAgb3B0aW9ucy5ib2R5ID0gdGhpcy5jcmVhdGVGb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIGZvciAobGV0IGsgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIG9wdGlvbnMuaGVhZGVyc1trXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgIGxldCBzdHIgPSB0aGlzLnBhcmFtc1RvUXVlcnkob3B0aW9ucy5wYXJhbXMpO1xuXG4gICAgICAgIGlmIChzdHIpIHtcbiAgICAgICAgICB1cmwgKz0gXCI/XCIgKyBzdHI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5vblByb2dyZXNzKHhocik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IHRoaXMudHJhbnNmb3JtQWZ0ZXIoeGhyKTtcblxuICAgICAgICBpZiAoKHhoci5zdGF0dXMgKyAnJykubWF0Y2gob3B0aW9ucy5zdGF0dXNFcnJvcnNQYXR0ZXJuKSkge1xuICAgICAgICAgIGxldCBlcnIgPSBuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuXG4gICAgICAgICAgZXJyLnJlc3BvbnNlID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSAoKSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFJlcXVlc3QgdG8gXCIke3VybH1cIiB0aW1lZCBvdXRgKSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBwYXJhbXNUb1F1ZXJ5KG9iaikge1xuICAgIGxldCBzZXAgPSAnJic7XG4gICAgbGV0IGVxID0gJz0nO1xuXG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoKGspID0+IHtcbiAgICAgIGxldCBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICBrcyA9IGVuY29kZVVSSUNvbXBvbmVudChrKTtcblxuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodik7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXMob2JqW2tdKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgIG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvcHQuam9pbihzZXApO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgcXVlcnkgc3RyaW5nIHRvIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJhbXNGcm9tUXVlcnkoc3RyKSB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IGFtcHMgPSBzdHIuc3BsaXQoJyYnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYW1wcy5sZW5ndGg7IGkgPGw7IGkrKykge1xuICAgICAgbGV0IGVxcyA9ICBhbXBzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBsZXQga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1swXSk7XG4gICAgICBsZXQgdmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGVxc1sxXSk7XG5cbiAgICAgIGlmICgha2V5KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICBxdWVyeVtrZXldLnB1c2godmFsKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHF1ZXJ5W2tleV0pIHtcbiAgICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldLCB2YWxdO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBtdWx0aXBhcnQgZm9ybSBkYXRhIGZyb20gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtGb3JtRGF0YX0gW2RhdGFdXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbmFtZXNwYWNlXVxuICAgKlxuICAgKiBAcmV0dXJucyB7Rm9ybURhdGF9XG4gICAqL1xuICBjcmVhdGVGb3JtRGF0YShvYmosIGRhdGEgPSBudWxsLCBuYW1lc3BhY2UgPSAnJykge1xuICAgIGxldCBmZCA9IGRhdGEgfHwgbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSAmJiBvYmpba10pIHtcbiAgICAgICAgbGV0IGtleSA9IG5hbWVzcGFjZT8gbmFtZXNwYWNlICsgJ1snICsgayArICddJzogaztcblxuICAgICAgICBpZiAob2JqW2tdIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXS50b0lTT1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KG9ialtrXSkpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9ialtrXSwgZmQsIGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBiZWZvcmUgYSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGFmdGVyIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1hNTEh0dHBSZXF1ZXN0fSB4aHJcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHRyYW5zZm9ybUFmdGVyKHhocikge1xuICAgIHJldHVybiB7XG4gICAgICB4aHI6IHhocixcbiAgICAgIGRhdGE6IHhoci5yZXNwb25zZSxcbiAgICAgIHN0YXR1czogeGhyLnN0YXR1c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgR0VUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBERUxFVEUgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZGVsZXRlKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnREVMRVRFJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBPU1QgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcG9zdCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUFVUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHB1dCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BVVCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQQVRDSCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwYXRjaCh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ1BBVENIJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG59XG5cbmNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuXG5yZXF1ZXN0Ll9faW5zdGFuY2VzID0ge307XG5cbi8qKlxuICogQWRkIG5ldyByZXF1ZXN0IGluc3RhbmNlIHRvIHRoZSBtYWluIHNlcnZpY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtSZXF1ZXN0fSBpbnN0YW5jZVxuICovXG5yZXF1ZXN0LmFkZEluc3RhbmNlID0gZnVuY3Rpb24obmFtZSwgaW5zdGFuY2UpIHtcbiAgdGhpcy5fX2luc3RhbmNlc1tuYW1lXSA9IGluc3RhbmNlO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yZXF1ZXN0LnJlbW92ZUluc3RhbmNlID0gZnVuY3Rpb24obmFtZSkge1xuICBkZWxldGUgdGhpcy5fX2luc3RhbmNlc1tuYW1lXTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCAndXNlJywge1xuICBnZXQ6ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdC5fX2luc3RhbmNlcztcbiAgfVxufSk7XG5cbnJlcXVlc3QuUmVxdWVzdCA9IFJlcXVlc3Q7XG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvbCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd1bCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Ym9keScsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Zm9vdCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIExvb3ApO1xuICAgIEFraWxpLmNvbXBvbmVudCgnbG9vcCcsIExvb3ApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5fX2l0ZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9fa2V5ID0gbnVsbDtcbiAgICB0aGlzLl9fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvcnMgPSB7fTtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZWRJbihkYXRhKSB7XG4gICAgdGhpcy5kcmF3KGRhdGEpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmNyZWF0ZUl0ZXJhdG9yKCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmRyYXcodGhpcy5hdHRycy5pbik7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvcigpIHtcbiAgICBsZXQgZWw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTsgICAgICBcbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMuZWwuaW5uZXJIVE1MOyBcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7ICAgICBcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIGxldCBjb21wb25lbnROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcblxuICAgIGlmIChjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghKGNvbXBvbmVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpO1xuXG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBlbC5uZXh0U2libGluZztcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MO1xuICAgIGVsID0gZWwuY29udGVudC5maXJzdENoaWxkO1xuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgbG9vcChrZXksIHZhbHVlLCBrZXlzLCBpbmRleCkge1xuICAgIHRoaXMuX19pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX19rZXkgPSBrZXk7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgbGV0IGhhc2ggPSAnJztcbiAgICBsZXQgZm91bmQgPSAwO1xuXG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiB2YWx1ZS5fX2hhc2gpIHtcbiAgICAgIGhhc2ggPSB2YWx1ZS5fX2hhc2g7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXRlcmF0b3JzW2hhc2hdKSB7XG4gICAgICBrZXkgPSBoYXNoO1xuICAgICAgZm91bmQgPSAyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLml0ZXJhdG9yc1trZXldKSB7XG4gICAgICBmb3VuZCA9IDE7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1trZXldO1xuXG4gICAgICBpZiAoZm91bmQgPT0gMikge1xuICAgICAgICBsZXQgY1ZhbHVlID0gaXRlcmF0b3IuY29tcGFyc2lvbi52YWx1ZTtcbiAgICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2luZGV4ICE9PSBpdGVyYXRvci5pbmRleCkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBjVmFsdWUsIGNDb3B5LCB0aGlzLl9fY29tcGFyaXNvblZhbHVlKSkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzW2tleV0gPSBpdGVyYXRvcjtcbiAgICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2tleV07XG5cbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZXJhdG9yUmVmID0gaXRlcmF0b3IuZWwubmV4dFNpYmxpbmc7XG4gICAgICBpdGVyYXRvci5fX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzLml0ZXJhdG9yUmVmKTtcbiAgICBBa2lsaS5jb21waWxlKGVsKTtcblxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICghdmFsdWUuX19oYXNoKSB7XG4gICAgICAgIGhhc2ggPSB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMzIsIChzdHIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvcnNbc3RyXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbHVlLCAnX19oYXNoJywge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBoYXNoXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2hhc2hdID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2hhc2hdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGxldCBlVmFsdWUgPSB0eXBlb2YgdGhpcy5fX3ZhbHVlID09ICdzdHJpbmcnPyBgXCIke3RoaXMuX192YWx1ZX1cImA6IHRoaXMuX192YWx1ZTtcblxuICAgICAgICBsZXQgYXJncyA9IFtcbiAgICAgICAgICBgXCJGb3JcIiBjb21wb25lbnQgbG9vcCBpdGVtcyBzaG91bGQgaGF2ZSBcIm9iamVjdFwiIHR5cGUgZm9yIGhpZ2hlciBwZXJmb3JtYW5jZS5gLFxuICAgICAgICAgIGBZb3UgY2FuIGNoYW5nZSAke2VWYWx1ZX0gdG8ge3ZhbHVlOiAke2VWYWx1ZX19LCBmb3IgZXhhbXBsZS5gXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUud2FybiwgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIGtleXNba2V5XSA9IHRoaXMuX19pdGVyYXRvcjtcbiAgICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yc1trZXldO1xuICAgIH1cblxuICAgIHJldHVybiBlbC5fX2FraWxpO1xuICB9XG5cbiAgZHJhdyhkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9ICdvYmplY3QnIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQga2V5cyA9IHt9O1xuICAgIGxldCBpbmRleEtleXMgPSBbXTtcbiAgICBsZXQgbGFzdEVsZW1lbnQgPSBudWxsO1xuICAgIGxldCBsYXN0ID0gdGhpcy5lbC5jaGlsZHJlblt0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKGxhc3QgJiYgIShsYXN0Ll9fYWtpbGkgaW5zdGFuY2VvZiBMb29wKSkge1xuICAgICAgbGFzdEVsZW1lbnQgPSBsYXN0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChpLCBkYXRhW2ldLCBrZXlzLCBpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBmb3IgKGxldCBrIGluIGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleEtleXMucHVzaCh0aGlzLmxvb3AoaywgZGF0YVtrXSwga2V5cywgaSkpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpbmRleEtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSBpbmRleEtleXNbaV07XG5cbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaXRlcmF0b3IuZWwpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpKTtcbiAgICB9XG5cbiAgICBsYXN0RWxlbWVudCAmJiB0aGlzLmVsLmFwcGVuZENoaWxkKGxhc3RFbGVtZW50KTtcblxuICAgIGZvciAobGV0IGsgaW4gdGhpcy5pdGVyYXRvcnMpIHtcbiAgICAgIGlmICghdGhpcy5pdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlcmF0b3JzW2tdLl9fZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0b3JzID0ga2V5cztcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIExvb3AgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmlzRm9yID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG5cbiAgICBpZiAoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCgpO1xuICAgIHRoaXMuc2V0S2V5KCk7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuXG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmlzRm9yICYmIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHNldEtleSgpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlKTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaXRlcmF0ZShpbmRleCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ3ZhbHVlJztcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlZEZvY3VzKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRGb2N1cyh2YWx1ZSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdmb2N1cycpICYmIHRoaXMuc2V0Rm9jdXModGhpcy5hdHRycy5mb2N1cyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0Rm9jdXModmFsdWUpIHtcbiAgICB2YWx1ZT8gdGhpcy5zZXRFbGVtZW50Rm9jdXMoKTogdGhpcy5zZXRFbGVtZW50Qmx1cigpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAodGhpcy5lbFt0aGlzLnZhbHVlS2V5XSAhPT0gdmFsdWUpICYmICh0aGlzLmVsW3RoaXMudmFsdWVLZXldID0gdmFsdWUgPT09IDA/ICcwJzogKHZhbHVlIHx8ICcnKSk7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudEJsdXIoKSB7XG4gICAgdGhpcy5lbC5ibHVyKCk7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy90ZXh0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyb3V0ZScsIFJvdXRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgbGV0IHN0YXRlID0gdHJhbnNpdGlvbi5wYXRoLnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSB0cmFuc2l0aW9uLnBhdGgucGFyYW1zO1xuICAgIGxldCB1cmwgPSB0cmFuc2l0aW9uLnVybDtcbiAgICBsZXQgcXVlcnkgPSB0cmFuc2l0aW9uLnF1ZXJ5O1xuICAgIGxldCBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aCkge1xuICAgICAgaWYgKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlLl9fdHJhbnNpdGlvbiA9IHtcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgc3RhdGU6IHN0YXRlLm5hbWUsXG4gICAgICAgIGRhdGE6IHRyYW5zaXRpb24ucGF0aC5kYXRhLFxuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgcGFyZW50OiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24odHJhbnNpdGlvbi5wYXRoKVxuICAgICAgfSxcbiAgICAgIHBhcmFtczogdHJhbnNpdGlvbi5wYXJhbXMsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgIH07XG5cbiAgICBpZiAoIXRyYW5zaXRpb24ucGF0aC5sb2FkZWQpIHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS50ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGNvbXBvbmVudD4ke3N0YXRlLnRlbXBsYXRlfTwvY29tcG9uZW50PmA7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnRlbXBsYXRlVXJsKSB7XG4gICAgICBwID0gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDxjb21wb25lbnQ+JHtyZXMuZGF0YX08L2NvbXBvbmVudD5gO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbCwgY29tcG9uZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gc2VuZGluZyBkYXRhLiBXaWxsIGJlIGluIHRoZSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICovXG4gIHRyaWdnZXIoZGF0YSwgb3B0aW9ucyA9IHsgYnViYmxlczogdHJ1ZSB9LCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLmluRXZhbHVhdGluZygpKSB7XG4gICAgICB0aGlzLmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHRoaXMubmFtZSwge2RldGFpbDogZGF0YSwgLi4ub3B0aW9uc30pKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IF9FdmVudCAtIGNsYXNzIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKi9cbiAgZGlzcGF0Y2goX0V2ZW50LCBvcHRpb25zID0geyBidWJibGVzOiB0cnVlIH0sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgX0V2ZW50KHRoaXMubmFtZSwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBldmVudCBjYWxsYmFjayBkb2Vzbid0IHJ1biByZWN1cnNpdmVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpbkV2YWx1YXRpbmcoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbXBvbmVudC5fX2V2YWx1YXRpbmdFdmVudDtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcXVlcnksIGhhc2ggPSAnJywgcHJldmlvdXMgPSBudWxsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IFtdO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVkaXJlY3QoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICByb3V0ZXIuc3RhdGUuYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucm91dGVzLnB1c2gocGF0aCk7XG4gICAgdGhpcy5zdGF0ZXMucHVzaChwYXRoLnN0YXRlKTtcbiAgICB0aGlzLnBhcmFtcyA9ICFwYXRoLnBhcmVudD8gcGF0aC5wYXJhbXM6IHsuLi5wYXRoLnBhcmVudC5wYXJhbXMsIC4uLnBhdGgucGFyYW1zfTtcbiAgfVxuXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzLmluZGV4T2Yoc3RhdGUpICE9IC0xO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG5yb3V0ZXIuYmFzZVVybCA9IFwiL1wiO1xucm91dGVyLnN0YXRlcyA9IFtdO1xucm91dGVyLmhhc2hNb2RlID0gdHJ1ZTtcbnJvdXRlci5fX3JlZGlyZWN0cyA9IDA7XG5yb3V0ZXIuX19pbml0ID0gZmFsc2U7XG5yb3V0ZXIuX19vcHRpb25zID0ge307XG5yb3V0ZXIuX19wYXJhbVJlZ2V4ID0gLyg6KFtcXHdcXGQtXSspKS9nO1xucm91dGVyLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgaGFuZGxlcjogKHRyYW5zaXRpb24pID0+IHt9XG4gIH07XG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsKSB7XG4gICAgb3B0aW9ucy5hYnN0cmFjdCA9IHRydWU7XG4gIH1cblxuICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0c2ApXG4gIH1cblxuICB0aGlzLnNldFN0YXRlKG5hbWUsIHBhdHRlcm4sIHsuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc30pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgZnJvbSB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgdG8gdGhlIHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcblxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7bmFtZX1gKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoKTtcblxuICBpZiAoIW9wdGlvbnMucmVsb2FkICYmIHVybCA9PT0gdGhpcy5nZXRVcmwoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5zZXRVcmwodXJsKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gYW55IHdheVxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgYnkgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIubG9jYXRpb24gPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMgPSB7IHJlbG9hZDogZmFsc2UgfSkge1xuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgaWYgKHRoaXMuaGFzaE1vZGUpIHtcbiAgICBsZXQgY3VycmVudCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgICBjdXJyZW50ID09PSB1cmwgJiYgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xuICB9XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlO1xuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG5cbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGxldCBzdGF0ZXMgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICBzdGF0ZXNbc3RhdGUubmFtZV0gPSBzdGF0ZTtcbiAgICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICAgIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gICAgcGFyZW50cy5wb3AoKTtcbiAgICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICAgIGxldCBwYXJlbnQgPSBzdGF0ZXNbcGFyZW50TmFtZV07XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG5cbiAgcm91dGVyLnN0YXRlcy5wdXNoKHN0YXRlKTtcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsUXVlcnkoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybFF1ZXJ5KCk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB1cmwgYnkgZGF0YVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIHJldHVybiBwYXJhbXNbdl0gfHwgJyc7XG4gIH0pO1xuXG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHVybCk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGhhc2ggPSAoaGFzaCB8fCAnJykucmVwbGFjZSgnIycsICcnKTtcblxuICBpZiAoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgYWxsIHJvdXRlciBkZXBlbmRlbmNpZXNcbiAqL1xucm91dGVyLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcblxuICAgIHJldHVybiAnKFteXFxcXC9dKiknO1xuICB9KTtcblxuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4pO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIHYpID0+IHtcbiAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICBpKys7XG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh0aGlzLmdldFVybCgpLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcoW15cXFxcL10qKScpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeJyArIHVybFBhdHRlcm4gKyAnXFwvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7XG5cbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuXG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RhdGU6IHN0YXRlLCAuLi5jb250ZW50fTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fX2Rpc2FibGVDaGFuZ2UpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVDaGFuZ2U7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpO1xuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBxdWVyeSwgaGFzaCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuXG4gIGNvbnN0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4ge1xuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSBjb250ZW50LnBhcmFtcztcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShzdGF0ZS5sZXZlbCk7XG5cbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldmVsKys7XG5cbiAgICBsZXQgaGFzU3RhdGUgPSBwcmV2VHJhbnNpdGlvbiAmJiBwcmV2VHJhbnNpdGlvbi5oYXNTdGF0ZShzdGF0ZSk7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmIChoYXNTdGF0ZSkge1xuICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24uZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgbGV0IHByZXYgPSB7IHBhcmFtczogcm91dGUucGFyYW1zLCBxdWVyeTogcm91dGUucXVlcnksIGhhc2g6IHJvdXRlLmhhc2ggfTtcbiAgICAgIGxldCBjdXJyZW50ID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH07XG5cbiAgICAgIGlzRGlmZmVyZW50ID0gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gICAgfVxuXG4gICAgbGV0IGlzSGlzdG9yeSA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gdW5kZWZpbmVkICYmICFpc0RpZmZlcmVudDtcbiAgICBsZXQgaXNSZWxvYWQgPSB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgPT09IGZhbHNlO1xuXG4gICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9ICEoaGFzU3RhdGUgJiYgKGlzSGlzdG9yeSB8fCBpc1JlbG9hZCkpO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbikpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmIChzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfVxuIFxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4gb25FbmQgJiYgb25FbmQoZXJyKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaGFzaE1vZGUgJiYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zZXRVcmwodGhpcy5kZWZhdWx0VXJsKTtcbiAgICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF0aGlzLl9fb3B0aW9ucy5zYXZlU2Nyb2xsUG9zaXRpb24gJiYgIXRyYW5zaXRpb24uaGFzaCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19vcHRpb25zID0ge307XG4gICAgICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcblxuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZXZlbCwgbCA9IHByZXZUcmFuc2l0aW9uLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXNbaV07XG4gICAgICAgICAgXG4gICAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywge1xuICAgICAgICBkZXRhaWw6IHRyYW5zaXRpb25cbiAgICAgIH0pKTtcblxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuY29uc3QgdGFyZ2V0ID0ge307XG5cbmNvbnN0IHN0b3JlID0gbmV3IFByb3h5KHRhcmdldCwge1xuICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgIGlmIChrZXkgPT0gXCJfX3RhcmdldFwiKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgfSxcbiAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3Quc3RvcmUoa2V5LCB2YWx1ZSk7XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3Quc3RvcmUoa2V5LCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4uL3NlcnZpY2VzL3JvdXRlci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3N0YXRlXTpub3QoW3VybF0pLFt1cmxdOm5vdChbc3RhdGVdKSc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVsb2FkJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2EnLCBBKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgIHRoaXMuaGFzaCA9ICcnO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuaXNVcmwgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndXJsJyk7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuc2V0VXJsKHVybCk7XG4gICAgdGhpcy5yZXNldEhyZWYodXJsKTtcbiAgfVxuXG4gIGNoYW5nZWRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkUGFyYW1zKHBhcmFtcykge1xuICAgIHRoaXMuc2V0UGFyYW1zKHBhcmFtcyk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRRdWVyeShxdWVyeSkge1xuICAgIHRoaXMuc2V0UXVlcnkocXVlcnkpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkSGFzaChxdWVyeSkge1xuICAgIHRoaXMuc2V0SGFzaChxdWVyeSk7XG4gICAgdGhpcy5yZXNldEhyZWYoKTtcbiAgfVxuXG4gIGNoYW5nZWRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldFF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgY2hhbmdlZFJlbG9hZCh2YWwpIHtcbiAgICB0aGlzLnNldFJlbG9hZCh2YWwpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNVcmwpIHtcbiAgICAgICAgcm91dGVyLmxvY2F0aW9uKHRoaXMuYXR0cnMudXJsLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnN0YXRlKHRoaXMuc3RhdGUubmFtZSwgdGhpcy5wYXJhbXMsIHRoaXMucXVlcnksIHRoaXMuaGFzaCwgIHRoaXMub3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdzdGF0ZScpICYmIHRoaXMuc2V0U3RhdGUodGhpcy5hdHRycy5zdGF0ZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykgJiYgdGhpcy5zZXRQYXJhbXModGhpcy5hdHRycy5wYXJhbXMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgJiYgdGhpcy5zZXRRdWVyeSh0aGlzLmF0dHJzLnF1ZXJ5KTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdoYXNoJykgJiYgdGhpcy5zZXRIYXNoKHRoaXMuYXR0cnMuaGFzaCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpICYmIHRoaXMuc2V0T3B0aW9ucyh0aGlzLmF0dHJzLm9wdGlvbnMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3JlbG9hZCcpICYmIHRoaXMuc2V0UmVsb2FkKHRoaXMuYXR0cnMucmVsb2FkKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd1cmwnKSAmJiB0aGlzLnNldFVybCh0aGlzLmF0dHJzLnVybCk7XG4gICAgdGhpcy5yZXNldEhyZWYodGhpcy51cmwpO1xuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0U3RhdGUobmFtZSkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVTdGF0ZSA9IHJvdXRlci5pc0FjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2NvcGUuaW5BY3RpdmVTdGF0ZSA9IHJvdXRlci5pbkFjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ICE9ICdvYmplY3QnIHx8ICFxdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcXVlcnkgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBzZXRIYXNoKGhhc2gpIHtcbiAgICBpZiAodHlwZW9mIGhhc2ggIT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIGhhc2ggbXVzdCBiZSBhIHN0cmluZ2ApO1xuICAgIH1cblxuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT0gJ29iamVjdCcgfHwgIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIG9wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0UmVsb2FkKHZhbCkge1xuICAgIHRoaXMub3B0aW9ucy5yZWxvYWQgPSB2YWw7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGVyIHN0YXRlIHdpdGggbmFtZSBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJlc2V0SHJlZih1cmwpIHtcbiAgICBpZiAodXJsKSB7XG4gICAgICB0aGlzLmF0dHJzLmhyZWYgPSB1cmw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gcm91dGVyLmNyZWF0ZVN0YXRlVXJsKHRoaXMuc3RhdGUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvYS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhdWRpbycsIEF1ZGlvKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIENvbnRlbnQpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1iZWQgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbWJlZCcsIEVtYmVkKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvZW1iZWQuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIElmIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIEVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjaGFuZ2VkSXModmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlID0gISF2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBjaGFuZ2VkUmVjcmVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJlY3JlYXRpb24odmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVjcmVhdGUnKSAmJiB0aGlzLnNldFJlY3JlYXRpb24odGhpcy5hdHRycy5yZWNyZWF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdGhpcy5hdHRycy5pcztcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgpXG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5fX2VtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuLyoqXG4gKiBFbHNlSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEVsc2UgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvaWYuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmcmFtZScsIElmcmFtZSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbWcnLCBJbWFnZSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmNsdWRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHRyYW5zcGFyZW50ID0gdHJ1ZTtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xuICBzdGF0aWMgZXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2luY2x1ZGUnLCBJbmNsdWRlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZWRVcmwodXJsKSB7XG4gICAgdGhpcy5nZXRUZW1wbGF0ZSh1cmwpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGVtcGxhdGUodGhpcy5hdHRycy51cmwpO1xuICB9XG5cbiAgZ2V0VGVtcGxhdGUodXJsKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uICYmIHRoaXMuY29ubmVjdGlvbi5hYm9ydCgpO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHVybCwge1xuICAgICAgb25TdGFydDogKHhocikgPT4ge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSB4aHI7XG4gICAgICB9XG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG5cbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uTG9hZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHRoaXMuYXR0cnMub25FcnJvci50cmlnZ2VyKGVyciwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnXTtcbiAgc3RhdGljIGV2ZW50cyA9IFsnY2hhbmdlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgSW5wdXQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pc0NoZWNrYm94ID0gdGhpcy5lbC50eXBlID09ICdjaGVja2JveCc7XG4gICAgdGhpcy5pc1JhZGlvID0gdGhpcy5lbC50eXBlID09ICdyYWRpbyc7XG4gIH1cblxuICBjaGFuZ2VkQ2hlY2tlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Q2hlY2tlZCh2YWx1ZSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgICh0aGlzLmlzUmFkaW8gfHwgdGhpcy5pc0NoZWNrYm94KSAmJiB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRDaGVja2VkKHRoaXMuZWwuY2hlY2tlZCwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgKHRoaXMuaXNDaGVja2JveCB8fCB0aGlzLmlzUmFkaW8pICYmIHRoaXMuc2V0Q2hlY2tlZCh0aGlzLmF0dHJzLmNoZWNrZWQpO1xuICB9XG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSwgdHJpZ2dlciA9IHRydWUpIHtcbiAgICB2YWx1ZSA9ICEhdmFsdWU7XG5cbiAgICBpZiAodGhpcy5wcmV2Q2hlY2tlZCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB0aGlzLnByZXZDaGVja2VkID0gdmFsdWU7XG4gICAgdHJpZ2dlciAmJiB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuY2hhbmdlUmFkaW8oKTtcbiAgfVxuXG4gIHNldFZhbHVlKCkge1xuICAgIHN1cGVyLnNldFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pc1JhZGlvICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNoYW5nZVJhZGlvKCkge1xuICAgIGxldCBuYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICBsZXQgc2VsZWN0b3IgPSBgaW5wdXRbdHlwZT1yYWRpb11bbmFtZT0nJHtuYW1lfSddOm5vdChbc2NvcGU9JyR7dGhpcy5zY29wZS5fX25hbWV9J10pYDtcbiAgICBsZXQgY2hpbGRyZW4gPSBBa2lsaS5yb290LmNoaWxkcmVuKHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RzIGV4dGVuZHMgVXJsIHsgIFxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdkYXRhJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvYmplY3QnLCBPYmplY3RzKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvb2JqZWN0LmpzIiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBUaGUgcmFkaW8gZ3JvdXAgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8nLCBSYWRpbyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCBSYWRpb0J1dHRvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhYmxlID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG4gIH1cblxuICBjaGFuZ2VkSW4odmFsdWUpIHtcbiAgICBzdXBlci5jaGFuZ2VkSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLnNldE5hbWVzKHRoaXMuYXR0cnMubmFtZSk7XG4gIH1cblxuICBjaGFuZ2VkTmFtZShuYW1lKSB7XG4gICAgdGhpcy5zZXROYW1lcyhuYW1lKTtcbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLml0ZXJhYmxlICYmIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0UmFkaW9WYWx1ZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5wcmV2VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICB0aGlzLnNldE5hbWVzKHRoaXMuYXR0cnMubmFtZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnNldFZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSB0aGlzLnByZXZWYWx1ZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuICAgIGxldCBpc1RydWUgPSBmYWxzZTtcblxuICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgaXNTZWxlY3RlZCA9IHJhZGlvLmVsLnZhbHVlID09PSB2YWx1ZTtcblxuICAgICAgaXNTZWxlY3RlZCAmJiAoaXNUcnVlID0gdHJ1ZSk7XG4gICAgICByYWRpby5zZXRDaGVja2VkKGlzU2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIGlmICghaXNUcnVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxuXG4gIGdldFJhZGlvVmFsdWUoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcblxuICAgICAgaWYgKHJhZGlvLmVsLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHJhZGlvLmVsLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIFRoZSByYWRpbyBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gYDxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJcXCR7dGhpcy52YWx1ZX1cIi8+XFwke3RoaXMuX19jb250ZW50fTwvbGFiZWw+YDtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJhZGlvVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5zZXRSYWRpb1ZhbHVlKHRoaXMuYXR0cnMudmFsdWUpO1xuICB9XG5cbiAgc2V0UmFkaW9WYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2NvcGUudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc2VsZWN0JywgU2VsZWN0KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29wdGlvbicsIE9wdGlvbik7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLml0ZXJhdG9yVGFnTmFtZSA9ICdvcHRpb24nO1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IGZhbHNlO1xuICB9XG5cbiAgY2hhbmdlZE11bHRpcGxlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRNdWx0aXBsZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkQ29udGVudCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Q29udGVudCh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkSW4odmFsdWUpIHtcbiAgICBzdXBlci5jaGFuZ2VkSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmRyYXdTZWxlY3QoKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmVsLmNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgY29tcGlsZWQoKSB7XG4gICAgc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdtdWx0aXBsZScpICYmIHRoaXMuc2V0TXVsdGlwbGUodGhpcy5hdHRycy5tdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnY29udGVudCcpICYmIHRoaXMuc2V0Q29udGVudCh0aGlzLmF0dHJzLmNvbnRlbnQpO1xuICAgIHRoaXMuZHJhd1NlbGVjdCgpO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldLl9fYWtpbGk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gb3B0aW9uLmF0dHJzLnNlbGVjdGVkO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmICghc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLmh0bWwudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBpbkNvbnRlbnQodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwuY29udGVudCA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwuY29udGVudC5pbmRleE9mKHZhbHVlKSAhPSAtMTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnZhbHVlO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY29udGVudC5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCk/IFt2YWx1ZV06IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmxlbmd0aD8gdmFsdWVbMF06ICcnO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVkZWZpbmUoKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmdldENvbnRlbnQoKSk7XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5jb21wYXJlKHRoaXMuZWwuY29udGVudCwgdmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmVsLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IG9wdGlvbi52YWx1ZSA9PSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVsLmNvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmF0dHJzLm9uQ2hhbmdlLmRpc3BhdGNoKEV2ZW50LCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydzZWxlY3RlZCddO1xuXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyhleHByZXNzaW9uKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY2hhbmdlZFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTZWxlY3RlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWwuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmZvci5yZWRlZmluZSgpO1xuICB9XG59XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NvdXJjZScsIFNvdXJjZSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCBUZXh0YXJlYSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyYWNrJywgVHJhY2spO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9ha2lsaS9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd2aWRlbycsIFZpZGVvKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYWtpbGkvc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyB3aWxsIG5vdCBiZSB3YXRjaGluZy5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICBnZXQgX191dGlscygpIHtcbiAgICByZXR1cm4gdXRpbHM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgQWtpbGkudW5pc29sYXRlZCgoKSA9PiB7XG4gICAgICBzdHJpY3QgJiYgKHRoaXMuX19jb21wb25lbnQuX19kaXNhYmxlUHJveHlSZWRlZmluaW5nID0gdHJ1ZSk7XG4gICAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmICghbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FraWxpL3NyYy9zY29wZS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICdha2lsaSc7XG5pbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICdha2lsaS9zcmMvY29tcG9uZW50cy9mb3InO1xuXG4vKipcbiAqIFRoZSBtYWluIHRhYnMgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBBa2lsaS5Db21wb25lbnQge1xuICBzdGF0aWMgZXZlbnRzID0gWyd0YWInXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGFicycsIFRhYnMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGFiLW1lbnUnLCBUYWJNZW51KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi1jb250ZW50JywgVGFiQ29udGVudCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0YWItdGl0bGUnLCBUYWJUaXRsZSk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0YWItcGFuZScsIFRhYlBhbmUpO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc2NvcGUuYWN0aXZlID0gdGhpcy5hY3RpdmUgPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZEFjdGl2ZShpbmRleCkge1xuICAgIHRoaXMuc2V0QWN0aXZlVGFiKGluZGV4KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIGxldCB0aXRsZUxlbmd0aCA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiTWVudSkuZ2V0VGFicygpLmxlbmd0aDtcbiAgICBsZXQgcGFuZUxlbmd0aCA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiQ29udGVudCkuZ2V0VGFicygpLmxlbmd0aDtcblxuICAgIGlmKHRpdGxlTGVuZ3RoICE9IHBhbmVMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXCJ0YWItdGl0bGVcIiBhbmQgXCJ0YWItY29udGVudFwiIGNvbXBvbmVudHMgY291bnQgaXMgZGlmZmVyZW50OiAke3RpdGxlTGVuZ3RofS8ke3BhbmVMZW5ndGh9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRBY3RpdmVUYWIodGhpcy5hdHRycy5hY3RpdmUgfHwgMCk7XG4gIH1cblxuICBzZXRBY3RpdmVUYWIoaW5kZXgpIHtcbiAgICBsZXQgdGFicyA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiTWVudSkuZ2V0VGFicygpO1xuICAgIGxldCBsYXN0QWN0aXZlID0gdGhpcy5hY3RpdmU7XG5cbiAgICBpZih0YWJzW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFwidGFic1wiIGNvbXBvbmVudCBpbmRleCBcIiR7aW5kZXh9XCIgaXMgb3V0IG9mIHJhbmdlYCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY29wZS5hY3RpdmUgPSB0aGlzLmFjdGl2ZSA9IGluZGV4O1xuXG4gICAgaWYoIXRhYnMubGVuZ3RoKSB7XG4gICAgICBBa2lsaS5vcHRpb25zLmRlYnVnICYmIGNvbnNvbGUud2FybignTm90IGZvdW5kIGFueSBjaGlsZCBjb21wb25lbnQgXCJ0YWItdGl0bGVcIiBmb3IgXCJ0YWItbWVudVwiJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0YWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGFic1tpXS5zZXRBY3Rpdml0eShpID09IGluZGV4KTtcbiAgICB9XG5cbiAgICBsYXN0QWN0aXZlICE9IHRoaXMuYWN0aXZlICYmIHRoaXMuYXR0cnMub25UYWIudHJpZ2dlcihpbmRleCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGhlYWRlciBncm91cCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFRhYk1lbnUgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgICB0aGlzLmNoaWxkU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBUYWJUaXRsZTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pdGVyYWJsZSAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLml0ZXJhYmxlICYmIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBnZXRUYWJzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuKHRoaXMuY2hpbGRTZWxlY3RvciwgMCk7XG4gIH1cblxuICBnZXRUYWJJbmRleCh0YWIpIHtcbiAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFicygpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRhYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZih0YWJzW2ldID09PSB0YWIpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VGFic0J5SW5kZXgoaSkge1xuICAgIHJldHVybiB0aGlzLmdldFRhYnMoKVtpXTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBib2R5IGdyb3VwIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgVGFiQ29udGVudCBleHRlbmRzIFRhYk1lbnUge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmNoaWxkU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBUYWJQYW5lO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJvZHkgZ3JvdXAgaXRlbSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFRhYlBhbmUgZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gYDxpZiByZWNyZWF0ZT1cIlxcJHt0aGlzLnJlY3JlYXRlfVwiIGlzPVwiXFwke3RoaXMuaXNBY3RpdmVUYWJ9XCI+XFwke3RoaXMuX19jb250ZW50fTwvaWY+YDtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmKCF0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSB8fCAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgVGFiQ29udGVudCkpIHtcbiAgICAgIEFraWxpLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZS53YXJuKCdOb3QgZm91bmQgcGFyZW50IGNvbXBvbmVudCBcInRhYi1jb250ZW50XCIgZm9yIFwidGFiLXBhbmVcIicpO1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVRhYiA9IHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVjcmVhdGUnKSAmJiB0aGlzLnNldFJlY3JlYXRpb24odGhpcy5hdHRycy5yZWNyZWF0ZSk7XG4gIH1cblxuICBjaGFuZ2VkUmVjcmVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJlY3JlYXRpb24odmFsdWUpXG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5zY29wZS5yZWNyZWF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZpdHkpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlVGFiID0gdGhpcy5pc0FjdGl2ZSA9IGFjdGl2aXR5O1xuICB9XG59XG5cbi8qKlxuICogVGhlIGhlYWRlciBncm91cCBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgVGFiVGl0bGUgZXh0ZW5kcyBMb29wIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVRhYiA9IHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIGlmKCF0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSB8fCAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgVGFiTWVudSkpIHtcbiAgICAgIEFraWxpLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZS53YXJuKCdOb3QgZm91bmQgcGFyZW50IGNvbXBvbmVudCBcInRhYi1tZW51XCIgZm9yIFwidGFiLXRpdGxlXCInKTtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50YWJzID0gdGhpcy5wYXJlbnQoYyA9PiBjIGluc3RhbmNlb2YgVGFicyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50YWJzLnNldEFjdGl2ZVRhYih0aGlzLmluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMudGFicy5jaGlsZChjID0+IGMgaW5zdGFuY2VvZiBUYWJNZW51KS5nZXRUYWJJbmRleCh0aGlzKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2aXR5KSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVRhYiA9IHRoaXMuaXNBY3RpdmUgPSBhY3Rpdml0eTtcbiAgICB0aGlzLnRhYnMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiQ29udGVudCkuZ2V0VGFic0J5SW5kZXgodGhpcy5pbmRleCkuc2V0QWN0aXZpdHkoYWN0aXZpdHkpO1xuICB9XG59XG5cblRhYnMuVGFiTWVudSA9IFRhYk1lbnU7XG5UYWJzLlRhYlRpdGxlID0gVGFiVGl0bGU7XG5UYWJzLlRhYkNvbnRlbnQgPSBUYWJDb250ZW50O1xuVGFicy5UYWJQYW5lID0gVGFiUGFuZTtcblxud2luZG93LkFraWxpVGFicyA9IFRhYnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYnMuanMiXSwic291cmNlUm9vdCI6IiJ9
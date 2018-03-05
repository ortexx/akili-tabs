/*!
 * Tabs component for Akili framework
 * 
 * @version 0.4.2
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

var _if = __webpack_require__(12);

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(5);

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(13);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(14);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(15);

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(6);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(16);

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(17);

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(18);

var _include2 = _interopRequireDefault(_include);

var _iframe = __webpack_require__(19);

var _iframe2 = _interopRequireDefault(_iframe);

var _image = __webpack_require__(20);

var _image2 = _interopRequireDefault(_image);

var _embed = __webpack_require__(21);

var _embed2 = _interopRequireDefault(_embed);

var _audio = __webpack_require__(22);

var _audio2 = _interopRequireDefault(_audio);

var _video = __webpack_require__(23);

var _video2 = _interopRequireDefault(_video);

var _track = __webpack_require__(24);

var _track2 = _interopRequireDefault(_track);

var _source = __webpack_require__(25);

var _source2 = _interopRequireDefault(_source);

var _object = __webpack_require__(26);

var _object2 = _interopRequireDefault(_object);

var _route = __webpack_require__(9);

var _route2 = _interopRequireDefault(_route);

var _url = __webpack_require__(1);

var _url2 = _interopRequireDefault(_url);

var _a = __webpack_require__(27);

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(28);

var _scope2 = _interopRequireDefault(_scope);

var _eventEmitter = __webpack_require__(7);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _router = __webpack_require__(10);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(8);

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

var _store = __webpack_require__(8);

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
/* 8 */
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
/* 9 */
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
/* 10 */
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

var _route2 = __webpack_require__(9);

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
/* 11 */
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

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 21 */
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
/* 22 */
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
/* 24 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(10);

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
/* 28 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGZjOTc2NDBhNjVkZmQ4NmEzMjUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9ha2lsaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9zZXJ2aWNlcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9mb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9ldmVudC1lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvc2VydmljZXMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YWJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9jb250ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9pbmNsdWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9lbWJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy90cmFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvc291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9zY29wZS5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIm9wdGlvbnMiLCJkZWZhdWx0RXZlbnRzQnViYmxpbmciLCJkZWJ1ZyIsIl9faW5pdCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX19saW5rcyIsIl9fd2luZG93IiwiX19pc29sYXRpb24iLCJfX2V2YWx1YXRpb24iLCJfX2h0bWwiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIl9fc2VydmVyUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiX19zZXJ2ZXJSZW5kZXJpbmciLCJodG1sQm9vbGVhbkF0dHJpYnV0ZXMiLCJjb21wb25lbnRzIiwiZGVjb3JhdG9ycyIsInNlcnZpY2VzIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJnZXRBa2lsaVBhcmVudHMiLCJ0cmVlIiwiYXJyIiwiY2hlY2siLCJub2RlIiwicGFyZW50Tm9kZSIsIl9fYWtpbGkiLCJwdXNoIiwic2V0VGVtcGxhdGUiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJpbm5lckhUTUwiLCJjcmVhdGVTY29wZU5hbWUiLCJjcmVhdGVSYW5kb21TdHJpbmciLCJzdHIiLCJpc29sYXRlIiwiZm4iLCJyZXMiLCJwcm9wcyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsImkiLCJsIiwicHJvcCIsImlzRGVsZXRlZCIsImNvbXBvbmVudCIsIl9fZXZhbHVhdGVCeUtleXMiLCJ1bmRlZmluZWQiLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImxhc3QiLCJ2YWwiLCJ2YWx1ZSIsImxlbmd0aCIsInVuZXZhbHVhdGVkIiwiZXZhbHVhdGlvbiIsInVuaXNvbGF0ZWQiLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwiT2JqZWN0Iiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJDb21wb25lbnQiLCJfX2NhbmNlbGxlZCIsIl9fY3JlYXRlIiwiY29tcGlsZSIsInJvb3QiLCJlbGVtZW50cyIsIm5lc3RlZEluaXRpYWxpemluZyIsImNoaWxkcmVuIiwiY2hpbGQiLCJwIiwiX19jb21waWxlIiwiYWxsIiwidGhlbiIsInIiLCJfX3Jlc29sdmUiLCJjb25zb2xlIiwid2FybiIsInVucmVnaXN0ZXJDb21wb25lbnQiLCJhbGlhcyIsInVucmVnaXN0ZXJBbGlhcyIsImlzb2xhdGVBcnJheVByb3RvdHlwZSIsIkFycmF5IiwicHJvdG90eXBlIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImtleSIsIm9sZCIsIl9faXNQcm94eSIsImFwcGx5IiwiaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uIiwiY29uc3RydWN0b3IiLCJpc29sYXRlRXZlbnRzIiwiRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3VtZW50cyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJjYWxsYmFjayIsImlzb2xhdGVGdW5jdGlvbiIsImNvbnRleHQiLCJvRm4iLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJlcnJvckhhbmRsaW5nIiwidHJpZ2dlckluaXQiLCJzdGF0dXMiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJzZXJ2ZXJSZW5kZXJpbmciLCJzZXJ2ZXIiLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInN0eWxlIiwiZ2V0IiwiZGF0YSIsImluaXQiLCJxdWVyeVNlbGVjdG9yIiwiY2hhbmdlU3RhdGUiLCJjYXRjaCIsImVyciIsImRlaW5pdCIsImRlZmluZSIsIkV2ZW50RW1pdHRlciIsIlNjb3BlIiwidXRpbHMiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiUmFkaW8iLCJSb3V0ZSIsIlNlbGVjdCIsIlNvdXJjZSIsIlRleHQiLCJUZXh0YXJlYSIsIlRyYWNrIiwiVXJsIiwiVmlkZW8iLCJyZXF1ZXN0Iiwicm91dGVyIiwic3RvcmUiLCJ1cmxBdHRyaWJ1dGUiLCJ1cmwiLCJzZXRVcmwiLCJhdHRycyIsImV2YWx1YXRpb25SZWdleCIsImV2YWx1YXRpb25SZWdleEdsb2JhbCIsIlJlZ0V4cCIsInNvdXJjZSIsInN5c3RlbUF0dHJpYnV0ZXMiLCJleHByZXNzaW9uIiwiZXZlbnQiLCJldmFsIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX3ByZXZlbnQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fY2hpbGRyZW4iLCJfX3BhcmVudCIsIl9fcGFyZW50cyIsIl9fYXR0cnMiLCJfX2F0dHJpYnV0ZU9mIiwiX19ldmFsdWF0aW9uQ29tcG9uZW50IiwiX19zZXRFdmVudHMiLCJfX3NldFBhcmVudHMiLCJfX3NldEJvb2xlYW5BdHRyaWJ1dGVzIiwiX19kZWZpbmVBdHRyaWJ1dGVzIiwiX19pbml0aWFsaXplIiwiY3JlYXRlZCIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsIm5ld1BhcmVudCIsIl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzIiwiaW50ZXJwb2xhdGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsIl9faW5pdGlhbGl6ZU5vZGUiLCJub2RlVmFsdWUiLCJfX2V2YWx1YXRlIiwiY2hpbGROb2RlcyIsIm9uQ29tcGlsZWQiLCJ0cmlnZ2VyIiwiYnViYmxlcyIsImNvbXBpbGVkIiwidGVtcGxhdGVVcmwiLCJfX2NvbnRlbnQiLCJvblJlY29tcGlsZWQiLCJyZWNvbXBpbGVkIiwib25SZXNvbHZlZCIsInJlc29sdmVkIiwiX19zY29wZSIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX25lc3RlZE9ic2VydmUiLCJib29sZWFuQXR0cmlidXRlcyIsImNvbmNhdCIsInNldEF0dHIiLCJhdHRyaWJ1dGVzIiwiaW5kZXhPZiIsIm5vZGVOYW1lIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZXYiLCJ0ZXN0IiwicGFyZW50cyIsImV2YWx1YXRlUGFyZW50IiwidHJhbnNwYXJlbnQiLCJfX2RldGFjaCIsIl9fYWRkQ2hpbGQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvcGVydGllcyIsImdldFByb3BlcnR5QnlLZXlzIiwiY29tcGFyZVByZXZpb3VzVmFsdWUiLCJjb3B5IiwiX19nZXROb2RlUHJvcGVydHkiLCJjb3VudGVyIiwiYXR0cmlidXRlVmFsdWUiLCJfX2NvbXBvbmVudCIsImNvbSIsIl9fZXhwcmVzc2lvbiIsIkF0dHIiLCJtIiwiZCIsImV2YWx1YXRlIiwiZXhpc3RpbmdCaW5kaW5ncyIsInBhcnNlVmFsdWUiLCJfX2dldFBhcnNlZEV4cHJlc3Npb24iLCJsaXN0IiwicGFyc2UiLCJoYXNoIiwia2V5c1N0cmluZyIsIm5vdEJpbmRpbmciLCJwYXJlbnRWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJpc1Njb3BlUHJveHkiLCJiaW5kIiwiX19nZXRCb3VuZE5vZGUiLCJfX2JpbmQiLCJfX3NldE5vZGVQcm9wZXJ0eSIsIm1ha2VBdHRyaWJ1dGVWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiaXNCb29sZWFuQXR0cmlidXRlIiwiX19oYXNCaW5kaW5ncyIsImNsZWFyQXR0cmlidXRlIiwiX19hdHRyaWJ1dGVPbiIsIl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciIsInRvQ2FtZWxDYXNlIiwib25DaGFuZ2VkIiwiY2hhbmdlZCIsImNhbWVsS2V5IiwidG9VcHBlckNhc2UiLCJmbk5hbWUiLCJldkZuTmFtZSIsImVsZW1lbnQiLCJfX2VsZW1lbnQiLCJhdHRyIiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJfX2dldEJpbmQiLCJfX2RhdGEiLCJjIiwiX19jaGVja05vZGVQcm9wZXJ0eUNoYW5naW5nIiwiX19ldmFsdWF0ZU5vZGUiLCJfayIsIl9wcm9wIiwidW5iaW5kIiwib2JqIiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJoYXNQcm9wZXJ0eUJ5S2V5cyIsIl9fZXZhbHVhdGVOZXN0ZWQiLCJfX3VuYmluZCIsImRlbGV0ZVByb3BlcnR5QnlLZXlzIiwiZXhlYyIsIl9fY2hlY2tFdmFsdWF0aW9uIiwiYXR0cmlidXRlT2YiLCJldmVudE5hbWUiLCJfX2V2ZW50IiwiZW1pdHRlciIsIl9fZXZhbHVhdGVFdmVudCIsIl9faW5pdGlhbGl6ZWQiLCJfX2luaXRpYWxpemVBdHRyaWJ1dGUiLCJjaGFuZ2VBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVOb2RlIiwiX191bmJpbmRCeU5vZGVzIiwiUHJveHkiLCJ0YXJnZXQiLCJzZXQiLCJhdHRyS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJfX2lzU3lzdGVtS2V5IiwicmVhbFRhcmdldCIsImdldE93blByb3BlcnR5VGFyZ2V0IiwiaXNQbGFpbk9iamVjdCIsImdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCIsIl9fYmluZE5vZGUiLCJfX3N0b3JlQnlLZXlzIiwiX19jcmVhdGVJc29sYXRpb25PYmplY3QiLCJsaW5rcyIsIl9fdGFyZ2V0IiwiX19zdG9yZSIsIl9fc2V0IiwiaXNBcnJheSIsImtleVN0cmluZyIsImluZm8iLCJzdGFydEtleXMiLCJvYnNlcnZlIiwiX19kaXNhYmxlUHJveHlSZWRlZmluaW5nIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uS2V5IiwicGFyZW50S2V5c1N0cmluZyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5Iiwibm9kZXMiLCJfX2NsZWFyRW1wdHlCaW5kaW5ncyIsImNsZWFyIiwiX19yZW1vdmUiLCJfX2NsZWFyTGlua3MiLCJvblJlbW92ZWQiLCJyZW1vdmVkIiwiX19zcGxpY2VDaGlsZCIsIl9fcmVtb3ZlQ2hpbGRyZW4iLCJmaW5kIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwicmV2ZXJzZSIsImhhbmRsZXIiLCJfX2xpbmtCeUZ1bmN0aW9uIiwiX19saW5rQnlLZXlzIiwiX191bmxpbmtCeUZ1bmN0aW9uIiwiX191bmxpbmtCeUtleXMiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIl9fZW1wdHkiLCJfX2Rlc3Ryb3kiLCJjbGFzcyIsImNsYXNzZXMiLCJzdHlsZXMiLCJmaWx0ZXIiLCJpdGVtIiwibWF0Y2giLCJzb3J0Iiwib3JkZXIiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwibmV4dCIsImFWIiwiYlYiLCJuZXN0ZWQiLCJuZXdPYmoiLCJjb21wYXJlIiwiY3VycmVudCIsInByZXZpb3VzIiwicHJldmlvdXNDb3B5IiwiY3VycmVudENvcHkiLCJlbmNvZGVIdG1sRW50aXRpZXMiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwib2JqZWN0IiwicmVkdWNlIiwibyIsImhhcyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImNsZWFyU2NvcGVQcm94eSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJSZXF1ZXN0IiwiYmFzZVVybCIsImRlZmF1bHRzIiwic3RhdHVzRXJyb3JzUGF0dGVybiIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25TdGFydCIsInRyYW5zZm9ybUJlZm9yZSIsIm9wZW4iLCJtZXRob2QiLCJ1c2VyIiwicGFzc3dvcmQiLCJoZWFkZXJzIiwianNvbiIsImJvZHkiLCJyZXNwb25zZVR5cGUiLCJmb3JtIiwiY3JlYXRlRm9ybURhdGEiLCJ0aW1lb3V0Iiwid2l0aENyZWRlbnRpYWxzIiwic2V0UmVxdWVzdEhlYWRlciIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJvblByb2dyZXNzIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsInJlc3BvbnNlIiwidHJhbnNmb3JtQWZ0ZXIiLCJvbnRpbWVvdXQiLCJvbmVycm9yIiwic2VuZCIsInNlcCIsImVxIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ2Iiwib3B0IiwicXVlcnkiLCJhbXBzIiwic3BsaXQiLCJlcXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJuYW1lc3BhY2UiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidG9JU09TdHJpbmciLCJfX2luc3RhbmNlcyIsImFkZEluc3RhbmNlIiwiaW5zdGFuY2UiLCJyZW1vdmVJbnN0YW5jZSIsIkxvb3AiLCJfX2l0ZXJhdG9yIiwiX19rZXkiLCJfX3ZhbHVlIiwiX19pbmRleCIsIl9fY29tcGFyaXNvblZhbHVlIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JSZWYiLCJpdGVyYXRvck91dGVySFRNTCIsImRyYXciLCJjcmVhdGVJdGVyYXRvciIsImluIiwibWFzayIsIm5leHRTaWJsaW5nIiwib3V0ZXJIVE1MIiwiY29udGVudCIsImZpcnN0Q2hpbGQiLCJpbmRleCIsImZvdW5kIiwiX19oYXNoIiwiaXRlcmF0b3IiLCJjVmFsdWUiLCJjb21wYXJzaW9uIiwiY0NvcHkiLCJzZXRJbmRleCIsInNldEtleSIsInNldFZhbHVlIiwiY3JlYXRlSXRlcmF0b3JFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwid3JpdGFibGUiLCJlVmFsdWUiLCJpbmRleEtleXMiLCJsYXN0RWxlbWVudCIsImxvb3AiLCJpdGVyYXRlIiwiZm9yIiwiaXNGb3IiLCJjYW5jZWwiLCJ2YWx1ZUtleSIsInNldEZvY3VzIiwiZm9jdXMiLCJzZXRFbGVtZW50Rm9jdXMiLCJzZXRFbGVtZW50Qmx1ciIsImJsdXIiLCJmb3JjZSIsImluRXZhbHVhdGluZyIsIl9FdmVudCIsInR5cGUiLCJ0cmFuc2l0aW9uIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwibG9hZGVkIiwiZW1wdHkiLCJUcmFuc2l0aW9uIiwicm91dGVzIiwic3RhdGVzIiwicm91dGUiLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19vcHRpb25zIiwiX19wYXJhbVJlZ2V4IiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwiY3JlYXRlU3RhdGVVcmwiLCJyZWxvYWQiLCJnZXRVcmwiLCJiYWNrIiwiaGlzdG9yeSIsImdvIiwiZm9yd2FyZCIsImxvY2F0aW9uIiwiZXJyb3IiLCJwdXNoU3RhdGUiLCJkZWZhdWx0VXJsIiwib2xkUHVzaFN0YXRlIiwiX19vblN0YXRlQ2hhbmdlSGFuZGxlciIsInBvcCIsInBhcmVudE5hbWUiLCJmdWxsUGF0dGVybiIsInNwbGl0U2xhc2hlcyIsInJlbW92ZVN0YXRlIiwic2V0SGFzaFVybCIsInNldEhpc3RvcnlVcmwiLCJnZXRIYXNoVXJsIiwiZ2V0SGlzdG9yeVVybCIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0VXJsUXVlcnkiLCJnZXRIYXNoVXJsUXVlcnkiLCJnZXRIaXN0b3J5VXJsUXVlcnkiLCJwYXJhbXNGcm9tUXVlcnkiLCJmIiwiZ2V0UGF0dGVybkNvbnRlbnQiLCJ1cmxQYXR0ZXJuIiwicmVnZXgiLCJpc0luY2x1ZGVkIiwiaXNBY3RpdmVTdGF0ZSIsImluY2x1ZGVzIiwiaW5BY3RpdmVTdGF0ZSIsImdldFJvdXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJfX2Rpc2FibGVDaGFuZ2UiLCJwcmV2VHJhbnNpdGlvbiIsIm9uRW5kIiwic2V0UGF0aCIsImhhc1N0YXRlIiwiaXNEaWZmZXJlbnQiLCJwcmV2IiwiaXNIaXN0b3J5IiwiaXNSZWxvYWQiLCJzZXRUcmFuc2l0aW9uIiwic2F2ZVNjcm9sbFBvc2l0aW9uIiwic2Nyb2xsVG8iLCJUYWJzIiwiVGFiTWVudSIsIlRhYkNvbnRlbnQiLCJUYWJUaXRsZSIsIlRhYlBhbmUiLCJhY3RpdmUiLCJzZXRBY3RpdmVUYWIiLCJ0aXRsZUxlbmd0aCIsImdldFRhYnMiLCJwYW5lTGVuZ3RoIiwidGFicyIsImxhc3RBY3RpdmUiLCJzZXRBY3Rpdml0eSIsIm9uVGFiIiwiaXRlcmFibGUiLCJjaGlsZFNlbGVjdG9yIiwidGFiIiwicmVjcmVhdGUiLCJpc0FjdGl2ZVRhYiIsImlzQWN0aXZlIiwic2V0UmVjcmVhdGlvbiIsImFjdGl2aXR5IiwiZ2V0VGFiSW5kZXgiLCJnZXRUYWJzQnlJbmRleCIsIkFraWxpVGFicyIsIkVsc2VJZiIsIkVsc2UiLCJpc0NvbXBpbGVkIiwiaXMiLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInJlc3VsdCIsIk9wdGlvbiIsIml0ZXJhdG9yVGFnTmFtZSIsImlzTXVsdGlwbGUiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiZ2V0Q29udGVudCIsIm11bHRpcGxlIiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwic2VsZWN0aW9uIiwicmVkZWZpbmUiLCJ0cmltIiwib25DaGFuZ2UiLCJkaXNwYXRjaCIsIkV2ZW50Iiwic2V0U2VsZWN0ZWQiLCJpc0NoZWNrYm94IiwiaXNSYWRpbyIsInNldENoZWNrZWQiLCJjaGVja2VkIiwicHJldkNoZWNrZWQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiUmFkaW9CdXR0b24iLCJzZXROYW1lcyIsImdldFJhZGlvVmFsdWUiLCJwcmV2VmFsdWUiLCJvblJhZGlvIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInNldFJhZGlvVmFsdWUiLCJyYW5nZSIsImNyZWF0ZVJhbmdlIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImNvbm5lY3Rpb24iLCJnZXRUZW1wbGF0ZSIsImFib3J0Iiwib25Mb2FkIiwib25FcnJvciIsIk9iamVjdHMiLCJpc1VybCIsInJlc2V0SHJlZiIsInNldFBhcmFtcyIsInNldFF1ZXJ5Iiwic2V0SGFzaCIsInNldFJlbG9hZCIsInByZXZlbnREZWZhdWx0Iiwic2V0T3B0aW9ucyIsImhyZWYiLCJfX2VsIiwic3RyaWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsRUFBZCxDLENBckNBOzs7Ozs7Ozs7QUF1Q0FBLE1BQU1DLE9BQU4sR0FB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LEVBQWU7QUFDakQsY0FBSSxDQUFDRCxJQUFMLEVBQVc7QUFDVCxtQkFBT0MsT0FBTyxFQUFkO0FBQ0Q7O0FBRUQsaUJBQU9DLEtBQVA7QUFDRCxTQU5EO0FBT0EybkIsbUJBQVcsTUFBSzdhLFdBQUwsQ0FBaUJpRyx3QkFBakIsR0FBNEMsS0FBdkQ7QUFDRCxPQVZEO0FBV0Q7Ozt3QkEzQmE7QUFDWjtBQUNEOzs7Ozs7a0JBWmtCOU0sSyIsImZpbGUiOiJha2lsaS10YWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBmYzk3NjQwYTY1ZGZkODZhMzI1IiwiLyoqXG4gKiBKYXZhc2NyaXB0IGZyYW1ld29ya1xuICpcbiAqIGNvbnN0IEFraWxpID0gbWFrZUl0RWFzeShqcyArIGh0bWwpO1xuICpcbiAqIEBhdXRob3IgQWxleGFuZHIgQmFsYXN5YW4gPG15d2Vic3RyZWV0QGdtYWlsLmNvbT5cbiAqIEBsaW5rIGh0dHA6Ly9ha2lsaWpzLmNvbVxuICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IElmIGZyb20gJy4vY29tcG9uZW50cy9pZi5qcyc7XG5pbXBvcnQgRm9yIGZyb20gJy4vY29tcG9uZW50cy9mb3IuanMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmpzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQuanMnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vY29tcG9uZW50cy9yYWRpby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC5qcyc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhLmpzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmpzJztcbmltcG9ydCBJbmNsdWRlIGZyb20gJy4vY29tcG9uZW50cy9pbmNsdWRlLmpzJztcbmltcG9ydCBJZnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL2lmcmFtZS5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlLmpzJztcbmltcG9ydCBFbWJlZCBmcm9tICcuL2NvbXBvbmVudHMvZW1iZWQuanMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY29tcG9uZW50cy9hdWRpby5qcyc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL3ZpZGVvLmpzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbXBvbmVudHMvdHJhY2suanMnO1xuaW1wb3J0IFNvdXJjZSBmcm9tICcuL2NvbXBvbmVudHMvc291cmNlLmpzJztcbmltcG9ydCBPYmplY3RzIGZyb20gJy4vY29tcG9uZW50cy9vYmplY3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5pbXBvcnQgVXJsIGZyb20gJy4vY29tcG9uZW50cy91cmwuanMnO1xuaW1wb3J0IEEgZnJvbSAnLi9jb21wb25lbnRzL2EuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBBa2lsaSA9IHt9O1xuXG5Ba2lsaS5vcHRpb25zID0ge1xuICBkZWZhdWx0RXZlbnRzQnViYmxpbmc6IHRydWUsXG4gIGRlYnVnOiB0cnVlXG59O1xuXG5Ba2lsaS5fX2luaXQgPSBudWxsO1xuQWtpbGkuX19jb21wb25lbnRzID0ge307XG5Ba2lsaS5fX2FsaWFzZXMgPSB7fTtcbkFraWxpLl9fc2NvcGVzID0ge307XG5Ba2lsaS5fX2xpbmtzID0ge307XG5Ba2lsaS5fX3dpbmRvdyA9IHt9O1xuQWtpbGkuX19pc29sYXRpb24gPSBudWxsO1xuQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbkFraWxpLl9faHRtbCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5Ba2lsaS5fX3NlcnZlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbkFraWxpLl9fc2VydmVyUmVuZGVyaW5nID0gZmFsc2U7XG5cbkFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcyA9IFtcbiAgJ2Rpc2FibGVkJywgJ2NvbnRlbnRlZGl0YWJsZScsICdoaWRkZW4nXG5dO1xuXG5Ba2lsaS5jb21wb25lbnRzID0ge307XG5Ba2lsaS5kZWNvcmF0b3JzID0ge307XG5Ba2lsaS5zZXJ2aWNlcyA9IHt9O1xuXG4vKipcbiAqIEpvaW4gYmluZGluZyBrZXlzXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBiaW5kaW5nIGtleXNcbiAqL1xuQWtpbGkuam9pbkJpbmRpbmdLZXlzID0gZnVuY3Rpb24oa2V5cykge1xuICByZXR1cm4ga2V5cy5tYXAoZWwgPT4gZWwudG9TdHJpbmcoKSkuam9pbignLicpO1xufTtcblxuLyoqXG4gKiBBZGQgc2NvcGUgdG8gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHNjb3BlXG4gKi9cbkFraWxpLmFkZFNjb3BlID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgaWYgKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9fc2NvcGVzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWxldGUgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlU2NvcGUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB3aXRoIGF0dGFjaGVkIEFraWxpIGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtib29sZWFufSBbdHJlZT10cnVlXSAtIHJldHVybiBhcnJheSBvZiB0aGUgcGFyZW50cyBpZiB0cnVlLCBjbG9zZXN0IHBhcmVudCBpZiBmYWxzZVxuICogQHJldHVybnMge0FycmF5fEhUTUxFbGVtZW50fG51bGx9XG4gKi9cbkFraWxpLmdldEFraWxpUGFyZW50cyA9IGZ1bmN0aW9uIChlbCwgdHJlZSA9IHRydWUpIHtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUuX19ha2lsaSkge1xuICAgICAgYXJyLnB1c2gobm9kZS5wYXJlbnROb2RlKTtcblxuICAgICAgaWYgKCF0cmVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayhub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgY2hlY2soZWwpO1xuXG4gIHJldHVybiB0cmVlPyBhcnI6IGFyclswXTtcbn07XG5cbi8qKlxuICogU2V0IGVsZW1lbnQgaW5uZXIgaHRtbCB3aXRoIGNvbnRlbnQgcmVwbGFjaW5nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCI8aT5IZWxsbzwvaT48Yj5Xb3JsZDwvYj5cIlxuICogZWwuaW5uZXJIVE1MID0gXCI8Yj5Xb3JsZDwvYj5cIjtcbiAqIEFraWxpLnNldFRlbXBsYXRlKGVsLCBcIjxpPkhlbGxvPC9pPiR7dGhpcy5fX2NoaWxkcmVufVwiKTtcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uKGVsLCB0ZW1wbGF0ZSkge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcJHsoKCg/IVxcJHspXFxzKnRoaXNcXC5fX2NvbnRlbnRcXHMqKSopfS8sIGVsLmlubmVySFRNTCk7XG4gIGVsLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuXG4gIHJldHVybiBlbC5pbm5lckhUTUw7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIHVuaXF1ZSBzY29wZSBuYW1lXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuQWtpbGkuY3JlYXRlU2NvcGVOYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIChzdHIpID0+IHtcbiAgICByZXR1cm4gISF0aGlzLl9fc2NvcGVzW3N0cl07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGZ1bmN0aW9uLlxuICogRXZlcnkgc2NvcGUgdmFyaWFibGUgY2hhbmdlIGNhbGxzIGFjY29yZGluZyBub2RlIGV2YWx1YXRpb24uXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IGNoYW5nZSBzb21lIHNjb3BlIHZhcmlhYmxlIGluIHRoZSBsb29wIC0gZXZhbHVhdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiB0aGUgZWFjaCBjaGFuZ2UuXG4gKiBJdCBtYXkgYmUgc2xvdyBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICogWW91IGNhbiBpc29sYXRlIHRoaXMgYWN0aW9uIGFuZCBydW4gYWxsIGV2YWx1YXRpb24gcHJvY2VzcyBhZnRlciBwYXNzZWQgZnVuY3Rpb24gYXQgb25jZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbihmbikge1xuICBpZiAodGhpcy5fX2lzb2xhdGlvbikge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IHt9O1xuXG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuX19pc29sYXRpb24uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHByb3BzLnB1c2godGhpcy5fX2lzb2xhdGlvbltrXSk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHByb3BzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBwcm9wID0gcHJvcHNbaV07XG5cbiAgICBpZiAocHJvcC5pc0RlbGV0ZWQpIHtcbiAgICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50LnNjb3BlLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3AudmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBwcm9wcyA9IG51bGw7XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBldmFsdWF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmV2YWx1YXRlZCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGxldCBldmFsdWF0aW9uID0gdGhpcy5fX2V2YWx1YXRpb247XG4gIGxldCByZXM7XG5cbiAgdGhpcy5fX2V2YWx1YXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IGV2YWx1YXRpb247XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogU3RvcCBpc29sYXRpb24gYmVmb3JlIHRoZSBmdW5jdGlvbiBhbmQgY29udGludWUgYWZ0ZXJcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLnVuaXNvbGF0ZWQgPSBmdW5jdGlvbihmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19pc29sYXRpb24gPSBldmFsdWF0aW9uO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgZWxlbWVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHJlY29tcGlsZSA9IG9wdGlvbnMucmVjb21waWxlO1xuICBsZXQgY29tcG9uZW50ID0gZWwuX19ha2lsaTtcblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgaWYgKHJlY29tcGlsZSkge1xuICAgICAgY29tcG9uZW50Ll9fcmVjb21waWxlKCk7XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5fX2FsaWFzZXMpO1xuXG4gICAgaWYgKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZiAoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvciAobGV0IHNlbGVjdG9yIGluIHRoaXMuX19hbGlhc2VzKSB7XG4gICAgICBpZiAoIXRoaXMuX19hbGlhc2VzLmhhc093blByb3BlcnR5KHNlbGVjdG9yKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1t0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIV9Db21wb25lbnQgJiYgIWlzUm9vdCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCkge1xuICAgIF9Db21wb25lbnQgPSB0aGlzLkNvbXBvbmVudDtcbiAgfVxuXG4gIGlmIChfQ29tcG9uZW50Lm1hdGNoZXMgJiYgIWVsLm1hdGNoZXMoX0NvbXBvbmVudC5tYXRjaGVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudCA9IG5ldyBfQ29tcG9uZW50KGVsLCB7fSk7XG5cbiAgaWYgKGNvbXBvbmVudC5fX2NhbmNlbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbXBvbmVudC5fX2NyZWF0ZSgpO1xuXG4gIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuY29tcGlsZSA9IGZ1bmN0aW9uKHJvb3QsIG9wdGlvbnMgPSB7IHJlY29tcGlsZTogZmFsc2UgfSkgeyAgXG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0IG5lc3RlZEluaXRpYWxpemluZyA9IChlbCkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuXG4gICAgY29tcG9uZW50ICYmIGVsZW1lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcblxuICAgICAgbmVzdGVkSW5pdGlhbGl6aW5nKGNoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuXG4gIGxldCBwID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbChwKS50aGVuKCgpID0+IHtcbiAgICBsZXQgciA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gZWxlbWVudHNbaV07XG5cbiAgICAgIHIucHVzaChjb21wb25lbnQuX19yZXNvbHZlKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChyKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQgb3IgZ2V0IGl0IGlmIGZuIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtDb21wb25lbnR9IFtmbl1cbiAqL1xuQWtpbGkuY29tcG9uZW50ID0gZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5fX2NvbXBvbmVudHNbbmFtZV0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFVucmVnaXN0ZXIgdGhlIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbkFraWxpLnVucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9fY29tcG9uZW50c1tuYW1lXTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIHNlbGVjdG9yIGFsaWFzIG9yIGdldCBpdCBpZiBjb21wb25lbnQgbmFtZSBpcyBub3QgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIC0gRE9NIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbXBvbmVudE5hbWVdXG4gKi9cbkFraWxpLmFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIGNvbnNvbGUud2FybihgQWxpYXMgd2l0aCBzZWxlY3RvciAke3NlbGVjdG9yfSBhbHJlYWR5IHdhcyBhZGRlZGApO1xuICB9XG5cbiAgdGhpcy5fX2FsaWFzZXNbc2VsZWN0b3JdID0gY29tcG9uZW50TmFtZTtcbn07XG5cbi8qKlxuICogVW5yZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqL1xuQWtpbGkudW5yZWdpc3RlckFsaWFzID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW3NlbGVjdG9yXTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSBhcnJheSBwcm90b3R5cGUgZnVuY3Rpb25zXG4gKi9cbkFraWxpLmlzb2xhdGVBcnJheVByb3RvdHlwZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LkFycmF5ID0geyBwcm90b3R5cGU6IHt9IH07XG5cbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmV2YWx1YXRlZCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9fd2luZG93LnNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICB0aGlzLl9fd2luZG93LnNldEludGVydmFsID0gc2V0SW50ZXJ2YWw7XG4gIHRoaXMuX193aW5kb3cuUHJvbWlzZSA9IFByb21pc2U7XG5cbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICB3aW5kb3cuUHJvbWlzZSAmJiAod2luZG93LlByb21pc2UuY29uc3RydWN0b3IgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5Qcm9taXNlLmNvbnN0cnVjdG9yICwgMCkpO1xufTtcblxuLyoqXG4gKiBJc29sYXRlIGV2ZW50IGxpc3RlbmVyc1xuICovXG5Ba2lsaS5pc29sYXRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudCA9IHsgcHJvdG90eXBlOiB7fSB9O1xuXG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXI7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlO1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnM7XG5cbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVycykge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGFyZ3NbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihuYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuICBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24oZm4sIHBvcyA9ICdsYXN0Jykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgbGV0IGNhbGxiYWNrID0gcG9zID09ICdsYXN0Jz8gYXJnc1thcmdzLmxlbmd0aCAtIDFdOiBhcmdzW3Bvc107XG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZWQoKCkgPT4ge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogSXNvbGF0ZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtjb250ZXh0XVxuICogQHJldHVybnMge2Z1bmN0aW9ufVxuICovXG5Ba2lsaS5pc29sYXRlRnVuY3Rpb24gPSBmdW5jdGlvbihmbiwgY29udGV4dCA9IG51bGwpIHtcbiAgaWYgKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBsZXQgb0ZuID0gZnVuY3Rpb24oKSB7XG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgdGhpcztcblxuICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvRm4sICdfX2FraWxpJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICByZXR1cm4gb0ZuO1xufTtcblxuLyoqXG4gKiBFcnJvciBoYW5kbGluZ1xuICovXG5Ba2lsaS5lcnJvckhhbmRsaW5nID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgYW4gaW5pdGlhbGl6YXRpb24gc3RhdHVzXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBzdGF0dXNcbiAqL1xuQWtpbGkudHJpZ2dlckluaXQgPSBmdW5jdGlvbihzdGF0dXMpIHtcbiAgQWtpbGkuX19pbml0ID0gc3RhdHVzO1xuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FraWxpLWluaXQnLCB7IGRldGFpbDogc3RhdHVzIH0pKTtcbn07XG5cbi8qKlxuICogU2VydmVyIHJlbmRlcmluZyBpbXBsZW1lbnRhdGlvblxuICovXG5Ba2lsaS5zZXJ2ZXJSZW5kZXJpbmcgPSBmdW5jdGlvbigpIHtcbiAgbGV0IHNlcnZlciA9IHRoaXMuX19odG1sLmdldEF0dHJpYnV0ZSgnYWtpbGktc2VydmVyJyk7XG5cbiAgdGhpcy5fX3NlcnZlclJlbmRlcmluZyA9ICEhc2VydmVyO1xuXG4gIGlmIChzZXJ2ZXIpIHtcbiAgICBsZXQgZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fX2h0bWwpLmRpc3BsYXk7XG4gICAgdGhpcy5fX2h0bWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMuX19zZXJ2ZXJQcm9taXNlID0gcmVxdWVzdC5nZXQoc2VydmVyKS50aGVuKChyZXMpID0+IHsgICAgICBcbiAgICAgIHRoaXMuX19odG1sLmlubmVySFRNTCA9IHJlcy5kYXRhO1xuICAgICAgdGhpcy5fX2h0bWwuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbcm9vdF1cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5pbml0ID0gZnVuY3Rpb24ocm9vdCkge1xuICB0aGlzLl9fcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG5cbiAgcmV0dXJuIHRoaXMuX19zZXJ2ZXJQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNvbXBpbGUodGhpcy5fX3Jvb3QpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHJvdXRlci5fX2luaXQpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlci5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VySW5pdCh0cnVlKTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJJbml0KGZhbHNlKTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIERlaW5pdGlhbGl6ZSB0aGUgYXBwbGljYXRpb25cbiAqL1xuQWtpbGkuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVba2V5XSA9IHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZSkge1xuICAgIEFycmF5LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5BcnJheS5wcm90b3R5cGVba2V5XTtcbiAgfVxuXG4gIHdpbmRvdy5zZXRUaW1lb3V0ID0gdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0O1xuICB3aW5kb3cuc2V0SW50ZXJ2YWwgPSB0aGlzLl9fd2luZG93LnNldEludGVydmFsO1xuICB3aW5kb3cuUHJvbWlzZSA9IHRoaXMuX193aW5kb3cuUHJvbWlzZTtcbn07XG5cbi8qKlxuICogRGVmaW5lIGFsbCBkZWZhdWx0IGNvbXBvbmVudHNcbiAqL1xuQWtpbGkuZGVmaW5lID0gZnVuY3Rpb24oKSB7XG4gIEEuZGVmaW5lKCk7XG4gIEF1ZGlvLmRlZmluZSgpO1xuICBDb250ZW50LmRlZmluZSgpO1xuICBDb21wb25lbnQuZGVmaW5lKCk7XG4gIEVtYmVkLmRlZmluZSgpO1xuICBGb3IuZGVmaW5lKCk7XG4gIEluY2x1ZGUuZGVmaW5lKCk7XG4gIElmcmFtZS5kZWZpbmUoKTtcbiAgSW1hZ2UuZGVmaW5lKCk7XG4gIElucHV0LmRlZmluZSgpO1xuICBJZi5kZWZpbmUoKTtcbiAgT2JqZWN0cy5kZWZpbmUoKTtcbiAgUmFkaW8uZGVmaW5lKCk7XG4gIFJvdXRlLmRlZmluZSgpO1xuICBTZWxlY3QuZGVmaW5lKCk7XG4gIFNvdXJjZS5kZWZpbmUoKTtcbiAgVGV4dGFyZWEuZGVmaW5lKCk7XG4gIFRyYWNrLmRlZmluZSgpO1xuICBWaWRlby5kZWZpbmUoKTtcbn07XG5cbkFraWxpLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbkFraWxpLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbkFraWxpLlNjb3BlID0gU2NvcGU7XG5Ba2lsaS51dGlscyA9IHV0aWxzO1xuQWtpbGkuY29tcG9uZW50cy5BID0gQTtcbkFraWxpLmNvbXBvbmVudHMuQXVkaW8gPSBBdWRpbztcbkFraWxpLmNvbXBvbmVudHMuQ29udGVudCA9IENvbnRlbnQ7XG5Ba2lsaS5jb21wb25lbnRzLkZvciA9IEZvcjtcbkFraWxpLmNvbXBvbmVudHMuRW1iZWQgPSBFbWJlZDtcbkFraWxpLmNvbXBvbmVudHMuSWYgPSBJZjtcbkFraWxpLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG5Ba2lsaS5jb21wb25lbnRzLklucHV0ID0gSW5wdXQ7XG5Ba2lsaS5jb21wb25lbnRzLklmcmFtZSA9IElmcmFtZTtcbkFraWxpLmNvbXBvbmVudHMuSW1hZ2UgPSBJbWFnZTtcbkFraWxpLmNvbXBvbmVudHMuT2JqZWN0ID0gT2JqZWN0cztcbkFraWxpLmNvbXBvbmVudHMuUmFkaW8gPSBSYWRpbztcbkFraWxpLmNvbXBvbmVudHMuUm91dGUgPSBSb3V0ZTtcbkFraWxpLmNvbXBvbmVudHMuU2VsZWN0ID0gU2VsZWN0O1xuQWtpbGkuY29tcG9uZW50cy5Tb3VyY2UgPSBTb3VyY2U7XG5Ba2lsaS5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuQWtpbGkuY29tcG9uZW50cy5UZXh0YXJlYSA9IFRleHRhcmVhO1xuQWtpbGkuY29tcG9uZW50cy5UcmFjayA9IFRyYWNrO1xuQWtpbGkuY29tcG9uZW50cy5VcmwgPSBVcmw7XG5Ba2lsaS5jb21wb25lbnRzLlZpZGVvID0gVmlkZW87XG5Ba2lsaS5zZXJ2aWNlcy5yZXF1ZXN0ID0gcmVxdWVzdDtcbkFraWxpLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcbkFraWxpLnNlcnZpY2VzLnN0b3JlID0gc3RvcmU7XG5cbndpbmRvdy5Ba2lsaSA9IEFraWxpO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50cyA9IEFraWxpLmNvbXBvbmVudHM7XG5leHBvcnQgY29uc3Qgc2VydmljZXMgPSBBa2lsaS5zZXJ2aWNlcztcbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xuXG5Ba2lsaS5zZXJ2ZXJSZW5kZXJpbmcoKTtcbkFraWxpLmRlZmluZSgpO1xuQWtpbGkuZXJyb3JIYW5kbGluZygpO1xuQWtpbGkuaXNvbGF0ZUV2ZW50cygpO1xuQWtpbGkuaXNvbGF0ZUFycmF5UHJvdG90eXBlKCk7XG5Ba2lsaS5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9ha2lsaS5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcclxuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVybCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIG1hdGNoZXMgPSAnW3VybF0nO1xyXG5cclxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XHJcbiAgICBzdXBlciguLi5hcmdzKTtcclxuXHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlZFVybCh1cmwpIHtcclxuICAgIHRoaXMuc2V0VXJsKHVybCk7XHJcbiAgfVxyXG5cclxuICBjb21waWxlZCgpIHtcclxuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3VybCcpICYmIHRoaXMuc2V0VXJsKHRoaXMuYXR0cnMudXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy91cmwuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3NlcnZpY2VzL3JlcXVlc3QuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBldmFsdWF0aW9uUmVnZXggPSAvXFwkeygoKD8hXFwkeykuKSopfS87XG5jb25zdCBldmFsdWF0aW9uUmVnZXhHbG9iYWwgPSBuZXcgUmVnRXhwKGV2YWx1YXRpb25SZWdleC5zb3VyY2UsIFwiZ1wiKTtcbmNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZSddO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFtdO1xuICBzdGF0aWMgZXZlbnRzID0gW107XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IGZhbHNlO1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgc3RhdGljIHRlbXBsYXRlID0gJyc7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICcnO1xuICBzdGF0aWMgc2NvcGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBkZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtFdmVudH0gW2V2ZW50PW51bGxdXG4gICAqL1xuICBzdGF0aWMgcGFyc2UoY29udGV4dCwgZXhwcmVzc2lvbiwgZXZlbnQgPSBudWxsKSB7XG4gICAgcmV0dXJuIChmdW5jdGlvbiAoZXhwcmVzc2lvbiwgZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmFsKGV4cHJlc3Npb24pO1xuICAgIH0pLmNhbGwoY29udGV4dCwgZXhwcmVzc2lvbiwgZXZlbnQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWwsIHNjb3BlID0ge30pIHtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19hdHRycyA9IHt9O1xuICAgIHRoaXMuX19saW5rcyA9IHt9O1xuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgdGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSByZWNvbXBpbGF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVjb21waWxlKCkge1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9faXNDb21waWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0ge307XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNyZWF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlKCkge1xuICAgIHRoaXMuZWwuX19ha2lsaSA9IHRoaXM7XG4gICAgdGhpcy5fX2luaXRpYWxpemUoKTtcbiAgICB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX3NldFBhcmVudHMoKTtcbiAgICB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fZGVmaW5lQXR0cmlidXRlcygpO1xuXG4gICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZWQodGhpcy5hdHRycyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19jb21waWxlKCkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzIHx8ICF0aGlzLl9fZXZhbHVhdGVQYXJlbnQ7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IGNvbnRyb2w/IHRoaXM6IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpO1xuXG4gICAgaWYgKCF0aGlzLl9fcmVjb21waWxpbmcgfHwgdGhpcy5fX2NvbXBpbGluZy5uZXdQYXJlbnQgfHwgdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzKSB7XG4gICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKHRoaXMuZWwsIHRoaXMuX19hdHRyaWJ1dGVPZik7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMpIHtcbiAgICAgICAgICB0aGlzLl9faW5pdGlhbGl6ZU5vZGUoY2hpbGQsIHBhcmVudCk7XG5cbiAgICAgICAgICBjaGlsZC5ub2RlVmFsdWUgPSB0aGlzLl9fZXZhbHVhdGUoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09IDEgJiYgIWNoaWxkLl9fYWtpbGkpIHtcbiAgICAgICAgICB0aGlzLl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzKGNoaWxkKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShjaGlsZC5jaGlsZE5vZGVzLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW50ZXJwb2xhdGUodGhpcy5lbC5jaGlsZE5vZGVzLCB0aGlzLmVsKTtcbiAgICB0aGlzLl9faXNNb3VudGVkID0gdHJ1ZTtcblxuICAgIGxldCByZXM7XG5cbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZWQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgICBwID0gcmVxdWVzdC5nZXQodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLl9fY29udGVudDtcbiAgICAgICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCByZXMuZGF0YSk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuXG4gICAgICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIEFraWxpLmlzb2xhdGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dHJzLm9uUmVjb21waWxlZCAmJiB0aGlzLmF0dHJzLm9uUmVjb21waWxlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5yZWNvbXBpbGVkKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNDb21waWxlZCA9IHRydWU7XG4gICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gbnVsbDtcblxuICAgIHJldHVybiBwLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIF9fcmVzb2x2ZSgpIHtcbiAgICBpZiAodGhpcy5fX3JlY29tcGlsaW5nKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRycy5vblJlc29sdmVkICYmIHRoaXMuYXR0cnMub25SZXNvbHZlZC50cmlnZ2VyKHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzb2x2ZWQoKSk7XG4gIH1cblxuICAvKipcbiAgICogUGFydCBvZiB0aGUge0BzZWUgQ29tcG9uZW50I19fY29tcGlsZX0gbWV0aG9kXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZSgpIHtcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTtcbiAgICBsZXQgU2NvcGUgPSB0aGlzLmNvbnN0cnVjdG9yLnNjb3BlIHx8IEFraWxpLlNjb3BlO1xuICAgIGxldCBzY29wZTtcbiAgICBsZXQgaXNSb290ID0gQWtpbGkuX19yb290ID09PSB0aGlzLmVsO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgc2NvcGUgPSBuZXcgU2NvcGUodGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3Njb3BlJykgfHwgQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKGlzUm9vdD8gJ3Jvb3QnOiBBa2lsaS5jcmVhdGVTY29wZU5hbWUoKSwgdGhpcy5lbCwgdGhpcyk7XG4gICAgICBpc1Jvb3QgJiYgKEFraWxpLnJvb3QgPSB0aGlzKTtcbiAgICB9XG5cbiAgICBsZXQgX19zY29wZSA9IHNjb3BlO1xuICAgIGxldCBfc2NvcGUgPSBPYmplY3QuYXNzaWduKHNjb3BlLCB0aGlzLnNjb3BlKTtcbiAgICBsZXQgY29udHJvbEF0dHJpYnV0ZXMgPSB0aGlzLmNvbnN0cnVjdG9yLmNvbnRyb2xBdHRyaWJ1dGVzO1xuICAgIGxldCBldmVudHMgPSB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50cztcblxuICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKSB7XG4gICAgICBBa2lsaS5zZXRUZW1wbGF0ZSh0aGlzLmVsLCB0aGlzLmNvbnN0cnVjdG9yLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZVVybCkge1xuICAgICAgdGhpcy5fX2NvbnRlbnQgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fX3Njb3BlID0gX19zY29wZTtcbiAgICB0aGlzLl9fZXZlbnRzID0gZXZlbnRzO1xuICAgIHRoaXMuX19jb250cm9sQXR0cmlidXRlcyA9IGNvbnRyb2xBdHRyaWJ1dGVzO1xuXG4gICAgQWtpbGkuYWRkU2NvcGUoc2NvcGUpO1xuICAgIHNjb3BlID0gdGhpcy5fX25lc3RlZE9ic2VydmUoX3Njb3BlLCBbXSk7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBib29sZWFuIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRCb29sZWFuQXR0cmlidXRlcygpIHtcbiAgICB0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzID0gW10uY29uY2F0KEFraWxpLmh0bWxCb29sZWFuQXR0cmlidXRlcywgdGhpcy5jb25zdHJ1Y3Rvci5ib29sZWFuQXR0cmlidXRlcyk7XG5cbiAgICBjb25zdCBzZXRBdHRyID0gKGVsKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgYXR0cnMgPSBlbC5hdHRyaWJ1dGVzLCBsID0gYXR0cnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBub2RlID0gYXR0cnNbaV07XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihub2RlLm5vZGVOYW1lKSAhPSAtMSkge1xuICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWApKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYGJvb2xlYW4tJHtub2RlLm5vZGVOYW1lfWAsIGVsLmdldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lKSB8fCBub2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBlbC5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgc2V0QXR0cihjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc2V0QXR0cih0aGlzLmVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZXZlbnRzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0RXZlbnRzKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5fX2V2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBldiA9IHRoaXMuX19ldmVudHNbaV07XG5cbiAgICAgICEvXm9uLS9pLnRlc3QoZXYpICYmIChldiA9ICdvbi0nICsgZXYpO1xuXG4gICAgICBpZiAoIXRoaXMuZWwuaGFzQXR0cmlidXRlKGV2KSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShldiwgJycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHBhcmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXRQYXJlbnRzKCkge1xuICAgIGxldCBwYXJlbnRzID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwpO1xuXG4gICAgaWYgKCFwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuZXdQYXJlbnQgPSB0aGlzLl9fcGFyZW50ICE9PSBwYXJlbnRzWzBdO1xuICAgIGxldCBldmFsdWF0ZVBhcmVudCA9IG51bGw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcGFyZW50ID0gcGFyZW50c1tpXTtcblxuICAgICAgaWYgKCFwYXJlbnQuX19ha2lsaS5jb25zdHJ1Y3Rvci50cmFuc3BhcmVudCkge1xuICAgICAgICBldmFsdWF0ZVBhcmVudCA9IHBhcmVudDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQgPSBldmFsdWF0ZVBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2FkZENoaWxkKGVsKSB7XG4gICAgdGhpcy5fX2NoaWxkcmVuLnB1c2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGljZSBjaGlsZCBmcm9tIHRoZSBsaXN0XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3BsaWNlQ2hpbGQoZWwpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IHRoaXMuX19jaGlsZHJlbltpXTtcblxuICAgICAgaWYgKGNoaWxkID09PSBlbCkge1xuICAgICAgICB0aGlzLl9fY2hpbGRyZW4uc3BsaWNlKGksIDEpO1xuICAgICAgICBpLS07XG4gICAgICAgIGwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogWW91IGNhbiBjaGFuZ2UgZXhwcmVzc2lvbiBiZWZvcmUgcGFyc2luZyBoZXJlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldFBhcnNlZEV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIG5vZGUgaGFzIGFueSBwcm9wZXJ0eSBjaGFuZ2VzIG9yIG5vdFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tFdmFsdWF0aW9uKG5vZGUpIHtcbiAgICBpZiAoIU9iamVjdC5rZXlzKG5vZGUuX19wcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGsgaW4gbm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgIGlmICghbm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBwcm9wID0gbm9kZS5fX3Byb3BlcnRpZXNba107XG4gICAgICBsZXQgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwcm9wLmtleXMsIHByb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICBpZiAoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBwcm9wLnZhbHVlLCBwcm9wLmNvcHksIHV0aWxzLmNvcHkodmFsdWUpKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdpbmcobm9kZSwga2V5cywgdmFsdWUpIHtcbiAgICBsZXQgcHJvcCA9IHRoaXMuX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG5cbiAgICBpZiAoIXByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhdXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUodmFsdWUsIHByb3AudmFsdWUsIHByb3AuY29weSwgdXRpbHMuY29weSh2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIG5vZGUgZXhwcmVzc2lvblxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGUobm9kZSkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWU7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBpZiAobm9kZS5fX2NvbXBvbmVudC5wYXJlbnRzKChjb20pID0+IGNvbS5fX3ByZXZlbnQpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG5vZGUuX19leHByZXNzaW9uO1xuICAgIH1cblxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5fX2NvbXBvbmVudC5fX3ByZXZlbnQpIHtcbiAgICAgIHJldHVybiBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBsZXQgcmVzID0gbm9kZS5fX2V4cHJlc3Npb24ucmVwbGFjZShldmFsdWF0aW9uUmVnZXhHbG9iYWwsIChtLCBkKSA9PiB7XG4gICAgICBjb3VudGVyKys7XG5cbiAgICAgIGxldCBldmFsdWF0ZTtcbiAgICAgIGxldCBldmFsdWF0aW9uO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJzZVZhbHVlID0gbm9kZS5fX2NvbXBvbmVudC5fX2dldFBhcnNlZEV4cHJlc3Npb24oZCk7XG5cbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW119O1xuXG4gICAgICB0cnkge1xuICAgICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIHBhcnNlVmFsdWUpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG5cbiAgICAgIGV2YWx1YXRpb24gPSBBa2lsaS5fX2V2YWx1YXRpb24/IEFraWxpLl9fZXZhbHVhdGlvbi5saXN0OiBbXTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGZvciAobGV0IGkgPSBldmFsdWF0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBkYXRhID0gZXZhbHVhdGlvbltpXTtcbiAgICAgICAgbGV0IGhhc2ggPSBgJHtkYXRhLmNvbXBvbmVudC5fX3Njb3BlLl9fbmFtZX0uJHtkYXRhLmtleXNTdHJpbmd9YDtcblxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcbiAgICAgICAgbGV0IGV2YWxDb21wb25lbnQgPSBub2RlLl9fYXR0cmlidXRlT2YgfHwgbm9kZS5fX2NvbXBvbmVudDtcblxuICAgICAgICBpZiAodXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiaW5kID0gZGF0YS5jb21wb25lbnQuX19nZXRCb3VuZE5vZGUoZGF0YS5rZXlzLCBub2RlKTtcbiAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5rZXlzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICBpZiAoIWJpbmQpIHtcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudC5fX2JpbmQoZGF0YS5rZXlzLCB7IG5vZGU6IG5vZGUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShub2RlLCBkYXRhLmtleXMsIHZhbHVlKTtcbiAgICAgICAgZXhpc3RpbmdCaW5kaW5nc1toYXNoXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGV4aXN0aW5nQmluZGluZ3MgPSBudWxsO1xuICAgICAgZXZhbHVhdGlvbiA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IG07XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZXZhbHVhdGU7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLm1ha2VBdHRyaWJ1dGVWYWx1ZShldmFsdWF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZXZhbHVhdGUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZhbHVhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGV2YWx1YXRlO1xuICAgIH0pO1xuXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgbGV0IHZhbHVlID0gcmVzO1xuICAgICAgbGV0IGlzQm9vbGVhbkF0dHJpYnV0ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoY291bnRlcikge1xuICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY291bnRlciA9PSAxICYmIGV4cHJlc3Npb24gJiYgbm9kZS5fX2V4cHJlc3Npb24gPT0gZXhwcmVzc2lvbikge1xuICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG5cbiAgICAgIGlmIChjbGVhckF0dHJpYnV0ZSAhPSBub2RlLm5vZGVOYW1lKSB7XG4gICAgICAgIGlzQm9vbGVhbkF0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuX19hdHRyaWJ1dGVPbikge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9uO1xuXG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSB0cnVlO1xuICAgICAgICBjb21wb25lbnQuYXR0cnNbdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpXSA9IHZhbHVlO1xuICAgICAgICBjb21wb25lbnQuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzQ29tcGlsZWQpIHtcbiAgICAgICAgICBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hdHRycy5vbkNoYW5nZWQgJiYgY29tcG9uZW50LmF0dHJzLm9uQ2hhbmdlZC50cmlnZ2VyKHsga2V5OiBjbGVhckF0dHJpYnV0ZSwgdmFsdWU6IHZhbHVlfSwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5jaGFuZ2VkKGNsZWFyQXR0cmlidXRlLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGxldCBrZXkgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBsZXQgY2FtZWxLZXkgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcbiAgICAgICAgICAgIGxldCBmbk5hbWUgPSAnY2hhbmdlZCcgKyBjYW1lbEtleTtcbiAgICAgICAgICAgIGxldCBldkZuTmFtZSA9ICdvbkNoYW5nZWQnICsgY2FtZWxLZXk7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5hdHRyc1tldkZuTmFtZV0gJiYgY29tcG9uZW50LmF0dHJzW2V2Rm5OYW1lXS50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgICAgICAgICAgdHlwZW9mIGNvbXBvbmVudFtmbk5hbWVdID09ICdmdW5jdGlvbicgJiYgY29tcG9uZW50W2ZuTmFtZV0odmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0Jvb2xlYW5BdHRyaWJ1dGUpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBub2RlLl9fZWxlbWVudDtcbiAgICAgICAgbGV0IGF0dHIgPSB1dGlscy50b0NhbWVsQ2FzZShjbGVhckF0dHJpYnV0ZSk7XG5cbiAgICAgICAgdmFsdWU/IGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsICd0cnVlJyk6IGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIGV2YWx1YXRpb24gYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dpdGhvdXRQYXJlbnRzPWZhbHNlXSAtIGlmIHRydWUgZXZhbHVhdGlvbiB3aWxsIGJlIG9ubHkgZm9yIHRoZSBjdXJyZW50IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZU5lc3RlZChrZXlzLCB3aXRob3V0UGFyZW50cyA9IGZhbHNlKSB7XG4gICAgbGV0IHNjb3BlID0gdGhpcy5fX3Njb3BlO1xuICAgIGxldCBwcm9wcyA9IFtdO1xuXG4gICAgaWYgKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KTtcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBjb25zdCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCBjb21wb25lbnQgPSBlbGVtZW50Ll9fYWtpbGk7XG5cbiAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgcHJvcHNMZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgcHJvcCA9IHByb3BzW21dO1xuICAgICAgICBsZXQgZGF0YSA9IGNvbXBvbmVudC5fX2dldEJpbmQocHJvcC5rZXlzKTtcblxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuX19kYXRhKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEuX19kYXRhLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgICAgIGxldCBiaW5kID0gZGF0YS5fX2RhdGFba107XG5cbiAgICAgICAgICBpZiAoY29tcG9uZW50Ll9fY2hlY2tOb2RlUHJvcGVydHlDaGFuZ2luZyhiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgX2sgaW4gYmluZC5ub2RlLl9fcHJvcGVydGllcykge1xuICAgICAgICAgICAgICBpZiAoIWJpbmQubm9kZS5fX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoX2spKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuXG4gICAgICAgICAgICAgIF9wcm9wLmNvbXBvbmVudC5fX3NldE5vZGVQcm9wZXJ0eShiaW5kLm5vZGUsIF9wcm9wLmtleXMsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcblxuICAgICAgICBldmFsdWF0ZShjb21wb25lbnQuX19jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGVsRXZhbHVhdGUodGhpcy5lbCk7XG4gICAgZXZhbHVhdGUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSB2YWx1ZSBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlbGV0ZWQ9ZmFsc2VdIC0gdHJ1ZSBpZiB2YWx1ZSBpcyBkZWxldGluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlQnlLZXlzKGtleXMsIHZhbHVlLCBpc0RlbGV0ZWQgPSBmYWxzZSkge1xuICAgIGxldCBkYXRhID0gdGhpcy5fX2dldEJpbmQoa2V5cyk7XG5cbiAgICBjb25zdCB1bmJpbmQgPSAob2JqLCBwYXJlbnRzKSA9PiB7XG4gICAgICBmb3IgKGxldCBrIGluIG9iaikge1xuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSB8fCBrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgX2tleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTtcbiAgICAgICAgbGV0IF9fa2V5cyA9IF9rZXlzLnNsaWNlKCk7XG4gICAgICAgIGxldCBfaXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgICAgIGxldCBoYXNLZXk7XG5cbiAgICAgICAgX19rZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc0tleSA9IHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRhdGEgJiYgdW5iaW5kKGRhdGEsIFtdLmNvbmNhdChrZXlzKSk7XG4gICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKGtleXMpO1xuXG4gICAgaWYgKGlzRGVsZXRlZCkge1xuICAgICAgdGhpcy5fX3VuYmluZChrZXlzKTtcbiAgICAgIGlzRGVsZXRlZCAmJiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBldmVudCBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVFdmVudChub2RlLCBlbCwgZSkge1xuICAgIGxldCBleHByZXNzaW9uID0gZXZhbHVhdGlvblJlZ2V4LmV4ZWMobm9kZS5fX2V4cHJlc3Npb24pO1xuICAgIGxldCBldmFsdWF0ZTtcblxuICAgIGlmICghZXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSB7XG4gICAgICBlbDogZWwsXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBldmVudDogZSxcbiAgICAgIG5vZGU6IG5vZGVcbiAgICB9O1xuXG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgZXZhbHVhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLnBhcnNlKHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50LnNjb3BlLCBleHByZXNzaW9uWzFdLCBlKTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOb2RlKG5vZGUpIHtcbiAgICBpZiAodGhpcy5fX2NoZWNrRXZhbHVhdGlvbihub2RlKSkge1xuICAgICAgbm9kZVsobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKT8gJ3ZhbHVlJzogJ25vZGVWYWx1ZSddID0gdGhpcy5fX2V2YWx1YXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGUgbm9kZSBpbml0aWFsaXppbmdcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKTtcblxuICAgIGxldCBldmVudE5hbWUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15vbi0oLispL2ksICckMScpO1xuICAgIGxldCBub2RlTmFtZSA9IHV0aWxzLnRvQ2FtZWxDYXNlKG5vZGUubm9kZU5hbWUpO1xuICAgIGxldCBjb21wb25lbnQgPSBhdHRyaWJ1dGVPZj8gYXR0cmlidXRlT2Y6IHRoaXM7XG5cbiAgICBpZiAoZXZlbnROYW1lICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW1pdHRlciA9IG5ldyBBa2lsaS5FdmVudEVtaXR0ZXIoZXZlbnROYW1lLCBlbCwgY29tcG9uZW50KTtcblxuICAgICAgaWYgKG5vZGUuX19leHByZXNzaW9uKSB7XG4gICAgICAgIGVtaXR0ZXIuYmluZCgoZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1tub2RlTmFtZV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBjb21wb25lbnQuX19ldmFsdWF0ZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZU5vZGUobm9kZSwgZWwpIHtcbiAgICBpZiAobm9kZS5fX2luaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX2V4cHJlc3Npb24gPSBub2RlWyhub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgbm9kZS5fX3Byb3BlcnRpZXMgPSB7fTtcbiAgICBub2RlLl9fYXR0cmlidXRlT2YgPSBudWxsO1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPbiA9IG51bGw7XG4gICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcnBvbGF0ZSBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBbYXR0cmlidXRlT2Y9bnVsbF0gLSBpZiBub2RlIGlzIGxpbmtlZCB3aXRoIHBhcmVudCBzY29wZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2ludGVycG9sYXRlQXR0cmlidXRlcyhlbCwgYXR0cmlidXRlT2YgPSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUoYXR0cnNbaV0sIGVsLCBhdHRyaWJ1dGVPZik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZSBhdHRyaWJ1dGVzIGFzIHByb3h5XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVmaW5lQXR0cmlidXRlcygpIHtcbiAgICBjb25zdCBjaGFuZ2VBdHRyaWJ1dGUgPSAoa2V5LCB2YWx1ZSwgaXNEZWxldGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGlmICh0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLl9fZXZlbnQpIHtcbiAgICAgICAgICBub2RlLl9fZXZlbnQudW5iaW5kKCk7XG4gICAgICAgICAgbm9kZS5fX2V2ZW50ID0gbnVsbDtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncykge1xuICAgICAgICAgIHRoaXMuX19wYXJlbnQgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fZXZhbHVhdGlvbkNvbXBvbmVudC5fX3VuYmluZEJ5Tm9kZXMoW25vZGVdKTtcbiAgICAgICAgICBub2RlLl9faGFzQmluZGluZ3MgPSBmYWxzZTtcbiAgICAgICAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0RlbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmF0dHJzID0gbmV3IFByb3h5KHRoaXMuX19hdHRycywge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSAnX19pc1Byb3h5Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgfSxcbiAgICAgIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBpZiAodGhpcy5ib29sZWFuQXR0cmlidXRlcy5pbmRleE9mKGF0dHJLZXkpICE9IC0xKSB7XG4gICAgICAgICAgYXR0cktleSA9IGBib29sZWFuLSR7YXR0cktleX1gO1xuXG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgYXR0cktleSA9IHV0aWxzLnRvRGFzaENhc2Uoa2V5KTtcblxuICAgICAgICBjaGFuZ2VBdHRyaWJ1dGUoYXR0cktleSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKHZhbHVlKSwgdHJ1ZSk7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJveHkgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PSBcIl9faXNQcm94eVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5ID09IFwiX19jb21wb25lbnRcIikge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fa2V5c1wiKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2Rpc2FibGVQcm94eSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxldCByZWFsVGFyZ2V0ICA9IHV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KTtcblxuICAgICAgICAgIGlmICghdXRpbHMuaXNQbGFpbk9iamVjdChyZWFsVGFyZ2V0KSkge1xuICAgICAgICAgICAgcmVhbFRhcmdldFtrZXldID0gQWtpbGkuaXNvbGF0ZUZ1bmN0aW9uKHJlYWxUYXJnZXRba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcbiAgICAgICAgICBsZXQgbm90QmluZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICghdXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0KHRhcmdldCwga2V5KSkge1xuICAgICAgICAgICAgbm90QmluZGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fX2JpbmROb2RlKEFraWxpLl9fZXZhbHVhdGlvbi5saXN0LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZyk7XG5cbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9fZGlzYWJsZVByb3h5KSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc1N5c3RlbUtleShrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tleV0pO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5fX2xpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV0pIHtcbiAgICAgICAgICB0aGlzLl9fc3RvcmVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG5cbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5fX2NyZWF0ZUlzb2xhdGlvbk9iamVjdChwYXJlbnRzLCBrZXksIGZhbHNlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX19pc01vdW50ZWQpIHtcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX19kaXNhYmxlUHJveHkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9faXNTeXN0ZW1LZXkoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7XG4gICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3N0b3JlQnlLZXlzKGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IGxpbmtzID0gdGhpcy5fX2xpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICBcbiAgICBpZighbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHV0aWxzLmlzU2NvcGVQcm94eSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuX190YXJnZXQ7XG4gICAgfVxuICAgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBsaW5rID0gbGlua3NbaV07XG4gICAgICB0aGlzLl9fc3RvcmUobGluay5uYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIHZhbHVlIHRvIHRoZSBzdG9yZSBieSB0aGUgbmFtZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmUobmFtZSwgdmFsdWUpIHsgIFxuICAgIHN0b3JlLl9fdGFyZ2V0W25hbWVdID0gdmFsdWU7XG5cbiAgICBsZXQgbGlua3MgPSBBa2lsaS5fX2xpbmtzW25hbWVdO1xuXG4gICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGluayA9IGxpbmtzW2ldO1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGxpbmsuY29tcG9uZW50O1xuXG4gICAgICBpZihjb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmKGxpbmsuZm4pIHtcbiAgICAgICAgbGluay5mbih2YWx1ZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gdHJ1ZTtcbiAgICAgIGNvbXBvbmVudC5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTsgICAgICBcbiAgICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB3aXRoIHRoZSBzY29wZSBwcm9wZXJ0eVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqL1xuICBfX2xpbmtCeUtleXMobmFtZSwga2V5cykge1xuICAgIGlmKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYExpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgdGhpcy5zY29wZS5fX3NldChrZXlzLCBzdG9yZVtuYW1lXSk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgaW5mbztcblxuICAgIGlmKCF0aGlzLl9fbGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX2xpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX2xpbmtzW2tleVN0cmluZ107XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuXG4gICAgICBpZihyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFBa2lsaS5fX2xpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX2xpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgaW5mbyA9IHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBrZXlzLCBrZXlTdHJpbmcgfTtcbiAgICB0aGlzLl9fbGlua3Nba2V5U3RyaW5nXS5wdXNoKGluZm8pO1xuICAgIEFraWxpLl9fbGlua3NbbmFtZV0ucHVzaChpbmZvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICovXG4gIF9fbGlua0J5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBmbihzdG9yZVtuYW1lXSk7XG5cbiAgICBpZighQWtpbGkuX19saW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19saW5rc1tuYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fbGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWtpbGkuX19saW5rc1tuYW1lXS5wdXNoKHsgY29tcG9uZW50OiB0aGlzLCBuYW1lLCBmbiB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqL1xuICBfX3VubGlua0J5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3IgbGluayBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIGlmKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cblxuICAgIGxldCBrZXlTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyk7XG4gICAgbGV0IGFyciA9IHRoaXMuX19saW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19saW5rc1tyZXMubmFtZV07XG5cbiAgICAgIGlmKHJlcy5jb21wb25lbnQgIT09IHRoaXMgfHwgcmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcblxuICAgICAgaWYoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvcihsZXQgayA9IGxpbmtzLmxlbmd0aCAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gbGlua3Nba107XG5cbiAgICAgICAgaWYobGluay5jb21wb25lbnQgPT09IHRoaXMgJiYgbGluay5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgICAgbGlua3Muc3BsaWNlKGssIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIEFraWxpLl9fbGlua3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIWFyci5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fbGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbGluayB3aXRoIHRoZSBmdW5jdGlvblxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBfX3VubGlua0J5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZighQWtpbGkuX19saW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fbGlua3NbbmFtZV07XG4gICAgXG4gICAgZm9yKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgbGlua3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZighbGlua3MubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgQWtpbGkuX19saW5rc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pc1N5c3RlbUtleSAoa2V5KSB7XG4gICAgaWYgKGtleSA9PSAnX18nIHx8IChrZXlbMF0gPT0gJ18nICYmIGtleVsxXSA9PSAnXycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoWydjb25zdHJ1Y3RvciddLmluZGV4T2Yoa2V5KSAhPSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBvYnNlcnZpbmcgdGhlIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3N0YXJ0S2V5c11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19uZXN0ZWRPYnNlcnZlICh2YWx1ZSwgc3RhcnRLZXlzKSB7XG4gICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IHRydWU7XG5cbiAgICBjb25zdCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KHZhbHVlKSAmJiAhdXRpbHMuaXNTY29wZVByb3h5KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQWtpbGkuU2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICBpZiAodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgICAgIHRhcmdldCA9IHZhbHVlLl9fdGFyZ2V0O1xuXG4gICAgICAgIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBpZiAodmFsdWUuX19jb21wb25lbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFraWxpLlNjb3BlKSkge1xuICAgICAgICB0YXJnZXQgPSB1dGlscy5jb3B5KHRhcmdldCwgZmFsc2UsIHRydWUpOyAgICAgICAgICBcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0KSB7XG4gICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdmFsID0gdGFyZ2V0W2tdO1xuICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba10pO1xuXG4gICAgICAgIHRhcmdldFtrXSA9IG9ic2VydmUodmFsLCBrZXlzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWx1ZS5fX2lzUHJveHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19vYnNlcnZlKHRhcmdldCwgcGFyZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgbGV0IHJlcyA9IG9ic2VydmUodmFsdWUsIHN0YXJ0S2V5cyB8fCBbXSk7XG5cbiAgICB0aGlzLl9fZGlzYWJsZVByb3h5ID0gbnVsbDtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGlzb2xhdGlvbiBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVsZXRlZD1mYWxzZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IChwYXJlbnRzLCBrZXksIGlzRGVsZXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IGtleXMgPSBwYXJlbnRzLmxlbmd0aD8gW3BhcmVudHNbMF1dOiBba2V5XTtcbiAgICBsZXQgaXNvbGF0aW9uS2V5ID0gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldKSB7XG4gICAgICBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25LZXldID0ge1xuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgIGtleXM6IGtleXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgKGlzRGVsZXRlZCAhPT0gdW5kZWZpbmVkKSAmJiAoQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uS2V5XS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV0udmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fc2NvcGUpO1xuXG4gICAgcmV0dXJuIEFraWxpLl9faXNvbGF0aW9uW2lzb2xhdGlvbktleV07XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSB0aGUgbm9kZSB0byBiaW5kaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBiaW5kIC0gYnkgZGVmYXVsdCBpcyBjb21wb25lbnQuX19ldmFsdWF0aW9uLmxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbbm90QmluZGluZz1mYWxzZV1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kTm9kZShiaW5kLCBrZXlzLCBwYXJlbnRzLCB2YWx1ZSwgbm90QmluZGluZyA9IGZhbHNlKSB7XG4gICAgbGV0IHBhcmVudEtleXNTdHJpbmcgPSBBa2lsaS5qb2luQmluZGluZ0tleXMocGFyZW50cyk7XG5cbiAgICBpZiAoYmluZC5sZW5ndGggJiYgIW5vdEJpbmRpbmcpIHtcbiAgICAgIGxldCBsID0gYmluZC5sZW5ndGggLSAxO1xuICAgICAgbGV0IGRhdGEgPSBiaW5kW2xdO1xuXG4gICAgICBpZiAoZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgYmluZC5zcGxpY2UobCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYmluZC5wdXNoKHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHM6IHBhcmVudHMsXG4gICAgICBrZXlzOiBrZXlzLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgbm90QmluZGluZzogbm90QmluZGluZ1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0QmluZChrZXlzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncykgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRCb3VuZE5vZGUoa2V5cywgbm9kZSkge1xuICAgIGxldCBiaW5kID0gIHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhIHx8ICFiaW5kLl9fZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluZC5fX2RhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZGF0YSA9IGJpbmQuX19kYXRhW2ldO1xuXG4gICAgICBpZiAoZGF0YS5ub2RlID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbm9kZSBwcm9wZXJ0eVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzLCB2YWx1ZSkge1xuICAgIGxldCBwcm9wID0gdGhpcy5fX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKTtcbiAgICBsZXQgY29weSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSB1dGlscy5jb21wYXJlUHJldmlvdXNWYWx1ZSh2YWx1ZSwgcHJvcC52YWx1ZSwgcHJvcC5jb3B5LCBjb3B5KTtcblxuICAgICAgcHJvcC52YWx1ZSA9IHZhbHVlO1xuICAgICAgcHJvcC5jb3B5ID0gY29weTtcblxuICAgICAgcmV0dXJuICFyZXM7XG4gICAgfVxuXG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF0gPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBjb3B5OiBjb3B5LFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAga2V5czoga2V5c1xuICAgIH07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5vZGUgcHJvcGVydHlcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5vZGVQcm9wZXJ0eShub2RlLCBrZXlzKSB7XG4gICAgbGV0IGhhc2ggPSBgJHt0aGlzLl9fc2NvcGUuX19uYW1lfS4ke0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKX1gO1xuXG4gICAgcmV0dXJuIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG5cbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXNbaGFzaF07XG4gIH1cblxuICAvKipcbiAgICogQmluZCBkYXRhIHdpdGggdGhlIGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2JpbmQoa2V5cywgZGF0YSkge1xuICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKGxhc3QsIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgb2JqID0ge19fZGF0YTogW119O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmQoa2V5cykge1xuICAgIGxldCBiaW5kID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGJpbmQuX19kYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBiaW5kLl9fZGF0YVtpXS5ub2RlO1xuXG4gICAgICB0aGlzLl9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIH1cblxuICAgIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFsdWUuX19kYXRhID0gW107XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGVbXX0gbm9kZXNcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX191bmJpbmRCeU5vZGVzKG5vZGVzKSB7XG4gICAgY29uc3QgdW5iaW5kID0gKG9iaikgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG5cbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdW5iaW5kKG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdW5iaW5kKHRoaXMuX19iaW5kaW5ncyk7XG4gICAgdGhpcy5fX2NsZWFyRW1wdHlCaW5kaW5ncygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBlbXB0eSBiaW5kaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhckVtcHR5QmluZGluZ3Mob2JqKSB7XG4gICAgY29uc3QgY2xlYXIgPSAob2JqLCBwYXJlbnQsIGtleSkgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICAgICAgaWYgKGsgPT0gJ19fZGF0YScgJiYgKCF2YWwgfHwgIXZhbC5sZW5ndGgpKSB7XG4gICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrICE9ICdfX2RhdGEnKSB7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmpba10pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGVhcihvYmpba10sIG9iaiwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghT2JqZWN0LmtleXMob2JqKS5sZW5ndGggJiYgcGFyZW50KSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2xlYXIob2JqIHx8IHRoaXMuX19iaW5kaW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGxpbmtzXG4gICAqIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NsZWFyTGlua3MoKSB7XG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19saW5rcztcblxuICAgIGZvcihsZXQga2V5IGluIGxpbmtzKSB7XG4gICAgICBsZXQgYXJyID0gbGlua3Nba2V5XTtcblxuICAgICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGxldCBsaW5rID0gYXJyW2ldO1xuICBcbiAgICAgICAgaWYobGluay5jb21wb25lbnQgPT09IHRoaXMpIHtcbiAgICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZW1vdmVDaGlsZHJlbigpIHtcbiAgICBjb25zdCByZW1vdmUgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgcmVtb3ZlKGNoaWxkLl9fYWtpbGkuX19jaGlsZHJlbik7XG4gICAgICAgIGNoaWxkLl9fYWtpbGkuX19yZW1vdmUoKTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW1vdmUodGhpcy5fX2NoaWxkcmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRob3V0IGNoaWxkcmVuIHJlbW92aW5nXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fcmVtb3ZlKCkge1xuICAgIHRoaXMuX19kZXRhY2goKTtcbiAgICB0aGlzLl9fY2xlYXJMaW5rcygpO1xuICAgIHRoaXMuYXR0cnMub25SZW1vdmVkICYmIHRoaXMuYXR0cnMub25SZW1vdmVkLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICAgIHRoaXMucmVtb3ZlZCgpOyAgICBcbiAgICBBa2lsaS5yZW1vdmVTY29wZSh0aGlzLl9fc2NvcGUuX19uYW1lKTtcbiAgICB0aGlzLmVsLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGV0YWNoKCkge1xuICAgIGlmICh0aGlzLl9fZXZhbHVhdGVQYXJlbnQgJiYgIXRoaXMuX19jb250cm9sQXR0cmlidXRlcykge1xuICAgICAgdGhpcy5fX2V2YWx1YXRlUGFyZW50Ll9fYWtpbGkuX191bmJpbmRCeU5vZGVzKFtdLnNsaWNlLmNhbGwodGhpcy5lbC5hdHRyaWJ1dGVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3NwbGljZUNoaWxkKHRoaXMuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIGNoaWxkcmVuXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVzdHJveSgpIHtcbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICB0aGlzLl9fcmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIGNvbXBvbmVudCBodG1sXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZW1wdHkoKSB7XG4gICAgbGV0IG5vZGVzID0gW107XG5cbiAgICB0aGlzLl9fcmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZpbmQgPSAoY2hpbGRyZW4pID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAzKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT0gMSAmJiAhY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGNoaWxkLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICAgIG5vZGVzLnB1c2goYXR0cnNbaV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmQoY2hpbGQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLmVsLmNoaWxkTm9kZXMpO1xuICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBwYXJlbnQgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudHxDb21wb25lbnRbXX1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJlbnQoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IGZhbHNlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChwYXJlbnQpID0+IHtcbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgIGlmICghc2VsZWN0b3IgfHwgcGFyZW50Ll9fYWtpbGkubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5wdXNoKHBhcmVudC5fX2FraWxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXZlbCsrO1xuICAgICAgZmluZChwYXJlbnQuX19ha2lsaS5fX3BhcmVudCk7XG4gICAgfTtcblxuICAgIGZpbmQodGhpcy5fX3BhcmVudCk7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhcnIucHVzaChjaGlsZC5fX2FraWxpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWwrKztcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZmluZChjaGlsZHJlbltpXS5fX2FraWxpLl9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaW5kKHRoaXMuX19jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBuZWFyZXN0IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JpZ2h0PWZhbHNlXSAtIGZyb20gdGhlIHJpZ2h0IHNpZGUgaWYgdHJ1ZVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldE5lYXIoc2VsZWN0b3IgPSAnJywgZmluZEFsbCA9IHRydWUsIHJpZ2h0ID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMuX19wYXJlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBsZXZlbEVsZW1lbnRzID0gdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fY2hpbGRyZW4uc2xpY2UoKTtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHRvIHRoZSBzdG9yZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBsaW5rKG5hbWUsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19saW5rQnlGdW5jdGlvbihuYW1lLCBoYW5kbGVyKTogdGhpcy5fX2xpbmtCeUtleXMobmFtZSwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVubGluayhuYW1lLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5saW5rQnlGdW5jdGlvbihuYW1lLCBoYW5kbGVyKTogdGhpcy5fX3VubGlua0J5S2V5cyhuYW1lLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgc3RvcmUobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX3N0b3JlKG5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IG1hdGNoZXMgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgbWF0Y2hlcyhzZWxlY3Rvcikge1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IHBhcmVudCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHBhcmVudChzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRQYXJlbnQoc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBwYXJlbnQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBwYXJlbnRzKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjaGlsZCBjb21wb25lbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IFtsZXZlbHM9bnVsbF1cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIGNoaWxkKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCBmYWxzZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY2hpbGQgY29tcG9uZW50cyBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBjaGlsZHJlbihzZWxlY3RvciA9ICcnLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXRDaGlsZHJlbihzZWxlY3RvciwgdHJ1ZSwgbGV2ZWxzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYmVmb3JlKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXJyYXkgb2YgY29tcG9uZW50cyByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGFmdGVyKHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCBsZWZ0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudH1cbiAgICovXG4gIHByZXYoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBjb21wb25lbnQgcmlnaHQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgbmV4dChzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGVsZW1lbnQgcGFyZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICAgKi9cbiAgYXBwZW5kVG8ocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXG4gICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjcmVhdGVkKCkge31cbiAgY29tcGlsZWQoKSB7fVxuICByZWNvbXBpbGVkKCkge31cbiAgY2hhbmdlZChrZXksIHZhbHVlKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50LmpzIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnXG5cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG5cbiAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHZhbCA9IG9ialtrXTtcblxuICAgIHZhbCAmJiBjbGFzc2VzLnB1c2goayk7XG4gIH1cblxuICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBzdHlsZSBhdHRyaWJ1dGUgZnJvbSBhbiBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcImNvbG9yOnJlZDt3aWR0aDoxMHB4XCJcbiAqIHV0aWxzLnN0eWxlKHtjb2xvcjogXCJyZWRcIiwgYmFja2dyb3VuZDogZmFsc2UsIHdpZHRoOiBcIjEwcHhcIn0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnN0eWxlID0gZnVuY3Rpb24ob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgbGV0IHN0eWxlcyA9IFtdO1xuXG4gIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCB2YWwgPSBvYmpba107XG5cbiAgICB2YWwgJiYgc3R5bGVzLnB1c2goYCR7dGhpcy50b0Rhc2hDYXNlKGspfToke3ZhbH1gKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZXMuam9pbignOycpO1xufTtcblxuLyoqXG4gKiBGaWx0ZXIgYW4gYXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbMSwgMTFdXG4gKiB1dGlscy5maWx0ZXIoWzEsIDIsIDMsIDExXSwgJzEnKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6MX0sIHt4OjExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6MX0sIHt4OjJ9LCB7eDozfSwge3g6MTF9XSwgJzEnLCBbJ3gnXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDp7eToxfX1dXG4gKiB1dGlscy5maWx0ZXIoW3t4Ont5OjF9fSwge3g6e3k6Mn19XSwgJzEnLCBbJ3gnLCAneSddKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cHxmdW5jdGlvbn0gaGFuZGxlciAtIHR5cGUgb2YgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gW2tleXNdIC0gZmlsdGVyIGluIHRoZSBrZXlzIGlmIGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RcbiAqIEByZXR1cm5zIHtBcnJheX0gLSByZXR1cm5zIG90aGVyIGFycmF5XG4gKi9cbnV0aWxzLmZpbHRlciA9IGZ1bmN0aW9uIChhcnIsIGhhbmRsZXIsIGtleXMgPSBbXSkge1xuICBsZXQgcmVzID0gW107XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmICghaGFuZGxlcikge1xuICAgIHJldHVybiBbLi4uYXJyXTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyW2ldO1xuICAgIGxldCB2YWwgPSBrZXlzLmxlbmd0aD8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBpdGVtKTogaXRlbTtcblxuICAgIGlmICghdmFsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YWwgKz0gJyc7XG5cbiAgICBpZiAoKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicpICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwubWF0Y2goaGFuZGxlciB8fCAnJykpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIE9yZGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDIsIDNdXG4gKiB1dGlscy5zb3J0KFszLCAyLCAxXSwgdHJ1ZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzMsIDIsIDFdXG4gKiB1dGlscy5zb3J0KFsxLCAyLCAzXSwgZmFsc2UpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XVxuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFtbJ3gnXV0sIFt0cnVlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogM30sIHt4OiAyfSwge3g6IDF9XSwgWyd4J10sIHRydWUpO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sICd4Jyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dXG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgW1sneCddXSwgW2ZhbHNlXSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgWyd4J10sIGZhbHNlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAxfSwge3g6IDJ9LCB7eDogM31dLCAneCcsIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDEsIHk6IDN9LCB7eDogMiwgeTogMX0sIHt4OjIsIHk6IDJ9XVxuICogdXRpbHMuc29ydChbe3g6IDIsIHk6IDJ9LCB7eDogMiwgeTogMX0sIHt4OiAyLCB5OiAzfV0sIFtbJ3gnXSwgWyd5J11dLCBbdHJ1ZSwgdHJ1ZV0pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IHt5OiAxfX0sIHt4OiB7eTogMn19XVxuICogdXRpbHMuc29ydChbe3g6IHt5OiAyfX0sIHt4OiB7eTogMX19XSwgW1sneCcsICd5J11dLCBbdHJ1ZV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtib29sZWFufEFycmF5W118c3RyaW5nW118c3RyaW5nfSBba2V5c11cbiAqIEBwYXJhbSB7Ym9vbGVhbnxib29sZWFuW119IFtvcmRlcl0gLSByZXZlcnNlIG9yIG5vdFxuICogQHJldHVybnMge0FycmF5fVxuICovXG51dGlscy5zb3J0ID0gZnVuY3Rpb24oYXJyLCBrZXlzID0gdHJ1ZSwgb3JkZXIgPSBbXSkge1xuICBhcnIgPSBbLi4uYXJyXTtcblxuICBpZiAoa2V5cyA9PT0gdHJ1ZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFt0cnVlXTtcbiAgfVxuICBlbHNlIGlmIChrZXlzID09PSBmYWxzZSkge1xuICAgIGtleXMgPSBbXTtcbiAgICBvcmRlciA9IFtmYWxzZV07XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICBrZXlzID0gW2tleXNdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KG9yZGVyKSkge1xuICAgIG9yZGVyID0gW29yZGVyXTtcbiAgfVxuXG4gIGxldCBsID0ga2V5cy5sZW5ndGg7XG5cbiAgYXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICBjb25zdCBjaGVjayA9IChhLCBiLCByZXZlcnNlID0gZmFsc2UpID0+IHtcbiAgICAgIGlmIChhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChiIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gLTE6IDE7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gcmV2ZXJzZT8gMTogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH07XG5cbiAgICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgICAgaWYgKGkgPj0gbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgIGtleSA9IFtrZXldO1xuICAgICAgfVxuXG4gICAgICBsZXQgYVYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYSk7XG4gICAgICBsZXQgYlYgPSB0aGlzLmdldFByb3BlcnR5QnlLZXlzKGtleSwgYik7XG4gICAgICBsZXQgcmVzID0gY2hlY2soYVYsIGJWLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuXG4gICAgICBpZiAocmVzICE9PSAwKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIGkrKztcblxuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9O1xuXG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gY2hlY2soYSwgYiwgb3JkZXJbaV0gPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dCgpO1xuICB9KTtcblxuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgdmFsdWUgaXMgY29tcG9uZW50IHNjb3BlIHByb3h5IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNTY29wZVByb3h5ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiAhISh2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiB2YWwuX19pc1Byb3h5KTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIHBsYWluIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICByZXR1cm4gISEob2JqICYmIHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgKG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3QgfHwgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSk7XG59O1xuXG4vKipcbiAqIENvcHkgdGhlIHZhbHVlXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtib29sZWFufSBbbmVzdGVkPXRydWVdIC0gZGVlcCBjb3B5IGlmIGlzIHRydWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VudW1lcmFibGU9ZmFsc2VdIC0gaW5jbHVkaW5nIGVudW1lcmFibGUgcHJvcGVydGllc1xuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgbmVzdGVkID0gdHJ1ZSwgZW51bWVyYWJsZSA9IGZhbHNlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dChvYmopIHtcbiAgICBsZXQga2V5cyA9IGVudW1lcmFibGU/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgbGV0IG5ld09iaiA9IEFycmF5LmlzQXJyYXkob2JqKT8gW106IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG5cbiAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgfVxuXG4gICAgb2JqID0gbmV3T2JqO1xuXG4gICAgaWYgKCFuZXN0ZWQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqW2tdID0gbmV4dChvYmpba10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbmV4dCh2YWx1ZSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmFsdWUgdG8gYXR0cmlidXRlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmICgoYSBpbnN0YW5jZW9mIERhdGUpICYmIChiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhID09PSBudWxsIHx8IGIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhhKS5sZW5ndGggIT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgayBpbiBhKSB7XG4gICAgICBpZiAoIWEuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5jb21wYXJlKGFba10sIGJba10pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhID09PSBiO1xufTtcblxuLyoqXG4gKiBDb21wYXJlIHRoZSBjdXJyZW50IHZhbHVlIHdpdGggdGhlIHByZXZpb3VzXG4gKlxuICogQHBhcmFtIHsqfSBjdXJyZW50IC0gdGhlIGN1cnJlbnQgdmFsdWVcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXMgLSB0aGUgY3VycmVudCB2YWx1ZSBjb3B5XG4gKiBAcGFyYW0geyp9IHByZXZpb3VzQ29weSAtIHRoZSBwcmV2aW91cyB2YWx1ZSBjb3B5XG4gKiBAcGFyYW0geyp9IFtjdXJyZW50Q29weV0gLSB0aGUgY3VycmVudCB2YWx1ZSBjb3B5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZVByZXZpb3VzVmFsdWUgPSBmdW5jdGlvbihjdXJyZW50LCBwcmV2aW91cywgcHJldmlvdXNDb3B5LCBjdXJyZW50Q29weSkge1xuICBpZiAoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jb21wYXJlKGFyZ3VtZW50cy5sZW5ndGggPT0gMz8gY3VycmVudENvcHk6IHRoaXMuY29weShjdXJyZW50KSwgcHJldmlvdXNDb3B5KTtcbn07XG5cbi8qKlxuICogRW5jb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG5cbiAgZWwudGV4dENvbnRlbnQgPSBodG1sO1xuICB2YWx1ZSA9IGVsLmlubmVySFRNTDtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIERlY29kZSBodG1sIGVudGl0aWVzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgXCJ5b3UgJiBtZVwiXG4gKiB1dGlscy5kZWNvZGVIdG1sRW50aXRpZXMoJ3lvdSAmYW1wIG1lJyk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBsZXQgdmFsdWU7XG5cbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBkYXNoIHRvIGNhbWVsIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9DYW1lbENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtLCBjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gY2FtZWwgdG8gZGFzaCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvRGFzaENhc2UgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtLCBjKSA9PiBgLSR7Yy50b0xvd2VyQ2FzZSgpfWApO1xufTtcblxuLyoqXG4gKiBHZXQgbmVzdGVkIG9iamVjdCBwcm9wZXJ0eSBieSBhcnJheSBrZXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgNVxuICogdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYgKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgbmVzdGVkIG9iamVjdHMgdHJlZSBoYXMgcHJvcGVydHkgb3Igbm90XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiAhIW87XG4gICAgfVxuXG4gICAgaWYgKCFvLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgKGkgPT0gbGVuZ3RoKSAmJiAoaGFzID0gby5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGhhcztcbn07XG5cbi8qKlxuICogU2V0IG5lc3RlZCBvYmplY3RzIHRyZWUgcHJvcGVydHlcbiAqIFJldHVybnMgY2hhbmdlZCBwcm9wZXJ0eSBvYmplY3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyB7eTogNn1cbiAqIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19LCAobGFzdCwgdmFsKSA9PiBsYXN0PyA2OiAodmFsIHx8IHt9KSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCwgZm4pIHtcbiAgbGV0IGN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKGZ1bmN0aW9uKG8sIGspIHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiBjdXJyZW50ID0gb1trXSA9IGZuKGkgPT0gbGVuZ3RoKTtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuXG4gICAgcmV0dXJuIG9ba107XG4gIH0sIG9iamVjdCk7XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59O1xuXG4vKipcbiAqXG4gKiBEZWxldGUgcHJvcGVydHkgZnJvbSBuZXN0ZWQgb2JqZWN0cyB0cmVlXG4gKiBSZXR1cm5zIGRlbGV0ZWQgcHJvcGVydHkgdmFsdWVcbiAqIFlvdSBjYW4gY2FuY2VsIGRlbGV0aW5nIGlmIHdpbGwgcmV0dXJuIGZhbHNlIGluIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIDVcbiAqIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKFsneCcsICd5J10sIHt4OiB7eTogNX19KTtcbiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoZnVuY3Rpb24obywgaykge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChpID09IGxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBvW2tdO1xuXG4gICAgICBpZiAoIWZuIHx8IGZuKHZhbHVlKSkge1xuICAgICAgICBkZWxldGUgb1trXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogQ2xlYXIgdmFsdWUgcHJveHkgaWYgaXQgZXhpc3RlbnRcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY2xlYXJTY29wZVByb3h5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY29uc3QgY2xlYXIgPSAob2JqKSA9PiB7XG4gICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAob2JqW2tdICYmIHR5cGVvZiBvYmpba10gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKG9ialtrXS5fX2lzUHJveHkpIHtcbiAgICAgICAgICBvYmpba10gPSBvYmpba10uX190YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhcihvYmpba10pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpZiAodmFsdWUuX19pc1Byb3h5KSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5fX3RhcmdldDtcbiAgfVxuXG4gIGNsZWFyKHZhbHVlKTtcblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgdmFsID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjY2KSB7XG4gICAgICB2YWwgKz0gc3RyW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFsICs9IHN0cltpXTtcbiAgICB9XG4gIH1cblxuICBpZiAoZm4gJiYgZm4odmFsKSkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJhbmRvbVN0cmluZyhsZW5ndGgsIGZuKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL3V0aWxzLmpzIiwiaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcihiYXNlVXJsLCBkZWZhdWx0cykge1xuICAgIHRoaXMuYmFzZVVybCA9IGJhc2VVcmw/IChiYXNlVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgKyAnLycpOiAnJztcblxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzdGF0dXNFcnJvcnNQYXR0ZXJuOiAvXihbXjIzXSl8NDA0LyxcbiAgICAgIC4uLihkZWZhdWx0cyB8fCB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmVxdWVzdCB3aXRoIGFueSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBxdWVyeShvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB1cmw7XG4gICAgICBsZXQgeGhyO1xuXG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07XG5cbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7XG4gICAgICBvcHRpb25zID0gdGhpcy50cmFuc2Zvcm1CZWZvcmUob3B0aW9ucyk7XG4gICAgICB1cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7XG4gICAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuXG4gICAgICBpZiAob3B0aW9ucy5qc29uKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbik7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICAgIG9wdGlvbnMucmVzcG9uc2VUeXBlID0gb3B0aW9ucy5yZXNwb25zZVR5cGUgfHwgJ2pzb24nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAob3B0aW9ucy5mb3JtKSB7XG4gICAgICAgIG9wdGlvbnMuYm9keSA9IHRoaXMuY3JlYXRlRm9ybURhdGEob3B0aW9ucy5mb3JtKTtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydjb250ZW50LXR5cGUnXSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSkge1xuICAgICAgICB4aHIudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2VUeXBlKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICBmb3IgKGxldCBrIGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcblxuICAgICAgICBpZiAoc3RyKSB7XG4gICAgICAgICAgdXJsICs9IFwiP1wiICsgc3RyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vblByb2dyZXNzID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMub25Qcm9ncmVzcyh4aHIpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybUFmdGVyKHhocik7XG5cbiAgICAgICAgaWYgKCh4aHIuc3RhdHVzICsgJycpLm1hdGNoKG9wdGlvbnMuc3RhdHVzRXJyb3JzUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHt1cmx9XCIgcmV0dXJucyBmYWlsdXJlIHN0YXR1cyBjb2RlICR7eGhyLnN0YXR1c31gKTtcblxuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub250aW1lb3V0ID0gKCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHt1cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfTtcblxuICAgICAgeGhyLnNlbmQob3B0aW9ucy5ib2R5KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBgWyR7aX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KHYpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvYmpba10gJiYgdHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGV0IG9wdCA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgICBvcHQucHVzaChrcyArIGBbJHtrZXl9XWAgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba11ba2V5XSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV1cbiAgICpcbiAgICogQHJldHVybnMge0Zvcm1EYXRhfVxuICAgKi9cbiAgY3JlYXRlRm9ybURhdGEob2JqLCBkYXRhID0gbnVsbCwgbmFtZXNwYWNlID0gJycpIHtcbiAgICBsZXQgZmQgPSBkYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaykgJiYgb2JqW2tdKSB7XG4gICAgICAgIGxldCBrZXkgPSBuYW1lc3BhY2U/IG5hbWVzcGFjZSArICdbJyArIGsgKyAnXSc6IGs7XG5cbiAgICAgICAgaWYgKG9ialtrXSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChvYmpba10pKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRGF0YShvYmpba10sIGZkLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIG9ialtrXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmQ7XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmb3JtIGRhdGEgYmVmb3JlIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQmVmb3JlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1BZnRlcih4aHIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeGhyOiB4aHIsXG4gICAgICBkYXRhOiB4aHIucmVzcG9uc2UsXG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxucmVxdWVzdC5fX2luc3RhbmNlcyA9IHt9O1xuXG4vKipcbiAqIEFkZCBuZXcgcmVxdWVzdCBpbnN0YW5jZSB0byB0aGUgbWFpbiBzZXJ2aWNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7UmVxdWVzdH0gaW5zdGFuY2VcbiAqL1xucmVxdWVzdC5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUsIGluc3RhbmNlKSB7XG4gIHRoaXMuX19pbnN0YW5jZXNbbmFtZV0gPSBpbnN0YW5jZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucmVxdWVzdC5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19pbnN0YW5jZXNbbmFtZV07XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWVzdCwgJ3VzZScsIHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgcmV0dXJuIHJlcXVlc3QuX19pbnN0YW5jZXM7XG4gIH1cbn0pO1xuXG5yZXF1ZXN0LlJlcXVlc3QgPSBSZXF1ZXN0O1xuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW2luXSc7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdvbCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd1bCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Ym9keScsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0Zm9vdCcsIEZvcik7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIExvb3ApO1xuICAgIEFraWxpLmNvbXBvbmVudCgnbG9vcCcsIExvb3ApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5fX2l0ZXJhdG9yID0gbnVsbDtcbiAgICB0aGlzLl9fa2V5ID0gbnVsbDtcbiAgICB0aGlzLl9fdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvcnMgPSB7fTtcbiAgICB0aGlzLml0ZXJhdG9yUmVmID0gbnVsbDtcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gbnVsbDtcbiAgfVxuXG4gIGNoYW5nZWRJbihkYXRhKSB7XG4gICAgdGhpcy5kcmF3KGRhdGEpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmNyZWF0ZUl0ZXJhdG9yKCk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmRyYXcodGhpcy5hdHRycy5pbik7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvcigpIHtcbiAgICBsZXQgZWw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZWwgPSBjaGlsZDtcbiAgICB9XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xvb3AnKTsgICAgICBcbiAgICAgIGVsLmlubmVySFRNTCA9IHRoaXMuZWwuaW5uZXJIVE1MOyBcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7ICAgICBcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIGxldCBjb21wb25lbnROYW1lID0gZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcblxuICAgIGlmIChjb21wb25lbnROYW1lICE9ICdsb29wJykge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IEFraWxpLmNvbXBvbmVudChjb21wb25lbnROYW1lIHx8IGVsLnRhZ05hbWUpO1xuXG4gICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcsICdsb29wJyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghKGNvbXBvbmVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBGb3IpKSB7XG4gICAgICAgIGxldCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbG9vcCcpO1xuXG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JSZWYgPSBlbC5uZXh0U2libGluZztcbiAgICB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgIGVsLnJlbW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLml0ZXJhdG9yT3V0ZXJIVE1MO1xuICAgIGVsID0gZWwuY29udGVudC5maXJzdENoaWxkO1xuXG4gICAgcmV0dXJuIGVsO1xuICB9XG5cbiAgbG9vcChrZXksIHZhbHVlLCBrZXlzLCBpbmRleCkge1xuICAgIHRoaXMuX19pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX19rZXkgPSBrZXk7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fX2NvbXBhcmlzb25WYWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUpO1xuXG4gICAgbGV0IGhhc2ggPSAnJztcbiAgICBsZXQgZm91bmQgPSAwO1xuXG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyAmJiB2YWx1ZS5fX2hhc2gpIHtcbiAgICAgIGhhc2ggPSB2YWx1ZS5fX2hhc2g7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXRlcmF0b3JzW2hhc2hdKSB7XG4gICAgICBrZXkgPSBoYXNoO1xuICAgICAgZm91bmQgPSAyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLml0ZXJhdG9yc1trZXldKSB7XG4gICAgICBmb3VuZCA9IDE7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yc1trZXldO1xuXG4gICAgICBpZiAoZm91bmQgPT0gMikge1xuICAgICAgICBsZXQgY1ZhbHVlID0gaXRlcmF0b3IuY29tcGFyc2lvbi52YWx1ZTtcbiAgICAgICAgbGV0IGNDb3B5ID0gaXRlcmF0b3IuY29tcGFyc2lvbi5jb3B5O1xuICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2luZGV4ICE9PSBpdGVyYXRvci5pbmRleCkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2tleSAhPT0gaXRlcmF0b3Iua2V5KSB7XG4gICAgICAgICAgaXRlcmF0b3Iuc2V0S2V5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXV0aWxzLmNvbXBhcmVQcmV2aW91c1ZhbHVlKHZhbHVlLCBjVmFsdWUsIGNDb3B5LCB0aGlzLl9fY29tcGFyaXNvblZhbHVlKSkge1xuICAgICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzW2tleV0gPSBpdGVyYXRvcjtcbiAgICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2tleV07XG5cbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgfVxuXG4gICAgICB0aGlzLml0ZXJhdG9yUmVmID0gaXRlcmF0b3IuZWwubmV4dFNpYmxpbmc7XG4gICAgICBpdGVyYXRvci5fX2Rlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBsZXQgZWwgPSB0aGlzLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudCgpO1xuXG4gICAgZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKGVsLCB0aGlzLml0ZXJhdG9yUmVmKTtcbiAgICBBa2lsaS5jb21waWxlKGVsKTtcblxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICghdmFsdWUuX19oYXNoKSB7XG4gICAgICAgIGhhc2ggPSB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMzIsIChzdHIpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvcnNbc3RyXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbHVlLCAnX19oYXNoJywge1xuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICAgIHZhbHVlOiBoYXNoXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBrZXlzW2hhc2hdID0gdGhpcy5fX2l0ZXJhdG9yO1xuICAgICAgZGVsZXRlIHRoaXMuaXRlcmF0b3JzW2hhc2hdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGxldCBlVmFsdWUgPSB0eXBlb2YgdGhpcy5fX3ZhbHVlID09ICdzdHJpbmcnPyBgXCIke3RoaXMuX192YWx1ZX1cImA6IHRoaXMuX192YWx1ZTtcblxuICAgICAgICBsZXQgYXJncyA9IFtcbiAgICAgICAgICBgXCJGb3JcIiBjb21wb25lbnQgbG9vcCBpdGVtcyBzaG91bGQgaGF2ZSBcIm9iamVjdFwiIHR5cGUgZm9yIGhpZ2hlciBwZXJmb3JtYW5jZS5gLFxuICAgICAgICAgIGBZb3UgY2FuIGNoYW5nZSAke2VWYWx1ZX0gdG8ge3ZhbHVlOiAke2VWYWx1ZX19LCBmb3IgZXhhbXBsZS5gXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUud2FybiwgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIGtleXNba2V5XSA9IHRoaXMuX19pdGVyYXRvcjtcbiAgICAgIGRlbGV0ZSB0aGlzLml0ZXJhdG9yc1trZXldO1xuICAgIH1cblxuICAgIHJldHVybiBlbC5fX2FraWxpO1xuICB9XG5cbiAgZHJhdyhkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9ICdvYmplY3QnIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgXCJGb3JcIiBjb21wb25lbnQgXCJpblwiIGF0dHJpYnV0ZSB2YWx1ZSB0eXBlIG11c3QgYmUgYW4gb2JqZWN0L2FycmF5YCk7XG4gICAgICAgIGRhdGEgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQga2V5cyA9IHt9O1xuICAgIGxldCBpbmRleEtleXMgPSBbXTtcbiAgICBsZXQgbGFzdEVsZW1lbnQgPSBudWxsO1xuICAgIGxldCBsYXN0ID0gdGhpcy5lbC5jaGlsZHJlblt0aGlzLmVsLmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKGxhc3QgJiYgIShsYXN0Ll9fYWtpbGkgaW5zdGFuY2VvZiBMb29wKSkge1xuICAgICAgbGFzdEVsZW1lbnQgPSBsYXN0O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGluZGV4S2V5cy5wdXNoKHRoaXMubG9vcChpLCBkYXRhW2ldLCBrZXlzLCBpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBmb3IgKGxldCBrIGluIGRhdGEpIHtcbiAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleEtleXMucHVzaCh0aGlzLmxvb3AoaywgZGF0YVtrXSwga2V5cywgaSkpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBpbmRleEtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgaXRlcmF0b3IgPSBpbmRleEtleXNbaV07XG5cbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaXRlcmF0b3IuZWwpO1xuICAgICAgaXRlcmF0b3IuaXRlcmF0ZShpKTtcbiAgICB9XG5cbiAgICBsYXN0RWxlbWVudCAmJiB0aGlzLmVsLmFwcGVuZENoaWxkKGxhc3RFbGVtZW50KTtcblxuICAgIGZvciAobGV0IGsgaW4gdGhpcy5pdGVyYXRvcnMpIHtcbiAgICAgIGlmICghdGhpcy5pdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlcmF0b3JzW2tdLl9fZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuaXRlcmF0b3JzID0ga2V5cztcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIExvb3AgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmlzRm9yID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2luJyk7XG5cbiAgICBpZiAoIXRoaXMuaXNGb3IgJiYgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19pdGVyYXRvciA9IHRoaXM7XG4gICAgdGhpcy5mb3IgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGk7XG4gICAgdGhpcy5zZXRJbmRleCgpO1xuICAgIHRoaXMuc2V0S2V5KCk7XG4gICAgdGhpcy5zZXRWYWx1ZSgpO1xuXG4gICAgdGhpcy5pc0ZvciAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmlzRm9yICYmIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRJbmRleCgpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHNldEtleSgpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSk7XG4gIH1cblxuICBzZXRWYWx1ZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlKTtcblxuICAgIHRoaXMuY29tcGFyc2lvbiA9IHtcbiAgICAgIGNvcHk6IHRoaXMuZm9yLl9fY29tcGFyaXNvblZhbHVlLFxuICAgICAgdmFsdWU6IHRoaXMuZm9yLl9fdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgaXRlcmF0ZShpbmRleCkge31cbn1cblxuRm9yLkxvb3AgPSBMb29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VkRm9jdXModmFsdWUpIHtcbiAgICB0aGlzLnNldEZvY3VzKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ2ZvY3VzJykgJiYgdGhpcy5zZXRGb2N1cyh0aGlzLmF0dHJzLmZvY3VzKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCd2YWx1ZScpICYmIHRoaXMuc2V0VmFsdWUodGhpcy5hdHRycy52YWx1ZSk7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSBzZW5kaW5nIGRhdGEuIFdpbGwgYmUgaW4gdGhlIGV2ZW50LmRldGFpbFxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlXVxuICAgKi9cbiAgdHJpZ2dlcihkYXRhLCBvcHRpb25zID0geyBidWJibGVzOiB0cnVlIH0sIGZvcmNlID0gZmFsc2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuaW5FdmFsdWF0aW5nKCkpIHtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodGhpcy5uYW1lLCB7ZGV0YWlsOiBkYXRhLCAuLi5vcHRpb25zfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gX0V2ZW50IC0gY2xhc3Mgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdXG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUgfSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGV2ZW50IGNhbGxiYWNrIGRvZXNuJ3QgcnVuIHJlY3Vyc2l2ZVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGluRXZhbHVhdGluZygpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuY29tcG9uZW50Ll9fZXZhbHVhdGluZ0V2ZW50O1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuZWwgPT09IHRoaXMuZWwgJiYgZGF0YS5ldmVudC50eXBlID09PSB0aGlzLm5hbWUgJiYgZGF0YS5jb21wb25lbnQgPT09IHRoaXMuY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gICAqL1xuICBiaW5kKGZuKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbiA9IGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgdGhlIGZ1bmN0aW9uXG4gICAqL1xuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5mbiAmJiB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLmZuKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvZXZlbnQtZW1pdHRlci5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmNvbnN0IHRhcmdldCA9IHt9O1xuXG5jb25zdCBzdG9yZSA9IG5ldyBQcm94eSh0YXJnZXQsIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290LnN0b3JlKGtleSwgdmFsdWUpO1xuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgQWtpbGkucm9vdCAmJiBBa2lsaS5yb290LnN0b3JlKGtleSwgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvc2VydmljZXMvc3RvcmUuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JvdXRlJywgUm91dGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb24pIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG4gICAgbGV0IHBhcmFtcyA9IHRyYW5zaXRpb24ucGF0aC5wYXJhbXM7XG4gICAgbGV0IHVybCA9IHRyYW5zaXRpb24udXJsO1xuICAgIGxldCBxdWVyeSA9IHRyYW5zaXRpb24ucXVlcnk7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcblxuICAgIGZ1bmN0aW9uIGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbihwYXRoKSB7XG4gICAgICBpZiAocGF0aC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhdGgucGFyZW50LmNvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybiBwYXRoLnBhcmVudC5jb21wb25lbnQuX19zY29wZS5fX3RyYW5zaXRpb24ucGF0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24ocGF0aC5wYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl9fc2NvcGUuX190cmFuc2l0aW9uID0ge1xuICAgICAgcGF0aDoge1xuICAgICAgICBzdGF0ZTogc3RhdGUubmFtZSxcbiAgICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBwYXJlbnQ6IGdldFBhcmVudFNjb3BlVHJhbnNpdGlvbih0cmFuc2l0aW9uLnBhdGgpXG4gICAgICB9LFxuICAgICAgcGFyYW1zOiB0cmFuc2l0aW9uLnBhcmFtcyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgfTtcblxuICAgIGlmICghdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmVtcHR5KCk7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IGA8Y29tcG9uZW50PiR7c3RhdGUudGVtcGxhdGV9PC9jb21wb25lbnQ+YDtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUudGVtcGxhdGVVcmwpIHtcbiAgICAgIHAgPSByZXF1ZXN0LmdldChzdGF0ZS50ZW1wbGF0ZVVybCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBgPGNvbXBvbmVudD4ke3Jlcy5kYXRhfTwvY29tcG9uZW50PmA7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3JvdXRlLmpzIiwiaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvcm91dGUuanMnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcXVlcnksIGhhc2ggPSAnJywgcHJldmlvdXMgPSBudWxsKSB7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgdGhpcy5wcmV2aW91cyA9IHByZXZpb3VzO1xuICAgIHRoaXMucGF0aCA9IG51bGw7XG4gICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB0aGlzLnN0YXRlcyA9IFtdO1xuICAgIHRoaXMucGFyYW1zID0ge307XG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcmVkaXJlY3QoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICByb3V0ZXIuc3RhdGUuYXBwbHkocm91dGVyLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgc2V0UGF0aChwYXRoKSB7XG4gICAgcGF0aC5wYXJlbnQgPSB0aGlzLnBhdGggfHwgbnVsbDtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMucm91dGVzLnB1c2gocGF0aCk7XG4gICAgdGhpcy5zdGF0ZXMucHVzaChwYXRoLnN0YXRlKTtcbiAgICB0aGlzLnBhcmFtcyA9ICFwYXRoLnBhcmVudD8gcGF0aC5wYXJhbXM6IHsuLi5wYXRoLnBhcmVudC5wYXJhbXMsIC4uLnBhdGgucGFyYW1zfTtcbiAgfVxuXG4gIGdldFJvdXRlKHN0YXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVzW2ldO1xuXG4gICAgICBpZiAocm91dGUuc3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVzLmluZGV4T2Yoc3RhdGUpICE9IC0xO1xuICB9XG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG59XG5cbmNvbnN0IHJvdXRlciA9IHt9O1xuXG5yb3V0ZXIuYmFzZVVybCA9IFwiL1wiO1xucm91dGVyLnN0YXRlcyA9IFtdO1xucm91dGVyLmhhc2hNb2RlID0gdHJ1ZTtcbnJvdXRlci5fX3JlZGlyZWN0cyA9IDA7XG5yb3V0ZXIuX19pbml0ID0gZmFsc2U7XG5yb3V0ZXIuX19vcHRpb25zID0ge307XG5yb3V0ZXIuX19wYXJhbVJlZ2V4ID0gLyg6KFtcXHdcXGQtXSspKS9nO1xucm91dGVyLl9fcm91dGVTZWxlY3RvciA9IGMgPT4gYyBpbnN0YW5jZW9mIFJvdXRlO1xuXG4vKipcbiAqIEFkZCBuZXcgc3RhdGUgdG8gdGhlIHJvdXRlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZS4gVG8gc2V0IHBhcmVudHMgeW91IGNhbiB1c2UgZG90LCBlLmcuICdhcHAuYXJ0aWNsZS5lZGl0J1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSB1cmwgcGF0dGVybiBsaWtlICdhcHAvYXJ0aWNsZS86aWQnXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7cm91dGVyfVxuICovXG5yb3V0ZXIuYWRkID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIHRlbXBsYXRlVXJsOiAnJyxcbiAgICBhYnN0cmFjdDogZmFsc2UsXG4gICAgaGFuZGxlcjogKHRyYW5zaXRpb24pID0+IHt9XG4gIH07XG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsKSB7XG4gICAgb3B0aW9ucy5hYnN0cmFjdCA9IHRydWU7XG4gIH1cblxuICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBcIiR7bmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0c2ApXG4gIH1cblxuICB0aGlzLnNldFN0YXRlKG5hbWUsIHBhdHRlcm4sIHsuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9uc30pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgc3RhdGUgZnJvbSB0aGUgbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJvdXRlci5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVzW2ldLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENoZWNrIHN0YXRlIGV4aXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgc3RhdGUgdG8gdGhlIHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gc3RhdGUgbmFtZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIC0gcGFyYW1zIGZvciBzdGF0ZSB7aWQ6IDF9ID0+ICcvYXBwLzppZCcgPT4gJy9hcHAvMSdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkge3g6IDF9ID0+ICcvYXBwLz94PTEnXG4gKiBAcGFyYW0ge3N0cmluZ30gW2hhc2hdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKi9cbnJvdXRlci5zdGF0ZSA9IGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcblxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7bmFtZX1gKTtcbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoKTtcblxuICBpZiAoIW9wdGlvbnMucmVsb2FkICYmIHVybCA9PT0gdGhpcy5nZXRVcmwoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuX19vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5zZXRVcmwodXJsKTtcbn07XG5cbi8qKlxuICogR28gYmFja1xuICovXG5yb3V0ZXIuYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuYmFjay5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gdG8gYW55IHdheVxuICovXG5yb3V0ZXIuZ28gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmdvLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBHbyBmb3J3YXJkXG4gKi9cbnJvdXRlci5mb3J3YXJkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5mb3J3YXJkLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGUgYnkgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIubG9jYXRpb24gPSBmdW5jdGlvbih1cmwsIG9wdGlvbnMgPSB7IHJlbG9hZDogZmFsc2UgfSkge1xuICB0aGlzLl9fb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgaWYgKHRoaXMuaGFzaE1vZGUpIHtcbiAgICBsZXQgY3VycmVudCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgICBjdXJyZW50ID09PSB1cmwgJiYgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsICcnLCB1cmwpO1xuICB9XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlO1xuXG4gIHRoaXMuc3RhdGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBhID0gYS5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIGIgPSBiLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGg7XG5cbiAgICByZXR1cm4gYSAtIGI7XG4gIH0pO1xuXG4gIGxldCBzdGF0ZXMgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICBzdGF0ZXNbc3RhdGUubmFtZV0gPSBzdGF0ZTtcbiAgICBzdGF0ZS5jaGlsZHJlbiA9IFtdO1xuICAgIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gICAgcGFyZW50cy5wb3AoKTtcbiAgICBzdGF0ZS5sZXZlbCA9IHN0YXRlLmFic3RyYWN0PyBudWxsOiBwYXJlbnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgbGV0IHBhcmVudE5hbWUgPSBwYXJlbnRzLmpvaW4oJy4nKTtcbiAgICAgIGxldCBwYXJlbnQgPSBzdGF0ZXNbcGFyZW50TmFtZV07XG5cbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHBhcmVudCByb3V0ZSBzdGF0ZSBcIiR7cGFyZW50TmFtZX1cIiBmb3IgXCIke3N0YXRlLm5hbWV9XCJgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUubGV2ZWwgIT09IG51bGwgJiYgcGFyZW50LmFic3RyYWN0KSB7XG4gICAgICAgIHN0YXRlLmxldmVsLS07XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZ1bGxQYXR0ZXJuID0gdGhpcy5zcGxpdFNsYXNoZXMocGFyZW50LmZ1bGxQYXR0ZXJuICsgJy8nICsgc3RhdGUucGF0dGVybik7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4ucHVzaChzdGF0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3RhdGUuZnVsbFBhdHRlcm4gPSBzdGF0ZS5wYXR0ZXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdGhpcy5zdGF0ZXMubGVuZ3RoICYmIEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG5cbiAgcm91dGVyLnN0YXRlcy5wdXNoKHN0YXRlKTtcblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBieSBuYW1lXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZVN0YXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHRoaXMuc3RhdGVzLnNwbGljZShpLCAxKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5yb3V0ZXIuc2V0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnNldEhhc2hVcmwodXJsKTogdGhpcy5zZXRIaXN0b3J5VXJsKHVybCk7XG59O1xuXG4vKipcbiAqIFNldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEBwYXJhbSB1cmxcbiAqL1xucm91dGVyLnNldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnJywgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGFzaFVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyAodXJsIHx8ICcvJyk7XG59O1xuXG4vKipcbiAqIEdldCB1cmxcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oYXNoTW9kZSA/IHRoaXMuZ2V0SGFzaFVybCgpIDogdGhpcy5nZXRIaXN0b3J5VXJsKCk7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufTtcblxuLyoqXG4gKiBHZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuZ2V0SGFzaFVybCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoL14jLywgJycpO1xufTtcblxuLyoqXG4gKiBHZXQgcXVlcnkgcGFyYW1zXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFVybFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsUXVlcnkoKSA6IHRoaXMuZ2V0SGlzdG9yeVVybFF1ZXJ5KCk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGlzdG9yeVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIaXN0b3J5VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXMgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJlcXVlc3QucGFyYW1zRnJvbVF1ZXJ5KCh3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzFdIHx8ICcnKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB1cmwgYnkgZGF0YVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXVxuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9ICcnKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIHJldHVybiBwYXJhbXNbdl0gfHwgJyc7XG4gIH0pO1xuXG4gIHVybCA9IHRoaXMuc3BsaXRTbGFzaGVzKHVybCk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcbiAgICB1cmwgKz0gJz8nICsgcmVxdWVzdC5wYXJhbXNUb1F1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGhhc2ggPSAoaGFzaCB8fCAnJykucmVwbGFjZSgnIycsICcnKTtcblxuICBpZiAoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCB1bm5lY2Vzc2FyeSBzbGFzaGVzIGZyb20gYW4gdXJsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLnNwbGl0U2xhc2hlcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIHVybC5yZXBsYWNlKC9bXFwvXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogQ2xlYXIgYWxsIHJvdXRlciBkZXBlbmRlbmNpZXNcbiAqL1xucm91dGVyLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIpO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGUgdXJsIGNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoc3RhdGUsIHVybCkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcblxuICBsZXQga2V5cyA9IFtdO1xuICBsZXQgaSA9IDA7XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcblxuICAgIHJldHVybiAnKFteXFxcXC9dKiknO1xuICB9KTtcblxuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHVybFBhdHRlcm4pO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKCFpc0luY2x1ZGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cmwucmVwbGFjZShyZWdleCwgKG0sIHYpID0+IHtcbiAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICBpKys7XG4gIH0pO1xuXG4gIHJldHVybiB7IHBhcmFtcyB9O1xufTtcblxuLyoqXG4gKiBDaGVjayB0aGUgc3RhdGUgaXMgYWN0aXZlIG5vd1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5jbHVkZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaXNBY3RpdmVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlLCBpbmNsdWRlcyA9IGZhbHNlKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuXG4gIGxldCB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh0aGlzLmdldFVybCgpLnNwbGl0KCc/JylbMF0gKyAnLycpO1xuICBsZXQgdXJsUGF0dGVybiA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsICcoW15cXFxcL10qKScpO1xuICBsZXQgc3RyID0gaW5jbHVkZXM/IHVybFBhdHRlcm46IHRoaXMuc3BsaXRTbGFzaGVzKCdeJyArIHVybFBhdHRlcm4gKyAnXFwvJCcpO1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHN0cik7XG5cbiAgcmV0dXJuIHJlZ2V4LnRlc3QodXJsKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgdGhlIGN1cnJlbnQgdXJsIGluY2x1ZGVzIGEgc3RhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xucm91dGVyLmluQWN0aXZlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZSkge1xuICByZXR1cm4gcm91dGVyLmlzQWN0aXZlU3RhdGUoc3RhdGUsIHRydWUpO1xufTtcblxuLyoqXG4gKiBHZXQgcm91dGUgY29tcG9uZW50IGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKi9cbnJvdXRlci5nZXRSb3V0ZSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgaSA9IDA7XG5cbiAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgIGxldCByb3V0ZSA9IGVsLmNoaWxkKHRoaXMuX19yb3V0ZVNlbGVjdG9yKTtcblxuICAgIGlmICghcm91dGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpID09IGxldmVsKSB7XG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfVxuXG4gICAgaSsrO1xuXG4gICAgcmV0dXJuIGZpbmQocm91dGUpO1xuICB9O1xuXG4gIHJldHVybiBmaW5kKEFraWxpLnJvb3QpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGZpcnN0IG1hdGNoXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRBcnJheVBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKGFyciwgdXJsKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IGFycltpXTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2V0UGF0dGVybkNvbnRlbnQoc3RhdGUsIHVybCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7c3RhdGU6IHN0YXRlLCAuLi5jb250ZW50fTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBHZXQgc3RhdGVzIGJ5IGxldmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxldmVsXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZXNCeUxldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG4gIGxldCBzdGF0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLmxldmVsIDwgbGV2ZWwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0ZS5sZXZlbCA+IGxldmVsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZXMucHVzaChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGVzO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RhdGVcbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fX2Rpc2FibGVDaGFuZ2UpIHtcbiAgICBkZWxldGUgdGhpcy5fX2Rpc2FibGVDaGFuZ2U7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgbGV0IHF1ZXJ5ID0gdGhpcy5nZXRVcmxRdWVyeSgpO1xuICBsZXQgcHJldlRyYW5zaXRpb24gPSByb3V0ZXIudHJhbnNpdGlvbiB8fCBudWxsO1xuICBsZXQgdHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24odXJsLCBxdWVyeSwgaGFzaCwgcHJldlRyYW5zaXRpb24pO1xuICBsZXQgbGV2ZWwgPSAwO1xuXG4gIGNvbnN0IG5leHQgPSAoc3RhdGVzLCBvbkVuZCkgPT4ge1xuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9uRW5kICYmIG9uRW5kKCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdldEFycmF5UGF0dGVybkNvbnRlbnQoc3RhdGVzLCB1cmwpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm4gb25FbmQgJiYgb25FbmQoKTtcbiAgICB9XG5cbiAgICBsZXQgc3RhdGUgPSBjb250ZW50LnN0YXRlO1xuICAgIGxldCBwYXJhbXMgPSBjb250ZW50LnBhcmFtcztcbiAgICBsZXQgcm91dGUgPSBzdGF0ZS5hYnN0cmFjdD8gbnVsbDogdGhpcy5nZXRSb3V0ZShzdGF0ZS5sZXZlbCk7XG5cbiAgICBpZiAoIXJvdXRlICYmICFzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yIChgTm90IGZvdW5kIHJvdXRlIGNvbXBvbmVudCBmb3Igc3RhdGUgXCIke3N0YXRlLm5hbWV9XCJgKTtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uLnNldFBhdGgoeyBzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgY29tcG9uZW50OiByb3V0ZSwgbG9hZGVkOiB0cnVlIH0pO1xuICAgIGxldmVsKys7XG5cbiAgICBsZXQgaGFzU3RhdGUgPSBwcmV2VHJhbnNpdGlvbiAmJiBwcmV2VHJhbnNpdGlvbi5oYXNTdGF0ZShzdGF0ZSk7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmIChoYXNTdGF0ZSkge1xuICAgICAgbGV0IHJvdXRlID0gcHJldlRyYW5zaXRpb24uZ2V0Um91dGUoc3RhdGUpO1xuICAgICAgbGV0IHByZXYgPSB7IHBhcmFtczogcm91dGUucGFyYW1zLCBxdWVyeTogcm91dGUucXVlcnksIGhhc2g6IHJvdXRlLmhhc2ggfTtcbiAgICAgIGxldCBjdXJyZW50ID0geyBwYXJhbXMsIHF1ZXJ5LCBoYXNoIH07XG5cbiAgICAgIGlzRGlmZmVyZW50ID0gIXV0aWxzLmNvbXBhcmUocHJldiwgY3VycmVudCk7XG4gICAgfVxuXG4gICAgbGV0IGlzSGlzdG9yeSA9IHRoaXMuX19vcHRpb25zLnJlbG9hZCA9PT0gdW5kZWZpbmVkICYmICFpc0RpZmZlcmVudDtcbiAgICBsZXQgaXNSZWxvYWQgPSB0aGlzLl9fb3B0aW9ucy5yZWxvYWQgPT09IGZhbHNlO1xuXG4gICAgdHJhbnNpdGlvbi5wYXRoLmxvYWRlZCA9ICEoaGFzU3RhdGUgJiYgKGlzSGlzdG9yeSB8fCBpc1JlbG9hZCkpO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbikpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBvbkVuZCAmJiBvbkVuZCgpO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2l0aW9uLnBhdGguZGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmIChzdGF0ZS5hYnN0cmFjdCkge1xuICAgICAgICByZXR1cm4gbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfVxuIFxuICAgICAgcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgbmV4dChzdGF0ZS5jaGlsZHJlbiwgb25FbmQpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4gb25FbmQgJiYgb25FbmQoZXJyKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZXh0KHRoaXMuZ2V0U3RhdGVzQnlMZXZlbCgwKSwgKGVycikgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVkaXJlY3RzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwgPT0gdGhpcy5nZXRVcmwoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaGFzaE1vZGUgJiYgKHRoaXMuX19kaXNhYmxlQ2hhbmdlID0gdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zZXRVcmwodGhpcy5kZWZhdWx0VXJsKTtcbiAgICAgICAgICB0aGlzLl9fcmVkaXJlY3RzKys7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBOb3QgZm91bmQgYSBkZWZhdWx0IHJvdXRlLiBZb3UgY2FuIHBhc3MgaXQgaW4gXCJyb3V0ZXIuaW5pdChkZWZhdWx0VXJsKVwiIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF0aGlzLl9fb3B0aW9ucy5zYXZlU2Nyb2xsUG9zaXRpb24gJiYgIXRyYW5zaXRpb24uaGFzaCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19vcHRpb25zID0ge307XG4gICAgICB0aGlzLl9fcmVkaXJlY3RzID0gMDtcblxuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBsZXZlbCwgbCA9IHByZXZUcmFuc2l0aW9uLnJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBsZXQgcm91dGUgPSBwcmV2VHJhbnNpdGlvbi5yb3V0ZXNbaV07XG4gICAgICAgICAgXG4gICAgICAgICAgcm91dGUuY29tcG9uZW50ICYmIHJvdXRlLmNvbXBvbmVudC5lbXB0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywge1xuICAgICAgICBkZXRhaWw6IHRyYW5zaXRpb25cbiAgICAgIH0pKTtcblxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnJvdXRlci5UcmFuc2l0aW9uID0gVHJhbnNpdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJpbXBvcnQgQWtpbGkgZnJvbSAnYWtpbGknO1xuaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnYWtpbGkvc3JjL2NvbXBvbmVudHMvZm9yJztcblxuLyoqXG4gKiBUaGUgbWFpbiB0YWJzIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgQWtpbGkuQ29tcG9uZW50IHtcbiAgc3RhdGljIGV2ZW50cyA9IFsndGFiJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYnMnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi1tZW51JywgdGhpcy5UYWJNZW51KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi1jb250ZW50JywgdGhpcy5UYWJDb250ZW50KTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi10aXRsZScsIHRoaXMuVGFiVGl0bGUpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGFiLXBhbmUnLCB0aGlzLlRhYlBhbmUpO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc2NvcGUuYWN0aXZlID0gdGhpcy5hY3RpdmUgPSBudWxsO1xuICB9XG5cbiAgY2hhbmdlZEFjdGl2ZShpbmRleCkge1xuICAgIHRoaXMuc2V0QWN0aXZlVGFiKGluZGV4KTtcbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIGxldCB0aXRsZUxlbmd0aCA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiTWVudSkuZ2V0VGFicygpLmxlbmd0aDtcbiAgICBsZXQgcGFuZUxlbmd0aCA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiQ29udGVudCkuZ2V0VGFicygpLmxlbmd0aDtcblxuICAgIGlmKHRpdGxlTGVuZ3RoICE9IHBhbmVMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXCJ0YWItdGl0bGVcIiBhbmQgXCJ0YWItY29udGVudFwiIGNvbXBvbmVudHMgY291bnQgaXMgZGlmZmVyZW50OiAke3RpdGxlTGVuZ3RofS8ke3BhbmVMZW5ndGh9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRBY3RpdmVUYWIodGhpcy5hdHRycy5hY3RpdmUgfHwgMCk7XG4gIH1cblxuICBzZXRBY3RpdmVUYWIoaW5kZXgpIHtcbiAgICBsZXQgdGFicyA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiTWVudSkuZ2V0VGFicygpO1xuICAgIGxldCBsYXN0QWN0aXZlID0gdGhpcy5hY3RpdmU7XG5cbiAgICBpZih0YWJzW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFwidGFic1wiIGNvbXBvbmVudCBpbmRleCBcIiR7aW5kZXh9XCIgaXMgb3V0IG9mIHJhbmdlYCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY29wZS5hY3RpdmUgPSB0aGlzLmFjdGl2ZSA9IGluZGV4O1xuXG4gICAgaWYoIXRhYnMubGVuZ3RoKSB7XG4gICAgICBBa2lsaS5vcHRpb25zLmRlYnVnICYmIGNvbnNvbGUud2FybignTm90IGZvdW5kIGFueSBjaGlsZCBjb21wb25lbnQgXCJ0YWItdGl0bGVcIiBmb3IgXCJ0YWItbWVudVwiJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0YWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGFic1tpXS5zZXRBY3Rpdml0eShpID09IGluZGV4KTtcbiAgICB9XG5cbiAgICBsYXN0QWN0aXZlICE9IHRoaXMuYWN0aXZlICYmIHRoaXMuYXR0cnMub25UYWIudHJpZ2dlcihpbmRleCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGhlYWRlciBncm91cCBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFRhYk1lbnUgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgICB0aGlzLmNoaWxkU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBUYWJUaXRsZTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pdGVyYWJsZSAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLml0ZXJhYmxlICYmIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBnZXRUYWJzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuKHRoaXMuY2hpbGRTZWxlY3RvciwgMCk7XG4gIH1cblxuICBnZXRUYWJJbmRleCh0YWIpIHtcbiAgICBsZXQgdGFicyA9IHRoaXMuZ2V0VGFicygpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHRhYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZih0YWJzW2ldID09PSB0YWIpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VGFic0J5SW5kZXgoaSkge1xuICAgIHJldHVybiB0aGlzLmdldFRhYnMoKVtpXTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBib2R5IGdyb3VwIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgVGFiQ29udGVudCBleHRlbmRzIFRhYk1lbnUge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmNoaWxkU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBUYWJQYW5lO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJvZHkgZ3JvdXAgaXRlbSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFRhYlBhbmUgZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gYDxpZiByZWNyZWF0ZT1cIlxcJHt0aGlzLnJlY3JlYXRlfVwiIGlzPVwiXFwke3RoaXMuaXNBY3RpdmVUYWJ9XCI+XFwke3RoaXMuX19jb250ZW50fTwvaWY+YDtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmKCF0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSB8fCAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgVGFiQ29udGVudCkpIHtcbiAgICAgIEFraWxpLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZS53YXJuKCdOb3QgZm91bmQgcGFyZW50IGNvbXBvbmVudCBcInRhYi1jb250ZW50XCIgZm9yIFwidGFiLXBhbmVcIicpO1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVRhYiA9IHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVjcmVhdGUnKSAmJiB0aGlzLnNldFJlY3JlYXRpb24odGhpcy5hdHRycy5yZWNyZWF0ZSk7XG4gIH1cblxuICBjaGFuZ2VkUmVjcmVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJlY3JlYXRpb24odmFsdWUpXG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5zY29wZS5yZWNyZWF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZpdHkpIHtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlVGFiID0gdGhpcy5pc0FjdGl2ZSA9IGFjdGl2aXR5O1xuICB9XG59XG5cbi8qKlxuICogVGhlIGhlYWRlciBncm91cCBpdGVtIGNvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgVGFiVGl0bGUgZXh0ZW5kcyBMb29wIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVRhYiA9IHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgIGlmKCF0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSB8fCAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgVGFiTWVudSkpIHtcbiAgICAgIEFraWxpLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZS53YXJuKCdOb3QgZm91bmQgcGFyZW50IGNvbXBvbmVudCBcInRhYi1tZW51XCIgZm9yIFwidGFiLXRpdGxlXCInKTtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy50YWJzID0gdGhpcy5wYXJlbnQoYyA9PiBjIGluc3RhbmNlb2YgVGFicyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50YWJzLnNldEFjdGl2ZVRhYih0aGlzLmluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMudGFicy5jaGlsZChjID0+IGMgaW5zdGFuY2VvZiBUYWJNZW51KS5nZXRUYWJJbmRleCh0aGlzKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KGFjdGl2aXR5KSB7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVRhYiA9IHRoaXMuaXNBY3RpdmUgPSBhY3Rpdml0eTtcbiAgICB0aGlzLnRhYnMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiQ29udGVudCkuZ2V0VGFic0J5SW5kZXgodGhpcy5pbmRleCkuc2V0QWN0aXZpdHkoYWN0aXZpdHkpO1xuICB9XG59XG5cblRhYnMuVGFiTWVudSA9IFRhYk1lbnU7XG5UYWJzLlRhYlRpdGxlID0gVGFiVGl0bGU7XG5UYWJzLlRhYkNvbnRlbnQgPSBUYWJDb250ZW50O1xuVGFicy5UYWJQYW5lID0gVGFiUGFuZTtcblxud2luZG93LkFraWxpVGFicyA9IFRhYnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RhYnMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIElmIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tpc10nO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlY3JlYXRlJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lmJywgSWYpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIEVsc2VJZik7XG4gICAgQWtpbGkuY29tcG9uZW50KCdlbHNlJywgRWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuc3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVjcmVhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXkgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmRpc3BsYXk7XG4gIH1cblxuICBjaGFuZ2VkSXModmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlID0gISF2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBjaGFuZ2VkUmVjcmVhdGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFJlY3JlYXRpb24odmFsdWUpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgncmVjcmVhdGUnKSAmJiB0aGlzLnNldFJlY3JlYXRpb24odGhpcy5hdHRycy5yZWNyZWF0ZSk7XG4gICAgdGhpcy5zdGF0ZSA9ICEhdGhpcy5hdHRycy5pcztcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgpXG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3RpdmUpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24ocmVjcmVhdGUpIHtcbiAgICB0aGlzLnJlY3JlYXRlID0gcmVjcmVhdGU7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICBsZXQgcmVzID0gdGhpcy5jb21waWxhdGlvbigpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5lbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghbmV4dCB8fCAhbmV4dC5tYXRjaGVzKCdlbHNlLWlmLGVsc2UnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5leHQuX19ha2lsaS5zZXRBY3Rpdml0eSh0aGlzLmFjdGl2ZSB8fCB0aGlzLnN0YXRlKTtcbiAgICBuZXh0Ll9fYWtpbGkuc2V0UmVjcmVhdGlvbih0aGlzLnJlY3JlYXRlKTtcbiAgICByZXN1bHQgPSBuZXh0Ll9fYWtpbGkuc2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBjb21waWxhdGlvbigpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5fX2VtcHR5KCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgY29tcGlsZSgpIHtcbiAgICBsZXQgcmVzO1xuXG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgcmVzID0gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzQ29tcGlsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxufTtcblxuLyoqXG4gKiBFbHNlSWYgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlSWYgZXh0ZW5kcyBJZiB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEVsc2UgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBFbHNlIGV4dGVuZHMgRWxzZUlmIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnaXMnLCAndHJ1ZScpO1xuICB9XG59XG5cbklmLkVsc2VJZiA9IEVsc2VJZjtcbklmLkVsc2UgPSBFbHNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9pZi5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ211bHRpcGxlJ107XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzZWxlY3QnLCBTZWxlY3QpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgT3B0aW9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmF0b3JUYWdOYW1lID0gJ29wdGlvbic7XG4gICAgdGhpcy5pc011bHRpcGxlID0gZmFsc2U7XG4gIH1cblxuICBjaGFuZ2VkTXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLnNldE11bHRpcGxlKHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRDb250ZW50KHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZWRJbih2YWx1ZSkge1xuICAgIHN1cGVyLmNoYW5nZWRJbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZHJhd1NlbGVjdCgpO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpO1xuICAgIH0pO1xuICB9XG4gIFxuICBjb21waWxlZCgpIHtcbiAgICBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ211bHRpcGxlJykgJiYgdGhpcy5zZXRNdWx0aXBsZSh0aGlzLmF0dHJzLm11bHRpcGxlKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdjb250ZW50JykgJiYgdGhpcy5zZXRDb250ZW50KHRoaXMuYXR0cnMuY29udGVudCk7XG4gICAgdGhpcy5kcmF3U2VsZWN0KCk7XG4gIH1cblxuICBzZXRNdWx0aXBsZSh2YWx1ZSkge1xuICAgIHRoaXMuaXNNdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5mb3JtYXRWYWx1ZSh1dGlscy5jb3B5KHRoaXMuZWwuY29udGVudCkpKTtcbiAgfVxuXG4gIHNldENvbnRlbnQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodmFsdWUpKTtcbiAgfVxuXG4gIGRyYXdTZWxlY3QoKSB7XG4gICAgbGV0IHNlbGVjdGVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV0uX19ha2lsaTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBvcHRpb24uYXR0cnMuc2VsZWN0ZWQ7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaChvcHRpb24uZWwudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24uZWwuc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuXG4gICAgaWYgKCFzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVkZWZpbmUoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUoc2VsZWN0ZWQpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoKSB7XG4gICAgbGV0IGVsID0gc3VwZXIuY3JlYXRlSXRlcmF0b3JFbGVtZW50KCk7XG5cbiAgICBpZiAoIWVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMuaHRtbC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBlbDtcbiAgfVxuXG4gIGluQ29udGVudCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbC5jb250ZW50LmluZGV4T2YodmFsdWUpICE9IC0xO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwudmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5lbC5vcHRpb25zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICBjb250ZW50LnB1c2gob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKT8gW3ZhbHVlXTogW107XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubGVuZ3RoPyB2YWx1ZVswXTogJyc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWRlZmluZSgpIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGNoYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmNvbXBhcmUodGhpcy5lbC5jb250ZW50LCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLmVsLm9wdGlvbnNbaV07XG5cbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gb3B0aW9uLnZhbHVlID09IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZWwuY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIE9wdGlvbiBleHRlbmRzIExvb3Age1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3NlbGVjdGVkJ107XG5cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gdXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzKGV4cHJlc3Npb24pO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjaGFuZ2VkU2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkKHZhbHVlKTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkKHZhbHVlKSB7XG4gICAgdGhpcy5lbC5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuZm9yLnJlZGVmaW5lKCk7XG4gIH1cbn1cblxuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvc2VsZWN0LmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgVGV4dCB7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsnY2hlY2tlZCddO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5wdXQnLCBJbnB1dCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJztcbiAgfVxuXG4gIGNoYW5nZWRDaGVja2VkKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRDaGVja2VkKHZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgKHRoaXMuaXNSYWRpbyB8fCB0aGlzLmlzQ2hlY2tib3gpICYmIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldENoZWNrZWQodGhpcy5lbC5jaGVja2VkLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXNvbHZlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5zZXRDaGVja2VkKHRoaXMuYXR0cnMuY2hlY2tlZCk7XG4gIH1cblxuICBzZXRDaGVja2VkKHZhbHVlLCB0cmlnZ2VyID0gdHJ1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcblxuICAgIGlmICh0aGlzLnByZXZDaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHRoaXMucHJldkNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0cmlnZ2VyICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICByYWRpby5zZXRDaGVja2VkKHJhZGlvLmVsLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9pbnB1dC5qcyIsImltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJy4vZm9yLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogVGhlIHJhZGlvIGdyb3VwIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tuYW1lXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3JhZGlvJ107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgUmFkaW8pO1xuICAgIEFraWxpLmNvbXBvbmVudCgncmFkaW8tYnV0dG9uJywgUmFkaW9CdXR0b24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYWJsZSA9IHRoaXMuZWwuaGFzQXR0cmlidXRlKCdpbicpO1xuICB9XG5cbiAgY2hhbmdlZEluKHZhbHVlKSB7XG4gICAgc3VwZXIuY2hhbmdlZEluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpO1xuICB9XG5cbiAgY2hhbmdlZE5hbWUobmFtZSkge1xuICAgIHRoaXMuc2V0TmFtZXMobmFtZSk7XG4gIH1cblxuICBjaGFuZ2VkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pdGVyYWJsZSAmJiBzdXBlci5jcmVhdGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFJhZGlvVmFsdWUoKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMucHJldlZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5hdHRycy5vblJhZGlvLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgdGhpcy5zZXROYW1lcyh0aGlzLmF0dHJzLm5hbWUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgdGhpcy5zZXRWYWx1ZSh0aGlzLmF0dHJzLnZhbHVlKTtcbiAgfVxuXG4gIHNldE5hbWVzKG5hbWUpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmVsLnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXZWYWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgbGV0IGlzU2VsZWN0ZWQgPSByYWRpby5lbC52YWx1ZSA9PT0gdmFsdWU7XG5cbiAgICAgIGlzU2VsZWN0ZWQgJiYgKGlzVHJ1ZSA9IHRydWUpO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVHJ1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGlmIChwcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gIH1cblxuICBnZXRSYWRpb1ZhbHVlKCkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJhZGlvID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChyYWRpby5lbC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiByYWRpby5lbC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgcmFkaW8gaXRlbSBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJhZGlvQnV0dG9uIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9IGA8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiXFwke3RoaXMudmFsdWV9XCIvPlxcJHt0aGlzLl9fY29udGVudH08L2xhYmVsPmA7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgY2hhbmdlZFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRSYWRpb1ZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuc2V0UmFkaW9WYWx1ZSh0aGlzLmF0dHJzLnZhbHVlKTtcbiAgfVxuXG4gIHNldFJhZGlvVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNjb3BlLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cblxuUmFkaW8uUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvcmFkaW8uanMiLCJpbXBvcnQgVGV4dCBmcm9tICcuL3RleHQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RleHRhcmVhJywgVGV4dGFyZWEpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3RleHRhcmVhLmpzIiwiaW1wb3J0IFRleHQgZnJvbSAnLi90ZXh0LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBUZXh0IHtcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbnRlbnQnLCBDb250ZW50KTtcbiAgICBBa2lsaS5hbGlhcygnW2NvbnRlbnRlZGl0YWJsZV0nLCAnY29udGVudCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgaWYgKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdlZGl0YWJsZScpKSB7XG4gICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpO1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2VkaXRhYmxlJyk7XG4gICAgfVxuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZGlzcGxheSA9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlS2V5ID0gJ2lubmVySFRNTCc7XG4gIH1cblxuICBzZXRFbGVtZW50Rm9jdXMoKSB7XG4gICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRoaXMuZWwpO1xuICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvY29udGVudC5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnbG9hZCcsICdlcnJvciddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbmNsdWRlJywgSW5jbHVkZSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmh0bWwgPSB0aGlzLmVsLmlubmVySFRNTDtcbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gIH1cblxuICBjaGFuZ2VkVXJsKHVybCkge1xuICAgIHRoaXMuZ2V0VGVtcGxhdGUodXJsKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRlbXBsYXRlKHRoaXMuYXR0cnMudXJsKTtcbiAgfVxuXG4gIGdldFRlbXBsYXRlKHVybCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiAmJiB0aGlzLmNvbm5lY3Rpb24uYWJvcnQoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCh1cmwsIHtcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvaW5jbHVkZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaWZyYW1lJywgSWZyYW1lKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9pZnJhbWUuanMiLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW1nJywgSW1hZ2UpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWJlZCBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2VtYmVkJywgRW1iZWQpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2F1ZGlvJywgQXVkaW8pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2F1ZGlvLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3ZpZGVvJywgVmlkZW8pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3ZpZGVvLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIFVybCB7ICBcbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RyYWNrJywgVHJhY2spO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwiaW1wb3J0IFVybCBmcm9tICcuL3VybC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdzb3VyY2UnLCBTb3VyY2UpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3NvdXJjZS5qcyIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0cyBleHRlbmRzIFVybCB7ICBcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy51cmxBdHRyaWJ1dGUgPSAnZGF0YSc7XG4gIH1cblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2JqZWN0JywgT2JqZWN0cyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvb2JqZWN0LmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ3JlbG9hZCddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgQSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLmhhc2ggPSAnJztcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY2hhbmdlZFVybCh1cmwpIHtcbiAgICB0aGlzLnNldFVybCh1cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHVybCk7XG4gIH1cblxuICBjaGFuZ2VkU3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZFBhcmFtcyhwYXJhbXMpIHtcbiAgICB0aGlzLnNldFBhcmFtcyhwYXJhbXMpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkUXVlcnkocXVlcnkpIHtcbiAgICB0aGlzLnNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgY2hhbmdlZEhhc2gocXVlcnkpIHtcbiAgICB0aGlzLnNldEhhc2gocXVlcnkpO1xuICAgIHRoaXMucmVzZXRIcmVmKCk7XG4gIH1cblxuICBjaGFuZ2VkT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRRdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIGNoYW5nZWRSZWxvYWQodmFsKSB7XG4gICAgdGhpcy5zZXRSZWxvYWQodmFsKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5zdGF0ZSh0aGlzLnN0YXRlLm5hbWUsIHRoaXMucGFyYW1zLCB0aGlzLnF1ZXJ5LCB0aGlzLmhhc2gsICB0aGlzLm9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnc3RhdGUnKSAmJiB0aGlzLnNldFN0YXRlKHRoaXMuYXR0cnMuc3RhdGUpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpICYmIHRoaXMuc2V0UGFyYW1zKHRoaXMuYXR0cnMucGFyYW1zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdxdWVyeScpICYmIHRoaXMuc2V0UXVlcnkodGhpcy5hdHRycy5xdWVyeSk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpICYmIHRoaXMuc2V0SGFzaCh0aGlzLmF0dHJzLmhhc2gpO1xuICAgIHRoaXMuYXR0cnMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSAmJiB0aGlzLnNldE9wdGlvbnModGhpcy5hdHRycy5vcHRpb25zKTtcbiAgICB0aGlzLmF0dHJzLmhhc093blByb3BlcnR5KCdyZWxvYWQnKSAmJiB0aGlzLnNldFJlbG9hZCh0aGlzLmF0dHJzLnJlbG9hZCk7XG4gICAgdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eSgndXJsJykgJiYgdGhpcy5zZXRVcmwodGhpcy5hdHRycy51cmwpO1xuICAgIHRoaXMucmVzZXRIcmVmKHRoaXMudXJsKTtcbiAgfVxuXG4gIHNldFVybCh1cmwpIHtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIHNldFN0YXRlKG5hbWUpIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRTdGF0ZShuYW1lKTtcbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlU3RhdGUgPSByb3V0ZXIuaXNBY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnNjb3BlLmluQWN0aXZlU3RhdGUgPSByb3V0ZXIuaW5BY3RpdmVTdGF0ZSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSAnb2JqZWN0JyB8fCAhcGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBwYXJhbXMgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeSAhPSAnb2JqZWN0JyB8fCAhcXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHF1ZXJ5IG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgc2V0SGFzaChoYXNoKSB7XG4gICAgaWYgKHR5cGVvZiBoYXNoICE9ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBoYXNoIG11c3QgYmUgYSBzdHJpbmdgKTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc2ggPSBoYXNoO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9ICdvYmplY3QnIHx8ICFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0YCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldFJlbG9hZCh2YWwpIHtcbiAgICB0aGlzLm9wdGlvbnMucmVsb2FkID0gdmFsO1xuICB9XG5cbiAgZ2V0U3RhdGUobmFtZSkge1xuICAgIGxldCBzdGF0ZSA9IHJvdXRlci5nZXRTdGF0ZShuYW1lKTtcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGZvdW5kIHJvdXRlciBzdGF0ZSB3aXRoIG5hbWUgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXNldEhyZWYodXJsKSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgdGhpcy5hdHRycy5ocmVmID0gdXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvYS5qcyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTY29wZSBjbGFzcy5cbiAqXG4gKiBBbGwgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIF9fIHdpbGwgbm90IGJlIHdhdGNoaW5nLlxuICogWW91IGNhbiB1c2UgdGhlbSBmb3IgaW50ZXJuYWwgbWFuaXB1bGF0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGUge1xuICBzdGF0aWMgbmVzdGVkV2F0Y2hpbmc7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMuX19uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9fZWwgPSBlbDtcbiAgICB0aGlzLl9fY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnc2NvcGUnLCBuYW1lKTtcbiAgfVxuXG4gIGdldCBfX3V0aWxzKCkge1xuICAgIHJldHVybiB1dGlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYSBzY29wZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0cmljdD1mYWxzZV0gLSB3aXRob3V0IG9iamVjdCBjb3B5aW5nXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0KGtleXMsIHZhbHVlLCBzdHJpY3QgPSBmYWxzZSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG5cbiAgICBBa2lsaS51bmlzb2xhdGVkKCgpID0+IHtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSB0cnVlKTtcbiAgICAgIHV0aWxzLnNldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMsIChsYXN0LCB2YWwpID0+IHtcbiAgICAgICAgaWYgKCFsYXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbCB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvc2NvcGUuanMiXSwic291cmNlUm9vdCI6IiJ9
/*!
 * Tabs component for Akili framework
 * 
 * @version 1.0.1
 * @author Alexandr Balasyan <mywebstreet@gmail.com>
 * {@link https://github.com/ortexx/akili-tabs}
 * {@link https://github.com/ortexx/akili}
 * {@link https://akilijs.com}
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Javascript framework
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * const Akili = makeItEasy(js + html);
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * @author Alexandr Balasyan <mywebstreet@gmail.com>
                                                                                                                                                                                                                                                                               * @link http://akilijs.com
                                                                                                                                                                                                                                                                               */

var _component2 = __webpack_require__(3);

var _component3 = _interopRequireDefault(_component2);

var _if = __webpack_require__(14);

var _if2 = _interopRequireDefault(_if);

var _for = __webpack_require__(5);

var _for2 = _interopRequireDefault(_for);

var _select = __webpack_require__(15);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(16);

var _input2 = _interopRequireDefault(_input);

var _radio = __webpack_require__(17);

var _radio2 = _interopRequireDefault(_radio);

var _text = __webpack_require__(6);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(18);

var _textarea2 = _interopRequireDefault(_textarea);

var _content = __webpack_require__(19);

var _content2 = _interopRequireDefault(_content);

var _include = __webpack_require__(20);

var _include2 = _interopRequireDefault(_include);

var _iframe = __webpack_require__(21);

var _iframe2 = _interopRequireDefault(_iframe);

var _image = __webpack_require__(22);

var _image2 = _interopRequireDefault(_image);

var _embed = __webpack_require__(23);

var _embed2 = _interopRequireDefault(_embed);

var _audio = __webpack_require__(24);

var _audio2 = _interopRequireDefault(_audio);

var _video = __webpack_require__(25);

var _video2 = _interopRequireDefault(_video);

var _track = __webpack_require__(26);

var _track2 = _interopRequireDefault(_track);

var _source = __webpack_require__(27);

var _source2 = _interopRequireDefault(_source);

var _object = __webpack_require__(28);

var _object2 = _interopRequireDefault(_object);

var _route = __webpack_require__(11);

var _route2 = _interopRequireDefault(_route);

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _a = __webpack_require__(29);

var _a2 = _interopRequireDefault(_a);

var _scope = __webpack_require__(7);

var _scope2 = _interopRequireDefault(_scope);

var _eventEmitter = __webpack_require__(8);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _router = __webpack_require__(12);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(9);

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _globals = __webpack_require__(10);

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The framework object
 * 
 * {@link https://akilijs.com/docs/getting-started}
 */
var Akili = {};

Akili.__defaults = [];

/**
 * Set the framework's default variables
 */
Akili.setDefaults = function () {
  var _this = this;

  this.options = {
    debug: true
  };

  this.__init = null;
  this.__cleared = false;
  this.__components = {};
  this.__aliases = {};
  this.__scopes = {};
  this.__storeLinks = {};
  this.__window = {};
  this.__tags = {};
  this.__isolation = null;
  this.__evaluation = null;
  this.__wrapping = false;
  this.__onError = function () {
    return _this.triggerInit(false);
  };

  this.htmlBooleanAttributes = ['disabled', 'contenteditable', 'hidden'];

  for (var key in _globals2.default) {
    delete _globals2.default[key];
  }

  _globals2.default.__target.utils = _utils2.default;

  this.components = {};
  this.services = {};

  this.Component = _component3.default;
  this.EventEmitter = _eventEmitter2.default;
  this.Scope = _scope2.default;
  this.utils = _utils2.default;
  this.globals = _globals2.default;
  this.components.A = _a2.default;
  this.components.Audio = _audio2.default;
  this.components.Content = _content2.default;
  this.components.For = _for2.default;
  this.components.Embed = _embed2.default;
  this.components.If = _if2.default;
  this.components.Include = _include2.default;
  this.components.Input = _input2.default;
  this.components.Iframe = _iframe2.default;
  this.components.Image = _image2.default;
  this.components.Object = _object2.default;
  this.components.Radio = _radio2.default;
  this.components.Route = _route2.default;
  this.components.Select = _select2.default;
  this.components.Source = _source2.default;
  this.components.Text = _text2.default;
  this.components.Textarea = _textarea2.default;
  this.components.Track = _track2.default;
  this.components.Url = _url2.default;
  this.components.Video = _video2.default;
  this.services.request = _request2.default;
  this.services.router = _router2.default;
  this.services.store = _store2.default;

  this.define();
  this.errorHandling();
  this.isolateEvents();
  this.isolateArrayPrototype();
  this.isolateWindowFunctions();

  for (var i = 0, l = this.__defaults.length; i < l; i++) {
    this.__defaults[i]();
  }
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

/**
 * Set defaults
 * 
 * @param {function} fn 
 */
Akili.defaults = function (fn) {
  this.__defaults.push(fn);
  fn();
};

/**
 * Clear the global context
 */
Akili.clearGlobals = function () {
  if (this.__cleared) {
    return;
  }

  for (var key in this.__window.Element.prototype) {
    Element.prototype[key] = this.__window.Element.prototype[key];
  }

  for (var _key in this.__window.Array.prototype) {
    Array.prototype[_key] = this.__window.Array.prototype[_key];
  }

  for (var _key2 in this.options.globals) {
    this.options.globals[_key2] = this.unwrap(this.options.globals[_key2]);
  }

  window.setTimeout = this.__window.setTimeout;
  window.setInterval = this.__window.setInterval;
  window.Promise = this.__window.Promise;
  window.removeEventListener('error', this.__onError);
  this.__cleared = true;
};

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
  scope.__el = null;
  scope.__component = null;
  scope.__parent = null;
  this.__scopes[name] = null;
  delete this.__scopes[name];
};

/**
 * Get all elements with attached Akili components
 *
 * @param {Element} el
 * @param {boolean} [tree=true] - return array of the parents if true, closest parent if false
 * @returns {Array|Element|null}
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
 * Set element inner html with content replacement
 *
 * @example
 * // returns "<i>Hello</i><b>World</b>"
 * el.innerHTML = "<b>World</b>";
 * Akili.setTemplate(el, "<i>Hello</i>${this.__children}");
 *
 * @param {Element} el
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
  var _this2 = this;

  return _utils2.default.createRandomString(16, function (str) {
    return !!_this2.__scopes[str];
  });
};

/**
 * Isolate the scope changes
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
    props.push(this.__isolation[k]);
  }

  this.__isolation = null;

  for (var i = 0, l = props.length; i < l; i++) {
    var prop = props[i];
    var val = _utils2.default.getPropertyByKeys(prop.keys, prop.component.__scope);
    prop.component.__isResolved && prop.component.__triggerStoreAndAttr(prop.keys);
    prop.component.__evaluateByKeys(prop.keys, val, prop.isDeleted);
  }

  return res;
};

/**
 * Stop evaluation before the function and continue after
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.unevaluate = function (fn) {
  var evaluation = this.__evaluation;
  var res = void 0;
  this.__evaluation = null;
  res = fn();
  this.__evaluation = evaluation;
  return res;
};

/**
 * Evaluate only root properties
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.wrapping = function (fn) {
  if (this.__wrapping) {
    return fn();
  }

  this.__wrapping = true;
  var res = fn();
  this.__wrapping = false;
  return res;
};

/**
 * Stop isolation before the function and continue after
 *
 * @param {function} fn
 * @returns {*}
 */
Akili.unisolate = function (fn) {
  var isolation = this.__isolation;
  var res = void 0;
  this.__isolation = null;
  res = fn();
  this.__isolation = isolation;
  return res;
};

/**
 * Run the function on the next tick
 *
 * @param {function} fn
 * @returns {Promise}
 */
Akili.nextTick = function (fn) {
  return new Promise(function (res) {
    return setTimeout(function () {
      return Promise.resolve(fn()).then(res);
    });
  });
};

/**
 * Initialize element
 *
 * @param {Element} el
 * @param {object} [options={}]
 * @returns {*}
 */
Akili.initialize = function (el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var recompile = options.recompile;
  var component = el.__akili;

  if (component) {
    if (recompile) {
      component.__recompile(recompile === true ? {} : recompile);
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

    for (var i = 0, l = selectors.length; i < l; i++) {
      var selector = selectors[i];

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

  if (Akili.getAkiliParents(el).find(function (p) {
    return p.__akili.__prevent;
  })) {
    return;
  }

  component.__create();
  return component;
};

/**
 * Compile the element
 *
 * @param {Element} root
 * @param {object} [options]
 * @returns {Promise}
 */
Akili.compile = function (root) {
  var _this3 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { recompile: false };

  var elements = [];

  var nestedInitializing = function nestedInitializing(el) {
    var component = _this3.initialize(el, options);
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
    // eslint-disable-next-line no-console
    console.warn('Component ' + name + ' already was added');
  }

  this.__components[name] = fn;
};

/**
 * Remove the component
 *
 * @param {string} name
 */
Akili.removeComponent = function (name) {
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
    // eslint-disable-next-line no-console
    console.warn('Alias with selector ' + selector + ' already was added');
  }

  this.__aliases[selector] = componentName;
};

/**
 * Remove the selector alias
 *
 * @param {string} selector
 */
Akili.removeAlias = function (selector) {
  delete this.__aliases[selector];
};

/**
 * Isolate array prototype functions
 */
Akili.isolateArrayPrototype = function () {
  var _this4 = this;

  this.__window.Array = { prototype: {} };
  var keys = Object.getOwnPropertyNames(Array.prototype);

  var _loop = function _loop(i, l) {
    var key = keys[i];
    var old = Array.prototype[key];

    if (typeof old != 'function' || key == 'constructor') {
      return 'continue';
    }

    _this4.__window.Array.prototype[key] = old;

    Array.prototype[key] = function () {
      var _this5 = this,
          _arguments = arguments;

      return Akili.unevaluate(function () {
        if (!_this5.__isProxy) {
          return old.apply(_this5, _arguments);
        }

        return Akili.isolate(function () {
          return old.apply(_this5, _arguments);
        });
      });
    };
  };

  for (var i = 0, l = keys.length; i < l; i++) {
    var _ret = _loop(i, l);

    if (_ret === 'continue') continue;
  }
};

/**
 * Isolate some window functions
 */
Akili.isolateWindowFunctions = function () {
  this.__window.setTimeout = setTimeout;
  this.__window.setInterval = setInterval;
  this.__window.Promise = window.Promise;
  window.setTimeout = this.createCallbackIsolation(window.setTimeout, 0);
  window.setInterval = this.createCallbackIsolation(window.setInterval, 0);

  if (!window.AKILI_SSR) {
    window.Promise.constructor = this.createCallbackIsolation(window.Promise.constructor);
    window.Promise.prototype.then = this.createCallbackIsolation(window.Promise.prototype.then, [0, 'last']);
    window.Promise.prototype.catch = this.createCallbackIsolation(window.Promise.prototype.catch);
  }
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

    if (typeof fn === 'function') {
      args[1] = function () {
        var _this6 = this,
            _arguments2 = arguments;

        return Akili.isolate(function () {
          return fn.apply(_this6, _arguments2);
        });
      };
    }

    this.__akiliListeners[name].push({
      link: fn,
      fn: args[1]
    });

    return Akili.__window.Element.prototype.addEventListener.apply(this, args);
  };

  Element.prototype.removeEventListener = function (name, fn) {
    var args = [].slice.call(arguments);

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
        args[1] = listener.fn;
        i--;
        l--;
        break;
      }
    }

    if (!this.__akiliListeners[name].length) {
      delete this.__akiliListeners[name];
    }

    return Akili.__window.Element.prototype.removeEventListener.apply(this, args);
  };
};

/**
 * Wrap the function callback to an isolate context
 *
 * @param {function} fn
 * @param {number|string|number[]|string[]} [pos="last"]
 * @returns {function}
 */
Akili.createCallbackIsolation = function (fn) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'last';

  return function () {
    var args = [].slice.call(arguments);
    !Array.isArray(pos) && (pos = [pos]);

    var _loop2 = function _loop2(i, l) {
      var num = pos[i];
      var index = num;
      var callback = args[num];

      if (num == 'last') {
        index = args.length - 1;
        callback = args[index];
      }

      if (typeof callback != 'function') {
        return 'continue';
      }

      if (!callback.__isolated) {
        args[index] = function () {
          var _arguments3 = arguments;

          return Akili.isolate(function () {
            return callback.apply(callback, _arguments3);
          });
        };

        Object.defineProperty(args[index], '__isolated', {
          enumerable: false,
          value: callback
        });
      }
    };

    for (var i = 0, l = pos.length; i < l; i++) {
      var _ret2 = _loop2(i, l);

      if (_ret2 === 'continue') continue;
    }

    return fn.apply(this, args);
  };
};

/**
 * Wrap objects/classes to isolate and unevaluate data
 *
 * @param {object|function} obj
 * @param {object} [options] 
 */
Akili.wrap = function (obj) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var current = obj;

  if (typeof obj == 'function') {
    obj = this.wrapFunction(obj, options);

    if (obj === current) {
      return obj;
    }
  } else if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) != 'object' || Array.isArray(obj)) {
    return obj;
  }

  var keys = Object.getOwnPropertyNames(obj);

  for (var k = 0, c = keys.length; k < c; k++) {
    var key = keys[k];
    var descriptor = Object.getOwnPropertyDescriptor(obj, key);

    if (!descriptor.configurable || !descriptor.writable) {
      continue;
    }

    if (options.reverse) {
      Object.defineProperty(obj, key, _extends({}, descriptor, { value: obj[key].__akili || obj[key] }));
      continue;
    }

    Object.defineProperty(obj, key, _extends({}, descriptor, { value: this.wrap(obj[key], options) }));
  }

  return obj;
};

/**
 * Unwrap objects/classes
 *
 * @param {object|function} obj
 */
Akili.unwrap = function (obj) {
  return this.wrap(obj, { reverse: true });
};

/**
 * Isolate a function
 *
 * @param {function} fn
 * @param {object} [options] 
 * @returns {function}
 */
Akili.wrapFunction = function (fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (fn.__akili) {
    return fn;
  }

  var akiliWrappedFunction = function akiliWrappedFunction() {
    var _this7 = this,
        _arguments4 = arguments;

    if (options.tag && Akili.__evaluation) {
      Akili.addTag(options.tag, Akili.__evaluation.node);
    }

    return Akili.wrapping(function () {
      return fn.apply(_this7, _arguments4);
    });
  };

  var keys = Object.keys(fn);
  akiliWrappedFunction.prototype = fn.prototype;

  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    akiliWrappedFunction[key] = fn[key];
  }

  Object.defineProperty(akiliWrappedFunction, '__akili', {
    enumerable: false,
    value: fn
  });

  return akiliWrappedFunction;
};

/**
 * Add the tag
 * 
 * @param {string} tag
 * @param {Node} node
 */
Akili.addTag = function (tag, node) {
  if (this.hasTag(tag, node)) {
    return;
  }

  if (!this.__tags[node.__name]) {
    this.__tags[node.__name] = {};
  }

  if (!this.__tags[node.__name][tag]) {
    this.__tags[node.__name][tag] = [];
  }

  this.__tags[node.__name][tag].push({ node: node });
};

/**
 * Check the tag exists
 * 
 * @param {string} tag
 * @param {Node} [node]
 * @returns {boolean}
 */
Akili.hasTag = function (tag, node) {
  if (!node) {
    for (var key in this.__tags) {
      for (var k in this.__tags[key]) {
        if (k == tag) {
          return true;
        }
      }
    }

    return false;
  }

  if (!this.__tags[node.__name]) {
    return false;
  }

  if (!this.__tags[node.__name][tag]) {
    return false;
  }

  return true;
};

/**
 * Remove the tag
 * 
 * @param {string} [tag]
 * @param {Node|Node[]} [node]
 */
Akili.removeTag = function (tag, node) {
  if ((typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) == 'object') {
    node = tag;
    tag = undefined;
  }

  if (!node) {
    for (var key in this.__tags) {
      for (var k in this.__tags[key]) {
        if (k == tag) {
          delete this.__tags[key][k];
        }
      }

      if (!Object.keys(this.__tags[key]).length) {
        delete this.__tags[key];
      }
    }

    return;
  }

  if (!tag) {
    !Array.isArray(node) && (node = [node]);

    for (var i = 0, l = node.length; i < l; i++) {
      delete this.__tags[node[i].__name];
    }

    return;
  }

  for (var _key3 in this.__tags[node.__name]) {
    if (_key3 == tag) {
      delete this.__tags[node.__name][_key3];
    }
  }

  if (!Object.keys(this.__tags[node.__name]).length) {
    delete this.__tags[node.__name];
  }
};

/**
 * Evaluate the tag node expressions
 * 
 * @param {string} tag
 */
Akili.triggerTag = function (tag) {
  for (var key in this.__tags) {
    for (var k in this.__tags[key]) {
      if (k == tag) {
        var arr = this.__tags[key][k];

        for (var i = 0, l = arr.length; i < l; i++) {
          var obj = arr[i];
          obj.node.__component.__evaluateNode(obj.node, false);
        }
      }
    }
  }
};

/**
 * Error handling
 */
Akili.errorHandling = function () {
  window.addEventListener('error', this.__onError);
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
 * Initialize the application
 *
 * @param {Element} [root]
 * @returns {Promise}
 */
Akili.init = function (root) {
  var _this8 = this;

  root = root || document.body;

  if (!(root instanceof Element)) {
    throw new Error('Root element must be an html element');
  }

  if (root === document.documentElement) {
    throw new Error('"html" can\'t be the root element');
  }

  this.__root = root;

  if (window.AKILI_SERVER) {
    Akili.initServerSideHtml(window.AKILI_SERVER.html);
    Akili.initServerSideRequestCache(window.AKILI_SERVER.requestCache);
  } else {
    window.AKILI_CLIENT = {
      html: this.prepareServerSideHtml()
    };
  }

  return this.compile(this.__root).then(function () {
    if (_router2.default.__init) {
      return _router2.default.changeState({ init: true });
    }
  }).then(function () {
    window.AKILI_CLIENT && (window.AKILI_CLIENT.requestCache = _this8.prepareServerSideRequestCache());
    _this8.triggerInit(true);
  }).catch(function (err) {
    _this8.triggerInit(false);
    throw err;
  });
};

/**
 * Initialize server-side rendering html
 * 
 * @param {string} html
 */
Akili.initServerSideHtml = function (html) {
  for (var i = this.__root.attributes.length - 1; i >= 0; i--) {
    this.__root.removeAttribute(this.__root.attributes[i].name);
  }

  var parser = new DOMParser();
  var doc = parser.parseFromString(html, "text/html");
  var el = doc.querySelector(this.__root === document.body ? 'body' : 'body > *');
  this.__root.innerHTML = el.innerHTML;

  for (var _i2 = el.attributes.length - 1; _i2 >= 0; _i2--) {
    var attr = el.attributes[_i2];
    this.__root.setAttribute(attr.name, attr.value);
  }
};

/**
 * Initialize server-side rendering request cache
 * 
 * @param {object} obj
 */
Akili.initServerSideRequestCache = function (obj) {
  var init = function init(instance, obj) {
    for (var key in obj) {
      instance.__cache[key] = obj[key];
    }
  };

  for (var key in obj) {
    var instance = key === '__main' ? _request2.default : _request2.default.__instances[key];
    init(instance, obj[key]);
  }
};

/**
 * Prepare server-side rendering html
 */
Akili.prepareServerSideHtml = function () {
  return this.__root.outerHTML;
};

/**
 * Prepare server-side rendering request cache
 */
Akili.prepareServerSideRequestCache = function () {
  var cache = { __main: _request2.default.__cache };

  for (var key in _request2.default.__instances) {
    cache[key] = _request2.default.__instances[key].__cache;
  }

  return cache;
};

/**
 * Deinitialize the application
 */
Akili.deinit = function () {
  this.clearGlobals();
  _router2.default.deinit();
  _request2.default.deinit();
  var storeKeys = Object.keys(_store2.default.__target);

  for (var i = 0, l = storeKeys.length; i < l; i++) {
    delete _store2.default.__target[storeKeys[i]];
  }

  this.setDefaults();
};

window.Akili = Akili;
exports.default = Akili;

Akili.setDefaults();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _eventEmitter = __webpack_require__(8);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An object with a lot of useful functions
 * 
 * {@link https://akilijs.com/docs/utils}
 */
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
  var keys = Object.keys(obj);

  for (var i = 0, l = keys.length; i < l; i++) {
    var k = keys[i];
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
  var keys = Object.keys(obj);

  for (var i = 0, l = keys.length; i < l; i++) {
    var k = keys[i];
    var val = obj[k];
    val && styles.push(this.toDashCase(k) + ':' + val);
  }

  return styles.join(';');
};

/**
 * Extended split of the string
 * 
 * @example
 * // returns ["Hello", "World"]
 * utils.split("Hello World", " ");
 * 
 * @example
 * // returns ['x = 5', ' y = "1;2;3"']
 * utils.split('x = 5; y = "1;2;3"', ";", ['"']);
 * 
 * @param {string|RegExp} str 
 * @param {string} [del]
 * @param {string[]} [exclude] 
 */
utils.split = function (str) {
  var del = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var exps = [];
  var last = '';

  if (!del) {
    return str.split('');
  } else if (del instanceof RegExp) {
    return str.split(del);
  } else if (str.indexOf(del) == -1) {
    last = str;
  } else {
    var arr = str.split('');
    var open = '';

    for (var i = 0, l = arr.length; i < l; i++) {
      var val = arr[i];
      var index = exclude.indexOf(val);

      if (index > -1 && (!open || open == val)) {
        !open ? open = exclude[index] : open = '';
      }

      if (val == del && !open) {
        exps.push(last);
        last = '';
        continue;
      }

      last += val;
    }
  }

  last && exps.push(last);
  return exps;
};

/**
 * Filter an array
 *
 * @example
 * // returns [1, 11]
 * utils.filter([1, 2, 3, 11], '1');
 *
 * @example
 * // returns [{x: 1}, {x: 11}]
 * utils.filter([{x: 1}, {x: 2}, {x: 3}, {x: 11}], '1', 'x');
 * 
 * @example
 * // returns [{x: 1}, {x: 11}]
 * utils.filter([{x: 1}, {x: 2}, {x: 3}, {x: 11}], '1', ['x']);
 * 
 * @example
 * // returns [{x: 1}, {x: 11}]
 * utils.filter([{x: 1}, {x: 2}, {x: 3}, {x: 11}], '1', [['x']]);
 * 
 * @example
 * // returns [{x: {y: 1}}]
 * utils.filter([{x: {y: 1}}, {x: {y: 2}}], '1', [['x', 'y']]);
 * 
 * @example
 * // returns [{x:1, y: 2}, {x: 2, y:1}] 
 * utils.filter([{x: 1, y: 2}, {x: 3, y: 3}, {x: 2, y: 1}], '1', ['x', 'y']);
 * 
 * @example
 * // returns [{x:1, y: 2}, {x: 2, y:1}]
 * utils.filter([{x: 1, y: 2}, {x: 3, y: 3}, {x: 2, y: 1}], '1', [['x'], ['y']]);
 *
 * @param {Array} arr
 * @param {string|RegExp|function} handler - type of filtering
 * @param {string[]|string} [keys] - filter in the keys if array elements are object
 * @returns {Array} - returns other array
 */
utils.filter = function (arr, handler) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var res = [];

  if (keys && !Array.isArray(keys)) {
    keys = [keys];
  }

  if (typeof handler != 'function') {
    var str = handler ? (handler + '').toLowerCase() : '';
    handler = function handler(val) {
      return (val ? (val + '').toLowerCase() : '').match(str);
    };
  }

  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i];
    var filtered = false;

    if (!keys && handler(item)) {
      filtered = true;
    } else if (keys) {
      for (var k = 0, c = keys.length; k < c; k++) {
        var key = keys[k];
        key = Array.isArray(key) ? key : [key];
        var val = key ? this.getPropertyByKeys(key, item) : item;

        if (handler(val)) {
          filtered = true;
          continue;
        }
      }
    }

    filtered && res.push(item);
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

  arr = arr.slice();

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
 * Return new object with the specified keys
 * 
 * @example
 * // returns {x: 1, z: 1}
 * utils.includeKeys({x: 1, y: 1, z: 1}, ['x', 'z']);
 * 
 * @param {object} obj
 * @param {string[]} keys
 */
utils.includeKeys = function (obj, keys) {
  var newObj = {};
  var objKeys = Object.keys(obj);

  for (var i = 0, l = objKeys.length; i < l; i++) {
    var key = objKeys[i];

    if (keys.indexOf(key) != -1) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

/**
 * Return new object without the specified keys
 * 
 * @example
 * // returns {x: 1, z: 1}
 * utils.includeKeys({x: 1, y: 1, z: 1}, ['y']);
 * 
 * @param {object} obj
 * @param {string[]} keys
 */
utils.excludeKeys = function (obj, keys) {
  var newObj = {};
  var objKeys = Object.keys(obj);

  for (var i = 0, l = objKeys.length; i < l; i++) {
    var key = objKeys[i];

    if (keys.indexOf(key) == -1) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
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
 * @param {boolean} [options] 
 * @returns {*}
 */
utils.copy = function (value) {
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !value) {
    return value;
  }

  options = _extends({ nested: true, enumerable: true, plain: false }, options);

  var next = function next(obj) {
    if (options.plain && !_this2.isPlainObject(obj)) {
      return obj;
    }

    obj = _this2.isScopeProxy(obj) ? obj.__target : obj;
    var keys = !options.enumerable ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    var newObj = Array.isArray(obj) ? [] : {};

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      var val = obj[key];
      val = val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == 'object' && options.nested ? next(val) : val;

      if (!obj.propertyIsEnumerable(key)) {
        Object.defineProperty(newObj, key, _extends({}, Object.getOwnPropertyDescriptor(obj, key), {
          value: val
        }));

        continue;
      }

      newObj[key] = val;
    }

    return newObj;
  };

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
 * @param {object} [options]
 * @returns {boolean}
 */
utils.compare = function (a, b) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  } else if (typeof a == 'function' && typeof b == 'function') {
    return a.toString() === b.toString();
  } else if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) == 'object') {
    if (a === null || b === null) {
      return a === b;
    }

    options = _extends({ enumerable: true, ignoreUndefined: true }, options);

    var clearUndefined = function clearUndefined(val) {
      var obj = Array.isArray(val) ? [] : {};
      var keys = !options.enumerable ? Object.getOwnPropertyNames() : Object.keys(val);

      for (var i = 0, l = keys.length; i < l; i++) {
        var key = keys[i];
        val[key] !== undefined && (obj[key] = val[key]);
      }

      return obj;
    };

    if (options.ignoreUndefined) {
      a = clearUndefined(a);
      b = clearUndefined(b);
    }

    var aKeys = !options.enumerable ? Object.getOwnPropertyNames() : Object.keys(a);
    var bKeys = !options.enumerable ? Object.getOwnPropertyNames() : Object.keys(b);

    if (aKeys.length != bKeys.length) {
      return false;
    }

    a = this.isScopeProxy(a) ? a.__target : a;
    b = this.isScopeProxy(b) ? b.__target : b;

    for (var i = 0, l = aKeys.length; i < l; i++) {
      var key = aKeys[i];

      if (!this.compare(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a === b;
};

/**
 * Create hash from a string
 * 
 * @param {*} source
 * @returns {string}
 */
utils.createHash = function (source) {
  (typeof source === 'undefined' ? 'undefined' : _typeof(source)) == 'object' && (source = JSON.stringify(source));
  typeof source != 'string' && (source = '⠀' + String(source));
  var hash = 0;

  for (var i = 0; i < source.length; i++) {
    var char = source.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }

  return hash + '';
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
 * Capitalize the string
 *
 * @param {string} str
 * @returns {string}
 */
utils.capitalize = function (str) {
  return str[0].toUpperCase() + str.slice(1);
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
      o[k] = undefined;
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
 * @example
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
      (!fn || fn(value)) && delete o[k];
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
  var now = Date.now();
  var val = '';

  for (var i = 0, l = str.length; i < l; i++) {
    if (!(now % i)) {
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

/**
 *  Create a function with the debounce
 *
 * @param {function} fn
 * @param {number} delay
 * @returns {fn}
 */
utils.debounce = function (fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return function () {
    clearTimeout(fn.__debounceTimeout);
    fn.__debounceTimeout = setTimeout(function () {
      fn();
      clearTimeout(fn.__debounceTimeout);
      delete fn.__debounceTimeout;
    }, delay);
  };
};

exports.default = utils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for elements which have async attribute content.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag url
 * @attr {string} [url]
 */
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
    key: 'compiled',
    value: function compiled() {
      this.attr('url', this.setUrl);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemAttributes = exports.evaluationRegexGlobal = exports.evaluationRegex = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _scope2 = __webpack_require__(7);

var _scope3 = _interopRequireDefault(_scope2);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _store = __webpack_require__(9);

var _store2 = _interopRequireDefault(_store);

var _globals = __webpack_require__(10);

var _globals2 = _interopRequireDefault(_globals);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var evaluationRegex = exports.evaluationRegex = /\${(((?!\${).)*)}/;
var evaluationRegexGlobal = exports.evaluationRegexGlobal = new RegExp(evaluationRegex.source, "g");
var systemAttributes = exports.systemAttributes = ['component', 'scope'];

/**
 * Base class from which all components are inherited
 */

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
     * @param {object} [vars]
     */

  }, {
    key: 'parse',
    value: function parse(context, expression) {
      var variables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var keys = [];
      var vars = [];
      var exps = _utils2.default.split(expression, ';', ['"', "'", '`']);
      exps[exps.length - 1] = 'return ' + exps[exps.length - 1];

      for (var key in variables) {
        keys.push(key);
        vars.push(variables[key]);
      }

      return new (Function.prototype.bind.apply(Function, [null].concat(keys, ['' + exps.join('; ')])))().apply(context, vars);
    }

    /**
     * Constructor
     * 
     * @param {Element} el 
     * @param {object} [scope] 
     */

  }]);

  function Component(el) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    if (!(el instanceof Element)) {
      throw new Error('You must pass an html element to the component constructor');
    }

    this.__isMounted = false;
    this.__isCompiled = false;
    this.__isResolved = false;
    this.__cancelled = false;
    this.__prevent = false;
    this.__bindings = {};
    this.__evaluatingEvent = null;
    this.__recompiling = null;
    this.__compiling = null;
    this.__disableProxy = {};
    this.__disableStoreKeys = {};
    this.__disableAttrKeys = {};
    this.__children = [];
    this.__parent = null;
    this.__parents = [];
    this.__content = '';
    this.__attrs = {};
    this.__attrLinks = {};
    this.__storeLinks = {};
    this.__attributeOf = null;
    this.__evaluationComponent = this;
    this.scope = scope;
    this.el = el;
  }

  /**
   * Create compilation options 
   * 
   * @param {object} [options]
   * @protected
   */


  _createClass(Component, [{
    key: '__createCompilationOptions',
    value: function __createCompilationOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _extends({
        checkChanges: false,
        setEvents: true,
        setParents: true,
        setBooleanAttributes: true,
        defineAttributes: true
      }, options);
    }

    /**
     * Create recompilation options 
     * 
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__createRecompilationOptions',
    value: function __createRecompilationOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return _extends({}, this.__createCompilationOptions(), {
        setEvents: false,
        setParents: false,
        setBooleanAttributes: false,
        defineAttributes: false
      }, options);
    }

    /**
     * Called on the recompilation
     * 
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__recompile',
    value: function __recompile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.__isMounted = false;
      this.__recompiling = true;
      this.__evaluationComponent.__disableProxy = {};
      this.__compiling = this.__createRecompilationOptions(options);
      this.__compiling.setEvents && this.__setEvents();
      this.__compiling.setParents && this.__setParents();
      this.__compiling.setBooleanAttributes && this.__setBooleanAttributes();
      this.__compiling.defineAttributes && this.__defineAttributes();
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

      this.__compiling = this.__createCompilationOptions();
      this.__initialize();
      this.__setEvents();
      this.__setParents();
      this.__setBooleanAttributes();
      this.__defineAttributes();
      _akili2.default.isolate(function () {
        return _this.created(_this.attrs);
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

          if (child.nodeType == 3 && _this2.__initializeNode(child, parent)) {
            _this2.__evaluateNode(child, _this2.__compiling ? _this2.__compiling.checkChanges : false);
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
          p = _request2.default.get(this.constructor.templateUrl, { cache: this.constructor.templateCache }).then(function (res) {
            _this2.el.innerHTML = _this2.__content;
            _akili2.default.setTemplate(_this2.el, res.data);
            delete _this2.__content;
            return _akili2.default.compile(_this2.el, { recompile: true });
          });
        }
      } else {
        res = _akili2.default.isolate(function () {
          _this2.attrs.onRecompiled && _this2.attrs.onRecompiled.trigger(undefined, { bubbles: false });
          _this2.recompiled();
        });
      }

      this.__recompiling = null;
      this.__compiling = null;

      return p.then(function () {
        _this2.__isCompiled = true;
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
      var _this3 = this;

      if (this.__isResolved) {
        return Promise.resolve();
      }

      this.attrs.onResolved && this.attrs.onResolved.trigger(undefined, { bubbles: false });

      return Promise.resolve(_akili2.default.isolate(function () {
        return _this3.resolved();
      })).then(function (res) {
        _this3.__isResolved = true;
        return res;
      });
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
      this.el.__akili = this;

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
      this.scope = this.__nestedObserve(_scope, []);
      return true;
    }

    /**
     * Set boolean attributes
     *
     * @protected
     */

  }, {
    key: '__setBooleanAttributes',
    value: function __setBooleanAttributes() {
      var _this4 = this;

      this.booleanAttributes = [].concat(_akili2.default.htmlBooleanAttributes, this.constructor.booleanAttributes);

      var setAttr = function setAttr(el) {
        for (var i = 0, attrs = el.attributes, l = attrs.length; i < l; i++) {
          var node = attrs[i];

          if (_this4.booleanAttributes.indexOf(node.nodeName) != -1) {
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
     * @param {Element} el
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
     * @param {Element} el
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

        if (!node.__component.__compareNodePropertyValue(prop, value)) {
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
    key: '__checkNodePropertyChange',
    value: function __checkNodePropertyChange(node, keys, value) {
      var prop = this.__getNodeProperty(node, keys);

      if (!prop) {
        return true;
      }

      return !node.__component.__compareNodePropertyValue(prop, value);
    }

    /**
     * Compare a node property value
     * 
     * @param {object} prop 
     * @param {*} value 
     * @param {object} [options] 
     */

  }, {
    key: '__compareNodePropertyValue',
    value: function __compareNodePropertyValue(prop, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return _utils2.default.compare(_utils2.default.createHash(value), prop.hash, options);
    }

    /**
     * Create an exception message
     * 
     * @param {Node} node 
     * @param {Error} err 
     */

  }, {
    key: '__createExceptionMessage',
    value: function __createExceptionMessage(node, err) {
      var tagName = node.__component.el.tagName;
      var attrName = node.__component.el.getAttribute('component');
      var componentName = (attrName || tagName).toLowerCase();
      var elementName = node.__element.tagName.toLowerCase();
      var attributeName = node instanceof window.Attr ? node.name.toLowerCase() : '';
      var messages = [err.message, node.__expression.trim()];
      attributeName && messages.push('[attribute ' + attributeName + ']');
      messages = messages.concat(['[element ' + elementName + ']', '[component ' + componentName + ']']);
      return 'Expression error: ' + messages.join('\n\tat ');
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
      var _this5 = this;

      var counter = 0;
      var attributeValue = void 0;
      var expression = void 0;
      var evalComponent = node.__attributeOf || node.__component;

      if (node.__component.parents(function (com) {
        return com.__prevent;
      }).length) {
        return { res: node.__expression };
      }

      if (!(node instanceof window.Attr) && node.__component.__prevent) {
        return { res: node.__expression };
      }

      var res = node.__expression.replace(evaluationRegexGlobal, function (m, d) {
        counter++;
        var evaluate = void 0;
        var evaluation = [];
        var existingBindings = {};
        var parentBindings = {};
        var parseValue = node.__component.__getParsedExpression(d);
        _akili2.default.__evaluation = { node: node, list: [], component: node.__component };

        try {
          evaluate = _this5.constructor.parse(evalComponent.__evaluationComponent.scope, parseValue, _extends({}, _globals2.default));
        } catch (err) {
          throw _this5.__createExceptionMessage(node, err);
        }

        if (_akili2.default.__evaluation) {
          evaluation = _akili2.default.__evaluation.list;
          _akili2.default.__evaluation.list = null;
          _akili2.default.__evaluation = null;
        }

        for (var i = evaluation.length - 1; i >= 0; i--) {
          var data = evaluation[i];
          var hash = data.component.__createKeysHash(data.keys);
          var parentsHash = data.component.__createKeysHash(data.parents);

          if (data.notBinding) {
            continue;
          }

          if (existingBindings[hash]) {
            continue;
          }

          var parentValue = _utils2.default.getPropertyByKeys(data.parents, data.component.__scope);

          if (parentValue && (typeof parentValue === 'undefined' ? 'undefined' : _typeof(parentValue)) == 'object') {
            if (_akili2.default.options.debug && parentBindings[parentsHash] == 50) {
              // eslint-disable-next-line no-console
              console.warn(['For higher performance, don\'t loop Proxy arrays/objects inside expression functions, or use Akili.unevaluate() to wrap you code.', '' + node.__expression.trim(), 'scope property "' + data.parents.join('.') + '"'].join('\n\tat '));
            }

            !parentBindings[parentsHash] ? parentBindings[parentsHash] = 1 : parentBindings[parentsHash]++;
          }

          if (_utils2.default.isScopeProxy(parentValue) && data.component !== evalComponent.__evaluationComponent && data.component === data.realComponent) {
            continue;
          }

          data.component.__bindAndSetProperty(node, data.keys, data.evaluated);
          existingBindings[hash] = true;
        }

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

      return { res: res, counter: counter, expression: expression, attributeValue: attributeValue };
    }

    /**
     * Bind the node and set property
     *
     * @param {Node} node
     * @param {string[]} keys
     * @param {boolean} [evaluated]
     * @protected
     */

  }, {
    key: '__bindAndSetProperty',
    value: function __bindAndSetProperty(node, keys, evaluated) {
      var bind = this.__getBoundNode(keys, node);
      var value = _utils2.default.getPropertyByKeys(keys, this.__scope);

      if (!bind) {
        this.__bind(keys, { node: node });
      }

      this.__setNodeProperty(node, keys, value, evaluated);
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
      var _this6 = this;

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
          var data = void 0;

          if (component === _this6) {
            var bind = component.__getBind(prop.keys);
            data = bind ? bind.__data || [] : [];
          } else {
            data = component.__getAllBinds(prop.keys);
          }

          if (!data || !data.length) {
            continue;
          }

          for (var k = 0, c = data.length; k < c; k++) {
            var _bind = data[k];

            if (!_bind || !_bind.node || !_bind.node.__initialized) {
              continue;
            }

            if (component.__checkNodePropertyChange(_bind.node, prop.keys, prop.value)) {
              component.__disableKeys(prop.keys);
              var checkProp = component.__getNodeProperty(_bind.node, prop.keys);
              checkProp && checkProp.evaluated && component.scope.__set(prop.keys, prop.value, false, true);
              component.__evaluateNode(_bind.node, false);

              for (var _k in _bind.node.__properties) {
                if (!_bind.node.__properties.hasOwnProperty(_k)) {
                  continue;
                }

                var _prop = _bind.node.__properties[_k];
                var _value = _utils2.default.getPropertyByKeys(_prop.keys, _prop.component.__scope);
                _prop.component.__setNodeProperty(_bind.node, _prop.keys, _value);
              }

              component.__enableKeys(prop.keys);
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
      var _this7 = this;

      var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var data = this.__getBind(keys);

      var unbind = function unbind(obj, parents) {
        for (var k in obj) {
          if (!obj.hasOwnProperty(k) || _this7.__isSystemBindingKey(k)) {
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

          _this7.__evaluateNested(_keys, true);

          if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || !hasKey) {
            _this7.__unbind(_keys);
            _isDeleted && _utils2.default.deletePropertyByKeys(__keys, value);
          }
        }
      };

      data && unbind(data, [].concat(keys));
      this.__evaluateNested(keys, false);

      if (isDeleted) {
        this.__unbind(keys);
        isDeleted && _utils2.default.deletePropertyByKeys(keys, this.__scope);
      }
    }

    /**
     * Evaluate event expression
     *
     * @param {Node} node
     * @param {Element} el
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

      this.__disableProxy = {};

      try {
        evaluate = this.constructor.parse(this.__evaluationComponent.scope, expression[1], _extends({}, _globals2.default, { event: e }));
      } catch (err) {
        throw this.__createExceptionMessage(node, err);
      }

      this.__evaluatingEvent = null;
      return evaluate;
    }

    /**
     * Check changes and evaluate the passed node
     *
     * @param {Node} node
     * @param {boolean} [check]
     * @protected
     */

  }, {
    key: '__evaluateNode',
    value: function __evaluateNode(node) {
      var check = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var key = node instanceof window.Attr ? 'value' : 'nodeValue';

      if (check ? this.__checkEvaluation(node) : true) {
        var _evaluate = this.__evaluate(node),
            res = _evaluate.res,
            attributeValue = _evaluate.attributeValue,
            expression = _evaluate.expression,
            counter = _evaluate.counter;

        node[key] != res && (node[key] = res);

        if (node instanceof window.Attr) {
          var value = res;
          var isBooleanAttribute = false;

          if (counter == 1 && expression && node.__expression == expression) {
            value = attributeValue;
          }

          var clearAttribute = node.nodeName.replace(/^boolean-(.+)/i, '$1');
          var camelAttribute = _utils2.default.toCamelCase(clearAttribute);

          if (clearAttribute != node.nodeName) {
            isBooleanAttribute = true;
            value = !!value;
          }

          if (node.__attributeOn) {
            var component = node.__attributeOn;
            value = component.__prepareAttributeIn(node, value);
            component.__disableAttributeSetter = true;
            component.attrs[camelAttribute] = value;
            component.__disableAttributeSetter = false;

            if (component.__isMounted) {
              component.__attrTriggerByName(camelAttribute, value);
            }
          } else if (isBooleanAttribute) {
            var element = node.__element;
            value ? element.setAttribute(camelAttribute, 'true') : element.removeAttribute(camelAttribute);
          }
        }
      }

      return node[key];
    }

    /**
     * Prepare the attribute value for getting
     * 
     * @param {Node} node
     * @param {*} value
     */

  }, {
    key: '__prepareAttributeIn',
    value: function __prepareAttributeIn(node, value) {
      return _utils2.default.copy(value, { plain: true });
    }

    /**
     * Prepare the attribute value for sending
     * 
     * @param {Node} node
     * @param {*} value
     */

  }, {
    key: '__prepareAttributeOut',
    value: function __prepareAttributeOut(node, value) {
      return _utils2.default.copy(value, { plain: true });
    }

    /**
     * Attribute node initializing
     *
     * @param {Node} node
     * @param {Element} el
     * @param {Component} attributeOf - if node is linked with parent scope
     * @protected
     */

  }, {
    key: '__initializeAttribute',
    value: function __initializeAttribute(node, el, attributeOf) {
      if (!node || systemAttributes.indexOf(node.nodeName) != -1) {
        return;
      }

      if (!this.__initializeNode(node, el)) {
        return;
      }

      var eventName = node.nodeName.replace(/^on-(.+)/i, '$1');
      var component = attributeOf ? attributeOf : this;

      if (node.__isEvent) {
        if (node.__event) {
          return;
        }

        var emitter = new _akili2.default.EventEmitter(eventName, node, el, component);

        if (node.__hasBindings) {
          emitter.bind(function (e) {
            return component.__evaluateEvent(node, el, e);
          });
        }

        node.__event = emitter;
        el.setAttribute(node.nodeName, _utils2.default.makeAttributeValue(emitter));

        if (attributeOf) {
          this.__disableAttributeSetter = true;
          this.attrs[_utils2.default.toCamelCase(node.nodeName)] = emitter;
          this.__disableAttributeSetter = false;
        }

        return;
      }

      if (attributeOf) {
        node.__attributeOn = this;
        node.__attributeOf = component;
      }

      var check = this.__compiling ? this.__compiling.checkChanges : false;
      component.__evaluateNode(node, check);
    }

    /**
     * Initialize the node
     *
     * @param {Node} node
     * @param {Element} el
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__initializeNode',
    value: function __initializeNode(node, el) {
      if (node.__initialized) {
        return true;
      }

      var isAttr = node instanceof window.Attr;
      var val = node[isAttr ? 'value' : 'nodeValue'];
      var hasBindings = evaluationRegex.test(val.trim());
      var isBoolean = isAttr ? /^boolean-/i.test(node.nodeName) : false;
      var isEvent = isAttr ? /^on-(.+)/i.test(node.nodeName) : false;

      if (!el.__akili && !hasBindings && !isBoolean && !isEvent) {
        return false;
      }

      node.__name = this.__scope.__name + _utils2.default.createRandomString(16);
      node.__isEvent = isEvent;
      node.__hasBindings = hasBindings;
      node.__isBoolean = isBoolean;
      node.__expression = val;
      node.__properties = {};
      node.__attributeOf = null;
      node.__attributeOn = null;
      node.__event = null;
      node.__initialized = true;
      node.__component = this;
      node.__element = el;
      return true;
    }

    /**
     * Deinitialize the node
     *
     * @param {Node} node
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__deinitializeNode',
    value: function __deinitializeNode(node) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (node.__event) {
        node.__event.remove();
      }

      if (node.__hasBindings && !options.saveBindings) {
        this.__unbindByNodes(node);
        this.__unbindParentsByNodes(node);
        _akili2.default.removeTag(node);
      }

      delete node.__name;
      delete node.__hasBindings;
      delete node.__isBoolean;
      delete node.__isEvent;
      delete node.__expression;
      delete node.__properties;
      delete node.__attributeOf;
      delete node.__attributeOn;
      delete node.__event;
      delete node.__initialized;
      delete node.__component;
      delete node.__element;
    }

    /**
     * Interpolate attributes of the element
     *
     * @param {Element} el
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
      var _this8 = this;

      var changeAttribute = function changeAttribute(key, value) {
        var isDeleted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (_this8.__disableAttributeSetter) {
          return;
        }

        var node = _this8.el.getAttributeNode(key);

        if (isDeleted) {
          node && _this8.__deinitializeNode(node);
          _this8.el.removeAttribute(key);
          return;
        } else if (!node) {
          _this8.el.setAttribute(key, value);
          node = _this8.el.getAttributeNode(key);
        } else {
          node.value = value;
          _this8.__deinitializeNode(node);
        }

        _this8.__initializeAttribute(node, _this8.el, _this8.__attributeOf);
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

          if (_this8.booleanAttributes.indexOf(attrKey) != -1) {
            attrKey = 'boolean-' + attrKey;
            value ? _this8.el.setAttribute(key, value) : _this8.el.removeAttribute(key);
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
      var _this9 = this;

      return new Proxy(obj, {
        get: function get(target, key) {
          if (key == "__isProxy") {
            return true;
          }

          if (key == "__target") {
            return obj;
          }

          if (key == "__component") {
            return _this9;
          }

          if (key == "__keys") {
            return parents;
          }

          if (_this9.__isSystemKey(key)) {
            return target[key];
          }

          if (_akili2.default.__evaluation) {
            var keys = [].concat(parents, [key]);
            var notBinding = false;
            var evaluated = !_utils2.default.hasPropertyByKeys(keys, _this9.__scope);
            var component = _this9;
            var excArr = keys.slice();

            if (target instanceof _scope3.default) {
              var realTarget = _utils2.default.getOwnPropertyTarget(target, key);
              realTarget && realTarget instanceof _scope3.default && (component = realTarget.__component);
            }

            if (_akili2.default.__wrapping && keys.length > 1) {
              return target[key];
            }

            var forParents = _akili2.default.__evaluation.component.parents(function (c) {
              return c instanceof _akili2.default.components.For;
            });

            for (var i = 0, l = forParents.length; i < l; i++) {
              for (var k = 0, c = keys.length; k < c; k++) {
                var forData = forParents[i].data;
                var data = _utils2.default.getPropertyByKeys(excArr, component.__scope);

                if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object' && forData === data) {
                  return target[key];
                }

                excArr.pop();
              }
            }

            if (!(key in target)) {
              target[key] = undefined;
            } else if (!_utils2.default.getEnumerablePropertyTarget(target, key)) {
              notBinding = true;
            }

            _this9.__bindNode(_akili2.default.__evaluation.list, component, keys, parents, target[key], notBinding, evaluated);
            return target[key];
          }

          return target[key];
        },
        set: function set(target, key, value) {
          if (_this9.__isSystemKey(key)) {
            target[key] = value;
            return true;
          }

          if (typeof target[key] === 'function') {
            value = _akili2.default.wrapFunction(value);
          }

          var keys = [].concat(parents, [key]);

          if (_this9.__checkDisablement(keys)) {
            target[key] = value;
            return true;
          }

          CHECK_EXISTENCE: if (parents.length > 0) {
            var targetParentValue = parents.length > 1 ? _utils2.default.getPropertyByKeys(parents.slice(0, -1), _this9.__scope) : _this9.__scope;

            for (var k in targetParentValue) {
              if (!targetParentValue.hasOwnProperty(k)) {
                continue;
              }

              if (targetParentValue[k] && targetParentValue[k].__target === target) {
                break CHECK_EXISTENCE;
              }
            }

            target[key] = value;
            return true;
          }

          target[key] = _this9.__nestedObserve(value, keys);

          if (!_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          if (_akili2.default.__isolation) {
            _this9.__createIsolationObject(parents, key, false);
            return true;
          }

          if (_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          if (_this9.__isMounted) {
            _this9.__evaluateByKeys(keys, value);
          }

          return true;
        },
        deleteProperty: function deleteProperty(target, key) {
          var keys = [].concat(parents, [key]);

          if (_this9.__checkDisablement(keys)) {
            delete target[key];
            return true;
          }

          if (_this9.__isSystemKey(key)) {
            delete target[key];
            return true;
          }

          delete target[key];

          if (!_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          if (_akili2.default.__isolation) {
            _this9.__createIsolationObject(parents, key, true);
            return true;
          }

          if (_this9.__isResolved) {
            _this9.__triggerStoreAndAttr(keys);
          }

          _this9.__evaluateByKeys(keys, undefined, true);
          return true;
        }
      });
    }

    /**
     * Trigger store and attributes change
     */

  }, {
    key: '__triggerStoreAndAttr',
    value: function __triggerStoreAndAttr(keys) {
      for (var i = 0, l = keys.length; i < l; i++) {
        var currentKeys = keys.slice(0, l - i);
        var currentKeyString = _akili2.default.joinBindingKeys(currentKeys);
        var val = _utils2.default.getPropertyByKeys(currentKeys, this.__scope);

        if (this.__storeLinks[currentKeyString]) {
          this.__storeTriggerByKeys(currentKeys, val);
        }

        if (this.__attrLinks[currentKeyString]) {
          this.__attrTriggerByKeys(currentKeys, val);
        }
      }
    }

    /**
     * Create hash for the keys
     * 
     * @param {string[]} keys 
     * @returns {string}    
     * @protected
     */

  }, {
    key: '__createKeysHash',
    value: function __createKeysHash(keys) {
      return this.__scope.__name + '.' + _akili2.default.joinBindingKeys(keys);
    }

    /**
     * Get the store of the disablement type
     * 
     * @param {string} type 
     */

  }, {
    key: '__getDisablementTypeStore',
    value: function __getDisablementTypeStore(type) {
      return {
        proxy: '__disableProxy',
        store: '__disableStoreKeys',
        attr: '__disableAttrKeys'
      }[type];
    }

    /**
     * Disable the keys setter
     * 
     * @param {string[]} keys  
     * @param {string} [type]  
     * @protected
     */

  }, {
    key: '__disableKeys',
    value: function __disableKeys(keys) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'proxy';

      this[this.__getDisablementTypeStore(type)][keys ? this.__createKeysHash(keys) : '__all'] = true;
    }

    /**
     * Enable the keys setter
     * 
     * @param {string[]} keys 
     * @param {string} [type]   
     * @protected
     */

  }, {
    key: '__enableKeys',
    value: function __enableKeys(keys) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'proxy';

      delete this[this.__getDisablementTypeStore(type)][keys ? this.__createKeysHash(keys) : '__all'];
    }

    /**
     * Check the keys setter disablemant
     * 
     * @param {string[]} keys 
     * @param {string} [type]   
     * @protected
     */

  }, {
    key: '__checkDisablement',
    value: function __checkDisablement(keys) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'proxy';

      var store = this.__getDisablementTypeStore(type);
      return this[store].__all ? true : this[store][this.__createKeysHash(keys)];
    }

    /**
     * Save the value to the store by the keys
     * 
     * @param {string[]} keys 
     * @param {*} value    
     * @protected
     */

  }, {
    key: '__storeTriggerByKeys',
    value: function __storeTriggerByKeys(keys, value) {
      if (this.__checkDisablement(keys, 'store')) {
        return;
      }

      var links = this.__storeLinks[_akili2.default.joinBindingKeys(keys)];

      if (!links || !links.length) {
        return;
      }

      value = _utils2.default.copy(value, { plain: true });
      var p = [];

      for (var i = 0, l = links.length; i < l; i++) {
        var link = links[i];

        if (!link.set) {
          continue;
        }

        p.push(this.__storeTriggerByName(link.name, value));
      }

      return Promise.all(p);
    }

    /**
     * Save the value to the store by the name
     * 
     * @param {string} name 
     * @param {*} value 
     * @protected
     */

  }, {
    key: '__storeTriggerByName',
    value: function __storeTriggerByName(name, value) {
      var _this10 = this;

      _store2.default.__target[name] = value;
      var links = (_akili2.default.__storeLinks[name] || []).concat(_akili2.default.__storeLinks['*'] || []);

      if (!links || !links.length) {
        return;
      }

      links = _utils2.default.sort(links, ['date'], true);

      return _akili2.default.nextTick(function () {
        var _loop = function _loop(i, l) {
          var link = links[i];
          var component = link.component;

          if (component === _this10) {
            return 'continue';
          }

          if (link.fn) {
            _akili2.default.unisolate(function () {
              return link.fn.call(component, value, name);
            });
            return 'continue';
          }
          if (!link.get) {
            return 'continue';
          }

          component.__disableKeys(link.keys, 'store');
          var current = _utils2.default.getPropertyByKeys(link.keys, component.__scope);
          !_utils2.default.compare(current, value) && component.scope.__set(link.keys, value);
          component.__enableKeys(link.keys, 'store');
        };

        for (var i = 0, l = links.length; i < l; i++) {
          var _ret = _loop(i, l);

          if (_ret === 'continue') continue;
        }
      });
    }

    /**
     * Create a store link with the scope property
     * 
     * @param {string} name 
     * @param {string|string[]} keys
     * @param {obhect} [options]
     * @protected
     */

  }, {
    key: '__storeByKeys',
    value: function __storeByKeys(name, keys) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      options = _extends({ get: true, set: true }, options);

      if (!keys) {
        throw new Error('Store link "' + name + '" must have the scope property name');
      }

      if (!options.get && !options.set) {
        throw new Error('Store link "' + name + '" must have at least "get" or "set" option as true');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      this.__disableKeys(keys, 'store');
      (_store2.default.hasOwnProperty(name) || !_utils2.default.hasPropertyByKeys(keys, this.__scope)) && this.scope.__set(keys, _store2.default[name]);
      this.__enableKeys(keys, 'store');
      var keyString = _akili2.default.joinBindingKeys(keys);
      var info = void 0;

      if (!this.__storeLinks[keyString]) {
        this.__storeLinks[keyString] = [];
      }

      var arr = this.__storeLinks[keyString];

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

        if (res.component === this && res.name == name && res.keyString == keyString) {
          res.set = options.set;
          res.get = options.get;
          res.date = Date.now();
          return;
        }
      }

      if (!_akili2.default.__storeLinks[name]) {
        _akili2.default.__storeLinks[name] = [];
      }

      info = { component: this, name: name, keys: keys, keyString: keyString, date: Date.now(), set: options.set, get: options.get };
      this.__storeLinks[keyString].push(info);
      _akili2.default.__storeLinks[name].push(info);
    }

    /**
     * Create a store link with the function
     * 
     * @param {string} name 
     * @param {function} fn   
     * @param {object} [options]
     * @protected
     * @returns {*}
     */

  }, {
    key: '__storeByFunction',
    value: function __storeByFunction(name, fn) {
      var _this11 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var call = options.callOnStart === undefined ? _store2.default.__target.hasOwnProperty(name) : options.callOnStart;

      if (!_akili2.default.__storeLinks[name]) {
        _akili2.default.__storeLinks[name] = [];
      }

      var links = _akili2.default.__storeLinks[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.component === this && res.name == name && res.fn === fn) {
          res.date = Date.now();
          return;
        }
      }

      _akili2.default.__storeLinks[name].push({ component: this, name: name, fn: fn, date: Date.now() });

      if (name == '*' && options.callOnStart !== false) {
        var storeKeys = Object.keys(_store2.default.__target);
        var p = [];

        var _loop2 = function _loop2(l, _i3) {
          var key = storeKeys[_i3];
          var val = _store2.default.__target[key];
          p.push(_akili2.default.unisolate(function () {
            return fn.call(_this11, val, key);
          }));
        };

        for (var _i3 = 0, l = storeKeys.length; _i3 < l; _i3++) {
          _loop2(l, _i3);
        }

        return Promise.all(p);
      }

      if (call) {
        return _akili2.default.unisolate(function () {
          return fn.call(_this11, _store2.default[name]);
        });
      }
    }

    /**
     * Remove the store link with the scope property
     * 
     * @param {string} name
     * @param {string|string[]} keys
     * @protected
     */

  }, {
    key: '__unstoreByKeys',
    value: function __unstoreByKeys(name, keys) {
      if (!keys) {
        throw new Error('You have to pass the scope property name for store link "' + name + '"');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      var keyString = _akili2.default.joinBindingKeys(keys);
      var arr = this.__storeLinks[keyString];

      if (!arr.length) {
        return;
      }

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];
        var links = _akili2.default.__storeLinks[res.name];

        if (res.component !== this || res.name != name || res.keyString != keyString) {
          continue;
        }

        arr.splice(i, 1);

        if (!links || !links.length) {
          continue;
        }

        for (var k = links.length - 1; k >= 0; k--) {
          var _link = links[k];

          if (_link.component === this && _link.keyString == keyString) {
            links.splice(k, 1);
          }
        }

        if (!links.length) {
          delete _akili2.default.__storeLinks[name];
        }
      }

      if (!arr.length) {
        delete this.__storeLinks[keyString];
      }
    }

    /**
     * Remove the store link with the function
     * 
     * @param {string} name 
     * @param {function} fn 
     * @protected
     */

  }, {
    key: '__unstoreByFunction',
    value: function __unstoreByFunction(name, fn) {
      if (!_akili2.default.__storeLinks[name]) {
        return;
      }

      var links = _akili2.default.__storeLinks[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.component === this && res.name == name && res.fn === fn) {
          links.splice(i, 1);
          break;
        }
      }

      if (!links.length) {
        delete _akili2.default.__storeLinks[name];
      }
    }

    /**
     * Trigger an attribute event by the keys
     * 
     * @param {string[]} keys 
     * @param {*} value    
     * @protected
     */

  }, {
    key: '__attrTriggerByKeys',
    value: function __attrTriggerByKeys(keys, value) {
      var _this12 = this;

      if (this.__checkDisablement(keys, 'attr')) {
        return;
      }

      var links = this.__attrLinks[_akili2.default.joinBindingKeys(keys)];

      if (!links || !links.length) {
        return;
      }

      return _akili2.default.nextTick(function () {
        for (var i = 0, l = links.length; i < l; i++) {
          var _link2 = links[i];

          if (_link2.fn) {
            continue;
          }

          if (!_link2.set) {
            continue;
          }

          var ev = 'on' + _utils2.default.capitalize(_link2.name);
          _this12.attrs[ev] && _this12.attrs[ev].trigger(value, { bubbles: true });
        }
      });
    }

    /**
     * Trigger an attribute event by the name
     * 
     * @param {string} name 
     * @param {*} value 
     * @protected
     */

  }, {
    key: '__attrTriggerByName',
    value: function __attrTriggerByName(name, value) {
      var _this13 = this;

      var links = (this.__attrLinks[name] || []).concat(this.__attrLinks['*'] || []);

      if (!links || !links.length) {
        return;
      }

      links = _utils2.default.sort(links, ['date'], true);

      var _loop3 = function _loop3(i, l) {
        var link = links[i];

        if (link.fn) {
          _akili2.default.unisolate(function () {
            return link.fn.call(_this13, value, _utils2.default.toDashCase(name));
          });
          return 'continue';
        }

        if (!link.get) {
          return 'continue';
        }

        _this13.__disableKeys(link.keys, 'attr');
        var current = _utils2.default.getPropertyByKeys(link.keys, _this13.__scope);
        !_utils2.default.compare(current, value) && _this13.scope.__set(link.keys, value);
        _this13.__enableKeys(link.keys, 'attr');
      };

      for (var i = 0, l = links.length; i < l; i++) {
        var _ret3 = _loop3(i, l);

        if (_ret3 === 'continue') continue;
      }
    }

    /**
     * Create an attribute link with the scope property
     * 
     * @param {string} name 
     * @param {string|string[]} keys
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__attrByKeys',
    value: function __attrByKeys(name, keys) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      options = _extends({ get: true, set: true }, options);
      name = _utils2.default.toCamelCase(name);

      if (!keys) {
        throw new Error('Attribute link "' + name + '" must have the scope property name');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      this.__disableKeys(keys, 'attr');
      (this.attrs.hasOwnProperty(name) || !_utils2.default.hasPropertyByKeys(keys, this.__scope)) && this.scope.__set(keys, this.attrs[name]);
      this.__enableKeys(keys, 'attr');
      var keyString = _akili2.default.joinBindingKeys(keys);

      if (!this.__attrLinks[keyString]) {
        this.__attrLinks[keyString] = [];
      }

      var arr = this.__attrLinks[keyString];

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

        if (res.name == name && res.keyString == keyString) {
          res.get = options.get;
          res.set = options.set;
          res.date = Date.now();
          return;
        }
      }

      this.__attrLinks[keyString].push({ name: name, keys: keys, keyString: keyString, date: Date.now(), set: options.set, get: options.get });
    }

    /**
     * Create an attribute link with the function
     * 
     * @param {string} name 
     * @param {function} fn
     * @param {object} [options]
     * @protected 
     * @returns {*}
     */

  }, {
    key: '__attrByFunction',
    value: function __attrByFunction(name, fn) {
      var _this14 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      name = _utils2.default.toCamelCase(name);
      var call = options.callOnStart === undefined ? this.attrs.hasOwnProperty(name) : options.callOnStart;

      if (!this.__attrLinks[name]) {
        this.__attrLinks[name] = [];
      }

      var links = this.__attrLinks[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.name == name && res.fn === fn) {
          res.date = Date.now();
          return;
        }
      }

      this.__attrLinks[name].push({ name: name, fn: fn, date: Date.now() });

      if (name == '*' && options.callOnStart !== false) {
        var attrsKeys = Object.keys(this.__attrs).filter(function (k) {
          return !(_this14.__attrs[k] instanceof _akili2.default.EventEmitter);
        });
        var p = [];

        var _loop4 = function _loop4(l, _i4) {
          var key = attrsKeys[_i4];
          var val = _this14.__attrs[key];
          p.push(_akili2.default.unisolate(function () {
            return fn.call(_this14, val, _utils2.default.toDashCase(key));
          }));
        };

        for (var _i4 = 0, l = attrsKeys.length; _i4 < l; _i4++) {
          _loop4(l, _i4);
        }

        return Promise.all(p);
      }

      if (call) {
        return _akili2.default.unisolate(function () {
          return fn.call(_this14, _this14.attrs[name]);
        });
      }
    }

    /**
     * Remove the attribute link with the scope property
     * 
     * @param {string} name
     * @param {string|string[]} keys
     * @protected
     */

  }, {
    key: '__unattrByKeys',
    value: function __unattrByKeys(name, keys) {
      if (!keys) {
        throw new Error('You have to pass the scope property name for attribute link "' + name + '"');
      }

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      var keyString = _akili2.default.joinBindingKeys(keys);
      var arr = this.__attrLinks[keyString];

      if (!arr.length) {
        return;
      }

      for (var i = arr.length - 1; i >= 0; i--) {
        var res = arr[i];

        if (res.name != name || res.keyString != keyString) {
          continue;
        }

        arr.splice(i, 1);
      }

      if (!arr.length) {
        delete this.__attrLinks[keyString];
      }
    }

    /**
    * Remove the attribute link with the function
    * 
    * @param {string} name 
    * @param {function} fn
    * @protected
    */

  }, {
    key: '__unattrByFunction',
    value: function __unattrByFunction(name, fn) {
      if (!this.__attrLinks[name]) {
        return;
      }

      var links = this.__attrLinks[name];

      for (var i = links.length - 1; i >= 0; i--) {
        var res = links[i];

        if (res.name == name && res.fn === fn) {
          links.splice(i, 1);
          break;
        }
      }

      if (!links.length) {
        delete this.__attrLinks[name];
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
      var _this15 = this;

      var observe = function observe(value, parents) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) != 'object' || value === null) {
          return value;
        }

        if (!_utils2.default.isPlainObject(value) && !_utils2.default.isScopeProxy(value) && !(value instanceof _scope3.default)) {
          return value;
        }

        var target = value;

        CHECK_PROXY: if (value.__isProxy) {
          target = value.__target;

          if (_this15.__disableProxyRedefining) {
            break CHECK_PROXY;
          }

          if (value.__component !== _this15 || _akili2.default.joinBindingKeys(parents) != _akili2.default.joinBindingKeys(value.__keys)) {
            target = _utils2.default.copy(target, { nested: false });
            value = target;
          }
        } else if (!_this15.__disableProxyRedefining && !(value instanceof _scope3.default)) {
          target = _utils2.default.copy(target, { nested: false });
          value = target;
        }

        var targetKeys = Object.keys(target);

        for (var i = 0, l = targetKeys.length; i < l; i++) {
          var k = targetKeys[i];
          var _val = target[k];
          var keys = [].concat(parents, [k]);
          target[k] = observe(_val, keys);
        }

        if (!value.__isProxy) {
          return _this15.__observe(value, parents);
        }

        return value;
      };

      return observe(value, startKeys || []);
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
      var isolationHash = this.__createKeysHash(keys);

      if (parents.length) {
        isDeleted = false;
      }

      if (!_akili2.default.__isolation[isolationHash]) {
        _akili2.default.__isolation[isolationHash] = {
          updatedAt: new Date().getTime(),
          component: this,
          keys: keys
        };
      }

      isDeleted !== undefined && (_akili2.default.__isolation[isolationHash].isDeleted = isDeleted);
      return _akili2.default.__isolation[isolationHash];
    }

    /**
     * Prepare the node to binding
     *
     * @param {object} bind - by default is component.__evaluation.list
     * @param {string[]} keys
     * @param {string[]} parents
     * @param {*} value
     * @param {boolean} [notBinding=false]
     * @param {boolean} [evaluated=false]
     * @protected
     */

  }, {
    key: '__bindNode',
    value: function __bindNode(bind, realComponent, keys, parents, value) {
      var notBinding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var evaluated = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      var parentKeysString = _akili2.default.joinBindingKeys(parents);
      var component = this;

      if (bind.length && !notBinding) {
        var l = bind.length - 1;
        var data = bind[l];

        if (data.realComponent === this && data.keysString == parentKeysString) {
          component = data.component;
        }

        if (data.keysString == parentKeysString && data.component === component) {
          bind.splice(l, 1);
        }
      }

      bind.push({
        component: component,
        realComponent: realComponent,
        keysString: _akili2.default.joinBindingKeys(keys),
        parents: parents,
        keys: keys,
        value: value,
        evaluated: evaluated,
        notBinding: notBinding
      });
    }

    /**
     * Check the key is system binding thing
     *
     * @param {string} key
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__isSystemBindingKey',
    value: function __isSystemBindingKey(key) {
      return key == '__data';
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
     * Get all nested bindings by keys
     * 
     * @param {string[]} keys 
     */

  }, {
    key: '__getAllBinds',
    value: function __getAllBinds(keys) {
      var root = this.__getBind(keys);

      if (!root) {
        return [];
      }

      var data = [];

      var collect = function collect(obj) {
        data = data.concat(obj.__data || []);

        for (var _key in obj) {
          if (!obj.hasOwnProperty(_key) || _key == '__data') {
            continue;
          }

          collect(obj[_key]);
        }
      };

      collect(root);
      return data;
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
     * @param {boolean} [evaluated=false]
     * @returns {boolean}
     * @protected
     */

  }, {
    key: '__setNodeProperty',
    value: function __setNodeProperty(node, keys, value) {
      var evaluated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var prop = this.__getNodeProperty(node, keys);
      var hash = _utils2.default.createHash(value);

      if (prop) {
        var res = node.__component.__compareNodePropertyValue(prop, value);
        prop.value = value;
        prop.hash = hash;
        return !res;
      }

      node.__properties[this.__createKeysHash(keys)] = {
        component: this,
        value: value,
        hash: hash,
        node: node,
        keys: keys,
        evaluated: evaluated
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
      return node.__properties[this.__createKeysHash(keys)] || null;
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
     * Map nodes
     * 
     * @param {function} fn
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__mapNodes',
    value: function __mapNodes(fn) {
      var _this16 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options = _extends({ rootAttrs: true, attrs: true, node: true, el: true }, options);

      var find = function find(el) {
        if (!el) {
          return;
        }

        if (options.attrs && (el !== _this16.el || options.rootAttrs)) {
          for (var k = 0, attrs = el.attributes, c = attrs.length; k < c; k++) {
            fn(attrs[k]);
          }
        }

        for (var i = el.childNodes.length - 1; i >= 0; i--) {
          var node = el.childNodes[i];

          if (node.nodeType == 3) {
            options.node && fn(node);
          } else if (node.nodeType == 1 && !node.__akili) {
            find(node);
            options.el && fn(node);
          }
        }
      };

      find(this.el);
    }

    /**
     * Get all nodes
     * 
     * @protected
     */

  }, {
    key: '__getAllNodes',
    value: function __getAllNodes() {
      var nodes = [];
      this.__mapNodes(function (node) {
        return nodes.push(node);
      });
      return nodes;
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
     * @param {Node|Node[]} nodes
     * @protected
     */

  }, {
    key: '__unbindByNodes',
    value: function __unbindByNodes(nodes) {
      var _this17 = this;

      !Array.isArray(nodes) && (nodes = [nodes]);

      var unbind = function unbind(obj, parent, key) {
        var keys = Object.keys(obj);

        for (var j = 0, c = keys.length; j < c; j++) {
          var k = keys[j];

          if (k == '__data') {
            var data = obj[k] || [];
            var l = data.length;

            for (var i = 0; i < l; i++) {
              var bind = data[i];

              if (nodes.indexOf(bind.node) != -1) {
                delete bind.node;
                data.splice(i, 1);
                i--;
                l--;
              }
            }

            if (!l) {
              delete obj[k];
            }
          } else if (!_this17.__isSystemBindingKey(k)) {
            unbind(obj[k], obj, k);
          }

          if (parent && !Object.keys(obj).length) {
            delete parent[key];
          }
        }
      };

      unbind(this.__bindings);
    }

    /**
     * Remove all parents bindings with the nodes
     * 
     * @param {Node|Node[]} nodes
     * @protected
     */

  }, {
    key: '__unbindParentsByNodes',
    value: function __unbindParentsByNodes(nodes) {
      for (var i = 0, l = this.__parents.length; i < l; i++) {
        var parent = this.__parents[i];
        parent && parent.__akili && parent.__akili.__unbindByNodes(nodes);
      }
    }

    /**
     * Clear the links
     * 
     * @protected
     */

  }, {
    key: '__clearStoreLinks',
    value: function __clearStoreLinks() {
      var links = _akili2.default.__storeLinks;

      for (var _key2 in links) {
        var arr = links[_key2];

        for (var i = arr.length - 1; i >= 0; i--) {
          var _link3 = arr[i];

          if (_link3.component === this) {
            for (var k in _link3) {
              delete _link3[k];
            }

            arr.splice(i, 1);
          }
        }

        if (!arr.length) {
          delete links[_key2];
        }
      }
    }

    /**
     * Remove all child components
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__removeChildren',
    value: function __removeChildren() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = [];

      var remove = function remove(children) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          remove(child.__akili.__children);
          nodes = nodes.concat(child.__akili.__remove(options));
          i--;
        }
      };

      remove(this.__children);
      return nodes;
    }

    /**
     * Remove the component without children removing
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__remove',
    value: function __remove() {
      var _this18 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = [];
      this.attrs.onRemoved && this.attrs.onRemoved.trigger(undefined, { bubbles: false });
      this.removed();
      nodes = nodes.concat(this.__detach({ saveBindings: true }));
      nodes = nodes.concat(this.__empty({ saveBindings: true }));
      this.__clearStoreLinks();
      _akili2.default.removeScope(this.__scope.__name);
      this.el.remove();

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
        _akili2.default.removeTag(nodes);
      }

      _akili2.default.nextTick(function () {
        delete _this18.el.__akili;
        delete _this18.__isMounted;
        delete _this18.__isCompiled;
        delete _this18.__isResolved;
        delete _this18.__cancelled;
        delete _this18.__prevent;
        delete _this18.__content;
        _this18.__bindings = null;
        _this18.__evaluatingEvent = null;
        _this18.__recompiling = null;
        _this18.__compiling = null;
        _this18.__disableProxy = null;
        _this18.__disableStoreKeys = null;
        _this18.__disableAttrKeys = null;
        _this18.__children = null;
        _this18.__parent = null;
        _this18.__parents = null;
        _this18.__attrs = null;
        _this18.__attrLinks = null;
        _this18.__storeLinks = null;
        _this18.__attributeOf = null;
        _this18.__evaluationComponent = null;
        _this18.scope = null;
        _this18.el = null;
      });

      return nodes;
    }

    /**
     * Detach the component
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__detach',
    value: function __detach() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.__parent && this.__parent.__akili.__spliceChild(this.el);
      var nodes = [];

      for (var i = 0, l = this.el.attributes.length; i < l; i++) {
        var node = this.el.attributes[i];
        node.__initialized && nodes.push(node);
      }

      if (!options.saveBindings) {
        this.__unbindParentsByNodes(nodes);
      }

      return nodes;
    }

    /**
     * Clear the component html
     *
     * @param {object} [options]
     * @protected
     */

  }, {
    key: '__empty',
    value: function __empty() {
      var _this19 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var nodes = this.__removeChildren({ saveBindings: true });

      this.__mapNodes(function (node) {
        if (node.nodeType == 1) {
          node.remove();
          return;
        }

        if (!node.__initialized) {
          return;
        }

        _this19.__deinitializeNode(node, { saveBindings: true });
        nodes.push(node);
      }, { rootAttrs: false });

      if (!options.saveBindings) {
        this.__unbindByNodes(nodes);
        this.__unbindParentsByNodes(nodes);
        _akili2.default.removeTag(nodes);
      }

      this.el.innerHTML = '';
      return nodes;
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

        for (var _i5 = 0, _l3 = children.length; _i5 < _l3; _i5++) {
          find(children[_i5].__akili.__children);
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
    key: 'store',
    value: function store(name, handler) {
      if (!this.__isMounted) {
        throw new Error('Method "store" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

      return typeof handler === 'function' ? this.__storeByFunction.apply(this, _toConsumableArray(args)) : this.__storeByKeys.apply(this, _toConsumableArray(args));
    }

    /**
     * Create a link with the attribute
     * 
     * @param {string} name 
     * @param {string|string[]|function} handler
     */

  }, {
    key: 'attr',
    value: function attr(name, handler) {
      if (!this.__isMounted) {
        throw new Error('Method "attr" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

      return typeof handler === 'function' ? this.__attrByFunction.apply(this, _toConsumableArray(args)) : this.__attrByKeys.apply(this, _toConsumableArray(args));
    }

    /**
     * Remove the store link
     * 
     * @param {string} name 
     * @param {string|string[]|function} handler
     */

  }, {
    key: 'unstore',
    value: function unstore(name, handler) {
      if (!this.__isMounted) {
        throw new Error('Method "unstore" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

      return typeof handler === 'function' ? this.__unstoreByFunction.apply(this, arguments) : this.__unstoreByKeys.apply(this, arguments);
    }

    /**
     * Remove the attribute link
     * 
     * @param {string} name 
     * @param {string|string[]|function} handler
     */

  }, {
    key: 'unattr',
    value: function unattr(name, handler) {
      if (!this.__isMounted) {
        throw new Error('Method "unattr" must be called after the compilation. For example, in "compiled" method.');
      }

      var args = [].slice.call(arguments);

      if (typeof name == 'function') {
        args.unshift('*');
        handler = name;
      }

      return typeof handler === 'function' ? this.__unattrByFunction.apply(this, arguments) : this.__unattrByKeys.apply(this, arguments);
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
     * @param {Element} parent
     */

  }, {
    key: 'appendTo',
    value: function appendTo(parent) {
      parent.appendChild(this.el);
      return _akili2.default.compile(this.el, { recompile: { setParents: true, checkChanges: false } });
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
      return this.__remove.apply(this, arguments);
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

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Request class.
 * An instance of this class allows you to make requests.
 * 
 * {@link https://akilijs.com/docs/requests}
 */
var Request = exports.Request = function () {

  /**
   * Constructor
   * 
   * @param {string} baseUrl
   * @param {object} [defaults] 
   */
  function Request(baseUrl, defaults) {
    _classCallCheck(this, Request);

    this.__cache = {};

    this.getHeaders = function (xhr) {
      var headers = {};
      var str = xhr.getAllResponseHeaders();
      var arr = str.split('\r\n');

      for (var i = 0, l = arr.length; i < l; i++) {
        var line = arr[i];
        var index = line.indexOf(': ');

        if (index > 0) {
          var key = line.substring(0, index);
          var val = line.substring(index + 2);
          headers[key] = val;
        }
      }

      return headers;
    };

    this.baseUrl = baseUrl ? baseUrl.replace(/\/$/, '') + '/' : '';

    this.defaults = _extends({
      statusErrorPattern: /^[^23]/,
      cache: false
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
        options = _extends({}, _this.defaults, options || {});
        options.url = _this.baseUrl ? '' + _this.baseUrl + options.url.replace(/^\//, '') : options.url;
        options.method = options.method || 'GET';

        var xhr = new XMLHttpRequest();
        var before = _this.transformBefore(xhr, options);
        xhr = before.xhr;
        options = before.options;
        typeof options.onStart == 'function' && options.onStart(xhr);
        options.headers = options.headers || {};

        if (options.json) {
          options.json !== true && (options.body = JSON.stringify(options.json));
          options.headers['content-type'] = 'application/json';
          options.responseType = options.responseType || 'json';
        } else if (options.form) {
          options.body = _this.createFormData(options.form);
          options.headers['content-type'] = 'multipart/form-data';
        }

        if (options.params) {
          var str = _this.paramsToQuery(options.params);
          str && (options.url += "?" + str);
        }

        var hash = null;
        var cache = typeof options.cache == 'function' ? options.cache(options) : options.cache;
        !window.AKILI_SSR && !_akili2.default.__init && (cache = true);

        if (options.method.toUpperCase() == 'GET' && (!options.body || typeof options.body == 'string')) {
          hash = _this.createCacheHash({
            url: options.url,
            method: options.method,
            user: options.user,
            password: options.password,
            body: options.body
          });
        }

        if (cache && hash) {
          var _cache = _this.getCache(hash);
          var now = new Date().getTime();

          if (_cache && (cache === true || now - _cache.createdAt <= cache)) {
            return resolve(_this.transformAfter(_cache.result));
          }
        }

        xhr.open(options.method, options.url, true, options.user, options.password);

        if (options.hasOwnProperty('timeout')) {
          xhr.timeout = options.timeout;
        }

        if (options.responseType) {
          xhr.responseType = options.responseType;
        }

        if (options.withCredentials) {
          xhr.withCredentials = options.withCredentials;
        }

        var headerKeys = Object.keys(options.headers);

        for (var i = 0, l = headerKeys.length; i < l; i++) {
          var k = headerKeys[i];
          xhr.setRequestHeader(k, options.headers[k]);
        }

        if (typeof options.onProgress == 'function') {
          xhr.onprogress = function () {
            return options.onProgress(xhr);
          };
        }

        xhr.onload = function () {
          var result = {
            response: xhr.response,
            status: xhr.status,
            readyState: xhr.readyState,
            statusText: xhr.statusText,
            withCredentials: xhr.withCredentials,
            responseType: xhr.responseType,
            responseText: xhr.responseType == 'text' ? xhr.responseText : '',
            responseXML: xhr.responseType == 'document' ? xhr.responseXML : '',
            responseURL: xhr.responseURL,
            timeout: xhr.timeout,
            headers: _this.getHeaders(xhr)
          };

          var response = _this.transformAfter(result);

          if (options.statusErrorPattern && (xhr.status + '').match(options.statusErrorPattern)) {
            var err = new Error('Request to "' + options.url + '" returns failure status code ' + xhr.status);
            err.response = response;
            return reject(err);
          }

          (cache || window.AKILI_SSR) && hash && _this.createCache(hash, result);
          resolve(response);
        };

        xhr.ontimeout = function () {
          reject(new Error('Request to "' + options.url + '" timed out'));
        };

        xhr.onerror = reject;
        xhr.send(options.body);
      });
    }

    /**
     * Get headers of a XMLHttpRequest instance
     * 
     * @param {XMLHttpRequest}
     */

  }, {
    key: 'getCache',


    /**
     * Get cache
     * 
     * @param {string} hash
     * @returns {object}
     */
    value: function getCache(hash) {
      return this.__cache[hash] || null;
    }

    /**
     * Create cache
     * 
     * @param {string} hash
     * @param {object} result
     */

  }, {
    key: 'createCache',
    value: function createCache(hash, result) {
      this.__cache[hash] = { result: result, createdAt: new Date().getTime() };
    }

    /**
     * Remove cache
     * 
     * @param {string} hash
     */

  }, {
    key: 'removeCache',
    value: function removeCache(hash) {
      delete this.__cache[hash];
    }

    /**
     * Create a hash to save in the cache
     * 
     * @param {object} data
     * @returns {string}
     */

  }, {
    key: 'createCacheHash',
    value: function createCacheHash(data) {
      return _utils2.default.createHash(data);
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
            return opt.push(ks + ('[' + key + ']') + eq + encodeURIComponent(obj[k][key]));
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
     * @param {string} [namespace]   *
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
     * @param {XMLHttpRequest} xhr
     * @param {object} options
     * @returns {object}
     */

  }, {
    key: 'transformBefore',
    value: function transformBefore(xhr, options) {
      return { xhr: xhr, options: options };
    }

    /**
     * Transform data after a request
     *
     * @param {object} result
     * @returns {object}
     */

  }, {
    key: 'transformAfter',
    value: function transformAfter(result) {
      return _extends({}, result, {
        data: result.response
      });
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

    /**
    *  Make HEAD request
    *
    * @param {string} url
    * @param {object} options
    * @returns {Promise}
    */

  }, {
    key: 'head',
    value: function head(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      options.url = url;
      options.method = 'HEAD';

      return this.query(options);
    }
  }]);

  return Request;
}();

var request = new Request();

/**
 * Set router's default variables
 */
request.setDefaults = function () {
  this.__instances = {};
  this.__cache = {};
};

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

/**
 * Deinit router
 */
request.deinit = function () {
  this.setDefaults();
};

Object.defineProperty(request, 'use', {
  get: function get() {
    return request.__instances;
  }
});

request.Request = Request;
exports.default = request;

request.setDefaults();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loop = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for loops.
 * 
 * {@link https://akilijs.com/docs/components#docs_loops}
 * 
 * @tag for
 * @selector for[in],ol[in],ul[in],thead[in],tbody[in],tfoot[in]
 * @attr {object|array} in - data to create the loop
 * @message {object|array} out - sent on the data change
 */
var For = function (_Component) {
  _inherits(For, _Component);

  _createClass(For, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('for', this);
      _akili2.default.component('ol', this);
      _akili2.default.component('ul', this);
      _akili2.default.component('thead', this);
      _akili2.default.component('tbody', this);
      _akili2.default.component('tfoot', this);
      _akili2.default.component('tr', this.Loop);
      _akili2.default.component('loop', this.Loop);
    }
  }]);

  function For() {
    var _ref;

    _classCallCheck(this, For);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = For.__proto__ || Object.getPrototypeOf(For)).call.apply(_ref, [this].concat(args)));

    _this.iterators = [];
    _this.iteratorEl = null;
    _this.reset();
    return _this;
  }

  _createClass(For, [{
    key: '__prepareAttributeIn',
    value: function __prepareAttributeIn(node, value) {
      if (node instanceof window.Attr && node.name == 'in') {
        return value;
      }

      return _get(For.prototype.__proto__ || Object.getPrototypeOf(For.prototype), '__prepareAttributeIn', this).apply(this, arguments);
    }
  }, {
    key: '__compareNodePropertyValue',
    value: function __compareNodePropertyValue(prop, value) {
      var node = prop.node;

      if (node instanceof window.Attr && node.name == 'in' && prop.value !== value) {
        return false;
      }

      return _get(For.prototype.__proto__ || Object.getPrototypeOf(For.prototype), '__compareNodePropertyValue', this).apply(this, arguments);
    }
  }, {
    key: 'created',
    value: function created() {
      this.createIterator();
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      this.attr('in', this.draw);
    }
  }, {
    key: 'removed',
    value: function removed() {
      delete this.html;
      this.iterators = null;
      this.iteratorEl = null;
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
      this.iteratorEl = this.createIteratorElement(el.outerHTML);
      el.remove();
    }
  }, {
    key: 'createIteratorElement',
    value: function createIteratorElement(html) {
      var el = document.createElement('template');
      el.innerHTML = html;
      return el.content.firstChild;
    }
  }, {
    key: 'loop',
    value: function loop(key, value, index) {
      this.__index = index;
      this.__key = key;
      this.__value = value;
      this.__hash = _utils2.default.createHash(value);

      if (this.iterators.length > index) {
        var iterator = this.iterators[index];

        if (this.__index !== iterator.index) {
          iterator.setIndex();
        } else {
          iterator.setIndex(true);
        }

        if (this.__key !== iterator.key) {
          iterator.setKey();
        } else {
          iterator.setKey(true);
        }

        if (!_utils2.default.compare(this.__hash, iterator.hash)) {
          iterator.setValue();
        } else {
          iterator.setValue(true);
        }

        this.__promises.push(_akili2.default.compile(iterator.el, { recompile: { checkChanges: true } }));
        return iterator;
      }

      var el = this.iteratorEl.cloneNode();
      el.innerHTML = this.html;
      this.el.appendChild(el);
      this.__promises.push(_akili2.default.compile(el));
      this.iterators.push(el.__akili);
      return el.__akili;
    }
  }, {
    key: 'draw',
    value: function draw(data) {
      var _this2 = this;

      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != 'object' || data === null) {
        if (_akili2.default.options.debug) {
          // eslint-disable-next-line no-console
          console.warn('"For" component "in" attribute value type must be an object/array');
        }

        data = [];
      }

      this.data = data;
      var index = 0;
      var loop = function loop(key, value, index) {
        return _this2.loop(key, value, index).iterate(index);
      };

      if (Array.isArray(data)) {
        for (var l = data.length; index < l; index++) {
          loop(index, data[index], index);
        }
      } else {
        var keys = Object.keys(data);

        for (var _l = keys.length; index < _l; index++) {
          var key = keys[index];
          loop(key, data[key], index);
        }
      }

      for (var i = index, _l2 = this.iterators.length; i < _l2; i++) {
        var iterator = this.iterators[i];
        iterator.__remove();
        this.iterators.splice(i, 1);
        _l2--;
        i--;
      }

      return Promise.all(this.__promises).then(function () {
        _this2.reset();
        _this2.attrs.onOut.trigger(data, { bubbles: true });
      });
    }

    /**
     * Reset the initial state
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.__iterator = null;
      this.__index = 0;
      this.__key = '';
      this.__value = null;
      this.__hash = '';
      this.__promises = [];
    }
  }]);

  return For;
}(_component2.default);

/**
 * Component for loops.
 * 
 * {@link https://akilijs.com/docs/components#docs_loops}
 * 
 * @tag loop
 * @selector loop,tr
 * @attr @see For
 * @scope {*} loopValue - data item's value of the current iteration 
 * @scope {string|number} loopKey - key of the iteration
 * @scope {number} loopIndex - index of the iteration
 */


For.matches = '[in]';
For.events = ['out'];
exports.default = For;

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
      this.setIndex(true);
      this.setKey(true);
      this.setValue(true);

      if (this.isFor) {
        return _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'created', this).apply(this, arguments);
      }
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      if (this.isFor) {
        return _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'compiled', this).apply(this, arguments);
      }
    }
  }, {
    key: 'removed',
    value: function removed() {
      _get(Loop.prototype.__proto__ || Object.getPrototypeOf(Loop.prototype), 'removed', this).apply(this, arguments);
      this.for = null;
      delete this.value;
      delete this.key;
      delete this.index;
      delete this.hash;
    }
  }, {
    key: 'setIndex',
    value: function setIndex(target) {
      this.index = this.for.__index;
      this.scope.__set('loopIndex', this.index, false, target);
    }
  }, {
    key: 'setKey',
    value: function setKey(target) {
      this.key = this.for.__key;
      this.scope.__set('loopKey', this.key, false, target);
    }
  }, {
    key: 'setValue',
    value: function setValue(target) {
      this.value = this.for.__value;
      this.scope.__set('loopValue', this.value, true, target);
      this.hash = this.for.__hash;
    }
  }, {
    key: 'iterate',
    value: function iterate() {}
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

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base component to work with text elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_input}
 * {@link https://akilijs.com/docs/components#docs_textarea}
 * {@link https://akilijs.com/docs/components#docs_contenteditable}
 * 
 * @attr {string} value - actual value
 * @attr {boolean} focus - set the focus or not
 * @attr {number} debounce - debounce delay
 * @message {void} debounce - sent on the debounce {@link https://akilijs.com/docs/components#docs_input}
 */
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
    _this.debounceInterval = 500;
    return _this;
  }

  _createClass(Text, [{
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      if (this.el.hasAttribute('on-debounce')) {
        this.el.addEventListener('input', _utils2.default.debounce(function () {
          return _this2.attrs.onDebounce.trigger(undefined, { bubbles: true });
        }, this.debounceInterval));
      }

      this.attr('focus', this.setFocus);
      this.attr('value', this.setValue);
      this.attr('debounce', this.setDebounce);
    }
  }, {
    key: 'setDebounce',
    value: function setDebounce(interval) {
      this.debounceInterval = +interval;
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

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Scope class.
 * 
 * {@link https://akilijs.com/docs/scope}
 *
 * All properties starting with __ are not monitored.
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

  /**
   * Set a scope value
   * @param {string|string[]} keys
   * @param {*} value
   * @param {boolean} [strict=false] - without object copying
   * @protected
   */


  _createClass(Scope, [{
    key: '__set',
    value: function __set(keys, value) {
      var _this = this;

      var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var target = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!Array.isArray(keys)) {
        keys = [keys];
      }

      _akili2.default.unisolate(function () {
        strict && (_this.__component.__disableProxyRedefining = true);
        _utils2.default.setPropertyByKeys(keys, target ? _this.__target : _this, function (last, val) {
          if (!last) {
            return val || {};
          }

          return value;
        });
        strict && (_this.__component.__disableProxyRedefining = false);
      });
    }
  }]);

  return Scope;
}();

exports.default = Scope;

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

/**
 * Class for working with events.
 * An instance of this class allows you to trigger custom javascript events.
 * 
 * {@link https://akilijs.com/docs/events}
 */
var EventEmitter = function () {
  function EventEmitter(name, node, el, component) {
    _classCallCheck(this, EventEmitter);

    this.name = name;
    this.node = node;
    this.el = el;
    this.component = component;
  }

  /**
   * Trigger the event
   *
   * @param {*} data - sending data. Will be in the event.detail
   * @param {object} [options]
   * @param {boolean} [force]
   * @returns {Promise}
   */


  _createClass(EventEmitter, [{
    key: "trigger",
    value: function trigger(data) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new CustomEvent(this.name, this.prepareOptions(_extends({ detail: data }, options))));
      }
    }

    /**
     * Dispatch the event
     *
     * @param {Event} _Event - class of the event
     * @param {object} [options]
     * @param {boolean} [force]
     * @returns {Promise}
     */

  }, {
    key: "dispatch",
    value: function dispatch(_Event) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (force || !this.inEvaluating()) {
        this.el.dispatchEvent(new _Event(this.name, this.prepareOptions(options)));
      }
    }

    /**
     * Prepere an event options
     * 
     * @param {object} [options] 
     */

  }, {
    key: "prepareOptions",
    value: function prepareOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      options = _extends({ bubbles: true }, options);
      this.node.__component.__prepareAttributeOut(this.node, options.detail);
      return options;
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

    /**
     * Remove the emitter
     */

  }, {
    key: "remove",
    value: function remove() {
      this.unbind();
      delete this.name;
      delete this.name;
      this.node = null;
      this.component = null;
      this.el = null;
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

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Store allows you to save and distribute data.
 * 
 * {@link https://akilijs.com/docs/store}
 */
var store = new Proxy({}, {
  get: function get(target, key) {
    if (key == "__target") {
      return target;
    }

    return target[key];
  },
  set: function set(target, key, value) {
    if (_utils2.default.compare(target[key], value)) {
      return true;
    }

    value = _utils2.default.copy(value, { plain: true });
    target[key] = value;
    _akili2.default.root && _akili2.default.root.__storeTriggerByName(key, value);
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    _akili2.default.root && _akili2.default.root.__storeTriggerByName(key, undefined);
    delete target[key];
    return true;
  }
});

exports.default = store;

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

var obj = {};

/**
 * Globals to use the custom variables in scope expressions
 * 
 * {@link https://akilijs.com/docs/scope#docs_globals}
 */
var globals = new Proxy(obj, {
  get: function get(target, key) {
    if (key == '__target') {
      return obj;
    }

    return target[key];
  },
  set: function set(target, key, value) {
    target[key] = _akili2.default.wrap(value, { tag: key });
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    _akili2.default.removeTag(key);
    delete target[key];
    return true;
  }
});

exports.default = globals;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to work with router templates.
 * 
 * {@link https://akilijs.com/docs/routing#docs_templates}
 * 
 * @tag route
 */
var Route = function (_Component) {
  _inherits(Route, _Component);

  _createClass(Route, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('route', this);
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
   * @param {boolean} load
   * @returns {Promise}
   */


  _createClass(Route, [{
    key: 'setTransition',
    value: function setTransition(transition) {
      var _this2 = this;

      var load = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var state = transition.path.state;

      var getParentScopeTransition = function getParentScopeTransition(path) {
        if (path.parent) {
          if (path.parent.component) {
            return path.parent.component.__scope.__transition.path;
          }

          return getParentScopeTransition(path.parent);
        }

        return null;
      };

      var compile = function compile(html) {
        _this2.empty();
        var name = 'component';

        if (state.component) {
          var exists = false;

          for (var key in _akili2.default.__components) {
            var component = _akili2.default.__components[key];

            if (component === state.component) {
              name = key;
              exists = true;
              break;
            }
          }

          if (!exists) {
            throw new Error('Router state "' + state.name + '" has no defined component');
          }
        }

        _this2.el.innerHTML = '<' + name + '>' + html + '</' + name + '>';
        return _akili2.default.compile(_this2.el, { recompile: true });
      };

      this.__scope.__transition = {
        parent: getParentScopeTransition(transition.path),
        state: transition.path.state,
        data: transition.path.data,
        url: transition.path.url,
        params: transition.path.params,
        query: transition.path.query,
        hash: transition.path.hash
      };

      if (!load) {
        return _akili2.default.compile(this.el, { recompile: { checkChanges: true } });
      }

      return Promise.resolve().then(function () {
        if (state.template) {
          return state.template;
        }

        if (state.templateUrl) {
          return _request2.default.get(state.templateUrl).then(function (res) {
            return res.data;
          });
        }
      }).then(function (html) {
        return compile(html);
      });
    }
  }]);

  return Route;
}(_component2.default);

exports.default = Route;

/***/ }),
/* 12 */
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

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

var _route = __webpack_require__(11);

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Transition class.
 * An instance of this class consists the last actual router transition information.
 * 
 * {@link https://akilijs.com/docs/routing#docs_transition}
 */
var Transition = exports.Transition = function () {
  function Transition(url) {
    var previous = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Transition);

    this.url = url;
    this.previous = previous;
    this.path = null;
    this.routes = [];
    this.states = {};
    this.__cancelled = false;
    this.__finised = false;
  }

  /**
   * Redirect to another state
   * 
   * @see router.state
   */


  _createClass(Transition, [{
    key: 'redirect',
    value: function redirect(state) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      options = _extends({}, router.transition.path.options, options);
      this.cancel();
      return router.state.call(router, state, params, query, hash, options);
    }

    /**
     * Reload the current state
     * 
     * @see Transition.prototype.redirect
     */

  }, {
    key: 'reload',
    value: function reload() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var hash = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      params = _extends({}, this.path.params, params);
      query = _extends({}, this.path.query, query);
      hash = hash === undefined ? this.path.hash : hash;
      return this.redirect(this.path.state.name, params, query, hash, options);
    }

    /**
     * Set the current path
     * 
     * @param {object} path 
     */

  }, {
    key: 'setPath',
    value: function setPath(path) {
      path.parent = this.path || null;
      this.path = _extends({ params: {}, query: {} }, path);
      this.routes.push(this.path);
      this.states[this.path.state.name] = this.path;
    }

    /**
     * Get a route by the state
     *  
     * @param {*} state 
     */

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

    /**
     * Check if it has the state
     * 
     * @param {object} state 
     */

  }, {
    key: 'hasState',
    value: function hasState(state) {
      return !!this.states[state.name];
    }

    /**
     * Check the route is changed
     * 
     * @param {object} route
     */

  }, {
    key: 'isRouteChanged',
    value: function isRouteChanged(route) {
      if (!this.previous) {
        return true;
      }

      var state = route.state;

      if (!this.previous.hasState(state)) {
        return true;
      }

      var paramKeys = [];
      state.fullPattern.replace(router.__paramRegex, function (m, f, v) {
        return paramKeys.push(v);
      });

      for (var key in state.params) {
        if (paramKeys.indexOf(key) == -1) {
          paramKeys.push(key);
        }
      }

      var queryKeys = Object.keys(state.query);
      var watchHash = state.hash !== undefined;
      var prevRoute = this.previous.getRoute(state);

      var prev = {
        params: _utils2.default.includeKeys(prevRoute.params, paramKeys),
        query: _utils2.default.includeKeys(prevRoute.query, queryKeys)
      };

      var current = {
        params: _utils2.default.includeKeys(route.params, paramKeys),
        query: _utils2.default.includeKeys(route.query, queryKeys)
      };

      if (watchHash) {
        prev.hash = prevRoute.hash;
        current.hash = route.hash;
      }

      return !_utils2.default.compare(prev, current);
    }

    /**
     * Cancel the current transition
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      this.__cancelled = true;
      this.finish();
    }

    /**
     * Finish the transition
     */

  }, {
    key: 'finish',
    value: function finish() {
      this.__finised = true;
    }
  }]);

  return Transition;
}();

/**
 * Akili router
 * 
 * {@link https://akilijs.com/docs/routing}
 */


var router = {};

/**
 * Set router's default variables
 */
router.setDefaults = function () {
  this.baseUrl = "/";
  this.states = [];
  this.hashMode = true;
  this.__redirects = 0;
  this.__init = false;
  this.__paramRegex = /(\/?:([\w\d-]+))/g;
  this.__routeSelector = function (c) {
    return c instanceof _route2.default;
  };
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

  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) == 'object') {
    options = name;
    pattern = options.pattern;
    name = options.state;
    delete options.pattern;
    delete options.state;
  }

  if (!name) {
    throw new Error('Router state must have a name');
  }

  var defaultOptions = {
    template: '',
    templateUrl: '',
    abstract: false,
    component: null,
    params: {},
    query: {},
    handler: function handler() {}
  };

  if (_akili2.default.options.debug && options.component && (options.template || options.templateUrl)) {
    // eslint-disable-next-line no-console
    console.warn('Router state "' + name + '" must only have a component or template option');
  }

  if (!options.template && !options.templateUrl && !options.component) {
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
 * @param {string} state
 * @param {object} [params] - params for state {id: 1} => '/app/:id' => '/app/1'
 * @param {object} [query] - query {x: 1} => '/app/?x=1'
 * @param {string} [hash]
 * @param {object} [options]
 */
router.state = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _this = this;

  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));

  if (!state) {
    throw new Error('Not found route state with name ' + state);
  }

  options = _extends({}, options);
  options.manual = true;

  var _prepareStateArgs = this.prepareStateArgs(state, params, query, hash, options, false);

  params = _prepareStateArgs.params;
  query = _prepareStateArgs.query;
  hash = _prepareStateArgs.hash;
  options = _prepareStateArgs.options;

  var url = this.createStateUrl(state, params, query, hash, options);
  this.isolate(function () {
    return _this.setUrl(url);
  });
  return this.changeState(options);
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
  var _this2 = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  options = _extends({}, options);
  options.manual = true;
  this.isolate(function () {
    return _this2.setUrl(url);
  });
  return this.changeState(options);
};

/**
 * Router initialization. Should be called before Akili.init()
 *
 * @param {string} [defaultUrl]
 * @param {boolean} [hashMode=true]
 */
router.init = function () {
  var _this3 = this;

  var defaultUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var hashMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var oldPushState = window.history.pushState;

  window.history.pushState = function () {
    var res = oldPushState.apply(this, arguments);
    // eslint-disable-next-line no-console
    router.changeState().catch(function (err) {
      return console.error(err);
    });
    return res;
  };

  this.__onStateChangeHandler = function () {
    // eslint-disable-next-line no-console
    _this3.changeState().catch(function (err) {
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

  for (var i = 0, l = this.states.length; i < l; i++) {
    this.initState(this.states[i]);
  }

  if (!this.states.length && _akili2.default.options.debug) {
    // eslint-disable-next-line no-console
    console.warn('You didn\'t add any routes to the router');
  }

  window.addEventListener('popstate', this.__onStateChangeHandler);
  this.__init = true;
};

/**
 * Initialize the state 
 * 
 * @param {object} state 
 */
router.initState = function (state) {
  var parents = [];
  state.children = [];
  parents = state.name.split('.');
  parents.pop();
  state.level = state.abstract ? null : parents.length;

  if (parents.length) {
    var parentName = parents.join('.');
    var parent = this.getState(parentName);

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
  this.states.push(state);
  this.__init && this.initState(state);
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
  window.history.pushState(undefined, undefined, url);
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
 * Replace url
 *
 * @param {string} url
 */
router.replaceUrl = function (url) {
  this.hashMode ? this.replaceHashUrl(url) : this.replaceHistoryUrl(url);
};

/**
 * Set url using history
 *
 * @param url
 */
router.replaceHistoryUrl = function (url) {
  window.history.replaceState(undefined, undefined, url);
};

/**
 * Set url using hash
 *
 * @param url
 */
router.replaceHashUrl = function (url) {
  window.history.replaceState(undefined, undefined, '#' + (url || '/'));
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
 * @param {object} [options]
 * @param {boolean} [prepare]
 */
router.createStateUrl = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var prepare = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  options = _extends({}, options);

  if (prepare) {
    var _prepareStateArgs2 = this.prepareStateArgs(state, params, query, hash, options);

    params = _prepareStateArgs2.params;
    query = _prepareStateArgs2.query;
    hash = _prepareStateArgs2.hash;
    options = _prepareStateArgs2.options;
  }

  var url = state.fullPattern.replace(this.__paramRegex, function (m, f, v) {
    return '/' + (params[v] || '');
  });
  url = url.replace(/^\^/, '');
  url = this.splitSlashes(url);

  if (Object.keys(query).length) {
    url += '?' + _request2.default.paramsToQuery(query);
  }

  if (!this.hashMode && hash) {
    url += '#' + hash.replace('#', '');
  }

  return url;
};

/**
 * Prepare the state arguments
 * 
 * @param {string|Object} state
 * @param {object} [params]
 * @param {object} [query]
 * @param {string} [hash]
 * @param {object} [options]
 */
router.prepareStateArgs = function (state) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var hash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var args = { params: params, query: query, hash: hash, options: options };

  for (var i = 0; i < 999; i++) {
    var paramsTemp = this.prepareStateParams(state, params, args);
    var queryTemp = this.prepareStateQuery(state, query, args);
    var hashTemp = this.prepareStateHash(state, hash, args);

    if (hashTemp === null) {
      options.emptyHash = null;
    } else if (hashTemp === '') {
      options.emptyHash = '';
    }

    var newArgs = { params: paramsTemp, query: queryTemp, hash: hashTemp, options: options };

    if (_utils2.default.compare(newArgs, args)) {
      break;
    }

    args = newArgs;
  }

  return args;
};

/**
 * Prepare the state params
 * 
 * @param {string|Object} state
 * @param {object} params
 * @param {object} [args]
 */
router.prepareStateParams = function (state, params, args) {
  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var list = [params];
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = states.slice(0, states.length - i).join('.');
    list.push(this.getState(current).params);
  }

  return this.createStateArgs(list, args);
};

/**
 * Prepare the state query
 * 
 * @param {string|Object} state
 * @param {object} query
 * @param {object} [args]
 */
router.prepareStateQuery = function (state, query, args) {
  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var list = [query];
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = states.slice(0, states.length - i).join('.');
    list.push(this.getState(current).query);
  }

  return this.createStateArgs(list, args);
};

/**
 * Merge list items as transition objects
 * 
 * @param {object[]} list
 * @param {object} [args]
 */
router.createStateArgs = function (list) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { params: {}, query: {} };

  var all = {};
  var excluded = {};

  for (var i = 0, l = list.length; i < l; i++) {
    var obj = list[i];
    var keys = Object.keys(obj);

    for (var k = 0, c = keys.length; k < c; k++) {
      var key = keys[k];
      var val = obj[key];

      if (excluded[key]) {
        continue;
      }

      val = typeof val == 'function' ? val(args) : val;

      if (val === undefined) {
        continue;
      }

      if (val === null) {
        delete all[key];
        excluded[key] = true;
        continue;
      }

      all[key] = val;
    }
  }

  return all;
};

/**
 * Prepare the state hash
 * 
 * @param {string|Object} state
 * @param {string} hash
 * @param {object} [args]
 */
router.prepareStateHash = function (state, hash, args) {
  if (hash === null) {
    return hash;
  }

  (typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object' && (state = this.getState(state));
  var states = state.name.split('.');

  for (var i = 0, l = states.length; i < l; i++) {
    var current = states.slice(0, states.length - i).join('.');
    var val = this.getState(current).hash;
    val = typeof val == 'function' ? val(args) : val;

    if (val === undefined) {
      continue;
    }

    if (val === null) {
      return null;
    }

    hash = val;
  }

  return hash;
};

/**
 * Remove all unnecessary slashes from an url
 *
 * @param {string} url
 * @returns {string}
 */
router.splitSlashes = function (url) {
  return url.replace(/[/]+/g, '/');
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
  var params = {};

  url = url.split('?')[0];
  url = url.split('#')[0];

  var urlPattern = state.fullPattern.replace(this.__paramRegex, function (m, f, v) {
    keys.push(v);
    return '/?([^/]*)';
  });

  urlPattern = urlPattern.replace(/([^^/]+)[/]+$/, '$1');
  var regex = new RegExp(urlPattern, 'g');
  var isIncluded = url.match(regex);

  if (!isIncluded) {
    return null;
  }

  url.replace(regex, function (m) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    args = args.slice(0, args.length - 2);

    for (var i = 0, l = args.length; i < l; i++) {
      var v = args[i];
      v && (params[keys[i]] = v);
    }
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
  var url = router.transition && !router.transition.__finished ? router.transition.url : this.getUrl();
  url = this.splitSlashes('/' + url.split('?')[0] + '/');
  var urlPattern = state.fullPattern.replace(this.__paramRegex, '/?([^/]*)');
  urlPattern = urlPattern.replace(/^\^/, '').replace(/\$$/, '');
  var str = includes ? urlPattern : this.splitSlashes('^/' + urlPattern + '/$');
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
  var _this4 = this;

  var i = 0;

  var find = function find(el) {
    var route = el.child(_this4.__routeSelector);

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
 * Reload the state
 * 
 * @see Transition.reload
 */
router.reload = function () {
  var _transition;

  if (!this.transition) {
    throw new Error('Not found an active transition to reload the state');
  }

  return (_transition = this.transition).reload.apply(_transition, arguments);
};

/**
 * Isolate the function to not trigger router handlers inside
 *
 * @param {function} fn
 * @returns {*}
 */
router.isolate = function (fn) {
  this.__isolated = true;
  var res = fn();
  this.__isolated = false;
  return res;
};

/**
 * Change state
 * 
 * @param {object} [options]
 */
router.changeState = function () {
  var _this5 = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (this.__isolated) {
    return Promise.resolve();
  }

  var url = this.getUrl();
  var params = {};
  var query = this.getUrlQuery();
  var hash = this.hashMode ? '' : window.location.hash.replace('#', '');
  var prevTransition = router.transition || null;
  var transition = router.transition = new Transition(url, prevTransition);
  var level = 0;

  window.dispatchEvent(new CustomEvent('state-change', { detail: transition }));

  var next = function next(states) {
    if (!states.length) {
      return Promise.resolve();
    }

    var content = _this5.getArrayPatternContent(states, url);

    if (!content) {
      return Promise.resolve();
    }

    var state = content.state;
    transition.setPath({ state: state, component: route });
    params = _extends({}, params, content.params);
    hash = hash || options.emptyHash;

    var _prepareStateArgs3 = _this5.prepareStateArgs(state, params, query, hash, options);

    params = _prepareStateArgs3.params;
    query = _prepareStateArgs3.query;
    hash = _prepareStateArgs3.hash;
    options = _prepareStateArgs3.options;

    hash = hash || '';
    var realUrl = _this5.createStateUrl(state, params, query, hash, options, false);
    _this5.isolate(function () {
      return _this5.replaceUrl(realUrl);
    });
    var route = state.abstract ? null : _this5.getRoute(level);

    if (!route && !state.abstract) {
      throw new Error('Not found route component for state "' + state.name + '"');
    }

    transition.path.params = params;
    transition.path.query = query;
    transition.path.hash = hash;
    transition.path.url = realUrl;
    transition.path.options = options;
    !state.abstract && level++;
    var isDifferent = true;

    if (realUrl != url) {
      isDifferent = transition.isRouteChanged(transition.path);
    }

    var load = isDifferent && options.reload !== false;

    return Promise.resolve(load ? state.handler(transition) : transition.path.data).then(function (data) {
      transition.path.data = data;
      state.title && (document.title = typeof state.title == 'function' ? state.title(transition) : state.title);

      if (transition.__cancelled) {
        return;
      }

      if (state.abstract) {
        return;
      }

      var prevRoute = transition.previous && transition.previous.getRoute(state);
      prevRoute && !prevRoute.loaded && (load = true);
      return route.setTransition(transition, load).then(function () {
        return transition.path.loaded = true;
      });
    }).then(function () {
      return next(state.children);
    });
  };

  return next(this.getStatesByLevel(0)).then(function () {
    if (!transition.routes.length) {
      if (_this5.__redirects) {
        throw new Error('Wrong router default url "' + _this5.defaultUrl + '"');
      }

      if (_this5.defaultUrl) {
        if (_this5.defaultUrl == _this5.getUrl()) {
          throw new Error('Not found any routes');
        }

        _this5.isolate(function () {
          return _this5.replaceUrl(_this5.defaultUrl);
        });
        _this5.__redirects++;
        return _this5.changeState();
      }

      if (_akili2.default.options.debug) {
        // eslint-disable-next-line no-console
        console.warn('Not found a default route. You can pass it in "router.init(defaultUrl)" function');
      }
    }

    if (!options.saveScrollPosition && (!transition.path || !transition.path.hash)) {
      window.scrollTo(0, 0);
    }

    _this5.__redirects = 0;
    transition.finish();
    window.dispatchEvent(new CustomEvent('state-changed', { detail: transition }));
    return transition;
  });
};

/**
 * Deinit router
 */
router.deinit = function () {
  window.removeEventListener('popstate', this.__onStateChangeHandler);
  router.setDefaults();
};

router.Transition = Transition;
exports.default = router;

router.setDefaults();

/***/ }),
/* 13 */
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
 * Component to work with tabs.
 * 
 * @tag tabs  
 * @attr {number} active - actual tab index
 * @message {number} tab - sent on active tab change 
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
}(_akili2.default.Component);

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
}(_for2.default);

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
}(_for.Loop);

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
}(_for.Loop);

Tabs.TabMenu = TabMenu;
Tabs.TabTitle = TabTitle;
Tabs.TabContent = TabContent;
Tabs.TabPane = TabPane;
_akili2.default.defaults(function () {
  return _akili2.default.components.Tabs = Tabs;
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Else = exports.ElseIf = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for conditional statements.
 * 
 * {@link https://akilijs.com/docs/components#docs_conditional_statements}
 * 
 * @tag if
 * @selector if[is]
 * @attr {boolean} is - show the element content or not
 * @attr {boolean} recreate - delete the content and recreate or just show/hide 
 */
var If = function (_Component) {
  _inherits(If, _Component);

  _createClass(If, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('if', this);
      _akili2.default.component('else-if', this.ElseIf);
      _akili2.default.component('else', this.Else);
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
    key: 'compiled',
    value: function compiled() {
      this.attr('recreate', this.setRecreation);
      return this.attr('is', this.setIs);
    }
  }, {
    key: 'setIs',
    value: function setIs(val) {
      this.state = !!val;
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
      var res = Promise.resolve();

      if (this.state && !this.active) {
        if (this.recreate || !this.isCompiled) {
          res = this.compile();
        }

        this.el.style.setProperty('display', this.display, 'important');
      } else {
        if (this.recreate) {
          this.empty();
        } else if (!this.isCompiled) {
          res = this.compile();
        }

        this.el.style.setProperty('display', 'none', 'important');
      }

      return res;
    }
  }, {
    key: 'compile',
    value: function compile() {
      var res = void 0;
      this.empty();
      this.el.innerHTML = this.html;
      res = _akili2.default.compile(this.el, { recompile: true });
      this.isCompiled = true;
      return res;
    }
  }]);

  return If;
}(_component2.default);

/**
 * Component for conditional statements.
 * 
 * {@link https://akilijs.com/docs/components#docs_conditional_statements}
 * 
 * @tag else-if
 * @selector else-if[is]
 * @attr {boolean} is @see If
 */


If.transparent = true;
If.matches = '[is]';
If.booleanAttributes = ['recreate'];
exports.default = If;

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
 * Component for conditional statements.
 * 
 * {@link https://akilijs.com/docs/components#docs_conditional_statements}
 * 
 * @tag else
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

var _for = __webpack_require__(5);

var _for2 = _interopRequireDefault(_for);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to work with select.
 * 
 * {@link https://akilijs.com/docs/components#docs_select}
 * 
 * @tag select  
 * @attr {string} value - actual value
 * @attr [in] @see For
 */
var Select = function (_For) {
  _inherits(Select, _For);

  _createClass(Select, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('select', this);
      _akili2.default.component('option', this.Option);
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
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      this.el.addEventListener('change', function () {
        return _this2.el.content = _this2.getContent();
      });
      var res = _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'compiled', this).apply(this, arguments);
      this.attr('multiple', this.setMultiple);
      this.attr('content', this.setContent);
      this.attr('in', this.drawSelect);
      return res;
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
      var el = _get(Select.prototype.__proto__ || Object.getPrototypeOf(Select.prototype), 'createIteratorElement', this).apply(this, arguments);

      if (!el.hasAttribute('value')) {
        el.setAttribute('value', this.html.trim());
      }

      return el;
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

Select.booleanAttributes = ['multiple'].concat(_for2.default.booleanAttributes);
Select.events = ['change'].concat(_for2.default.events);
exports.default = Select;

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

/**
 * Component to work with input elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_input}
 * {@link https://akilijs.com/docs/components#docs_checkbox_and_radio}
 * 
 * @tag input
 * @attr @see Text
 * @message @see Text
 */
var Input = function (_Text) {
  _inherits(Input, _Text);

  _createClass(Input, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('input', this);
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
    key: 'compiled',
    value: function compiled() {
      (this.isCheckbox || this.isRadio) && this.attr('checked', this.setChecked);
      return _get(Input.prototype.__proto__ || Object.getPrototypeOf(Input.prototype), 'compiled', this).apply(this, arguments);
    }
  }, {
    key: 'setChecked',
    value: function setChecked(value) {
      value = !!value;

      if (this.el.checked === value) {
        return;
      }

      this.el.checked = value;
      this.__isCompiled && this.attrs.onChange.dispatch(Event, { bubbles: true });
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

Input.booleanAttributes = ['checked', 'multiple'].concat(_text2.default.booleanAttributes);
Input.events = ['change'].concat(_text2.default.events);
exports.default = Input;

/***/ }),
/* 17 */
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
 * Component to work with radio group.
 * 
 * {@link https://akilijs.com/docs/components#docs_radio_group}
 * 
 * @tag radio
 * @selector radio[name]
 * @attr {string} name - name of the group
 * @attr {string|null} value - selected value
 * @attr [in] @see For
 * @message {string} radio - sent on value change
 */
var Radio = function (_For) {
  _inherits(Radio, _For);

  _createClass(Radio, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('radio', this);
      _akili2.default.component('radio-button', this.RadioButton);
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
    key: 'created',
    value: function created() {
      if (this.iterable) {
        return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'created', this).apply(this, arguments);
      }
    }
  }, {
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      this.el.addEventListener('change', function () {
        _akili2.default.nextTick(function () {
          var value = _this2.getRadioValue();

          if (value === _this2.prevValue) {
            return;
          }

          _this2.prevValue = value;
          _this2.attrs.onRadio.trigger(value, { bubbles: true });
        });
      });

      if (this.iterable) {
        return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'compiled', this).apply(this, arguments);
      }
    }
  }, {
    key: 'resolved',
    value: function resolved() {
      this.attr('in', this.setNames, { callOnStart: false });
      this.attr('value', this.setValue);
      this.attr('name', this.setNames);

      if (this.iterable) {
        return _get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'resolved', this).apply(this, arguments);
      }
    }
  }, {
    key: 'setNames',
    value: function setNames(name) {
      var children = this.children('input[type=radio]');

      for (var i = 0, l = children.length; i < l; i++) {
        children[i].el.setAttribute('name', name || this.attrs.name);
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

/**
 * Component to work with radio group item.
 * 
 * {@link https://akilijs.com/docs/components#docs_radio_group}
 * 
 * @tag radio-button
 * @attr {string} value - value
 */


Radio.matches = '[name]';
Radio.events = ['radio'].concat(_for2.default.events);
exports.default = Radio;

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
    key: 'compiled',
    value: function compiled() {
      this.attr('value', 'value');
      return _get(RadioButton.prototype.__proto__ || Object.getPrototypeOf(RadioButton.prototype), 'compiled', this).apply(this, arguments);
    }
  }]);

  return RadioButton;
}(_for.Loop);

RadioButton.template = '<label><input type="radio" value="${this.value}"/>${this.__content}</label>';


Radio.RadioButton = RadioButton;

/***/ }),
/* 18 */
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

/**
 * Component to work with textarea.
 * 
 * {@link https://akilijs.com/docs/components#docs_textarea}
 * 
 * @tag textarea
 * @attr @see Text
 * @message @see Text
 */
var Textarea = function (_Text) {
  _inherits(Textarea, _Text);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('textarea', this);
    }
  }]);

  return Textarea;
}(_text2.default);

exports.default = Textarea;

/***/ }),
/* 19 */
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

/**
 * Component for elements with contenteditable attribute.
 * 
 * {@link https://akilijs.com/docs/components#docs_contenteditable}
 * 
 * @tag content
 * @selector content,[contenteditable]
 * @attr @see Text
 * @attr {boolean} [editable] - editable or not
 */
var Content = function (_Text) {
  _inherits(Content, _Text);

  _createClass(Content, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('content', this);
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

var _request = __webpack_require__(4);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component to include templates by url.
 * 
 * {@link https://akilijs.com/docs/components#docs_html_templates}
 * 
 * @tag include
 * @selector include[url]
 * @attr {string} url - template path
 * @attr {number|function|boolean} [cache] - request cache {@link https://akilijs.com/docs/requests#docs_cache}
 * @message {void} load - sent on the template load
 * @message {Error} error - sent on error
 */
var Include = function (_Component) {
  _inherits(Include, _Component);

  _createClass(Include, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('include', this);
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
    key: 'compiled',
    value: function compiled() {
      this.attr('cache', this.setCache);
      return this.attr('url', this.setTemplate);
    }
  }, {
    key: 'setCache',
    value: function setCache(cache) {
      this.cache = cache;
    }
  }, {
    key: 'setTemplate',
    value: function setTemplate(url) {
      var _this2 = this;

      this.connection && this.connection.abort();

      return _request2.default.get(url, {
        cache: this.cache,
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for iframes.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag iframe
 * @attr {string} [url]
 */
var Iframe = function (_Url) {
  _inherits(Iframe, _Url);

  function Iframe() {
    _classCallCheck(this, Iframe);

    return _possibleConstructorReturn(this, (Iframe.__proto__ || Object.getPrototypeOf(Iframe)).apply(this, arguments));
  }

  _createClass(Iframe, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('iframe', this);
    }
  }]);

  return Iframe;
}(_url2.default);

exports.default = Iframe;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for images.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag img
 * @attr {string} [url]
 */
var Image = function (_Url) {
  _inherits(Image, _Url);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('img', this);
    }
  }]);

  return Image;
}(_url2.default);

exports.default = Image;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for embed elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag embed
 * @attr {string} [url]
 */
var Embed = function (_Url) {
  _inherits(Embed, _Url);

  function Embed() {
    _classCallCheck(this, Embed);

    return _possibleConstructorReturn(this, (Embed.__proto__ || Object.getPrototypeOf(Embed)).apply(this, arguments));
  }

  _createClass(Embed, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('embed', this);
    }
  }]);

  return Embed;
}(_url2.default);

exports.default = Embed;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for audio elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag audio
 * @attr {string} [url]
 */
var Audio = function (_Url) {
  _inherits(Audio, _Url);

  function Audio() {
    _classCallCheck(this, Audio);

    return _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).apply(this, arguments));
  }

  _createClass(Audio, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('audio', this);
    }
  }]);

  return Audio;
}(_url2.default);

exports.default = Audio;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for video elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag video
 * @attr {string} [url]
 */
var Video = function (_Url) {
  _inherits(Video, _Url);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  _createClass(Video, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('video', this);
    }
  }]);

  return Video;
}(_url2.default);

exports.default = Video;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for track elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag track
 * @attr {string} [url]
 */
var Track = function (_Url) {
  _inherits(Track, _Url);

  function Track() {
    _classCallCheck(this, Track);

    return _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
  }

  _createClass(Track, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('track', this);
    }
  }]);

  return Track;
}(_url2.default);

exports.default = Track;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for source elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag source
 * @attr {string} [url]
 */
var Source = function (_Url) {
  _inherits(Source, _Url);

  function Source() {
    _classCallCheck(this, Source);

    return _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).apply(this, arguments));
  }

  _createClass(Source, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('source', this);
    }
  }]);

  return Source;
}(_url2.default);

exports.default = Source;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _url = __webpack_require__(2);

var _url2 = _interopRequireDefault(_url);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for object elements.
 * 
 * {@link https://akilijs.com/docs/components#docs_image,_iframe,_embed,_audio,_video,_track,_source,_object}
 * 
 * @tag object
 * @attr {string} [url]
 */
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
      _akili2.default.component('object', this);
    }
  }]);

  return Objects;
}(_url2.default);

exports.default = Objects;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(3);

var _component2 = _interopRequireDefault(_component);

var _router = __webpack_require__(12);

var _router2 = _interopRequireDefault(_router);

var _akili = __webpack_require__(0);

var _akili2 = _interopRequireDefault(_akili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for links.
 * It works with router too. 
 * 
 * {@link https://akilijs.com/docs/components#docs_links}
 * 
 * @tag a
 * @selector a[state]:not([url]),a[url]:not([state])
 * @attr {string} [url] - url to go on click
 * @attr {string} [state] - state of router to go on click {@link https://akilijs.com/docs/routing}
 * @attr {object} [params] - params for the state {@link https://akilijs.com/docs/routing#docs_state_params}
 * @attr {object} [query] - query for the state {@link https://akilijs.com/docs/routing#docs_state_query}
 * @attr {string} [hash] - hash for the state {@link https://akilijs.com/docs/routing#docs_state_hash}
 * @attr {object} [options] - options for the state {@link https://akilijs.com/docs/routing#docs_router.location}
 * @scope {boolean} isActiveState - the state is active or not 
 * @scope {boolean} inActiveState - the state is part of the active state or not
 */
var A = function (_Component) {
  _inherits(A, _Component);

  _createClass(A, null, [{
    key: 'define',
    value: function define() {
      _akili2.default.component('a', this);
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
    _this.options = {};
    _this.isUrl = _this.el.hasAttribute('url');
    return _this;
  }

  _createClass(A, [{
    key: 'compiled',
    value: function compiled() {
      var _this2 = this;

      this.el.addEventListener('click', function (e) {
        e.preventDefault();

        if (_this2.isUrl) {
          _router2.default.location(_this2.attrs.url, _this2.options);
          return;
        }

        _router2.default.state(_this2.state.name, _this2.params, _this2.query, _this2.hash, _this2.options);
      });

      this.onStateChanged = function () {
        return _this2.state && _this2.setActivity();
      };
      window.addEventListener('state-changed', this.onStateChanged);

      this.attr('state', this.setState);
      this.attr('params', this.setParams);
      this.attr('query', this.setQuery);
      this.attr('hash', this.setHash);
      this.attr('options', this.setOptions);
      this.attr('url', this.setUrl);
      this.attr('state', this.resetHref, { callOnStart: false });
      this.attr('params', this.resetHref, { callOnStart: false });
      this.attr('query', this.resetHref, { callOnStart: false });
      this.attr('hash', this.resetHref, { callOnStart: false });
      this.attr('url', this.resetHref, { callOnStart: false });
      this.resetHref();
    }
  }, {
    key: 'removed',
    value: function removed() {
      window.removeEventListener('state-changed', this.onStateChanged);
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
      this.setActivity();
    }
  }, {
    key: 'setActivity',
    value: function setActivity() {
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
      if (typeof hash != 'string' && hash !== undefined && hash !== null) {
        throw new Error('Router state hash must be a string|null');
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
    value: function resetHref() {
      if (this.url) {
        this.attrs.href = this.url;
      } else {
        this.attrs.href = _router2.default.createStateUrl(this.state, this.params, this.query, this.hash, this.options);
      }
    }
  }]);

  return A;
}(_component2.default);

A.matches = '[state]:not([url]),[url]:not([state])';
A.controlAttributes = true;
exports.default = A;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2FraWxpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL3NlcnZpY2VzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2Zvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL3Njb3BlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvZXZlbnQtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL3NlcnZpY2VzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9zZXJ2aWNlcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2lmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9yYWRpby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2luY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2lmcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL2VtYmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL3RyYWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ha2lsaS9zcmMvY29tcG9uZW50cy9zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FraWxpL3NyYy9jb21wb25lbnRzL29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYWtpbGkvc3JjL2NvbXBvbmVudHMvYS5qcyJdLCJuYW1lcyI6WyJBa2lsaSIsIl9fZGVmYXVsdHMiLCJzZXREZWZhdWx0cyIsIm9wdGlvbnMiLCJkZWJ1ZyIsIl9faW5pdCIsIl9fY2xlYXJlZCIsIl9fY29tcG9uZW50cyIsIl9fYWxpYXNlcyIsIl9fc2NvcGVzIiwiX19zdG9yZUxpbmtzIiwiX193aW5kb3ciLCJfX3RhZ3MiLCJfX2lzb2xhdGlvbiIsIl9fZXZhbHVhdGlvbiIsIl9fd3JhcHBpbmciLCJfX29uRXJyb3IiLCJ0cmlnZ2VySW5pdCIsImh0bWxCb29sZWFuQXR0cmlidXRlcyIsImtleSIsImdsb2JhbHMiLCJfX3RhcmdldCIsInV0aWxzIiwiY29tcG9uZW50cyIsInNlcnZpY2VzIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiU2NvcGUiLCJBIiwiQXVkaW8iLCJDb250ZW50IiwiRm9yIiwiRW1iZWQiLCJJZiIsIkluY2x1ZGUiLCJJbnB1dCIsIklmcmFtZSIsIkltYWdlIiwiT2JqZWN0IiwiT2JqZWN0cyIsIlJhZGlvIiwiUm91dGUiLCJTZWxlY3QiLCJTb3VyY2UiLCJUZXh0IiwiVGV4dGFyZWEiLCJUcmFjayIsIlVybCIsIlZpZGVvIiwicmVxdWVzdCIsInJvdXRlciIsInN0b3JlIiwiZGVmaW5lIiwiZXJyb3JIYW5kbGluZyIsImlzb2xhdGVFdmVudHMiLCJpc29sYXRlQXJyYXlQcm90b3R5cGUiLCJpc29sYXRlV2luZG93RnVuY3Rpb25zIiwiaSIsImwiLCJsZW5ndGgiLCJkZWZhdWx0cyIsImZuIiwicHVzaCIsImNsZWFyR2xvYmFscyIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJBcnJheSIsInVud3JhcCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsIlByb21pc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiam9pbkJpbmRpbmdLZXlzIiwia2V5cyIsIm1hcCIsImVsIiwidG9TdHJpbmciLCJqb2luIiwiYWRkU2NvcGUiLCJzY29wZSIsIl9fbmFtZSIsIkVycm9yIiwiZ2V0U2NvcGUiLCJuYW1lIiwicmVtb3ZlU2NvcGUiLCJfX2VsIiwiX19jb21wb25lbnQiLCJfX3BhcmVudCIsImdldEFraWxpUGFyZW50cyIsInRyZWUiLCJhcnIiLCJjaGVjayIsIm5vZGUiLCJwYXJlbnROb2RlIiwiX19ha2lsaSIsInNldFRlbXBsYXRlIiwidGVtcGxhdGUiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiY3JlYXRlU2NvcGVOYW1lIiwiY3JlYXRlUmFuZG9tU3RyaW5nIiwic3RyIiwiaXNvbGF0ZSIsInJlcyIsInByb3BzIiwiayIsInByb3AiLCJ2YWwiLCJnZXRQcm9wZXJ0eUJ5S2V5cyIsImNvbXBvbmVudCIsIl9fc2NvcGUiLCJfX2lzUmVzb2x2ZWQiLCJfX3RyaWdnZXJTdG9yZUFuZEF0dHIiLCJfX2V2YWx1YXRlQnlLZXlzIiwiaXNEZWxldGVkIiwidW5ldmFsdWF0ZSIsImV2YWx1YXRpb24iLCJ3cmFwcGluZyIsInVuaXNvbGF0ZSIsImlzb2xhdGlvbiIsIm5leHRUaWNrIiwicmVzb2x2ZSIsInRoZW4iLCJpbml0aWFsaXplIiwicmVjb21waWxlIiwiX19yZWNvbXBpbGUiLCJpc1Jvb3QiLCJfX3Jvb3QiLCJjb21wb25lbnROYW1lIiwidG9EYXNoQ2FzZSIsImdldEF0dHJpYnV0ZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9Db21wb25lbnQiLCJDSEVDS19BTElBU0VTIiwic2VsZWN0b3JzIiwic2VsZWN0b3JBbGwiLCJtYXRjaGVzIiwic2VsZWN0b3IiLCJfX2NhbmNlbGxlZCIsImZpbmQiLCJwIiwiX19wcmV2ZW50IiwiX19jcmVhdGUiLCJjb21waWxlIiwicm9vdCIsImVsZW1lbnRzIiwibmVzdGVkSW5pdGlhbGl6aW5nIiwiY2hpbGRyZW4iLCJjaGlsZCIsIl9fY29tcGlsZSIsImFsbCIsInIiLCJfX3Jlc29sdmUiLCJjb25zb2xlIiwid2FybiIsInJlbW92ZUNvbXBvbmVudCIsImFsaWFzIiwicmVtb3ZlQWxpYXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwib2xkIiwiX19pc1Byb3h5IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVDYWxsYmFja0lzb2xhdGlvbiIsIkFLSUxJX1NTUiIsImNvbnN0cnVjdG9yIiwiY2F0Y2giLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiX19ha2lsaUxpc3RlbmVycyIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJsaW5rIiwibGlzdGVuZXIiLCJzcGxpY2UiLCJwb3MiLCJpc0FycmF5IiwibnVtIiwiaW5kZXgiLCJjYWxsYmFjayIsIl9faXNvbGF0ZWQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJ2YWx1ZSIsIndyYXAiLCJvYmoiLCJjdXJyZW50Iiwid3JhcEZ1bmN0aW9uIiwiYyIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInJldmVyc2UiLCJha2lsaVdyYXBwZWRGdW5jdGlvbiIsInRhZyIsImFkZFRhZyIsImhhc1RhZyIsInJlbW92ZVRhZyIsInVuZGVmaW5lZCIsInRyaWdnZXJUYWciLCJfX2V2YWx1YXRlTm9kZSIsInN0YXR1cyIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiLCJkb2N1bWVudEVsZW1lbnQiLCJBS0lMSV9TRVJWRVIiLCJpbml0U2VydmVyU2lkZUh0bWwiLCJodG1sIiwiaW5pdFNlcnZlclNpZGVSZXF1ZXN0Q2FjaGUiLCJyZXF1ZXN0Q2FjaGUiLCJBS0lMSV9DTElFTlQiLCJwcmVwYXJlU2VydmVyU2lkZUh0bWwiLCJjaGFuZ2VTdGF0ZSIsInByZXBhcmVTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlIiwiZXJyIiwiYXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZSIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvYyIsInBhcnNlRnJvbVN0cmluZyIsInF1ZXJ5U2VsZWN0b3IiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiaW5zdGFuY2UiLCJfX2NhY2hlIiwiX19pbnN0YW5jZXMiLCJvdXRlckhUTUwiLCJjYWNoZSIsIl9fbWFpbiIsImRlaW5pdCIsInN0b3JlS2V5cyIsImNsYXNzIiwiY2xhc3NlcyIsInN0eWxlIiwic3R5bGVzIiwic3BsaXQiLCJkZWwiLCJleGNsdWRlIiwiZXhwcyIsImxhc3QiLCJSZWdFeHAiLCJpbmRleE9mIiwib3BlbiIsImZpbHRlciIsImhhbmRsZXIiLCJtYXRjaCIsIml0ZW0iLCJmaWx0ZXJlZCIsInNvcnQiLCJvcmRlciIsImEiLCJiIiwiRGF0ZSIsImdldFRpbWUiLCJuZXh0IiwiYVYiLCJiViIsImluY2x1ZGVLZXlzIiwibmV3T2JqIiwib2JqS2V5cyIsImV4Y2x1ZGVLZXlzIiwiaXNTY29wZVByb3h5IiwiaXNQbGFpbk9iamVjdCIsImNvcHkiLCJuZXN0ZWQiLCJwbGFpbiIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwibWFrZUF0dHJpYnV0ZVZhbHVlIiwiY29tcGFyZSIsImlnbm9yZVVuZGVmaW5lZCIsImNsZWFyVW5kZWZpbmVkIiwiYUtleXMiLCJiS2V5cyIsImNyZWF0ZUhhc2giLCJzb3VyY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiU3RyaW5nIiwiaGFzaCIsImNoYXIiLCJjaGFyQ29kZUF0IiwiZW5jb2RlSHRtbEVudGl0aWVzIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZGVjb2RlSHRtbEVudGl0aWVzIiwidG9DYW1lbENhc2UiLCJtIiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplIiwib2JqZWN0IiwicmVkdWNlIiwibyIsImhhc1Byb3BlcnR5QnlLZXlzIiwiaGFzIiwiaGFzT3duUHJvcGVydHkiLCJzZXRQcm9wZXJ0eUJ5S2V5cyIsImRlbGV0ZVByb3BlcnR5QnlLZXlzIiwiZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0IiwidGFyZ2V0IiwicHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsImdldE93blByb3BlcnR5VGFyZ2V0IiwiTWF0aCIsInJhbmRvbSIsInN1YnN0cmluZyIsIm5vdyIsImRlYm91bmNlIiwiZGVsYXkiLCJjbGVhclRpbWVvdXQiLCJfX2RlYm91bmNlVGltZW91dCIsInVybEF0dHJpYnV0ZSIsInNldFVybCIsInVybCIsImF0dHJzIiwiZXZhbHVhdGlvblJlZ2V4IiwiZXZhbHVhdGlvblJlZ2V4R2xvYmFsIiwic3lzdGVtQXR0cmlidXRlcyIsImNvbnRleHQiLCJleHByZXNzaW9uIiwidmFyaWFibGVzIiwidmFycyIsIkZ1bmN0aW9uIiwiX19pc01vdW50ZWQiLCJfX2lzQ29tcGlsZWQiLCJfX2JpbmRpbmdzIiwiX19ldmFsdWF0aW5nRXZlbnQiLCJfX3JlY29tcGlsaW5nIiwiX19jb21waWxpbmciLCJfX2Rpc2FibGVQcm94eSIsIl9fZGlzYWJsZVN0b3JlS2V5cyIsIl9fZGlzYWJsZUF0dHJLZXlzIiwiX19jaGlsZHJlbiIsIl9fcGFyZW50cyIsIl9fY29udGVudCIsIl9fYXR0cnMiLCJfX2F0dHJMaW5rcyIsIl9fYXR0cmlidXRlT2YiLCJfX2V2YWx1YXRpb25Db21wb25lbnQiLCJjaGVja0NoYW5nZXMiLCJzZXRFdmVudHMiLCJzZXRQYXJlbnRzIiwic2V0Qm9vbGVhbkF0dHJpYnV0ZXMiLCJkZWZpbmVBdHRyaWJ1dGVzIiwiX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMiLCJfX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zIiwiX19zZXRFdmVudHMiLCJfX3NldFBhcmVudHMiLCJfX3NldEJvb2xlYW5BdHRyaWJ1dGVzIiwiX19kZWZpbmVBdHRyaWJ1dGVzIiwiX19pbml0aWFsaXplIiwiY3JlYXRlZCIsImNvbnRyb2wiLCJfX2NvbnRyb2xBdHRyaWJ1dGVzIiwiX19ldmFsdWF0ZVBhcmVudCIsIm5ld1BhcmVudCIsIl9faW50ZXJwb2xhdGVBdHRyaWJ1dGVzIiwiaW50ZXJwb2xhdGUiLCJwYXJlbnQiLCJub2RlVHlwZSIsIl9faW5pdGlhbGl6ZU5vZGUiLCJjaGlsZE5vZGVzIiwib25Db21waWxlZCIsInRyaWdnZXIiLCJidWJibGVzIiwiY29tcGlsZWQiLCJ0ZW1wbGF0ZVVybCIsImdldCIsInRlbXBsYXRlQ2FjaGUiLCJkYXRhIiwib25SZWNvbXBpbGVkIiwicmVjb21waWxlZCIsIm9uUmVzb2x2ZWQiLCJyZXNvbHZlZCIsIl9zY29wZSIsImFzc2lnbiIsImNvbnRyb2xBdHRyaWJ1dGVzIiwiZXZlbnRzIiwiX19ldmVudHMiLCJfX25lc3RlZE9ic2VydmUiLCJib29sZWFuQXR0cmlidXRlcyIsImNvbmNhdCIsInNldEF0dHIiLCJub2RlTmFtZSIsImhhc0F0dHJpYnV0ZSIsImV2IiwidGVzdCIsInBhcmVudHMiLCJldmFsdWF0ZVBhcmVudCIsInRyYW5zcGFyZW50IiwiX19kZXRhY2giLCJfX2FkZENoaWxkIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3BlcnRpZXMiLCJfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZSIsIl9fZ2V0Tm9kZVByb3BlcnR5IiwiYXR0ck5hbWUiLCJlbGVtZW50TmFtZSIsIl9fZWxlbWVudCIsImF0dHJpYnV0ZU5hbWUiLCJBdHRyIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwiX19leHByZXNzaW9uIiwidHJpbSIsImNvdW50ZXIiLCJhdHRyaWJ1dGVWYWx1ZSIsImV2YWxDb21wb25lbnQiLCJjb20iLCJkIiwiZXZhbHVhdGUiLCJleGlzdGluZ0JpbmRpbmdzIiwicGFyZW50QmluZGluZ3MiLCJwYXJzZVZhbHVlIiwiX19nZXRQYXJzZWRFeHByZXNzaW9uIiwibGlzdCIsInBhcnNlIiwiX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlIiwiX19jcmVhdGVLZXlzSGFzaCIsInBhcmVudHNIYXNoIiwibm90QmluZGluZyIsInBhcmVudFZhbHVlIiwicmVhbENvbXBvbmVudCIsIl9fYmluZEFuZFNldFByb3BlcnR5IiwiZXZhbHVhdGVkIiwiZSIsImJpbmQiLCJfX2dldEJvdW5kTm9kZSIsIl9fYmluZCIsIl9fc2V0Tm9kZVByb3BlcnR5Iiwid2l0aG91dFBhcmVudHMiLCJsYXN0UHJvcHMiLCJwcm9wc0xlbmd0aCIsImVsRXZhbHVhdGUiLCJlbGVtZW50IiwiX19nZXRCaW5kIiwiX19kYXRhIiwiX19nZXRBbGxCaW5kcyIsIl9faW5pdGlhbGl6ZWQiLCJfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlIiwiX19kaXNhYmxlS2V5cyIsImNoZWNrUHJvcCIsIl9fc2V0IiwiX2siLCJfcHJvcCIsIl9fZW5hYmxlS2V5cyIsInVuYmluZCIsIl9faXNTeXN0ZW1CaW5kaW5nS2V5IiwiX2tleXMiLCJfX2tleXMiLCJfaXNEZWxldGVkIiwiaGFzS2V5Iiwic2hpZnQiLCJfX2V2YWx1YXRlTmVzdGVkIiwiX191bmJpbmQiLCJleGVjIiwiZXZlbnQiLCJfX2NoZWNrRXZhbHVhdGlvbiIsIl9fZXZhbHVhdGUiLCJpc0Jvb2xlYW5BdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNhbWVsQXR0cmlidXRlIiwiX19hdHRyaWJ1dGVPbiIsIl9fcHJlcGFyZUF0dHJpYnV0ZUluIiwiX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyIiwiX19hdHRyVHJpZ2dlckJ5TmFtZSIsImF0dHJpYnV0ZU9mIiwiZXZlbnROYW1lIiwiX19pc0V2ZW50IiwiX19ldmVudCIsImVtaXR0ZXIiLCJfX2hhc0JpbmRpbmdzIiwiX19ldmFsdWF0ZUV2ZW50IiwiaXNBdHRyIiwiaGFzQmluZGluZ3MiLCJpc0Jvb2xlYW4iLCJpc0V2ZW50IiwiX19pc0Jvb2xlYW4iLCJzYXZlQmluZGluZ3MiLCJfX3VuYmluZEJ5Tm9kZXMiLCJfX3VuYmluZFBhcmVudHNCeU5vZGVzIiwiX19pbml0aWFsaXplQXR0cmlidXRlIiwiY2hhbmdlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlTm9kZSIsIl9fZGVpbml0aWFsaXplTm9kZSIsIlByb3h5Iiwic2V0IiwiYXR0cktleSIsImRlbGV0ZVByb3BlcnR5IiwiX19pc1N5c3RlbUtleSIsImV4Y0FyciIsInJlYWxUYXJnZXQiLCJmb3JQYXJlbnRzIiwiZm9yRGF0YSIsInBvcCIsIl9fYmluZE5vZGUiLCJfX2NoZWNrRGlzYWJsZW1lbnQiLCJDSEVDS19FWElTVEVOQ0UiLCJ0YXJnZXRQYXJlbnRWYWx1ZSIsIl9fY3JlYXRlSXNvbGF0aW9uT2JqZWN0IiwiY3VycmVudEtleXMiLCJjdXJyZW50S2V5U3RyaW5nIiwiX19zdG9yZVRyaWdnZXJCeUtleXMiLCJfX2F0dHJUcmlnZ2VyQnlLZXlzIiwidHlwZSIsInByb3h5IiwiX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSIsIl9fYWxsIiwibGlua3MiLCJfX3N0b3JlVHJpZ2dlckJ5TmFtZSIsImtleVN0cmluZyIsImluZm8iLCJkYXRlIiwiY2FsbE9uU3RhcnQiLCJhdHRyc0tleXMiLCJzdGFydEtleXMiLCJvYnNlcnZlIiwiQ0hFQ0tfUFJPWFkiLCJfX2Rpc2FibGVQcm94eVJlZGVmaW5pbmciLCJ0YXJnZXRLZXlzIiwiX19vYnNlcnZlIiwiaXNvbGF0aW9uSGFzaCIsInVwZGF0ZWRBdCIsInBhcmVudEtleXNTdHJpbmciLCJrZXlzU3RyaW5nIiwiY29sbGVjdCIsInJvb3RBdHRycyIsIm5vZGVzIiwiX19tYXBOb2RlcyIsIl9fZGVsZXRlTm9kZVByb3BlcnR5IiwiaiIsIl9fcmVtb3ZlIiwib25SZW1vdmVkIiwicmVtb3ZlZCIsIl9fZW1wdHkiLCJfX2NsZWFyU3RvcmVMaW5rcyIsIl9fc3BsaWNlQ2hpbGQiLCJfX3JlbW92ZUNoaWxkcmVuIiwiZmluZEFsbCIsImxldmVscyIsImxldmVsIiwicmlnaHQiLCJsZXZlbEVsZW1lbnRzIiwidW5zaGlmdCIsIl9fc3RvcmVCeUZ1bmN0aW9uIiwiX19zdG9yZUJ5S2V5cyIsIl9fYXR0ckJ5RnVuY3Rpb24iLCJfX2F0dHJCeUtleXMiLCJfX3Vuc3RvcmVCeUZ1bmN0aW9uIiwiX191bnN0b3JlQnlLZXlzIiwiX191bmF0dHJCeUZ1bmN0aW9uIiwiX191bmF0dHJCeUtleXMiLCJfX2dldFBhcmVudCIsIl9fZ2V0Q2hpbGRyZW4iLCJfX2dldE5lYXIiLCJhcHBlbmRDaGlsZCIsIlJlcXVlc3QiLCJiYXNlVXJsIiwiZ2V0SGVhZGVycyIsInhociIsImhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJsaW5lIiwic3RhdHVzRXJyb3JQYXR0ZXJuIiwicmVqZWN0IiwibWV0aG9kIiwiWE1MSHR0cFJlcXVlc3QiLCJiZWZvcmUiLCJ0cmFuc2Zvcm1CZWZvcmUiLCJvblN0YXJ0IiwianNvbiIsInJlc3BvbnNlVHlwZSIsImZvcm0iLCJjcmVhdGVGb3JtRGF0YSIsInBhcmFtcyIsInBhcmFtc1RvUXVlcnkiLCJjcmVhdGVDYWNoZUhhc2giLCJ1c2VyIiwicGFzc3dvcmQiLCJfY2FjaGUiLCJnZXRDYWNoZSIsImNyZWF0ZWRBdCIsInRyYW5zZm9ybUFmdGVyIiwicmVzdWx0IiwidGltZW91dCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcktleXMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25Qcm9ncmVzcyIsIm9ucHJvZ3Jlc3MiLCJvbmxvYWQiLCJyZXNwb25zZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0IiwicmVzcG9uc2VYTUwiLCJyZXNwb25zZVVSTCIsImNyZWF0ZUNhY2hlIiwib250aW1lb3V0Iiwib25lcnJvciIsInNlbmQiLCJzZXAiLCJlcSIsImtzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidiIsIm9wdCIsInF1ZXJ5IiwiYW1wcyIsImVxcyIsImRlY29kZVVSSUNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ0b0lTT1N0cmluZyIsImFkZEluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJMb29wIiwiaXRlcmF0b3JzIiwiaXRlcmF0b3JFbCIsInJlc2V0IiwiY3JlYXRlSXRlcmF0b3IiLCJkcmF3IiwibWFzayIsImNyZWF0ZUl0ZXJhdG9yRWxlbWVudCIsImNvbnRlbnQiLCJmaXJzdENoaWxkIiwiX19pbmRleCIsIl9fa2V5IiwiX192YWx1ZSIsIl9faGFzaCIsIml0ZXJhdG9yIiwic2V0SW5kZXgiLCJzZXRLZXkiLCJzZXRWYWx1ZSIsIl9fcHJvbWlzZXMiLCJjbG9uZU5vZGUiLCJsb29wIiwiaXRlcmF0ZSIsIm9uT3V0IiwiX19pdGVyYXRvciIsImZvciIsImlzRm9yIiwiY2FuY2VsIiwidmFsdWVLZXkiLCJkZWJvdW5jZUludGVydmFsIiwib25EZWJvdW5jZSIsInNldEZvY3VzIiwic2V0RGVib3VuY2UiLCJpbnRlcnZhbCIsInNldEVsZW1lbnRGb2N1cyIsInNldEVsZW1lbnRCbHVyIiwiZm9jdXMiLCJibHVyIiwic3RyaWN0IiwiZm9yY2UiLCJpbkV2YWx1YXRpbmciLCJwcmVwYXJlT3B0aW9ucyIsIl9FdmVudCIsIl9fcHJlcGFyZUF0dHJpYnV0ZU91dCIsInRyYW5zaXRpb24iLCJsb2FkIiwic3RhdGUiLCJwYXRoIiwiZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uIiwiX190cmFuc2l0aW9uIiwiZW1wdHkiLCJleGlzdHMiLCJUcmFuc2l0aW9uIiwicHJldmlvdXMiLCJyb3V0ZXMiLCJzdGF0ZXMiLCJfX2ZpbmlzZWQiLCJyZWRpcmVjdCIsInJvdXRlIiwiaGFzU3RhdGUiLCJwYXJhbUtleXMiLCJmdWxsUGF0dGVybiIsIl9fcGFyYW1SZWdleCIsImYiLCJxdWVyeUtleXMiLCJ3YXRjaEhhc2giLCJwcmV2Um91dGUiLCJnZXRSb3V0ZSIsInByZXYiLCJmaW5pc2giLCJoYXNoTW9kZSIsIl9fcmVkaXJlY3RzIiwiX19yb3V0ZVNlbGVjdG9yIiwiYWRkIiwicGF0dGVybiIsImRlZmF1bHRPcHRpb25zIiwiYWJzdHJhY3QiLCJzZXRTdGF0ZSIsImdldFN0YXRlIiwibWFudWFsIiwicHJlcGFyZVN0YXRlQXJncyIsImNyZWF0ZVN0YXRlVXJsIiwiYmFjayIsImhpc3RvcnkiLCJnbyIsImZvcndhcmQiLCJsb2NhdGlvbiIsImRlZmF1bHRVcmwiLCJvbGRQdXNoU3RhdGUiLCJwdXNoU3RhdGUiLCJlcnJvciIsIl9fb25TdGF0ZUNoYW5nZUhhbmRsZXIiLCJpbml0U3RhdGUiLCJwYXJlbnROYW1lIiwic3BsaXRTbGFzaGVzIiwicmVtb3ZlU3RhdGUiLCJzZXRIYXNoVXJsIiwic2V0SGlzdG9yeVVybCIsInJlcGxhY2VVcmwiLCJyZXBsYWNlSGFzaFVybCIsInJlcGxhY2VIaXN0b3J5VXJsIiwicmVwbGFjZVN0YXRlIiwiZ2V0VXJsIiwiZ2V0SGFzaFVybCIsImdldEhpc3RvcnlVcmwiLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVybFF1ZXJ5IiwiZ2V0SGFzaFVybFF1ZXJ5IiwiZ2V0SGlzdG9yeVVybFF1ZXJ5IiwicGFyYW1zRnJvbVF1ZXJ5IiwicHJlcGFyZSIsInBhcmFtc1RlbXAiLCJwcmVwYXJlU3RhdGVQYXJhbXMiLCJxdWVyeVRlbXAiLCJwcmVwYXJlU3RhdGVRdWVyeSIsImhhc2hUZW1wIiwicHJlcGFyZVN0YXRlSGFzaCIsImVtcHR5SGFzaCIsIm5ld0FyZ3MiLCJjcmVhdGVTdGF0ZUFyZ3MiLCJleGNsdWRlZCIsImdldFBhdHRlcm5Db250ZW50IiwidXJsUGF0dGVybiIsInJlZ2V4IiwiaXNJbmNsdWRlZCIsImlzQWN0aXZlU3RhdGUiLCJpbmNsdWRlcyIsIl9fZmluaXNoZWQiLCJpbkFjdGl2ZVN0YXRlIiwiZ2V0QXJyYXlQYXR0ZXJuQ29udGVudCIsImdldFN0YXRlc0J5TGV2ZWwiLCJyZWxvYWQiLCJwcmV2VHJhbnNpdGlvbiIsInNldFBhdGgiLCJyZWFsVXJsIiwiaXNEaWZmZXJlbnQiLCJpc1JvdXRlQ2hhbmdlZCIsInRpdGxlIiwibG9hZGVkIiwic2V0VHJhbnNpdGlvbiIsInNhdmVTY3JvbGxQb3NpdGlvbiIsInNjcm9sbFRvIiwiVGFicyIsIlRhYk1lbnUiLCJUYWJDb250ZW50IiwiVGFiVGl0bGUiLCJUYWJQYW5lIiwiYWN0aXZlIiwibWVudUNoaWxkIiwiY29udGVudENoaWxkIiwidGl0bGVMZW5ndGgiLCJnZXRUYWJzIiwicGFuZUxlbmd0aCIsInNldEFjdGl2ZVRhYiIsInRhYnMiLCJsYXN0QWN0aXZlIiwic2V0QWN0aXZpdHkiLCJvblRhYiIsIml0ZXJhYmxlIiwiY2hpbGRTZWxlY3RvciIsInRhYiIsInJlY3JlYXRlIiwiaXNBY3RpdmVUYWIiLCJpc0FjdGl2ZSIsInNldFJlY3JlYXRpb24iLCJhY3Rpdml0eSIsImdldFRhYkluZGV4IiwiZ2V0VGFic0J5SW5kZXgiLCJFbHNlSWYiLCJFbHNlIiwiaXNDb21waWxlZCIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwic2V0SXMiLCJjb21waWxhdGlvbiIsIm5leHRFbGVtZW50U2libGluZyIsInNldFByb3BlcnR5IiwiT3B0aW9uIiwiaXRlcmF0b3JUYWdOYW1lIiwiaXNNdWx0aXBsZSIsImdldENvbnRlbnQiLCJzZXRNdWx0aXBsZSIsInNldENvbnRlbnQiLCJkcmF3U2VsZWN0IiwiY2hhbmdlVmFsdWUiLCJmb3JtYXRWYWx1ZSIsInNlbGVjdGVkIiwib3B0aW9uIiwic2VsZWN0aW9uIiwicmVkZWZpbmUiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwiRXZlbnQiLCJzZXRTZWxlY3RlZCIsImlzQ2hlY2tib3giLCJpc1JhZGlvIiwic2V0Q2hlY2tlZCIsImNoZWNrZWQiLCJjaGFuZ2VSYWRpbyIsInJhZGlvIiwiUmFkaW9CdXR0b24iLCJnZXRSYWRpb1ZhbHVlIiwicHJldlZhbHVlIiwib25SYWRpbyIsInNldE5hbWVzIiwiaXNUcnVlIiwiaXNTZWxlY3RlZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiY29ubmVjdGlvbiIsInNldENhY2hlIiwiYWJvcnQiLCJvbkxvYWQiLCJvbkVycm9yIiwiaXNVcmwiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3RhdGVDaGFuZ2VkIiwic2V0UGFyYW1zIiwic2V0UXVlcnkiLCJzZXRIYXNoIiwic2V0T3B0aW9ucyIsInJlc2V0SHJlZiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QUNWLFVBQUksS0FBSzlWLEdBQVQsRUFBYztBQUNaLGFBQUtDLEtBQUwsQ0FBV21oQixJQUFYLEdBQWtCLEtBQUtwaEIsR0FBdkI7QUFDRCxPQUZELE1BR0s7QUFDSCxhQUFLQyxLQUFMLENBQVdtaEIsSUFBWCxHQUFrQm55QixpQkFBT2dwQixjQUFQLENBQXNCLEtBQUtuQyxLQUEzQixFQUFrQyxLQUFLekYsTUFBdkMsRUFBK0MsS0FBS2lDLEtBQXBELEVBQTJELEtBQUt4VSxJQUFoRSxFQUFzRSxLQUFLNVIsT0FBM0UsQ0FBbEI7QUFDRDtBQUNGOzs7O0VBbEg0QnNCLG1COztBQUFWRyxDLENBQ1o4RyxPLEdBQVUsdUM7QUFERTlHLEMsQ0FFWm9XLGlCLEdBQW9CLEk7a0JBRlJwVyxDIiwiZmlsZSI6ImFraWxpLXRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuIiwiLyoqXG4gKiBKYXZhc2NyaXB0IGZyYW1ld29ya1xuICpcbiAqIGNvbnN0IEFraWxpID0gbWFrZUl0RWFzeShqcyArIGh0bWwpO1xuICpcbiAqIEBhdXRob3IgQWxleGFuZHIgQmFsYXN5YW4gPG15d2Vic3RyZWV0QGdtYWlsLmNvbT5cbiAqIEBsaW5rIGh0dHA6Ly9ha2lsaWpzLmNvbVxuICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IElmIGZyb20gJy4vY29tcG9uZW50cy9pZi5qcyc7XG5pbXBvcnQgRm9yIGZyb20gJy4vY29tcG9uZW50cy9mb3IuanMnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0LmpzJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQuanMnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vY29tcG9uZW50cy9yYWRpby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC5qcyc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhLmpzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmpzJztcbmltcG9ydCBJbmNsdWRlIGZyb20gJy4vY29tcG9uZW50cy9pbmNsdWRlLmpzJztcbmltcG9ydCBJZnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL2lmcmFtZS5qcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlLmpzJztcbmltcG9ydCBFbWJlZCBmcm9tICcuL2NvbXBvbmVudHMvZW1iZWQuanMnO1xuaW1wb3J0IEF1ZGlvIGZyb20gJy4vY29tcG9uZW50cy9hdWRpby5qcyc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL3ZpZGVvLmpzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2NvbXBvbmVudHMvdHJhY2suanMnO1xuaW1wb3J0IFNvdXJjZSBmcm9tICcuL2NvbXBvbmVudHMvc291cmNlLmpzJztcbmltcG9ydCBPYmplY3RzIGZyb20gJy4vY29tcG9uZW50cy9vYmplY3QuanMnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5pbXBvcnQgVXJsIGZyb20gJy4vY29tcG9uZW50cy91cmwuanMnO1xuaW1wb3J0IEEgZnJvbSAnLi9jb21wb25lbnRzL2EuanMnO1xuaW1wb3J0IFNjb3BlIGZyb20gJy4vc2NvcGUuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50LWVtaXR0ZXIuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc2VydmljZXMvc3RvcmUuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzLmpzJztcblxuLyoqXG4gKiBUaGUgZnJhbWV3b3JrIG9iamVjdFxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2dldHRpbmctc3RhcnRlZH1cbiAqL1xuY29uc3QgQWtpbGkgPSB7fTtcblxuQWtpbGkuX19kZWZhdWx0cyA9IFtdO1xuXG4vKipcbiAqIFNldCB0aGUgZnJhbWV3b3JrJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xuQWtpbGkuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICBkZWJ1ZzogdHJ1ZVxuICB9O1xuICBcbiAgdGhpcy5fX2luaXQgPSBudWxsO1xuICB0aGlzLl9fY2xlYXJlZCA9IGZhbHNlO1xuICB0aGlzLl9fY29tcG9uZW50cyA9IHt9O1xuICB0aGlzLl9fYWxpYXNlcyA9IHt9O1xuICB0aGlzLl9fc2NvcGVzID0ge307XG4gIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gIHRoaXMuX193aW5kb3cgPSB7fTtcbiAgdGhpcy5fX3RhZ3MgPSB7fTtcbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgdGhpcy5fX3dyYXBwaW5nID0gZmFsc2U7XG4gIHRoaXMuX19vbkVycm9yID0gKCkgPT4gdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gIFxuICB0aGlzLmh0bWxCb29sZWFuQXR0cmlidXRlcyA9IFtcbiAgICAnZGlzYWJsZWQnLCAnY29udGVudGVkaXRhYmxlJywgJ2hpZGRlbidcbiAgXTtcblxuICBmb3IobGV0IGtleSBpbiBnbG9iYWxzKSB7XG4gICAgZGVsZXRlIGdsb2JhbHNba2V5XTtcbiAgfVxuXG4gIGdsb2JhbHMuX190YXJnZXQudXRpbHMgPSB1dGlscztcblxuICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgdGhpcy5zZXJ2aWNlcyA9IHt9O1xuXG4gIHRoaXMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICB0aGlzLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgdGhpcy5TY29wZSA9IFNjb3BlO1xuICB0aGlzLnV0aWxzID0gdXRpbHM7XG4gIHRoaXMuZ2xvYmFscyA9IGdsb2JhbHM7XG4gIHRoaXMuY29tcG9uZW50cy5BID0gQTtcbiAgdGhpcy5jb21wb25lbnRzLkF1ZGlvID0gQXVkaW87XG4gIHRoaXMuY29tcG9uZW50cy5Db250ZW50ID0gQ29udGVudDtcbiAgdGhpcy5jb21wb25lbnRzLkZvciA9IEZvcjtcbiAgdGhpcy5jb21wb25lbnRzLkVtYmVkID0gRW1iZWQ7XG4gIHRoaXMuY29tcG9uZW50cy5JZiA9IElmO1xuICB0aGlzLmNvbXBvbmVudHMuSW5jbHVkZSA9IEluY2x1ZGU7XG4gIHRoaXMuY29tcG9uZW50cy5JbnB1dCA9IElucHV0O1xuICB0aGlzLmNvbXBvbmVudHMuSWZyYW1lID0gSWZyYW1lO1xuICB0aGlzLmNvbXBvbmVudHMuSW1hZ2UgPSBJbWFnZTtcbiAgdGhpcy5jb21wb25lbnRzLk9iamVjdCA9IE9iamVjdHM7XG4gIHRoaXMuY29tcG9uZW50cy5SYWRpbyA9IFJhZGlvO1xuICB0aGlzLmNvbXBvbmVudHMuUm91dGUgPSBSb3V0ZTtcbiAgdGhpcy5jb21wb25lbnRzLlNlbGVjdCA9IFNlbGVjdDtcbiAgdGhpcy5jb21wb25lbnRzLlNvdXJjZSA9IFNvdXJjZTtcbiAgdGhpcy5jb21wb25lbnRzLlRleHQgPSBUZXh0O1xuICB0aGlzLmNvbXBvbmVudHMuVGV4dGFyZWEgPSBUZXh0YXJlYTtcbiAgdGhpcy5jb21wb25lbnRzLlRyYWNrID0gVHJhY2s7XG4gIHRoaXMuY29tcG9uZW50cy5VcmwgPSBVcmw7XG4gIHRoaXMuY29tcG9uZW50cy5WaWRlbyA9IFZpZGVvO1xuICB0aGlzLnNlcnZpY2VzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICB0aGlzLnNlcnZpY2VzLnJvdXRlciA9IHJvdXRlcjtcbiAgdGhpcy5zZXJ2aWNlcy5zdG9yZSA9IHN0b3JlO1xuXG4gIHRoaXMuZGVmaW5lKCk7XG4gIHRoaXMuZXJyb3JIYW5kbGluZygpO1xuICB0aGlzLmlzb2xhdGVFdmVudHMoKTtcbiAgdGhpcy5pc29sYXRlQXJyYXlQcm90b3R5cGUoKTtcbiAgdGhpcy5pc29sYXRlV2luZG93RnVuY3Rpb25zKCk7IFxuICBcbiAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuX19kZWZhdWx0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLl9fZGVmYXVsdHNbaV0oKTtcbiAgfVxufVxuXG4vKipcbiAqIERlZmluZSBhbGwgZGVmYXVsdCBjb21wb25lbnRzXG4gKi9cbkFraWxpLmRlZmluZSA9IGZ1bmN0aW9uICgpIHtcbiAgQS5kZWZpbmUoKTtcbiAgQXVkaW8uZGVmaW5lKCk7XG4gIENvbnRlbnQuZGVmaW5lKCk7XG4gIENvbXBvbmVudC5kZWZpbmUoKTtcbiAgRW1iZWQuZGVmaW5lKCk7XG4gIEZvci5kZWZpbmUoKTtcbiAgSW5jbHVkZS5kZWZpbmUoKTtcbiAgSWZyYW1lLmRlZmluZSgpO1xuICBJbWFnZS5kZWZpbmUoKTtcbiAgSW5wdXQuZGVmaW5lKCk7XG4gIElmLmRlZmluZSgpO1xuICBPYmplY3RzLmRlZmluZSgpO1xuICBSYWRpby5kZWZpbmUoKTtcbiAgUm91dGUuZGVmaW5lKCk7XG4gIFNlbGVjdC5kZWZpbmUoKTtcbiAgU291cmNlLmRlZmluZSgpO1xuICBUZXh0YXJlYS5kZWZpbmUoKTtcbiAgVHJhY2suZGVmaW5lKCk7XG4gIFZpZGVvLmRlZmluZSgpO1xufTtcblxuLyoqXG4gKiBTZXQgZGVmYXVsdHNcbiAqIFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gKi9cbkFraWxpLmRlZmF1bHRzID0gZnVuY3Rpb24gKGZuKSB7ICBcbiAgdGhpcy5fX2RlZmF1bHRzLnB1c2goZm4pO1xuICBmbigpO1xufVxuXG4vKipcbiAqIENsZWFyIHRoZSBnbG9iYWwgY29udGV4dFxuICovXG5Ba2lsaS5jbGVhckdsb2JhbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMuX19jbGVhcmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVtrZXldID0gdGhpcy5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yIChsZXQga2V5IGluIHRoaXMuX193aW5kb3cuQXJyYXkucHJvdG90eXBlKSB7XG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldO1xuICB9XG5cbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5vcHRpb25zLmdsb2JhbHMpIHtcbiAgICB0aGlzLm9wdGlvbnMuZ2xvYmFsc1trZXldID0gdGhpcy51bndyYXAodGhpcy5vcHRpb25zLmdsb2JhbHNba2V5XSk7XG4gIH1cblxuICB3aW5kb3cuc2V0VGltZW91dCA9IHRoaXMuX193aW5kb3cuc2V0VGltZW91dDtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbDtcbiAgd2luZG93LlByb21pc2UgPSB0aGlzLl9fd2luZG93LlByb21pc2U7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX19vbkVycm9yKTtcbiAgdGhpcy5fX2NsZWFyZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBKb2luIGJpbmRpbmcga2V5c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgYmluZGluZyBrZXlzXG4gKi9cbkFraWxpLmpvaW5CaW5kaW5nS2V5cyA9IGZ1bmN0aW9uIChrZXlzKSB7XG4gIHJldHVybiBrZXlzLm1hcChlbCA9PiBlbC50b1N0cmluZygpKS5qb2luKCcuJyk7XG59O1xuXG4vKipcbiAqIEFkZCBzY29wZSB0byB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0gc2NvcGVcbiAqL1xuQWtpbGkuYWRkU2NvcGUgPSBmdW5jdGlvbiAoc2NvcGUpIHtcbiAgaWYgKHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgU2NvcGUgbmFtZSAke3Njb3BlLl9fbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuXG4gIHRoaXMuX19zY29wZXNbc2NvcGUuX19uYW1lXSA9IHNjb3BlO1xufTtcblxuLyoqXG4gKiBHZXQgc2NvcGUgZnJvbSB0aGUgc2NvcGVzIGxpc3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIHNjb3BlIG5hbWVcbiAqIEByZXR1cm5zIHtTY29wZX1cbiAqL1xuQWtpbGkuZ2V0U2NvcGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogRGVsZXRlIHNjb3BlIGZyb20gdGhlIHNjb3BlcyBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzY29wZSBuYW1lXG4gKi9cbkFraWxpLnJlbW92ZVNjb3BlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgY29uc3Qgc2NvcGUgPSB0aGlzLl9fc2NvcGVzW25hbWVdO1xuICBzY29wZS5fX2VsID0gbnVsbDtcbiAgc2NvcGUuX19jb21wb25lbnQgPSBudWxsO1xuICBzY29wZS5fX3BhcmVudCA9IG51bGw7XG4gIHRoaXMuX19zY29wZXNbbmFtZV0gPSBudWxsO1xuICBkZWxldGUgdGhpcy5fX3Njb3Blc1tuYW1lXTtcbn07XG5cbi8qKlxuICogR2V0IGFsbCBlbGVtZW50cyB3aXRoIGF0dGFjaGVkIEFraWxpIGNvbXBvbmVudHNcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0cmVlPXRydWVdIC0gcmV0dXJuIGFycmF5IG9mIHRoZSBwYXJlbnRzIGlmIHRydWUsIGNsb3Nlc3QgcGFyZW50IGlmIGZhbHNlXG4gKiBAcmV0dXJucyB7QXJyYXl8RWxlbWVudHxudWxsfVxuICovXG5Ba2lsaS5nZXRBa2lsaVBhcmVudHMgPSBmdW5jdGlvbiAoZWwsIHRyZWUgPSB0cnVlKSB7XG4gIGxldCBhcnIgPSBbXTtcblxuICBmdW5jdGlvbiBjaGVjayhub2RlKSB7XG4gICAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXJlbnROb2RlLl9fYWtpbGkpIHtcbiAgICAgIGFyci5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XG5cbiAgICAgIGlmICghdHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2sobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGNoZWNrKGVsKTtcbiAgcmV0dXJuIHRyZWU/IGFycjogYXJyWzBdO1xufTtcblxuLyoqXG4gKiBTZXQgZWxlbWVudCBpbm5lciBodG1sIHdpdGggY29udGVudCByZXBsYWNlbWVudFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiPGk+SGVsbG88L2k+PGI+V29ybGQ8L2I+XCJcbiAqIGVsLmlubmVySFRNTCA9IFwiPGI+V29ybGQ8L2I+XCI7XG4gKiBBa2lsaS5zZXRUZW1wbGF0ZShlbCwgXCI8aT5IZWxsbzwvaT4ke3RoaXMuX19jaGlsZHJlbn1cIik7XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChlbCwgdGVtcGxhdGUpIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXCR7KCgoPyFcXCR7KVxccyp0aGlzXFwuX19jb250ZW50XFxzKikqKX0vLCBlbC5pbm5lckhUTUwpO1xuICBlbC5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcbiAgcmV0dXJuIGVsLmlubmVySFRNTDtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgdW5pcXVlIHNjb3BlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5Ba2lsaS5jcmVhdGVTY29wZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB1dGlscy5jcmVhdGVSYW5kb21TdHJpbmcoMTYsIHN0ciA9PiAhIXRoaXMuX19zY29wZXNbc3RyXSk7XG59O1xuXG4vKipcbiAqIElzb2xhdGUgdGhlIHNjb3BlIGNoYW5nZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHsgXG4gIGlmICh0aGlzLl9faXNvbGF0aW9uKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cblxuICB0aGlzLl9faXNvbGF0aW9uID0ge307XG4gIGxldCByZXMgPSBmbigpO1xuICBsZXQgcHJvcHMgPSBbXTtcblxuICBmb3IgKGxldCBrIGluIHRoaXMuX19pc29sYXRpb24pIHtcbiAgICBwcm9wcy5wdXNoKHRoaXMuX19pc29sYXRpb25ba10pO1xuICB9XG5cbiAgdGhpcy5fX2lzb2xhdGlvbiA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBwcm9wcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBwcm9wID0gcHJvcHNbaV07XG4gICAgY29uc3QgdmFsID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgXG4gICAgcHJvcC5jb21wb25lbnQuX19pc1Jlc29sdmVkICYmIHByb3AuY29tcG9uZW50Ll9fdHJpZ2dlclN0b3JlQW5kQXR0cihwcm9wLmtleXMpO1xuICAgIHByb3AuY29tcG9uZW50Ll9fZXZhbHVhdGVCeUtleXMocHJvcC5rZXlzLCB2YWwsIHByb3AuaXNEZWxldGVkKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFN0b3AgZXZhbHVhdGlvbiBiZWZvcmUgdGhlIGZ1bmN0aW9uIGFuZCBjb250aW51ZSBhZnRlclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQWtpbGkudW5ldmFsdWF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuX19ldmFsdWF0aW9uO1xuICBsZXQgcmVzO1xuICB0aGlzLl9fZXZhbHVhdGlvbiA9IG51bGw7XG4gIHJlcyA9IGZuKCk7XG4gIHRoaXMuX19ldmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgb25seSByb290IHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLndyYXBwaW5nID0gZnVuY3Rpb24gKGZuKSB7XG4gIGlmKHRoaXMuX193cmFwcGluZykge1xuICAgIHJldHVybiBmbigpO1xuICB9XG4gIFxuICB0aGlzLl9fd3JhcHBpbmcgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTsgIFxuICB0aGlzLl9fd3JhcHBpbmcgPSBmYWxzZTsgIFxuICByZXR1cm4gcmVzOyAgIFxufVxuXG4vKipcbiAqIFN0b3AgaXNvbGF0aW9uIGJlZm9yZSB0aGUgZnVuY3Rpb24gYW5kIGNvbnRpbnVlIGFmdGVyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5Ba2lsaS51bmlzb2xhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgbGV0IGlzb2xhdGlvbiA9IHRoaXMuX19pc29sYXRpb247XG4gIGxldCByZXM7XG4gIHRoaXMuX19pc29sYXRpb24gPSBudWxsO1xuICByZXMgPSBmbigpO1xuICB0aGlzLl9faXNvbGF0aW9uID0gaXNvbGF0aW9uO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBSdW4gdGhlIGZ1bmN0aW9uIG9uIHRoZSBuZXh0IHRpY2tcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkFraWxpLm5leHRUaWNrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBzZXRUaW1lb3V0KCgpID0+IFByb21pc2UucmVzb2x2ZShmbigpKS50aGVuKHJlcykpKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zPXt9XVxuICogQHJldHVybnMgeyp9XG4gKi9cbkFraWxpLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgcmVjb21waWxlID0gb3B0aW9ucy5yZWNvbXBpbGU7XG4gIGxldCBjb21wb25lbnQgPSBlbC5fX2FraWxpO1xuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBpZiAocmVjb21waWxlKSB7XG4gICAgICBjb21wb25lbnQuX19yZWNvbXBpbGUocmVjb21waWxlID09PSB0cnVlPyB7fTogcmVjb21waWxlKTtcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGlzUm9vdCA9IGVsID09PSB0aGlzLl9fcm9vdDtcbiAgbGV0IGNvbXBvbmVudE5hbWUgPSB1dGlscy50b0Rhc2hDYXNlKGVsLmdldEF0dHJpYnV0ZSgnY29tcG9uZW50JykgfHwgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgbGV0IF9Db21wb25lbnQgPSB0aGlzLl9fY29tcG9uZW50c1tjb21wb25lbnROYW1lXTtcblxuICBDSEVDS19BTElBU0VTOiBpZiAoIV9Db21wb25lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3JzID0gT2JqZWN0LmtleXModGhpcy5fX2FsaWFzZXMpO1xuXG4gICAgaWYgKCFzZWxlY3RvcnMubGVuZ3RoKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGxldCBzZWxlY3RvckFsbCA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG5cbiAgICBpZiAoIWVsLm1hdGNoZXMoc2VsZWN0b3JBbGwpKSB7XG4gICAgICBicmVhayBDSEVDS19BTElBU0VTO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gc2VsZWN0b3JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHNlbGVjdG9yID0gc2VsZWN0b3JzW2ldO1xuXG4gICAgICBpZiAoZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgX0NvbXBvbmVudCA9IHRoaXMuX19jb21wb25lbnRzW3RoaXMuX19hbGlhc2VzW3NlbGVjdG9yXV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghX0NvbXBvbmVudCAmJiAhaXNSb290KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFfQ29tcG9uZW50KSB7XG4gICAgX0NvbXBvbmVudCA9IHRoaXMuQ29tcG9uZW50O1xuICB9XG5cbiAgaWYgKF9Db21wb25lbnQubWF0Y2hlcyAmJiAhZWwubWF0Y2hlcyhfQ29tcG9uZW50Lm1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50ID0gbmV3IF9Db21wb25lbnQoZWwsIHt9KTsgIFxuICBcbiAgaWYgKGNvbXBvbmVudC5fX2NhbmNlbGxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKEFraWxpLmdldEFraWxpUGFyZW50cyhlbCkuZmluZChwID0+IHAuX19ha2lsaS5fX3ByZXZlbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29tcG9uZW50Ll9fY3JlYXRlKCk7XG4gIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgdGhlIGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Ba2lsaS5jb21waWxlID0gZnVuY3Rpb24gKHJvb3QsIG9wdGlvbnMgPSB7IHJlY29tcGlsZTogZmFsc2UgfSkgeyAgXG4gIGxldCBlbGVtZW50cyA9IFtdO1xuXG4gIGNvbnN0IG5lc3RlZEluaXRpYWxpemluZyA9IChlbCkgPT4ge1xuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmluaXRpYWxpemUoZWwsIG9wdGlvbnMpO1xuICAgIGxldCBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICAgIGNvbXBvbmVudCAmJiBlbGVtZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXN0ZWRJbml0aWFsaXppbmcoY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBcbiAgbmVzdGVkSW5pdGlhbGl6aW5nKHJvb3QpO1xuICBsZXQgcCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldOyAgICBcbiAgICBwLnB1c2goY29tcG9uZW50Ll9fY29tcGlsZSgpKTsgICAgXG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocCkudGhlbigoKSA9PiB7XG4gICAgbGV0IHIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGNvbXBvbmVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgci5wdXNoKGNvbXBvbmVudC5fX3Jlc29sdmUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudCBvciBnZXQgaXQgaWYgZm4gaXMgbm90IHBhc3NlZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0NvbXBvbmVudH0gW2ZuXVxuICovXG5Ba2lsaS5jb21wb25lbnQgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jb21wb25lbnRzW25hbWVdIHx8IG51bGw7XG4gIH1cbiAgXG4gIGlmICh0aGlzLl9fY29tcG9uZW50c1tuYW1lXSAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7ICBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgQ29tcG9uZW50ICR7bmFtZX0gYWxyZWFkeSB3YXMgYWRkZWRgKTtcbiAgfVxuXG4gIHRoaXMuX19jb21wb25lbnRzW25hbWVdID0gZm47XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xuQWtpbGkucmVtb3ZlQ29tcG9uZW50ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX19jb21wb25lbnRzW25hbWVdO1xufTtcblxuLyoqXG4gKiBSZWdpc3RlciB0aGUgc2VsZWN0b3IgYWxpYXMgb3IgZ2V0IGl0IGlmIGNvbXBvbmVudCBuYW1lIGlzIG5vdCBwYXNzZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBET00gc2VsZWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29tcG9uZW50TmFtZV1cbiAqL1xuQWtpbGkuYWxpYXMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbXBvbmVudE5hbWUgPSAnJykge1xuICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmICghY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gJiYgQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBBbGlhcyB3aXRoIHNlbGVjdG9yICR7c2VsZWN0b3J9IGFscmVhZHkgd2FzIGFkZGVkYCk7XG4gIH1cblxuICB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl0gPSBjb21wb25lbnROYW1lO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHNlbGVjdG9yIGFsaWFzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKi9cbkFraWxpLnJlbW92ZUFsaWFzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gIGRlbGV0ZSB0aGlzLl9fYWxpYXNlc1tzZWxlY3Rvcl07XG59O1xuXG4vKipcbiAqIElzb2xhdGUgYXJyYXkgcHJvdG90eXBlIGZ1bmN0aW9uc1xuICovXG5Ba2lsaS5pc29sYXRlQXJyYXlQcm90b3R5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuQXJyYXkgPSB7IHByb3RvdHlwZToge30gfTtcbiAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhBcnJheS5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0ga2V5c1tpXTtcbiAgICBsZXQgb2xkID0gQXJyYXkucHJvdG90eXBlW2tleV07XG5cbiAgICBpZiAodHlwZW9mIG9sZCAhPSAnZnVuY3Rpb24nIHx8IGtleSA9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9fd2luZG93LkFycmF5LnByb3RvdHlwZVtrZXldID0gb2xkO1xuXG4gICAgQXJyYXkucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gQWtpbGkudW5ldmFsdWF0ZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5fX2lzUHJveHkpIHtcbiAgICAgICAgICByZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBBa2lsaS5pc29sYXRlKCgpID0+IG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogSXNvbGF0ZSBzb21lIHdpbmRvdyBmdW5jdGlvbnNcbiAqL1xuQWtpbGkuaXNvbGF0ZVdpbmRvd0Z1bmN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX3dpbmRvdy5zZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgdGhpcy5fX3dpbmRvdy5zZXRJbnRlcnZhbCA9IHNldEludGVydmFsO1xuICB0aGlzLl9fd2luZG93LlByb21pc2UgPSB3aW5kb3cuUHJvbWlzZTtcbiAgd2luZG93LnNldFRpbWVvdXQgPSB0aGlzLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uKHdpbmRvdy5zZXRUaW1lb3V0LCAwKTtcbiAgd2luZG93LnNldEludGVydmFsID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuc2V0SW50ZXJ2YWwsIDApO1xuICBcbiAgaWYoIXdpbmRvdy5BS0lMSV9TU1IpIHtcbiAgICB3aW5kb3cuUHJvbWlzZS5jb25zdHJ1Y3RvciA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UuY29uc3RydWN0b3IpO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gdGhpcy5jcmVhdGVDYWxsYmFja0lzb2xhdGlvbih3aW5kb3cuUHJvbWlzZS5wcm90b3R5cGUudGhlbiwgWzAsICdsYXN0J10pO1xuICAgIHdpbmRvdy5Qcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IHRoaXMuY3JlYXRlQ2FsbGJhY2tJc29sYXRpb24od2luZG93LlByb21pc2UucHJvdG90eXBlLmNhdGNoKTtcbiAgfSAgXG59O1xuXG4vKipcbiAqIElzb2xhdGUgZXZlbnQgbGlzdGVuZXJzXG4gKi9cbkFraWxpLmlzb2xhdGVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX193aW5kb3cuRWxlbWVudCA9IHsgcHJvdG90eXBlOiB7fSB9O1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyO1xuICB0aGlzLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSA9IEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZTtcblxuICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19ha2lsaUxpc3RlbmVycztcbiAgICByZXR1cm4gQWtpbGkuX193aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYW1lLCBmbikge1xuICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKCF0aGlzLl9fYWtpbGlMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuX19ha2lsaUxpc3RlbmVycyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0gPSBbXTtcbiAgICB9XG4gICAgXG4gICAgaWYodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzWzFdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSAgICBcblxuICAgIHRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5wdXNoKHtcbiAgICAgIGxpbms6IGZuLFxuICAgICAgZm46IGFyZ3NbMV1cbiAgICB9KTtcblxuICAgIHJldHVybiBBa2lsaS5fX3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICghdGhpcy5fX2FraWxpTGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5fX2FraWxpTGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV1baV07XG5cbiAgICAgIGlmIChsaXN0ZW5lci5saW5rID09PSBmbikge1xuICAgICAgICB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBhcmdzWzFdID0gbGlzdGVuZXIuZm47XG4gICAgICAgIGktLTtcbiAgICAgICAgbC0tO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX19ha2lsaUxpc3RlbmVyc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYWtpbGlMaXN0ZW5lcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFraWxpLl9fd2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59O1xuXG4vKipcbiAqIFdyYXAgdGhlIGZ1bmN0aW9uIGNhbGxiYWNrIHRvIGFuIGlzb2xhdGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd8bnVtYmVyW118c3RyaW5nW119IFtwb3M9XCJsYXN0XCJdXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cbkFraWxpLmNyZWF0ZUNhbGxiYWNrSXNvbGF0aW9uID0gZnVuY3Rpb24gKGZuLCBwb3MgPSAnbGFzdCcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAhQXJyYXkuaXNBcnJheShwb3MpICYmIChwb3MgPSBbcG9zXSk7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IHBvcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBudW0gPSBwb3NbaV07XG4gICAgICBsZXQgaW5kZXggPSBudW07XG4gICAgICBsZXQgY2FsbGJhY2sgPSBhcmdzW251bV07XG5cbiAgICAgIGlmKG51bSA9PSAnbGFzdCcpIHtcbiAgICAgICAgaW5kZXggPSBhcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNhbGxiYWNrID0gYXJnc1tpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZighY2FsbGJhY2suX19pc29sYXRlZCkge1xuICAgICAgICBhcmdzW2luZGV4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gQWtpbGkuaXNvbGF0ZSgoKSA9PiBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZ3NbaW5kZXhdLCAnX19pc29sYXRlZCcsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogY2FsbGJhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcmFwIG9iamVjdHMvY2xhc3NlcyB0byBpc29sYXRlIGFuZCB1bmV2YWx1YXRlIGRhdGFcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIFxuICovXG5Ba2lsaS53cmFwID0gZnVuY3Rpb24gKG9iaiwgb3B0aW9ucyA9IHt9KSB7XG4gIGxldCBjdXJyZW50ID0gb2JqO1xuXG4gIGlmKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJykge1xuICAgIG9iaiA9IHRoaXMud3JhcEZ1bmN0aW9uKG9iaiwgb3B0aW9ucyk7XG5cbiAgICBpZihvYmogPT09IGN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYoIW9iaiB8fCB0eXBlb2Ygb2JqICE9ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG5cbiAgZm9yKGxldCBrID0gMCwgYyA9IGtleXMubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgbGV0IGtleSA9IGtleXNba107XG4gICAgbGV0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KTtcblxuICAgIGlmKCFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSB8fCAhZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5yZXZlcnNlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogb2JqW2tleV0uX19ha2lsaSB8fCBvYmpba2V5XSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5kZXNjcmlwdG9yLCB2YWx1ZTogdGhpcy53cmFwKG9ialtrZXldLCBvcHRpb25zKSB9KTtcbiAgfSBcbiAgXG4gIHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIFVud3JhcCBvYmplY3RzL2NsYXNzZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gb2JqXG4gKi9cbkFraWxpLnVud3JhcCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMud3JhcChvYmosIHsgcmV2ZXJzZTogdHJ1ZSB9KTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIGEgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuQWtpbGkud3JhcEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKGZuLl9fYWtpbGkpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBjb25zdCBha2lsaVdyYXBwZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihvcHRpb25zLnRhZyAmJiBBa2lsaS5fX2V2YWx1YXRpb24pIHtcbiAgICAgIEFraWxpLmFkZFRhZyhvcHRpb25zLnRhZywgQWtpbGkuX19ldmFsdWF0aW9uLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBBa2lsaS53cmFwcGluZygoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGZuKTtcbiAgYWtpbGlXcmFwcGVkRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgIGFraWxpV3JhcHBlZEZ1bmN0aW9uW2tleV0gPSBmbltrZXldO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFraWxpV3JhcHBlZEZ1bmN0aW9uLCAnX19ha2lsaScsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZm5cbiAgfSk7XG5cbiAgcmV0dXJuIGFraWxpV3JhcHBlZEZ1bmN0aW9uO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIHRhZ1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuQWtpbGkuYWRkVGFnID0gZnVuY3Rpb24gKHRhZywgbm9kZSkge1xuICBpZih0aGlzLmhhc1RhZyh0YWcsIG5vZGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIHRoaXMuX190YWdzW25vZGUuX19uYW1lXSA9IHt9OyAgICBcbiAgfVxuXG4gIGlmKCF0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1bdGFnXSkge1xuICAgIHRoaXMuX190YWdzW25vZGUuX19uYW1lXVt0YWddID0gW107ICAgIFxuICB9XG5cbiAgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10ucHVzaCh7IG5vZGUgfSk7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHRhZyBleGlzdHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtOb2RlfSBbbm9kZV1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Ba2lsaS5oYXNUYWcgPSBmdW5jdGlvbih0YWcsIG5vZGUpIHtcbiAgaWYoIW5vZGUpe1xuICAgIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzKSB7XG4gICAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgICBpZihrID09IHRhZykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYoIXRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIHJldHVybiBmYWxzZTsgICAgXG4gIH1cblxuICBpZighdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdW3RhZ10pIHtcbiAgICByZXR1cm4gZmFsc2U7ICAgIFxuICB9IFxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgdGFnXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdGFnXVxuICogQHBhcmFtIHtOb2RlfE5vZGVbXX0gW25vZGVdXG4gKi9cbkFraWxpLnJlbW92ZVRhZyA9IGZ1bmN0aW9uICh0YWcsIG5vZGUpIHtcbiAgaWYodHlwZW9mIHRhZyA9PSAnb2JqZWN0Jykge1xuICAgIG5vZGUgPSB0YWc7XG4gICAgdGFnID0gdW5kZWZpbmVkOyAgICBcbiAgfVxuXG4gIGlmKCFub2RlKSB7XG4gICAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3MpIHtcbiAgICAgIGZvcihsZXQgayBpbiB0aGlzLl9fdGFnc1trZXldKSB7XG4gICAgICAgIGlmKGsgPT0gdGFnKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX190YWdzW2tleV1ba11cbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGlmKCFPYmplY3Qua2V5cyh0aGlzLl9fdGFnc1trZXldKS5sZW5ndGgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX190YWdzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuOyAgICBcbiAgfVxuXG4gIGlmKCF0YWcpIHsgICAgXG4gICAgIUFycmF5LmlzQXJyYXkobm9kZSkgJiYgKG5vZGUgPSBbbm9kZV0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBub2RlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZGVsZXRlIHRoaXMuX190YWdzW25vZGVbaV0uX19uYW1lXVxuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvcihsZXQga2V5IGluIHRoaXMuX190YWdzW25vZGUuX19uYW1lXSkge1xuICAgIGlmKGtleSA9PSB0YWcpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fdGFnc1tub2RlLl9fbmFtZV1ba2V5XTtcbiAgICB9XG4gIH1cblxuICBpZighT2JqZWN0LmtleXModGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdKS5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fX3RhZ3Nbbm9kZS5fX25hbWVdO1xuICB9XG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHRhZyBub2RlIGV4cHJlc3Npb25zXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqL1xuQWtpbGkudHJpZ2dlclRhZyA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgZm9yKGxldCBrZXkgaW4gdGhpcy5fX3RhZ3MpIHtcbiAgICBmb3IobGV0IGsgaW4gdGhpcy5fX3RhZ3Nba2V5XSkge1xuICAgICAgaWYoayA9PSB0YWcpIHtcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5fX3RhZ3Nba2V5XVtrXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG9iaiA9IGFycltpXTtcbiAgICAgICAgICBvYmoubm9kZS5fX2NvbXBvbmVudC5fX2V2YWx1YXRlTm9kZShvYmoubm9kZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXJyb3IgaGFuZGxpbmdcbiAqL1xuQWtpbGkuZXJyb3JIYW5kbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5fX29uRXJyb3IpO1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIGFuIGluaXRpYWxpemF0aW9uIHN0YXR1c1xuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdHVzXG4gKi9cbkFraWxpLnRyaWdnZXJJbml0ID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICBBa2lsaS5fX2luaXQgPSBzdGF0dXM7XG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnYWtpbGktaW5pdCcsIHsgZGV0YWlsOiBzdGF0dXMgfSkpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gW3Jvb3RdXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuQWtpbGkuaW5pdCA9IGZ1bmN0aW9uIChyb290KSB7XG4gIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgaWYoIShyb290IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb3QgZWxlbWVudCBtdXN0IGJlIGFuIGh0bWwgZWxlbWVudGApO1xuICB9XG5cbiAgaWYocm9vdCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcImh0bWxcIiBjYW4ndCBiZSB0aGUgcm9vdCBlbGVtZW50YCk7XG4gIH1cblxuICB0aGlzLl9fcm9vdCA9IHJvb3Q7XG4gIFxuICBpZih3aW5kb3cuQUtJTElfU0VSVkVSKSB7ICAgIFxuICAgIEFraWxpLmluaXRTZXJ2ZXJTaWRlSHRtbCh3aW5kb3cuQUtJTElfU0VSVkVSLmh0bWwpO1xuICAgIEFraWxpLmluaXRTZXJ2ZXJTaWRlUmVxdWVzdENhY2hlKHdpbmRvdy5BS0lMSV9TRVJWRVIucmVxdWVzdENhY2hlKTtcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuQUtJTElfQ0xJRU5UID0ge1xuICAgICAgaHRtbDogdGhpcy5wcmVwYXJlU2VydmVyU2lkZUh0bWwoKSAgICAgIFxuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHRoaXMuY29tcGlsZSh0aGlzLl9fcm9vdCkudGhlbigoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5fX2luaXQpIHtcbiAgICAgIHJldHVybiByb3V0ZXIuY2hhbmdlU3RhdGUoeyBpbml0OiB0cnVlIH0pO1xuICAgIH1cbiAgfSkudGhlbigoKSA9PiB7ICAgIFxuICAgIHdpbmRvdy5BS0lMSV9DTElFTlQgJiYgKHdpbmRvdy5BS0lMSV9DTElFTlQucmVxdWVzdENhY2hlID0gdGhpcy5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSgpKTtcbiAgICB0aGlzLnRyaWdnZXJJbml0KHRydWUpO1xuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VySW5pdChmYWxzZSk7XG4gICAgdGhyb3cgZXJyO1xuICB9KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgaHRtbFxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZUh0bWwgPSBmdW5jdGlvbiAoaHRtbCkge1xuICBmb3IgKGxldCBpID0gdGhpcy5fX3Jvb3QuYXR0cmlidXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgdGhpcy5fX3Jvb3QucmVtb3ZlQXR0cmlidXRlKHRoaXMuX19yb290LmF0dHJpYnV0ZXNbaV0ubmFtZSk7XG4gIH1cblxuICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcbiAgbGV0IGVsID0gZG9jLnF1ZXJ5U2VsZWN0b3IodGhpcy5fX3Jvb3QgPT09IGRvY3VtZW50LmJvZHk/ICdib2R5JzogJ2JvZHkgPiAqJyk7ICAgIFxuICB0aGlzLl9fcm9vdC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUw7XG5cbiAgZm9yIChsZXQgaSA9IGVsLmF0dHJpYnV0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBsZXQgYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG4gICAgdGhpcy5fX3Jvb3Quc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgYXR0ci52YWx1ZSk7XG4gIH0gIFxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgc2VydmVyLXNpZGUgcmVuZGVyaW5nIHJlcXVlc3QgY2FjaGVcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICovXG5Ba2lsaS5pbml0U2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgY29uc3QgaW5pdCA9IChpbnN0YW5jZSwgb2JqKSA9PiB7XG4gICAgZm9yKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICBpbnN0YW5jZS5fX2NhY2hlW2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH1cbiAgXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBrZXkgPT09ICdfX21haW4nPyByZXF1ZXN0OiByZXF1ZXN0Ll9faW5zdGFuY2VzW2tleV07XG4gICAgaW5pdChpbnN0YW5jZSwgb2JqW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogUHJlcGFyZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgaHRtbFxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZUh0bWwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9fcm9vdC5vdXRlckhUTUw7XG59XG5cbi8qKlxuICogUHJlcGFyZSBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgcmVxdWVzdCBjYWNoZVxuICovXG5Ba2lsaS5wcmVwYXJlU2VydmVyU2lkZVJlcXVlc3RDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGNhY2hlID0geyBfX21haW46IHJlcXVlc3QuX19jYWNoZSB9O1xuXG4gIGZvcihsZXQga2V5IGluIHJlcXVlc3QuX19pbnN0YW5jZXMpIHtcbiAgICBjYWNoZVtrZXldID0gcmVxdWVzdC5fX2luc3RhbmNlc1trZXldLl9fY2FjaGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGU7XG59XG5cbi8qKlxuICogRGVpbml0aWFsaXplIHRoZSBhcHBsaWNhdGlvblxuICovXG5Ba2lsaS5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY2xlYXJHbG9iYWxzKCk7XG4gIHJvdXRlci5kZWluaXQoKTtcbiAgcmVxdWVzdC5kZWluaXQoKTtcbiAgbGV0IHN0b3JlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JlLl9fdGFyZ2V0KTtcbiAgXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZGVsZXRlIHN0b3JlLl9fdGFyZ2V0W3N0b3JlS2V5c1tpXV07XG4gIH1cblxuICB0aGlzLnNldERlZmF1bHRzKCk7XG59O1xuXG53aW5kb3cuQWtpbGkgPSBBa2lsaTtcbmV4cG9ydCBkZWZhdWx0IEFraWxpO1xuQWtpbGkuc2V0RGVmYXVsdHMoKTsiLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vZXZlbnQtZW1pdHRlci5qcydcblxuLyoqXG4gKiBBbiBvYmplY3Qgd2l0aCBhIGxvdCBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvdXRpbHN9XG4gKi9cbmNvbnN0IHV0aWxzID0ge307XG5cbi8qKlxuICogQ3JlYXRlIGNsYXNzIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwicmVkIGFjdGl2ZVwiXG4gKiB1dGlscy5jbGFzcyh7cmVkOiB0cnVlLCBhY3RpdmU6IHRydWUsIGdyZWVuOiBmYWxzZX0pO1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLmNsYXNzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBjbGFzc2VzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIGNsYXNzZXMucHVzaChrKTtcbiAgfVxuXG4gIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHN0eWxlIGF0dHJpYnV0ZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFwiY29sb3I6cmVkO3dpZHRoOjEwcHhcIlxuICogdXRpbHMuc3R5bGUoe2NvbG9yOiBcInJlZFwiLCBiYWNrZ3JvdW5kOiBmYWxzZSwgd2lkdGg6IFwiMTBweFwifSk7XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuc3R5bGUgPSBmdW5jdGlvbihvYmopIHtcbiAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgc3R5bGVzID0gW107XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IGsgPSBrZXlzW2ldO1xuICAgIGxldCB2YWwgPSBvYmpba107XG4gICAgdmFsICYmIHN0eWxlcy5wdXNoKGAke3RoaXMudG9EYXNoQ2FzZShrKX06JHt2YWx9YCk7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzLmpvaW4oJzsnKTtcbn07XG5cbi8qKlxuICogRXh0ZW5kZWQgc3BsaXQgb2YgdGhlIHN0cmluZ1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbXCJIZWxsb1wiLCBcIldvcmxkXCJdXG4gKiB1dGlscy5zcGxpdChcIkhlbGxvIFdvcmxkXCIsIFwiIFwiKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWyd4ID0gNScsICcgeSA9IFwiMTsyOzNcIiddXG4gKiB1dGlscy5zcGxpdCgneCA9IDU7IHkgPSBcIjE7MjszXCInLCBcIjtcIiwgWydcIiddKTtcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdHIgXG4gKiBAcGFyYW0ge3N0cmluZ30gW2RlbF1cbiAqIEBwYXJhbSB7c3RyaW5nW119IFtleGNsdWRlXSBcbiAqL1xudXRpbHMuc3BsaXQgPSBmdW5jdGlvbihzdHIsIGRlbCA9ICcnLCBleGNsdWRlID0gW10pIHtcblx0Y29uc3QgZXhwcyA9IFtdOyAgICAgXG4gIGxldCBsYXN0ID0gJyc7XG5cbiAgaWYoIWRlbCkge1xuICAgIHJldHVybiBzdHIuc3BsaXQoJycpO1xuICB9XG4gIGVsc2UgaWYoZGVsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHN0ci5zcGxpdChkZWwpO1xuICB9XG4gIGVsc2UgaWYoc3RyLmluZGV4T2YoZGVsKSA9PSAtMSkge1xuICAgIGxhc3QgPSBzdHI7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgYXJyID0gc3RyLnNwbGl0KCcnKTtcbiAgICBsZXQgb3BlbiA9ICcnOyBcblxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gYXJyW2ldO1xuICAgICAgbGV0IGluZGV4ID0gZXhjbHVkZS5pbmRleE9mKHZhbCk7ICAgICAgXG5cbiAgICAgIGlmKGluZGV4ID4gLTEgJiYgKCFvcGVuIHx8IG9wZW4gPT0gdmFsKSkge1xuICAgICAgICAhb3Blbj8gb3BlbiA9IGV4Y2x1ZGVbaW5kZXhdOiBvcGVuID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKHZhbCA9PSBkZWwgJiYgIW9wZW4pIHtcbiAgICAgICAgZXhwcy5wdXNoKGxhc3QpO1xuICAgICAgICBsYXN0ID0gJyc7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsYXN0ICs9IHZhbDtcbiAgICB9XG4gIH1cblxuICBsYXN0ICYmIGV4cHMucHVzaChsYXN0KTtcbiAgcmV0dXJuIGV4cHM7XG59XG5cbi8qKlxuICogRmlsdGVyIGFuIGFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgWzEsIDExXVxuICogdXRpbHMuZmlsdGVyKFsxLCAyLCAzLCAxMV0sICcxJyk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgJ3gnKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxfSwge3g6IDExfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDF9LCB7eDogMn0sIHt4OiAzfSwge3g6IDExfV0sICcxJywgWyd4J10pO1xuICogXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMTF9XVxuICogdXRpbHMuZmlsdGVyKFt7eDogMX0sIHt4OiAyfSwge3g6IDN9LCB7eDogMTF9XSwgJzEnLCBbWyd4J11dKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19XVxuICogdXRpbHMuZmlsdGVyKFt7eDoge3k6IDF9fSwge3g6IHt5OiAyfX1dLCAnMScsIFtbJ3gnLCAneSddXSk7XG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDoxLCB5OiAyfSwge3g6IDIsIHk6MX1dIFxuICogdXRpbHMuZmlsdGVyKFt7eDogMSwgeTogMn0sIHt4OiAzLCB5OiAzfSwge3g6IDIsIHk6IDF9XSwgJzEnLCBbJ3gnLCAneSddKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OjEsIHk6IDJ9LCB7eDogMiwgeToxfV1cbiAqIHV0aWxzLmZpbHRlcihbe3g6IDEsIHk6IDJ9LCB7eDogMywgeTogM30sIHt4OiAyLCB5OiAxfV0sICcxJywgW1sneCddLCBbJ3knXV0pO1xuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfGZ1bmN0aW9ufSBoYW5kbGVyIC0gdHlwZSBvZiBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nW118c3RyaW5nfSBba2V5c10gLSBmaWx0ZXIgaW4gdGhlIGtleXMgaWYgYXJyYXkgZWxlbWVudHMgYXJlIG9iamVjdFxuICogQHJldHVybnMge0FycmF5fSAtIHJldHVybnMgb3RoZXIgYXJyYXlcbiAqL1xudXRpbHMuZmlsdGVyID0gZnVuY3Rpb24gKGFyciwgaGFuZGxlciwga2V5cyA9IG51bGwpIHtcbiAgbGV0IHJlcyA9IFtdO1xuXG4gIGlmIChrZXlzICYmICFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBoYW5kbGVyICE9ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBzdHIgPSBoYW5kbGVyPyAoaGFuZGxlciArICcnKS50b0xvd2VyQ2FzZSgpOiAnJztcbiAgICBoYW5kbGVyID0gdmFsID0+ICh2YWw/ICh2YWwgKyAnJykudG9Mb3dlckNhc2UoKTogJycpLm1hdGNoKHN0cik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgaXRlbSA9IGFycltpXTtcbiAgICBsZXQgZmlsdGVyZWQgPSBmYWxzZTtcblxuICAgIGlmKCFrZXlzICYmIGhhbmRsZXIoaXRlbSkpIHtcbiAgICAgIGZpbHRlcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZihrZXlzKSB7XG4gICAgICBmb3IobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICAgIGtleSA9IEFycmF5LmlzQXJyYXkoa2V5KT8ga2V5OiBba2V5XTtcbiAgICAgICAgbGV0IHZhbCA9IGtleT8gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGl0ZW0pOiBpdGVtO1xuICAgIFxuICAgICAgICBpZiAoaGFuZGxlcih2YWwpKSB7XG4gICAgICAgICAgZmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlsdGVyZWQgJiYgcmVzLnB1c2goaXRlbSk7ICAgXG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBPcmRlciBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFsxLCAyLCAzXVxuICogdXRpbHMuc29ydChbMywgMiwgMV0sIHRydWUpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFszLCAyLCAxXVxuICogdXRpbHMuc29ydChbMSwgMiwgM10sIGZhbHNlKTtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCBbWyd4J11dLCBbdHJ1ZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDN9LCB7eDogMn0sIHt4OiAxfV0sIFsneCddLCB0cnVlKTtcbiAqIHV0aWxzLnNvcnQoW3t4OiAzfSwge3g6IDJ9LCB7eDogMX1dLCAneCcpO1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIFt7eDogM30sIHt4OiAyfSwge3g6IDF9XVxuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFtbJ3gnXV0sIFtmYWxzZV0pO1xuICogdXRpbHMuc29ydChbe3g6IDF9LCB7eDogMn0sIHt4OiAzfV0sIFsneCddLCBmYWxzZSk7XG4gKiB1dGlscy5zb3J0KFt7eDogMX0sIHt4OiAyfSwge3g6IDN9XSwgJ3gnLCBmYWxzZSk7XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiAxLCB5OiAzfSwge3g6IDIsIHk6IDF9LCB7eDoyLCB5OiAyfV1cbiAqIHV0aWxzLnNvcnQoW3t4OiAyLCB5OiAyfSwge3g6IDIsIHk6IDF9LCB7eDogMiwgeTogM31dLCBbWyd4J10sIFsneSddXSwgW3RydWUsIHRydWVdKTtcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgW3t4OiB7eTogMX19LCB7eDoge3k6IDJ9fV1cbiAqIHV0aWxzLnNvcnQoW3t4OiB7eTogMn19LCB7eDoge3k6IDF9fV0sIFtbJ3gnLCAneSddXSwgW3RydWVdKTtcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Ym9vbGVhbnxBcnJheVtdfHN0cmluZ1tdfHN0cmluZ30gW2tleXNdXG4gKiBAcGFyYW0ge2Jvb2xlYW58Ym9vbGVhbltdfSBbb3JkZXJdIC0gcmV2ZXJzZSBvciBub3RcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xudXRpbHMuc29ydCA9IGZ1bmN0aW9uKGFyciwga2V5cyA9IHRydWUsIG9yZGVyID0gW10pIHtcbiAgYXJyID0gYXJyLnNsaWNlKCk7XG5cbiAgaWYgKGtleXMgPT09IHRydWUpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbdHJ1ZV07XG4gIH1cbiAgZWxzZSBpZiAoa2V5cyA9PT0gZmFsc2UpIHtcbiAgICBrZXlzID0gW107XG4gICAgb3JkZXIgPSBbZmFsc2VdO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAga2V5cyA9IFtrZXlzXTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShvcmRlcikpIHtcbiAgICBvcmRlciA9IFtvcmRlcl07XG4gIH1cblxuICBsZXQgbCA9IGtleXMubGVuZ3RoO1xuXG4gIGFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgY29uc3QgY2hlY2sgPSAoYSwgYiwgcmV2ZXJzZSA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYSA9IGEuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgYiA9IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IC0xOiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHJldmVyc2U/IDE6IC0xO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuXG4gICAgY29uc3QgbmV4dCA9ICgpID0+IHtcbiAgICAgIGlmIChpID49IGwpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5KSkge1xuICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgIH1cblxuICAgICAgbGV0IGFWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGEpO1xuICAgICAgbGV0IGJWID0gdGhpcy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXksIGIpO1xuICAgICAgbGV0IHJlcyA9IGNoZWNrKGFWLCBiViwgb3JkZXJbaV0gPT09IGZhbHNlKTtcblxuICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgICByZXR1cm4gbmV4dCgpO1xuICAgIH07XG5cbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBjaGVjayhhLCBiLCBvcmRlcltpXSA9PT0gZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIFJldHVybiBuZXcgb2JqZWN0IHdpdGggdGhlIHNwZWNpZmllZCBrZXlzXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHt4OiAxLCB6OiAxfVxuICogdXRpbHMuaW5jbHVkZUtleXMoe3g6IDEsIHk6IDEsIHo6IDF9LCBbJ3gnLCAneiddKTtcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICovXG51dGlscy5pbmNsdWRlS2V5cyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBsZXQgbmV3T2JqID0ge307XG4gIGxldCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgIGlmKGtleXMuaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKlxuICogUmV0dXJuIG5ldyBvYmplY3Qgd2l0aG91dCB0aGUgc3BlY2lmaWVkIGtleXNcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3g6IDEsIHo6IDF9XG4gKiB1dGlscy5pbmNsdWRlS2V5cyh7eDogMSwgeTogMSwgejogMX0sIFsneSddKTtcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICovXG51dGlscy5leGNsdWRlS2V5cyA9IGZ1bmN0aW9uKG9iaiwga2V5cykge1xuICBsZXQgbmV3T2JqID0ge307XG4gIGxldCBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gb2JqS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgIGlmKGtleXMuaW5kZXhPZihrZXkpID09IC0xKSB7XG4gICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHZhbHVlIGlzIGNvbXBvbmVudCBzY29wZSBwcm94eSBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzU2NvcGVQcm94eSA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gISEodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsLl9faXNQcm94eSk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSB2YWx1ZSBpcyBwbGFpbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnV0aWxzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiB0eXBlb2Ygb2JqID09ICdvYmplY3QnICYmIChvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheSkpO1xufTtcblxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnNdIFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgfHwgIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgbmVzdGVkOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCBwbGFpbjogZmFsc2UsIC4uLm9wdGlvbnMgfTtcblxuICBjb25zdCBuZXh0ID0gKG9iaikgPT4ge1xuICAgIGlmKG9wdGlvbnMucGxhaW4gJiYgIXRoaXMuaXNQbGFpbk9iamVjdChvYmopKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIG9iaiA9IHRoaXMuaXNTY29wZVByb3h5KG9iaik/IG9iai5fX3RhcmdldDogb2JqO1xuICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTogT2JqZWN0LmtleXMob2JqKTtcbiAgICBsZXQgbmV3T2JqID0gQXJyYXkuaXNBcnJheShvYmopPyBbXToge307XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICBsZXQgdmFsID0gb2JqW2tleV07XG4gICAgICB2YWwgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0JyAmJiBvcHRpb25zLm5lc3RlZD8gbmV4dCh2YWwpOiB2YWw7ICAgICAgXG4gICAgICBcbiAgICAgIGlmKCFvYmoucHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIHtcbiAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSxcbiAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBuZXdPYmpba2V5XSA9IHZhbDsgIFxuICAgIH1cblxuICAgIHJldHVybiBuZXdPYmo7XG4gIH1cblxuICByZXR1cm4gbmV4dCh2YWx1ZSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmFsdWUgdG8gYXR0cmlidXRlIGFwcHJvcHJpYXRlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm5zIHsqfVxuICovXG51dGlscy5tYWtlQXR0cmlidXRlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgRXZlbnRdJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICsgJyc7XG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xudXRpbHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSkgJiYgKGIgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKCk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEgPT09IG51bGwgfHwgYiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGEgPT09IGI7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgaWdub3JlVW5kZWZpbmVkOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBjb25zdCBjbGVhclVuZGVmaW5lZCA9ICh2YWwpID0+IHtcbiAgICAgIGxldCBvYmogPSBBcnJheS5pc0FycmF5KHZhbCk/IFtdOiB7fTtcbiAgICAgIGxldCBrZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXModmFsKTtcblxuICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YWxba2V5XSAhPT0gdW5kZWZpbmVkICYmIChvYmpba2V5XSA9IHZhbFtrZXldKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuaWdub3JlVW5kZWZpbmVkKSB7XG4gICAgICBhID0gY2xlYXJVbmRlZmluZWQoYSk7XG4gICAgICBiID0gY2xlYXJVbmRlZmluZWQoYik7XG4gICAgfVxuXG4gICAgbGV0IGFLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYSk7XG4gICAgbGV0IGJLZXlzID0gIW9wdGlvbnMuZW51bWVyYWJsZT8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKTogT2JqZWN0LmtleXMoYik7XG4gICAgXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhID0gdGhpcy5pc1Njb3BlUHJveHkoYSk/IGEuX190YXJnZXQ6IGE7XG4gICAgYiA9IHRoaXMuaXNTY29wZVByb3h5KGIpPyBiLl9fdGFyZ2V0OiBiO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFLZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gYUtleXNbaV07XG5cbiAgICAgIGlmICghdGhpcy5jb21wYXJlKGFba2V5XSwgYltrZXldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGhhc2ggZnJvbSBhIHN0cmluZ1xuICogXG4gKiBAcGFyYW0geyp9IHNvdXJjZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY3JlYXRlSGFzaCA9IGZ1bmN0aW9uKHNvdXJjZSkge1xuICB0eXBlb2Ygc291cmNlID09ICdvYmplY3QnICYmIChzb3VyY2UgPSBKU09OLnN0cmluZ2lmeShzb3VyY2UpKVxuICB0eXBlb2Ygc291cmNlICE9ICdzdHJpbmcnICYmIChzb3VyY2UgPSAn4qCAJyArIFN0cmluZyhzb3VyY2UpKTtcbiAgbGV0IGhhc2ggPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoYXIgPSBzb3VyY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xuICAgIGhhc2ggPSBoYXNoICYgaGFzaDtcbiAgfVxuXG4gIHJldHVybiBoYXNoICsgJyc7XG59XG5cbi8qKlxuICogRW5jb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmYW1wIG1lXCJcbiAqIHV0aWxzLmVuY29kZUh0bWxFbnRpdGllcygneW91ICYgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZW5jb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdmFsdWU7XG4gIGVsLnRleHRDb250ZW50ID0gaHRtbDtcbiAgdmFsdWUgPSBlbC5pbm5lckhUTUw7XG4gIGVsLnJlbW92ZSgpO1xuICBlbCA9IG51bGw7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogRGVjb2RlIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyBcInlvdSAmIG1lXCJcbiAqIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcygneW91ICZhbXAgbWUnKTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuZGVjb2RlSHRtbEVudGl0aWVzID0gZnVuY3Rpb24oaHRtbCkge1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGxldCB2YWx1ZTtcbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgZWwucmVtb3ZlKCk7XG4gIGVsID0gbnVsbDtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuLyoqXG4gKiBDaGFuZ2Ugc3RyaW5nIGZyb20gZGFzaCB0byBjYW1lbCBjYXNlIGZvcm1hdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnV0aWxzLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobSwgYykgPT4gYy50b1VwcGVyQ2FzZSgpKTtcbn07XG5cbi8qKlxuICogQ2FwaXRhbGl6ZSB0aGUgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG4vKipcbiAqIENoYW5nZSBzdHJpbmcgZnJvbSBjYW1lbCB0byBkYXNoIGNhc2UgZm9ybWF0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudXRpbHMudG9EYXNoQ2FzZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKG0sIGMpID0+IGAtJHtjLnRvTG93ZXJDYXNlKCl9YCk7XG59O1xuXG4vKipcbiAqIEdldCBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5IGJ5IGFycmF5IGtleXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHJldHVybnMgeyp9XG4gKi9cbnV0aWxzLmdldFByb3BlcnR5QnlLZXlzID0gZnVuY3Rpb24oa2V5cywgb2JqZWN0KSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYgKG9ba10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGN1cnJlbnQgPSBvW2tdKTtcbiAgICByZXR1cm4gb1trXTtcbiAgfSwgb2JqZWN0KTtcblxuICByZXR1cm4gY3VycmVudDtcbn07XG5cbi8qKlxuICogQ2hlY2sgbmVzdGVkIG9iamVjdHMgdHJlZSBoYXMgcHJvcGVydHkgb3Igbm90XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMgdHJ1ZVxuICogdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoWyd4JywgJ3knXSwge3g6IHt5OiA1fX0pO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG51dGlscy5oYXNQcm9wZXJ0eUJ5S2V5cyA9IGZ1bmN0aW9uKGtleXMsIG9iamVjdCkge1xuICBsZXQgaGFzID0gZmFsc2U7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIGtleXMucmVkdWNlKChvLCBrKSA9PiB7XG4gICAgaSsrO1xuXG4gICAgaWYgKHR5cGVvZiBvICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gISFvO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIChpID09IGxlbmd0aCkgJiYgKGhhcyA9IG8uaGFzT3duUHJvcGVydHkoaykpO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBoYXM7XG59O1xuXG4vKipcbiAqIFNldCBuZXN0ZWQgb2JqZWN0cyB0cmVlIHByb3BlcnR5XG4gKiBSZXR1cm5zIGNoYW5nZWQgcHJvcGVydHkgb2JqZWN0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIHJldHVybnMge3k6IDZ9XG4gKiB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgKGxhc3QsIHZhbCkgPT4gbGFzdD8gNjogKHZhbCB8fCB7fSkpO1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuc2V0UHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICBsZXQgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICBrZXlzLnJlZHVjZSgobywgaykgPT4ge1xuICAgIGkrKztcblxuICAgIGlmICh0eXBlb2YgbyAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghby5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgb1trXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBvW2tdID0gZm4oaSA9PSBsZW5ndGgsIG9ba10pO1xuICAgIGN1cnJlbnQgPSBvO1xuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiBjdXJyZW50O1xufTtcblxuLyoqXG4gKlxuICogRGVsZXRlIHByb3BlcnR5IGZyb20gbmVzdGVkIG9iamVjdHMgdHJlZVxuICogUmV0dXJucyBkZWxldGVkIHByb3BlcnR5IHZhbHVlXG4gKiBZb3UgY2FuIGNhbmNlbCBkZWxldGluZyBpZiB3aWxsIHJldHVybiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSk7XG4gKiBAZXhhbXBsZVxuICogLy8gcmV0dXJucyA1XG4gKiB1dGlscy5kZWxldGVQcm9wZXJ0eUJ5S2V5cyhbJ3gnLCAneSddLCB7eDoge3k6IDV9fSwgdmFsID0+IHZhbCAhPSA1KTtcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMgPSBmdW5jdGlvbihrZXlzLCBvYmplY3QsIGZuKSB7XG4gIGxldCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgaSA9IDA7XG5cbiAga2V5cy5yZWR1Y2UoKG8sIGspID0+IHtcbiAgICBpKys7XG5cbiAgICBpZiAodHlwZW9mIG8gIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW8uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb1trXTtcbiAgICAgICghZm4gfHwgZm4odmFsdWUpKSAmJiAoZGVsZXRlIG9ba10pO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBvW2tdO1xuICB9LCBvYmplY3QpO1xuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqXG4gKiBHZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxudXRpbHMuZ2V0RW51bWVyYWJsZVByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBvd24gcHJvcGVydHkgdGFyZ2V0IG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cbnV0aWxzLmdldE93blByb3BlcnR5VGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBrZXkpIHtcbiAgY29uc3QgY2hlY2sgPSAob2JqKSA9PiB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIGxldCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuXG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrKHByb3RvKTtcbiAgfTtcblxuICByZXR1cm4gY2hlY2sodGFyZ2V0KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgcmFuZG9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xudXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nID0gZnVuY3Rpb24obGVuZ3RoID0gMTYsIGZuID0gbnVsbCkge1xuICBsZXQgc3RyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIGxlbmd0aCArIDIpO1xuICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgbGV0IHZhbCA9ICcnOyAgXG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdHIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKCEobm93ICUgaSkpIHtcbiAgICAgIHZhbCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YWwgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmbiAmJiBmbih2YWwpKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCwgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG5cbi8qKlxuICogIENyZWF0ZSBhIGZ1bmN0aW9uIHdpdGggdGhlIGRlYm91bmNlXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICogQHJldHVybnMge2ZufVxuICovXG51dGlscy5kZWJvdW5jZSA9IGZ1bmN0aW9uKGZuLCBkZWxheSA9IDApIHsgIFxuICByZXR1cm4gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dChmbi5fX2RlYm91bmNlVGltZW91dCk7XG4gICAgZm4uX19kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZuKCk7XG4gICAgICBjbGVhclRpbWVvdXQoZm4uX19kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgZGVsZXRlIGZuLl9fZGVib3VuY2VUaW1lb3V0O1xuICAgIH0sIGRlbGF5KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXRpbHM7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2hpY2ggaGF2ZSBhc3luYyBhdHRyaWJ1dGUgY29udGVudC5cclxuICogXHJcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cclxuICogXHJcbiAqIEB0YWcgdXJsXHJcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBtYXRjaGVzID0gJ1t1cmxdJztcclxuXHJcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgc3VwZXIoLi4uYXJncyk7XHJcbiAgICB0aGlzLnVybEF0dHJpYnV0ZSA9ICdzcmMnO1xyXG4gIH1cclxuXHJcbiAgY29tcGlsZWQoKSB7XHJcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VXJsKTtcclxuICB9XHJcblxyXG4gIHNldFVybCh1cmwpIHtcclxuICAgIHRoaXMuYXR0cnNbdGhpcy51cmxBdHRyaWJ1dGVdID0gdXJsO1xyXG4gIH1cclxufSIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcbmltcG9ydCBTY29wZSBmcm9tICcuL3Njb3BlLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zZXJ2aWNlcy9zdG9yZS5qcyc7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY29uc3QgZXZhbHVhdGlvblJlZ2V4ID0gL1xcJHsoKCg/IVxcJHspLikqKX0vO1xuZXhwb3J0IGNvbnN0IGV2YWx1YXRpb25SZWdleEdsb2JhbCA9IG5ldyBSZWdFeHAoZXZhbHVhdGlvblJlZ2V4LnNvdXJjZSwgXCJnXCIpO1xuZXhwb3J0IGNvbnN0IHN5c3RlbUF0dHJpYnV0ZXMgPSBbJ2NvbXBvbmVudCcsICdzY29wZSddO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZnJvbSB3aGljaCBhbGwgY29tcG9uZW50cyBhcmUgaW5oZXJpdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFtdO1xuICBzdGF0aWMgZXZlbnRzID0gW107XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IGZhbHNlO1xuICBzdGF0aWMgdHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgc3RhdGljIHRlbXBsYXRlID0gJyc7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICcnO1xuICBzdGF0aWMgc2NvcGUgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBkZWZpbmUgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2NvbXBvbmVudCcsIENvbXBvbmVudCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdGhlIGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAgICogQHBhcmFtIHtvYmplY3R9IFt2YXJzXVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGNvbnRleHQsIGV4cHJlc3Npb24sIHZhcmlhYmxlcyA9IHt9KSB7XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGNvbnN0IHZhcnMgPSBbXTtcbiAgICBjb25zdCBleHBzID0gdXRpbHMuc3BsaXQoZXhwcmVzc2lvbiwgJzsnLCBbJ1wiJywgXCInXCIsICdgJ10pOyAgXG4gICAgZXhwc1tleHBzLmxlbmd0aCAtIDFdID0gYHJldHVybiAke2V4cHNbZXhwcy5sZW5ndGggLSAxXX1gO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHZhcmlhYmxlcykge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB2YXJzLnB1c2godmFyaWFibGVzW2tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oLi4ua2V5cywgYCR7ZXhwcy5qb2luKCc7ICcpfWApLmFwcGx5KGNvbnRleHQsIHZhcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIFxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFxuICAgKiBAcGFyYW0ge29iamVjdH0gW3Njb3BlXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGVsLCBzY29wZSA9IHt9KSB7XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCBwYXNzIGFuIGh0bWwgZWxlbWVudCB0byB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX3ByZXZlbnQgPSBmYWxzZTtcbiAgICB0aGlzLl9fYmluZGluZ3MgPSB7fTtcbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcmVjb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcbiAgICB0aGlzLl9fZGlzYWJsZVN0b3JlS2V5cyA9IHt9O1xuICAgIHRoaXMuX19kaXNhYmxlQXR0cktleXMgPSB7fTtcbiAgICB0aGlzLl9fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9fcGFyZW50cyA9IFtdO1xuICAgIHRoaXMuX19jb250ZW50ID0gJyc7XG4gICAgdGhpcy5fX2F0dHJzID0ge307XG4gICAgdGhpcy5fX2F0dHJMaW5rcyA9IHt9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzID0ge307XG4gICAgdGhpcy5fX2F0dHJpYnV0ZU9mID0gbnVsbDtcbiAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IHRoaXM7XG4gICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY29tcGlsYXRpb24gb3B0aW9ucyBcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICBjaGVja0NoYW5nZXM6IGZhbHNlLCBcbiAgICAgIHNldEV2ZW50czogdHJ1ZSxcbiAgICAgIHNldFBhcmVudHM6IHRydWUsXG4gICAgICBzZXRCb29sZWFuQXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGRlZmluZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAuLi5vcHRpb25zIFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHJlY29tcGlsYXRpb24gb3B0aW9ucyBcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVSZWNvbXBpbGF0aW9uT3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4geyBcbiAgICAgIC4uLnRoaXMuX19jcmVhdGVDb21waWxhdGlvbk9wdGlvbnMoKSxcbiAgICAgIHNldEV2ZW50czogZmFsc2UsXG4gICAgICBzZXRQYXJlbnRzOiBmYWxzZSxcbiAgICAgIHNldEJvb2xlYW5BdHRyaWJ1dGVzOiBmYWxzZSxcbiAgICAgIGRlZmluZUF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgLi4ub3B0aW9ucyBcbiAgICB9O1xuICB9XG4gXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIHJlY29tcGlsYXRpb25cbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19yZWNvbXBpbGUob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IHRydWU7IFxuICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50Ll9fZGlzYWJsZVByb3h5ID0ge307ICBcbiAgICB0aGlzLl9fY29tcGlsaW5nID0gdGhpcy5fX2NyZWF0ZVJlY29tcGlsYXRpb25PcHRpb25zKG9wdGlvbnMpOyAgICBcbiAgICB0aGlzLl9fY29tcGlsaW5nLnNldEV2ZW50cyAmJiB0aGlzLl9fc2V0RXZlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRQYXJlbnRzICYmIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX2NvbXBpbGluZy5zZXRCb29sZWFuQXR0cmlidXRlcyAmJiB0aGlzLl9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKTtcbiAgICB0aGlzLl9fY29tcGlsaW5nLmRlZmluZUF0dHJpYnV0ZXMgJiYgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdGhlIGNyZWF0aW9uXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY3JlYXRlKCkge1xuICAgIHRoaXMuX19jb21waWxpbmcgPSB0aGlzLl9fY3JlYXRlQ29tcGlsYXRpb25PcHRpb25zKCk7IFxuICAgIHRoaXMuX19pbml0aWFsaXplKCk7XG4gICAgdGhpcy5fX3NldEV2ZW50cygpO1xuICAgIHRoaXMuX19zZXRQYXJlbnRzKCk7XG4gICAgdGhpcy5fX3NldEJvb2xlYW5BdHRyaWJ1dGVzKCk7XG4gICAgdGhpcy5fX2RlZmluZUF0dHJpYnV0ZXMoKTsgXG4gICAgQWtpbGkuaXNvbGF0ZSgoKSA9PiB0aGlzLmNyZWF0ZWQodGhpcy5hdHRycykpOyAgXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIHRoZSBjb21waWxhdGlvblxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgX19jb21waWxlKCkge1xuICAgIGxldCBjb250cm9sID0gdGhpcy5fX2NvbnRyb2xBdHRyaWJ1dGVzIHx8ICF0aGlzLl9fZXZhbHVhdGVQYXJlbnQ7XG4gICAgbGV0IHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLl9fYXR0cmlidXRlT2YgPSBjb250cm9sPyB0aGlzOiB0aGlzLl9fZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcbiAgICBcbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZyB8fCB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCB8fCB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMpIHtcbiAgICAgIHRoaXMuX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXModGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaW50ZXJwb2xhdGUgPSAoY2hpbGRyZW4sIHBhcmVudCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09IDMgJiYgdGhpcy5fX2luaXRpYWxpemVOb2RlKGNoaWxkLCBwYXJlbnQpKSB7ICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX19ldmFsdWF0ZU5vZGUoY2hpbGQsIHRoaXMuX19jb21waWxpbmc/IHRoaXMuX19jb21waWxpbmcuY2hlY2tDaGFuZ2VzOiBmYWxzZSk7ICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PSAxICYmICFjaGlsZC5fX2FraWxpKSB7XG4gICAgICAgICAgdGhpcy5fX2ludGVycG9sYXRlQXR0cmlidXRlcyhjaGlsZCk7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY2hpbGQuY2hpbGROb2RlcywgY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTsgICAgXG5cbiAgICBpbnRlcnBvbGF0ZSh0aGlzLmVsLmNoaWxkTm9kZXMsIHRoaXMuZWwpO1xuICAgIHRoaXMuX19pc01vdW50ZWQgPSB0cnVlO1xuICAgIGxldCByZXM7XG5cbiAgICBpZiAoIXRoaXMuX19yZWNvbXBpbGluZykge1xuICAgICAgcmVzID0gQWtpbGkuaXNvbGF0ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0cnMub25Db21waWxlZCAmJiB0aGlzLmF0dHJzLm9uQ29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVkKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgICAgcCA9IHJlcXVlc3QuZ2V0KHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwsIHsgY2FjaGU6IHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVDYWNoZSB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMuX19jb250ZW50O1xuICAgICAgICAgIEFraWxpLnNldFRlbXBsYXRlKHRoaXMuZWwsIHJlcy5kYXRhKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fX2NvbnRlbnQ7ICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXMgPSBBa2lsaS5pc29sYXRlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vblJlY29tcGlsZWQgJiYgdGhpcy5hdHRycy5vblJlY29tcGlsZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMucmVjb21waWxlZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19yZWNvbXBpbGluZyA9IG51bGw7XG4gICAgdGhpcy5fX2NvbXBpbGluZyA9IG51bGw7XG5cbiAgICByZXR1cm4gcC50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX19pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBfX3Jlc29sdmUoKSB7XG4gICAgaWYgKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuYXR0cnMub25SZXNvbHZlZCAmJiB0aGlzLmF0dHJzLm9uUmVzb2x2ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEFraWxpLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXNvbHZlZCgpKSkudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5fX2lzUmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJ0IG9mIHRoZSB7QHNlZSBDb21wb25lbnQjX19jb21waWxlfSBtZXRob2RcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbml0aWFsaXplKCkgeyAgICBcbiAgICBsZXQgcGFyZW50ID0gQWtpbGkuZ2V0QWtpbGlQYXJlbnRzKHRoaXMuZWwsIGZhbHNlKTsgICAgIFxuICAgIGxldCBTY29wZSA9IHRoaXMuY29uc3RydWN0b3Iuc2NvcGUgfHwgQWtpbGkuU2NvcGU7XG4gICAgbGV0IHNjb3BlO1xuICAgIGxldCBpc1Jvb3QgPSBBa2lsaS5fX3Jvb3QgPT09IHRoaXMuZWw7XG4gICAgdGhpcy5lbC5fX2FraWxpID0gdGhpcztcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHNjb3BlID0gbmV3IFNjb3BlKHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzY29wZScpIHx8IEFraWxpLmNyZWF0ZVNjb3BlTmFtZSgpLCB0aGlzLmVsLCB0aGlzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzY29wZSA9IG5ldyBTY29wZShpc1Jvb3Q/ICdyb290JzogQWtpbGkuY3JlYXRlU2NvcGVOYW1lKCksIHRoaXMuZWwsIHRoaXMpO1xuICAgICAgaXNSb290ICYmIChBa2lsaS5yb290ID0gdGhpcyk7XG4gICAgfVxuXG4gICAgbGV0IF9fc2NvcGUgPSBzY29wZTtcbiAgICBsZXQgX3Njb3BlID0gT2JqZWN0LmFzc2lnbihzY29wZSwgdGhpcy5zY29wZSk7XG4gICAgbGV0IGNvbnRyb2xBdHRyaWJ1dGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5jb250cm9sQXR0cmlidXRlcztcbiAgICBsZXQgZXZlbnRzID0gdGhpcy5jb25zdHJ1Y3Rvci5ldmVudHM7XG5cbiAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSkge1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgdGhpcy5jb25zdHJ1Y3Rvci50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudGVtcGxhdGVVcmwpIHtcbiAgICAgIHRoaXMuX19jb250ZW50ID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZSA9IF9fc2NvcGU7XG4gICAgdGhpcy5fX2V2ZW50cyA9IGV2ZW50cztcbiAgICB0aGlzLl9fY29udHJvbEF0dHJpYnV0ZXMgPSBjb250cm9sQXR0cmlidXRlcztcbiAgICBBa2lsaS5hZGRTY29wZShzY29wZSk7ICAgIFxuICAgIHRoaXMuc2NvcGUgPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZShfc2NvcGUsIFtdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc2V0Qm9vbGVhbkF0dHJpYnV0ZXMoKSB7XG4gICAgdGhpcy5ib29sZWFuQXR0cmlidXRlcyA9IFtdLmNvbmNhdChBa2lsaS5odG1sQm9vbGVhbkF0dHJpYnV0ZXMsIHRoaXMuY29uc3RydWN0b3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuXG4gICAgY29uc3Qgc2V0QXR0ciA9IChlbCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGF0dHJzID0gZWwuYXR0cmlidXRlcywgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgbm9kZSA9IGF0dHJzW2ldO1xuXG4gICAgICAgIGlmICh0aGlzLmJvb2xlYW5BdHRyaWJ1dGVzLmluZGV4T2Yobm9kZS5ub2RlTmFtZSkgIT0gLTEpIHtcbiAgICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGBib29sZWFuLSR7bm9kZS5ub2RlTmFtZX1gLCBlbC5nZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSkgfHwgbm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKG5vZGUubm9kZU5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICAgIGlmICghY2hpbGQuX19ha2lsaSkge1xuICAgICAgICAgIHNldEF0dHIoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHNldEF0dHIodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldEV2ZW50cygpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuX19ldmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgZXYgPSB0aGlzLl9fZXZlbnRzW2ldO1xuICAgICAgIS9eb24tL2kudGVzdChldikgJiYgKGV2ID0gJ29uLScgKyBldik7XG5cbiAgICAgIGlmICghdGhpcy5lbC5oYXNBdHRyaWJ1dGUoZXYpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGV2LCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgcGFyZW50c1xuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldFBhcmVudHMoKSB7XG4gICAgbGV0IHBhcmVudHMgPSBBa2lsaS5nZXRBa2lsaVBhcmVudHModGhpcy5lbCk7XG5cbiAgICBpZiAoIXBhcmVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1BhcmVudCA9IHRoaXMuX19wYXJlbnQgIT09IHBhcmVudHNbMF07XG4gICAgbGV0IGV2YWx1YXRlUGFyZW50ID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBwYXJlbnQgPSBwYXJlbnRzW2ldO1xuXG4gICAgICBpZiAoIXBhcmVudC5fX2FraWxpLmNvbnN0cnVjdG9yLnRyYW5zcGFyZW50KSB7XG4gICAgICAgIGV2YWx1YXRlUGFyZW50ID0gcGFyZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY29tcGlsaW5nLm5ld1BhcmVudCA9IG5ld1BhcmVudDtcbiAgICBuZXdQYXJlbnQgJiYgdGhpcy5fX2RldGFjaCgpO1xuXG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IudHJhbnNwYXJlbnQpIHtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW9uQ29tcG9uZW50ID0gZXZhbHVhdGVQYXJlbnQuX19ha2lsaTtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGVQYXJlbnQgPSBldmFsdWF0ZVBhcmVudDtcbiAgICB0aGlzLl9fcGFyZW50ID0gcGFyZW50c1swXTtcbiAgICB0aGlzLl9fcGFyZW50cyA9IHBhcmVudHM7XG4gICAgdGhpcy5zY29wZS5fX3BhcmVudCA9IHRoaXMuX19ldmFsdWF0ZVBhcmVudC5fX2FraWxpLnNjb3BlO1xuICAgICF0aGlzLl9fcmVjb21waWxpbmcgJiYgdGhpcy5fX3BhcmVudC5fX2FraWxpLl9fYWRkQ2hpbGQodGhpcy5lbCk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMuc2NvcGUsIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX3Njb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgY2hpbGQgZWxlbWVudCB0byB0aGUgbGlzdFxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYWRkQ2hpbGQoZWwpIHtcbiAgICB0aGlzLl9fY2hpbGRyZW4ucHVzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaWNlIGNoaWxkIGZyb20gdGhlIGxpc3RcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NwbGljZUNoaWxkKGVsKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLl9fY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLl9fY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjaGlsZCA9PT0gZWwpIHtcbiAgICAgICAgdGhpcy5fX2NoaWxkcmVuLnNwbGljZShpLCAxKTtcbiAgICAgICAgaS0tO1xuICAgICAgICBsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2hhbmdlIGV4cHJlc3Npb24gYmVmb3JlIHBhcnNpbmcgaGVyZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRQYXJzZWRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBub2RlIGhhcyBhbnkgcHJvcGVydHkgY2hhbmdlcyBvciBub3RcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrRXZhbHVhdGlvbihub2RlKSB7XG4gICAgaWYgKCFPYmplY3Qua2V5cyhub2RlLl9fcHJvcGVydGllcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBrIGluIG5vZGUuX19wcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIW5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgcHJvcCA9IG5vZGUuX19wcm9wZXJ0aWVzW2tdO1xuICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMocHJvcC5rZXlzLCBwcm9wLmNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgaWYgKCFub2RlLl9fY29tcG9uZW50Ll9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogIENoZWNrIG5vZGUgaGFzIGNoYW5nZWQgb24gdGhlIGNlcnRhaW4ga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NoZWNrTm9kZVByb3BlcnR5Q2hhbmdlKG5vZGUsIGtleXMsIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpO1xuICAgIFxuICAgIGlmICghcHJvcCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICFub2RlLl9fY29tcG9uZW50Ll9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYXJlIGEgbm9kZSBwcm9wZXJ0eSB2YWx1ZVxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3AgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gXG4gICAqL1xuICBfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7ICBcbiAgICByZXR1cm4gdXRpbHMuY29tcGFyZSh1dGlscy5jcmVhdGVIYXNoKHZhbHVlKSwgcHJvcC5oYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZXhjZXB0aW9uIG1lc3NhZ2VcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyIFxuICAgKi9cbiAgX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycikge1xuICAgIGxldCB0YWdOYW1lID0gbm9kZS5fX2NvbXBvbmVudC5lbC50YWdOYW1lO1xuICAgIGxldCBhdHRyTmFtZSA9IG5vZGUuX19jb21wb25lbnQuZWwuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKTtcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IChhdHRyTmFtZSB8fCB0YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBlbGVtZW50TmFtZSA9IG5vZGUuX19lbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgYXR0cmlidXRlTmFtZSA9IChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpPyBub2RlLm5hbWUudG9Mb3dlckNhc2UoKTogJyc7ICAgICAgICBcbiAgICBsZXQgbWVzc2FnZXMgPSBbIGVyci5tZXNzYWdlLCBub2RlLl9fZXhwcmVzc2lvbi50cmltKCkgXTtcbiAgICBhdHRyaWJ1dGVOYW1lICYmIG1lc3NhZ2VzLnB1c2goYFthdHRyaWJ1dGUgJHthdHRyaWJ1dGVOYW1lfV1gKTtcbiAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLmNvbmNhdChbIGBbZWxlbWVudCAke2VsZW1lbnROYW1lfV1gLCBgW2NvbXBvbmVudCAke2NvbXBvbmVudE5hbWV9XWAgXSk7XG4gICAgcmV0dXJuIGBFeHByZXNzaW9uIGVycm9yOiBgICsgbWVzc2FnZXMuam9pbignXFxuXFx0YXQgJyk7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgbm9kZSBleHByZXNzaW9uXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZShub2RlKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBsZXQgZXhwcmVzc2lvbjtcbiAgICBjb25zdCBldmFsQ29tcG9uZW50ID0gbm9kZS5fX2F0dHJpYnV0ZU9mIHx8IG5vZGUuX19jb21wb25lbnQ7XG5cbiAgICBpZiAobm9kZS5fX2NvbXBvbmVudC5wYXJlbnRzKChjb20pID0+IGNvbS5fX3ByZXZlbnQpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBub2RlLl9fZXhwcmVzc2lvbiB9O1xuICAgIH1cblxuICAgIGlmICghKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikgJiYgbm9kZS5fX2NvbXBvbmVudC5fX3ByZXZlbnQpIHtcbiAgICAgIHJldHVybiB7IHJlczogbm9kZS5fX2V4cHJlc3Npb24gfTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHJlcyA9IG5vZGUuX19leHByZXNzaW9uLnJlcGxhY2UoZXZhbHVhdGlvblJlZ2V4R2xvYmFsLCAobSwgZCkgPT4geyAgICAgXG4gICAgICBjb3VudGVyKys7XG4gICAgICBsZXQgZXZhbHVhdGU7XG4gICAgICBsZXQgZXZhbHVhdGlvbiA9IFtdO1xuICAgICAgbGV0IGV4aXN0aW5nQmluZGluZ3MgPSB7fTtcbiAgICAgIGxldCBwYXJlbnRCaW5kaW5ncyA9IHt9O1xuICAgICAgbGV0IHBhcnNlVmFsdWUgPSBub2RlLl9fY29tcG9uZW50Ll9fZ2V0UGFyc2VkRXhwcmVzc2lvbihkKTtcbiAgICAgIEFraWxpLl9fZXZhbHVhdGlvbiA9IHsgbm9kZTogbm9kZSwgbGlzdDogW10sIGNvbXBvbmVudDogbm9kZS5fX2NvbXBvbmVudCB9O1xuICAgICAgXG4gICAgICB0cnkgeyAgICAgICAgXG4gICAgICAgIGV2YWx1YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5wYXJzZShldmFsQ29tcG9uZW50Ll9fZXZhbHVhdGlvbkNvbXBvbmVudC5zY29wZSwgcGFyc2VWYWx1ZSwgeyAuLi5nbG9iYWxzIH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycikgeyAgICAgICAgXG4gICAgICAgIHRocm93IHRoaXMuX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmKEFraWxpLl9fZXZhbHVhdGlvbikge1xuICAgICAgICBldmFsdWF0aW9uID0gQWtpbGkuX19ldmFsdWF0aW9uLmxpc3Q7XG4gICAgICAgIEFraWxpLl9fZXZhbHVhdGlvbi5saXN0ID0gbnVsbDtcbiAgICAgICAgQWtpbGkuX19ldmFsdWF0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGV2YWx1YXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBldmFsdWF0aW9uW2ldO1xuICAgICAgICBsZXQgaGFzaCA9IGRhdGEuY29tcG9uZW50Ll9fY3JlYXRlS2V5c0hhc2goZGF0YS5rZXlzKTtcbiAgICAgICAgbGV0IHBhcmVudHNIYXNoID0gZGF0YS5jb21wb25lbnQuX19jcmVhdGVLZXlzSGFzaChkYXRhLnBhcmVudHMpO1xuICAgICAgIFxuICAgICAgICBpZiAoZGF0YS5ub3RCaW5kaW5nKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nc1toYXNoXSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcmVudFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoZGF0YS5wYXJlbnRzLCBkYXRhLmNvbXBvbmVudC5fX3Njb3BlKTsgICAgICAgIFxuXG4gICAgICAgIGlmIChwYXJlbnRWYWx1ZSAmJiB0eXBlb2YgcGFyZW50VmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPT0gNTApIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oW1xuICAgICAgICAgICAgICBgRm9yIGhpZ2hlciBwZXJmb3JtYW5jZSwgZG9uJ3QgbG9vcCBQcm94eSBhcnJheXMvb2JqZWN0cyBpbnNpZGUgZXhwcmVzc2lvbiBmdW5jdGlvbnMsIG9yIHVzZSBBa2lsaS51bmV2YWx1YXRlKCkgdG8gd3JhcCB5b3UgY29kZS5gLFxuICAgICAgICAgICAgICBgJHsgbm9kZS5fX2V4cHJlc3Npb24udHJpbSgpIH1gLFxuICAgICAgICAgICAgICBgc2NvcGUgcHJvcGVydHkgXCIkeyBkYXRhLnBhcmVudHMuam9pbignLicpIH1cImBcbiAgICAgICAgICAgIF0uam9pbignXFxuXFx0YXQgJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAhcGFyZW50QmluZGluZ3NbcGFyZW50c0hhc2hdPyBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0gPSAxOiBwYXJlbnRCaW5kaW5nc1twYXJlbnRzSGFzaF0rKztcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdXRpbHMuaXNTY29wZVByb3h5KHBhcmVudFZhbHVlKSAmJiBcbiAgICAgICAgICBkYXRhLmNvbXBvbmVudCAhPT0gZXZhbENvbXBvbmVudC5fX2V2YWx1YXRpb25Db21wb25lbnQgJiYgXG4gICAgICAgICAgZGF0YS5jb21wb25lbnQgPT09IGRhdGEucmVhbENvbXBvbmVudFxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAgXG5cbiAgICAgICAgZGF0YS5jb21wb25lbnQuX19iaW5kQW5kU2V0UHJvcGVydHkobm9kZSwgZGF0YS5rZXlzLCBkYXRhLmV2YWx1YXRlZCk7XG4gICAgICAgIGV4aXN0aW5nQmluZGluZ3NbaGFzaF0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSB7XG4gICAgICAgIGV4cHJlc3Npb24gPSBtO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IGV2YWx1YXRlO1xuICAgICAgICByZXR1cm4gdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGV2YWx1YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBldmFsdWF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShldmFsdWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgIHJldHVybiBldmFsdWF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXZhbHVhdGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyByZXMsIGNvdW50ZXIsIGV4cHJlc3Npb24sIGF0dHJpYnV0ZVZhbHVlIH07XG4gIH1cblxuICAvKipcbiAgICogQmluZCB0aGUgbm9kZSBhbmQgc2V0IHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V2YWx1YXRlZF1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kQW5kU2V0UHJvcGVydHkobm9kZSwga2V5cywgZXZhbHVhdGVkKSB7XG4gICAgbGV0IGJpbmQgPSB0aGlzLl9fZ2V0Qm91bmROb2RlKGtleXMsIG5vZGUpO1xuICAgIGxldCB2YWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG5cbiAgICBpZiAoIWJpbmQpIHtcbiAgICAgIHRoaXMuX19iaW5kKGtleXMsIHsgbm9kZSB9KTtcbiAgICB9ICAgXG5cbiAgICB0aGlzLl9fc2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMsIHZhbHVlLCBldmFsdWF0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5lc3RlZCBldmFsdWF0aW9uIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt3aXRob3V0UGFyZW50cz1mYWxzZV0gLSBpZiB0cnVlIGV2YWx1YXRpb24gd2lsbCBiZSBvbmx5IGZvciB0aGUgY3VycmVudCBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZXZhbHVhdGVOZXN0ZWQoa2V5cywgd2l0aG91dFBhcmVudHMgPSBmYWxzZSkge1xuICAgIGxldCBzY29wZSA9IHRoaXMuX19zY29wZTtcbiAgICBsZXQgcHJvcHMgPSBbXTsgICAgXG4gICAgXG4gICAgaWYgKCF3aXRob3V0UGFyZW50cykge1xuICAgICAgbGV0IGxhc3RQcm9wcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgbGFzdFByb3BzID0gWy4uLmxhc3RQcm9wcywga2V5XTtcbiAgICAgICAgdmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsYXN0UHJvcHMsIHNjb3BlKTtcbiAgICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGxhc3RQcm9wcywgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMucHVzaCh7IGtleXM6IGtleXMsIHZhbHVlOiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCBzY29wZSl9KTtcbiAgICB9XG5cbiAgICBsZXQgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICBjb25zdCBlbEV2YWx1YXRlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGVsZW1lbnQuX19ha2lsaTsgICAgIFxuXG4gICAgICBmb3IgKGxldCBtID0gMDsgbSA8IHByb3BzTGVuZ3RoOyBtKyspIHtcbiAgICAgICAgbGV0IHByb3AgPSBwcm9wc1ttXTtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIFxuICAgICAgICBpZiAoY29tcG9uZW50ID09PSB0aGlzKSB7XG4gICAgICAgICAgbGV0IGJpbmQgPSBjb21wb25lbnQuX19nZXRCaW5kKHByb3Aua2V5cyk7XG4gICAgICAgICAgZGF0YSA9IGJpbmQ/IChiaW5kLl9fZGF0YSB8fCBbXSk6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBjb21wb25lbnQuX19nZXRBbGxCaW5kcyhwcm9wLmtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBrID0gMCwgYyA9IGRhdGEubGVuZ3RoOyBrIDwgYzsgaysrKSB7XG4gICAgICAgICAgY29uc3QgYmluZCA9IGRhdGFba107ICAgXG5cbiAgICAgICAgICBpZighYmluZCB8fCAhYmluZC5ub2RlIHx8ICFiaW5kLm5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChjb21wb25lbnQuX19jaGVja05vZGVQcm9wZXJ0eUNoYW5nZShiaW5kLm5vZGUsIHByb3Aua2V5cywgcHJvcC52YWx1ZSkpIHsgIFxuICAgICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUtleXMocHJvcC5rZXlzKTsgICAgIFxuICAgICAgICAgICAgY29uc3QgY2hlY2tQcm9wID0gY29tcG9uZW50Ll9fZ2V0Tm9kZVByb3BlcnR5KGJpbmQubm9kZSwgcHJvcC5rZXlzKTtcbiAgICAgICAgICAgIGNoZWNrUHJvcCAmJiBjaGVja1Byb3AuZXZhbHVhdGVkICYmIGNvbXBvbmVudC5zY29wZS5fX3NldChwcm9wLmtleXMsIHByb3AudmFsdWUsIGZhbHNlLCB0cnVlKTsgXG4gICAgICAgICAgICBjb21wb25lbnQuX19ldmFsdWF0ZU5vZGUoYmluZC5ub2RlLCBmYWxzZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IF9rIGluIGJpbmQubm9kZS5fX3Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFiaW5kLm5vZGUuX19wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KF9rKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBiaW5kLm5vZGUuX19wcm9wZXJ0aWVzW19rXTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoX3Byb3Aua2V5cywgX3Byb3AuY29tcG9uZW50Ll9fc2NvcGUpO1xuICAgICAgICAgICAgICBfcHJvcC5jb21wb25lbnQuX19zZXROb2RlUHJvcGVydHkoYmluZC5ub2RlLCBfcHJvcC5rZXlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMocHJvcC5rZXlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZhbHVhdGUgPSAoZWxlbWVudHMpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBlbEV2YWx1YXRlKGVsZW1lbnRzW2ldKTtcbiAgICAgICAgZXZhbHVhdGUoY29tcG9uZW50Ll9fY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBlbEV2YWx1YXRlKHRoaXMuZWwpO1xuICAgIGV2YWx1YXRlKHRoaXMuX19jaGlsZHJlbik7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGUgdmFsdWUgYnkga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXSAtIHRydWUgaWYgdmFsdWUgaXMgZGVsZXRpbmdcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19ldmFsdWF0ZUJ5S2V5cyAoa2V5cywgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSB7ICAgICBcbiAgICBsZXQgZGF0YSA9IHRoaXMuX19nZXRCaW5kKGtleXMpO1xuXG4gICAgY29uc3QgdW5iaW5kID0gKG9iaiwgcGFyZW50cykgPT4ge1xuICAgICAgZm9yIChsZXQgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoaykgfHwgdGhpcy5fX2lzU3lzdGVtQmluZGluZ0tleShrKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9rZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrXSk7XG4gICAgICAgIGxldCBfX2tleXMgPSBfa2V5cy5zbGljZSgpO1xuICAgICAgICBsZXQgX2lzRGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgdmFsID0gb2JqW2tdO1xuICAgICAgICBsZXQgaGFzS2V5O1xuICAgICAgICBcbiAgICAgICAgX19rZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc0tleSA9IHV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcgJiYgIWhhc0tleSkge1xuICAgICAgICAgIF9pc0RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdW5iaW5kKHZhbCwgX2tleXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fX2V2YWx1YXRlTmVzdGVkKF9rZXlzLCB0cnVlKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8ICFoYXNLZXkpIHtcbiAgICAgICAgICB0aGlzLl9fdW5iaW5kKF9rZXlzKTtcbiAgICAgICAgICBfaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKF9fa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBkYXRhICYmIHVuYmluZChkYXRhLCBbXS5jb25jYXQoa2V5cykpO1xuICAgIHRoaXMuX19ldmFsdWF0ZU5lc3RlZChrZXlzLCBmYWxzZSk7XG5cbiAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kKGtleXMpO1xuICAgICAgaXNEZWxldGVkICYmIHV0aWxzLmRlbGV0ZVByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIGV2ZW50IGV4cHJlc3Npb25cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlRXZlbnQobm9kZSwgZWwsIGUpIHtcbiAgICBsZXQgZXhwcmVzc2lvbiA9IGV2YWx1YXRpb25SZWdleC5leGVjKG5vZGUuX19leHByZXNzaW9uKTtcbiAgICBsZXQgZXZhbHVhdGU7XG5cbiAgICBpZiAoIWV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9fZXZhbHVhdGluZ0V2ZW50ID0ge1xuICAgICAgZWw6IGVsLFxuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBub2RlXG4gICAgfTtcblxuICAgIHRoaXMuX19kaXNhYmxlUHJveHkgPSB7fTtcblxuICAgIHRyeSB7XG4gICAgICBldmFsdWF0ZSA9IHRoaXMuY29uc3RydWN0b3IucGFyc2UodGhpcy5fX2V2YWx1YXRpb25Db21wb25lbnQuc2NvcGUsIGV4cHJlc3Npb25bMV0sIHsgLi4uZ2xvYmFscywgIGV2ZW50OiBlIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7ICAgICAgICBcbiAgICAgIHRocm93IHRoaXMuX19jcmVhdGVFeGNlcHRpb25NZXNzYWdlKG5vZGUsIGVycik7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgIHJldHVybiBldmFsdWF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBjaGFuZ2VzIGFuZCBldmFsdWF0ZSB0aGUgcGFzc2VkIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NoZWNrXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2V2YWx1YXRlTm9kZShub2RlLCBjaGVjayA9IHRydWUpIHtcbiAgICBjb25zdCBrZXkgPSBub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHI/ICd2YWx1ZSc6ICdub2RlVmFsdWUnOyAgXG5cbiAgICBpZiAoY2hlY2s/IHRoaXMuX19jaGVja0V2YWx1YXRpb24obm9kZSk6IHRydWUpIHsgXG4gICAgICBjb25zdCB7IHJlcywgYXR0cmlidXRlVmFsdWUsIGV4cHJlc3Npb24sIGNvdW50ZXIgfSA9IHRoaXMuX19ldmFsdWF0ZShub2RlKTsgIFxuICAgICAgbm9kZVtrZXldICE9IHJlcyAmJiAobm9kZVtrZXldID0gcmVzKTtcblxuICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuQXR0cikge1xuICAgICAgICBsZXQgdmFsdWUgPSByZXM7XG4gICAgICAgIGxldCBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSBmYWxzZTtcbiAgXG4gICAgICAgIGlmIChjb3VudGVyID09IDEgJiYgZXhwcmVzc2lvbiAmJiBub2RlLl9fZXhwcmVzc2lvbiA9PSBleHByZXNzaW9uKSB7XG4gICAgICAgICAgdmFsdWUgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgY29uc3QgY2xlYXJBdHRyaWJ1dGUgPSBub2RlLm5vZGVOYW1lLnJlcGxhY2UoL15ib29sZWFuLSguKykvaSwgJyQxJyk7XG4gICAgICAgIGNvbnN0IGNhbWVsQXR0cmlidXRlID0gdXRpbHMudG9DYW1lbENhc2UoY2xlYXJBdHRyaWJ1dGUpO1xuICBcbiAgICAgICAgaWYgKGNsZWFyQXR0cmlidXRlICE9IG5vZGUubm9kZU5hbWUpIHtcbiAgICAgICAgICBpc0Jvb2xlYW5BdHRyaWJ1dGUgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICAgICAgfSAgICAgICAgICBcbiAgXG4gICAgICAgIGlmIChub2RlLl9fYXR0cmlidXRlT24pIHsgICAgICAgIFxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5vZGUuX19hdHRyaWJ1dGVPbjtcbiAgICAgICAgICB2YWx1ZSA9IGNvbXBvbmVudC5fX3ByZXBhcmVBdHRyaWJ1dGVJbihub2RlLCB2YWx1ZSk7XG4gICAgICAgICAgY29tcG9uZW50Ll9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IHRydWU7XG4gICAgICAgICAgY29tcG9uZW50LmF0dHJzW2NhbWVsQXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIgPSBmYWxzZTtcbiAgXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5fX2lzTW91bnRlZCkge1xuICAgICAgICAgICAgY29tcG9uZW50Ll9fYXR0clRyaWdnZXJCeU5hbWUoY2FtZWxBdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNCb29sZWFuQXR0cmlidXRlKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IG5vZGUuX19lbGVtZW50O1xuICAgICAgICAgIHZhbHVlPyBlbGVtZW50LnNldEF0dHJpYnV0ZShjYW1lbEF0dHJpYnV0ZSwgJ3RydWUnKTogZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoY2FtZWxBdHRyaWJ1dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIGdldHRpbmdcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqL1xuICBfX3ByZXBhcmVBdHRyaWJ1dGVJbihub2RlLCB2YWx1ZSkgeyAgICBcbiAgICByZXR1cm4gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBhdHRyaWJ1dGUgdmFsdWUgZm9yIHNlbmRpbmdcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqL1xuICBfX3ByZXBhcmVBdHRyaWJ1dGVPdXQobm9kZSwgdmFsdWUpIHsgICAgXG4gICAgcmV0dXJuIHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQXR0cmlidXRlIG5vZGUgaW5pdGlhbGl6aW5nXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBhdHRyaWJ1dGVPZiAtIGlmIG5vZGUgaXMgbGlua2VkIHdpdGggcGFyZW50IHNjb3BlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9faW5pdGlhbGl6ZUF0dHJpYnV0ZShub2RlLCBlbCwgYXR0cmlidXRlT2YpIHtcbiAgICBpZiAoIW5vZGUgfHwgc3lzdGVtQXR0cmlidXRlcy5pbmRleE9mKG5vZGUubm9kZU5hbWUpICE9IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoIXRoaXMuX19pbml0aWFsaXplTm9kZShub2RlLCBlbCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZXZlbnROYW1lID0gbm9kZS5ub2RlTmFtZS5yZXBsYWNlKC9eb24tKC4rKS9pLCAnJDEnKTsgICAgXG4gICAgbGV0IGNvbXBvbmVudCA9IGF0dHJpYnV0ZU9mPyBhdHRyaWJ1dGVPZjogdGhpcztcblxuICAgIGlmIChub2RlLl9faXNFdmVudCkge1xuICAgICAgaWYgKG5vZGUuX19ldmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVtaXR0ZXIgPSBuZXcgQWtpbGkuRXZlbnRFbWl0dGVyKGV2ZW50TmFtZSwgbm9kZSwgZWwsIGNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChub2RlLl9faGFzQmluZGluZ3MpIHtcbiAgICAgICAgZW1pdHRlci5iaW5kKChlKSA9PiBjb21wb25lbnQuX19ldmFsdWF0ZUV2ZW50KG5vZGUsIGVsLCBlKSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUuX19ldmVudCA9IGVtaXR0ZXI7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobm9kZS5ub2RlTmFtZSwgdXRpbHMubWFrZUF0dHJpYnV0ZVZhbHVlKGVtaXR0ZXIpKTtcblxuICAgICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICAgIHRoaXMuX19kaXNhYmxlQXR0cmlidXRlU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdHRyc1t1dGlscy50b0NhbWVsQ2FzZShub2RlLm5vZGVOYW1lKV0gPSBlbWl0dGVyO1xuICAgICAgICB0aGlzLl9fZGlzYWJsZUF0dHJpYnV0ZVNldHRlciA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZU9mKSB7XG4gICAgICBub2RlLl9fYXR0cmlidXRlT24gPSB0aGlzO1xuICAgICAgbm9kZS5fX2F0dHJpYnV0ZU9mID0gY29tcG9uZW50O1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2hlY2sgPSB0aGlzLl9fY29tcGlsaW5nPyB0aGlzLl9fY29tcGlsaW5nLmNoZWNrQ2hhbmdlczogZmFsc2U7XG4gICAgY29tcG9uZW50Ll9fZXZhbHVhdGVOb2RlKG5vZGUsIGNoZWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2luaXRpYWxpemVOb2RlKG5vZGUsIGVsKSB7XG4gICAgaWYgKG5vZGUuX19pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXNBdHRyID0gbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyO1xuICAgIGNvbnN0IHZhbCA9IG5vZGVbaXNBdHRyPyAndmFsdWUnOiAnbm9kZVZhbHVlJ107XG4gICAgY29uc3QgaGFzQmluZGluZ3MgPSBldmFsdWF0aW9uUmVnZXgudGVzdCh2YWwudHJpbSgpKTtcbiAgICBjb25zdCBpc0Jvb2xlYW4gPSBpc0F0dHI/IC9eYm9vbGVhbi0vaS50ZXN0KG5vZGUubm9kZU5hbWUpOiBmYWxzZTtcbiAgICBjb25zdCBpc0V2ZW50ID0gaXNBdHRyPyAvXm9uLSguKykvaS50ZXN0KG5vZGUubm9kZU5hbWUpOiBmYWxzZTtcblxuICAgIGlmKCFlbC5fX2FraWxpICYmICFoYXNCaW5kaW5ncyAmJiAhaXNCb29sZWFuICYmICFpc0V2ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbm9kZS5fX25hbWUgPSB0aGlzLl9fc2NvcGUuX19uYW1lICsgdXRpbHMuY3JlYXRlUmFuZG9tU3RyaW5nKDE2KTtcbiAgICBub2RlLl9faXNFdmVudCA9IGlzRXZlbnQ7XG4gICAgbm9kZS5fX2hhc0JpbmRpbmdzID0gaGFzQmluZGluZ3M7XG4gICAgbm9kZS5fX2lzQm9vbGVhbiA9IGlzQm9vbGVhbjtcbiAgICBub2RlLl9fZXhwcmVzc2lvbiA9IHZhbDtcbiAgICBub2RlLl9fcHJvcGVydGllcyA9IHt9O1xuICAgIG5vZGUuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgbm9kZS5fX2F0dHJpYnV0ZU9uID0gbnVsbDtcbiAgICBub2RlLl9fZXZlbnQgPSBudWxsOyAgICBcbiAgICBub2RlLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIG5vZGUuX19jb21wb25lbnQgPSB0aGlzO1xuICAgIG5vZGUuX19lbGVtZW50ID0gZWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVpbml0aWFsaXplIHRoZSBub2RlXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVpbml0aWFsaXplTm9kZShub2RlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAobm9kZS5fX2V2ZW50KSB7XG4gICAgICBub2RlLl9fZXZlbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuX19oYXNCaW5kaW5ncyAmJiAhb3B0aW9ucy5zYXZlQmluZGluZ3MpIHtcbiAgICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGUpO1xuICAgICAgdGhpcy5fX3VuYmluZFBhcmVudHNCeU5vZGVzKG5vZGUpOyBcbiAgICAgIEFraWxpLnJlbW92ZVRhZyhub2RlKTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlIG5vZGUuX19uYW1lO1xuICAgIGRlbGV0ZSBub2RlLl9faGFzQmluZGluZ3M7XG4gICAgZGVsZXRlIG5vZGUuX19pc0Jvb2xlYW47XG4gICAgZGVsZXRlIG5vZGUuX19pc0V2ZW50O1xuICAgIGRlbGV0ZSBub2RlLl9fZXhwcmVzc2lvbjtcbiAgICBkZWxldGUgbm9kZS5fX3Byb3BlcnRpZXM7XG4gICAgZGVsZXRlIG5vZGUuX19hdHRyaWJ1dGVPZjtcbiAgICBkZWxldGUgbm9kZS5fX2F0dHJpYnV0ZU9uO1xuICAgIGRlbGV0ZSBub2RlLl9fZXZlbnQ7ICAgIFxuICAgIGRlbGV0ZSBub2RlLl9faW5pdGlhbGl6ZWQ7XG4gICAgZGVsZXRlIG5vZGUuX19jb21wb25lbnQ7XG4gICAgZGVsZXRlIG5vZGUuX19lbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gW2F0dHJpYnV0ZU9mPW51bGxdIC0gaWYgbm9kZSBpcyBsaW5rZWQgd2l0aCBwYXJlbnQgc2NvcGVcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19pbnRlcnBvbGF0ZUF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZU9mID0gbnVsbCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMuX19pbml0aWFsaXplQXR0cmlidXRlKGF0dHJzW2ldLCBlbCwgYXR0cmlidXRlT2YpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYXR0cmlidXRlcyBhcyBwcm94eVxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2RlZmluZUF0dHJpYnV0ZXMoKSB7XG4gICAgY29uc3QgY2hhbmdlQXR0cmlidXRlID0gKGtleSwgdmFsdWUsIGlzRGVsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5fX2Rpc2FibGVBdHRyaWJ1dGVTZXR0ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlTm9kZShrZXkpO1xuXG4gICAgICBpZiAoaXNEZWxldGVkKSB7XG4gICAgICAgIG5vZGUgJiYgdGhpcy5fX2RlaW5pdGlhbGl6ZU5vZGUobm9kZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIHJldHVybiBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFub2RlKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICBub2RlID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGVOb2RlKGtleSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2luaXRpYWxpemVBdHRyaWJ1dGUobm9kZSwgdGhpcy5lbCwgdGhpcy5fX2F0dHJpYnV0ZU9mKTtcbiAgICB9O1xuXG4gICAgdGhpcy5hdHRycyA9IG5ldyBQcm94eSh0aGlzLl9fYXR0cnMsIHtcbiAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkgPT0gJ19faXNQcm94eScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgIH0sXG4gICAgICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYm9vbGVhbkF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyS2V5KSAhPSAtMSkge1xuICAgICAgICAgIGF0dHJLZXkgPSBgYm9vbGVhbi0ke2F0dHJLZXl9YDtcbiAgICAgICAgICB2YWx1ZT8gdGhpcy5lbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk6IHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGF0dHJLZXkgPSB1dGlscy50b0Rhc2hDYXNlKGtleSk7XG4gICAgICAgIGNoYW5nZUF0dHJpYnV0ZShhdHRyS2V5LCB1dGlscy5tYWtlQXR0cmlidXRlVmFsdWUodmFsdWUpLCB0cnVlKTtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJveHkgdG8gb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gcGFyZW50c1xuICAgKiBAcmV0dXJucyB7UHJveHl9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fb2JzZXJ2ZShvYmosIHBhcmVudHMpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KG9iaiwge1xuICAgICAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHsgXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2lzUHJveHlcIikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fdGFyZ2V0XCIpIHtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleSA9PSBcIl9fY29tcG9uZW50XCIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJfX2tleXNcIikge1xuICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQWtpbGkuX19ldmFsdWF0aW9uKSB7ICBcbiAgICAgICAgICBsZXQga2V5cyA9IFtdLmNvbmNhdChwYXJlbnRzLCBba2V5XSk7XG4gICAgICAgICAgbGV0IG5vdEJpbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgZXZhbHVhdGVkID0gIXV0aWxzLmhhc1Byb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19zY29wZSk7IFxuICAgICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAgIGxldCBleGNBcnIgPSBrZXlzLnNsaWNlKCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgU2NvcGUpIHtcbiAgICAgICAgICAgIGxldCByZWFsVGFyZ2V0ID0gdXRpbHMuZ2V0T3duUHJvcGVydHlUYXJnZXQodGFyZ2V0LCBrZXkpO1xuICAgICAgICAgICAgcmVhbFRhcmdldCAmJiAocmVhbFRhcmdldCBpbnN0YW5jZW9mIFNjb3BlKSAmJiAoY29tcG9uZW50ID0gIHJlYWxUYXJnZXQuX19jb21wb25lbnQpO1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgICBpZiAoQWtpbGkuX193cmFwcGluZyAmJiBrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmb3JQYXJlbnRzID0gQWtpbGkuX19ldmFsdWF0aW9uLmNvbXBvbmVudC5wYXJlbnRzKGMgPT4gYyBpbnN0YW5jZW9mIEFraWxpLmNvbXBvbmVudHMuRm9yKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZm9yUGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwLCBjID0ga2V5cy5sZW5ndGg7IGsgPCBjOyBrKyspIHsgXG4gICAgICAgICAgICAgIGNvbnN0IGZvckRhdGEgPSBmb3JQYXJlbnRzW2ldLmRhdGE7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhleGNBcnIsIGNvbXBvbmVudC5fX3Njb3BlKTtcblxuICAgICAgICAgICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PSAnb2JqZWN0JyAmJiBmb3JEYXRhID09PSBkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICBleGNBcnIucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgZWxzZSBpZiAoIXV0aWxzLmdldEVudW1lcmFibGVQcm9wZXJ0eVRhcmdldCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIG5vdEJpbmRpbmcgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX19iaW5kTm9kZShBa2lsaS5fX2V2YWx1YXRpb24ubGlzdCwgY29tcG9uZW50LCBrZXlzLCBwYXJlbnRzLCB0YXJnZXRba2V5XSwgbm90QmluZGluZywgZXZhbHVhdGVkKTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gICAgICB9LFxuICAgICAgc2V0OiAodGFyZ2V0LCBrZXksIHZhbHVlKSA9PiB7IFxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhbHVlID0gQWtpbGkud3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgQ0hFQ0tfRVhJU1RFTkNFOiBpZiAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IHRhcmdldFBhcmVudFZhbHVlID0gcGFyZW50cy5sZW5ndGggPiAxPyB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhwYXJlbnRzLnNsaWNlKDAsIC0xKSwgdGhpcy5fX3Njb3BlKTogdGhpcy5fX3Njb3BlO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGsgaW4gdGFyZ2V0UGFyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0UGFyZW50VmFsdWUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRQYXJlbnRWYWx1ZVtrXSAmJiB0YXJnZXRQYXJlbnRWYWx1ZVtrXS5fX3RhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgIGJyZWFrIENIRUNLX0VYSVNURU5DRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0W2tleV0gPSB0aGlzLl9fbmVzdGVkT2JzZXJ2ZSh2YWx1ZSwga2V5cyk7XG5cbiAgICAgICAgaWYoIXRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgaWYgKEFraWxpLl9faXNvbGF0aW9uKSB7IFxuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCBmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLl9faXNSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMuX190cmlnZ2VyU3RvcmVBbmRBdHRyKGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fX2lzTW91bnRlZCkgeyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVsZXRlUHJvcGVydHk6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBrZXlzID0gW10uY29uY2F0KHBhcmVudHMsIFtrZXldKTtcblxuICAgICAgICBpZiAodGhpcy5fX2NoZWNrRGlzYWJsZW1lbnQoa2V5cykpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fX2lzU3lzdGVtS2V5KGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG5cbiAgICAgICAgaWYoIXRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChBa2lsaS5fX2lzb2xhdGlvbikge1xuICAgICAgICAgIHRoaXMuX19jcmVhdGVJc29sYXRpb25PYmplY3QocGFyZW50cywga2V5LCB0cnVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuX19pc1Jlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5fX3RyaWdnZXJTdG9yZUFuZEF0dHIoa2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9fZXZhbHVhdGVCeUtleXMoa2V5cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBzdG9yZSBhbmQgYXR0cmlidXRlcyBjaGFuZ2VcbiAgICovXG4gIF9fdHJpZ2dlclN0b3JlQW5kQXR0cihrZXlzKSB7XG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50S2V5cyA9IGtleXMuc2xpY2UoMCwgbCAtIGkpO1xuICAgICAgY29uc3QgY3VycmVudEtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhjdXJyZW50S2V5cyk7XG4gICAgICBjb25zdCB2YWwgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhjdXJyZW50S2V5cywgdGhpcy5fX3Njb3BlKTtcblxuICAgICAgaWYgKHRoaXMuX19zdG9yZUxpbmtzW2N1cnJlbnRLZXlTdHJpbmddKSB7ICBcbiAgICAgICAgdGhpcy5fX3N0b3JlVHJpZ2dlckJ5S2V5cyhjdXJyZW50S2V5cywgdmFsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX19hdHRyTGlua3NbY3VycmVudEtleVN0cmluZ10pIHtcbiAgICAgICAgdGhpcy5fX2F0dHJUcmlnZ2VyQnlLZXlzKGN1cnJlbnRLZXlzLCB2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgaGFzaCBmb3IgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9ICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2NyZWF0ZUtleXNIYXNoKGtleXMpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fX3Njb3BlLl9fbmFtZX0uJHtBa2lsaS5qb2luQmluZGluZ0tleXMoa2V5cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHN0b3JlIG9mIHRoZSBkaXNhYmxlbWVudCB0eXBlXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBcbiAgICovXG4gIF9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSkge1xuICAgIHJldHVybiAoe1xuICAgICAgcHJveHk6ICdfX2Rpc2FibGVQcm94eScsXG4gICAgICBzdG9yZTogJ19fZGlzYWJsZVN0b3JlS2V5cycsXG4gICAgICBhdHRyOiAnX19kaXNhYmxlQXR0cktleXMnXG4gICAgfSlbdHlwZV07XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUga2V5cyBzZXR0ZXJcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kaXNhYmxlS2V5cyhrZXlzLCB0eXBlID0gJ3Byb3h5JykgeyAgICBcbiAgICB0aGlzW3RoaXMuX19nZXREaXNhYmxlbWVudFR5cGVTdG9yZSh0eXBlKV1ba2V5cz8gdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpOiAnX19hbGwnXSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBrZXlzIHNldHRlclxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VuYWJsZUtleXMoa2V5cywgdHlwZSA9ICdwcm94eScpIHtcbiAgICBkZWxldGUgdGhpc1t0aGlzLl9fZ2V0RGlzYWJsZW1lbnRUeXBlU3RvcmUodHlwZSldW2tleXM/IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTogJ19fYWxsJ107XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleXMgc2V0dGVyIGRpc2FibGVtYW50XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCB0eXBlID0gJ3Byb3h5Jykge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5fX2dldERpc2FibGVtZW50VHlwZVN0b3JlKHR5cGUpO1xuICAgIHJldHVybiB0aGlzW3N0b3JlXS5fX2FsbD8gdHJ1ZTogdGhpc1tzdG9yZV1bdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSB2YWx1ZSB0byB0aGUgc3RvcmUgYnkgdGhlIGtleXNcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXMgXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgICAgXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7IFxuICAgIGlmICh0aGlzLl9fY2hlY2tEaXNhYmxlbWVudChrZXlzLCAnc3RvcmUnKSkgeyAgICAgIFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5fX3N0b3JlTGlua3NbQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpXTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YWx1ZSA9IHV0aWxzLmNvcHkodmFsdWUsIHsgcGxhaW46IHRydWUgfSk7XG4gICAgY29uc3QgcCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5rcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTsgICBcbiAgICAgIFxuICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcC5wdXNoKHRoaXMuX19zdG9yZVRyaWdnZXJCeU5hbWUobGluay5uYW1lLCB2YWx1ZSkpOyAgICAgIFxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgdmFsdWUgdG8gdGhlIHN0b3JlIGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zdG9yZVRyaWdnZXJCeU5hbWUobmFtZSwgdmFsdWUpIHsgIFxuICAgIHN0b3JlLl9fdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgbGV0IGxpbmtzID0gKEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSB8fCBbXSkuY29uY2F0KEFraWxpLl9fc3RvcmVMaW5rc1snKiddIHx8IFtdKTtcblxuICAgIGlmICghbGlua3MgfHwgIWxpbmtzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpbmtzID0gdXRpbHMuc29ydChsaW5rcywgWydkYXRlJ10sIHRydWUpO1xuXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbGluay5jb21wb25lbnQ7XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAobGluay5mbikge1xuICAgICAgICAgIEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBsaW5rLmZuLmNhbGwoY29tcG9uZW50LCB2YWx1ZSwgbmFtZSkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGluay5nZXQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudC5fX2Rpc2FibGVLZXlzKGxpbmsua2V5cywgJ3N0b3JlJyk7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMobGluay5rZXlzLCBjb21wb25lbnQuX19zY29wZSk7XG4gICAgICAgICF1dGlscy5jb21wYXJlKGN1cnJlbnQsIHZhbHVlKSAmJiBjb21wb25lbnQuc2NvcGUuX19zZXQobGluay5rZXlzLCB2YWx1ZSk7ICAgXG4gICAgICAgIGNvbXBvbmVudC5fX2VuYWJsZUtleXMobGluay5rZXlzLCAnc3RvcmUnKTtcbiAgICAgIH0gIFxuICAgIH0pOyAgIFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge29iaGVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fc3RvcmVCeUtleXMobmFtZSwga2V5cywgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucyA9IHsgZ2V0OiB0cnVlLCBzZXQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIGlmICgha2V5cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTdG9yZSBsaW5rIFwiJHtuYW1lfVwiIG11c3QgaGF2ZSB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZWApO1xuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5nZXQgJiYgIW9wdGlvbnMuc2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFN0b3JlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIGF0IGxlYXN0IFwiZ2V0XCIgb3IgXCJzZXRcIiBvcHRpb24gYXMgdHJ1ZWApO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShrZXlzKSkge1xuICAgICAga2V5cyA9IFtrZXlzXTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fX2Rpc2FibGVLZXlzKGtleXMsICdzdG9yZScpO1xuICAgIChzdG9yZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSB8fCAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCBzdG9yZVtuYW1lXSk7XG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cywgJ3N0b3JlJyk7XG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgaW5mbztcblxuICAgIGlmICghdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSkge1xuICAgICAgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXSA9IFtdO1xuICAgIH1cblxuICAgIGxldCBhcnIgPSB0aGlzLl9fc3RvcmVMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMuY29tcG9uZW50ID09PSB0aGlzICYmIHJlcy5uYW1lID09IG5hbWUgJiYgcmVzLmtleVN0cmluZyA9PSBrZXlTdHJpbmcpIHtcbiAgICAgICAgcmVzLnNldCA9IG9wdGlvbnMuc2V0O1xuICAgICAgICByZXMuZ2V0ID0gb3B0aW9ucy5nZXQ7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdKSB7XG4gICAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBpbmZvID0geyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGtleXMsIGtleVN0cmluZywgZGF0ZTogRGF0ZS5ub3coKSwgc2V0OiBvcHRpb25zLnNldCwgZ2V0OiBvcHRpb25zLmdldCB9O1xuICAgIHRoaXMuX19zdG9yZUxpbmtzW2tleVN0cmluZ10ucHVzaChpbmZvKTtcbiAgICBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV0ucHVzaChpbmZvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gICBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkgeyBcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gc3RvcmUuX190YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk6IG9wdGlvbnMuY2FsbE9uU3RhcnQ7XG5cbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdID0gW107XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLmNvbXBvbmVudCA9PT0gdGhpcyAmJiByZXMubmFtZSA9PSBuYW1lICYmIHJlcy5mbiA9PT0gZm4pIHtcbiAgICAgICAgcmVzLmRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgQWtpbGkuX19zdG9yZUxpbmtzW25hbWVdLnB1c2goeyBjb21wb25lbnQ6IHRoaXMsIG5hbWUsIGZuLCBkYXRlOiBEYXRlLm5vdygpIH0pO1xuXG4gICAgaWYgKG5hbWUgPT0gJyonICYmIG9wdGlvbnMuY2FsbE9uU3RhcnQgIT09IGZhbHNlKSB7XG4gICAgICBsZXQgc3RvcmVLZXlzID0gT2JqZWN0LmtleXMoc3RvcmUuX190YXJnZXQpO1xuICAgICAgbGV0IHAgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdG9yZUtleXMubGVuZ3RoIDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQga2V5ID0gc3RvcmVLZXlzW2ldO1xuICAgICAgICBsZXQgdmFsID0gc3RvcmUuX190YXJnZXRba2V5XTtcbiAgICAgICAgcC5wdXNoKEFraWxpLnVuaXNvbGF0ZSgoKSA9PiBmbi5jYWxsKHRoaXMsIHZhbCwga2V5KSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocCk7XG4gICAgfVxuXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCBzdG9yZVtuYW1lXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0b3JlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5S2V5cyhuYW1lLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBoYXZlIHRvIHBhc3MgdGhlIHNjb3BlIHByb3BlcnR5IG5hbWUgZm9yIHN0b3JlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgcmVzID0gYXJyW2ldO1xuICAgICAgbGV0IGxpbmtzID0gQWtpbGkuX19zdG9yZUxpbmtzW3Jlcy5uYW1lXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgIT09IHRoaXMgfHwgcmVzLm5hbWUgIT0gbmFtZSB8fCByZXMua2V5U3RyaW5nICE9IGtleVN0cmluZykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYXJyLnNwbGljZShpLCAxKTtcblxuICAgICAgaWYgKCFsaW5rcyB8fCAhbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBrID0gbGlua3MubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgICAgbGV0IGxpbmsgPSBsaW5rc1trXTtcblxuICAgICAgICBpZiAobGluay5jb21wb25lbnQgPT09IHRoaXMgJiYgbGluay5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgICAgbGlua3Muc3BsaWNlKGssIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghbGlua3MubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgdGhpcy5fX3N0b3JlTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rIHdpdGggdGhlIGZ1bmN0aW9uXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5zdG9yZUJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIUFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IEFraWxpLl9fc3RvcmVMaW5rc1tuYW1lXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gbGlua3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBsaW5rc1tpXTtcblxuICAgICAgaWYgKHJlcy5jb21wb25lbnQgPT09IHRoaXMgJiYgcmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBBa2lsaS5fX3N0b3JlTGlua3NbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBrZXlzXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFxuICAgKiBAcGFyYW0geyp9IHZhbHVlICAgIFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJUcmlnZ2VyQnlLZXlzKGtleXMsIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX19jaGVja0Rpc2FibGVtZW50KGtleXMsICdhdHRyJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW0FraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKV07XG4gICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rc1tpXTtcblxuICAgICAgICBpZiAobGluay5mbikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsaW5rLnNldCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldiA9ICdvbicgKyB1dGlscy5jYXBpdGFsaXplKGxpbmsubmFtZSk7XG4gICAgICAgIHRoaXMuYXR0cnNbZXZdICYmIHRoaXMuYXR0cnNbZXZdLnRyaWdnZXIodmFsdWUsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYW4gYXR0cmlidXRlIGV2ZW50IGJ5IHRoZSBuYW1lXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19hdHRyVHJpZ2dlckJ5TmFtZShuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBsaW5rcyA9ICh0aGlzLl9fYXR0ckxpbmtzW25hbWVdIHx8IFtdKS5jb25jYXQodGhpcy5fX2F0dHJMaW5rc1snKiddIHx8IFtdKTtcbiAgICBcbiAgICBpZiAoIWxpbmtzIHx8ICFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9ICBcbiAgICBcbiAgICBsaW5rcyA9IHV0aWxzLnNvcnQobGlua3MsIFsnZGF0ZSddLCB0cnVlKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgbGluayA9IGxpbmtzW2ldOyAgICBcblxuICAgICAgaWYgKGxpbmsuZm4pIHtcbiAgICAgICAgQWtpbGkudW5pc29sYXRlKCgpID0+IGxpbmsuZm4uY2FsbCh0aGlzLCB2YWx1ZSwgdXRpbHMudG9EYXNoQ2FzZShuYW1lKSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYoIWxpbmsuZ2V0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9fZGlzYWJsZUtleXMobGluay5rZXlzLCAnYXR0cicpO1xuICAgICAgbGV0IGN1cnJlbnQgPSB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhsaW5rLmtleXMsIHRoaXMuX19zY29wZSk7XG4gICAgICAhdXRpbHMuY29tcGFyZShjdXJyZW50LCB2YWx1ZSkgJiYgdGhpcy5zY29wZS5fX3NldChsaW5rLmtleXMsIHZhbHVlKTtcbiAgICAgIHRoaXMuX19lbmFibGVLZXlzKGxpbmsua2V5cywgJ2F0dHInKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGF0dHJpYnV0ZSBsaW5rIHdpdGggdGhlIHNjb3BlIHByb3BlcnR5XG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2F0dHJCeUtleXMobmFtZSwga2V5cywgb3B0aW9ucyA9IHt9KSB7ICAgXG4gICAgb3B0aW9ucyA9IHsgZ2V0OiB0cnVlLCBzZXQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcbiAgICBuYW1lID0gdXRpbHMudG9DYW1lbENhc2UobmFtZSk7XG5cbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCIgbXVzdCBoYXZlIHRoZSBzY29wZSBwcm9wZXJ0eSBuYW1lYCk7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fZGlzYWJsZUtleXMoa2V5cywgJ2F0dHInKTtcbiAgICAodGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSB8fCAhdXRpbHMuaGFzUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX3Njb3BlKSkgJiYgdGhpcy5zY29wZS5fX3NldChrZXlzLCB0aGlzLmF0dHJzW25hbWVdKTsgXG4gICAgdGhpcy5fX2VuYWJsZUtleXMoa2V5cywgJ2F0dHInKTtcbiAgICBsZXQga2V5U3RyaW5nID0gQWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpO1xuICAgIFxuICAgIGlmICghdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddKSB7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSA9PSBuYW1lICYmIHJlcy5rZXlTdHJpbmcgPT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIHJlcy5nZXQgPSBvcHRpb25zLmdldDtcbiAgICAgICAgcmVzLnNldCA9IG9wdGlvbnMuc2V0O1xuICAgICAgICByZXMuZGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fYXR0ckxpbmtzW2tleVN0cmluZ10ucHVzaCh7IG5hbWUsIGtleXMsIGtleVN0cmluZywgZGF0ZTogRGF0ZS5ub3coKSwgc2V0OiBvcHRpb25zLnNldCwgZ2V0OiBvcHRpb25zLmdldCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAqIEBwcm90ZWN0ZWQgXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgX19hdHRyQnlGdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7ICAgIFxuICAgIG5hbWUgPSB1dGlscy50b0NhbWVsQ2FzZShuYW1lKTtcbiAgICBsZXQgY2FsbCA9IG9wdGlvbnMuY2FsbE9uU3RhcnQgPT09IHVuZGVmaW5lZD8gdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKTogb3B0aW9ucy5jYWxsT25TdGFydDsgICAgXG5cbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHRoaXMuX19hdHRyTGlua3NbbmFtZV0gPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIHJlcy5kYXRlID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLl9fYXR0ckxpbmtzW25hbWVdLnB1c2goeyBuYW1lLCBmbiwgZGF0ZTogRGF0ZS5ub3coKSB9KTtcblxuICAgIGlmIChuYW1lID09ICcqJyAmJiBvcHRpb25zLmNhbGxPblN0YXJ0ICE9PSBmYWxzZSkge1xuICAgICAgbGV0IGF0dHJzS2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX19hdHRycykuZmlsdGVyKGsgPT4gISh0aGlzLl9fYXR0cnNba10gaW5zdGFuY2VvZiBBa2lsaS5FdmVudEVtaXR0ZXIpKTtcbiAgICAgIGxldCBwID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXR0cnNLZXlzLmxlbmd0aCA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGF0dHJzS2V5c1tpXTtcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuX19hdHRyc1trZXldO1xuICAgICAgICBwLnB1c2goQWtpbGkudW5pc29sYXRlKCgpID0+IGZuLmNhbGwodGhpcywgdmFsLCB1dGlscy50b0Rhc2hDYXNlKGtleSkpKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIHJldHVybiBBa2lsaS51bmlzb2xhdGUoKCkgPT4gZm4uY2FsbCh0aGlzLCB0aGlzLmF0dHJzW25hbWVdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgc2NvcGUgcHJvcGVydHlcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5hdHRyQnlLZXlzKG5hbWUsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGhhdmUgdG8gcGFzcyB0aGUgc2NvcGUgcHJvcGVydHkgbmFtZSBmb3IgYXR0cmlidXRlIGxpbmsgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAgIGtleXMgPSBba2V5c107XG4gICAgfVxuXG4gICAgbGV0IGtleVN0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKTtcbiAgICBsZXQgYXJyID0gdGhpcy5fX2F0dHJMaW5rc1trZXlTdHJpbmddO1xuXG4gICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCByZXMgPSBhcnJbaV07XG5cbiAgICAgIGlmIChyZXMubmFtZSAhPSBuYW1lIHx8IHJlcy5rZXlTdHJpbmcgIT0ga2V5U3RyaW5nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgZGVsZXRlIHRoaXMuX19hdHRyTGlua3Nba2V5U3RyaW5nXTtcbiAgICB9XG4gIH1cblxuICAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYXR0cmlidXRlIGxpbmsgd2l0aCB0aGUgZnVuY3Rpb25cbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYXR0ckJ5RnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuX19hdHRyTGlua3NbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSBsaW5rcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHJlcyA9IGxpbmtzW2ldO1xuXG4gICAgICBpZiAocmVzLm5hbWUgPT0gbmFtZSAmJiByZXMuZm4gPT09IGZuKSB7XG4gICAgICAgIGxpbmtzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFsaW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fYXR0ckxpbmtzW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUga2V5IGlzIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2lzU3lzdGVtS2V5IChrZXkpIHtcbiAgICBpZiAoa2V5ID09ICdfXycgfHwgKGtleVswXSA9PSAnXycgJiYga2V5WzFdID09ICdfJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihrZXkpICE9IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogTmVzdGVkIG9ic2VydmluZyB0aGUgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbc3RhcnRLZXlzXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX25lc3RlZE9ic2VydmUgKHZhbHVlLCBzdGFydEtleXMpIHtcbiAgICBjb25zdCBvYnNlcnZlID0gKHZhbHVlLCBwYXJlbnRzKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KHZhbHVlKSAmJiAhdXRpbHMuaXNTY29wZVByb3h5KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2NvcGUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHRhcmdldCA9IHZhbHVlO1xuXG4gICAgICBDSEVDS19QUk9YWTogaWYgKHZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICB0YXJnZXQgPSB2YWx1ZS5fX3RhcmdldDtcblxuICAgICAgICBpZiAodGhpcy5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcpIHtcbiAgICAgICAgICBicmVhayBDSEVDS19QUk9YWTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHZhbHVlLl9fY29tcG9uZW50ICE9PSB0aGlzIHx8XG4gICAgICAgICAgQWtpbGkuam9pbkJpbmRpbmdLZXlzKHBhcmVudHMpICE9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyh2YWx1ZS5fX2tleXMpXG4gICAgICAgICkge1xuICAgICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCB7IG5lc3RlZDogZmFsc2UgfSk7XG4gICAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCF0aGlzLl9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU2NvcGUpKSB7XG4gICAgICAgIHRhcmdldCA9IHV0aWxzLmNvcHkodGFyZ2V0LCB7IG5lc3RlZDogZmFsc2UgfSApOyAgICAgICAgICBcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldEtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRhcmdldEtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7ICAgIFxuICAgICAgICBjb25zdCBrID0gdGFyZ2V0S2V5c1tpXTtcbiAgICAgICAgY29uc3QgdmFsID0gdGFyZ2V0W2tdOyAgICAgICAgXG4gICAgICAgIGNvbnN0IGtleXMgPSBbXS5jb25jYXQocGFyZW50cywgW2tdKTsgICBcbiAgICAgICAgdGFyZ2V0W2tdID0gb2JzZXJ2ZSh2YWwsIGtleXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXZhbHVlLl9faXNQcm94eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX29ic2VydmUodmFsdWUsIHBhcmVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiBvYnNlcnZlKHZhbHVlLCBzdGFydEtleXMgfHwgW10pO1xuICB9XG5cbiAgIC8qKlxuICAgKiBDcmVhdGUgYW4gaXNvbGF0aW9uIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWxldGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jcmVhdGVJc29sYXRpb25PYmplY3QgKHBhcmVudHMsIGtleSwgaXNEZWxldGVkID0gZmFsc2UpIHtcbiAgICBjb25zdCBrZXlzID0gcGFyZW50cy5sZW5ndGg/IFtwYXJlbnRzWzBdXTogW2tleV07XG4gICAgY29uc3QgaXNvbGF0aW9uSGFzaCA9IHRoaXMuX19jcmVhdGVLZXlzSGFzaChrZXlzKTtcblxuICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgaXNEZWxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXSkge1xuICAgICAgQWtpbGkuX19pc29sYXRpb25baXNvbGF0aW9uSGFzaF0gPSB7XG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAga2V5c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAoaXNEZWxldGVkICE9PSB1bmRlZmluZWQpICYmIChBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXS5pc0RlbGV0ZWQgPSBpc0RlbGV0ZWQpO1xuICAgIHJldHVybiBBa2lsaS5fX2lzb2xhdGlvbltpc29sYXRpb25IYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwYXJlIHRoZSBub2RlIHRvIGJpbmRpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGJpbmQgLSBieSBkZWZhdWx0IGlzIGNvbXBvbmVudC5fX2V2YWx1YXRpb24ubGlzdFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmVudHNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtub3RCaW5kaW5nPWZhbHNlXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtldmFsdWF0ZWQ9ZmFsc2VdXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fYmluZE5vZGUoYmluZCwgcmVhbENvbXBvbmVudCwga2V5cywgcGFyZW50cywgdmFsdWUsIG5vdEJpbmRpbmcgPSBmYWxzZSwgZXZhbHVhdGVkID0gZmFsc2UpIHtcbiAgICBsZXQgcGFyZW50S2V5c1N0cmluZyA9IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhwYXJlbnRzKTtcbiAgICBsZXQgY29tcG9uZW50ID0gdGhpcztcblxuICAgIGlmIChiaW5kLmxlbmd0aCAmJiAhbm90QmluZGluZykge1xuICAgICAgbGV0IGwgPSBiaW5kLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgZGF0YSA9IGJpbmRbbF07XG5cbiAgICAgIGlmIChkYXRhLnJlYWxDb21wb25lbnQgPT09IHRoaXMgJiYgZGF0YS5rZXlzU3RyaW5nID09IHBhcmVudEtleXNTdHJpbmcpIHtcbiAgICAgICAgY29tcG9uZW50ID0gZGF0YS5jb21wb25lbnQ7XG4gICAgICB9ICAgICAgXG4gICAgICBcbiAgICAgIGlmIChkYXRhLmtleXNTdHJpbmcgPT0gcGFyZW50S2V5c1N0cmluZyAmJiBkYXRhLmNvbXBvbmVudCA9PT0gY29tcG9uZW50KSB7XG4gICAgICAgIGJpbmQuc3BsaWNlKGwsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiaW5kLnB1c2goe1xuICAgICAgY29tcG9uZW50LFxuICAgICAgcmVhbENvbXBvbmVudDogcmVhbENvbXBvbmVudCxcbiAgICAgIGtleXNTdHJpbmc6IEFraWxpLmpvaW5CaW5kaW5nS2V5cyhrZXlzKSxcbiAgICAgIHBhcmVudHMsXG4gICAgICBrZXlzLFxuICAgICAgdmFsdWUsXG4gICAgICBldmFsdWF0ZWQsXG4gICAgICBub3RCaW5kaW5nXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGtleSBpcyBzeXN0ZW0gYmluZGluZyB0aGluZ1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqLyBcbiAgX19pc1N5c3RlbUJpbmRpbmdLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSA9PSAnX19kYXRhJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYmluZGluZyBieSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJpbmQoa2V5cykge1xuICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBuZXN0ZWQgYmluZGluZ3MgYnkga2V5c1xuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5cyBcbiAgICovXG4gIF9fZ2V0QWxsQmluZHMoa2V5cykge1xuICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9fZ2V0QmluZChrZXlzKTtcblxuICAgIGlmICghcm9vdCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBjb25zdCBjb2xsZWN0ID0gKG9iaikgPT4ge1xuICAgICAgZGF0YSA9IGRhdGEuY29uY2F0KG9iai5fX2RhdGEgfHwgW10pO1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkgfHwga2V5ID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb2xsZWN0KG9ialtrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsZWN0KHJvb3QpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBiaW5kaW5nIGJ5IGtleXNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0ga2V5c1xuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICogQHJldHVybnMge29iamVjdHxudWxsfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldEJvdW5kTm9kZShrZXlzLCBub2RlKSB7XG4gICAgbGV0IGJpbmQgPSAgdXRpbHMuZ2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzKTtcblxuICAgIGlmICghYmluZCB8fCAhYmluZC5fX2RhdGEgfHwgIWJpbmQuX19kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBkYXRhID0gYmluZC5fX2RhdGFbaV07XG5cbiAgICAgIGlmIChkYXRhLm5vZGUgPT09IG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZXZhbHVhdGVkPWZhbHNlXVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19zZXROb2RlUHJvcGVydHkobm9kZSwga2V5cywgdmFsdWUsIGV2YWx1YXRlZCA9IGZhbHNlKSB7XG4gICAgbGV0IHByb3AgPSB0aGlzLl9fZ2V0Tm9kZVByb3BlcnR5KG5vZGUsIGtleXMpOyAgICBcbiAgICBsZXQgaGFzaCA9IHV0aWxzLmNyZWF0ZUhhc2godmFsdWUpO1xuXG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGxldCByZXMgPSBub2RlLl9fY29tcG9uZW50Ll9fY29tcGFyZU5vZGVQcm9wZXJ0eVZhbHVlKHByb3AsIHZhbHVlKTtcbiAgICAgIHByb3AudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHByb3AuaGFzaCA9IGhhc2g7XG4gICAgICByZXR1cm4gIXJlcztcbiAgICB9XG4gICAgXG4gICAgbm9kZS5fX3Byb3BlcnRpZXNbdGhpcy5fX2NyZWF0ZUtleXNIYXNoKGtleXMpXSA9IHtcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgIHZhbHVlLFxuICAgICAgaGFzaCxcbiAgICAgIG5vZGUsXG4gICAgICBrZXlzLFxuICAgICAgZXZhbHVhdGVkICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXROb2RlUHJvcGVydHkobm9kZSwga2V5cykge1xuICAgIHJldHVybiBub2RlLl9fcHJvcGVydGllc1t0aGlzLl9fY3JlYXRlS2V5c0hhc2goa2V5cyldIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBub2RlIHByb3BlcnR5XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZGVsZXRlTm9kZVByb3BlcnR5KG5vZGUsIGtleXMpIHtcbiAgICBsZXQgaGFzaCA9IGAke3RoaXMuX19zY29wZS5fX25hbWV9LiR7QWtpbGkuam9pbkJpbmRpbmdLZXlzKGtleXMpfWA7XG4gICAgZGVsZXRlIG5vZGUuX19wcm9wZXJ0aWVzW2hhc2hdO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcCBub2Rlc1xuICAgKiBcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX21hcE5vZGVzKGZuLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyByb290QXR0cnM6IHRydWUsIGF0dHJzOiB0cnVlLCBub2RlOiB0cnVlLCBlbDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgZmluZCA9IChlbCkgPT4ge1xuICAgICAgaWYoIWVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5hdHRycyAmJiAoZWwgIT09IHRoaXMuZWwgfHwgb3B0aW9ucy5yb290QXR0cnMpKSB7XG4gICAgICAgIGZvciAobGV0IGsgPSAwLCBhdHRycyA9IGVsLmF0dHJpYnV0ZXMsIGMgPSBhdHRycy5sZW5ndGg7IGsgPCBjOyBrKyspIHtcbiAgICAgICAgICBmbihhdHRyc1trXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IGVsLmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGVsLmNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gMykge1xuICAgICAgICAgIG9wdGlvbnMubm9kZSAmJiBmbihub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09IDEgJiYgIW5vZGUuX19ha2lsaSkge1xuICAgICAgICAgIGZpbmQobm9kZSk7XG4gICAgICAgICAgb3B0aW9ucy5lbCAmJiBmbihub2RlKTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGZpbmQodGhpcy5lbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBub2Rlc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19nZXRBbGxOb2RlcygpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgIHRoaXMuX19tYXBOb2Rlcyhub2RlID0+IG5vZGVzLnB1c2gobm9kZSkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuICBcbiAgLyoqXG4gICAqIEJpbmQgZGF0YSB3aXRoIHRoZSBrZXlzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19iaW5kKGtleXMsIGRhdGEpIHtcbiAgICB1dGlscy5zZXRQcm9wZXJ0eUJ5S2V5cyhrZXlzLCB0aGlzLl9fYmluZGluZ3MsIChsYXN0LCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IHsgX19kYXRhOiBbXSB9O1xuXG4gICAgICBpZiAoIWxhc3QpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlPyB2YWx1ZTogb2JqO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iaiA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9iai5fX2RhdGEpIHtcbiAgICAgICAgb2JqLl9fZGF0YSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBvYmouX19kYXRhLnB1c2goZGF0YSk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYmluZCB0aGUga2V5c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kKGtleXMpIHtcbiAgICBsZXQgYmluZCA9IHV0aWxzLmdldFByb3BlcnR5QnlLZXlzKGtleXMsIHRoaXMuX19iaW5kaW5ncyk7XG5cbiAgICBpZiAoIWJpbmQgfHwgIWJpbmQuX19kYXRhKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiaW5kLl9fZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gYmluZC5fX2RhdGFbaV0ubm9kZTtcbiAgICAgIHRoaXMuX19kZWxldGVOb2RlUHJvcGVydHkobm9kZSwga2V5cyk7XG4gICAgfVxuXG4gICAgdXRpbHMuZGVsZXRlUHJvcGVydHlCeUtleXMoa2V5cywgdGhpcy5fX2JpbmRpbmdzLCAodmFsdWUpID0+IHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMSkge1xuICAgICAgICB2YWx1ZS5fX2RhdGEgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmJpbmQgZGF0YSBieSBub2Rlc1xuICAgKlxuICAgKiBAcGFyYW0ge05vZGV8Tm9kZVtdfSBub2Rlc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3VuYmluZEJ5Tm9kZXMobm9kZXMpIHtcbiAgICAhQXJyYXkuaXNBcnJheShub2RlcykgJiYgKG5vZGVzID0gW25vZGVzXSk7XG4gICAgIFxuICAgIGNvbnN0IHVuYmluZCA9IChvYmosIHBhcmVudCwga2V5KSA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgaiA8IGM7IGorKykge1xuICAgICAgICBjb25zdCBrID0ga2V5c1tqXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChrID09ICdfX2RhdGEnKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBvYmpba10gfHwgW107XG4gICAgICAgICAgbGV0IGwgPSBkYXRhLmxlbmd0aDtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluZCA9IGRhdGFbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChub2Rlcy5pbmRleE9mKGJpbmQubm9kZSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGJpbmQubm9kZTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbCkge1xuICAgICAgICAgICAgZGVsZXRlIG9ialtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuX19pc1N5c3RlbUJpbmRpbmdLZXkoaykpIHtcbiAgICAgICAgICB1bmJpbmQob2JqW2tdLCBvYmosIGspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocGFyZW50ICYmICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0ZSBwYXJlbnRba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB1bmJpbmQodGhpcy5fX2JpbmRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIHBhcmVudHMgYmluZGluZ3Mgd2l0aCB0aGUgbm9kZXNcbiAgICogXG4gICAqIEBwYXJhbSB7Tm9kZXxOb2RlW119IG5vZGVzXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpIHsgIFxuICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLl9fcGFyZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX19wYXJlbnRzW2ldOyAgICAgIFxuICAgICAgcGFyZW50ICYmIHBhcmVudC5fX2FraWxpICYmIHBhcmVudC5fX2FraWxpLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBsaW5rc1xuICAgKiBcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19jbGVhclN0b3JlTGlua3MoKSB7XG4gICAgY29uc3QgbGlua3MgPSBBa2lsaS5fX3N0b3JlTGlua3M7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gbGlua3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IGxpbmtzW2tleV07XG5cbiAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbGluayA9IGFycltpXTtcbiAgXG4gICAgICAgIGlmIChsaW5rLmNvbXBvbmVudCA9PT0gdGhpcykge1xuICAgICAgICAgIGZvcihsZXQgayBpbiBsaW5rKSB7XG4gICAgICAgICAgICBkZWxldGUgbGlua1trXVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFhcnIubGVuZ3RoKSB7XG4gICAgICAgIGRlbGV0ZSBsaW5rc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNoaWxkIGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZUNoaWxkcmVuKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICByZW1vdmUoY2hpbGQuX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGQuX19ha2lsaS5fX3JlbW92ZShvcHRpb25zKSk7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVtb3ZlKHRoaXMuX19jaGlsZHJlbik7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgY2hpbGRyZW4gcmVtb3ZpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3JlbW92ZShvcHRpb25zID0ge30pIHsgXG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgdGhpcy5hdHRycy5vblJlbW92ZWQgJiYgdGhpcy5hdHRycy5vblJlbW92ZWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7IFxuICAgIHRoaXMucmVtb3ZlZCgpOyAgIFxuICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHRoaXMuX19kZXRhY2goeyBzYXZlQmluZGluZ3M6IHRydWUgfSkpO1xuICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KHRoaXMuX19lbXB0eSh7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KSk7XG4gICAgdGhpcy5fX2NsZWFyU3RvcmVMaW5rcygpOyAgXG4gICAgQWtpbGkucmVtb3ZlU2NvcGUodGhpcy5fX3Njb3BlLl9fbmFtZSk7ICAgIFxuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG5cbiAgICBpZighb3B0aW9ucy5zYXZlQmluZGluZ3MpIHsgICBcbiAgICAgIHRoaXMuX191bmJpbmRCeU5vZGVzKG5vZGVzKTsgICBcbiAgICAgIHRoaXMuX191bmJpbmRQYXJlbnRzQnlOb2Rlcyhub2Rlcyk7XG4gICAgICBBa2lsaS5yZW1vdmVUYWcobm9kZXMpO1xuICAgIH1cblxuICAgIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIGRlbGV0ZSB0aGlzLmVsLl9fYWtpbGk7XG4gICAgICBkZWxldGUgdGhpcy5fX2lzTW91bnRlZDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9faXNDb21waWxlZDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9faXNSZXNvbHZlZDtcbiAgICAgIGRlbGV0ZSB0aGlzLl9fY2FuY2VsbGVkO1xuICAgICAgZGVsZXRlIHRoaXMuX19wcmV2ZW50O1xuICAgICAgZGVsZXRlIHRoaXMuX19jb250ZW50O1xuICAgICAgdGhpcy5fX2JpbmRpbmdzID0gbnVsbDtcbiAgICAgIHRoaXMuX19ldmFsdWF0aW5nRXZlbnQgPSBudWxsO1xuICAgICAgdGhpcy5fX3JlY29tcGlsaW5nID0gbnVsbDtcbiAgICAgIHRoaXMuX19jb21waWxpbmcgPSBudWxsO1xuICAgICAgdGhpcy5fX2Rpc2FibGVQcm94eSA9IG51bGw7XG4gICAgICB0aGlzLl9fZGlzYWJsZVN0b3JlS2V5cyA9IG51bGw7XG4gICAgICB0aGlzLl9fZGlzYWJsZUF0dHJLZXlzID0gbnVsbDtcbiAgICAgIHRoaXMuX19jaGlsZHJlbiA9IG51bGw7XG4gICAgICB0aGlzLl9fcGFyZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuX19wYXJlbnRzID0gbnVsbDsgICAgICBcbiAgICAgIHRoaXMuX19hdHRycyA9IG51bGw7XG4gICAgICB0aGlzLl9fYXR0ckxpbmtzID0gbnVsbDtcbiAgICAgIHRoaXMuX19zdG9yZUxpbmtzID0gbnVsbDtcbiAgICAgIHRoaXMuX19hdHRyaWJ1dGVPZiA9IG51bGw7XG4gICAgICB0aGlzLl9fZXZhbHVhdGlvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgIHRoaXMuZWwgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX19kZXRhY2gob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fX3BhcmVudCAmJiB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19zcGxpY2VDaGlsZCh0aGlzLmVsKTtcbiAgICBjb25zdCBub2RlcyA9IFtdXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gdGhpcy5lbC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgbm9kZS5fX2luaXRpYWxpemVkICYmIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgaWYoIW9wdGlvbnMuc2F2ZUJpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgY29tcG9uZW50IGh0bWxcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2VtcHR5KG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgICBjb25zdCBub2RlcyA9IHRoaXMuX19yZW1vdmVDaGlsZHJlbih7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KTtcblxuICAgIHRoaXMuX19tYXBOb2Rlcyhub2RlID0+IHsgICAgICBcbiAgICAgIGlmKG5vZGUubm9kZVR5cGUgPT0gMSkge1xuICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKCFub2RlLl9faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLl9fZGVpbml0aWFsaXplTm9kZShub2RlLCB7IHNhdmVCaW5kaW5nczogdHJ1ZSB9KTsgIFxuICAgICAgbm9kZXMucHVzaChub2RlKTsgICAgXG4gICAgfSwgeyByb290QXR0cnM6IGZhbHNlIH0pO1xuXG4gICAgaWYoIW9wdGlvbnMuc2F2ZUJpbmRpbmdzKSB7XG4gICAgICB0aGlzLl9fdW5iaW5kQnlOb2Rlcyhub2Rlcyk7XG4gICAgICB0aGlzLl9fdW5iaW5kUGFyZW50c0J5Tm9kZXMobm9kZXMpO1xuICAgICAgQWtpbGkucmVtb3ZlVGFnKG5vZGVzKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGFyZW50IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcj0nJ11cbiAgICogQHBhcmFtIHtib29sZWFufSBbZmluZEFsbD10cnVlXSAtIGdldCBhcnJheSBpZiB0cnVlXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0UGFyZW50KHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSBmYWxzZSwgbGV2ZWxzID0gbnVsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgbGV2ZWwgPSAwO1xuXG4gICAgaWYgKHR5cGVvZiBsZXZlbHMgIT0gJ29iamVjdCcpIHtcbiAgICAgIGxldmVscyA9IFtsZXZlbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmQgPSAocGFyZW50KSA9PiB7XG4gICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghbGV2ZWxzIHx8IGxldmVscy5pbmRleE9mKGxldmVsKSAhPSAtMSkge1xuICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHBhcmVudC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaWYgKCFmaW5kQWxsKSB7XG4gICAgICAgICAgICBhcnIucHVzaChwYXJlbnQuX19ha2lsaSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXJyLnB1c2gocGFyZW50Ll9fYWtpbGkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG4gICAgICBmaW5kKHBhcmVudC5fX2FraWxpLl9fcGFyZW50KTtcbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fcGFyZW50KTtcbiAgICByZXR1cm4gZmluZEFsbD8gYXJyOiAoYXJyWzBdIHx8IG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGlsZCBjb21wb25lbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmRBbGw9dHJ1ZV0gLSBnZXQgYXJyYXkgaWYgdHJ1ZVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fENvbXBvbmVudFtdfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX2dldENoaWxkcmVuKHNlbGVjdG9yID0gJycsIGZpbmRBbGwgPSB0cnVlLCBsZXZlbHMgPSBudWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBsZXZlbCA9IDA7XG5cbiAgICBpZiAodHlwZW9mIGxldmVscyAhPSAnb2JqZWN0Jykge1xuICAgICAgbGV2ZWxzID0gW2xldmVsc107XG4gICAgfVxuXG4gICAgY29uc3QgZmluZCA9IChjaGlsZHJlbikgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICAgICAgaWYgKCFsZXZlbHMgfHwgbGV2ZWxzLmluZGV4T2YobGV2ZWwpICE9IC0xKSB7XG4gICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBjaGlsZC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJyLnB1c2goY2hpbGQuX19ha2lsaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsKys7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGZpbmQoY2hpbGRyZW5baV0uX19ha2lsaS5fX2NoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmluZCh0aGlzLl9fY2hpbGRyZW4pO1xuICAgIHJldHVybiBmaW5kQWxsPyBhcnI6IChhcnJbMF0gfHwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG5lYXJlc3QgY29tcG9uZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5kQWxsPXRydWVdIC0gZ2V0IGFycmF5IGlmIHRydWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbcmlnaHQ9ZmFsc2VdIC0gZnJvbSB0aGUgcmlnaHQgc2lkZSBpZiB0cnVlXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR8Q29tcG9uZW50W119XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9fZ2V0TmVhcihzZWxlY3RvciA9ICcnLCBmaW5kQWxsID0gdHJ1ZSwgcmlnaHQgPSBmYWxzZSkge1xuICAgIGlmICghdGhpcy5fX3BhcmVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxldmVsRWxlbWVudHMgPSB0aGlzLl9fcGFyZW50Ll9fYWtpbGkuX19jaGlsZHJlbi5zbGljZSgpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICByaWdodCAmJiBsZXZlbEVsZW1lbnRzLnJldmVyc2UoKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGV2ZWxFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBlbCA9IGxldmVsRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChlbCA9PT0gdGhpcy5lbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFzZWxlY3RvciB8fCBlbC5fX2FraWxpLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFyci5wdXNoKGVsLl9fYWtpbGkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFyci5yZXZlcnNlKCk7XG5cbiAgICBpZiAoIWZpbmRBbGwpIHtcbiAgICAgIHJldHVybiBhcnIubGVuZ3RoPyBhcnJbMF06IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsaW5rIHRvIHRoZSBzdG9yZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfGZ1bmN0aW9ufSBoYW5kbGVyXG4gICAqL1xuICBzdG9yZShuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fc3RvcmVCeUZ1bmN0aW9uKC4uLmFyZ3MpOiB0aGlzLl9fc3RvcmVCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbGluayB3aXRoIHRoZSBhdHRyaWJ1dGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXXxmdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cbiAgYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcImF0dHJcIiBtdXN0IGJlIGNhbGxlZCBhZnRlciB0aGUgY29tcGlsYXRpb24uIEZvciBleGFtcGxlLCBpbiBcImNvbXBpbGVkXCIgbWV0aG9kLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJncy51bnNoaWZ0KCcqJyk7XG4gICAgICBoYW5kbGVyID0gbmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbic/IHRoaXMuX19hdHRyQnlGdW5jdGlvbiguLi5hcmdzKTogdGhpcy5fX2F0dHJCeUtleXMoLi4uYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdG9yZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuc3RvcmUobmFtZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5fX2lzTW91bnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXRob2QgXCJ1bnN0b3JlXCIgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBpbGF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gXCJjb21waWxlZFwiIG1ldGhvZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFyZ3MudW5zaGlmdCgnKicpO1xuICAgICAgaGFuZGxlciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nPyB0aGlzLl9fdW5zdG9yZUJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3Vuc3RvcmVCeUtleXMoLi4uYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGF0dHJpYnV0ZSBsaW5rXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW118ZnVuY3Rpb259IGhhbmRsZXJcbiAgICovXG4gIHVuYXR0cihuYW1lLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLl9faXNNb3VudGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1ldGhvZCBcInVuYXR0clwiIG11c3QgYmUgY2FsbGVkIGFmdGVyIHRoZSBjb21waWxhdGlvbi4gRm9yIGV4YW1wbGUsIGluIFwiY29tcGlsZWRcIiBtZXRob2QuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhcmdzLnVuc2hpZnQoJyonKTtcbiAgICAgIGhhbmRsZXIgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJz8gdGhpcy5fX3VuYXR0ckJ5RnVuY3Rpb24oLi4uYXJndW1lbnRzKTogdGhpcy5fX3VuYXR0ckJ5S2V5cyguLi5hcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgbWF0Y2hlcyBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gc2VsZWN0b3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBtYXRjaGVzKHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3IodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgcGFyZW50IGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcGFyZW50KHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldFBhcmVudChzZWxlY3RvciwgZmFsc2UsIGxldmVscyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IG9mIHBhcmVudCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIHBhcmVudHMoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0UGFyZW50KHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNoaWxkIGNvbXBvbmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gW2xldmVscz1udWxsXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgY2hpbGQoc2VsZWN0b3IgPSAnJywgbGV2ZWxzID0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0Q2hpbGRyZW4oc2VsZWN0b3IsIGZhbHNlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjaGlsZCBjb21wb25lbnRzIGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEBwYXJhbSB7bnVtYmVyfG51bWJlcltdfSBbbGV2ZWxzPW51bGxdXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnRbXX1cbiAgICovXG4gIGNoaWxkcmVuKHNlbGVjdG9yID0gJycsIGxldmVscyA9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldENoaWxkcmVuKHNlbGVjdG9yLCB0cnVlLCBsZXZlbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50W119XG4gICAqL1xuICBiZWZvcmUoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhcnJheSBvZiBjb21wb25lbnRzIHJpZ2h0IGZyb20gdGhlIGN1cnJlbnQgYnkgc2VsZWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8ZnVuY3Rpb259IFtzZWxlY3Rvcj0nJ11cbiAgICogQHJldHVybnMge0NvbXBvbmVudFtdfVxuICAgKi9cbiAgYWZ0ZXIoc2VsZWN0b3IgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9fZ2V0TmVhcihzZWxlY3RvciwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgY29tcG9uZW50IGxlZnQgZnJvbSB0aGUgY3VycmVudCBieSBzZWxlY3RvclxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xmdW5jdGlvbn0gW3NlbGVjdG9yPScnXVxuICAgKiBAcmV0dXJucyB7Q29tcG9uZW50fVxuICAgKi9cbiAgcHJldihzZWxlY3RvciA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX19nZXROZWFyKHNlbGVjdG9yLCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjbG9zZXN0IGNvbXBvbmVudCByaWdodCBmcm9tIHRoZSBjdXJyZW50IGJ5IHNlbGVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfGZ1bmN0aW9ufSBbc2VsZWN0b3I9JyddXG4gICAqIEByZXR1cm5zIHtDb21wb25lbnR9XG4gICAqL1xuICBuZXh0KHNlbGVjdG9yID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fX2dldE5lYXIoc2VsZWN0b3IsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZWxlbWVudCBwYXJlbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnRcbiAgICovXG4gIGFwcGVuZFRvKHBhcmVudCkgeyAgIFxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBzZXRQYXJlbnRzOiB0cnVlLCBjaGVja0NoYW5nZXM6IGZhbHNlIH0gfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FuY2VsIGNvbXBvbmVudCBjb21waWxhdGlvblxuICAgKi9cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMuX19jYW5jZWxsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhbGUgdGhlIGNvbXBvbmVudCwgYnV0IGNhbmNlbCB0aGUgY29tcGlsYXRpb24gaW5zaWRlIG9mIGl0XG4gICAqL1xuICBwcmV2ZW50KCkge1xuICAgIHRoaXMuX19wcmV2ZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBlbGVtZW50IGh0bWxcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBlbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2VtcHR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19yZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7fVxuICBjb21waWxlZCgpIHt9XG4gIHJlY29tcGlsZWQoKSB7fVxuICByZXNvbHZlZCgpIHt9XG4gIHJlbW92ZWQoKSB7fVxufSIsImltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIFJlcXVlc3QgY2xhc3MuXG4gKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gbWFrZSByZXF1ZXN0cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yZXF1ZXN0c31cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVlc3Qge1xuICBfX2NhY2hlID0ge307XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gW2RlZmF1bHRzXSBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGJhc2VVcmwsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gYmFzZVVybD8gKGJhc2VVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJyk6ICcnO1xuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN0YXR1c0Vycm9yUGF0dGVybjogL15bXjIzXS8sXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAuLi4oZGVmYXVsdHMgfHwge30pXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHJlcXVlc3Qgd2l0aCBhbnkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcXVlcnkob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBvcHRpb25zID0gey4uLnRoaXMuZGVmYXVsdHMsIC4uLihvcHRpb25zIHx8IHt9KX07IFxuICAgICAgb3B0aW9ucy51cmwgPSB0aGlzLmJhc2VVcmw/IGAke3RoaXMuYmFzZVVybH0ke29wdGlvbnMudXJsLnJlcGxhY2UoL15cXC8vLCAnJyl9YDogb3B0aW9ucy51cmw7ICBcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XG4gICAgICBcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgICAgICBcbiAgICAgIGNvbnN0IGJlZm9yZSA9IHRoaXMudHJhbnNmb3JtQmVmb3JlKHhociwgb3B0aW9ucyk7XG4gICAgICB4aHIgPSBiZWZvcmUueGhyO1xuICAgICAgb3B0aW9ucyA9IGJlZm9yZS5vcHRpb25zO1xuICAgICAgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgPT0gJ2Z1bmN0aW9uJykgJiYgb3B0aW9ucy5vblN0YXJ0KHhocik7ICBcbiAgICAgIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xuICAgICAgICBvcHRpb25zLmpzb24gIT09IHRydWUgJiYgKG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbikpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgICBvcHRpb25zLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlIHx8ICdqc29uJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZm9ybSkge1xuICAgICAgICBvcHRpb25zLmJvZHkgPSB0aGlzLmNyZWF0ZUZvcm1EYXRhKG9wdGlvbnMuZm9ybSk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snY29udGVudC10eXBlJ10gPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBhcmFtcykge1xuICAgICAgICBsZXQgc3RyID0gdGhpcy5wYXJhbXNUb1F1ZXJ5KG9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgc3RyICYmIChvcHRpb25zLnVybCArPSBcIj9cIiArIHN0cik7XG4gICAgICB9XG4gICAgICAgICAgIFxuICAgICAgbGV0IGhhc2ggPSBudWxsO1xuICAgICAgbGV0IGNhY2hlID0gdHlwZW9mIG9wdGlvbnMuY2FjaGUgPT0gJ2Z1bmN0aW9uJz8gb3B0aW9ucy5jYWNoZShvcHRpb25zKTogb3B0aW9ucy5jYWNoZTtcbiAgICAgICghd2luZG93LkFLSUxJX1NTUiAmJiAhQWtpbGkuX19pbml0KSAmJiAoY2FjaGUgPSB0cnVlKTtcblxuICAgICAgaWYob3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKSA9PSAnR0VUJyAmJiAoIW9wdGlvbnMuYm9keSB8fCB0eXBlb2Ygb3B0aW9ucy5ib2R5ID09ICdzdHJpbmcnKSkge1xuICAgICAgICBoYXNoID0gdGhpcy5jcmVhdGVDYWNoZUhhc2goeyBcbiAgICAgICAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgICAgdXNlcjogb3B0aW9ucy51c2VyLCBcbiAgICAgICAgICBwYXNzd29yZDogb3B0aW9ucy5wYXNzd29yZCwgXG4gICAgICAgICAgYm9keTogb3B0aW9ucy5ib2R5IFxuICAgICAgICB9KTsgICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICBpZihjYWNoZSAmJiBoYXNoKSB7ICAgICAgICBcbiAgICAgICAgbGV0IF9jYWNoZSA9IHRoaXMuZ2V0Q2FjaGUoaGFzaCk7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZihfY2FjaGUgJiYgKGNhY2hlID09PSB0cnVlIHx8IG5vdyAtIF9jYWNoZS5jcmVhdGVkQXQgPD0gY2FjaGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy50cmFuc2Zvcm1BZnRlcihfY2FjaGUucmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMudXJsLCB0cnVlLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpKSB7XG4gICAgICAgIHhoci50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGVhZGVyS2V5cyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuaGVhZGVycyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaGVhZGVyS2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGsgPSBoZWFkZXJLZXlzW2ldO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBvcHRpb25zLmhlYWRlcnNba10pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Qcm9ncmVzcyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLm9uUHJvZ3Jlc3MoeGhyKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgIHJlc3BvbnNlOiB4aHIucmVzcG9uc2UsXG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHJlYWR5U3RhdGU6IHhoci5yZWFkeVN0YXRlLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogeGhyLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICByZXNwb25zZVR5cGU6IHhoci5yZXNwb25zZVR5cGUsXG4gICAgICAgICAgcmVzcG9uc2VUZXh0OiB4aHIucmVzcG9uc2VUeXBlID09ICd0ZXh0Jz8geGhyLnJlc3BvbnNlVGV4dDogJycsXG4gICAgICAgICAgcmVzcG9uc2VYTUw6IHhoci5yZXNwb25zZVR5cGUgPT0gJ2RvY3VtZW50Jz8geGhyLnJlc3BvbnNlWE1MOiAnJyxcbiAgICAgICAgICByZXNwb25zZVVSTDogeGhyLnJlc3BvbnNlVVJMLFxuICAgICAgICAgIHRpbWVvdXQ6IHhoci50aW1lb3V0LFxuICAgICAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycyh4aHIpLCAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm1BZnRlcihyZXN1bHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnN0YXR1c0Vycm9yUGF0dGVybiAmJiAoeGhyLnN0YXR1cyArICcnKS5tYXRjaChvcHRpb25zLnN0YXR1c0Vycm9yUGF0dGVybikpIHtcbiAgICAgICAgICBsZXQgZXJyID0gbmV3IEVycm9yKGBSZXF1ZXN0IHRvIFwiJHtvcHRpb25zLnVybH1cIiByZXR1cm5zIGZhaWx1cmUgc3RhdHVzIGNvZGUgJHt4aHIuc3RhdHVzfWApO1xuICAgICAgICAgIGVyci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfSBcblxuICAgICAgICAoY2FjaGUgfHwgd2luZG93LkFLSUxJX1NTUikgJiYgaGFzaCAmJiB0aGlzLmNyZWF0ZUNhY2hlKGhhc2gsIHJlc3VsdCk7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgUmVxdWVzdCB0byBcIiR7b3B0aW9ucy51cmx9XCIgdGltZWQgb3V0YCkpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICB4aHIuc2VuZChvcHRpb25zLmJvZHkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoZWFkZXJzIG9mIGEgWE1MSHR0cFJlcXVlc3QgaW5zdGFuY2VcbiAgICogXG4gICAqIEBwYXJhbSB7WE1MSHR0cFJlcXVlc3R9XG4gICAqL1xuICBnZXRIZWFkZXJzID0gZnVuY3Rpb24oeGhyKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7fTtcbiAgICBsZXQgc3RyID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOyAgXG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdCgnXFx1MDAwZFxcdTAwMGEnKTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGxpbmUgPSBhcnJbaV07XG4gICAgICBsZXQgaW5kZXggPSBsaW5lLmluZGV4T2YoJ1xcdTAwM2FcXHUwMDIwJyk7XG5cbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgbGV0IGtleSA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgbGV0IHZhbCA9IGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgMik7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBnZXRDYWNoZShoYXNoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19jYWNoZVtoYXNoXSB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBjYWNoZVxuICAgKiBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKi9cbiAgY3JlYXRlQ2FjaGUoaGFzaCwgcmVzdWx0KSB7XG4gICAgdGhpcy5fX2NhY2hlW2hhc2hdID0geyByZXN1bHQsIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY2FjaGVcbiAgICogXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICByZW1vdmVDYWNoZShoYXNoKSB7XG4gICAgZGVsZXRlIHRoaXMuX19jYWNoZVtoYXNoXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBoYXNoIHRvIHNhdmUgaW4gdGhlIGNhY2hlXG4gICAqIFxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgY3JlYXRlQ2FjaGVIYXNoKGRhdGEpIHtcbiAgICByZXR1cm4gdXRpbHMuY3JlYXRlSGFzaChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IG9iamVjdCB0byBxdWVyeSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcGFyYW1zVG9RdWVyeShvYmopIHtcbiAgICBsZXQgc2VwID0gJyYnO1xuICAgIGxldCBlcSA9ICc9JztcblxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKChrKSA9PiB7XG4gICAgICBsZXQga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAga3MgPSBlbmNvZGVVUklDb21wb25lbnQoayk7XG4gICAgICAgIHJldHVybiBvYmpba10ubWFwKCh2LCBpKSA9PiBrcyArIGBbJHtpfV1gICsgZXEgKyBlbmNvZGVVUklDb21wb25lbnQodikpLmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9ialtrXSAmJiB0eXBlb2Ygb2JqW2tdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsZXQgb3B0ID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKG9ialtrXSkubWFwKChrZXkpID0+IG9wdC5wdXNoKGtzICsgYFske2tleX1dYCArIGVxICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrXVtrZXldKSkpO1xuICAgICAgICByZXR1cm4gb3B0LmpvaW4oc2VwKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlcSArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba10pO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHF1ZXJ5IHN0cmluZyB0byBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyYW1zRnJvbVF1ZXJ5KHN0cikge1xuICAgIGxldCBxdWVyeSA9IHt9O1xuICAgIGxldCBhbXBzID0gc3RyLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGFtcHMubGVuZ3RoOyBpIDxsOyBpKyspIHtcbiAgICAgIGxldCBlcXMgPSAgYW1wc1tpXS5zcGxpdCgnPScpO1xuICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMF0pO1xuICAgICAgbGV0IHZhbCA9IGRlY29kZVVSSUNvbXBvbmVudChlcXNbMV0pO1xuXG4gICAgICBpZiAoIWtleSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChxdWVyeVtrZXldKSB7XG4gICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsXTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBxdWVyeVtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbXVsdGlwYXJ0IGZvcm0gZGF0YSBmcm9tIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqXG4gICAqIEBwYXJhbSB7Rm9ybURhdGF9IFtkYXRhXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW25hbWVzcGFjZV0gICAqXG4gICAqIEByZXR1cm5zIHtGb3JtRGF0YX1cbiAgICovXG4gIGNyZWF0ZUZvcm1EYXRhKG9iaiwgZGF0YSA9IG51bGwsIG5hbWVzcGFjZSA9ICcnKSB7XG4gICAgbGV0IGZkID0gZGF0YSB8fCBuZXcgRm9ybURhdGEoKTtcblxuICAgIGZvciAobGV0IGsgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspICYmIG9ialtrXSkge1xuICAgICAgICBsZXQga2V5ID0gbmFtZXNwYWNlPyBuYW1lc3BhY2UgKyAnWycgKyBrICsgJ10nOiBrO1xuXG4gICAgICAgIGlmIChvYmpba10gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgb2JqW2tdLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qob2JqW2tdKSkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybURhdGEob2JqW2tdLCBmZCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmZC5hcHBlbmQoa2V5LCBvYmpba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBkYXRhIGJlZm9yZSBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtYTUxIdHRwUmVxdWVzdH0geGhyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICB0cmFuc2Zvcm1CZWZvcmUoeGhyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHsgeGhyLCBvcHRpb25zIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gZGF0YSBhZnRlciBhIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgdHJhbnNmb3JtQWZ0ZXIocmVzdWx0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGRhdGE6IHJlc3VsdC5yZXNwb25zZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIEdFVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdHRVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgREVMRVRFIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGRlbGV0ZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIG9wdGlvbnMubWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgTWFrZSBQT1NUIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHBvc3QodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQT1NUJztcblxuICAgIHJldHVybiB0aGlzLnF1ZXJ5KG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqICBNYWtlIFBVVCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBwdXQodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQVVQnO1xuXG4gICAgcmV0dXJuIHRoaXMucXVlcnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogIE1ha2UgUEFUQ0ggcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgcGF0Y2godXJsLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICBvcHRpb25zLm1ldGhvZCA9ICdQQVRDSCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxuXG4gICAvKipcbiAgICogIE1ha2UgSEVBRCByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBoZWFkKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy51cmwgPSB1cmw7XG4gICAgb3B0aW9ucy5tZXRob2QgPSAnSEVBRCc7XG5cbiAgICByZXR1cm4gdGhpcy5xdWVyeShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucmVxdWVzdC5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fX2luc3RhbmNlcyA9IHt9O1xuICB0aGlzLl9fY2FjaGUgPSB7fTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IHJlcXVlc3QgaW5zdGFuY2UgdG8gdGhlIG1haW4gc2VydmljZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1JlcXVlc3R9IGluc3RhbmNlXG4gKi9cbnJlcXVlc3QuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lLCBpbnN0YW5jZSkge1xuICB0aGlzLl9faW5zdGFuY2VzW25hbWVdID0gaW5zdGFuY2U7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKi9cbnJlcXVlc3QucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLl9faW5zdGFuY2VzW25hbWVdO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJlcXVlc3QuZGVpbml0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RGVmYXVsdHMoKTtcbn07XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVlc3QsICd1c2UnLCB7XG4gIGdldDogKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0Ll9faW5zdGFuY2VzO1xuICB9XG59KTtcblxucmVxdWVzdC5SZXF1ZXN0ID0gUmVxdWVzdDtcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG5yZXF1ZXN0LnNldERlZmF1bHRzKCk7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgZm9yXG4gKiBAc2VsZWN0b3IgZm9yW2luXSxvbFtpbl0sdWxbaW5dLHRoZWFkW2luXSx0Ym9keVtpbl0sdGZvb3RbaW5dXG4gKiBAYXR0ciB7b2JqZWN0fGFycmF5fSBpbiAtIGRhdGEgdG8gY3JlYXRlIHRoZSBsb29wXG4gKiBAbWVzc2FnZSB7b2JqZWN0fGFycmF5fSBvdXQgLSBzZW50IG9uIHRoZSBkYXRhIGNoYW5nZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaW5dJztcbiAgc3RhdGljIGV2ZW50cyA9IFsnb3V0J107XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2ZvcicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb2wnLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3VsJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0aGVhZCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgndGJvZHknLCB0aGlzKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3Rmb290JywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0cicsIHRoaXMuTG9vcCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdsb29wJywgdGhpcy5Mb29wKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICBcbiAgICB0aGlzLml0ZXJhdG9ycyA9IFtdO1xuICAgIHRoaXMuaXRlcmF0b3JFbCA9IG51bGw7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgX19wcmVwYXJlQXR0cmlidXRlSW4obm9kZSwgdmFsdWUpIHsgIFxuICAgIGlmKChub2RlIGluc3RhbmNlb2Ygd2luZG93LkF0dHIpICYmIG5vZGUubmFtZSA9PSAnaW4nKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLl9fcHJlcGFyZUF0dHJpYnV0ZUluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfX2NvbXBhcmVOb2RlUHJvcGVydHlWYWx1ZShwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9wLm5vZGU7XG5cbiAgICBpZigobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5BdHRyKSAmJiBub2RlLm5hbWUgPT0gJ2luJyAmJiBwcm9wLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3VwZXIuX19jb21wYXJlTm9kZVByb3BlcnR5VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7ICAgIFxuICAgIHRoaXMuY3JlYXRlSXRlcmF0b3IoKTsgICAgXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3KTtcbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgZGVsZXRlIHRoaXMuaHRtbDtcbiAgICB0aGlzLml0ZXJhdG9ycyA9IG51bGw7XG4gICAgdGhpcy5pdGVyYXRvckVsID0gbnVsbDsgXG4gIH1cblxuICBjcmVhdGVJdGVyYXRvcigpIHtcbiAgICBsZXQgZWw7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGQgPSB0aGlzLmVsLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQnKSA9PSAnbG9vcCcpIHtcbiAgICAgICAgZWwgPSBjaGlsZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGVsID0gY2hpbGQ7XG4gICAgfVxuXG4gICAgaWYgKCFlbCkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7ICAgICAgXG4gICAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmVsLmlubmVySFRNTDsgXG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuXG4gICAgaWYgKGNvbXBvbmVudE5hbWUgIT0gJ2xvb3AnKSB7XG4gICAgICBsZXQgY29tcG9uZW50ID0gQWtpbGkuY29tcG9uZW50KGNvbXBvbmVudE5hbWUgfHwgZWwudGFnTmFtZSk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29tcG9uZW50JywgJ2xvb3AnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEZvcikpIHtcbiAgICAgICAgbGV0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb29wJyk7XG4gICAgICAgIG1hc2suYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICBlbCA9IG1hc2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5odG1sID0gZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXRlcmF0b3JFbCA9IHRoaXMuY3JlYXRlSXRlcmF0b3JFbGVtZW50KGVsLm91dGVySFRNTCk7XG4gICAgZWwucmVtb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJdGVyYXRvckVsZW1lbnQoaHRtbCkge1xuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZWwuY29udGVudC5maXJzdENoaWxkO1xuICB9XG5cbiAgbG9vcChrZXksIHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuX19pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuX19rZXkgPSBrZXk7XG4gICAgdGhpcy5fX3ZhbHVlID0gdmFsdWU7ICAgIFxuICAgIHRoaXMuX19oYXNoID0gdXRpbHMuY3JlYXRlSGFzaCh2YWx1ZSk7XG5cbiAgICBpZih0aGlzLml0ZXJhdG9ycy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgbGV0IGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcnNbaW5kZXhdO1xuICAgICAgICBcbiAgICAgIGlmICh0aGlzLl9faW5kZXggIT09IGl0ZXJhdG9yLmluZGV4KSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldEluZGV4KCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Iuc2V0SW5kZXgodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9fa2V5ICE9PSBpdGVyYXRvci5rZXkpIHsgICAgICAgIFxuICAgICAgICBpdGVyYXRvci5zZXRLZXkoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgeyAgICAgICAgXG4gICAgICAgIGl0ZXJhdG9yLnNldEtleSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCF1dGlscy5jb21wYXJlKHRoaXMuX19oYXNoLCBpdGVyYXRvci5oYXNoKSkge1xuICAgICAgICBpdGVyYXRvci5zZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGl0ZXJhdG9yLnNldFZhbHVlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fcHJvbWlzZXMucHVzaChBa2lsaS5jb21waWxlKGl0ZXJhdG9yLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KSk7XG4gICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfVxuICAgIFxuICAgIGxldCBlbCA9IHRoaXMuaXRlcmF0b3JFbC5jbG9uZU5vZGUoKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0aGlzLmh0bWw7XG4gICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgdGhpcy5fX3Byb21pc2VzLnB1c2goQWtpbGkuY29tcGlsZShlbCkpO1xuICAgIHRoaXMuaXRlcmF0b3JzLnB1c2goZWwuX19ha2lsaSk7XG4gICAgcmV0dXJuIGVsLl9fYWtpbGk7XG4gIH1cblxuICBkcmF3KGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgaWYgKEFraWxpLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKGBcIkZvclwiIGNvbXBvbmVudCBcImluXCIgYXR0cmlidXRlIHZhbHVlIHR5cGUgbXVzdCBiZSBhbiBvYmplY3QvYXJyYXlgKTsgICAgICAgIFxuICAgICAgfVxuXG4gICAgICBkYXRhID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gZGF0YTsgICBcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGNvbnN0IGxvb3AgPSAoa2V5LCB2YWx1ZSwgaW5kZXgpID0+IHRoaXMubG9vcChrZXksIHZhbHVlLCBpbmRleCkuaXRlcmF0ZShpbmRleCk7XG5cbiAgICBpZihBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IgKGxldCBsID0gZGF0YS5sZW5ndGg7IGluZGV4IDwgbDsgaW5kZXgrKykge1xuICAgICAgICBsb29wKGluZGV4LCBkYXRhW2luZGV4XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG5cbiAgICAgIGZvciAobGV0IGwgPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBrZXkgPSBrZXlzW2luZGV4XTtcbiAgICAgICAgbG9vcChrZXksIGRhdGFba2V5XSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCBpID0gaW5kZXgsIGwgPSB0aGlzLml0ZXJhdG9ycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBpdGVyYXRvciA9IHRoaXMuaXRlcmF0b3JzW2ldO1xuICAgICAgaXRlcmF0b3IuX19yZW1vdmUoKTtcbiAgICAgIHRoaXMuaXRlcmF0b3JzLnNwbGljZShpLCAxKTtcbiAgICAgIGwtLTtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fX3Byb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXR0cnMub25PdXQudHJpZ2dlcihkYXRhLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgfSk7ICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9faXRlcmF0b3IgPSBudWxsO1xuICAgIHRoaXMuX19pbmRleCA9IDA7XG4gICAgdGhpcy5fX2tleSA9ICcnO1xuICAgIHRoaXMuX192YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fX2hhc2ggPSAnJztcbiAgICB0aGlzLl9fcHJvbWlzZXMgPSBbXTtcbiAgfSAgXG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBsb29wcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbG9vcHN9XG4gKiBcbiAqIEB0YWcgbG9vcFxuICogQHNlbGVjdG9yIGxvb3AsdHJcbiAqIEBhdHRyIEBzZWUgRm9yXG4gKiBAc2NvcGUgeyp9IGxvb3BWYWx1ZSAtIGRhdGEgaXRlbSdzIHZhbHVlIG9mIHRoZSBjdXJyZW50IGl0ZXJhdGlvbiBcbiAqIEBzY29wZSB7c3RyaW5nfG51bWJlcn0gbG9vcEtleSAtIGtleSBvZiB0aGUgaXRlcmF0aW9uXG4gKiBAc2NvcGUge251bWJlcn0gbG9vcEluZGV4IC0gaW5kZXggb2YgdGhlIGl0ZXJhdGlvblxuICovXG5leHBvcnQgY2xhc3MgTG9vcCBleHRlbmRzIEZvciB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJyc7XG4gIHN0YXRpYyBjb250cm9sQXR0cmlidXRlcyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5mb3IgPSBudWxsO1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWwuaW5uZXJIVE1MO1xuICAgIHRoaXMuaXNGb3IgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcblxuICAgIGlmICghdGhpcy5pc0ZvciAmJiAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgRm9yKSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX19wYXJlbnQuX19ha2lsaS5fX2l0ZXJhdG9yID0gdGhpcztcbiAgICB0aGlzLmZvciA9IHRoaXMuX19wYXJlbnQuX19ha2lsaTtcbiAgICB0aGlzLnNldEluZGV4KHRydWUpO1xuICAgIHRoaXMuc2V0S2V5KHRydWUpO1xuICAgIHRoaXMuc2V0VmFsdWUodHJ1ZSk7XG5cbiAgICBpZih0aGlzLmlzRm9yKSB7XG4gICAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuaXNGb3IpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZWQoKSB7XG4gICAgc3VwZXIucmVtb3ZlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuZm9yID0gbnVsbDtcbiAgICBkZWxldGUgdGhpcy52YWx1ZTtcbiAgICBkZWxldGUgdGhpcy5rZXk7XG4gICAgZGVsZXRlIHRoaXMuaW5kZXg7XG4gICAgZGVsZXRlIHRoaXMuaGFzaDsgICAgXG4gIH1cblxuICBzZXRJbmRleCh0YXJnZXQpIHtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5mb3IuX19pbmRleDtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wSW5kZXgnLCB0aGlzLmluZGV4LCBmYWxzZSwgdGFyZ2V0KTtcbiAgfVxuXG4gIHNldEtleSh0YXJnZXQpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuZm9yLl9fa2V5O1xuICAgIHRoaXMuc2NvcGUuX19zZXQoJ2xvb3BLZXknLCB0aGlzLmtleSwgZmFsc2UsIHRhcmdldCk7XG4gIH1cblxuICBzZXRWYWx1ZSh0YXJnZXQpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3IuX192YWx1ZTtcbiAgICB0aGlzLnNjb3BlLl9fc2V0KCdsb29wVmFsdWUnLCB0aGlzLnZhbHVlLCB0cnVlLCB0YXJnZXQpO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuZm9yLl9faGFzaDtcbiAgfVxuXG4gIGl0ZXJhdGUoKSB7fVxufVxuXG5Gb3IuTG9vcCA9IExvb3A7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBCYXNlIGNvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dCBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW5wdXR9XG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc190ZXh0YXJlYX1cbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2NvbnRlbnRlZGl0YWJsZX1cbiAqIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIHtib29sZWFufSBmb2N1cyAtIHNldCB0aGUgZm9jdXMgb3Igbm90XG4gKiBAYXR0ciB7bnVtYmVyfSBkZWJvdW5jZSAtIGRlYm91bmNlIGRlbGF5XG4gKiBAbWVzc2FnZSB7dm9pZH0gZGVib3VuY2UgLSBzZW50IG9uIHRoZSBkZWJvdW5jZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbnB1dH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudmFsdWVLZXkgPSAndmFsdWUnO1xuICAgIHRoaXMuZGVib3VuY2VJbnRlcnZhbCA9IDUwMDtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIGlmKHRoaXMuZWwuaGFzQXR0cmlidXRlKCdvbi1kZWJvdW5jZScpKSB7XG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXRpbHMuZGVib3VuY2UoKCkgPT4gdGhpcy5hdHRycy5vbkRlYm91bmNlLnRyaWdnZXIodW5kZWZpbmVkLCB7IGJ1YmJsZXM6IHRydWUgfSksIHRoaXMuZGVib3VuY2VJbnRlcnZhbCkpO1xuICAgIH1cblxuICAgIHRoaXMuYXR0cignZm9jdXMnLCB0aGlzLnNldEZvY3VzKTtcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7XG4gICAgdGhpcy5hdHRyKCdkZWJvdW5jZScsIHRoaXMuc2V0RGVib3VuY2UpO1xuICB9XG5cbiAgc2V0RGVib3VuY2UoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLmRlYm91bmNlSW50ZXJ2YWwgPSAraW50ZXJ2YWw7XG4gIH1cblxuICBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIHZhbHVlPyB0aGlzLnNldEVsZW1lbnRGb2N1cygpOiB0aGlzLnNldEVsZW1lbnRCbHVyKCk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICh0aGlzLmVsW3RoaXMudmFsdWVLZXldICE9PSB2YWx1ZSkgJiYgKHRoaXMuZWxbdGhpcy52YWx1ZUtleV0gPSB2YWx1ZSA9PT0gMD8gJzAnOiAodmFsdWUgfHwgJycpKTtcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cblxuICBzZXRFbGVtZW50Qmx1cigpIHtcbiAgICB0aGlzLmVsLmJsdXIoKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi9ha2lsaS5qcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbi8qKlxuICogU2NvcGUgY2xhc3MuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvc2NvcGV9XG4gKlxuICogQWxsIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBfXyBhcmUgbm90IG1vbml0b3JlZC5cbiAqIFlvdSBjYW4gdXNlIHRoZW0gZm9yIGludGVybmFsIG1hbmlwdWxhdGlvbnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlIHtcbiAgc3RhdGljIG5lc3RlZFdhdGNoaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGVsLCBjb21wb25lbnQpIHtcbiAgICB0aGlzLl9fbmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fX2VsID0gZWw7XG4gICAgdGhpcy5fX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3Njb3BlJywgbmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGEgc2NvcGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGtleXNcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdHJpY3Q9ZmFsc2VdIC0gd2l0aG91dCBvYmplY3QgY29weWluZ1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfX3NldChrZXlzLCB2YWx1ZSwgc3RyaWN0ID0gZmFsc2UsIHRhcmdldCA9IGZhbHNlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSB7XG4gICAgICBrZXlzID0gW2tleXNdO1xuICAgIH1cbiAgICBcbiAgICBBa2lsaS51bmlzb2xhdGUoKCkgPT4ge1xuICAgICAgc3RyaWN0ICYmICh0aGlzLl9fY29tcG9uZW50Ll9fZGlzYWJsZVByb3h5UmVkZWZpbmluZyA9IHRydWUpO1xuICAgICAgdXRpbHMuc2V0UHJvcGVydHlCeUtleXMoa2V5cywgdGFyZ2V0PyB0aGlzLl9fdGFyZ2V0OiB0aGlzLCAobGFzdCwgdmFsKSA9PiB7XG4gICAgICAgIGlmICghbGFzdCkge1xuICAgICAgICAgIHJldHVybiB2YWwgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHN0cmljdCAmJiAodGhpcy5fX2NvbXBvbmVudC5fX2Rpc2FibGVQcm94eVJlZGVmaW5pbmcgPSBmYWxzZSk7XG4gICAgfSk7XG4gIH1cbn0iLCIvKipcbiAqIENsYXNzIGZvciB3b3JraW5nIHdpdGggZXZlbnRzLlxuICogQW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIHRyaWdnZXIgY3VzdG9tIGphdmFzY3JpcHQgZXZlbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2V2ZW50c31cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbm9kZSwgZWwsIGNvbXBvbmVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0aGUgZXZlbnRcbiAgICpcbiAgICogQHBhcmFtIHsqfSBkYXRhIC0gc2VuZGluZyBkYXRhLiBXaWxsIGJlIGluIHRoZSBldmVudC5kZXRhaWxcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICB0cmlnZ2VyKGRhdGEsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCh0aGlzLm5hbWUsIHRoaXMucHJlcGFyZU9wdGlvbnMoeyBkZXRhaWw6IGRhdGEsICAuLi5vcHRpb25zIH0pKSk7XG4gICAgfSAgIFxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBfRXZlbnQgLSBjbGFzcyBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZV1cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkaXNwYXRjaChfRXZlbnQsIG9wdGlvbnMgPSB7fSwgZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmIChmb3JjZSB8fCAhdGhpcy5pbkV2YWx1YXRpbmcoKSkge1xuICAgICAgdGhpcy5lbC5kaXNwYXRjaEV2ZW50KG5ldyBfRXZlbnQodGhpcy5uYW1lLCB0aGlzLnByZXBhcmVPcHRpb25zKG9wdGlvbnMpKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlcmUgYW4gZXZlbnQgb3B0aW9uc1xuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBcbiAgICovXG4gIHByZXBhcmVPcHRpb25zKG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMgPSB7IGJ1YmJsZXM6IHRydWUsIC4uLm9wdGlvbnMgfTsgXG4gICAgdGhpcy5ub2RlLl9fY29tcG9uZW50Ll9fcHJlcGFyZUF0dHJpYnV0ZU91dCh0aGlzLm5vZGUsIG9wdGlvbnMuZGV0YWlsKTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBldmVudCBjYWxsYmFjayBkb2Vzbid0IHJ1biByZWN1cnNpdmVcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpbkV2YWx1YXRpbmcoKSB7XG4gICAgbGV0IGRhdGEgPSB0aGlzLmNvbXBvbmVudC5fX2V2YWx1YXRpbmdFdmVudDtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhLmVsID09PSB0aGlzLmVsICYmIGRhdGEuZXZlbnQudHlwZSA9PT0gdGhpcy5uYW1lICYmIGRhdGEuY29tcG9uZW50ID09PSB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIHRoZSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICAgKi9cbiAgYmluZChmbikge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMuZm4gPSBmbik7XG4gIH1cblxuICAvKipcbiAgICogVW5iaW5kIHRoZSBmdW5jdGlvblxuICAgKi9cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZm4gJiYgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSwgdGhpcy5mbik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBlbWl0dGVyXG4gICAqL1xuICByZW1vdmUoKSB7XG4gICAgdGhpcy51bmJpbmQoKTtcbiAgICBkZWxldGUgdGhpcy5uYW1lO1xuICAgIGRlbGV0ZSB0aGlzLm5hbWU7XG4gICAgdGhpcy5ub2RlID0gbnVsbDtcbiAgICB0aGlzLmNvbXBvbmVudCA9IG51bGw7XG4gICAgdGhpcy5lbCA9IG51bGw7XG4gIH1cbn0iLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcblxuLyoqXG4gKiBTdG9yZSBhbGxvd3MgeW91IHRvIHNhdmUgYW5kIGRpc3RyaWJ1dGUgZGF0YS5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zdG9yZX1cbiAqL1xuY29uc3Qgc3RvcmUgPSBuZXcgUHJveHkoe30sIHtcbiAgZ2V0OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBpZiAoa2V5ID09IFwiX190YXJnZXRcIikge1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG4gIH0sXG4gIHNldDogKHRhcmdldCwga2V5LCB2YWx1ZSkgPT4ge1xuICAgIGlmKHV0aWxzLmNvbXBhcmUodGFyZ2V0W2tleV0sIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIHZhbHVlID0gdXRpbHMuY29weSh2YWx1ZSwgeyBwbGFpbjogdHJ1ZSB9KTtcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIEFraWxpLnJvb3QgJiYgQWtpbGkucm9vdC5fX3N0b3JlVHJpZ2dlckJ5TmFtZShrZXksIHZhbHVlKTsgICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5OiAodGFyZ2V0LCBrZXkpID0+IHtcbiAgICBBa2lsaS5yb290ICYmIEFraWxpLnJvb3QuX19zdG9yZVRyaWdnZXJCeU5hbWUoa2V5LCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsImltcG9ydCBBa2lsaSBmcm9tICcuL2FraWxpLmpzJztcblxuY29uc3Qgb2JqID0ge307XG5cbi8qKlxuICogR2xvYmFscyB0byB1c2UgdGhlIGN1c3RvbSB2YXJpYWJsZXMgaW4gc2NvcGUgZXhwcmVzc2lvbnNcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9zY29wZSNkb2NzX2dsb2JhbHN9XG4gKi9cbmNvbnN0IGdsb2JhbHMgPSBuZXcgUHJveHkob2JqLCB7XG4gIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgaWYoa2V5ID09ICdfX3RhcmdldCcpIHtcbiAgICAgIHJldHVybiBvYmpcbiAgICB9ICAgXG4gICAgXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xuICB9LFxuICBzZXQ6ICh0YXJnZXQsIGtleSwgdmFsdWUpID0+IHtcbiAgICB0YXJnZXRba2V5XSA9IEFraWxpLndyYXAodmFsdWUsIHsgdGFnOiBrZXkgfSk7ICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eTogKHRhcmdldCwga2V5KSA9PiB7ICAgXG4gICAgQWtpbGkucmVtb3ZlVGFnKGtleSk7XG4gICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsczsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vc2VydmljZXMvcmVxdWVzdC5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCByb3V0ZXIgdGVtcGxhdGVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190ZW1wbGF0ZXN9XG4gKiBcbiAqIEB0YWcgcm91dGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgncm91dGUnLCB0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbiwgbG9hZCA9IHRydWUpIHtcbiAgICBsZXQgc3RhdGUgPSB0cmFuc2l0aW9uLnBhdGguc3RhdGU7XG5cbiAgICBjb25zdCBnZXRQYXJlbnRTY29wZVRyYW5zaXRpb24gPSAocGF0aCkgPT4ge1xuICAgICAgaWYgKHBhdGgucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXRoLnBhcmVudC5jb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gcGF0aC5wYXJlbnQuY29tcG9uZW50Ll9fc2NvcGUuX190cmFuc2l0aW9uLnBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHBhdGgucGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGlsZSA9IChodG1sKSA9PiB7IFxuICAgICAgdGhpcy5lbXB0eSgpOyAgXG4gICAgICBsZXQgbmFtZSA9ICdjb21wb25lbnQnO1xuXG4gICAgICBpZihzdGF0ZS5jb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgIFxuICAgICAgICBmb3IobGV0IGtleSBpbiBBa2lsaS5fX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSBBa2lsaS5fX2NvbXBvbmVudHNba2V5XTtcbiAgICBcbiAgICAgICAgICBpZihjb21wb25lbnQgPT09IHN0YXRlLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgbmFtZSA9IGtleTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoIWV4aXN0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIFwiJHtzdGF0ZS5uYW1lfVwiIGhhcyBubyBkZWZpbmVkIGNvbXBvbmVudGApXG4gICAgICAgIH0gXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gYDwkeyBuYW1lIH0+JHsgaHRtbCB9PC8keyBuYW1lIH0+YDtcbiAgICAgIHJldHVybiBBa2lsaS5jb21waWxlKHRoaXMuZWwsIHsgcmVjb21waWxlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX19zY29wZS5fX3RyYW5zaXRpb24gPSB7ICBcbiAgICAgIHBhcmVudDogZ2V0UGFyZW50U2NvcGVUcmFuc2l0aW9uKHRyYW5zaXRpb24ucGF0aCksICAgXG4gICAgICBzdGF0ZTogdHJhbnNpdGlvbi5wYXRoLnN0YXRlLFxuICAgICAgZGF0YTogdHJhbnNpdGlvbi5wYXRoLmRhdGEsXG4gICAgICB1cmw6IHRyYW5zaXRpb24ucGF0aC51cmwsXG4gICAgICBwYXJhbXM6IHRyYW5zaXRpb24ucGF0aC5wYXJhbXMsXG4gICAgICBxdWVyeTogdHJhbnNpdGlvbi5wYXRoLnF1ZXJ5LFxuICAgICAgaGFzaDogdHJhbnNpdGlvbi5wYXRoLmhhc2hcbiAgICB9O1xuXG4gICAgaWYgKCFsb2FkKSB7XG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogeyBjaGVja0NoYW5nZXM6IHRydWUgfSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnRlbXBsYXRlO1xuICAgICAgfVxuICBcbiAgICAgIGlmIChzdGF0ZS50ZW1wbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdC5nZXQoc3RhdGUudGVtcGxhdGVVcmwpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGh0bWwgPT4gY29tcGlsZShodG1sKSk7XG4gIH1cbn0iLCJpbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdC5qcyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnLi4vY29tcG9uZW50cy9yb3V0ZS5qcyc7XG5cbi8qKlxuICogVHJhbnNpdGlvbiBjbGFzcy5cbiAqIEFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgY29uc2lzdHMgdGhlIGxhc3QgYWN0dWFsIHJvdXRlciB0cmFuc2l0aW9uIGluZm9ybWF0aW9uLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc190cmFuc2l0aW9ufVxuICovXG5leHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHVybCwgcHJldmlvdXMgPSBudWxsKSB7ICBcbiAgICB0aGlzLnVybCA9IHVybDsgIFxuICAgIHRoaXMucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB0aGlzLnBhdGggPSBudWxsO1xuICAgIHRoaXMucm91dGVzID0gW107XG4gICAgdGhpcy5zdGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9fY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2ZpbmlzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRpcmVjdCB0byBhbm90aGVyIHN0YXRlXG4gICAqIFxuICAgKiBAc2VlIHJvdXRlci5zdGF0ZVxuICAgKi9cbiAgcmVkaXJlY3Qoc3RhdGUsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9LCBoYXNoID0gdW5kZWZpbmVkLCBvcHRpb25zID0ge30pIHtcbiAgICBvcHRpb25zID0geyAuLi5yb3V0ZXIudHJhbnNpdGlvbi5wYXRoLm9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgICB0aGlzLmNhbmNlbCgpOyAgIFxuICAgIHJldHVybiByb3V0ZXIuc3RhdGUuY2FsbChyb3V0ZXIsIHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWxvYWQgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogXG4gICAqIEBzZWUgVHJhbnNpdGlvbi5wcm90b3R5cGUucmVkaXJlY3RcbiAgICovXG4gIHJlbG9hZChwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcGFyYW1zID0geyAuLi50aGlzLnBhdGgucGFyYW1zLCAuLi5wYXJhbXMgfTtcbiAgICBxdWVyeSA9IHsgLi4udGhpcy5wYXRoLnF1ZXJ5LCAuLi5xdWVyeSB9O1xuICAgIGhhc2ggPSBoYXNoID09PSB1bmRlZmluZWQ/IHRoaXMucGF0aC5oYXNoOiBoYXNoO1xuICAgIHJldHVybiB0aGlzLnJlZGlyZWN0KHRoaXMucGF0aC5zdGF0ZS5uYW1lLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgcGF0aFxuICAgKiBcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhdGggXG4gICAqL1xuICBzZXRQYXRoKHBhdGgpIHtcbiAgICBwYXRoLnBhcmVudCA9IHRoaXMucGF0aCB8fCBudWxsO1xuICAgIHRoaXMucGF0aCA9IHsgcGFyYW1zOiB7fSwgcXVlcnk6IHt9LCAuLi5wYXRoIH07XG4gICAgdGhpcy5yb3V0ZXMucHVzaCh0aGlzLnBhdGgpO1xuICAgIHRoaXMuc3RhdGVzW3RoaXMucGF0aC5zdGF0ZS5uYW1lXSA9IHRoaXMucGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSByb3V0ZSBieSB0aGUgc3RhdGVcbiAgICogIFxuICAgKiBAcGFyYW0geyp9IHN0YXRlIFxuICAgKi9cbiAgZ2V0Um91dGUoc3RhdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMucm91dGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IHJvdXRlID0gdGhpcy5yb3V0ZXNbaV07XG5cbiAgICAgIGlmIChyb3V0ZS5zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGl0IGhhcyB0aGUgc3RhdGVcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBcbiAgICovXG4gIGhhc1N0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuICEhdGhpcy5zdGF0ZXNbc3RhdGUubmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIHJvdXRlIGlzIGNoYW5nZWRcbiAgICogXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByb3V0ZVxuICAgKi9cbiAgaXNSb3V0ZUNoYW5nZWQocm91dGUpIHtcbiAgICBpZighdGhpcy5wcmV2aW91cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSByb3V0ZS5zdGF0ZTtcblxuICAgIGlmKCF0aGlzLnByZXZpb3VzLmhhc1N0YXRlKHN0YXRlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1LZXlzID0gW107XG4gICAgc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZShyb3V0ZXIuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4gcGFyYW1LZXlzLnB1c2godikpO1xuICAgIFxuICAgIGZvcihsZXQga2V5IGluIHN0YXRlLnBhcmFtcykge1xuICAgICAgaWYocGFyYW1LZXlzLmluZGV4T2Yoa2V5KSA9PSAtMSkge1xuICAgICAgICBwYXJhbUtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5S2V5cyA9IE9iamVjdC5rZXlzKHN0YXRlLnF1ZXJ5KTtcbiAgICBjb25zdCB3YXRjaEhhc2ggPSBzdGF0ZS5oYXNoICE9PSB1bmRlZmluZWQ7ICAgIFxuICAgIGNvbnN0IHByZXZSb3V0ZSA9IHRoaXMucHJldmlvdXMuZ2V0Um91dGUoc3RhdGUpOyBcblxuICAgIGNvbnN0IHByZXYgPSB7IFxuICAgICAgcGFyYW1zOiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucGFyYW1zLCBwYXJhbUtleXMpLCBcbiAgICAgIHF1ZXJ5OiB1dGlscy5pbmNsdWRlS2V5cyhwcmV2Um91dGUucXVlcnksIHF1ZXJ5S2V5cylcbiAgICB9O1xuXG4gICAgY29uc3QgY3VycmVudCA9IHtcbiAgICAgIHBhcmFtczogdXRpbHMuaW5jbHVkZUtleXMocm91dGUucGFyYW1zLCBwYXJhbUtleXMpLFxuICAgICAgcXVlcnk6IHV0aWxzLmluY2x1ZGVLZXlzKHJvdXRlLnF1ZXJ5LCBxdWVyeUtleXMpXG4gICAgfVxuXG4gICAgaWYod2F0Y2hIYXNoKSB7XG4gICAgICBwcmV2Lmhhc2ggPSBwcmV2Um91dGUuaGFzaDtcbiAgICAgIGN1cnJlbnQuaGFzaCA9IHJvdXRlLmhhc2g7XG4gICAgfVxuXG4gICAgcmV0dXJuICF1dGlscy5jb21wYXJlKHByZXYsIGN1cnJlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgY3VycmVudCB0cmFuc2l0aW9uXG4gICAqL1xuICBjYW5jZWwoKSB7ICAgXG4gICAgdGhpcy5fX2NhbmNlbGxlZCA9IHRydWU7XG4gICAgdGhpcy5maW5pc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5pc2ggdGhlIHRyYW5zaXRpb25cbiAgICovXG4gIGZpbmlzaCgpIHtcbiAgICB0aGlzLl9fZmluaXNlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBa2lsaSByb3V0ZXJcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICovXG5jb25zdCByb3V0ZXIgPSB7fTtcblxuLyoqXG4gKiBTZXQgcm91dGVyJ3MgZGVmYXVsdCB2YXJpYWJsZXNcbiAqL1xucm91dGVyLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJhc2VVcmwgPSBcIi9cIjtcbiAgdGhpcy5zdGF0ZXMgPSBbXTtcbiAgdGhpcy5oYXNoTW9kZSA9IHRydWU7XG4gIHRoaXMuX19yZWRpcmVjdHMgPSAwO1xuICB0aGlzLl9faW5pdCA9IGZhbHNlO1xuICB0aGlzLl9fcGFyYW1SZWdleCA9IC8oXFwvPzooW1xcd1xcZC1dKykpL2c7XG4gIHRoaXMuX19yb3V0ZVNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgUm91dGU7XG59XG5cbi8qKlxuICogQWRkIG5ldyBzdGF0ZSB0byB0aGUgcm91dGVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBzdGF0ZSBuYW1lLiBUbyBzZXQgcGFyZW50cyB5b3UgY2FuIHVzZSBkb3QsIGUuZy4gJ2FwcC5hcnRpY2xlLmVkaXQnXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiAtIHVybCBwYXR0ZXJuIGxpa2UgJ2FwcC9hcnRpY2xlLzppZCdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm5zIHtyb3V0ZXJ9XG4gKi9cbnJvdXRlci5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIGlmKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG5hbWU7XG4gICAgcGF0dGVybiA9IG9wdGlvbnMucGF0dGVybjtcbiAgICBuYW1lID0gb3B0aW9ucy5zdGF0ZTtcbiAgICBkZWxldGUgb3B0aW9ucy5wYXR0ZXJuO1xuICAgIGRlbGV0ZSBvcHRpb25zLnN0YXRlO1xuICB9XG5cbiAgaWYoIW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFJvdXRlciBzdGF0ZSBtdXN0IGhhdmUgYSBuYW1lYCk7XG4gIH1cblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgdGVtcGxhdGVVcmw6ICcnLFxuICAgIGFic3RyYWN0OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgcGFyYW1zOiB7fSxcbiAgICBxdWVyeToge30sXG4gICAgaGFuZGxlcjogKCkgPT4ge30sXG4gIH07XG5cbiAgaWYoQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBvcHRpb25zLmNvbXBvbmVudCAmJiAob3B0aW9ucy50ZW1wbGF0ZSB8fCBvcHRpb25zLnRlbXBsYXRlVXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgbXVzdCBvbmx5IGhhdmUgYSBjb21wb25lbnQgb3IgdGVtcGxhdGUgb3B0aW9uYCk7XG4gIH0gXG5cbiAgaWYgKCFvcHRpb25zLnRlbXBsYXRlICYmICFvcHRpb25zLnRlbXBsYXRlVXJsICYmICFvcHRpb25zLmNvbXBvbmVudCkge1xuICAgIG9wdGlvbnMuYWJzdHJhY3QgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgXCIke25hbWV9XCIgaXMgYWxyZWFkeSBleGlzdHNgKVxuICB9XG5cbiAgdGhpcy5zZXRTdGF0ZShuYW1lLCBwYXR0ZXJuLCB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnN9KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBzdGF0ZSBmcm9tIHRoZSBsaXN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqL1xucm91dGVyLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodGhpcy5zdGF0ZXNbaV0ubmFtZSA9PSBuYW1lKSB7XG4gICAgICB0aGlzLnN0YXRlcy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgc3RhdGUgZXhpc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5yb3V0ZXIuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YXRlc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHRoZSBzdGF0ZSB0byB0aGUgcGFzc2VkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHN0YXRlIHtpZDogMX0gPT4gJy9hcHAvOmlkJyA9PiAnL2FwcC8xJ1xuICogQHBhcmFtIHtvYmplY3R9IFtxdWVyeV0gLSBxdWVyeSB7eDogMX0gPT4gJy9hcHAvP3g9MSdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaF1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLnN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9KSB7ICBcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIFxuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGUgc3RhdGUgd2l0aCBuYW1lICR7c3RhdGV9YCk7XG4gIH1cblxuICBvcHRpb25zID0geyAuLi5vcHRpb25zIH07XG4gIG9wdGlvbnMubWFudWFsID0gdHJ1ZTtcbiAgKHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9ID0gdGhpcy5wcmVwYXJlU3RhdGVBcmdzKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zLCBmYWxzZSkpOyAgXG4gIGxldCB1cmwgPSB0aGlzLmNyZWF0ZVN0YXRlVXJsKHN0YXRlLCBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zKTsgICAgXG4gIHRoaXMuaXNvbGF0ZSgoKSA9PiB0aGlzLnNldFVybCh1cmwpKTtcbiAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEdvIGJhY2tcbiAqL1xucm91dGVyLmJhY2sgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LmJhY2suYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG59O1xuXG4vKipcbiAqIEdvIHRvIGFueSB3YXlcbiAqL1xucm91dGVyLmdvID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeS5nby5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogR28gZm9yd2FyZFxuICovXG5yb3V0ZXIuZm9yd2FyZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkuZm9yd2FyZC5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKTtcbn07XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlIGJ5IHVybFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmxvY2F0aW9uID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgb3B0aW9ucy5tYW51YWwgPSB0cnVlO1xuICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5zZXRVcmwodXJsKSk7ICBcbiAgcmV0dXJuIHRoaXMuY2hhbmdlU3RhdGUob3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIFJvdXRlciBpbml0aWFsaXphdGlvbi4gU2hvdWxkIGJlIGNhbGxlZCBiZWZvcmUgQWtpbGkuaW5pdCgpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VXJsXVxuICogQHBhcmFtIHtib29sZWFufSBbaGFzaE1vZGU9dHJ1ZV1cbiAqL1xucm91dGVyLmluaXQgPSBmdW5jdGlvbiAoZGVmYXVsdFVybCA9ICcnLCBoYXNoTW9kZSA9IHRydWUpIHtcbiAgbGV0IG9sZFB1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcblxuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcmVzID0gb2xkUHVzaFN0YXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICByb3V0ZXIuY2hhbmdlU3RhdGUoKS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgdGhpcy5jaGFuZ2VTdGF0ZSgpLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gIH07XG5cbiAgdGhpcy5kZWZhdWx0VXJsID0gZGVmYXVsdFVybDtcbiAgdGhpcy5oYXNoTW9kZSA9IGhhc2hNb2RlOyAgICBcblxuICB0aGlzLnN0YXRlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgYSA9IGEubmFtZS5zcGxpdCgnLicpLmxlbmd0aDtcbiAgICBiID0gYi5uYW1lLnNwbGl0KCcuJykubGVuZ3RoO1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0aGlzLmluaXRTdGF0ZSh0aGlzLnN0YXRlc1tpXSk7XG4gIH1cblxuICBpZiAoIXRoaXMuc3RhdGVzLmxlbmd0aCAmJiBBa2lsaS5vcHRpb25zLmRlYnVnKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oYFlvdSBkaWRuJ3QgYWRkIGFueSByb3V0ZXMgdG8gdGhlIHJvdXRlcmApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5fX29uU3RhdGVDaGFuZ2VIYW5kbGVyKTtcbiAgdGhpcy5fX2luaXQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBzdGF0ZSBcbiAqIFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFxuICovXG5yb3V0ZXIuaW5pdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIGxldCBwYXJlbnRzID0gW107XG4gIHN0YXRlLmNoaWxkcmVuID0gW107XG4gIHBhcmVudHMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7XG4gIHBhcmVudHMucG9wKCk7XG4gIHN0YXRlLmxldmVsID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHBhcmVudHMubGVuZ3RoO1xuXG4gIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgIGxldCBwYXJlbnROYW1lID0gcGFyZW50cy5qb2luKCcuJyk7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U3RhdGUocGFyZW50TmFtZSk7XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcGFyZW50IHJvdXRlIHN0YXRlIFwiJHtwYXJlbnROYW1lfVwiIGZvciBcIiR7c3RhdGUubmFtZX1cImApXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmxldmVsICE9PSBudWxsICYmIHBhcmVudC5hYnN0cmFjdCkge1xuICAgICAgc3RhdGUubGV2ZWwtLTtcbiAgICB9XG5cbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHRoaXMuc3BsaXRTbGFzaGVzKHBhcmVudC5mdWxsUGF0dGVybiArICcvJyArIHN0YXRlLnBhdHRlcm4pO1xuICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHN0YXRlKTtcbiAgfVxuICBlbHNlIHtcbiAgICBzdGF0ZS5mdWxsUGF0dGVybiA9IHN0YXRlLnBhdHRlcm47XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgc3RhdGUgYnkgbmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9XG4gKi9cbnJvdXRlci5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5zdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5zdGF0ZXNbaV07XG5cbiAgICBpZiAoc3RhdGUubmFtZSA9PSBuYW1lKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFNldCBzdGF0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqL1xucm91dGVyLnNldFN0YXRlID0gZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgc3RhdGUgPSB7Li4ub3B0aW9ucywgbmFtZSwgcGF0dGVybn07XG4gIHRoaXMuc3RhdGVzLnB1c2goc3RhdGUpO1xuICB0aGlzLl9faW5pdCAmJiB0aGlzLmluaXRTdGF0ZShzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN0YXRlIGJ5IG5hbWVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICovXG5yb3V0ZXIucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2ldO1xuXG4gICAgaWYgKHN0YXRlLm5hbWUgPT0gbmFtZSkge1xuICAgICAgdGhpcy5zdGF0ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldCB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5zZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHRoaXMuaGFzaE1vZGU/IHRoaXMuc2V0SGFzaFVybCh1cmwpOiB0aGlzLnNldEhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIuc2V0SGlzdG9yeVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1cmwpO1xufTtcblxuLyoqXG4gKiBTZXQgdXJsIHVzaW5nIGhhc2hcbiAqXG4gKiBAcGFyYW0gdXJsXG4gKi9cbnJvdXRlci5zZXRIYXNoVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcjJyArICh1cmwgfHwgJy8nKTtcbn07XG5cbi8qKlxuICogUmVwbGFjZSB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbnJvdXRlci5yZXBsYWNlVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICB0aGlzLmhhc2hNb2RlPyB0aGlzLnJlcGxhY2VIYXNoVXJsKHVybCk6IHRoaXMucmVwbGFjZUhpc3RvcnlVcmwodXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIucmVwbGFjZUhpc3RvcnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgdXJsKTtcbn07XG5cbi8qKlxuICogU2V0IHVybCB1c2luZyBoYXNoXG4gKlxuICogQHBhcmFtIHVybFxuICovXG5yb3V0ZXIucmVwbGFjZUhhc2hVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh1bmRlZmluZWQsIHVuZGVmaW5lZCwgJyMnICsgKHVybCB8fCAnLycpKTtcbn07XG5cbi8qKlxuICogR2V0IHVybFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhhc2hNb2RlID8gdGhpcy5nZXRIYXNoVXJsKCkgOiB0aGlzLmdldEhpc3RvcnlVcmwoKTtcbn07XG5cbi8qKlxuICogR2V0IHVybCB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59O1xuXG4vKipcbiAqIEdldCB1cmwgdXNpbmcgaGFzaFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnJvdXRlci5nZXRIYXNoVXJsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG59O1xuXG4vKipcbiAqIEdldCBxdWVyeSBwYXJhbXNcbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxuICovXG5yb3V0ZXIuZ2V0VXJsUXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaGFzaE1vZGUgPyB0aGlzLmdldEhhc2hVcmxRdWVyeSgpIDogdGhpcy5nZXRIaXN0b3J5VXJsUXVlcnkoKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoaXN0b3J5XG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhpc3RvcnlVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpKTtcbn07XG5cbi8qKlxuICogR2V0IHF1ZXJ5IHBhcmFtcyB1c2luZyBoYXNoXG4gKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldEhhc2hVcmxRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcmVxdWVzdC5wYXJhbXNGcm9tUXVlcnkoKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNwbGl0KCc/JylbMV0gfHwgJycpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHVybCBieSBkYXRhXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbcHJlcGFyZV1cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlVXJsID0gZnVuY3Rpb24gKHN0YXRlLCBwYXJhbXMgPSB7fSwgcXVlcnkgPSB7fSwgaGFzaCA9IHVuZGVmaW5lZCwgb3B0aW9ucyA9IHt9LCBwcmVwYXJlID0gdHJ1ZSkge1xuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICBcbiAgaWYocHJlcGFyZSkge1xuICAgICh7IHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMgfSA9IHRoaXMucHJlcGFyZVN0YXRlQXJncyhzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucykpO1xuICB9XG5cbiAgbGV0IHVybCA9IHN0YXRlLmZ1bGxQYXR0ZXJuLnJlcGxhY2UodGhpcy5fX3BhcmFtUmVnZXgsIChtLCBmLCB2KSA9PiAnLycgKyAocGFyYW1zW3ZdIHx8ICcnKSk7XG4gIHVybCA9IHVybC5yZXBsYWNlKC9eXFxeLywgJycpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcyh1cmwpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoKSB7XG4gICAgdXJsICs9ICc/JyArIHJlcXVlc3QucGFyYW1zVG9RdWVyeShxdWVyeSk7XG4gIH1cblxuICBpZiAoIXRoaXMuaGFzaE1vZGUgJiYgaGFzaCkge1xuICAgIHVybCArPSAnIycgKyBoYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBhcmd1bWVudHNcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdXG4gKiBAcGFyYW0ge29iamVjdH0gW3F1ZXJ5XVxuICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoXVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICovXG5yb3V0ZXIucHJlcGFyZVN0YXRlQXJncyA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zID0ge30sIHF1ZXJ5ID0ge30sIGhhc2ggPSB1bmRlZmluZWQsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgYXJncyA9IHsgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucyB9O1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCA5OTk7IGkrKykge1xuICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVBhcmFtcyhzdGF0ZSwgcGFyYW1zLCBhcmdzKTtcbiAgICBjb25zdCBxdWVyeVRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZVF1ZXJ5KHN0YXRlLCBxdWVyeSwgYXJncyk7XG4gICAgY29uc3QgaGFzaFRlbXAgPSB0aGlzLnByZXBhcmVTdGF0ZUhhc2goc3RhdGUsIGhhc2gsIGFyZ3MpO1xuICAgIFxuICAgIGlmKGhhc2hUZW1wID09PSBudWxsKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYoaGFzaFRlbXAgPT09ICcnKSB7XG4gICAgICBvcHRpb25zLmVtcHR5SGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0FyZ3MgPSB7IHBhcmFtczogcGFyYW1zVGVtcCwgcXVlcnk6IHF1ZXJ5VGVtcCwgaGFzaDogaGFzaFRlbXAsIG9wdGlvbnMgfTtcblxuICAgIGlmKHV0aWxzLmNvbXBhcmUobmV3QXJncywgYXJncykpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGFyZ3MgPSBuZXdBcmdzO1xuICB9XG4gICAgXG4gIHJldHVybiBhcmdzO1xufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIHBhcmFtc1xuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge29iamVjdH0gW2FyZ3NdXG4gKi9cbnJvdXRlci5wcmVwYXJlU3RhdGVQYXJhbXMgPSBmdW5jdGlvbihzdGF0ZSwgcGFyYW1zLCBhcmdzKSB7XG4gIHR5cGVvZiBzdGF0ZSAhPT0gJ29iamVjdCcgJiYgKHN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSkpO1xuICBjb25zdCBsaXN0ID0gW3BhcmFtc107XG4gIGNvbnN0IHN0YXRlcyA9IHN0YXRlLm5hbWUuc3BsaXQoJy4nKTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGxldCBjdXJyZW50ID0gc3RhdGVzLnNsaWNlKDAsIHN0YXRlcy5sZW5ndGggLSBpKS5qb2luKCcuJyk7XG4gICAgbGlzdC5wdXNoKHRoaXMuZ2V0U3RhdGUoY3VycmVudCkucGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNyZWF0ZVN0YXRlQXJncyhsaXN0LCBhcmdzKTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBzdGF0ZSBxdWVyeVxuICogXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gcXVlcnlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZVF1ZXJ5ID0gZnVuY3Rpb24oc3RhdGUsIHF1ZXJ5LCBhcmdzKSB7ICBcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGNvbnN0IGxpc3QgPSBbcXVlcnldO1xuICBjb25zdCBzdGF0ZXMgPSBzdGF0ZS5uYW1lLnNwbGl0KCcuJyk7ICBcblxuICBmb3IobGV0IGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZXMuc2xpY2UoMCwgc3RhdGVzLmxlbmd0aCAtIGkpLmpvaW4oJy4nKTtcbiAgICBsaXN0LnB1c2godGhpcy5nZXRTdGF0ZShjdXJyZW50KS5xdWVyeSk7XG4gIH1cbiBcbiAgcmV0dXJuIHRoaXMuY3JlYXRlU3RhdGVBcmdzKGxpc3QsIGFyZ3MpO1xufVxuXG4vKipcbiAqIE1lcmdlIGxpc3QgaXRlbXMgYXMgdHJhbnNpdGlvbiBvYmplY3RzXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0W119IGxpc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLmNyZWF0ZVN0YXRlQXJncyA9IGZ1bmN0aW9uIChsaXN0LCBhcmdzID0geyBwYXJhbXM6IHt9LCBxdWVyeToge30gfSkge1xuICBjb25zdCBhbGwgPSB7fTtcbiAgY29uc3QgZXhjbHVkZWQgPSB7fTtcblxuICBmb3IobGV0IGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBvYmogPSBsaXN0W2ldO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuIFxuICAgIGZvcihsZXQgayA9IDAsIGMgPSBrZXlzLmxlbmd0aDsgayA8IGM7IGsrKykge1xuICAgICAgbGV0IGtleSA9IGtleXNba107XG4gICAgICBsZXQgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmKGV4Y2x1ZGVkW2tleV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhbCA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJz8gdmFsKGFyZ3MpOiB2YWw7XG5cbiAgICAgIGlmKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZih2YWwgPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGFsbFtrZXldO1xuICAgICAgICBleGNsdWRlZFtrZXldID0gdHJ1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGFsbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbGw7IFxufVxuXG4vKipcbiAqIFByZXBhcmUgdGhlIHN0YXRlIGhhc2hcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAqIEBwYXJhbSB7b2JqZWN0fSBbYXJnc11cbiAqL1xucm91dGVyLnByZXBhcmVTdGF0ZUhhc2ggPSBmdW5jdGlvbihzdGF0ZSwgaGFzaCwgYXJncykge1xuICBpZihoYXNoID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGhhc2g7XG4gIH1cblxuICB0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIChzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpKTtcbiAgY29uc3Qgc3RhdGVzID0gc3RhdGUubmFtZS5zcGxpdCgnLicpO1xuXG4gIGZvcihsZXQgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHN0YXRlcy5zbGljZSgwLCBzdGF0ZXMubGVuZ3RoIC0gaSkuam9pbignLicpO1xuICAgIGxldCB2YWwgPSB0aGlzLmdldFN0YXRlKGN1cnJlbnQpLmhhc2g7XG4gICAgdmFsID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nPyB2YWwoYXJncyk6IHZhbDtcblxuICAgIGlmKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZih2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGhhc2ggPSB2YWw7XG4gIH1cblxuICByZXR1cm4gaGFzaDtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYWxsIHVubmVjZXNzYXJ5IHNsYXNoZXMgZnJvbSBhbiB1cmxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5yb3V0ZXIuc3BsaXRTbGFzaGVzID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1svXSsvZywgJy8nKTtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlIHVybCBjb250ZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xucm91dGVyLmdldFBhdHRlcm5Db250ZW50ID0gZnVuY3Rpb24gKHN0YXRlLCB1cmwpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGxldCBrZXlzID0gW107XG4gIGxldCBwYXJhbXMgPSB7fTtcblxuICB1cmwgPSB1cmwuc3BsaXQoJz8nKVswXTtcbiAgdXJsID0gdXJsLnNwbGl0KCcjJylbMF07XG5cbiAgbGV0IHVybFBhdHRlcm4gPSBzdGF0ZS5mdWxsUGF0dGVybi5yZXBsYWNlKHRoaXMuX19wYXJhbVJlZ2V4LCAobSwgZiwgdikgPT4ge1xuICAgIGtleXMucHVzaCh2KTtcbiAgICByZXR1cm4gJy8/KFteL10qKSc7XG4gIH0pO1xuXG4gIHVybFBhdHRlcm4gPSB1cmxQYXR0ZXJuLnJlcGxhY2UoLyhbXl4vXSspWy9dKyQvLCAnJDEnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh1cmxQYXR0ZXJuLCAnZycpO1xuICBsZXQgaXNJbmNsdWRlZCA9IHVybC5tYXRjaChyZWdleCk7XG4gIFxuICBpZiAoIWlzSW5jbHVkZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHVybC5yZXBsYWNlKHJlZ2V4LCAobSwgLi4uYXJncykgPT4geyBcbiAgICBhcmdzID0gYXJncy5zbGljZSgwLCBhcmdzLmxlbmd0aCAtIDIpO1xuXG4gICAgZm9yKGxldCBpID0gMCwgbCA9IGFyZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgdiA9IGFyZ3NbaV07XG4gICAgICB2ICYmIChwYXJhbXNba2V5c1tpXV0gPSB2KTtcbiAgICB9ICBcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcGFyYW1zIH07XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0ZSBpcyBhY3RpdmUgbm93XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pc0FjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUsIGluY2x1ZGVzID0gZmFsc2UpIHtcbiAgdHlwZW9mIHN0YXRlICE9PSAnb2JqZWN0JyAmJiAoc3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKSk7XG4gIGxldCB1cmwgPSByb3V0ZXIudHJhbnNpdGlvbiAmJiAhcm91dGVyLnRyYW5zaXRpb24uX19maW5pc2hlZD8gcm91dGVyLnRyYW5zaXRpb24udXJsOiB0aGlzLmdldFVybCgpO1xuICB1cmwgPSB0aGlzLnNwbGl0U2xhc2hlcygnLycgKyB1cmwuc3BsaXQoJz8nKVswXSArICcvJyk7XG4gIGxldCB1cmxQYXR0ZXJuID0gc3RhdGUuZnVsbFBhdHRlcm4ucmVwbGFjZSh0aGlzLl9fcGFyYW1SZWdleCwgJy8/KFteL10qKScpO1xuICB1cmxQYXR0ZXJuID0gdXJsUGF0dGVybi5yZXBsYWNlKC9eXFxeLywgJycpLnJlcGxhY2UoL1xcJCQvLCAnJyk7XG4gIGxldCBzdHIgPSBpbmNsdWRlcz8gdXJsUGF0dGVybjogdGhpcy5zcGxpdFNsYXNoZXMoJ14vJyArIHVybFBhdHRlcm4gKyAnLyQnKTtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdHIpOyAgXG4gIHJldHVybiByZWdleC50ZXN0KHVybCk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBjdXJyZW50IHVybCBpbmNsdWRlcyBhIHN0YXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnJvdXRlci5pbkFjdGl2ZVN0YXRlID0gZnVuY3Rpb24oc3RhdGUpIHtcbiAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZVN0YXRlKHN0YXRlLCB0cnVlKTtcbn07XG5cbi8qKlxuICogR2V0IHJvdXRlIGNvbXBvbmVudCBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICovXG5yb3V0ZXIuZ2V0Um91dGUgPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgbGV0IGkgPSAwO1xuXG4gIGNvbnN0IGZpbmQgPSAoZWwpID0+IHtcbiAgICBsZXQgcm91dGUgPSBlbC5jaGlsZCh0aGlzLl9fcm91dGVTZWxlY3Rvcik7XG5cbiAgICBpZiAoIXJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaSA9PSBsZXZlbCkge1xuICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH1cblxuICAgIGkrKztcbiAgICByZXR1cm4gZmluZChyb3V0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIGZpbmQoQWtpbGkucm9vdCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgbWF0Y2hcbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBhcnJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAqL1xucm91dGVyLmdldEFycmF5UGF0dGVybkNvbnRlbnQgPSBmdW5jdGlvbiAoYXJyLCB1cmwpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGV0IHN0YXRlID0gYXJyW2ldO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRQYXR0ZXJuQ29udGVudChzdGF0ZSwgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3RhdGU6IHN0YXRlLCAuLi5jb250ZW50IH07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogR2V0IHN0YXRlcyBieSBsZXZlbFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbFxuICogQHJldHVybnMge0FycmF5fVxuICovXG5yb3V0ZXIuZ2V0U3RhdGVzQnlMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICBsZXQgc3RhdGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlc1tpXTtcblxuICAgIGlmIChzdGF0ZS5sZXZlbCA8IGxldmVsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhdGUubGV2ZWwgPiBsZXZlbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlcztcbn07XG5cbi8qKlxuICogUmVsb2FkIHRoZSBzdGF0ZVxuICogXG4gKiBAc2VlIFRyYW5zaXRpb24ucmVsb2FkXG4gKi9cbnJvdXRlci5yZWxvYWQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gIGlmKCF0aGlzLnRyYW5zaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBmb3VuZCBhbiBhY3RpdmUgdHJhbnNpdGlvbiB0byByZWxvYWQgdGhlIHN0YXRlJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy50cmFuc2l0aW9uLnJlbG9hZCguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBJc29sYXRlIHRoZSBmdW5jdGlvbiB0byBub3QgdHJpZ2dlciByb3V0ZXIgaGFuZGxlcnMgaW5zaWRlXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5yb3V0ZXIuaXNvbGF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICB0aGlzLl9faXNvbGF0ZWQgPSB0cnVlO1xuICBsZXQgcmVzID0gZm4oKTtcbiAgdGhpcy5fX2lzb2xhdGVkID0gZmFsc2U7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hhbmdlIHN0YXRlXG4gKiBcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqL1xucm91dGVyLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkgeyAgICBcbiAgaWYodGhpcy5fX2lzb2xhdGVkKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIFxuICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcbiAgbGV0IHBhcmFtcyA9IHt9O1xuICBsZXQgcXVlcnkgPSB0aGlzLmdldFVybFF1ZXJ5KCk7ICBcbiAgbGV0IGhhc2ggPSB0aGlzLmhhc2hNb2RlPyAnJzogd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTsgXG4gIGxldCBwcmV2VHJhbnNpdGlvbiA9IHJvdXRlci50cmFuc2l0aW9uIHx8IG51bGw7XG4gIGxldCB0cmFuc2l0aW9uID0gcm91dGVyLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih1cmwsIHByZXZUcmFuc2l0aW9uKTtcbiAgbGV0IGxldmVsID0gMDtcbiAgXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc3RhdGUtY2hhbmdlJywgeyBkZXRhaWw6IHRyYW5zaXRpb24gfSkpO1xuXG4gIGNvbnN0IG5leHQgPSAoc3RhdGVzKSA9PiB7ICAgIFxuICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZXRBcnJheVBhdHRlcm5Db250ZW50KHN0YXRlcywgdXJsKTtcblxuICAgIGlmICghY29udGVudCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGxldCBzdGF0ZSA9IGNvbnRlbnQuc3RhdGU7IFxuICAgIHRyYW5zaXRpb24uc2V0UGF0aCh7IHN0YXRlLCBjb21wb25lbnQ6IHJvdXRlIH0pOyAgICBcbiAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgLi4uY29udGVudC5wYXJhbXMgfTtcbiAgICBoYXNoID0gaGFzaCB8fCBvcHRpb25zLmVtcHR5SGFzaDtcbiAgICAoeyBwYXJhbXMsIHF1ZXJ5LCBoYXNoLCBvcHRpb25zIH0gPSB0aGlzLnByZXBhcmVTdGF0ZUFyZ3Moc3RhdGUsIHBhcmFtcywgcXVlcnksIGhhc2gsIG9wdGlvbnMpKTsgICAgIFxuICAgIGhhc2ggPSBoYXNoIHx8ICcnO1xuICAgIGxldCByZWFsVXJsID0gdGhpcy5jcmVhdGVTdGF0ZVVybChzdGF0ZSwgcGFyYW1zLCBxdWVyeSwgaGFzaCwgb3B0aW9ucywgZmFsc2UpOyBcbiAgICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXBsYWNlVXJsKHJlYWxVcmwpKTsgXG4gICAgbGV0IHJvdXRlID0gc3RhdGUuYWJzdHJhY3Q/IG51bGw6IHRoaXMuZ2V0Um91dGUobGV2ZWwpO1xuICAgIFxuICAgIGlmICghcm91dGUgJiYgIXN0YXRlLmFic3RyYWN0KSB7ICAgICAgXG4gICAgICB0aHJvdyBuZXcgRXJyb3IgKGBOb3QgZm91bmQgcm91dGUgY29tcG9uZW50IGZvciBzdGF0ZSBcIiR7c3RhdGUubmFtZX1cImApO1xuICAgIH0gICAgXG5cbiAgICB0cmFuc2l0aW9uLnBhdGgucGFyYW1zID0gcGFyYW1zO1xuICAgIHRyYW5zaXRpb24ucGF0aC5xdWVyeSA9IHF1ZXJ5O1xuICAgIHRyYW5zaXRpb24ucGF0aC5oYXNoID0gaGFzaDtcbiAgICB0cmFuc2l0aW9uLnBhdGgudXJsID0gcmVhbFVybDtcbiAgICB0cmFuc2l0aW9uLnBhdGgub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgIXN0YXRlLmFic3RyYWN0ICYmIGxldmVsKys7XG4gICAgbGV0IGlzRGlmZmVyZW50ID0gdHJ1ZTtcblxuICAgIGlmKHJlYWxVcmwgIT0gdXJsKSB7XG4gICAgICBpc0RpZmZlcmVudCA9IHRyYW5zaXRpb24uaXNSb3V0ZUNoYW5nZWQodHJhbnNpdGlvbi5wYXRoKTtcbiAgICB9XG4gICAgICAgXG4gICAgbGV0IGxvYWQgPSBpc0RpZmZlcmVudCAmJiBvcHRpb25zLnJlbG9hZCAhPT0gZmFsc2U7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxvYWQ/IHN0YXRlLmhhbmRsZXIodHJhbnNpdGlvbik6IHRyYW5zaXRpb24ucGF0aC5kYXRhKS50aGVuKChkYXRhKSA9PiB7ICAgICAgIFxuICAgICAgdHJhbnNpdGlvbi5wYXRoLmRhdGEgPSBkYXRhO1xuICAgICAgc3RhdGUudGl0bGUgJiYgKGRvY3VtZW50LnRpdGxlID0gdHlwZW9mIHN0YXRlLnRpdGxlID09ICdmdW5jdGlvbic/IHN0YXRlLnRpdGxlKHRyYW5zaXRpb24pOiBzdGF0ZS50aXRsZSk7XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uLl9fY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmFic3RyYWN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldlJvdXRlID0gdHJhbnNpdGlvbi5wcmV2aW91cyAmJiB0cmFuc2l0aW9uLnByZXZpb3VzLmdldFJvdXRlKHN0YXRlKTtcbiAgICAgIChwcmV2Um91dGUgJiYgIXByZXZSb3V0ZS5sb2FkZWQpICYmIChsb2FkID0gdHJ1ZSk7XG4gICAgICByZXR1cm4gcm91dGUuc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uLCBsb2FkKS50aGVuKCgpID0+IHRyYW5zaXRpb24ucGF0aC5sb2FkZWQgPSB0cnVlKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXh0KHN0YXRlLmNoaWxkcmVuKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gbmV4dCh0aGlzLmdldFN0YXRlc0J5TGV2ZWwoMCkpLnRoZW4oKCkgPT4ge1xuICAgIGlmICghdHJhbnNpdGlvbi5yb3V0ZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5fX3JlZGlyZWN0cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdyb25nIHJvdXRlciBkZWZhdWx0IHVybCBcIiR7dGhpcy5kZWZhdWx0VXJsfVwiYCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRlZmF1bHRVcmwpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFVybCA9PSB0aGlzLmdldFVybCgpKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBhbnkgcm91dGVzYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzb2xhdGUoKCkgPT4gdGhpcy5yZXBsYWNlVXJsKHRoaXMuZGVmYXVsdFVybCkpOyAgICAgICAgICBcbiAgICAgICAgdGhpcy5fX3JlZGlyZWN0cysrO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoQWtpbGkub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oYE5vdCBmb3VuZCBhIGRlZmF1bHQgcm91dGUuIFlvdSBjYW4gcGFzcyBpdCBpbiBcInJvdXRlci5pbml0KGRlZmF1bHRVcmwpXCIgZnVuY3Rpb25gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFvcHRpb25zLnNhdmVTY3JvbGxQb3NpdGlvbiAmJiAoIXRyYW5zaXRpb24ucGF0aCB8fCAhdHJhbnNpdGlvbi5wYXRoLmhhc2gpKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfVxuXG4gICAgdGhpcy5fX3JlZGlyZWN0cyA9IDA7XG4gICAgdHJhbnNpdGlvbi5maW5pc2goKTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N0YXRlLWNoYW5nZWQnLCB7IGRldGFpbDogdHJhbnNpdGlvbiB9KSk7XG4gICAgcmV0dXJuIHRyYW5zaXRpb247XG4gIH0pO1xufTtcblxuLyoqXG4gKiBEZWluaXQgcm91dGVyXG4gKi9cbnJvdXRlci5kZWluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuX19vblN0YXRlQ2hhbmdlSGFuZGxlcik7XG4gIHJvdXRlci5zZXREZWZhdWx0cygpO1xufTtcblxucm91dGVyLlRyYW5zaXRpb24gPSBUcmFuc2l0aW9uO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xucm91dGVyLnNldERlZmF1bHRzKCk7IiwiaW1wb3J0IEFraWxpIGZyb20gJ2FraWxpJztcbmltcG9ydCBGb3IsIHsgTG9vcCB9IGZyb20gJ2FraWxpL3NyYy9jb21wb25lbnRzL2Zvcic7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCB0YWJzLlxuICogXG4gKiBAdGFnIHRhYnMgIFxuICogQGF0dHIge251bWJlcn0gYWN0aXZlIC0gYWN0dWFsIHRhYiBpbmRleFxuICogQG1lc3NhZ2Uge251bWJlcn0gdGFiIC0gc2VudCBvbiBhY3RpdmUgdGFiIGNoYW5nZSBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIEFraWxpLkNvbXBvbmVudCB7XG4gIHN0YXRpYyBldmVudHMgPSBbJ3RhYiddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0YWJzJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0YWItbWVudScsIHRoaXMuVGFiTWVudSk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0YWItY29udGVudCcsIHRoaXMuVGFiQ29udGVudCk7XG4gICAgQWtpbGkuY29tcG9uZW50KCd0YWItdGl0bGUnLCB0aGlzLlRhYlRpdGxlKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3RhYi1wYW5lJywgdGhpcy5UYWJQYW5lKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuc2NvcGUuYWN0aXZlID0gdGhpcy5hY3RpdmUgPSBudWxsO1xuICB9XG5cbiAgcmVzb2x2ZWQoKSB7XG4gICAgY29uc3QgbWVudUNoaWxkID0gdGhpcy5jaGlsZChjID0+IGMgaW5zdGFuY2VvZiBUYWJNZW51KTtcbiAgICBjb25zdCBjb250ZW50Q2hpbGQgPSB0aGlzLmNoaWxkKGMgPT4gYyBpbnN0YW5jZW9mIFRhYkNvbnRlbnQpO1xuXG4gICAgaWYoIW1lbnVDaGlsZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgXCJ0YWJzXCIgbXVzdCBoYXZlIFwidGFiLW1lbnVcIiBjb21wb25lbnQgaW5zaWRlIGl0c2VsZmApO1xuICAgIH1cblxuICAgIGlmKCFjb250ZW50Q2hpbGQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50IFwidGFic1wiIG11c3QgaGF2ZSBcInRhYi1jb250ZW50XCIgY29tcG9uZW50IGluc2lkZSBpdHNlbGZgKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZUxlbmd0aCA9IG1lbnVDaGlsZC5nZXRUYWJzKCkubGVuZ3RoO1xuICAgIGNvbnN0IHBhbmVMZW5ndGggPSBjb250ZW50Q2hpbGQuZ2V0VGFicygpLmxlbmd0aDtcblxuICAgIGlmKHRpdGxlTGVuZ3RoICE9IHBhbmVMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgXCJ0YWItdGl0bGVcIiBhbmQgXCJ0YWItY29udGVudFwiIGNvbXBvbmVudHMgY291bnQgaXMgZGlmZmVyZW50OiAke3RpdGxlTGVuZ3RofS8ke3BhbmVMZW5ndGh9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5hdHRyKCdhY3RpdmUnLCB0aGlzLnNldEFjdGl2ZVRhYiwgeyBjYWxsT25TdGFydDogdHJ1ZSB9KTtcbiAgfVxuXG4gIHNldEFjdGl2ZVRhYihpbmRleCA9IDApIHtcbiAgICBsZXQgdGFicyA9IHRoaXMuY2hpbGQoYyA9PiBjIGluc3RhbmNlb2YgVGFiTWVudSkuZ2V0VGFicygpO1xuICAgIGxldCBsYXN0QWN0aXZlID0gdGhpcy5hY3RpdmU7XG5cbiAgICBpZih0YWJzW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFwidGFic1wiIGNvbXBvbmVudCBpbmRleCBcIiR7aW5kZXh9XCIgaXMgb3V0IG9mIHJhbmdlYCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY29wZS5hY3RpdmUgPSB0aGlzLmFjdGl2ZSA9IGluZGV4O1xuXG4gICAgaWYoIXRhYnMubGVuZ3RoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlLndhcm4oJ05vdCBmb3VuZCBhbnkgY2hpbGQgY29tcG9uZW50IFwidGFiLXRpdGxlXCIgZm9yIFwidGFiLW1lbnVcIicpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGFicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRhYnNbaV0uc2V0QWN0aXZpdHkoaSA9PSBpbmRleCk7XG4gICAgfVxuXG4gICAgbGFzdEFjdGl2ZSAhPSB0aGlzLmFjdGl2ZSAmJiB0aGlzLmF0dHJzLm9uVGFiLnRyaWdnZXIoaW5kZXgsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byBjb250cm9sIHRoZSB0aXRsZXMuXG4gKiBcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqL1xuZXhwb3J0IGNsYXNzIFRhYk1lbnUgZXh0ZW5kcyBGb3Ige1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgICB0aGlzLmNoaWxkU2VsZWN0b3IgPSBjID0+IGMgaW5zdGFuY2VvZiBUYWJUaXRsZTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IFxuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBcbiAgfVxuXG4gIGdldFRhYnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4odGhpcy5jaGlsZFNlbGVjdG9yLCAwKTtcbiAgfVxuXG4gIGdldFRhYkluZGV4KHRhYikge1xuICAgIHJldHVybiB0aGlzLmdldFRhYnMoKS5pbmRleE9mKHRhYik7XG4gIH1cblxuICBnZXRUYWJzQnlJbmRleChpKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGFicygpW2ldO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIGNvbnRyb2wgdGhlIGJvZHkuXG4gKiBcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqL1xuZXhwb3J0IGNsYXNzIFRhYkNvbnRlbnQgZXh0ZW5kcyBUYWJNZW51IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5jaGlsZFNlbGVjdG9yID0gYyA9PiBjIGluc3RhbmNlb2YgVGFiUGFuZTtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggdGhlIGJvZHkgaXRlbXMuXG4gKiBcbiAqIEBhdHRyIEBzZWUgTG9vcFxuICogQGF0dHIgW3JlY3JlYXRlXSBAc2VlIEFraWxpLmNvbXBvbmVudC5JZlxuICogQHNjb3BlIHtib29sZWFufSBpc0FjdGl2ZVRhYiAtIHRoZSBjdXJyZW50IHRhYiBhY3RpdmUgb3Igbm90XG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJQYW5lIGV4dGVuZHMgTG9vcCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZSA9ICc8aWYgcmVjcmVhdGU9XCIke3RoaXMucmVjcmVhdGV9XCIgaXM9XCIke3RoaXMuaXNBY3RpdmVUYWJ9XCI+JHt0aGlzLl9fY29udGVudH08L2lmPic7XG4gIHN0YXRpYyBib29sZWFuQXR0cmlidXRlcyA9IFsncmVjcmVhdGUnXTtcblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZighdGhpcy5lbC5wYXJlbnROb2RlLl9fYWtpbGkgfHwgISh0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSBpbnN0YW5jZW9mIFRhYkNvbnRlbnQpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgQWtpbGkub3B0aW9ucy5kZWJ1ZyAmJiBjb25zb2xlLndhcm4oJ05vdCBmb3VuZCBwYXJlbnQgY29tcG9uZW50IFwidGFiLWNvbnRlbnRcIiBmb3IgXCJ0YWItcGFuZVwiJyk7XG4gICAgICByZXR1cm4gdGhpcy5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5zY29wZS5pc0FjdGl2ZVRhYiA9IHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkgeyAgICBcbiAgICB0aGlzLmF0dHIoJ3JlY3JlYXRlJywgdGhpcy5zZXRSZWNyZWF0aW9uKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNldFJlY3JlYXRpb24odmFsdWUpIHtcbiAgICB0aGlzLnNjb3BlLnJlY3JlYXRlID0gdmFsdWU7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3Rpdml0eSkge1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVUYWIgPSB0aGlzLmlzQWN0aXZlID0gYWN0aXZpdHk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHRoZSB0aXRsZSBpdGVtcy5cbiAqIFxuICogQGF0dHIgQHNlZSBMb29wXG4gKiBAc2NvcGUge2Jvb2xlYW59IGlzQWN0aXZlVGFiIC0gdGhlIGN1cnJlbnQgdGFiIGFjdGl2ZSBvciBub3RcbiAqL1xuZXhwb3J0IGNsYXNzIFRhYlRpdGxlIGV4dGVuZHMgTG9vcCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIGlmKCF0aGlzLmVsLnBhcmVudE5vZGUuX19ha2lsaSB8fCAhKHRoaXMuZWwucGFyZW50Tm9kZS5fX2FraWxpIGluc3RhbmNlb2YgVGFiTWVudSkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBBa2lsaS5vcHRpb25zLmRlYnVnICYmIGNvbnNvbGUud2FybignTm90IGZvdW5kIHBhcmVudCBjb21wb25lbnQgXCJ0YWItbWVudVwiIGZvciBcInRhYi10aXRsZVwiJyk7XG4gICAgICByZXR1cm4gdGhpcy5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjb3BlLmlzQWN0aXZlVGFiID0gdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnRhYnMgPSB0aGlzLnBhcmVudChjID0+IGMgaW5zdGFuY2VvZiBUYWJzKTtcbiAgICByZXR1cm4gc3VwZXIuY3JlYXRlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7ICAgXG4gICAgdGhpcy5pbmRleCA9IHRoaXMudGFicy5jaGlsZChjID0+IGMgaW5zdGFuY2VvZiBUYWJNZW51KS5nZXRUYWJJbmRleCh0aGlzKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy50YWJzLnNldEFjdGl2ZVRhYih0aGlzLmluZGV4KSk7XG4gICAgcmV0dXJuIHN1cGVyLmNvbXBpbGVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBzZXRBY3Rpdml0eShhY3Rpdml0eSkge1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVUYWIgPSB0aGlzLmlzQWN0aXZlID0gYWN0aXZpdHk7XG4gICAgdGhpcy50YWJzLmNoaWxkKGMgPT4gYyBpbnN0YW5jZW9mIFRhYkNvbnRlbnQpLmdldFRhYnNCeUluZGV4KHRoaXMuaW5kZXgpLnNldEFjdGl2aXR5KGFjdGl2aXR5KTtcbiAgfVxufVxuXG5UYWJzLlRhYk1lbnUgPSBUYWJNZW51O1xuVGFicy5UYWJUaXRsZSA9IFRhYlRpdGxlO1xuVGFicy5UYWJDb250ZW50ID0gVGFiQ29udGVudDtcblRhYnMuVGFiUGFuZSA9IFRhYlBhbmU7XG5Ba2lsaS5kZWZhdWx0cygoKSA9PiBBa2lsaS5jb21wb25lbnRzLlRhYnMgPSBUYWJzKTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGlmXG4gKiBAc2VsZWN0b3IgaWZbaXNdXG4gKiBAYXR0ciB7Ym9vbGVhbn0gaXMgLSBzaG93IHRoZSBlbGVtZW50IGNvbnRlbnQgb3Igbm90XG4gKiBAYXR0ciB7Ym9vbGVhbn0gcmVjcmVhdGUgLSBkZWxldGUgdGhlIGNvbnRlbnQgYW5kIHJlY3JlYXRlIG9yIGp1c3Qgc2hvdy9oaWRlIFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7IFxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbaXNdJztcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydyZWNyZWF0ZSddO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZicsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnZWxzZS1pZicsIHRoaXMuRWxzZUlmKTtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2Vsc2UnLCB0aGlzLkVsc2UpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlY3JlYXRlID0gZmFsc2U7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5O1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdyZWNyZWF0ZScsIHRoaXMuc2V0UmVjcmVhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuYXR0cignaXMnLCB0aGlzLnNldElzKTtcbiAgfVxuXG4gIHNldElzKHZhbCkge1xuICAgIHRoaXMuc3RhdGUgPSAhIXZhbDtcbiAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgc2V0QWN0aXZpdHkoYWN0aXZlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICBzZXRSZWNyZWF0aW9uKHJlY3JlYXRlKSB7XG4gICAgdGhpcy5yZWNyZWF0ZSA9IHJlY3JlYXRlO1xuICB9XG5cbiAgc2V0U3RhdGUoKSB7XG4gICAgbGV0IHJlcyA9IHRoaXMuY29tcGlsYXRpb24oKTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBpZiAoIW5leHQgfHwgIW5leHQubWF0Y2hlcygnZWxzZS1pZixlbHNlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXh0Ll9fYWtpbGkuc2V0QWN0aXZpdHkodGhpcy5hY3RpdmUgfHwgdGhpcy5zdGF0ZSk7XG4gICAgbmV4dC5fX2FraWxpLnNldFJlY3JlYXRpb24odGhpcy5yZWNyZWF0ZSk7XG4gICAgcmVzdWx0ID0gbmV4dC5fX2FraWxpLnNldFN0YXRlKCk7ICAgIFxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzKS50aGVuKCgpID0+ICByZXN1bHQpO1xuICB9XG5cbiAgY29tcGlsYXRpb24oKSB7XG4gICAgbGV0IHJlcyA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgJiYgIXRoaXMuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5yZWNyZWF0ZSB8fCAhdGhpcy5pc0NvbXBpbGVkKSB7XG4gICAgICAgIHJlcyA9IHRoaXMuY29tcGlsZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgdGhpcy5kaXNwbGF5LCAnaW1wb3J0YW50Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMucmVjcmVhdGUpIHtcbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXRoaXMuaXNDb21waWxlZCkge1xuICAgICAgICByZXMgPSB0aGlzLmNvbXBpbGUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eSgnZGlzcGxheScsICdub25lJywgJ2ltcG9ydGFudCcpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBjb21waWxlKCkge1xuICAgIGxldCByZXM7XG4gICAgdGhpcy5lbXB0eSgpO1xuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sOyAgIFxuICAgIHJlcyA9IEFraWxpLmNvbXBpbGUodGhpcy5lbCwgeyByZWNvbXBpbGU6IHRydWUgfSk7XG4gICAgdGhpcy5pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2UtaWZcbiAqIEBzZWxlY3RvciBlbHNlLWlmW2lzXVxuICogQGF0dHIge2Jvb2xlYW59IGlzIEBzZWUgSWZcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2VJZiBleHRlbmRzIElmIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb25kaXRpb25hbF9zdGF0ZW1lbnRzfVxuICogXG4gKiBAdGFnIGVsc2VcbiAqL1xuZXhwb3J0IGNsYXNzIEVsc2UgZXh0ZW5kcyBFbHNlSWYge1xuICBzdGF0aWMgbWF0Y2hlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdpcycsICd0cnVlJyk7XG4gIH1cbn1cblxuSWYuRWxzZUlmID0gRWxzZUlmO1xuSWYuRWxzZSA9IEVsc2U7IiwiaW1wb3J0IEZvciwgeyBMb29wIH0gZnJvbSAnLi9mb3IuanMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHdvcmsgd2l0aCBzZWxlY3QuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3NlbGVjdH1cbiAqIFxuICogQHRhZyBzZWxlY3QgIFxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSBhY3R1YWwgdmFsdWVcbiAqIEBhdHRyIFtpbl0gQHNlZSBGb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydtdWx0aXBsZSddLmNvbmNhdChGb3IuYm9vbGVhbkF0dHJpYnV0ZXMpO1xuICBzdGF0aWMgZXZlbnRzID0gWydjaGFuZ2UnXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3NlbGVjdCcsIHRoaXMpO1xuICAgIEFraWxpLmNvbXBvbmVudCgnb3B0aW9uJywgdGhpcy5PcHRpb24pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5pdGVyYXRvclRhZ05hbWUgPSAnb3B0aW9uJztcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkgeyBcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMuZWwuY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpKTtcbiAgICBsZXQgcmVzID0gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgICBcbiAgICB0aGlzLmF0dHIoJ211bHRpcGxlJywgdGhpcy5zZXRNdWx0aXBsZSk7XG4gICAgdGhpcy5hdHRyKCdjb250ZW50JywgdGhpcy5zZXRDb250ZW50KTtcbiAgICB0aGlzLmF0dHIoJ2luJywgdGhpcy5kcmF3U2VsZWN0KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgc2V0TXVsdGlwbGUodmFsdWUpIHtcbiAgICB0aGlzLmlzTXVsdGlwbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuZm9ybWF0VmFsdWUodXRpbHMuY29weSh0aGlzLmVsLmNvbnRlbnQpKSk7XG4gIH1cblxuICBzZXRDb250ZW50KHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKSk7XG4gIH1cblxuICBkcmF3U2VsZWN0KCkge1xuICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldLl9fYWtpbGk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gb3B0aW9uLmF0dHJzLnNlbGVjdGVkO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2gob3B0aW9uLmVsLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLmVsLnNlbGVjdGVkID0gc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGlmICghc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlZGVmaW5lKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSXRlcmF0b3JFbGVtZW50KCkge1xuICAgIGxldCBlbCA9IHN1cGVyLmNyZWF0ZUl0ZXJhdG9yRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLmh0bWwudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGlmICghdGhpcy5pc011bHRpcGxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbC52YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gdGhpcy5lbC5vcHRpb25zW2ldO1xuXG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpPyBbdmFsdWVdOiBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5sZW5ndGg/IHZhbHVlWzBdOiAnJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlZGVmaW5lKCkge1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5nZXRDb250ZW50KCkpO1xuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodXRpbHMuY29tcGFyZSh0aGlzLmVsLmNvbnRlbnQsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT0gLTE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuZWwub3B0aW9uc1tpXTtcblxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBvcHRpb24udmFsdWUgPT0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbC5jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIGJvb2xlYW5BdHRyaWJ1dGVzID0gWydzZWxlY3RlZCddO1xuXG4gIF9fZ2V0UGFyc2VkRXhwcmVzc2lvbihleHByZXNzaW9uKSB7XG4gICAgcmV0dXJuIHV0aWxzLmRlY29kZUh0bWxFbnRpdGllcyhleHByZXNzaW9uKTtcbiAgfVxuXG4gIGNoYW5nZWRTZWxlY3RlZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgdGhpcy5mb3IucmVkZWZpbmUoKTtcbiAgfVxufVxuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uOyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggaW5wdXQgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2lucHV0fVxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfY2hlY2tib3hfYW5kX3JhZGlvfVxuICogXG4gKiBAdGFnIGlucHV0XG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnXS5jb25jYXQoVGV4dC5ib29sZWFuQXR0cmlidXRlcyk7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2NoYW5nZSddLmNvbmNhdChUZXh0LmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ2lucHV0JywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLmlzQ2hlY2tib3ggPSB0aGlzLmVsLnR5cGUgPT0gJ2NoZWNrYm94JztcbiAgICB0aGlzLmlzUmFkaW8gPSB0aGlzLmVsLnR5cGUgPT0gJ3JhZGlvJzsgICAgXG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICAodGhpcy5pc0NoZWNrYm94IHx8IHRoaXMuaXNSYWRpbykgJiYgdGhpcy5hdHRyKCdjaGVja2VkJywgdGhpcy5zZXRDaGVja2VkKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSAgXG5cbiAgc2V0Q2hlY2tlZCh2YWx1ZSkge1xuICAgIHZhbHVlID0gISF2YWx1ZTtcbiAgICBcbiAgICBpZiAodGhpcy5lbC5jaGVja2VkID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuX19pc0NvbXBpbGVkICYmIHRoaXMuYXR0cnMub25DaGFuZ2UuZGlzcGF0Y2goRXZlbnQsIHsgYnViYmxlczogdHJ1ZSB9KTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5jaGFuZ2VSYWRpbygpO1xuICB9XG5cbiAgc2V0VmFsdWUoKSB7XG4gICAgc3VwZXIuc2V0VmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlzUmFkaW8gJiYgdGhpcy5hdHRycy5vbkNoYW5nZS5kaXNwYXRjaChFdmVudCwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgY2hhbmdlUmFkaW8oKSB7XG4gICAgbGV0IG5hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgIGxldCBzZWxlY3RvciA9IGBpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPScke25hbWV9J106bm90KFtzY29wZT0nJHt0aGlzLnNjb3BlLl9fbmFtZX0nXSlgO1xuICAgIGxldCBjaGlsZHJlbiA9IEFraWxpLnJvb3QuY2hpbGRyZW4oc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuICAgICAgcmFkaW8uc2V0Q2hlY2tlZChyYWRpby5lbC5jaGVja2VkKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgRm9yLCB7IExvb3AgfSBmcm9tICcuL2Zvci5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggcmFkaW8gZ3JvdXAuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvXG4gKiBAc2VsZWN0b3IgcmFkaW9bbmFtZV1cbiAqIEBhdHRyIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBncm91cFxuICogQGF0dHIge3N0cmluZ3xudWxsfSB2YWx1ZSAtIHNlbGVjdGVkIHZhbHVlXG4gKiBAYXR0ciBbaW5dIEBzZWUgRm9yXG4gKiBAbWVzc2FnZSB7c3RyaW5nfSByYWRpbyAtIHNlbnQgb24gdmFsdWUgY2hhbmdlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgRm9yIHtcbiAgc3RhdGljIG1hdGNoZXMgPSAnW25hbWVdJztcbiAgc3RhdGljIGV2ZW50cyA9IFsncmFkaW8nXS5jb25jYXQoRm9yLmV2ZW50cyk7XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ3JhZGlvJywgdGhpcyk7XG4gICAgQWtpbGkuY29tcG9uZW50KCdyYWRpby1idXR0b24nLCB0aGlzLlJhZGlvQnV0dG9uKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuaXRlcmFibGUgPSB0aGlzLmVsLmhhc0F0dHJpYnV0ZSgnaW4nKTtcbiAgfVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBjb21waWxlZCgpIHtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIEFraWxpLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRSYWRpb1ZhbHVlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYXR0cnMub25SYWRpby50cmlnZ2VyKHZhbHVlLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmKHRoaXMuaXRlcmFibGUpIHtcbiAgICAgIHJldHVybiBzdXBlci5jb21waWxlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVkKCkge1xuICAgIHRoaXMuYXR0cignaW4nLCB0aGlzLnNldE5hbWVzLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTsgICBcbiAgICB0aGlzLmF0dHIoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZSk7IFxuICAgIHRoaXMuYXR0cignbmFtZScsIHRoaXMuc2V0TmFtZXMpO1xuXG4gICAgaWYodGhpcy5pdGVyYWJsZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLnJlc29sdmVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmFtZXMobmFtZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oJ2lucHV0W3R5cGU9cmFkaW9dJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uZWwuc2V0QXR0cmlidXRlKCduYW1lJywgbmFtZSB8fCB0aGlzLmF0dHJzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLnByZXZWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gdGhpcy5wcmV2VmFsdWU7XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbignaW5wdXRbdHlwZT1yYWRpb10nKTtcbiAgICBsZXQgaXNUcnVlID0gZmFsc2U7XG4gICAgdGhpcy5wcmV2VmFsdWUgPSB2YWx1ZTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgcmFkaW8gPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCBpc1NlbGVjdGVkID0gcmFkaW8uZWwudmFsdWUgPT09IHZhbHVlO1xuXG4gICAgICBpc1NlbGVjdGVkICYmIChpc1RydWUgPSB0cnVlKTtcbiAgICAgIHJhZGlvLnNldENoZWNrZWQoaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1RydWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAocHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmF0dHJzLm9uUmFkaW8udHJpZ2dlcih2YWx1ZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuICB9XG5cbiAgZ2V0UmFkaW9WYWx1ZSgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYWRpbyA9IGNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAocmFkaW8uZWwuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gcmFkaW8uZWwudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gd29yayB3aXRoIHJhZGlvIGdyb3VwIGl0ZW0uXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3JhZGlvX2dyb3VwfVxuICogXG4gKiBAdGFnIHJhZGlvLWJ1dHRvblxuICogQGF0dHIge3N0cmluZ30gdmFsdWUgLSB2YWx1ZVxuICovXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b24gZXh0ZW5kcyBMb29wIHtcbiAgc3RhdGljIHRlbXBsYXRlID0gJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIke3RoaXMudmFsdWV9XCIvPiR7dGhpcy5fX2NvbnRlbnR9PC9sYWJlbD4nO1xuXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgfVxuXG4gIGNvbXBpbGVkKCkge1xuICAgIHRoaXMuYXR0cigndmFsdWUnLCAndmFsdWUnKTtcbiAgICByZXR1cm4gc3VwZXIuY29tcGlsZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5SYWRpby5SYWRpb0J1dHRvbiA9IFJhZGlvQnV0dG9uOyIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byB3b3JrIHdpdGggdGV4dGFyZWEuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX3RleHRhcmVhfVxuICogXG4gKiBAdGFnIHRleHRhcmVhXG4gKiBAYXR0ciBAc2VlIFRleHRcbiAqIEBtZXNzYWdlIEBzZWUgVGV4dFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndGV4dGFyZWEnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBUZXh0IGZyb20gJy4vdGV4dC5qcyc7XG5pbXBvcnQgQWtpbGkgZnJvbSAnLi4vYWtpbGkuanMnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3IgZWxlbWVudHMgd2l0aCBjb250ZW50ZWRpdGFibGUgYXR0cmlidXRlLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19jb250ZW50ZWRpdGFibGV9XG4gKiBcbiAqIEB0YWcgY29udGVudFxuICogQHNlbGVjdG9yIGNvbnRlbnQsW2NvbnRlbnRlZGl0YWJsZV1cbiAqIEBhdHRyIEBzZWUgVGV4dFxuICogQGF0dHIge2Jvb2xlYW59IFtlZGl0YWJsZV0gLSBlZGl0YWJsZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFRleHQge1xuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnY29udGVudCcsIHRoaXMpO1xuICAgIEFraWxpLmFsaWFzKCdbY29udGVudGVkaXRhYmxlXScsICdjb250ZW50Jyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2VkaXRhYmxlJykpIHtcbiAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZWRpdGFibGUnKSk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnZWRpdGFibGUnKTtcbiAgICB9XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKS5kaXNwbGF5ID09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWVLZXkgPSAnaW5uZXJIVE1MJztcbiAgfVxuXG4gIHNldEVsZW1lbnRGb2N1cygpIHtcbiAgICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIGxldCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGhpcy5lbCk7XG4gICAgcmFuZ2UuY29sbGFwc2UoZmFsc2UpO1xuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50LmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlcy9yZXF1ZXN0LmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgdG8gaW5jbHVkZSB0ZW1wbGF0ZXMgYnkgdXJsLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19odG1sX3RlbXBsYXRlc31cbiAqIFxuICogQHRhZyBpbmNsdWRlXG4gKiBAc2VsZWN0b3IgaW5jbHVkZVt1cmxdXG4gKiBAYXR0ciB7c3RyaW5nfSB1cmwgLSB0ZW1wbGF0ZSBwYXRoXG4gKiBAYXR0ciB7bnVtYmVyfGZ1bmN0aW9ufGJvb2xlYW59IFtjYWNoZV0gLSByZXF1ZXN0IGNhY2hlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvcmVxdWVzdHMjZG9jc19jYWNoZX1cbiAqIEBtZXNzYWdlIHt2b2lkfSBsb2FkIC0gc2VudCBvbiB0aGUgdGVtcGxhdGUgbG9hZFxuICogQG1lc3NhZ2Uge0Vycm9yfSBlcnJvciAtIHNlbnQgb24gZXJyb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5jbHVkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyB0cmFuc3BhcmVudCA9IHRydWU7IFxuICBzdGF0aWMgbWF0Y2hlcyA9ICdbdXJsXSc7XG4gIHN0YXRpYyBldmVudHMgPSBbJ2xvYWQnLCAnZXJyb3InXTtcblxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnaW5jbHVkZScsIHRoaXMpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5odG1sID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5hdHRyKCdjYWNoZScsIHRoaXMuc2V0Q2FjaGUpO1xuICAgIHJldHVybiB0aGlzLmF0dHIoJ3VybCcsIHRoaXMuc2V0VGVtcGxhdGUpO1xuICB9XG5cbiAgc2V0Q2FjaGUoY2FjaGUpIHtcbiAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gIH1cblxuICBzZXRUZW1wbGF0ZSh1cmwpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gJiYgdGhpcy5jb25uZWN0aW9uLmFib3J0KCk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQodXJsLCB7XG4gICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgIG9uU3RhcnQ6ICh4aHIpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0geGhyO1xuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuZW1wdHkoKTtcbiAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xuICAgICAgQWtpbGkuc2V0VGVtcGxhdGUodGhpcy5lbCwgcmVzLmRhdGEpO1xuXG4gICAgICByZXR1cm4gQWtpbGkuY29tcGlsZSh0aGlzLmVsLCB7IHJlY29tcGlsZTogdHJ1ZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5hdHRycy5vbkxvYWQudHJpZ2dlcih1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICB0aGlzLmF0dHJzLm9uRXJyb3IudHJpZ2dlcihlcnIsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBpZnJhbWVzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgaWZyYW1lXG4gKiBAYXR0ciB7c3RyaW5nfSBbdXJsXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWUgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpZnJhbWUnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGltYWdlcy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIGltZ1xuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBVcmwgeyAgXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdpbWcnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGVtYmVkIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgZW1iZWRcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYmVkIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnZW1iZWQnLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGF1ZGlvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgYXVkaW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnYXVkaW8nLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHZpZGVvIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdmlkZW9cbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndmlkZW8nLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHRyYWNrIGVsZW1lbnRzLlxuICogXG4gKiB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL2NvbXBvbmVudHMjZG9jc19pbWFnZSxfaWZyYW1lLF9lbWJlZCxfYXVkaW8sX3ZpZGVvLF90cmFjayxfc291cmNlLF9vYmplY3R9XG4gKiBcbiAqIEB0YWcgdHJhY2tcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgndHJhY2snLCB0aGlzKTtcbiAgfVxufSIsImltcG9ydCBVcmwgZnJvbSAnLi91cmwuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHNvdXJjZSBlbGVtZW50cy5cbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfaW1hZ2UsX2lmcmFtZSxfZW1iZWQsX2F1ZGlvLF92aWRlbyxfdHJhY2ssX3NvdXJjZSxfb2JqZWN0fVxuICogXG4gKiBAdGFnIHNvdXJjZVxuICogQGF0dHIge3N0cmluZ30gW3VybF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIGV4dGVuZHMgVXJsIHsgIFxuICBzdGF0aWMgZGVmaW5lKCkge1xuICAgIEFraWxpLmNvbXBvbmVudCgnc291cmNlJywgdGhpcyk7XG4gIH1cbn0iLCJpbXBvcnQgVXJsIGZyb20gJy4vdXJsLmpzJztcbmltcG9ydCBBa2lsaSBmcm9tICcuLi9ha2lsaS5qcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBvYmplY3QgZWxlbWVudHMuXG4gKiBcbiAqIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3MvY29tcG9uZW50cyNkb2NzX2ltYWdlLF9pZnJhbWUsX2VtYmVkLF9hdWRpbyxfdmlkZW8sX3RyYWNrLF9zb3VyY2UsX29iamVjdH1cbiAqIFxuICogQHRhZyBvYmplY3RcbiAqIEBhdHRyIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9iamVjdHMgZXh0ZW5kcyBVcmwgeyAgXG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMudXJsQXR0cmlidXRlID0gJ2RhdGEnO1xuICB9XG5cbiAgc3RhdGljIGRlZmluZSgpIHtcbiAgICBBa2lsaS5jb21wb25lbnQoJ29iamVjdCcsIHRoaXMpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQuanMnO1xuaW1wb3J0IHJvdXRlciBmcm9tICcuLi9zZXJ2aWNlcy9yb3V0ZXIuanMnO1xuaW1wb3J0IEFraWxpIGZyb20gJy4uL2FraWxpLmpzJztcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIGxpbmtzLlxuICogSXQgd29ya3Mgd2l0aCByb3V0ZXIgdG9vLiBcbiAqIFxuICoge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9jb21wb25lbnRzI2RvY3NfbGlua3N9XG4gKiBcbiAqIEB0YWcgYVxuICogQHNlbGVjdG9yIGFbc3RhdGVdOm5vdChbdXJsXSksYVt1cmxdOm5vdChbc3RhdGVdKVxuICogQGF0dHIge3N0cmluZ30gW3VybF0gLSB1cmwgdG8gZ28gb24gY2xpY2tcbiAqIEBhdHRyIHtzdHJpbmd9IFtzdGF0ZV0gLSBzdGF0ZSBvZiByb3V0ZXIgdG8gZ28gb24gY2xpY2sge0BsaW5rIGh0dHBzOi8vYWtpbGlqcy5jb20vZG9jcy9yb3V0aW5nfVxuICogQGF0dHIge29iamVjdH0gW3BhcmFtc10gLSBwYXJhbXMgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9wYXJhbXN9XG4gKiBAYXR0ciB7b2JqZWN0fSBbcXVlcnldIC0gcXVlcnkgZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9xdWVyeX1cbiAqIEBhdHRyIHtzdHJpbmd9IFtoYXNoXSAtIGhhc2ggZm9yIHRoZSBzdGF0ZSB7QGxpbmsgaHR0cHM6Ly9ha2lsaWpzLmNvbS9kb2NzL3JvdXRpbmcjZG9jc19zdGF0ZV9oYXNofVxuICogQGF0dHIge29iamVjdH0gW29wdGlvbnNdIC0gb3B0aW9ucyBmb3IgdGhlIHN0YXRlIHtAbGluayBodHRwczovL2FraWxpanMuY29tL2RvY3Mvcm91dGluZyNkb2NzX3JvdXRlci5sb2NhdGlvbn1cbiAqIEBzY29wZSB7Ym9vbGVhbn0gaXNBY3RpdmVTdGF0ZSAtIHRoZSBzdGF0ZSBpcyBhY3RpdmUgb3Igbm90IFxuICogQHNjb3BlIHtib29sZWFufSBpbkFjdGl2ZVN0YXRlIC0gdGhlIHN0YXRlIGlzIHBhcnQgb2YgdGhlIGFjdGl2ZSBzdGF0ZSBvciBub3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtYXRjaGVzID0gJ1tzdGF0ZV06bm90KFt1cmxdKSxbdXJsXTpub3QoW3N0YXRlXSknO1xuICBzdGF0aWMgY29udHJvbEF0dHJpYnV0ZXMgPSB0cnVlO1xuXG4gIHN0YXRpYyBkZWZpbmUoKSB7XG4gICAgQWtpbGkuY29tcG9uZW50KCdhJywgdGhpcyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLnBhcmFtcyA9IHt9O1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmlzVXJsID0gdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ3VybCcpO1xuICB9XG5cbiAgY29tcGlsZWQoKSB7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzVXJsKSB7XG4gICAgICAgIHJvdXRlci5sb2NhdGlvbih0aGlzLmF0dHJzLnVybCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByb3V0ZXIuc3RhdGUodGhpcy5zdGF0ZS5uYW1lLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoLCAgdGhpcy5vcHRpb25zKTtcbiAgICB9KTtcblxuICAgIHRoaXMub25TdGF0ZUNoYW5nZWQgPSAoKSA9PiB0aGlzLnN0YXRlICYmIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuXG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMuc2V0U3RhdGUpO1xuICAgIHRoaXMuYXR0cigncGFyYW1zJywgdGhpcy5zZXRQYXJhbXMpO1xuICAgIHRoaXMuYXR0cigncXVlcnknLCB0aGlzLnNldFF1ZXJ5KTtcbiAgICB0aGlzLmF0dHIoJ2hhc2gnLCB0aGlzLnNldEhhc2gpO1xuICAgIHRoaXMuYXR0cignb3B0aW9ucycsIHRoaXMuc2V0T3B0aW9ucyk7XG4gICAgdGhpcy5hdHRyKCd1cmwnLCB0aGlzLnNldFVybCk7XG4gICAgdGhpcy5hdHRyKCdzdGF0ZScsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3BhcmFtcycsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3F1ZXJ5JywgdGhpcy5yZXNldEhyZWYsIHsgY2FsbE9uU3RhcnQ6IGZhbHNlIH0pO1xuICAgIHRoaXMuYXR0cignaGFzaCcsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLmF0dHIoJ3VybCcsIHRoaXMucmVzZXRIcmVmLCB7IGNhbGxPblN0YXJ0OiBmYWxzZSB9KTtcbiAgICB0aGlzLnJlc2V0SHJlZigpO1xuICB9XG5cbiAgcmVtb3ZlZCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RhdGUtY2hhbmdlZCcsIHRoaXMub25TdGF0ZUNoYW5nZWQpO1xuICB9XG5cbiAgc2V0VXJsKHVybCkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgc2V0U3RhdGUobmFtZSkge1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldFN0YXRlKG5hbWUpO1xuICAgIHRoaXMuc2V0QWN0aXZpdHkoKTtcbiAgfVxuXG4gIHNldEFjdGl2aXR5KCkge1xuICAgIHRoaXMuc2NvcGUuaXNBY3RpdmVTdGF0ZSA9IHJvdXRlci5pc0FjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMuc2NvcGUuaW5BY3RpdmVTdGF0ZSA9IHJvdXRlci5pbkFjdGl2ZVN0YXRlKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgc2V0UGFyYW1zKHBhcmFtcykge1xuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9ICdvYmplY3QnIHx8ICFwYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIHBhcmFtcyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5ICE9ICdvYmplY3QnIHx8ICFxdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgcXVlcnkgbXVzdCBiZSBhbiBvYmplY3RgKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBzZXRIYXNoKGhhc2gpIHtcbiAgICBpZiAodHlwZW9mIGhhc2ggIT0gJ3N0cmluZycgJiYgaGFzaCAhPT0gdW5kZWZpbmVkICYmIGhhc2ggIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGVyIHN0YXRlIGhhc2ggbXVzdCBiZSBhIHN0cmluZ3xudWxsYCk7XG4gICAgfVxuXG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPSAnb2JqZWN0JyB8fCAhb3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb3V0ZXIgc3RhdGUgb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdGApO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZShuYW1lKSB7XG4gICAgbGV0IHN0YXRlID0gcm91dGVyLmdldFN0YXRlKG5hbWUpO1xuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZm91bmQgcm91dGVyIHN0YXRlIHdpdGggbmFtZSBcIiR7bmFtZX1cImApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJlc2V0SHJlZigpIHtcbiAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHRoaXMudXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cnMuaHJlZiA9IHJvdXRlci5jcmVhdGVTdGF0ZVVybCh0aGlzLnN0YXRlLCB0aGlzLnBhcmFtcywgdGhpcy5xdWVyeSwgdGhpcy5oYXNoLCB0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
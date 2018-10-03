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
/******/ 	__webpack_require__.p = "//localhost:4000/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 生产环境配置\nvar config = {\n  // 正式环境\n  debug: false,\n\n  // 域名\n  host: 'localhost',\n\n  //  服务端口\n  port: 4000,\n\n  // 登录token，cookie 的名称\n  auth_cookie_name: 'signin-cookie',\n\n  // https://github.com/css-modules/css-modules\n  class_scoped_name: '[hash:base64:8]',\n\n  // 前端打包后，静态资源路径前缀\n  // 生成效果如：//localhost:4000/app.bundle.js\n  public_path: '//localhost:4000'\n\n  // 开发环境配置\n};if (undefined == 'development') {\n  config.debug = true;\n  config.class_scoped_name = '[name]_[local]__[hash:base64:5]';\n}\n\nmodule.exports = config;\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./src/actions/posts.js":
/*!******************************!*\
  !*** ./src/actions/posts.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nexports.loadPostsList = loadPostsList;\n\nvar _ajax = __webpack_require__(/*! ../common/ajax */ \"./src/common/ajax.js\");\n\nvar _ajax2 = _interopRequireDefault(_ajax);\n\nvar _posts = __webpack_require__(/*! ../reducers/posts */ \"./src/reducers/posts.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction loadPostsList(_ref) {\n  var _this = this;\n\n  var id = _ref.id,\n      _ref$filter = _ref.filter,\n      filter = _ref$filter === undefined ? {} : _ref$filter;\n\n  return function (dispatch, getState) {\n    return new Promise(function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {\n        var list, variables, _ref3, _ref4, err, data, postsData;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                list = (0, _posts.getPostsListByListId)(getState(), id);\n\n\n                list.loading = true;\n                list.filter = filter;\n                if (!list.data) list.data = [];\n\n                dispatch({ type: 'SET_POSTS_LIST_BY_NAME', id: id, data: list });\n\n                variables = convertFilrerFormat(filter);\n\n\n                if (!variables) {\n                  variables = '';\n                } else {\n                  variables = '(' + variables + ')';\n                }\n\n                // 储存 cookie\n                _context.next = 9;\n                return (0, _ajax2.default)({\n                  url: 'http://admin.xiaoduyu.com/graphql',\n                  method: 'post',\n                  data: {\n                    operationName: null,\n                    variables: {},\n                    query: '{\\n          posts' + variables + '{\\n            _id\\n            comment_count\\n            content_html\\n            title\\n            topic_id{\\n              _id\\n              name\\n            }\\n            type\\n            user_id{\\n              _id\\n              nickname\\n              brief\\n              avatar_url\\n            }\\n          }\\n        }'\n                  }\n                });\n\n              case 9:\n                _ref3 = _context.sent;\n                _ref4 = _slicedToArray(_ref3, 2);\n                err = _ref4[0];\n                data = _ref4[1];\n\n\n                if (data && data.data) {\n\n                  list.loading = false;\n\n                  postsData = data.data[Reflect.ownKeys(data.data)[0]];\n\n\n                  if (postsData && postsData.length > 0) {\n                    list.data = list.data.concat(modifyList(postsData));\n                  }\n\n                  dispatch({ type: 'SET_POSTS_LIST_BY_NAME', id: id, data: list });\n                  resolve([null, list.data]);\n                } else {\n                  resolve(['loadPostList load failed']);\n                }\n\n              case 14:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, _this);\n      }));\n\n      return function (_x, _x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  };\n}\n\nvar modifyList = function modifyList(data) {\n  var arr = [];\n  data.map(function (item) {\n\n    var text = item.content_html.replace(/<[^>]+>/g, \"\");\n    if (text.length > 140) text = text.slice(0, 140) + '...';\n    item.content_summary = text;\n\n    arr.push(item);\n  });\n\n  return arr;\n};\n\n// 将参数对象转换成，GraphQL提交参数的格式\nvar convertFilrerFormat = function convertFilrerFormat(params) {\n  var arr = [];\n  for (var i in params) {\n    var v = '';\n    switch (_typeof(params[i])) {\n      case 'string':\n        v = '\"' + params[i] + '\"';break;\n      case 'number':\n        v = params[i];break;\n      default:\n        v = params[i];\n    }\n    arr.push(i + ':' + v);\n  }\n  return arr.join(',');\n};\n\n//# sourceURL=webpack:///./src/actions/posts.js?");

/***/ }),

/***/ "./src/actions/user.js":
/*!*****************************!*\
  !*** ./src/actions/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nexports.saveAccessToken = saveAccessToken;\nexports.saveUserInfo = saveUserInfo;\nexports.signIn = signIn;\nexports.signOut = signOut;\n\nvar _ajax = __webpack_require__(/*! ../common/ajax */ \"./src/common/ajax.js\");\n\nvar _ajax2 = _interopRequireDefault(_ajax);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// 储存accessToken到redux\nfunction saveAccessToken(_ref) {\n  var accessToken = _ref.accessToken;\n\n  return function (dispatch) {\n    dispatch({ type: 'SAVE_ACCESS_TOKEN', accessToken: accessToken });\n  };\n}\n\nfunction saveUserInfo(_ref2) {\n  var userinfo = _ref2.userinfo;\n\n  return function (dispatch) {\n    dispatch({ type: 'SAVE_USERINFO', userinfo: userinfo });\n  };\n}\n\nfunction signIn(_ref3) {\n  var _this = this;\n\n  var nickname = _ref3.nickname;\n\n  return function (dispatch) {\n    return new Promise(function () {\n      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {\n        var _ref5, _ref6, err, data;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return (0, _ajax2.default)({\n                  url: window.location.origin + '/sign/in',\n                  method: 'post',\n                  data: {\n                    nickname: nickname\n                  }\n                });\n\n              case 2:\n                _ref5 = _context.sent;\n                _ref6 = _slicedToArray(_ref5, 2);\n                err = _ref6[0];\n                data = _ref6[1];\n\n\n                if (data && data.success) {\n                  resolve([null, true]);\n                } else {\n                  resolve(['sign error']);\n                }\n\n              case 7:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, _this);\n      }));\n\n      return function (_x, _x2) {\n        return _ref4.apply(this, arguments);\n      };\n    }());\n  };\n}\n\nfunction signOut() {\n  var _this2 = this;\n\n  return function (dispatch) {\n    return new Promise(function () {\n      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {\n        var _ref8, _ref9, err, data;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return (0, _ajax2.default)({\n                  url: window.location.origin + '/sign/out',\n                  method: 'post'\n                });\n\n              case 2:\n                _ref8 = _context2.sent;\n                _ref9 = _slicedToArray(_ref8, 2);\n                err = _ref9[0];\n                data = _ref9[1];\n\n\n                if (data && data.success) {\n                  resolve([null, true]);\n                } else {\n                  resolve(['sign error']);\n                }\n\n              case 7:\n              case 'end':\n                return _context2.stop();\n            }\n          }\n        }, _callee2, _this2);\n      }));\n\n      return function (_x3, _x4) {\n        return _ref7.apply(this, arguments);\n      };\n    }());\n  };\n}\n\n//# sourceURL=webpack:///./src/actions/user.js?");

/***/ }),

/***/ "./src/common/ajax.js":
/*!****************************!*\
  !*** ./src/common/ajax.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar AJAX = function AJAX(_ref) {\n  var _ref$url = _ref.url,\n      url = _ref$url === undefined ? '' : _ref$url,\n      _ref$method = _ref.method,\n      method = _ref$method === undefined ? 'get' : _ref$method,\n      _ref$data = _ref.data,\n      data = _ref$data === undefined ? {} : _ref$data,\n      _ref$headers = _ref.headers,\n      headers = _ref$headers === undefined ? {} : _ref$headers;\n\n\n  var option = { url: url, method: method, headers: headers };\n\n  if (method == 'get') {\n    data._t = new Date().getTime();\n    option.params = data;\n  } else if (method == 'post') {\n    option.data = data;\n  }\n\n  return (0, _axios2.default)(option).then(function (resp) {\n    if (resp && resp.data) {\n      var res = resp.data;\n      return [null, res];\n    } else {\n      return ['return none'];\n    }\n  }).catch(function (error) {\n    if (error && error.response && error.response.data) {\n      return [error.response.data];\n    } else {\n      return ['return error'];\n    }\n  });\n};\n\nexports.default = AJAX;\n\n//# sourceURL=webpack:///./src/common/ajax.js?");

/***/ }),

/***/ "./src/common/parse-url.js":
/*!*********************************!*\
  !*** ./src/common/parse-url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar parseUrl = function parseUrl(search) {\n  var paramPart = search.substr(1).split('&');\n  return paramPart.reduce(function (res, item) {\n    if (item) {\n      var parts = item.split('=');\n      res[parts[0]] = parts[1] || '';\n    }\n    return res;\n  }, {});\n};\n\nexports.default = parseUrl;\n\n//# sourceURL=webpack:///./src/common/parse-url.js?");

/***/ }),

/***/ "./src/components/generateAsyncComponent.js":
/*!**************************************************!*\
  !*** ./src/components/generateAsyncComponent.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _loading = __webpack_require__(/*! ./ui/loading */ \"./src/components/ui/loading/index.js\");\n\nvar _loading2 = _interopRequireDefault(_loading);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.asyncRouteComponent = function (_ref) {\n  var loader = _ref.loader,\n      Placeholder = _ref.Placeholder;\n\n\n  var Component = null;\n\n  return function (_React$Component) {\n    _inherits(asyncComponent, _React$Component);\n\n    _createClass(asyncComponent, null, [{\n      key: 'load',\n\n\n      // 加载组件\n      value: function load() {\n        var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};\n\n        return loader().then(function (ResolvedComponent) {\n          Component = ResolvedComponent.default || ResolvedComponent;\n          callback(Component);\n        });\n      }\n    }]);\n\n    function asyncComponent() {\n      _classCallCheck(this, asyncComponent);\n\n      var _this = _possibleConstructorReturn(this, (asyncComponent.__proto__ || Object.getPrototypeOf(asyncComponent)).call(this));\n\n      _this.state = { Component: Component };\n      return _this;\n    }\n\n    _createClass(asyncComponent, [{\n      key: 'componentDidMount',\n      value: function componentDidMount() {\n        // 客户端加载异步组件\n        var self = this;\n        asyncComponent.load().then(function () {\n          if (self.state.Component !== Component) {\n            self.setState({ Component: Component });\n          }\n        });\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        var Component = this.state.Component;\n\n\n        if (Component) return _react2.default.createElement(Component, this.props);\n        if (Placeholder) {\n          return _react2.default.createElement(Placeholder, this.props);\n        } else {\n          return _react2.default.createElement(_loading2.default, { text: '\\u7EC4\\u4EF6\\u88C5\\u8F7D\\u4E2D...' });\n        }\n\n        return null;\n      }\n    }]);\n\n    return asyncComponent;\n  }(_react2.default.Component);\n};\n\n//# sourceURL=webpack:///./src/components/generateAsyncComponent.js?");

/***/ }),

/***/ "./src/components/head/index.js":
/*!**************************************!*\
  !*** ./src/components/head/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Head = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class, _temp;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _user = __webpack_require__(/*! ../../actions/user */ \"./src/actions/user.js\");\n\nvar _user2 = __webpack_require__(/*! ../../reducers/user */ \"./src/reducers/user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import CSSModules from 'react-css-modules';\n// import styles from './style.scss';\n\n\nvar Head = exports.Head = (_temp = _class = function (_React$Component) {\n  _inherits(Head, _React$Component);\n\n  function Head(props) {\n    _classCallCheck(this, Head);\n\n    var _this = _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, props));\n\n    _this.signOut = _this.signOut.bind(_this);\n    return _this;\n  }\n\n  _createClass(Head, [{\n    key: 'signOut',\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var _ref2, _ref3, err, success;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.props.signOut();\n\n              case 2:\n                _ref2 = _context.sent;\n                _ref3 = _slicedToArray(_ref2, 2);\n                err = _ref3[0];\n                success = _ref3[1];\n\n                if (success) {\n                  // 退出成功跳转到首页\n                  window.location.href = '/';\n                } else {\n                  alert('退出失败');\n                }\n\n              case 7:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function signOut() {\n        return _ref.apply(this, arguments);\n      }\n\n      return signOut;\n    }()\n  }, {\n    key: 'render',\n    value: function render() {\n      var userinfo = this.props.userinfo;\n\n\n      return _react2.default.createElement(\n        'header',\n        null,\n        _react2.default.createElement(\n          'nav',\n          { className: 'navbar fixed-top navbar-expand-md navbar-expand-lg navbar-dark bg-dark bd-navbar' },\n          _react2.default.createElement(\n            _reactRouterDom.NavLink,\n            { className: 'navbar-brand', exact: true, to: '/' },\n            'React\\u540C\\u6784\\u811A\\u624B\\u67B6'\n          ),\n          _react2.default.createElement(\n            'button',\n            { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarText', 'aria-controls': 'navbarText', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },\n            _react2.default.createElement('span', { className: 'navbar-toggler-icon' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'collapse navbar-collapse', id: 'navbarText' },\n            _react2.default.createElement(\n              'ul',\n              { className: 'navbar-nav mr-auto' },\n              _react2.default.createElement(\n                'li',\n                { className: 'nav-item' },\n                _react2.default.createElement(\n                  _reactRouterDom.NavLink,\n                  { className: 'nav-link', exact: true, to: '/' },\n                  'Home'\n                )\n              ),\n              _react2.default.createElement(\n                'li',\n                { className: 'nav-item' },\n                _react2.default.createElement(\n                  _reactRouterDom.NavLink,\n                  { className: 'nav-link', exact: true, to: '/topics' },\n                  'Topics'\n                )\n              )\n            ),\n            _react2.default.createElement(\n              'span',\n              { className: 'mt-2 mt-md-0' },\n              _react2.default.createElement(\n                'ul',\n                { className: 'navbar-nav mr-auto' },\n                _react2.default.createElement(\n                  'li',\n                  { className: 'nav-item' },\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'nav-link' },\n                    userinfo.nickname\n                  )\n                ),\n                _react2.default.createElement(\n                  'li',\n                  { className: 'nav-item' },\n                  _react2.default.createElement(\n                    'a',\n                    { className: 'nav-link', href: 'javascript:void(0)', onClick: this.signOut },\n                    '\\u9000\\u51FA'\n                  )\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Head;\n}(_react2.default.Component), _class.propTypes = {\n  userinfo: _propTypes2.default.object.isRequired,\n  signOut: _propTypes2.default.func.isRequired\n}, _temp);\n\n// Head = CSSModules(Head, styles);\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n  return {\n    userinfo: (0, _user2.getUserInfo)(state)\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    signOut: (0, _redux.bindActionCreators)(_user.signOut, dispatch)\n  };\n};\n\nexports.Head = Head = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Head);\n\nexports.default = Head;\n\n//# sourceURL=webpack:///./src/components/head/index.js?");

/***/ }),

/***/ "./src/components/meta/index.js":
/*!**************************************!*\
  !*** ./src/components/meta/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Meta = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDocumentMeta = __webpack_require__(/*! react-document-meta */ \"react-document-meta\");\n\nvar _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// https://github.com/kodyl/react-document-meta\n\n\nvar Meta = exports.Meta = function (_Component) {\n  _inherits(Meta, _Component);\n\n  function Meta(props) {\n    _classCallCheck(this, Meta);\n\n    return _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).call(this, props));\n  }\n\n  _createClass(Meta, [{\n    key: 'render',\n    value: function render() {\n\n      var metaObj = {};\n\n      var _props = this.props,\n          title = _props.title,\n          description = _props.description,\n          canonical = _props.canonical,\n          meta = _props.meta;\n\n\n      if (title) metaObj.title = title;\n      if (description) metaObj.description = description;\n      if (canonical) metaObj.canonical = canonical;\n      if (meta) metaObj.title = meta;\n\n      return _react2.default.createElement(_reactDocumentMeta2.default, metaObj);\n    }\n  }]);\n\n  return Meta;\n}(_react.Component);\n\nexports.default = Meta;\n\n//# sourceURL=webpack:///./src/components/meta/index.js?");

/***/ }),

/***/ "./src/components/posts/list/index.js":
/*!********************************************!*\
  !*** ./src/components/posts/list/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PostsList = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class, _temp;\n\n// import CSSModules from 'react-css-modules';\n\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _posts = __webpack_require__(/*! ../../../actions/posts */ \"./src/actions/posts.js\");\n\nvar _posts2 = __webpack_require__(/*! ../../../reducers/posts */ \"./src/reducers/posts.js\");\n\nvar _style = __webpack_require__(/*! ./style.scss */ \"./src/components/posts/list/style.scss\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PostsList = exports.PostsList = (_temp = _class = function (_React$Component) {\n  _inherits(PostsList, _React$Component);\n\n  function PostsList(props) {\n    _classCallCheck(this, PostsList);\n\n    var _this = _possibleConstructorReturn(this, (PostsList.__proto__ || Object.getPrototypeOf(PostsList)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(PostsList, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _props = this.props,\n          id = _props.id,\n          filter = _props.filter,\n          list = _props.list,\n          loadPostsList = _props.loadPostsList;\n\n\n      if (!list.data) {\n        this.props.loadPostsList({\n          id: id,\n          filter: filter\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var list = this.props.list;\n      var loading = list.loading,\n          data = list.data;\n\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        loading ? _react2.default.createElement(\n          'div',\n          null,\n          'loading...'\n        ) : null,\n        _react2.default.createElement(\n          'div',\n          { className: 'list-group' },\n          data && data.map(function (item) {\n            return _react2.default.createElement(\n              _reactRouterDom.Link,\n              { key: item._id,\n                to: '/posts/' + item._id,\n                className: 'list-group-item list-group-item-action flex-column align-items-start' },\n              _react2.default.createElement(\n                'p',\n                { className: 'mb-1' },\n                _react2.default.createElement('img', { src: item.user_id.avatar_url, className: _style2.default.avatar }),\n                item.user_id.nickname\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'd-flex w-100 justify-content-between' },\n                _react2.default.createElement(\n                  'h5',\n                  { className: 'mb-1' },\n                  item.title\n                ),\n                _react2.default.createElement(\n                  'small',\n                  null,\n                  item.topic_id.name\n                )\n              ),\n              _react2.default.createElement(\n                'p',\n                { className: 'mb-1' },\n                item.content_summary\n              ),\n              _react2.default.createElement(\n                'small',\n                null,\n                item.comment_count > 0 ? '\\u6709' + item.comment_count + '\\u4EBA\\u8BC4\\u8BBA' : null\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return PostsList;\n}(_react2.default.Component), _class.propTypes = {\n  // 要获取的列表的id\n  id: _propTypes2.default.string.isRequired,\n  // 筛选条件\n  filter: _propTypes2.default.object.isRequired,\n\n  // 列表数据\n  list: _propTypes2.default.object.isRequired,\n  // 加载列表的方法\n  loadPostsList: _propTypes2.default.func.isRequired\n}, _temp);\n\n// PostsList = CSSModules(PostsList, styles);\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n  return {\n    list: (0, _posts2.getPostsListByListId)(state, props.id)\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, props) {\n  return {\n    loadPostsList: (0, _redux.bindActionCreators)(_posts.loadPostsList, dispatch)\n  };\n};\n\nexports.PostsList = PostsList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostsList);\n\nexports.default = PostsList;\n\n//# sourceURL=webpack:///./src/components/posts/list/index.js?");

/***/ }),

/***/ "./src/components/posts/list/style.scss":
/*!**********************************************!*\
  !*** ./src/components/posts/list/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \".sFFM_yov{width:30px;height:30px;border-radius:15px;margin-right:10px}\", \"\", {\"version\":3,\"sources\":[\"/Users/wuseijian/Documents/GitHub/react-starter/src/components/posts/list/style.scss\"],\"names\":[],\"mappings\":\"AAAA,UACE,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,iBAAmB,CAAE\",\"file\":\"style.scss\",\"sourcesContent\":[\".avatar {\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 15px;\\n  margin-right: 10px; }\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\nexports.locals = {\n\t\"avatar\": \"sFFM_yov\"\n};\n\n//# sourceURL=webpack:///./src/components/posts/list/style.scss?");

/***/ }),

/***/ "./src/components/shell.js":
/*!*********************************!*\
  !*** ./src/components/shell.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _parseUrl = __webpack_require__(/*! ../common/parse-url */ \"./src/common/parse-url.js\");\n\nvar _parseUrl2 = _interopRequireDefault(_parseUrl);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// 壳组件，用于给页面组件，套一个外壳\n// 这样可以通过壳组件，给每个页面，传递参数\n\nvar Shell = function Shell(Component) {\n  var _class, _temp;\n\n  if (!Component.loadData) {\n    Component.loadData = function (_ref) {\n      var store = _ref.store,\n          match = _ref.match;\n\n      return new Promise(function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  resolve({ code: 200 });\n\n                case 1:\n                case 'end':\n                  return _context.stop();\n              }\n            }\n          }, _callee, this);\n        }));\n\n        return function (_x, _x2) {\n          return _ref2.apply(this, arguments);\n        };\n      }());\n    };\n  }\n\n  var Shell = (_temp = _class = function (_React$Component) {\n    _inherits(Shell, _React$Component);\n\n    function Shell(props) {\n      _classCallCheck(this, Shell);\n\n      return _possibleConstructorReturn(this, (Shell.__proto__ || Object.getPrototypeOf(Shell)).call(this, props));\n    }\n\n    // 组件加载完成\n\n\n    _createClass(Shell, [{\n      key: 'componentWillMount',\n      value: function componentWillMount() {\n        var search = this.props.location.search;\n\n        this.props.location.params = search ? (0, _parseUrl2.default)(search) : null;\n        // console.log('进入组件')\n      }\n\n      // 组件加载完成\n\n    }, {\n      key: 'componentDidMount',\n      value: function componentDidMount() {}\n      // console.log('组件加载完成');\n\n\n      // 更新组件\n\n    }, {\n      key: 'componentDidUpdate',\n      value: function componentDidUpdate() {}\n      // console.log('组件加载更新了');\n\n\n      // 组件被卸载\n\n    }, {\n      key: 'componentWillUnmount',\n      value: function componentWillUnmount() {\n        // console.log('组件加载被卸载');\n      }\n    }, {\n      key: 'render',\n      value: function render() {\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(Component, this.props)\n        );\n      }\n    }]);\n\n    return Shell;\n  }(_react2.default.Component), _class.defaultProps = {\n    loadData: Component.loadData || null\n  }, _temp);\n\n\n  Shell.contextTypes = {};\n\n  Shell.propTypes = {};\n\n  var mapStateToProps = function mapStateToProps(state) {\n    return {};\n  };\n\n  var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {\n    return {};\n  };\n\n  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Shell);\n};\n\nexports.default = Shell;\n\n//# sourceURL=webpack:///./src/components/shell.js?");

/***/ }),

/***/ "./src/components/ui/loading/index.js":
/*!********************************************!*\
  !*** ./src/components/ui/loading/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// import CSSModules from 'react-css-modules'\n// import styles from './style.scss'\n\n\n// @CSSModules(styles)\nvar LoadingMore = function (_Component) {\n  _inherits(LoadingMore, _Component);\n\n  function LoadingMore(props) {\n    _classCallCheck(this, LoadingMore);\n\n    return _possibleConstructorReturn(this, (LoadingMore.__proto__ || Object.getPrototypeOf(LoadingMore)).call(this, props));\n  }\n\n  _createClass(LoadingMore, [{\n    key: 'render',\n    value: function render() {\n      var _props$text = this.props.text,\n          text = _props$text === undefined ? '正在加载中...' : _props$text;\n      // styleName=\"loading\"\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement('span', null),\n        text\n      );\n    }\n  }]);\n\n  return LoadingMore;\n}(_react.Component);\n\nexports.default = LoadingMore;\n\n//# sourceURL=webpack:///./src/components/ui/loading/index.js?");

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Home = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _posts = __webpack_require__(/*! ../../actions/posts */ \"./src/actions/posts.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _shell = __webpack_require__(/*! ../../components/shell */ \"./src/components/shell.js\");\n\nvar _shell2 = _interopRequireDefault(_shell);\n\nvar _meta = __webpack_require__(/*! ../../components/meta */ \"./src/components/meta/index.js\");\n\nvar _meta2 = _interopRequireDefault(_meta);\n\nvar _list = __webpack_require__(/*! ../../components/posts/list */ \"./src/components/posts/list/index.js\");\n\nvar _list2 = _interopRequireDefault(_list);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// http://blog.csdn.net/ISaiSai/article/details/78094556\n\n\n// 壳组件\n\n\nvar Home = exports.Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  _createClass(Home, null, [{\n    key: 'loadData',\n\n\n    // 服务端渲染\n    // 加载需要在服务端渲染的数据\n    value: function loadData(_ref) {\n      var store = _ref.store,\n          match = _ref.match;\n\n      return new Promise(function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  _context.next = 2;\n                  return (0, _posts.loadPostsList)({\n                    id: 'home',\n                    filter: {\n                      sort_by: \"create_at\",\n                      deleted: false,\n                      weaken: false\n                    }\n                  })(store.dispatch, store.getState);\n\n                case 2:\n\n                  resolve({ code: 200 });\n\n                case 3:\n                case 'end':\n                  return _context.stop();\n              }\n            }\n          }, _callee, this);\n        }));\n\n        return function (_x, _x2) {\n          return _ref2.apply(this, arguments);\n        };\n      }());\n    }\n  }]);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_meta2.default, { title: '\\u9996\\u9875' }),\n        _react2.default.createElement(_list2.default, {\n          id: 'home',\n          filter: {\n            sort_by: \"create_at\",\n            deleted: false,\n            weaken: false\n          }\n        })\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\nexports.Home = Home = (0, _reactRouterDom.withRouter)(Home);\n\nexports.default = (0, _shell2.default)(Home);\n\n//# sourceURL=webpack:///./src/pages/home/index.js?");

/***/ }),

/***/ "./src/pages/not-found/index.js":
/*!**************************************!*\
  !*** ./src/pages/not-found/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.NotFound = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _shell = __webpack_require__(/*! ../../components/shell */ \"./src/components/shell.js\");\n\nvar _shell2 = _interopRequireDefault(_shell);\n\nvar _meta = __webpack_require__(/*! ../../components/meta */ \"./src/components/meta/index.js\");\n\nvar _meta2 = _interopRequireDefault(_meta);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NotFound = exports.NotFound = function (_React$Component) {\n  _inherits(NotFound, _React$Component);\n\n  _createClass(NotFound, null, [{\n    key: 'loadData',\n    value: function loadData(_ref) {\n      var store = _ref.store,\n          match = _ref.match;\n\n      return new Promise(function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  resolve({ code: 404 });\n\n                case 1:\n                case 'end':\n                  return _context.stop();\n              }\n            }\n          }, _callee, this);\n        }));\n\n        return function (_x, _x2) {\n          return _ref2.apply(this, arguments);\n        };\n      }());\n    }\n  }]);\n\n  function NotFound(props) {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));\n  }\n\n  _createClass(NotFound, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_meta2.default, { title: '404,\\u65E0\\u6CD5\\u627E\\u5230\\u8BE5\\u9875\\u9762' }),\n        '404,\\u65E0\\u6CD5\\u627E\\u5230\\u8BE5\\u9875\\u9762'\n      );\n    }\n  }]);\n\n  return NotFound;\n}(_react2.default.Component);\n\nexports.default = (0, _shell2.default)(NotFound);\n\n//# sourceURL=webpack:///./src/pages/not-found/index.js?");

/***/ }),

/***/ "./src/pages/posts-detail/index.js":
/*!*****************************************!*\
  !*** ./src/pages/posts-detail/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.PostsDetail = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _posts = __webpack_require__(/*! ../../actions/posts */ \"./src/actions/posts.js\");\n\nvar _posts2 = __webpack_require__(/*! ../../reducers/posts */ \"./src/reducers/posts.js\");\n\nvar _shell = __webpack_require__(/*! ../../components/shell */ \"./src/components/shell.js\");\n\nvar _shell2 = _interopRequireDefault(_shell);\n\nvar _meta = __webpack_require__(/*! ../../components/meta */ \"./src/components/meta/index.js\");\n\nvar _meta2 = _interopRequireDefault(_meta);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PostsDetail = exports.PostsDetail = function (_React$Component) {\n  _inherits(PostsDetail, _React$Component);\n\n  _createClass(PostsDetail, null, [{\n    key: 'loadData',\n\n\n    // 服务端渲染\n    // 加载需要在服务端渲染的数据\n    value: function loadData(_ref) {\n      var store = _ref.store,\n          match = _ref.match,\n          userinfo = _ref.userinfo;\n\n      return new Promise(function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {\n          var id, _ref3, _ref4, err, data;\n\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  id = match.params.id;\n                  _context.next = 3;\n                  return (0, _posts.loadPostsList)({\n                    id: id,\n                    filter: {\n                      _id: id,\n                      deleted: false,\n                      weaken: false\n                    }\n                  })(store.dispatch, store.getState);\n\n                case 3:\n                  _ref3 = _context.sent;\n                  _ref4 = _slicedToArray(_ref3, 2);\n                  err = _ref4[0];\n                  data = _ref4[1];\n\n\n                  // 没有找到帖子，设置页面 http code 为404\n                  if (err || data.length == 0) {\n                    resolve({ code: 404 });\n                  } else {\n                    resolve({ code: 200 });\n                  }\n\n                case 8:\n                case 'end':\n                  return _context.stop();\n              }\n            }\n          }, _callee, this);\n        }));\n\n        return function (_x, _x2) {\n          return _ref2.apply(this, arguments);\n        };\n      }());\n    }\n  }]);\n\n  function PostsDetail(props) {\n    _classCallCheck(this, PostsDetail);\n\n    var _this = _possibleConstructorReturn(this, (PostsDetail.__proto__ || Object.getPrototypeOf(PostsDetail)).call(this, props));\n\n    _this.state = {\n      notFoundPgae: false\n    };\n    return _this;\n  }\n\n  _createClass(PostsDetail, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      // 服务端渲染，404内容显示处理\n      var _props = this.props,\n          list = _props.list,\n          notFoundPgae = _props.notFoundPgae;\n\n      if (list && list.data && !list.data[0]) {\n        this.state.notFoundPgae = true;\n      }\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function () {\n      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var id, _props2, list, loadPostsList;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                id = this.props.match.params.id;\n                _props2 = this.props, list = _props2.list, loadPostsList = _props2.loadPostsList;\n\n                if (!(!list || !list.data)) {\n                  _context2.next = 6;\n                  break;\n                }\n\n                _context2.next = 5;\n                return this.props.loadPostsList({\n                  id: id,\n                  filter: {\n                    _id: id\n                  }\n                });\n\n              case 5:\n\n                this.componentWillMount();\n\n              case 6:\n              case 'end':\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function componentDidMount() {\n        return _ref5.apply(this, arguments);\n      }\n\n      return componentDidMount;\n    }()\n  }, {\n    key: 'render',\n    value: function render() {\n      var list = this.props.list;\n\n      var _ref6 = list || {},\n          loading = _ref6.loading,\n          data = _ref6.data;\n\n      var posts = data && data[0] ? data[0] : null;\n      var notFoundPgae = this.state.notFoundPgae;\n\n      // 404 处理\n\n      if (notFoundPgae) {\n        return '404 Not Found';\n      }\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        loading ? _react2.default.createElement(\n          'div',\n          null,\n          'loading...'\n        ) : null,\n        _react2.default.createElement(_meta2.default, { title: posts ? posts.title : '加载中...' }),\n        posts ? _react2.default.createElement(\n          'div',\n          { className: 'jumbotron' },\n          _react2.default.createElement(\n            'h1',\n            { className: 'display-4' },\n            posts.title\n          ),\n          _react2.default.createElement(\n            'p',\n            { className: 'lead' },\n            posts.topic_id.name\n          ),\n          _react2.default.createElement('hr', { className: 'my-4' }),\n          posts.content_html ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: posts.content_html } }) : null\n        ) : null\n      );\n    }\n  }]);\n\n  return PostsDetail;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n  var id = props.match.params.id;\n\n  return {\n    list: (0, _posts2.getPostsListByListId)(state, id)\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, props) {\n  return {\n    loadPostsList: (0, _redux.bindActionCreators)(_posts.loadPostsList, dispatch)\n  };\n};\n\nexports.PostsDetail = PostsDetail = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostsDetail);\n\nexports.default = (0, _shell2.default)(PostsDetail);\n\n//# sourceURL=webpack:///./src/pages/posts-detail/index.js?");

/***/ }),

/***/ "./src/pages/sign-in/images/react-icon.png":
/*!*************************************************!*\
  !*** ./src/pages/sign-in/images/react-icon.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"14c89a41e5154b4a2920df0115337ad5.png\";\n\n//# sourceURL=webpack:///./src/pages/sign-in/images/react-icon.png?");

/***/ }),

/***/ "./src/pages/sign-in/index.js":
/*!************************************!*\
  !*** ./src/pages/sign-in/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SignIn = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _user = __webpack_require__(/*! ../../actions/user */ \"./src/actions/user.js\");\n\nvar _reactCssModules = __webpack_require__(/*! react-css-modules */ \"react-css-modules\");\n\nvar _reactCssModules2 = _interopRequireDefault(_reactCssModules);\n\nvar _style = __webpack_require__(/*! ./style.scss */ \"./src/pages/sign-in/style.scss\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _shell = __webpack_require__(/*! ../../components/shell */ \"./src/components/shell.js\");\n\nvar _shell2 = _interopRequireDefault(_shell);\n\nvar _meta = __webpack_require__(/*! ../../components/meta */ \"./src/components/meta/index.js\");\n\nvar _meta2 = _interopRequireDefault(_meta);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignIn = exports.SignIn = function (_React$Component) {\n  _inherits(SignIn, _React$Component);\n\n  function SignIn(props) {\n    _classCallCheck(this, SignIn);\n\n    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));\n\n    _this.state = {};\n    _this.submit = _this.submit.bind(_this);\n    return _this;\n  }\n\n  _createClass(SignIn, [{\n    key: 'submit',\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {\n        var nickname, signIn, _ref2, _ref3, err, success;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                event.preventDefault();\n\n                nickname = this.refs.nickname;\n                signIn = this.props.signIn;\n\n                if (nickname.value) {\n                  _context.next = 6;\n                  break;\n                }\n\n                nickname.focus();\n                return _context.abrupt('return', false);\n\n              case 6:\n                _context.next = 8;\n                return signIn({ nickname: nickname.value });\n\n              case 8:\n                _ref2 = _context.sent;\n                _ref3 = _slicedToArray(_ref2, 2);\n                err = _ref3[0];\n                success = _ref3[1];\n\n\n                if (success) {\n                  window.location.href = '/';\n                }\n\n                return _context.abrupt('return', false);\n\n              case 14:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function submit(_x) {\n        return _ref.apply(this, arguments);\n      }\n\n      return submit;\n    }()\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { styleName: 'container', className: 'text-center' },\n        _react2.default.createElement(_meta2.default, { title: 'React\\u540C\\u6784\\u811A\\u624B\\u67B6' }),\n        _react2.default.createElement(\n          'form',\n          { className: 'form-signin', onSubmit: this.submit },\n          _react2.default.createElement('div', { styleName: 'icon' }),\n          _react2.default.createElement(\n            'h1',\n            { className: 'h3 mb-3 font-weight-normal' },\n            'React\\u540C\\u6784\\u811A\\u624B\\u67B6'\n          ),\n          _react2.default.createElement('input', { type: 'text', ref: 'nickname', className: 'form-control mb-3', placeholder: '\\u8BF7\\u8F93\\u5165\\u6635\\u79F0' }),\n          _react2.default.createElement(\n            'button',\n            { className: 'btn btn-lg btn-primary btn-block', type: 'submit' },\n            '\\u767B\\u5F55'\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignIn;\n}(_react2.default.Component);\n\nexports.SignIn = SignIn = (0, _reactCssModules2.default)(SignIn, _style2.default);\n\nSignIn.propTypes = {\n  signIn: _propTypes2.default.func.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state, props) {\n  return {};\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    signIn: (0, _redux.bindActionCreators)(_user.signIn, dispatch)\n  };\n};\n\nexports.SignIn = SignIn = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignIn));\n\nexports.default = (0, _shell2.default)(SignIn);\n\n//# sourceURL=webpack:///./src/pages/sign-in/index.js?");

/***/ }),

/***/ "./src/pages/sign-in/style.scss":
/*!**************************************!*\
  !*** ./src/pages/sign-in/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"._3EGm54f5{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#343a40}._3EGm54f5>form{margin-top:10%;color:#fff}._3EGm54f5 ._8v9KQQGX{background-image:url(\" + __webpack_require__(/*! ./images/react-icon.png */ \"./src/pages/sign-in/images/react-icon.png\") + \");height:120px;background-size:contain;background-position:50%;background-repeat:no-repeat;margin:0 0 20px}.form-signin{width:100%;max-width:330px;padding:15px;margin:0 auto}.form-signin .checkbox{font-weight:400}.form-signin .form-control{position:relative;box-sizing:border-box;height:auto;padding:10px;font-size:16px}.form-signin .form-control:focus{z-index:2}.form-signin input[type=email]{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-signin input[type=password]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}\", \"\", {\"version\":3,\"sources\":[\"/Users/wuseijian/Documents/GitHub/react-starter/src/pages/sign-in/style.scss\"],\"names\":[],\"mappings\":\"AAAA,WACE,kBAAmB,AACnB,MAAS,AACT,OAAU,AACV,WAAY,AACZ,YAAa,AACb,wBAA0B,CAAE,AAE9B,gBACE,eAAgB,AAChB,UAAY,CAAE,AAEhB,sBACE,+CAA+C,AAC/C,aAAc,AACd,wBAAyB,AACzB,wBAA4B,AAC5B,4BAA6B,AAC7B,eAAmB,CAAE,AAEvB,aACE,WAAY,AACZ,gBAAiB,AACjB,aAAc,AACd,aAAe,CAAE,AAEnB,uBACE,eAAiB,CAAE,AAErB,2BACE,kBAAmB,AACnB,sBAAuB,AACvB,YAAa,AACb,aAAc,AACd,cAAgB,CAAE,AAEpB,iCACE,SAAW,CAAE,AAEf,+BACE,mBAAoB,AACpB,6BAA8B,AAC9B,2BAA6B,CAAE,AAEjC,kCACE,mBAAoB,AACpB,yBAA0B,AAC1B,yBAA2B,CAAE\",\"file\":\"style.scss\",\"sourcesContent\":[\".container {\\n  position: absolute;\\n  top: 0px;\\n  left: 0px;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #343a40; }\\n\\n.container > form {\\n  margin-top: 10%;\\n  color: #fff; }\\n\\n.container .icon {\\n  background-image: url(./images/react-icon.png);\\n  height: 120px;\\n  background-size: contain;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  margin: 0 0 20px 0; }\\n\\n:global .form-signin {\\n  width: 100%;\\n  max-width: 330px;\\n  padding: 15px;\\n  margin: 0 auto; }\\n\\n:global .form-signin .checkbox {\\n  font-weight: 400; }\\n\\n:global .form-signin .form-control {\\n  position: relative;\\n  box-sizing: border-box;\\n  height: auto;\\n  padding: 10px;\\n  font-size: 16px; }\\n\\n:global .form-signin .form-control:focus {\\n  z-index: 2; }\\n\\n:global .form-signin input[type=\\\"email\\\"] {\\n  margin-bottom: -1px;\\n  border-bottom-right-radius: 0;\\n  border-bottom-left-radius: 0; }\\n\\n:global .form-signin input[type=\\\"password\\\"] {\\n  margin-bottom: 10px;\\n  border-top-left-radius: 0;\\n  border-top-right-radius: 0; }\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\nexports.locals = {\n\t\"container\": \"_3EGm54f5\",\n\t\"icon\": \"_8v9KQQGX\"\n};\n\n//# sourceURL=webpack:///./src/pages/sign-in/style.scss?");

/***/ }),

/***/ "./src/pages/topics/index.js":
/*!***********************************!*\
  !*** ./src/pages/topics/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Topics = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _shell = __webpack_require__(/*! ../../components/shell */ \"./src/components/shell.js\");\n\nvar _shell2 = _interopRequireDefault(_shell);\n\nvar _meta = __webpack_require__(/*! ../../components/meta */ \"./src/components/meta/index.js\");\n\nvar _meta2 = _interopRequireDefault(_meta);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Topics = exports.Topics = function (_React$Component) {\n  _inherits(Topics, _React$Component);\n\n  function Topics(props) {\n    _classCallCheck(this, Topics);\n\n    return _possibleConstructorReturn(this, (Topics.__proto__ || Object.getPrototypeOf(Topics)).call(this, props));\n  }\n\n  _createClass(Topics, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_meta2.default, { title: '\\u8BDD\\u9898' }),\n        _react2.default.createElement(\n          'h2',\n          null,\n          'Topics'\n        )\n      );\n    }\n  }]);\n\n  return Topics;\n}(_react2.default.Component);\n\nexports.default = (0, _shell2.default)(Topics);\n\n//# sourceURL=webpack:///./src/pages/topics/index.js?");

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initialStateJSON = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _merge = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n\nvar _merge2 = _interopRequireDefault(_merge);\n\nvar _user = __webpack_require__(/*! ./user */ \"./src/reducers/user.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _posts = __webpack_require__(/*! ./posts */ \"./src/reducers/posts.js\");\n\nvar _posts2 = _interopRequireDefault(_posts);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar states = {\n  user: _user2.default,\n  posts: _posts2.default\n\n  // 创建一个无数据的states，用于在服务端初始redux数据\n};var _states = {};\nfor (var i in states) {\n  _states[i] = (0, _merge2.default)({}, states[i](), {});\n}\n_states = JSON.stringify(_states);\nvar initialStateJSON = exports.initialStateJSON = _states;\n\n// reducer\nexports.default = (0, _redux.combineReducers)(states);\n\n//# sourceURL=webpack:///./src/reducers/index.js?");

/***/ }),

/***/ "./src/reducers/posts.js":
/*!*******************************!*\
  !*** ./src/reducers/posts.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getPostsListByListId = undefined;\nexports.default = posts;\n\nvar _merge = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n\nvar _merge2 = _interopRequireDefault(_merge);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initialState = {};\n\nfunction posts() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  switch (action.type) {\n\n    case 'SET_POSTS':\n      return (0, _merge2.default)({}, action.state, {});\n\n    case 'SET_POSTS_LIST_BY_NAME':\n      var id = action.id,\n          data = action.data;\n\n      state[id] = data;\n      return (0, _merge2.default)({}, state, {});\n\n    default:\n      return state;\n  }\n}\n\nvar getPostsListByListId = exports.getPostsListByListId = function getPostsListByListId(state, id) {\n  return state.posts[id] ? state.posts[id] : {};\n};\n\n//# sourceURL=webpack:///./src/reducers/posts.js?");

/***/ }),

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getUserInfo = exports.getAccessToken = undefined;\nexports.default = user;\n\nvar _merge = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n\nvar _merge2 = _interopRequireDefault(_merge);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initialState = {\n  accessToken: '',\n  userinfo: null\n};\n\nfunction user() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\n  switch (action.type) {\n\n    case 'SAVE_ACCESS_TOKEN':\n      state.accessToken = action.accessToken;\n      return (0, _merge2.default)({}, state, {});\n\n    case 'SAVE_USERINFO':\n      state.userinfo = action.userinfo;\n      return (0, _merge2.default)({}, state, {});\n\n    default:\n      return state;\n  }\n}\n\n// 获取 access token\nvar getAccessToken = exports.getAccessToken = function getAccessToken(state) {\n  return state.user.accessToken;\n};\n\n// 获取用户信息\nvar getUserInfo = exports.getUserInfo = function getUserInfo(state) {\n  return state.user.userinfo || {};\n};\n\n//# sourceURL=webpack:///./src/reducers/user.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _generateAsyncComponent = __webpack_require__(/*! ../components/generateAsyncComponent.js */ \"./src/components/generateAsyncComponent.js\");\n\nvar _head = __webpack_require__(/*! ../components/head */ \"./src/components/head/index.js\");\n\nvar _head2 = _interopRequireDefault(_head);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * 创建路由\n * @param  {Object} userinfo 用户信息，以此判断用户是否是登录状态，并控制页面访问权限\n * @return {[type]}\n */\n\n\n// 生成异步加载组件\nexports.default = function (user) {\n\n  // 登录用户才能访问\n  var requireAuth = function requireAuth(Layout, props) {\n    if (!user) {\n      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign-in' });\n    } else {\n      return _react2.default.createElement(Layout, props);\n    }\n  };\n\n  // 游客才能访问\n  var requireTourists = function requireTourists(Layout, props) {\n    if (user) {\n      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n    } else {\n      return _react2.default.createElement(Layout, props);\n    }\n  };\n\n  // 大家都可以访问\n  var triggerEnter = function triggerEnter(Layout, props) {\n    return _react2.default.createElement(Layout, props);\n  };\n\n  // 路由数组\n  var routeArr = [{\n    path: '/',\n    exact: true,\n    head: _head2.default,\n    component: (0, _generateAsyncComponent.asyncRouteComponent)({\n      loader: function loader() {\n        return Promise.resolve().then(function () {\n          return __webpack_require__(/*! ../pages/home */ \"./src/pages/home/index.js\");\n        });\n      }\n    }),\n    enter: requireAuth\n  }, {\n    path: '/posts/:id',\n    exact: true,\n    head: _head2.default,\n    component: (0, _generateAsyncComponent.asyncRouteComponent)({\n      loader: function loader() {\n        return Promise.resolve().then(function () {\n          return __webpack_require__(/*! ../pages/posts-detail */ \"./src/pages/posts-detail/index.js\");\n        });\n      }\n    }),\n    enter: requireAuth\n  }, {\n    path: '/topics',\n    exact: true,\n    head: _head2.default,\n    component: (0, _generateAsyncComponent.asyncRouteComponent)({\n      loader: function loader() {\n        return Promise.resolve().then(function () {\n          return __webpack_require__(/*! ../pages/topics */ \"./src/pages/topics/index.js\");\n        });\n      }\n    }),\n    enter: requireAuth\n  }, {\n    path: '/sign-in',\n    exact: true,\n    // head: Head,\n    component: (0, _generateAsyncComponent.asyncRouteComponent)({\n      loader: function loader() {\n        return Promise.resolve().then(function () {\n          return __webpack_require__(/*! ../pages/sign-in */ \"./src/pages/sign-in/index.js\");\n        });\n      }\n    }),\n    enter: requireTourists\n  }, {\n    path: '**',\n    head: _head2.default,\n    component: (0, _generateAsyncComponent.asyncRouteComponent)({\n      loader: function loader() {\n        return Promise.resolve().then(function () {\n          return __webpack_require__(/*! ../pages/not-found */ \"./src/pages/not-found/index.js\");\n        });\n      }\n    }),\n    enter: triggerEnter\n  }];\n\n  var router = function router() {\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        _reactRouterDom.Switch,\n        null,\n        routeArr.map(function (route, index) {\n          return _react2.default.createElement(_reactRouterDom.Route, {\n            key: index,\n            path: route.path,\n            exact: route.exact,\n            component: route.head\n          });\n        })\n      ),\n      _react2.default.createElement(\n        _reactRouterDom.Switch,\n        null,\n        routeArr.map(function (route, index) {\n          if (route.component) {\n            return _react2.default.createElement(_reactRouterDom.Route, {\n              key: index,\n              path: route.path,\n              exact: route.exact,\n              component: function component(props) {\n                return route.enter(route.component, props);\n              }\n            });\n          }\n        })\n      )\n    );\n  };\n\n  return {\n    list: routeArr,\n    dom: router\n  };\n};\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// var config = require('../../config');\n__webpack_require__(/*! babel-register */ \"babel-register\");\n__webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n// require('precss'),\n// require('autoprefixer'),\n/*\nrequire('css-modules-require-hook')({\n  generateScopedName: config.class_scoped_name,\n  extensions: ['.scss', '.css']\n});\n*/\n__webpack_require__(/*! ./server */ \"./src/server/server.js\");\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _reactDocumentMeta = __webpack_require__(/*! react-document-meta */ \"react-document-meta\");\n\nvar _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);\n\n__webpack_require__(/*! ejs */ \"ejs\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _router = __webpack_require__(/*! ../router */ \"./src/router/index.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nvar _reducers = __webpack_require__(/*! ../reducers */ \"./src/reducers/index.js\");\n\nvar _user = __webpack_require__(/*! ../actions/user */ \"./src/actions/user.js\");\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\nvar _sign = __webpack_require__(/*! ./sign */ \"./src/server/sign.js\");\n\nvar _sign2 = _interopRequireDefault(_sign);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// 服务端渲染依赖\n\n\n// 路由配置\n\n// 路由组件\n\n// 路由初始化的redux内容\n\n\n// 配置\n\n\n// import webpackHotMiddleware from './webpack-hot-middleware';\n\nvar app = (0, _express2.default)();\n\n// ***** 注意 *****\n// 不要改变如下代码执行位置，否则热更新会失效\n// 开发环境开启修改代码后热更新\n// if (process.env.NODE_ENV === 'development') webpackHotMiddleware(app);\n\n\napp.set(\"view engine\", \"ejs\");\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\napp.use(_express2.default.static(__dirname + '/dist/server'));\n// app.use(express.static('./'));\n\n// console.log(express.static(__dirname + '/dist'));\n\n// 登录、退出\napp.use('/sign', (0, _sign2.default)());\n\napp.get('*', function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    var store, user, accessToken, router, _route, _match, context, loadAsyncRouterComponent, _Router, html, reduxState, meta;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            store = (0, _store2.default)(JSON.parse(_reducers.initialStateJSON));\n            user = null;\n            accessToken = req.cookies[_config.auth_cookie_name] || '';\n\n            // 验证 token 是否有效\n\n            if (accessToken) {\n              // 这里可以去查询 accessToken 是否有效\n              // your code\n              // 这里假设如果有 accessToken ，那么就是登录用户，将他保存到redux中\n              user = { id: '001', nickname: accessToken };\n              // 储存用户信息\n              store.dispatch((0, _user.saveUserInfo)({ userinfo: user }));\n              // 储存access token\n              store.dispatch((0, _user.saveAccessToken)({ accessToken: accessToken }));\n            }\n\n            router = (0, _router2.default)(user);\n            _route = null, _match = null;\n\n\n            router.list.some(function (route) {\n              var match = (0, _reactRouter.matchPath)(req.url.split('?')[0], route);\n              if (match && match.path) {\n                _route = route;\n                _match = match;\n                return true;\n              }\n            });\n\n            context = {\n              // code\n              // url\n            };\n\n            // 加载异步路由组件\n\n            loadAsyncRouterComponent = function loadAsyncRouterComponent() {\n              return new Promise(function () {\n                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve) {\n                  return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                    while (1) {\n                      switch (_context2.prev = _context2.next) {\n                        case 0:\n                          _context2.next = 2;\n                          return _route.component.load(function () {\n                            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ResolvedComponent) {\n                              var loadData, result;\n                              return regeneratorRuntime.wrap(function _callee$(_context) {\n                                while (1) {\n                                  switch (_context.prev = _context.next) {\n                                    case 0:\n                                      loadData = ResolvedComponent.WrappedComponent.defaultProps.loadData;\n                                      _context.next = 3;\n                                      return loadData({ store: store, match: _match });\n\n                                    case 3:\n                                      result = _context.sent;\n\n                                      resolve(result);\n\n                                    case 5:\n                                    case 'end':\n                                      return _context.stop();\n                                  }\n                                }\n                              }, _callee, undefined);\n                            }));\n\n                            return function (_x4) {\n                              return _ref3.apply(this, arguments);\n                            };\n                          }());\n\n                        case 2:\n                        case 'end':\n                          return _context2.stop();\n                      }\n                    }\n                  }, _callee2, undefined);\n                }));\n\n                return function (_x3) {\n                  return _ref2.apply(this, arguments);\n                };\n              }());\n            };\n\n            if (!_route.component.load) {\n              _context3.next = 13;\n              break;\n            }\n\n            _context3.next = 12;\n            return loadAsyncRouterComponent();\n\n          case 12:\n            context = _context3.sent;\n\n          case 13:\n\n            // 获取路由dom\n            _Router = router.dom;\n            html = _server2.default.renderToString(_react2.default.createElement(\n              _reactRedux.Provider,\n              { store: store },\n              _react2.default.createElement(\n                _reactRouter.StaticRouter,\n                { location: req.url, context: context },\n                _react2.default.createElement(_Router, null)\n              )\n            ));\n            reduxState = JSON.stringify(store.getState()).replace(/</g, '\\\\x3c');\n\n            // 获取页面的meta，嵌套到模版中\n\n            meta = _reactDocumentMeta2.default.renderAsHTML();\n\n\n            if (context.code == 301) {\n              res.writeHead(301, {\n                Location: context.url\n              });\n            } else {\n              res.status(context.code);\n              res.render('../dist/server/index.ejs', { html: html, reduxState: reduxState, meta: meta });\n            }\n\n            res.end();\n\n          case 19:\n          case 'end':\n            return _context3.stop();\n        }\n      }\n    }, _callee3, undefined);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n\napp.listen(_config.port);\nconsole.log('server started on port ' + _config.port);\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/server/sign.js":
/*!****************************!*\
  !*** ./src/server/sign.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _config = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// (安全实施) 服务端储存 token cookie 设置成httpOnly\nexports.default = function () {\n\n  var router = _express2.default.Router();\n\n  router.post('/in', function (req, res) {\n\n    var nickname = req.body.nickname;\n\n    res.cookie(_config.auth_cookie_name, nickname, { path: '/', httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 30 });\n    res.send({ success: true });\n  });\n\n  router.post('/out', function (req, res) {\n    res.clearCookie(_config.auth_cookie_name);\n    res.send({ success: true });\n  });\n\n  return router;\n};\n\n//# sourceURL=webpack:///./src/server/sign.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ../reducers */ \"./src/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _reduxLogger = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar middleware = [_reduxThunk2.default];\n\n// 如果是在客户端环境，并且是开发模式，那么打印redux日志\nif (!Object({\"NODE_ENV\":undefined}).__NODE__ && false) middleware.push((0, _reduxLogger.createLogger)());\n\nfunction configureStore(initialState) {\n  var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware)));\n  return store;\n}\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/server/index ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/server/index */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/server/index?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-register":
/*!*********************************!*\
  !*** external "babel-register" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-register\");\n\n//# sourceURL=webpack:///external_%22babel-register%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ejs\");\n\n//# sourceURL=webpack:///external_%22ejs%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/merge\");\n\n//# sourceURL=webpack:///external_%22lodash/merge%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-css-modules":
/*!************************************!*\
  !*** external "react-css-modules" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-css-modules\");\n\n//# sourceURL=webpack:///external_%22react-css-modules%22?");

/***/ }),

/***/ "react-document-meta":
/*!**************************************!*\
  !*** external "react-document-meta" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-document-meta\");\n\n//# sourceURL=webpack:///external_%22react-document-meta%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });

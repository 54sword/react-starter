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


// 生产环境配置
var config = {
  // 正式环境
  debug: false,

  // 域名
  host: 'localhost',

  //  服务端口
  port: 4000,

  // 登录token，cookie 的名称
  auth_cookie_name: 'signin-cookie',

  // https://github.com/css-modules/css-modules
  class_scoped_name: '[hash:base64:8]',

  // 前端打包后，静态资源路径前缀
  // 生成效果如：//localhost:4000/app.bundle.js
  public_path: '//localhost:4000'

  // 开发环境配置
};if (undefined == 'development') {
  config.debug = true;
  config.class_scoped_name = '[name]_[local]__[hash:base64:5]';
}

module.exports = config;

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/actions/posts.js":
/*!******************************!*\
  !*** ./src/actions/posts.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.loadPostsList = loadPostsList;

var _ajax = __webpack_require__(/*! ../common/ajax */ "./src/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

var _posts = __webpack_require__(/*! ../reducers/posts */ "./src/reducers/posts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function loadPostsList(_ref) {
  var _this = this;

  var id = _ref.id,
      _ref$filter = _ref.filter,
      filter = _ref$filter === undefined ? {} : _ref$filter;

  return function (dispatch, getState) {
    return new Promise(function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
        var list, variables, _ref3, _ref4, err, data, postsData;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                list = (0, _posts.getPostsListByListId)(getState(), id);


                list.loading = true;
                list.filter = filter;
                if (!list.data) list.data = [];

                dispatch({ type: 'SET_POSTS_LIST_BY_NAME', id: id, data: list });

                variables = convertFilrerFormat(filter);


                if (!variables) {
                  variables = '';
                } else {
                  variables = '(' + variables + ')';
                }

                // 储存 cookie
                _context.next = 9;
                return (0, _ajax2.default)({
                  url: 'http://admin.xiaoduyu.com/graphql',
                  method: 'post',
                  data: {
                    operationName: null,
                    variables: {},
                    query: '{\n          posts' + variables + '{\n            _id\n            comment_count\n            content_html\n            title\n            topic_id{\n              _id\n              name\n            }\n            type\n            user_id{\n              _id\n              nickname\n              brief\n              avatar_url\n            }\n          }\n        }'
                  }
                });

              case 9:
                _ref3 = _context.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                err = _ref4[0];
                data = _ref4[1];


                if (data && data.data) {

                  list.loading = false;

                  postsData = data.data[Reflect.ownKeys(data.data)[0]];


                  if (postsData && postsData.length > 0) {
                    list.data = list.data.concat(modifyList(postsData));
                  }

                  dispatch({ type: 'SET_POSTS_LIST_BY_NAME', id: id, data: list });
                  resolve([null, list.data]);
                } else {
                  resolve(['loadPostList load failed']);
                }

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
}

var modifyList = function modifyList(data) {
  var arr = [];
  data.map(function (item) {

    var text = item.content_html.replace(/<[^>]+>/g, "");
    if (text.length > 140) text = text.slice(0, 140) + '...';
    item.content_summary = text;

    arr.push(item);
  });

  return arr;
};

// 将参数对象转换成，GraphQL提交参数的格式
var convertFilrerFormat = function convertFilrerFormat(params) {
  var arr = [];
  for (var i in params) {
    var v = '';
    switch (_typeof(params[i])) {
      case 'string':
        v = '"' + params[i] + '"';break;
      case 'number':
        v = params[i];break;
      default:
        v = params[i];
    }
    arr.push(i + ':' + v);
  }
  return arr.join(',');
};

/***/ }),

/***/ "./src/actions/user.js":
/*!*****************************!*\
  !*** ./src/actions/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.saveAccessToken = saveAccessToken;
exports.saveUserInfo = saveUserInfo;
exports.signIn = signIn;
exports.signOut = signOut;

var _ajax = __webpack_require__(/*! ../common/ajax */ "./src/common/ajax.js");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 储存accessToken到redux
function saveAccessToken(_ref) {
  var accessToken = _ref.accessToken;

  return function (dispatch) {
    dispatch({ type: 'SAVE_ACCESS_TOKEN', accessToken: accessToken });
  };
}

function saveUserInfo(_ref2) {
  var userinfo = _ref2.userinfo;

  return function (dispatch) {
    dispatch({ type: 'SAVE_USERINFO', userinfo: userinfo });
  };
}

function signIn(_ref3) {
  var _this = this;

  var nickname = _ref3.nickname;

  return function (dispatch) {
    return new Promise(function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
        var _ref5, _ref6, err, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _ajax2.default)({
                  url: window.location.origin + '/sign/in',
                  method: 'post',
                  data: {
                    nickname: nickname
                  }
                });

              case 2:
                _ref5 = _context.sent;
                _ref6 = _slicedToArray(_ref5, 2);
                err = _ref6[0];
                data = _ref6[1];


                if (data && data.success) {
                  resolve([null, true]);
                } else {
                  resolve(['sign error']);
                }

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x, _x2) {
        return _ref4.apply(this, arguments);
      };
    }());
  };
}

function signOut() {
  var _this2 = this;

  return function (dispatch) {
    return new Promise(function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
        var _ref8, _ref9, err, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _ajax2.default)({
                  url: window.location.origin + '/sign/out',
                  method: 'post'
                });

              case 2:
                _ref8 = _context2.sent;
                _ref9 = _slicedToArray(_ref8, 2);
                err = _ref9[0];
                data = _ref9[1];


                if (data && data.success) {
                  resolve([null, true]);
                } else {
                  resolve(['sign error']);
                }

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x3, _x4) {
        return _ref7.apply(this, arguments);
      };
    }());
  };
}

/***/ }),

/***/ "./src/common/ajax.js":
/*!****************************!*\
  !*** ./src/common/ajax.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(/*! ../../config */ "./config/index.js");

var _config2 = _interopRequireDefault(_config);

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AJAX = function AJAX(_ref) {
  var _ref$url = _ref.url,
      url = _ref$url === undefined ? '' : _ref$url,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'get' : _ref$method,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data,
      _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? {} : _ref$headers;


  var option = { url: url, method: method, headers: headers };

  if (method == 'get') {
    data._t = new Date().getTime();
    option.params = data;
  } else if (method == 'post') {
    option.data = data;
  }

  return (0, _axios2.default)(option).then(function (resp) {
    if (resp && resp.data) {
      var res = resp.data;
      return [null, res];
    } else {
      return ['return none'];
    }
  }).catch(function (error) {
    if (error && error.response && error.response.data) {
      return [error.response.data];
    } else {
      return ['return error'];
    }
  });
};

exports.default = AJAX;

/***/ }),

/***/ "./src/common/parse-url.js":
/*!*********************************!*\
  !*** ./src/common/parse-url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var parseUrl = function parseUrl(search) {
  var paramPart = search.substr(1).split('&');
  return paramPart.reduce(function (res, item) {
    if (item) {
      var parts = item.split('=');
      res[parts[0]] = parts[1] || '';
    }
    return res;
  }, {});
};

exports.default = parseUrl;

/***/ }),

/***/ "./src/components/generateAsyncComponent.js":
/*!**************************************************!*\
  !*** ./src/components/generateAsyncComponent.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _loading = __webpack_require__(/*! ./ui/loading */ "./src/components/ui/loading/index.js");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.asyncRouteComponent = function (_ref) {
  var loader = _ref.loader,
      Placeholder = _ref.Placeholder;


  var Component = null;

  return function (_React$Component) {
    _inherits(asyncComponent, _React$Component);

    _createClass(asyncComponent, null, [{
      key: 'load',


      // 加载组件
      value: function load() {
        var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

        return loader().then(function (ResolvedComponent) {
          Component = ResolvedComponent.default || ResolvedComponent;
          callback(Component);
        });
      }
    }]);

    function asyncComponent() {
      _classCallCheck(this, asyncComponent);

      var _this = _possibleConstructorReturn(this, (asyncComponent.__proto__ || Object.getPrototypeOf(asyncComponent)).call(this));

      _this.state = { Component: Component };
      return _this;
    }

    _createClass(asyncComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // 客户端加载异步组件
        var self = this;
        asyncComponent.load().then(function () {
          if (self.state.Component !== Component) {
            self.setState({ Component: Component });
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var Component = this.state.Component;


        if (Component) return _react2.default.createElement(Component, this.props);
        if (Placeholder) {
          return _react2.default.createElement(Placeholder, this.props);
        } else {
          return _react2.default.createElement(_loading2.default, { text: '\u7EC4\u4EF6\u88C5\u8F7D\u4E2D...' });
        }

        return null;
      }
    }]);

    return asyncComponent;
  }(_react2.default.Component);
};

/***/ }),

/***/ "./src/components/head/index.js":
/*!**************************************!*\
  !*** ./src/components/head/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _user = __webpack_require__(/*! ../../actions/user */ "./src/actions/user.js");

var _user2 = __webpack_require__(/*! ../../reducers/user */ "./src/reducers/user.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import CSSModules from 'react-css-modules';
// import styles from './style.scss';


var Head = exports.Head = (_temp = _class = function (_React$Component) {
  _inherits(Head, _React$Component);

  function Head(props) {
    _classCallCheck(this, Head);

    var _this = _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).call(this, props));

    _this.signOut = _this.signOut.bind(_this);
    return _this;
  }

  _createClass(Head, [{
    key: 'signOut',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2, _ref3, err, success;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.signOut();

              case 2:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                err = _ref3[0];
                success = _ref3[1];

                if (success) {
                  // 退出成功跳转到首页
                  window.location.href = '/';
                } else {
                  alert('退出失败');
                }

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function signOut() {
        return _ref.apply(this, arguments);
      }

      return signOut;
    }()
  }, {
    key: 'render',
    value: function render() {
      var userinfo = this.props.userinfo;


      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'nav',
          { className: 'navbar fixed-top navbar-expand-md navbar-expand-lg navbar-dark bg-dark bd-navbar' },
          _react2.default.createElement(
            _reactRouterDom.NavLink,
            { className: 'navbar-brand', exact: true, to: '/' },
            'React\u540C\u6784\u811A\u624B\u67B6'
          ),
          _react2.default.createElement(
            'button',
            { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarText', 'aria-controls': 'navbarText', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
            _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'collapse navbar-collapse', id: 'navbarText' },
            _react2.default.createElement(
              'ul',
              { className: 'navbar-nav mr-auto' },
              _react2.default.createElement(
                'li',
                { className: 'nav-item' },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { className: 'nav-link', exact: true, to: '/' },
                  'Home'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'nav-item' },
                _react2.default.createElement(
                  _reactRouterDom.NavLink,
                  { className: 'nav-link', exact: true, to: '/topics' },
                  'Topics'
                )
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'mt-2 mt-md-0' },
              _react2.default.createElement(
                'ul',
                { className: 'navbar-nav mr-auto' },
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'span',
                    { className: 'nav-link' },
                    userinfo.nickname
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav-item' },
                  _react2.default.createElement(
                    'a',
                    { className: 'nav-link', href: 'javascript:void(0)', onClick: this.signOut },
                    '\u9000\u51FA'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Head;
}(_react2.default.Component), _class.propTypes = {
  userinfo: _propTypes2.default.object.isRequired,
  signOut: _propTypes2.default.func.isRequired
}, _temp);

// Head = CSSModules(Head, styles);

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    userinfo: (0, _user2.getUserInfo)(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signOut: (0, _redux.bindActionCreators)(_user.signOut, dispatch)
  };
};

exports.Head = Head = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Head);

exports.default = Head;

/***/ }),

/***/ "./src/components/meta/index.js":
/*!**************************************!*\
  !*** ./src/components/meta/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Meta = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDocumentMeta = __webpack_require__(/*! react-document-meta */ "react-document-meta");

var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// https://github.com/kodyl/react-document-meta


var Meta = exports.Meta = function (_Component) {
  _inherits(Meta, _Component);

  function Meta(props) {
    _classCallCheck(this, Meta);

    return _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).call(this, props));
  }

  _createClass(Meta, [{
    key: 'render',
    value: function render() {

      var metaObj = {};

      var _props = this.props,
          title = _props.title,
          description = _props.description,
          canonical = _props.canonical,
          meta = _props.meta;


      if (title) metaObj.title = title;
      if (description) metaObj.description = description;
      if (canonical) metaObj.canonical = canonical;
      if (meta) metaObj.title = meta;

      return _react2.default.createElement(_reactDocumentMeta2.default, metaObj);
    }
  }]);

  return Meta;
}(_react.Component);

exports.default = Meta;

/***/ }),

/***/ "./src/components/posts/list/index.js":
/*!********************************************!*\
  !*** ./src/components/posts/list/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostsList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

// import CSSModules from 'react-css-modules';


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _posts = __webpack_require__(/*! ../../../actions/posts */ "./src/actions/posts.js");

var _posts2 = __webpack_require__(/*! ../../../reducers/posts */ "./src/reducers/posts.js");

var _style = __webpack_require__(/*! ./style.scss */ "./src/components/posts/list/style.scss");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostsList = exports.PostsList = (_temp = _class = function (_React$Component) {
  _inherits(PostsList, _React$Component);

  function PostsList(props) {
    _classCallCheck(this, PostsList);

    var _this = _possibleConstructorReturn(this, (PostsList.__proto__ || Object.getPrototypeOf(PostsList)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(PostsList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          id = _props.id,
          filter = _props.filter,
          list = _props.list,
          loadPostsList = _props.loadPostsList;


      if (!list.data) {
        this.props.loadPostsList({
          id: id,
          filter: filter
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var list = this.props.list;
      var loading = list.loading,
          data = list.data;


      return _react2.default.createElement(
        'div',
        null,
        loading ? _react2.default.createElement(
          'div',
          null,
          'loading...'
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'list-group' },
          data && data.map(function (item) {
            return _react2.default.createElement(
              _reactRouterDom.Link,
              { key: item._id,
                to: '/posts/' + item._id,
                className: 'list-group-item list-group-item-action flex-column align-items-start' },
              _react2.default.createElement(
                'p',
                { className: 'mb-1' },
                _react2.default.createElement('img', { src: item.user_id.avatar_url, className: _style2.default.avatar }),
                item.user_id.nickname
              ),
              _react2.default.createElement(
                'div',
                { className: 'd-flex w-100 justify-content-between' },
                _react2.default.createElement(
                  'h5',
                  { className: 'mb-1' },
                  item.title
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  item.topic_id.name
                )
              ),
              _react2.default.createElement(
                'p',
                { className: 'mb-1' },
                item.content_summary
              ),
              _react2.default.createElement(
                'small',
                null,
                item.comment_count > 0 ? '\u6709' + item.comment_count + '\u4EBA\u8BC4\u8BBA' : null
              )
            );
          })
        )
      );
    }
  }]);

  return PostsList;
}(_react2.default.Component), _class.propTypes = {
  // 要获取的列表的id
  id: _propTypes2.default.string.isRequired,
  // 筛选条件
  filter: _propTypes2.default.object.isRequired,

  // 列表数据
  list: _propTypes2.default.object.isRequired,
  // 加载列表的方法
  loadPostsList: _propTypes2.default.func.isRequired
}, _temp);

// PostsList = CSSModules(PostsList, styles);

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    list: (0, _posts2.getPostsListByListId)(state, props.id)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    loadPostsList: (0, _redux.bindActionCreators)(_posts.loadPostsList, dispatch)
  };
};

exports.PostsList = PostsList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostsList);

exports.default = PostsList;

/***/ }),

/***/ "./src/components/posts/list/style.scss":
/*!**********************************************!*\
  !*** ./src/components/posts/list/style.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".sFFM_yov{width:30px;height:30px;border-radius:15px;margin-right:10px}", "", {"version":3,"sources":["/Users/wuseijian/Documents/GitHub/react-starter/src/components/posts/list/style.scss"],"names":[],"mappings":"AAAA,UACE,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,iBAAmB,CAAE","file":"style.scss","sourcesContent":[".avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  margin-right: 10px; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"avatar": "sFFM_yov"
};

/***/ }),

/***/ "./src/components/shell.js":
/*!*********************************!*\
  !*** ./src/components/shell.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _parseUrl = __webpack_require__(/*! ../common/parse-url */ "./src/common/parse-url.js");

var _parseUrl2 = _interopRequireDefault(_parseUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 壳组件，用于给页面组件，套一个外壳
// 这样可以通过壳组件，给每个页面，传递参数

var Shell = function Shell(Component) {
  var _class, _temp;

  if (!Component.loadData) {
    Component.loadData = function (_ref) {
      var store = _ref.store,
          match = _ref.match;

      return new Promise(function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  resolve({ code: 200 });

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    };
  }

  var Shell = (_temp = _class = function (_React$Component) {
    _inherits(Shell, _React$Component);

    function Shell(props) {
      _classCallCheck(this, Shell);

      return _possibleConstructorReturn(this, (Shell.__proto__ || Object.getPrototypeOf(Shell)).call(this, props));
    }

    // 组件加载完成


    _createClass(Shell, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var search = this.props.location.search;

        this.props.location.params = search ? (0, _parseUrl2.default)(search) : null;
        // console.log('进入组件')
      }

      // 组件加载完成

    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {}
      // console.log('组件加载完成');


      // 更新组件

    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {}
      // console.log('组件加载更新了');


      // 组件被卸载

    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        // console.log('组件加载被卸载');
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(Component, this.props)
        );
      }
    }]);

    return Shell;
  }(_react2.default.Component), _class.defaultProps = {
    loadData: Component.loadData || null
  }, _temp);


  Shell.contextTypes = {};

  Shell.propTypes = {};

  var mapStateToProps = function mapStateToProps(state) {
    return {};
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {};
  };

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Shell);
};

exports.default = Shell;

/***/ }),

/***/ "./src/components/ui/loading/index.js":
/*!********************************************!*\
  !*** ./src/components/ui/loading/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import CSSModules from 'react-css-modules'
// import styles from './style.scss'


// @CSSModules(styles)
var LoadingMore = function (_Component) {
  _inherits(LoadingMore, _Component);

  function LoadingMore(props) {
    _classCallCheck(this, LoadingMore);

    return _possibleConstructorReturn(this, (LoadingMore.__proto__ || Object.getPrototypeOf(LoadingMore)).call(this, props));
  }

  _createClass(LoadingMore, [{
    key: 'render',
    value: function render() {
      var _props$text = this.props.text,
          text = _props$text === undefined ? '正在加载中...' : _props$text;
      // styleName="loading"

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('span', null),
        text
      );
    }
  }]);

  return LoadingMore;
}(_react.Component);

exports.default = LoadingMore;

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _posts = __webpack_require__(/*! ../../actions/posts */ "./src/actions/posts.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _shell = __webpack_require__(/*! ../../components/shell */ "./src/components/shell.js");

var _shell2 = _interopRequireDefault(_shell);

var _meta = __webpack_require__(/*! ../../components/meta */ "./src/components/meta/index.js");

var _meta2 = _interopRequireDefault(_meta);

var _list = __webpack_require__(/*! ../../components/posts/list */ "./src/components/posts/list/index.js");

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// http://blog.csdn.net/ISaiSai/article/details/78094556


// 壳组件


var Home = exports.Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  _createClass(Home, null, [{
    key: 'loadData',


    // 服务端渲染
    // 加载需要在服务端渲染的数据
    value: function loadData(_ref) {
      var store = _ref.store,
          match = _ref.match;

      return new Promise(function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _posts.loadPostsList)({
                    id: 'home',
                    filter: {
                      sort_by: "create_at",
                      deleted: false,
                      weaken: false
                    }
                  })(store.dispatch, store.getState);

                case 2:

                  resolve({ code: 200 });

                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }]);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_meta2.default, { title: '\u9996\u9875' }),
        _react2.default.createElement(_list2.default, {
          id: 'home',
          filter: {
            sort_by: "create_at",
            deleted: false,
            weaken: false
          }
        })
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.Home = Home = (0, _reactRouterDom.withRouter)(Home);

exports.default = (0, _shell2.default)(Home);

/***/ }),

/***/ "./src/pages/not-found/index.js":
/*!**************************************!*\
  !*** ./src/pages/not-found/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFound = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _shell = __webpack_require__(/*! ../../components/shell */ "./src/components/shell.js");

var _shell2 = _interopRequireDefault(_shell);

var _meta = __webpack_require__(/*! ../../components/meta */ "./src/components/meta/index.js");

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = exports.NotFound = function (_React$Component) {
  _inherits(NotFound, _React$Component);

  _createClass(NotFound, null, [{
    key: 'loadData',
    value: function loadData(_ref) {
      var store = _ref.store,
          match = _ref.match;

      return new Promise(function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  resolve({ code: 404 });

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }]);

  function NotFound(props) {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, props));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_meta2.default, { title: '404,\u65E0\u6CD5\u627E\u5230\u8BE5\u9875\u9762' }),
        '404,\u65E0\u6CD5\u627E\u5230\u8BE5\u9875\u9762'
      );
    }
  }]);

  return NotFound;
}(_react2.default.Component);

exports.default = (0, _shell2.default)(NotFound);

/***/ }),

/***/ "./src/pages/posts-detail/index.js":
/*!*****************************************!*\
  !*** ./src/pages/posts-detail/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostsDetail = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _posts = __webpack_require__(/*! ../../actions/posts */ "./src/actions/posts.js");

var _posts2 = __webpack_require__(/*! ../../reducers/posts */ "./src/reducers/posts.js");

var _shell = __webpack_require__(/*! ../../components/shell */ "./src/components/shell.js");

var _shell2 = _interopRequireDefault(_shell);

var _meta = __webpack_require__(/*! ../../components/meta */ "./src/components/meta/index.js");

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostsDetail = exports.PostsDetail = function (_React$Component) {
  _inherits(PostsDetail, _React$Component);

  _createClass(PostsDetail, null, [{
    key: 'loadData',


    // 服务端渲染
    // 加载需要在服务端渲染的数据
    value: function loadData(_ref) {
      var store = _ref.store,
          match = _ref.match,
          userinfo = _ref.userinfo;

      return new Promise(function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
          var id, _ref3, _ref4, err, data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  id = match.params.id;
                  _context.next = 3;
                  return (0, _posts.loadPostsList)({
                    id: id,
                    filter: {
                      _id: id,
                      deleted: false,
                      weaken: false
                    }
                  })(store.dispatch, store.getState);

                case 3:
                  _ref3 = _context.sent;
                  _ref4 = _slicedToArray(_ref3, 2);
                  err = _ref4[0];
                  data = _ref4[1];


                  // 没有找到帖子，设置页面 http code 为404
                  if (err || data.length == 0) {
                    resolve({ code: 404 });
                  } else {
                    resolve({ code: 200 });
                  }

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }]);

  function PostsDetail(props) {
    _classCallCheck(this, PostsDetail);

    var _this = _possibleConstructorReturn(this, (PostsDetail.__proto__ || Object.getPrototypeOf(PostsDetail)).call(this, props));

    _this.state = {
      notFoundPgae: false
    };
    return _this;
  }

  _createClass(PostsDetail, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // 服务端渲染，404内容显示处理
      var _props = this.props,
          list = _props.list,
          notFoundPgae = _props.notFoundPgae;

      if (list && list.data && !list.data[0]) {
        this.state.notFoundPgae = true;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var id, _props2, list, loadPostsList;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = this.props.match.params.id;
                _props2 = this.props, list = _props2.list, loadPostsList = _props2.loadPostsList;

                if (!(!list || !list.data)) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 5;
                return this.props.loadPostsList({
                  id: id,
                  filter: {
                    _id: id
                  }
                });

              case 5:

                this.componentWillMount();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref5.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var list = this.props.list;

      var _ref6 = list || {},
          loading = _ref6.loading,
          data = _ref6.data;

      var posts = data && data[0] ? data[0] : null;
      var notFoundPgae = this.state.notFoundPgae;

      // 404 处理

      if (notFoundPgae) {
        return '404 Not Found';
      }

      return _react2.default.createElement(
        'div',
        null,
        loading ? _react2.default.createElement(
          'div',
          null,
          'loading...'
        ) : null,
        _react2.default.createElement(_meta2.default, { title: posts ? posts.title : '加载中...' }),
        posts ? _react2.default.createElement(
          'div',
          { className: 'jumbotron' },
          _react2.default.createElement(
            'h1',
            { className: 'display-4' },
            posts.title
          ),
          _react2.default.createElement(
            'p',
            { className: 'lead' },
            posts.topic_id.name
          ),
          _react2.default.createElement('hr', { className: 'my-4' }),
          posts.content_html ? _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: posts.content_html } }) : null
        ) : null
      );
    }
  }]);

  return PostsDetail;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
  var id = props.match.params.id;

  return {
    list: (0, _posts2.getPostsListByListId)(state, id)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    loadPostsList: (0, _redux.bindActionCreators)(_posts.loadPostsList, dispatch)
  };
};

exports.PostsDetail = PostsDetail = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PostsDetail);

exports.default = (0, _shell2.default)(PostsDetail);

/***/ }),

/***/ "./src/pages/sign-in/images/react-icon.png":
/*!*************************************************!*\
  !*** ./src/pages/sign-in/images/react-icon.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "14c89a41e5154b4a2920df0115337ad5.png";

/***/ }),

/***/ "./src/pages/sign-in/index.js":
/*!************************************!*\
  !*** ./src/pages/sign-in/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignIn = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _redux = __webpack_require__(/*! redux */ "redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _user = __webpack_require__(/*! ../../actions/user */ "./src/actions/user.js");

var _reactCssModules = __webpack_require__(/*! react-css-modules */ "react-css-modules");

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _style = __webpack_require__(/*! ./style.scss */ "./src/pages/sign-in/style.scss");

var _style2 = _interopRequireDefault(_style);

var _shell = __webpack_require__(/*! ../../components/shell */ "./src/components/shell.js");

var _shell2 = _interopRequireDefault(_shell);

var _meta = __webpack_require__(/*! ../../components/meta */ "./src/components/meta/index.js");

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignIn = exports.SignIn = function (_React$Component) {
  _inherits(SignIn, _React$Component);

  function SignIn(props) {
    _classCallCheck(this, SignIn);

    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));

    _this.state = {};
    _this.submit = _this.submit.bind(_this);
    return _this;
  }

  _createClass(SignIn, [{
    key: 'submit',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var nickname, signIn, _ref2, _ref3, err, success;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                nickname = this.refs.nickname;
                signIn = this.props.signIn;

                if (nickname.value) {
                  _context.next = 6;
                  break;
                }

                nickname.focus();
                return _context.abrupt('return', false);

              case 6:
                _context.next = 8;
                return signIn({ nickname: nickname.value });

              case 8:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                err = _ref3[0];
                success = _ref3[1];


                if (success) {
                  window.location.href = '/';
                }

                return _context.abrupt('return', false);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit(_x) {
        return _ref.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { styleName: 'container', className: 'text-center' },
        _react2.default.createElement(_meta2.default, { title: 'React\u540C\u6784\u811A\u624B\u67B6' }),
        _react2.default.createElement(
          'form',
          { className: 'form-signin', onSubmit: this.submit },
          _react2.default.createElement('div', { styleName: 'icon' }),
          _react2.default.createElement(
            'h1',
            { className: 'h3 mb-3 font-weight-normal' },
            'React\u540C\u6784\u811A\u624B\u67B6'
          ),
          _react2.default.createElement('input', { type: 'text', ref: 'nickname', className: 'form-control mb-3', placeholder: '\u8BF7\u8F93\u5165\u6635\u79F0' }),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-lg btn-primary btn-block', type: 'submit' },
            '\u767B\u5F55'
          )
        )
      );
    }
  }]);

  return SignIn;
}(_react2.default.Component);

exports.SignIn = SignIn = (0, _reactCssModules2.default)(SignIn, _style2.default);

SignIn.propTypes = {
  signIn: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signIn: (0, _redux.bindActionCreators)(_user.signIn, dispatch)
  };
};

exports.SignIn = SignIn = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignIn));

exports.default = (0, _shell2.default)(SignIn);

/***/ }),

/***/ "./src/pages/sign-in/style.scss":
/*!**************************************!*\
  !*** ./src/pages/sign-in/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "._3EGm54f5{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#343a40}._3EGm54f5>form{margin-top:10%;color:#fff}._3EGm54f5 ._8v9KQQGX{background-image:url(" + __webpack_require__(/*! ./images/react-icon.png */ "./src/pages/sign-in/images/react-icon.png") + ");height:120px;background-size:contain;background-position:50%;background-repeat:no-repeat;margin:0 0 20px}.form-signin{width:100%;max-width:330px;padding:15px;margin:0 auto}.form-signin .checkbox{font-weight:400}.form-signin .form-control{position:relative;box-sizing:border-box;height:auto;padding:10px;font-size:16px}.form-signin .form-control:focus{z-index:2}.form-signin input[type=email]{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-signin input[type=password]{margin-bottom:10px;border-top-left-radius:0;border-top-right-radius:0}", "", {"version":3,"sources":["/Users/wuseijian/Documents/GitHub/react-starter/src/pages/sign-in/style.scss"],"names":[],"mappings":"AAAA,WACE,kBAAmB,AACnB,MAAS,AACT,OAAU,AACV,WAAY,AACZ,YAAa,AACb,wBAA0B,CAAE,AAE9B,gBACE,eAAgB,AAChB,UAAY,CAAE,AAEhB,sBACE,+CAA+C,AAC/C,aAAc,AACd,wBAAyB,AACzB,wBAA4B,AAC5B,4BAA6B,AAC7B,eAAmB,CAAE,AAEvB,aACE,WAAY,AACZ,gBAAiB,AACjB,aAAc,AACd,aAAe,CAAE,AAEnB,uBACE,eAAiB,CAAE,AAErB,2BACE,kBAAmB,AACnB,sBAAuB,AACvB,YAAa,AACb,aAAc,AACd,cAAgB,CAAE,AAEpB,iCACE,SAAW,CAAE,AAEf,+BACE,mBAAoB,AACpB,6BAA8B,AAC9B,2BAA6B,CAAE,AAEjC,kCACE,mBAAoB,AACpB,yBAA0B,AAC1B,yBAA2B,CAAE","file":"style.scss","sourcesContent":[".container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #343a40; }\n\n.container > form {\n  margin-top: 10%;\n  color: #fff; }\n\n.container .icon {\n  background-image: url(./images/react-icon.png);\n  height: 120px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin: 0 0 20px 0; }\n\n:global .form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n:global .form-signin .checkbox {\n  font-weight: 400; }\n\n:global .form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n:global .form-signin .form-control:focus {\n  z-index: 2; }\n\n:global .form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n:global .form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "_3EGm54f5",
	"icon": "_8v9KQQGX"
};

/***/ }),

/***/ "./src/pages/topics/index.js":
/*!***********************************!*\
  !*** ./src/pages/topics/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Topics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _shell = __webpack_require__(/*! ../../components/shell */ "./src/components/shell.js");

var _shell2 = _interopRequireDefault(_shell);

var _meta = __webpack_require__(/*! ../../components/meta */ "./src/components/meta/index.js");

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topics = exports.Topics = function (_React$Component) {
  _inherits(Topics, _React$Component);

  function Topics(props) {
    _classCallCheck(this, Topics);

    return _possibleConstructorReturn(this, (Topics.__proto__ || Object.getPrototypeOf(Topics)).call(this, props));
  }

  _createClass(Topics, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_meta2.default, { title: '\u8BDD\u9898' }),
        _react2.default.createElement(
          'h2',
          null,
          'Topics'
        )
      );
    }
  }]);

  return Topics;
}(_react2.default.Component);

exports.default = (0, _shell2.default)(Topics);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialStateJSON = undefined;

var _redux = __webpack_require__(/*! redux */ "redux");

var _merge = __webpack_require__(/*! lodash/merge */ "lodash/merge");

var _merge2 = _interopRequireDefault(_merge);

var _user = __webpack_require__(/*! ./user */ "./src/reducers/user.js");

var _user2 = _interopRequireDefault(_user);

var _posts = __webpack_require__(/*! ./posts */ "./src/reducers/posts.js");

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var states = {
  user: _user2.default,
  posts: _posts2.default

  // 创建一个无数据的states，用于在服务端初始redux数据
};var _states = {};
for (var i in states) {
  _states[i] = (0, _merge2.default)({}, states[i](), {});
}
_states = JSON.stringify(_states);
var initialStateJSON = exports.initialStateJSON = _states;

// reducer
exports.default = (0, _redux.combineReducers)(states);

/***/ }),

/***/ "./src/reducers/posts.js":
/*!*******************************!*\
  !*** ./src/reducers/posts.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostsListByListId = undefined;
exports.default = posts;

var _merge = __webpack_require__(/*! lodash/merge */ "lodash/merge");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

function posts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {

    case 'SET_POSTS':
      return (0, _merge2.default)({}, action.state, {});

    case 'SET_POSTS_LIST_BY_NAME':
      var id = action.id,
          data = action.data;

      state[id] = data;
      return (0, _merge2.default)({}, state, {});

    default:
      return state;
  }
}

var getPostsListByListId = exports.getPostsListByListId = function getPostsListByListId(state, id) {
  return state.posts[id] ? state.posts[id] : {};
};

/***/ }),

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = exports.getAccessToken = undefined;
exports.default = user;

var _merge = __webpack_require__(/*! lodash/merge */ "lodash/merge");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  accessToken: '',
  userinfo: null
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  switch (action.type) {

    case 'SAVE_ACCESS_TOKEN':
      state.accessToken = action.accessToken;
      return (0, _merge2.default)({}, state, {});

    case 'SAVE_USERINFO':
      state.userinfo = action.userinfo;
      return (0, _merge2.default)({}, state, {});

    default:
      return state;
  }
}

// 获取 access token
var getAccessToken = exports.getAccessToken = function getAccessToken(state) {
  return state.user.accessToken;
};

// 获取用户信息
var getUserInfo = exports.getUserInfo = function getUserInfo(state) {
  return state.user.userinfo || {};
};

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _generateAsyncComponent = __webpack_require__(/*! ../components/generateAsyncComponent.js */ "./src/components/generateAsyncComponent.js");

var _head = __webpack_require__(/*! ../components/head */ "./src/components/head/index.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 创建路由
 * @param  {Object} userinfo 用户信息，以此判断用户是否是登录状态，并控制页面访问权限
 * @return {[type]}
 */


// 生成异步加载组件
exports.default = function (user) {

  // 登录用户才能访问
  var requireAuth = function requireAuth(Layout, props) {
    if (!user) {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/sign-in' });
    } else {
      return _react2.default.createElement(Layout, props);
    }
  };

  // 游客才能访问
  var requireTourists = function requireTourists(Layout, props) {
    if (user) {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
    } else {
      return _react2.default.createElement(Layout, props);
    }
  };

  // 大家都可以访问
  var triggerEnter = function triggerEnter(Layout, props) {
    return _react2.default.createElement(Layout, props);
  };

  // 路由数组
  var routeArr = [{
    path: '/',
    exact: true,
    head: _head2.default,
    component: (0, _generateAsyncComponent.asyncRouteComponent)({
      loader: function loader() {
        return Promise.resolve().then(function () {
          return __webpack_require__(/*! ../pages/home */ "./src/pages/home/index.js");
        });
      }
    }),
    enter: requireAuth
  }, {
    path: '/posts/:id',
    exact: true,
    head: _head2.default,
    component: (0, _generateAsyncComponent.asyncRouteComponent)({
      loader: function loader() {
        return Promise.resolve().then(function () {
          return __webpack_require__(/*! ../pages/posts-detail */ "./src/pages/posts-detail/index.js");
        });
      }
    }),
    enter: requireAuth
  }, {
    path: '/topics',
    exact: true,
    head: _head2.default,
    component: (0, _generateAsyncComponent.asyncRouteComponent)({
      loader: function loader() {
        return Promise.resolve().then(function () {
          return __webpack_require__(/*! ../pages/topics */ "./src/pages/topics/index.js");
        });
      }
    }),
    enter: requireAuth
  }, {
    path: '/sign-in',
    exact: true,
    // head: Head,
    component: (0, _generateAsyncComponent.asyncRouteComponent)({
      loader: function loader() {
        return Promise.resolve().then(function () {
          return __webpack_require__(/*! ../pages/sign-in */ "./src/pages/sign-in/index.js");
        });
      }
    }),
    enter: requireTourists
  }, {
    path: '**',
    head: _head2.default,
    component: (0, _generateAsyncComponent.asyncRouteComponent)({
      loader: function loader() {
        return Promise.resolve().then(function () {
          return __webpack_require__(/*! ../pages/not-found */ "./src/pages/not-found/index.js");
        });
      }
    }),
    enter: triggerEnter
  }];

  var router = function router() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        routeArr.map(function (route, index) {
          return _react2.default.createElement(_reactRouterDom.Route, {
            key: index,
            path: route.path,
            exact: route.exact,
            component: route.head
          });
        })
      ),
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        routeArr.map(function (route, index) {
          if (route.component) {
            return _react2.default.createElement(_reactRouterDom.Route, {
              key: index,
              path: route.path,
              exact: route.exact,
              component: function component(props) {
                return route.enter(route.component, props);
              }
            });
          }
        })
      )
    );
  };

  return {
    list: routeArr,
    dom: router
  };
};

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// var config = require('../../config');
// require('babel-register');
// require('babel-polyfill');
// require('precss'),
// require('autoprefixer'),
/*
require('css-modules-require-hook')({
  generateScopedName: config.class_scoped_name,
  extensions: ['.scss', '.css']
});
*/
__webpack_require__(/*! ./server */ "./src/server/server.js");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _compression = __webpack_require__(/*! compression */ "compression");

var _compression2 = _interopRequireDefault(_compression);

var _reactDocumentMeta = __webpack_require__(/*! react-document-meta */ "react-document-meta");

var _reactDocumentMeta2 = _interopRequireDefault(_reactDocumentMeta);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _store = __webpack_require__(/*! ../store */ "./src/store/index.js");

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(/*! ../router */ "./src/router/index.js");

var _router2 = _interopRequireDefault(_router);

var _reducers = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");

var _user = __webpack_require__(/*! ../actions/user */ "./src/actions/user.js");

var _config = __webpack_require__(/*! ../../config */ "./config/index.js");

var _sign = __webpack_require__(/*! ./sign */ "./src/server/sign.js");

var _sign2 = _interopRequireDefault(_sign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 服务端渲染依赖


// 路由配置

// 路由组件

// 路由初始化的redux内容


// 配置


// import webpackHotMiddleware from './webpack-hot-middleware';

var app = (0, _express2.default)();

// ***** 注意 *****
// 不要改变如下代码执行位置，否则热更新会失效
// 开发环境开启修改代码后热更新
// if (process.env.NODE_ENV === 'development') webpackHotMiddleware(app);


app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _cookieParser2.default)());
app.use((0, _compression2.default)());
app.use(_express2.default.static('./dist'));

// console.log(__dirname + 'dist');

// 登录、退出
app.use('/sign', (0, _sign2.default)());

app.get('*', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var store, user, accessToken, router, _route, _match, context, loadAsyncRouterComponent, _Router, html, reduxState, meta;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            store = (0, _store2.default)(JSON.parse(_reducers.initialStateJSON));
            user = null;
            accessToken = req.cookies[_config.auth_cookie_name] || '';

            // 验证 token 是否有效

            if (accessToken) {
              // 这里可以去查询 accessToken 是否有效
              // your code
              // 这里假设如果有 accessToken ，那么就是登录用户，将他保存到redux中
              user = { id: '001', nickname: accessToken };
              // 储存用户信息
              store.dispatch((0, _user.saveUserInfo)({ userinfo: user }));
              // 储存access token
              store.dispatch((0, _user.saveAccessToken)({ accessToken: accessToken }));
            }

            router = (0, _router2.default)(user);
            _route = null, _match = null;


            router.list.some(function (route) {
              var match = (0, _reactRouter.matchPath)(req.url.split('?')[0], route);
              if (match && match.path) {
                _route = route;
                _match = match;
                return true;
              }
            });

            context = {
              // code
              // url
            };

            // 加载异步路由组件

            loadAsyncRouterComponent = function loadAsyncRouterComponent() {
              return new Promise(function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve) {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _route.component.load(function () {
                            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ResolvedComponent) {
                              var loadData, result;
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      loadData = ResolvedComponent.WrappedComponent.defaultProps.loadData;
                                      _context.next = 3;
                                      return loadData({ store: store, match: _match });

                                    case 3:
                                      result = _context.sent;

                                      resolve(result);

                                    case 5:
                                    case 'end':
                                      return _context.stop();
                                  }
                                }
                              }, _callee, undefined);
                            }));

                            return function (_x4) {
                              return _ref3.apply(this, arguments);
                            };
                          }());

                        case 2:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, undefined);
                }));

                return function (_x3) {
                  return _ref2.apply(this, arguments);
                };
              }());
            };

            if (!_route.component.load) {
              _context3.next = 13;
              break;
            }

            _context3.next = 12;
            return loadAsyncRouterComponent();

          case 12:
            context = _context3.sent;

          case 13:

            // 获取路由dom
            _Router = router.dom;
            html = _server2.default.renderToString(_react2.default.createElement(
              _reactRedux.Provider,
              { store: store },
              _react2.default.createElement(
                _reactRouter.StaticRouter,
                { location: req.url, context: context },
                _react2.default.createElement(_Router, null)
              )
            ));
            reduxState = JSON.stringify(store.getState()).replace(/</g, '\\x3c');

            // 获取页面的meta，嵌套到模版中

            meta = _reactDocumentMeta2.default.renderAsHTML();


            if (context.code == 301) {
              res.writeHead(301, {
                Location: context.url
              });
            } else {
              res.status(context.code);
              res.render('../dist/index.ejs', { html: html, reduxState: reduxState, meta: meta });
            }

            // res.render('../dist/index.ejs', { html, reduxState, meta });
            res.end();

          case 19:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

app.listen(_config.port);
console.log('server started on port ' + _config.port);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./src/server/sign.js":
/*!****************************!*\
  !*** ./src/server/sign.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _config = __webpack_require__(/*! ../../config */ "./config/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (安全实施) 服务端储存 token cookie 设置成httpOnly
exports.default = function () {

  var router = _express2.default.Router();

  router.post('/in', function (req, res) {

    var nickname = req.body.nickname;

    res.cookie(_config.auth_cookie_name, nickname, { path: '/', httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 30 });
    res.send({ success: true });
  });

  router.post('/out', function (req, res) {
    res.clearCookie(_config.auth_cookie_name);
    res.send({ success: true });
  });

  return router;
};

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "redux-logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = [_reduxThunk2.default];

// 如果是在客户端环境，并且是开发模式，那么打印redux日志
if (!Object({"NODE_ENV":undefined}).__NODE__ && false) middleware.push((0, _reduxLogger.createLogger)());

function configureStore(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware)));
  return store;
}

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi @babel/polyfill ./src/server/index ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./src/server/index */"./src/server/index.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-css-modules":
/*!************************************!*\
  !*** external "react-css-modules" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-css-modules");

/***/ }),

/***/ "react-document-meta":
/*!**************************************!*\
  !*** external "react-document-meta" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-document-meta");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map

webpackJsonp([2],{763:/*!********************************!*\
  !*** ./src/containers/Post.js ***!
  \********************************/
function(module,exports,__webpack_require__){eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(/*! babel-runtime/helpers/jsx */ 47);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 68);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 69);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ && __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 70);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ && __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 72);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ && __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 71);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(/*! react */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __WEBPACK_IMPORTED_MODULE_6_react__ && __WEBPACK_IMPORTED_MODULE_6_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_6_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_6_react__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_6_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_6_react___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__(/*! ../components/Header */ 330);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__(/*! react-redux */ 92);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __WEBPACK_IMPORTED_MODULE_8_react_redux__ && __WEBPACK_IMPORTED_MODULE_8_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_8_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_8_react_redux__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_8_react_redux___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_8_react_redux___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_fetchData__ = __webpack_require__(/*! ../lib/fetchData */ 331);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__redux_modules_posts__ = __webpack_require__(/*! ../redux/modules/posts */ 202);\n\n\n\n\n\n\n\n\n\n\n\n\nvar Post = function (_Component) {\n  /* harmony import */__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default.a.bind()(Post, _Component);\n\n  function Post() {\n    /* harmony import */__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default.a.bind()(this, Post);\n\n    return /* harmony import */__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a.bind()(this, /* harmony import */__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default.a.bind()(Post).apply(this, arguments));\n  }\n\n  /* harmony import */__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default.a.bind()(Post, [{\n    key: 'render',\n    value: function render() {\n      var post = this.props.post;\n      if (!post) return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('div', {}, void 0, 'Loading...');\n\n      return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('div', {}, void 0, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_7__components_Header__[\"a\"], {\n        bgStyle: { backgroundImage: \"url('/img/post-bg.jpg')\" },\n        headerClass: 'post-heading'\n      }, void 0, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('h1', {}, void 0, post.title), /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('span', {\n        className: 'meta'\n      }, void 0, 'Posted by ', /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('a', {\n        href: '#'\n      }, void 0, 'Start Bootstrap'), ' on August 24, 2014')), /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('div', {\n        className: 'container'\n      }, void 0, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('div', {\n        className: 'row'\n      }, void 0, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('div', {\n        className: 'col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'\n      }, void 0, post.body))));\n    }\n  }]);\n\n  return Post;\n}(/* harmony import */__WEBPACK_IMPORTED_MODULE_6_react__[\"Component\"]);\n\nfunction mapState(state, props) {\n  return {\n    counter: state.counter,\n    post: state.entities.posts && state.entities.posts[props.params.id]\n  };\n}\n\nvar Connected = /* harmony import */__WEBPACK_IMPORTED_MODULE_8_react_redux__[\"connect\"].bind()(mapState)(Post);\n\nvar Fetched = /* harmony import */__WEBPACK_IMPORTED_MODULE_9__lib_fetchData__[\"a\"].bind()(function prepareData(store) {\n  return store.dispatch(/* harmony import */__WEBPACK_IMPORTED_MODULE_10__redux_modules_posts__[\"a\"].bind()());\n})(Connected);\n\n/* harmony default export */ exports[\"default\"] = Fetched;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzYzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3N0ZXBfZmluYWwvZnJvbnR3ZWIvc3JjL2NvbnRhaW5lcnMvUG9zdC5qcz8zN2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBmZXRjaERhdGEgZnJvbSAnLi4vbGliL2ZldGNoRGF0YSc7XG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJy4uL3JlZHV4L21vZHVsZXMvcG9zdHMnO1xuXG5jbGFzcyBQb3N0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBvc3QgPSB0aGlzLnByb3BzLnBvc3Q7XG4gICAgaWYgKCEgcG9zdCkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIGJnU3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvaW1nL3Bvc3QtYmcuanBnJylcIn19XG4gICAgICAgIGhlYWRlckNsYXNzPSdwb3N0LWhlYWRpbmcnXG4gICAgICA+XG4gICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZXRhXCI+UG9zdGVkIGJ5IDxhIGhyZWY9XCIjXCI+U3RhcnQgQm9vdHN0cmFwPC9hPiBvbiBBdWd1c3QgMjQsIDIwMTQ8L3NwYW4+XG4gICAgICA8L0hlYWRlcj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1sZy1vZmZzZXQtMiBjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XG4gICAgICAgICAgICB7cG9zdC5ib2R5fVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+O1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlLCBwcm9wcykge1xuICByZXR1cm4ge1xuICAgIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXIsXG4gICAgcG9zdDogc3RhdGUuZW50aXRpZXMucG9zdHMgJiYgc3RhdGUuZW50aXRpZXMucG9zdHNbcHJvcHMucGFyYW1zLmlkXVxuICB9XG59XG5cbmNvbnN0IENvbm5lY3RlZCA9IGNvbm5lY3QobWFwU3RhdGUpKFBvc3QpO1xuXG5jb25zdCBGZXRjaGVkID0gZmV0Y2hEYXRhKGZ1bmN0aW9uIHByZXBhcmVEYXRhKHN0b3JlKSB7XG4gIHJldHVybiBzdG9yZS5kaXNwYXRjaChnZXRQb3N0cygpKVxufSkoQ29ubmVjdGVkKTtcblxuZXhwb3J0IGRlZmF1bHQgRmV0Y2hlZFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3RlcF9maW5hbC9mcm9udHdlYi9zcmMvY29udGFpbmVycy9Qb3N0LmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7O0FBR0E7O0FBQ0E7O0FBQ0E7QUFDQTs7OztBQWpCQTtBQUFBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==")}});
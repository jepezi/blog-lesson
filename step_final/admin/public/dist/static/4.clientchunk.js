webpackJsonp([4],{486:/*!************************************!*\
  !*** ./src/containers/Comments.js ***!
  \************************************/
function(module,exports,__webpack_require__){eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ = __webpack_require__(/*! babel-runtime/helpers/jsx */ 29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__ && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 72);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 73);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ && __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ 74);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ && __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 76);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ && __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 75);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(/*! react */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __WEBPACK_IMPORTED_MODULE_6_react__ && __WEBPACK_IMPORTED_MODULE_6_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_6_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_6_react__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_6_react___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_6_react___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router__ = __webpack_require__(/*! react-router */ 31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router___default = __WEBPACK_IMPORTED_MODULE_7_react_router__ && __WEBPACK_IMPORTED_MODULE_7_react_router__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_7_react_router__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_7_react_router__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_7_react_router___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_7_react_router___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__(/*! react-redux */ 30);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __WEBPACK_IMPORTED_MODULE_8_react_redux__ && __WEBPACK_IMPORTED_MODULE_8_react_redux__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_8_react_redux__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_8_react_redux__; }\n/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_8_react_redux___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_8_react_redux___default });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__redux_modules_comments__ = __webpack_require__(/*! ../redux/modules/comments */ 224);\n\n\n\n\n\n\n\n\n\n\n\nvar Comments = function (_Component) {\n  /* harmony import */__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default.a.bind()(Comments, _Component);\n\n  function Comments() {\n    /* harmony import */__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default.a.bind()(this, Comments);\n\n    return /* harmony import */__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a.bind()(this, /* harmony import */__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default.a.bind()(Comments).apply(this, arguments));\n  }\n\n  /* harmony import */__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default.a.bind()(Comments, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.dispatch(/* harmony import */__WEBPACK_IMPORTED_MODULE_9__redux_modules_comments__[\"a\"].bind()());\n    }\n  }, {\n    key: 'renderComments',\n    value: function renderComments() {\n      var _props = this.props;\n      var comments = _props.comments;\n      var posts = _props.posts;\n\n\n      if (!comments.length) {\n        return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('div', {}, void 0, 'No comments.');\n      }\n\n      return comments.map(function (comment, i) {\n        return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('div', {\n          style: { marginBottom: 20 }\n        }, comment.id, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('h3', {}, void 0, comment.body), /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('p', {}, void 0, 'by ', comment.name, ', in ', /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()(/* harmony import */__WEBPACK_IMPORTED_MODULE_7_react_router__[\"Link\"], {\n          to: '/posts/' + comment.post_id\n        }, void 0, posts[comment.post_id].title)));\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _props2 = this.props;\n      var isLoadingComments = _props2.isLoadingComments;\n      var comments = _props2.comments;\n\n\n      if (isLoadingComments) {\n        return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('div', {}, void 0, 'Loading...');\n      }\n\n      return /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('div', {}, void 0, /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('h1', {\n        style: { marginBottom: 40 }\n      }, void 0, 'All Comments'), /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('h2', {\n        style: { marginBottom: 20, color: '#999' }\n      }, void 0, comments.length, ' comments'), /* harmony import */__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_jsx___default.a.bind()('div', {}, void 0, this.renderComments()));\n    }\n  }]);\n\n  return Comments;\n}(/* harmony import */__WEBPACK_IMPORTED_MODULE_6_react__[\"Component\"]);\n\nfunction mapState(state) {\n  return {\n    comments: state.comments.ids.map(function (id) {\n      return state.entities.comments[id];\n    }),\n    posts: state.entities.posts,\n    isLoadingComments: state.comments.isLoading\n  };\n}\n/* harmony default export */ exports[\"default\"] = /* harmony import */__WEBPACK_IMPORTED_MODULE_8_react_redux__[\"connect\"].bind()(mapState)(Comments);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3N0ZXBfZmluYWwvYWRtaW4vc3JjL2NvbnRhaW5lcnMvQ29tbWVudHMuanM/NTM0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBnZXRDb21tZW50cyB9IGZyb20gJy4uL3JlZHV4L21vZHVsZXMvY29tbWVudHMnO1xuXG5jbGFzcyBDb21tZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZ2V0Q29tbWVudHMoKSlcbiAgfVxuXG4gIHJlbmRlckNvbW1lbnRzKCkge1xuICAgIGNvbnN0IHsgY29tbWVudHMsIHBvc3RzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFjb21tZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiA8ZGl2Pk5vIGNvbW1lbnRzLjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tbWVudHMubWFwKChjb21tZW50LCBpKSA9PiB7XG4gICAgICByZXR1cm4gPGRpdiBrZXk9e2NvbW1lbnQuaWR9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMH19PlxuICAgICAgICA8aDM+e2NvbW1lbnQuYm9keX08L2gzPlxuICAgICAgICA8cD5ieSB7Y29tbWVudC5uYW1lfSwgaW4gPExpbmsgdG89e2AvcG9zdHMvJHtjb21tZW50LnBvc3RfaWR9YH0+e3Bvc3RzW2NvbW1lbnQucG9zdF9pZF0udGl0bGV9PC9MaW5rPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0xvYWRpbmdDb21tZW50cywgY29tbWVudHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNMb2FkaW5nQ29tbWVudHMpIHtcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdj5cbiAgICAgIDxoMSBzdHlsZT17e21hcmdpbkJvdHRvbTogNDB9fT5BbGwgQ29tbWVudHM8L2gxPlxuICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAyMCwgY29sb3I6ICcjOTk5J319Pntjb21tZW50cy5sZW5ndGh9IGNvbW1lbnRzPC9oMj5cbiAgICAgIDxkaXY+e3RoaXMucmVuZGVyQ29tbWVudHMoKX08L2Rpdj5cbiAgICA8L2Rpdj47XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBjb21tZW50czogc3RhdGUuY29tbWVudHMuaWRzLm1hcChpZCA9PiBzdGF0ZS5lbnRpdGllcy5jb21tZW50c1tpZF0pLFxuICAgIHBvc3RzOiBzdGF0ZS5lbnRpdGllcy5wb3N0cyxcbiAgICBpc0xvYWRpbmdDb21tZW50czogc3RhdGUuY29tbWVudHMuaXNMb2FkaW5nXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShDb21tZW50cyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzdGVwX2ZpbmFsL2FkbWluL3NyYy9jb250YWluZXJzL0NvbW1lbnRzLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBSEE7Ozs7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7O0FBQ0E7QUFBQTs7OztBQTdCQTtBQUFBO0FBQ0E7QUFrQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9")}});
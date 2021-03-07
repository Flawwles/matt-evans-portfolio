webpackHotUpdate_N_E("pages/system",{

/***/ "./components/ExampleDemo/ExampleDemo.js":
/*!***********************************************!*\
  !*** ./components/ExampleDemo/ExampleDemo.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ExampleDemo; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsx_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsx-to-string */ \"./node_modules/jsx-to-string/lib/index.js\");\n/* harmony import */ var jsx_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsx_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ \"./node_modules/react-syntax-highlighter/dist/esm/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ \"./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/index.js\");\n/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/mevans/Dev/matt-evans-2020/components/ExampleDemo/ExampleDemo.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar WrappedChildren = function WrappedChildren(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: children\n  }, void 0, false);\n};\n\n_c = WrappedChildren;\nvar ExampleCompoent = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"ExampleDemo__ExampleCompoent\",\n  componentId: \"ru2wuv-0\"\n})([\"--border-radius:0.2rem;position:relative;width:100%;background:#f1f3f5;min-height:100px;height:auto;border:1px solid rgb(187,187,187);border-radius:var(--border-radius);margin-bottom:4rem;.example{box-sizing:border-box;background:white;width:100%;content:\\\" \\\";display:block;position:relative;border-radius:var(--border-radius);padding:1.5rem 3rem 1.5rem 1.5rem;min-width:15rem;max-width:100%;}.resize{position:absolute;right:0;top:0;height:100%;width:24px;display:flex;align-items:center;justify-content:center;border-top-right-radius:var(--border-radius);box-shadow:0 0 0 1px rgb(187,187,187);transition:all 0.3s ease;cursor:ew-resize;user-select:none;border:none;background:transparent;}.code-button{background:white;border-bottom-left-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border:none;border-top:1px solid rgb(187,187,187);display:flex;width:100%;justify-content:center;padding:0.5rem 1rem;cursor:pointer !important;outline:none;}.code-button:focus{outline:none;box-shadow:0 0 0 4px #a5d8ff33,0 0 1px 1px #4dabf7;border-color:#4dabf7;background:#a5d8ff33;}.resize > span{user-select:none;}.example img{max-width:100%;}.resize:focus{outline:none;box-shadow:0 0 0 4px #a5d8ff33,0 0 1px 1px #4dabf7;border-color:#4dabf7;background:#a5d8ff33;}.resize:focus .icon-fill{fill:#4dabf7;}.code{padding:1rem 0;background:rgb(43,48,59);margin:0 1rem;overflow:hidden;transition:padding 0.2s ease;}.code.hidden{height:0;padding:0;}\"]);\n_c2 = ExampleCompoent;\nfunction ExampleDemo(_ref2) {\n  _s();\n\n  var children = _ref2.children;\n  var resize = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var example = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var code = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      startingWidth = _useState[0],\n      setStartingWidth = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      startX = _useState2[0],\n      setStartX = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      codeVisible = _useState3[0],\n      setCodeVisible = _useState3[1]; //Get ready to start dragging\n\n\n  var handleResizeStart = function handleResizeStart(e) {\n    e.preventDefault();\n    resize.current.focus();\n    setStartX(e.clientX);\n    setStartingWidth(example.current.offsetWidth);\n    console.log('start');\n    document.addEventListener(\"mousemove\", dragMove);\n  };\n\n  var handleResizeStop = function handleResizeStop() {\n    document.removeEventListener(\"mousemove\", dragMove);\n    console.log('stop');\n  };\n\n  var dragMove = function dragMove(e) {\n    if (e.clientX) {\n      example.current.style.width = startingWidth + e.clientX - startX + \"px\";\n    } else {\n      example.style.width = startingWidth + e.changedTouches[0].pageX - startX + \"px\";\n    }\n  };\n\n  var handleCodeButtonClick = function handleCodeButtonClick() {\n    setCodeVisible(!codeVisible);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    resize.current.addEventListener(\"mousedown\", handleResizeStart);\n    document.addEventListener('mouseup', handleResizeStop);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ExampleCompoent, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"example\",\n      ref: example,\n      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"resize\",\n        ref: resize,\n        tabIndex: \"0\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            width: \"32\",\n            height: \"32\",\n            viewBox: \"0 0 32 32\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M14 11C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11ZM14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15ZM15 18C15 18.5523 14.5523 19 14 19C13.4477 19 13 18.5523 13 18C13 17.4477 13.4477 17 14 17C14.5523 17 15 17.4477 15 18ZM14 23C14.5523 23 15 22.5523 15 22C15 21.4477 14.5523 21 14 21C13.4477 21 13 21.4477 13 22C13 22.5523 13.4477 23 14 23ZM19 10C19 10.5523 18.5523 11 18 11C17.4477 11 17 10.5523 17 10C17 9.44772 17.4477 9 18 9C18.5523 9 19 9.44772 19 10ZM18 15C18.5523 15 19 14.5523 19 14C19 13.4477 18.5523 13 18 13C17.4477 13 17 13.4477 17 14C17 14.5523 17.4477 15 18 15ZM19 18C19 18.5523 18.5523 19 18 19C17.4477 19 17 18.5523 17 18C17 17.4477 17.4477 17 18 17C18.5523 17 19 17.4477 19 18ZM18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21C17.4477 21 17 21.4477 17 22C17 22.5523 17.4477 23 18 23Z\",\n              fill: \"black\",\n              className: \"icon-fill\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 176,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 169,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 168,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"code-button\",\n      onClick: handleCodeButtonClick,\n      children: \"See code\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: codeVisible ? \"code hidden\" : 'code',\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        language: \"javascript\",\n        style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_3__[\"ocean\"],\n        children: jsx_to_string__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(WrappedChildren, {\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 190,\n          columnNumber: 34\n        }, this), {\n          displayName: ''\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 189,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 164,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ExampleDemo, \"dp3xtU1prbhqOUyZU7XEcJiGfZw=\");\n\n_c3 = ExampleDemo;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"WrappedChildren\");\n$RefreshReg$(_c2, \"ExampleCompoent\");\n$RefreshReg$(_c3, \"ExampleDemo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeGFtcGxlRGVtby9FeGFtcGxlRGVtby5qcz9jOWM0Il0sIm5hbWVzIjpbIldyYXBwZWRDaGlsZHJlbiIsImNoaWxkcmVuIiwiRXhhbXBsZUNvbXBvZW50Iiwic3R5bGVkIiwiZGl2IiwiRXhhbXBsZURlbW8iLCJyZXNpemUiLCJ1c2VSZWYiLCJleGFtcGxlIiwiY29kZSIsInVzZVN0YXRlIiwic3RhcnRpbmdXaWR0aCIsInNldFN0YXJ0aW5nV2lkdGgiLCJzdGFydFgiLCJzZXRTdGFydFgiLCJjb2RlVmlzaWJsZSIsInNldENvZGVWaXNpYmxlIiwiaGFuZGxlUmVzaXplU3RhcnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwiZm9jdXMiLCJjbGllbnRYIiwib2Zmc2V0V2lkdGgiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhZ01vdmUiLCJoYW5kbGVSZXNpemVTdG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwid2lkdGgiLCJjaGFuZ2VkVG91Y2hlcyIsInBhZ2VYIiwiaGFuZGxlQ29kZUJ1dHRvbkNsaWNrIiwidXNlRWZmZWN0Iiwib2NlYW4iLCJqc3hUb1N0cmluZyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0I7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxzQkFDcEI7QUFBQSxjQUNLQTtBQURMLG1CQURvQjtBQUFBLENBQXhCOztLQUFNRCxlO0FBT04sSUFBTUUsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDI3Q0FBckI7TUFBTUYsZTtBQW9HUyxTQUFTRyxXQUFULFFBQWtDO0FBQUE7O0FBQUEsTUFBWEosUUFBVyxTQUFYQSxRQUFXO0FB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QUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQXVCSTtBQUFRLGVBQVMsRUFBQyxhQUFsQjtBQUFnQyxhQUFPLEVBQUU2QixxQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2QkosZUF3Qkk7QUFBSyxlQUFTLEVBQUdwQixXQUFXLEdBQUcsYUFBSCxHQUFtQixNQUEvQztBQUFBLDZCQUNJLHFFQUFDLGdFQUFEO0FBQW1CLGdCQUFRLEVBQUMsWUFBNUI7QUFBeUMsYUFBSyxFQUFFc0IsbUZBQWhEO0FBQUEsa0JBQ0tDLG9EQUFXLGVBQUMscUVBQUMsZUFBRDtBQUFBLG9CQUFrQnJDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUQsRUFBZ0Q7QUFDeERzQyxxQkFBVyxFQUFFO0FBRDJDLFNBQWhEO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUNIOztHQW5GdUJsQyxXOztNQUFBQSxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9FeGFtcGxlRGVtby9FeGFtcGxlRGVtby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqc3hUb1N0cmluZyBmcm9tICdqc3gtdG8tc3RyaW5nJztcbmltcG9ydCBTeW50YXhIaWdobGlnaHRlciBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXInO1xuaW1wb3J0IHsgb2NlYW4gfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL2hsanMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuY29uc3QgV3JhcHBlZENoaWxkcmVuID0gKHtjaGlsZHJlbn0pID0+IChcbiAgICA8PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC8+XG4pXG5cblxuY29uc3QgRXhhbXBsZUNvbXBvZW50ID0gc3R5bGVkLmRpdmBcblxuICAtLWJvcmRlci1yYWRpdXM6IDAuMnJlbTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjFmM2Y1O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg3LCAxODcsIDE4Nyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuXG5cbiAgLmV4YW1wbGUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtIDEuNXJlbSAxLjVyZW07XG4gICAgbWluLXdpZHRoOiAxNXJlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucmVzaXplIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2IoMTg3LCAxODcsIDE4Nyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuY29kZS1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxODcsIDE4NywgMTg3KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jb2RlLWJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCAjYTVkOGZmMzMsIDAgMCAxcHggMXB4ICM0ZGFiZjc7XG4gIGJvcmRlci1jb2xvcjogIzRkYWJmNztcbiAgYmFja2dyb3VuZDogI2E1ZDhmZjMzO1xufVxuXG4ucmVzaXplID4gc3BhbiB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZXhhbXBsZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5yZXNpemU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCA0cHggI2E1ZDhmZjMzLCAwIDAgMXB4IDFweCAjNGRhYmY3O1xuICBib3JkZXItY29sb3I6ICM0ZGFiZjc7XG4gIGJhY2tncm91bmQ6ICNhNWQ4ZmYzMztcbn1cblxuLnJlc2l6ZTpmb2N1cyAuaWNvbi1maWxsIHtcbiAgZmlsbDogIzRkYWJmNztcbn1cblxuLmNvZGUge1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJhY2tncm91bmQ6IHJnYig0MywgNDgsIDU5KTtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC4ycyBlYXNlO1xufVxuLmNvZGUuaGlkZGVuIHtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xufVxuICBcbmBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlRGVtbyAoe2NoaWxkcmVufSkge1xuXG4gICAgY29uc3QgcmVzaXplID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGV4YW1wbGUgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgY29kZSA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbc3RhcnRpbmdXaWR0aCwgc2V0U3RhcnRpbmdXaWR0aF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtzdGFydFgsIHNldFN0YXJ0WF0gPSB1c2VTdGF0ZSgwKVxuXG5cbiAgICBsZXQgW2NvZGVWaXNpYmxlLCBzZXRDb2RlVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgLy9HZXQgcmVhZHkgdG8gc3RhcnQgZHJhZ2dpbmdcbiAgICBjb25zdCBoYW5kbGVSZXNpemVTdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmVzaXplLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgc2V0U3RhcnRYKGUuY2xpZW50WCk7XG4gICAgICAgIHNldFN0YXJ0aW5nV2lkdGgoZXhhbXBsZS5jdXJyZW50Lm9mZnNldFdpZHRoKVxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYWdNb3ZlKTtcbiAgICB9XG5cblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZVN0b3AgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZHJhZ01vdmUpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3RvcCcpXG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ01vdmUgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jbGllbnRYKSB7XG4gICAgICAgICAgICBleGFtcGxlLmN1cnJlbnQuc3R5bGUud2lkdGggPSBzdGFydGluZ1dpZHRoICsgZS5jbGllbnRYIC0gc3RhcnRYICsgXCJweFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhhbXBsZS5zdHlsZS53aWR0aCA9XG4gICAgICAgICAgICBzdGFydGluZ1dpZHRoICsgZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIHN0YXJ0WCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDb2RlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldENvZGVWaXNpYmxlKCFjb2RlVmlzaWJsZSlcbiAgICB9XG5cbiAgICBcbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICAgICAgcmVzaXplLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVSZXNpemVTdGFydCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVSZXNpemVTdG9wKVxuICAgIH0pXG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEV4YW1wbGVDb21wb2VudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiIHJlZj17ZXhhbXBsZX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVzaXplXCIgcmVmPXtyZXNpemV9IHRhYkluZGV4PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMiAzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTQgMTFDMTQuNTUyMyAxMSAxNSAxMC41NTIzIDE1IDEwQzE1IDkuNDQ3NzIgMTQuNTUyMyA5IDE0IDlDMTMuNDQ3NyA5IDEzIDkuNDQ3NzIgMTMgMTBDMTMgMTAuNTUyMyAxMy40NDc3IDExIDE0IDExWk0xNCAxNUMxNC41NTIzIDE1IDE1IDE0LjU1MjMgMTUgMTRDMTUgMTMuNDQ3NyAxNC41NTIzIDEzIDE0IDEzQzEzLjQ0NzcgMTMgMTMgMTMuNDQ3NyAxMyAxNEMxMyAxNC41NTIzIDEzLjQ0NzcgMTUgMTQgMTVaTTE1IDE4QzE1IDE4LjU1MjMgMTQuNTUyMyAxOSAxNCAxOUMxMy40NDc3IDE5IDEzIDE4LjU1MjMgMTMgMThDMTMgMTcuNDQ3NyAxMy40NDc3IDE3IDE0IDE3QzE0LjU1MjMgMTcgMTUgMTcuNDQ3NyAxNSAxOFpNMTQgMjNDMTQuNTUyMyAyMyAxNSAyMi41NTIzIDE1IDIyQzE1IDIxLjQ0NzcgMTQuNTUyMyAyMSAxNCAyMUMxMy40NDc3IDIxIDEzIDIxLjQ0NzcgMTMgMjJDMTMgMjIuNTUyMyAxMy40NDc3IDIzIDE0IDIzWk0xOSAxMEMxOSAxMC41NTIzIDE4LjU1MjMgMTEgMTggMTFDMTcuNDQ3NyAxMSAxNyAxMC41NTIzIDE3IDEwQzE3IDkuNDQ3NzIgMTcuNDQ3NyA5IDE4IDlDMTguNTUyMyA5IDE5IDkuNDQ3NzIgMTkgMTBaTTE4IDE1QzE4LjU1MjMgMTUgMTkgMTQuNTUyMyAxOSAxNEMxOSAxMy40NDc3IDE4LjU1MjMgMTMgMTggMTNDMTcuNDQ3NyAxMyAxNyAxMy40NDc3IDE3IDE0QzE3IDE0LjU1MjMgMTcuNDQ3NyAxNSAxOCAxNVpNMTkgMThDMTkgMTguNTUyMyAxOC41NTIzIDE5IDE4IDE5QzE3LjQ0NzcgMTkgMTcgMTguNTUyMyAxNyAxOEMxNyAxNy40NDc3IDE3LjQ0NzcgMTcgMTggMTdDMTguNTUyMyAxNyAxOSAxNy40NDc3IDE5IDE4Wk0xOCAyM0MxOC41NTIzIDIzIDE5IDIyLjU1MjMgMTkgMjJDMTkgMjEuNDQ3NyAxOC41NTIzIDIxIDE4IDIxQzE3LjQ0NzcgMjEgMTcgMjEuNDQ3NyAxNyAyMkMxNyAyMi41NTIzIDE3LjQ0NzcgMjMgMTggMjNaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1maWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb2RlLWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNvZGVCdXR0b25DbGlja30+U2VlIGNvZGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY29kZVZpc2libGUgPyBcImNvZGUgaGlkZGVuXCIgOiAnY29kZSd9PlxuICAgICAgICAgICAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT1cImphdmFzY3JpcHRcIiBzdHlsZT17b2NlYW59PlxuICAgICAgICAgICAgICAgICAgICB7anN4VG9TdHJpbmcoPFdyYXBwZWRDaGlsZHJlbj57Y2hpbGRyZW59PC9XcmFwcGVkQ2hpbGRyZW4+LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogJydcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9TeW50YXhIaWdobGlnaHRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0V4YW1wbGVDb21wb2VudD5cbiBcbiAgICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ExampleDemo/ExampleDemo.js\n");

/***/ })

})
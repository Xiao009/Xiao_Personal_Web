"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Blog",{

/***/ "./src/pages/Blog.js":
/*!***************************!*\
  !*** ./src/pages/Blog.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comps_EmptyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../comps/EmptyLayout */ \"./comps/EmptyLayout.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _comps_FeaturedPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../comps/FeaturedPost */ \"./comps/FeaturedPost.js\");\n\n\n\n\n\n\nconst GapBox = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box)({\n    marginTop: (theme)=>theme.spacing(6)\n});\n_c = GapBox;\nconst SpacedGrid = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid)({\n    padding: (theme)=>theme.spacing(4)\n});\n_c1 = SpacedGrid;\nconst CardContainer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box)({\n    maxWidth: 345,\n    margin: \"3rem auto\",\n    marginTop: (theme)=>theme.spacing(4)\n});\n// determine the input\nconst featuredPosts = [\n    {\n        title: \"Featured post\",\n        date: \"Nov 12\",\n        description: \"This is a wider card with supporting text below as a natural lead-in to additional content.\",\n        image: \"https://source.unsplash.com/random?wallpapers\",\n        imageLabel: \"Image Text\"\n    },\n    {\n        title: \"Post title\",\n        date: \"Nov 11\",\n        description: \"This is a wider card with supporting text below as a natural lead-in to additional content.\",\n        image: \"https://source.unsplash.com/random?wallpapers\",\n        imageLabel: \"Image Text\"\n    },\n    {\n        title: \"Post title\",\n        date: \"Nov 11\",\n        description: \"This is a wider card with supporting text below as a natural lead-in to additional content.\",\n        image: \"https://source.unsplash.com/random?wallpapers\",\n        imageLabel: \"Image Text\"\n    }\n];\nfunction Portfolio() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_EmptyLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CssBaseline, {}, void 0, false, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/src/pages/Blog.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GapBox, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                        variant: \"h5\",\n                        style: {\n                            color: \"white\",\n                            textAlign: \"center\",\n                            textTransform: \"uppercase\"\n                        },\n                        children: \"My Post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/src/pages/Blog.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TitleDivider, {}, void 0, false, {\n                        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/src/pages/Blog.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                        container: true,\n                        justify: \"center\",\n                        alignItems: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpacedGrid, {\n                            container: true,\n                            spacing: 5,\n                            children: featuredPosts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_FeaturedPost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    post: post\n                                }, post.title, false, {\n                                    fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/src/pages/Blog.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/src/pages/Blog.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/src/pages/Blog.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/src/pages/Blog.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/src/pages/Blog.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Portfolio;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GapBox\");\n$RefreshReg$(_c1, \"SpacedGrid\");\n$RefreshReg$(_c2, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQmxvZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0I7QUFDRTtBQVc3QjtBQUM2QjtBQUVwRCxNQUFNYyxTQUFTWixxREFBTUEsQ0FBQ1UsOENBQUdBLEVBQUU7SUFDekJHLFdBQVcsQ0FBQ0MsUUFBVUEsTUFBTUMsT0FBTyxDQUFDO0FBQ3RDO0tBRk1IO0FBSU4sTUFBTUksYUFBYWhCLHFEQUFNQSxDQUFDRywrQ0FBSUEsRUFBRTtJQUM5QmMsU0FBUyxDQUFDSCxRQUFVQSxNQUFNQyxPQUFPLENBQUM7QUFDcEM7TUFGTUM7QUFJTixNQUFNRSxnQkFBZ0JsQixxREFBTUEsQ0FBQ1UsOENBQUdBLEVBQUU7SUFDaENTLFVBQVU7SUFDVkMsUUFBUTtJQUNSUCxXQUFXLENBQUNDLFFBQVVBLE1BQU1DLE9BQU8sQ0FBQztBQUN0QztBQUVBLHNCQUFzQjtBQUN0QixNQUFNTSxnQkFBZ0I7SUFDcEI7UUFDRUMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLGFBQ0U7UUFDRkMsT0FBTztRQUNQQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFDRTtRQUNGQyxPQUFPO1FBQ1BDLFlBQVk7SUFDZDtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxhQUNFO1FBQ0ZDLE9BQU87UUFDUEMsWUFBWTtJQUNkO0NBQ0Q7QUFFYyxTQUFTQztJQUN0QixxQkFDRSw4REFBQzVCLDBEQUFXQTs7MEJBQ1YsOERBQUNFLHNEQUFXQTs7Ozs7WUFBRzswQkFDZiw4REFBQ1c7O2tDQUNDLDhEQUFDVixxREFBVUE7d0JBQ1QwQixTQUFRO3dCQUNSQyxPQUFPOzRCQUNMQyxPQUFPOzRCQUNQQyxXQUFXOzRCQUNYQyxlQUFlO3dCQUNqQjtrQ0FDRDs7Ozs7O2tDQUdELDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUM5QiwrQ0FBSUE7d0JBQUMrQixTQUFTO3dCQUFDQyxTQUFRO3dCQUFTQyxZQUFXO2tDQUMxQyw0RUFBQ3BCOzRCQUFXa0IsU0FBUzs0QkFBQ25CLFNBQVM7c0NBQzVCTSxjQUFjZ0IsR0FBRyxDQUFDLENBQUNDLHFCQUNsQiw4REFBQzNCLDJEQUFZQTtvQ0FBa0IyQixNQUFNQTttQ0FBbEJBLEtBQUtoQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0M7TUExQndCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvQmxvZy5qcz8zZmJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBFbXB0eUxheW91dCBmcm9tIFwiLi4vLi4vY29tcHMvRW1wdHlMYXlvdXRcIjtcbmltcG9ydCB7IHN0eWxlZCwgQ3NzQmFzZWxpbmUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHtcbiAgVHlwb2dyYXBoeSxcbiAgR3JpZCxcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbkFyZWEsXG4gIENhcmRBY3Rpb25zLFxuICBDYXJkQ29udGVudCxcbiAgQ2FyZE1lZGlhLFxuICBCdXR0b24sXG4gIEJveCxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBGZWF0dXJlZFBvc3QgZnJvbSBcIi4uLy4uL2NvbXBzL0ZlYXR1cmVkUG9zdFwiO1xuXG5jb25zdCBHYXBCb3ggPSBzdHlsZWQoQm94KSh7XG4gIG1hcmdpblRvcDogKHRoZW1lKSA9PiB0aGVtZS5zcGFjaW5nKDYpLCAvLyBBZGQgYSBnYXAgYmV0d2VlbiBoZWFkZXIgYW5kIHRoZSBmaXJzdCBwb3N0XG59KTtcblxuY29uc3QgU3BhY2VkR3JpZCA9IHN0eWxlZChHcmlkKSh7XG4gIHBhZGRpbmc6ICh0aGVtZSkgPT4gdGhlbWUuc3BhY2luZyg0KSwgLy8gQWRkIHNwYWNpbmcgYmV0d2VlbiB0aGUgZWRnZSBvZiBlYWNoIHBhZ2Vcbn0pO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkKEJveCkoe1xuICBtYXhXaWR0aDogMzQ1LFxuICBtYXJnaW46IFwiM3JlbSBhdXRvXCIsXG4gIG1hcmdpblRvcDogKHRoZW1lKSA9PiB0aGVtZS5zcGFjaW5nKDQpLCAvLyBBZGQgYSBnYXAgYmV0d2VlbiB0aGUgZmlyc3QgcG9zdCBhbmQgdGhlIGhlYWRlclxufSk7XG5cbi8vIGRldGVybWluZSB0aGUgaW5wdXRcbmNvbnN0IGZlYXR1cmVkUG9zdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJGZWF0dXJlZCBwb3N0XCIsXG4gICAgZGF0ZTogXCJOb3YgMTJcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBpcyBhIHdpZGVyIGNhcmQgd2l0aCBzdXBwb3J0aW5nIHRleHQgYmVsb3cgYXMgYSBuYXR1cmFsIGxlYWQtaW4gdG8gYWRkaXRpb25hbCBjb250ZW50LlwiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb20/d2FsbHBhcGVyc1wiLFxuICAgIGltYWdlTGFiZWw6IFwiSW1hZ2UgVGV4dFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUG9zdCB0aXRsZVwiLFxuICAgIGRhdGU6IFwiTm92IDExXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC5cIixcbiAgICBpbWFnZTogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tP3dhbGxwYXBlcnNcIixcbiAgICBpbWFnZUxhYmVsOiBcIkltYWdlIFRleHRcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBvc3QgdGl0bGVcIixcbiAgICBkYXRlOiBcIk5vdiAxMVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWwgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbT93YWxscGFwZXJzXCIsXG4gICAgaW1hZ2VMYWJlbDogXCJJbWFnZSBUZXh0XCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW8oKSB7XG4gIHJldHVybiAoXG4gICAgPEVtcHR5TGF5b3V0PlxuICAgICAgPENzc0Jhc2VsaW5lIC8+IHsvKiBBZGQgQ3NzQmFzZWxpbmUgdG8gcmVzZXQgZGVmYXVsdCBzdHlsaW5nICovfVxuICAgICAgPEdhcEJveD5cbiAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTXkgUG9zdFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUaXRsZURpdmlkZXIgLz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFNwYWNlZEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxuICAgICAgICAgICAge2ZlYXR1cmVkUG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgIDxGZWF0dXJlZFBvc3Qga2V5PXtwb3N0LnRpdGxlfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9TcGFjZWRHcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dhcEJveD5cbiAgICA8L0VtcHR5TGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRW1wdHlMYXlvdXQiLCJzdHlsZWQiLCJDc3NCYXNlbGluZSIsIlR5cG9ncmFwaHkiLCJHcmlkIiwiQ2FyZCIsIkNhcmRBY3Rpb25BcmVhIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIkJ1dHRvbiIsIkJveCIsIkZlYXR1cmVkUG9zdCIsIkdhcEJveCIsIm1hcmdpblRvcCIsInRoZW1lIiwic3BhY2luZyIsIlNwYWNlZEdyaWQiLCJwYWRkaW5nIiwiQ2FyZENvbnRhaW5lciIsIm1heFdpZHRoIiwibWFyZ2luIiwiZmVhdHVyZWRQb3N0cyIsInRpdGxlIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJpbWFnZUxhYmVsIiwiUG9ydGZvbGlvIiwidmFyaWFudCIsInN0eWxlIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJ0ZXh0VHJhbnNmb3JtIiwiVGl0bGVEaXZpZGVyIiwiY29udGFpbmVyIiwianVzdGlmeSIsImFsaWduSXRlbXMiLCJtYXAiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Blog.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./public/1.png":
/*!**********************!*\
  !*** ./public/1.png ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/1.da96286a.png\",\"height\":500,\"width\":500,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.da96286a.png&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":8});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvMS5wbmciLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLENBQUMsc0xBQXNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy8xLnBuZz9lZDNmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS8xLmRhOTYyODZhLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRm1lZGlhJTJGMS5kYTk2Mjg2YS5wbmcmdz04JnE9NzBcIixcImJsdXJXaWR0aFwiOjgsXCJibHVySGVpZ2h0XCI6OH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/1.png\n"));

/***/ }),

/***/ "./comps/Header.js":
/*!*************************!*\
  !*** ./comps/Header.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/1.png */ \"./public/1.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import Particles from \"react-tsparticles\";     //missing the particle\nfunction Header() {\n    _s();\n    const [typedText, setTypedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [additionalTypedText, setAdditionalTypedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const targetText = \"Xiao Zhong\";\n    const additionalText = \"Software, Hardware\";\n    const typeSpeed = 200;\n    const backspaceSpeed = 50;\n    const loopDelay = 1000;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const typeAndBackspace = (text, setText)=>{\n            let currentIndex = 0;\n            const interval = setInterval(()=>{\n                if (currentIndex < text.length) {\n                    setText(text.substring(0, currentIndex + 1));\n                    currentIndex++;\n                } else {\n                    clearInterval(interval);\n                    setTimeout(()=>{\n                        let backspaceIndex = text.length;\n                        const backspaceInterval = setInterval(()=>{\n                            if (backspaceIndex > 0) {\n                                setText(text.substring(0, backspaceIndex - 1));\n                                backspaceIndex--;\n                            } else {\n                                clearInterval(backspaceInterval);\n                                setTimeout(()=>{\n                                    typeAndBackspace(text, setText); // Loop the animation\n                                }, loopDelay);\n                            }\n                        }, backspaceSpeed);\n                    }, loopDelay);\n                }\n            }, typeSpeed);\n        };\n        setTypedText(\"\"); // Clear typedText\n        typeAndBackspace(additionalText, setAdditionalTypedText);\n        return ()=>{}; // Clear any remaining intervals\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let currentIndex = 0;\n        const interval = setInterval(()=>{\n            if (currentIndex < targetText.length) {\n                setTypedText(targetText.substring(0, currentIndex + 1));\n                currentIndex++;\n            } else {\n                clearInterval(interval);\n            }\n        }, typeSpeed);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        sx: {\n            position: \"absolute\",\n            top: \"50%\",\n            left: \"50%\",\n            transform: \"translate(-50%, -50%)\",\n            width: \"100vw\",\n            textAlign: \"center\",\n            zIndex: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _public_1_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                alt: \"Xiao Zhong\",\n                width: 100,\n                height: 100\n            }, void 0, false, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h4\",\n                sx: {\n                    color: \"tomato\"\n                },\n                children: typedText\n            }, void 0, false, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h6\",\n                sx: {\n                    color: \"tan\"\n                },\n                children: additionalTypedText\n            }, void 0, false, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n                lineNumber: 162,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/comps/Header.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"o34DQtjAM4SsnVwOb7PIU5XWuAU=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wcy9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDSDtBQUNqQjtBQUNNO0FBQ3JDLHdFQUF3RTtBQUV6RCxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1MscUJBQXFCQyx1QkFBdUIsR0FBR1YsK0NBQVFBLENBQUM7SUFDL0QsTUFBTVcsYUFBYTtJQUNuQixNQUFNQyxpQkFBaUI7SUFDdkIsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxpQkFBaUI7SUFDdkIsTUFBTUMsWUFBWTtJQUVsQmQsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxtQkFBbUIsQ0FBQ0MsTUFBTUM7WUFDOUIsSUFBSUMsZUFBZTtZQUNuQixNQUFNQyxXQUFXQyxZQUFZO2dCQUMzQixJQUFJRixlQUFlRixLQUFLSyxNQUFNLEVBQUU7b0JBQzlCSixRQUFRRCxLQUFLTSxTQUFTLENBQUMsR0FBR0osZUFBZTtvQkFDekNBO2dCQUNGLE9BQU87b0JBQ0xLLGNBQWNKO29CQUVkSyxXQUFXO3dCQUNULElBQUlDLGlCQUFpQlQsS0FBS0ssTUFBTTt3QkFDaEMsTUFBTUssb0JBQW9CTixZQUFZOzRCQUNwQyxJQUFJSyxpQkFBaUIsR0FBRztnQ0FDdEJSLFFBQVFELEtBQUtNLFNBQVMsQ0FBQyxHQUFHRyxpQkFBaUI7Z0NBQzNDQTs0QkFDRixPQUFPO2dDQUNMRixjQUFjRztnQ0FDZEYsV0FBVztvQ0FDVFQsaUJBQWlCQyxNQUFNQyxVQUFVLHFCQUFxQjtnQ0FDeEQsR0FBR0g7NEJBQ0w7d0JBQ0YsR0FBR0Q7b0JBQ0wsR0FBR0M7Z0JBQ0w7WUFDRixHQUFHRjtRQUNMO1FBRUFMLGFBQWEsS0FBSyxrQkFBa0I7UUFDcENRLGlCQUFpQkosZ0JBQWdCRjtRQUVqQyxPQUFPLEtBQU8sR0FBRyxnQ0FBZ0M7SUFDbkQsR0FBRyxFQUFFO0lBRUxULGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWtCLGVBQWU7UUFFbkIsTUFBTUMsV0FBV0MsWUFBWTtZQUMzQixJQUFJRixlQUFlUixXQUFXVyxNQUFNLEVBQUU7Z0JBQ3BDZCxhQUFhRyxXQUFXWSxTQUFTLENBQUMsR0FBR0osZUFBZTtnQkFDcERBO1lBQ0YsT0FBTztnQkFDTEssY0FBY0o7WUFDaEI7UUFDRixHQUFHUDtRQUVILE9BQU8sSUFBTVcsY0FBY0o7SUFDN0IsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNsQiw4Q0FBR0E7UUFDRjBCLElBQUk7WUFDRkMsVUFBVTtZQUNWQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsV0FBVztZQUNYQyxPQUFPO1lBQ1BDLFdBQVc7WUFDWEMsUUFBUTtRQUNWOzswQkFtRkEsOERBQUMvQixtREFBS0E7Z0JBQUNnQyxLQUFLL0IscURBQU1BO2dCQUFFZ0MsS0FBSTtnQkFBYUosT0FBTztnQkFBS0ssUUFBUTs7Ozs7OzBCQUN6RCw4REFBQ25DLHFEQUFVQTtnQkFBQ29DLFNBQVE7Z0JBQUtYLElBQUk7b0JBQUVZLE9BQU87Z0JBQVM7MEJBQzVDakM7Ozs7OzswQkFFSCw4REFBQ0oscURBQVVBO2dCQUFDb0MsU0FBUTtnQkFBS1gsSUFBSTtvQkFBRVksT0FBTztnQkFBTTswQkFDekMvQjs7Ozs7Ozs7Ozs7O0FBSVQ7R0FoS3dCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9IZWFkZXIuanM/YjdjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGF2YXRhciBmcm9tIFwiLi4vcHVibGljLzEucG5nXCI7XG4vLyBpbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC10c3BhcnRpY2xlc1wiOyAgICAgLy9taXNzaW5nIHRoZSBwYXJ0aWNsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFt0eXBlZFRleHQsIHNldFR5cGVkVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FkZGl0aW9uYWxUeXBlZFRleHQsIHNldEFkZGl0aW9uYWxUeXBlZFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHRhcmdldFRleHQgPSBcIlhpYW8gWmhvbmdcIjtcbiAgY29uc3QgYWRkaXRpb25hbFRleHQgPSBcIlNvZnR3YXJlLCBIYXJkd2FyZVwiO1xuICBjb25zdCB0eXBlU3BlZWQgPSAyMDA7XG4gIGNvbnN0IGJhY2tzcGFjZVNwZWVkID0gNTA7XG4gIGNvbnN0IGxvb3BEZWxheSA9IDEwMDA7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0eXBlQW5kQmFja3NwYWNlID0gKHRleHQsIHNldFRleHQpID0+IHtcbiAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIHNldFRleHQodGV4dC5zdWJzdHJpbmcoMCwgY3VycmVudEluZGV4ICsgMSkpO1xuICAgICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgYmFja3NwYWNlSW5kZXggPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tzcGFjZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoYmFja3NwYWNlSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGV4dCh0ZXh0LnN1YnN0cmluZygwLCBiYWNrc3BhY2VJbmRleCAtIDEpKTtcbiAgICAgICAgICAgICAgICBiYWNrc3BhY2VJbmRleC0tO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYmFja3NwYWNlSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdHlwZUFuZEJhY2tzcGFjZSh0ZXh0LCBzZXRUZXh0KTsgLy8gTG9vcCB0aGUgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgfSwgbG9vcERlbGF5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgYmFja3NwYWNlU3BlZWQpO1xuICAgICAgICAgIH0sIGxvb3BEZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHR5cGVTcGVlZCk7XG4gICAgfTtcblxuICAgIHNldFR5cGVkVGV4dChcIlwiKTsgLy8gQ2xlYXIgdHlwZWRUZXh0XG4gICAgdHlwZUFuZEJhY2tzcGFjZShhZGRpdGlvbmFsVGV4dCwgc2V0QWRkaXRpb25hbFR5cGVkVGV4dCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge307IC8vIENsZWFyIGFueSByZW1haW5pbmcgaW50ZXJ2YWxzXG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudEluZGV4IDwgdGFyZ2V0VGV4dC5sZW5ndGgpIHtcbiAgICAgICAgc2V0VHlwZWRUZXh0KHRhcmdldFRleHQuc3Vic3RyaW5nKDAsIGN1cnJlbnRJbmRleCArIDEpKTtcbiAgICAgICAgY3VycmVudEluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCB0eXBlU3BlZWQpO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzeD17e1xuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHsvKiA8UGFydGljbGVzXG4gICAgICAgIGlkPVwidHNwYXJ0aWNsZXNcIlxuICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZwc0xpbWl0OiA2MCxcbiAgICAgICAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICAgICAgICBkZXRlY3RzT246IFwiY2FudmFzXCIsXG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgb25DbGljazoge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb2RlOiBcInB1c2hcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25Ib3Zlcjoge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb2RlOiBcInJlcHVsc2VcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVzaXplOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVzOiB7XG4gICAgICAgICAgICAgIGJ1YmJsZToge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgICAgICAgICAgIHNpemU6IDQwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwdXNoOiB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6IDQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlcHVsc2U6IHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICBkaXN0YW5jZTogMTUwLFxuICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sbGlzaW9uczoge1xuICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW92ZToge1xuICAgICAgICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIG91dE1vZGU6IFwiYm91bmNlXCIsXG4gICAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgICAgICAgIHNwZWVkOiAyLFxuICAgICAgICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogODAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2YWx1ZTogODAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgICB2YWx1ZTogMC41LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICByYW5kb206IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRldGVjdFJldGluYTogdHJ1ZSxcbiAgICAgICAgfX0gXG4gICAgICAvPiovfVxuICAgICAgPEltYWdlIHNyYz17YXZhdGFyfSBhbHQ9XCJYaWFvIFpob25nXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBzeD17eyBjb2xvcjogXCJ0b21hdG9cIiB9fT5cbiAgICAgICAge3R5cGVkVGV4dH1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN4PXt7IGNvbG9yOiBcInRhblwiIH19PlxuICAgICAgICB7YWRkaXRpb25hbFR5cGVkVGV4dH1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiVHlwb2dyYXBoeSIsIkltYWdlIiwiYXZhdGFyIiwiSGVhZGVyIiwidHlwZWRUZXh0Iiwic2V0VHlwZWRUZXh0IiwiYWRkaXRpb25hbFR5cGVkVGV4dCIsInNldEFkZGl0aW9uYWxUeXBlZFRleHQiLCJ0YXJnZXRUZXh0IiwiYWRkaXRpb25hbFRleHQiLCJ0eXBlU3BlZWQiLCJiYWNrc3BhY2VTcGVlZCIsImxvb3BEZWxheSIsInR5cGVBbmRCYWNrc3BhY2UiLCJ0ZXh0Iiwic2V0VGV4dCIsImN1cnJlbnRJbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJjbGVhckludGVydmFsIiwic2V0VGltZW91dCIsImJhY2tzcGFjZUluZGV4IiwiYmFja3NwYWNlSW50ZXJ2YWwiLCJzeCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwidGV4dEFsaWduIiwiekluZGV4Iiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwidmFyaWFudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./comps/Header.js\n"));

/***/ })

});
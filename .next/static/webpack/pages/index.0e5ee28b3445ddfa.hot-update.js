"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MainFeaturedPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainFeaturedPost */ \"./pages/MainFeaturedPost.tsx\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _FeaturedPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeaturedPost */ \"./pages/FeaturedPost.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ \"./pages/Sidebar.tsx\");\n/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/GitHub */ \"./node_modules/@mui/icons-material/GitHub.js\");\n/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Facebook */ \"./node_modules/@mui/icons-material/Facebook.js\");\n/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Twitter */ \"./node_modules/@mui/icons-material/Twitter.js\");\n\n\n\n\n\n\n\n\n// import Content from './Content';\n\n\n\n// Need loader to handle the post\n// import post1 from './blog-post.1.md';\n// import post2 from './blog-post.2.md';\n// import post3 from './blog-post.3.md';\n// const posts = [post1, post2, post3];\n// for the component in featurepost\nconst mainFeaturedPost = {\n    title: \"New Update Coming\",\n    description: \"can be anyt big new update for our web or company\",\n    image: \"https://source.unsplash.com/random?wallpapers\",\n    imageText: \"main image description\",\n    linkText: \"Continue reading(routing to the webpage) …\"\n};\n//Below big feauer\nconst featuredPosts = [\n    {\n        title: \"Featured post\",\n        date: \"Nov 12\",\n        description: \"This is a wider card with supporting text below as a natural lead-in to additional content.\",\n        image: \"https://source.unsplash.com/random?wallpapers\",\n        imageLabel: \"Image Text\"\n    },\n    {\n        title: \"Post title\",\n        date: \"Nov 11\",\n        description: \"This is a wider card with supporting text below as a natural lead-in to additional content.\",\n        image: \"https://source.unsplash.com/random?wallpapers\",\n        imageLabel: \"Image Text\"\n    }\n];\nconst sidebar = {\n    title: \"About\",\n    description: \"Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.\",\n    archives: [\n        {\n            title: \"March 2020\",\n            url: \"#\"\n        },\n        {\n            title: \"February 2020\",\n            url: \"#\"\n        },\n        {\n            title: \"January 2020\",\n            url: \"#\"\n        },\n        {\n            title: \"November 1999\",\n            url: \"#\"\n        },\n        {\n            title: \"October 1999\",\n            url: \"#\"\n        },\n        {\n            title: \"September 1999\",\n            url: \"#\"\n        },\n        {\n            title: \"August 1999\",\n            url: \"#\"\n        },\n        {\n            title: \"July 1999\",\n            url: \"#\"\n        },\n        {\n            title: \"June 1999\",\n            url: \"#\"\n        },\n        {\n            title: \"May 1999\",\n            url: \"#\"\n        },\n        {\n            title: \"April 1999\",\n            url: \"#\"\n        }\n    ],\n    social: [\n        {\n            name: \"GitHub\",\n            icon: _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        },\n        {\n            name: \"Twitter\",\n            icon: _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        },\n        {\n            name: \"Facebook\",\n            icon: _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n        }\n    ]\n};\nfunction Home() {\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n                children: [\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n                        children: \"Xiao demo | Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n                        name: \"keywords\",\n                        content: \"xiao\"\n                    }, void 0, false, {\n                        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_MainFeaturedPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        post: mainFeaturedPost\n                    }, void 0, false, {\n                        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        container: true,\n                        spacing: 4,\n                        children: featuredPosts.map((post)=>/*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_FeaturedPost__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                post: post\n                            }, post.title, false, {\n                                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/testcase\",\n                        children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().btn),\n                            children: \"see more testcase\"\n                        }, void 0, false, {\n                            fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                container: true,\n                spacing: 5,\n                sx: {\n                    mt: 3\n                },\n                children: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: sidebar.title,\n                    description: sidebar.description,\n                    archives: sidebar.archives,\n                    social: sidebar.social\n                }, void 0, false, {\n                    fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/xiaozhong/Documents/GitHub/Xiao_Personal_Web/pages/index.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNrQjtBQUVsQjtBQUNxQjtBQUNaO0FBQ0k7QUFDVjtBQUNoQyxtQ0FBbUM7QUFDaUI7QUFDSTtBQUNGO0FBQ3RELGlDQUFpQztBQUNqQyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUV4Qyx1Q0FBdUM7QUFFdkMsbUNBQW1DO0FBQ25DLE1BQU1VLG1CQUFtQjtJQUN2QkMsT0FBTztJQUNQQyxhQUFhO0lBQ2JDLE9BQU87SUFDUEMsV0FBVztJQUNYQyxVQUFVO0FBQ1o7QUFFQSxrQkFBa0I7QUFDbEIsTUFBTUMsZ0JBQWdCO0lBQ3BCO1FBQ0VMLE9BQU87UUFDUE0sTUFBTTtRQUNOTCxhQUNFO1FBQ0ZDLE9BQU87UUFDUEssWUFBWTtJQUNkO0lBQ0E7UUFDRVAsT0FBTztRQUNQTSxNQUFNO1FBQ05MLGFBQ0U7UUFDRkMsT0FBTztRQUNQSyxZQUFZO0lBQ2Q7Q0FDRDtBQUVELE1BQU1DLFVBQVU7SUFDZFIsT0FBTztJQUNQQyxhQUNFO0lBQ0ZRLFVBQVU7UUFDUjtZQUFFVCxPQUFPO1lBQWNVLEtBQUs7UUFBSTtRQUNoQztZQUFFVixPQUFPO1lBQWlCVSxLQUFLO1FBQUk7UUFDbkM7WUFBRVYsT0FBTztZQUFnQlUsS0FBSztRQUFJO1FBQ2xDO1lBQUVWLE9BQU87WUFBaUJVLEtBQUs7UUFBSTtRQUNuQztZQUFFVixPQUFPO1lBQWdCVSxLQUFLO1FBQUk7UUFDbEM7WUFBRVYsT0FBTztZQUFrQlUsS0FBSztRQUFJO1FBQ3BDO1lBQUVWLE9BQU87WUFBZVUsS0FBSztRQUFJO1FBQ2pDO1lBQUVWLE9BQU87WUFBYVUsS0FBSztRQUFJO1FBQy9CO1lBQUVWLE9BQU87WUFBYVUsS0FBSztRQUFJO1FBQy9CO1lBQUVWLE9BQU87WUFBWVUsS0FBSztRQUFJO1FBQzlCO1lBQUVWLE9BQU87WUFBY1UsS0FBSztRQUFJO0tBQ2pDO0lBQ0RDLFFBQVE7UUFDTjtZQUFFQyxNQUFNO1lBQVVDLE1BQU1qQixrRUFBVUE7UUFBQztRQUNuQztZQUFFZ0IsTUFBTTtZQUFXQyxNQUFNZixtRUFBV0E7UUFBQztRQUNyQztZQUFFYyxNQUFNO1lBQVlDLE1BQU1oQixvRUFBWUE7UUFBQztLQUN4QztBQUNIO0FBRWUsU0FBU2lCO0lBQ3RCLHFCQUNFOzswQkFDRSx1RUFBQ3pCLGtEQUFJQTs7a0NBQ0gsdUVBQUNXO2tDQUFNOzs7Ozs7a0NBQ1AsdUVBQUNlO3dCQUFLSCxNQUFLO3dCQUFXSSxTQUFROzs7Ozs7Ozs7Ozs7MEJBRWhDLHVFQUFDQzs7a0NBQ0MsdUVBQUN6Qix5REFBZ0JBO3dCQUFDMEIsTUFBTW5COzs7Ozs7a0NBQ3hCLHVFQUFDTiwwREFBSUE7d0JBQUMwQixTQUFTO3dCQUFDQyxTQUFTO2tDQUN0QmYsY0FBY2dCLEdBQUcsQ0FBQyxDQUFDSCxxQkFDbEIsdUVBQUN4QixxREFBWUE7Z0NBQWtCd0IsTUFBTUE7K0JBQWxCQSxLQUFLbEIsS0FBSzs7Ozs7Ozs7OztrQ0FHakMsdUVBQUNULGtEQUFJQTt3QkFBQytCLE1BQUs7a0NBQ1QscUZBQUNDOzRCQUFLQyxXQUFXbEMscUVBQVU7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdqQyx1RUFBQ0csMERBQUlBO2dCQUFDMEIsU0FBUztnQkFBQ0MsU0FBUztnQkFBR00sSUFBSTtvQkFBRUMsSUFBSTtnQkFBRTswQkFFdEMscUZBQUNoQyxnREFBT0E7b0JBQ05LLE9BQU9RLFFBQVFSLEtBQUs7b0JBQ3BCQyxhQUFhTyxRQUFRUCxXQUFXO29CQUNoQ1EsVUFBVUQsUUFBUUMsUUFBUTtvQkFDMUJFLFFBQVFILFFBQVFHLE1BQU07Ozs7Ozs7Ozs7Ozs7QUFLaEM7S0E3QndCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE1haW5GZWF0dXJlZFBvc3QgZnJvbSBcIi4vTWFpbkZlYXR1cmVkUG9zdFwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IEZlYXR1cmVkUG9zdCBmcm9tIFwiLi9GZWF0dXJlZFBvc3RcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIjtcbi8vIGltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCc7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9HaXRIdWJcIjtcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvRmFjZWJvb2tcIjtcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9Ud2l0dGVyXCI7XG4vLyBOZWVkIGxvYWRlciB0byBoYW5kbGUgdGhlIHBvc3Rcbi8vIGltcG9ydCBwb3N0MSBmcm9tICcuL2Jsb2ctcG9zdC4xLm1kJztcbi8vIGltcG9ydCBwb3N0MiBmcm9tICcuL2Jsb2ctcG9zdC4yLm1kJztcbi8vIGltcG9ydCBwb3N0MyBmcm9tICcuL2Jsb2ctcG9zdC4zLm1kJztcblxuLy8gY29uc3QgcG9zdHMgPSBbcG9zdDEsIHBvc3QyLCBwb3N0M107XG5cbi8vIGZvciB0aGUgY29tcG9uZW50IGluIGZlYXR1cmVwb3N0XG5jb25zdCBtYWluRmVhdHVyZWRQb3N0ID0ge1xuICB0aXRsZTogXCJOZXcgVXBkYXRlIENvbWluZ1wiLFxuICBkZXNjcmlwdGlvbjogXCJjYW4gYmUgYW55dCBiaWcgbmV3IHVwZGF0ZSBmb3Igb3VyIHdlYiBvciBjb21wYW55XCIsXG4gIGltYWdlOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb20/d2FsbHBhcGVyc1wiLFxuICBpbWFnZVRleHQ6IFwibWFpbiBpbWFnZSBkZXNjcmlwdGlvblwiLFxuICBsaW5rVGV4dDogXCJDb250aW51ZSByZWFkaW5nKHJvdXRpbmcgdG8gdGhlIHdlYnBhZ2UpIOKAplwiLFxufTtcblxuLy9CZWxvdyBiaWcgZmVhdWVyXG5jb25zdCBmZWF0dXJlZFBvc3RzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRmVhdHVyZWQgcG9zdFwiLFxuICAgIGRhdGU6IFwiTm92IDEyXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgaXMgYSB3aWRlciBjYXJkIHdpdGggc3VwcG9ydGluZyB0ZXh0IGJlbG93IGFzIGEgbmF0dXJhbCBsZWFkLWluIHRvIGFkZGl0aW9uYWwgY29udGVudC5cIixcbiAgICBpbWFnZTogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tP3dhbGxwYXBlcnNcIixcbiAgICBpbWFnZUxhYmVsOiBcIkltYWdlIFRleHRcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBvc3QgdGl0bGVcIixcbiAgICBkYXRlOiBcIk5vdiAxMVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGlzIGEgd2lkZXIgY2FyZCB3aXRoIHN1cHBvcnRpbmcgdGV4dCBiZWxvdyBhcyBhIG5hdHVyYWwgbGVhZC1pbiB0byBhZGRpdGlvbmFsIGNvbnRlbnQuXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbT93YWxscGFwZXJzXCIsXG4gICAgaW1hZ2VMYWJlbDogXCJJbWFnZSBUZXh0XCIsXG4gIH0sXG5dO1xuXG5jb25zdCBzaWRlYmFyID0ge1xuICB0aXRsZTogXCJBYm91dFwiLFxuICBkZXNjcmlwdGlvbjpcbiAgICBcIkV0aWFtIHBvcnRhIHNlbSBtYWxlc3VhZGEgbWFnbmEgbW9sbGlzIGV1aXNtb2QuIENyYXMgbWF0dGlzIGNvbnNlY3RldHVyIHB1cnVzIHNpdCBhbWV0IGZlcm1lbnR1bS4gQWVuZWFuIGxhY2luaWEgYmliZW5kdW0gbnVsbGEgc2VkIGNvbnNlY3RldHVyLlwiLFxuICBhcmNoaXZlczogW1xuICAgIHsgdGl0bGU6IFwiTWFyY2ggMjAyMFwiLCB1cmw6IFwiI1wiIH0sXG4gICAgeyB0aXRsZTogXCJGZWJydWFyeSAyMDIwXCIsIHVybDogXCIjXCIgfSxcbiAgICB7IHRpdGxlOiBcIkphbnVhcnkgMjAyMFwiLCB1cmw6IFwiI1wiIH0sXG4gICAgeyB0aXRsZTogXCJOb3ZlbWJlciAxOTk5XCIsIHVybDogXCIjXCIgfSxcbiAgICB7IHRpdGxlOiBcIk9jdG9iZXIgMTk5OVwiLCB1cmw6IFwiI1wiIH0sXG4gICAgeyB0aXRsZTogXCJTZXB0ZW1iZXIgMTk5OVwiLCB1cmw6IFwiI1wiIH0sXG4gICAgeyB0aXRsZTogXCJBdWd1c3QgMTk5OVwiLCB1cmw6IFwiI1wiIH0sXG4gICAgeyB0aXRsZTogXCJKdWx5IDE5OTlcIiwgdXJsOiBcIiNcIiB9LFxuICAgIHsgdGl0bGU6IFwiSnVuZSAxOTk5XCIsIHVybDogXCIjXCIgfSxcbiAgICB7IHRpdGxlOiBcIk1heSAxOTk5XCIsIHVybDogXCIjXCIgfSxcbiAgICB7IHRpdGxlOiBcIkFwcmlsIDE5OTlcIiwgdXJsOiBcIiNcIiB9LFxuICBdLFxuICBzb2NpYWw6IFtcbiAgICB7IG5hbWU6IFwiR2l0SHViXCIsIGljb246IEdpdEh1Ykljb24gfSxcbiAgICB7IG5hbWU6IFwiVHdpdHRlclwiLCBpY29uOiBUd2l0dGVySWNvbiB9LFxuICAgIHsgbmFtZTogXCJGYWNlYm9va1wiLCBpY29uOiBGYWNlYm9va0ljb24gfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+WGlhbyBkZW1vIHwgSG9tZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJ4aWFvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxNYWluRmVhdHVyZWRQb3N0IHBvc3Q9e21haW5GZWF0dXJlZFBvc3R9IC8+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAgICB7ZmVhdHVyZWRQb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxGZWF0dXJlZFBvc3Qga2V5PXtwb3N0LnRpdGxlfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdGVzdGNhc2VcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5idG59PnNlZSBtb3JlIHRlc3RjYXNlPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fSBzeD17eyBtdDogMyB9fT5cbiAgICAgICAgey8qIDxDb250ZW50IHRpdGxlPVwiRnJvbSB0aGUgZmlyZWhvc2VcIiBwb3N0cz17cG9zdHN9IC8+ICovfVxuICAgICAgICA8U2lkZWJhclxuICAgICAgICAgIHRpdGxlPXtzaWRlYmFyLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtzaWRlYmFyLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIGFyY2hpdmVzPXtzaWRlYmFyLmFyY2hpdmVzfVxuICAgICAgICAgIHNvY2lhbD17c2lkZWJhci5zb2NpYWx9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkxpbmsiLCJNYWluRmVhdHVyZWRQb3N0IiwiR3JpZCIsIkZlYXR1cmVkUG9zdCIsIlNpZGViYXIiLCJHaXRIdWJJY29uIiwiRmFjZWJvb2tJY29uIiwiVHdpdHRlckljb24iLCJtYWluRmVhdHVyZWRQb3N0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaW1hZ2VUZXh0IiwibGlua1RleHQiLCJmZWF0dXJlZFBvc3RzIiwiZGF0ZSIsImltYWdlTGFiZWwiLCJzaWRlYmFyIiwiYXJjaGl2ZXMiLCJ1cmwiLCJzb2NpYWwiLCJuYW1lIiwiaWNvbiIsIkhvbWUiLCJtZXRhIiwiY29udGVudCIsImRpdiIsInBvc3QiLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwiaHJlZiIsInNwYW4iLCJjbGFzc05hbWUiLCJidG4iLCJzeCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
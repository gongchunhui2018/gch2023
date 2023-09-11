"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,190,981,100,639,439,680,58,749,223,645,837,41,124,730,646,835,833,592];
exports.modules = {

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_headingComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7972);
/* harmony import */ var _coverPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6396);
/* harmony import */ var _aboutMePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9251);
/* harmony import */ var _backCoverPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4842);
/* harmony import */ var _zebra_zebraCourse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5249);
/* harmony import */ var _zebra_zebraPlugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(423);
/* harmony import */ var _zebra_zebraColor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3966);
/* harmony import */ var _designCode_demoUIAll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5072);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_coverPage__WEBPACK_IMPORTED_MODULE_3__, _zebra_zebraColor__WEBPACK_IMPORTED_MODULE_8__, _designCode_demoUIAll__WEBPACK_IMPORTED_MODULE_9__, framer_motion__WEBPACK_IMPORTED_MODULE_10__]);
([_coverPage__WEBPACK_IMPORTED_MODULE_3__, _zebra_zebraColor__WEBPACK_IMPORTED_MODULE_8__, _designCode_demoUIAll__WEBPACK_IMPORTED_MODULE_9__, framer_motion__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-14 16:43:01
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 18:16:15
 * @FilePath: /gchct/pages/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 











//定义动画变体
const variants = {
    hidden: {
        y: 60,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
};
function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "龚春辉GCH"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "gongchunhui",
                        content: "2023.3.28"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/gch.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-auto flex flex-col items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_coverPage__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion.div, {
                        className: "w-full flex flex-col items-center",
                        initial: "hidden",
                        animate: "visible",
                        variants: variants,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aboutMePage__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "GCHcontainer flex flex-col items-center mt-44",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_headingComponent__WEBPACK_IMPORTED_MODULE_2__.HeadingLG, {
                                        heading: "日常工作"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_zebra_zebraCourse__WEBPACK_IMPORTED_MODULE_6__["default"], {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "GCHcontainer flex flex-col items-center mt-36",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_headingComponent__WEBPACK_IMPORTED_MODULE_2__.HeadingLG, {
                                        heading: "设计提效"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_zebra_zebraPlugin__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_zebra_zebraColor__WEBPACK_IMPORTED_MODULE_8__["default"], {})
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "GCHcontainer flex flex-col items-center mt-36",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_headingComponent__WEBPACK_IMPORTED_MODULE_2__.HeadingLG, {
                                        heading: "设计探索"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_designCode_demoUIAll__WEBPACK_IMPORTED_MODULE_9__["default"], {})
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_backCoverPage__WEBPACK_IMPORTED_MODULE_5__["default"], {})
                        ]
                    })
                ]
            })
        ]
    });
} //导航条

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6303:
/***/ ((module) => {

module.exports = require("chroma-js");

/***/ }),

/***/ 861:
/***/ ((module) => {

module.exports = require("color-blind");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 5564:
/***/ ((module) => {

module.exports = require("date-fns/locale");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8261:
/***/ ((module) => {

module.exports = require("react-day-picker");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 9559:
/***/ ((module) => {

module.exports = import("react-colorful");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,170,972,598,802,26,947,650,782,794,745,368,251,423,966,72,842,396,249], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();
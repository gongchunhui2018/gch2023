"use strict";
exports.id = 972;
exports.ids = [972];
exports.modules = {

/***/ 7972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadingLG": () => (/* binding */ HeadingLG),
/* harmony export */   "HeadingMD": () => (/* binding */ HeadingMD),
/* harmony export */   "HeadingSM": () => (/* binding */ HeadingSM),
/* harmony export */   "HeadingXS": () => (/* binding */ HeadingXS)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-05-15 02:13:23
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 18:03:48
 * @FilePath: /gchct/Components/headingComponent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 


//大标题
const HeadingLG = (props)=>{
    const { heading  } = props; //heading: 标题
    if (!props.heading) {
        return null;
    } //如果没有传入heading, 则返回null
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-auto flex",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "66",
                height: "100",
                viewBox: "0 0 66 100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#2E2E2E",
                    d: "M2,40 L18.5549767,0 L32.6753918,0 L23.9110123,40 L2,40 Z M33.3246082,40 L49.8797123,0 L64,0 L55.073274,40 L33.3246082,40 Z"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHheading-lg w-auto",
                children: heading
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "66",
                height: "100",
                viewBox: "0 0 66 100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#2E2E2E",
                    d: "M64,60 L47.4450233,100 L33.3246082,100 L42.0889877,60 L64,60 Z M32.6753918,60 L16.1202877,100 L2,100 L10.926726,60 L32.6753918,60 Z"
                })
            })
        ]
    });
};
//中标题
const HeadingMD = (props)=>{
    //numberFill: number的颜色, number: number的值, heading: 标题
    const { heading  } = props;
    //如果没有传入number, heading, numberFill, 则返回null
    if (!heading) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "GCHheading-md w-full",
        children: heading
    });
};
//小标题
const HeadingSM = (props)=>{
    //heading: 标题 detail: 详情
    const { heading , detail , title  } = props;
    if (!heading) {
        while(!title){
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHtext-base w-full",
                children: detail
            });
        }
        while(title){
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "GCHtext-base w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "GCHtitle-base",
                        children: title
                    }),
                    detail
                ]
            });
        }
    } else {
        while(!detail){
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHheading-sm w-full",
                children: heading
            });
        }
        while(detail){
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-auto flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHheading-sm w-full",
                        children: heading
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtext-base w-full mt-3",
                        children: detail
                    })
                ]
            });
        }
    }
};
//迷你标题
const HeadingXS = (props)=>{
    //numberFill: number的颜色, number: number的值, heading: 标题
    const { heading , detail  } = props;
    if (!heading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "GCHtext-base w-full",
            children: detail
        });
    } else {
        while(!detail){
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHheading-xs w-full",
                children: heading
            });
        }
        while(detail){
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-auto flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHheading-xs w-full",
                        children: heading
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtext-base w-full mt-2",
                        children: detail
                    })
                ]
            });
        }
    }
};


/***/ })

};
;
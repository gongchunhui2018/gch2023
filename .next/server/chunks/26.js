"use strict";
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 4026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragProgress": () => (/* binding */ DragProgress),
/* harmony export */   "RingDashborad": () => (/* binding */ RingDashborad),
/* harmony export */   "RingDashboradColor": () => (/* binding */ RingDashboradColor),
/* harmony export */   "RingDashboradHalf": () => (/* binding */ RingDashboradHalf)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-05-22 18:58:28
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-09 00:13:56
 * @FilePath: /gchct/Components/GCHUI/chart.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 


//1.普通仪表盘
const RingDashborad = (props)=>{
    const percent = props.percent || 0.5; //百分比
    const radius = props.radius || 20; //半径
    const strokeColor = props.strokeColor || "#fff"; //边框颜色
    const strokeWidth = props.strokeWidth || 6; //边框宽度
    const bgStrokeColor = props.bgStrokeColor || "rgba(255,255,255,0.2)"; //背景边框颜色
    const bgColor = props.bgColor || "rgba(0,0,0,0.3)"; //背景颜色
    const element = props.element || ""; //对象
    const strokeRadius = radius * 0.86; //边框半径
    const center = radius; //圆心坐标
    const circumference = 2 * Math.PI * radius //边框长度
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative rounded-full flex justify-center items-center backdrop-blur-xl",
        style: {
            width: radius * 2,
            height: radius * 2,
            background: bgColor
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: center * 2,
            height: center * 2,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.circle, {
                    initial: {
                        strokeDashoffset: circumference
                    },
                    animate: {
                        strokeDashoffset: circumference * (1 - percent + 0.1)
                    },
                    transition: {
                        duration: 1
                    },
                    stroke: strokeColor,
                    fill: "none" //填充颜色
                    ,
                    strokeWidth: strokeWidth,
                    strokeLinecap: "round" //边框末端样式
                    ,
                    strokeDasharray: circumference,
                    // strokeDashoffset = {offset}  //进度条进度
                    r: strokeRadius,
                    cx: center,
                    cy: center,
                    transform: `rotate(-90 ${center} ${center})`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    stroke: bgStrokeColor,
                    fill: "none" //填充颜色
                    ,
                    strokeWidth: strokeWidth,
                    strokeLinecap: "round" //边框末端样式
                    ,
                    strokeDasharray: circumference,
                    r: strokeRadius,
                    cx: center,
                    cy: center
                })
            ]
        })
    });
};
//2.半封闭仪表盘
const RingDashboradHalf = (props)=>{
    const percent = props.percent || 0.5; //百分比
    const radius = props.radius || 20; //半径
    const strokeColor = props.strokeColor || "#fff"; //边框颜色
    const strokeWidth = props.strokeWidth || 6; //边框宽度
    const bgStrokeColor = props.bgStrokeColor || "rgba(255,255,255,0.2)"; //背景边框颜色
    const bgColor = props.bgColor || "rgba(0,0,0,0.3)"; //背景颜色
    const element = props.element || ""; //对象
    const strokeRadius = radius * 0.86; //边框半径
    const center = radius; //圆心坐标
    const circumference = 2 * Math.PI * radius * 0.66 //边框长度
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative rounded-full flex justify-center items-center backdrop-blur-xl",
        style: {
            width: radius * 2,
            height: radius * 2,
            background: bgColor
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: center * 2,
            height: center * 2,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.circle, {
                    initial: {
                        strokeDashoffset: circumference / 0.66
                    },
                    animate: {
                        strokeDashoffset: circumference * (1 - percent + 0.26) / 0.66
                    },
                    transition: {
                        duration: 1
                    },
                    stroke: strokeColor,
                    fill: "none" //填充颜色
                    ,
                    strokeWidth: strokeWidth,
                    strokeLinecap: "round" //边框末端样式
                    ,
                    strokeDasharray: circumference / 0.66,
                    // strokeDashoffset = {offset}  //进度条进度
                    r: strokeRadius,
                    cx: center,
                    cy: center,
                    transform: `rotate(132 ${center} ${center})`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    stroke: bgStrokeColor,
                    fill: "none" //填充颜色
                    ,
                    strokeWidth: strokeWidth,
                    strokeLinecap: "round" //边框末端样式
                    ,
                    strokeDasharray: circumference,
                    r: strokeRadius,
                    cx: center,
                    cy: center,
                    transform: `rotate(132 ${center} ${center})`
                })
            ]
        })
    });
};
//3.彩色环形仪表盘
const RingDashboradColor = (props)=>{
    const { number , percent , icon , radius , strokeColorArr , bgColor  } = props;
    const [colorA, colorB, colorC] = strokeColorArr;
    const strokeRadius = radius * 0.8;
    const strokeWidth = radius * 0.14;
    const center = radius; //圆心坐标
    const circumference = 2 * Math.PI * radius * 0.6; //边框长度
    const fontSize = radius / 2; //字体大小
    const count = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    const rounded = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(count, Math.round);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.animate)(count, number * percent, {
            duration: 1
        });
        return animation.stop;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative rounded-full flex justify-center items-center",
        style: {
            width: radius * 2,
            height: radius * 2,
            background: bgColor
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                className: "",
                width: center * 2,
                height: center * 2,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        stroke: `url(#${number})`,
                        fill: "none" //填充颜色
                        ,
                        strokeWidth: strokeWidth,
                        strokeLinecap: "round" //边框末端样式
                        ,
                        strokeDasharray: circumference,
                        r: strokeRadius,
                        cx: center,
                        cy: center,
                        transform: `rotate(135 ${center} ${center})`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                            id: number,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "0%",
                                    "stop-color": colorA
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "50%",
                                    "stop-color": colorB
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                    offset: "100%",
                                    "stop-color": colorC
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                className: "absolute GCHtitle-base",
                style: {
                    fontSize: fontSize
                },
                children: rounded
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-1/2 h-1/3 bottom-0 flex justify-center py-0.5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        width: radius * 0.46,
                        height: radius * 0.46
                    },
                    children: icon
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: " absolute flex items-center origin-center",
                style: {
                    width: strokeRadius * 2 + strokeWidth * 2,
                    height: strokeRadius * 2 + strokeWidth * 2
                },
                initial: {
                    rotate: -42
                },
                animate: {
                    rotate: 360 * 0.62 * percent
                },
                transition: {
                    duration: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " bg-white rounded-full",
                    style: {
                        width: strokeWidth * 2,
                        height: strokeWidth * 2,
                        borderColor: "rgba(0,0,0,0.8)",
                        borderWidth: strokeWidth * 0.5
                    }
                })
            })
        ]
    });
};
//4.可拖动进度条
const DragProgress = (props)=>{
    const { width , height  } = props;
    //计算圆角半径
    let radius = height / 2;
    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(50);
    const [fanOn, setFanOn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const handleProgressChange = (e)=>{
        setProgress(e.target.value);
        if (e.target.value > 0) {
            setFanOn(true);
        } else {
            setFanOn(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-row p-3 rounded-xl bg-black/30 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "右"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-auto h-auto relative",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        width: width,
                        height: height,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                        id: "progressGradient",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "0%",
                                                stopColor: "#eff6ff"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "100%",
                                                stopColor: "#dbeafe"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("mask", {
                                        id: "progressMask",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                            x: "0",
                                            y: "0",
                                            rx: radius,
                                            ry: radius,
                                            width: width,
                                            height: height,
                                            fill: "#fff"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                className: " fill-black/20",
                                x: "0",
                                y: "0",
                                rx: radius,
                                width: width,
                                height: height
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                fill: "url(#progressGradient)",
                                x: "0",
                                y: "0",
                                width: progress,
                                height: height,
                                mask: "url(#progressMask)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "range",
                        min: "0",
                        max: width,
                        step: "1",
                        value: progress,
                        onChange: handleProgressChange,
                        className: "w-full h-full z-20 absolute rounded-full top-0 left-0 opacity-0 cursor-pointer"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " absolute z-10 top-0 w-full h-full flex items-center px-3",
                        children: fanOn ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "GCHtext-xs animate-pulse text-white/40",
                            children: "车窗完全打开"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "数字"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
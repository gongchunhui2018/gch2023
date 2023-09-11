"use strict";
exports.id = 368;
exports.ids = [368];
exports.modules = {

/***/ 2368:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarDashBoard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4026);
/* harmony import */ var _components_optionGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5650);
/* harmony import */ var _weatherAPP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(802);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_chart__WEBPACK_IMPORTED_MODULE_3__, _components_optionGroup__WEBPACK_IMPORTED_MODULE_4__, _weatherAPP__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_chart__WEBPACK_IMPORTED_MODULE_3__, _components_optionGroup__WEBPACK_IMPORTED_MODULE_4__, _weatherAPP__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-07-04 21:39:50
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 00:51:28
 * @FilePath: /gch/pages/carhmi/carDashboard.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 






//输出仪表样式
function CarDashBoard() {
    const options = [
        {
            label: "天气",
            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_weatherAPP__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        },
        {
            label: "仪表",
            element: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DashBoard, {})
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-[67.5rem] h-auto ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_optionGroup__WEBPACK_IMPORTED_MODULE_4__.DesktopGroup, {
            options: options
        })
    });
}
//仪表样式一
const DashBoard = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-[67.5rem] h-[24rem] flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#030317] via-[#1B1D33] to-[#293654]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full absolute flex items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SpeedOne, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " absolute z-20 left-14 bottom-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Oil, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " absolute z-20 left-[17.5rem] bottom-9",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MotorTemp, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " absolute z-20 left-40 top-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Engine, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " absolute z-20 right-[17.5rem] bottom-9",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Oilcan, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " absolute z-20 right-40 top-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GearOne, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " absolute z-20 right-14 bottom-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Mileage, {})
            })
        ]
    });
};
//速度仪表
const SpeedOne = ()=>{
    //数字动效
    const speed = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    const setSpeed = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(speed, Math.round);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.animate)(speed, 96, {
            duration: 1
        });
        return animation.stop;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative z-20 flex items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chart__WEBPACK_IMPORTED_MODULE_3__.RingDashboradHalf, {
                percent: 0.48,
                radius: 160,
                strokeColor: "#38bdf8",
                strokeWidth: 14,
                bgStrokeColor: "rgba(203,213,225,0.2)"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                className: "GCHheading-xl absolute",
                children: setSpeed
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-[52px] ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__.IconStraight, {
                    w: "44",
                    h: "44"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute flex flex-row gap-5 bottom-8 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__.IconLeftLight, {
                        w: "26",
                        h: "26",
                        fill: "rgba(255,255,255,0.3)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__.IconSeatBelt, {
                        w: "30",
                        h: "30",
                        fill: "#eab308"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__.IconRightLight, {
                        w: "26",
                        h: "26",
                        fill: "rgba(255,255,255,0.3)"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHtitle-base text-white/60 absolute z-30 bottom-[94px]",
                children: "km/h"
            })
        ]
    });
};
//档位仪表
const GearOne = ()=>{
    //数字动效
    const rpm = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    const setRpm = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(rpm, Math.round);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.animate)(rpm, 1680, {
            duration: 1
        });
        return animation.stop;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chart__WEBPACK_IMPORTED_MODULE_3__.RingDashboradHalf, {
                percent: 0.46,
                radius: 100,
                strokeWidth: 10,
                strokeColor: "#f97316"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__.IconGear, {
                    w: "60",
                    h: "60",
                    fill: "#ffffff"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-8 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__.IconAutoBeam, {
                    w: "26",
                    h: "26",
                    fill: "#eab308"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex flex-col absolute z-30 bottom-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.label, {
                        className: "GCHtitle-base text-center text-xl",
                        children: setRpm
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-xs text-center text-white/60 -mt-2",
                        children: "rpm"
                    })
                ]
            })
        ]
    });
};
//油量表
const Oil = ()=>{
    //数字动效
    const oil = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    const setOil = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(oil, Math.round);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.animate)(oil, 86, {
            duration: 1
        });
        return animation.stop;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chart__WEBPACK_IMPORTED_MODULE_3__.RingDashboradHalf, {
                percent: 0.86,
                radius: 70,
                strokeWidth: 8,
                strokeColor: "#22c55e"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "GCHtitle-xs text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.label, {
                                className: "GCHtitle-base text-4xl text-center",
                                children: setOil
                            }),
                            "%"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-sm text-center text-[#22c55e] -mt-1",
                        children: "468km"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute bottom-[10px] ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__.IconBattery, {
                    w: "26",
                    h: "26",
                    fill: "rgba(255,255,255,0.8)"
                })
            })
        ]
    });
};
//水温表
const MotorTemp = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chart__WEBPACK_IMPORTED_MODULE_3__.RingDashboradHalf, {
                percent: 0.48,
                radius: 50,
                strokeWidth: 6,
                strokeColor: "#3b82f6"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute flex flex-row items-center gap-6 bottom-[6px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-xs text-center text-white/60",
                        children: "C"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-xs text-center text-white/60",
                        children: "H"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__.IconMotorTemp, {
                    w: "36",
                    h: "36",
                    fill: "#ffffff"
                })
            })
        ]
    });
};
//机油
const Oilcan = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chart__WEBPACK_IMPORTED_MODULE_3__.RingDashboradHalf, {
                percent: 0.88,
                radius: 50,
                strokeWidth: 6,
                strokeColor: "#06b6d4"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute flex flex-row items-center gap-6 bottom-[6px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-xs text-center text-white/60",
                        children: "L"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-xs text-center text-white/60",
                        children: "H"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__.IconOilcan, {
                    w: "38",
                    h: "38",
                    fill: "#ffffff"
                })
            })
        ]
    });
};
//保养里程
const Mileage = ()=>{
    //数字动效
    const mi = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    const setMi = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(mi, Math.round);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.animate)(mi, 19800, {
            duration: 1
        });
        return animation.stop;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chart__WEBPACK_IMPORTED_MODULE_3__.RingDashborad, {
                percent: 0.86,
                radius: 70,
                strokeWidth: 8,
                strokeColor: "#84cc16"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute flex flex-col items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                        className: "GCHtitle-base text-2xl text-center mt-3",
                        children: setMi
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-sm text-center text-white/60 -mt-1",
                        children: "公里"
                    })
                ]
            })
        ]
    });
};
//发动机规律
const Engine = ()=>{
    //数字动效
    const nm = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    const setNm = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(nm, Math.round);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.animate)(nm, 136, {
            duration: 1
        });
        return animation.stop;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chart__WEBPACK_IMPORTED_MODULE_3__.RingDashboradHalf, {
                percent: 0.50,
                radius: 100,
                strokeWidth: 10,
                strokeColor: "#eab308"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "GCHtitle-sm text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.label, {
                                className: "GCHtitle-base text-5xl text-center",
                                children: setNm
                            }),
                            "Nm"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-base text-center text-[#eab308] -mt-1",
                        children: "248w"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute bottom-4 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__.IconEngineE, {
                    w: "36",
                    h: "36",
                    fill: "rgba(255,255,255,0.8)"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
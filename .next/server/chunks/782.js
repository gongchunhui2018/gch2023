exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 9782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartHome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8261);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5564);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_weatherParse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5598);
/* harmony import */ var react_day_picker_dist_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8285);
/* harmony import */ var react_day_picker_dist_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_dist_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-08-28 18:20:01
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 14:28:28
 * @FilePath: /gch2023/pages/designCode/smartHome.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 








//智能家居面板
function SmartHome() {
    const colors = [
        "#eab308",
        "#3b82f6",
        "#f97316",
        "#22c55e",
        "#a855f7",
        "#f43f5e",
        "#f59e0b",
        "#64748b"
    ];
    const radius = [
        "10px",
        "4px",
        "16px",
        "20px"
    ];
    const [selectedColor, setSelectedColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(colors[0]);
    const [selectedRadius, setSelectedRadius] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(radius[0]);
    //核污染水排放天数
    const day = GetDaysBetweenDates();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[67.5rem] h-auto flex flex-row gap-4 ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "GCHcard w-3/4 p-5 h-auto flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Weather, {
                        color: selectedColor,
                        radius: selectedRadius
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DatePicker, {
                                color: selectedColor,
                                radius: selectedRadius,
                                nuclearDay: day
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Nuclear, {
                                color: selectedColor,
                                radius: selectedRadius,
                                nuclearDay: day
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "GCHcard w-1/4 h-auto flex flex-col gap-7 p-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-base",
                                children: "组件样式自定义"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs",
                                children: "自定义组件样式和颜色"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-xs",
                                children: "颜色"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full grid grid-cols-2 gap-3",
                                children: colors.map((item, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: ()=>setSelectedColor(item),
                                        className: `${item === selectedColor ? "outline outline-2 outline-white/90 bg-white/10" : "outline outline-1 outline-white/10 "} w-full p-2 flex flex-row gap-2 items-center rounded-lg hover:bg-white/10 hover:border-white/0`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-5 h-5 rounded-full",
                                                style: {
                                                    backgroundColor: item
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "GCHtitle-xs",
                                                children: item
                                            })
                                        ]
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-xs",
                                children: "圆角"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full grid grid-cols-4 gap-3",
                                children: radius.map((item, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setSelectedRadius(item),
                                        className: `${item === selectedRadius ? "outline outline-2 outline-white/90 bg-white/10" : "outline outline-1 outline-white/10 "} w-full p-2 flex flex-row gap-2 items-center justify-center rounded-lg hover:bg-white/10 hover:border-white/0`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "GCHtitle-xs",
                                            children: item
                                        })
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-xs",
                                children: "Figma to Code（Tailwindcss）"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "GCHcard-black w-full h-16 px-3 py-2 rounded-lg",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "GCHtext-xs text-white",
                                    children: [
                                        "className=",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            style: {
                                                color: selectedColor
                                            },
                                            children: [
                                                '"rounded-[',
                                                selectedRadius,
                                                "] bg-[",
                                                selectedColor,
                                                ']"'
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-xs",
                                children: "数据API"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "GCHcard-black w-full flex flex-col h-20 px-3 py-2 rounded-lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "GCHtext-xs text-white",
                                    style: {
                                        color: selectedColor
                                    },
                                    children: "https://devapi.qweather.com/ v7/weather/now?location=101010100&key=自己的"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
//日期选择器
const DatePicker = (props)=>{
    const { color , radius , nuclearDay  } = props;
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-14 font-HM_Regular",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_day_picker__WEBPACK_IMPORTED_MODULE_3__.DayPicker, {
                className: "text-white ",
                // mode="single"
                required: true,
                locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__.zhCN,
                styles: {
                    caption: {
                        color: color
                    }
                },
                disableNavigation: true,
                modifiersStyles: {
                    selected: {
                        backgroundColor: color,
                        color: "white",
                        borderRadius: radius
                    },
                    today: {
                        backgroundColor: color,
                        color: "white",
                        borderRadius: radius
                    }
                },
                selected: selected,
                onSelect: setSelected
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row items-center gap-3 px-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "px-3 flex items-center justify-center rounded-lg border border-[#2e2e2e]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "GCHheading-md text-center",
                            style: {
                                color: color
                            },
                            children: nuclearDay
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-base",
                                children: "2023年8月24日"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-sm",
                                children: "☢️日本开始排放核污染水\uD83E\uDD0F"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
//天气面板
const Weather = (props)=>{
    const { color , radius  } = props;
    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getWeatherData().then(setWeatherData).catch(setError).finally(()=>setLoading(false));
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "GCHtitle-sm",
            children: "天气数据加载中..."
        });
    }
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "GCHtitle-sm",
            children: "天气数据加载失败！"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full grid grid-cols-[1fr_0.5fr_0.5fr_0.5fr] gap-4 items-center rounded-2xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Temp, {
                obsTime: weatherData.now.obsTime,
                text: weatherData.now.text,
                temp: weatherData.now.temp,
                icon: weatherData.now.icon,
                feelsLike: weatherData.now.feelsLike,
                vis: weatherData.now.vis,
                radius: radius,
                cloud: weatherData.now.cloud
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Humidity, {
                color: color,
                radius: radius,
                humidity: weatherData.now.humidity
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Pressure, {
                color: color,
                radius: radius,
                pressure: weatherData.now.pressure
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wind, {
                color: color,
                radius: radius,
                wind360: weatherData.now.wind360,
                windScale: weatherData.now.windScale,
                windDir: weatherData.now.windDir,
                windSpeed: weatherData.now.windSpeed
            })
        ]
    });
};
//温度面板
const Temp = (props)=>{
    const { radius , obsTime , text , temp , icon , feelsLike , vis , cloud  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-40 flex flex-col px-6 py-5 gap-5 ${(0,_components_weatherParse__WEBPACK_IMPORTED_MODULE_6__.WeatherBg)({
            cloud: cloud
        })}`,
        style: {
            borderRadius: radius
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "GCHheading-md text-6xl",
                                children: [
                                    temp,
                                    "\xb0"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "GCHtitle-xs",
                                children: [
                                    "体感温度：",
                                    feelsLike,
                                    "\xb0"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_weatherParse__WEBPACK_IMPORTED_MODULE_6__.WeatherIcon, {
                                iconId: icon,
                                iconSize: "38"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-sm",
                                children: text
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "GCHtitle-xs",
                                children: [
                                    "能见度：",
                                    vis,
                                    "公里"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "GCHtext-xs text-white/60",
                children: [
                    "观测时间：",
                    obsTime
                ]
            })
        ]
    });
};
//风速面板
const Wind = (props)=>{
    const { color , radius , wind360 , windScale , windDir , windSpeed  } = props;
    let rotate = parseFloat(wind360);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-40 flex flex-col border border-[#2e2e2e]",
        style: {
            borderRadius: radius
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-3 pt-4 pb-2 flex flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-base",
                        children: windDir
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: "w-6 h-6 rounded-full flex items-center justify-center",
                        style: {
                            backgroundColor: color
                        },
                        initial: {
                            rotate: 0
                        },
                        animate: {
                            rotate: rotate
                        },
                        transition: {
                            duration: 1
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_8__.ChartWindPointer, {
                            w: "20",
                            h: "20",
                            fill: "#ffffff"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full flex flex-row gap-1 px-2 pb-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-full flex flex-col items-center justify-end",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "GCHtext-xs text-white text-center",
                                children: [
                                    windScale,
                                    "级"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4 max-h-20 origin-bottom",
                                style: {
                                    backgroundColor: color,
                                    borderRadius: radius,
                                    height: windScale * 4
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " w-full h-full flex flex-col items-center justify-end",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "GCHtext-xs text-white text-center",
                                children: [
                                    windSpeed,
                                    "公里/时"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-4 max-h-20 origin-bottom",
                                style: {
                                    backgroundColor: color,
                                    borderRadius: radius,
                                    height: windSpeed * 4
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
//气压面板
const Pressure = (props)=>{
    const { color , radius , pressure  } = props;
    let p = parseFloat(pressure);
    let r = p / 3680 * 300;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-full h-40 flex justify-center items-center border border-[#2e2e2e]",
        style: {
            borderRadius: radius
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_8__.ChartPressure, {
                w: "100",
                h: "100",
                fill: color
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "absolute z-20 w-[100px] h-[100px] rounded-full flex items-center",
                initial: {
                    rotate: -20
                },
                animate: {
                    rotate: r
                },
                transition: {
                    duration: 1
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-4 h-1 rounded-full bg-white shadow-sm outline outline-2 outline-[#1A1A1A]"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute z-30 flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-base text-xl",
                        children: pressure
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtext-xs text-white -mt-1",
                        children: "百帕"
                    })
                ]
            })
        ]
    });
};
//湿度面板
const Humidity = (props)=>{
    const { color , radius , humidity  } = props;
    const circumference = 2 * Math.PI * 50 //边框长度
    ;
    let percent = parseFloat(humidity) / 100;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-full h-40 flex justify-center items-center border border-[#2e2e2e]",
        style: {
            borderRadius: radius
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                width: "100",
                height: "100",
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
                        stroke: color,
                        fill: "none" //填充颜色
                        ,
                        strokeWidth: "8" //边框宽度
                        ,
                        strokeLinecap: "round" //边框末端样式
                        ,
                        strokeDasharray: circumference,
                        r: "46" //半径
                        ,
                        cx: "50" //圆心x坐标
                        ,
                        cy: "50" //圆心y坐标
                        ,
                        transform: "rotate(-90 50 50)" //旋转90度
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        className: "opacity-20",
                        stroke: color,
                        fill: "none" //填充颜色
                        ,
                        strokeWidth: "8" //边框宽度
                        ,
                        strokeLinecap: "round" //边框末端样式
                        ,
                        strokeDasharray: circumference,
                        r: "46" //半径
                        ,
                        cx: "50" //圆心x坐标
                        ,
                        cy: "50" //圆心y坐标
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute z-30 flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "GCHtitle-base text-xl",
                        children: [
                            humidity,
                            "%"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtext-xs text-white -mt-1",
                        children: "湿度"
                    })
                ]
            })
        ]
    });
};
//核污染水面板
const Nuclear = (props)=>{
    const { color , radius , nuclearDay  } = props;
    const chemical = [
        {
            name: "氚",
            time: "12年"
        },
        {
            name: "碳-14",
            time: "5730年"
        },
        {
            name: "铷-86",
            time: "19天"
        },
        {
            name: "锶-89",
            time: "51天"
        },
        {
            name: "锶-90",
            time: "29年"
        },
        {
            name: "钇-90",
            time: "64小时"
        },
        {
            name: "铌-95",
            time: "35天"
        },
        {
            name: "锝-99",
            time: "21万年"
        },
        {
            name: "钌-103",
            time: "40天"
        },
        {
            name: "钌-106",
            time: "370天"
        },
        {
            name: "铑-103m",
            time: "56分钟"
        },
        {
            name: "铑-106",
            time: "30秒"
        },
        {
            name: "银-110m",
            time: "250天"
        },
        {
            name: "镉-113m",
            time: "15年"
        },
        {
            name: "镉-115m",
            time: "45天"
        },
        {
            name: "锡-119m",
            time: "290天"
        },
        {
            name: "锡-123",
            time: "130天"
        },
        {
            name: "锡-126",
            time: "10万年"
        },
        {
            name: "锑-124",
            time: "60天"
        },
        {
            name: "锑-125",
            time: "3年"
        },
        {
            name: "碲-123m",
            time: "120天"
        },
        {
            name: "碲-125m",
            time: "58天"
        },
        {
            name: "碲-127",
            time: "9小时"
        },
        {
            name: "碲-127m",
            time: "110天"
        },
        {
            name: "碲-129",
            time: "70分钟"
        },
        {
            name: "碲-129m",
            time: "34天"
        },
        {
            name: "碘-129",
            time: "1570万年"
        },
        {
            name: "铯-134",
            time: "2年"
        },
        {
            name: "铯-135",
            time: "300万年"
        },
        {
            name: "铯-136",
            time: "13天"
        },
        {
            name: "铯-137",
            time: "30年"
        },
        {
            name: "钡-137m",
            time: "3分钟"
        },
        {
            name: "钡-140",
            time: "13天"
        },
        {
            name: "铈-141",
            time: "32天"
        },
        {
            name: "铈-144",
            time: "284天"
        },
        {
            name: "镨-144",
            time: "17分钟"
        },
        {
            name: "镨-144m",
            time: "7分钟"
        },
        {
            name: "钷-146",
            time: "6年"
        },
        {
            name: "钷-147",
            time: "3年"
        },
        {
            name: "钷-148",
            time: "5天"
        },
        {
            name: "钷-148m",
            time: "41天"
        },
        {
            name: "钐-151",
            time: "87年"
        },
        {
            name: "铕-152",
            time: "13年"
        },
        {
            name: "铕-154",
            time: "9年"
        },
        {
            name: "铕-155",
            time: "4.8年"
        },
        {
            name: "钆-153",
            time: "240天"
        },
        {
            name: "铽-160",
            time: "72天"
        },
        {
            name: "钚-238",
            time: "88年"
        },
        {
            name: "钚-239",
            time: "24万年"
        },
        {
            name: "钚-240",
            time: "6561年"
        },
        {
            name: "钚-241",
            time: "14年"
        },
        {
            name: "镅-241",
            time: "430年"
        },
        {
            name: "镅-242m",
            time: "150年"
        },
        {
            name: "镅-243",
            time: "7400年"
        },
        {
            name: "锔-242",
            time: "160天"
        },
        {
            name: "锔-243",
            time: "29年"
        },
        {
            name: "锔-244",
            time: "18年"
        },
        {
            name: "锰-54",
            time: "310天"
        },
        {
            name: "铁-59",
            time: "45天"
        },
        {
            name: "钴-58",
            time: "71天"
        },
        {
            name: "钴-60",
            time: "5.3年"
        },
        {
            name: "镍-63",
            time: "100年"
        },
        {
            name: "锌-65",
            time: "240天"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-full flex flex-col mt-5 gap-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtext-sm text-white",
                        children: "当前日本核污染水排放量（预估）/ 吨"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row justify-between mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHheading-md text-6xl",
                                children: 456 * nuclearDay - 800
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-[108px] relative h-7 flex flex-row gap-1 rounded-full items-center justify-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtitle-xs",
                                        style: {
                                            color: color
                                        },
                                        children: "约456吨/天"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_8__.ChartWindPointer, {
                                        w: "16",
                                        h: "16",
                                        fill: color
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full absolute h-7 rounded-full opacity-20",
                                        style: {
                                            backgroundColor: color,
                                            borderRadius: radius
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-row justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-[#97979B]",
                                children: "核污染水中高达64种核放射性物质"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-xs",
                                children: "66%放射性物质含量超标"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[66%] h-3 z-10",
                                style: {
                                    backgroundColor: color,
                                    borderRadius: radius
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute w-full h-3 opacity-20",
                                style: {
                                    backgroundColor: color,
                                    borderRadius: radius
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " w-full h-60 rounded-lg flex flex-col border border-[#2e2e2e]",
                style: {
                    borderRadius: radius
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full px-5 py-3 grid grid-cols-2 items-center rounded-t-lg border-b-[1px] border-white/10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-sm",
                                children: "元素"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-sm",
                                children: "半衰期"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " h-full px-5 overflow-auto divide-y divide-white/10",
                        children: chemical.map((item, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full py-3 grid grid-cols-2 items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-sm text-white",
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtitle-sm",
                                        style: {
                                            color: color
                                        },
                                        children: item.time
                                    })
                                ]
                            }, index);
                        })
                    })
                ]
            })
        ]
    });
};
//请求和风天气网络数据
async function getWeatherData() {
    const res = await fetch("https://devapi.qweather.com/v7/weather/now?location=101010100&key=719ad4dc0c884959b7b4186d7a95f906");
    if (!res.ok) {
        throw new Error("天气数据获取失败！");
    }
    return res.json();
}
//日期计算
function GetDaysBetweenDates() {
    const currentDate = new Date();
    // const currentTime = currentDate.toLocaleTimeString();  // 获取当前时间
    const currentDay = currentDate.toLocaleDateString(); // 获取当前日期
    // 将日期字符串转换为Date对象
    const startDate = new Date("2023-08-24");
    const endDate = new Date(currentDay);
    // 计算两个日期之间的毫秒数差值
    const timeDiff = endDate.getTime() - startDate.getTime();
    // 将毫秒数差值转换为天数
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff + 1;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8285:
/***/ (() => {



/***/ })

};
;
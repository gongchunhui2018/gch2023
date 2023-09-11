"use strict";
exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherAPP)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_weatherParse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5598);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-09-09 23:06:22
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 06:19:40
 * @FilePath: /gch2023/pages/designCode/weatherAPP.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 




//请求和风天气网络数据
async function getWeatherData() {
    const res = await fetch("https://devapi.qweather.com/v7/weather/now?location=101010100&key=719ad4dc0c884959b7b4186d7a95f906");
    if (!res.ok) {
        throw new Error("天气数据获取失败！");
    }
    return res.json();
}
//获取时间
const currentDate = new Date(); //获取当前时间判断白天晚上
const month = currentDate.getMonth() + 1; // 获取当前月份（注意：月份从0开始，需要加1）
const day = currentDate.getDate(); // 获取当前日期
const currentHour = currentDate.getHours();
const isDay = currentHour >= 6 && currentHour < 18; // 假设白天是从早上6点到晚上18点
//天气App
function WeatherAPP() {
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
        className: "relative w-[67.5rem] h-[24rem] rounded-2xl grid grid-cols-2 gap-3 p-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex flex-col items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WeatherTemp, {
                    text: weatherData.now.text,
                    temp: weatherData.now.temp,
                    feelsLike: weatherData.now.feelsLike,
                    icon: weatherData.now.icon,
                    vis: weatherData.now.vis,
                    cloud: weatherData.now.cloud,
                    pressure: weatherData.now.pressure,
                    obsTime: weatherData.now.obsTime,
                    wind360: weatherData.now.wind360,
                    windDir: weatherData.now.windDir,
                    windSpeed: weatherData.now.windSpeed,
                    windScale: weatherData.now.windScale
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full grid grid-cols-3 gap-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WeatherFeelsLike, {
                        feelsLike: weatherData.now.feelsLike,
                        cloud: weatherData.now.cloud
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WeatherRain, {
                        precip: weatherData.now.precip,
                        cloud: weatherData.now.cloud
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WeatherHumidity, {
                        humidity: weatherData.now.humidity,
                        dew: weatherData.now.dew,
                        cloud: weatherData.now.cloud
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WeatherVisibility, {
                        vis: weatherData.now.vis,
                        cloud: weatherData.now.cloud
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WeatherDewPoint, {
                        dew: weatherData.now.dew,
                        cloud: weatherData.now.cloud
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WeatherUV, {
                        cloud: weatherData.now.cloud
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WeatherBgColor, {
                cloud: weatherData.now.cloud
            })
        ]
    });
}
//温度面板
const WeatherTemp = (props)=>{
    const { text , temp , icon , pressure , obsTime , cloud , wind360 , windScale , windDir , windSpeed  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-full flex flex-col gap-6 z-20",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-row items-end gap-8 px-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-1 items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "GCHheading-xl text-center",
                                children: [
                                    temp,
                                    "\xb0"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col -mt-2 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_weatherParse__WEBPACK_IMPORTED_MODULE_3__.WeatherIcon, {
                                        iconId: icon,
                                        iconSize: "56"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHheading-sm text-center",
                                        children: text
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col mb-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row justify-end",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHheading-sm text-end",
                                        children: [
                                            month,
                                            "月"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHheading-sm text-end",
                                        children: [
                                            day,
                                            "日"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-end text-white/60",
                                children: "观测时间"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-end text-white/60",
                                children: obsTime
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full grid grid-cols-[1fr_0.48fr] gap-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WeatherWind, {
                        wind360: wind360,
                        windScale: windScale,
                        windDir: windDir,
                        windSpeed: windSpeed,
                        cloud: cloud
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WeatherPressure, {
                        pressure: pressure,
                        cloud: cloud
                    })
                ]
            })
        ]
    });
};
//风速
const WeatherWind = (props)=>{
    const { wind360 , windScale , windDir , windSpeed , cloud  } = props;
    let rotate = parseFloat(wind360);
    let windFell = "叶动红旗展";
    let wind = "微风";
    if (windScale == 0) {
        windFell = "烟柱直冲天", wind = "无风";
    }
    if (windScale == 1) {
        windFell = "青烟随风偏", wind = "软风";
    }
    if (windScale == 2) {
        windFell = "风来吹脸面", wind = "轻风";
    }
    if (windScale == 3) {
        windFell = "叶动红旗展", wind = "微风";
    }
    if (windScale == 4) {
        windFell = "风吹纸片飞", wind = "和风";
    }
    if (windScale == 5) {
        windFell = "带叶小树摇", wind = "劲风";
    }
    if (windScale == 6) {
        windFell = "举伞步行艰", wind = "强风";
    }
    if (windScale == 7) {
        windFell = "迎风走不便", wind = "疾风";
    }
    if (windScale == 8) {
        windFell = "风吹树枝断", wind = "大风";
    }
    if (windScale == 9) {
        windFell = "屋顶飞瓦片", wind = "烈风";
    }
    if (windScale == 10) {
        windFell = "拔树又倒屋", wind = "狂风";
    }
    if (windScale > 10) {
        windFell = "陆上很少见", wind = "台风";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-full grid grid-cols-[1fr_0.5fr] gap-3 px-4 py-3 rounded-2xl ${(0,_components_weatherParse__WEBPACK_IMPORTED_MODULE_3__.WeatherCard)({
            cloud: cloud
        })}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__.IconWind, {
                                w: "18",
                                h: "18",
                                fill: "rgba(255,255,255,0.6)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-white/60",
                                children: "风"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " flex flex-row gap-3 border-b border-white/10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHheading-xs mt-[17px]",
                                children: windDir
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row gap-1 items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHheading-md",
                                        children: windScale
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "GCHtext-xs text-white/60",
                                                children: "级"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "GCHtext-xs text-white",
                                                children: windFell
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-1 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHheading-md",
                                children: windSpeed
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-xs text-white/60",
                                        children: "公里/小时"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-xs text-white",
                                        children: wind
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex justify-center items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: "rounded-full flex items-center justify-center",
                        initial: {
                            rotate: 0
                        },
                        animate: {
                            rotate: rotate
                        },
                        transition: {
                            duration: 1
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__.ChartWindPointerB, {
                            w: "100",
                            h: "100",
                            fill: "#ffffff"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute rounded-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__.ChartWindBg, {
                            w: "100",
                            h: "100"
                        })
                    })
                ]
            })
        ]
    });
};
//气压
const WeatherPressure = (props)=>{
    const { pressure , cloud  } = props;
    let p = parseFloat(pressure);
    let r = p / 3680 * 300;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-full flex flex-col px-4 py-3 rounded-2xl ${(0,_components_weatherParse__WEBPACK_IMPORTED_MODULE_3__.WeatherCard)({
            cloud: cloud
        })}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row gap-2 items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__.IconPressure, {
                        w: "18",
                        h: "18",
                        fill: "rgba(255,255,255,0.6)"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtext-xs text-white/60",
                        children: "气压"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative w-full flex items-center justify-center mt-9",
                children: [
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
                            className: "w-4 h-1 rounded-full bg-white shadow-sm"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col items-center justify-center",
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
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: " absolute z-10",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "100",
                        height: "100",
                        viewBox: "0 0 100 100",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            fill: "none",
                            "fill-rule": "evenodd",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "#FFF",
                                    "fill-rule": "nonzero",
                                    d: "M73.3872054,88 L72.0740741,88.2145923 C72.1863075,88.4077253 72.2873176,88.6223176 72.3883277,88.8583691 L68,88.8583691 L68,89.888412 L78,89.888412 L78,88.8583691 L73.667789,88.8583691 C73.5780022,88.5472103 73.4769921,88.2575107 73.3872054,88 Z M76.1705948,97.9678112 C77.0796857,97.9678112 77.5398429,97.5922747 77.5398429,96.8519313 L77.5398429,93.0321888 L68.4713805,93.0321888 L68.4713805,98 L69.5824916,98 L69.5824916,93.9978541 L76.4287318,93.9978541 L76.4287318,96.6266094 C76.4287318,96.8841202 76.2267116,97.0128755 75.8338945,97.0128755 L74.969697,96.9806867 L75.2502806,97.9678112 L76.1705948,97.9678112 Z M69.7283951,90.3283262 L69.7283951,92.6030043 L76.2940516,92.6030043 L76.2940516,90.3283262 L69.7283951,90.3283262 Z M75.1717172,91.7660944 L70.8507295,91.7660944 L70.8507295,91.1652361 L75.1717172,91.1652361 L75.1717172,91.7660944 Z M70.704826,94.4270386 L70.704826,96.7446352 L75.328844,96.7446352 L75.328844,94.4270386 L70.704826,94.4270386 Z M74.2962963,95.9184549 L71.7373737,95.9184549 L71.7373737,95.2532189 L74.2962963,95.2532189 L74.2962963,95.9184549 Z M26.513369,92.9463519 L28.6417112,92.9463519 C28.7058824,93.472103 28.7807487,93.944206 28.8770053,94.3626609 C29.1550802,95.5643777 29.486631,96.4549356 29.8823529,97.0128755 C30.2780749,97.5708155 30.6524064,97.860515 31.0160428,97.860515 C31.4545455,97.860515 31.7860963,97.055794 32,95.4570815 L31.0802139,94.9527897 L31.0460147,95.3496169 C30.9720261,96.1485455 30.8991087,96.5515021 30.8342246,96.5515021 C30.7581699,96.5515021 30.6314122,96.3819478 30.4689744,96.0579105 L30.4064171,95.9291845 C30.2032086,95.5321888 30.0213904,94.8669528 29.8502674,93.9334764 C29.7860963,93.6545064 29.7433155,93.332618 29.7112299,92.9463519 L31.7433155,92.9463519 L31.7433155,91.8841202 L29.6256684,91.8841202 L29.5918679,91.2942104 C29.5662992,90.778532 29.5477464,90.2026364 29.540107,89.5665236 C30.2352941,89.3948498 30.8449198,89.223176 31.368984,89.0515021 L30.7593583,88.1609442 C29.4438503,88.5901288 27.6684492,88.9656652 25.4331551,89.2982833 L25.4331551,96.1437768 C25.4331551,96.4227468 25.2834225,96.6158798 24.9839572,96.7124464 L25.2727273,97.667382 C26.0855615,97.3991416 26.7914439,97.1416309 27.4010695,96.9055794 L27.2192513,95.9399142 C26.9839572,96.0579399 26.7486631,96.1652361 26.513369,96.2725322 L26.513369,92.9463519 Z M28.459893,89.8025751 C28.4705882,90.5429185 28.5026738,91.2403433 28.5454545,91.8841202 L26.513369,91.8841202 L26.513369,90.1459227 C27.2085561,90.0386266 27.8609626,89.9206009 28.459893,89.8025751 Z M28.2139037,95.4570815 L27.4545455,96.0042918 C27.9679144,96.7339056 28.3850267,97.388412 28.7058824,97.9785408 L29.540107,97.3991416 C29.2299465,96.8412017 28.7914439,96.1866953 28.2139037,95.4570815 Z M24.342246,88 C23.828877,89.6309013 23.0481283,91.0472103 22,92.248927 L22.3636364,93.4291845 C22.684492,93.0858369 22.9946524,92.7317597 23.2834225,92.3669528 L23.2834225,98 L24.3743316,98 L24.3743316,90.7360515 C24.7807487,90.0171674 25.1016043,89.2660944 25.3582888,88.4828326 L24.342246,88 Z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "#FFF",
                                    "fill-opacity": ".2",
                                    "fill-rule": "nonzero",
                                    d: "M49.999999,1 C59.6928687,1 69.1679369,3.88095599 77.2266186,9.27818377 C85.2839184,14.674664 91.5633909,22.3441207 95.271665,31.3169709 C98.9786758,40.289082 99.9487731,50.160756 98.0588683,59.6838666 C96.1687074,69.2082674 91.5030765,77.9574684 84.6515127,84.8251104 C83.0912473,86.3890372 80.5585891,86.3920054 78.9946623,84.83174 C77.4307355,83.2714746 77.4277674,80.7388164 78.9880328,79.1748896 C84.7231727,73.4262912 88.6292597,66.1014214 90.2118995,58.1265998 C91.7945085,50.151933 90.9821091,41.8849872 87.878044,34.3721909 C84.7737235,26.8607173 79.5176573,20.4412016 72.7748301,15.9251063 C66.0330317,11.409849 58.1073697,9 49.999999,9 C41.8926365,9 33.9669746,11.4098494 27.2252275,15.9250724 C20.48231,20.4412282 15.2262899,26.8607438 12.1222049,34.3720786 C9.01776643,41.8844845 8.20547141,50.1513041 9.78821366,58.1266419 C11.3707529,66.1014059 15.2768146,73.4262715 21.0119742,79.1748896 C22.5722396,80.7388164 22.5692715,83.2714746 21.0053447,84.83174 C19.4414179,86.3920054 16.9087597,86.3890372 15.3484943,84.8251104 C8.49689596,77.9574337 3.83127903,69.2082076 1.94123645,59.6838666 C0.0511970018,50.1600776 1.02118949,40.2883529 4.7286459,31.3167087 C8.43655828,22.3442187 14.7160166,14.6747123 22.773439,9.27814983 C30.8320692,3.88095654 40.3071373,1 49.999999,1 Z"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
//体感温度
const WeatherFeelsLike = (props)=>{
    const { feelsLike , cloud  } = props;
    let feel = "舒适";
    if (30 < feelsLike && feelsLike <= 50) {
        feel = "感觉炎热，小心中暑";
    }
    if (26 < feelsLike && feelsLike <= 30) {
        feel = "温度较高，感觉炎热";
    }
    if (18 < feelsLike && feelsLike <= 26) {
        feel = "温度舒适";
    }
    if (12 < feelsLike && feelsLike <= 18) {
        feel = "温度较低，感觉凉爽";
    }
    if (6 < feelsLike && feelsLike <= 12) {
        feel = "降温啦，注意保暖";
    }
    if (-6 < feelsLike && feelsLike <= 6) {
        feel = "感觉寒冷，注意保暖";
    }
    if (-30 < feelsLike && feelsLike <= -6) {
        feel = "温度过低，小心冻伤";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-full z-20 px-4 py-3 flex flex-col justify-between rounded-2xl ${(0,_components_weatherParse__WEBPACK_IMPORTED_MODULE_3__.WeatherCard)({
            cloud: cloud
        })}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__.IconBody, {
                                w: "18",
                                h: "18",
                                fill: "rgba(255,255,255,0.6)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-white/60",
                                children: "体感温度"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "GCHheading-md",
                        children: [
                            feelsLike,
                            "\xb0"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHtext-xs text-white",
                children: feel
            })
        ]
    });
};
//降水
const WeatherRain = (props)=>{
    const { precip , cloud  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-full z-20 px-4 py-3 flex flex-col justify-between rounded-2xl ${(0,_components_weatherParse__WEBPACK_IMPORTED_MODULE_3__.WeatherCard)({
            cloud: cloud
        })}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__.IconRain, {
                                w: "18",
                                h: "18",
                                fill: "rgba(255,255,255,0.6)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-white/60",
                                children: "降水"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "GCHheading-md",
                        children: [
                            precip,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "GCHtitle-base",
                                children: "毫米"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHtext-xs text-white",
                children: "当前小时累计降水量"
            })
        ]
    });
};
//湿度
const WeatherHumidity = (props)=>{
    const { humidity , cloud  } = props;
    let hum = "环境舒适";
    if (0 < humidity && humidity <= 40) {
        hum = "环境干燥";
    }
    if (40 < humidity && humidity <= 60) {
        hum = "环境舒适";
    }
    if (60 < humidity && humidity <= 100) {
        hum = "环境湿润";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-full z-20 px-4 py-3 flex flex-col justify-between rounded-2xl ${(0,_components_weatherParse__WEBPACK_IMPORTED_MODULE_3__.WeatherCard)({
            cloud: cloud
        })}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__.IconHumidity, {
                                w: "18",
                                h: "18",
                                fill: "rgba(255,255,255,0.6)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-white/60",
                                children: "湿度"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "GCHheading-md",
                        children: [
                            humidity,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "GCHtitle-base",
                                children: "%"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHtext-xs text-white",
                children: hum
            })
        ]
    });
};
//能见度
const WeatherVisibility = (props)=>{
    const { vis , cloud  } = props;
    let feelVis = "视野清晰";
    if (20 < vis) {
        feelVis = "视野清晰";
    }
    if (15 < vis && vis <= 20) {
        feelVis = "视野较好";
    }
    if (5 < vis && vis <= 15) {
        feelVis = "视野一般";
    }
    if (vis <= 5) {
        feelVis = "视野很差";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-full z-20 px-4 py-3 flex flex-col justify-between rounded-2xl ${(0,_components_weatherParse__WEBPACK_IMPORTED_MODULE_3__.WeatherCard)({
            cloud: cloud
        })}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__.IconEye, {
                                w: "18",
                                h: "18",
                                fill: "rgba(255,255,255,0.6)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-white/60",
                                children: "能见度"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "GCHheading-md",
                        children: [
                            vis,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "GCHtitle-base",
                                children: "公里"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHtext-xs text-white",
                children: feelVis
            })
        ]
    });
};
//露点温度
const WeatherDewPoint = (props)=>{
    const { dew , cloud  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-full z-20 px-4 py-3 flex flex-col justify-between rounded-2xl ${(0,_components_weatherParse__WEBPACK_IMPORTED_MODULE_3__.WeatherCard)({
            cloud: cloud
        })}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__.IconDew, {
                                w: "18",
                                h: "18",
                                fill: "rgba(255,255,255,0.6)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-white/60",
                                children: "露点温度"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "GCHheading-md",
                        children: [
                            dew,
                            "\xb0"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHtext-xs text-white",
                children: "0\xb0以上为露点"
            })
        ]
    });
};
//紫外线指数
const WeatherUV = (props)=>{
    const { cloud  } = props;
    let UV = 0;
    let UVText = "紫外线最弱";
    let left = "0";
    if (isDay && currentHour > 9) {
        let p = cloud / 100;
        let UVFloat = 10 * (1 - p);
        UV = Math.round(UVFloat);
        left = Math.round((1 - p) * 100).toString() + "%";
    }
    if (0 < UV && UV <= 2) {
        UVText = "紫外线最弱";
    }
    if (2 < UV && UV <= 4) {
        UVText = "紫外线较弱";
    }
    if (4 < UV && UV <= 6) {
        UVText = "紫外线中等";
    }
    if (6 < UV && UV <= 8) {
        UVText = "紫外线强";
    }
    if (8 < UV && UV <= 10) {
        UVText = "紫外线强烈";
    }
    if (10 < UV) {
        UVText = "紫外线极强";
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-full z-20 px-4 py-3 flex flex-col justify-between rounded-2xl ${(0,_components_weatherParse__WEBPACK_IMPORTED_MODULE_3__.WeatherCard)({
            cloud: cloud
        })}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-2 items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_4__.IconUv, {
                                w: "18",
                                h: "18",
                                fill: "rgba(255,255,255,0.6)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-white/60",
                                children: "紫外线指数"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "GCHtitle-base text-lg",
                                children: [
                                    UV,
                                    "级"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative w-full h-1 flex items-center rounded-full bg-gradient-to-r from-[#facc15] via-[#f97316] to-[#a855f7]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `absolute left-[${left}] w-2 h-2 rounded-full bg-white shadow-md `
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "GCHtext-xs text-white",
                children: UVText
            })
        ]
    });
};
//天气背景
const WeatherBgColor = (props)=>{
    const { cloud  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `absolute  top-0 left-0 w-[67.5rem] h-[24rem] rounded-2xl ${(0,_components_weatherParse__WEBPACK_IMPORTED_MODULE_3__.WeatherBg)({
            cloud: cloud
        })}`
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
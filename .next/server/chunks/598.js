"use strict";
exports.id = 598;
exports.ids = [598];
exports.modules = {

/***/ 5598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherBg": () => (/* binding */ WeatherBg),
/* harmony export */   "WeatherCard": () => (/* binding */ WeatherCard),
/* harmony export */   "WeatherIcon": () => (/* binding */ WeatherIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4170);
/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-09-09 19:22:29
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 15:36:16
 * @FilePath: /gch2023/pages/components/weatherParse.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 


//获取时间
const currentDate = new Date(); //获取当前时间判断白天晚上
const currentHour = currentDate.getHours();
const isDay = currentHour >= 6 && currentHour < 18; // 假设白天是从早上6点到晚上7点
//1.返回天气图标
const WeatherIcon = (props)=>{
    const iconId = props.iconId || "100";
    const iconSize = props.iconSize || "24";
    const weatherIcon = {
        "100": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSun, {
            w: iconSize,
            h: iconSize
        }),
        "101": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSunCloud, {
            w: iconSize,
            h: iconSize
        }),
        "102": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSunCloud, {
            w: iconSize,
            h: iconSize
        }),
        "103": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSunCloud, {
            w: iconSize,
            h: iconSize
        }),
        "104": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherCloud, {
            w: iconSize,
            h: iconSize
        }),
        "150": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherMoon, {
            w: iconSize,
            h: iconSize
        }),
        "151": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherMoonCloud, {
            w: iconSize,
            h: iconSize
        }),
        "152": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherMoonCloud, {
            w: iconSize,
            h: iconSize
        }),
        "153": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherMoonCloud, {
            w: iconSize,
            h: iconSize
        }),
        "300": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSunRain, {
            w: iconSize,
            h: iconSize
        }),
        "301": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSunRain, {
            w: iconSize,
            h: iconSize
        }),
        "302": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherBoltRain, {
            w: iconSize,
            h: iconSize
        }),
        "303": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherBoltRain, {
            w: iconSize,
            h: iconSize
        }),
        "304": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherBoltRain, {
            w: iconSize,
            h: iconSize
        }),
        "305": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "306": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "307": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "308": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "309": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "310": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "311": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "312": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "313": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "314": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "315": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "316": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "317": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "318": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "350": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherMoonRain, {
            w: iconSize,
            h: iconSize
        }),
        "351": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherMoonRain, {
            w: iconSize,
            h: iconSize
        }),
        "399": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherRain, {
            w: iconSize,
            h: iconSize
        }),
        "400": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "401": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "402": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "403": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "404": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "405": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "406": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "407": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "408": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "409": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "410": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "456": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "457": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "499": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "500": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "501": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "502": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "503": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "504": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "507": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "508": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "509": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "510": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "511": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "512": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "513": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "514": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "515": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSmoke, {
            w: iconSize,
            h: iconSize
        }),
        "900": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSun, {
            w: iconSize,
            h: iconSize
        }),
        "901": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        }),
        "999": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__.WeatherSnow, {
            w: iconSize,
            h: iconSize
        })
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: weatherIcon[iconId]
    });
};
//2.返回天气背景
const WeatherBg = (props)=>{
    const cloud = props.cloud || 10;
    if (isDay) {
        if (0 < cloud && cloud <= 40) {
            return "bg-gradient-to-b from-[#0284C7] via-[#0EA5E9] to-[#38BDF8]";
        }
        if (40 < cloud && cloud <= 80) {
            return "bg-gradient-to-b from-[#0369A1] via-[#0284C7] to-[#0EA5E9]";
        }
        if (80 < cloud && cloud <= 100) {
            return "bg-gradient-to-b from-[#155E75] via-[#0E7490] to-[#0891B2]";
        }
    } else {
        if (0 < cloud && cloud <= 80) {
            return "bg-gradient-to-b from-[#030317] via-[#1F233D] to-[#293654]";
        }
        if (80 < cloud & cloud <= 100) {
            return "bg-gradient-to-b from-[#010111] via-[#151830] to-[#1D2945]";
        }
    }
};
//3.返回天气卡片背景
const WeatherCard = (props)=>{
    const cloud = props.cloud || 10;
    if (isDay) {
        if (0 < cloud && cloud <= 40) {
            return "bg-[#0284C7]/50 ";
        }
        if (40 < cloud && cloud <= 80) {
            return "bg-[#0369A1]/50  ";
        }
        if (80 < cloud && cloud <= 100) {
            return "bg-[#155E75]/50  ";
        }
    } else {
        if (0 < cloud && cloud <= 80) {
            return "bg-[#030317]/50  ";
        }
        if (80 < cloud && cloud <= 100) {
            return "bg-[#010111]/50 ";
        }
    }
};


/***/ })

};
;
"use strict";
exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorPicker": () => (/* binding */ ColorPicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6303);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_colorful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9559);
/* harmony import */ var _colorsManagement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9947);
/* harmony import */ var color_blind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(861);
/* harmony import */ var color_blind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(color_blind__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_colorful__WEBPACK_IMPORTED_MODULE_3__]);
react_colorful__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-06-02 19:41:55
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-09 21:16:38
 * @FilePath: /gchct/Components/GCHUI/colorPicker.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 





//存放备选色的参数
let red = "#ff0000";
let yellow = "#ffff00";
let green = "#008000";
let blue = "#0000ff";
//初始化颜色
const initailColor = [
    "#dc2626",
    "#eab308",
    "#22c55e",
    "#3b82f6"
];
//选色板
const ColorPicker = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "GCHcard w-[67.5rem] flex flex-col gap-12 p-5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full grid grid-cols-4 gap-5",
                children: initailColor.map((item, index)=>{
                    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item);
                    ColorClassify({
                        flag: index,
                        color: color
                    });
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full rounded-2xl flex flex-col gap-2 items-center py-5 border border-[#2e2e2e]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_colorful__WEBPACK_IMPORTED_MODULE_3__.HexColorPicker, {
                                className: "w-full h-auto",
                                color: color,
                                onChange: setColor
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorDerivation, {
                                color: color,
                                setColor: setColor
                            })
                        ]
                    }, index);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorExtension, {})
        ]
    });
};
//hex颜色输入面板
const HexIput = (props)=>{
    const { color , setColor  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative flex items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "GCHtitle-sm text-textSecondary-dark absolute left-2",
                children: "#"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_colorful__WEBPACK_IMPORTED_MODULE_3__.HexColorInput, {
                color: color,
                onChange: setColor,
                className: "GCHtitle-sm w-full rounded-lg bg-[#0F0F0F] outline outline-1 outline-white/10 pl-6 py-2 hover:bg-bgSecondary-dark/100 focus:outline-2 focus:outline-offset-0 focus:outline-blue-500"
            })
        ]
    });
};
//色彩推演面板
const ColorDerivation = (props)=>{
    const { color , setColor  } = props;
    const [mix, setMix] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.5);
    const handleMix = (e)=>{
        setMix(e.target.value);
    };
    //获取颜色的色相并取整
    const hue = Math.round(chroma_js__WEBPACK_IMPORTED_MODULE_2___default()(color).hcl()[0]);
    //获取颜色的饱和度,并取整
    const saturation = Math.round(chroma_js__WEBPACK_IMPORTED_MODULE_2___default()(color).hcl()[1]);
    //获取颜色的亮度
    const lightness = Math.round(chroma_js__WEBPACK_IMPORTED_MODULE_2___default()(color).hcl()[2]);
    //获取以上色相外的其他色相
    const hue1 = hue + 30;
    const hue2 = hue1 + 30;
    const hue3 = hue2 + 30;
    const hue4 = hue3 + 30;
    const hue5 = hue4 + 30;
    const hue6 = hue5 + 30;
    //将以上色相转换为同亮度同饱和度的hex颜色
    const color1 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hcl(hue1, saturation, lightness).hex();
    const color2 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hcl(hue2, saturation, lightness).hex();
    const color3 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hcl(hue3, saturation, lightness).hex();
    const color4 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hcl(hue4, saturation, lightness).hex();
    const color5 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hcl(hue5, saturation, lightness).hex();
    const color6 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().hcl(hue6, saturation, lightness).hex();
    //混合以上颜色
    const colorMix1 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().mix(color, color1, mix, "lab").hex();
    const colorMix2 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().mix(color, color2, mix, "lab").hex();
    const colorMix3 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().mix(color, color3, mix, "lab").hex();
    const colorMix4 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().mix(color, color4, mix, "lab").hex();
    const colorMix5 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().mix(color, color5, mix, "lab").hex();
    const colorMix6 = chroma_js__WEBPACK_IMPORTED_MODULE_2___default().mix(color, color6, mix, "lab").hex();
    //将以上结果打包为数组
    const colorArray = [
        colorMix1,
        colorMix2,
        colorMix3,
        colorMix4,
        colorMix5,
        colorMix6
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col gap-5 px-5 mt-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HexIput, {
                        color: color,
                        setColor: setColor
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "relative flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "GCHtitle-sm text-textSecondary-dark absolute left-2",
                                children: "Mix:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "0-1",
                                value: mix,
                                type: "text",
                                onChange: handleMix,
                                className: "GCHtitle-sm w-full rounded-lg bg-[#0F0F0F] outline outline-1 outline-white/10 pl-11 py-2 hover:bg-bgSecondary-dark/100 focus:outline-2 focus:outline-offset-0 focus:outline-blue-500"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full grid grid-cols-[64px_1fr] gap-7",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-16 h-16 rounded-lg border border-white/10",
                        style: {
                            backgroundColor: color
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full grid grid-cols-3 gap-2",
                        children: colorArray.map((color, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                style: {
                                    backgroundColor: color
                                },
                                onClick: ()=>setColor(color),
                                className: "w-7 h-7 rounded-full border border-white/10 outline outline-2 -outline-offset-[6px] outline-[#141414]/0 hover:outline-[#141414]/40 focus:outline-[#141414]"
                            }, index))
                    })
                ]
            })
        ]
    });
};
//色彩延展
const ColorExtension = ()=>{
    const redPalette = []; //红色色板接收延展的颜色
    const yellowPalette = []; //黄色色板接收延展的颜色
    const greenPalette = []; //绿色色板接收延展的颜色
    const bluePalette = []; //蓝色色板接收延展的颜色
    //监听颜色变量的变化
    // const [red, setRed] = useColor(Red)
    // const [yellow, setYellow] = useColor(Yellow)
    // const [green, setGreen] = useColor(Green)
    // const [blue, setBlue] = useColor(Blue)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
    // console.log(red, yellow, green, blue)
    }, [
        red,
        yellow,
        green,
        blue
    ]);
    //延展红色
    chroma_js__WEBPACK_IMPORTED_MODULE_2___default().scale([
        red,
        yellow
    ]).mode("hcl").colors(6).forEach((color)=>{
        redPalette.push(color);
    });
    //延展黄色
    chroma_js__WEBPACK_IMPORTED_MODULE_2___default().scale([
        yellow,
        green
    ]).mode("hcl").colors(6).forEach((color)=>{
        yellowPalette.push(color);
    });
    //延展绿色
    chroma_js__WEBPACK_IMPORTED_MODULE_2___default().scale([
        green,
        blue
    ]).mode("hcl").colors(6).forEach((color)=>{
        greenPalette.push(color);
    });
    //延展蓝色
    chroma_js__WEBPACK_IMPORTED_MODULE_2___default().scale([
        blue,
        red
    ]).mode("hcl").colors(6).forEach((color)=>{
        bluePalette.push(color);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-auto flex flex-col items-center gap-5",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full py-3 grid grid-cols-[0.16fr_0.16fr_1fr_0.6fr] gap-16 items-center rounded-t-lg border-b-[1px] border-white/10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-sm text-center",
                        children: "P3"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-sm text-center",
                        children: "sRGB"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-sm text-center",
                        children: "过渡色"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtitle-sm text-center",
                        children: "无障碍检测（红、绿、蓝色弱）"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full grid grid-cols-[0.16fr_0.16fr_1fr_0.6fr] items-center gap-16 py-2 border-b-[1px] border-white/10 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: red
                                },
                                className: "w-14 h-7 rounded-md border border-white/10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-center",
                                children: red
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: (0,_colorsManagement__WEBPACK_IMPORTED_MODULE_4__.P3toSRGB)({
                                        color: red,
                                        colorModel: "hcl"
                                    })
                                },
                                className: "w-14 h-7 rounded-md border border-white/10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-center",
                                children: (0,_colorsManagement__WEBPACK_IMPORTED_MODULE_4__.P3toSRGB)({
                                    color: red,
                                    colorModel: "hcl"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full flex flex-row",
                        children: redPalette.map((color, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }, index),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-xs text-center",
                                        children: color
                                    })
                                ]
                            }))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-row justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().protanomaly(red)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "红 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().protanomaly(red)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().deuteranomaly(red)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "绿 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().deuteranomaly(red)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().tritanomaly(red)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "蓝 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().tritanomaly(red)
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full grid grid-cols-[0.16fr_0.16fr_1fr_0.6fr] items-center gap-16 py-2 border-b-[1px] border-white/10 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: yellow
                                },
                                className: "w-14 h-7 rounded-md border border-white/10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-center",
                                children: yellow
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: (0,_colorsManagement__WEBPACK_IMPORTED_MODULE_4__.P3toSRGB)({
                                        color: yellow,
                                        colorModel: "hcl"
                                    })
                                },
                                className: "w-14 h-7 rounded-md border border-white/10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-center",
                                children: (0,_colorsManagement__WEBPACK_IMPORTED_MODULE_4__.P3toSRGB)({
                                    color: yellow,
                                    colorModel: "hcl"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full flex flex-row justify-between",
                        children: yellowPalette.map((color, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }, index),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-xs text-center",
                                        children: color
                                    })
                                ]
                            }))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-row justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().protanomaly(yellow)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "红 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().protanomaly(yellow)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().deuteranomaly(yellow)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "绿 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().deuteranomaly(yellow)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().tritanomaly(yellow)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "蓝 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().tritanomaly(yellow)
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full grid grid-cols-[0.16fr_0.16fr_1fr_0.6fr] items-center gap-16 py-2 border-b-[1px] border-white/10 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: green
                                },
                                className: "w-14 h-7 rounded-md border border-white/10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-center",
                                children: green
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: (0,_colorsManagement__WEBPACK_IMPORTED_MODULE_4__.P3toSRGB)({
                                        color: green,
                                        colorModel: "hcl"
                                    })
                                },
                                className: "w-14 h-7 rounded-md border border-white/10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-center",
                                children: (0,_colorsManagement__WEBPACK_IMPORTED_MODULE_4__.P3toSRGB)({
                                    color: green,
                                    colorModel: "hcl"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full flex flex-row justify-between",
                        children: greenPalette.map((color, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }, index),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-xs text-center",
                                        children: color
                                    })
                                ]
                            }))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-row justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().protanomaly(green)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "红 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().protanomaly(green)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().deuteranomaly(green)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "绿 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().deuteranomaly(green)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().tritanomaly(green)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "蓝 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().tritanomaly(green)
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full grid grid-cols-[0.16fr_0.16fr_1fr_0.6fr] items-center gap-16 py-2 border-b-[1px] border-white/10 mb-4 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: blue
                                },
                                className: "w-14 h-7 rounded-md border border-white/10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-center",
                                children: blue
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-col items-center gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: (0,_colorsManagement__WEBPACK_IMPORTED_MODULE_4__.P3toSRGB)({
                                        color: blue,
                                        colorModel: "hcl"
                                    })
                                },
                                className: "w-14 h-7 rounded-md border border-white/10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-xs text-center",
                                children: (0,_colorsManagement__WEBPACK_IMPORTED_MODULE_4__.P3toSRGB)({
                                    color: blue,
                                    colorModel: "hcl"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full flex flex-row justify-between",
                        children: bluePalette.map((color, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }, index),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-xs text-center",
                                        children: color
                                    })
                                ]
                            }))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full flex flex-row justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().protanomaly(blue)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "红 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().protanomaly(blue)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().deuteranomaly(blue)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "绿 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().deuteranomaly(blue)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-col items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            backgroundColor: color_blind__WEBPACK_IMPORTED_MODULE_5___default().tritanomaly(blue)
                                        },
                                        className: "w-14 h-7 rounded-md border border-white/10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "GCHtext-xs text-center",
                                        children: [
                                            "蓝 ",
                                            color_blind__WEBPACK_IMPORTED_MODULE_5___default().tritanomaly(blue)
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
//颜色分类站
const ColorClassify = (props)=>{
    const { flag , color  } = props;
    if (flag === 0) {
        red = color;
    }
    if (flag === 1) {
        yellow = color;
    }
    if (flag === 2) {
        green = color;
    }
    if (flag === 3) {
        blue = color;
    }
} //自定hook函数，用来监听颜色变量的变化
 // const useColor = (color) => {
 //     const [colorState, setColorState] = useState(color)
 //     useEffect(() => {
 //         setColorState(color)
 //     }, [color])
 //     return [ colorState, setColorState ]
 // }
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
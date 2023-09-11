"use strict";
exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 9251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skill": () => (/* binding */ Skill),
/* harmony export */   "WorkExperience": () => (/* binding */ WorkExperience),
/* harmony export */   "default": () => (/* binding */ AboutMePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_components_headingComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7972);
/* harmony import */ var _pages_components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4170);




//定义动画变体
const variants = {
    hidden: {
        y: 40,
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
};
//关于我汇总页
function AboutMePage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "GCHcontainer flex flex-col items-center gap-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_headingComponent__WEBPACK_IMPORTED_MODULE_2__.HeadingLG, {
                heading: "关于我"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-[67.5rem] grid grid-cols-[208px_1fr_1.8fr] items-center gap-32 mt-12",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AboutMe, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AboutMeInfo, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WorkExperience, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Skill, {})
        ]
    });
}
//角色技能
const Skill = ()=>{
    //作为设计师数据
    const asDesignerData = [
        {
            title: "作为设计师",
            detail: [
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoSketch, {}),
                    title: "Sketch",
                    detail: "设计软件"
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoFigma, {}),
                    title: "Figma",
                    detail: "设计软件"
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoOrigami, {}),
                    title: "Origami Studio",
                    detail: "高保真原型软件"
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoSpline, {}),
                    title: "Spline",
                    detail: "web三维软件"
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoSwiftUI, {}),
                    title: "SwiftUI",
                    detail: "苹果UI开发框架"
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoArkUI, {}),
                    title: "ArkUI",
                    detail: "鸿蒙UI开发框架"
                }
            ]
        }
    ];
    //作为开发者数据
    const asDeveloperData = [
        {
            title: "作为编程爱好者",
            detail: [
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoNextjs, {
                        w: "34",
                        h: "34"
                    }),
                    title: "Next.JS",
                    detail: "前端框架"
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoFramerMotion, {
                        w: "30",
                        h: "30"
                    }),
                    title: "Framer Motion",
                    detail: "动画库"
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoTailwind, {
                        w: "30",
                        h: "30"
                    }),
                    title: "Tailwind CSS",
                    detail: "CSS框架"
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoUnity3D, {
                        w: "30",
                        h: "30"
                    }),
                    title: "Unity3D",
                    detail: "游戏引擎"
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.LogoLVGL, {
                        w: "24",
                        h: "24"
                    }),
                    title: "LVGL",
                    detail: "IoT设备图形库"
                },
                {
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.IconDeviceScript, {
                        w: "24",
                        h: "24"
                    }),
                    title: "DeviceScript",
                    detail: "IoT设备开发框架"
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[67.5rem] h-auto flex flex-row gap-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardA, {
                title: asDesignerData[0].title,
                detail: asDesignerData[0].detail
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardB, {
                title: asDeveloperData[0].title,
                detail: asDeveloperData[0].detail
            })
        ]
    });
};
//卡片
const CardA = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "GCHcard flex flex-col gap-10 px-16 py-16 mt-10",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "64",
                        height: "64",
                        viewBox: "0 0 64 64",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            fill: "none",
                            "fill-rule": "evenodd",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                    width: "61",
                                    height: "57",
                                    x: "1.5",
                                    y: "3.5",
                                    fill: "#EAB308",
                                    "fill-opacity": ".1",
                                    stroke: "#EAB308",
                                    "stroke-width": "3",
                                    rx: "8"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "#FFF",
                                    "fill-rule": "nonzero",
                                    d: "M29.53125,26.75 C29.10625,31.5666667 26.3791667,34.1520833 21.35,34.50625 C16.1791667,34.2229167 13.4166667,31.6375 13.0625,26.75 L13.0625,16.975 C13.0625,15.6291667 13.7354167,14.9208333 15.08125,14.85 C16.35625,14.9208333 17.0291667,15.6291667 17.1,16.975 L17.1,26.5375 C17.2416667,29.3708333 18.6583333,30.8583333 21.35,31 C23.8291667,30.7875 25.2104167,29.3 25.49375,26.5375 L25.49375,16.975 C25.49375,15.6291667 26.1666667,14.9208333 27.5125,14.85 C28.7875,14.9208333 29.4604167,15.6291667 29.53125,16.975 L29.53125,26.75 Z M36.70625,32.4875 C36.6354167,33.7625 35.9625,34.4 34.6875,34.4 C33.3416667,34.4 32.66875,33.7625 32.66875,32.4875 L32.66875,16.975 C32.66875,15.6291667 33.3416667,14.9208333 34.6875,14.85 C35.9625,14.9208333 36.6354167,15.6291667 36.70625,16.975 L36.70625,32.4875 Z"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHheading-sm",
                        children: props.title
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardDetail, {
                data: props.detail
            })
        ]
    });
};
const CardB = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "GCHcard flex flex-col gap-10 px-16 py-16 mt-10",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "64",
                        height: "64",
                        viewBox: "0 0 64 64",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            fill: "none",
                            "fill-rule": "evenodd",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                    width: "61",
                                    height: "57",
                                    x: "1.5",
                                    y: "3.5",
                                    fill: "#3B82F6",
                                    "fill-opacity": ".1",
                                    stroke: "#3B82F6",
                                    "stroke-width": "3",
                                    rx: "8"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "#FFF",
                                    "fill-rule": "nonzero",
                                    d: "M13.0297436,15.4568889 C13.9907858,14.4950422 15.5476757,14.4950422 16.5087179,15.4568889 L23.8933333,22.8568889 C24.8531803,23.8199333 24.8531803,25.3800667 23.8933333,26.3431111 L16.5087179,33.7431111 C15.5388398,34.6487358 14.0274553,34.6220136 13.0900618,33.6826672 C12.1526683,32.7433209 12.1260017,31.2287876 13.0297436,30.2568889 L18.6748718,24.6 L13.0297436,18.9431111 C12.1068138,18.0171069 12.0713165,16.5390603 12.9232517,15.5705913 L13.0297436,15.4568889 Z M27.0769231,29.5333333 C25.7174529,29.5333333 24.6153846,30.6376976 24.6153846,32 C24.6153846,33.3623024 25.7174529,34.4666667 27.0769231,34.4666667 L36.9230769,34.4666667 C38.2825471,34.4666667 39.3846154,33.3623024 39.3846154,32 C39.3846154,30.6376976 38.2825471,29.5333333 36.9230769,29.5333333 L27.0769231,29.5333333 Z"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHheading-sm",
                        children: props.title
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CardDetail, {
                data: props.detail
            })
        ]
    });
};
//卡片详情
const CardDetail = ({ data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-2 gap-8",
        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " grid grid-cols-[48px_auto] gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "GCHcard-black rounded-xl w-12 h-12 flex items-center justify-center",
                        children: item.icon
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtitle-sm",
                                children: item.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHtext-sm",
                                children: item.detail
                            })
                        ]
                    })
                ]
            }, index))
    });
};
//个人简介头像
const AboutMe = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-52 h-52 relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#eab308] to-[#3b82f6]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-16 h-16 flex items-center justify-center rounded-full bg-black absolute top-0 right-0 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "24",
                    viewBox: "0 0 16 12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fill: "#FFF",
                        d: "M14.0665845,12 L9.09494451,12 L9.09494451,7.78268251 L12.9617756,0 L16,0 L14.0665845,7.78268251 L14.0665845,12 Z M5.01109741,12 L-5.32907052e-15,12 L-5.32907052e-15,7.78268251 L3.92601726,0 L6.94451295,0 L5.01109741,7.78268251 L5.01109741,12 Z"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: " w-36 h-auto",
                src: "/zebraResource/avatar_1.svg",
                width: 96,
                height: 96
            })
        ]
    });
};
//个人信息
const AboutMeInfo = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHheading-md",
                        children: "龚春辉"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtext-base",
                        children: "UI/UX 设计师"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 flex justify-center items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.IconPhone, {
                                    fill: "hsl(var(--lime-dark))",
                                    w: "20px",
                                    h: "20px"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHheading-xs",
                                        children: "15242575583"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-base",
                                        children: "联系电话"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 flex justify-center items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.IconEmail, {
                                    fill: "hsl(var(--lime-dark))",
                                    w: "20px",
                                    h: "20px"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHheading-xs",
                                        children: "15242575583@163.com"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-base",
                                        children: "邮箱"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-8 h-8 flex justify-center items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_components_icons__WEBPACK_IMPORTED_MODULE_3__.IconWechat, {
                                    fill: "hsl(var(--lime-dark))",
                                    w: "21px",
                                    h: "21px"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHheading-xs",
                                        children: "15242575583"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-base",
                                        children: "微信号"
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
//工作经历
const WorkExperience = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHheading-md",
                        children: "工作经历"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "GCHtext-base",
                        children: "6年工作经验"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHheading-xs text-lime-dark",
                                children: "01."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHheading-xs",
                                        children: "猿辅导.斑马"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-base",
                                        children: "2019.6 - 2023.1：UI设计师"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHheading-xs text-lime-dark",
                                children: "02."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHheading-xs",
                                        children: "北京车未科技"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-base",
                                        children: "2018.11 - 2019.5：UI+视觉设计师"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "GCHheading-xs text-lime-dark",
                                children: "03."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHheading-xs",
                                        children: "上海剧星传媒有限公司"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "GCHtext-base",
                                        children: "2016.11 - 2018.10：广告设计师"
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


/***/ })

};
;
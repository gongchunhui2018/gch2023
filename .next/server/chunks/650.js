"use strict";
exports.id = 650;
exports.ids = [650];
exports.modules = {

/***/ 5650:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesktopGroup": () => (/* binding */ DesktopGroup),
/* harmony export */   "NavBarOption": () => (/* binding */ NavBarOption),
/* harmony export */   "OptionGroupElement": () => (/* binding */ OptionGroupElement),
/* harmony export */   "OptionGroupIcon": () => (/* binding */ OptionGroupIcon),
/* harmony export */   "OptionGroupText": () => (/* binding */ OptionGroupText)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _headlessui_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-06-16 16:43:22
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-03 16:04:25
 * @FilePath: /gchct/Components/UI/carOptionGroup.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 



//动画变体
const variants = {
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.2
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2
        }
    }
};
//1.带图标的横向选项组
const OptionGroupIcon = ({ options  })=>{
    const [isOn, setIsOn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Group, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.List, {
            className: "flex p-1 space-x-1 rounded-full bg-white/20",
            children: options.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab, {
                    onClick: ()=>setIsOn(!isOn),
                    className: ({ selected  })=>`${selected ? "bg-white/30 shadow-md" : " "} relative flex items-center justify-center flex-1 h-10  px-4 rounded-full `,
                    children: item.icon
                }, item.icon))
        })
    });
};
//2.纯文字选项组
const OptionGroupText = ({ options  })=>{
    const [isOn, setIsOn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.Group, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab.List, {
            className: "flex p-1 space-x-1 rounded-full bg-black/30",
            children: options.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Tab, {
                    onClick: ()=>setIsOn(!isOn),
                    className: ({ selected  })=>`${selected ? "bg-white text-black/80 shadow-md" : " text-white "} relative GCHtitle-xs flex items-center justify-center flex-1 h-auto  px-4 py-1 rounded-full `,
                    children: item.label
                }, item.label))
        })
    });
};
//导航栏选项
const NavBarOption = ({ options  })=>{
    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(options[0]);
    const handleSelect = (item)=>{
        setSelectedTab(item);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col items-center",
        children: [
            options.map((item)=>item === selectedTab ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    // initial="hidden"
                    // animate="visible"
                    // variants={variants}
                    className: `${item.bulr === "on" ? "GCHcard-menu origin-bottom w-full h-auto" : "w-full origin-bottom h-auto"} `,
                    children: item.element
                }) : null),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "GCHcard-nav w-full h-[4.5rem] rounded-b-2xl flex space-x-10 justify-center items-center",
                children: options.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>handleSelect(item),
                        className: `${item === selectedTab ? "bg-white/10" : " "} flex p-3 rounded-lg `,
                        children: item.icon
                    }, item.icon))
            })
        ]
    });
};
//通用选项组
const OptionGroupElement = ({ options  })=>{
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(options[0]);
    const handleSelect = (item)=>{
        setSelected(item);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-full grid grid-cols-[0.24fr_1fr] gap-20",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-auto flex flex-col gap-5 ",
                children: options.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>handleSelect(item),
                        className: `${item === selected ? "bg-black/20" : " text-white "} cursor-pointer w-full py-3 GCHtitle-sm flex items-center justify-center rounded-lg `,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full flex flex-row items-center gap-3 px-7",
                            children: [
                                item.icon,
                                item.label
                            ]
                        })
                    }, item.label))
            }),
            options.map((item)=>item === selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-auto flex ",
                    children: item.element
                }) : null)
        ]
    });
};
//桌面切换选项组
const DesktopGroup = ({ options  })=>{
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(options[0]);
    const handleSelect = (item)=>{
        setSelected(item);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-auto flex flex-col items-center gap-6",
        children: [
            options.map((item)=>item === selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-auto",
                    children: item.element
                }, item.label) : null),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " flex p-1 space-x-1 rounded-full bg-black border border-[#2e2e2e]/80",
                children: options.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>handleSelect(item),
                        className: `${item === selected ? "bg-white text-black/80 shadow-md" : " text-white "} cursor-pointer  GCHtitle-xs flex items-center justify-center flex-1 h-auto  px-4 py-1 rounded-full `,
                        children: item.label
                    }, item.label))
            })
        ]
    });
} //横向选项组图标
 // export const HorizontalOptionGroupIcon = ({options}) => {
 //     const [selectedTab, setSelectedTab] = useState(options[0]);
 //     return (
 //         <div className="px-1 py-1 rounded-full bg-white/10 bg-blend-lighten">
 //             <ul className="flex justify-between" >
 //                 {options.map((item) => (
 //                     <li
 //                         key={item.icon}
 //                         onClick={() => setSelectedTab(item)}
 //                         className={`relative flex px-5 py-2 rounded-full cursor-pointer ${
 //                             item === selectedTab
 //                             ? " bg-white/0"
 //                             : " bg-white/0"
 //                           }`}
 //                     >
 //                         <div className="z-20">{item.icon}</div>
 //                         {item === selectedTab ? (
 //                             <motion.div 
 //                                 className=" z-10 absolute -bottom-0 left-0 right-0 h-full rounded-full bg-white/20 shadow-md" 
 //                                 layoutId=" z-10 absolute -bottom-0 left-0 right-0 h-full rounded-full bg-white/20 shadow-md"
 //                             />
 //                         ) : null}
 //                     </li>
 //                 ))}
 //              </ul>
 //         </div>
 //     );
 // }
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
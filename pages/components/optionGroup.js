/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-06-16 16:43:22
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-03 16:04:25
 * @FilePath: /gchct/Components/UI/carOptionGroup.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { motion } from "framer-motion";
import { useState,useRef } from "react";
import { Tab } from "@headlessui/react";


//动画变体
const variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.2}},
    visible: { opacity: 1, y: 0 , transition: { duration: 0.2}},
}


//1.带图标的横向选项组
export const OptionGroupIcon = ({options}) => {
    const [isOn, setIsOn] = useState(false)

    return (
        <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 rounded-full bg-white/20">
                {options.map((item) => (
                    <Tab
                        key={item.icon}
                        onClick={() => setIsOn(!isOn)}
                        className={({ selected }) =>
                            `${
                                selected
                                ? "bg-white/30 shadow-md"
                                : " "
                            } relative flex items-center justify-center flex-1 h-10  px-4 rounded-full `
                        }
                    >
                        
                        {item.icon}
                       
                   </Tab>
                ))}
            </Tab.List>
        </Tab.Group>
    )

}

//2.纯文字选项组
export const OptionGroupText = ({options}) => {
    const [isOn, setIsOn] = useState(false)
    return (
        <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 rounded-full bg-black/30">
                {options.map((item) => (
                    <Tab
                        key={item.label}
                        onClick={() => setIsOn(!isOn)}
                        className={({ selected }) =>
                            `${
                                selected
                                ? "bg-white text-black/80 shadow-md"
                                : " text-white "
                            } relative GCHtitle-xs flex items-center justify-center flex-1 h-auto  px-4 py-1 rounded-full `
                        }
                    >
                       {item.label} 
                    </Tab>
                ))}
            </Tab.List>
        </Tab.Group>
    )

}

//导航栏选项
export const NavBarOption = ({options}) => {
    const [selectedTab, setSelectedTab] = useState(options[0]);

    const handleSelect = (item) => {
        setSelectedTab(item);
    };

    return (
        <div className="w-full flex flex-col items-center">
            {options.map((item) => ( 
                item === selectedTab ? (
                    <motion.div
                        // initial="hidden"
                        // animate="visible"
                        // variants={variants}
                        className={
                            `${
                                item.bulr === "on"
                                ? "GCHcard-menu origin-bottom w-full h-auto"
                                : "w-full origin-bottom h-auto"
                            } `
                        }  
                    >
                        {item.element}
                    </motion.div>
                ) : null

            ))}
            
            <div className="GCHcard-nav w-full h-[4.5rem] rounded-b-2xl flex space-x-10 justify-center items-center">
                {options.map((item) => (
                    <div
                        key={item.icon}
                        onClick={() => handleSelect(item)}
                        className={
                            `${
                                item === selectedTab
                                ? "bg-white/10"
                                : " "
                            } flex p-3 rounded-lg `
                        }
                    >
                        {item.icon}
                    </div>
                ))}
            </div>

         </div>

    )

}

//通用选项组
export const OptionGroupElement = ({options}) => {
    const [selected, setSelected] = useState(options[0]);

    const handleSelect = (item) => {
        setSelected(item);
    };

  return (
    <div className="w-full h-full grid grid-cols-[0.24fr_1fr] gap-20">

        <div className="w-full h-auto flex flex-col gap-5 ">
            {options.map((item) => (
                <div
                    key={item.label}
                    onClick={() => handleSelect(item)}
                    className={
                            `${
                                item === selected
                                ? "bg-black/20"
                                : " text-white "
                            } cursor-pointer w-full py-3 GCHtitle-sm flex items-center justify-center rounded-lg `
                        }
                    >
                        <div className="w-full flex flex-row items-center gap-3 px-7">
                            {item.icon}
                            {item.label}
                        </div>

                </div>
                ))}
        </div>

        {options.map((item) => ( 
                item === selected ? (
                    <div className = "w-full h-auto flex ">
                        {item.element}
                    </div>
                ) : null

        ))}
      </div>
    )

}


//桌面切换选项组
export const DesktopGroup = ({options}) => {

    const [selected, setSelected] = useState(options[0]);

    const handleSelect = (item) => {
        setSelected(item);
    };

    return (

      <div className="w-full h-auto flex flex-col items-center gap-6">
        {options.map((item) => (
                item === selected ? (
                    <div
                        key={item.label}
                        className = "w-full h-auto"
                    >
                        {item.element}
                    </div>
                ) : null
        ))}

        <div className=" flex p-1 space-x-1 rounded-full bg-black border border-[#2e2e2e]/80">
            {options.map((item) => (
                <div
                    key={item.label}
                    onClick={() => handleSelect(item)}
                    className={
                            `${
                                item === selected
                                ? "bg-white text-black/80 shadow-md"
                                : " text-white "
                            } cursor-pointer  GCHtitle-xs flex items-center justify-center flex-1 h-auto  px-4 py-1 rounded-full `
                        }
                    >
                        {item.label}
                </div>
                ))}
        </div>

      </div>
    )

}


//横向选项组图标
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
/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-07-04 21:39:50
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 00:51:28
 * @FilePath: /gch/pages/carhmi/carDashboard.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion,useMotionValue, useTransform, animate } from "framer-motion";
import { RingDashborad, RingDashboradHalf } from "../components/chart";
import { DesktopGroup } from "../components/optionGroup";
import WeatherAPP from "./weatherAPP";
import { 
    IconMotorTemp,
    IconOilcan,
    IconAutoBeam,
    IconSeatBelt,
    IconGear,
    IconStraight,
    IconRightLight,
    IconLeftLight,
    IconBattery,
    IconEngineE
} from "../components/icons";


 
//输出仪表样式
export default function CarDashBoard() {
    const options = [
        { label: '天气' ,element: <WeatherAPP/>},
        { label: '仪表',element: <DashBoard/>},
    ]
    
    return(
        <div className="w-[67.5rem] h-auto ">
            <DesktopGroup options = {options} />
        </div>  
       
    )

}


//仪表样式一
const DashBoard = () => {
    return(
        <div className="relative w-[67.5rem] h-[24rem] flex items-center justify-center  rounded-2xl bg-gradient-to-b from-[#030317] via-[#1B1D33] to-[#293654]">
            {/* 速度仪表 */}
            <div className="w-full absolute flex items-center justify-center">
                <SpeedOne/> 
            </div>

            {/* 油量仪表 */}
            <div className=" absolute z-20 left-14 bottom-8">
                <Oil/>
            </div>

            {/* 水温仪表 */}
            <div className=" absolute z-20 left-[17.5rem] bottom-9">
                <MotorTemp/>
            </div>

            {/* 引擎仪表 */}
            <div className=" absolute z-20 left-40 top-10">
                <Engine/>
            </div> 

            {/* 机油仪表 */}
            <div className=" absolute z-20 right-[17.5rem] bottom-9">
                <Oilcan/>
            </div>

            {/* 档位仪表 */}
            <div className=" absolute z-20 right-40 top-10">
                <GearOne/>
            </div>
            
            {/* 里程仪表 */}
            <div className=" absolute z-20 right-14 bottom-8">
               <Mileage/>
            </div>

        </div>
    )
}



//速度仪表
const SpeedOne = () => {
    //数字动效
    const speed = useMotionValue(0);
    const setSpeed = useTransform(speed, Math.round);

    useEffect(() => {
        const animation = animate(speed, 96, { duration: 1 });
        return animation.stop;
    }, []);

    return(
        <div className="relative z-20 flex items-center justify-center">
            <RingDashboradHalf
                percent = {0.48}
                radius = {160}
                strokeColor = "#38bdf8"
                strokeWidth = {14}
                bgStrokeColor = "rgba(203,213,225,0.2)"
            />
           
            <motion.p className="GCHheading-xl absolute">{setSpeed}</motion.p>
           
            <div className="absolute top-[52px] ">
                <IconStraight w = '44' h = '44' />
            </div>

            <div className="absolute flex flex-row gap-5 bottom-8 ">
                <IconLeftLight w = '26' h = '26' fill = 'rgba(255,255,255,0.3)'/>
                <IconSeatBelt w = '30' h = '30' fill = '#eab308'/>
                <IconRightLight w = '26' h = '26' fill = 'rgba(255,255,255,0.3)'/>
            </div>
           
            <p className="GCHtitle-base text-white/60 absolute z-30 bottom-[94px]">km/h</p>
        </div>
    )
}

//档位仪表
const GearOne = () => {
    //数字动效
    const rpm = useMotionValue(0);
    const setRpm = useTransform(rpm, Math.round);

    useEffect(() => {
        const animation = animate(rpm, 1680, { duration: 1 });
        return animation.stop;
    }, []);

    return(
        <div className="relative flex items-center justify-center">
            <RingDashboradHalf
                    percent = {0.46}
                    radius = {100}
                    strokeWidth = {10}
                    strokeColor = "#f97316"
            />
            <div className="absolute">
                <IconGear w = '60' h = '60' fill = '#ffffff' />
            </div>
            <div className="absolute  top-8 ">
                <IconAutoBeam w = '26' h = '26' fill = '#eab308'/> 
            </div>
            <div className=" flex flex-col absolute z-30 bottom-3">
                <motion.label className="GCHtitle-base text-center text-xl">{setRpm}</motion.label>
                <p className="GCHtitle-xs text-center text-white/60 -mt-2">rpm</p>
            </div>
        </div>
    )

}

//油量表
const Oil = () => {
    //数字动效
    const oil = useMotionValue(0);
    const setOil = useTransform(oil, Math.round);

    useEffect(() => {
        const animation = animate(oil, 86, { duration: 1 });
        return animation.stop;
    }, []);

    return (
        <div className="relative flex items-center justify-center">
            <RingDashboradHalf
                    percent = {0.86}
                    radius = {70}
                    strokeWidth = {8}
                    strokeColor = "#22c55e"
            />
            <div className="absolute flex flex-col items-center">
                <p className="GCHtitle-xs text-center">
                    <motion.label className="GCHtitle-base text-4xl text-center">{setOil}</motion.label>
                    %
                </p>
                <p className="GCHtitle-sm text-center text-[#22c55e] -mt-1">468km</p>
            </div>

            <div className="absolute bottom-[10px] ">
                <IconBattery w = '26' h = '26' fill = 'rgba(255,255,255,0.8)'/>
            </div>
            
        </div>
    )
}

//水温表
const MotorTemp = () => {
    return (
        <div className="relative flex items-center justify-center">
            <RingDashboradHalf
                    percent = {0.48}
                    radius = {50}
                    strokeWidth = {6}
                    strokeColor = "#3b82f6"
            />
            <div className="absolute flex flex-row items-center gap-6 bottom-[6px]">
                <p className="GCHtitle-xs text-center text-white/60">C</p>
                <p className="GCHtitle-xs text-center text-white/60">H</p>
            </div>
            <div className="absolute">
                <IconMotorTemp w = '36' h = '36' fill = '#ffffff'/>
            </div>
        </div>
    )
}
//机油
const Oilcan = () => {
    return (
        <div className="relative flex items-center justify-center">
            <RingDashboradHalf
                    percent = {0.88}
                    radius = {50}
                    strokeWidth = {6}
                    strokeColor = "#06b6d4"
            />
            <div className="absolute flex flex-row items-center gap-6 bottom-[6px]">
                <p className="GCHtitle-xs text-center text-white/60">L</p>
                <p className="GCHtitle-xs text-center text-white/60">H</p>
            </div>
            <div className="absolute">
                <IconOilcan w = '38' h = '38' fill = '#ffffff'/>
            </div>
        </div>
    )
}

//保养里程
const Mileage = () => {
    //数字动效
    const mi = useMotionValue(0);
    const setMi = useTransform(mi, Math.round);

    useEffect(() => {
        const animation = animate(mi, 19800, { duration: 1 });
        return animation.stop;
    }, []);

    return (
        <div className="relative flex items-center justify-center">
            <RingDashborad
                    percent = {0.86}
                    radius = {70}
                    strokeWidth = {8}
                    strokeColor = "#84cc16"
                    // bgStrokeColor = "rgba(132,204,22,0.2)"
            />
            <div className="absolute flex flex-col items-center">
                <motion.p className="GCHtitle-base text-2xl text-center mt-3">{setMi}</motion.p>
                <p className="GCHtitle-sm text-center text-white/60 -mt-1">公里</p>
            </div>

        </div>
    )
}

//发动机规律
const Engine = () => {
    //数字动效
    const nm = useMotionValue(0);
    const setNm = useTransform(nm, Math.round);

    useEffect(() => {
        const animation = animate(nm, 136, { duration: 1 });
        return animation.stop ;
    }, []);

    return(
        <div className="relative flex items-center justify-center">
            <RingDashboradHalf
                    percent = {0.50}
                    radius = {100}
                    strokeWidth = {10}
                    strokeColor = "#eab308"
            />

            <div className="absolute flex flex-col items-center">
                <p className="GCHtitle-sm text-center">
                    <motion.label className="GCHtitle-base text-5xl text-center">{setNm}</motion.label>
                    Nm
                </p>
                <p className="GCHtitle-base text-center text-[#eab308] -mt-1">248w</p>
            </div>

            <div className="absolute bottom-4 ">
                <IconEngineE w = '36' h = '36' fill = 'rgba(255,255,255,0.8)'/>
            </div>
            
        </div>
    )
}





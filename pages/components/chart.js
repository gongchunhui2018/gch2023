/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-05-22 18:58:28
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-09 00:13:56
 * @FilePath: /gchct/Components/GCHUI/chart.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { useEffect, useRef, useState } from "react";
import { motion,useMotionValue, useTransform, animate} from "framer-motion";



//1.普通仪表盘
export const RingDashborad = (props) => {

    const percent = props.percent || 0.5; //百分比
    const radius = props.radius || 20; //半径
    const strokeColor = props.strokeColor || '#fff'; //边框颜色
    const strokeWidth = props.strokeWidth || 6; //边框宽度
    const bgStrokeColor = props.bgStrokeColor || 'rgba(255,255,255,0.2)'; //背景边框颜色
    const bgColor = props.bgColor || 'rgba(0,0,0,0.3)'; //背景颜色
    const element = props.element || ''; //对象

    const strokeRadius = radius * 0.86;  //边框半径
    const center = radius;  //圆心坐标
    const circumference = 2 * Math.PI * radius  //边框长度

    return (
        <div className="relative rounded-full flex justify-center items-center backdrop-blur-xl"
            style={{width:radius * 2, height:radius * 2, background:bgColor}}
        >
          <svg width={center * 2} height={center * 2}>
             <motion.circle
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: circumference * (1 - percent + 0.1) }}
                transition={{ duration: 1 }}

                stroke = {strokeColor} //边框颜色
                fill = 'none' //填充颜色
                strokeWidth = {strokeWidth} //边框宽度
                strokeLinecap="round"  //边框末端样式
                strokeDasharray = {circumference}  //边框长度
                // strokeDashoffset = {offset}  //进度条进度
                r = {strokeRadius}  //半径
                cx = {center}  //圆心x坐标
                cy = {center}  //圆心y坐标
                transform={`rotate(-90 ${center} ${center})`} //旋转-90度
                
             />
             <circle
                stroke = {bgStrokeColor} //边框颜色
                fill = 'none' //填充颜色
                strokeWidth = {strokeWidth} //边框宽度
                strokeLinecap="round"  //边框末端样式
                strokeDasharray = {circumference}  //边框长度
                r = {strokeRadius}  //半径
                cx = {center}  //圆心x坐标
                cy = {center}  //圆心y坐标
             />
          </svg>
        </div>
    );

}



//2.半封闭仪表盘
export const RingDashboradHalf = (props) => {
   
    const percent = props.percent || 0.5; //百分比
    const radius = props.radius || 20; //半径
    const strokeColor = props.strokeColor || '#fff'; //边框颜色
    const strokeWidth = props.strokeWidth || 6; //边框宽度
    const bgStrokeColor = props.bgStrokeColor || 'rgba(255,255,255,0.2)'; //背景边框颜色
    const bgColor = props.bgColor || 'rgba(0,0,0,0.3)'; //背景颜色
    const element = props.element || ''; //对象


    const strokeRadius = radius * 0.86;  //边框半径
    const center = radius;  //圆心坐标
    const circumference = 2 * Math.PI * radius * 0.66  //边框长度

    return (
        <div className="relative rounded-full flex justify-center items-center backdrop-blur-xl"
            style={{width:radius * 2, height:radius * 2, background:bgColor}}
        >
          <svg width={center * 2} height={center * 2}>
             <motion.circle
                initial={{ strokeDashoffset: circumference / 0.66 }}
                animate={{ strokeDashoffset: circumference * (1 - percent + 0.26) / 0.66 }}
                transition={{ duration: 1 }}

                stroke = {strokeColor} //边框颜色
                fill = 'none' //填充颜色
                strokeWidth = {strokeWidth} //边框宽度
                strokeLinecap="round"  //边框末端样式
                strokeDasharray = {circumference / 0.66}  //边框长度
                // strokeDashoffset = {offset}  //进度条进度
                r = {strokeRadius}  //半径
                cx = {center}  //圆心x坐标
                cy = {center}  //圆心y坐标
                transform={`rotate(132 ${center} ${center})`} //旋转
                
             />
             <circle
                stroke = {bgStrokeColor} //背景边框颜色
                fill = 'none' //填充颜色
                strokeWidth = {strokeWidth} //边框宽度
                strokeLinecap="round"  //边框末端样式
                strokeDasharray = {circumference}  //边框长度
                r = {strokeRadius}  //半径
                cx = {center}  //圆心x坐标
                cy = {center}  //圆心y坐标
                transform={`rotate(132 ${center} ${center})`} //旋转
             />
          </svg>
        </div>
    );
}


//3.彩色环形仪表盘
export const RingDashboradColor = (props) => { 
    const { number, percent, icon, radius, strokeColorArr,bgColor} = props;
    
    const [colorA,colorB,colorC] = strokeColorArr

    const strokeRadius = radius * 0.8

    const strokeWidth = radius * 0.14

    const center = radius; //圆心坐标

    const circumference = 2 * Math.PI * radius * 0.6; //边框长度

    const fontSize = radius / 2;  //字体大小

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
      const animation = animate(count, number * percent, { duration: 1 });
      return animation.stop;
    }, []);

    return (
        <div className="relative rounded-full flex justify-center items-center" 
             style={{width:radius * 2, height:radius * 2, background:bgColor}}
        >
            <svg className="" width={center * 2} height={center * 2}  fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                    stroke={`url(#${number})`} //边框颜色
                    fill = 'none' //填充颜色
                    strokeWidth = {strokeWidth} //边框宽度
                    strokeLinecap="round"  //边框末端样式
                    strokeDasharray = {circumference}  //边框长度
                    r = {strokeRadius}  //半径
                    cx = {center}  //圆心x坐标
                    cy = {center}  //圆心y坐标
                    transform={`rotate(135 ${center} ${center})`} //旋转-90度
                
                />
                <defs>
                    <linearGradient id={number} gradientUnits="userSpaceOnUse">
                       <stop offset="0%" stop-color={colorA}/>
                       <stop offset="50%" stop-color={colorB}/>
                       <stop offset="100%" stop-color={colorC}/>
                    </linearGradient>
                </defs>
            </svg>

            <motion.p className="absolute GCHtitle-base" style={{fontSize: fontSize}} >
                {rounded}
            </motion.p>

            <div className="absolute w-1/2 h-1/3 bottom-0 flex justify-center py-0.5">
                <div style={{width: radius * 0.46, height: radius * 0.46}}>{icon}</div>
            </div>

            <motion.div 
                className=" absolute flex items-center origin-center" 
                style={{width:strokeRadius * 2 + strokeWidth * 2, height:strokeRadius * 2 + strokeWidth * 2}}
                initial={{rotate: -42}}
                animate={{rotate: 360 * 0.62 * percent }}
                transition={{duration: 1}}
            >
                <div className=" bg-white rounded-full" style={{width:strokeWidth * 2, height:strokeWidth * 2, borderColor:"rgba(0,0,0,0.8)", borderWidth:strokeWidth * 0.5}}></div>
            </motion.div>
        </div>
    )
}



//4.可拖动进度条
export const DragProgress = (props) => {
    const {width, height } = props
  //计算圆角半径
    let radius =  height / 2

    const [progress, setProgress] = useState(50)

    const [fanOn, setFanOn] = useState(true)

    const handleProgressChange = (e) => {
       setProgress(e.target.value);
     
       if(e.target.value > 0){
          setFanOn(true)
       }else{
          setFanOn(false)
       }
    }; 

    return(
        <div className="w-full flex flex-row p-3 rounded-xl bg-black/30  ">
            <div>右</div>
            <div className="w-auto h-auto relative">
                <svg width={width} height={height}>
                    <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%"   stopColor="#eff6ff" />
                            <stop offset="100%" stopColor="#dbeafe" />
                        </linearGradient>
                        <mask id="progressMask">
                            <rect x="0" y="0" rx={radius} ry={radius} width={width} height={height} fill="#fff"/>
                        </mask>
                    </defs>
                    <rect className=" fill-black/20" x="0" y="0" rx={radius} width={width} height={height}/>
                    <rect fill="url(#progressGradient)" x="0" y="0"  width={progress} height={height}  mask="url(#progressMask)"/>
                </svg>

                <input
                    type="range"
                    min="0"
                    max={width}
                    step="1"
                    value={progress}
                    onChange={handleProgressChange}
                    className="w-full h-full z-20  absolute rounded-full top-0 left-0 opacity-0  cursor-pointer"
                />

                <div className=" absolute z-10 top-0 w-full h-full flex items-center px-3">
                   {fanOn ? (
                       null
                       ) : <p className="GCHtext-xs animate-pulse text-white/40">车窗完全打开</p>
                    }
                </div>
            </div>

            <div>数字</div>
       
     </div>
    )

}
/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-08-28 18:20:01
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 14:28:28
 * @FilePath: /gch2023/pages/designCode/smartHome.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DayPicker } from "react-day-picker";
import { zhCN } from "date-fns/locale";
import { format } from "date-fns";
import { WeatherIcon, WeatherBg } from "../components/weatherParse";
import 'react-day-picker/dist/style.css'
import { 
    ChartPressure, 
    ChartWindPointer, 
} from "../components/icons";


//智能家居面板
export default function SmartHome() {
    const colors = ['#eab308','#3b82f6','#f97316','#22c55e','#a855f7','#f43f5e','#f59e0b','#64748b']
    const radius = ['10px','4px','16px','20px']
    
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedRadius, setSelectedRadius] = useState(radius[0]);

    //核污染水排放天数
    const day =  GetDaysBetweenDates()

    return(
     
        <div className="w-[67.5rem] h-auto flex flex-row gap-4 ">
            <div className="GCHcard w-3/4 p-5 h-auto flex flex-col gap-6">
                <Weather color={selectedColor} radius={selectedRadius} />
                <div className="w-full grid grid-cols-2 gap-2">
                    <DatePicker color={selectedColor} radius={selectedRadius} nuclearDay={day} />
                    <Nuclear color={selectedColor} radius={selectedRadius} nuclearDay={day} />
                </div>   
            </div>

            <div className="GCHcard w-1/4 h-auto flex flex-col gap-7 p-5">
                <div className=" flex flex-col">
                    <p className="GCHtitle-base">组件样式自定义</p>
                    <p className="GCHtext-xs">自定义组件样式和颜色</p>
                </div>

                {/* 颜色自定义 */}
                <div className="w-full flex flex-col gap-3">
                    <p className="GCHtitle-xs">颜色</p>
                    <div className="w-full grid grid-cols-2 gap-3">
                        {colors.map((item,index) => {
                            return(
                                <button 
                                    key={index} 
                                    onClick={() => setSelectedColor(item)}
                                    className={
                                        `${ 
                                            item === selectedColor 
                                            ? "outline outline-2 outline-white/90 bg-white/10"
                                            : "outline outline-1 outline-white/10 "
                                        } w-full p-2 flex flex-row gap-2 items-center rounded-lg hover:bg-white/10 hover:border-white/0`
                                    }
                                >
                                    <div className="w-5 h-5 rounded-full" style={{backgroundColor:item}}></div>
                                    <p className="GCHtitle-xs">{item}</p>
                                </button>
                            )
                        })}
                    </div>
                </div>
                
                {/* 圆角自定义 */}
                <div className="w-full flex flex-col gap-3">
                    <p className="GCHtitle-xs">圆角</p>
                    <div className="w-full grid grid-cols-4 gap-3">
                        {radius.map((item,index) => {
                            return(
                                <button 
                                    key={index} 
                                    onClick={() => setSelectedRadius(item)}
                                    className={
                                        `${ 
                                            item === selectedRadius 
                                            ? "outline outline-2 outline-white/90 bg-white/10" 
                                            : "outline outline-1 outline-white/10 "
                                        } w-full p-2 flex flex-row gap-2 items-center justify-center rounded-lg hover:bg-white/10 hover:border-white/0`
                                    }
                                >
                                    <p className="GCHtitle-xs">{item}</p>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Figma代码 */}
                <div className="w-full flex flex-col gap-3">
                    <p className="GCHtitle-xs">Figma to Code（Tailwindcss）</p>
                    <div className="GCHcard-black  w-full h-16 px-3 py-2 rounded-lg">
                        <p className="GCHtext-xs text-white">className=<label style={{color:selectedColor}}>"rounded-[{selectedRadius}] bg-[{selectedColor}]"</label></p>
                    </div>
                </div>

                {/* 数据API */}
                <div className="w-full flex flex-col gap-3">
                    <p className="GCHtitle-xs">数据API</p>
                    <div className="GCHcard-black w-full flex flex-col h-20 px-3 py-2 rounded-lg">
                        <p className="GCHtext-xs text-white" style={{color:selectedColor}}>
                            https://devapi.qweather.com/
                            v7/weather/now?location=101010100&key=自己的
                        </p>
                    </div>
                </div> 

            </div>
        </div>
      
    )
}


//日期选择器
const DatePicker = (props) => {
    const {color,radius,nuclearDay} = props;
    const [selected, setSelected] = useState();

    return(
        <div className="flex flex-col gap-14 font-HM_Regular">
            <DayPicker
                className="text-white "
                // mode="single"
                required
                locale={zhCN}
                styles={{
                    caption: { color: color },
                }}
                disableNavigation
                modifiersStyles={{
                    selected: {
                        backgroundColor: color,
                        color: 'white',
                        borderRadius: radius,
                    },
                        today: {
                        backgroundColor: color,
                        color: 'white',
                        borderRadius: radius,
                    },
                }}
                selected={selected}
                onSelect={setSelected}
                // footer={footer}
            />
            
            <div className="flex flex-row items-center gap-3 px-5">
                <div className="px-3 flex items-center justify-center rounded-lg border border-[#2e2e2e]">
                    <p className="GCHheading-md text-center" style={{color:color}}>{nuclearDay}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="GCHtitle-base">2023年8月24日</p> 
                    <p className="GCHtext-sm">☢️日本开始排放核污染水🤏</p>
                </div>
            </div> 
        </div>
        
    )
}


//天气面板
const Weather = (props) => {
    const { color,radius } = props;
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getWeatherData()
            .then(setWeatherData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])

    if(loading) {
        return <p className="GCHtitle-sm">天气数据加载中...</p>
    }

    if(error) {
        return <p className="GCHtitle-sm">天气数据加载失败！</p>
    }

    return(
        <div className="w-full grid grid-cols-[1fr_0.5fr_0.5fr_0.5fr] gap-4 items-center rounded-2xl">
            <Temp 
                obsTime={weatherData.now.obsTime}
                text={weatherData.now.text} 
                temp={weatherData.now.temp} 
                icon={weatherData.now.icon}
                feelsLike={weatherData.now.feelsLike}
                vis={weatherData.now.vis}
                radius={radius}
                cloud={weatherData.now.cloud}
            />
            <Humidity 
                color={color} 
                radius={radius}
                humidity={weatherData.now.humidity}
            />
            <Pressure 
                color={color} 
                radius={radius}
                pressure={weatherData.now.pressure}
            />
            <Wind 
                color={color}
                radius={radius} 
                wind360={weatherData.now.wind360} 
                windScale={weatherData.now.windScale} 
                windDir={weatherData.now.windDir}
                windSpeed={weatherData.now.windSpeed}
            />
        </div>
    )
}

//温度面板
const Temp = (props) => {
    const {radius, obsTime,text,temp,icon,feelsLike,vis,cloud} = props;

    return(
        <div 
            className={`w-full h-40 flex flex-col px-6 py-5 gap-5 ${WeatherBg({cloud:cloud})}`}
            style={{borderRadius:radius}}  
        >
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    <p className="GCHheading-md text-6xl">{temp}°</p> 
                    <p className="GCHtitle-xs">体感温度：{feelsLike}°</p>
                </div> 
                <div className="flex flex-col items-end">
                    {/* {weatherIcon[icon]} */}
                    <WeatherIcon iconId = {icon} iconSize = "38"  />
                    <p className="GCHtitle-sm">{text}</p>
                    <p className="GCHtitle-xs">能见度：{vis}公里</p>
                </div>  
            </div>
            
            <p className="GCHtext-xs text-white/60">观测时间：{obsTime}</p>
                 
        </div>
    )
}

//风速面板
const Wind = (props) => {
    const { color,radius, wind360, windScale, windDir, windSpeed } = props;
    let rotate = parseFloat(wind360)
    return(
        <div className="w-full h-40 flex flex-col border border-[#2e2e2e]" style={{borderRadius:radius}}>
            <div className="px-3 pt-4 pb-2 flex flex-row justify-between items-center">
                <p className="GCHtitle-base">{windDir}</p>
                <motion.div 
                    className="w-6 h-6 rounded-full flex items-center justify-center" style={{backgroundColor:color}}
                    initial={{rotate:0}}
                    animate={{rotate:rotate}}
                    transition={{duration:1}}
                >
                    <ChartWindPointer w = "20" h = "20" fill = "#ffffff" />
                </motion.div>  
            </div>

            <div className="w-full h-full flex flex-row gap-1 px-2 pb-6">
                <div className="w-full h-full flex flex-col items-center justify-end">
                    <p className="GCHtext-xs text-white text-center">{windScale}级</p>
                    <div className="w-4 max-h-20 origin-bottom" style={{backgroundColor:color, borderRadius:radius, height:windScale * 4}}></div>
                </div>
                <div className=" w-full h-full flex flex-col items-center justify-end">
                    <p className="GCHtext-xs text-white text-center">{windSpeed}公里/时</p>
                    <div className="w-4 max-h-20 origin-bottom" style={{backgroundColor:color, borderRadius:radius, height:windSpeed * 4}}></div>
                </div>
            </div>
        </div>
    )
}
//气压面板
const Pressure = (props) => {
    const { color, radius, pressure } = props;
    let p = parseFloat(pressure)
    let r = p / 3680 * 300

    return(
        <div className="relative w-full h-40 flex justify-center items-center border border-[#2e2e2e]" style={{borderRadius:radius}}>
            <ChartPressure w = "100" h = "100" fill = {color} />
            <motion.div 
                className="absolute z-20 w-[100px] h-[100px] rounded-full flex items-center"
                initial={{rotate:-20}}
                animate={{rotate:r}}
                transition={{duration:1}}
            >
                <div className="w-4 h-1 rounded-full bg-white shadow-sm outline outline-2 outline-[#1A1A1A]"></div>
            </motion.div>
            <div className="absolute z-30 flex flex-col items-center justify-center">
                <p className="GCHtitle-base text-xl">{pressure}</p>
                <p className="GCHtext-xs text-white -mt-1">百帕</p>
            </div>
        </div>
    )
}

//湿度面板
const Humidity = (props) => {
    const { color,radius, humidity } = props;
    const circumference = 2 * Math.PI * 50  //边框长度
    let percent = parseFloat(humidity) / 100
    return(
        <div className="relative w-full h-40 flex justify-center items-center border border-[#2e2e2e]" style={{borderRadius:radius}}>
                <svg width="100" height="100">
                    <motion.circle
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: circumference * (1 - percent + 0.1) }}
                        transition={{ duration: 1 }}

                        stroke = {color} //边框颜色
                        fill = 'none' //填充颜色
                        strokeWidth = '8' //边框宽度
                        strokeLinecap="round"  //边框末端样式
                        strokeDasharray = {circumference}  //边框长度
                        r = '46'  //半径
                        cx = '50'  //圆心x坐标
                        cy = '50'  //圆心y坐标
                        transform="rotate(-90 50 50)" //旋转90度
                    />
                    <circle
                        className="opacity-20"
                        stroke = {color} //边框颜色
                        fill = 'none' //填充颜色
                        strokeWidth = '8' //边框宽度
                        strokeLinecap="round"  //边框末端样式
                        strokeDasharray = {circumference}  //边框长度
                        r = '46'  //半径
                        cx = '50'  //圆心x坐标
                        cy = '50'  //圆心y坐标
                    />
                </svg>
                <div className="absolute z-30 flex flex-col items-center justify-center">
                    <p className="GCHtitle-base text-xl">{humidity}%</p>
                    <p className="GCHtext-xs text-white -mt-1">湿度</p>
                </div>   
        </div>
    )
}

//核污染水面板
const Nuclear = (props) => {
    const { color, radius, nuclearDay } = props;
    const chemical = [
        {name:'氚',time:'12年'},
        {name:'碳-14',time:'5730年'},
        {name:'铷-86',time:'19天'},
        {name:'锶-89',time:'51天'},
        {name:'锶-90',time:'29年'},
        {name:'钇-90',time:'64小时'},
        {name:'铌-95',time:'35天'},
        {name:'锝-99',time:'21万年'},
        {name:'钌-103',time:'40天'},
        {name:'钌-106',time:'370天'},
        {name:'铑-103m',time:'56分钟'},
        {name:'铑-106',time:'30秒'},
        {name:'银-110m',time:'250天'},
        {name:'镉-113m',time:'15年'},
        {name:'镉-115m',time:'45天'},
        {name:'锡-119m',time:'290天'},
        {name:'锡-123',time:'130天'},
        {name:'锡-126',time:'10万年'},
        {name:'锑-124',time:'60天'},
        {name:'锑-125',time:'3年'},
        {name:'碲-123m',time:'120天'},
        {name:'碲-125m',time:'58天'},
        {name:'碲-127',time:'9小时'},
        {name:'碲-127m',time:'110天'},
        {name:'碲-129',time:'70分钟'},
        {name:'碲-129m',time:'34天'},
        {name:'碘-129',time:'1570万年'},
        {name:'铯-134',time:'2年'},
        {name:'铯-135',time:'300万年'},
        {name:'铯-136',time:'13天'},
        {name:'铯-137',time:'30年'},
        {name:'钡-137m',time:'3分钟'},
        {name:'钡-140',time:'13天'},
        {name:'铈-141',time:'32天'},
        {name:'铈-144',time:'284天'},
        {name:'镨-144',time:'17分钟'},
        {name:'镨-144m',time:'7分钟'},
        {name:'钷-146',time:'6年'},
        {name:'钷-147',time:'3年'},
        {name:'钷-148',time:'5天'},
        {name:'钷-148m',time:'41天'},
        {name:'钐-151',time:'87年'},
        {name:'铕-152',time:'13年'},
        {name:'铕-154',time:'9年'},
        {name:'铕-155',time:'4.8年'},
        {name:'钆-153',time:'240天'},
        {name:'铽-160',time:'72天'},
        {name:'钚-238',time:'88年'},
        {name:'钚-239',time:'24万年'},
        {name:'钚-240',time:'6561年'},
        {name:'钚-241',time:'14年'},
        {name:'镅-241',time:'430年'},
        {name:'镅-242m',time:'150年'},
        {name:'镅-243',time:'7400年'},
        {name:'锔-242',time:'160天'},
        {name:'锔-243',time:'29年'},
        {name:'锔-244',time:'18年'},
        {name:'锰-54',time:'310天'},
        {name:'铁-59',time:'45天'},
        {name:'钴-58',time:'71天'},
        {name:'钴-60',time:'5.3年'},
        {name:'镍-63',time:'100年'},
        {name:'锌-65',time:'240天'},
    ]
    
    return(
        <div className="w-full h-full flex flex-col mt-5 gap-8">
            <div className="w-full flex flex-col">
                <p className="GCHtext-sm text-white">当前日本核污染水排放量（预估）/ 吨</p>
                <div className="flex flex-row justify-between mt-2">
                    <p className="GCHheading-md text-6xl">{456 * nuclearDay - 800}</p>
                    <div className="w-[108px] relative h-7 flex flex-row gap-1 rounded-full items-center justify-center">
                        <p className="GCHtitle-xs" style={{color:color}}>约456吨/天</p>
                        <ChartWindPointer w = '16' h = '16' fill = {color} />
                        <div className="w-full absolute h-7 rounded-full opacity-20" style={{backgroundColor:color, borderRadius:radius}}></div>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col gap-3">
                    <div className="w-full flex flex-row justify-between" >
                        <p className="GCHtext-xs text-[#97979B]">核污染水中高达64种核放射性物质</p>
                        <p className="GCHtitle-xs">66%放射性物质含量超标</p>
                    </div>
                    <div className="relative flex items-center">
                        <div className="w-[66%] h-3 z-10" style={{backgroundColor:color, borderRadius:radius}}></div>
                        <div className="absolute w-full h-3  opacity-20" style={{backgroundColor:color, borderRadius:radius}}></div>
                    </div>
            </div>
            
            <div className=" w-full h-60 rounded-lg flex flex-col border border-[#2e2e2e]" style={{borderRadius:radius}}>
                <div className="w-full px-5 py-3 grid grid-cols-2 items-center rounded-t-lg border-b-[1px] border-white/10">
                    <p className="GCHtitle-sm">元素</p>
                    <p className="GCHtitle-sm">半衰期</p>
                </div>
               
                <div className=" h-full px-5 overflow-auto divide-y divide-white/10">
                    {chemical.map((item,index) => {
                        return(
                            <div key={index} className="w-full py-3 grid grid-cols-2 items-center">
                                <p className="GCHtext-sm text-white">{item.name}</p>
                                <p className="GCHtitle-sm" style={{color:color}}>{item.time}</p>
                            </div>   
                        )
                    })}
                </div>  
                   
            </div>
        </div>
    )
}




//请求和风天气网络数据
async function getWeatherData() {
    const res = await fetch('https://devapi.qweather.com/v7/weather/now?location=101010100&key=719ad4dc0c884959b7b4186d7a95f906')
    if(!res.ok) {
        throw new Error('天气数据获取失败！')
    }
    return res.json()
}

//日期计算
function GetDaysBetweenDates() {
    const currentDate = new Date();

    // const currentTime = currentDate.toLocaleTimeString();  // 获取当前时间

    const currentDay = currentDate.toLocaleDateString(); // 获取当前日期

    // 将日期字符串转换为Date对象
    const startDate = new Date('2023-08-24');
    const endDate = new Date(currentDay);
    // 计算两个日期之间的毫秒数差值
    const timeDiff = endDate.getTime() - startDate.getTime();
    // 将毫秒数差值转换为天数
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysDiff + 1;
}

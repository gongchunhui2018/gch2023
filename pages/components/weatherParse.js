/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-09-09 19:22:29
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 15:36:16
 * @FilePath: /gch2023/pages/components/weatherParse.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useState, useEffect } from "react";
import { 
    WeatherBoltRain,
    WeatherCloud, 
    WeatherMoon, 
    WeatherMoonCloud, 
    WeatherMoonRain, 
    WeatherRain, 
    WeatherSmoke, 
    WeatherSnow, 
    WeatherSun, 
    WeatherSunCloud, 
    WeatherSunRain

} from "./icons";



//获取时间
const currentDate = new Date(); //获取当前时间判断白天晚上
const currentHour = currentDate.getHours();
const isDay = currentHour >= 6 && currentHour < 18; // 假设白天是从早上6点到晚上7点

//1.返回天气图标
export const WeatherIcon = (props) => {
    
    const iconId = props.iconId || "100";
    const iconSize = props.iconSize || "24"
    
    const weatherIcon = {
      "100": <WeatherSun w = {iconSize} h = {iconSize} />,
      "101": <WeatherSunCloud w = {iconSize} h = {iconSize} />,
      "102": <WeatherSunCloud w = {iconSize} h = {iconSize} />,
      "103": <WeatherSunCloud w = {iconSize} h = {iconSize} />,
      "104": <WeatherCloud w = {iconSize} h = {iconSize} />,

      "150": <WeatherMoon w = {iconSize} h = {iconSize} />,
      "151": <WeatherMoonCloud w = {iconSize} h = {iconSize} />,
      "152": <WeatherMoonCloud w = {iconSize} h = {iconSize} />,
      "153": <WeatherMoonCloud w = {iconSize} h = {iconSize} />,

      "300": <WeatherSunRain w = {iconSize} h = {iconSize} />,
      "301": <WeatherSunRain w = {iconSize} h = {iconSize} />,

      "302": <WeatherBoltRain w = {iconSize} h = {iconSize} />,
      "303": <WeatherBoltRain w = {iconSize} h = {iconSize} />,
      "304": <WeatherBoltRain w = {iconSize} h = {iconSize} />,
      "305": <WeatherRain w = {iconSize} h = {iconSize} />,
      "306": <WeatherRain w = {iconSize} h = {iconSize} />,
      "307": <WeatherRain w = {iconSize} h = {iconSize} />,
      "308": <WeatherRain w = {iconSize} h = {iconSize} />,
      "309": <WeatherRain w = {iconSize} h = {iconSize} />,
      "310": <WeatherRain w = {iconSize} h = {iconSize} />,
      "311": <WeatherRain w = {iconSize} h = {iconSize} />,
      "312": <WeatherRain w = {iconSize} h = {iconSize} />,
      "313": <WeatherRain w = {iconSize} h = {iconSize} />,
      "314": <WeatherRain w = {iconSize} h = {iconSize} />,
      "315": <WeatherRain w = {iconSize} h = {iconSize} />,
      "316": <WeatherRain w = {iconSize} h = {iconSize} />,
      "317": <WeatherRain w = {iconSize} h = {iconSize} />,
      "318": <WeatherRain w = {iconSize} h = {iconSize} />,

      "350": <WeatherMoonRain w = {iconSize} h = {iconSize} />,
      "351": <WeatherMoonRain w = {iconSize} h = {iconSize} />,

      "399": <WeatherRain w = {iconSize} h = {iconSize} />,
      "400": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "401": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "402": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "403": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "404": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "405": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "406": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "407": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "408": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "409": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "410": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "456": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "457": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "499": <WeatherSnow w = {iconSize} h = {iconSize} />,

      "500": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "501": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "502": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "503": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "504": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "507": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "508": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "509": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "510": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "511": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "512": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "513": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "514": <WeatherSmoke w = {iconSize} h = {iconSize} />,
      "515": <WeatherSmoke w = {iconSize} h = {iconSize} />,

      "900": <WeatherSun w = {iconSize} h = {iconSize} />,
      "901": <WeatherSnow w = {iconSize} h = {iconSize} />,
      "999": <WeatherSnow w = {iconSize} h = {iconSize} />,   
  }
  
  return (
      <div>{weatherIcon[iconId]}</div>
  )
}


//2.返回天气背景
export const WeatherBg = (props) => {

    const cloud = props.cloud || 10

    if (isDay) {
        if(0 < cloud && cloud <= 40){
            return "bg-gradient-to-b from-[#0284C7] via-[#0EA5E9] to-[#38BDF8]"
        }
        if( 40 < cloud && cloud <= 80){
            return "bg-gradient-to-b from-[#0369A1] via-[#0284C7] to-[#0EA5E9]"
        }
        if( 80 < cloud && cloud <= 100){
            return "bg-gradient-to-b from-[#155E75] via-[#0E7490] to-[#0891B2]"
        }
       
    }else {
        if(0 < cloud && cloud <= 80){
            return "bg-gradient-to-b from-[#030317] via-[#1F233D] to-[#293654]"
        }
        if(80 < cloud & cloud <= 100){
            return "bg-gradient-to-b from-[#010111] via-[#151830] to-[#1D2945]"
        }

    }
}

//3.返回天气卡片背景
export const WeatherCard = (props) => {

    const cloud = props.cloud || 10

    if (isDay) {
        if(0 < cloud && cloud <= 40){
            return "bg-[#0284C7]/50 "
        }
        if( 40 < cloud && cloud <= 80){
            return "bg-[#0369A1]/50  "
        }
        if( 80 < cloud && cloud <= 100){
            return "bg-[#155E75]/50  "
        }

    }else {
        if(0 < cloud && cloud <= 80){
            return "bg-[#030317]/50  "
        }
        if(80 < cloud && cloud <= 100){
            return "bg-[#010111]/50 "
        }

    }

}
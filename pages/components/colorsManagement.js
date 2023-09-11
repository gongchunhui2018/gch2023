/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-05-29 22:34:44
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-06-21 17:53:27
 * @FilePath: /gchct/Components/colorsManagement.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import chroma, { mix } from "chroma-js"

//01.根据起始颜色和终止颜色生成颜色板
export const GeneratePalette = (props) => {
    //startColor: 起始颜色, endColor: 终止颜色, colorNum: 颜色数量
    const { startColor, endColor, colorNum } = props;

    //如果没有传入startColor, endColor, colorNum, 则返回null
    if (!startColor || !endColor) {
        const colorPalette = ['#000000', '#000000'];
        return colorPalette;

    }else
    {   
        //创建一个空数组用于接收生成的颜色
        const colorPalette = [];

        //如果没有传入colorNum, 则默认颜色数量为5
        while (!colorNum) {
            chroma.scale([startColor , endColor])
            .mode('hsl').colors(5)
            .forEach((color) => {
            colorPalette.push(color)
            }
            )
            return colorPalette;
        }
   
        //当传入了colorNum
        while (colorNum) {
            chroma.scale([startColor , endColor])
            .mode('hsl').colors(colorNum)
            .forEach((color) => {
            colorPalette.push(color)
            }
            )
            return colorPalette;
        }
    }
    // console.log(colorPalette)  
}



//02.混合两种颜色：chroma.mix(color1, color2, ratio=0.5, mode='lrgb')
export const MixColor = (props) => {
    //colorA: 颜色A, colorB: 颜色B, colorModel: 颜色模式, mixRatio: 混合比例
    const { colorA, colorB, mixRatio, colorModel } = props;
    
    //如果没有传入colorA, colorB, colorModel, 则返回#000000
    if (!colorA || !colorB) {
        return '#000000';
    }else
    {
        //如果没有传入mixRatio, 则默认混合比例为0.5
        while (!mixRatio) {
            const mixColor = chroma.mix(colorA, colorB, 0.5, colorModel).hex()
            return mixColor;
        }

        //如果没有传入colorModel, 则默认色彩模式为hsl
        while (!colorModel) {
            const mixColor = chroma.mix(colorA, colorB, mixRatio, 'hsl').hex()
            return mixColor;
        }

        //如果没有传入mixRatio, colorModel
        while (!mixRatio && !colorModel) {
            const mixColor = chroma.mix(colorA, colorB, 0.5, 'hsl').hex()
            return mixColor;
        }

        //如果传入了mixRatio, colorModel
        while (mixRatio && colorModel) {
            const mixColor = chroma.mix(colorA, colorB, mixRatio, colorModel).hex()
            return mixColor;
        }
    }
    // console.log(mixColor)   
}



//03.求多种颜色的平均值：chroma.average(colors, mode='lrgb', weights=[])
export const AverageColor = (props) => {
    //colors: 颜色数组, colorModel: 颜色模式 , colorWeights: 颜色权重
    const { colors, colorModel, colorWeights } = props;
 
    //如果没传入colors, 则返回null
    if (!colors) {
        const colors = ['#000000', '#000000'];
        const averageColor = chroma.average(colors, 'hsl', [1, 1]).hex()
        return averageColor;
    }
    else {
        //如果没传入colorModel, 则默认色彩模式为hsl
        while (!colorModel) {
            const averageColor = chroma.average(colors, 'hsl', colorWeights).hex()
            return averageColor;
        }

        //如果没传入colorWeights, 则默认权重为1
        while (!colorWeights) {
            const weights = [];
            colors.forEach(() => {
                weights.push(1)
            }
            )
            // console.log(weights) 
            const averageColor = chroma.average(colors, colorModel, weights).hex()
            return averageColor;
        }

        //如果没有传入colorModel, colorWeights
        while (!colorModel && !colorWeights) {
            const weights = [];
            colors.forEach(() => {
                weights.push(1)
            }
            )
            const averageColor = chroma.average(colors, 'hsl', weights).hex()
            return averageColor;
        }

        //如果传入了colorModel, colorWeights
        while (colorModel && colorWeights) {
            const averageColor = chroma.average(colors, colorModel, colorWeights).hex()
            return averageColor;
        }

    }

    // console.log(averageColor)   
}



//04.计算两种颜色之间的对比度：chroma.contrast(color1, color2) (小于4.5的颜色对不符合无障碍标准，大于4.5的颜色对符合无障碍标准)
export const ContrastColor = (props) => {
    //colorA: 颜色A, colorB: 颜色B
    const { colorA, colorB } = props;
    
    //如果没有传入colorA, colorB, 则返回null
    if (!colorA || !colorB) {
        return 0;
    }else
    {
        //获取对比度
        const contrastColor = chroma.contrast(colorA, colorB)
        return  contrastColor;
    }
    // console.log(contrastColor)   
}



//05.计算两种颜色之间的欧氏距离：chroma.distance(color1, color2, mode='lab') (欧氏距离越大，两种颜色越不相似)
export const DistanceColor = (props) => {
    //colorA: 颜色A, colorB: 颜色B , colorModel: 颜色模式
    const { colorA, colorB, colorModel } = props;
    
    //如果没有传入colorA, colorB
    if (!colorA || !colorB) {
        return -1;
    }else
    {
        //如果没有传入colorModel, 则默认色彩模式为hsl
        while (!colorModel) {
            const distanceColor = chroma.distance(colorA, colorB, 'hsl')
            return distanceColor;
        }

        //如果传入了colorModel
        while (colorModel) {
            const distanceColor = chroma.distance(colorA, colorB, colorModel)
            return distanceColor;
        }
    } 
    // console.log(distanceColor)    
}



//06.计算两种颜色之间的deltaE值：chroma.deltaE(color1, color2, Kl=1, Kc=1, Kh=1 (deltaE值越大，两种颜色越不相似，Kl：亮度，Kc：色度，Kh：色调，三种权重可调）
export const DeltaEColor = (props) => {
    //colorA: 颜色A, colorB: 颜色B 
    const { colorA, colorB } = props;
    
    //如果没有传入colorA, colorB, 则返回null
    if (!colorA || !colorB) {
        return -1;
    }else
    {
        //获取deltaE值
        const deltaEColor = chroma.deltaE(colorA, colorB)
        return  deltaEColor;
    }
    // console.log(deltaEColor)   
}



//07.更改颜色的luminance值：color.luminance([lum, mode='rgb']) (luminance值越大，颜色越亮，luminance值越小，颜色越暗)
export const LuminanceColor = (props) => {
    //color: 颜色, luminance: luminance值
    const { color, luminance } = props;
    
    //如果没有传入color, luminance, 则返回null
    if (!color) {
        return 0;
    }else
    {
        //获取更改后的颜色
        const luminanceColor = chroma(color).luminance(luminance).hex()
        return  luminanceColor;
    }
    // console.log(luminanceColor)
}



//08.获取颜色的temperature值 (temperature值越大，颜色越暖，temperature值越小，颜色越冷)
export const TemperatureColor = (props) => {
    //color: 颜色
    const { color } = props;
    
    //如果没有传入color, 则返回null
    if (!color) {
        return 0;
    }else
    {
        //获取temperature值
        const temperatureColor = chroma(color).temperature()
        return  temperatureColor;
    }
    // console.log(temperatureColor)   
}



//09.P3色域转SRGB色域
export const P3toSRGB = (props) => {
    //color: 颜色的hex值
    const { color } = props;

    //如果没有传入color, 则返回null
    if (!color) {
        return '#000000';
    }
   
    //将hex转换为RGB
    const [r,g,b] = chroma(color).rgb();

    //将RGB转换为线性RGB
    const r1 = r / 255;
    const g1 = g / 255;
    const b1 = b / 255;
    const data = [r1,g1,b1];

    //色域转换
    const linearRGB = data.map((color) => {
        if(color <= 0.03928){
            return color / 12.92
        }else{
            return Math.pow((color + 0.055) / 1.055,2.4)
        }
    });

    //线性RGB转换为sRGB
    const sRGB = linearRGB.map((color) => {
        if(color <= 0.0031308){
            return color * 12.92 * 255
        }else{
            return (1.055 * Math.pow(color,1/2.4) - 0.055) * 255
        }
    });

    //将sRGB转换为hex
    const colorSRGB = RGBtoHex({color: sRGB});
    // console.log(sRGB)
    // console.log(colorSRGB)
    //返回sRGB
    return colorSRGB;   
}

//RGB颜色值转hex
function RGBtoHex (props) {
    //RGBA颜色数组
    const [r,g,b] = props.color;
    const hexR = r.toString(16).padStart(2, '0');
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    //去除字符串中小数点后面的字符
    const R = hexR.toString().split('.')[0];
    const G = hexG.toString().split('.')[0];
    const B = hexB.toString().split('.')[0];

    // console.log(R,G,B);
    // console.log(hexR,hexG,hexB);
    return `#${R}${G}${B}`;
}



//10.P3色域转CMYK色域
export const P3toCMYK = (props) => {
    //color: 颜色的hex值
    const { color } = props;

    //如果没有传入colorHex, 则返回null
    if (!color) {
        return '#000000';
    }

    //将P3颜色转换为sRGB颜色
    const colorSRGB = P3toSRGB({color: color});

    //将sRGB颜色转换为CMYK颜色
    const CMYK = chroma(colorSRGB).cmyk()

    //将CMYK去除小数点后面的值
    // CMYK.forEach((color,index) => {
    //     CMYK[index] = Math.round(color * 100)
    // })

    //将CMYK颜色转换为hex颜色
    const colorCMYK = chroma(CMYK).hex()

    // console.log(colorCMYK)
    return colorCMYK;
}




//11.求多个颜色值中的中位数
export const MedianColor = (props) => {
    //colors: 颜色数组
    const { colors } = props;

    //如果没有传入colors, 则返回null
    if (!colors) {
        return '#000000';
    }

    //将颜色数组中的十六进制值分别拆分为 R、G、B 值
    const rgbValues = colors.map((color) => {
        return color.match(/\w\w/g).map((val) => parseInt(val, 16));
    });
    // 将颜色值分解为红、绿、蓝三个分量
    const red = rgbValues.map((color) => color[0]);
    const green = rgbValues.map((color) => color[1]);
    const blue = rgbValues.map((color) => color[2]);
    
    //对三个分量分别求中位数
    const medianRed = GetMedian(red);
    const medianGreen = GetMedian(green);
    const medianBlue = GetMedian(blue);

    //将三个分量组合成十六进制颜色值
    const medianColor = "#" + [medianRed, medianGreen, medianBlue].map((val) => Math.round(val).toString(16).padStart(2, "0")).join("");

    // console.log(medianColor)
    //返回中位数颜色值
    return medianColor;
}

//对每个颜色分量进行排序
function GetMedian (arr) {
    //对颜色分量进行排序
    const sorted = arr.sort((a, b) => a - b);

    //求颜色分量的最大值
    const max = Math.max(...sorted);

    //求颜色分量的最小值
    const min = Math.min(...sorted);

    //如果颜色分量个数为奇数，则返回中间的颜色分量
    if (sorted.length % 2 === 1) {
        return sorted[Math.floor(sorted.length / 2)];
    }

    //如果颜色分量个数为偶数，则返回中间两个颜色分量的平均值
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
}



//12.求多个颜色值中的最大值
export const MaxColor = (props) => {
    //colors: 颜色数组
    const { colors } = props;

    //如果没有传入colors, 则返回null
    if (!colors) {
        return '#000000';
    }

    // 将颜色值分别拆分为 R、G、B 值
    const rgbValues = colors.map((color) => {
        return color.match(/\w\w/g).map((val) => parseInt(val, 16));
    });

    //将颜色值转换为数字值
    const rgbNumbers = rgbValues.map((color) => {
        return color[0] * 256 * 256 + color[1] * 256 + color[2];
    });

    //获取最大值颜色值的索引
    const maxIndex = rgbNumbers.indexOf(Math.max(...rgbNumbers));
 
    //获取最大值颜色值,并转换为小写
    const maxColor = colors[maxIndex].toLowerCase();
    
    // console.log(maxColor)
    // 返回最大值颜色值
    return maxColor;

}



//13.求多个颜色值中的最小值
export const MinColor = (props) => {
    //colors: 颜色数组
    const { colors } = props;

    //如果没有传入colors, 则返回null
    if (!colors) {
        return '#000000';
    }

    // 将颜色值分别拆分为 R、G、B 值
    const rgbValues = colors.map((color) => {
        return color.match(/\w\w/g).map((val) => parseInt(val, 16));
    });

    //将颜色值转换为数字值
    const rgbNumbers = rgbValues.map((color) => {
        return color[0] * 256 * 256 + color[1] * 256 + color[2];
    });

    //获取最小值颜色值的索引
    const minIndex = rgbNumbers.indexOf(Math.min(...rgbNumbers));

    //获取最小值颜色值,并转换为小写
    const minColor = colors[minIndex].toLowerCase();
    
    //  console.log(minColor)
    // 返回最小值颜色值
    return minColor;
}







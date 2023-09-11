/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-06-02 19:41:55
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-09 21:16:38
 * @FilePath: /gchct/Components/GCHUI/colorPicker.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState,useRef,useCallback,useEffect} from 'react';
import chroma, { mix } from "chroma-js"
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { P3toSRGB } from './colorsManagement';
import  ColorBlind from 'color-blind';


//存放备选色的参数
let red = '#ff0000'
let yellow = '#ffff00'
let green = '#008000'
let blue = '#0000ff'

//初始化颜色
const initailColor = ['#dc2626', '#eab308', '#22c55e', '#3b82f6']

//选色板
export const ColorPicker = () => {
    return (
        <div className='GCHcard w-[67.5rem] flex flex-col gap-12 p-5'>
           <div className='w-full grid grid-cols-4 gap-5'>
             {initailColor.map((item, index) => {
                const [color, setColor] = useState(item)
                ColorClassify({flag :index ,color:color})
                return (
                    <div key={index} className='w-full rounded-2xl flex flex-col gap-2 items-center py-5 border border-[#2e2e2e]'>
                        <HexColorPicker className='w-full h-auto' color={color} onChange={setColor}/> 
                        <ColorDerivation color = {color} setColor = {setColor}/>
                    </div>
                )
              })}
           </div>

           <ColorExtension/>

        </div>
    )
}


//hex颜色输入面板
const HexIput = (props) => {
    const {color, setColor} = props

    return (
        <div className='relative flex items-center'>
            <span className='GCHtitle-sm text-textSecondary-dark absolute left-2'>#</span>
            <HexColorInput 
                color={color} 
                onChange={setColor} 
                className='GCHtitle-sm w-full rounded-lg bg-[#0F0F0F] outline outline-1 outline-white/10 pl-6 py-2 
                           hover:bg-bgSecondary-dark/100
                           focus:outline-2  focus:outline-offset-0  focus:outline-blue-500'
            />
        </div>  
    )
}

//色彩推演面板
const ColorDerivation = (props) => {
    const {color, setColor} = props

    const [mix, setMix] = useState(0.5)

    const handleMix = (e) => {
        setMix(e.target.value)
    }

    //获取颜色的色相并取整
    const hue = Math.round(chroma(color).hcl()[0])

    //获取颜色的饱和度,并取整
    const saturation = Math.round(chroma(color).hcl()[1])

    //获取颜色的亮度
    const lightness = Math.round(chroma(color).hcl()[2])

    //获取以上色相外的其他色相
    const hue1 = hue + 30
    const hue2 = hue1 + 30
    const hue3 = hue2 + 30
    const hue4 = hue3 + 30
    const hue5 = hue4 + 30
    const hue6 = hue5 + 30

    //将以上色相转换为同亮度同饱和度的hex颜色
    const color1 = chroma.hcl(hue1, saturation, lightness).hex()
    const color2 = chroma.hcl(hue2, saturation, lightness).hex()
    const color3 = chroma.hcl(hue3, saturation, lightness).hex()
    const color4 = chroma.hcl(hue4, saturation, lightness).hex()
    const color5 = chroma.hcl(hue5, saturation, lightness).hex()
    const color6 = chroma.hcl(hue6, saturation, lightness).hex()

    //混合以上颜色
    const colorMix1 = chroma.mix(color, color1, mix, 'lab').hex()
    const colorMix2 = chroma.mix(color, color2, mix, 'lab').hex()
    const colorMix3 = chroma.mix(color, color3, mix, 'lab').hex()
    const colorMix4 = chroma.mix(color, color4, mix, 'lab').hex()
    const colorMix5 = chroma.mix(color, color5, mix, 'lab').hex()
    const colorMix6 = chroma.mix(color, color6, mix, 'lab').hex()

    //将以上结果打包为数组
    const colorArray = [colorMix1, colorMix2, colorMix3, colorMix4, colorMix5, colorMix6]

    return (
        <div className='w-full flex flex-col gap-5 px-5 mt-5'>
            <div className='w-full grid grid-cols-2 gap-3'>
                <HexIput color = {color} setColor = {setColor} />

                <label className='relative flex items-center'>
                    <span className='GCHtitle-sm text-textSecondary-dark absolute left-2'>Mix:</span>
                    <input 
                        placeholder='0-1'
                        value={mix}
                        type='text' 
                        onChange={handleMix}
                        className='GCHtitle-sm w-full rounded-lg bg-[#0F0F0F] outline outline-1 outline-white/10  pl-11 py-2 
                                   hover:bg-bgSecondary-dark/100
                                   focus:outline-2  focus:outline-offset-0  focus:outline-blue-500'
                    />
                </label>
            </div>

            <div className='w-full grid grid-cols-[64px_1fr] gap-7'>
                <div className='w-16 h-16 rounded-lg border border-white/10' style={{backgroundColor:color}}></div>
                <div className='w-full grid grid-cols-3 gap-2'>
                {colorArray.map((color, index) => (
                    <button 
                        key={index} 
                        style={{backgroundColor:color}}
                        onClick={() => setColor(color)} //返回当前颜色
                        className='w-7 h-7 rounded-full border border-white/10 outline outline-2 -outline-offset-[6px] outline-[#141414]/0
                             hover:outline-[#141414]/40
                             focus:outline-[#141414]'>
                    </button>
              
                ))}
                </div>
            </div>

        </div>
    )   
}

//色彩延展
const ColorExtension = () => {
    
    const redPalette = [];  //红色色板接收延展的颜色
    const yellowPalette = []; //黄色色板接收延展的颜色
    const greenPalette = []; //绿色色板接收延展的颜色
    const bluePalette = []; //蓝色色板接收延展的颜色

    //监听颜色变量的变化
    // const [red, setRed] = useColor(Red)
    // const [yellow, setYellow] = useColor(Yellow)
    // const [green, setGreen] = useColor(Green)
    // const [blue, setBlue] = useColor(Blue)

    useEffect(() => {
        // console.log(red, yellow, green, blue)
    }, [red, yellow, green, blue])

    //延展红色
    chroma.scale([red , yellow]).mode('hcl').colors(6)
           .forEach((color) => {
                redPalette.push(color)
            }
    )

    //延展黄色
    chroma.scale([yellow , green]).mode('hcl').colors(6)
           .forEach((color) => {
                yellowPalette.push(color)
            }
    )

    //延展绿色
    chroma.scale([green , blue]).mode('hcl').colors(6)
            .forEach((color) => {
                greenPalette.push(color)
            }
    )

    //延展蓝色
    chroma.scale([blue , red]).mode('hcl').colors(6)
            .forEach((color) => {
                bluePalette.push(color)
            }
    )

    return (
        
            <div className='w-full h-auto flex flex-col items-center gap-5'>
                {/* <button 
                        onClick={() => {
                            setBlue(Blue);
                            setGreen(Green);
                            setYellow(Yellow);
                            setRed(Red);
                        }}
                        className='GCHtext-sm text-white text-center w-28 h-9 rounded-lg bg-blue-500 border border-white/10
                                 hover:bg-blue-600 active:scale-95 transition-all' 
                    >
                        生成色板
                </button> */}
                
                <div className="w-full py-3 grid grid-cols-[0.16fr_0.16fr_1fr_0.6fr] gap-16 items-center rounded-t-lg border-b-[1px] border-white/10">
                    <p className="GCHtitle-sm text-center">P3</p>
                    <p className="GCHtitle-sm text-center">sRGB</p>
                    <p className="GCHtitle-sm text-center">过渡色</p>
                    <p className="GCHtitle-sm text-center">无障碍检测（红、绿、蓝色弱）</p>
                </div>

                {/* 红色 */}
                <div className='w-full grid grid-cols-[0.16fr_0.16fr_1fr_0.6fr] items-center gap-16 py-2 border-b-[1px] border-white/10 '>
                    <div className='w-full flex flex-col items-center gap-2'>
                        <div style={{backgroundColor:red}} className='w-14 h-7 rounded-md border border-white/10'></div>
                        <p className='GCHtext-xs text-center'>{red}</p>
                    </div>

                    <div className='w-full flex flex-col items-center gap-2'>
                        <div style={{backgroundColor:P3toSRGB({color:red,colorModel:'hcl'})}} className='w-14 h-7 rounded-md border border-white/10'></div>
                        <p className='GCHtext-xs text-center'>{P3toSRGB({color:red,colorModel:'hcl'})}</p>
                    </div>
                    
                    <div className='w-full flex flex-row'>
                        {redPalette.map((color, index) => (
                            <div className='w-full flex flex-col items-center gap-2'>
                                <div key={index} style={{backgroundColor:color}} className='w-14 h-7 rounded-md border border-white/10'></div>
                                <p className='GCHtext-xs text-center'>{color}</p>
                            </div> 
                        ))}
                    </div>
                    
                    <div className='w-full flex flex-row justify-between'>
                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['protanomaly'](red)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs text-center'>红 {ColorBlind['protanomaly'](red)}</p>
                        </div>

                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['deuteranomaly'](red)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs text-center'>绿 {ColorBlind['deuteranomaly'](red)}</p>
                        </div>

                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['tritanomaly'](red)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs text-center'>蓝 {ColorBlind['tritanomaly'](red)}</p>
                        </div>
                    </div>
                </div>

                {/* 黄色 */}
                <div className='w-full grid grid-cols-[0.16fr_0.16fr_1fr_0.6fr] items-center gap-16 py-2 border-b-[1px] border-white/10 '>
                    <div className='w-full flex flex-col items-center gap-2'>
                        <div style={{backgroundColor:yellow}} className='w-14 h-7 rounded-md border border-white/10'></div>
                        <p className='GCHtext-xs text-center'>{yellow}</p>
                    </div>

                    <div className='w-full flex flex-col items-center gap-2'>
                        <div style={{backgroundColor:P3toSRGB({color:yellow,colorModel:'hcl'})}} className='w-14 h-7 rounded-md border border-white/10'></div>
                        <p className='GCHtext-xs text-center'>{P3toSRGB({color:yellow,colorModel:'hcl'})}</p>
                    </div>
                    
                    <div className='w-full flex flex-row justify-between'>
                        {yellowPalette.map((color, index) => (
                            <div className='w-full flex flex-col items-center gap-2'>
                                <div key={index} style={{backgroundColor:color}} className='w-14 h-7 rounded-md border border-white/10'></div>
                                <p className='GCHtext-xs text-center'>{color}</p>
                            </div>   
                        ))}
                    </div>
                    
                    <div className='w-full flex flex-row justify-between'>
                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['protanomaly'](yellow)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs text-center'>红 {ColorBlind['protanomaly'](yellow)}</p>
                        </div>

                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['deuteranomaly'](yellow)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs  text-center'>绿 {ColorBlind['deuteranomaly'](yellow)}</p>
                        </div>

                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['tritanomaly'](yellow)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs  text-center'>蓝 {ColorBlind['tritanomaly'](yellow)}</p>
                        </div>
                    </div>
                </div>

                {/* 绿色 */}
                <div className='w-full grid grid-cols-[0.16fr_0.16fr_1fr_0.6fr] items-center gap-16 py-2 border-b-[1px] border-white/10 '>
                    <div className='w-full flex flex-col items-center gap-2'>
                        <div style={{backgroundColor:green}} className='w-14 h-7 rounded-md border border-white/10'></div>
                        <p className='GCHtext-xs  text-center'>{green}</p>
                    </div>

                    <div className='w-full flex flex-col items-center gap-2'>
                        <div style={{backgroundColor:P3toSRGB({color:green,colorModel:'hcl'})}} className='w-14 h-7 rounded-md border border-white/10'></div>
                        <p className='GCHtext-xs  text-center'>{P3toSRGB({color:green,colorModel:'hcl'})}</p>
                    </div>
                    
                    <div className='w-full flex flex-row justify-between'>
                        {greenPalette.map((color, index) => (
                            <div className='w-full flex flex-col items-center gap-2'>
                                <div key={index} style={{backgroundColor:color}} className='w-14 h-7 rounded-md border border-white/10'></div>
                                <p className='GCHtext-xs  text-center'>{color}</p>
                            </div>   
                        ))}
                    </div>
                    
                    <div className='w-full flex flex-row justify-between'>
                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['protanomaly'](green)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs  text-center'>红 {ColorBlind['protanomaly'](green)}</p>
                        </div>

                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['deuteranomaly'](green)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs  text-center'>绿 {ColorBlind['deuteranomaly'](green)}</p>
                        </div>

                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['tritanomaly'](green)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs  text-center'>蓝 {ColorBlind['tritanomaly'](green)}</p>
                        </div>
                    </div>
                </div>

                {/* 蓝色 */}
                <div className='w-full grid grid-cols-[0.16fr_0.16fr_1fr_0.6fr] items-center gap-16 py-2 border-b-[1px] border-white/10 mb-4 '>
                    <div className='w-full flex flex-col items-center gap-2'>
                        <div style={{backgroundColor:blue}} className='w-14 h-7 rounded-md border border-white/10'></div>
                        <p className='GCHtext-xs  text-center'>{blue}</p>
                    </div>

                    <div className='w-full flex flex-col items-center gap-2'>
                        <div style={{backgroundColor:P3toSRGB({color:blue,colorModel:'hcl'})}} className='w-14 h-7 rounded-md border border-white/10'></div>
                        <p className='GCHtext-xs  text-center'>{P3toSRGB({color:blue,colorModel:'hcl'})}</p>
                    </div>
                    
                    <div className='w-full flex flex-row justify-between'>
                        {bluePalette.map((color, index) => (
                            <div className='w-full flex flex-col items-center gap-2'>
                                <div key={index} style={{backgroundColor:color}} className='w-14 h-7 rounded-md border border-white/10'></div>
                                <p className='GCHtext-xs text-center'>{color}</p>
                            </div>   
                        ))}
                    </div>
                    
                    <div className='w-full flex flex-row justify-between'>
                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['protanomaly'](blue)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs  text-center'>红 {ColorBlind['protanomaly'](blue)}</p>
                        </div>

                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['deuteranomaly'](blue)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs  text-center'>绿 {ColorBlind['deuteranomaly'](blue)}</p>
                        </div>

                        <div className='w-full flex flex-col items-center gap-2'>
                            <div style={{backgroundColor:ColorBlind['tritanomaly'](blue)}} className='w-14 h-7 rounded-md border border-white/10'></div>
                            <p className='GCHtext-xs  text-center'>蓝 {ColorBlind['tritanomaly'](blue)}</p>
                        </div>
                    </div>
                </div>

            </div>
    )

}




//颜色分类站
const ColorClassify = (props) => {
    const {flag, color} = props

    if(flag === 0) {
        red = color
    } 
    if(flag === 1) {
        yellow = color
    }
    if(flag === 2) {
        green = color
    }
    if(flag === 3) {
        blue = color
    }

}

//自定hook函数，用来监听颜色变量的变化
// const useColor = (color) => {

//     const [colorState, setColorState] = useState(color)

//     useEffect(() => {
//         setColorState(color)
//     }, [color])

//     return [ colorState, setColorState ]
// }


/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-06-02 22:55:15
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-12 03:28:53
 * @FilePath: /gchct/Components/UIDemo/demoUIAll.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from "next/image";
import { HeadingMD, HeadingSM } from "../components/headingComponent";
import CarDashBoard from "./carDashboard";
import SmartHome from "./smartHome";
import IconDesign from "./iconDesign";


export default function DemoUIAll() {
    return (
        <div className="w-[67.5rem] h-auto flex flex-col items-center py-20">
            <div className="w-full flex flex-col gap-20">
                <HeadingMD
                    heading = '构建独立运行的UI设计系统'
                />
                <div className="w-full flex flex-col gap-16">
                    <HeadingSM
                        heading = '背景'
                        detail = '随着工作经历的不断增加，对设计方法、设计效率及设计落地越来越重视，依托于自身的编程能力构建了一套方便使用的设计系统，系统基于React.js，结构功能如下：'
                    />
                    <Image className='w-full h-auto' src='/zebraResource/UIDesignSystem.svg' width={800} height={240} priority/>
                </div>

                <div className="w-full flex flex-col gap-16">
                    <HeadingSM
                       heading = '1. 可视化样式编辑器'  
                       detail = '以下例子展示了UI设计系统中的可视化编辑器，用于快速自定义组件样式（请上手操作体验）。'
                    />
                    
                    <SmartHome />
                    <IconDesign />
 
                </div>

                <div className="w-full flex flex-col gap-16">
                    <HeadingSM
                       heading = '2. 基于React.js的声明式UI'  
                       detail = '整套系统是基于React.js制作的。React.js作为一种声明式UI的前端框架，比较符合设计师的思维逻辑，并且与主流平台的UI开发框架类似。这为设计师和开发人员之间的合作和沟通提供了许多好处，有助于设计的顺利落地。以下是React.js、ArkUI、SwiftUI定义一个 “按钮” 的代码对比：'
                    />

                    <Image className='w-full h-auto' src='/zebraResource/reactUI.svg' width={800} height={150} priority/>
                </div>

                <div className="w-full flex flex-col gap-16">
                    <HeadingSM
                       heading = '3. 声明式UI的易用性：方便制作高保真原型'  
                       detail = '得益于声明式UI的易用性，可快速制作用于演示的高保真原型，此类高保真原型更接近原生应用，甚至可以制作数字孪生应用。以下是两个实际例子：'
                    />
                    <div className="w-full flex flex-col gap-8">
                        <HeadingSM
                            title = '1. 天气应用：'
                            detail = '用于模拟天气应用，数据来源于和风天气提供的免费API，数据都是真实数据。API提供基础数据，通过对基础数据的综合演算来展示各种天气信息。（数据刷新时界面会出现短暂闪烁，抱歉）'
                        />
                        <HeadingSM
                            title = '2. 汽车仪表：'
                            detail = '环形仪表的实际使用，用数据流驱动仪表动画。'
                        />
                    </div>

                    <CarDashBoard />

                </div>


                <div className="w-full flex flex-col gap-16">
                    <HeadingSM
                       heading = '4. 关于AI的一些不成熟想法'  
                       detail = '作为一个AI的重度使用者，经常使用AI来辅助编程。以下是一个使用AI协助设计的想法:'
                    />
                    <Image className='w-full h-auto' src='/zebraResource/AIDesignSystem.svg' width={800} height={150} priority/>
                </div>

                <HeadingSM
                    heading = '尾巴'  
                    detail = '感谢你耐心地看到这里，如果觉得我还行，就赶快联系我吧！😁😁😁😁😁😁'
                />


            </div>
        </div>
    )           

}



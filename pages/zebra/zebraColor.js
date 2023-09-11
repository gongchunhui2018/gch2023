/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-05-26 01:30:14
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-12 03:28:21
 * @FilePath: /gchct/Components/zebra/zebraColor.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { HeadingMD, HeadingSM,HeadingXS } from "../components/headingComponent";
import Image from "next/image";
import { ColorPicker } from "@/pages/components/colorPicker";


//设计探索 -- 参与斑马5.0改版
export default function ZebraColor() {
    return(
        <div className="w-[67.5rem] h-auto flex flex-col items-center py-20">
            <div className="w-full flex flex-col gap-20">
                <HeadingMD
                    heading = '斑马APP5.0改版，自制颜色辅助工具（2021.6)'
                />
                <HeadingSM
                    heading = '背景'
                    detail = '参与斑马APP5.0改版的色彩规范制定。在实践过程中发现：想要定义一套覆盖全场景内容的色彩规范难度很大。为了执行好这项任务，我和同事花了大量时间来学习色彩科学方面的知识，并总结出了一套色彩演算算法，并围绕此算法制作了一个辅助工具来提高效率。'
                />

                <HeadingSM
                    heading = '*特别说明'
                    detail = '当时是以sketch为载体，开发了一个插件来进行色彩演算和色彩延展，演算后的数据直接输出到控制台上，无UI界面。为了方便演示，这里围绕算法制作一个色彩演算和色彩延展应用，如下:'
                />
              
                <div className="w-full flex flex-col gap-16">
                    <div className="w-full flex flex-col gap-8">
                        <HeadingSM
                            title = '1. 颜色选择器：'
                            detail = '‘色盘’ 和 ‘Hex输入框’ 共同组成了 “颜色选择器”。使用 ‘色盘’ 可以方便的选择自己想要的颜色，使用 ‘Hex输入框’ 可以手动输入Hex值来确定颜色。四个调色盘主要是用来确定APP主色的，默认颜色是：红、黄、绿、蓝。（实际工作中使用了七个调色盘，方便生成更多颜色）'
                        />
                        <HeadingSM
                            title = '2. 颜色混合器：'
                            detail = '‘Mix输入框’ 和其下面的 ‘六种颜色’ 共同组成了 “颜色混合器”。这 ‘六种颜色’ 与主色是相同饱和度（S），相同明度（L），不同色相（H）的其他六种颜色按照Mix值混合得来的。例如：当前色盘选择的主色是红色（H：29)，算法会获取其饱和度（S）和明度（L），并将这两个值给赋给除红色色相（H）外其他剩余的六个等距离色相（橙，黄，绿，青，蓝，紫），得出的颜色再与红色混合生成 ‘六种颜色’，这使得每调整一次颜色就能获得七种可选色，大大提升了选色效率，并且统一的 S 和 L，能保证生成的颜色与选择的颜色保持属性上的统一。选择 ‘六种颜色’ 中的一个颜色，它又将变为主色，以此类推，通过不断地调整参数进行混合，直到选到符合自己需求的颜色（颜色的混合过程不会展示出来，调色盘上只会展示计算混合后的颜色，这样做的目的是为了使用时不被除“调色”外的其它因素干扰，调色和选色是目的，辅助工具只是辅助，不是主导）。'
                        />
                        <HeadingSM
                            detail = '注：Mix：混合比，范围是0-1（自由输入，可精确到小数点后三位）。主要用来控制两种颜色的混合比，混合模式是lab。'
                        />
                    </div>

                    <ColorPicker/>

                </div>    
                
                <div className="w-full flex flex-col gap-16">
                    <HeadingSM
                        heading = '依托于算法的其他应用'
                        detail = '除了以上例子，我们还可以将算法打包成设计软件的插件，用来协助设计师提高设计效率。下面是一个figma插件的例子，插件可以辅助检查色彩使用规范，矫正设计过程中出现的用色失误，确保设计稿按照色彩规范来进行设计，保持设计稿的用色统一。'
                    />
                    <Image className='w-full h-auto' src='/zebraResource/figmaColorPlugin.svg' width={800} height={200} priority/>
                </div>

                <HeadingSM
                    heading = '总结'
                    detail = '在实际工作中遇到的一些问题，有时候会让设计师的工作体验变得很差，影响产出效率和质量。在不影响正常工作的前提下，想办法提升自己的舒适度，让工作变得更加方便，同时又能提高效率，这是我制作这些辅助工具的初衷。随着自身编程能力的增强，设计思维也得到了提高。以不一样的视角看待设计，实现设计想法的方式也不再局限于设计软件，设计过程变得更加灵活多变，设计落地的可能性也大大增强。'
                />
            </div>

        </div>
    )
}















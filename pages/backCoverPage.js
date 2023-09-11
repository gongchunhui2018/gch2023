/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-06-20 12:11:10
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-12 03:35:06
 * @FilePath: /gchct/pages/backCoverPage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import { IconEmail, IconPhone, IconWechat } from './components/icons'


export default function BackCoverPage () {
    return(
        <div className="GCHcontainer relative mb-44">
          <div className=' w-full h-auto flex flex-col gap-8 items-center py-40 '>
             <BackCover/>
             <div className='w-full h-auto flex flex-col gap-2 items-center'>
                 <p className='GCHheading-md w-2/3 text-center'>龚春辉</p>
                 <p className='GCHheading-sm w-2/3 text-center font-normal'>UX设计师 / 编程爱好者</p>
             </div>
             <div className='w-3/4 h-auto flex flex-row justify-between'>
                 <div className='flex flex-row gap-4 items-center'>
                     <IconPhone w="24" h="24" fill="#ffffff"/>
                     <p className='GCHheading-sm font-normal'>15242575583</p>
                 </div>
                 <div className='flex flex-row gap-4 items-center'>
                     <IconWechat w="24" h="24" fill="#ffffff"/>
                     <p className='GCHheading-sm font-normal'>15242575583</p>
                 </div>
                 <div className='flex flex-row gap-4 items-center'>
                     <IconEmail w="24" h="24" fill="#ffffff"/>
                     <p className='GCHheading-sm font-normal'>15242575583@163.com</p>
                 </div>
             </div>

             <Image
                   className="w-[800px] h-auto absolute z-10"
                   src="/bg_grid.svg"
                   width={800}
                   height={480}
             />
             
          </div>
        </div>
    
    )
    
}


export const BackCover = () => {
    return(
        <div className="w-48 h-48 relative flex items-center justify-center rounded-full  bg-gradient-to-br from-[#eab308] to-[#3b82f6] z-20">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black absolute right-0 top-0">              
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 16 12">
                   <path fill="#FFF" d="M14.0665845,12 L9.09494451,12 L9.09494451,7.78268251 L12.9617756,0 L16,0 L14.0665845,7.78268251 L14.0665845,12 Z M5.01109741,12 L-5.32907052e-15,12 L-5.32907052e-15,7.78268251 L3.92601726,0 L6.94451295,0 L5.01109741,7.78268251 L5.01109741,12 Z"/>
                </svg>  
            </div>
            <Image
                className=" w-32 h-auto"
                src="/zebraResource/avatar_1.svg"
                width={96}
                height={96}
            />
        </div>
    )
}
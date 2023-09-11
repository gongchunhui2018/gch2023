/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-05-17 21:21:52
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-12 03:26:51
 * @FilePath: /gchct/Components/zebra/zebraCourse.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import { HeadingMD, HeadingSM } from '../components/headingComponent'



//01.斑马思维课程内容产出
export default function ZebraCourse() {
  return (
      <div className='w-[67.5rem] flex flex-col items-center gap-20 py-20'>
          <HeadingMD
              heading = '猿辅导.斑马 -- 斑马思维课程内容产出'
          />
          
          <div className='w-full flex flex-col gap-16 '>
              <HeadingSM
                  heading = '2019.6 - 2023.1'
                  detail = '参与斑马思维S1-S6级别课程相关元素的绘制以及课程内容的产出。'
              />
              <div className='w-full grid grid-cols-2 gap-6'>
                  <Image 
                      className='w-full h-auto' 
                      src='/zebraResource/zebraCourse_2.svg' 
                      alt='zebraCourse_2'
                      width={480} 
                      height={240}
                      priority
                  />
                  <Image 
                      className='w-full h-auto' 
                      src='/zebraResource/zebraCourse_1.svg' 
                      alt='zebraCourse_1'
                      width={480} 
                      height={240}
                      priority
                  />
              </div>
                
          </div>
      </div>
     
    )
} 
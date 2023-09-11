/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-28 22:52:10
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 03:03:44
 * @FilePath: /gchct/pages/coverPage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { motion} from "framer-motion"
import Image from "next/image"

export default function CoverPage() {
   return(
       <div className="GCHcontainer relative pt-28 pb-44">
          <div className="w-full z-20 h-auto flex flex-col px-16">
              <motion.div
                className="w-full h-auto flex flex-row items-center"
                initial={{opacity:0, y: -40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeInOut"}}
              >
                <p className="GCHheading-xl">你好,</p>
                <p className="GCHheading-lg text-left">👋</p>
              </motion.div>

              <motion.div
                className="w-full h-auto flex flex-row gap-8 items-center"
                initial={{opacity:0, y: -60}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeInOut"}}
              >
                <p className="GCHheading-lg">欢迎来到我的个人空间。</p>
              </motion.div>

               <motion.p 
                className="GCHheading-md mt-3 text-[#4B4B4E]"
                initial={{opacity:0, y: -80}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeInOut"}}
                >东经116°20′ / 北纬39°56′</motion.p>
          </div>

          <Image
              className="w-[800px] h-auto absolute top-0 right-0 z-10"
              src="/bg_grid.svg"
              width={800}
              height={480}
          />
       </div>
   )
}


/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-14 16:43:01
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 18:16:15
 * @FilePath: /gchct/pages/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { HeadingLG } from './components/headingComponent'
import CoverPage from './coverPage'
import AboutMePage from './aboutMePage'
import BackCoverPage from './backCoverPage'
import ZebraCourse from './zebra/zebraCourse'
import ZebraPlugin from './zebra/zebraPlugin'
import ZebraColor from './zebra/zebraColor'
import DemoUIAll from './designCode/demoUIAll'
import { motion } from 'framer-motion'


const inter = Inter({ subsets: ['latin'] })

//定义动画变体
const variants = {
  hidden: { y: 60, opacity: 0, transition: { duration: 0.8, ease: "easeInOut"} },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut"} },
}

export default function Home() {
  return (
    <>
      <Head>
          <title>龚春辉GCH</title>
          <meta name="gongchunhui" content="2023.3.28" />
          <link rel="icon" href="/gch.ico" />
      </Head>

      <div className='w-full h-auto flex flex-col items-center'>
          <CoverPage/>
          
          <motion.div
              className='w-full flex flex-col items-center'
              initial='hidden'
              animate='visible'
              variants={variants}
          >
              <AboutMePage/>

              <div className="GCHcontainer flex flex-col items-center mt-44">
                  <HeadingLG heading = '日常工作'/>
                  <ZebraCourse/>
              </div>

              <div className="GCHcontainer flex flex-col items-center mt-36">
                  <HeadingLG heading = '设计提效'/>
                  <ZebraPlugin/>
                  <ZebraColor/>  
              </div>

              <div className="GCHcontainer flex flex-col items-center mt-36">
                  <HeadingLG heading = '设计探索'/>
                  <DemoUIAll />
              </div>

              <BackCoverPage/>

          </motion.div>
          
        
      </div> 
    </>
  )
}


//导航条


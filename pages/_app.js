/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-02-14 16:43:01
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-06-10 16:47:32
 * @FilePath: /gchct/pages/_app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  
  return(
    <>
      <Component {...pageProps} />
    </>
  )
}

/*
 * @Author: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @Date: 2023-05-15 02:13:23
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-11 18:03:48
 * @FilePath: /gchct/Components/headingComponent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Image from 'next/image'
import React from 'react'


//大标题
export const HeadingLG = (props) => {
    const { heading } = props; //heading: 标题

    if (!props.heading) {
        return null;
    } //如果没有传入heading, 则返回null
    
    return (
        <div className='w-full h-auto flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="100" viewBox="0 0 66 100">
                <path fill="#2E2E2E" d="M2,40 L18.5549767,0 L32.6753918,0 L23.9110123,40 L2,40 Z M33.3246082,40 L49.8797123,0 L64,0 L55.073274,40 L33.3246082,40 Z"/>
            </svg>
          
            <p className='GCHheading-lg w-auto'>{heading}</p>

            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="100" viewBox="0 0 66 100">
                <path fill="#2E2E2E" d="M64,60 L47.4450233,100 L33.3246082,100 L42.0889877,60 L64,60 Z M32.6753918,60 L16.1202877,100 L2,100 L10.926726,60 L32.6753918,60 Z"/>
            </svg>
    
        </div>
    )
}



//中标题
export const HeadingMD = (props) => {
    //numberFill: number的颜色, number: number的值, heading: 标题
    const {heading } = props; 
    
    //如果没有传入number, heading, numberFill, 则返回null
    if (!heading) {
        return null;
    }

    return(
        <p className="GCHheading-md w-full">{heading}</p>
    )
}



//小标题
export const HeadingSM = (props) => {
    //heading: 标题 detail: 详情
    const {heading, detail, title } = props; 

    if (!heading) {

        while(!title){
        return (
            <p className='GCHtext-base w-full'>
                {detail}
            </p>
        )}
        while(title){
            return (
                <p className='GCHtext-base w-full'>
                   <label className='GCHtitle-base'>{title}</label>{detail}
                </p>
            )}
    }else
    {
        while(!detail)
        {
            return(
                <p className='GCHheading-sm w-full'>
                   {heading}
                </p>
            )
        }

        while(detail)
        {
                return(
                   <div className='w-full h-auto flex flex-col'>
                       <p className='GCHheading-sm w-full'>{heading}</p>
                       <p className='GCHtext-base w-full mt-3'>{detail}</p>
                   </div>
            )
        }
    }
}



//迷你标题
export const HeadingXS = (props) => {
    //numberFill: number的颜色, number: number的值, heading: 标题
    const {heading, detail } = props; 

    if (!heading) {
        return (
           <p className='GCHtext-base w-full'>{detail}</p>
        )
    }else
    {
        while(!detail)
        {
            return(
                <p className='GCHheading-xs w-full'>{heading}</p>
            )
        }

        while(detail)
        {
            return(
              <div className='w-full h-auto flex flex-col'>
                 <p className='GCHheading-xs w-full'>{heading}</p>
                 <p className='GCHtext-base w-full mt-2'>{detail}</p>
              </div>
            )
        }
    }
}


/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-14 16:43:01
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-06-11 19:36:30
 * @FilePath: /gchct/next.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

//优化SVG
module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};



const webpack = require('webpack');

module.exports = {
  env: {
    AMAP_KEY: '60d0a86c7b77a9e0ab3ef88229b7510c'
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.AMAP_API_KEY': JSON.stringify(process.env.AMAP_KEY)
      })
    );
    return config;
  }
}


// const withTM = require('next-transpile-modules')(['three'])
// module.exports = withTM()
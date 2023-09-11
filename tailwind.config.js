/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-28 01:05:02
 * @LastEditors: gongchunhuiFJ 45855082+gongchunhui2018@users.noreply.github.com
 * @LastEditTime: 2023-09-06 17:28:20
 * @FilePath: /gchct/tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        DINAlternate_Bold: ['"DINAlternate-Bold"', 'sans-serif'],
        HM_Regular: ['"HarmonyOS_Sans_SC_Regular"', 'sans-serif'],
        HM_Medium: ['"HarmonyOS_Sans_SC_Medium"', 'sans-serif'],
        HM_Bold: ['"HarmonyOS_Sans_SC_Bold"', 'sans-serif'],
        HM_Black: ['"HarmonyOS_Sans_SC_Black"', 'sans-serif'],
      },
      colors: {
        lime: {
          dark: 'hsl(var(--lime-dark) / <alpha-value>)',
          light: 'hsl(var(--lime-light) / <alpha-value>)',
        },
        blue: {
          dark: 'hsl(var(--blue-dark) / <alpha-value>)',
          light: 'hsl(var(--blue-light) / <alpha-value>)',
        },
        orange: {
          dark: 'hsl(var(--orange-dark) / <alpha-value>)',
          light: 'hsl(var(--orange-light) / <alpha-value>)',
        },
        red: {
          dark: 'hsl(var(--red-dark) / <alpha-value>)',
          light: 'hsl(var(--red-light) / <alpha-value>)',
        },
        textPrimary: {
          dark: 'hsl(var(--text-primary-dark) / <alpha-value>)',
          light: 'hsl(var(--text-primary-light) / <alpha-value>)',
        },
        textSecondary: {
          dark: 'hsl(var(--text-secondary-dark) / <alpha-value>)',
          light: 'hsl(var(--text-secondary-light) / <alpha-value>)',
        },
        textDisabled: {
          dark: 'hsl(var(--text-disabled-dark) / <alpha-value>)',
          light: 'hsl(var(--text-disabled-light) / <alpha-value>)',
        },
        textHint: {
          dark: 'hsl(var(--text-hint-dark) / <alpha-value>)',
          light: 'hsl(var(--text-hint-light) / <alpha-value>)',
        },
        bgPrimary: {
          dark: 'hsl(var(--bg-primary-dark) / <alpha-value>)',
          light: 'hsl(var(--bg-primary-light) / <alpha-value>)',
        },
        bgSecondary: {
          dark: 'hsl(var(--bg-secondary-dark) / <alpha-value>)',
          light: 'hsl(var(--bg-secondary-light) / <alpha-value>)',
        },
        borderPrimary: {
          dark: 'hsl(var(--border-primary-dark) / <alpha-value>)',
          light: 'hsl(var(--border-primary-light) / <alpha-value>)',
        },
        carBg: 'hsl(var(--car-bg) / <alpha-value>)',
        carTextPrimary: 'hsl(var(--car-text-primary) / <alpha-value>)',
        carTextSecondary: 'hsl(var(--car-text-secondary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}

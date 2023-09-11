import Image from "next/image"
import { HeadingLG } from "@/pages/components/headingComponent"
import { 
    LogoFigma, 
    LogoFramerMotion,
    LogoSketch,
    LogoSpline,
    LogoNextjs,
    LogoUnity3D,
    LogoOrigami,
    LogoTailwind,
    LogoLVGL,
    IconEmail,
    IconPhone,
    IconWechat,
    IconDeviceScript, 
    LogoSwiftUI,
    LogoArkUI
} from "@/pages/components/icons"

//定义动画变体
const variants = {
  hidden: { y: 40, opacity: 0, transition: { duration: 0.6, ease: "easeInOut"} },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut"} },
}

//关于我汇总页
export default function AboutMePage() {
  return(
    <div className="GCHcontainer flex flex-col items-center gap-10">
      <HeadingLG heading = '关于我'/>
      <div className="w-[67.5rem] grid grid-cols-[208px_1fr_1.8fr] items-center gap-32 mt-12">
          <AboutMe/>
          <AboutMeInfo/>
          <WorkExperience/>
      </div>
    
      <Skill/>
      
    </div>
  )
}



//角色技能
export const Skill = () => {
    //作为设计师数据
    const asDesignerData = [
      {
        title: "作为设计师",
        detail: [
          {
            icon: <LogoSketch />,
            title: 'Sketch',
            detail:"设计软件"
          },
          {
            icon: <LogoFigma />,
            title: 'Figma',
            detail:"设计软件"
          },
          {
            icon: <LogoOrigami />,
            title: 'Origami Studio',
            detail:'高保真原型软件'
          },
          {
            icon: <LogoSpline />,
            title: 'Spline',
            detail:"web三维软件"
          },
          {
            icon: <LogoSwiftUI />,
            title: 'SwiftUI',
            detail:"苹果UI开发框架"
          },
          {
            icon: <LogoArkUI />,
            title: 'ArkUI',
            detail:"鸿蒙UI开发框架"
          },

        ]
      }
    ];
    //作为开发者数据
    const asDeveloperData = [
      {
        title: "作为编程爱好者",
        detail: [
          {
            icon: <LogoNextjs w = "34" h = "34"/>,
            title: 'Next.JS',
            detail:"前端框架"
          },
          {
            icon: <LogoFramerMotion w = "30" h = "30"/>,
            title: 'Framer Motion',
            detail: "动画库"
          },
          {
            icon: <LogoTailwind w = "30" h = "30"/>,
            title: 'Tailwind CSS',
            detail: "CSS框架"
          },
          {
            icon: <LogoUnity3D w = "30" h = "30"/>,
            title: 'Unity3D',
            detail: "游戏引擎"
          },
          {
            icon: <LogoLVGL w = "24" h = "24"/>,
            title: 'LVGL',
            detail: "IoT设备图形库"
          },
          {
            icon: <IconDeviceScript w = "24" h = "24"/>,
            title: 'DeviceScript',
            detail: "IoT设备开发框架"
          },
        ]
      }
    ];

    return(
        <div className="w-[67.5rem] h-auto flex flex-row gap-6"> 
            <CardA 
                title = {asDesignerData[0].title}
                detail = {asDesignerData[0].detail}
            />
            <CardB
                title = {asDeveloperData[0].title}
                detail = {asDeveloperData[0].detail}
            />
        </div>          
    )
}



//卡片
const CardA = (props) => {
  return(
    <div className="GCHcard flex flex-col gap-10 px-16 py-16 mt-10">
      <div className="w-full flex flex-col gap-4" >
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
              <g fill="none" fill-rule="evenodd"><rect width="61" height="57" x="1.5" y="3.5" fill="#EAB308" fill-opacity=".1" stroke="#EAB308" stroke-width="3" rx="8"/>
                 <path fill="#FFF" fill-rule="nonzero" d="M29.53125,26.75 C29.10625,31.5666667 26.3791667,34.1520833 21.35,34.50625 C16.1791667,34.2229167 13.4166667,31.6375 13.0625,26.75 L13.0625,16.975 C13.0625,15.6291667 13.7354167,14.9208333 15.08125,14.85 C16.35625,14.9208333 17.0291667,15.6291667 17.1,16.975 L17.1,26.5375 C17.2416667,29.3708333 18.6583333,30.8583333 21.35,31 C23.8291667,30.7875 25.2104167,29.3 25.49375,26.5375 L25.49375,16.975 C25.49375,15.6291667 26.1666667,14.9208333 27.5125,14.85 C28.7875,14.9208333 29.4604167,15.6291667 29.53125,16.975 L29.53125,26.75 Z M36.70625,32.4875 C36.6354167,33.7625 35.9625,34.4 34.6875,34.4 C33.3416667,34.4 32.66875,33.7625 32.66875,32.4875 L32.66875,16.975 C32.66875,15.6291667 33.3416667,14.9208333 34.6875,14.85 C35.9625,14.9208333 36.6354167,15.6291667 36.70625,16.975 L36.70625,32.4875 Z"/>
              </g>
          </svg>
          <p className="GCHheading-sm">{props.title}</p>
      </div>
      <CardDetail data={props.detail}/>
    </div>
  )
}
const CardB = (props) => {
  return(
    <div className="GCHcard flex flex-col gap-10 px-16 py-16 mt-10">
      <div className="w-full flex flex-col gap-4" >
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
              <g fill="none" fill-rule="evenodd"><rect width="61" height="57" x="1.5" y="3.5" fill="#3B82F6" fill-opacity=".1" stroke="#3B82F6" stroke-width="3" rx="8"/>
                 <path fill="#FFF" fill-rule="nonzero" d="M13.0297436,15.4568889 C13.9907858,14.4950422 15.5476757,14.4950422 16.5087179,15.4568889 L23.8933333,22.8568889 C24.8531803,23.8199333 24.8531803,25.3800667 23.8933333,26.3431111 L16.5087179,33.7431111 C15.5388398,34.6487358 14.0274553,34.6220136 13.0900618,33.6826672 C12.1526683,32.7433209 12.1260017,31.2287876 13.0297436,30.2568889 L18.6748718,24.6 L13.0297436,18.9431111 C12.1068138,18.0171069 12.0713165,16.5390603 12.9232517,15.5705913 L13.0297436,15.4568889 Z M27.0769231,29.5333333 C25.7174529,29.5333333 24.6153846,30.6376976 24.6153846,32 C24.6153846,33.3623024 25.7174529,34.4666667 27.0769231,34.4666667 L36.9230769,34.4666667 C38.2825471,34.4666667 39.3846154,33.3623024 39.3846154,32 C39.3846154,30.6376976 38.2825471,29.5333333 36.9230769,29.5333333 L27.0769231,29.5333333 Z"/>
              </g>
          </svg>
          <p className="GCHheading-sm">{props.title}</p>
      </div>
      <CardDetail data={props.detail}/>
    </div>
  )
}

//卡片详情
const CardDetail = ({data}) => {
  return(
    <div className="grid grid-cols-2 gap-8">
      {data.map((item, index) => (
        <div key={index} className=" grid grid-cols-[48px_auto] gap-4">
          <div className="GCHcard-black rounded-xl w-12 h-12 flex items-center justify-center">{item.icon}</div>
          <div className="flex flex-col justify-center">
            <p className="GCHtitle-sm">{item.title}</p>
            <p className="GCHtext-sm">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )   
}

//个人简介头像
const AboutMe = () => {
    return(
        <div className="w-52 h-52 relative flex items-center justify-center rounded-full  bg-gradient-to-br from-[#eab308] to-[#3b82f6]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black absolute top-0 right-0 "> 
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 16 12">
                   <path fill="#FFF" d="M14.0665845,12 L9.09494451,12 L9.09494451,7.78268251 L12.9617756,0 L16,0 L14.0665845,7.78268251 L14.0665845,12 Z M5.01109741,12 L-5.32907052e-15,12 L-5.32907052e-15,7.78268251 L3.92601726,0 L6.94451295,0 L5.01109741,7.78268251 L5.01109741,12 Z"/>
                </svg>             
            </div>
            <Image
                className=" w-36 h-auto"
                src="/zebraResource/avatar_1.svg"
                width={96}
                height={96}
            />
        </div>
    )
}

//个人信息
const AboutMeInfo = () => {
  return(
    <div className=" flex flex-col gap-8">
      {/* 姓名 */}
      <div className="flex flex-col gap-2">
          <p className="GCHheading-md">龚春辉</p>
          <p className="GCHtext-base">UI/UX 设计师</p>
      </div>
      {/* 联系方式 */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-3">
           <div className="w-8 h-8 flex justify-center items-center"><IconPhone fill = 'hsl(var(--lime-dark))' w = '20px' h = '20px'/></div>
           <div className="flex flex-col">
              <p className="GCHheading-xs">15242575583</p>
              <p className="GCHtext-base">联系电话</p>
            </div>
        </div>

        <div className="flex flex-row gap-3">
           <div className="w-8 h-8 flex justify-center items-center"><IconEmail fill = 'hsl(var(--lime-dark))' w = '20px' h = '20px'/></div>
           <div className="flex flex-col">
               <p className="GCHheading-xs">15242575583@163.com</p>
               <p className="GCHtext-base">邮箱</p>
           </div>
        </div>

        <div className="flex flex-row gap-3">
           <div className="w-8 h-8 flex justify-center items-center"><IconWechat fill = 'hsl(var(--lime-dark))' w = '21px' h = '21px'/></div>
           <div className="flex flex-col">
               <p className="GCHheading-xs">15242575583</p>
               <p className="GCHtext-base">微信号</p>
           </div>
        </div>
      </div>
    </div>
  )
}

//工作经历
export const WorkExperience = () => {
  return(
    <div className="flex flex-col gap-8">
      {/* 姓名 */}
      <div className="flex flex-col gap-2">
          <p className="GCHheading-md">工作经历</p>
          <p className="GCHtext-base">6年工作经验</p>
      </div>
      {/* 联系方式 */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-3">
           <p className="GCHheading-xs text-lime-dark">01.</p>
           <div className="flex flex-col">
              <p className="GCHheading-xs">猿辅导.斑马</p>
              <p className="GCHtext-base">2019.6 - 2023.1：UI设计师</p>
            </div>
        </div>

        <div className="flex flex-row gap-3">
           <p className="GCHheading-xs text-lime-dark">02.</p>
           <div className="flex flex-col">
              <p className="GCHheading-xs">北京车未科技</p>
              <p className="GCHtext-base">2018.11 - 2019.5：UI+视觉设计师</p>
            </div>
        </div>

        <div className="flex flex-row gap-3">
           <p className="GCHheading-xs text-lime-dark">03.</p>
           <div className="flex flex-col">
              <p className="GCHheading-xs">上海剧星传媒有限公司</p>
              <p className="GCHtext-base">2016.11 - 2018.10：广告设计师</p>
            </div>
        </div>
      </div>
    </div>
  )
}
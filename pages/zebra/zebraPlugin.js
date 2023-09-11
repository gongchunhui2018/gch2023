import { HeadingMD, HeadingSM,HeadingXS } from "../components/headingComponent";
import Image from "next/image";
import { IconJavascript, IconWarning } from "../components/icons";



//斑马思维插件
export default function ZebraPlugin() {
   return (
      <div className='w-[67.5rem] h-auto flex flex-col items-center py-20'>
          <div className="w-full flex flex-col gap-20">
              <HeadingMD
                  heading = '斑马思维资源产出辅助插件（2020.6）'
              />
             
              <div className="w-full flex flex-col gap-8">
                  <HeadingSM
                      heading = '背景'
                      detail = '受制于开发的开发方式，思维课程需要设计师提供大量的切图，交付给开发之后，开发还要手动将一张张切图上传，对于设计师和开发来说都是一项耗时且低效的工作方式。'
                  />
                  <HeadingSM
                      detail = '开发人员为了提高自己的配置效率，提出了自动化配置的解决方案，但这种方案需要设计师出布局图，不仅导致了设计师的工作量翻倍，还进一步压缩了设计师花在设计上的时间，使得总体产出质量不高。'
                  />
                  <HeadingSM
                      detail = '为了解决以上问题，我和另外一名设计师一起，提出了一种新的解决方案，即通过制作插件来辅助设计师工作，将设计师的工作量降到最低，同时保证产出的质量。'
                  />
              </div>

              <div className="w-full flex flex-col gap-16">
                  <HeadingSM
                      heading = '合作'
                      detail = '从 规划 到 立项 再到 实现 最后是 内部推广，都由我和另外一名设计师共同完成。'
                  />
                  <div className="w-full grid grid-cols-2">
                      <Avatar avatar="/zebraResource/avatar_GCH.svg" title = '设计师：龚春辉' detail = '主要负责插件的规划和技术实现'/>
                      <Avatar avatar="/zebraResource/avatar_LSQ.svg" title = '设计师：梁松泉' detail = '主要负责插件的规划、内部推广和资源争取'/>
                  </div>
              </div>
             
              <div className="w-full flex flex-col gap-16">
                  <HeadingSM
                      heading = '1. 斑马思维课程产出工作流程（优化前）'
                  />
                  <MathWorkflow/>
              </div>

              <div className="w-full flex flex-col gap-8">
                  <HeadingSM
                      heading = '2. 总结问题并提出解决思路'
                      detail = '命名规范多，且需要人为去记忆和操作，连续命名的情况下设计师很容易疲劳，从而诱发失误。要避免这样的情况发生就必须解决命名规范多，难以记忆的问题。减少命名规范显然不现实，所以我们想到了让机器代替人去记忆规范和执行命名任务。'
                  />
                  <HeadingSM
                      detail = '开发人员提出的自动化配置方案给设计师带来了翻倍的工作量，现实条件又让我们无法反对开发人员这种没有经过充分思考的行为。自动化配置依赖高精度的布局图，耗费了设计师的大量精力，连带出错率也增加。经过与开发友好的沟通后，我们发现他们需要布局图的目的是为了获取元素的尺寸和位置信息，这种机器擅长做的事情让我们第一时间想到可以通过设计软件提供的API自动获取数据并导出。'
                  />
              </div>

              <div className="w-full flex flex-col items-center gap-16">
                  <HeadingSM
                      heading = '3. 我们做了一个Sketch插件'
                      detail = 'conan-zebra-design-plugin 是一个sketch插件。下面展示了插件的基本结构以及实现的功能。'
                  />
                      
                  <Image className="w-full h-auto" src="/zebraResource/zebraSketchPlugin.svg" alt="zebraSketchPlugin" width={800} height={200} priority/>

                  <PluginIntro/>
                   
              </div>

            
              <div className="w-full flex flex-col gap-16">
                  <HeadingSM
                      heading = '4. 插件操作演示及输出的资源。'
                      detail = '依次是：插件操作展示，导出的资源包，导出的预览文件，导出的布局数据。'
                  />
                  <PluginExhibit/>
              </div>
              
          </div>
      </div>
    )
}



//02.斑马思维课程产出工作流程 -- 优化前
const MathWorkflow = () => {
  //数据
  const initialDetails = [
    {
      title: '01. 设计师出图',
      detail: '教研提供课程的prd，设计师按要求完成设计。',
      img: <Image className="w-full h-auto" src = '/zebraResource/zebraCourse_3.svg' width={362} height={100} priority/>,
      question: '暂时没有问题',
    },
    {
      title: '02. 设计师按照命名规范给各类元素命名',
      detail: '每个元素至少包含三种状态：常态、选中态、正确态。',
      img: <Image className="w-full h-auto" src = '/zebraResource/zebraCourse_4.svg' width={362} height={100} priority/>,
      question: '题目逻辑的实现完全靠换图，逻辑越复杂，元素的状态就越多，命名规范也随之增加，出错率也随之上升。',
    },
    {
      title: '03. 设计师提供布局图',
      detail: '将每道题的元素进行标注，并单独输出一张标记有元素位置和尺寸的布局图。',
      img: <Image className="w-full h-auto" src = '/zebraResource/zebraCourse_5.svg' width={362} height={100} priority/>,
      question: '开发实现自动化布局需要依赖布局图，布局图稍有差错，题目将无法配置。',
    },
    {
      title: '04. 设计师导出资源包交付给开发人员',
      detail: '每周课程导出的资源大于400个，需要提供的布局图不少于50张。',
      img: <Image className="w-full h-auto" src = '/zebraResource/zebraCourse_6.svg' width={362} height={100} priority/>,
      question: '在切图阶段，每个设计师的切图习惯不一样，导出的资源包会存在差异，需要挨个核对，稍有差错，配置将无法继续。',
    },

  ]
  return(
      <WorkflowStep data={initialDetails}/>
  )

}
//工作流步骤
const WorkflowStep = ({data}) => {
    return(
       <div className='w-full grid grid-cols-2 gap-6'>
         {data.map((item,index) => {
             return(
                <div
                     key={index} 
                     className="GCHcard w-full px-10 py-10"
                >
                  <div className="w-full flex flex-col">
                    <HeadingXS
                        heading = {item.title}
                        detail = {item.detail}
                    />
                    <div className="mt-10">{item.img}</div>
                    <div className="grid grid-cols-[18px_1fr] gap-2 mt-10 px-4 py-4 rounded-lg bg-bgSecondary-dark/60">
                       <div className="mt-[2px]"><IconWarning w = '16' h = '16' fill = 'hsl(var(--lime-dark))'/></div>
                       <p className="GCHtext-sm"><label className="GCHtitle-sm">存在的问题：</label>{item.question}</p>
                    </div>
                  </div>   
                </div>
            )
          })}
       </div>
    )
}


//04.斑马思维插件原理及功能介绍
const PluginIntro = () => {
  //数据
  const initialDetails = [
    {
      img:'/zebraResource/zebraPlugin_2.svg',
      functionName:'*选项命名',
      functionDetail:'对画板内的元素进行命名，画板内的元素包含：选项（option），背景（bg)。此功能主要针对选项，选项又分为：位置不移动选项（常规题）、移动选项（填空题，需配合collide，final）。collide&final（此规范已废弃）。',
      effect:'设计师不需要再记忆复杂的命名规范了，也不需要亲自动手命名，只需框选需要命名的元素，启动对应的程序，剩下的命名工作将由程序接管完成，速度快，设计师省心，出错率接近零。',
      script: '__renameLayer_renameBtn.js  __renameLayer_renameColl.js  __renameLayer_renameFinal.js',
    },
    {
      img:'/zebraResource/zebraPlugin_3.svg',
      functionName:'*画板命名',
      functionDetail:'对画板进行命名，每个画板代表一道题，题型包含：互动课、随堂测和生活中。“画板命名”结合“添加后缀”功能，实现了题目状态的变化，从而实现交互逻辑。',
      effect:'与“选项命名”原理一样，解决的问题也一样。',
      script: '__renameArtboadr_HD.js __renameArtboadr_ST.js __renameArtboadr_SH.js'
    },
    {
      img:'/zebraResource/zebraPlugin_4.svg',
      functionName:'*添加后缀',
      functionDetail:'此功能是在用“选项命名”和“画板命名”命名完之后为其添加状态。用于实现课程的交互逻辑，与“选项命名”功能配合使用后的效果：option1_select（表示该题目的第一个选项的“选中”状态）；与“画板命名”功能配合使用后的效果：d4st1_right（表示d4st1的“正确”状态）。',
      effect:'配合“选项命名”和“画板命名”实现了题目状态的变化，从而实现交互逻辑。',
      script: '__renameCustomize_renameUSR.js __renameCustomize_renameSR.js __renameCustomize_renameSelect.js __renameCustomize_renameRight.js'
    },
    {
      img:'/zebraResource/zebraPlugin_5.svg',
      functionName:'*自定义命名',
      functionDetail:'区别于“选项命名”和“画板命名”，可自定义命名规范，拓展插件的命名功能。',
      effect:'解决了固定格式命名带来的局限性，可以随时增加新的命名规范，应对一些特殊需求。此功能有点类似于renameIt插件。有别于renameIt的地方：命名顺序完全是按照视觉上从左到右从上到下的顺序进行的（“选项命名”和“画板命名”也具有这个特点），并非依靠文件树的顺序来，文件树顺序命名有一个很大的缺点（文件层级混乱时，命名顺序也跟着乱），批量命名前需要整理好文件树的层级顺序，此操作称不上提效，反而增加了工作量。',
      script: '__renameCustomize_renameIt.js'
    },
    {
      img:'/zebraResource/zebraPlugin_6.svg',
      functionName:'*导出全部',
      functionDetail:'程序会遍历所有题目，并导出切图资源，以及对应的布局数据（json)。',
      effect:'设计师不需再制作布局图，也不需要标注和切图，减轻了工作量，同时也解决了输出资源不统一的问题。',
      script: '__resourcesExport_getAllResource.js'
    },
    {
      img:'/zebraResource/zebraPlugin_7.svg',
      functionName:'*导出选中',
      functionDetail:'与“导出全部”功能类似，仅会导出选中的题目。',
      effect:'设计师不需再制作布局图，也不需要标注和切图，减轻了工作量，同时也解决了输出资源不统一的问题。',
      script: '__resourcesExport_getChooseResource.js'
    },
    {
      img:'/zebraResource/zebraPlugin_8.svg',
      functionName:'*导出预览图',
      functionDetail:'程序将导出一个html文件，方便产品点击查看、审核（这是插件制作过程额外想到的一个功能）。',
      effect:'审核方便，且易于各部门查看。',
      script: '__previewExport_getPreview.js'
    },
  ]
  return(
    <FunctionDetail data = {initialDetails}/>
  )
}
//功能详情
const FunctionDetail = ({data}) => {
    return(
      <div className='w-full grid grid-cols-2 gap-6'>
        {data.map((item,index) => {
            return(
                <div 
                  key={index}
                  className="GCHcard w-full flex flex-col gap-6"
                >
                  <Image className="w-full h-auto pt-6" src = {item.img} width={300} height={100} priority/>
                  <div className="w-full flex flex-col gap-6 px-10 pb-10">
                    <div className="GCHcard-black rounded-lg flex flex-col gap-2 px-4 py-4">
                      <IconJavascript w = '18' h = '18' fill = 'hsl(var(--text-secondary-dark))'/>
                      <p className='GCHtext-xs'>{item.script}</p>
                    </div>
                    <p className="GCHtext-sm"><label className="GCHtitle-sm">{item.functionName}：</label>{item.functionDetail}</p>
                    <p className="GCHtext-sm"><label className="GCHtitle-sm">解决的问题：</label>{item.effect}</p>
                  </div>
                </div>
            )
        })}
      </div>
    )
}


//头像
const Avatar = (props) => {
  const {avatar, title, detail } = props; //解构props，获取icon，title，detail

    if (!avatar || !title || !detail) {
        return null;
    } //如果props为空，返回null

    return(
        <div className="w-full flex flex-col items-center gap-5"> 
            <Image className="relative w-16 h-16 rounded-full outline outline-4 outline-offset-4 outline-yellow-500" src={avatar} width={56} height={56} priority/>
            <div className="flex flex-col items-center gap-2">
               <p className="GCHtitle-base">
                  {title}
               </p>
               <p className="GCHtext-base">
                  {detail}
               </p>
            </div>
        </div>
    )

}
//05.插件功能展示
const PluginExhibit = () => {
  return(
    <div className="w-full h-auto grid grid-cols-2 gap-6">
        <Image className="w-full h-auto rounded-xl" src="/zebraResource/zebraPlugin_demo.png" width={1380} height={720}/>
        <Image className="w-full h-auto rounded-xl" src="/zebraResource/zebraPlugin_10.svg" width={300} height={157}/>
        <Image className="w-full h-auto rounded-xl" src="/zebraResource/zebraPlugin_9.svg" width={300} height={190}/>
        <Image className="w-full h-auto rounded-xl" src="/zebraResource/zebraPlugin_11.svg" width={300} height={190}/>
    </div>
  )

}
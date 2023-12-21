"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5612],{6077:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var o=t(5893),i=t(1151),s=t(5305),n=t(1992),a=t(5888),l=t(5871);const p={},c="Color Ring",d={id:"components/color-ring",title:"Color Ring",description:"<LiveProvider",source:"@site/docs/components/color-ring.mdx",sourceDirName:"components",slug:"/components/color-ring",permalink:"/react-loader-spinner/docs/components/color-ring",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/color-ring.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Circles",permalink:"/react-loader-spinner/docs/components/circles"},next:{title:"Comment",permalink:"/react-loader-spinner/docs/components/comment"}},h={},u=[{value:"Props",id:"props",level:2},{value:"More example:",id:"more-example",level:2}];function m(e){const r={code:"code",h1:"h1",h2:"h2",hr:"hr",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"color-ring",children:"Color Ring"}),"\n",(0,o.jsxs)(n.nu,{code:"\n  render(<ColorRing\n  visible={true}\n  height=\"80\"\n  width=\"80\"\n  ariaLabel=\"color-ring-loading\"\n  wrapperStyle={{}}\n  wrapperClass=\"color-ring-wrapper\"\n  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}\n  />)\n",scope:{ColorRing:l.ColorRing},noInline:!0,children:[(0,o.jsx)(n.i5,{}),(0,o.jsx)("br",{}),(0,o.jsx)(n.uz,{}),(0,o.jsx)(n.IF,{})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,o.jsx)(s.Z,{properties:[...(0,a.oD)("color-ring",["colors"]),{name:"colors",type:"array",default:'[\n      "#e15b64",\n      "#f47e60",\n      "#f8b26a",\n      "#abbd81",\n      "#849b87"\n      ]',description:"Array of colors to be used in the ring"}]}),"\n",(0,o.jsx)(r.h2,{id:"more-example",children:"More example:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:"<ColorRing\n  visible={true}\n  height=\"80\"\n  width=\"80\"\n  ariaLabel=\"blocks-loading\"\n  wrapperStyle={{}}\n  wrapperClass=\"blocks-wrapper\"\n  colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}\n/>\n"})})]})}function b(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},5888:(e,r,t)=>{t.d(r,{oD:()=>n});const o=e=>({height:`Specifies the height of the ${e} SVG. For additional customization, employ the wrapper className.`,width:`Specifies the width of the ${e} SVG. For further customization, utilize the wrapper className.`,colors:`Defines the colors of the ${e} SVG. Accepts multiple color objects. If a comprehensive list of colors is not provided, defaults will be applied. Refer to the example.`,color:`Sets the color of the ${e} SVG.`,ariaLabel:`Specifies the Aria label of the ${e}. This label will be applied to the aria-label attribute in the wrapper element.`,wrapperStyle:"Applies styles to the wrapper. It should be a valid CSS object and can be used for custom styling, overriding the default style.",wrapperClass:"Assigns a className to the wrapper for custom styling, overriding the default style.",visible:`Controls the visibility of the ${e}. If set to false, the ${e} will not be rendered.`,radius:`Determines the radius of the circle(s) in the ${e} component. For further customization, use the wrapper className.`}),i={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClass:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},s=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:`${e}-loading`,wrapperStyle:JSON.stringify({},null,2),wrapperClass:"undefined",visible:"true"}),n=function(e,r){return void 0===r&&(r=[]),[{name:"height",type:i.height,default:s(e).height,description:o(e).height},{name:"width",type:i.width,default:s(e).width,description:o(e).width},{name:"colors",type:i.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:o(e).colors},{name:"ariaLabel",type:i.ariaLabel,default:s(e).ariaLabel,description:o(e).ariaLabel},{name:"wrapperStyle",type:i.wrapperStyle,default:s(e).wrapperStyle,description:o(e).wrapperStyle},{name:"wrapperClass",type:i.wrapperClass,default:s(e).wrapperClass,description:o(e).wrapperClass},{name:"visible",type:i.visible,default:s(e).visible,description:o(e).visible}].filter((e=>!r.includes(e.name)))}}}]);
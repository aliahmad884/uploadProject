(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{8478:function(e){function n(e){return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}n.keys=function(){return[]},n.resolve=n,n.id=8478,e.exports=n},5693:function(e,n,t){Promise.resolve().then(t.bind(t,4761))},4761:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t(7437);t(6857),t(3803);var r=t(7109),i=t(8793),o=t(2265),l=t(8142),c=t(526),a=t(6300);function d(){let[e,n]=(0,o.useState)(!0),{position:t,setPosition:d}=(0,l.f)(),[u,h]=(0,o.useState)([]);return((0,o.useEffect)(()=>{fetch("/api/blog").then(e=>e.json()).then(e=>{h(e.data),n(!1),document.querySelector("main").scrollTo({top:t,behavior:"smooth"})}).catch(e=>console.log(e))},[]),(0,o.useEffect)(()=>{let e=document.querySelector("main"),n=()=>{d(document.querySelector("main").scrollTop)};return e&&e.addEventListener("scroll",n),()=>{e&&e.removeEventListener("scroll",n)}},[]),e)?(0,s.jsx)(a.default,{}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("main",{children:[(0,s.jsxs)("div",{className:"blogPage",children:[(0,s.jsx)(c.default,{}),(0,s.jsxs)("div",{className:"headingCont",children:[(0,s.jsx)("h1",{children:"Our New Blogs"}),(0,s.jsx)("h2",{children:"Latest New Blogs"})]}),(0,s.jsx)("div",{className:"globalBG blogsContainer",children:u.map(e=>(0,s.jsx)(i.$,{imgPath:e.path,id:e.id,title:e.title},e.id))})]}),(0,s.jsx)(r.default,{})]})})}},8142:function(e,n,t){"use strict";t.d(n,{f:function(){return a},z:function(){return c}});var s=t(7437);let{createContext:r,useState:i,useContext:o}=t(2265),l=r();function c(e){let{children:n}=e,[t,r]=i("Inital Data"),[o,c]=i(0),[a,d]=i("light");return(0,s.jsx)(l.Provider,{value:{data:t,setData:r,position:o,setPosition:c,theme:a,setTheme:d},children:n})}let a=()=>o(l)},6300:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var s=t(7437),r=t(7485);function i(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"loaderContainer",children:(0,s.jsx)("div",{className:"temp",children:(0,s.jsx)(r.Z1,{visible:!0,height:"100",width:"100",color:"#1679AB",ariaLabel:"three-circles-loading",wrapperStyle:{},wrapperClass:""})})})})}t(5977)},8793:function(e,n,t){"use strict";t.d(n,{$:function(){return l},IndCard:function(){return c},E:function(){return a},ServiceCard:function(){return d}});var s=t(7437),r=t(8142),i=t(6463);function o(e){let{Id:n}=e,t=(0,i.useRouter)(),{setData:o}=(0,r.f)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{onClick:()=>{o(n),fetch("/api/clipBoard",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:"66b89aac7b1ffd2e989657ad",blogId:n})}).then(e=>e.json()).then(e=>{e?(console.log("OK"),t.push("/blogs/blogReader")):console.log("Not Ok")}).catch(e=>console.log(e))},type:"button",children:"Read More"})})}function l(e){let{title:n,id:t,imgPath:r}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"blogCard",children:[(0,s.jsx)("div",{className:"imgContainer",children:(0,s.jsx)("div",{className:"img",style:{backgroundImage:"url('/".concat(r,"')")}})}),(0,s.jsx)("h3",{children:n}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi dolores nobis explicabo tenetur sint tempora in"}),(0,s.jsx)(o,{Id:t})]})})}function c(e){let{imgPath:n,text:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"indCard",children:[(0,s.jsx)("img",{src:"/".concat(n,".png"),alt:"Industry-Img"}),(0,s.jsx)("p",{children:t})]})})}function a(e){let{imgPath:n,dataValue:t,slector:r,title:i}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{"data-value":t,className:"portCard ".concat(r),style:{backgroundImage:"url(/".concat(n,")")},children:[(0,s.jsx)("p",{className:"title",children:i||"Portfolio"}),(0,s.jsx)("button",{title:"Live Demo",className:"readmore",children:"Live Demo"})]})})}function d(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"serviceCard",children:[(0,s.jsx)("img",{src:"/poster3.webp",alt:"Poster"}),(0,s.jsx)("h2",{children:"heading text"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestiae optio fugit voluptates doloribus quaerat veritatis perferendis quos excepturi voluptatum magni, quibusdam, numquam unde enim quisquam quia vero eius omnis!"})]})})}},7109:function(e,n,t){"use strict";t.d(n,{default:function(){return u}});var s=t(7437),r=t(5079),i=t(3896),o=t(7138),l=t(6463),c=t(2265),a=t(6916),d=t(5861);function u(){let e=["Home","Services","Portfolio","Blogs","About Us","Contact"],n=["/","/services","/portfolio","/blogs","/about","/contact"],t=(0,l.usePathname)(),u=()=>{window.open("mailto:info@aldortech.com")};return(0,c.useEffect)(()=>{let e=document.querySelectorAll(".navLink"),n=document.documentElement.classList.contains("dark-theme");e.forEach(e=>{e.style.color=n?"white":"black",e.style.fontWeight="normal",e.dataset.value===t&&(e.style.color="#1679AB",e.style.fontWeight="bold")})},[t]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"footerCont",children:[(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"brandLogo",children:[(0,s.jsx)("h2",{children:"Aldor Technologies"}),(0,s.jsxs)("div",{className:"email",children:[(0,s.jsxs)("h1",{onClick:()=>u(),children:[(0,s.jsx)(i.G,{icon:r.FU$})," info@aldortech.com"]}),(0,s.jsxs)("a",{href:"tel:+923228090884",children:[(0,s.jsx)(a.gu,{icon:d.REe}),"+1(12)34567890"]})]})]}),(0,s.jsxs)("div",{className:"navigation",children:[(0,s.jsx)("h2",{children:"Navigation"}),(0,s.jsx)("ul",{children:[0,1,2,3,4,5].map(t=>(0,s.jsx)(o.default,{href:n[t],className:"navLink","data-value":n[t],children:(0,s.jsxs)("li",{children:[(0,s.jsx)(a.gu,{icon:d.XXs}),e[t]]})},t))})]}),(0,s.jsxs)("div",{className:"quiklinks",children:[(0,s.jsx)("h2",{children:"Quik Links"}),(0,s.jsx)("ul",{children:["Lorem1","Lorem2","Lorem3","Lorem4","Lorem5"].map(e=>(0,s.jsx)("li",{children:e},e))})]}),(0,s.jsxs)("div",{className:"address",children:[(0,s.jsx)("h2",{children:"Address"}),(0,s.jsxs)("address",{children:[(0,s.jsx)(a.gu,{icon:d.xhW}),"USA: Country Office: 220 orient ave, Boston MA 02128"]}),(0,s.jsxs)("address",{children:[(0,s.jsx)(a.gu,{icon:d.xhW}),"USA: Country Office: 220 orient ave, Boston MA 02128"]})]})]}),(0,s.jsxs)("div",{className:"copyright",children:["Copyright ",(0,s.jsx)("strong",{children:"\xa9"})," 2024 Aldor Technologies Ltd. All Rights Reserved."]})]})})}},526:function(e,n,t){"use strict";t.d(n,{default:function(){return c}});var s=t(7437),r=t(6916),i=t(5861),o=t(6463),l=t(2265);function c(){let e=(0,o.usePathname)(),n=()=>{window.open("https://wa.me/+921234567899")},t=()=>{let e=document.querySelector("main");e&&e.scrollTo({top:0,behavior:"smooth"})};return(0,l.useLayoutEffect)(()=>{let e=()=>{let e=document.getElementById("arrowBtn"),n=document.querySelector("main");n&&e&&(n.scrollTop>350?e.style.display="block":n.scrollTop<300&&e.removeAttribute("style"))},n=document.querySelector("main");return n&&n.addEventListener("scroll",e),()=>{n&&n.removeEventListener("scroll",e)}},[e]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"quikIconCont",children:[(0,s.jsx)("div",{onClick:()=>n(),className:"whatsCont",children:(0,s.jsx)(r.gu,{className:"whatsapp",icon:i.tl2})}),(0,s.jsx)("div",{id:"arrowBtn",onClick:()=>t(),className:"upCont",children:(0,s.jsx)(r.gu,{className:"arrowUp",icon:i.Q8m})})]})})}},3803:function(){},6857:function(){},5977:function(){}},function(e){e.O(0,[822,380,676,568,571,949,916,183,971,23,744],function(){return e(e.s=5693)}),_N_E=e.O()}]);
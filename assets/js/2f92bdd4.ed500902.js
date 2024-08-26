"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47632],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=i,u=d["".concat(l,".").concat(y)]||d[y]||g[y]||a;return n?o.createElement(u,r(r({ref:t},p),{},{components:n})):o.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},44600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(58168),i=(n(96540),n(15680));const a={description:"This is an open-source project / platform focused on embedded AI.",title:"SenseCraft AI Platform",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/sscma",last_update:{date:"08/25/2024",author:"Salman"}},r=void 0,s={unversionedId:"Topics/TinyML/TinyML_Workshop/sscma",id:"Topics/TinyML/TinyML_Workshop/sscma",title:"SenseCraft AI Platform",description:"This is an open-source project / platform focused on embedded AI.",source:"@site/docs/Topics/TinyML/TinyML_Workshop/sscma.md",sourceDirName:"Topics/TinyML/TinyML_Workshop",slug:"/sscma",permalink:"/sscma",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/TinyML_Workshop/sscma.md",tags:[],version:"current",lastUpdatedBy:"Salman",lastUpdatedAt:1724544e3,formattedLastUpdatedAt:"Aug 25, 2024",frontMatter:{description:"This is an open-source project / platform focused on embedded AI.",title:"SenseCraft AI Platform",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/sscma",last_update:{date:"08/25/2024",author:"Salman"}},sidebar:"ProductSidebar",previous:{title:"AI Workshop - How to Add AI to Almost Everything",permalink:"/tinyml_workshop_course_new"},next:{title:"Edgeimpulse",permalink:"/edgeimpulse"}},l={},c=[{value:"SenseCraft AI Platform",id:"sensecraft-ai-platform",level:2},{value:"1. Get started with Face Recognition",id:"1-get-started-with-face-recognition",level:3},{value:"Step 1. Install XIAO ESP32S3 Sense expansion board",id:"step-1-install-xiao-esp32s3-sense-expansion-board",level:4},{value:"Step 2. Connecting the XIAO to your PC",id:"step-2-connecting-the-xiao-to-your-pc",level:4},{value:"Step 3. Go to the SenseCraft AI Platform page and connect the XIAO",id:"step-3-go-to-the-sensecraft-ai-platform-page-and-connect-the-xiao",level:4},{value:"2. SenseCraft Triggers - Do a simple feedback action",id:"2-sensecraft-triggers---do-a-simple-feedback-action",level:3}],p={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,o.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"sensecraft-ai-platform"},"SenseCraft AI Platform"),(0,i.yg)("p",null,"Seeed Studio ",(0,i.yg)("a",{parentName:"p",href:"https://sensecraft.seeed.cc/ai/#/model"},"SenseCraft AI Platform")," is a browser-based AI Solution. "),(0,i.yg)("p",null,"It empowers users to effortlessly deploy a vast library of publicly available AI models onto their edge devices provides a seamless and user-friendly experience, allowing you to deploy public AI models directly onto your edge devices with ",(0,i.yg)("strong",{parentName:"p"},"just a few clicks"),"."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"The core of it is an open source project and we have share it on the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"GitHub")," and offer the ",(0,i.yg)("a",{parentName:"p",href:"/ModelAssistant_Introduce_Overview"},"development method")," as well.")),(0,i.yg)("h3",{id:"1-get-started-with-face-recognition"},"1. Get started with Face Recognition"),(0,i.yg)("p",null,"We first go to the ",(0,i.yg)("a",{parentName:"p",href:"https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974"},"SenseCraft AI Deployment Website")," then simply connect the XIAO ESP32S3 Sense to your PC via a data cable to instantly display face recognition."),(0,i.yg)("h4",{id:"step-1-install-xiao-esp32s3-sense-expansion-board"},"Step 1. Install XIAO ESP32S3 Sense expansion board"),(0,i.yg)("p",null,'First, we need to properly connect the XIAO ESP32S3 Sense expansion board to the XIAO. Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.'),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif",style:{width:500,height:"auto"}})),(0,i.yg)("h4",{id:"step-2-connecting-the-xiao-to-your-pc"},"Step 2. Connecting the XIAO to your PC"),(0,i.yg)("p",null,"Connect the XIAO to your PC using a data cable with data transfer function."),(0,i.yg)("h4",{id:"step-3-go-to-the-sensecraft-ai-platform-page-and-connect-the-xiao"},"Step 3. Go to the SenseCraft AI Platform page and connect the XIAO"),(0,i.yg)("p",null,"Click the button below to go to the SenseCraft AI Platform homepage."),(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"2"},"SenseCraft AI Platform"))))),(0,i.yg)("br",null),(0,i.yg)("p",null,"Once we are on the homepage of SenseCraft AI Platform, we need to first need to connect the XIAO ESPS3 for that, click ",(0,i.yg)("strong",{parentName:"p"},"Connect")," button."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai3.png",style:{width:800,height:"auto"}})),(0,i.yg)("p",null,"The browser will then pop up a window. We need to select the correct port for XIAO here. For ",(0,i.yg)("strong",{parentName:"p"},"Windows"),", this port usually starts with ",(0,i.yg)("strong",{parentName:"p"},"COM"),", and in case of ",(0,i.yg)("strong",{parentName:"p"},"MacOS"),", this port usually starts with ",(0,i.yg)("strong",{parentName:"p"},"/dev/tty"),". And it will have the words ",(0,i.yg)("strong",{parentName:"p"},"USB JTAG"),"."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai4.png",style:{width:800,height:"auto"}})),(0,i.yg)("p",null,"Clicking the ",(0,i.yg)("strong",{parentName:"p"},"Connect")," button will only result in an automatically identify the board and configuration information is being read."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai5.png",style:{width:800,height:"auto"}})),(0,i.yg)("p",null,"Then we can move to ",(0,i.yg)("strong",{parentName:"p"},"Select Model")," button and click it to find another pop up window. Here I selected the face recognition for demo. After selecting it, click the ",(0,i.yg)("strong",{parentName:"p"},"Send")," button and wait few second. You will see directly the results:"),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai6.gif",style:{width:500,height:"auto"}})),(0,i.yg)("p",null,"You are getting it! You have successfully deployed your first ML model!"),(0,i.yg)("h3",{id:"2-sensecraft-triggers---do-a-simple-feedback-action"},"2. SenseCraft Triggers - Do a simple feedback action"),(0,i.yg)("p",null,"That is, when we recognize our face, we let XIAO's LED light up. For that, go to ",(0,i.yg)("strong",{parentName:"p"},"Output"),' section and Select the "Trigger action" to setup a trigger. . '),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai7.png",style:{width:800,height:"auto"}})),(0,i.yg)("p",null,"Here, When the face detection have confidencet above 50% and enable a trigger.  "),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai8.png",style:{width:800,height:"auto"}})),(0,i.yg)("p",null,"And here the ",(0,i.yg)("strong",{parentName:"p"},"Trigger Action"),' is "Light up the LED".  Ater that, click "Send" and you can see, whenver the face detected, you can see the onboard LED is turned on. '),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai9.png",style:{width:800,height:"auto"}})),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Congratulations!")," You have successfully deployed the AI automated System!"),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/fab24/sensecraftai10.png",style:{width:800,height:"auto"}}))),(0,i.yg)("h1",{id:"todo"},"ToDo"),(0,i.yg)("ul",{className:"contains-task-list"},(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Load and Run ",(0,i.yg)("strong",{parentName:"li"},"Face Recognition Model")," with SenseCraft AI Platform. "),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup a Trigger and ",(0,i.yg)("strong",{parentName:"li"},"Control LED")," with SenseCraft AI Platform. ")))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26297],{15680:(e,t,i)=>{i.d(t,{xA:()=>g,yg:()=>u});var o=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)i=s[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)i=s[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),m=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},g=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),d=m(i),y=n,u=d["".concat(l,".").concat(y)]||d[y]||c[y]||s;return i?o.createElement(u,r(r({ref:t},g),{},{components:i})):o.createElement(u,r({ref:t},g))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,r=new Array(s);r[0]=y;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:n,r[1]=a;for(var m=2;m<s;m++)r[m]=i[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}y.displayName="MDXCreateElement"},73308:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var o=i(58168),n=(i(96540),i(15680));const s={description:"Introduction of how the mmWave Sensor connect to HA.",title:"\u901a\u8fc7\u84dd\u7259\u5c06XIAO\u7684\u6beb\u7c73\u6ce2\u96f7\u8fbe\u6570\u636e\u4f20\u8f93\u5230Home Assistant\uff08\u5bb6\u5ead\u52a9\u624b\uff09",keywords:["mmwave","radar"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/mmwave_for_xiao_to_ha_bt",last_update:{date:"03/21/2024",author:"AnXiaodie"}},r="\u901a\u8fc7\u84dd\u7259\u5c06XIAO\u7684\u6beb\u7c73\u6ce2\u96f7\u8fbe\u6570\u636e\u4f20\u8f93\u5230Home Assistant\uff08\u5bb6\u5ead\u52a9\u624b\uff09",a={unversionedId:"zh-CN/Sensor/mmWave_radar_sensor/mmwave-for-XIAO/cn-mmwave-for-xiao-connect-to-HA",id:"zh-CN/Sensor/mmWave_radar_sensor/mmwave-for-XIAO/cn-mmwave-for-xiao-connect-to-HA",title:"\u901a\u8fc7\u84dd\u7259\u5c06XIAO\u7684\u6beb\u7c73\u6ce2\u96f7\u8fbe\u6570\u636e\u4f20\u8f93\u5230Home Assistant\uff08\u5bb6\u5ead\u52a9\u624b\uff09",description:"Introduction of how the mmWave Sensor connect to HA.",source:"@site/docs/zh-CN/Sensor/mmWave_radar_sensor/mmwave-for-XIAO/cn-mmwave-for-xiao-connect-to-HA.md",sourceDirName:"zh-CN/Sensor/mmWave_radar_sensor/mmwave-for-XIAO",slug:"/cn/mmwave_for_xiao_to_ha_bt",permalink:"/cn/mmwave_for_xiao_to_ha_bt",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/mmWave_radar_sensor/mmwave-for-XIAO/cn-mmwave-for-xiao-connect-to-HA.md",tags:[],version:"current",lastUpdatedBy:"AnXiaodie",lastUpdatedAt:1710979200,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{description:"Introduction of how the mmWave Sensor connect to HA.",title:"\u901a\u8fc7\u84dd\u7259\u5c06XIAO\u7684\u6beb\u7c73\u6ce2\u96f7\u8fbe\u6570\u636e\u4f20\u8f93\u5230Home Assistant\uff08\u5bb6\u5ead\u52a9\u624b\uff09",keywords:["mmwave","radar"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/mmwave_for_xiao_to_ha_bt",last_update:{date:"03/21/2024",author:"AnXiaodie"}},sidebar:"CNSidebar",previous:{title:"XIAO\u4e0eArduino\u4e0a\u768424GHz\u6beb\u7c73\u6ce2\u4f20\u611f\u5668\u5f00\u53d1",permalink:"/cn/mmwave_for_xiao_arduino"},next:{title:"\u6beb\u7c73\u6ce2\u4eba\u4f53\u68c0\u6d4b\u4f20\u611f\u5668\u5957\u4ef6",permalink:"/cn/mmwave_human_detection_kit"}},l={},m=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5f00\u59cb\u4f7f\u7528",id:"\u5f00\u59cb\u4f7f\u7528",level:2},{value:"\u786c\u4ef6\u51c6\u5907",id:"\u786c\u4ef6\u51c6\u5907",level:3},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:3},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u6b65\u9aa41. \u53d1\u73b0\u8bbe\u5907",id:"\u6b65\u9aa41-\u53d1\u73b0\u8bbe\u5907",level:3},{value:"\u6b65\u9aa42. \u914d\u7f6e\u8bbe\u5907",id:"\u6b65\u9aa42-\u914d\u7f6e\u8bbe\u5907",level:3},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],g={toc:m},d="wrapper";function c(e){let{components:t,...i}=e;return(0,n.yg)(d,(0,o.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"\u901a\u8fc7\u84dd\u7259\u5c06xiao\u7684\u6beb\u7c73\u6ce2\u96f7\u8fbe\u6570\u636e\u4f20\u8f93\u5230home-assistant\u5bb6\u5ead\u52a9\u624b"},"\u901a\u8fc7\u84dd\u7259\u5c06XIAO\u7684\u6beb\u7c73\u6ce2\u96f7\u8fbe\u6570\u636e\u4f20\u8f93\u5230Home Assistant\uff08\u5bb6\u5ead\u52a9\u624b\uff09"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.yg)("p",null,"XIAO 24GHz\u6beb\u7c73\u6ce2\u4f20\u611f\u5668 - \u4eba\u4f53\u9759\u6001\u68c0\u6d4b\u662fSeeed Studio XIAO\u7cfb\u5217\u7684\u4e00\u4e2a\u6269\u5c55\u677f\u3002\u5b83\u662f\u4e00\u4e2a\u96c6\u6210\u4e86\u5929\u7ebf\u3001\u9ad8\u7075\u654f\u5ea6\u7684\u6beb\u7c73\u6ce2\u4f20\u611f\u5668\uff0c\u57fa\u4e8eFMCW\uff08\u8c03\u9891\u8fde\u7eed\u6ce2\uff09\u539f\u7406\u3002\u7ed3\u5408\u4f20\u611f\u5668\u4fe1\u53f7\u5904\u7406\u6280\u672f\u548c\u7cbe\u786e\u7684\u4eba\u4f53\u611f\u5e94\u7b97\u6cd5\uff0c\u5b83\u80fd\u591f\u8bc6\u522b\u8fd0\u52a8\u4e2d\u6216\u9759\u6b62\u72b6\u6001\u4e0b\u7684\u4eba\u4f53\u3002"),(0,n.yg)("p",null,"\u672c\u7ae0\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5c06XIAO 24GHz\u6beb\u7c73\u6ce2\u4f20\u611f\u5668\u901a\u8fc7\u84dd\u7259\u8fde\u63a5\u5230HA\uff08Home Assistant\uff0c\u5bb6\u5ead\u52a9\u624b\uff09\u3002\u5173\u4e8eXIAO 24GHz\u6beb\u7c73\u6ce2\u4f20\u611f\u5668\u7684\u8be6\u7ec6\u529f\u80fd\u7279\u6027\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/mmwave_for_xiao/"},"\u8fd9\u91cc"),"\u3002"),(0,n.yg)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"\u672cWiki\u7684\u6240\u6709\u5185\u5bb9\u4ec5\u9002\u7528\u4e8eXIAO 24GHz\u6beb\u7c73\u6ce2\u4f20\u611f\u5668\uff0c\u5e76\u4e0d\u9002\u7528\u4e8e\u5176\u4ed6\u6beb\u7c73\u6ce2\u4f20\u611f\u5668\u3002")),(0,n.yg)("h2",{id:"\u5f00\u59cb\u4f7f\u7528"},"\u5f00\u59cb\u4f7f\u7528"),(0,n.yg)("h3",{id:"\u786c\u4ef6\u51c6\u5907"},"\u786c\u4ef6\u51c6\u5907"),(0,n.yg)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528XIAO\u7684\u6beb\u7c73\u6ce2\u4f20\u611f\u5668\u4e0eXIAO ESP32C3\u914d\u5408\u4f7f\u7528\uff0c\u5e76\u5c06\u5176\u63d2\u5165Home Assistant\u4e2d\uff0c\u4ee5\u4fbf\u7f8e\u89c2\u548c\u6613\u4e8e\u5e03\u7ebf\u3002\u5982\u679c\u60a8\u60f3\u4e25\u683c\u6309\u7167\u672c\u6559\u7a0b\u8fdb\u884c\u64cd\u4f5c\uff0c\u90a3\u4e48\u60a8\u9700\u8981\u51c6\u5907\u4ee5\u4e0b\u6a21\u5757\u3002"),(0,n.yg)("table",{align:"center"},(0,n.yg)("tr",null,(0,n.yg)("th",null,"Seeed Studio XIAO ESP32C3"),(0,n.yg)("th",null,"24GHz mmWave for XIAO")),(0,n.yg)("tr",null,(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg",style:{width:200,height:"auto"}}))),(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png",style:{width:150,height:"auto"}})))),(0,n.yg)("tr",null,(0,n.yg)("td",null,(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," \u70b9\u51fb\u8d2d\u4e70 \ud83d\uddb1\ufe0f")))))),(0,n.yg)("td",null,(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," \u70b9\u51fb\u8d2d\u4e70 \ud83d\uddb1\ufe0f")))))))),(0,n.yg)("p",null,"\u8be5\u4f20\u611f\u5668\u4e13\u4e3a\u4e0eXIAO\u517c\u5bb9\u800c\u8bbe\u8ba1\uff0c\u56e0\u6b64\uff0c\u901a\u5e38\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u6b64\u4f20\u611f\u5668\uff0c\u60a8\u9700\u8981\u51c6\u5907\u4e00\u4e2aXIAO\uff0c\u5e76\u4e3a\u4f20\u611f\u5668\u5b89\u88c5\u6bcd\u6392\u9488\u3002\u5f53\u8fde\u63a5\u5230XIAO\u65f6\uff0c\u8bf7\u7279\u522b\u6ce8\u610f\u4f20\u611f\u5668\u7684\u5b89\u88c5\u65b9\u5411\uff0c\u8bf7\u52ff\u53cd\u5411\u63d2\u5165\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u70e7\u6bc1\u4f20\u611f\u5668\u6216XIAO\u3002"),(0,n.yg)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"\u6b63\u786e\u7684\u65b9\u5411\u662f\u4f20\u611f\u5668\u7684\u5929\u7ebf\u5e94\u671d\u5411\u5916\u90e8\u3002")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png",style:{width:800,height:"auto"}})),(0,n.yg)("p",null,"\u786e\u8ba4\u8fde\u63a5\u65b9\u5411\u6b63\u786e\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06USB-C\u578b\u7535\u7f06\u8fde\u63a5\u5230\u7535\u8111\u62163.3V\u7535\u6e90\uff0c\u4f20\u611f\u5668\u5c06\u5f00\u59cb\u5de5\u4f5c\u3002"),(0,n.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u624b\u5934\u6682\u65f6\u6ca1\u6709XIAO\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u5c06TTL\u8fde\u63a5\u5230\u51763.3V\u5f15\u811a\u548cGND\u5f15\u811a\uff0c\u4e3aXIAO\u7684\u6beb\u7c73\u6ce2\u4f20\u611f\u5668\u5355\u72ec\u4f9b\u7535\uff0c\u8fd9\u4e5f\u53ef\u4ee5\u6309\u7167\u672c\u6559\u7a0b\u7684\u5185\u5bb9\u8fdb\u884c\u3002\u5bf9\u4e8e\u672c\u6559\u7a0b\uff0c\u65e0\u9700\u4f7f\u7528RX\u548cTX\u5f15\u811a\u3002"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/10.jpg",style:{width:300,height:"auto"}}))),(0,n.yg)("h3",{id:"\u8f6f\u4ef6\u51c6\u5907"},"\u8f6f\u4ef6\u51c6\u5907"),(0,n.yg)("p",null,"\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u5b89\u88c5HomeAssistant\uff0c\u53ef\u4ee5\u70b9\u51fb",(0,n.yg)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/"},"\u8fd9\u91cc"),"\u53c2\u8003HomeAssistant\u7684\u5b98\u65b9\u6559\u7a0b\u3002"),(0,n.yg)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,n.yg)("h3",{id:"\u6b65\u9aa41-\u53d1\u73b0\u8bbe\u5907"},"\u6b65\u9aa41. \u53d1\u73b0\u8bbe\u5907"),(0,n.yg)("p",null,"\u5728Home Assistant\u4e2d\uff0c\u70b9\u51fb\u5de6\u4e0b\u89d2\u7684",(0,n.yg)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\uff0c\u5728\u4e2d\u5fc3\u9009\u62e9",(0,n.yg)("strong",{parentName:"p"},"\u8bbe\u5907\u4e0e\u670d\u52a1"),"\u3002"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/1.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"\u5728\u201c\u5df2\u53d1\u73b0\u201d\u533a\u57df\u4e2d\uff0c\u4f1a\u51fa\u73b0\u4e00\u4e2a\u4f20\u611f\u5668\u56fe\u6807\uff0c\u8bf7\u70b9\u51fb",(0,n.yg)("strong",{parentName:"p"},"\u914d\u7f6e"),"\u3002"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/2.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"\u5c06\u4f1a\u51fa\u73b0\u4e00\u4e2a\u5f39\u7a97\uff0c\u70b9\u51fb",(0,n.yg)("strong",{parentName:"p"},"\u63d0\u4ea4"),"\u3002"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/3.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"\u60a8\u5c06\u770b\u5230\u4e00\u4e2a\u914d\u7f6e\u6210\u529f\u7684\u5f39\u7a97\uff0c\u70b9\u51fb",(0,n.yg)("strong",{parentName:"p"},"\u5b8c\u6210"),"\u3002"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/4.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("h3",{id:"\u6b65\u9aa42-\u914d\u7f6e\u8bbe\u5907"},"\u6b65\u9aa42. \u914d\u7f6e\u8bbe\u5907"),(0,n.yg)("p",null,"\u5728\u5df2\u914d\u7f6e\u533a\u57df\uff0c\u70b9\u51fb",(0,n.yg)("strong",{parentName:"p"},"ld2410_ble"),"\u3002"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/5.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"\u4e00\u65e6\u8fdb\u5165\u4f20\u611f\u5668\u8bbe\u7f6e\u9875\u9762\uff0c\u70b9\u51fb",(0,n.yg)("strong",{parentName:"p"},"\u8bbe\u59071"),"\u3002"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/6.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"\u5c06\u4f20\u611f\u5668\u7684\u8fd4\u56de\u503c\u6dfb\u52a0\u5230\u4eea\u8868\u677f\u4e2d\u3002"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/7.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"\u5728\u5f39\u51fa\u7a97\u53e3\u4e2d\u9009\u62e9\u201c\u6dfb\u52a0\u5230\u4eea\u8868\u677f\u201d\u3002"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/8.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"\u6700\u540e\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684\u201c\u6982\u89c8\u201d\uff0c\u60a8\u4f1a\u770b\u5230mmwave-for-xiao\u4f20\u611f\u5668\u6570\u636e\u5df2\u6210\u529f\u663e\u793a\u5728\u4eea\u8868\u677f\u4e0a\u3002\u81f3\u6b64\uff0cmmwave for xiao\u4f20\u611f\u5668\u5df2\u6210\u529f\u8fde\u63a5\u5230Home Assistant\u3002"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u60a8\u53ef\u4ee5\u5145\u5206\u53d1\u6325\u521b\u9020\u529b\uff0c\u5b9e\u73b0\u81ea\u52a8\u5316\u64cd\u4f5c\uff01"),(0,n.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,n.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u60a8\u63d0\u4f9b\u5168\u65b9\u4f4d\u7684\u652f\u6301\uff0c\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u62e5\u6709\u5c3d\u53ef\u80fd\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,n.yg)("div",{class:"table-center"},(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}c.isMDXComponent=!0}}]);
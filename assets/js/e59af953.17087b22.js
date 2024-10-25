"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40744],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=d(n),p=r,y=g["".concat(s,".").concat(p)]||g[p]||c[p]||a;return n?i.createElement(y,o(o({ref:t},u),{},{components:n})):i.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(9668),r=(n(96540),n(15680));const a={description:"The introduction of Wio-SX1262 with XIAO esp32s3 Kit",title:"Wio-SX1262 with XIAO ESP32S3 Kit Introduction",image:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png",slug:"/wio_sx1262_with_xiao_esp32s3_kit",last_update:{date:"09/30/2024",author:"Evelyn Chen"}},o=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Introduction",id:"Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Introduction",title:"Wio-SX1262 with XIAO ESP32S3 Kit Introduction",description:"The introduction of Wio-SX1262 with XIAO esp32s3 Kit",source:"@site/docs/Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Introduction.md",sourceDirName:"Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit",slug:"/wio_sx1262_with_xiao_esp32s3_kit",permalink:"/wio_sx1262_with_xiao_esp32s3_kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_SX1262/Wio_SX1262_with_XIAO_ESP32S3_Kit/Introduction.md",tags:[],version:"current",lastUpdatedBy:"Evelyn Chen",lastUpdatedAt:1727654400,formattedLastUpdatedAt:"Sep 30, 2024",frontMatter:{description:"The introduction of Wio-SX1262 with XIAO esp32s3 Kit",title:"Wio-SX1262 with XIAO ESP32S3 Kit Introduction",image:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png",slug:"/wio_sx1262_with_xiao_esp32s3_kit",last_update:{date:"09/30/2024",author:"Evelyn Chen"}},sidebar:"ProductSidebar",previous:{title:"Wio-SX1262 Introduction",permalink:"/wio_sx1262"},next:{title:"Get Started for Meshtastic",permalink:"/wio_sx1262_xiao_esp32s3_for_meshtastic"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:2},{value:"Part List",id:"part-list",level:3},{value:"Recommended accessories",id:"recommended-accessories",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png",style:{width:600,height:"auto"}})),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"This thumb-sized LoRa development kit, which consists of the XIAO ESP32S3 and the Wio-SX1262 LoRa module, is an ideal starter kit for Meshtastic and LoRa/LoRaWAN projects. Supporting WiFi, BLE, and LoRa, it includes a built-in power management chip and can be extended via IIC, UART, and other GPIO interfaces, and is compatible with Arduino development.\nThe XIAO ESP32S3 with Wio-SX1262 is a single-channel LoRaWAN LoRa module with a low price and high cost performance. It is suitable for application scenarios with long distance, low power consumption, and small data volume. It supports more than 30 node devices (depending on upload interval, data payload, etc.)."),(0,r.yg)("p",null,"Seeed provides 3 applications for this Wio SX1262 XIAO ESP32S3 kit. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Using Meshtastic for network communication"),(0,r.yg)("li",{parentName:"ul"},"Configuring as LoRawan node"),(0,r.yg)("li",{parentName:"ul"},"Configuring as LoRawan gateway")),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Meshtactic works out of the box"),": Pre-flashed with Meshtastic firmware, it is ready to work once powered on."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Outstanding RF performance"),": Supports LoRa(862-930MHz)  2.4GHz Wi-Fi and BLE 5.0 dual wireless communication, support 2~5km(LoRa) and 100m+(Wi-Fi/BLE) remote communication when connected with U.FL antenna."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Thumb-sized Compact Design"),": 21 x 18mm, adopting the classic form factor of XIAO, suitable for space-limited projects like wearable devices."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Powerful MCU Board"),": Incorporate the ESP32S3 32-bit, dual-core, Xtensa processor running at up to 240MHz, mounted multiple development ports, Arduino / MicroPython supported."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Elaborate Power Design"),": Includes a Type-C USB interface and lithium battery charge management.")),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Feature"),(0,r.yg)("th",{parentName:"tr",align:null},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ESP32S3"),(0,r.yg)("td",{parentName:"tr",align:null},"ESP32-S3R8, Xtensa LX7 dual-core, 32-bit processor running up to 240 MHz")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LoRa"),(0,r.yg)("td",{parentName:"tr",align:null},"Based on Semtech SX1262, supports 862-930MHz")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BLE"),(0,r.yg)("td",{parentName:"tr",align:null},"Bluetooth 5.0, Bluetooth mesh")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Wi-Fi"),(0,r.yg)("td",{parentName:"tr",align:null},"Complete 2.4GHz Wi-Fi subsystem")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Interface (ESP32S3)"),(0,r.yg)("td",{parentName:"tr",align:null},"1x UART, 1x IIC, 1x IIS, 1x SPI(connect to SX1262),11x GPIO(PWM), 9x ADC, 1x User LED, 1x Charge LED, 1x Reset button, 1x Boot button")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Interface (Wio-SX1262)"),(0,r.yg)("td",{parentName:"tr",align:null},"1x User button, 1x SPI(connect to ESP32S3)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Power"),(0,r.yg)("td",{parentName:"tr",align:null},"Input voltage (Type-C): 5V ",(0,r.yg)("br",null)," Input voltage (BAT): 4.2V ",(0,r.yg)("br",null)," Charging battery current: 100mA")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Working Temperature"),(0,r.yg)("td",{parentName:"tr",align:null},"-40\xb0C ~ 65\xb0C")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Dimensions"),(0,r.yg)("td",{parentName:"tr",align:null},"21 x 17.8mm")))),(0,r.yg)("h2",{id:"hardware-preparation"},"Hardware Preparation"),(0,r.yg)("h3",{id:"part-list"},"Part List"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Item"),(0,r.yg)("th",{parentName:"tr",align:null},"Quantity"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"XIAO ESP32S3"),(0,r.yg)("td",{parentName:"tr",align:null},"x1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Wio-SX1262 extension board"),(0,r.yg)("td",{parentName:"tr",align:null},"x1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Wi-Fi antenna"),(0,r.yg)("td",{parentName:"tr",align:null},"x1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LoRa antenna"),(0,r.yg)("td",{parentName:"tr",align:null},"x1")))),(0,r.yg)("h3",{id:"recommended-accessories"},"Recommended accessories"),(0,r.yg)("p",null,"Compatible with XIAO Expansion Board for adding screens and sensors, and add Grove sensors via the Grove expansion Board."),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"XIAO Expansion Board"),(0,r.yg)("th",null,"Grove Base for XIAO")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/1.png",style:{width:250,height:"auto"}}))),(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/8.png",style:{width:250,height:"auto"}})))),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,r.yg)("td",null,(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",null,"Wio-SX1262 extension board diagram")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/10.png",style:{width:700,height:"auto"}})))),(0,r.yg)("tr",null,(0,r.yg)("th",null,"XIAO ESP32S3 front indication diagram")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png",style:{width:700,height:"auto"}})))),(0,r.yg)("tr",null,(0,r.yg)("th",null,"XIAO ESP32S3 back indication diagram")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png",style:{width:700,height:"auto"}})))),(0,r.yg)("tr",null,(0,r.yg)("th",null,"XIAO ESP32S3 Pin List")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.png",style:{width:700,height:"auto"}}))))),(0,r.yg)("h2",{id:"resource"},"Resource"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf"},"Wio SX1262 Module Datasheet")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf"},"Wio SX1262 Schemetic Diagram")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.step"},"Wio SX1262 for XIAO 3D file"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}c.isMDXComponent=!0}}]);
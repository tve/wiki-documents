"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17028],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>c});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),g=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=g(n),u=i,c=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var g=2;g<r;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var a=n(58168),i=(n(96540),n(15680));const r={description:"Train Water Meter Digits Recognition Model with SenseCAP A1101",title:"Train Water Meter Digits Recognition Model with SenseCAP A1101",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101",date:"08/17/2023",author:"JoJang"},o="Train Water Meter Digits Recognition Model with SenseCAP A1101",s={unversionedId:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101",id:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101",title:"Train Water Meter Digits Recognition Model with SenseCAP A1101",description:"Train Water Meter Digits Recognition Model with SenseCAP A1101",source:"@site/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101",slug:"/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101",permalink:"/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101.md",tags:[],version:"current",lastUpdatedBy:"Citric Lee",lastUpdatedAt:1722837089,formattedLastUpdatedAt:"Aug 5, 2024",frontMatter:{description:"Train Water Meter Digits Recognition Model with SenseCAP A1101",title:"Train Water Meter Digits Recognition Model with SenseCAP A1101",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101",date:"08/17/2023",author:"JoJang"},sidebar:"ProductSidebar",previous:{title:"One Stop Model Training with Edge Impulse",permalink:"/One-Stop-Model-Training-with-Edge-Impulse"},next:{title:"SenseCAP ONE Weather Sensor",permalink:"/SenseCAP_ONE_weather_sensor"}},l={},g=[{value:"Overview",id:"overview",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:2},{value:"Software preparation",id:"software-preparation",level:2},{value:"Windows, Linux, Intel Mac",id:"windows-linux-intel-mac",level:3},{value:"M1/ M2 Mac",id:"m1-m2-mac",level:3},{value:"1. Collect Image Data",id:"1-collect-image-data",level:2},{value:"Change device firmware after image collection",id:"change-device-firmware-after-image-collection",level:3},{value:"2. Generate Dataset with RoboFlow",id:"2-generate-dataset-with-roboflow",level:2},{value:"Train using SenseCraft Model Assistant on Google Colab",id:"train-using-sensecraft-model-assistant-on-google-colab",level:3},{value:"3. Deploy the trained model and perform inference",id:"3-deploy-the-trained-model-and-perform-inference",level:2},{value:"4. Perform inference with SenseCAP A1101 on SenseCAP Mate",id:"4-perform-inference-with-sensecap-a1101-on-sensecap-mate",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:g},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"train-water-meter-digits-recognition-model-with-sensecap-a1101"},"Train Water Meter Digits Recognition Model with SenseCAP A1101"),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"In this wiki, we will teach you how to train your own meter model for your specific application and then deploy it easily to the SenseCAP A1101. Let's get started!"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/0.jpg"})),(0,i.yg)("h2",{id:"hardware-preparation"},"Hardware preparation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html"},"SenseCAP A1101 - LoRaWAN Vision AI Sensor")),(0,i.yg)("li",{parentName:"ul"},"USB Type-C cable"),(0,i.yg)("li",{parentName:"ul"},"Windows/ Linux/ Mac with internet access")),(0,i.yg)("h2",{id:"software-preparation"},"Software preparation"),(0,i.yg)("p",null,"We will be using the following software technologies in this wiki"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://roboflow.com"},"Roboflow")," - for annotating"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process"},"SenseCraft Model Assistant")," - for training"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.tensorflow.org/lite"},"TensorFlow Lite")," - for inferencing")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/11.png"})),(0,i.yg)("p",null,"Now let's setup the software. The software setup for Windows, Linux and Intel Mac will be same whereas for M1/M2 Mac will be different."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"What is SenseCraft Model Assistant?"),"Seeed Studio SenseCraft Model Assistant is an open-source project focused on embedded AI. We have optimized excellent algorithms from OpenMMLab for real-world scenarios and made implementation more user-friendly, achieving faster and more accurate inference on embedded devices.")),(0,i.yg)("h3",{id:"windows-linux-intel-mac"},"Windows, Linux, Intel Mac"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 1.")," Make sure Python is already installed on the computer. If not, visit ",(0,i.yg)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"this page")," to download and install latest version of Python")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 2.")," Install the following dependency"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"pip3 install libusb1\n")),(0,i.yg)("h3",{id:"m1-m2-mac"},"M1/ M2 Mac"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1.")," Install Homebrew")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2.")," Install conda")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"brew install conda\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Download libusb")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4.")," Install libusb")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"conda install libusb-1.0.26-h1c322ee_100.tar.bz2\n")),(0,i.yg)("admonition",{title:"warning",type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"You need to make sure your BootLoader version is greater than 2.0.0 before you can change the firmware to do the following. If you are not sure, please check the BootLoader version by following the steps mentioned in ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#check-bootloader-version"},"this section"),", and if the version is less than 2.0.0, please update the BootLoader by following the steps mentioned in ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#update-bootloader"},"this section"))),(0,i.yg)("h2",{id:"1-collect-image-data"},"1. Collect Image Data"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1.")," Connect SenseCAP A1101 to PC by using USB Type-C cable")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2.")," Double click the boot button to enter ",(0,i.yg)("strong",{parentName:"li"},"boot mode"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"})),(0,i.yg)("p",null,"After this you will see a new storage drive shown on your file explorer as ",(0,i.yg)("strong",{parentName:"p"},"SENSECAP")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{280}",src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Drag and drop ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2"},"this .uf2 file")," to ",(0,i.yg)("strong",{parentName:"li"},"SENSECAP")," drive")),(0,i.yg)("p",null,"As soon as the uf2 finishes copying into the drive, the drive will disappear. This means the uf2 has been successfully uploaded to the module."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 4.")," Copy and paste ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py"},"this Python script")," inside a newly-created file named ",(0,i.yg)("strong",{parentName:"p"},"capture_images_script.py")," on your PC")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 5.")," Execute the Python script to start capturing images"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"python3 capture_images_script.py\n")),(0,i.yg)("p",null,"By default, it will capture an image every 300ms. If you want to change this, you can run the script in this format"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"python3 capture_images_script.py --interval <time_in_ms>\n")),(0,i.yg)("p",null,"For example, to capture an image every second"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"python3 capture_images_script.py --interval 1000\n")),(0,i.yg)("p",null,"After the above script is executed, SenseCAP A1101 will start to capture images from the in-built cameras continuosly and save all of them inside a folder named ",(0,i.yg)("strong",{parentName:"p"},"save_img")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/1.png"})),(0,i.yg)("p",null,"Also, it will open a preview window while it is recording."),(0,i.yg)("p",null,"After you have enough images captured, click on the terminal window and press the following key combinations to stop the capturing process"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Windows: Ctrl + Break"),(0,i.yg)("li",{parentName:"ul"},"Linux: Ctrl + Shift + \\"),(0,i.yg)("li",{parentName:"ul"},"Mac: CMD + Shift + \\")),(0,i.yg)("h3",{id:"change-device-firmware-after-image-collection"},"Change device firmware after image collection"),(0,i.yg)("p",null,"After you have finished recording images for the dataset, you need to make sure to change the firmware inside the SenseCAP A1101 back to original, so that you can again load object detection models for detection. Let's go through the steps now."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 1.")," Enter ",(0,i.yg)("strong",{parentName:"p"},"Boot mode")," on SenseCAP A1101 as explained before")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 2.")," Drag and drop ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2"},"this .uf2 file")," to ",(0,i.yg)("strong",{parentName:"p"},"SENSECAP")," drive according to your device"))),(0,i.yg)("p",null,"As soon as the uf2 finishes copying into the drive, the drive will disappear. This means the uf2 has been successfully uploaded to the module."),(0,i.yg)("h2",{id:"2-generate-dataset-with-roboflow"},"2. Generate Dataset with RoboFlow"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://roboflow.com"},"Roboflow"),' is an annotation tool based online. Here we can directly import the video footage that we have recorded into Roboflow and it will be exported into a series of images. This tool is very convenient because it will let us help distribute the dataset into "training, validation and testing". Also this tool will allow us to add further processing to these images after labelling them. Furthermore, it can easily export the labelled dataset into ',(0,i.yg)("strong",{parentName:"p"},"COCO format")," which is what we exactly need!"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 1.")," Click ",(0,i.yg)("a",{parentName:"p",href:"https://app.roboflow.com/login"},"here")," to sign up for a Roboflow account")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 2.")," Click ",(0,i.yg)("strong",{parentName:"p"},"Create New Project")," to start our project"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 3.")," Fill in ",(0,i.yg)("strong",{parentName:"p"},"Project Name"),", keep the ",(0,i.yg)("strong",{parentName:"p"},"License (CC BY 4.0)")," and ",(0,i.yg)("strong",{parentName:"p"},"Project type (Object Detection (Bounding Box))"),"  as default. Under ",(0,i.yg)("strong",{parentName:"p"},"What will your model predict?")," column, fill in an annotation group name. "),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{350}",src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/2.png"}))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 4.")," Drag and drop the images that you have captured using SenseCAP A1101"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/3.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 5.")," After the images are processed, click ",(0,i.yg)("strong",{parentName:"li"},"Finish Uploading"),". Wait patiently until the images are uploaded.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 6.")," After the images are uploaded, click ",(0,i.yg)("strong",{parentName:"li"},"Assign Images"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 7.")," Select an image, draw a rectangular box around digits, choose the label as ",(0,i.yg)("strong",{parentName:"li"},"digits")," and press ",(0,i.yg)("strong",{parentName:"li"},"ENTER"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 8.")," Repeat the same for the remaining images"),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/5.png"}))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 9.")," Continue to annotate all the images in the dataset")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 10.")," Once labelling is done, click ",(0,i.yg)("strong",{parentName:"p"},"Add images to Dataset")))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 11.")," Next we will split the images between \"Train, Valid and Test\". If there are more datasets, it can be 80/20. if datasets are less, it can be 85/15. Please note the 'Train' should not be less than 80.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{330}",src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/12.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 12.")," Click ",(0,i.yg)("strong",{parentName:"li"},"Generate New Version"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 13.")," Now you can add ",(0,i.yg)("strong",{parentName:"li"},"Preprocessing")," and ",(0,i.yg)("strong",{parentName:"li"},"Augmentation")," if you prefer. Here we will ",(0,i.yg)("strong",{parentName:"li"},"change")," the ",(0,i.yg)("strong",{parentName:"li"},"Resize")," option to ",(0,i.yg)("strong",{parentName:"li"},"192x192"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/6.png"})),(0,i.yg)("p",null,"Here we change the image size to 192x192 because we will use that size for training and the training will be faster. Otherwise, it will have to convert all images to 192x192 during the training process which consumes more CPU resources and makes the training process slower."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 14.")," Next, proceed with the remaining defaults and click ",(0,i.yg)("strong",{parentName:"li"},"Generate"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/7.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 15.")," Click ",(0,i.yg)("strong",{parentName:"li"},"Export"),", select ",(0,i.yg)("strong",{parentName:"li"},"Format")," as ",(0,i.yg)("strong",{parentName:"li"},"COCO"),", select ",(0,i.yg)("strong",{parentName:"li"},"show download code")," and click ",(0,i.yg)("strong",{parentName:"li"},"Continue"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/8.png"})),(0,i.yg)("p",null,"This will generate a code snippet that we will use later inside Google Colab training. So please keep this window open in the background."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"})),(0,i.yg)("h3",{id:"train-using-sensecraft-model-assistant-on-google-colab"},"Train using SenseCraft Model Assistant on Google Colab"),(0,i.yg)("p",null,"After we have chosen a public dataset, we need to train the dataset. Here we use a Google Colaboratory environment to perform training on the cloud. Furthermore, we use Roboflow api within Colab to easily download our dataset."),(0,i.yg)("p",null,"Click ",(0,i.yg)("a",{parentName:"p",href:"https://colab.research.google.com/github/Seeed-Studio/EdgeLab/blob/main/notebooks/Google-Colab-YOLOv5-A1101-Example.ipynb"},"here")," to open an already prepared Google Colab workspace, go through the steps mentioned in the workspace and run the code cells one by one."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," On Google Colab, in the code cell under ",(0,i.yg)("strong",{parentName:"p"},"Step 4"),", you can directly copy the code snippet from Roboflow as mentioned above"),(0,i.yg)("p",null,"It will walkthrough the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Setup an environment for training"),(0,i.yg)("li",{parentName:"ul"},"Download a dataset"),(0,i.yg)("li",{parentName:"ul"},"Perform the training"),(0,i.yg)("li",{parentName:"ul"},"Download the trained model")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/9.png"})),(0,i.yg)("h2",{id:"3-deploy-the-trained-model-and-perform-inference"},"3. Deploy the trained model and perform inference"),(0,i.yg)("p",null,"Now we will move the ",(0,i.yg)("strong",{parentName:"p"},"model-1.uf2")," that we obtained at the end of the training into SenseCAP A1101."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 1.")," Install the latest version of ",(0,i.yg)("a",{parentName:"p",href:"https://www.google.com/chrome"},"Google Chrome")," or ",(0,i.yg)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/edge?r=1"},"Microsoft Edge browser")," and open it")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 2.")," Connect SenseCAP A1101 into your PC via a USB Type-C cable"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Double-click the boot button on SenseCAP A1101 to enter mass storage mode")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"})),(0,i.yg)("p",null,"After this, you will see a new storage drive shown on your file explorer as ",(0,i.yg)("strong",{parentName:"p"},"SENSECAP"),"  "),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:"{280}",src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4.")," Drag and drop the ",(0,i.yg)("strong",{parentName:"li"},"model-1.uf2")," file to ",(0,i.yg)("strong",{parentName:"li"},"SENSECAP")," drive")),(0,i.yg)("p",null,"As soon as the uf2 finishes copying into the drive, the drive will disappear. This means the uf2 has been successfully uploaded to the module."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," If you have 4 model files ready, you can drag and drop each model one-by-one. Drop first model, wait until it finishes copying, enter boot mode again, drop second model and so on. If you have only loaded one model (with index 1) into SenseCAP A1101, it will load that model."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 5.")," ",(0,i.yg)("a",{parentName:"li",href:"https://vision-ai-demo.seeed.cn/"},"Click here")," to open a preview window of the camera stream")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 6.")," Click ",(0,i.yg)("strong",{parentName:"li"},"Connect")," button. Then you will see a pop up on the browser. Select ",(0,i.yg)("strong",{parentName:"li"},"SenseCAP Vision AI - Paired")," and click ",(0,i.yg)("strong",{parentName:"li"},"Connect"))),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 7.")," View real-time inference results using the preview window!")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/10.png"})),(0,i.yg)("p",null,"As you can see above, the numbers are being detected with bounding boxes around them. "),(0,i.yg)("h2",{id:"4-perform-inference-with-sensecap-a1101-on-sensecap-mate"},"4. Perform inference with SenseCAP A1101 on SenseCAP Mate"),(0,i.yg)("p",null,"In addition to perform inference on the browser, we can also use the SenseCAP Mate to implement model inference, which we will implement it step by step."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1.")," \xa0First, we need to erase the firmware of A1101, which can be achieved by using erase_model.uf2. Then upgrade the A1101 firmware to the latest version and drop the water meter digits recognition model into A1101")),(0,i.yg)("p",null,"  ",(0,i.yg)("em",{parentName:"p"},"Firmware"),": ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/erase_model.uf2"},"erase_model.uf2"),"\u3001",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/sensecap_ai_v02-00.uf2"},"SenseCAP-A1101_v02-00.uf2")),(0,i.yg)("p",null,"  ",(0,i.yg)("em",{parentName:"p"},"Model"),": ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_water_pre_6.uf2"},"water_meter.uf2"),"\u3001",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/pfld_meter_pre_5.uf2"},"pfld_meter.uf2"),"\u3001",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_seg7_pre_6.uf2"},"digital_meter.uf2")),(0,i.yg)("p",null,"  ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"Note:"))," water_meter and digital_meter both identify the model name as user-define6 on the desktop and display digital_meter on the APP side. The model name identified by pfld_meter is user-define5, and Point_meter is displayed on the APP side. Users need to upload models according to their actual usage requirements during the deployment process"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2.")," \xa0",(0,i.yg)("a",{parentName:"li",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace"},"Click here")," to open a preview window of the camera stream")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," \xa0Click ",(0,i.yg)("strong",{parentName:"li"},"Connect")," button. Then you will see a pop up on the browser. Select ",(0,i.yg)("strong",{parentName:"li"},"SenseCAP A1101")," - Paired and click Connect")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step3.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4(Optional).")," Select Digital Meter in Model and Digital Meter in Algorithm, click Save and then click Invoke. And now we can view real-time inference results using the preview window.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step4.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 5.")," Open SenseCAP Mate and get paired with your own A1101, select the same Model and Algorithm as above. Then click General and click Detect on the bottom.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step_all.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 6.")," As you can see below, the AI Preview shows the digital meter recognition results.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step5.jpg"})),(0,i.yg)("p",null,"After completing the above steps, we will try to add our own A1101 to the device. Through the following 4 steps, we can view the result data of device identification anytime and anywhere through the cloud platform like SenseCAP Mate."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4stepfinal.png"})),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[Web Page]")," ",(0,i.yg)("a",{parentName:"p",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace"},"SenseCraft Model Assistant Documentation"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[Web Page]")," ",(0,i.yg)("a",{parentName:"p",href:"https://ultralytics.com/hub"},"Ultralytics HUB"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[Web Page]")," ",(0,i.yg)("a",{parentName:"p",href:"https://docs.roboflow.com"},"Roboflow Documentation"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[Web Page]")," ",(0,i.yg)("a",{parentName:"p",href:"https://www.tensorflow.org/lite/guide"},"TensorFlow Lite Documentation"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf"},"SenseCAP A1101 LoRaWAN Vision AI Sensor Specification"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf"},"SenseCAP A1101 LoRaWAN Vision AI Sensor User Guide"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf"},"SenseCAP S210X LoRaWAN Sensor Catalogue"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf"},"FAQ for SenseCAP A1101 LoRaWAN Vision AI Sensor")))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("br",null),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);
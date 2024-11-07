"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88763],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>c});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,c=p["".concat(l,".").concat(m)]||p[m]||_[m]||i;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>_,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(9668),o=(n(96540),n(15680));const i={description:"Describes how to develop a Watcher function block.",title:"Watcher Function Module Development Guide",image:"https://files.seeedstudio.com/wiki/watcher_software_framework/watcher_function_module.webp",slug:"/watcher_function_module_development_guide",sidebar_position:3,last_update:{date:"11/5/2024",author:"Citric"}},r="Watcher Function Module Development Guide",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Watcher/Firmware_architecture_Overview/watcher_function_module_dev_guide",id:"Sensor/SenseCAP/SenseCAP_Watcher/Firmware_architecture_Overview/watcher_function_module_dev_guide",title:"Watcher Function Module Development Guide",description:"Describes how to develop a Watcher function block.",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Watcher/Firmware_architecture_Overview/watcher_function_module_dev_guide.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Watcher/Firmware_architecture_Overview",slug:"/watcher_function_module_development_guide",permalink:"/watcher_function_module_development_guide",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Watcher/Firmware_architecture_Overview/watcher_function_module_dev_guide.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1730764800,formattedLastUpdatedAt:"Nov 5, 2024",sidebarPosition:3,frontMatter:{description:"Describes how to develop a Watcher function block.",title:"Watcher Function Module Development Guide",image:"https://files.seeedstudio.com/wiki/watcher_software_framework/watcher_function_module.webp",slug:"/watcher_function_module_development_guide",sidebar_position:3,last_update:{date:"11/5/2024",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"Watcher Software Framework",permalink:"/watcher_software_framework"},next:{title:"Watcher UI Integration Guide",permalink:"/watcher_ui_integration_guide"}},l={},u=[{value:"1. Installation and first build",id:"1-installation-and-first-build",level:2},{value:"2. Choose a proper template",id:"2-choose-a-proper-template",level:2},{value:"3. Implement the registration",id:"3-implement-the-registration",level:2},{value:"3.1 Instance",id:"31-instance",level:3},{value:"3.2 Destroy",id:"32-destroy",level:3},{value:"4. Implement the operations",id:"4-implement-the-operations",level:2},{value:"4.1 cfg",id:"41-cfg",level:3},{value:"4.2 msgs_sub_set",id:"42-msgs_sub_set",level:3},{value:"4.3 event handler",id:"43-event-handler",level:3},{value:"4.4 msgs_pub_set",id:"44-msgs_pub_set",level:3},{value:"4.5 start and stop",id:"45-start-and-stop",level:3},{value:"5. Test",id:"5-test",level:2},{value:"Appendix - More task flow examples",id:"appendix---more-task-flow-examples",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},p="wrapper";function _(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"watcher-function-module-development-guide"},"Watcher Function Module Development Guide"),(0,o.yg)("p",null,"It's recommended that you firstly read the ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/watcher_software_framework"},"Watcher Software Framework")," to have an understanding about how the function module works."),(0,o.yg)("p",null,"In this documentation we're gonna show a step-by-step guide on how to develop a new function module. We're gonna take the ",(0,o.yg)("inlineCode",{parentName:"p"},"UART Alarm")," module as an example."),(0,o.yg)("h2",{id:"1-installation-and-first-build"},"1. Installation and first build"),(0,o.yg)("p",null,"Please pass through the steps in ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/build_watcher_development_environment"},"Build the Watcher Development Environment")," if you've skipped it."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# you're in PROJ_ROOT_DIR/examples/factory_firmware/\ncd main/task_flow_module\n")),(0,o.yg)("h2",{id:"2-choose-a-proper-template"},"2. Choose a proper template"),(0,o.yg)("p",null,"In the ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/watcher_software_framework"},"Watcher Software Framework")," we introduced the existing function module (short as ",(0,o.yg)("strong",{parentName:"p"},"FM")," in the following of the documentation) and what they're used for. When we're developing a new FM, we'd better start from a closest FM existing as a reference. In this tutorial we're going to develop an alarmer FM, so we choose one of the alarmer FMs, ",(0,o.yg)("inlineCode",{parentName:"p"},"local alarmer")," is the simplest one, we'll take it."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"cp tf_module_local_alarm.h tf_module_uart_alarm.h\ncp tf_module_local_alarm.c tf_module_uart_alarm.c\n")),(0,o.yg)("p",null,"It doesn't matter what name the files have, any ",(0,o.yg)("inlineCode",{parentName:"p"},".h")," and ",(0,o.yg)("inlineCode",{parentName:"p"},".c")," file will be scanned by the build system and taken into the compile code tree. But it's still recommended to have a meaningful file name."),(0,o.yg)("h2",{id:"3-implement-the-registration"},"3. Implement the registration"),(0,o.yg)("p",null,"The ",(0,o.yg)("strong",{parentName:"p"},"TFE")," (task flow engine) provides an API function to register a new FM."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"esp_err_t tf_module_register(const char *p_name,\n                                const char *p_desc,\n                                const char *p_version,\n                                tf_module_mgmt_t *mgmt_handle);\n")),(0,o.yg)("p",null,"The first three parameters are the name, the description and the version of your FM, they're used internally currently, e.g. matching FM from the registration table, log printing etc., but will be used in the future when the FMs are communicating with a local service. "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'// in tf_module_uart_alarm.h\n#define TF_MODULE_UART_ALARM_NAME "uart alarm"\n#define TF_MODULE_UART_ALARM_VERSION "1.0.0"\n#define TF_MODULE_UART_ALARM_DESC "uart alarm function module"\n\n// in tf_module_uart_alarm.c\nesp_err_t tf_module_uart_alarm_register(void)\n{\n    return tf_module_register(TF_MODULE_UART_ALARM_NAME,\n                              TF_MODULE_UART_ALARM_DESC,\n                              TF_MODULE_UART_ALARM_VERSION,\n                              &__g_module_management);\n}\n')),(0,o.yg)("p",null,"The fourth parameter is a struct that contains necessary API functions to manage the life cycle of this FM."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"// in tf_module.h\ntypedef struct tf_module_mgmt {\n    tf_module_t *(*tf_module_instance)(void);\n    void (*tf_module_destroy)(tf_module_t *p_module);\n}tf_module_mgmt_t;\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"tf_module_instance")," is a function that will be called by the TFE when the engine is initializing all the FMs specified in a task flow, basically this means the engine has just received a task flow creation request and is starting the flow. ",(0,o.yg)("inlineCode",{parentName:"p"},"tf_module_destroy")," is a function that will be called when the TFE is stopping the flow."),(0,o.yg)("h3",{id:"31-instance"},"3.1 Instance"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'tf_module_t *tf_module_uart_alarm_instance(void)\n{\n    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *) tf_malloc(sizeof(tf_module_uart_alarm_t));\n    if (p_module_ins == NULL)\n    {\n        return NULL;\n    }\n    p_module_ins->module_base.p_module = p_module_ins;\n    p_module_ins->module_base.ops = &__g_module_ops;\n\n    if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {\n        // the 1st time instance, we should init the hardware\n        esp_err_t ret;\n        uart_config_t uart_config = {\n            .baud_rate = 115200,\n            .data_bits = UART_DATA_8_BITS,\n            .parity = UART_PARITY_DISABLE,\n            .stop_bits = UART_STOP_BITS_1,\n            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,\n        };\n        const int buffer_size = 2 * 1024;\n        ESP_GOTO_ON_ERROR(uart_param_config(UART_NUM_2, &uart_config), err, TAG, "uart_param_config failed");\n        ESP_GOTO_ON_ERROR(uart_set_pin(UART_NUM_2, GPIO_NUM_19, GPIO_NUM_20, -1, -1), err, TAG, "uart_set_pin failed");\n        ESP_GOTO_ON_ERROR(uart_driver_install(UART_NUM_2, buffer_size, buffer_size, 0, NULL, ESP_INTR_FLAG_SHARED), err, TAG, "uart_driver_install failed");\n    }\n\n    return &p_module_ins->module_base;\n\nerr:\n    free(p_module_ins);\n    return NULL;\n}\n')),(0,o.yg)("p",null,"The above is our implementation of the ",(0,o.yg)("inlineCode",{parentName:"p"},"instance")," functions. It allocates memory for a struct ",(0,o.yg)("inlineCode",{parentName:"p"},"tf_module_uart_alarm_t")," which we define for holding the parameters of this FM, like the members of a C++  class. In the struct ",(0,o.yg)("inlineCode",{parentName:"p"},"tf_module_uart_alarm_t")," the 1st field is important - ",(0,o.yg)("inlineCode",{parentName:"p"},"tf_module_t module_base"),", in the perspective of C++ programming, ",(0,o.yg)("inlineCode",{parentName:"p"},"tf_module_t")," is the parent class for all the FMs. The ",(0,o.yg)("inlineCode",{parentName:"p"},"instance")," function just give the TFE a pointer to a ",(0,o.yg)("inlineCode",{parentName:"p"},"tf_module_t")," struct. "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"// in tf_module_uart_alarm.h\ntypedef struct {\n    tf_module_t module_base;\n    int input_evt_id;           //this can also be the module instance id\n    int output_format;          //default 0, see comment above\n    bool include_big_image;     //default: false\n    bool include_small_image;   //default: false\n    bool include_boxes;         //default: false, coming soon\n} tf_module_uart_alarm_t;\n\n// in tf_module_uart_alarm.c\ntf_module_t *tf_module_uart_alarm_instance(void)\n{\n    ...\n    return &p_module_ins->module_base;\n    ...\n}\n")),(0,o.yg)("p",null,"Two members of ",(0,o.yg)("inlineCode",{parentName:"p"},"tf_module_t")," must be assigned. "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"// in tf_module_uart_alarm.c\ntf_module_t *tf_module_uart_alarm_instance(void)\n{\n    ...\n    p_module_ins->module_base.p_module = p_module_ins;\n    p_module_ins->module_base.ops = &__g_module_ops;\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"p_module")," - a pointer that refers to the instance of the FM itself, this is used for the ",(0,o.yg)("inlineCode",{parentName:"p"},"destroy")," function to get a handler of the instance and release the memory of it.\n",(0,o.yg)("inlineCode",{parentName:"p"},"ops")," - a struct that contains API functions for operating the FM by the TFE, we will talk this later."),(0,o.yg)("p",null,"The rest of the instance function is to initialize the hardware and the stuff related to your logic of your FM."),(0,o.yg)("p",null,"One thing needs a mention is that, the FM may be instanced multiple times. You need to handle the re-enter of the ",(0,o.yg)("inlineCode",{parentName:"p"},"instance")," function, and if your FM doesn't support multiple instances, you need to return a NULL pointer for the 2nd call of the ",(0,o.yg)("inlineCode",{parentName:"p"},"instance")," function."),(0,o.yg)("p",null,"In this ",(0,o.yg)("inlineCode",{parentName:"p"},"uart alarmer")," example, we will use reference counter to handle the re-enter logic."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {\n        // the 1st time instance, we should init the hardware\n        esp_err_t ret;\n        uart_config_t uart_config = {\n            .baud_rate = 115200,\n            .data_bits = UART_DATA_8_BITS,\n            .parity = UART_PARITY_DISABLE,\n            .stop_bits = UART_STOP_BITS_1,\n            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,\n        };\n        const int buffer_size = 2 * 1024;\n        ESP_GOTO_ON_ERROR(uart_param_config(UART_NUM_2, &uart_config), err, TAG, "uart_param_config failed");\n        ESP_GOTO_ON_ERROR(uart_set_pin(UART_NUM_2, GPIO_NUM_19, GPIO_NUM_20, -1, -1), err, TAG, "uart_set_pin failed");\n        ESP_GOTO_ON_ERROR(uart_driver_install(UART_NUM_2, buffer_size, buffer_size, 0, NULL, ESP_INTR_FLAG_SHARED), err, TAG, "uart_driver_install failed");\n    }\n')),(0,o.yg)("h3",{id:"32-destroy"},"3.2 Destroy"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'void tf_module_uart_alarm_destroy(tf_module_t *p_module_base)\n{\n    if (p_module_base) {\n        if (atomic_fetch_sub(&g_ins_cnt, 1) <= 1) {\n            // this is the last destroy call, de-init the uart\n            uart_driver_delete(UART_NUM_2);\n            ESP_LOGI(TAG, "uart driver is deleted.");\n        }\n        if (p_module_base->p_module) {\n            free(p_module_base->p_module);\n        }\n    }\n}\n')),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"destroy")," is always simple \ud83d\ude02 We just need to free the memory, and de-init the hardware if necessary."),(0,o.yg)("h2",{id:"4-implement-the-operations"},"4. Implement the operations"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"ops")," member of our parent class is defined as the following,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c"},"struct tf_module_ops\n{\n    int (*start)(void *p_module);\n    int (*stop)(void *p_module);\n    int (*cfg)(void *p_module, cJSON *p_json);\n    int (*msgs_sub_set)(void *p_module, int evt_id);\n    int (*msgs_pub_set)(void *p_module, int output_index, int *p_evt_id, int num);\n};\n")),(0,o.yg)("p",null,"When the TFE initialize the FM, it will call these functions in the following order, ",(0,o.yg)("inlineCode",{parentName:"p"},"cfg")," -> ",(0,o.yg)("inlineCode",{parentName:"p"},"msgs_sub_set")," -> ",(0,o.yg)("inlineCode",{parentName:"p"},"msgs_pub_set")," -> ",(0,o.yg)("inlineCode",{parentName:"p"},"start")," -> ",(0,o.yg)("inlineCode",{parentName:"p"},"stop"),"."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"cfg")," - take the paramers from the task flow json, use these parameters to configure your FM"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"msgs_sub_set")," - create the connection to the up-stream FM, by registering an event handler to the event id of the up-stream FM. The input parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"evt_id")," is prepared by the TFE by extracting from the task flow json. The 1st parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"p_module")," is the pointer to the FM instance itself."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"msgs_pub_set")," - store the connections to the down-stream FMs, if this FM has no output, we can leave this function empty. The 1st parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"p_module")," is the pointer to the FM instance itself. The 2nd parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"output_index")," is the port number, e.g. this FM has 2 outputs, ",(0,o.yg)("inlineCode",{parentName:"p"},"msgs_pub_set")," will be called twice, with ",(0,o.yg)("inlineCode",{parentName:"p"},"output_index")," = 0 and 1 successively. The 3rd parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"p_evt_id")," is a pointer to an array which holds all the event ids of the down-stream FMs on this port, the size of the array is ",(0,o.yg)("inlineCode",{parentName:"p"},"num")," which is the last parameter."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"start")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"stop")," - are just their literal meanings. They all take in the ",(0,o.yg)("inlineCode",{parentName:"p"},"p_module")," as parameter which is the pointer to the FM instance itself."),(0,o.yg)("h3",{id:"41-cfg"},"4.1 cfg"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'static int __cfg(void *p_module, cJSON *p_json)\n{\n    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;\n\n    cJSON *output_format = cJSON_GetObjectItem(p_json, "output_format");\n    if (output_format == NULL || !cJSON_IsNumber(output_format))\n    {\n        ESP_LOGE(TAG, "params output_format missing, default 0 (binary output)");\n        p_module_ins->output_format = 0;\n    } else {\n        ESP_LOGI(TAG, "params output_format=%d", output_format->valueint);\n        p_module_ins->output_format = output_format->valueint;\n    }\n\n    cJSON *include_big_image = cJSON_GetObjectItem(p_json, "include_big_image");\n    if (include_big_image == NULL || !cJSON_IsBool(include_big_image))\n    {\n        ESP_LOGE(TAG, "params include_big_image missing, default false");\n        p_module_ins->include_big_image = false;\n    } else {\n        ESP_LOGI(TAG, "params include_big_image=%s", cJSON_IsTrue(include_big_image)?"true":"false");\n        p_module_ins->include_big_image = cJSON_IsTrue(include_big_image);\n    }\n\n    cJSON *include_small_image = cJSON_GetObjectItem(p_json, "include_small_image");\n    if (include_small_image == NULL || !cJSON_IsBool(include_small_image))\n    {\n        ESP_LOGE(TAG, "params include_small_image missing, default false");\n        p_module_ins->include_small_image = false;\n    } else {\n        ESP_LOGI(TAG, "params include_small_image=%s", cJSON_IsTrue(include_small_image)?"true":"false");\n        p_module_ins->include_small_image = cJSON_IsTrue(include_small_image);\n    }\n\n    cJSON *include_boxes = cJSON_GetObjectItem(p_json, "include_boxes");\n    if (include_boxes == NULL || !cJSON_IsBool(include_boxes))\n    {\n        ESP_LOGE(TAG, "params include_boxes missing, default false");\n        p_module_ins->include_boxes = false;\n    } else {\n        ESP_LOGI(TAG, "params include_boxes=%s", cJSON_IsTrue(include_boxes)?"true":"false");\n        p_module_ins->include_boxes = cJSON_IsTrue(include_boxes);\n    }\n    return 0;\n}\n')),(0,o.yg)("p",null,"As you see, the ",(0,o.yg)("inlineCode",{parentName:"p"},"cfg")," function is just extracting field values from the cJSON object which comes from the ",(0,o.yg)("inlineCode",{parentName:"p"},"params")," field of the FM object of a task flow. e.g. The following is a simple task flow which includes the ",(0,o.yg)("inlineCode",{parentName:"p"},"uart alarmer")," FM."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "tlid": 3,\n  "ctd": 3,\n  "tn": "Local Human Detection",\n  "type": 0,\n  "task_flow": [\n    {\n      "id": 1,\n      "type": "ai camera",\n      "index": 0,\n      "version": "1.0.0",\n      "params": {\n        "model_type": 1,\n        "modes": 0,\n        "model": {\n          "arguments": {\n            "iou": 45,\n            "conf": 50\n          }\n        },\n        "conditions": [\n          {\n            "class": "person",\n            "mode": 1,\n            "type": 2,\n            "num": 0\n          }\n        ],\n        "conditions_combo": 0,\n        "silent_period": {\n          "silence_duration": 5\n        },\n        "output_type": 0,\n        "shutter": 0\n      },\n      "wires": [\n        [2]\n      ]\n    },\n    {\n      "id": 2,\n      "type": "alarm trigger",\n      "index": 1,\n      "version": "1.0.0",\n      "params": {\n        "text": "human detected",\n        "audio": ""\n      },\n      "wires": [\n        [3]\n      ]\n    },\n    {\n      "id": 3,\n      "type": "uart alarm",\n      "index": 2,\n      "version": "1.0.0",\n      "params": {\n        "output_format": 1,\n        "include_big_image": false,\n        "include_small_image": false\n      },\n      "wires": []\n    }\n  ]\n}\n')),(0,o.yg)("p",null,"In the above task flow, the ",(0,o.yg)("inlineCode",{parentName:"p"},"params")," for ",(0,o.yg)("inlineCode",{parentName:"p"},"uart alarmer")," is "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "output_format": 1,\n  "include_big_image": false,\n  "include_small_image": false\n}\n')),(0,o.yg)("p",null,"We analyze the cJSON, extract values we need and store them into the module instance typically."),(0,o.yg)("h3",{id:"42-msgs_sub_set"},"4.2 msgs_sub_set"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"static int __msgs_sub_set(void *p_module, int evt_id)\n{\n    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;\n    p_module_ins->input_evt_id = evt_id;\n    return tf_event_handler_register(evt_id, __event_handler, p_module_ins);\n}\n")),(0,o.yg)("p",null,"Mark down the event id of the up-stream FM for future use, and register an event handler for the event."),(0,o.yg)("h3",{id:"43-event-handler"},"4.3 event handler"),(0,o.yg)("p",null,"In the ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/watcher_software_framework"},"Watcher Software Framework")," we learned that the data flow is driven by an event loop. Basically a FM will receive data from its event handler, then it consumes the data, does calculations, gets some result. It needs to post the result into the event loop in the end - the target is the down-stream FMs who's interested in the data of this FM."),(0,o.yg)("p",null,"In this ",(0,o.yg)("inlineCode",{parentName:"p"},"uart alarmer")," example, we consume data from an alarm trigger FM which has the output data type ",(0,o.yg)("inlineCode",{parentName:"p"},"TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT"),".  Since the uart data preparation is simple, we do all the data generation in the event loop handler. This is not recommended though, if your data processing is time consuming or IO eager. In that case, you need to create a worker task (thread) to do the background processing."),(0,o.yg)("p",null,"We prepare a binary output buffer or a JSON string according to the input parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"output_format"),". Finally we write these data into the UART. Our FM has only one output which is the hardware, not another FM, in this reason our ",(0,o.yg)("inlineCode",{parentName:"p"},"msgs_pub_set")," is dummy one. In the end, we need to release the data coming from the event loop, the reason will be explained in the next section."),(0,o.yg)("h3",{id:"44-msgs_pub_set"},"4.4 msgs_pub_set"),(0,o.yg)("p",null,"In this example the ",(0,o.yg)("inlineCode",{parentName:"p"},"msgs_pub_set")," is dummy because our FM has no down-stream consumer. Let's take the ",(0,o.yg)("inlineCode",{parentName:"p"},"ai camera")," FM as an example."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'// in tf_module_ai_camera.c\nstatic int __msgs_pub_set(void *p_module, int output_index, int *p_evt_id, int num)\n{\n    tf_module_ai_camera_t *p_module_ins = (tf_module_ai_camera_t *)p_module;\n    __data_lock(p_module_ins);\n    if (output_index == 0 && num > 0)\n    {\n        p_module_ins->p_output_evt_id = (int *)tf_malloc(sizeof(int) * num);\n        if (p_module_ins->p_output_evt_id )\n        {\n            memcpy(p_module_ins->p_output_evt_id, p_evt_id, sizeof(int) * num);\n            p_module_ins->output_evt_num = num;\n        } else {\n            ESP_LOGE(TAG, "Failed to malloc p_output_evt_id");\n            p_module_ins->output_evt_num = 0;\n        }\n    }\n    else\n    {\n        ESP_LOGW(TAG, "Only support output port 0, ignore %d", output_index);\n    }\n    __data_unlock(p_module_ins);\n    return 0;\n}\n')),(0,o.yg)("p",null,"It's not complicated but just store the event ids into the FM instance's structure. This is where you need to add a member field into your FM's type struct, in this case ",(0,o.yg)("inlineCode",{parentName:"p"},"tf_module_ai_camera_t"),"."),(0,o.yg)("p",null,"When we gonna use these event ids? The moment that data is generated, and passes through the time gating. In the example of ",(0,o.yg)("inlineCode",{parentName:"p"},"ai camera"),", the data originated from the SPI output of the Himax SoC which runs the local AI inference, and passes a few condition gate, if all the conditions are met, the data then reaches the time that needs to be posted into the event loop."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'// in tf_module_ai_camera.c\n...\n                    for (int i = 0; i < p_module_ins->output_evt_num; i++)\n                    {\n                        tf_data_image_copy(&p_module_ins->output_data.img_small, &info.img);\n                        tf_data_inference_copy(&p_module_ins->output_data.inference, &info.inference);\n\n                        ret = tf_event_post(p_module_ins->p_output_evt_id[i], &p_module_ins->output_data, sizeof(p_module_ins->output_data), pdMS_TO_TICKS(100));\n                        if( ret != ESP_OK) {\n                            ESP_LOGE(TAG, "Failed to post event %d", p_module_ins->p_output_evt_id[i]);\n                            tf_data_free(&p_module_ins->output_data);\n                        } else {\n                            ESP_LOGI(TAG, "Output -> %d", p_module_ins->p_output_evt_id[i]);\n                        }\n                    }\n...\n')),(0,o.yg)("p",null,"We need to post to every subscriber of our output. As you can see, we make a copy of the data for every subscriber."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"THE RULE OF MEMORY ALLOCATION AND RELEASE")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The data maker FM does the memory allocation for each subscriber"),(0,o.yg)("li",{parentName:"ul"},"The data consumer FM does the memory release after the data is used up.")),(0,o.yg)("h3",{id:"45-start-and-stop"},"4.5 start and stop"),(0,o.yg)("p",null,"These are runtime controls for the FM, to support flow pause/resume in the future. Currently you can make the FM run after it's instanced, but we still suggest split logics into FM's life cycle management and FM's runtime control."),(0,o.yg)("h2",{id:"5-test"},"5. Test"),(0,o.yg)("p",null,"Now we have our ",(0,o.yg)("inlineCode",{parentName:"p"},"uart alarmer")," FM, before we pull a request, how could we test it locally."),(0,o.yg)("p",null,"We implement a console command to issue a task flow locally."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'SenseCAP> help taskflow\ntaskflow  [-iej] [-f <string>]\n  import taskflow by json string or SD file, eg:taskflow -i -f "test.json".\n\nexport taskflow to stdout or SD file, eg: taskflow -e -f "test.json"\n  -i, --import  import taskflow\n  -e, --export  export taskflow\n  -f, --file=<string>  File path, import or export taskflow json string by SD, eg: test.json\n    -j, --json  import taskflow json string by stdin\n')),(0,o.yg)("p",null,"Please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/build_watcher_development_environment"},"Build the Watcher Development Environment")," - ",(0,o.yg)("inlineCode",{parentName:"p"},"5. Monitor the log output")," to get the console. Prepare a task flow with space and white characters removed, and issue the task flow with,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'taskflow -i -j<enter>\nPlease input taskflow json:\n#<paste your task flow json here, for an example>\n{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3]]},{"id":3,"type":"uart alarm","index":2,"version":"1.0.0","params":{"output_format":1},"wires":[]}]}\n')),(0,o.yg)("p",null,"How to compose a task flow? In the ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/watcher_software_framework"},"Watcher Software Framework")," we introduced every FM and their parameters. Composing a task flow is pretty much drawing wires between FM blocks, like the Node-RED."),(0,o.yg)("p",null,"Before we have a GUI for composing the task flow, we can use the export command to collect examples. Just use the Mobile App to issue a flow with a local alarm function enabled (RGB light), when the flow is running, export the task flow with,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"taskflow -e\n")),(0,o.yg)("p",null,"This command will export the running task flow to the console. If the task flow is super long its output might be interrupted by other log, in this case we need a TF card. Format the TF card into FAT/exFAT file system, plug it into the Watcher. Now we can export the running task flow into the TF card,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"taskflow -e -f tf1.json\n# only support file name in the root dir\n# please don't specify leading dir in the path, the command can't create dir\n")),(0,o.yg)("p",null,"Now you have examples, modify one of the alarmer FM (generally it's the last FM), replace it with your ",(0,o.yg)("inlineCode",{parentName:"p"},"uart alarmer")," FM, add a few parameters to the JSON object of your FM, use a JSON editor to remove the white space, and import it with the ",(0,o.yg)("inlineCode",{parentName:"p"},"taskflow -i -j")," command above."),(0,o.yg)("p",null,"That's it, enjoy the exploration."),(0,o.yg)("h2",{id:"appendix---more-task-flow-examples"},"Appendix - More task flow examples"),(0,o.yg)("p",null,"Here we provide a few more task flow examples that you can start with."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{"tlid":1,"ctd":1,"tn":"Local Gesture Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":3,"modes":0,"model":{"arguments":{"iou":45,"conf":65}},"conditions":[{"class":"paper","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"scissors detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{"tlid":1719396404172,"ctd":1719396419707,"tn":"Man with glasses spotted, notify immediately","task_flow":[{"id":753589649,"type":"ai camera","type_id":0,"index":0,"vision":"0.0.1","params":{"model_type":0,"model":{"model_id":"60086","version":"1.0.0","arguments":{"size":1644.08,"url":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/model/1705306215159_jVQf4u_swift_yolo_nano_person_192_int8_vela(2).tflite","icon":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/pic/1705306138275_iykYXV_detection_person.png","task":"detect","createdAt":1705306231,"updatedAt":null},"model_name":"Person Detection--Swift YOLO","model_format":"tfLite","ai_framework":"6","author":"SenseCraft AI","description":"The model is a Swift-YOLO model trained on the person detection dataset. It can detect human body  existence.","task":1,"algorithm":"Object Dectect(TensorRT,SMALL,COCO)","classes":["person"]},"modes":0,"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"time_period":{"repeat":[1,1,1,1,1,1,1],"time_start":"00:00:00","time_end":"23:59:59"},"silence_duration":60},"output_type":1,"shutter":0},"wires":[[193818631]]},{"id":193818631,"type":"image analyzer","type_id":3,"index":1,"version":"0.0.1","params":{"url":"","header":"","body":{"prompt":"Is there a man with glasses?","type":1,"audio_txt":"Man with glasses"}},"wires":[[420037647,452707375]]},{"id":452707375,"type_id":99,"type":"sensecraft alarm","index":2,"version":"0.0.1","params":{"silence_duration":10,"text":"Man with glasses"},"wires":[]},{"id":420037647,"type_id":5,"type":"local alarm","index":3,"version":"0.0.1","params":{"sound":1,"rgb":1,"img":1,"text":1,"duration":10},"wires":[]}],"type":0}\n')),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}_.isMDXComponent=!0}}]);
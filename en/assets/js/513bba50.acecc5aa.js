(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[52751],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=u(n),k=o,m=s["".concat(c,".").concat(k)]||s[k]||p[k]||l;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=s;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63492:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c},default:function(){return d}});var r=n(22122),o=n(19756),l=(n(67294),n(3905)),i={title:"Taro.createBLEConnection(option)",sidebar_label:"createBLEConnection"},a={unversionedId:"apis/device/ble/createBLEConnection",id:"version-2.x/apis/device/ble/createBLEConnection",isDocsHomePage:!1,title:"Taro.createBLEConnection(option)",description:"\u8fde\u63a5\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u3002",source:"@site/versioned_docs/version-2.x/apis/device/ble/createBLEConnection.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/createBLEConnection",permalink:"/taro/en/docs/2.x/apis/device/ble/createBLEConnection",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/ble/createBLEConnection.md",version:"2.x",sidebar_label:"createBLEConnection",frontMatter:{title:"Taro.createBLEConnection(option)",sidebar_label:"createBLEConnection"},sidebar:"version-2.x/API",previous:{title:"Taro.getBLEDeviceCharacteristics(option)",permalink:"/taro/en/docs/2.x/apis/device/ble/getBLEDeviceCharacteristics"},next:{title:"Taro.closeBLEConnection(option)",permalink:"/taro/en/docs/2.x/apis/device/ble/closeBLEConnection"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8fde\u63a5\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u3002"),(0,l.kt)("p",null,"\u82e5\u5c0f\u7a0b\u5e8f\u5728\u4e4b\u524d\u5df2\u6709\u641c\u7d22\u8fc7\u67d0\u4e2a\u84dd\u7259\u8bbe\u5907\uff0c\u5e76\u6210\u529f\u5efa\u7acb\u8fde\u63a5\uff0c\u53ef\u76f4\u63a5\u4f20\u5165\u4e4b\u524d\u641c\u7d22\u83b7\u53d6\u7684 deviceId \u76f4\u63a5\u5c1d\u8bd5\u8fde\u63a5\u8be5\u8bbe\u5907\uff0c\u65e0\u9700\u8fdb\u884c\u641c\u7d22\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u4fdd\u8bc1\u5c3d\u91cf\u6210\u5bf9\u7684\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"createBLEConnection")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"closeBLEConnection")," \u63a5\u53e3\u3002\u5b89\u5353\u5982\u679c\u591a\u6b21\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"createBLEConnection")," \u521b\u5efa\u8fde\u63a5\uff0c\u6709\u53ef\u80fd\u5bfc\u81f4\u7cfb\u7edf\u6301\u6709\u540c\u4e00\u8bbe\u5907\u591a\u4e2a\u8fde\u63a5\u7684\u5b9e\u4f8b\uff0c\u5bfc\u81f4\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"closeBLEConnection")," \u7684\u65f6\u5019\u5e76\u4e0d\u80fd\u771f\u6b63\u7684\u65ad\u5f00\u4e0e\u8bbe\u5907\u7684\u8fde\u63a5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u84dd\u7259\u8fde\u63a5\u968f\u65f6\u53ef\u80fd\u65ad\u5f00\uff0c\u5efa\u8bae\u76d1\u542c Taro.onBLEConnectionStateChange \u56de\u8c03\u4e8b\u4ef6\uff0c\u5f53\u84dd\u7259\u8bbe\u5907\u65ad\u5f00\u65f6\u6309\u9700\u6267\u884c\u91cd\u8fde\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u5bf9\u672a\u8fde\u63a5\u7684\u8bbe\u5907\u6216\u5df2\u65ad\u5f00\u8fde\u63a5\u7684\u8bbe\u5907\u8c03\u7528\u6570\u636e\u8bfb\u5199\u64cd\u4f5c\u7684\u63a5\u53e3\uff0c\u4f1a\u8fd4\u56de 10006 \u9519\u8bef\uff0c\u5efa\u8bae\u8fdb\u884c\u91cd\u8fde\u64cd\u4f5c\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.createBLEConnection.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<Promised>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"promised"},"Promised"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"deviceId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u7528\u4e8e\u533a\u5206\u8bbe\u5907\u7684 id")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"timeout"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\uff0c\u4e0d\u586b\u8868\u793a\u4e0d\u4f1a\u8d85\u65f6")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createBLEConnection({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.createBLEConnection"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);
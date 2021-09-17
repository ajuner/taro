(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68415],{22122:function(t,e,n){"use strict";function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return l}})},19756:function(t,e,n){"use strict";function l(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return l}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return p}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),i=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=i(t.components);return l.createElement(c.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),s=i(n),p=r,v=s["".concat(c,".").concat(p)]||s[p]||k[p]||o;return n?l.createElement(v,a(a({ref:e},d),{},{components:n})):l.createElement(v,a({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=s;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var i=2;i<o;i++)a[i]=n[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},62575:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var l=n(22122),r=n(19756),o=(n(67294),n(3905)),a={title:"Taro.onBluetoothDeviceFound(callback)",sidebar_label:"onBluetoothDeviceFound"},u={unversionedId:"apis/device/bluetooth/onBluetoothDeviceFound",id:"version-3.x/apis/device/bluetooth/onBluetoothDeviceFound",isDocsHomePage:!1,title:"Taro.onBluetoothDeviceFound(callback)",description:"\u76d1\u542c\u5bfb\u627e\u5230\u65b0\u8bbe\u5907\u7684\u4e8b\u4ef6",source:"@site/versioned_docs/version-3.x/apis/device/bluetooth/onBluetoothDeviceFound.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/onBluetoothDeviceFound",permalink:"/taro/docs/apis/device/bluetooth/onBluetoothDeviceFound",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/bluetooth/onBluetoothDeviceFound.md",version:"3.x",sidebar_label:"onBluetoothDeviceFound",frontMatter:{title:"Taro.onBluetoothDeviceFound(callback)",sidebar_label:"onBluetoothDeviceFound"},sidebar:"version-3.x/API",previous:{title:"Taro.openBluetoothAdapter(option)",permalink:"/taro/docs/apis/device/bluetooth/openBluetoothAdapter"},next:{title:"Taro.onBluetoothAdapterStateChange(callback)",permalink:"/taro/docs/apis/device/bluetooth/onBluetoothAdapterStateChange"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]},{value:"CallbackResultBlueToothDevice",id:"callbackresultbluetoothdevice",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,l.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u76d1\u542c\u5bfb\u627e\u5230\u65b0\u8bbe\u5907\u7684\u4e8b\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u82e5\u5728 Taro.onBluetoothDeviceFound \u56de\u8c03\u4e86\u67d0\u4e2a\u8bbe\u5907\uff0c\u5219\u6b64\u8bbe\u5907\u4f1a\u6dfb\u52a0\u5230 Taro.getBluetoothDevices \u63a5\u53e3\u83b7\u53d6\u5230\u7684\u6570\u7ec4\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u5353\u4e0b\u90e8\u5206\u673a\u578b\u9700\u8981\u6709\u4f4d\u7f6e\u6743\u9650\u624d\u80fd\u641c\u7d22\u5230\u8bbe\u5907\uff0c\u9700\u7559\u610f\u662f\u5426\u5f00\u542f\u4e86\u4f4d\u7f6e\u6743\u9650")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("p",null,"\u5bfb\u627e\u5230\u65b0\u8bbe\u5907\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"result"),(0,o.kt)("td",null,(0,o.kt)("code",null,"CallbackResult"))))),(0,o.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"devices"),(0,o.kt)("td",null,(0,o.kt)("code",null,"CallbackResultBlueToothDevice[]")),(0,o.kt)("td",null,"\u65b0\u641c\u7d22\u5230\u7684\u8bbe\u5907\u5217\u8868")))),(0,o.kt)("h3",{id:"callbackresultbluetoothdevice"},"CallbackResultBlueToothDevice"),(0,o.kt)("p",null,"\u65b0\u641c\u7d22\u5230\u7684\u8bbe\u5907"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"RSSI"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u4fe1\u53f7\u5f3a\u5ea6")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"advertisData"),(0,o.kt)("td",null,(0,o.kt)("code",null,"ArrayBuffer")),(0,o.kt)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ManufacturerData \u6570\u636e\u6bb5\u3002")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"advertisServiceUUIDs"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string[]")),(0,o.kt)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ServiceUUIDs \u6570\u636e\u6bb5")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"deviceId"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u7528\u4e8e\u533a\u5206\u8bbe\u5907\u7684 id")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"localName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 LocalName \u6570\u636e\u6bb5")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"name"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"\u84dd\u7259\u8bbe\u5907\u540d\u79f0\uff0c\u67d0\u4e9b\u8bbe\u5907\u53ef\u80fd\u6ca1\u6709")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"serviceData"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Record<string, any>")),(0,o.kt)("td",null,"\u5f53\u524d\u84dd\u7259\u8bbe\u5907\u7684\u5e7f\u64ad\u6570\u636e\u6bb5\u4e2d\u7684 ServiceData \u6570\u636e\u6bb5")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// ArrayBuffer\u8f6c16\u8fdb\u5ea6\u5b57\u7b26\u4e32\u793a\u4f8b\nfunction ab2hex(buffer) {\n  var hexArr = Array.prototype.map.call(\n    new Uint8Array(buffer),\n    function(bit) {\n      return ('00' + bit.toString(16)).slice(-2)\n    }\n  )\n  return hexArr.join('');\n}\nTaro.onBluetoothDeviceFound(function (res) {\n  var devices = res.devices;\n  console.log('new device list has founded')\n  console.dir(devices)\n  console.log(ab2hex(devices[0].advertisData))\n})\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.onBluetoothDeviceFound"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);
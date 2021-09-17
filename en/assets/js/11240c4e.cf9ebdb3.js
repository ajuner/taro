(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23768],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),h=o,k=d["".concat(u,".").concat(h)]||d[h]||s[h]||l;return n?r.createElement(k,a(a({ref:e},p),{},{components:n})):r.createElement(k,a({ref:e},p))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91675:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(22122),o=n(19756),l=(n(67294),n(3905)),a={title:"Taro.openBluetoothAdapter(option)",sidebar_label:"openBluetoothAdapter"},i={unversionedId:"apis/device/bluetooth/openBluetoothAdapter",id:"version-3.x/apis/device/bluetooth/openBluetoothAdapter",isDocsHomePage:!1,title:"Taro.openBluetoothAdapter(option)",description:"Initializes the Bluetooth module.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/bluetooth/openBluetoothAdapter.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/openBluetoothAdapter",permalink:"/taro/en/docs/apis/device/bluetooth/openBluetoothAdapter",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/bluetooth/openBluetoothAdapter.md",version:"3.x",sidebar_label:"openBluetoothAdapter",frontMatter:{title:"Taro.openBluetoothAdapter(option)",sidebar_label:"openBluetoothAdapter"},sidebar:"version-3.x/API",previous:{title:"Taro.startBluetoothDevicesDiscovery(option)",permalink:"/taro/en/docs/apis/device/bluetooth/startBluetoothDevicesDiscovery"},next:{title:"Taro.onBluetoothDeviceFound(callback)",permalink:"/taro/en/docs/apis/device/bluetooth/onBluetoothDeviceFound"}},u=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]},{value:"state",id:"state",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],c={toc:u};function p(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Initializes the Bluetooth module."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notes")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Other Bluetooth-related APIs can only be used after ",(0,l.kt)("inlineCode",{parentName:"li"},"Taro.openBluetoothAdapter")," is called. Otherwise, the API will return an error (errCode=10000)."),(0,l.kt)("li",{parentName:"ul"},"When the user's Bluetooth switch is off or the phone does not support Bluetooth, calls to ",(0,l.kt)("inlineCode",{parentName:"li"},"Taro.openBluetoothAdapter")," will return an error (errCode=10001). This indicates the phone's Bluetooth feature is unavailable. In such cases, after initializing the Mini Program Bluetooth module, you can use ",(0,l.kt)("inlineCode",{parentName:"li"},"Taro.onBluetoothAdapterStateChange")," to listen on changes to the phone's Bluetooth status. You can also call all Bluetooth module APIs.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.openBluetoothAdapter.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<CallbackResult>\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: Result) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h3",{id:"state"},"state"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"0"),(0,l.kt)("td",null,"Unknown")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"Reseting")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"Not support")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"Unauthorised")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"Not open")))),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.openBluetoothAdapter({\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.openBluetoothAdapter"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);
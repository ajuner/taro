(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[6775],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,k=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38832:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},l={unversionedId:"apis/device/motion/onDeviceMotionChange",id:"apis/device/motion/onDeviceMotionChange",isDocsHomePage:!1,title:"Taro.onDeviceMotionChange(callback)",description:"Listens on the device orientation change event. The frequency is based on the Taro.startDeviceMotionListening() interval parameter. You can use Taro.stopDeviceMotionListening() stop listening.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/device/motion/onDeviceMotionChange.md",sourceDirName:"apis/device/motion",slug:"/apis/device/motion/onDeviceMotionChange",permalink:"/taro/en/docs/next/apis/device/motion/onDeviceMotionChange",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/motion/onDeviceMotionChange.md",version:"current",sidebar_label:"onDeviceMotionChange",frontMatter:{title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},sidebar:"API",previous:{title:"Taro.startDeviceMotionListening(option)",permalink:"/taro/en/docs/next/apis/device/motion/startDeviceMotionListening"},next:{title:"Taro.offDeviceMotionChange(callback)",permalink:"/taro/en/docs/next/apis/device/motion/offDeviceMotionChange"}},c=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"API Support",id:"api-support",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Listens on the device orientation change event. The frequency is based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.startDeviceMotionListening()")," interval parameter. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.stopDeviceMotionListening()")," stop listening."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/motion/wx.onDeviceMotionChange.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("p",null,"The callback function for the device orientation change event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"result"),(0,o.kt)("td",null,(0,o.kt)("code",null,"CallbackResult"))))),(0,o.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"alpha"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"When the phone coordinate X/Y and the earth coordinate X/Y coincide, the angle of rotation around the Z axis is alpha. The range is [0, 2*PI). It is positive when the phone rotates counterclockwise.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"beta"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"When the phone coordinate Y/Z and the earth coordinate Y/Z coincide, the angle of rotation around the X axis is beta. The range is [-1*PI, PI). It is positive when the phone rotates with its top toward the earth surface or the user.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"gamma"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"When the phone coordinate X/Z and the earth coordinate X/Z coincide, the angle of rotation around the Y axis is gamma. The range is [-1*PI/2, PI/2). It is positive when the phone rotates with its right side toward the earth surface.")))),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.onDeviceMotionChange"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);
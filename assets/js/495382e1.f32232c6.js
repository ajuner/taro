(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[7432],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},19756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3610:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Taro.reportMonitor(name, value)",sidebar_label:"reportMonitor"},l={unversionedId:"apis/open-api/report/reportMonitor",id:"version-3.x/apis/open-api/report/reportMonitor",isDocsHomePage:!1,title:"Taro.reportMonitor(name, value)",description:"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u6570\u636e\u76d1\u63a7\u4e0a\u62a5\u63a5\u53e3\u3002",source:"@site/versioned_docs/version-3.x/apis/open-api/report/reportMonitor.md",sourceDirName:"apis/open-api/report",slug:"/apis/open-api/report/reportMonitor",permalink:"/taro/docs/apis/open-api/report/reportMonitor",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/report/reportMonitor.md",version:"3.x",sidebar_label:"reportMonitor",frontMatter:{title:"Taro.reportMonitor(name, value)",sidebar_label:"reportMonitor"},sidebar:"version-3.x/API",previous:{title:"UserInfo",permalink:"/taro/docs/apis/open-api/user-info/UserInfo"},next:{title:"Taro.reportAnalytics(eventName, data)",permalink:"/taro/docs/apis/open-api/data-analysis/reportAnalytics"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],c={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u81ea\u5b9a\u4e49\u4e1a\u52a1\u6570\u636e\u76d1\u63a7\u4e0a\u62a5\u63a5\u53e3\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u8bf4\u660e"),"\n\u4f7f\u7528\u524d\uff0c\u9700\u8981\u5728\u300c\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0-\u8fd0\u7ef4\u4e2d\u5fc3-\u6027\u80fd\u76d1\u63a7-\u4e1a\u52a1\u6570\u636e\u76d1\u63a7\u300d\u4e2d\u65b0\u5efa\u76d1\u63a7\u4e8b\u4ef6\uff0c\u914d\u7f6e\u76d1\u63a7\u63cf\u8ff0\u4e0e\u544a\u8b66\u7c7b\u578b\u3002\u6bcf\u4e00\u4e2a\u76d1\u63a7\u4e8b\u4ef6\u5bf9\u5e94\u552f\u4e00\u7684\u76d1\u63a7ID\uff0c\u5f00\u53d1\u8005\u6700\u591a\u53ef\u4ee5\u521b\u5efa128\u4e2a\u76d1\u63a7\u4e8b\u4ef6\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/report/wx.reportMonitor.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(name: string, value: number) => void\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"name"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u76d1\u63a7ID\uff0c\u5728\u300c\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u300d\u65b0\u5efa\u6570\u636e\u6307\u6807\u540e\u83b7\u5f97")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u4e0a\u62a5\u6570\u503c\uff0c\u7ecf\u5904\u7406\u540e\u4f1a\u5728\u300c\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u300d\u4e0a\u5c55\u793a\u6bcf\u5206\u949f\u7684\u4e0a\u62a5\u603b\u91cf")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.reportMonitor('1', 1)\n")),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.reportMonitor"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);
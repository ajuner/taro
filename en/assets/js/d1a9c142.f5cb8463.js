(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[79755],{22122:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}})},19756:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return a}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),k=u(n),d=r,m=k["".concat(p,".").concat(d)]||k[d]||g[d]||l;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},23041:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o={title:"LogManager",sidebar_label:"LogManager"},i={unversionedId:"apis/base/debug/LogManager",id:"version-2.x/apis/base/debug/LogManager",isDocsHomePage:!1,title:"LogManager",description:"\u65e5\u5fd7\u7ba1\u7406\u5668\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u901a\u8fc7 Taro.getLogManager \u83b7\u53d6\u3002",source:"@site/versioned_docs/version-2.x/apis/base/debug/LogManager.md",sourceDirName:"apis/base/debug",slug:"/apis/base/debug/LogManager",permalink:"/taro/en/docs/2.x/apis/base/debug/LogManager",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/base/debug/LogManager.md",version:"2.x",sidebar_label:"LogManager",frontMatter:{title:"LogManager",sidebar_label:"LogManager"},sidebar:"version-2.x/API",previous:{title:"Taro.getLogManager(res)",permalink:"/taro/en/docs/2.x/apis/base/debug/getLogManager"},next:{title:"RealtimeLogManager",permalink:"/taro/en/docs/2.x/apis/base/debug/RealtimeLogManager"}},p=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"debug",id:"debug",children:[]},{value:"info",id:"info",children:[]},{value:"log",id:"log",children:[]},{value:"warn",id:"warn",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-4",children:[]}],u={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u65e5\u5fd7\u7ba1\u7406\u5668\u5b9e\u4f8b\uff0c\u53ef\u4ee5\u901a\u8fc7 Taro.getLogManager \u83b7\u53d6\u3002"),(0,l.kt)("p",null,'\u4f7f\u7528\u8bf4\u660e\n\u6700\u591a\u4fdd\u5b585M\u7684\u65e5\u5fd7\u5185\u5bb9\uff0c\u8d85\u8fc75M\u540e\uff0c\u65e7\u7684\u65e5\u5fd7\u5185\u5bb9\u4f1a\u88ab\u5220\u9664\u3002\n\u5bf9\u4e8e\u5c0f\u7a0b\u5e8f\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 button \u7ec4\u4ef6\u7684 open-type="feedback" \u6765\u4e0a\u4f20\u6253\u5370\u7684\u65e5\u5fd7\u3002\n\u5bf9\u4e8e\u5c0f\u6e38\u620f\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 Taro.createFeedbackButton \u6765\u521b\u5efa\u4e0a\u4f20\u6253\u5370\u7684\u65e5\u5fd7\u7684\u6309\u94ae\u3002\n\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\u5de6\u4fa7\u83dc\u5355\u201c\u53cd\u9988\u7ba1\u7406\u201d\u9875\u9762\u67e5\u770b\u76f8\u5173\u6253\u5370\u65e5\u5fd7\u3002'),(0,l.kt)("p",null,"\u57fa\u7840\u5e93\u9ed8\u8ba4\u4f1a\u628a App\u3001Page \u7684\u751f\u547d\u5468\u671f\u51fd\u6570\u548c wx \u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u51fd\u6570\u8c03\u7528\u5199\u5165\u65e5\u5fd7\u3002"),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("h3",{id:"debug"},"debug"),(0,l.kt)("p",null,"\u5199 debug \u65e5\u5fd7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.debug.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(...args: any[]) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"args"),(0,l.kt)("td",null,(0,l.kt)("code",null,"any[]")),(0,l.kt)("td",null,"\u65e5\u5fd7\u5185\u5bb9\uff0c\u53ef\u4ee5\u6709\u4efb\u610f\u591a\u4e2a\u3002\u6bcf\u6b21\u8c03\u7528\u7684\u53c2\u6570\u7684\u603b\u5927\u5c0f\u4e0d\u8d85\u8fc7100Kb")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LogManager.debug"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"info"},"info"),(0,l.kt)("p",null,"\u5199 info \u65e5\u5fd7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.info.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(...args: any[]) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"args"),(0,l.kt)("td",null,(0,l.kt)("code",null,"any[]")),(0,l.kt)("td",null,"\u65e5\u5fd7\u5185\u5bb9\uff0c\u53ef\u4ee5\u6709\u4efb\u610f\u591a\u4e2a\u3002\u6bcf\u6b21\u8c03\u7528\u7684\u53c2\u6570\u7684\u603b\u5927\u5c0f\u4e0d\u8d85\u8fc7100Kb")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LogManager.info"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"log"},"log"),(0,l.kt)("p",null,"\u5199 log \u65e5\u5fd7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.log.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(...args: any[]) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"args"),(0,l.kt)("td",null,(0,l.kt)("code",null,"any[]")),(0,l.kt)("td",null,"\u65e5\u5fd7\u5185\u5bb9\uff0c\u53ef\u4ee5\u6709\u4efb\u610f\u591a\u4e2a\u3002\u6bcf\u6b21\u8c03\u7528\u7684\u53c2\u6570\u7684\u603b\u5927\u5c0f\u4e0d\u8d85\u8fc7100Kb")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LogManager.log"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"warn"},"warn"),(0,l.kt)("p",null,"\u5199 warn \u65e5\u5fd7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/LogManager.warn.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(...args: any[]) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"args"),(0,l.kt)("td",null,(0,l.kt)("code",null,"any[]")),(0,l.kt)("td",null,"\u65e5\u5fd7\u5185\u5bb9\uff0c\u53ef\u4ee5\u6709\u4efb\u610f\u591a\u4e2a\u3002\u6bcf\u6b21\u8c03\u7528\u7684\u53c2\u6570\u7684\u603b\u5927\u5c0f\u4e0d\u8d85\u8fc7100Kb")))),(0,l.kt)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LogManager.warn"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LogManager.debug"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LogManager.info"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LogManager.log"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"LogManager.warn"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}c.isMDXComponent=!0}}]);
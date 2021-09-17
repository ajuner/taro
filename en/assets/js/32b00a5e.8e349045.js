(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48367],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,k=d["".concat(i,".").concat(h)]||d[h]||s[h]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10301:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},p={unversionedId:"apis/base/weapp/app-event/onPageNotFound",id:"apis/base/weapp/app-event/onPageNotFound",isDocsHomePage:!1,title:"Taro.onPageNotFound(callback)",description:"Listens on the event that a page to be opened by the Mini Program does not exist. The callback timing for this event is consistent with that of App.onPageNotFound.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/weapp/app-event/onPageNotFound.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onPageNotFound",permalink:"/taro/en/docs/next/apis/base/weapp/app-event/onPageNotFound",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/weapp/app-event/onPageNotFound.md",version:"current",sidebar_label:"onPageNotFound",frontMatter:{title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},sidebar:"API",previous:{title:"Taro.getLaunchOptionsSync()",permalink:"/taro/en/docs/next/apis/base/weapp/life-cycle/getLaunchOptionsSync"},next:{title:"Taro.onError(callback)",permalink:"/taro/en/docs/next/apis/base/weapp/app-event/onError"}},i=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Result",id:"result",children:[]},{value:"Callback",id:"callback",children:[]}]},{value:"API Support",id:"api-support",children:[]}],c={toc:i};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Listens on the event that a page to be opened by the Mini Program does not exist. The callback timing for this event is consistent with that of ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/reference/api/App.html#onpagenotfoundobject-object"},(0,o.kt)("inlineCode",{parentName:"a"},"App.onPageNotFound")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Developers can implement page redirection during callback only when the callback processing is synchronous. This approach is invalid for asynchronous processing (such as the asynchronous execution of setTimeout)."),(0,o.kt)("li",{parentName:"ul"},"If the developer neither calls the ",(0,o.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/app-event/wx.onPageNotFound.html"},"Taro.onPageNotFound")," for listening nor declares App.onPageNotFound, when the redirected page does not exist, the WeChat app's native 404 page is pushed."),(0,o.kt)("li",{parentName:"ul"},"If the callback redirects to another page that does not exist, the WeChat app's native 404 page is pushed and the API is not called back again.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/app-event/wx.onPageNotFound.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"isEntryPage"),(0,o.kt)("td",null,(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",null,"Indicates whether this is the first page for this launch (for example, from sharing and other entries, the first page is the shared page configured by the developer).")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"path"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The path to the nonexistent page")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"query"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Record<string, any>")),(0,o.kt)("td",null,"The query parameter for the nonexistent page")))),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("p",null,"The callback function for the event that a page to be opened by the Mini Program does not exist."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: Result) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"res"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Result"))))),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.onPageNotFound"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);
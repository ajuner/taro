(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[98625],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(u,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71698:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={title:"Taro.getWeRunData(option)",sidebar_label:"getWeRunData"},i={unversionedId:"apis/open-api/werun/getWeRunData",id:"apis/open-api/werun/getWeRunData",isDocsHomePage:!1,title:"Taro.getWeRunData(option)",description:"Gets the user's WeRun step counts for the past 30 days. You need to call the Taro.login API before calling this API. The step counts will update when the user opens the Mini Program.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/open-api/werun/getWeRunData.md",sourceDirName:"apis/open-api/werun",slug:"/apis/open-api/werun/getWeRunData",permalink:"/taro/en/docs/next/apis/open-api/werun/getWeRunData",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/werun/getWeRunData.md",version:"current",sidebar_label:"getWeRunData",frontMatter:{title:"Taro.getWeRunData(option)",sidebar_label:"getWeRunData"},sidebar:"API",previous:{title:"Taro.startFacialRecognitionVerifyAndUploadVideo(option)",permalink:"/taro/en/docs/next/apis/open-api/facial/startFacialRecognitionVerifyAndUploadVideo"},next:{title:"Taro.requestSubscribeMessage(option)",permalink:"/taro/en/docs/next/apis/open-api/subscribe-message/requestSubscribeMessage"}},u=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallback",id:"successcallback",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],c={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Gets the user's WeRun step counts for the past 30 days. You need to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.login")," API before calling this API. The step counts will update when the user opens the Mini Program."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/werun/wx.getWeRunData.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: Result) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h3",{id:"successcallback"},"SuccessCallback"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: SuccessCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"SuccessCallbackResult"))))),(0,l.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"cloudID"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The Cloud ID corresponding to sensitive data. It is returned only in Mini Programs for which Cloud Base is enabled. The open data can be directly obtained via cloud call. See ",(0,l.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#method-cloud"},"details"),".")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"encryptedData"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The complete encrypted user data, including sensitive data. For details, see ",(0,l.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html"},"Decryption Algorithm for Encrypted Data"),". See below for the composition of the decrypted data.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"iv"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"The initial vector of the encryption algorithm. For details, see ",(0,l.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html"},"Decryption Algorithm for Encrypted Data"),".")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Call result")))),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getWeRunData({\n  success: function (res) {\n    // Decrypt the encryptedData in the developer's server to get open data.\n    const encryptedData = res.encryptedData\n    // Or directly get the open data via cloud call based on cloudID.\n    const cloudID = res.cloudID\n  }\n})\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Open Data of JSON Structure"),"\nThere are two ways to get sensitive data. One is to use the ",(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/signature.html#decryption-algorithm-for-encrypted-data"},"Decryption Algorithm for Encrypted Data"),". The acquired open data has the following json structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stepInfoList": [\n    {\n      "timestamp": 1445866601,\n      "step": 100\n    },\n    {\n      "timestamp": 1445876601,\n      "step": 120\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"stepInfoList is composed as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp, which is the data time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"step"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"WeRun step counts")))),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.getWeRunData"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);
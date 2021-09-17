(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34573],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},19756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),k=a,m=s["".concat(i,".").concat(k)]||s[k]||d[k]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},19405:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return i},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),c={title:"Taro.addInterceptor(callback)",sidebar_label:"addInterceptor"},l={unversionedId:"apis/network/request/addInterceptor",id:"version-2.x/apis/network/request/addInterceptor",isDocsHomePage:!1,title:"Taro.addInterceptor(callback)",description:"\u6700\u4f4e Taro \u7248\u672c: 1.2.16",source:"@site/versioned_docs/version-2.x/apis/network/request/addInterceptor.md",sourceDirName:"apis/network/request",slug:"/apis/network/request/addInterceptor",permalink:"/taro/en/docs/2.x/apis/network/request/addInterceptor",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/network/request/addInterceptor.md",version:"2.x",sidebar_label:"addInterceptor",frontMatter:{title:"Taro.addInterceptor(callback)",sidebar_label:"addInterceptor"},sidebar:"version-2.x/API",previous:{title:"RequestTask",permalink:"/taro/en/docs/2.x/apis/network/request/RequestTask"},next:{title:"Taro.downloadFile(option)",permalink:"/taro/en/docs/2.x/apis/network/download/downloadFile"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",children:[]},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={toc:i};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6700\u4f4e Taro \u7248\u672c: 1.2.16")),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u62e6\u622a\u5668\u5728\u8bf7\u6c42\u53d1\u51fa\u524d\u6216\u53d1\u51fa\u540e\u505a\u4e00\u4e9b\u989d\u5916\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u5728\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.request")," \u53d1\u8d77\u8bf7\u6c42\u4e4b\u524d\uff0c\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.addInterceptor")," \u65b9\u6cd5\u4e3a\u8bf7\u6c42\u6dfb\u52a0\u62e6\u622a\u5668\uff0c\u62e6\u622a\u5668\u7684\u8c03\u7528\u987a\u5e8f\u9075\u5faa\u6d0b\u8471\u6a21\u578b\u3002\n\u62e6\u622a\u5668\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u53d7 chain \u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u3002chain \u5bf9\u8c61\u4e2d\u542b\u6709 ",(0,o.kt)("strong",{parentName:"p"},"requestParmas")," \u5c5e\u6027\uff0c\u4ee3\u8868\u8bf7\u6c42\u53c2\u6570\u3002\u62e6\u622a\u5668\u5185\u6700\u540e\u9700\u8981\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"chain.proceed(requestParams)")," \u4ee5\u8c03\u7528\u4e0b\u4e00\u4e2a\u62e6\u622a\u5668\u6216\u53d1\u8d77\u8bf7\u6c42\u3002"),(0,o.kt)("p",null,"Taro \u63d0\u4f9b\u4e86\u4e24\u4e2a\u5185\u7f6e\u62e6\u622a\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"logInterceptor")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"timeoutInterceptor"),"\uff0c\u5206\u522b\u7528\u4e8e\u6253\u5370\u8bf7\u6c42\u7684\u76f8\u5173\u4fe1\u606f\u548c\u5728\u8bf7\u6c42\u8d85\u65f6\u65f6\u629b\u51fa\u9519\u8bef\u3002"),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Function) => void\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"callback"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Function"))))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const interceptor = function (chain) {\n  const requestParams = chain.requestParams\n  const { method, data, url } = requestParams\n\n  console.log(`http ${method || 'GET'} --\x3e ${url} data: `, data)\n\n  return chain.proceed(requestParams)\n    .then(res => {\n      console.log(`http <-- ${url} result:`, res)\n      return res\n    })\n  }\nTaro.addInterceptor(interceptor)\nTaro.request({ url })\n")),(0,o.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.addInterceptor(Taro.interceptors.logInterceptor)\nTaro.addInterceptor(Taro.interceptors.timeoutInterceptor)\nTaro.request({ url })\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"QQ \u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.addInterceptor"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);
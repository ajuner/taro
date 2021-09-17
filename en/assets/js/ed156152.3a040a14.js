(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59569],{22122:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},19756:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}r.d(e,{Z:function(){return n}})},3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(k,l(l({ref:e},p),{},{components:r})):n.createElement(k,l({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38478:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return p}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"Stats",sidebar_label:"Stats"},o={unversionedId:"apis/files/Stats",id:"version-3.x/apis/files/Stats",isDocsHomePage:!1,title:"Stats",description:"Describes the status of a file.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/files/Stats.md",sourceDirName:"apis/files",slug:"/apis/files/Stats",permalink:"/taro/en/docs/apis/files/Stats",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/files/Stats.md",version:"3.x",sidebar_label:"Stats",frontMatter:{title:"Stats",sidebar_label:"Stats"},sidebar:"version-3.x/API",previous:{title:"FileSystemManager",permalink:"/taro/en/docs/apis/files/FileSystemManager"},next:{title:"Taro.login(option)",permalink:"/taro/en/docs/apis/open-api/login/login"}},s=[{value:"Methods",id:"methods",children:[{value:"isDirectory",id:"isdirectory",children:[]},{value:"isFile",id:"isfile",children:[]}]},{value:"API Support",id:"api-support-2",children:[]}],c={toc:s};function p(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Describes the status of a file."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"lastAccessedTime"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,"The time when the file was last accessed or executed, in the UNIX timestamp format, corresponding to POSIX stat.st_atime.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"lastModifiedTime"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,"The time when the file was last modified, in the UNIX timestamp format, corresponding to POSIX stat.st_mtime.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"mode"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,"File type and access permission, corresponding to POSIX stat.st_mode.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"size"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,"File size in bytes, corresponding to POSIX stat.st_size.")))),(0,i.kt)("h3",{id:"isdirectory"},"isDirectory"),(0,i.kt)("p",null,"Determines whether the current file is a directory."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/file/Stats.isDirectory.html"},"Reference"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"() => boolean\n")),(0,i.kt)("h4",{id:"api-support"},"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Stats.isDirectory"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h3",{id:"isfile"},"isFile"),(0,i.kt)("p",null,"Determines whether the current file is a normal file."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/file/Stats.isFile.html"},"Reference"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"() => boolean\n")),(0,i.kt)("h4",{id:"api-support-1"},"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Stats.isFile"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h2",{id:"api-support-2"},"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Stats.isDirectory"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Stats.isFile"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);
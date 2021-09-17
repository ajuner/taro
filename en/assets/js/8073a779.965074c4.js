(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[82680],{22122:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},19756:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,{Z:function(){return n}})},3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return m},kt:function(){return s}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),f=l(r),s=o,g=f["".concat(c,".").concat(s)]||f[s]||u[s]||a;return r?n.createElement(g,i(i({ref:e},m),{},{components:r})):n.createElement(g,i({ref:e},m))}));function s(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77337:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"Project Configuration"},p={unversionedId:"project-config",id:"project-config",isDocsHomePage:!1,title:"Project Configuration",description:"Each type of mini-program platform has its own project profile, for example",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/project-config.md",sourceDirName:".",slug:"/project-config",permalink:"/taro/en/docs/next/project-config",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/project-config.md",version:"current",frontMatter:{title:"Project Configuration"},sidebar:"docs",previous:{title:"Page Configuration",permalink:"/taro/en/docs/next/page-config"},next:{title:"Babel Configuration",permalink:"/taro/en/docs/next/babel-config"}},c=[],l={toc:c};function m(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each type of mini-program platform has its own project profile, for example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WeChat mini-program, ",(0,a.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html?search-key=%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE"},"project.config.json")),(0,a.kt)("li",{parentName:"ul"},"Baidu smart mini-program, ",(0,a.kt)("a",{parentName:"li",href:"https://smartprogram.baidu.com/docs/develop/devtools/projectconfig/"},"project.swan.json")),(0,a.kt)("li",{parentName:"ul"},"ByteDance mini-program, ",(0,a.kt)("a",{parentName:"li",href:"https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/framework/basic-reference/catalog-structure/#projectconfigjson-%E9%85%8D%E7%BD%AE%E4%BB%8B%E7%BB%8D"},"project.config.json")),(0,a.kt)("li",{parentName:"ul"},"QQ mini-program, project.config.json"),(0,a.kt)("li",{parentName:"ul"},"Alipay mini-program,",(0,a.kt)("a",{parentName:"li",href:"https://opendocs.alipay.com/mini/framework/project"},"mini.project.json")),(0,a.kt)("li",{parentName:"ul"},"Jingdong mini-program, Not found")),(0,a.kt)("p",null,"To be able to adapt to the different profiles of different mini-program platforms, Taro supports adding individual project profiles for each mini-program platform."),(0,a.kt)("p",null,"Projects created through the Taro template will have a project configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"project.config.json")," by default, which ",(0,a.kt)("strong",{parentName:"p"},"can only be used for WeChat mini-program"),", to be compatible with other  mini-program platforms, please add the configuration file of the corresponding platform according to the following corresponding rules, and the configuration is consistent with the requirements of the respective mini-program platforms."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Mini-program Platform"),(0,a.kt)("th",{parentName:"tr",align:null},"Configuration File"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WeChat mini-program"),(0,a.kt)("td",{parentName:"tr",align:null},"project.config.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Baidu smart mini-program"),(0,a.kt)("td",{parentName:"tr",align:null},"project.swan.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ByteDance mini-program"),(0,a.kt)("td",{parentName:"tr",align:null},"project.tt.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"QQ mini-program"),(0,a.kt)("td",{parentName:"tr",align:null},"project.qq.json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Alipay mini-program"),(0,a.kt)("td",{parentName:"tr",align:null},"project.alipay.json")))))}m.isMDXComponent=!0}}]);
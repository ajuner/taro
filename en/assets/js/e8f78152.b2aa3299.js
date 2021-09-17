(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[60623],{22122:function(t,n,e){"use strict";function a(){return(a=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t}).apply(this,arguments)}e.d(n,{Z:function(){return a}})},19756:function(t,n,e){"use strict";function a(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}e.d(n,{Z:function(){return a}})},3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return g},kt:function(){return k}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),u=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},g=function(t){var n=u(t.components);return a.createElement(p.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),m=u(e),k=r,N=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return e?a.createElement(N,i(i({ref:n},g),{},{components:e})):a.createElement(N,i({ref:n},g))}));function k(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=e[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},484:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return g}});var a=e(22122),r=e(19756),l=(e(67294),e(3905)),i={title:"Page Configuration"},o={unversionedId:"page-config",id:"version-3.x/page-config",isDocsHomePage:!1,title:"Page Configuration",description:"Each mini-program page can use the .config.js file to configure the window presentation of this page. The configuration items in the page will override the same configuration items in window of the global configuration app.config.json on the current page.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/page-config.md",sourceDirName:".",slug:"/page-config",permalink:"/taro/en/docs/page-config",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/page-config.md",version:"3.x",frontMatter:{title:"Page Configuration"},sidebar:"version-3.x/docs",previous:{title:"Global Configuration",permalink:"/taro/en/docs/app-config"},next:{title:"Project Configuration",permalink:"/taro/en/docs/project-config"}},p=[{value:"Configuration Item List",id:"configuration-item-list",children:[]}],u={toc:p};function g(t){var n=t.components,e=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Each mini-program page can use the ",(0,l.kt)("inlineCode",{parentName:"p"},".config.js")," file to configure the window presentation of this page. The configuration items in the page will override the same configuration items in ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," of the global configuration ",(0,l.kt)("inlineCode",{parentName:"p"},"app.config.json")," on the current page."),(0,l.kt)("p",null,"The file requires ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," a default object, and the configuration items follow the ",(0,l.kt)("strong",{parentName:"p"},"WeChat mini-program specification")," and are unified for all platforms."),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"js files referenced by require or import in ",(0,l.kt)("inlineCode",{parentName:"li"},"page.config.js")," are currently ",(0,l.kt)("strong",{parentName:"li"},"not compiled by Babel compilation syntax"),". "),(0,l.kt)("li",{parentName:"ol"},"The platform diff logic can be implemented using the ",(0,l.kt)("inlineCode",{parentName:"li"},"process.env.TARO_ENV")," variable for conditional judgments. "),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"page.config.js")," does not support multi-terminated files like ",(0,l.kt)("inlineCode",{parentName:"li"},"index.weapp.js"),", which does not work.")),(0,l.kt)("h3",{id:"configuration-item-list"},"Configuration Item List"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defalut"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"navigationBarBackgroundColor"),(0,l.kt)("td",{parentName:"tr",align:null},"HexColor"),(0,l.kt)("td",{parentName:"tr",align:null},"#000000"),(0,l.kt)("td",{parentName:"tr",align:null},"Navigation bar background color,such as #000000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"navigationBarTextStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"white"),(0,l.kt)("td",{parentName:"tr",align:null},"Navigation bar header color, supported only black / white")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"navigationBarTitleText"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Navigation bar title text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"navigationStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"Navigation bar style, only the following values are supported: default: defalut style, custom: Customize the navigation bar, keeping only the top-right corner button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Background color of the window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundTextStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"dark"),(0,l.kt)("td",{parentName:"tr",align:null},"The drop-down loading style,  only  supported  dark / light")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundColorTop"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"#ffffff"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9876Background color for top window, supported on iOS only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundColorBottom"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"#ffffff"),(0,l.kt)("td",{parentName:"tr",align:null},"Background color for the bottom window, supported on iOS only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enablePullDownRefresh"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable drop-down refresh of the current page")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onReachBottomDistance"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"The distance from the bottom of the page when the page pull-up bottom event is triggered, the unit is px")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageOrientation"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"portrait"),(0,l.kt)("td",{parentName:"tr",align:null},"Screen rotation settings, support auto / portrait / landscape")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableScroll"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to true and the page will not scroll up or down. ",(0,l.kt)("br",null),"only works in the page configuration, and cannot be set in app.json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableSwipeBack"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable page right swipe gesture to return")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usingComponents"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Page customization component configuration")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"usingComponents")," generally does not need to be configured, but only when it needs to be configured with reference to native mini program components."),(0,l.kt)("p",null," Support as follows"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:null},"Baidu Smart-Program"),(0,l.kt)("th",{parentName:"tr",align:null},"ByteDance Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:null},"Alipay Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:null},"H5"),(0,l.kt)("th",{parentName:"tr",align:null},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"navigationBarBackgroundColor"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"navigationBarTextStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"navigationBarTitleText"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"navigationStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f (WeChat App 6.6.0)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f\uff08Baidu App 11.1.0\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundTextStyle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundColorTop"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f\uff08WeChat App 6.5.16\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backgroundColorBottom"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f\uff08WeChat App 6.5.16\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enablePullDownRefresh"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onReachBottomDistance"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageOrientation"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f2.4.0 (auto) / 2.5.0 (landscape)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableScroll"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableSwipeBack"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usingComponents"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2718")))))}g.isMDXComponent=!0}}]);
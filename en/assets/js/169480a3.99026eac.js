(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29300],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,d=s["".concat(l,".").concat(f)]||s[f]||g[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},19153:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Directory Structure"},p={unversionedId:"folder",id:"version-3.x/folder",isDocsHomePage:!1,title:"Directory Structure",description:"Directory Structure",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/folder.md",sourceDirName:".",slug:"/folder",permalink:"/taro/en/docs/folder",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/folder.md",version:"3.x",frontMatter:{title:"Directory Structure"},sidebar:"version-3.x/docs",previous:{title:"More Resources",permalink:"/taro/en/docs/composition"},next:{title:"Compile Configuration",permalink:"/taro/en/docs/config"}},l=[{value:"Directory Structure",id:"directory-structure",children:[]},{value:"Compile Configuration",id:"compile-configuration",children:[]},{value:"Source Code",id:"source-code",children:[{value:"app",id:"app",children:[]},{value:"page",id:"page",children:[]}]},{value:"Project Configuration",id:"project-configuration",children:[]},{value:"Babel Configuration",id:"babel-configuration",children:[]},{value:"ESLint Configuration",id:"eslint-configuration",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 dist                        Compilation results directory\n|\n\u251c\u2500\u2500 config                      Project compilation configuration directory\n|   \u251c\u2500\u2500 index.js                Default Configuration\n|   \u251c\u2500\u2500 dev.js                  Development environment configuration\n|   \u2514\u2500\u2500 prod.js                 Production environment configuration\n|\n\u251c\u2500\u2500 src                         Source directory\n|   \u251c\u2500\u2500 pages                   Page file directory\n|   |   \u2514\u2500\u2500 index               index Page directory\n|   |       \u251c\u2500\u2500 index.js        index page\n|   |       \u251c\u2500\u2500 index.css       index page style\n|   |       \u2514\u2500\u2500 index.config.js index page configuration\n|   |\n|   \u251c\u2500\u2500 app.js                  Project entry\n|   \u251c\u2500\u2500 app.css                 Project general style\n|   \u2514\u2500\u2500 app.config.js           Project entry configuration\n|\n\u251c\u2500\u2500 project.config.json         Wechat mini program configuration   \n\u251c\u2500\u2500 project.tt.json             ByteDance  Mini Program configuration \n\u251c\u2500\u2500 project.swan.json           Baidu smart program \n\u251c\u2500\u2500 project.qq.json             QQ Mini Program\n|\n\u251c\u2500\u2500 babel.config.js             Babel configuration\n\u251c\u2500\u2500 tsconfig.json               TypeScript configuration\n\u251c\u2500\u2500 .eslintrc                   ESLint configuration\n|\n\u2514\u2500\u2500 package.json\n")),(0,i.kt)("h2",{id:"compile-configuration"},"Compile Configuration"),(0,i.kt)("p",null,"For configuring the build configuration of Taro projects, modifying Webpack configuration, etc., please refer to",(0,i.kt)("a",{parentName:"p",href:"./config"},"compile configuration"),"\u548c",(0,i.kt)("a",{parentName:"p",href:"./config-detail"},"compile configuration details"),"\u3002"),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("p",null,"Like the mini program specification, Taro contains an ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," that describes the overall application and multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"page"),"s that describe their respective pages."),(0,i.kt)("h3",{id:"app"},"app"),(0,i.kt)("p",null,"The mini program contains the following files:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"File"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Funtions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"app.js"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"mini program entry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"app.css"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no"),(0,i.kt)("td",{parentName:"tr",align:"left"},"mini program global style")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"app.config.js"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"mini program global configuration")))),(0,i.kt)("p",null,"Eamples are available for viewing according to the framework of your choice\uff1a",(0,i.kt)("a",{parentName:"p",href:"./react-overall"},"React"),", ",(0,i.kt)("a",{parentName:"p",href:"./vue-overall"},"Vue"),", ",(0,i.kt)("a",{parentName:"p",href:"./vue3"},"Vue3"),", ",(0,i.kt)("a",{parentName:"p",href:"./nerv"},"Nerv"),"\u3002"),(0,i.kt)("h4",{id:"1-mini-program-global-configuration"},"1. Mini Program Global Configuration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"app.config.js")," Global configuration file corresponding to the mini program specification ",(0,i.kt)("inlineCode",{parentName:"p"},"app.json"),"\uff0cThe advantage is that it is JS files that can write logic. The configuration starts with ",(0,i.kt)("strong",{parentName:"p"}," global configuration of WeChat Mini Progam"),"\u3002Detail reference ",(0,i.kt)("a",{parentName:"p",href:"./app-config"},"Global Configuration"),"\u3002"),(0,i.kt)("h4",{id:"2-mini-program-global-style"},"2. Mini Program Global Style"),(0,i.kt)("p",null,"Mini Program global style files can be introduced via the ES6 specification's ",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.js"',title:'"app.js"'},"import './app.css';\n")),(0,i.kt)("h3",{id:"page"},"page"),(0,i.kt)("p",null,"A mini program page consists of three files:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"File"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Funtions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"page.js"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"page entry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"page.css"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no"),(0,i.kt)("td",{parentName:"tr",align:"left"},"page style")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"page.config.js"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no"),(0,i.kt)("td",{parentName:"tr",align:"left"},"page configuration")))),(0,i.kt)("h4",{id:"1-page-configuration"},"1. Page Configuration"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"page.config.js")," The page configuration file corresponding to the mini program specification ",(0,i.kt)("inlineCode",{parentName:"p"},"page.json"),"The advantage is that it is js configuration to ",(0,i.kt)("strong",{parentName:"p"}," Wechat Mini Program page configuration")," as specification\u3002Detail reference ",(0,i.kt)("a",{parentName:"p",href:"./page-config"},"page configuration"),"\u3002"),(0,i.kt)("h4",{id:"2-page-style"},"2. Page Style"),(0,i.kt)("p",null,"Page style files can be introduced via the ES6 specification ",(0,i.kt)("inlineCode",{parentName:"p"},"import"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="pages/index/index.js"',title:'"pages/index/index.js"'},"import './index.css';\n")),(0,i.kt)("h4",{id:"3-page-routing"},"3. Page Routing"),(0,i.kt)("p",null,"Page routing is consistent with the mini program  specification and needs to be configured in the mini program global configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"app.config.js"),"."),(0,i.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,i.kt)("p",null,"Each mini program platform has its own project profile, and Taro supports adapting them. For details, please refer to",(0,i.kt)("a",{parentName:"p",href:"./project-config"},"project configuration"),"\u3002"),(0,i.kt)("h2",{id:"babel-configuration"},"Babel Configuration"),(0,i.kt)("p",null,"Babel configuration reference ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/index.js"},"Github")),(0,i.kt)("h2",{id:"eslint-configuration"},"ESLint Configuration"),(0,i.kt)("p",null,"ESLint configuration reference ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/next/packages/eslint-plugin-taro/index.js"},"Github")))}u.isMDXComponent=!0}}]);
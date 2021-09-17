(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[55895],{22122:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return o}})},19756:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return o}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50102:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={title:"Use CSS Modules"},l={unversionedId:"css-modules",id:"version-3.x/css-modules",isDocsHomePage:!1,title:"Use CSS Modules",description:"Supported since version 1.2.0, React Native is compatible",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/css-modules.md",sourceDirName:".",slug:"/css-modules",permalink:"/taro/en/docs/css-modules",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/css-modules.md",version:"3.x",frontMatter:{title:"Use CSS Modules"},sidebar:"version-3.x/docs",previous:{title:"Use Redux",permalink:"/taro/en/docs/redux"},next:{title:"Use CSS-in-JS",permalink:"/taro/en/docs/css-in-js"}},s=[{value:"Related Reading",id:"related-reading",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Supported since version 1.2.0, React Native is compatible")),(0,a.kt)("p",null,"There is built-in support for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS Modules")," in Taro, but it is turned off by default, so if you need to turn it on, please add the following configuration to ",(0,a.kt)("a",{parentName:"p",href:"/taro/en/docs/config-detail"},"compile-config"),"."),(0,a.kt)("p",null," Open on the mini program :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"weapp: {\n  module: {\n    postcss: {\n      // css modules  function switches and related configurations\n      cssModules: {\n        enable: true, // Default is false, if you want to use the css modules function, set it to true\n        config: {\n          namingPattern: 'module', // The conversion mode, which takes the value global/module, is explained in detail below\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null," Open on the H5:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"h5: {\n  module: {\n    postcss: {\n      // css modules: function switches and related configurations\n      cssModules: {\n        enable: true, // Default is false, if you want to use the css modules function, set it to true\n        config: {\n          namingPattern: 'module', // The conversion mode, which takes the value global/module, is explained in detail below\n          generateScopedName: '[name]__[local]___[hash:base64:5]'\n        }\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null,"It is worth noting that there are two modes of using CSS Modules in Taro, namely global conversion and partial custom conversion, which are controlled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"namingPattern")," configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"namingPattern")," configuration takes the following values."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"global"),", which means that all style files will be converted by CSS Modules, except for those with ",(0,a.kt)("inlineCode",{parentName:"li"},".global.")," in the file name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module"),", which means custom conversion, only style files with ",(0,a.kt)("inlineCode",{parentName:"li"},".module.")," in their filenames will be converted by CSS Modules")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"generateScopedName")," supports passing in strings and functions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"String")," in the format of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/webpack/loader-utils#interpolatename"},"https://github.com/webpack/loader-utils#interpolatename"),", it is worth It is worth pointing out that ",(0,a.kt)("inlineCode",{parentName:"li"},"[local]")," can be used to take its original class name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"function"),", whose type is defined as ",(0,a.kt)("inlineCode",{parentName:"li"},"(localName: string, absoluteFilePath: string) => string"),", where ",(0,a.kt)("inlineCode",{parentName:"li"},"localName")," is the original class name and ",(0,a.kt)("inlineCode",{parentName:"li"},"absoluteFilePath")," is the absolute path to the file, and the return value will be the new class name")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"It is recommended to use custom conversion mode, so that the style of some third-party libraries will not be affected")),(0,a.kt)("p",null,"CSS Modules are used in the following ways"),(0,a.kt)("p",null,"Component Style"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".test {\n  color: red;\n  .txt {\n    font-size: 36px;\n  }\n}\n")),(0,a.kt)("p",null,"Using Styles in Component JS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\nimport { View, Text } from '@tarojs/components'\n\nimport styles from './Test.module.scss'\n\nexport default class Test extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { }\n  }\n\n  render () {\n    return (\n      <View className={styles.test}>\n        <Text className={styles.txt}>Hello world!</Text>\n      </View>\n    )\n  }\n}\n")),(0,a.kt)("h2",{id:"related-reading"},"Related Reading"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://taro-club.jd.com/topic/2264/%E6%9E%81%E8%87%B4%E8%BF%BD%E6%B1%82-%E8%AE%A9%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BB%A3%E7%A0%81%E5%8C%85%E7%AB%8B%E5%87%8F-10-%E7%9A%84%E6%8F%92%E4%BB%B6-weapp-css-modules"},"Open Source Plugin weapp-css-modules - The ultimate pursuit to reduce the code package of the  mini program by 10%")))}c.isMDXComponent=!0}}]);
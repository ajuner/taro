(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[50196],{22122:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},19756:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,{Z:function(){return r}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){"use strict";var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},41395:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(67294),a=t(80944),o=t(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),h=f.tabGroupChoices,b=f.setTabGroupChoices,g=(0,r.useState)(u),v=g[0],y=g[1],k=r.Children.toArray(e.children),N=[];if(null!=m){var w=h[m];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&y(w)}var j=function(e){var n=e.currentTarget,t=N.indexOf(n),r=p[t].value;y(r),null!=m&&(b(m,r),setTimeout((function(){var e,t,r,a,o,i,s,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,t>=0&&o<=c&&a<=s&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case s:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":v===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:j,onClick:j},t)}))),n?(0,r.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},79443:function(e,n,t){"use strict";var r=(0,t(67294).createContext)(void 0);n.Z=r},80944:function(e,n,t){"use strict";var r=t(67294),a=t(79443);n.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1623:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i=t(41395),l=t(58215),s={title:"Use CSS-in-JS"},c={unversionedId:"css-in-js",id:"css-in-js",isDocsHomePage:!1,title:"Use CSS-in-JS",description:"linaria",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/css-in-js.mdx",sourceDirName:".",slug:"/css-in-js",permalink:"/taro/en/docs/next/css-in-js",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/css-in-js.mdx",version:"current",frontMatter:{title:"Use CSS-in-JS"},sidebar:"docs",previous:{title:"Use CSS Modules",permalink:"/taro/en/docs/next/css-modules"},next:{title:"`@taro/plugin-mini-ci`",permalink:"/taro/en/docs/next/plugin-mini-ci"}},u=[{value:"linaria",id:"linaria",children:[]},{value:"Fower",id:"fower",children:[]}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"linaria"},"linaria"),(0,o.kt)("p",null,"There is a common CSS-in-JS solution in the React community: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/styled-components/styled-components"},"styled-components"),"\u3002Unfortunately, however, ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components")," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"<style>")," tag to dynamically control styles, and there is no similar solution in mini program. But we can achieve the same functionality with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/callstack/linaria"},"linaria"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"linaria")," mainly provides the following features."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"API that approximates ",(0,o.kt)("inlineCode",{parentName:"li"},"styled-components")),(0,o.kt)("li",{parentName:"ul"},"TypeScript support"),(0,o.kt)("li",{parentName:"ul"},"Zero runtime")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"linaria")," is also very simple, first installing the dependencies via NPM: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i linaria\n")),(0,o.kt)("p",null,"Next, configure ",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js")," in the project root directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: [\n    ['taro', {\n      framework: 'react',\n      ts: true\n    }],\n    'linaria/babel' // Add to babel-preset\n  ]\n}\n")),(0,o.kt)("p",null,"After that, configure ",(0,o.kt)("inlineCode",{parentName:"p"},"config/index.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"const config = {\n  mini: {\n    webpackChain(chain, webpack) {\n      // linaria/loader options refer to https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('linaria/loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  },\n  h5: {\n    webpackChain(chain, webpack) {\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('linaria/loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Finally, create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"linaria.config.js")," in the root of the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="linaria.config.js"',title:'"linaria.config.js"'},'// linaria configuration details: https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#options\nmodule.exports = {\n  rules: [\n    {\n      action: require("linaria/evaluators").shaker,\n    },\n    {\n      test: /node_modules[\\/\\\\](?!@tarojs)/,\n      action: "ignore"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"In the business code we can use it like this."),(0,o.kt)(i.Z,{defaultValue:"JS",values:[{label:"JavaScript",value:"JS"},{label:"TypeScript",value:"TS"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"JS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { styled } from 'linaria/react'\n\nconst Title = styled(View)`\n  color: ${props => props.color}\n`;\n\nconst Index = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n"))),(0,o.kt)(l.Z,{value:"TS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { styled } from 'linaria/react'\n\nconst Title = styled(View)<{ color: string }>`\n  color: ${props => props.color}\n`;\n\nconst Index: React.FC = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n")))),(0,o.kt)("h2",{id:"fower"},"Fower"),(0,o.kt)("p",null,"The community has another option ",(0,o.kt)("strong",{parentName:"p"},"Fower"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://fower.vercel.app/zh-cn/docs/use-with-taro"},"Documentation")))}m.isMDXComponent=!0},86010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);
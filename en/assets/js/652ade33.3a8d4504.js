(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24685],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(o,".").concat(s)]||u[s]||k[s]||l;return n?r.createElement(m,c(c({ref:e},d),{},{components:n})):r.createElement(m,c({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,c=new Array(l);c[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84065:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return o},default:function(){return d}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),c={title:"Switch",sidebar_label:"Switch"},i={unversionedId:"components/forms/switch",id:"version-2.x/components/forms/switch",isDocsHomePage:!1,title:"Switch",description:"\u5f00\u5173\u9009\u62e9\u5668",source:"@site/versioned_docs/version-2.x/components/forms/switch.md",sourceDirName:"components/forms",slug:"/components/forms/switch",permalink:"/taro/en/docs/2.x/components/forms/switch",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/forms/switch.md",version:"2.x",sidebar_label:"Switch",frontMatter:{title:"Switch",sidebar_label:"Switch"},sidebar:"version-2.x/components",previous:{title:"Slider",permalink:"/taro/en/docs/2.x/components/forms/slider"},next:{title:"Textarea",permalink:"/taro/en/docs/2.x/components/forms/textarea"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"SwitchProps",id:"switchprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onChangeEventDetail",id:"onchangeeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],p={toc:o};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5f00\u5173\u9009\u62e9\u5668"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/switch.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<SwitchProps>\n")),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n        <Switch checked/>\n        <Switch/>\n        <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n        <Switch checked/>\n        <Switch/>\n      </View>\n    )\n  }\n}\n")),(0,l.kt)("h2",{id:"switchprops"},"SwitchProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"checked"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u9009\u4e2d")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"disabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u7981\u7528")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"type"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"switch" | "checkbox"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"switch"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6837\u5f0f\uff0c\u6709\u6548\u503c\uff1aswitch, checkbox")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"color"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"#04BE02"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"switch \u7684\u989c\u8272\uff0c\u540c css \u7684 color")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"checked \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6")))),(0,l.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwitchProps.checked"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwitchProps.disabled"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwitchProps.type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwitchProps.color"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"SwitchProps.onChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"onchangeeventdetail"},"onChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean"))))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Switch"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);
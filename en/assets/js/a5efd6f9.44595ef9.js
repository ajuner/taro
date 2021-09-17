(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[42805],{22122:function(t,e,n){"use strict";function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return l}})},19756:function(t,e,n){"use strict";function l(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return l}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return s}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),i=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):k(k({},e),t)),n},o=function(t){var e=i(t.components);return l.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),p=i(n),s=r,m=p["".concat(u,".").concat(s)]||p[s]||c[s]||a;return n?l.createElement(m,k(k({ref:e},o),{},{components:n})):l.createElement(m,k({ref:e},o))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,k=new Array(a);k[0]=p;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=t,d.mdxType="string"==typeof t?t:r,k[1]=d;for(var i=2;i<a;i++)k[i]=n[i];return l.createElement.apply(null,k)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28129:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return k},metadata:function(){return d},toc:function(){return u},default:function(){return o}});var l=n(22122),r=n(19756),a=(n(67294),n(3905)),k={title:"LivePusher",sidebar_label:"LivePusher"},d={unversionedId:"components/media/live-pusher",id:"version-2.x/components/media/live-pusher",isDocsHomePage:!1,title:"LivePusher",description:"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record",source:"@site/versioned_docs/version-2.x/components/media/live-pusher.md",sourceDirName:"components/media",slug:"/components/media/live-pusher",permalink:"/taro/en/docs/2.x/components/media/live-pusher",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/media/live-pusher.md",version:"2.x",sidebar_label:"LivePusher",frontMatter:{title:"LivePusher",sidebar_label:"LivePusher"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"LivePusherProps",id:"livepusherprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"orientation",id:"orientation",children:[]},{value:"localMirror",id:"localmirror",children:[]},{value:"audioReverbType",id:"audioreverbtype",children:[]},{value:"audioVolumeType",id:"audiovolumetype",children:[]},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",children:[]},{value:"onNetstatusEventDetail",id:"onnetstatuseventdetail",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]},{value:"onBgmProgressEventDetail",id:"onbgmprogresseventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={toc:u};function o(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,l.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record"),(0,a.kt)("p",null,"\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u300c\u5f00\u53d1\u300d-\u300c\u63a5\u53e3\u8bbe\u7f6e\u300d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<LivePusherProps>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  render () {\n    return (\n      <LivePusher url='url' mode='RTC' autopush  />\n    )\n  }\n}\n")),(0,a.kt)("h2",{id:"livepusherprops"},"LivePusherProps"),(0,a.kt)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\n\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record\n\u6682\u53ea\u9488\u5bf9\u56fd\u5185\u4e3b\u4f53\u5982\u4e0b\u7c7b\u76ee\u7684\u5c0f\u7a0b\u5e8f\u5f00\u653e\uff0c\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u201c\u8bbe\u7f6e\u201d-\u201c\u63a5\u53e3\u8bbe\u7f6e\u201d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"url"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a8\u6d41\u5730\u5740\u3002\u76ee\u524d\u4ec5\u652f\u6301 rtmp \u683c\u5f0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"SD" | "HD" | "FHD" | "RTC"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"RTC"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"SD\uff08\u6807\u6e05\uff09, HD\uff08\u9ad8\u6e05\uff09, FHD\uff08\u8d85\u6e05\uff09, RTC\uff08\u5b9e\u65f6\u901a\u8bdd\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autopush"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u81ea\u52a8\u63a8\u6d41")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"muted"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u9759\u97f3\u3002\u5373\u5c06\u5e9f\u5f03\uff0c\u53ef\u7528 enable-mic \u66ff\u4ee3",(0,a.kt)("br",null),(0,a.kt)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableCamera"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f00\u542f\u6444\u50cf\u5934")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoFocus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u81ea\u52a8\u805a\u96c6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"orientation"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"vertical" | "horizontal"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"vertical"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u753b\u9762\u65b9\u5411")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"beauty"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7f8e\u989c\uff0c\u53d6\u503c\u8303\u56f4 0-9 \uff0c0 \u8868\u793a\u5173\u95ed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"whiteness"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7f8e\u767d\uff0c\u53d6\u503c\u8303\u56f4 0-9 \uff0c0 \u8868\u793a\u5173\u95ed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"aspect"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"9:16" | "3:4"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"9:16"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5bbd\u9ad8\u6bd4\uff0c\u53ef\u9009\u503c\u6709 3:4, 9:16")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"minBitrate"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"200")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6700\u5c0f\u7801\u7387")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxBitrate"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"1000")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6700\u5927\u7801\u7387")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"audioQuality"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"high"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u9ad8\u97f3\u8d28(48KHz)\u6216\u4f4e\u97f3\u8d28(16KHz)\uff0c\u503c\u4e3ahigh, low")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"waitingImage"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8fdb\u5165\u540e\u53f0\u65f6\u63a8\u6d41\u7684\u7b49\u5f85\u753b\u9762")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"waitingImageHash"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7b49\u5f85\u753b\u9762\u8d44\u6e90\u7684MD5\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"zoom"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8c03\u6574\u7126\u8ddd")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"devicePosition"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"front"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u524d\u7f6e\u6216\u540e\u7f6e\uff0c\u503c\u4e3afront, back")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"backgroundMute"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8fdb\u5165\u540e\u53f0\u65f6\u662f\u5426\u9759\u97f3")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"mirror"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u63a8\u6d41\u753b\u9762\u662f\u5426\u955c\u50cf\uff0c\u4ea7\u751f\u7684\u6548\u679c\u5728 LivePlayer \u53cd\u5e94\u5230",(0,a.kt)("br",null),(0,a.kt)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"remoteMirror"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u63a8\u6d41\u753b\u9762\u662f\u5426\u955c\u50cf\uff0c\u4ea7\u751f\u7684\u6548\u679c\u5728 LivePlayer \u53cd\u5e94\u5230",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",null,"Note:")," \u540c mirror \u5c5e\u6027\uff0c\u540e\u7eed mirror \u5c06\u5e9f\u5f03")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"localMirror"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"auto" | "enable" | "disable"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"auto"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a7\u5236\u672c\u5730\u9884\u89c8\u753b\u9762\u662f\u5426\u955c\u50cf")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"audioReverbType"),(0,a.kt)("td",null,(0,a.kt)("code",null,"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u97f3\u9891\u6df7\u54cd\u7c7b\u578b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableMic"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f00\u542f\u6216\u5173\u95ed\u9ea6\u514b\u98ce")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableAgc"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u5f00\u542f\u97f3\u9891\u81ea\u52a8\u589e\u76ca")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableAns"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u5f00\u542f\u97f3\u9891\u566a\u58f0\u6291\u5236")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"audioVolumeType"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"media" | "voicecall"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"voicecall"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u97f3\u91cf\u7c7b\u578b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"videoWidth"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"360")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u4e0a\u63a8\u7684\u89c6\u9891\u6d41\u7684\u5206\u8fa8\u7387\u5bbd\u5ea6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"videoHeight"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"640")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u4e0a\u63a8\u7684\u89c6\u9891\u6d41\u7684\u5206\u8fa8\u7387\u9ad8\u5ea6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onStateChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\uff0cdetail = ","{code}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onNetstatus"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onNetstatusEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u7f51\u7edc\u72b6\u6001\u901a\u77e5\uff0cdetail = ","{info}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onError"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6e32\u67d3\u9519\u8bef\u4e8b\u4ef6\uff0cdetail = ","{errMsg, errCode}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onBgmStart"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u80cc\u666f\u97f3\u5f00\u59cb\u64ad\u653e\u65f6\u89e6\u53d1")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onBgmProgress"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onBgmProgressEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u80cc\u666f\u97f3\u8fdb\u5ea6\u53d8\u5316\u65f6\u89e6\u53d1\uff0cdetail = ","{progress, duration}")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onBgmComplete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u80cc\u666f\u97f3\u64ad\u653e\u5b8c\u6210\u65f6\u89e6\u53d1")))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.url"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.mode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.autopush"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.muted"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableCamera"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.autoFocus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.orientation"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.beauty"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.whiteness"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.aspect"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.minBitrate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.maxBitrate"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.audioQuality"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.waitingImage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.waitingImageHash"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.zoom"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.devicePosition"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.backgroundMute"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.mirror"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.remoteMirror"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.localMirror"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.audioReverbType"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableMic"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableAgc"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableAns"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.audioVolumeType"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.videoWidth"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.videoHeight"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onStateChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onNetstatus"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onError"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onBgmStart"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onBgmProgress"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusherProps.onBgmComplete"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"orientation"},"orientation"),(0,a.kt)("p",null,"orientation \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"vertical"),(0,a.kt)("td",null,"\u7ad6\u76f4")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"horizontal"),(0,a.kt)("td",null,"\u6c34\u5e73")))),(0,a.kt)("h3",{id:"localmirror"},"localMirror"),(0,a.kt)("p",null,"localMirror \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"auto"),(0,a.kt)("td",null,"\u524d\u7f6e\u6444\u50cf\u5934\u955c\u50cf\uff0c\u540e\u7f6e\u6444\u50cf\u5934\u4e0d\u955c\u50cf")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enable"),(0,a.kt)("td",null,"\u524d\u540e\u7f6e\u6444\u50cf\u5934\u5747\u955c\u50cf")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disable"),(0,a.kt)("td",null,"\u524d\u540e\u7f6e\u6444\u50cf\u5934\u5747\u4e0d\u955c\u50cf")))),(0,a.kt)("h3",{id:"audioreverbtype"},"audioReverbType"),(0,a.kt)("p",null,"audioReverbType \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"0"),(0,a.kt)("td",null,"\u5173\u95ed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1"),(0,a.kt)("td",null,"KTV")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2"),(0,a.kt)("td",null,"\u5c0f\u623f\u95f4")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"3"),(0,a.kt)("td",null,"\u5927\u4f1a\u5802")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"4"),(0,a.kt)("td",null,"\u4f4e\u6c89")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"5"),(0,a.kt)("td",null,"\u6d2a\u4eae")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"6"),(0,a.kt)("td",null,"\u91d1\u5c5e\u58f0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"7"),(0,a.kt)("td",null,"\u78c1\u6027")))),(0,a.kt)("h3",{id:"audiovolumetype"},"audioVolumeType"),(0,a.kt)("p",null,"audioVolumeType \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"media"),(0,a.kt)("td",null,"\u5a92\u4f53\u97f3\u91cf")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"voicecall"),(0,a.kt)("td",null,"\u901a\u8bdd\u97f3\u91cf")))),(0,a.kt)("h3",{id:"onstatechangeeventdetail"},"onStateChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"code"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u72b6\u6001\u7801")))),(0,a.kt)("h3",{id:"onnetstatuseventdetail"},"onNetstatusEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"info"),(0,a.kt)("td",null,(0,a.kt)("code",null,"netStatus")),(0,a.kt)("td",null,"\u7f51\u7edc\u72b6\u6001")))),(0,a.kt)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u9519\u8bef\u4fe1\u606f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string | number")),(0,a.kt)("td",null,"\u9519\u8bef\u7801")))),(0,a.kt)("h3",{id:"onbgmprogresseventdetail"},"onBgmProgressEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"progress"),(0,a.kt)("td",null,(0,a.kt)("code",null,"any")),(0,a.kt)("td",null,"\u8fdb\u5c55")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"duration"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u6301\u7eed\u65f6\u95f4")))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"LivePusher"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}o.isMDXComponent=!0}}]);
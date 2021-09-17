(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[47320],{22122:function(t,e,l){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t}).apply(this,arguments)}l.d(e,{Z:function(){return n}})},19756:function(t,e,l){"use strict";function n(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}l.d(e,{Z:function(){return n}})},3905:function(t,e,l){"use strict";l.d(e,{Zo:function(){return u},kt:function(){return p}});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function d(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var c=n.createContext({}),i=function(t){var e=n.useContext(c),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},u=function(t){var e=i(t.components);return n.createElement(c.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),s=i(l),p=r,h=s["".concat(c,".").concat(p)]||s[p]||k[p]||a;return l?n.createElement(h,o(o({ref:e},u),{},{components:l})):n.createElement(h,o({ref:e},u))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,o=new Array(a);o[0]=s;var d={};for(var c in e)hasOwnProperty.call(e,c)&&(d[c]=e[c]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var i=2;i<a;i++)o[i]=l[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},65432:function(t,e,l){"use strict";l.r(e),l.d(e,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=l(22122),r=l(19756),a=(l(67294),l(3905)),o={title:"NodesRef",sidebar_label:"NodesRef"},d={unversionedId:"apis/wxml/NodesRef",id:"apis/wxml/NodesRef",isDocsHomePage:!1,title:"NodesRef",description:"The object for obtaining the WXML node information.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/wxml/NodesRef.md",sourceDirName:"apis/wxml",slug:"/apis/wxml/NodesRef",permalink:"/taro/en/docs/next/apis/wxml/NodesRef",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/wxml/NodesRef.md",version:"current",sidebar_label:"NodesRef",frontMatter:{title:"NodesRef",sidebar_label:"NodesRef"},sidebar:"API",previous:{title:"IntersectionObserver",permalink:"/taro/en/docs/next/apis/wxml/IntersectionObserver"},next:{title:"SelectorQuery",permalink:"/taro/en/docs/next/apis/wxml/SelectorQuery"}},c=[{value:"Methods",id:"methods",children:[{value:"boundingClientRect",id:"boundingclientrect",children:[]},{value:"context",id:"context",children:[]},{value:"fields",id:"fields",children:[]},{value:"node",id:"node",children:[]},{value:"scrollOffset",id:"scrolloffset",children:[]}]},{value:"Parameters",id:"parameters",children:[{value:"BoundingClientRectCallback",id:"boundingclientrectcallback",children:[]},{value:"BoundingClientRectCallbackResult",id:"boundingclientrectcallbackresult",children:[]},{value:"ContextCallback",id:"contextcallback",children:[]},{value:"ContextCallbackResult",id:"contextcallbackresult",children:[]},{value:"Fields",id:"fields-1",children:[]},{value:"FieldsCallback",id:"fieldscallback",children:[]},{value:"NodeCallback",id:"nodecallback",children:[]},{value:"NodeCallbackResult",id:"nodecallbackresult",children:[]},{value:"ScrollOffsetCallback",id:"scrolloffsetcallback",children:[]},{value:"ScrollOffsetCallbackResult",id:"scrolloffsetcallbackresult",children:[]}]},{value:"API Support",id:"api-support-5",children:[]}],i={toc:c};function u(t){var e=t.components,l=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},i,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The object for obtaining the ",(0,a.kt)("inlineCode",{parentName:"p"},"WXML")," node information."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.html"},"Reference"))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"boundingclientrect"},"boundingClientRect"),(0,a.kt)("p",null,"Adds the request for querying the node layout position (in pixels) relative to the display area. This feature is similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"getBoundingClientRect")," of DOM. It returns ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectorQuery")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"NodesRef"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.boundingClientRect.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: BoundingClientRectCallback) => SelectorQuery\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"callback"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BoundingClientRectCallback")),(0,a.kt)("td",null,"The callback function. After the ",(0,a.kt)("code",null,"SelectorQuery.exec")," method is executed, the node information will be returned in",(0,a.kt)("code",null,"callback"),".")))),(0,a.kt)("h4",{id:"sample-code"},"Sample Code"),(0,a.kt)("h5",{id:"example-1"},"Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){\n  rect.id      // The ID of the node\n  rect.dataset // The dataset of the node\n  rect.left    // The left boundary coordinate of the node\n  rect.right   // The right boundary coordinate of the node\n  rect.top     // The upper boundary coordinate of the node\n  rect.bottom  // The lower boundary coordinate of the node\n  rect.width   // The width of the node\n  rect.height  // The height of the node\n}).exec()\n")),(0,a.kt)("h5",{id:"example-2"},"Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){\n  rects.forEach(function(rect){\n    rect.id      // The ID of the node\n    rect.dataset // The dataset of the node\n    rect.left    // The left boundary coordinate of the node\n    rect.right   // The right boundary coordinate of the node\n    rect.top     // The upper boundary coordinate of the node\n    rect.bottom  // The lower boundary coordinate of the node\n    rect.width   // The width of the node\n    rect.height  // The height of the node\n  })\n}).exec()\n")),(0,a.kt)("h4",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NodesRef.boundingClientRect"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"context"},"context"),(0,a.kt)("p",null,"Adds the request for querying the node Context object. ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/video/VideoContext.html"},"VideoContext"),", ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/CanvasContext.html"},"CanvasContext"),", ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/live/LivePlayerContext.html"},"LivePlayerContext"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/map/MapContext.html"},"MapContext")," can be obtained."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.context.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: ContextCallback) => SelectorQuery\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"callback"),(0,a.kt)("td",null,(0,a.kt)("code",null,"ContextCallback")),(0,a.kt)("td",null,"The callback function. After the ",(0,a.kt)("code",null,"SelectorQuery.exec")," method is executed, the node information will be returned.")))),(0,a.kt)("h4",{id:"sample-code-1"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createSelectorQuery().select('.the-video-class').context(function (res) {\n  console.log(res.context) // The Context object of the node. If the selected node is a <video> component, the VideoContext object is returned.\n}).exec()\n")),(0,a.kt)("h4",{id:"api-support-1"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NodesRef.context"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"fields"},"fields"),(0,a.kt)("p",null,"Obtains the information about the node. The fields to be obtained are specified in fields. The ",(0,a.kt)("inlineCode",{parentName:"p"},"selectorQuery")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"nodesRef")," is returned."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),'\ncomputedStyle has a higher priority than size. When width/height is specified and "size: true" is passed in computedStyle, the width/height obtained by computedStyle is returned first.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.fields.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(fields: Fields, callback?: FieldsCallback) => SelectorQuery\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"fields"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Fields")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"callback"),(0,a.kt)("td",null,(0,a.kt)("code",null,"FieldsCallback")),(0,a.kt)("td",null,"Callback function")))),(0,a.kt)("h4",{id:"sample-code-2"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createSelectorQuery().select('#the-id').fields({\n  dataset: true,\n  size: true,\n  scrollOffset: true,\n  properties: ['scrollX', 'scrollY'],\n  computedStyle: ['margin', 'backgroundColor'],\n  context: true,\n}, function (res) {\n  res.dataset    // The dataset of the node\n  res.width      // The width of the node\n  res.height     // The height of the node\n  res.scrollLeft // The horizontal scroll position of the node\n  res.scrollTop  // The vertical scroll position of the node\n  res.scrollX    // The current value of the node's scroll-x property\n  res.scrollY    // The current value of the node's scroll-y property\n  // Return the specified style name\n  res.margin\n  res.backgroundColor\n  res.context    // The Context object of the node\n}).exec()\n")),(0,a.kt)("h4",{id:"api-support-2"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NodesRef.fields"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"node"},"node"),(0,a.kt)("p",null,"Gets the Node node instance. Currently ",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html"},"Canvas")," is supported for fetching."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.node.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: NodeCallback) => SelectorQuery\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"callback"),(0,a.kt)("td",null,(0,a.kt)("code",null,"NodeCallback")),(0,a.kt)("td",null,"The callback function. After the ",(0,a.kt)("code",null,"SelectorQuery.exec")," method is executed, the node information will be returned in callback.")))),(0,a.kt)("h4",{id:"sample-code-3"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createSelectorQuery().select('.canvas').node(function(res){\n  console.log(res.node)\n}).exec()\n")),(0,a.kt)("h4",{id:"api-support-3"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NodesRef.node"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"scrolloffset"},"scrollOffset"),(0,a.kt)("p",null,"Adds the request for querying the node scroll position (in pixels). The node must be ",(0,a.kt)("inlineCode",{parentName:"p"},"scroll-view")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"viewport"),". It returns ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectorQuery")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"NodesRef"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/wxml/NodesRef.scrollOffset.html"},"Reference"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: ScrollOffsetCallback) => SelectorQuery\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"callback"),(0,a.kt)("td",null,(0,a.kt)("code",null,"ScrollOffsetCallback")),(0,a.kt)("td",null,"The callback function. After the ",(0,a.kt)("code",null,"SelectorQuery.exec")," method is executed, the node information will be returned in callback.")))),(0,a.kt)("h4",{id:"sample-code-4"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.createSelectorQuery().selectViewport().scrollOffset(function(res){\n  res.id      // The id of the node\n  res.dataset // The dataset of the node\n  res.scrollLeft // The horizontal scroll position of the node\n  res.scrollTop  // The vertical scroll position of the node\n}).exec()\n")),(0,a.kt)("h4",{id:"api-support-4"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NodesRef.scrollOffset"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"boundingclientrectcallback"},"BoundingClientRectCallback"),(0,a.kt)("p",null,"The callback function. After the ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectorQuery.exec")," method is executed, the node information will be returned in callback."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: BoundingClientRectCallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BoundingClientRectCallbackResult"))))),(0,a.kt)("h3",{id:"boundingclientrectcallbackresult"},"BoundingClientRectCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"dataset"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",null,"The dataset of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"id"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The ID of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"bottom"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The lower boundary coordinate of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"left"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The left boundary coordinate of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"right"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The right boundary coordinate of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"top"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The upper boundary coordinate of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The height of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"width"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The width of the node")))),(0,a.kt)("h3",{id:"contextcallback"},"ContextCallback"),(0,a.kt)("p",null,"The callback function. After the ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectorQuery.exec")," method is executed, the node information will be returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: ContextCallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"ContextCallbackResult"))))),(0,a.kt)("h3",{id:"contextcallbackresult"},"ContextCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"context"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",null,"The Context object of the node")))),(0,a.kt)("h3",{id:"fields-1"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"computedStyle"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the style name list and returns the current value of the node style name")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"context"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Indicates whether to return the Context object of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"dataset"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Indicates whether to return the node dataset")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"id"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Indicates whether to return the node ID")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"mark"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to return the node mark")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"node"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to return the Node instance corresponding to the node.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"properties"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string[]")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'Specifies the property name list and returns the current property value of the node property name (only the general property values listed in the component document can be obtained, and "id class style" and the property values bound to events cannot be obtained)')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"rect"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Indicates whether to return the node layout position (",(0,a.kt)("code",null,"left")," ",(0,a.kt)("code",null,"right")," ",(0,a.kt)("code",null,"top")," ",(0,a.kt)("code",null,"bottom"),")")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollOffset"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Indicates whether to return the node's ",(0,a.kt)("code",null,"scrollLeft")," and ",(0,a.kt)("code",null,"scrollTop"),". The node must be ",(0,a.kt)("code",null,"scroll-view")," or ",(0,a.kt)("code",null,"viewport"),".")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"size"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Indicates whether to return the node size (",(0,a.kt)("code",null,"width")," and ",(0,a.kt)("code",null,"height"),")")))),(0,a.kt)("h3",{id:"fieldscallback"},"FieldsCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: Record<string, any>) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"res"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",null,"Information about nodes")))),(0,a.kt)("h3",{id:"nodecallback"},"NodeCallback"),(0,a.kt)("p",null,"The callback function. After the ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectorQuery.exec")," method is executed, the node information will be returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: NodeCallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"NodeCallbackResult"))))),(0,a.kt)("h3",{id:"nodecallbackresult"},"NodeCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"node"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",null,"Node instances corresponding to nodes")))),(0,a.kt)("h3",{id:"scrolloffsetcallback"},"ScrollOffsetCallback"),(0,a.kt)("p",null,"The callback function. After the ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectorQuery.exec")," method is executed, the node information will be returned in callback."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: ScrollOffsetCallbackResult) => void\n")),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"ScrollOffsetCallbackResult"))))),(0,a.kt)("h3",{id:"scrolloffsetcallbackresult"},"ScrollOffsetCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"dataset"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Record<string, any>")),(0,a.kt)("td",null,"The dataset of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"id"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"The ID of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollLeft"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The horizontal scroll position of the node")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollTop"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"The vertical scroll position of the node")))),(0,a.kt)("h2",{id:"api-support-5"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NodesRef.boundingClientRect"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NodesRef.context"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NodesRef.fields"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NodesRef.node"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NodesRef.scrollOffset"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);
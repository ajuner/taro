(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[28597],{22122:function(t,e,a){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}a.d(e,{Z:function(){return r}})},19756:function(t,e,a){"use strict";function r(t,e){if(null==t)return{};var a,r,n={},p=Object.keys(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}a.d(e,{Z:function(){return r}})},3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return k},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},p=Object.keys(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),c=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},k=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,p=t.originalType,i=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),u=c(a),d=n,s=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return a?r.createElement(s,l(l({ref:e},k),{},{components:a})):r.createElement(s,l({ref:e},k))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=a.length,l=new Array(p);l[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var c=2;c<p;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},57449:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return i},default:function(){return k}});var r=a(22122),n=a(19756),p=(a(67294),a(3905)),l={slug:"2020-04-27-taro-vs-jd",title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",author:"JJ",author_url:"https://github.com/Chen-jj",author_image_url:"https://storage.jd.com/cjj-pub-images/11807297.png"},o={permalink:"/taro/blog/2020-04-27-taro-vs-jd",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2020-04-27-taro-vs-jd.md",source:"@site/blog/2020-04-27-taro-vs-jd.md",title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",description:"Taro \u5df2\u7ecf 100% \u652f\u6301\u8f6c\u6362\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u53d7\u5230\u4e86\u5f88\u591a\u540c\u5b66\u7684\u5173\u6ce8\u3002\u5f53\u4e2d\u6709\u6b22\u547c\u96c0\u8dc3\u7684\u58f0\u97f3\uff1a\u201c\u4e00\u952e\u8f6c\u6362\u4e3a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u7ec8\u4e8e\u53ef\u4ee5\u51c6\u65f6\u4e0b\u73ed\u5566\u201d\u3002\u4e5f\u6709\u5bf9 Taro \u4e0d\u592a\u4e86\u89e3\u7684\u540c\u5b66\u63d0\u51fa\u4e86\u4e00\u4e9b\u7591\u95ee\uff1a\u201c\u8f6c\u6362\u7684\u6548\u679c\u5982\u4f55\uff1f\u201d\u3001\u201c\u8f6c\u6362\u540e\u4ee3\u7801\u7684\u6027\u80fd\u662f\u5426\u8fbe\u6807\uff1f\u201d \u7b49\u7b49\u3002",date:"2020-04-27T00:00:00.000Z",formattedDate:"2020\u5e744\u670827\u65e5",tags:[],readingTime:2.015,truncated:!0,prevItem:{title:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2020-04-27-taro-build-jd"},nextItem:{title:"Taro Next H5 \u8de8\u6846\u67b6\u7ec4\u4ef6\u5e93\u5b9e\u8df5",permalink:"/taro/blog/2020-4-13-taro-components"}},i=[{value:"\u6027\u80fd\u5bf9\u6bd4",id:"\u6027\u80fd\u5bf9\u6bd4",children:[{value:"Taro \u7a7a\u9879\u76ee\u5305\u5927\u5c0f",id:"taro-\u7a7a\u9879\u76ee\u5305\u5927\u5c0f",children:[]},{value:"\u957f\u5217\u8868\u6e32\u67d3\u8868\u73b0",id:"\u957f\u5217\u8868\u6e32\u67d3\u8868\u73b0",children:[]},{value:"Taro \u5bf9\u5c0f\u7a0b\u5e8f\u7684\u6027\u80fd\u4f18\u5316",id:"taro-\u5bf9\u5c0f\u7a0b\u5e8f\u7684\u6027\u80fd\u4f18\u5316",children:[]}]},{value:"\u5f00\u53d1\u4f53\u9a8c\u5bf9\u6bd4",id:"\u5f00\u53d1\u4f53\u9a8c\u5bf9\u6bd4",children:[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",children:[]},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",children:[]},{value:"\u5f00\u53d1\u751f\u6001",id:"\u5f00\u53d1\u751f\u6001",children:[]},{value:"\u5f00\u53d1\u8f85\u52a9",id:"\u5f00\u53d1\u8f85\u52a9",children:[]}]},{value:"\u5199\u5728\u6700\u540e",id:"\u5199\u5728\u6700\u540e",children:[]}],c={toc:i};function k(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img10.360buyimg.com/ling/jfs/t1/112290/35/2116/67015/5e9eee51E11ea7938/886d7ddc2e9e6026.png",alt:null})),(0,p.kt)("p",null,"Taro \u5df2\u7ecf 100% \u652f\u6301\u8f6c\u6362",(0,p.kt)("a",{parentName:"p",href:"https://taro.jd.com/jdmp/index.html"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),"\uff0c\u53d7\u5230\u4e86\u5f88\u591a\u540c\u5b66\u7684\u5173\u6ce8\u3002\u5f53\u4e2d\u6709\u6b22\u547c\u96c0\u8dc3\u7684\u58f0\u97f3\uff1a\u201c\u4e00\u952e\u8f6c\u6362\u4e3a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u7ec8\u4e8e\u53ef\u4ee5\u51c6\u65f6\u4e0b\u73ed\u5566\u201d\u3002\u4e5f\u6709\u5bf9 Taro \u4e0d\u592a\u4e86\u89e3\u7684\u540c\u5b66\u63d0\u51fa\u4e86\u4e00\u4e9b\u7591\u95ee\uff1a\u201c\u8f6c\u6362\u7684\u6548\u679c\u5982\u4f55\uff1f\u201d\u3001\u201c\u8f6c\u6362\u540e\u4ee3\u7801\u7684\u6027\u80fd\u662f\u5426\u8fbe\u6807\uff1f\u201d \u7b49\u7b49\u3002"),(0,p.kt)("p",null,"\u9488\u5bf9\u5404\u79cd\u7591\u95ee\uff0c\u6211\u4eec\u4ece\u6027\u80fd\u4e0e\u5f00\u53d1\u4f53\u9a8c\u7684\u89d2\u5ea6\u5207\u5165\uff0c\u628a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u539f\u751f\u5f00\u53d1\u4e0e Taro \u5f00\u53d1\u8fdb\u884c\u4e86\u4e00\u756a\u5bf9\u6bd4\u3002"),(0,p.kt)("h2",{id:"\u6027\u80fd\u5bf9\u6bd4"},"\u6027\u80fd\u5bf9\u6bd4"),(0,p.kt)("p",null,"\u9488\u5bf9\u6027\u80fd\u7684\u95ee\u9898\uff0c\u6211\u4eec\u5206\u522b\u6d4b\u8bd5\u4e86 Taro \u7a7a\u9879\u76ee\u7684\u5305\u5927\u5c0f\u548c Taro \u5728\u957f\u5217\u8868\u4e2d\u7684\u8868\u73b0\u3002\u56e0\u4e3a\u5305\u5927\u5c0f\u4f1a\u5f71\u54cd\u5c0f\u7a0b\u5e8f\u7684\u9996\u6b21\u52a0\u8f7d\u901f\u5ea6\uff0c\u800c\u957f\u5217\u8868\u5219\u662f\u5e38\u5e38\u51fa\u73b0\u6027\u80fd\u74f6\u9888\u7684\u573a\u666f\u3002"),(0,p.kt)("h3",{id:"taro-\u7a7a\u9879\u76ee\u5305\u5927\u5c0f"},"Taro \u7a7a\u9879\u76ee\u5305\u5927\u5c0f"),(0,p.kt)("p",null,"\u76ee\u524d\u5404\u5c0f\u7a0b\u5e8f\u90fd\u6709\u5bf9\u4e3b\u5305\u7684\u5927\u5c0f\u8fdb\u884c\u9650\u5236\uff0c\u5982\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u9650\u5236\u4e3a 5M\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u9650\u5236\u4e3a 2M\u3002\u8fd9\u662f\u56e0\u4e3a\u521d\u6b21\u8fdb\u5165\u7684\u901f\u5ea6\u5bf9\u4e8e\u7528\u6237\u7684\u4f53\u9a8c\u975e\u5e38\u5730\u5173\u952e\uff0c\u800c\u4e3b\u5305\u4f53\u79ef\u8d8a\u5927\u4e0b\u8f7d\u7684\u65f6\u95f4\u5c31\u6700\u957f\u3002\u56e0\u6b64\u5c0f\u7a0b\u5e8f\u6846\u67b6\u7684\u5927\u5c0f\u4e5f\u6210\u4e3a\u4e86\u5f00\u53d1\u524d\u6846\u67b6\u9009\u578b\u7684\u91cd\u8981\u53c2\u8003\u6307\u6807\u4e4b\u4e00\uff0c\u5018\u82e5\u6846\u67b6\u4f53\u79ef\u8fc7\u5927\uff0c\u5c31\u4f1a\u538b\u7f29\u4e1a\u52a1\u903b\u8f91\u7684\u53ef\u7528\u7a7a\u95f4\u3002"),(0,p.kt)("p",null,"\u4e0b\u5217\u56fe\u7247\u5206\u522b\u662f Taro \u8fd0\u884c\u65f6\u6846\u67b6\u538b\u7f29\u524d\u540e\u7684\u5927\u5c0f\uff0c\u53ef\u4ee5\u770b\u5230\u538b\u7f29\u540e\u4ec5\u4e3a84k\uff0c\u5bf9\u4e3b\u5305\u7a7a\u95f4\u7684\u5f71\u54cd\u5341\u5206\u5c0f\u3002"),(0,p.kt)("p",null,"\u538b\u7f29\u524d\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11807297/67547702-5bacfd80-f732-11e9-9b99-9cbe93c2e19c.png",alt:"QQ20191025-141758"})),(0,p.kt)("p",null,"\u538b\u7f29\u540e\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11807297/67548124-9e230a00-f733-11e9-91e8-fe5bff2e5e67.png",alt:"QQ20191025-142728"})),(0,p.kt)("h3",{id:"\u957f\u5217\u8868\u6e32\u67d3\u8868\u73b0"},"\u957f\u5217\u8868\u6e32\u67d3\u8868\u73b0"),(0,p.kt)("h4",{id:"benchmark-\u4ecb\u7ecd"},"benchmark \u4ecb\u7ecd"),(0,p.kt)("p",null,"\u6211\u4eec\u53c2\u7167 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/krausest/js-framework-benchmark"},"js-framework-benchmark")," \u7f16\u5199\u4e86\u4e00\u4efd benchmark\uff0c\u6d4b\u8bd5\u5bf9\u6bd4\u4e86 Taro \u4ee3\u7801\u4e0e\u539f\u751f\u4ee3\u7801\u5728\u957f\u5217\u8868\u573a\u666f\u4e0b\u7684\u6e32\u67d3\u8868\u73b0\u3002"),(0,p.kt)("h5",{id:"\u6d4b\u901f\u6307\u6807"},"\u6d4b\u901f\u6307\u6807"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\uff1a\u4ece\u8fdb\u5165\u9875\u9762\u5f00\u59cb\u5230\u5b8c\u6210 40 \u4e2a\u5546\u54c1\u7684\u6e32\u67d3\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u521b\u5efa\uff1a\u9875\u9762 onLoad \u540e\u521b\u5efa 40 \u4e2a\u5546\u54c1\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u589e\u52a0\uff1a\u5f80\u5df2\u521b\u5efa\u4e86 40 \u4e2a\u5546\u54c1\u7684\u5217\u8868\u4e2d\u6bcf\u6b21\u589e\u52a0 20 \u4e2a\u5546\u54c1\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u90e8\u5206\u66f4\u65b0\uff1a\u5728 400 \u4e2a\u5546\u54c1\u4e2d\u66f4\u65b0\u6bcf\u7b2c 10 \u4e2a\u5546\u54c1\u7684\u540d\u79f0\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u4ea4\u6362\uff1a\u5728 400 \u4e2a\u5546\u54c1\u4e2d\u4ea4\u6362\u5176\u4e2d\u4e24\u4e2a\u5546\u54c1\u7684\u4f4d\u7f6e\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u9009\u4e2d\uff1a\u70b9\u51fb\u5546\u54c1\u56fe\u7247\uff0c\u6539\u53d8\u5546\u54c1\u540d\u79f0\u7684\u5b57\u4f53\u989c\u8272\u3002"))),(0,p.kt)("h5",{id:"\u8ba1\u65f6\u70b9"},"\u8ba1\u65f6\u70b9"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Taro"),"\uff1a"),(0,p.kt)("p",null,"\u5f00\u59cb\uff1a\u4e8b\u4ef6\u54cd\u5e94\u51fd\u6570\u7684\u9876\u90e8\u3002"),(0,p.kt)("p",null,"\u7ed3\u675f\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"setState")," \u56de\u8c03\u51fd\u6570\u7684\u9876\u90e8\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u539f\u751f\u5c0f\u7a0b\u5e8f"),"\uff1a"),(0,p.kt)("p",null,"\u5f00\u59cb\uff1a\u4e8b\u4ef6\u54cd\u5e94\u51fd\u6570\u7684\u9876\u90e8\u3002"),(0,p.kt)("p",null,"\u7ed3\u675f\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"setData")," \u56de\u8c03\u51fd\u6570\u7684\u9876\u90e8\u3002"),(0,p.kt)("h5",{id:"\u5176\u5b83"},"\u5176\u5b83"),(0,p.kt)("p",null,"benchmark \u4ed3\u5e93\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-benchmark"},"Github")),(0,p.kt)("p",null,"Taro \u7248\u672c\uff1a1.3.21"),(0,p.kt)("p",null,"\u6d4b\u8bd5\u673a\u578b\uff1a\u9b45\u84dd note"),(0,p.kt)("p",null,"\u6d4b\u8bd5\u65b9\u6cd5\uff1a\u6bcf\u7ec4\u6d4b\u8bd5 10 \u6761\u6570\u636e\uff0c\u53bb\u9664\u5176\u4e2d\u6700\u5927\u503c\u4e0e\u6700\u5c0f\u503c\u540e\u6c42\u5e73\u5747\u503c"),(0,p.kt)("h4",{id:"\u6d4b\u8bd5\u7ed3\u679c"},"\u6d4b\u8bd5\u7ed3\u679c"),(0,p.kt)("p",null,"\u56e0\u4e3a\u5728\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u4e0e\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d\uff0csetData \u7684 callback \u7684\u89e6\u53d1\u65f6\u673a\u7a0d\u6709\u4e0d\u540c\uff0c\u6240\u4ee5",(0,p.kt)("strong",{parentName:"p"},"\u5206\u5f00\u5217\u51fa"),"\u3002"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"\u64cd\u4f5c"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Taro jd"),(0,p.kt)("th",{parentName:"tr",align:"center"},"\u539f\u751f\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"\u521d\u59cb\u5316"),(0,p.kt)("td",{parentName:"tr",align:"center"},"150"),(0,p.kt)("td",{parentName:"tr",align:"center"},"123")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"\u521b\u5efa"),(0,p.kt)("td",{parentName:"tr",align:"center"},"87"),(0,p.kt)("td",{parentName:"tr",align:"center"},"85")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"\u90e8\u5206\u66f4\u65b0"),(0,p.kt)("td",{parentName:"tr",align:"center"},"125"),(0,p.kt)("td",{parentName:"tr",align:"center"},"235")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"\u4ea4\u6362"),(0,p.kt)("td",{parentName:"tr",align:"center"},"140"),(0,p.kt)("td",{parentName:"tr",align:"center"},"213")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"\u9009\u4e2d"),(0,p.kt)("td",{parentName:"tr",align:"center"},"131"),(0,p.kt)("td",{parentName:"tr",align:"center"},"155")))),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"\u64cd\u4f5c"),(0,p.kt)("th",{parentName:"tr",align:"center"},"Taro weapp"),(0,p.kt)("th",{parentName:"tr",align:"center"},"\u539f\u751f\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,p.kt)("th",{parentName:"tr",align:"center"}))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"\u521d\u59cb\u5316"),(0,p.kt)("td",{parentName:"tr",align:"center"},"1155"),(0,p.kt)("td",{parentName:"tr",align:"center"},"1223"),(0,p.kt)("td",{parentName:"tr",align:"center"})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"\u521b\u5efa"),(0,p.kt)("td",{parentName:"tr",align:"center"},"500"),(0,p.kt)("td",{parentName:"tr",align:"center"},"408"),(0,p.kt)("td",{parentName:"tr",align:"center"})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"\u90e8\u5206\u66f4\u65b0"),(0,p.kt)("td",{parentName:"tr",align:"center"},"167"),(0,p.kt)("td",{parentName:"tr",align:"center"},"307"),(0,p.kt)("td",{parentName:"tr",align:"center"})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"\u4ea4\u6362"),(0,p.kt)("td",{parentName:"tr",align:"center"},"252"),(0,p.kt)("td",{parentName:"tr",align:"center"},"309"),(0,p.kt)("td",{parentName:"tr",align:"center"})),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"\u9009\u4e2d"),(0,p.kt)("td",{parentName:"tr",align:"center"},"193"),(0,p.kt)("td",{parentName:"tr",align:"center"},"178"),(0,p.kt)("td",{parentName:"tr",align:"center"})))),(0,p.kt)("p",null,"\u7ecf\u6d4b\u8bd5\u53d1\u73b0\uff0c\u5217\u8868\u7684\u957f\u5ea6\u4f1a\u5bf9\u589e\u52a0\u64cd\u4f5c\u7684\u8017\u65f6\u4ea7\u751f\u5f71\u54cd\uff1a\u5217\u8868\u8d8a\u957f\uff0c\u589e\u52a0\u64cd\u4f5c\u7684\u8017\u65f6\u8d8a\u4e45\u3002\u56e0\u6b64\u4e0d\u80fd\u7b80\u5355\u5730\u5bf9 N \u6b21\u589e\u52a0\u64cd\u4f5c\u6c42\u5e73\u5747\u589e\u52a0\u8017\u65f6\u3002\u8fd9\u91cc\u6211\u4eec\u9009\u62e9\u4f7f\u7528\u6298\u7ebf\u56fe\u6765\u5c55\u73b0\u51fa\u968f\u589e\u52a0\u64cd\u4f5c\u6b21\u6570\u7684\u53d8\u5316\uff0c\u6e32\u67d3\u8017\u65f6\u7684\u53d8\u5316\u8d8b\u52bf\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11807297/67666146-23155a00-f9a6-11e9-9644-ecdc2d6301ea.png",alt:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u2014\u2014\u589e\u52a0"})),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/11807297/67656291-5350fe80-f98e-11e9-8c00-0123028a7471.png",alt:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u2014\u2014\u589e\u52a0"})),(0,p.kt)("h4",{id:"\u6d4b\u8bd5\u7ed3\u8bba"},"\u6d4b\u8bd5\u7ed3\u8bba"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u521b\u5efa")),(0,p.kt)("p",null,"\u5728\u521b\u5efa\u65f6\uff0cTaro \u4f1a\u5bf9\u6570\u636e\u505a\u4e00\u4e9b\u5904\u7406\uff0c\u56e0\u6b64\u4f1a\u6bd4\u539f\u751f\u7a0d\u6162\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316")),(0,p.kt)("p",null,"\u521d\u59cb\u5316\u4e0e\u521b\u5efa\u76f8\u6bd4\uff0c\u5dee\u522b\u662f\u5f15\u5165\u4e86\u9875\u9762\u6784\u9020\u8017\u65f6\u3002\u5373",(0,p.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u8017\u65f6 = \u9875\u9762\u6784\u9020\u8017\u65f6 + \u521b\u5efa\u64cd\u4f5c\u8017\u65f6"),"\u3002"),(0,p.kt)("p",null,"Taro \u5728\u9875\u9762\u521d\u59cb\u5316\u3001\u521b\u5efa\u64cd\u4f5c\u65f6\u90fd\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u56e0\u6b64\u6574\u4e2a\u521d\u59cb\u5316\u8017\u65f6\u4f1a\u6bd4\u539f\u751f\u7a0d\u6162\u3002"),(0,p.kt)("p",null,"\u90a3\u4e3a\u4ec0\u4e48\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d Taro \u521d\u59cb\u5316\u8017\u65f6\u66f4\u77ed\u5462\uff1f\u5728 benchmark \u4e2d Taro \u548c\u539f\u751f\u5206\u522b\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"componentWillMount")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"onLoad")," \u6e32\u67d3\u5217\u8868\uff0c\u800c Taro \u4f7f\u7528 ",(0,p.kt)("strong",{parentName:"p"},"Component")," \u6784\u9020\u9875\u9762\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"componentWillMount")," \u5176\u5b9e\u662f\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"attached")," \u751f\u547d\u5468\u671f\u4e2d\u89e6\u53d1\u3002\u56e0\u4e3a\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"attached")," \u6bd4 ",(0,p.kt)("inlineCode",{parentName:"p"},"onLoad")," \u65e9\u89e6\u53d1\u5f97\u591a\uff0c\u6240\u4ee5\u4f1a\u51fa\u73b0\u5982\u6b64\u73b0\u8c61\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u9009\u4e2d")),(0,p.kt)("p",null,"\u56e0\u4e3a Taro \u53ea\u662f\u628a\u56de\u8c03\u51fd\u6570\u5305\u88c5\u4e86\u4e00\u5c42\uff0c\u5904\u7406\u4e86\u4e8b\u4ef6\u53c2\u6570\u548c this \u7b49\uff0c\u6240\u4ee5\u548c\u539f\u751f\u7684\u901f\u5ea6\u76f8\u5f53\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u90e8\u5206\u66f4\u65b0\u3001\u4ea4\u6362\u3001\u589e\u52a0")),(0,p.kt)("p",null,"Taro \u7684\u901f\u5ea6\u4f1a\u4f18\u4e8e\u539f\u751f\u3002\u539f\u56e0\u662f Taro \u4f1a\u5148\u5bf9\u5c06\u8981 setData \u7684\u6570\u636e\u548c\u5f53\u524d data \u7684\u6570\u636e\u505a\u4e00\u6b21 ",(0,p.kt)("a",{parentName:"p",href:"https://nervjs.github.io/taro/docs/optimized-practice.html#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%95%B0%E6%8D%AE-diff"},"diff"),"\uff0c\u8fd9\u80fd\u591f\u5927\u5927\u51cf\u5c11 setData \u7684\u6570\u636e\u91cf\uff0c\u52a0\u5feb\u6e32\u67d3\u901f\u5ea6\u3002\u5bf9\u6bd4\u4e24\u4e2a\u6298\u7ebf\u56fe\u53ef\u4ee5\u5f97\u77e5\uff0c\u6570\u636e\u91cf\u8d8a\u5927\uff0cdiff \u7684\u4f18\u5316\u6536\u76ca\u4e5f\u8d8a\u5927\u3002"),(0,p.kt)("h3",{id:"taro-\u5bf9\u5c0f\u7a0b\u5e8f\u7684\u6027\u80fd\u4f18\u5316"},"Taro \u5bf9\u5c0f\u7a0b\u5e8f\u7684\u6027\u80fd\u4f18\u5316"),(0,p.kt)("h4",{id:"setdata"},"setData"),(0,p.kt)("p",null,"\u5728\u5c0f\u7a0b\u5e8f\u4e2d\uff0c\u6027\u80fd\u7684\u95ee\u9898\u4e3b\u8981\u5728\u4e8e\u5355\u6b21 setData \u6570\u636e\u91cf\u8fc7\u5927\u548c\u9891\u7e41\u8c03\u7528 setData \u4e0a\u3002Taro \u5229\u7528 diff \u89e3\u51b3\u4e86\u5355\u6b21 setData \u6570\u636e\u91cf\u8fc7\u5927\u7684\u95ee\u9898\uff0c\u800c\u5bf9\u4e8e\u9891\u7e41\u8c03\u7528 setData \u4e5f\u6709\u89e3\u51b3\u7684\u529e\u6cd5\u3002"),(0,p.kt)("p",null,"Taro \u7684 setState \u9075\u5faa React \u89c4\u8303\uff0c\u4e0d\u540c\u4e8e setData \u7684\u540c\u6b65\u66f4\u65b0\uff0c\u5b83\u4f1a\u5f02\u6b65\u5730\u53bb\u66f4\u65b0\u89c6\u56fe\u3002\u56e0\u6b64\u5047\u8bbe\u5f00\u53d1\u8005\u5728\u5355\u6b21\u4e8b\u4ef6\u5faa\u73af\u4e2d\u591a\u6b21\u8c03\u7528 setState\uff0c\u6700\u540e\u4e5f\u53ea\u4f1a\u5728\u4e0b\u4e00\u4e2a\u4e8b\u4ef6\u5faa\u73af\u4e2d\u8fdb\u884c\u4e00\u6b21 setData\u3002"),(0,p.kt)("h4",{id:"\u8df3\u8f6c\u9884\u52a0\u8f7d"},"\u8df3\u8f6c\u9884\u52a0\u8f7d"),(0,p.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u7531 A \u9875\u9762\u8df3\u8f6c\u5230 B \u9875\u9762\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4ece A \u9875\u9762\u53d1\u8d77\u8df3\u8f6c\u5230 B \u9875\u9762\u89e6\u53d1 onLoad\uff0c\u6709\u7740 300~400 \u6beb\u79d2\u7684\u5ef6\u65f6\u3002Taro \u63d0\u4f9b\u4e86 ",(0,p.kt)("inlineCode",{parentName:"p"},"componentWillPreload")," \u94a9\u5b50\uff0c\u94a9\u5b50\u4f1a\u5728\u53d1\u8d77\u8df3\u8f6c\u540e\u7acb\u5373\u6267\u884c\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u5c3d\u65e9\u5730\u5728\u94a9\u5b50\u91cc\u505a\u4e00\u4e9b\u6570\u636e\u62c9\u53d6\u7684\u5de5\u4f5c\uff0c\u76f8\u6bd4\u5728 onLoad \u89e6\u53d1\u540e\u518d\u53bb\u62c9\u53d6\u6570\u636e\u5c31\u80fd\u591f\u8282\u7701 300~400 \u6beb\u79d2\u7684\u5ef6\u65f6\u3002"),(0,p.kt)("h4",{id:"shouldcomponentupdate--taropurecomponent"},"shouldComponentUpdate & Taro.PureComponent"),(0,p.kt)("p",null,"\u5f00\u53d1\u8005\u7684 Class Component \u53ef\u4ee5\u7ee7\u627f ",(0,p.kt)("inlineCode",{parentName:"p"},"Taro.PureComponent"),"\uff0c\u8fd9\u6837\u7ec4\u4ef6\u5728\u66f4\u65b0\u524d\u4f1a\u5bf9\u65b0\u65e7 props \u548c\u65b0\u65e7 state \u5404\u505a\u4e00\u6b21\u6d45\u5bf9\u6bd4\uff0c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u66f4\u65b0\u3002\u5f53\u7136\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0 ",(0,p.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),"\uff0c\u901a\u8fc7\u624b\u52a8\u63a7\u5236\u65b0\u65e7 props \u548c\u65b0\u65e7 state \u7684\u5bf9\u6bd4\uff0c\u51b3\u5b9a\u662f\u5426\u66f4\u65b0\u7ec4\u4ef6\u3002"),(0,p.kt)("h4",{id:"taromemo"},"Taro.memo"),(0,p.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u4e66\u5199\u7684\u662f\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff0c\u5219\u53ef\u4ee5\u5229\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"Taro.memo")," \u5b9e\u73b0 shouldComponentUpdate \u7684\u76f8\u540c\u529f\u80fd\u3002"),(0,p.kt)("h2",{id:"\u5f00\u53d1\u4f53\u9a8c\u5bf9\u6bd4"},"\u5f00\u53d1\u4f53\u9a8c\u5bf9\u6bd4"),(0,p.kt)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,p.kt)("p",null,"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u7684\u539f\u751f\u8bed\u6cd5\u548c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u76f8\u4eff\uff0c\u90fd\u662f\u7c7b MVVM \u8bed\u6cd5\uff0c\u6ca1\u6709\u63a5\u89e6\u8fc7\u5c0f\u7a0b\u5e8f\u7684\u5f00\u53d1\u8005\u6709\u4e00\u5b9a\u5b66\u4e60\u6210\u672c\u3002\u53e6\u5916\u6837\u5f0f\u8bed\u6cd5\u4e3a css \u7684\u5b50\u96c6\uff0c\u5176\u4e2d\u81ea\u9002\u5e94\u5c3a\u5bf8\u5355\u4f4d\u4e3a rpx\uff0c\u8fd9\u6837\u610f\u5473\u7740\u5982\u679c\u6211\u4eec\u9700\u8981 css \u9884\u5904\u7406\u5668\u65f6\u9700\u8981\u624b\u52a8\u914d\u7f6e\u5de5\u4f5c\u6d41\uff0c\u5e76\u4e14\u5728\u7f16\u5199\u6837\u5f0f\u65f6\u5904\u5904\u6ce8\u610f\u5c3a\u5bf8\u5355\u4f4d\u7684\u8f6c\u6362\u3002"),(0,p.kt)("p",null,"\u76ee\u524d Taro \u9075\u5faa React \u8bed\u6cd5\uff08\u5c06\u6765\u4f1a\u652f\u6301\u6240\u6709 Web \u524d\u7aef\u6846\u67b6\uff09\uff0cJSX \u4ee4\u6211\u4eec\u7684\u4ee3\u7801\u66f4\u52a0\u7075\u6d3b\u3002\u56e0\u6b64\u62e5\u6709 React \u5f00\u53d1\u7ecf\u9a8c\u7684\u5f00\u53d1\u8005\u53ef\u4ee5\u9a6c\u4e0a\u4e0a\u624b Taro \u7684\u5f00\u53d1\u5de5\u4f5c\u3002\u5728\u6837\u5f0f\u65b9\u9762 Taro \u652f\u6301\u5728\u521b\u5efa\u9879\u76ee\u65f6\u9009\u62e9\u662f\u5426\u4f7f\u7528 css \u9884\u5904\u7406\u5668\uff0c\u9009\u62e9\u540e\u4f1a\u81ea\u52a8\u914d\u7f6e\u76f8\u5e94\u7684\u5de5\u4f5c\u6d41\u3002\u5bf9\u4e8e\u6837\u5f0f\u5355\u4f4d Taro \u4e5f\u4f1a\u628a\u7528\u6237\u7f16\u5199\u7684 px \u6570\u503c\u81ea\u52a8\u8f6c\u6362\u6210\u5bf9\u5e94\u7684 rpx \u6570\u503c\uff0c\u5f00\u53d1\u8005\u65e0\u9700\u518d\u5206\u5fc3\u5904\u7406\u5404\u5e73\u53f0\u7684\u6837\u5f0f\u5355\u4f4d\u3002"),(0,p.kt)("h3",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),(0,p.kt)("p",null,"\u539f\u751f\u5f00\u53d1\u4e2d\uff0c\u9875\u9762\u548c\u7ec4\u4ef6\u5404\u75314\u4e2a\u6587\u4ef6\uff08js\u3001jxml\u3001jxss\u3001json\uff09\u6240\u7ec4\u6210\uff0c\u4ee3\u7801\u7ba1\u7406\u76f8\u5bf9\u9ebb\u70e6\u3002"),(0,p.kt)("p",null,"Taro \u4e2d\u9875\u9762\u548c\u7ec4\u4ef6\u5747\u7531\u4e00\u4efd js \u6587\u4ef6\u548c\u4e00\u4efd\u6837\u5f0f\u6587\u4ef6\u7ec4\u6210\uff0c\u521b\u5efa\u4e0e\u7ef4\u62a4\u5341\u5206\u5bb9\u6613\u3002"),(0,p.kt)("h3",{id:"\u5f00\u53d1\u751f\u6001"},"\u5f00\u53d1\u751f\u6001"),(0,p.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7ecf\u8fc7\u4e0d\u65ad\u8fed\u4ee3\uff0c\u76f8\u7ee7\u63a8\u51fa\u4e86\u63d2\u4ef6\u7cfb\u7edf\u548c\u652f\u6301\u5f15\u7528 npm \u5305\u7684\u529f\u80fd\u3002\u4f46\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301\u524d\u4e24\u8005\uff0c\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u793e\u533a\u4e5f\u8fd8\u6ca1\u6253\u9020\u8d77\u6765\uff0c\u5f00\u53d1\u751f\u6001\u8d44\u6e90\u5341\u5206\u532e\u4e4f\u3002"),(0,p.kt)("p",null,"Taro \u4e2d\u4e0d\u4f46\u80fd\u81ea\u7531\u5f15\u7528 npm \u5305\uff0c\u800c\u4e14\u8fd8\u5927\u91cf\u652f\u6301 React \u793e\u533a\u4e2d\u6c89\u6dc0\u7684\u4f18\u79c0\u5de5\u5177\u548c\u5e93\uff0c\u5982 react-redux\u3001mobx-react \u7b49\u3002"),(0,p.kt)("h3",{id:"\u5f00\u53d1\u8f85\u52a9"},"\u5f00\u53d1\u8f85\u52a9"),(0,p.kt)("p",null,"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u539f\u751f\u5f00\u53d1\u4e0d\u652f\u6301 Typescript\uff0c\u53ea\u80fd\u5728 IDE \u7684\u7f16\u8f91\u5668\u4e2d\u6709\u81ea\u52a8\u8865\u5168\u529f\u80fd\uff0c\u7f16\u7801\u6548\u7387\u4e0d\u9ad8\uff0c\u540c\u65f6\u4e5f\u5bb9\u6613\u51fa\u9519\u3002"),(0,p.kt)("p",null,"Taro \u5b8c\u7f8e\u652f\u6301 Typescript\uff0c\u81ea\u5e26\u4ee3\u7801\u667a\u80fd\u63d0\u793a\u548c\u4ee3\u7801\u5b9e\u65f6\u68c0\u67e5\u529f\u80fd\uff0c\u80fd\u8ba9\u5f00\u53d1\u6548\u7387\u5927\u5927\u63d0\u5347\u3002"),(0,p.kt)("h2",{id:"\u5199\u5728\u6700\u540e"},"\u5199\u5728\u6700\u540e"),(0,p.kt)("p",null,"\u770b\u5230\u8fd9\u91cc\u5927\u5bb6\u53ef\u80fd\u4f1a\u95ee\uff0cTaro \u6027\u80fd\u771f\u7684\u4f18\u4e8e\u539f\u751f\u5417\uff1f\u5176\u5b9e\u5e76\u4e0d\u7136\uff0c\u9488\u5bf9\u6bcf\u4e2a\u573a\u666f\uff0c\u6211\u4eec\u90fd\u53ef\u4ee5\u7528\u539f\u751f\u5199\u51fa\u6027\u80fd\u6700\u4f73\u7684\u4ee3\u7801\u3002\u4f46\u662f\u8fd9\u6837\u505a\u5de5\u4f5c\u91cf\u592a\u5927\uff0c\u5b9e\u9645\u9879\u76ee\u5f00\u53d1\u4e2d\u9700\u8981\u638c\u63e1\u6548\u7387\u4e0e\u4f18\u5316\u4e4b\u95f4\u7684\u5e73\u8861\u3002Taro \u7684\u4f18\u52bf\u5728\u4e8e\u80fd\u8ba9\u6211\u4eec\u5728\u4e66\u5199\u66f4\u6709\u6548\u7387\u7684\u4ee3\u7801\u3001\u62e5\u6709\u66f4\u4e30\u5bcc\u7684\u751f\u6001\u7684\u540c\u65f6\uff0c\u8fd8\u5e26\u6765\u4e86\u4e0d\u9519\u7684\u6027\u80fd\u3002"),(0,p.kt)("p",null,"\u6700\u540e\uff0c\u6b22\u8fce\u5927\u5bb6\u6765\u4f7f\u7528 Taro \u5f00\u53d1\u5404\u7aef\u5e94\u7528\uff0c\u6709\u4efb\u4f55\u5f00\u53d1\u95ee\u9898\u6216\u5408\u4f5c\u610f\u613f\u8bf7\u8054\u7cfb ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("a",{parentName:"strong",href:"mailto:taro@jd.com"},"taro@jd.com")),"\uff0c\u6211\u4eec\u4f1a\u7b2c\u4e00\u65f6\u95f4\u56de\u590d\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u76f8\u5173\u94fe\u63a5")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://taro.jd.com"},"Taro \u5b98\u65b9\u7f51\u7ad9"))),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://docs.taro.zone/docs/README"},"Taro \u6587\u6863"))),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://taro-club.jd.com/"},"Taro \u8bba\u575b"))))}k.isMDXComponent=!0}}]);
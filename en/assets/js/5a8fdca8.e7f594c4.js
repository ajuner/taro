(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56144],{22122:function(t,e,n){"use strict";function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return l}})},19756:function(t,e,n){"use strict";function l(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return l}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return i},kt:function(){return p}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),d=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},i=function(t){var e=d(t.components);return l.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,i=c(t,["components","mdxType","originalType","parentName"]),k=d(n),p=r,f=k["".concat(u,".").concat(p)]||k[p]||s[p]||a;return n?l.createElement(f,o(o({ref:e},i),{},{components:n})):l.createElement(f,o({ref:e},i))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=k;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},75928:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return i}});var l=n(22122),r=n(19756),a=(n(67294),n(3905)),o={title:"Taro.scanCode(option)",sidebar_label:"scanCode"},c={unversionedId:"apis/device/scan/scancode",id:"version-3.x/apis/device/scan/scancode",isDocsHomePage:!1,title:"Taro.scanCode(option)",description:"Opens the code scanning interface in the app to scan the code.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/scan/scancode.md",sourceDirName:"apis/device/scan",slug:"/apis/device/scan/scancode",permalink:"/taro/en/docs/apis/device/scan/scancode",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/scan/scancode.md",version:"3.x",sidebar_label:"scanCode",frontMatter:{title:"Taro.scanCode(option)",sidebar_label:"scanCode"},sidebar:"version-3.x/API",previous:{title:"Taro.onMemoryWarning(callback)",permalink:"/taro/en/docs/apis/device/performance/onMemoryWarning"},next:{title:"Taro.vibrateShort(option)",permalink:"/taro/en/docs/apis/device/vibrate/vibrateShort"}},u=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"ScanType",id:"scantype",children:[]},{value:"QRType",id:"qrtype",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],d={toc:u};function i(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Opens the code scanning interface in the app to scan the code."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/scan/wx.scanCode.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"onlyFromCamera"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Indicates whether to allow to scan code with camera only")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scanType"),(0,a.kt)("td",null,(0,a.kt)("code",null,'("barCode" | "qrCode" | "datamatrix" | "pdf417")[]')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Type of code to scan")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: Result) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"charSet"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Character set of code to scan")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"path"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"If the scanned code is the QR code of the current Mini Program, this field is returned, and the content is the path carried by the QR code.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"rawData"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Base64 encoded raw data")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"result"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Content of code to scan")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scanType"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"QR_CODE" | "AZTEC" | "CODABAR" | "CODE_39" | "CODE_93" | "CODE_128" | "DATA_MATRIX" | "EAN_8" | "EAN_13" | "ITF" | "MAXICODE" | "PDF_417" | "RSS_14" | "RSS_EXPANDED" | "UPC_A" | "UPC_E" | "UPC_EAN_EXTENSION" | "WX_CODE" | "CODE_25"')),(0,a.kt)("td",null,"Type of code to scan")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Call result")))),(0,a.kt)("h3",{id:"scantype"},"ScanType"),(0,a.kt)("p",null,"Valid values of object.scanType"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"barCode"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"qrCode"),(0,a.kt)("td",null,"QR code")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"datamatrix"),(0,a.kt)("td",null,"Data Matrix code")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"pdf417"),(0,a.kt)("td",null,"PDF417 barcode")))),(0,a.kt)("h3",{id:"qrtype"},"QRType"),(0,a.kt)("p",null,"Valid values of res.QRType"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"QR_CODE"),(0,a.kt)("td",null,"QR code")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"AZTEC"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CODABAR"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CODE_39"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CODE_93"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CODE_128"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DATA_MATRIX"),(0,a.kt)("td",null,"QR code")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EAN_8"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EAN_13"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ITF"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"MAXICODE"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"PDF_417"),(0,a.kt)("td",null,"QR code")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"RSS_14"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"RSS_EXPANDED"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"UPC_A"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"UPC_E"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"UPC_EAN_EXTENSION"),(0,a.kt)("td",null,"Barcode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"WX_CODE"),(0,a.kt)("td",null,"QR code")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CODE_25"),(0,a.kt)("td",null,"Barcode")))),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// Allow to scan code with camera and select code from albums\nTaro.scanCode({\n  success: (res) => {\n    console.log(res)\n  }\n})\n// Only allow to scan code with camera\nTaro.scanCode({\n  onlyFromCamera: true,\n  success: (res) => {\n    console.log(res)\n  }\n})\n")),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.scanCode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}i.isMDXComponent=!0}}]);
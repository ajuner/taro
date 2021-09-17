(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[45845],{22122:function(e,t,r){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return o}})},19756:function(e,t,r){"use strict";function o(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:function(){return o}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,v=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return r?o.createElement(v,i(i({ref:t},u),{},{components:r})):o.createElement(v,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},17792:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return s},default:function(){return u}});var o=r(22122),n=r(19756),l=(r(67294),r(3905)),i={title:"Taro.startBluetoothDevicesDiscovery(option)",sidebar_label:"startBluetoothDevicesDiscovery"},a={unversionedId:"apis/device/bluetooth/startBluetoothDevicesDiscovery",id:"version-3.x/apis/device/bluetooth/startBluetoothDevicesDiscovery",isDocsHomePage:!1,title:"Taro.startBluetoothDevicesDiscovery(option)",description:"Starts searching for nearby Bluetooth peripherals. This operation consumes a large amount of system resources. After searching for and connecting to a device, be sure to call the Taro.stopBluetoothDevicesDiscovery method to stop searching.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/bluetooth/startBluetoothDevicesDiscovery.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/startBluetoothDevicesDiscovery",permalink:"/taro/en/docs/apis/device/bluetooth/startBluetoothDevicesDiscovery",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/bluetooth/startBluetoothDevicesDiscovery.md",version:"3.x",sidebar_label:"startBluetoothDevicesDiscovery",frontMatter:{title:"Taro.startBluetoothDevicesDiscovery(option)",sidebar_label:"startBluetoothDevicesDiscovery"},sidebar:"version-3.x/API",previous:{title:"Taro.stopBluetoothDevicesDiscovery(option)",permalink:"/taro/en/docs/apis/device/bluetooth/stopBluetoothDevicesDiscovery"},next:{title:"Taro.openBluetoothAdapter(option)",permalink:"/taro/en/docs/apis/device/bluetooth/openBluetoothAdapter"}},s=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],c={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Starts searching for nearby Bluetooth peripherals. ",(0,l.kt)("strong",{parentName:"p"},"This operation consumes a large amount of system resources. After searching for and connecting to a device, be sure to call the ",(0,l.kt)("inlineCode",{parentName:"strong"},"Taro.stopBluetoothDevicesDiscovery")," method to stop searching.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<Promised>\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"promised"},"Promised"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"success: ok; fail: error message.")))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"allowDuplicatesKey"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Indicates whether a device can be reported multiple times. If yes, the ",(0,l.kt)("code",null,"Taro.onBlueToothDeviceFound")," method will report a device multiple times, but with different RSSI values.\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"interval"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The device reporting interval. 0 indicates new devices are immediately reported. Other values indicate devices are reported based on the specified interval.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"services"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The list of primary service UUIDs of Bluetooth devices to be discovered. Some Bluetooth devices will broadcast their own primary service uuids. If this parameter is set, only Bluetooth devices with primary services corresponding to the uuids in the broadcast package are discovered. We recommend using this parameter to filter out nearby Bluetooth devices that are not needed.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: Result) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"// For example, the primary service UUID of the smart Bluetooth light of the WeChat hardware platform is FEE7. When this parameter is provided, only the device with the primary service UUID of FEE7 is searched for.\nTaro.startBluetoothDevicesDiscovery({\n  services: ['FEE7'],\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.startBluetoothDevicesDiscovery"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);
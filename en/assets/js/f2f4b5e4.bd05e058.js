(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[96634],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),k=d(n),u=l,m=k["".concat(c,".").concat(u)]||k[u]||p[u]||a;return n?r.createElement(m,o(o({ref:e},s),{},{components:n})):r.createElement(m,o({ref:e},s))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58215:function(t,e,n){"use strict";var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,l=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},e)}},41395:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(67294),l=n(80944),a=n(86010),o="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,d=39;var s=function(t){var e=t.lazy,n=t.block,s=t.defaultValue,p=t.values,k=t.groupId,u=t.className,m=(0,l.Z)(),g=m.tabGroupChoices,h=m.setTabGroupChoices,N=(0,r.useState)(s),f=N[0],y=N[1],w=r.Children.toArray(t.children),v=[];if(null!=k){var b=g[k];null!=b&&b!==f&&p.some((function(t){return t.value===b}))&&y(b)}var x=function(t){var e=t.currentTarget,n=v.indexOf(e),r=p[n].value;y(r),null!=k&&(h(k,r),setTimeout((function(){var t,n,r,l,a,o,c,d;(t=e.getBoundingClientRect(),n=t.top,r=t.left,l=t.bottom,a=t.right,o=window,c=o.innerHeight,d=o.innerWidth,n>=0&&a<=d&&l<=c&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(i),setTimeout((function(){return e.classList.remove(i)}),2e3))}),150))},S=function(t){var e,n;switch(t.keyCode){case d:var r=v.indexOf(t.target)+1;n=v[r]||v[0];break;case c:var l=v.indexOf(t.target)-1;n=v[l]||v[v.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},u)},p.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":f===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:S,onFocus:x,onClick:x},n)}))),e?(0,r.cloneElement)(w.filter((function(t){return t.props.value===f}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==f})}))))}},79443:function(t,e,n){"use strict";var r=(0,n(67294).createContext)(void 0);e.Z=r},80944:function(t,e,n){"use strict";var r=n(67294),l=n(79443);e.Z=function(){var t=(0,r.useContext)(l.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},41095:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return k}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),o=n(41395),i=n(58215),c={title:"ScrollView",sidebar_label:"ScrollView"},d={unversionedId:"components/viewContainer/scroll-view",id:"version-3.x/components/viewContainer/scroll-view",isDocsHomePage:!1,title:"ScrollView",description:"The scrollable view area. When vertical scrolling is used, a fixed height must set for scroll-view via WXSS. The unit of length of the component's properties is px by default.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/viewContainer/scroll-view.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/scroll-view",permalink:"/taro/en/docs/components/viewContainer/scroll-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/scroll-view.md",version:"3.x",sidebar_label:"ScrollView",frontMatter:{title:"ScrollView",sidebar_label:"ScrollView"},sidebar:"version-3.x/components",previous:{title:"View",permalink:"/taro/en/docs/components/viewContainer/view"},next:{title:"Swiper",permalink:"/taro/en/docs/components/viewContainer/swiper"}},s=[{value:"Type",id:"type",children:[]},{value:"Examples",id:"examples",children:[]},{value:"ScrollViewProps",id:"scrollviewprops",children:[{value:"Property Support",id:"property-support",children:[]},{value:"onScrollDetail",id:"onscrolldetail",children:[]}]}],p={toc:s};function k(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The scrollable view area. When vertical scrolling is used, a fixed height must set for scroll-view via WXSS. The unit of length of the component's properties is px by default. "),(0,a.kt)("p",null,"Tips:\nThe ScrollView component in H5 is implemented by scrolling inside a container with a fixed height (or width), so it is important to set the height of the container correctly. For example, if the height of the ScrollView expands the body, there will be two scrollbars at the same time (the scrollbar under the body and the scrollbar of the ScrollView).\nIf the ScrollView component in the WeChat mini program is set to scrollX horizontally and has multiple child elements (a single child element with a fixed width will scroll horizontally), you need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"white-space: nowrap")," with WXSS to ensure that the element does not change lines, and set ",(0,a.kt)("inlineCode",{parentName:"p"},"display: inline-inline")," for the ScrollView internal elements with ",(0,a.kt)("inlineCode",{parentName:"p"},"display: inline-block")," to make them scroll horizontally."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/scroll-view.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<ScrollViewProps>\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  onScrollToUpper() {}\n\n  // or use arrow function\n  // onScrollToUpper = () => {}\n\n  onScroll(e){\n    console.log(e.detail)\n  }\n\n  render() {\n    const scrollStyle = {\n      height: '150px'\n    }\n    const scrollTop = 0\n    const Threshold = 20\n    const vStyleA = {\n      height: '150px',\n      'background-color': 'rgb(26, 173, 25)'\n    }\n    const vStyleB = {\n       height: '150px',\n      'background-color': 'rgb(39,130,215)'\n    }\n    const vStyleC = {\n      height: '150px',\n      'background-color': 'rgb(241,241,241)',\n      color: '#333'\n    }\n    return (\n      <ScrollView\n        className='scrollview'\n        scrollY\n        scrollWithAnimation\n        scrollTop={scrollTop}\n        style={scrollStyle}\n        lowerThreshold={Threshold}\n        upperThreshold={Threshold}\n        onScrollToUpper={this.onScrollToUpper.bind(this)} // When using the arrow function, you can write it like `onScrollToUpper={this.onScrollToUpper}`\n        onScroll={this.onScroll}\n      >\n        <View style={vStyleA}>A</View>\n        <View style={vStyleB}>B</View>\n        <View style={vStyleC}>C</View>\n      </ScrollView>\n    )\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="container">\n    <view class="page-body">\n      <view class="page-section">\n        <view class="page-section-title">\n          <text>Vertical Scroll</text>\n        </view>\n        <view class="page-section-spacing">\n          <scroll-view :scroll-y="true" style="height: 300rpx;" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-into-view="toView" :scroll-top="scrollTop">\n            <view id="demo1" class="scroll-view-item demo-text-1">1</view>\n            <view id="demo2"  class="scroll-view-item demo-text-2">2</view>\n            <view id="demo3" class="scroll-view-item demo-text-3">3</view>\n          </scroll-view>\n        </view>\n      </view>\n      <view class="page-section">\n        <view class="page-section-title">\n          <text>Horizontal Scroll</text>\n        </view>\n        <view class="page-section-spacing">\n          <scroll-view class="scroll-view_H" :scroll-x="true" @scroll="scroll" style="width: 100%">\n            <view id="demo21" class="scroll-view-item_H demo-text-1">a</view>\n            <view id="demo22"  class="scroll-view-item_H demo-text-2">b</view>\n            <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>\n          </scroll-view>\n        </view>\n      </view>\n    </view>\n  </view>\n</template>\n\n<script>\nconst order = [\'demo1\', \'demo2\', \'demo3\']\nexport default {\n  name: \'Index\',\n  data() {\n    return {\n      scrollTop: 0,\n      toView: \'demo2\'\n    }\n  },\n\n  methods: {\n    upper(e) {\n      console.log(\'upper:\', e)\n    },\n\n    lower(e) {\n      console.log(\'lower:\', e)\n    },\n\n    scroll(e) {\n      console.log(\'scroll:\', e)\n    }\n  }\n}\n<\/script>\n\n<style>\n.page-section-spacing{\n  margin-top: 60rpx;\n}\n.scroll-view_H{\n  white-space: nowrap;\n}\n.scroll-view-item{\n  height: 300rpx;\n}\n.scroll-view-item_H{\n  display: inline-block;\n  width: 100%;\n  height: 300rpx;\n}\n\n.demo-text-1 { background: #ccc; }\n.demo-text-2 { background: #999; }\n.demo-text-3 { background: #666; }\n</style>\n')))),(0,a.kt)("h2",{id:"scrollviewprops"},"ScrollViewProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollX"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Supports horizontal scrolling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollY"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Supports vertical scrolling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"upperThreshold"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"50")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the distance from the top/left of the page when a scrolltoupper event is triggered.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"lowerThreshold"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"50")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the distance from the bottom/right of the page when a scrolltoupper event is triggered.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollTop"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the location of the vertical scroll bar.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollLeft"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the location of the horizontal scroll bar.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollIntoView"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the direction to which the scroll bar can be moved. Its value should be the ID of a child element (the ID cannot begin with a number), and this child element is scrolled in the direction specified in this property.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollWithAnimation"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Uses an animation for transition when setting the scroll bar.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableBackToTop"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Enables the scroll bar to return to the top when the top status bar is tapped on iOS or the title bar is double-tapped on Android. Only vertical scrolling is supported. ")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"enableFlex"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Enables the flexbox layout. When enabled, the current node with ",(0,a.kt)("code",null,"display: flex")," declared becomes a flex container and acts on its children.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollAnchoring"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Turn on the scroll anchoring feature, which controls the scroll position from jittering as the content changes, only on iOS, see the CSS ",(0,a.kt)("code",null,"overflow-anchor")," property on Android.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"refresherEnabled"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Enable custom drop-down refresh.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"refresherThreshold"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"45")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Set a custom drop-down refresh threshold.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"refresherDefaultStyle"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"'black'")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"Set custom dropdown refresh default style, support ",(0,a.kt)("code",null,"black | white | none"),", none means don't use default style.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"refresherBackground"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"'#FFF'")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Set custom drop-down refresh area background color")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"refresherTriggered"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"fasle")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Set the current dropdown refresh status, true means the dropdown refresh has been triggered, false means the dropdown refresh has not been triggered.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onScrollToUpper"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Scrolling to the top/left will trigger the scrolltoupper event.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onScrollToLower"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Scrolling to the bottom/right will trigger the scrolltolower event.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onScroll"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<onScrollDetail>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered on scrolling.",(0,a.kt)("br",null),(0,a.kt)("code",null,"event.detail = ","{ scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onRefresherPulling"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Custom dropdown refresh control is dropped.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onRefresherRefresh"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"Custom dropdown refresh is triggered."}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onRefresherRestore"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Custom dropdown refresh is reset.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onRefresherAbort"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(event: BaseEventOrigFunction<any>) => any")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Custom dropdown refresh is aborted.")))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollX"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f(\u4e8c\u9009\u4e00)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollY"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f(\u4e8c\u9009\u4e00)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.upperThreshold"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.lowerThreshold"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollTop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollLeft"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollIntoView"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollWithAnimation"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.enableBackToTop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.enableFlex"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.scrollAnchoring"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.refresherEnabled"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.refresherThreshold"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.refresherDefaultStyle"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.refresherBackground"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.refresherTriggered"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onScrollToUpper"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onScrollToLower"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onScroll"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onRefresherPulling"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onRefresherRefresh"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onRefresherRestore"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ScrollViewProps.onRefresherAbort"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"onscrolldetail"},"onScrollDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollLeft"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Horizontal scrollbar position.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollTop"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Vertical scrollbar position.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollHeight"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Scroll bar height")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scrollWidth"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Scroll bar width")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"deltaX"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"deltaY"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null)))))}k.isMDXComponent=!0},86010:function(t,e,n){"use strict";function r(t){var e,n,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(l&&(l+=" "),l+=n);else for(e in t)t[e]&&(l&&(l+=" "),l+=e);return l}function l(){for(var t,e,n=0,l="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(l&&(l+=" "),l+=e);return l}n.d(e,{Z:function(){return l}})}}]);
(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[9191],{6933:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o={title:"React Native"},c={unversionedId:"ui-identicon/react-native",id:"ui-identicon/react-native",isDocsHomePage:!1,title:"React Native",description:"A generic identity icon that can render icons based on an address.",source:"@site/docs/ui-identicon/react-native.md",sourceDirName:"ui-identicon",slug:"/ui-identicon/react-native",permalink:"/docs/ui-identicon/react-native",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/ui-identicon/react-native.md",version:"current",frontMatter:{title:"React Native"},sidebar:"reference",previous:{title:"React",permalink:"/docs/ui-identicon/react"},next:{title:"Vue",permalink:"/docs/ui-identicon/vue"}},s=[{value:"Usage Examples",id:"usage-examples",children:[]}],u={toc:s};function l(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A generic identity icon that can render icons based on an address."),(0,a.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,a.kt)("p",null,"To install the component, do ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @polkadot/reactnative-identicon")),(0,a.kt)("p",null,"Inside a React component, you can now render any account with the associated icon -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Identicon from '@polkadot/reactnative-identicon';\n\n...\nrender () {\n  // address is an ss58-encoded address or publicKey (hex string or Uint8Array)\n  const { address } = this.props;\n  // size (optional) is a number, indicating the size (in pixels, 64 as default)\n  const size = 32;\n\n  // standard className & style props are also available\n  return (\n    <Identicon\n      value={address}\n      size={size}\n    />\n  );\n}\n...\n")))}l.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);
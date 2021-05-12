(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[7400],{9958:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),s={title:"Usage",slug:"/extension/usage"},i={unversionedId:"extension/usage",id:"extension/usage",isDocsHomePage:!1,title:"Usage",description:"To install the component, do yarn add @polkadot/extension-dapp",source:"@site/docs/extension/usage.md",sourceDirName:"extension",slug:"/extension/usage",permalink:"/docs/extension/usage",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/extension/usage.md",version:"current",frontMatter:{title:"Usage",slug:"/extension/usage"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/extension"},next:{title:"Cookbook",permalink:"/docs/extension/cookbook"}},c=[],u={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To install the component, do ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @polkadot/extension-dapp"),"\nHere is a brief walk through how to use the different utilities from @polkadot/extension-dapp."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  web3Accounts,\n  web3Enable,\n  web3FromAddress,\n  web3ListRpcProviders,\n  web3UseRpcProvider\n} from '@polkadot/extension-dapp';\n\n// returns an array of all the injected sources\n// (this needs to be called first, before other requests)\nconst allInjected = await web3Enable('my cool dapp');\n\n// returns an array of { address, meta: { name, source } }\n// meta.source contains the name of the extension that provides this account\nconst allAccounts = await web3Accounts();\n\n// the address we use to use for signing, as injected\nconst SENDER = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE';\n\n// finds an injector for an address\nconst injector = await web3FromAddress(SENDER);\n\n// sign and send our transaction - notice here that the address of the account\n// (as retrieved injected) is passed through as the param to the `signAndSend`,\n// the API then calls the extension to present to the user and get it signed.\n// Once complete, the api sends the tx + signature via the normal process\napi.tx.balances\n  .transfer('5C5555yEXUcmEJ5kkcCMvdZjUo7NGJiQJMS7vZXEeoMhj3VQ', 123456)\n  .signAndSend(SENDER, { signer: injector.signer }, (status) => { ... });\n")))}p.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||a;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);
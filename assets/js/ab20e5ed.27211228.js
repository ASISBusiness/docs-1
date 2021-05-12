(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4362],{879:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o={title:"Type creation"},s={unversionedId:"api/start/types.create",id:"api/start/types.create",isDocsHomePage:!1,title:"Type creation",description:"Circling back to metadata. There are two important things to remember when using the API to make queries or send transactions.",source:"@site/docs/api/start/types.create.md",sourceDirName:"api/start",slug:"/api/start/types.create",permalink:"/docs/api/start/types.create",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/types.create.md",version:"current",frontMatter:{title:"Type creation"},sidebar:"reference",previous:{title:"rpc.custom",permalink:"/docs/api/start/rpc.custom"},next:{title:"TypeScript interfaces",permalink:"/docs/api/start/typescript"}},p=[{value:"Why create types",id:"why-create-types",children:[]},{value:"Choosing how to create",id:"choosing-how-to-create",children:[]},{value:"Using with TypeScript",id:"using-with-typescript",children:[]}],l={toc:p};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Circling back to metadata. There are two important things to remember when using the API to make queries or send transactions."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The functionality available, e.g. exposed on ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query.*")," is not hard-coded in the API, rather this is decorated from the chain metadata. So the metadata lets the API know which endpoints are available and what the type for those endpoints are.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When you supply a value to the API, internally it will convert that value to the correct type as expected by the chain, i.e. as determined by the metadata. This means that a function such as ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.transfer(address: Address, value: Balance)")," can take at least the following inputs, which are all converted to the correct types -"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," can be an ",(0,i.kt)("inlineCode",{parentName:"li"},"Address"),", an ",(0,i.kt)("inlineCode",{parentName:"li"},"AccountId"),", an ",(0,i.kt)("inlineCode",{parentName:"li"},"Uint8Array")," publicKey, a hex publicKey or an ss58 formatted address;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," can be a ",(0,i.kt)("inlineCode",{parentName:"li"},"Balance"),", a value encoded in hex, a ",(0,i.kt)("inlineCode",{parentName:"li"},"BN")," object, a base-10 string, a JS ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),", a JS ",(0,i.kt)("inlineCode",{parentName:"li"},"BigInt")," or even a SCALE-encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"Uint8Array"))))),(0,i.kt)("p",null,"In cases where a value is returned such as storage queries, the response from the chain is always encoded into the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"Codec")," type. This means that while the node may return an encoded block (with encoded extrinsics) via ",(0,i.kt)("inlineCode",{parentName:"p"},"api.rpc.chain.getBlock()"),", this is decoded into a proper ",(0,i.kt)("inlineCode",{parentName:"p"},"SignedBlock")," by the API. Outputting this value via ",(0,i.kt)("inlineCode",{parentName:"p"},".toJSON()")," will yield an encoding for RPC, so if you are not using TypeScript (which adds code helpers on decoded objects), a representation via ",(0,i.kt)("inlineCode",{parentName:"p"},".toHuman()")," will be more representative of the actual object fields, re-formatted for human consumption."),(0,i.kt)("h2",{id:"why-create-types"},"Why create types"),(0,i.kt)("p",null,'With the conversions done in the API, there are limited reasons to create types "manually". However, just because there are not thousands of reasons, does not mean it is not valid. For instance, you may retrieve an ',(0,i.kt)("inlineCode",{parentName:"p"},"Option")," and for the sake of sanity would like to use ",(0,i.kt)("inlineCode",{parentName:"p"},".unwrapOr()")," on it, returning a ",(0,i.kt)("inlineCode",{parentName:"p"},"Codec")," default value where the value ",(0,i.kt)("inlineCode",{parentName:"p"},".isNone"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// type import for TypeScript\nimport type { Balance } from '@polkadot/types/interfaces';\n\n...\n// unwrap out option into a zero Balance when not found\n// (This can be done via `.unwrapOrDefault()`, which does the same underlying)\nconst balance: Balance = balanceOpt.unwrapOr(api.createType('Balance'));\n")),(0,i.kt)("p",null,"In the example above, we introduced the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.createType(<typeName>, [<value>])"),". The same format is also exposed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeRegistry")," (more on this in a short while) as well as ",(0,i.kt)("inlineCode",{parentName:"p"},"createType(...)")," from the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/types")," package. All doing exactly the same."),(0,i.kt)("h2",{id:"choosing-how-to-create"},"Choosing how to create"),(0,i.kt)("p",null,"In most cases, you would always want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.createType")," helper. What this does is call the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/types")," ",(0,i.kt)("inlineCode",{parentName:"p"},"createType"),", passing through the registry that is attached to the API. Registry? Yes, registry."),(0,i.kt)("p",null,"The registry contains a listing of all internal types and their classes that have been registered. So upon creation of an API instance, a ",(0,i.kt)("inlineCode",{parentName:"p"},"registry")," object  is attached to the API and this is passed through to all created types. This allows the type definitions to not pollute the global namespace, but rather be contained and able to reference one another."),(0,i.kt)("p",null,"As mentioned, the ",(0,i.kt)("inlineCode",{parentName:"p"},"createType")," functions all do exactly the same, and in 99.99% of the cases you would be recommended to just forget about everything and use ",(0,i.kt)("inlineCode",{parentName:"p"},"api.createType")," if and when required. In some cases, you may just have a type object and from that want to create another type instance. For that you can access the ",(0,i.kt)("inlineCode",{parentName:"p"},"registry")," on the type object and call ",(0,i.kt)("inlineCode",{parentName:"p"},"createType")," on it. (If this type object was created from an API instance, the registry on the type and on the API will point to the same instance.)"),(0,i.kt)("p",null,"Basically, this means that we have equivalency in creation for all the items below, all creating on the same registry (containing all injected types), and all wrapping the same value -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createType } from '@polkadot/types';\n\n// via API (recommended)\napi.createType('Balance', 123);\n\n// via registry (`.registry` is on all API and Codec objects)\napi.registry.createType('Balance', 123n);\n\n// via the low-level approach (not recommended)\ncreateType(api.registry, 'Balance', '123');\n")),(0,i.kt)("h2",{id:"using-with-typescript"},"Using with TypeScript"),(0,i.kt)("p",null,"The API is built with TypeScript (as are all projects in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/"},"polkadot-js organization")," and as such allows developers using TS to have access to all the type interfaces defined on the chain, as well as having access to typings on interacting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.*")," namespaces. In the next section we will provide an overview of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/start/typescript"},"what is available in terms of types and TypeScript"),"."))}c.isMDXComponent=!0},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(a),u=r,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);
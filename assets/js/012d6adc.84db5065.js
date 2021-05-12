(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[8574],{5193:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),c={title:"Contract"},i={unversionedId:"api-contract/start/contract.read",id:"api-contract/start/contract.read",isDocsHomePage:!1,title:"Contract",description:"The ContractPromise interface allows you to interact with a deployed contract. In the previous Blueprint example this instance was created via createContract. In general use, you can also create an instance via new, i.e. when you are attaching to an existing contract on-chain -",source:"@site/docs/api-contract/start/contract.read.md",sourceDirName:"api-contract/start",slug:"/api-contract/start/contract.read",permalink:"/docs/api-contract/start/contract.read",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/start/contract.read.md",version:"current",frontMatter:{title:"Contract"},sidebar:"reference",previous:{title:"Blueprint",permalink:"/docs/api-contract/start/blueprint"},next:{title:"Contract Tx",permalink:"/docs/api-contract/start/contract.tx"}},s=[{value:"Reading contract values",id:"reading-contract-values",children:[]},{value:"Sending a transaction",id:"sending-a-transaction",children:[]}],l={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractPromise")," interface allows you to interact with a deployed contract. In the previous ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-contract/start/blueprint"},"Blueprint example")," this instance was created via ",(0,o.kt)("inlineCode",{parentName:"p"},"createContract"),". In general use, you can also create an instance via ",(0,o.kt)("inlineCode",{parentName:"p"},"new"),", i.e. when you are attaching to an existing contract on-chain -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ContractPromise } from '@polkadot/api-contract';\n\n// Attach to an existing contract with a known ABI and address. As per the\n// code and blueprint examples the abi is an Abi object, an unparsed JSON\n// string or the raw JSON data (after doing a JSON.parse). The address is\n// the actual on-chain address as ss58 or AccountId object.\nconst contract = new ContractPromise(api, abi, address);\n\n// Read from the contract\n...\n")),(0,o.kt)("p",null,"Either via a create above or via a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"createContract")," both instances are the same. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract")," provides a wrapper around the ",(0,o.kt)("inlineCode",{parentName:"p"},"Abi")," and allows you to call either ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," on a contract to interact with it."),(0,o.kt)("h2",{id:"reading-contract-values"},"Reading contract values"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Blueprint")," example we have instantiated an incrementer contract. In the following examples we will continue using it to read from and execute transactions into, since it is a well-known entity. To read a value from the contract, we can do the following -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Read from the contract via an RPC call\nconst value = 0; // only useful on isPayable messages\n\n// NOTE the apps UI specified these in mega units\nconst gasLimit = 3000n * 1000000n;\n\n// Perform the actual read (no params at the end, for the `get` message)\n// (We perform the send from an account, here using Alice's address)\nconst { gasConsumed, result, outcome } = await contract.query.get(alicePair.address, { value, gasLimit });\n\n// The actual result from RPC as `ContractExecResult`\nconsole.log(result.toHuman());\n\n// gas consumed\nconsole.log(gasConsumed.toHuman());\n\n// check if the call was successful\nif (result.isOk) {\n  // should output 123 as per our initial set (output here is an i32)\n  console.log('Success', output.toHuman());\n} else {\n  console.error('Error', result.asErr);\n}\n")),(0,o.kt)("p",null,"Underlying the above ",(0,o.kt)("inlineCode",{parentName:"p"},".query.<messageName>")," is using the ",(0,o.kt)("inlineCode",{parentName:"p"},"api.rpc.contracts.call")," API on the contracts palette to retrieve the value. For this interface, the format is always of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"messageName(<account address to use>, <value>, <gasLimit>, <...additional params>)"),". An example of querying a balance of a specific account on an erc20 contract will therefore be -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// the address we are going to query\nconst target = '5GNJqTPyNqANBkUVMN1LPPrxXnFouWXoe2wNSmmEoLctxiZY';\nconst from = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\n\n// only 1 param needed, the actual address we are querying for (more\n// params can follow at the end, separated by , if needed by the message)\nconst callValue = await contract.query.balanceOf(from, { value: 0, gasLimit: -1 }, target);\n")),(0,o.kt)("p",null,"In this example we have specified a ",(0,o.kt)("inlineCode",{parentName:"p"},"gasLimit")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),", in a subsequent section we will expand on this. for now, just remember that is indicated to use max available, i.e. we don't explicitly want to specify a value."),(0,o.kt)("p",null,"When executing it encodes the message using the selector and the input values to allow execution in the contract environment. This can be executed on any contract message, unlike the examples that will follow below it will only read state, not actually execute and therefore not consume any real value from the account."),(0,o.kt)("p",null,"An alternative for reading would be via the lower-level ",(0,o.kt)("inlineCode",{parentName:"p"},".read")," method, in this case"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Perform the actual read (no params at the end, for the `get` message)\n// (We perform the send from an account address, it doesn't get executed)\nconst callValue = await contract\n  .read('get', { value, gasLimit })\n  .send(alicePair.address);\n\n// The actual result from RPC as `ContractExecResult`\n...\n")),(0,o.kt)("p",null,"In cases where the ABI messages have conflicting names, instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"'get'")," string the actual message index (or message from the Abi itself) can be passed-through."),(0,o.kt)("h2",{id:"sending-a-transaction"},"Sending a transaction"),(0,o.kt)("p",null,"Now that we understand the underlying call/read interfaces where a message is executed, but not part of a block, we will loo into ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-contract/start/contract.tx"},"sending transaction messages")," in our next section."))}u.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,c(c({ref:t},u),{},{components:n})):a.createElement(h,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[5135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:4,minutesToComplete:3,authors:["kmok"]},s="Batch vs. Streaming",i={unversionedId:"data-platforms/batch-vs-streaming",id:"data-platforms/batch-vs-streaming",title:"Batch vs. Streaming",description:"Because everyone asks, in the battle between batch vs. streaming, there is no clear winner, but rather we should choose to do batch or streaming based on what makes sense in our use case.",source:"@site/docs/data-platforms/batch-vs-streaming.md",sourceDirName:"data-platforms",slug:"/data-platforms/batch-vs-streaming",permalink:"/docs/data-platforms/batch-vs-streaming",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-platforms/batch-vs-streaming.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,minutesToComplete:3,authors:["kmok"]},sidebar:"tutorialSidebar",previous:{title:"Common Landmarks of Data Processing",permalink:"/docs/data-platforms/landmarks-of-data-processing"},next:{title:"SQL: A Quick Review",permalink:"/docs/data-transformation/SQL/sql-quick-review"}},c={},l=[],u={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"batch-vs-streaming"},"Batch vs. Streaming"),(0,n.kt)("p",null,"Because everyone asks, in the battle between batch vs. streaming, there is no clear winner, but rather we should choose to do batch or streaming based on what makes sense in our use case. "),(0,n.kt)("p",null,'There are many who will assert that "real time is always better". This is not true. If the use case requires real time (or near real time) data, such as GPS data for a fleet of vehicles or stock-trades/asset management, then it makes sense. On the contrary, a once-per-month report probably isn\'t worth the work (or the carbon footprint) or costs to make data available real-time.'),(0,n.kt)("p",null,"The answer truly lies in pragmatism. And of course, knowing your consumers."))}p.isMDXComponent=!0}}]);
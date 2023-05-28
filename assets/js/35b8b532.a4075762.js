"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[3640],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>f});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=c(a),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(f,i(i({ref:e},u),{},{components:a})):n.createElement(f,i({ref:e},u))}));function f(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6284:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:5},i="DBT Macro",l={unversionedId:"data-transformation/data-build-tool/dbt-macro",id:"data-transformation/data-build-tool/dbt-macro",title:"DBT Macro",description:"In dbt, you can combine SQL with Jinja, a templating language. This combination turns your dbt project into a programming environment for SQL, providing you with the ability to do things that aren't normally possible in SQL alone. One of the powerful features of Jinja is the ability to define and use macros.",source:"@site/docs/data-transformation/data-build-tool/dbt-macro.mdx",sourceDirName:"data-transformation/data-build-tool",slug:"/data-transformation/data-build-tool/dbt-macro",permalink:"/docs/data-transformation/data-build-tool/dbt-macro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/data-build-tool/dbt-macro.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Materialization",permalink:"/docs/data-transformation/data-build-tool/Materialization"},next:{title:"Learning Materials \ud83d\udcda",permalink:"/docs/data-transformation/data-build-tool/recommended"}},s={},c=[],u={toc:c},d="wrapper";function p(t){let{components:e,...a}=t;return(0,o.kt)(d,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dbt-macro"},"DBT Macro"),(0,o.kt)("p",null,"In dbt, you can combine SQL with Jinja, a templating language. This combination turns your dbt project into a programming environment for SQL, providing you with the ability to do things that aren't normally possible in SQL alone. One of the powerful features of Jinja is the ability to define and use macros."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is a Macro?")),(0,o.kt)("p",null,"A macro in dbt is analogous to a function in most programming languages. It allows you to abstract snippets of SQL code into reusable units. With macros, you can define SQL code that can be reused across multiple models or queries, providing modularity and code reuse in your dbt project."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How can Macros be used?")),(0,o.kt)("p",null,"Macros can be used in a variety of scenarios, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using control structures (e.g., if statements and for loops) in SQL."),(0,o.kt)("li",{parentName:"ul"},"Incorporating environment variables in your dbt project for production deployments."),(0,o.kt)("li",{parentName:"ul"},"Adapting the behavior of your project based on the current target."),(0,o.kt)("li",{parentName:"ul"},"Manipulating the results of one query to generate another query. For example:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Returning a list of payment methods to create a subtotal column per payment method (pivot)."),(0,o.kt)("li",{parentName:"ul"},"Returning a list of columns in two relations and selecting them in the same order to facilitate union operations."))),(0,o.kt)("li",{parentName:"ul"},"Abstracting snippets of SQL code into reusable macros for better code organization and maintenance.")),(0,o.kt)("p",null,"You might already be using macros if you have used functions like ",(0,o.kt)("inlineCode",{parentName:"p"},"{{ ref() }}")," in your dbt project, as these functions are based on Jinja."),(0,o.kt)("p",null,"Using macros in dbt allows you to leverage the power of Jinja templating to create more dynamic and reusable SQL code in your data transformation processes."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/jinja-macros"},"Reference")))}p.isMDXComponent=!0}}]);
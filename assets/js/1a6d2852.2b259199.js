"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[5527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},i="Exercise 2",s={unversionedId:"data-transformation/SQL/Exercise-2",id:"data-transformation/SQL/Exercise-2",title:"Exercise 2",description:"Create View for Aggregate Global Emissions",source:"@site/docs/data-transformation/SQL/Exercise-2.mdx",sourceDirName:"data-transformation/SQL",slug:"/data-transformation/SQL/Exercise-2",permalink:"/docs/data-transformation/SQL/Exercise-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/SQL/Exercise-2.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Exercise 1",permalink:"/docs/data-transformation/SQL/Exercise-1"},next:{title:"Exercise 3",permalink:"/docs/data-transformation/SQL/Exercise-3"}},l={},c=[{value:"Create View for Aggregate Global Emissions",id:"create-view-for-aggregate-global-emissions",level:2},{value:"Your output view should contain:",id:"your-output-view-should-contain",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exercise-2"},"Exercise 2"),(0,a.kt)("h2",{id:"create-view-for-aggregate-global-emissions"},"Create View for Aggregate Global Emissions"),(0,a.kt)("p",null,"In this exercise, you will create a view called ",(0,a.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"carbon_emissions")," schema. This view will aggregate the total CO2 emissions globally on an annual basis using the data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"co2_emissions_by_country")," table."),(0,a.kt)("p",null,"To create the view with the desired columns:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"Year")," column from the ",(0,a.kt)("inlineCode",{parentName:"li"},"co2_emissions_by_country")," table."),(0,a.kt)("li",{parentName:"ol"},"Calculate the sum of ",(0,a.kt)("inlineCode",{parentName:"li"},"TotalEmissions")," for each year to obtain the total emissions globally."),(0,a.kt)("li",{parentName:"ol"},"Assign meaningful aliases to the columns to improve readability and maintain consistency with the desired output table structure."),(0,a.kt)("li",{parentName:"ol"},"Store the results in the ",(0,a.kt)("inlineCode",{parentName:"li"},"aggregate_global_emissions")," view within the ",(0,a.kt)("inlineCode",{parentName:"li"},"carbon_emissions")," schema.")),(0,a.kt)("h2",{id:"your-output-view-should-contain"},"Your output view should contain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Year: integer"),(0,a.kt)("li",{parentName:"ul"},"TotalEmissions:float")))}p.isMDXComponent=!0}}]);
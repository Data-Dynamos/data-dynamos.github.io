"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[7334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5541:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:7},i="Exercise 4",l={unversionedId:"data-transformation/SQL/Exercise-4",id:"data-transformation/SQL/Exercise-4",title:"Exercise 4",description:"Create Table for Aggregate Global Emissions and Temperatures",source:"@site/docs/data-transformation/SQL/Exercise-4.mdx",sourceDirName:"data-transformation/SQL",slug:"/data-transformation/SQL/Exercise-4",permalink:"/docs/data-transformation/SQL/Exercise-4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/SQL/Exercise-4.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Exercise 3",permalink:"/docs/data-transformation/SQL/Exercise-3"},next:{title:"Exercise 5",permalink:"/docs/data-transformation/SQL/Exercise-5"}},s={},c=[{value:"Create Table for Aggregate Global Emissions and Temperatures",id:"create-table-for-aggregate-global-emissions-and-temperatures",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exercise-4"},"Exercise 4"),(0,n.kt)("h2",{id:"create-table-for-aggregate-global-emissions-and-temperatures"},"Create Table for Aggregate Global Emissions and Temperatures"),(0,n.kt)("p",null,"To analyze the relationship between global emissions and temperatures, you will perform an INNER JOIN between the results of two views: ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_global_temperatures"),'. This join will combine the data from both views based on the common "Year" column.'),(0,n.kt)("p",null,"To create a table called ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions_temperatures")," with the desired columns in the ",(0,n.kt)("inlineCode",{parentName:"p"},"global_temperatures")," schema:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Perform an INNER JOIN between the ",(0,n.kt)("inlineCode",{parentName:"li"},"aggregate_global_emissions")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"aggregate_global_temperatures"),' views on the "Year" column.'),(0,n.kt)("li",{parentName:"ol"},"Select the following columns from the joined data:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Year: Integer"),(0,n.kt)("li",{parentName:"ul"},"TotalEmissions: Float"),(0,n.kt)("li",{parentName:"ul"},"LandAverageTemperature: Float"),(0,n.kt)("li",{parentName:"ul"},"LandMaxTemperature: Float"),(0,n.kt)("li",{parentName:"ul"},"LandMinTemperature: Float"),(0,n.kt)("li",{parentName:"ul"},"LandAndOceanAverageTemperature: Float")))),(0,n.kt)("p",null,"Your output table, ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions_temperatures")," , should have the above schema."))}u.isMDXComponent=!0}}]);
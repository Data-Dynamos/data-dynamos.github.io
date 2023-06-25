"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[2590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:11},i="Exercise 6",l={unversionedId:"data-transformation/data-build-tool/Exercise-6",id:"data-transformation/data-build-tool/Exercise-6",title:"Exercise 6",description:"Create Table for Aggregate Country Temperatures",source:"@site/docs/data-transformation/data-build-tool/Exercise-6.mdx",sourceDirName:"data-transformation/data-build-tool",slug:"/data-transformation/data-build-tool/Exercise-6",permalink:"/docs/data-transformation/data-build-tool/Exercise-6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/data-build-tool/Exercise-6.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Exercise 5",permalink:"/docs/data-transformation/data-build-tool/Exercise-5"},next:{title:"Exercise 7",permalink:"/docs/data-transformation/data-build-tool/Exercise-7"}},s={},u=[{value:"Create Table for Aggregate Country Temperatures",id:"create-table-for-aggregate-country-temperatures",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exercise-6"},"Exercise 6"),(0,n.kt)("h2",{id:"create-table-for-aggregate-country-temperatures"},"Create Table for Aggregate Country Temperatures"),(0,n.kt)("p",null,"The objective of this exercise is to aggregate temperature measurements per country on an annual basis using the data from the ",(0,n.kt)("inlineCode",{parentName:"p"},"stg_temperatures_by_country"),' source. Additionally, you will need to clean up the "Country" column by removing leading/trailing spaces and converting the country names to the proper format.'),(0,n.kt)("p",null,"To create a table called ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_country_temperatures")," with the desired columns in the ",(0,n.kt)("inlineCode",{parentName:"p"},"global_temperatures")," schema:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open your dbt project and navigate to the appropriate schema directory (e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"models/global_temperatures"),")."),(0,n.kt)("li",{parentName:"ol"},"Create a new file named ",(0,n.kt)("inlineCode",{parentName:"li"},"aggregate_country_temperatures.sql")," (or any desired name) in the schema directory."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("inlineCode",{parentName:"li"},"aggregate_country_temperatures.sql")," file, write the dbt model definition for the table."),(0,n.kt)("li",{parentName:"ol"},"Define the ",(0,n.kt)("inlineCode",{parentName:"li"},"aggregate_country_temperatures")," model using the ",(0,n.kt)("inlineCode",{parentName:"li"},"table")," materialization type."),(0,n.kt)("li",{parentName:"ol"},"Investigate the data in the ",(0,n.kt)("inlineCode",{parentName:"li"},"stg_temperatures_by_country")," source for any data quality issues and address them as necessary."),(0,n.kt)("li",{parentName:"ol"},'Clean up the "Country" column by removing leading/trailing spaces and converting the country names to the proper format. You can use the ',(0,n.kt)("inlineCode",{parentName:"li"},"initcap")," function for this purpose."),(0,n.kt)("li",{parentName:"ol"},"Remove any occurrences of the Lenny face '( \u0361\xb0 \u035c\u0296 \u0361\xb0)' from the ",(0,n.kt)("inlineCode",{parentName:"li"},"AverageTemperature")," column."),(0,n.kt)("li",{parentName:"ol"},"Aggregate the temperature measurements per country on an annual basis."),(0,n.kt)("li",{parentName:"ol"},"Ignore any 'Uncertainty' columns for this project."),(0,n.kt)("li",{parentName:"ol"},"Select the following columns for the output table:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Year"),": Integer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Country"),": String"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"AverageTemperature"),": Float")))),(0,n.kt)("p",null,"By following these instructions and executing the appropriate dbt commands, you will create a table called ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_country_temperatures")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"global_temperatures")," schema. The table will contain the aggregated temperature measurements per country on an annual basis, with the specified columns as outlined above."))}m.isMDXComponent=!0}}]);
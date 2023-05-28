"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[9686],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:10},l="Exercise 5",o={unversionedId:"data-transformation/data-build-tool/Exercise-5",id:"data-transformation/data-build-tool/Exercise-5",title:"Exercise 5",description:"Create Table for Aggregate Global Emissions and Temperatures",source:"@site/docs/data-transformation/data-build-tool/Exercise-5.mdx",sourceDirName:"data-transformation/data-build-tool",slug:"/data-transformation/data-build-tool/Exercise-5",permalink:"/docs/data-transformation/data-build-tool/Exercise-5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/data-build-tool/Exercise-5.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Exercise 4",permalink:"/docs/data-transformation/data-build-tool/Exercise-4"},next:{title:"Exercise 6",permalink:"/docs/data-transformation/data-build-tool/Exercise-6"}},s={},p=[{value:"Create Table for Aggregate Global Emissions and Temperatures",id:"create-table-for-aggregate-global-emissions-and-temperatures",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exercise-5"},"Exercise 5"),(0,r.kt)("h2",{id:"create-table-for-aggregate-global-emissions-and-temperatures"},"Create Table for Aggregate Global Emissions and Temperatures"),(0,r.kt)("p",null,"In this exercise, you will use dbt to perform an INNER JOIN between the ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_global_temperatures")," views to analyze the relationship between global emissions and temperatures. The result of the join will be stored in a table called ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions_temperatures")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"global_temperatures")," schema."),(0,r.kt)("p",null,"To create the table with the desired columns:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your dbt project and navigate to the appropriate schema directory (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"models/global_temperatures"),")."),(0,r.kt)("li",{parentName:"ol"},"Create a new file named ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate_global_emissions_temperatures.sql")," (or any desired name) in the schema directory."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate_global_emissions_temperatures.sql")," file, write the dbt model definition for the table."),(0,r.kt)("li",{parentName:"ol"},"Define the ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate_global_emissions_temperatures")," model using the ",(0,r.kt)("inlineCode",{parentName:"li"},"table")," materialization type."),(0,r.kt)("li",{parentName:"ol"},"Specify the columns for the table using the ",(0,r.kt)("inlineCode",{parentName:"li"},"select")," statement."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"select")," statement, perform an INNER JOIN between the ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate_global_emissions")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate_global_temperatures"),' views on the "Year" column.'),(0,r.kt)("li",{parentName:"ol"},"Select the following columns from the joined data:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Year"),": Integer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TotalEmissions"),": Float"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LandAverageTemperature"),": Float"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LandMaxTemperature"),": Float"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LandMinTemperature"),": Float"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LandAndOceanAverageTemperature"),": Float")))),(0,r.kt)("p",null,"Your output table, ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions_temperatures"),", should have the following columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Year"),": Integer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TotalEmissions"),": Float"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LandAverageTemperature"),": Float"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LandMaxTemperature"),": Float"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LandMinTemperature"),": Float"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LandAndOceanAverageTemperature"),": Float")),(0,r.kt)("p",null,"By following these instructions and executing the appropriate dbt commands,\nyou will create a table called ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions_temperatures")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"global_temperatures")," schema.\nThe table will contain the results of the INNER JOIN between the ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_global_emissions")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_global_temperatures")," views, with the specified columns as outlined above."))}u.isMDXComponent=!0}}]);
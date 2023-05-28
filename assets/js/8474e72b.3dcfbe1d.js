"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[1553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:14},o="Exercise 9",s={unversionedId:"data-transformation/data-build-tool/Exercise-9",id:"data-transformation/data-build-tool/Exercise-9",title:"Exercise 9",description:"To create the aggregatecountryemissionstemperatures view in the carbonemissions schema using dbt, follow these instructions:",source:"@site/docs/data-transformation/data-build-tool/Exercise-9.mdx",sourceDirName:"data-transformation/data-build-tool",slug:"/data-transformation/data-build-tool/Exercise-9",permalink:"/docs/data-transformation/data-build-tool/Exercise-9",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/data-build-tool/Exercise-9.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Exercise 8",permalink:"/docs/data-transformation/data-build-tool/Exercise-8"},next:{title:"ETL vs ELT",permalink:"/docs/data-transformation/etl-vs-elt"}},l={},c=[],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exercise-9"},"Exercise 9"),(0,r.kt)("p",null,"To create the ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_country_emissions_temperatures")," view in the ",(0,r.kt)("inlineCode",{parentName:"p"},"carbon_emissions")," schema using dbt, follow these instructions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your dbt project and navigate to the appropriate schema directory (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"models/carbon_emissions"),")."),(0,r.kt)("li",{parentName:"ol"},"Create a new file named ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate_country_emissions_temperatures.sql")," (or any desired name) in the schema directory."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate_country_emissions_temperatures.sql")," file, write the dbt model definition for the view."),(0,r.kt)("li",{parentName:"ol"},"Add the dbt configuration block at the beginning of the file to specify the materialization type as a view using the ",(0,r.kt)("inlineCode",{parentName:"li"},"config")," macro."),(0,r.kt)("li",{parentName:"ol"},"Write the dbt model code to define the ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate_country_emissions_temperatures")," view."),(0,r.kt)("li",{parentName:"ol"},"Define the columns to be selected for the view as follows:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Year: Integer"),(0,r.kt)("li",{parentName:"ul"},"Country: String"),(0,r.kt)("li",{parentName:"ul"},"TotalEmissions: Float"),(0,r.kt)("li",{parentName:"ul"},"PerCapitaEmissions: Float"),(0,r.kt)("li",{parentName:"ul"},"ShareOfGlobalEmissions: Float"),(0,r.kt)("li",{parentName:"ul"},"AverageTemperature: Float"))),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"ref")," macro to reference the ",(0,r.kt)("inlineCode",{parentName:"li"},"co2_emissions_by_country")," table and the ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregate_country_temperatures")," table."),(0,r.kt)("li",{parentName:"ol"},"Join the two tables based on the country name and year."),(0,r.kt)("li",{parentName:"ol"},"Apply any necessary transformations or functions to the columns, such as using the ",(0,r.kt)("inlineCode",{parentName:"li"},"INITCAP")," function to standardize the country names."),(0,r.kt)("li",{parentName:"ol"},"Save the file.")),(0,r.kt)("p",null,"By following these instructions and executing the appropriate dbt commands,\nyou will create the ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_country_emissions_temperatures")," view in the ",(0,r.kt)("inlineCode",{parentName:"p"},"carbon_emissions")," schema.\nThe view will combine the emissions data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"co2_emissions_by_country")," table with the temperature data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate_country_temperatures")," table, using a suitable join condition.\nThe selected columns will include the year, country, total emissions, per capita emissions, share of global emissions, and average temperature."))}u.isMDXComponent=!0}}]);
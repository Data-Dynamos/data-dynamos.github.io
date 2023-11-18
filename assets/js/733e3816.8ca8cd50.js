"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=n,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return a?r.createElement(g,l(l({ref:t},m),{},{components:a})):r.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:9},l="Exercise 3",o={unversionedId:"data-transformation/data-build-tool/Exercise-4",id:"data-transformation/data-build-tool/Exercise-4",title:"Exercise 3",description:"Create View for Aggregate Global Temperatures",source:"@site/docs/data-transformation/data-build-tool/Exercise-4.mdx",sourceDirName:"data-transformation/data-build-tool",slug:"/data-transformation/data-build-tool/Exercise-4",permalink:"/docs/data-transformation/data-build-tool/Exercise-4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/data-build-tool/Exercise-4.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Exercise 2",permalink:"/docs/data-transformation/data-build-tool/Exercise-3"},next:{title:"Exercise 4",permalink:"/docs/data-transformation/data-build-tool/Exercise-5"}},p={},s=[{value:"Create View for Aggregate Global Temperatures",id:"create-view-for-aggregate-global-temperatures",level:2}],m={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exercise-3"},"Exercise 3"),(0,n.kt)("h2",{id:"create-view-for-aggregate-global-temperatures"},"Create View for Aggregate Global Temperatures"),(0,n.kt)("p",null,"In this exercise, you will use dbt to create a table called ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_global_temperatures")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"global_temperatures")," schema based on the ",(0,n.kt)("inlineCode",{parentName:"p"},"stg_global_temperatures")," table in the ",(0,n.kt)("inlineCode",{parentName:"p"},"global_temperatures")," schema. This view will group the data by year and provide aggregated temperature values using the appropriate aggregation functions."),(0,n.kt)("p",null,"To create the view and extract the desired columns:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open your dbt project and navigate to the appropriate schema directory (e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"models/global_temperatures"),")."),(0,n.kt)("li",{parentName:"ol"},"Create a new file named ",(0,n.kt)("inlineCode",{parentName:"li"},"aggregate_global_temperatures.sql")," (or any desired name) in the schema directory."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("inlineCode",{parentName:"li"},"aggregate_global_temperatures.sql")," file, write the dbt model definition for the view."),(0,n.kt)("li",{parentName:"ol"},"Define the ",(0,n.kt)("inlineCode",{parentName:"li"},"aggregate_global_temperatures")," model using the ",(0,n.kt)("inlineCode",{parentName:"li"},"view")," materialization type."),(0,n.kt)("li",{parentName:"ol"},"Specify the columns for the view using the ",(0,n.kt)("inlineCode",{parentName:"li"},"select")," statement."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("inlineCode",{parentName:"li"},"select")," statement, include the following columns from the ",(0,n.kt)("inlineCode",{parentName:"li"},"stg_global_temperatures")," table:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Date")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LandAverageTemperature")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LandMaxTemperature")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LandMinTemperature")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LandAndOceanAverageTemperature")))),(0,n.kt)("li",{parentName:"ol"},"Extract the year from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Date")," column to obtain only the year portion of the date."),(0,n.kt)("li",{parentName:"ol"},"Apply suitable aggregation functions, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"AVG")," for average temperature, to calculate the desired values for each year."),(0,n.kt)("li",{parentName:"ol"},"Ignore any 'Uncertainty' columns for this project."),(0,n.kt)("li",{parentName:"ol"},"Rename the columns as specified in the desired output, using the ",(0,n.kt)("inlineCode",{parentName:"li"},"as")," keyword to assign meaningful aliases."),(0,n.kt)("li",{parentName:"ol"},"Save the file ",(0,n.kt)("inlineCode",{parentName:"li"},"aggregate_global_temperatures.sql"),"."),(0,n.kt)("li",{parentName:"ol"},"Run the dbt command to build the project and create the view in the database.")),(0,n.kt)("p",null,"By following these instructions and executing the appropriate dbt commands, you will create a view called ",(0,n.kt)("inlineCode",{parentName:"p"},"aggregate_global_temperatures")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"global_temperatures")," schema.\nThe view will have the specified columns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Year")," (integer) "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LandAverageTemperature")," (float)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LandMaxTemperature")," (float)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LandMinTemperature")," (float)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LandAndOceanAverageTemperature")," (float).")))}u.isMDXComponent=!0}}]);
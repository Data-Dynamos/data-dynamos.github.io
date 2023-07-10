"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[2973],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},s="Data Quality",o={unversionedId:"data-transformation/dq_overwiew",id:"data-transformation/dq_overwiew",title:"Data Quality",description:"Data quality rules are guidelines or criteria that define the standards and requirements for ensuring the accuracy, completeness, consistency, and integrity of data. Here is a list of commonly used data quality rules:",source:"@site/docs/data-transformation/dq_overwiew.md",sourceDirName:"data-transformation",slug:"/data-transformation/dq_overwiew",permalink:"/docs/data-transformation/dq_overwiew",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/dq_overwiew.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Exercise 9",permalink:"/docs/data-transformation/data-build-tool/Exercise-9"},next:{title:"ETL vs ELT",permalink:"/docs/data-transformation/etl-vs-elt"}},l={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-quality"},"Data Quality"),(0,r.kt)("p",null,"Data quality rules are guidelines or criteria that define the standards and requirements for ensuring the accuracy, completeness, consistency, and integrity of data. Here is a list of commonly used data quality rules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Accuracy Rule:")," Data should be accurate and free from errors, ensuring that it reflects the true values or characteristics it represents.\nTechniques to tackle Accuracy related issues:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Can use views to filter out rows that have quality issues or use group by clause."),(0,r.kt)("li",{parentName:"ul"},"Consider to filter out both Null(absence of data) and Blank(empty string)."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Consistency Rule:")," Data should be consistent across different sources and within the same dataset. Consistency rules check for logical and semantic integrity, ensuring that data conforms to predefined standards or business rules.\nTechniques to tackle Consistency related issues:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Consistency issues occurs often due to duplicates. Avoid duplicates in intermediate steps whenever possible."),(0,r.kt)("li",{parentName:"ul"},"Perform count and distinct count to detect duplicate values."),(0,r.kt)("li",{parentName:"ul"},"Perform group by and any group contains more than one row to detect duplicate values."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Completeness Rule:")," Data should be complete, meaning all required fields are populated, and there are no missing values.\nTechniques to tackle Completeness related issues:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Identify any missing values and either filter out or replace them with something reasonable. (Eg. Use NULLIF, COUNTIF, COALESCE etc to filter missing values out of calculations)"),(0,r.kt)("li",{parentName:"ul"},"Implement backfilling (automatic process of detecting data drops and requesting data items to fill in the gaps)"),(0,r.kt)("li",{parentName:"ul"},"When loading data, verify file integrity with checksum values, hash and MD5"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Uniqueness Rule:")," Each record or data instance should be unique within a dataset, ensuring that there are no duplicate entries.\nTechniques to tackle Uniqueness related issues:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Try using surrogate keys and unique constraints to remove duplicate records. "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Validity Rule:")," Data should adhere to predefined formats, data types, and ranges. Validity rules ensure that data is within the expected boundaries and meets the specified criteria.\nTechniques to tackle Validity related issues:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure to check Data type of columns before inserting the data into final table."),(0,r.kt)("li",{parentName:"ul"},"DQ rules to check for variety of sample ranges."),(0,r.kt)("li",{parentName:"ul"},"Unit test cases to check against collective sample records."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Integrity Rule:")," Data should maintain referential integrity, ensuring that relationships between different data elements are preserved and consistent.\nTechniques to tackle Validity related issues:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Primary key constraints, foreign key constraints, unique constraints, and check constraints can be defined to prevent data inconsistencies and violations."),(0,r.kt)("li",{parentName:"ul"},"Conduct data profiling to analyze the quality of data and identify integrity rule violations.")))))}p.isMDXComponent=!0}}]);
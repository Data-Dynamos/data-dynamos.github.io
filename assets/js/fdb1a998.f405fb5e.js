"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[1420],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:7},o="Flattening Json format data \ud83e\ude84 (Optional)",l={unversionedId:"data-transformation/data-build-tool/Exercise-1",id:"data-transformation/data-build-tool/Exercise-1",title:"Flattening Json format data \ud83e\ude84 (Optional)",description:"Create replaceinvalidchars dbt Macro?",source:"@site/docs/data-transformation/data-build-tool/Exercise-1.mdx",sourceDirName:"data-transformation/data-build-tool",slug:"/data-transformation/data-build-tool/Exercise-1",permalink:"/docs/data-transformation/data-build-tool/Exercise-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/data-build-tool/Exercise-1.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Learning Materials \ud83d\udcda",permalink:"/docs/data-transformation/data-build-tool/recommended"},next:{title:"Exercise 1",permalink:"/docs/data-transformation/data-build-tool/Exercise-2"}},s={},c=[{value:"Create <code>replace_invalid_chars</code> dbt Macro?",id:"create-replace_invalid_chars-dbt-macro",level:2},{value:"Example Usage",id:"example-usage",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flattening-json-format-data--optional"},"Flattening Json format data \ud83e\ude84 (Optional)"),(0,r.kt)("h2",{id:"create-replace_invalid_chars-dbt-macro"},"Create ",(0,r.kt)("inlineCode",{parentName:"h2"},"replace_invalid_chars")," dbt Macro?"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"replace_invalid_chars")," dbt macro is designed to replace invalid characters in column names and regulate the column name during the ingestion of flattened JSON data.\nThis macro ensures that the column names are standardized and compatible with your data ingestion processes."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"replace_invalid_chars")," macro takes a column name as input and performs the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It defines a list of invalid characters, including spaces, commas, semicolons, newlines, tabs, equal signs, hyphens, curly braces, parentheses, percentage signs, and dollar signs."),(0,r.kt)("li",{parentName:"ol"},"It also defines a list of characters that can be replaced with underscores."),(0,r.kt)("li",{parentName:"ol"},"It initializes a ",(0,r.kt)("inlineCode",{parentName:"li"},"new_name")," variable with the original column name and creates a namespace ",(0,r.kt)("inlineCode",{parentName:"li"},"ns"),"."),(0,r.kt)("li",{parentName:"ol"},"It iterates over the invalid characters and replaces them with either an underscore or an empty string (depending on the character)."),(0,r.kt)("li",{parentName:"ol"},'If the character is a percentage sign (%), it replaces it with the string "percentage".'),(0,r.kt)("li",{parentName:"ol"},"Finally, it strips any leading or trailing spaces from the modified column name and replaces any remaining spaces with underscores.")),(0,r.kt)("h3",{id:"example-usage"},"Example Usage"),(0,r.kt)("p",null,"Consider the following example SQL query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT  \n    PARSE_JSON(JSON_STRING):"Date"::VARCHAR AS "Date",\n    PARSE_JSON(JSON_STRING):"LandAndOceanAverageTemperature"::VARCHAR AS {{replace_invalid_chars("LandAndOceanAverageTemperature") }}\nFROM my_table\n')),(0,r.kt)("p",null,"In this query, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"replace_invalid_chars")," macro to generate a regulated column name for the ",(0,r.kt)("inlineCode",{parentName:"p"},'"LandAndOceanAverageTemperature"')," field. The macro ensures that the column name is properly formatted and does not contain any invalid characters that could disrupt the data ingestion process."),(0,r.kt)("p",null,"Use replace_invalid_chars macro during the flattening json Process"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"stg_emissions_by_country "),(0,r.kt)("li",{parentName:"ul"},"stg_global_temperatures"),(0,r.kt)("li",{parentName:"ul"},"stg_temperatures_by_country")))}u.isMDXComponent=!0}}]);
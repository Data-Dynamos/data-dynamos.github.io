"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[9627],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:10},o="Exercise 8",s={unversionedId:"data-quality/Exercise-8",id:"data-quality/Exercise-8",title:"Exercise 8",description:"To create singular test to validate uniqueness check on Year column in europebigthree_emissions model",source:"@site/docs/data-quality/Exercise-8.mdx",sourceDirName:"data-quality",slug:"/data-quality/Exercise-8",permalink:"/docs/data-quality/Exercise-8",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-quality/Exercise-8.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Exercise 7",permalink:"/docs/data-quality/Exercise-7"},next:{title:"Exercise 9",permalink:"/docs/data-quality/Exercise-9"}},l={},c=[{value:"To create singular test to validate <code>uniqueness check</code> on <code>Year</code> column in <code>europe_big_three_emissions</code> model",id:"to-create-singular-test-to-validate-uniqueness-check-on-year-column-in-europe_big_three_emissions-model",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exercise-8"},"Exercise 8"),(0,i.kt)("h4",{id:"to-create-singular-test-to-validate-uniqueness-check-on-year-column-in-europe_big_three_emissions-model"},"To create singular test to validate ",(0,i.kt)("inlineCode",{parentName:"h4"},"uniqueness check")," on ",(0,i.kt)("inlineCode",{parentName:"h4"},"Year")," column in ",(0,i.kt)("inlineCode",{parentName:"h4"},"europe_big_three_emissions")," model"),(0,i.kt)("p",null,"Follow the instructions below using DBT:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open your dbt project and navigate to the tests folder.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"assert_unique_check_europe_big_three_emissions.sql")," or any suitable name for the singular test file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the file, define the query to check whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"Year")," column is unique in ",(0,i.kt)("inlineCode",{parentName:"p"},"europe_big_three_emissions")," view.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Specify the view name in the query by referencing the ",(0,i.kt)("inlineCode",{parentName:"p"},"europe_big_three_emissions")," view. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ref()")," function to refer to the view. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM {{ ref('europe_big_three_emissions') }}"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Define the query in such a way that it should result output if ",(0,i.kt)("inlineCode",{parentName:"p"},"year")," column has duplicates.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save the file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the dbt test project to validate the result. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dbt test")," command in your terminal to see if test case is successfully completed."))))}d.isMDXComponent=!0}}]);
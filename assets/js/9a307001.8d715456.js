"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[587],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:3},i="What are dbt models ?",l={unversionedId:"data-transformation/data-build-tool/what-dbt-model",id:"data-transformation/data-build-tool/what-dbt-model",title:"What are dbt models ?",description:"DBT Models, ref Function, source Function, and Models Directory",source:"@site/docs/data-transformation/data-build-tool/what-dbt-model.mdx",sourceDirName:"data-transformation/data-build-tool",slug:"/data-transformation/data-build-tool/what-dbt-model",permalink:"/docs/data-transformation/data-build-tool/what-dbt-model",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/data-build-tool/what-dbt-model.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"DBT Local Setup",permalink:"/docs/data-transformation/data-build-tool/dbt-local-setup"},next:{title:"Materialization",permalink:"/docs/data-transformation/data-build-tool/Materialization"}},d={},s=[],u={toc:s},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-are-dbt-models-"},"What are dbt models ?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DBT Models, ",(0,o.kt)("inlineCode",{parentName:"strong"},"ref")," Function, ",(0,o.kt)("inlineCode",{parentName:"strong"},"source")," Function, and Models Directory")),(0,o.kt)("p",null,"In dbt (Data Build Tool), models are the core building blocks that define the transformations and logic applied to your data. They represent the SQL code that is executed against your data warehouse to perform data transformations,\nsuch as aggregations, joins, filters, and calculations."),(0,o.kt)("p",null,"Here are the key concepts related to dbt models:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DBT Models:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"DBT models are SQL files that define the transformations to be applied to your data."),(0,o.kt)("li",{parentName:"ul"},"Each model corresponds to a specific table or view that will be created in your data warehouse."),(0,o.kt)("li",{parentName:"ul"},"Models can reference other models, allowing you to build a modular and reusable structure for your transformations."),(0,o.kt)("li",{parentName:"ul"},"Models can have dependencies on other models, ensuring that the required data transformations are executed in the correct order.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ref")," Function:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"ref")," function is a dbt-specific function used within models to reference other models."),(0,o.kt)("li",{parentName:"ul"},"It allows you to create relationships between models, enabling dependencies and ensuring proper execution order."),(0,o.kt)("li",{parentName:"ul"},"By using ",(0,o.kt)("inlineCode",{parentName:"li"},"ref"),", you can easily incorporate the output of one model into another, reducing redundancy and improving maintainability.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"source")," Function:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"source")," function is another dbt-specific function used to reference external data sources within a dbt project."),(0,o.kt)("li",{parentName:"ul"},"It allows you to define a source configuration for extracting data from a specific database or file."),(0,o.kt)("li",{parentName:"ul"},"By using ",(0,o.kt)("inlineCode",{parentName:"li"},"source"),", you can load data from external sources into your dbt project and use it in your transformations.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Models Directory:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In dbt, all the models are typically organized within a dedicated directory called the "models" directory.'),(0,o.kt)("li",{parentName:"ul"},"The models directory is a central location where you store all your SQL files representing dbt models."),(0,o.kt)("li",{parentName:"ul"},"By convention, the models directory is located at the root of your dbt project."),(0,o.kt)("li",{parentName:"ul"},"Placing all the models in the models directory helps maintain a structured project layout and makes it easier to locate and manage your transformations.")),(0,o.kt)("p",null,"Overall, dbt models provide a structured approach to data transformations by encapsulating SQL logic and creating relationships between different components of your data pipeline. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," function and ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," function enable modularization and integration of models, allowing you to build complex data pipelines while maintaining code reusability and organization. By following the convention of storing models in the models directory, you can keep your project well-organized and easily navigate through your transformation logic."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/build/models"},"Reference"),"."))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[4297],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},s="SQL: A Quick Review",i={unversionedId:"data-transformation/SQL/sql-quick-review",id:"data-transformation/SQL/sql-quick-review",title:"SQL: A Quick Review",description:"SQL is a programming language used to manage and manipulate relational databases. It is used to create, read, update, and delete data in a database. SQL is widely used in data analysis, business intelligence, and web development. Its syntax is simple and easy to understand, making it a popular choice for data professionals.",source:"@site/docs/data-transformation/SQL/sql-quick-review.mdx",sourceDirName:"data-transformation/SQL",slug:"/data-transformation/SQL/sql-quick-review",permalink:"/docs/data-transformation/SQL/sql-quick-review",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/SQL/sql-quick-review.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/data-transformation/overview"},next:{title:"Advanced SQL: Window and Aggregate Functions",permalink:"/docs/data-transformation/SQL/advance-sql"}},l={},c=[{value:"Join types",id:"join-types",level:2},{value:"INNER JOIN",id:"inner-join",level:3},{value:"LEFT \u201cOUTER\u201d JOIN",id:"left-outer-join",level:3},{value:"RIGHT \u201cOUTER\u201d JOIN",id:"right-outer-join",level:3},{value:"LEFT ANTI SEMI JOIN and LEFT OUTER JOIN (with exclusion)",id:"left-anti-semi-join-and-left-outer-join-with-exclusion",level:3},{value:"CROSS JOIN",id:"cross-join",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sql-a-quick-review"},"SQL: A Quick Review"),(0,r.kt)("h1",{id:"basic-sql"},"Basic SQL"),(0,r.kt)("p",null,"SQL is a programming language used to manage and manipulate relational databases. It is used to create, read, update, and delete data in a database. SQL is widely used in data analysis, business intelligence, and web development. Its syntax is simple and easy to understand, making it a popular choice for data professionals."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sql-joins.png",src:a(4380).Z,width:"1440",height:"836"}))),(0,r.kt)("p",null,"Data cleansing and enrichment processes need to combine, filter, aggregate, and select different sets to answer questions we have. That translates into knowing how to perform different types of JOINs and WHERE clauses to simple SELECT statements. First and foremost, we need to get up to speed with JOINs."),(0,r.kt)("p",null,"Let\u2019s imagine for a minute that we have customers and orders tables, which are related by the ",(0,r.kt)("inlineCode",{parentName:"p"},"customers_id")," field:"),(0,r.kt)("h2",{id:"join-types"},"Join types"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sql-joins.png",src:a(7235).Z,width:"512",height:"362"}))),(0,r.kt)("h3",{id:"inner-join"},"INNER JOIN"),(0,r.kt)("p",null,"You want all orders but also want to know the name of the customer who ordered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.order_id\n     , a.customer_id\n     , b.customer_name\nFROM example.orders AS a\nINNER JOIN example.customers AS b\n   ON a.customer_id = b.customer_id;\n")),(0,r.kt)("h3",{id:"left-outer-join"},"LEFT \u201cOUTER\u201d JOIN"),(0,r.kt)("p",null,"In this case, you want all orders, even if they have a customer associated or not (let\u2019s not dig into data integrity issues here for the sake of simplicity of this example)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT o.order_id\n     , o.customer_id\n     , c.customer_name\nFROM example.orders AS o\nLEFT [OUTER] JOIN example.customers AS c\n   ON o.customer_id = c.customer_id;\n")),(0,r.kt)("p",null,"Some database engines do not require you to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"OUTER"),"."),(0,r.kt)("h3",{id:"right-outer-join"},"RIGHT \u201cOUTER\u201d JOIN"),(0,r.kt)("p",null,"All customers with or without any orders."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT o.order_id\n     , o.customer_id\n     , c.customer_name\nFROM example.orders AS o\nRIGHT [OUTER] JOIN example.customers AS c\n   ON o.customer_id = c.customer_id;\n")),(0,r.kt)("p",null,"Order is important for LEFT and RIGHT join. This query will bring us all ",(0,r.kt)("inlineCode",{parentName:"p"},"example.customers")," rows and whatever matches with ",(0,r.kt)("inlineCode",{parentName:"p"},"example.orders"),"."),(0,r.kt)("h3",{id:"left-anti-semi-join-and-left-outer-join-with-exclusion"},"LEFT ANTI SEMI JOIN and LEFT OUTER JOIN (with exclusion)"),(0,r.kt)("p",null,"Let\u2019s say you want all customers who haven\u2019t ordered anything yet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT c.customer_id\n     , c.customer_name\nFROM example.customers AS c\nWHERE NOT EXISTS (SELECT o.customer_id\n                  FROM example.orders AS o\n                  WHERE c.customer_id=o.customer_id);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT c.customer_id\n     , c.customer_name\nFROM example.customers AS c\nLEFT [OUTER] JOIN example.orders AS o\n   ON c.customer_id = o.customer_id\nWHERE o.customer_id IS NULL;\n")),(0,r.kt)("p",null,"Always do performance tests on your queries and subqueries. Join performance depends on table structure, indexes, and generated query plans."),(0,r.kt)("h3",{id:"cross-join"},"CROSS JOIN"),(0,r.kt)("p",null,"Cross join returns the Cartesian product of both tables, meaning it will bring all possible combinations between all the elements of both sets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT c.customer_id\n    , c.customer_name\n    , o.order_id\nFROM example.orders AS o\nCROSS JOIN example.customers AS c;\n")),(0,r.kt)("p",null,"There are other ways to combine datasets, but both query parts need to have the same structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UNION"),(0,r.kt)("li",{parentName:"ul"},"UNION ALL"),(0,r.kt)("li",{parentName:"ul"},"EXCEPT"),(0,r.kt)("li",{parentName:"ul"},"INTERSECT")),(0,r.kt)("p",null,"If you want to change granularity levels on your data and also summarize it, go ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL_window_function"},"here")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sql/relational-databases/window-functions/quickstart-window-functions-by-example?view=sql-server-ver15"},"here")," to start your learning path."),(0,r.kt)("p",null,"Many core concepts can be learned from websites like ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/sql/default.asp"},"W3C"),". If you want to challenge yourself with practical exercises, you can take a look ",(0,r.kt)("a",{parentName:"p",href:"https://pgexercises.com/"},"here")," too."))}p.isMDXComponent=!0},7235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sql-joins-257fdb1eae13bf18ba0e44baeae38b2b.png"},4380:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sql-meme-b7d664a9f05fa2b055d1799ed7dda758.jpeg"}}]);
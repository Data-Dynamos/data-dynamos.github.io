"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[4297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},s="SQL: A Quick Review",i={unversionedId:"data-transformation/SQL/sql-quick-review",id:"data-transformation/SQL/sql-quick-review",title:"SQL: A Quick Review",description:"SQL is a programming language used to manage and manipulate relational databases. It is used to create, read, update, and delete data in a database. SQL is widely used in data analysis, business intelligence, and web development. Its syntax is simple and easy to understand, making it a popular choice for data professionals.",source:"@site/docs/data-transformation/SQL/sql-quick-review.mdx",sourceDirName:"data-transformation/SQL",slug:"/data-transformation/SQL/sql-quick-review",permalink:"/docs/data-transformation/SQL/sql-quick-review",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-transformation/SQL/sql-quick-review.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Ingestion Using Snowpipe \u2744\ufe0f",permalink:"/docs/data-ingestion/data_ingestion"},next:{title:"Advanced SQL: Window and Aggregate Functions",permalink:"/docs/data-transformation/SQL/advance-sql"}},l={},d=[{value:"Creating Tables",id:"creating-tables",level:3},{value:"Creating Views",id:"creating-views",level:3},{value:"Reserved &amp; Limited Keywords",id:"reserved--limited-keywords",level:2},{value:"Join types",id:"join-types",level:2},{value:"INNER JOIN",id:"inner-join",level:3},{value:"LEFT \u201cOUTER\u201d JOIN",id:"left-outer-join",level:3},{value:"RIGHT \u201cOUTER\u201d JOIN",id:"right-outer-join",level:3},{value:"LEFT ANTI SEMI JOIN and LEFT OUTER JOIN (with exclusion)",id:"left-anti-semi-join-and-left-outer-join-with-exclusion",level:3},{value:"CROSS JOIN",id:"cross-join",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sql-a-quick-review"},"SQL: A Quick Review"),(0,r.kt)("h1",{id:"basic-sql"},"Basic SQL"),(0,r.kt)("p",null,"SQL is a programming language used to manage and manipulate relational databases. It is used to create, read, update, and delete data in a database. SQL is widely used in data analysis, business intelligence, and web development. Its syntax is simple and easy to understand, making it a popular choice for data professionals."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sql-joins.png",src:n(4380).Z,width:"1440",height:"836"}))),(0,r.kt)("h3",{id:"creating-tables"},"Creating Tables"),(0,r.kt)("p",null,"To create a table in Snowflake, use the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name (\n  column1 data_type,\n  column2 data_type,\n  ...\n);\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE customers (\n  customer_id INT,\n  customer_name VARCHAR,\n  email VARCHAR,\n  phone_number VARCHAR\n);\n\nCREATE TABLE orders (\n  order_id INT,\n  customer_id INT,\n  order_date DATE,\n  total_amount DECIMAL(10, 2)\n);\n")),(0,r.kt)("h3",{id:"creating-views"},"Creating Views"),(0,r.kt)("p",null,"To create a view in Snowflake, use the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW view_name AS\nSELECT column1, column2, ...\nFROM table_name\nWHERE condition;\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE VIEW order_details AS\nSELECT o.order_id,\n       o.order_date,\n       c.customer_name,\n       c.email\nFROM orders AS o\nINNER JOIN customers AS c\n   ON o.customer_id = c.customer_id;\n")),(0,r.kt)("p",null,"Note: Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"view_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"column1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"column2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"condition")," with the appropriate names and conditions for your use case."),(0,r.kt)("h2",{id:"reserved--limited-keywords"},"Reserved & Limited Keywords"),(0,r.kt)("p",null,"Snowflake SQL reserves all ANSI keywords (with the exception of type keywords such as CHAR, DATE, DECIMAL, etc.), as well as some additional keywords (ASC, DESC, MINUS, etc.) that are reserved by other popular databases. Additionally, Snowflake reserves keywords REGEXP and RLIKE (which function like the ANSI reserved keyword LIKE) and SOME (which is a synonym for the ANSI reserved keyword ANY)."),(0,r.kt)("p",null,"To avoid parsing ambiguities, Snowflake SQL also prohibits the use of keywords such as LEFT, OUTER, JOIN, etc. as table names or aliases in the FROM list, and the use of keywords such as TRUE, FALSE, CASE, etc. as column references in scalar expressions."),(0,r.kt)("p",null,"eg. ACCOUNT,BETWEEN,SAMPLE,TABLE,WHENEVER "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/reserved-keywords"},"Referrence Link")),(0,r.kt)("h2",{id:"join-types"},"Join types"),(0,r.kt)("p",null,"Data cleansing and enrichment processes need to combine, filter, aggregate, and select different sets to answer questions we have. That translates into knowing how to perform different types of JOINs and WHERE clauses to simple SELECT statements. First and foremost, we need to get up to speed with JOINs."),(0,r.kt)("p",null,"Let\u2019s imagine for a minute that we have customers and orders tables, which are related by the ",(0,r.kt)("inlineCode",{parentName:"p"},"customers_id")," field:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sql-joins.png",src:n(7235).Z,width:"512",height:"362"}))),(0,r.kt)("h3",{id:"inner-join"},"INNER JOIN"),(0,r.kt)("p",null,"You want all orders but also want to know the name of the customer who ordered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.order_id\n     , a.customer_id\n     , b.customer_name\nFROM example.orders AS a\nINNER JOIN example.customers AS b\n   ON a.customer_id = b.customer_id;\n")),(0,r.kt)("h3",{id:"left-outer-join"},"LEFT \u201cOUTER\u201d JOIN"),(0,r.kt)("p",null,"In this case, you want all orders, even if they have a customer associated or not (let\u2019s not dig into data integrity issues here for the sake of simplicity of this example)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT o.order_id\n     , o.customer_id\n     , c.customer_name\nFROM example.orders AS o\nLEFT [OUTER] JOIN example.customers AS c\n   ON o.customer_id = c.customer_id;\n")),(0,r.kt)("p",null,"Some database engines do not require you to specify ",(0,r.kt)("inlineCode",{parentName:"p"},"OUTER"),"."),(0,r.kt)("h3",{id:"right-outer-join"},"RIGHT \u201cOUTER\u201d JOIN"),(0,r.kt)("p",null,"All customers with or without any orders."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT o.order_id\n     , o.customer_id\n     , c.customer_name\nFROM example.orders AS o\nRIGHT [OUTER] JOIN example.customers AS c\n   ON o.customer_id = c.customer_id;\n")),(0,r.kt)("p",null,"Order is important for LEFT and RIGHT join. This query will bring us all ",(0,r.kt)("inlineCode",{parentName:"p"},"example.customers")," rows and whatever matches with ",(0,r.kt)("inlineCode",{parentName:"p"},"example.orders"),"."),(0,r.kt)("h3",{id:"left-anti-semi-join-and-left-outer-join-with-exclusion"},"LEFT ANTI SEMI JOIN and LEFT OUTER JOIN (with exclusion)"),(0,r.kt)("p",null,"Let\u2019s say you want all customers who haven\u2019t ordered anything yet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT c.customer_id\n     , c.customer_name\nFROM example.customers AS c\nWHERE NOT EXISTS (SELECT o.customer_id\n                  FROM example.orders AS o\n                  WHERE c.customer_id=o.customer_id);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT c.customer_id\n     , c.customer_name\nFROM example.customers AS c\nLEFT [OUTER] JOIN example.orders AS o\n   ON c.customer_id = o.customer_id\nWHERE o.customer_id IS NULL;\n")),(0,r.kt)("p",null,"Always do performance tests on your queries and subqueries. Join performance depends on table structure, indexes, and generated query plans."),(0,r.kt)("h3",{id:"cross-join"},"CROSS JOIN"),(0,r.kt)("p",null,"Cross join returns the Cartesian product of both tables, meaning it will bring all possible combinations between all the elements of both sets."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT c.customer_id\n    , c.customer_name\n    , o.order_id\nFROM example.orders AS o\nCROSS JOIN example.customers AS c;\n")),(0,r.kt)("p",null,"There are other ways to combine datasets, but both query parts need to have the same structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UNION"),(0,r.kt)("li",{parentName:"ul"},"UNION ALL"),(0,r.kt)("li",{parentName:"ul"},"EXCEPT"),(0,r.kt)("li",{parentName:"ul"},"INTERSECT")),(0,r.kt)("p",null,"If you want to change granularity levels on your data and also summarize it, go ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SQL_window_function"},"here")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sql/relational-databases/window-functions/quickstart-window-functions-by-example?view=sql-server-ver15"},"here")," to start your learning path."),(0,r.kt)("p",null,"Many core concepts can be learned from websites like ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3schools.com/sql/default.asp"},"W3C"),". If you want to challenge yourself with practical exercises, you can take a look ",(0,r.kt)("a",{parentName:"p",href:"https://pgexercises.com/"},"here")," too."))}p.isMDXComponent=!0},7235:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sql-joins-257fdb1eae13bf18ba0e44baeae38b2b.png"},4380:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sql-meme-b7d664a9f05fa2b055d1799ed7dda758.jpeg"}}]);
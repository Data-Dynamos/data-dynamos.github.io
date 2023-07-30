"use strict";(self.webpackChunkdata_dynamos_github_io=self.webpackChunkdata_dynamos_github_io||[]).push([[8547],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:4},o="Exercise 1",s={unversionedId:"data-visualisation/Streamlit/Exercise-1",id:"data-visualisation/Streamlit/Exercise-1",title:"Exercise 1",description:"Exercise: Total Emissions and Average Temperature for Different Countries",source:"@site/docs/data-visualisation/Streamlit/Exercise-1.mdx",sourceDirName:"data-visualisation/Streamlit",slug:"/data-visualisation/Streamlit/Exercise-1",permalink:"/docs/data-visualisation/Streamlit/Exercise-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-visualisation/Streamlit/Exercise-1.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Problem Statement \ud83e\udd89",permalink:"/docs/data-visualisation/Streamlit/Problem-statement"},next:{title:"Exercise 2",permalink:"/docs/data-visualisation/Streamlit/Exercise-2"}},l={},c=[{value:"Exercise: Total Emissions and Average Temperature for Different Countries",id:"exercise-total-emissions-and-average-temperature-for-different-countries",level:2},{value:"Problem Description:",id:"problem-description",level:3},{value:"Instructions:",id:"instructions",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exercise-1"},"Exercise 1"),(0,n.kt)("h2",{id:"exercise-total-emissions-and-average-temperature-for-different-countries"},"Exercise: Total Emissions and Average Temperature for Different Countries"),(0,n.kt)("p",null,"In this exercise, we will create visualizations using Streamlit to analyze the total emissions and average temperature for different countries in a specific year. We will display this information using a bar chart for selected countries."),(0,n.kt)("h3",{id:"problem-description"},"Problem Description:"),(0,n.kt)("p",null,"You have been provided with a dataset that contains information about carbon emissions and average temperature for different countries over several years. Your task is to create visualizations that showcase the total emissions for selected countries in a specific year. Additionally, you will create a bar chart to compare the total emissions of these countries."),(0,n.kt)("h3",{id:"instructions"},"Instructions:"),(0,n.kt)("p",null,"Follow the steps below to complete the exercise:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Start by adding a title to your Streamlit app using ",(0,n.kt)("inlineCode",{parentName:"p"},"st.title()"),' and set it to "Total Emissions and Average Temperature for different Countries \ud83e\udded".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a variable named ",(0,n.kt)("inlineCode",{parentName:"p"},"year_options")," and set it to the unique values in the 'YEAR' column of the ",(0,n.kt)("inlineCode",{parentName:"p"},"emission_temperature")," DataFrame using the ",(0,n.kt)("inlineCode",{parentName:"p"},".unique()")," method.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"st.selectbox()")," function to create a dropdown menu for selecting a year. Pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"year_options")," variable as the options and store the selected year in a variable named ",(0,n.kt)("inlineCode",{parentName:"p"},"selected_year"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a variable named ",(0,n.kt)("inlineCode",{parentName:"p"},"selected_countries")," using ",(0,n.kt)("inlineCode",{parentName:"p"},"st.multiselect()")," to allow the user to select multiple countries from a list. Use the 'COUNTRY' column of the ",(0,n.kt)("inlineCode",{parentName:"p"},"emission_temperature")," DataFrame as the options. Provide a unique key, such as 'country A', to the ",(0,n.kt)("inlineCode",{parentName:"p"},"st.multiselect()")," function.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Filter the ",(0,n.kt)("inlineCode",{parentName:"p"},"emission_temperature")," DataFrame to include only the rows where the 'COUNTRY' column matches any of the selected countries and the 'YEAR' column matches the ",(0,n.kt)("inlineCode",{parentName:"p"},"selected_year"),". Store the filtered data in a new DataFrame named ",(0,n.kt)("inlineCode",{parentName:"p"},"filtered_data_bar"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"display_bar_chart()")," function. This function will use Plotly Express to create a horizontal bar chart. Pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"filtered_data_bar")," DataFrame along with the appropriate column names and titles to the function. Adjust the width and height of the chart to ensure proper display. You can also customize the color of the bars by providing a color code.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run your Streamlit app and test the functionality. Select different years and countries, and observe how the total emissions are displayed in the bar chart."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": Make sure you have imported the necessary libraries, established a connection to the database, and retrieved the ",(0,n.kt)("inlineCode",{parentName:"p"},"emission_temperature")," DataFrame before implementing the above steps."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"different-countries.png",src:a(4334).Z,width:"1872",height:"820"})))}m.isMDXComponent=!0},4334:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/different-countries-9a737b69317eab45faa31135b195e17a.png"}}]);
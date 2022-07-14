"use strict";(self.webpackChunkup_docs=self.webpackChunkup_docs||[]).push([[593],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4111:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:1},i="Conventions over configuration",s={unversionedId:"conventions/Default",id:"conventions/Default",title:"Conventions over configuration",description:"As said in the prologue, we have a very opinionated approach of the development.",source:"@site/docs/conventions/Default.md",sourceDirName:"conventions",slug:"/conventions/Default",permalink:"/docs/docs/conventions/Default",draft:!1,editUrl:"https://github.com/uptoolkit/docs/tree/main/docs/docs/conventions/Default.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Conventions",permalink:"/docs/docs/category/conventions"},next:{title:"Database",permalink:"/docs/docs/conventions/database"}},l={},c=[{value:"Which programmation language to choose ?",id:"which-programmation-language-to-choose-",level:2},{value:"Which kind of frameworks to use ?",id:"which-kind-of-frameworks-to-use-",level:2},{value:"Core agnostic packages that you might always need",id:"core-agnostic-packages-that-you-might-always-need",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"conventions-over-configuration"},"Conventions over configuration"),(0,a.kt)("p",null,"As said in the prologue, we have a very opinionated approach of the development."),(0,a.kt)("h2",{id:"which-programmation-language-to-choose-"},"Which programmation language to choose ?"),(0,a.kt)("p",null,"By default and unless you know a programmation language where you feel comfortable you should choose Javascript/Typescript and NodeJS as primary language of choice."),(0,a.kt)("p",null,"Every web developers in any kind of programmation language have to write often in Javascript. "),(0,a.kt)("p",null,"This is of course a suggestion and a matter of taste and use case... "),(0,a.kt)("p",null,"The programmation language is not a religion it would be stupid to say that you have better french, italian, english, german scientists. Please don't be an extremist jerk thinking that a language is better than another... It's a matter of taste and knowledges and you can't judge a book by it's cover and most programmation language have now almost the same functionnalities like typing, interface etc."),(0,a.kt)("p",null,"At the end of the journey, just choose a language where you are comfortable with, you can even compile Python using WebAssembly for the Javascript if you want too."),(0,a.kt)("h2",{id:"which-kind-of-frameworks-to-use-"},"Which kind of frameworks to use ?"),(0,a.kt)("p",null,'For a production ready app, best is to not use a "too exotic framework" unless you have a small side projects where you can afford that. '),(0,a.kt)("p",null,"Most of the time, you will have like 2 majors frameworks in each cat\xe9gories with the most github stars or download. Again, don't overthink here. The most important is that you need to be comfortable with but if you don't know which one. Here are some opinionated go to framework by order of preferences : "),(0,a.kt)("p",null,"Front-end Framework : React, Vue\nFull-stack/Back-end framework : Express.js, Nest.js, Laravel, Django\nUi Kit : Material UI, Ant Design, Bootstrap 5 (avoid it before that!)\nDatabase : MongoDB, MySql/MariaDB, Postgresql\nApi : GraphQL, Rest\nIDE : VsCode, IntelliJ\nCSS : PostCSS, Sass\nCMS: Strapi, Wordpress"),(0,a.kt)("h2",{id:"core-agnostic-packages-that-you-might-always-need"},"Core agnostic packages that you might always need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"axios/fetch : to make call"),(0,a.kt)("li",{parentName:"ul"},"momentjs/date-fns : to handle date"),(0,a.kt)("li",{parentName:"ul"},"qs : query string helper")))}p.isMDXComponent=!0}}]);
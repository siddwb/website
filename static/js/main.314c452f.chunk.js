(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{25:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c(1),i=c(0);const n=Object(a.createContext)(),l=e=>{let{children:t}=e;const[c,s]=Object(a.useState)("light");Object(a.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");s(e.matches?"dark":"light"),e.addEventListener("change",(e=>{s(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(n.Provider,{value:[{themeName:c,toggleTheme:()=>{const e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),s(e)}}],children:t})},r={homepage:"siddhantja.in",title:"JS."},o={name:"Siddhant Jain",role:"Full Stack Developer",description:"I am a Computer Science student at Shri Ramdeobaba College of Engineering and Management, Nagpur. I turn caffeine into code and dreams into websites. I like web development and competitive coding ",resume:"https://drive.google.com/file/d/1KMHNgAdFgoPAKsI-eG11BTwaiGr8kowD/view?usp=sharing",social:{linkedin:"https://www.linkedin.com/in/siddhantjain11/",github:"https://github.com/Siddj01"}},j=[{name:"Project 1",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 2",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"Project 3",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TypeScript","React"],sourceCode:"https://github.com",livePreview:"https://github.com"}],d=["HTML","CSS","JavaScript","Python","React.js","Node.js","Git","Pandas","SQL","Scikit-Learn","Leaflet.js","C++"],b="johnsmith@mail.com";var h=c(13),m=c.n(h),u=c(11),p=c.n(u),O=c(15),x=c.n(O),v=c(14),g=c.n(v);c(25);var f=()=>{const[{themeName:e,toggleTheme:t}]=Object(a.useContext)(n),[c,s]=Object(a.useState)(!1);return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[j.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",className:"link link--nav",children:"Projects"})}):null,d.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",className:"link link--nav",children:"Skills"})}):null,b?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(i.jsx)(p.a,{}):Object(i.jsx)(m.a,{})}),Object(i.jsx)("button",{type:"button",className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(i.jsx)(g.a,{}):Object(i.jsx)(x.a,{})})]})};c(29);var k=()=>{const{homepage:e,title:t}=r;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(f,{})]})},N=c(8),_=c.n(N),S=c(16),w=c.n(S);c(30);var C=()=>{const{name:e,role:t,description:c,resume:s,social:a}=o;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:c&&c}),Object(i.jsxs)("div",{className:"about__contact center",children:[s&&Object(i.jsx)("a",{href:s,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(i.jsxs)(i.Fragment,{children:[a.github&&Object(i.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(_.a,{})}),a.linkedin&&Object(i.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(w.a,{})})]})]})]})},P=c(6),y=c.n(P),A=c(17),E=c.n(A);c(32);var I=e=>{let{project:t}=e;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(i.jsx)("li",{className:"project__stack-item",children:e},y()())))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(_.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(E.a,{})})]})};c(33);var L=()=>j.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(i.jsx)(I,{project:e},y()())))})]}):null;c(34);var T=()=>d.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:d.map((e=>Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},y()())))})]}):null,q=c(18),R=c.n(q);c(35);var J=()=>{const[e,t]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top","aria-label":"Scrolll",children:Object(i.jsx)(R.a,{fontSize:"large"})})}):Object(i.jsx)("div",{})};c(36);var M=()=>b?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(b),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;c(37);var F=()=>Object(i.jsx)("footer",{className:"footer"});c(38);var G=()=>{const[{themeName:e}]=Object(a.useContext)(n);return Object(i.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(i.jsx)(k,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(C,{}),Object(i.jsx)(L,{}),Object(i.jsx)(T,{}),Object(i.jsx)(M,{})]}),Object(i.jsx)(J,{}),Object(i.jsx)(F,{})]})};c(39);Object(s.render)(Object(i.jsx)(l,{children:Object(i.jsx)(G,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.314c452f.chunk.js.map
(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{29:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var s=c(8),i=c(0),a=c(1);const n=Object(i.createContext)(),l=e=>{let{children:t}=e;const[c,s]=Object(i.useState)("light");Object(i.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");s(e.matches?"dark":"light"),e.addEventListener("change",(e=>{s(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(n.Provider,{value:[{themeName:c,toggleTheme:()=>{const e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),s(e)}}],children:t})},r={homepage:"siddhantja.in",title:"SJ"},o={name:"Siddhant Jain",role:"Full Stack Developer",description:"I am a Computer Science student at Shri Ramdeobaba College of Engineering and Management, Nagpur. I turn caffeine into code and dreams into websites. I like web development and competitive coding ",resume:"https://drive.google.com/file/d/1KMHNgAdFgoPAKsI-eG11BTwaiGr8kowD/view?usp=sharing",social:{linkedin:"https://www.linkedin.com/in/siddhantjain11/",github:"https://github.com/Siddj01"}},d=[{name:"Mapping Aquifers",description:"Interactive Map for representation of Indian Aquifers and Wells by using GeoJSON",stack:["Leaflet.js","Mongodb","Javascript"],sourceCode:"https://github.com/siddwb/map_wells",livePreview:"https://siddwb.github.io/map_wells/"},{name:"Portfolio",description:"Simple personalized portfolio deployed on custom domain showcasing my skills, projects, and achievements",stack:["React","CSS","Git"],sourceCode:"https://github.com/siddwb",livePreview:"https://siddhantja.in"},{name:"GlobalSync",description:"A user-friendly web application with features like user profiles, posts, and effective data management.",stack:["React","Node","MySQL"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"FakeDetect",description:"Platform for detection of Fake News using NLP and AIML for both text and images",stack:["Flask","Python","Sci-kit Learn"],sourceCode:"https://github.com",livePreview:"https://github.com"},{name:"WeatherApp",description:"Feature-rich and intuitive application designed to bring users real-time weather updates and forecasts",stack:["Android Studio","Java","XML"],sourceCode:"https://github.com/SiddJ01/Rcoem-Weather/",livePreview:"https://github.com"},{name:"IrisQ",description:"A user-friendly application for biometric identification of Iris.Real-time with efficient authentication process.",stack:["Python","PyQT5","Dlib"],sourceCode:"https://github.com/SiddJ01/MMB2023",livePreview:"https://github.com"}],j=["HTML","CSS","JavaScript","Python","React.js","Node.js","Git","Pandas","SQL","Scikit-Learn","Leaflet.js","C++"],h=["https://media.licdn.com/dms/image/D5622AQFUSVTk2OhZ2w/feedshare-shrink_2048_1536/0/1689582420630?e=1704326400&v=beta&t=tQbSsjK1jDVZufeed3jC2Pu9KEB55vv2jIGqZn_0uKM","https://media.licdn.com/dms/image/C5622AQHTGIkxps8HPA/feedshare-shrink_2048_1536/0/1669652344608?e=1704326400&v=beta&t=LU7q1rWEulvaCKBmXVEEVbLy2I1awMp9Xj6RXxjI414","https://media.licdn.com/dms/image/C5622AQF0fVACUfkE5g/feedshare-shrink_1280/0/1669652344925?e=1704326400&v=beta&t=2LBtEluw9HOEBaMP2eSRGRMi5K1vS_Ey0YW2L07-eZY","https://media.licdn.com/dms/image/C5622AQEmhLdzzt_Rxw/feedshare-shrink_2048_1536/0/1675749595293?e=1704326400&v=beta&t=902RVy81XjhrHxZ41Tcyie-eNkOtg47bEHV51RI1PNA","https://media.licdn.com/dms/image/C5622AQHabJJbv97PEA/feedshare-shrink_2048_1536/0/1661746727385?e=1704326400&v=beta&t=hrQtPEh18HjYUcwJCUhLE41zv3gsYmIdApIfSikkLzQ"],b="siddhantsandeepjain@gmail.com";var m=c(16),u=c.n(m),p=c(14),O=c.n(p),x=c(18),v=c.n(x),f=c(17),g=c.n(f);c(29);var k=()=>{const[{themeName:e,toggleTheme:t}]=Object(i.useContext)(n),[c,s]=Object(i.useState)(!1),l=()=>s(!c);return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[d.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,j.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,b?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(a.jsx)(O.a,{}):Object(a.jsx)(u.a,{})}),Object(a.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(a.jsx)(g.a,{}):Object(a.jsx)(v.a,{})})]})};c(33);var N=()=>{const{homepage:e,title:t}=r;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(k,{})]})},_=c(9),w=c.n(_),S=c(19),C=c.n(S);c(34);var y=()=>{const{name:e,role:t,description:c,resume:s,social:i}=o;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[s&&Object(a.jsx)("a",{href:s,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(w.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(C.a,{})})]})]})]})},P=c(7),I=c.n(P),E=c(20),A=c.n(E);c(35);var L=e=>{let{project:t}=e;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(a.jsx)("li",{className:"project__stack-item",children:e},I()())))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(w.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})};c(36);var M=()=>d.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:d.map((e=>Object(a.jsx)(L,{project:e},I()())))})]}):null;c(37);var J=()=>j.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:j.map((e=>Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())))})]}):null,R=c(21),H=c.n(R);c(38);var Q=()=>{const[e,t]=Object(i.useState)(!1);return Object(i.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top","aria-label":"Scrolll",children:Object(a.jsx)(H.a,{fontSize:"large"})})}):Object(a.jsx)("div",{})};c(39);var F=()=>b?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(b),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;c(40);var G=()=>Object(a.jsx)("footer",{className:"footer"}),z=(c(41),c(22));c(43),c(44);var K=()=>Object(a.jsx)("div",{className:"slide-container",children:Object(a.jsxs)(z.a,{children:[Object(a.jsx)("div",{className:"each-slide-effect ",children:Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(h[0],")")},children:Object(a.jsx)("span",{children:" Runners Up Prize from Deputy PM of Singapore and Education Minister Of India"})})}),Object(a.jsx)("div",{className:"each-slide-effect",children:Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(h[1],")")},children:Object(a.jsx)("span",{children:"Winnners Prize from Vice President and Education Minister Of India"})})}),Object(a.jsx)("div",{className:"each-slide-effect",children:Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(h[2],")")},children:Object(a.jsx)("span",{style:{color:"black"},children:" UNESCO-India International Hackathon"})})}),Object(a.jsx)("div",{className:"each-slide-effect",children:Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(h[3],")")},children:Object(a.jsx)("span",{style:{color:"white"},children:"Karnataka Police Hackathon"})})}),Object(a.jsx)("div",{className:"each-slide-effect",children:Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(h[4],")")},children:Object(a.jsx)("span",{style:{color:"white"},children:"Joint Winner Smart India Hackathon"})})})]})});var T=()=>Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{className:"section projects",children:Object(a.jsx)("h2",{className:"section__title",children:"Achievements "})}),Object(a.jsx)(K,{})]});var V=()=>{const[{themeName:e}]=Object(i.useContext)(n);return Object(a.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(a.jsx)(N,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(y,{}),Object(a.jsx)(M,{}),Object(a.jsx)(J,{}),Object(a.jsx)(T,{}),Object(a.jsx)(F,{})]}),Object(a.jsx)(Q,{}),Object(a.jsx)(G,{})]})};c(45);Object(s.render)(Object(a.jsx)(l,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.a048323f.chunk.js.map
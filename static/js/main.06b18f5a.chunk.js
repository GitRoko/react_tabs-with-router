(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(8),n=c.n(s),a=c(5),i=(c(0),c(2)),b=(c(14),c(1)),j=function(){return Object(b.jsx)("h1",{className:"title",children:"Home page"})},l=c(9),r=c.n(l),d=function(e){var t,c,s=e.tabs,n=Object(i.h)().tabId;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h1",{className:"title",children:["Selected tab is\xa0",null===(t=s.find((function(e){return e.id===n})))||void 0===t?void 0:t.title]}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"tabs",children:Object(b.jsx)("ul",{children:s.map((function(e){return Object(b.jsx)("li",{className:r()({"is-active":n===e.id}),children:Object(b.jsx)("a",{href:"#/tabs/".concat(e.id),className:"link",children:e.title})},e.id)}))})}),Object(b.jsx)("div",{className:"tabcontent",children:Object(b.jsx)("p",{children:(null===(c=s.find((function(e){return e.id===n})))||void 0===c?void 0:c.content)||"Please select a tab"})})]})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("nav",{className:"navbar is-warning",children:[Object(b.jsx)(a.b,{to:"/",className:"navbar-item",children:"Home page"}),Object(b.jsx)(a.b,{to:"/tabs",className:"navbar-item",children:"Tabs page"})]})}),Object(b.jsx)("section",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"columns",children:Object(b.jsx)("div",{className:"column",children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/",element:Object(b.jsx)(j,{})}),Object(b.jsx)(i.b,{path:"home",element:Object(b.jsx)(i.a,{to:"/"})}),Object(b.jsx)(i.b,{path:"tabs",element:Object(b.jsx)(d,{tabs:o})}),Object(b.jsx)(i.b,{path:"tabs/:tabId",element:Object(b.jsx)(d,{tabs:o})}),Object(b.jsx)(i.b,{path:"*",element:Object(b.jsx)("p",{children:"Page not found"})})]})})})})})]})};n.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.06b18f5a.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),i=n(9),a=(n(0),n(239)),o={id:"billing-transactions",title:"Billing and transactions",sidebar_label:"Account Overview"},c={id:"billing-transactions",title:"Billing and transactions",description:"## Overview",source:"@site/docs/billing-transactions.md",permalink:"/docs/billing-transactions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/billing-transactions.md",sidebar_label:"Account Overview",sidebar:"someSidebar",previous:{title:"Register an Application",permalink:"/docs/applications/register-application"},next:{title:"Change your organisation plan",permalink:"/docs/change_plan"}},l=[{value:"Overview",id:"overview",children:[]},{value:"View transactions",id:"view-transactions",children:[]},{value:"View invoice",id:"view-invoice",children:[]},{value:"Pay invoice",id:"pay-invoice",children:[]},{value:"Withdraw credits",id:"withdraw-credits",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Amphora Data maintains a real time ledger of all Amphora bought and sold. Appropriate subsets of this ledger are displayed to different organisations and forms the basis of monthly invoicing. As all users can both buy and sell Amphoras, your organisations balance may be positive or negative. "),Object(a.b)("p",null,"At the end of the billing period, you may withdraw positive balances and are required to pay negative balances. Users in arrears after 30 days will have their accounts suspended or cancelled."),Object(a.b)("h2",{id:"view-transactions"},"View transactions"),Object(a.b)("p",null,"To view your organisations transactions, go to your organisation page. On the left hand side, click ",Object(a.b)("inlineCode",{parentName:"p"},"Accounts")," and you will be able to explore all your transactions"),Object(a.b)("h2",{id:"view-invoice"},"View invoice"),Object(a.b)("p",null,"Your monthly invoice can be viewed on the organisation page or on a notification email."),Object(a.b)("h2",{id:"pay-invoice"},"Pay invoice"),Object(a.b)("p",null,"Payments must be currently made through bank transfer. We will be deploying an embedded payments system shortly. "),Object(a.b)("h2",{id:"withdraw-credits"},"Withdraw credits"),Object(a.b)("p",null,"You can withdraw credits. Currently request this through ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:billing@amphoradata.com"}),"billing@amphoradata.com")," and this will be processed. We will be deploying an embedded refund system shortly."))}d.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||a;return n?i.a.createElement(m,c({ref:t},s,{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var n,r,l,i=t(0),c=t.n(i),o=t(156),m=t(162),s="https://app.amphoradata.com/Discover",d=[{title:"River flows",imageUrl:"img/water_flow.PNG",description:" Real-time actuals of major rivers in Australia including Murray\n                and Darling. Parameters include water level, temperature,\n                salinity, flow rate and more. Available now for free",link:s+"?"+(n="Real Time",r="Water","Q.OrgId=7b429e6c-2885-49cf-994d-4775ae170d64&Q.Term="+n+"&Q.Labels="+r+"&Q.Take="+(l||100)+"&handler=MapView")},{title:"Yellowstone National Park",imageUrl:"img/yellowstone.png",description:"Real water quality and quantity measurements from the Yellowstone Ecological Research Center.",link:s+"?OrgId=e933a64f-be47-429e-9be1-ab53a5575db8&handler=MapView"},{title:"Groundwater",imageUrl:"img/groundwater-image-source-smh.jpg",description:"    Ground water level and salinity for any location in Australia.\n                Incorporated from 1000s of bore readings in 2019/20. Coming in\n                Spring.\n            "}];function u(){return c.a.createElement(o.a,{title:"Data Catalogue"},c.a.createElement(m.c,{tabs:m.b,heading:"Data Products",subheading:"Get the insights you need in 30 seconds"},c.a.createElement(m.a,{products:d})))}},157:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),r=t.n(n),l=(t(49),function(e){return r.a.createElement("div",{className:"buttons"},e.children)})},162:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return f})),t.d(a,"c",(function(){return u}));var n=t(0),r=t.n(n),l=t(153),i=t(158),c=t.n(i),o=(t(49),[{to:"/data/vegetation",name:"Vegetation"},{to:"/data/weather",name:"Weather"},{to:"/data/water",name:"Water"},{to:"/data/soil",name:"Soil"},{to:"/data/economic",name:"Economic"}]),m="undefined"!=typeof window,s=function(e){var a="";return m&&window&&window.location&&window.location.pathname&&(a=window.location.pathname.replace(/\/$/,"")),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c()("row row--no-gutters mt-4 text--center tabs_row")},e.tabs.map((function(e){return r.a.createElement("div",{key:e.to,className:"col"},r.a.createElement(l.a,{className:"font_medium_bold text--black",to:e.to},r.a.createElement("div",{className:c()("buttons_tab",e.to===a&&"tab_active")},e.name)))}))),e.children)},d=t(157),u=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-12"},r.a.createElement("div",{className:"col col--8"},r.a.createElement("div",{className:"font_large_caps"},e.heading),r.a.createElement("div",{className:"font_large"},e.subheading)),r.a.createElement("div",{className:"col col--4"},e.button||r.a.createElement(l.a,{to:"https://identity.amphoradata.com/Register"},r.a.createElement(d.a,null,"Get Data")))),r.a.createElement(s,{tabs:e.tabs}),e.children))},g=t(1),w=t(155),f=(t(51),function(e){var a=e.products;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,a&&a.length&&r.a.createElement("section",{className:"data-products"},r.a.createElement("div",{className:"container"},a.map((function(e,a){return r.a.createElement(p,Object(g.a)({key:a},e))}))))))});function p(e){var a=e.imageUrl,t=e.title,n=e.description,l=e.link,i=Object(w.a)(a);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},i&&r.a.createElement("div",{className:"text--center",style:{paddingLeft:"30px",paddingRight:"30px"}},r.a.createElement("img",{src:i,alt:t}))),r.a.createElement("div",{className:"col"},r.a.createElement("h3",{className:"font_large"},t),r.a.createElement("p",{className:"font_medium"},n),l&&r.a.createElement("a",{target:"_blank",href:l},"View Data")))}}}]);
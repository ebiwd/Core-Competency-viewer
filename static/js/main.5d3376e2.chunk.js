(this.webpackJsonpkrc=this.webpackJsonpkrc||[]).push([[0],{17:function(e,t,n){e.exports={Inactive:"header_Inactive__X8Ywc",Tab:"header_Tab__26ppv"}},21:function(e,t,n){e.exports={LowerSpace:"training-resources_LowerSpace__s8ZO5",RightSpace:"training-resources_RightSpace__2bq2a"}},40:function(e,t,n){e.exports={Heading:"domain-table_Heading__3l_dM"}},41:function(e,t,n){e.exports={FormLook:"filter_FormLook__acSxA"}},42:function(e,t,n){e.exports=n(83)},70:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),l=n.n(c),o=n(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(4),s=n.n(i),u=n(12),m=n(3),p=n(1),d=n(17),f=n.n(d),h=Object(p.g)((function(e){var t=e.location,n=e.history,a=t.pathname.startsWith("/training");return r.a.createElement("header",{className:"page-entry-header"},r.a.createElement("div",null,r.a.createElement("h1",null,"Knowledge Resource Center")),r.a.createElement("h1",{className:"page-entry-title entry-title ".concat(f.a.Tab," ").concat(a?"":f.a.Inactive),onClick:function(){return n.push("/training")}},"Training Resources")," ",r.a.createElement("h1",{className:"page-entry-title entry-title ".concat(f.a.Tab," ").concat(a?f.a.Inactive:""),onClick:function(){return n.push("/competencies")}},"Core Competencies"))})),g=n(11),E=n.n(g),b=(n(70),function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=E.a.interceptors.request.use((function(e){return c((function(e){return e+1})),e})),t=E.a.interceptors.response.use((function(e){return c((function(e){return e>0?e-1:0})),e}),(function(e){return c((function(e){return e>0?e-1:0})),Promise.reject(e)}));return function(){E.a.interceptors.response.eject(t),E.a.interceptors.request.eject(e)}}),[]),r.a.createElement("section",{className:"vf-inlay__content progressbar-slider"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"progressbar-line"}),r.a.createElement("div",{className:"progressbar-progress progressbar-increase"}),r.a.createElement("div",{className:"progressbar-progress progressbar-decrease"})):null)}),v=n(39),y=n.n(v),k=n(40),w=n.n(k),j=[];fetch("https://cms.competency.ebi.ac.uk/api/resources?_format=json").then((function(e){return e.json()})).then((function(e){j=e}));var O=r.a.memo((function(e){var t=e.domains;return r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=e.id,n=e.title,a=e.competencies;return r.a.createElement("span",{key:t},r.a.createElement("div",{className:w.a.Heading},n," "),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("tbody",null,a.map((function(e){var t=e.id,n=e.title,a=e.attributes;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(y.a,{key:t,tabIndex:.1,trigger:n},["Knowledge","Skill","Attitude"].map((function(e){return a[e].length<1?null:r.a.createElement("div",{key:e},e,":",r.a.createElement("ul",null,a[e].map((function(e){return r.a.createElement("li",{key:e},e)}))))})),r.a.createElement("div",null,"Training resources:",r.a.createElement("ul",null,j.map((function(e){return e.competency_profile.filter((function(e,t,n){return n.findIndex((function(t){return t.competency_id===e.competency_id}))===t})).map((function(n){return n.competency_id.toString()===t?r.a.createElement("li",{key:t},r.a.createElement(o.b,{to:"/training/".concat(e.id)},e.title)):null}))})))))))})))))})))})),x=n(18),_=n.n(x),N=n(10);E.a.defaults.baseURL="https://cms.competency.ebi.ac.uk/api/",E.a.interceptors.request.use((function(e){return e.params=Object(N.a)(Object(N.a)({},e.params),{},{_format:"json"}),e}));var S={get:E.a.get,post:E.a.post,delete:E.a.delete,patch:E.a.patch};function C(){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("version_manager");case 2:return t=e.sent,n=t.data.filter((function(e){return"BioExcel"===e.title}))[0],a=n.versions.filter((function(e){return"live"===e.status}))[0],e.abrupt("return",a.number);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("bioexcel/".concat(t));case 2:return n=e.sent,e.abrupt("return",0===n.data.length?[]:I(n.data[0].domains));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){var t=[];return e.forEach((function(e,n){var a=e.nid,r=e.id,c=e.title,l=e.competencies.filter((function(e){return["no","0"].includes(e.archived)})).map((function(e){var t={Knowledge:[],Skill:[],Attitude:[]},n=[];return e.attributes.forEach((function(a){var r=a.title,c=a.type;a.archived;return["no","0"].includes(e.archived)&&t[c].push(r)&&n.push(r.toLowerCase())})),n.push(e.title.toLowerCase()),{id:e.id,title:e.title,attributes:t,allNoCase:n.join("\n")}}));t.push({id:a||r||""+n,title:c,competencies:l})})),t}function B(){return q.apply(this,arguments)}function q(){return(q=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("resources");case 2:return t=e.sent,e.abrupt("return",A(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("resources",{params:{id:t}});case 2:return n=e.sent,a=A([n.data]),r=a.length>0&&a[0].competency_profile.length>0?I(a[0].competency_profile[0].domains||[]):[],e.abrupt("return",{courses:a,domains:r});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return e.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{competency_profile:e.competency_profile.filter((function(e){return[e.framework_label,e.title].includes("BioExcel")})),allNoCase:"".concat(e.title.toLowerCase()," ").concat(e.type.toLowerCase()," ").concat(e.keywords&&e.keywords.toLowerCase())})})).filter((function(e){return"no"===e.archived&&e.competency_profile.length>0}))}var K=Object(p.g)((function(e){var t=e.match,n=Object(a.useState)({course:null,domains:[],found:!0}),c=Object(m.a)(n,2),l=c[0],i=c[1];function s(){i({course:null,domains:[],found:!1})}Object(a.useEffect)((function(){(function(e){return R.apply(this,arguments)})(t.params.course).then((function(e){var t=e.courses,n=e.domains;s(),t.length>0&&i({course:t[0],domains:n,found:!0})})).catch((function(e){return s()}))}),[t.params.course]);var u=l.found,p=l.course,d=l.domains;if(!u)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,r.a.createElement("span",{className:"fas exclamation-triangle"})," Sorry, the requested training resource was not found!"),r.a.createElement(o.b,{to:"/training"},"List of all training resources"));if(null===p)return null;if("yes"===p.archived)return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,r.a.createElement("span",{className:"fas exclamation-triangle"})," Sorry, the requested training resource has expired!"),r.a.createElement(o.b,{to:"/training"},"List of all training resources"));var f=p.title,h=p.description,g=p.target_audience,E=p.learning_outcomes,b=p.trainers,v=p.url,y=p.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,f),h&&_()(h),r.a.createElement("div",null,v&&r.a.createElement("div",null,r.a.createElement("a",{style:{borderBottom:"dashed 1px"},href:v},"External link to the training resource"," ")," ",r.a.createElement("i",{className:"fa fa-chevron-right"})),y&&r.a.createElement("div",null,r.a.createElement("h2",null,"Type of training")," ",y)),g&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Target Audience"),_()(g)),E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Learning Outcomes"),_()(E)),b&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Provider(s)"),_()(b)),p.competency_profile.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Competency profile"),r.a.createElement(O,{domains:d})),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/training"},"List of all training resources"))})),J=n(14),P=n(20),U=r.a.memo((function(){return r.a.createElement("p",null,"The BioExcel knowledge resource center is a repository for computational biomolecular training resources aggregated from BioExcel partners and third party providers. The resources are primarily online based, such as tutorials, online courses and videos but also include face-to-face event. If you know of any useful resources that you would like to share with the community let us know through this online"," ",r.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSfY-GI9sGuhRtMlIJJ1zVZtvD8peM3UnzemjSokUK3yAk0Xtw/viewform?c=0&w=1"},"form"),". The training resources in the Knowledge Resource Center have been tagged with the BioExcel competencies.")})),H=n(41),M=n.n(H),W=r.a.memo((function(e){var t=e.onChange;return r.a.createElement("form",{role:"search",className:"search-form ".concat(M.a.FormLook),onSubmit:function(e){return e.preventDefault()}},r.a.createElement("input",{type:"search",className:"search-field",placeholder:"Filter by keyword",onKeyUp:function(e){return t(e.currentTarget.value.trim().toLowerCase())}}))})),Y=r.a.memo((function(e){var t=e.courses;return t.length<1?null:r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Topics"),r.a.createElement("th",null,"Type"))),r.a.createElement("tbody",null,t.map((function(e){var t=e.id,n=e.title,a=e.keywords,c=e.type;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(o.b,{to:"/training/".concat(t)},n)),r.a.createElement("td",null,a),r.a.createElement("td",null,c))}))))})),z=r.a.memo((function(e){var t=e.options,n=e.onChange,a=e.className;return r.a.createElement("select",{onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return n(e.currentTarget.value)})),className:a},t.map((function(e,t){return r.a.createElement("option",{key:e||"default",value:0===t?"":e},e)})))})),D=n(21),G=n.n(D),X=function(e){var t=e.courses,n=Object(a.useState)(t),c=Object(m.a)(n,2),l=c[0],o=c[1],i=Object(a.useState)(""),s=Object(m.a)(i,2),u=s[0],p=s[1],d=Object(a.useState)([]),f=Object(m.a)(d,2),h=f[0],g=f[1],E=Object(a.useState)(""),b=Object(m.a)(E,2),v=b[0],y=b[1],k=Object(a.useState)([]),w=Object(m.a)(k,2),j=w[0],O=w[1],x=Object(a.useState)(""),_=Object(m.a)(x,2),S=_[0],C=_[1];function L(e){return Object.keys(e.reduce((function(e,t){return Object(N.a)(Object(N.a)({},e),{},Object(P.a)({},t,null))}),{}))}return Object(a.useEffect)((function(){o(t);var e=t.reduce((function(e,t){return t.keywords?[].concat(Object(J.a)(e),Object(J.a)(t.keywords.split(", "))):e}),[]);g(["Topic"].concat(Object(J.a)(L(e))));var n=t.reduce((function(e,t){return[].concat(Object(J.a)(e),[t.type])}),[]);O(["Type"].concat(Object(J.a)(L(n))))}),[t]),Object(a.useEffect)((function(){o(t.filter((function(e){return(e.keywords||"").includes(v)&&e.type.includes(S)&&e.allNoCase.includes(u)})))}),[u,v,S,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement(W,{onChange:p}),r.a.createElement("div",{className:G.a.LowerSpace},r.a.createElement("span",{className:G.a.RightSpace},"Or filter by:"),r.a.createElement(z,{options:h,className:G.a.RightSpace,onChange:y}),r.a.createElement(z,{options:j,onChange:C})),r.a.createElement(Y,{courses:l}))},Z=r.a.memo((function(){return r.a.createElement("p",null,"The BioExcel training programme is based on a competency profile. A competency is an observable ability of any professional, integrating multiple components such as knowledge, skills and behaviours. A competency profile lists and defines all the competencies that an individual might need to fulfil a particular role, or that define specific user groups. Together with our user community we have defined the knowledge and skills that we think are relevant for people working in computational biomolecular research. In total we have defined 31 competencies and they are grouped together in four large categories. You can browse them in the table below, under each competency there is a link to all the training resources that we have identified as relevant.")})),Q=function(e){var t=e.domains,n=e.version,c=Object(a.useState)(t),l=Object(m.a)(c,2),o=l[0],i=l[1];return Object(a.useEffect)((function(){i(t)}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(W,{onChange:function(e){i(t.map((function(t){return Object(N.a)(Object(N.a)({},t),{},{competencies:t.competencies.filter((function(t){return t.allNoCase.includes(e)}))})})).filter((function(e){return e.competencies.length>0})))}}),r.a.createElement(O,{domains:o}),"1.0"!==n?r.a.createElement("a",{href:"https://competency.ebi.ac.uk/framework/bioexcel/".concat(n)},"See previous versions of the BioExcel competency"):null)},V=r.a.memo((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sharedaddy sd-sharing-enabled"},r.a.createElement("div",{className:"robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"},r.a.createElement("h3",{className:"sd-title"},"Share this:"),r.a.createElement("div",{className:"sd-content"},r.a.createElement("ul",null,r.a.createElement("li",{className:"share-linkedin"},r.a.createElement("a",{rel:"nofollow noopener noreferrer","data-shared":"sharing-linkedin-3249",className:"share-linkedin sd-button share-icon",href:"https://bioexcel.eu/equality-and-diversity/?share=linkedin",target:"_blank",title:"Click to share on LinkedIn"},r.a.createElement("span",null,"LinkedIn"))),r.a.createElement("li",{className:"share-twitter"},r.a.createElement("a",{rel:"nofollow noopener noreferrer","data-shared":"sharing-twitter-3249",className:"share-twitter sd-button share-icon",href:"https://bioexcel.eu/equality-and-diversity/?share=twitter",target:"_blank",title:"Click to share on Twitter"},r.a.createElement("span",null,"Twitter"))),r.a.createElement("li",{className:"share-print"},r.a.createElement("a",{rel:"nofollow noopener noreferrer","data-shared":"",className:"share-print sd-button share-icon",href:"https://bioexcel.eu/equality-and-diversity/#print",target:"_blank",title:"Click to print"},r.a.createElement("span",null,"Print"))),r.a.createElement("li",{className:"share-end"}))))),r.a.createElement("div",{className:"sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded",id:"like-post-wrapper-104095998-3249-5d12135808442","data-src":"https://widgets.wp.com/likes/#blog_id=104095998&post_id=3249&origin=bioexcel.eu&obj_id=104095998-3249-5d12135808442","data-name":"like-post-frame-104095998-3249-5d12135808442"},r.a.createElement("h3",{className:"sd-title"},"Like this:"),r.a.createElement("div",{className:"likes-widget-placeholder post-likes-widget-placeholder",style:{height:"55px"}},r.a.createElement("span",{className:"button"},r.a.createElement("span",null,"Like")),r.a.createElement("span",{className:"loading"},"Loading...")),r.a.createElement("span",{className:"sd-text-color"}),r.a.createElement("a",{className:"sd-link-color"})))})),$=function(){var e=Object(a.useState)("1.0"),t=Object(m.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),o=Object(m.a)(l,2),i=o[0],d=o[1],f=Object(a.useState)([]),g=Object(m.a)(f,2),E=g[0],v=g[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return t=e.sent,c(t),e.next=6,T(t);case 6:n=e.sent,d(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Promise.all([e(),t()])}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"entry-content"},r.a.createElement(b,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/training/:course",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(p.b,{path:"/training",render:function(){return r.a.createElement(X,{courses:E})}}),r.a.createElement(p.b,{path:"/competencies",render:function(){return r.a.createElement(Q,{version:n,domains:i})}}),r.a.createElement(p.a,{exact:!0,from:"/",to:"/training"}),r.a.createElement(p.a,{to:"/training"})),r.a.createElement(V,null)))};n(82);l.a.render(r.a.createElement(o.a,{basename:""},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.5d3376e2.chunk.js.map
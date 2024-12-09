"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[9495],{3408:(e,t,a)=>{a.d(t,{A:()=>u});var l=a(96540),n=a(18215),s=a(21312),o=a(17559),i=a(23104),c=a(75062);const r={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var d=a(74848);function u(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,n]=(0,l.useState)(!1),s=(0,l.useRef)(!1),{startScroll:o,cancelScroll:r}=(0,i.gk)();return(0,i.Mq)(((e,a)=>{let{scrollY:l}=e;const o=a?.scrollY;o&&(s.current?s.current=!1:l>=o?(r(),n(!1)):l<t?n(!1):l+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,c.$)((e=>{e.location.hash&&(s.current=!0,n(!1))})),{shown:a,scrollToTop:()=>o(0)}}({threshold:300});return(0,d.jsx)("button",{"aria-label":(0,s.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,n.A)("clean-btn",o.G.common.backToTopButton,r.backToTopButton,e&&r.backToTopButtonShow),type:"button",onClick:t})}},32270:(e,t,a)=>{a.d(t,{A:()=>$});var l=a(96540),n=a(24581),s=a(18215),o=a(6342),i=a(23465),c=a(21312),r=a(85861);const d="collapseSidebarButton_PEFL",u="collapseSidebarButtonIcon_kv0_";var m=a(74848);function h(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,s.A)("button button--secondary button--outline",d),onClick:t,children:(0,m.jsx)(r.A,{className:u})})}var b=a(17559),p=a(65041),x=a(23104),f=a(26972),v=a(89532);const _=Symbol("EmptyContext"),j=l.createContext(_);function k(e){let{children:t}=e;const[a,n]=(0,l.useState)(null),s=(0,l.useMemo)((()=>({expandedItem:a,setExpandedItem:n})),[a]);return(0,m.jsx)(j.Provider,{value:s,children:t})}var A=a(41422),g=a(99169),T=a(28774),N=a(92303);function C(e){let{collapsed:t,categoryLabel:a,onClick:l}=e;return(0,m.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:a}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:a}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:l})}function S(e){let{item:t,onItemClick:a,activePath:n,level:i,index:c,...r}=e;const{items:d,label:u,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:k}}}=(0,o.p)(),S=function(e){const t=(0,N.A)();return(0,l.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,f.Nr)(e):void 0),[e,t])}(t),y=(0,f.w8)(t,n),I=(0,g.ys)(x,n),{collapsed:w,setCollapsed:L}=(0,A.u)({initialState:()=>!!h&&(!y&&t.collapsed)}),{expandedItem:B,setExpandedItem:M}=function(){const e=(0,l.useContext)(j);if(e===_)throw new v.dV("DocSidebarItemsExpandedStateProvider");return e}(),G=function(e){void 0===e&&(e=!w),M(e?null:c),L(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:n}=e;const s=(0,v.ZC)(t);(0,l.useEffect)((()=>{t&&!s&&a&&n(!1)}),[t,s,a,n])}({isActive:y,collapsed:w,updateCollapsed:G}),(0,l.useEffect)((()=>{h&&null!=B&&B!==c&&k&&L(!0)}),[h,B,c,L,k]),(0,m.jsxs)("li",{className:(0,s.A)(b.G.docs.docSidebarItemCategory,b.G.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":w},p),children:[(0,m.jsxs)("div",{className:(0,s.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":I}),children:[(0,m.jsx)(T.A,{className:(0,s.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":y}),onClick:h?e=>{a?.(t),x?G(!1):(e.preventDefault(),G())}:()=>{a?.(t)},"aria-current":I?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!w:void 0,href:h?S??"#":S,...r,children:u}),x&&h&&(0,m.jsx)(C,{collapsed:w,categoryLabel:u,onClick:e=>{e.preventDefault(),G()}})]}),(0,m.jsx)(A.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:w,children:(0,m.jsx)(E,{items:d,tabIndex:w?-1:0,onItemClick:a,activePath:n,level:i+1})})]})}var y=a(16654),I=a(43186);const w="menuExternalLink_NmtK";function L(e){let{item:t,onItemClick:a,activePath:l,level:n,index:o,...i}=e;const{href:c,label:r,className:d,autoAddBaseUrl:u}=t,h=(0,f.w8)(t,l),p=(0,y.A)(c);return(0,m.jsx)("li",{className:(0,s.A)(b.G.docs.docSidebarItemLink,b.G.docs.docSidebarItemLinkLevel(n),"menu__list-item",d),children:(0,m.jsxs)(T.A,{className:(0,s.A)("menu__link",!p&&w,{"menu__link--active":h}),autoAddBaseUrl:u,"aria-current":h?"page":void 0,to:c,...p&&{onClick:a?()=>a(t):void 0},...i,children:[r,!p&&(0,m.jsx)(I.A,{})]})},r)}const B="menuHtmlItem_M9Kj";function M(e){let{item:t,level:a,index:l}=e;const{value:n,defaultStyle:o,className:i}=t;return(0,m.jsx)("li",{className:(0,s.A)(b.G.docs.docSidebarItemLink,b.G.docs.docSidebarItemLinkLevel(a),o&&[B,"menu__list-item"],i),dangerouslySetInnerHTML:{__html:n}},l)}function G(e){let{item:t,...a}=e;switch(t.type){case"category":return(0,m.jsx)(S,{item:t,...a});case"html":return(0,m.jsx)(M,{item:t,...a});default:return(0,m.jsx)(L,{item:t,...a})}}function P(e){let{items:t,...a}=e;const l=(0,f.Y)(t,a.activePath);return(0,m.jsx)(k,{children:l.map(((e,t)=>(0,m.jsx)(G,{item:e,index:t,...a},t)))})}const E=(0,l.memo)(P),H="menu_SIkG",F="menuWithAnnouncementBar_GW3s";function D(e){let{path:t,sidebar:a,className:n}=e;const o=function(){const{isActive:e}=(0,p.M)(),[t,a]=(0,l.useState)(e);return(0,x.Mq)((t=>{let{scrollY:l}=t;e&&a(0===l)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,s.A)("menu thin-scrollbar",H,o&&F,n),children:(0,m.jsx)("ul",{className:(0,s.A)(b.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(E,{items:a,activePath:t,level:1})})})}const R="sidebar_njMd",U="sidebarWithHideableNavbar_wUlq",W="sidebarHidden_VK0M",Y="sidebarLogo_isFc";function q(e){let{path:t,sidebar:a,onCollapse:l,isHidden:n}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:r}}}=(0,o.p)();return(0,m.jsxs)("div",{className:(0,s.A)(R,c&&U,n&&W),children:[c&&(0,m.jsx)(i.A,{tabIndex:-1,className:Y}),(0,m.jsx)(D,{path:t,sidebar:a}),r&&(0,m.jsx)(h,{onClick:l})]})}const z=l.memo(q);var K=a(75600),O=a(22069);const V=e=>{let{sidebar:t,path:a}=e;const l=(0,O.M)();return(0,m.jsx)("ul",{className:(0,s.A)(b.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(E,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1})})};function X(e){return(0,m.jsx)(K.GX,{component:V,props:e})}const Z=l.memo(X);function $(e){const t=(0,n.l)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[a&&(0,m.jsx)(z,{...e}),l&&(0,m.jsx)(Z,{...e})]})}},85861:(e,t,a)=>{a.d(t,{A:()=>n});a(96540);var l=a(74848);function n(e){return(0,l.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,l.jsxs)("g",{fill:"#7a7a7a",children:[(0,l.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,l.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}},23363:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var l=a(18215),n=a(21312),s=a(51107),o=a(74848);function i(e){let{className:t}=e;return(0,o.jsx)("main",{className:(0,l.A)("container margin-vert--xl",t),children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsx)(s.A,{as:"h1",className:"hero__title",children:(0,o.jsx)(n.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.jsx)("p",{children:(0,o.jsx)(n.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.jsx)("p",{children:(0,o.jsx)(n.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);